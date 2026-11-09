#!/usr/bin/env node
/**
 * Writes one VAST per scenario in the matrix below, all pointing at vpaid-matrix.js.
 *
 * jsDelivr caches a floating ref, so after pushing a change to the creative you want the VASTs
 * pinned to the new commit rather than to `main`:
 *
 *   node generate-matrix-vasts.js $(git rev-parse --short HEAD)
 */

const fs = require('fs');
const path = require('path');

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/antoinezaz/vpaid-example';
const ref = process.argv[2] || 'main';
const VIDEO_URL = `${CDN_BASE}@main/color-cycle.mp4`;
const CLICK_THROUGH_URL = 'https://www.google.com';
const DURATION = '00:00:10';

/**
 * `version` only decides the handshake, which is why it travels in the script URL: the host calls
 * handshakeVersion() before it ever passes AdParameters.
 */
const scenarios = [
  {
    id: 'v1-own-player',
    title: 'VPAID 1.0, own player, getAdRemainingTime()',
    version: 1,
    params: { timeApi: 'methods' }
  },
  {
    id: 'v1-host-player',
    title: 'VPAID 1.0, adopts our videoSlot',
    version: 1,
    params: { timeApi: 'methods', useHostVideoSlot: true }
  },
  {
    id: 'v2-own-player',
    title: 'VPAID 2.0, own player, adRemainingTime property',
    version: 2,
    params: { timeApi: 'properties' }
  },
  {
    id: 'v2-host-player',
    title: 'VPAID 2.0, adopts our videoSlot',
    version: 2,
    params: { timeApi: 'properties', useHostVideoSlot: true }
  },
  {
    id: 'v1-own-player-no-time-events',
    title: 'VPAID 1.0, own player, never fires AdRemainingTimeChange',
    version: 1,
    params: { timeApi: 'methods', emitRemainingTimeChange: false }
  },
  {
    id: 'v2-own-player-methods-only',
    title:
      'VPAID 2.0 handshake but only the 1.0 time methods — the shape htv, ias, dv, dcm and moat actually ship',
    version: 2,
    params: { timeApi: 'methods', emitDurationChange: false }
  },
  {
    id: 'v2-own-player-no-time-api',
    title: 'VPAID 2.0, own player, no adRemainingTime, no adDuration, no getters',
    version: 2,
    params: { timeApi: 'none', emitDurationChange: false }
  },
  {
    id: 'v2-own-player-frozen-time',
    title: 'VPAID 2.0, own player, adRemainingTime never moves',
    version: 2,
    params: { timeApi: 'properties', remainingTimeMode: 'frozen' }
  },
  {
    id: 'v2-own-player-sentinel-time',
    title: 'VPAID 2.0, own player, adRemainingTime stuck on the -1 and -2 sentinels',
    version: 2,
    params: { timeApi: 'properties', remainingTimeMode: 'sentinel' }
  },
  {
    id: 'v2-own-player-garbage-time',
    title: 'VPAID 2.0, own player, adRemainingTime returns undefined, NaN, strings and Infinity',
    version: 2,
    params: { timeApi: 'properties', remainingTimeMode: 'garbage' }
  },
  {
    id: 'v2-swapped-slot',
    title:
      'VPAID 2.0, own player, and it detaches our videoSlot the way video.js does on iOS',
    version: 2,
    params: { timeApi: 'properties', detachHostVideoSlot: true }
  },
  {
    id: 'v1-own-player-silent',
    title:
      'VPAID 1.0, own player, no time API, no time events, no quartiles, never fires AdVideoComplete',
    version: 1,
    params: {
      timeApi: 'none',
      emitRemainingTimeChange: false,
      emitQuartiles: false,
      emitVideoComplete: false
    }
  }
];

function adParameters(scenario) {
  return JSON.stringify(
    Object.assign(
      {
        scenario: scenario.id,
        videoUrl: VIDEO_URL,
        clickThroughUrl: CLICK_THROUGH_URL,
        skippableAfter: 5
      },
      scenario.params
    ),
    null,
    2
  )
    .split('\n')
    .map(line => `                ${line}`)
    .join('\n');
}

function trackingEvent(scenario, event) {
  return `              <Tracking event="${event}"><![CDATA[ https://localhost/${scenario.id}/${event} ]]></Tracking>`;
}

function vast(scenario) {
  const events = ['start', 'firstQuartile', 'midpoint', 'thirdQuartile', 'complete'];

  return `<VAST version="3.0">
  <Ad>
    <InLine>
      <AdSystem/>
      <AdTitle>
        <![CDATA[ ${scenario.title} ]]>
      </AdTitle>
      <Description>
        <![CDATA[ ADV-23606 playhead matrix: ${scenario.id} ]]>
      </Description>
      <Impression>
        <![CDATA[ https://localhost/${scenario.id}/impression ]]>
      </Impression>
      <Creatives>
        <Creative>
          <Linear>
            <Duration>${DURATION}</Duration>
            <TrackingEvents>
${events.map(event => trackingEvent(scenario, event)).join('\n')}
            </TrackingEvents>
            <VideoClicks>
              <ClickThrough>
                <![CDATA[ ${CLICK_THROUGH_URL} ]]>
              </ClickThrough>
              <ClickTracking>
                <![CDATA[ https://localhost/${scenario.id}/clicktracking ]]>
              </ClickTracking>
            </VideoClicks>
            <MediaFiles>
              <MediaFile delivery="progressive" type="application/javascript" width="640" height="360" apiFramework="VPAID">
                <![CDATA[ ${CDN_BASE}@${ref}/vpaid-matrix.js?vpaidVersion=${scenario.version} ]]>
              </MediaFile>
            </MediaFiles>
            <AdParameters>
              <![CDATA[
${adParameters(scenario)}
              ]]>
            </AdParameters>
          </Linear>
        </Creative>
      </Creatives>
    </InLine>
  </Ad>
</VAST>
`;
}

scenarios.forEach(scenario => {
  const file = path.join(__dirname, `vast-vpaid-${scenario.id}.xml`);
  fs.writeFileSync(file, vast(scenario));
  // eslint-disable-next-line no-console
  console.log(`wrote ${path.basename(file)}`);
});
