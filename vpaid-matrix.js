/**
 * Parameterised VPAID ad unit used to exercise a host player against the full range of creative
 * behaviours, from fully compliant down to units that ignore most of the protocol.
 *
 * The VPAID version has to be decided before AdParameters exist, because the host calls
 * handshakeVersion() on the instance returned by getVPAIDAd() and only passes AdParameters later,
 * at initAd(). It therefore comes from the script URL:
 *
 *   <MediaFile>https://.../vpaid-matrix.js?vpaidVersion=1</MediaFile>
 *
 * Everything else comes from AdParameters. See README.md for the scenario table.
 *
 * AdParameters keys:
 *   scenario              string  label prefixed to every console line
 *   videoUrl              string  required
 *   clickThroughUrl       string
 *   skippableAfter        number  seconds, 0 disables
 *   useHostVideoSlot      bool    adopt environmentVars.videoSlot instead of building our own
 *   timeApi               enum    'properties' | 'methods' | 'both' | 'none'
 *   remainingTimeMode     enum    'accurate' | 'frozen' | 'sentinel' | 'garbage'
 *   emitRemainingTimeChange  bool
 *   emitDurationChange       bool  v2 only, ignored on v1
 *   emitQuartiles            bool
 *   emitVideoComplete        bool
 */

(function() {
  var SCRIPT_NAME = 'vpaid-matrix.js';
  var GARBAGE_VALUES = [undefined, NaN, 'not a number', null, Infinity];

  function findOwnScript() {
    if (document.currentScript) return document.currentScript;

    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
      if (scripts[i].src && scripts[i].src.indexOf(SCRIPT_NAME) !== -1) {
        return scripts[i];
      }
    }
    return null;
  }

  function readVersionFromUrl() {
    var script = findOwnScript();
    var src = (script && script.src) || '';
    var match = src.match(/[?&]vpaidVersion=([^&]+)/);

    return match && String(match[1]).indexOf('1') === 0 ? 1 : 2;
  }

  var VERSION = readVersionFromUrl();

  function VpaidMatrixAdUnit() {
    this.version_ = VERSION;
    this.slot_ = null;
    this.videoTag_ = null;
    this.ownsVideoTag_ = true;
    this.button_ = null;
    this.closeButton_ = null;
    this.params_ = {};
    this.listeners_ = {};
    this.width_ = 0;
    this.height_ = 0;
    this.isSkippable_ = false;
    this.loaded_ = false;
    this.started_ = false;
    this.stopped_ = false;
    this.garbageIndex_ = 0;
    this.lastRemainingTime_ = -1;
    this.quartilesFired_ = {
      firstQuartile: false,
      midpoint: false,
      thirdQuartile: false
    };

    // skipAd arrived with VPAID 2.0. Leaving it undefined on a v1 unit is what a strict v1
    // creative looks like, and it exercises the host's guard around the call.
    if (this.version_ === 2) {
      this.skipAd = function() {
        if (!this.isSkippable_) return;
        this.trigger_('AdSkipped');
        this.stopAd();
      };
    }
  }

  VpaidMatrixAdUnit.prototype.handshakeVersion = function() {
    return this.version_ === 1 ? '1.0' : '2.0';
  };

  VpaidMatrixAdUnit.prototype.initAd = function(
    width,
    height,
    viewMode,
    desiredBitrate,
    creativeData,
    environmentVars
  ) {
    this.slot_ = environmentVars && environmentVars.slot;
    this.width_ = width || 0;
    this.height_ = height || 0;

    if (!this.slot_) {
      this.trigger_('AdError', 'Missing VPAID slot.');
      return;
    }

    try {
      this.params_ = JSON.parse(creativeData.AdParameters);
    } catch (error) {
      this.trigger_('AdError', 'Error parsing AdParameters.');
      return;
    }

    if (!this.params_.videoUrl) {
      this.trigger_('AdError', 'Video URL not found in AdParameters.');
      return;
    }

    this.applyTimeApi_();
    this.log_(
      'initAd version=' +
        this.handshakeVersion() +
        ' timeApi=' +
        this.timeApi_() +
        ' remainingTimeMode=' +
        this.remainingTimeMode_() +
        ' useHostVideoSlot=' +
        !!this.params_.useHostVideoSlot
    );

    this.slot_.style.position = 'relative';
    if (!this.slot_.offsetWidth && this.width_) {
      this.slot_.style.width = this.width_ + 'px';
    }
    if (!this.slot_.offsetHeight && this.height_) {
      this.slot_.style.height = this.height_ + 'px';
    }

    this.setUpVideoTag_(environmentVars);
    this.slot_.appendChild(this.websiteButton_());
    this.slot_.appendChild(this.createCloseButton_());

    this.videoTag_.addEventListener('loadedmetadata', this.markLoaded_.bind(this));
    this.videoTag_.addEventListener('ended', this.finish_.bind(this));
    this.videoTag_.addEventListener('timeupdate', this.onTime_.bind(this));
    this.videoTag_.addEventListener(
      'error',
      this.trigger_.bind(this, 'AdError', 'Video failed to load.')
    );
    this.videoTag_.load();
  };

  /**
   * Either adopt the slot the host handed us, which is what a compliant creative does and what
   * keeps the host's own <video> authoritative, or build a player of our own inside the slot and
   * leave the host element source-less.
   */
  VpaidMatrixAdUnit.prototype.setUpVideoTag_ = function(environmentVars) {
    var hostSlot = environmentVars && environmentVars.videoSlot;

    if (this.params_.useHostVideoSlot && hostSlot) {
      this.videoTag_ = hostSlot;
      this.ownsVideoTag_ = false;
    } else {
      this.videoTag_ = document.createElement('video');
      this.ownsVideoTag_ = true;
    }

    this.videoTag_.src = this.params_.videoUrl;
    this.videoTag_.muted = true;
    this.videoTag_.defaultMuted = true;
    this.videoTag_.playsInline = true;
    this.videoTag_.setAttribute('muted', '');
    this.videoTag_.setAttribute('playsinline', '');
    this.videoTag_.setAttribute('webkit-playsinline', '');
    this.videoTag_.preload = 'auto';

    if (this.ownsVideoTag_) {
      this.videoTag_.style.width = '100%';
      this.videoTag_.style.height = '100%';
      this.videoTag_.style.display = 'block';
      this.videoTag_.style.objectFit = 'cover';
      this.slot_.appendChild(this.videoTag_);
    }
  };

  /**
   * VPAID 1.0 exposes the playhead through getAdRemainingTime() / getAdDuration(); 2.0 moved it to
   * the adRemainingTime / adDuration properties. Real creatives are inconsistent about which they
   * ship, and some ship neither, so every combination is reachable here.
   */
  VpaidMatrixAdUnit.prototype.applyTimeApi_ = function() {
    var api = this.timeApi_();
    var self = this;

    if (api === 'methods' || api === 'both') {
      this.getAdRemainingTime = function() {
        return self.remainingTime_();
      };
      this.getAdDuration = function() {
        return self.duration_();
      };
    }

    if (api === 'properties' || api === 'both') {
      Object.defineProperty(this, 'adRemainingTime', {
        configurable: true,
        get: function() {
          return self.remainingTime_();
        }
      });
      Object.defineProperty(this, 'adDuration', {
        configurable: true,
        get: function() {
          return self.duration_();
        }
      });
    }
  };

  VpaidMatrixAdUnit.prototype.timeApi_ = function() {
    return this.params_.timeApi || 'properties';
  };

  VpaidMatrixAdUnit.prototype.remainingTimeMode_ = function() {
    return this.params_.remainingTimeMode || 'accurate';
  };

  VpaidMatrixAdUnit.prototype.remainingTime_ = function() {
    var mode = this.remainingTimeMode_();

    if (mode === 'sentinel') return this.started_ ? -2 : -1;
    if (mode === 'garbage') {
      var value = GARBAGE_VALUES[this.garbageIndex_ % GARBAGE_VALUES.length];
      this.garbageIndex_ += 1;
      return value;
    }

    var duration = this.realDuration_();
    if (duration === null) return -1;

    // 'frozen' is the pathological case the spec allows but no sane player handles: a unit that
    // keeps reporting the same remaining time for the whole ad.
    if (mode === 'frozen') return duration;

    return Math.max(0, duration - this.videoTag_.currentTime);
  };

  VpaidMatrixAdUnit.prototype.duration_ = function() {
    var mode = this.remainingTimeMode_();

    if (mode === 'sentinel' || mode === 'garbage') return -2;

    var duration = this.realDuration_();
    return duration === null ? -1 : duration;
  };

  VpaidMatrixAdUnit.prototype.realDuration_ = function() {
    if (!this.videoTag_ || !isFinite(this.videoTag_.duration)) return null;
    return this.videoTag_.duration;
  };

  VpaidMatrixAdUnit.prototype.startAd = function() {
    if (!this.videoTag_ || this.stopped_) return;

    var play = this.videoTag_.play();
    if (!play || !play.then) {
      this.markStarted_();
      return;
    }

    play
      .then(this.markStarted_.bind(this))
      .catch(this.trigger_.bind(this, 'AdError', 'Video failed to start.'));
  };

  VpaidMatrixAdUnit.prototype.stopAd = function() {
    if (this.stopped_) return;
    this.stopped_ = true;

    if (this.videoTag_) {
      this.videoTag_.pause();
      // Only tear down an element we created. Removing the host's videoSlot would break the
      // player itself, which is not the behaviour we want to reproduce.
      if (this.ownsVideoTag_ && this.videoTag_.parentNode) {
        this.videoTag_.parentNode.removeChild(this.videoTag_);
      }
      this.videoTag_ = null;
    }

    this.removeNode_(this.button_);
    this.button_ = null;
    this.removeNode_(this.closeButton_);
    this.closeButton_ = null;

    this.trigger_('AdStopped');
  };

  VpaidMatrixAdUnit.prototype.pauseAd = function() {
    if (this.videoTag_) this.videoTag_.pause();
    this.trigger_('AdPaused');
  };

  VpaidMatrixAdUnit.prototype.resumeAd = function() {
    if (this.videoTag_) this.videoTag_.play();
    this.trigger_('AdPlaying');
  };

  VpaidMatrixAdUnit.prototype.setAdVolume = function(volume) {
    if (this.videoTag_) this.videoTag_.volume = volume;
    this.trigger_('AdVolumeChange');
  };

  VpaidMatrixAdUnit.prototype.getAdVolume = function() {
    return this.videoTag_ ? this.videoTag_.volume : 0;
  };

  VpaidMatrixAdUnit.prototype.getAdWidth = function() {
    return (this.slot_ && this.slot_.offsetWidth) || this.width_;
  };

  VpaidMatrixAdUnit.prototype.getAdHeight = function() {
    return (this.slot_ && this.slot_.offsetHeight) || this.height_;
  };

  VpaidMatrixAdUnit.prototype.getAdLinear = function() {
    return true;
  };

  VpaidMatrixAdUnit.prototype.getAdExpanded = function() {
    return false;
  };

  VpaidMatrixAdUnit.prototype.getAdSkippableState = function() {
    return this.isSkippable_;
  };

  VpaidMatrixAdUnit.prototype.getAdIcons = function() {
    return false;
  };

  VpaidMatrixAdUnit.prototype.resizeAd = function(width, height) {
    this.width_ = width || this.width_;
    this.height_ = height || this.height_;
    if (!this.slot_) return;
    if (this.width_) this.slot_.style.width = this.width_ + 'px';
    if (this.height_) this.slot_.style.height = this.height_ + 'px';
  };

  VpaidMatrixAdUnit.prototype.expandAd = function() {};

  VpaidMatrixAdUnit.prototype.collapseAd = function() {};

  VpaidMatrixAdUnit.prototype.subscribe = function(callback, eventName, scope) {
    if (!eventName || !callback) return;
    var list = this.listeners_[eventName] || (this.listeners_[eventName] = []);
    list.push({ callback: callback, scope: scope });
  };

  VpaidMatrixAdUnit.prototype.unsubscribe = function(callback, eventName) {
    var list = this.listeners_[eventName];
    if (!list) return;
    this.listeners_[eventName] = list.filter(function(listener) {
      return listener.callback !== callback;
    });
  };

  VpaidMatrixAdUnit.prototype.markLoaded_ = function() {
    if (this.loaded_) return;
    this.loaded_ = true;

    if (this.version_ === 2 && this.params_.emitDurationChange !== false) {
      this.trigger_('AdDurationChange');
    }
    this.trigger_('AdLoaded');
  };

  VpaidMatrixAdUnit.prototype.markStarted_ = function() {
    if (this.started_) return;
    this.started_ = true;
    this.trigger_('AdStarted');
    this.trigger_('AdImpression');
    this.trigger_('AdVideoStart');
  };

  VpaidMatrixAdUnit.prototype.finish_ = function() {
    if (this.stopped_) return;
    if (this.params_.emitVideoComplete !== false) {
      this.trigger_('AdVideoComplete');
    }
    this.stopAd();
  };

  VpaidMatrixAdUnit.prototype.onTime_ = function() {
    var duration = this.realDuration_();
    if (duration === null || duration <= 0) return;

    var currentTime = this.videoTag_.currentTime;
    var skippableAfter = this.params_.skippableAfter;

    if (skippableAfter > 0 && currentTime >= skippableAfter && !this.isSkippable_) {
      this.isSkippable_ = true;
      if (this.version_ === 2) this.trigger_('AdSkippableStateChange');
    }

    if (this.params_.emitQuartiles !== false) {
      var progress = currentTime / duration;
      if (progress >= 0.25 && !this.quartilesFired_.firstQuartile) {
        this.quartilesFired_.firstQuartile = true;
        this.trigger_('AdVideoFirstQuartile');
      }
      if (progress >= 0.5 && !this.quartilesFired_.midpoint) {
        this.quartilesFired_.midpoint = true;
        this.trigger_('AdVideoMidpoint');
      }
      if (progress >= 0.75 && !this.quartilesFired_.thirdQuartile) {
        this.quartilesFired_.thirdQuartile = true;
        this.trigger_('AdVideoThirdQuartile');
      }
    }

    if (this.params_.emitRemainingTimeChange === false) return;

    var remaining = Math.round(duration - currentTime);
    if (remaining !== this.lastRemainingTime_) {
      this.lastRemainingTime_ = remaining;
      this.trigger_('AdRemainingTimeChange');
    }
  };

  VpaidMatrixAdUnit.prototype.websiteButton_ = function() {
    var button = this.styledButton_('Website', 'Open the website');
    button.style.right = '8px';
    button.style.bottom = '8px';
    button.style.padding = '4px 8px';
    button.style.font = '600 12px/1 sans-serif';
    button.addEventListener('click', this.onWebsiteClick_.bind(this));
    this.button_ = button;
    return button;
  };

  VpaidMatrixAdUnit.prototype.createCloseButton_ = function() {
    var button = this.styledButton_('\u00d7', 'Close the ad');
    button.style.top = '50%';
    button.style.left = '8px';
    button.style.transform = 'translateY(-50%)';
    button.style.width = '28px';
    button.style.height = '28px';
    button.style.padding = '0';
    button.style.font = '600 18px/1 sans-serif';
    button.addEventListener('click', this.onCloseClick_.bind(this));
    this.closeButton_ = button;
    return button;
  };

  VpaidMatrixAdUnit.prototype.styledButton_ = function(label, ariaLabel) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.setAttribute('aria-label', ariaLabel);
    button.style.position = 'absolute';
    button.style.zIndex = '2';
    button.style.border = '0';
    button.style.borderRadius = '4px';
    button.style.background = '#111111';
    button.style.color = '#ffffff';
    button.style.cursor = 'pointer';
    return button;
  };

  VpaidMatrixAdUnit.prototype.onWebsiteClick_ = function(event) {
    event.preventDefault();
    event.stopPropagation();

    var url = this.params_.clickThroughUrl || '';
    this.trigger_('AdClickThru', {
      url: url,
      id: 'website_button',
      playerHandles: false
    });
    if (url) window.open(url, '_blank', 'noopener');
  };

  VpaidMatrixAdUnit.prototype.onCloseClick_ = function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.trigger_('AdUserClose');
    this.stopAd();
  };

  VpaidMatrixAdUnit.prototype.removeNode_ = function(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
  };

  VpaidMatrixAdUnit.prototype.trigger_ = function(eventName, data) {
    this.log_(data === undefined ? eventName : eventName + ' ' + JSON.stringify(data));

    var list = this.listeners_[eventName] || [];
    list.forEach(function(listener) {
      listener.callback.call(listener.scope || null, data);
    });
  };

  VpaidMatrixAdUnit.prototype.log_ = function(message) {
    var at = Math.round(performance.now());
    var scenario = this.params_.scenario || 'vpaid-matrix';
    // eslint-disable-next-line no-console
    console.log('[' + scenario + '] ' + at + 'ms ' + message);
  };

  window.getVPAIDAd = function() {
    return new VpaidMatrixAdUnit();
  };
})();
