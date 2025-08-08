/**
 * VPAIDCreative_V2_Class.js
 * An ad unit compliant with VPAID 2.0, written using ES6 Class syntax.
 * Key changes for v2.0 include: handshakeVersion, full skip support, getAdIcons.
 */
class VPAIDCreative {
  constructor() {
    // VPAID properties
    this.slot_ = null;
    this.videoTag = null;
    this.parameters_ = {};
    this.events_ = {};

    // VPAID 2.0 specific state
    this.isSkippable_ = false;

    // Tracking state
    this.quartilesFired_ = {
      firstQuartile: false,
      midpoint: false,
      thirdQuartile: false
    };
    this.lastRemainingTime_ = -1;
  }

  //===========================================================
  // VPAID 2.0 REQUIRED METHODS
  //===========================================================

  /**
   * VPAID 2.0 ADDITION: The first method called by the player.
   * Establishes a contract on the VPAID version between the player and the ad.
   * @param {string} playerVPAIDVersion The VPAID version supported by the player.
   * @returns {string} The VPAID version supported by the ad.
   */
  handshakeVersion(playerVPAIDVersion) {
    console.log(
      `VPAID: Player supports version ${playerVPAIDVersion}. Ad supports 2.0.`
    );
    // The ad must return a version string that it supports.
    return '2.0';
  }

  /**
   * Called by the player to initialize the ad.
   */
  initAd(
    width,
    height,
    viewMode,
    desiredBitrate,
    creativeData,
    environmentVars
  ) {
    this.slot_ = environmentVars.slot;

    try {
      this.parameters_ = JSON.parse(creativeData.AdParameters);
    } catch (e) {
      this.triggerEvent_('AdError', { message: 'Error parsing AdParameters.' });
      return;
    }

    if (!this.parameters_.videoUrl) {
      this.triggerEvent_('AdError', {
        message: 'Video URL not found in AdParameters.'
      });
      return;
    }

    this.videoTag = document.createElement('video');
    this.videoTag.src = this.parameters_.videoUrl;
    this.videoTag.style.width = '100%';
    this.videoTag.style.height = '100%';
    this.videoTag.playsInline = true;
    this.videoTag.muted = true;

    this.slot_.appendChild(this.videoTag);

    this._bindVideoEvents();

    this.triggerEvent_('AdLoaded');
  }

  /**
   * VPAID 2.0 MODIFIED: Handles the full skip logic.
   * Called by the player when the user clicks the player's skip button.
   */
  skipAd() {
    if (this.isSkippable_) {
      console.log('VPAID: Ad was skipped.');
      this.triggerEvent_('AdSkipped');
      // stopAd will handle the cleanup.
      this.stopAd();
    } else {
      console.log('VPAID: skipAd() called but ad is not skippable yet.');
    }
  }

  /**
   * VPAID 2.0 ADDITION: Returns whether the ad is displaying icons.
   * @returns {boolean}
   */
  getAdIcons() {
    // Return true if you are managing custom icons (e.g., AdChoices).
    // False is a safe default.
    return false;
  }

  /**
   * VPAID 2.0 MODIFIED: Informs the player if the ad is currently skippable.
   * @returns {boolean}
   */
  getAdSkippableState() {
    return this.isSkippable_;
  }

  //===========================================================
  // VPAID Public API Methods (Mostly unchanged)
  //===========================================================

  startAd() {
    console.log('VPAID: Starting Ad');
    this.videoTag
      .play()
      .then(() => {
        this.triggerEvent_('AdStarted');
      })
      .catch(e => {
        this.triggerEvent_('AdError', { message: 'Video failed to start.' });
      });
  }

  stopAd() {
    console.log('VPAID: Stopping Ad');
    if (this.videoTag && this.videoTag.parentNode) {
      this.videoTag.pause();
      this.videoTag.parentNode.removeChild(this.videoTag);
      this.videoTag = null;
    }
    this.triggerEvent_('AdStopped');
  }

  // Other standard methods...
  pauseAd() {
    this.videoTag?.pause();
    this.triggerEvent_('AdPaused');
  }
  resumeAd() {
    this.videoTag?.play();
    this.triggerEvent_('AdPlaying');
  }
  getAdRemainingTime() {
    if (!this.videoTag || isNaN(this.videoTag.duration)) return 0;
    return this.videoTag.duration - this.videoTag.currentTime;
  }
  getAdDuration() {
    return this.videoTag?.duration ?? 0;
  }
  setAdVolume(v) {
    if (this.videoTag) this.videoTag.volume = v;
    this.triggerEvent_('AdVolumeChange');
  }
  getAdVolume() {
    return this.videoTag?.volume ?? 0;
  }
  getAdWidth() {
    return this.slot_?.offsetWidth ?? 0;
  }
  getAdHeight() {
    return this.slot_?.offsetHeight ?? 0;
  }
  getAdLinear() {
    return true;
  }
  getAdExpanded() {
    return false;
  }
  resizeAd(w, h, v) {}
  expandAd() {}
  collapseAd() {}

  //===========================================================
  // Event Handling
  //===========================================================

  _bindVideoEvents() {
    // ... (other event listeners remain the same)
    this.videoTag.addEventListener('ended', () =>
      this.triggerEvent_('AdVideoComplete')
    );
    this.videoTag.addEventListener('click', () =>
      this.triggerEvent_('AdClickThru', {
        url: this.parameters_.clickThroughUrl || '',
        id: 'creative_click',
        playerHandles: true
      })
    );
    this.videoTag.addEventListener('mouseover', () =>
      this.triggerEvent_('AdInteraction', { id: 'creative_mouseover' })
    );

    this.videoTag.addEventListener('timeupdate', () => {
      // VPAID 2.0 MODIFIED: Logic for enabling skip.
      const skippableTime = this.parameters_.skippableAfter ?? -1;
      if (
        skippableTime > 0 &&
        this.videoTag.currentTime >= skippableTime &&
        !this.isSkippable_
      ) {
        this.isSkippable_ = true;
        this.triggerEvent_('AdSkippableStateChange'); // Inform the player!
      }

      // ... (quartile and remaining time logic remains the same)
      const progress = this.videoTag.currentTime / this.videoTag.duration;
      if (progress >= 0.25 && !this.quartilesFired_.firstQuartile) {
        this.triggerEvent_('AdVideoFirstQuartile');
        this.quartilesFired_.firstQuartile = true;
      }
      if (progress >= 0.5 && !this.quartilesFired_.midpoint) {
        this.triggerEvent_('AdVideoMidpoint');
        this.quartilesFired_.midpoint = true;
      }
      if (progress >= 0.75 && !this.quartilesFired_.thirdQuartile) {
        this.triggerEvent_('AdVideoThirdQuartile');
        this.quartilesFired_.thirdQuartile = true;
      }
    });
  }

  subscribe(cb, eventName, ctx) {
    if (eventName && cb) this.events_[eventName] = { callback: cb.bind(ctx) };
  }
  unsubscribe(eventName) {
    if (eventName && this.events_[eventName]) delete this.events_[eventName];
  }
  triggerEvent_(eventName, data) {
    if (this.events_[eventName]) this.events_[eventName].callback(data);
  }
}

// Entry point for the VAST player
var getVPAIDAd = function() {
  return new VPAIDCreative();
};
