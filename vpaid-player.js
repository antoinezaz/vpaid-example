class VPAIDCreative {
    constructor() {
        this.slot_ = null
        this.videoTag = null
        this.button_ = null
        this.parameters_ = {}
        this.listeners_ = {}
        this.width_ = 0
        this.height_ = 0
        this.isSkippable_ = false
        this.loaded_ = false
        this.started_ = false
        this.stopped_ = false
        this.quartilesFired_ = {
            firstQuartile: false,
            midpoint: false,
            thirdQuartile: false,
        }
        this.lastRemainingTime_ = -1
    }

    handshakeVersion(playerVPAIDVersion) {
        return String(playerVPAIDVersion).indexOf('1.') === 0 ? '1.0' : '2.0'
    }

    initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
        this.slot_ = environmentVars && environmentVars.slot
        this.width_ = width || 0
        this.height_ = height || 0
        if (!this.slot_) {
            this.trigger_('AdError', 'Missing VPAID slot.')
            return
        }

        try {
            this.parameters_ = JSON.parse(creativeData.AdParameters)
        } catch (error) {
            this.trigger_('AdError', 'Error parsing AdParameters.')
            return
        }
        if (!this.parameters_.videoUrl) {
            this.trigger_('AdError', 'Video URL not found in AdParameters.')
            return
        }

        this.slot_.style.position = 'relative'
        if (!this.slot_.offsetWidth && this.width_) this.slot_.style.width = this.width_ + 'px'
        if (!this.slot_.offsetHeight && this.height_) this.slot_.style.height = this.height_ + 'px'

        this.videoTag = document.createElement('video')
        this.videoTag.src = this.parameters_.videoUrl
        this.videoTag.muted = true
        this.videoTag.defaultMuted = true
        this.videoTag.playsInline = true
        this.videoTag.setAttribute('muted', '')
        this.videoTag.setAttribute('playsinline', '')
        this.videoTag.setAttribute('webkit-playsinline', '')
        this.videoTag.preload = 'auto'
        this.videoTag.style.width = '100%'
        this.videoTag.style.height = '100%'
        this.videoTag.style.display = 'block'
        this.videoTag.style.objectFit = 'cover'
        this.slot_.appendChild(this.videoTag)
        this.slot_.appendChild(this.websiteButton_())
        this.bindVideo_()

        this.videoTag.addEventListener('loadedmetadata', () => this.markLoaded_())
        this.videoTag.addEventListener('error', () => this.trigger_('AdError', 'Video failed to load.'))
        this.videoTag.load()
    }

    startAd() {
        if (!this.videoTag || this.stopped_) return
        const play = this.videoTag.play()
        if (!play || !play.then) {
            this.markStarted_()
            return
        }
        play.then(() => this.markStarted_()).catch(() => this.trigger_('AdError', 'Video failed to start.'))
    }

    stopAd() {
        if (this.stopped_) return
        this.stopped_ = true
        if (this.videoTag) {
            this.videoTag.pause()
            if (this.videoTag.parentNode) this.videoTag.parentNode.removeChild(this.videoTag)
            this.videoTag = null
        }
        if (this.button_ && this.button_.parentNode) this.button_.parentNode.removeChild(this.button_)
        this.button_ = null
        this.trigger_('AdStopped')
    }

    skipAd() {
        if (!this.isSkippable_) return
        this.trigger_('AdSkipped')
        this.stopAd()
    }

    pauseAd() {
        if (this.videoTag) this.videoTag.pause()
        this.trigger_('AdPaused')
    }

    resumeAd() {
        if (this.videoTag) this.videoTag.play()
        this.trigger_('AdPlaying')
    }

    getAdRemainingTime() {
        if (!this.videoTag || !isFinite(this.videoTag.duration)) return -1
        return Math.max(0, this.videoTag.duration - this.videoTag.currentTime)
    }

    getAdDuration() {
        if (!this.videoTag || !isFinite(this.videoTag.duration)) return -1
        return this.videoTag.duration
    }

    setAdVolume(volume) {
        if (this.videoTag) this.videoTag.volume = volume
        this.trigger_('AdVolumeChange')
    }

    getAdVolume() {
        return this.videoTag ? this.videoTag.volume : 0
    }

    getAdWidth() {
        return (this.slot_ && this.slot_.offsetWidth) || this.width_
    }

    getAdHeight() {
        return (this.slot_ && this.slot_.offsetHeight) || this.height_
    }

    getAdLinear() {
        return true
    }

    getAdExpanded() {
        return false
    }

    getAdSkippableState() {
        return this.isSkippable_
    }

    getAdIcons() {
        return false
    }

    resizeAd(width, height) {
        this.width_ = width || this.width_
        this.height_ = height || this.height_
        if (!this.slot_) return
        if (this.width_) this.slot_.style.width = this.width_ + 'px'
        if (this.height_) this.slot_.style.height = this.height_ + 'px'
    }

    expandAd() {}

    collapseAd() {}

    subscribe(callback, eventName, scope) {
        if (!eventName || !callback) return
        const list = this.listeners_[eventName] || (this.listeners_[eventName] = [])
        list.push({ callback: callback, scope: scope })
    }

    unsubscribe(callback, eventName) {
        const list = this.listeners_[eventName]
        if (!list) return
        this.listeners_[eventName] = list.filter((listener) => listener.callback !== callback)
    }

    websiteButton_() {
        const button = document.createElement('button')
        button.type = 'button'
        button.textContent = 'Website'
        button.setAttribute('aria-label', 'Open the website')
        button.style.position = 'absolute'
        button.style.right = '8px'
        button.style.bottom = '8px'
        button.style.zIndex = '2'
        button.style.padding = '4px 8px'
        button.style.border = '0'
        button.style.borderRadius = '4px'
        button.style.background = '#111111'
        button.style.color = '#ffffff'
        button.style.font = '600 12px/1 sans-serif'
        button.style.cursor = 'pointer'
        button.addEventListener('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
            this.openWebsite_()
        })
        this.button_ = button
        return button
    }

    openWebsite_() {
        const url = this.parameters_.clickThroughUrl || ''
        this.trigger_('AdClickThru', { url: url, id: 'website_button', playerHandles: false })
        if (url) window.open(url, '_blank', 'noopener')
    }

    bindVideo_() {
        this.videoTag.addEventListener('ended', () => this.finish_())
        this.videoTag.addEventListener('timeupdate', () => this.onTime_())
    }

    markLoaded_() {
        if (this.loaded_) return
        this.loaded_ = true
        this.trigger_('AdDurationChange')
        this.trigger_('AdLoaded')
    }

    markStarted_() {
        if (this.started_) return
        this.started_ = true
        this.trigger_('AdStarted')
        this.trigger_('AdImpression')
        this.trigger_('AdVideoStart')
    }

    finish_() {
        if (this.stopped_) return
        this.trigger_('AdVideoComplete')
        this.stopAd()
    }

    onTime_() {
        if (!this.videoTag || !isFinite(this.videoTag.duration) || this.videoTag.duration <= 0) return
        const skippableAfter = this.parameters_.skippableAfter
        if (skippableAfter > 0 && this.videoTag.currentTime >= skippableAfter && !this.isSkippable_) {
            this.isSkippable_ = true
            this.trigger_('AdSkippableStateChange')
        }
        const progress = this.videoTag.currentTime / this.videoTag.duration
        if (progress >= 0.25 && !this.quartilesFired_.firstQuartile) {
            this.quartilesFired_.firstQuartile = true
            this.trigger_('AdVideoFirstQuartile')
        }
        if (progress >= 0.5 && !this.quartilesFired_.midpoint) {
            this.quartilesFired_.midpoint = true
            this.trigger_('AdVideoMidpoint')
        }
        if (progress >= 0.75 && !this.quartilesFired_.thirdQuartile) {
            this.quartilesFired_.thirdQuartile = true
            this.trigger_('AdVideoThirdQuartile')
        }
        const remaining = Math.round(this.getAdRemainingTime())
        if (remaining !== this.lastRemainingTime_) {
            this.lastRemainingTime_ = remaining
            this.trigger_('AdRemainingTimeChange')
        }
    }

    trigger_(eventName, data) {
        const at = Math.round(performance.now())
        if (data === undefined) console.log('[vpaid] ' + at + 'ms ' + eventName)
        else console.log('[vpaid] ' + at + 'ms ' + eventName, data)
        const list = this.listeners_[eventName] || []
        list.forEach((listener) => listener.callback.call(listener.scope || null, data))
    }
}

var getVPAIDAd = function () {
    return new VPAIDCreative()
}
