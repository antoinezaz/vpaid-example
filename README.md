# vpaid-example

Test creatives and VAST documents for the Ogury video format.

## Playhead matrix (ADV-23606)

`vpaid-matrix.js` is one parameterised ad unit that can impersonate any point on the compliance
spectrum, from a textbook VPAID unit down to one that ships almost none of the protocol. Each
scenario below has its own VAST, its own `scenario` label in the console, and its own tracking
URL prefix (`https://localhost/<id>/...`) so the network panel stays readable.

Regenerate every VAST after touching the creative, pinning them to the commit you just pushed so
jsDelivr does not serve a stale `main`:

```bash
git push && node generate-matrix-vasts.js $(git rev-parse --short HEAD)
```

### Why the version lives in the script URL

The host calls `handshakeVersion()` on the instance returned by `getVPAIDAd()` and only passes
`AdParameters` later, at `initAd()`. The VPAID version therefore cannot come from `AdParameters`;
it is read from the `?vpaidVersion=` query parameter on the `MediaFile` URL. Every other flag is
an `AdParameters` key.

### The two axes that matter

**Which player runs the video.** VPAID offers the creative our `<video>` through
`environmentVars.videoSlot`. A creative that adopts it (`useHostVideoSlot: true`) leaves our
element authoritative and nothing about the playhead changes. A creative that declines it and
builds its own `<video>` leaves ours source-less, so it never fires `timeupdate` — that is the
case ADV-23606 exists for.

**How the creative reports time.** VPAID 1.0 exposes `getAdRemainingTime()` / `getAdDuration()`
as methods; 2.0 moved them to the `adRemainingTime` / `adDuration` properties. Real creatives are
inconsistent, and some ship neither.

### Scenarios

| VAST | Version | Player | Time API | Remaining time |
| --- | --- | --- | --- | --- |
| `vast-vpaid-v1-own-player.xml` | 1.0 | own | methods | accurate |
| `vast-vpaid-v1-host-player.xml` | 1.0 | our `videoSlot` | methods | accurate |
| `vast-vpaid-v2-own-player.xml` | 2.0 | own | properties | accurate |
| `vast-vpaid-v2-host-player.xml` | 2.0 | our `videoSlot` | properties | accurate |
| `vast-vpaid-v1-own-player-no-time-events.xml` | 1.0 | own | methods | accurate, but `AdRemainingTimeChange` never fires |
| `vast-vpaid-v2-own-player-methods-only.xml` | 2.0 | own | methods only, no properties | accurate |
| `vast-vpaid-v2-own-player-no-time-api.xml` | 2.0 | own | none | — |
| `vast-vpaid-v2-own-player-frozen-time.xml` | 2.0 | own | properties | constant, never moves |
| `vast-vpaid-v2-own-player-sentinel-time.xml` | 2.0 | own | properties | `-1` then `-2` |
| `vast-vpaid-v2-own-player-garbage-time.xml` | 2.0 | own | properties | `undefined`, `NaN`, strings, `Infinity` |
| `vast-vpaid-v2-swapped-slot.xml` | 2.0 | own, and detaches our `videoSlot` | properties | accurate |
| `vast-vpaid-v1-own-player-silent.xml` | 1.0 | own | none | no time events, no quartiles, no `AdVideoComplete` |

### What to expect on a 10-second creative

Two things drive the playhead: the ad unit's own countdown when it is readable and actually
counting down, and a pause-aware wall clock otherwise.

- **`v1-host-player` and `v2-host-player`** must behave exactly as they did before ADV-23606. Our
  `<video>` has a source and advances, so `currentTime` stays authoritative and the clock is
  ignored. If anything fires twice here, the arbitration in `vpaid-fallback.vendor.ts` is wrong.
- **`v2-own-player`** is the good case: the countdown is readable, so quartiles follow the
  creative's real playback and survive buffering.
- **`v1-own-player`, `v2-own-player-methods-only`, `v2-own-player-no-time-api`** all fall back to
  the wall clock, because the playhead currently reads the `adRemainingTime` property and not the
  `getAdRemainingTime()` method. Expect `start` within the first moments and quartiles near 2.5s,
  5s and 7.5s of wall time. The timing is right as long as playback is not interrupted; stall the
  network and the wall clock will run ahead of the picture.
- **`v1-own-player-no-time-events`** should be indistinguishable from `v1-own-player`. The clock
  polls the ad unit every 250 ms rather than subscribing to `AdRemainingTimeChange`, so a creative
  that never fires the event costs us nothing.
- **`v2-own-player-frozen-time`** is the trap: a naive implementation reading a constant remaining
  time would pin elapsed at zero and fire nothing. The clock requires a strictly positive elapsed
  before it trusts the ad unit, so this must fall back to the wall clock and behave like
  `v2-own-player-no-time-api`.
- **`v2-own-player-sentinel-time`** and **`v2-own-player-garbage-time`** must also land on the wall
  clock. Every sample is validated, so no sentinel or non-number ever reaches the playhead.
- **`v2-swapped-slot`** is the one scenario where the host's `<video>` is removed from the page
  rather than merely left empty. It reproduces video.js on iOS, which refuses to move a media
  element and so clones our slot, inserts the clone and drops the original. `video-slot-adoption.ts`
  is supposed to notice within 50 ms and forward `currentTime`, `volume`, `muted` and the media
  events from the clone onto the element we kept. Two things to check: the ad plays, tracks and can
  be closed normally, and the `playheadSource` dimension reports `vpaid-swapped-slot` rather than
  `host-video` — the proxied `currentTime` makes it look like our player otherwise.
- **`v1-own-player-silent`** is the worst case. Nothing but the wall clock, and no
  `AdVideoComplete` to flush the remaining trackers at the end — so `complete` has to come from
  progress crossing the VAST billed duration, not from the creative.

Across all eleven, the invariants are the same: `start` fires within the first seconds instead of
at the end, `ogyOnAdImpression` fires exactly once, the close button appears on its configured
delay, and no tracker fires twice.

## Other files

| File | Purpose |
| --- | --- |
| `vast-green-video.xml` | Plain MP4, no VPAID |
| `vast-omid.xml` | OMID verification |
| `vast-vpaid-player.xml` | Single-purpose own-player creative (`vpaid-player.js`) |
| `vast-vpaid-player-with-mp4.xml` | Same, with an MP4 alongside the VPAID media file |
| `vast-vpaid-htv.xml` | HTV creative |
| `vast-vpaid-ias.xml` | IAS wrapper |
