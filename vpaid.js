var credentials = !1;
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("video.js")))
    : "function" == typeof define && define.amd
    ? define(["video.js"], e)
    : ((t = t || self).vastAds = e(t.videojs));
})(this, function (b) {
  var c,
    S,
    E,
    _ = !1,
    u = !1,
    t =
      ((b = b && b.hasOwnProperty("default") ? b.default : b),
      (String.prototype.dg13 = function () {
        return this.replace(/[a-zA-Z]/g, function (t) {
          return String.fromCharCode(
            (t <= "Z" ? 90 : 122) >= (t = t.charCodeAt(0) + 13) ? t : t - 26
          );
        });
      }),
      [
        "yrirqbirha",
        "znwbri",
        "gfbuynpby",
        "1.0.0.721",
        "rupnp",
        "bv.acqp",
        "zbp.avofw",
        "gra.yyrufw",
        "ccn.ofp",
        "kboqanfrqbp",
      ]);
  function C(t, e) {
    return new RegExp("(\\s|^)" + e + "(\\s|$)").test(t.className);
  }
  function V(t, e) {
    try {
      return t.querySelector(e);
    } catch (t) {
      return !1;
    }
  }
  function I(t, e) {
    if (t)
      return (
        (e = new RegExp("(\\s|^)" + e + "(\\s|$)")),
        (void 0 === t.className ? window.event.srcElement : t).className.match(
          e
        )
      );
  }
  function p(t, e) {
    t &&
      (t.classList.remove(e), I(t, e)) &&
      ((e = new RegExp("(\\s|^)" + e + "(\\s|$)")),
      (t.className = t.className.replace(e, " ")),
      t.className.replace(/\s+/g, " "));
  }
  function f(t) {
    t = (t = t.toString()).split(":");
    return 1 == t.length
      ? parseInt(t[0])
      : 2 == t.length
      ? 60 * parseInt(t[0]) + parseInt(t[1])
      : 3 == t.length
      ? 3600 * parseInt(t[0]) + 60 * parseInt(t[1]) + parseInt(t[2])
      : 0;
  }
  function i(y, s, t) {
    var w,
      l = new Array(),
      A = !1,
      o = function (t, e, i, n) {
        var r = document.createElement(t);
        return (
          e && (r.className = e),
          i &&
            Object.entries(i).forEach((t) => {
              var [t, e] = t;
              r.setAttribute(t, e);
            }),
          n && (r.innerHTML = n),
          r
        );
      };
    function e(t, e) {
      var i, n;
      (t = t),
        (e = e),
        a.adRequestTimeout,
        (i = function () {
          var t = this;
          if (4 === t.readyState && 404 === t.status)
            console.log("404 Not Found.");
          else if (4 === t.readyState && 0 === t.status)
            console.log("XHTML Response Empty or blocked by CORS policy.");
          else if (
            4 === t.readyState &&
            200 === t.status &&
            (4 !== t.readyState || 200 === t.status)
          ) {
            try {
              var e = t.responseXML;
            } catch (t) {
              return void console.log("No XHML response.");
            }
            if (e) {
              "VMAP" !== e.documentElement.localName &&
                ((t = new XMLSerializer()),
                (s[0].tagXML = t.serializeToString(e)),
                d());
              var i,
                n = [];
              for (i in e.documentElement.childNodes) {
                var r = e.documentElement.childNodes[i];
                "AdBreak" == r.localName &&
                  ((r = (function (t) {
                    var e,
                      i = new Object();
                    for (e in ((i.timeOffset = t.getAttribute("timeOffset")),
                    (i.breakType = t.getAttribute("breakType")),
                    (i.breakId = t.getAttribute("breakId")),
                    (i.repeatAfter = t.getAttribute("repeatAfter")),
                    (i.adSource = null),
                    (i.extensions = []),
                    t.childNodes)) {
                      var n = t.childNodes[e];
                      "AdSource" === n.localName &&
                        ((n = (function (t) {
                          var e,
                            i = new Object();
                          for (e in ((i.id = t.getAttribute("id")),
                          (i.allowMultipleAds =
                            t.getAttribute("allowMultipleAds")),
                          (i.followRedirects =
                            t.getAttribute("followRedirects")),
                          (i.vastAdData = null),
                          (i.adTagURI = null),
                          (i.customData = null),
                          t.childNodes)) {
                            var n = t.childNodes[e];
                            switch (n.localName) {
                              case "AdTagURI":
                                (i.adTagURI = {
                                  templateType: n.getAttribute("templateType"),
                                  uri: (n.textContent || n.text || "").trim(),
                                }),
                                  (i.adTagURI = (
                                    n.textContent ||
                                    n.text ||
                                    ""
                                  ).trim());
                                break;
                              case "VASTAdData":
                                for (
                                  i.vastAdData = n.firstChild;
                                  i.vastAdData &&
                                  1 !== this.vastAdData.nodeType;

                                )
                                  this.vastAdData = this.vastAdData.nextSibling;
                                break;
                              case "CustomAdData":
                                i.customData = n;
                            }
                          }
                          return i;
                        })(n)),
                        (i.adSource = n.adTagURI),
                        (i.adId = n.id));
                    }
                    return i;
                  })(r)),
                  n.push(r));
              }
              if (((l = new Array()), 0 < n.length)) {
                for (var o, a = 0; a < n.length; a++)
                  null != !n[a].adSource.uri &&
                    ("start" == (o = n[a].timeOffset) && (o = 0),
                    (o = {
                      tagURL: n[a].adSource,
                      id: n[a].adId,
                      timeOffset: o,
                    }),
                    l.push(o));
                d();
              }
            } else console.log("XHML invalid document.");
          }
        }),
        ((n = new XMLHttpRequest()).onreadystatechange = i),
        n.open("GET", t, !0),
        (n.withCredentials = e),
        (n.timeout = a.adRequestTimeout),
        n.send();
    }
    document.location.hostname.toLowerCase();
    var a,
      k = y,
      T = y.$(".vjs-tech");
    function d() {
      var t, e;
      T.hasAttribute("outstreamvisit") &&
        ((e = ".video-js .vjs-tech{opacity:1!important}"),
        ((t = o("style")).textContent = e =
          (e =
            (e =
              (e +=
                ".vjs-visit-blocker{background:rgba(0, 0, 0, .77);bottom:auto;right:10px!important;left:auto!important;top:10px!important;display:table!important;width:auto!important;height:auto!important;color:#fff!important;padding:4px 6px!important;border-radius:8px;border:solid 2px rgba(255, 255, 255, .8)!important}") +
              ".vjs-visit-blocker:hover{border:solid 2px rgba(255, 255, 255, 1)!important}" +
              ".vjs-visit-block{position:absolute;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);top:45%;left:50%;text-align:center;color:#fff}") +
            ".btn-visit{cursor:pointer;font-size:16px;text-transform:uppercase;background:#383838;display:table;margin-bottom:10px;-webkit-border-radius:50%;border-radius:50%;width:60px;height:60px;line-height:60px;}" +
            ".btn-visit:hover{background:#484848}") +
          ".btn-visit-replay{cursor:pointer;display:table;padding:4px 6px;margin:0 auto;border:solid 1px #999}" +
          ".video-js .vjs-bg-bar{height:0!important}"),
        y.el_.classList.add("vjs-set-visit"),
        y.el_.insertBefore(t, T));
      try {
        T.removeAttribute("poster");
      } catch (t) {}
      0 < l.length && (s = l), (y.adList = new Array());
      for (var i = 0; i < s.length; i++) {
        var n,
          r = s[i];
        r.tagURL &&
          (r.timeOffset
            ? (0 < (n = f(r.timeOffset)) || "end" == r.timeOffset) &&
              r.timeOffset.toString().indexOf("%") < 0 &&
              "end" != r.timeOffset &&
              (r.timeOffset = n)
            : (r.timeOffset = 0),
          (r.used = !1),
          y.adList.push(r)),
          y.paused() || y.ended() || ((_ = !0), g());
      }
      function g() {
        if (!y.isOffline && !k.adPlaying && 0 < y.adList.length)
          for (var t = 0; t < y.adList.length; t++) {
            if (k.adPlaying) return;
            if (0 == y.adList[t].timeOffset && 1 != y.adList[t].used) {
              (k.adPlaying = !0), m(t);
              break;
            }
          }
      }
      function m(t) {
        var i, e;
        b.adinfo &&
          !(i = y.el_.querySelector(".vjs-ainfo")) &&
          (((e = o("style")).innerHTML =
            ".vjs-ainfo{position: absolute;top:10px;left:10px;display:none;opacity:.8;cursor:pointer;height:18px}.vjs-ad-playing .vjs-ainfo{display:inline-block}.vjs-ainfo .vjs-ico-block {height:18px;width:18px;display:inline-block;float:left;filter:drop-shadow(1px 1px 1px #000)}.vjs-ainfo .vjs-label {line-height:18px;float:left;height:18px;transition:all .25s ease;filter:drop-shadow(1px 1px 1px #000);margin-left:5px;max-width:0;font-size:13px;overflow:hidden;display:inline-block;margin-right:5px}.vjs-ainfo:hover .vjs-label {max-width:200px}.vjs-ad-playing .vjs-ainfo-right {right:10px;left:auto;top:auto;bottom:15px}.vjs-ad-playing .vjs-ainfo-right .vjs-ico-block {float:right}"),
          y.el_.appendChild(e),
          setTimeout(function () {
            i = o("div", "vjs-ainfo");
            var t = o("div", "vjs-ico-block"),
              e =
                ((t.innerHTML =
                  '<svg fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" fill="white" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 16V18H11V16H13ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.28 15.21 11.97 14.44 12.64C13.71 13.28 13 13.90 13 15H11C11 13.17 11.94 12.45 12.77 11.82C13.42 11.32 14 10.87 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8Z"></path></svg>'),
                o("div", "vjs-label"));
            (e.innerHTML = y.localize("Information")),
              i.appendChild(t),
              i.appendChild(e),
              y.el_.appendChild(i),
              y.$(".vjs-tech").hasAttribute("outstreamvisit") &&
                "always" === b.outstreamClose &&
                ((i.style.left = "40px"), (i.style.top = "13px")),
              (i.onclick = (t) => {
                y.pause(), window.open(b.adinfo, "_blank");
              });
          }, 100)),
          (w = y.adList[t]),
          (y.adhref = null),
          (k.el_.style.opacity = 1),
          E && (E.getAttribute("style"), E.removeAttribute("style")),
          (y.adList[t].used = !0),
          u && k.trigger("vast.reset"),
          (u = !0),
          y.adList[t].tagXML
            ? ((c = y.adList[t].tagXML),
              k.vastClient({
                playAdAlways: !0,
                autoResize: !0,
                adCancelTimeout: a.adCancelTimeout,
                adTagXML: function (t) {
                  setTimeout(function () {
                    t(null, c);
                  }, 0);
                },
                skipText: k.localize("Skip Ad in"),
                skipButtonText: k.localize("Skip Ad"),
              }))
            : k.vastClient({
                playAdAlways: !0,
                autoResize: !0,
                adCancelTimeout: a.adCancelTimeout,
                adTagUrl: y.adList[t].tagURL,
                skipText: k.localize("Skip Ad in"),
                skipButtonText: k.localize("Skip Ad"),
              }),
          k.trigger("vast.firstPlay");
      }
      (y.resetAd = function () {
        A = !1;
        y.$(".vjs-tech");
        var t = k.el(),
          e = ((k.adPlaying = !1), V(t, ".vjs-big-play-button"));
        p(e, "big-play-hidden"),
          e.removeAttribute("style"),
          (k.adPlaying = !1),
          p(t, "vjs-ad-loading"),
          p(t, "vjs-ad-playing");
      }),
        (y.playVast = function (r) {
          1 == _ &&
            setTimeout(function () {
              if (!k.adPlaying) {
                var t;
                (y.adList = new Array()),
                  Array.isArray(r) ||
                    (r.tagURL && ((t = r), ((r = new Array())[0] = t)));
                for (var e = 0; e < r.length; e++) {
                  var i,
                    n = r[e];
                  n.timeOffset
                    ? ((0 < (i = f(n.timeOffset)) || "end" == n.timeOffset) &&
                        "end" != n.timeOffset &&
                        (n.timeOffset = i),
                      "end" == n.timeOffset &&
                        (n.timeOffset = k.duration() - 0.1))
                    : (n.timeOffset = 0),
                    (n.used = !1),
                    y.adList.push(n),
                    console.log(n.timeOffset);
                }
              }
            }, 100);
        }),
        (y.vastAds.request = function (t, e) {
          (y.adList.length = 0),
            y.vastAds.reset(),
            e
              ? setTimeout(function () {
                  y.vastAds(t, e);
                }, 100)
              : setTimeout(function () {
                  y.vastAds(t);
                }, 100);
        }),
        k.ready(function () {
          var o = k.el(),
            a =
              ((S = V(o, ".vjs-big-play-button")),
              V(o, ".vjs-control-bar"),
              (E = V(o, ".vjs-poster")),
              (k.adPlaying = !1)),
            s = !1,
            l = !1,
            d = !1,
            c = !1,
            u = function () {
              var t;
              0 < k.duration() &&
                0 < k.currentTime() &&
                (0.25 < (t = k.currentTime() / k.duration()) &&
                  1 != a &&
                  ((a = !0),
                  k.trigger("adEvent", { id: w.id, type: "firstQuartile" })),
                0.5 < t &&
                  1 != s &&
                  ((s = !0),
                  k.trigger("adEvent", { id: w.id, type: "midpoint" })),
                0.75 < t) &&
                1 != l &&
                ((l = !0),
                k.trigger("adEvent", { id: w.id, type: "thirdQuatile" }));
            };
          function p() {
            k.adPlaying && k.trigger("adEvent", { id: w.id, type: "pause" });
          }
          function f() {
            k.adPlaying && k.trigger("adEvent", { id: w.id, type: "resume" });
          }
          try {
            k.on("vast.adStart", function () {
              t();
            });
          } catch (t) {}
          try {
            k.on("vpaid.adStart", function () {
              t();
            });
          } catch (t) {}
          function t() {
            var t = S,
              e = "vjs-hidden";
            if (t)
              for (var i = 0, n = (t = t.length ? t : [t]).length; i < n; i++)
                null == I(t[i], e) &&
                  ((t[i].className += " " + e),
                  t[i].className.replace(/\s+/g, " "));
            l = s = a = c = d = !1;
            var r = V(o, ".vast-blocker");
            r &&
              (r.onclick = function () {
                k.trigger("adEvent", { id: w.id, type: "click" });
              }),
              k.trigger("adEvent", { id: w.id, type: "start" }),
              k.off("timeupdate", u),
              k.on("timeupdate", u),
              k.on("pause", p),
              k.off("play", f),
              k.on("play", f);
          }
          try {
            k.on("vast.adSkip", function () {
              i(), k.trigger("adEvent", { id: w.id, type: "skip" });
            });
          } catch (t) {}
          try {
            k.on("vpaid.adSkip", function () {
              i(), k.trigger("adEvent", { id: w.id, type: "skip" });
            });
          } catch (t) {}
          try {
            k.on(vast.adError, function () {
              i(), k.trigger("adEvent", { id: w.id, type: "error" }), n();
            });
          } catch (t) {}
          try {
            k.on(vpaid.adError, function () {
              i(), k.trigger("adEvent", { id: w.id, type: "error" }), n();
            });
          } catch (t) {}
          try {
            k.on("vast.adEnd", function () {
              n();
            });
          } catch (t) {}
          try {
            k.on("vpaid.adEnd", function () {
              n();
            });
          } catch (t) {}
          function i() {
            y.controlBar.el_.classList.remove("vjs-abs-hidden"),
              k.off("timeupdate", u),
              (k.adPlaying = !1),
              k.off("pause", p),
              k.off("play", f);
          }
          function n() {
            i(),
              1 != c &&
                ((c = !0),
                k.trigger("adEvent", { id: w.id, type: "complete" }));
            for (var t = !1, e = 0; e < y.adList.length; e++)
              1 != y.adList[e].used && (t = !0);
            1 != t && 1 != d && (d = !0);
          }
          function r() {
            return (
              k.duration() === 1 / 0 ||
              ("8" === b.browser.IOS_VERSION && 0 === k.duration())
            );
          }
          function h() {
            k.off("play", h), y.$(".vjs-tech").removeAttribute("style");
          }
          function v() {
            if (!r() && !y.isOffline) {
              var t = k.currentTime();
              if (C(o, "vjs-ad-playing"))
                setTimeout(function () {
                  1 != C(o, "vjs-ad-playing") && n();
                }, 1e3);
              else if (1 == _)
                for (var e = 0; e < y.adList.length; e++)
                  if (
                    (y.adList[e].timeOffset || (y.adList[e].timeOffset = 0),
                    "end" !== y.adList[e].timeOffset &&
                      t >= y.adList[e].timeOffset &&
                      1 != y.adList[e].used &&
                      !(0 < y.adList[e].timeOffset && r()))
                  ) {
                    m(e), 0;
                    break;
                  }
            }
          }
          T.hasAttribute("outstream")
            ? ((_ = !0), g())
            : k.one("playing", function () {
                (_ = !0), g();
              }),
            k.on("loadedmetadata", function () {
              if (!A) {
                (A = !0),
                  1 != y.isOffline && 1 != k.adPlaying && r(),
                  0 == y.adList[0].timeOffset &&
                    (y.$(".vjs-tech").style.opacity = 0),
                  k.on("playing", h);
                for (var t = 0; t < y.adList.length; t++) {
                  y.adList.used = !1;
                  var e = y.adList[t].timeOffset,
                    i =
                      (e || (y.adList[t].timeOffset = 0),
                      "end" == e &&
                        (y.adList[t].timeOffset = k.duration() - 0.1),
                      e.toString());
                  -1 < i.indexOf("%") &&
                    0 < (e = parseInt(i)) &&
                    (100 == e
                      ? (y.adList[t].timeOffset = k.duration() - 0.1)
                      : 0 < parseInt(y.duration()) &&
                        (y.adList[t].timeOffset = k.duration() * (e / 100)));
                }
                k.on("timeupdate", v);
              }
            }),
            k.on("ended", function () {
              if (!k.adPlaying) {
                var t = C(o, "vjs-ad-playing");
                if (
                  !t &&
                  1 == _ &&
                  !k.adPlaying &&
                  (k.off("timeupdate", v), 0 < y.playlist.length)
                )
                  try {
                    y.playlist.next();
                  } catch (t) {}
              }
            });
        });
    }
    T.hasAttribute("outstream") && y.muted(!0),
      b.vastkey &&
        (((a = []).autoplay = !0),
        (a.midrollSkip = !1),
        (a.autoReset = !1),
        (a.audio = "on"),
        (a.adRequestTimeout = 3e3),
        (a.adCancelTimeout = 3e3),
        (a.nonlinearRecall = !1),
        (a.muted = !0),
        (a.muteIcon = !0),
        (a.autoClose = !1),
        (a.closeButton = !1),
        (a.withCredentials = !1),
        (a.clickThroughMethod = "blocker"),
        t &&
          (void 0 !== t.clickThroughMethod &&
            (a.clickThroughMethod = t.clickThroughMethod),
          void 0 !== t.closeButton && (a.closeButton = t.closeButton),
          void 0 !== t.autoClose && (a.autoClose = t.autoClose),
          void 0 !== t.muteIcon && (a.muteIcon = t.muteIcon),
          void 0 !== t.muted && (a.muted = t.muted),
          void 0 !== t.midrollSkip && (a.midrollSkip = t.midrollSkip),
          void 0 !== t.autoReset && (a.autoReset = t.autoReset),
          void 0 !== t.audio && "off" === t.audio && (a.audio = "off"),
          void 0 !== t.adCancelTimeout &&
            (a.adCancelTimeout = t.adCancelTimeout),
          void 0 !== t.adRequestTimeout &&
            (a.adRequestTimeout = t.adRequestTimeout),
          void 0 !== t.nonlinearRecall &&
            (a.nonlinearRecall = t.nonlinearRecall),
          void 0 !== t.autoplay) &&
          (a.autoplay = t.autoplay),
        Array.isArray(s) || (s.tagURL && ((t = s), ((s = new Array())[0] = t))),
        (credentials = !1),
        s[0].withCredentials && 1 == s[0].withCredentials && (credentials = !0),
        b.vastkey && e(s[0].tagURL, credentials),
        (y.vastAds.reset = function () {
          1 != _ ||
            k.adPlaying ||
            setTimeout(function () {
              if (0 < y.adList.length)
                for (var t = 0; t < y.adList.length; t++) y.adList[t].used = !1;
            }, 100);
        }));
  }
  function e(t, e) {
    this.ready(function () {
      i(this, t, e);
    });
  }
  for (
    var n = b.registerPlugin || b.plugin,
      r = [
        "length",
        "dg13",
        "",
        "join",
        "reverse",
        "split",
        "indexOf",
        "toLowerCase",
        "hostname",
        "location",
        "vastAds",
        "vastkey",
      ],
      o = 0;
    o < t[r[0]];
    o++
  ) {
    var a = (a = t[o][r[1]]())[r[5]](r[2])[r[4]]()[r[3]](r[2]);
    -1 < document[r[9]][r[8]][r[7]]()[r[6]](a) &&
      (n(r[10], e), (b[r[11]] = !0));
  }
  return e;
}),
  (function n(r, o, a) {
    function s(e, t) {
      if (!o[e]) {
        if (!r[e]) {
          var i = "function" == typeof require && require;
          if (!t && i) return i(e, !0);
          if (l) return l(e, !0);
          throw (
            (((t = new Error("Cannot find module '" + e + "'")).code =
              "MODULE_NOT_FOUND"),
            t)
          );
        }
        (i = o[e] = { exports: {} }),
          r[e][0].call(
            i.exports,
            function (t) {
              return s(r[e][1][t] || t);
            },
            i,
            i.exports,
            n,
            r,
            o,
            a
          );
      }
      return o[e].exports;
    }
    for (
      var l = "function" == typeof require && require, t = 0;
      t < a.length;
      t++
    )
      s(a[t]);
    return s;
  })(
    {
      1: [
        function (t, e, i) {
          "use strict";
          var n = [
            "handshakeVersion",
            "initAd",
            "startAd",
            "stopAd",
            "skipAd",
            "resizeAd",
            "pauseAd",
            "resumeAd",
            "expandAd",
            "collapseAd",
            "subscribe",
            "unsubscribe",
          ];
          function r(t, e, i) {}
          (r.prototype.handshakeVersion = function (t, e) {}),
            (r.prototype.initAd = function (t, e, i, n, r, o, a) {}),
            (r.prototype.startAd = function (t) {}),
            (r.prototype.stopAd = function (t) {}),
            (r.prototype.skipAd = function (t) {}),
            (r.prototype.resizeAd = function (t, e, i, n) {}),
            (r.prototype.pauseAd = function (t) {}),
            (r.prototype.resumeAd = function (t) {}),
            (r.prototype.expandAd = function (t) {}),
            (r.prototype.collapseAd = function (t) {}),
            (r.prototype.subscribe = function (t, e, i) {}),
            (r.prototype.unsubscribe = function (t, e) {}),
            (r.prototype.getAdLinear = function (t) {}),
            (r.prototype.getAdWidth = function (t) {}),
            (r.prototype.getAdHeight = function (t) {}),
            (r.prototype.getAdExpanded = function (t) {}),
            (r.prototype.getAdSkippableState = function (t) {}),
            (r.prototype.getAdRemainingTime = function (t) {}),
            (r.prototype.getAdDuration = function (t) {}),
            (r.prototype.getAdVolume = function (t) {}),
            (r.prototype.getAdCompanions = function (t) {}),
            (r.prototype.getAdIcons = function (t) {}),
            (r.prototype.setAdVolume = function (t, e) {}),
            a(r, "METHODS", n),
            a(r, "GETTERS", [
              "getAdLinear",
              "getAdWidth",
              "getAdHeight",
              "getAdExpanded",
              "getAdSkippableState",
              "getAdRemainingTime",
              "getAdDuration",
              "getAdVolume",
              "getAdCompanions",
              "getAdIcons",
            ]),
            a(r, "SETTERS", ["setAdVolume"]),
            a(r, "EVENTS", [
              "AdLoaded",
              "AdStarted",
              "AdStopped",
              "AdSkipped",
              "AdSkippableStateChange",
              "AdSizeChange",
              "AdLinearChange",
              "AdDurationChange",
              "AdExpandedChange",
              "AdRemainingTimeChange",
              "AdVolumeChange",
              "AdImpression",
              "AdVideoStart",
              "AdVideoFirstQuartile",
              "AdVideoMidpoint",
              "AdVideoThirdQuartile",
              "AdVideoComplete",
              "AdClickThru",
              "AdInteraction",
              "AdUserAcceptInvitation",
              "AdUserMinimize",
              "AdUserClose",
              "AdPaused",
              "AdPlaying",
              "AdLog",
              "AdError",
            ]);
          var o = n.filter(function (t) {
            return -1 === ["skipAd"].indexOf(t);
          });
          function a(t, e, i) {
            Object.defineProperty(t, e, {
              writable: !1,
              configurable: !1,
              value: i,
            });
          }
          a(r, "checkVPAIDInterface", function (e) {
            return o.every(function (t) {
              return "function" == typeof e[t];
            });
          }),
            (e.exports = r);
        },
        {},
      ],
      2: [
        function (t, e, i) {
          "use strict";
          var o = t("./IVPAIDAdUnit"),
            r = t("./subscriber"),
            a = o.checkVPAIDInterface,
            l = t("./utils"),
            s = (o.METHODS, "AdClickThru"),
            d = o.EVENTS.filter(function (t) {
              return t != s;
            });
          function c(t, e, i, n) {
            (this._isValid = a(t)),
              this._isValid &&
                ((this._creative = t),
                (this._el = e),
                (this._videoEl = i),
                (this._iframe = n),
                (this._subscribers = new r()),
                l.setFullSizeStyle(e),
                function () {
                  {
                    var e, i;
                    d.forEach(
                      function (t) {
                        this._creative.subscribe(
                          function (t) {
                            this._subscribers.trigger(
                              t,
                              Array.prototype.slice(arguments, 1)
                            );
                          }.bind(this, t),
                          t
                        );
                      }.bind(this)
                    ),
                      this._creative.subscribe(
                        function (t, e, i) {
                          this._subscribers.triggerSync(s, {
                            url: t,
                            id: e,
                            playerHandles: i,
                          });
                        }.bind(this),
                        s
                      ),
                      this._videoEl &&
                        ((e = this._iframe.contentDocument.documentElement),
                        (i = this._videoEl),
                        e.addEventListener("click", function (t) {
                          t.target === e && i.click();
                        }));
                  }
                }.call(this));
          }
          function u(t, e, i, n) {
            t ? t(i, n) : i && e.trigger("AdError", i);
          }
          ((c.prototype = Object.create(o.prototype)).isValidVPAIDAd =
            function () {
              return this._isValid;
            }),
            o.METHODS.forEach(function (r) {
              -1 === ["subscribe", "unsubscribe", "initAd"].indexOf(r) &&
                (c.prototype[r] = function () {
                  var t = o.prototype[r].length,
                    i = Array.prototype.slice.call(arguments),
                    n = t === i.length ? i.pop() : void 0;
                  setTimeout(
                    function () {
                      var t,
                        e = null;
                      try {
                        t = this._creative[r].apply(this._creative, i);
                      } catch (t) {
                        e = t;
                      }
                      u(n, this._subscribers, e, t);
                    }.bind(this),
                    0
                  );
                });
            }),
            (c.prototype.initAd = function (t, i, n, r, o, a, s) {
              (o = o || {}),
                (a = l.extend(
                  { slot: this._el, videoSlot: this._videoEl },
                  a || {}
                )),
                setTimeout(
                  function () {
                    var e;
                    try {
                      this._creative.initAd(t, i, n, r, o, a);
                    } catch (t) {
                      e = t;
                    }
                    u(s, this._subscribers, e);
                  }.bind(this),
                  0
                );
            }),
            (c.prototype.subscribe = function (t, e, i) {
              this._subscribers.subscribe(e, t, i);
            }),
            (c.prototype.unsubscribe = function (t, e) {
              this._subscribers.unsubscribe(e, t);
            }),
            (c.prototype.on = c.prototype.subscribe),
            (c.prototype.off = c.prototype.unsubscribe),
            o.GETTERS.forEach(function (n) {
              c.prototype[n] = function (i) {
                setTimeout(
                  function () {
                    var t,
                      e = null;
                    try {
                      t = this._creative[n]();
                    } catch (t) {
                      e = t;
                    }
                    u(i, this._subscribers, e, t);
                  }.bind(this),
                  0
                );
              };
            }),
            (c.prototype.setAdVolume = function (i, n) {
              setTimeout(
                function () {
                  var t,
                    e = null;
                  try {
                    this._creative.setAdVolume(i),
                      (t = this._creative.getAdVolume());
                  } catch (t) {
                    e = t;
                  }
                  (e =
                    e || l.validate(t === i, "failed to apply volume: " + i)),
                    u(n, this._subscribers, e, t);
                }.bind(this),
                0
              );
            }),
            (c.prototype._destroy = function () {
              this.stopAd(), this._subscribers.unsubscribeAll();
            }),
            (e.exports = c);
        },
        { "./IVPAIDAdUnit": 1, "./subscriber": 4, "./utils": 5 },
      ],
      3: [
        function (t, e, i) {
          "use strict";
          var o = t("./utils"),
            r = o.unique("vpaidIframe"),
            a = t("./VPAIDAdUnit");
          function n(t, e, i, n) {
            (i = i || {}),
              (this._id = r()),
              (this._destroyed = !1),
              (this._frameContainer = o.createElementInEl(t, "div")),
              (this._videoEl = e),
              (this._vpaidOptions = n || { timeout: 1e4 }),
              (this._templateConfig = {
                template:
                  i.template ||
                  '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0"><div class="ad-element"></div><script type="text/javascript" src="{{iframeURL_JS}}"></script><script type="text/javascript">window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');</script></body></html>',
                extraOptions: i.extraOptions || {},
              });
          }
          function s() {
            l.call(this),
              function () {
                this._adUnit && (this._adUnit.stopAd(), delete this._adUnit);
              }.call(this);
          }
          function l() {
            !function (t) {
              var e = this[t];
              e && (e.remove(), delete this[t]);
            }.call(this, "_frame"),
              d.call(this);
          }
          function d() {
            this._onLoad &&
              (window.removeEventListener("message", this._onLoad),
              o.clearCallbackTimeout(this._onLoad),
              delete this._onLoad);
          }
          function c() {
            return (
              window.location.origin ||
              window.location.protocol +
                "//" +
                window.location.hostname +
                (window.location.port ? ":" + window.location.port : "")
            );
          }
          (n.prototype.destroy = function () {
            this._destroyed || ((this._destroyed = !0), s.call(this));
          }),
            (n.prototype.isDestroyed = function () {
              return this._destroyed;
            }),
            (n.prototype.loadAdUnit = function (t, n) {
              !function () {
                if (this._destroyed)
                  throw new Error("VPAIDHTML5Client already destroyed!");
              }.call(this),
                s.call(this);
              var r = this,
                t = o.createIframeWithContent(
                  this._frameContainer,
                  this._templateConfig.template,
                  o.extend(
                    { iframeURL_JS: t, iframeID: this.getID(), origin: c() },
                    this._templateConfig.extraOptions
                  )
                );
              (this._frame = t),
                (this._onLoad = o.callbackTimeout(
                  this._vpaidOptions.timeout,
                  function (t) {
                    if (t.origin === c()) {
                      var e,
                        i,
                        t = JSON.parse(t.data);
                      if (t.id === r.getID())
                        return (
                          (t = r._frame.contentWindow
                            ? ((e = r._frame.contentWindow.getVPAIDAd),
                              o.validate(
                                "function" == typeof e,
                                "the ad didn't return a function to create an ad"
                              ))
                            : "the iframe is not anymore in the DOM tree") ||
                            ((i =
                              r._frame.contentWindow.document.querySelector(
                                ".ad-element"
                              )),
                            (i = new a(e(), i, r._videoEl, r._frame)).subscribe(
                              "AdStopped",
                              function () {
                                l.call(this), delete this._adUnit;
                              }.bind(r)
                            ),
                            (t = o.validate(
                              i.isValidVPAIDAd(),
                              "the add is not fully complaint with VPAID specification"
                            ))),
                          (r._adUnit = i),
                          d.call(r),
                          n(t, t ? null : i),
                          !0
                        );
                    }
                  }.bind(this),
                  function () {
                    n("timeout", null);
                  }.bind(this)
                )),
                window.addEventListener("message", this._onLoad);
            }),
            (n.prototype.unloadAdUnit = function () {
              s.call(this);
            }),
            (n.prototype.getID = function () {
              return this._id;
            }),
            (e.exports = n);
        },
        { "./VPAIDAdUnit": 2, "./utils": 5 },
      ],
      4: [
        function (t, e, i) {
          "use strict";
          function n() {
            this._subscribers = {};
          }
          (n.prototype.subscribe = function (t, e, i) {
            this.isHandlerAttached(t, e) ||
              this.get(e).push({ handler: t, context: i, eventName: e });
          }),
            (n.prototype.unsubscribe = function (e, t) {
              this._subscribers[t] = this.get(t).filter(function (t) {
                return e !== t.handler;
              });
            }),
            (n.prototype.unsubscribeAll = function () {
              this._subscribers = {};
            }),
            (n.prototype.trigger = function (t, e) {
              var i = this;
              this.get(t)
                .concat(this.get("*"))
                .forEach(function (t) {
                  setTimeout(function () {
                    i.isHandlerAttached(t.handler, t.eventName) &&
                      t.handler.call(t.context, e);
                  }, 0);
                });
            }),
            (n.prototype.triggerSync = function (t, e) {
              this.get(t)
                .concat(this.get("*"))
                .forEach(function (t) {
                  t.handler.call(t.context, e);
                });
            }),
            (n.prototype.get = function (t) {
              return (
                this._subscribers[t] || (this._subscribers[t] = []),
                this._subscribers[t]
              );
            }),
            (n.prototype.isHandlerAttached = function (e, t) {
              return this.get(t).some(function (t) {
                return e === t.handler;
              });
            }),
            (e.exports = n);
        },
        {},
      ],
      5: [
        function (t, e, i) {
          "use strict";
          function o() {}
          var a = {};
          function s(t) {
            var e = a[t];
            e && (clearTimeout(e), delete a[t]);
          }
          function n(t, e, i) {
            var n = document.createElement("iframe");
            return (
              (n.src = e || "about:blank"),
              (n.marginWidth = "0"),
              (n.marginHeight = "0"),
              (n.frameBorder = "0"),
              (n.width = "100%"),
              (n.height = "100%"),
              r(n),
              i && (n.style.zIndex = i),
              n.setAttribute("SCROLLING", "NO"),
              (t.innerHTML = ""),
              t.appendChild(n),
              n
            );
          }
          function r(t) {
            (t.style.position = "absolute"),
              (t.style.left = "0"),
              (t.style.top = "0"),
              (t.style.margin = "0px"),
              (t.style.padding = "0px"),
              (t.style.border = "none"),
              (t.style.width = "100%"),
              (t.style.height = "100%");
          }
          function l(i, n) {
            return (
              Object.keys(n).forEach(function (t) {
                var e = n[t];
                i = i.replace(new RegExp("{{" + t + "}}", "g"), e);
              }),
              i
            );
          }
          function d(t, e) {
            t = t.contentWindow && t.contentWindow.document;
            return !!t && (t.write(e), !0);
          }
          e.exports = {
            noop: o,
            validate: function (t, e) {
              return t ? null : new Error(e);
            },
            clearCallbackTimeout: s,
            callbackTimeout: function (t, e, i) {
              var n = setTimeout(function () {
                  (e = o), delete n[r], i();
                }, t),
                r = function () {
                  e.apply(this, arguments) && s(r);
                };
              return (a[r] = n), r;
            },
            createElementInEl: function (t, e, i) {
              return (
                (e = document.createElement(e)),
                i && (e.id = i),
                t.appendChild(e),
                e
              );
            },
            createIframeWithContent: function (t, e, i) {
              if (d((t = n(t, null, i.zIndex)), l(e, i))) return t;
            },
            createIframe: n,
            setFullSizeStyle: r,
            simpleTemplate: l,
            setIframeContent: d,
            extend: function (e, i) {
              return (
                Object.keys(i).forEach(function (t) {
                  e[t] = i[t];
                }),
                e
              );
            },
            unique: function (t) {
              var e = -1;
              return function () {
                return t + "_" + ++e;
              };
            },
          };
        },
        {},
      ],
      6: [
        function (t, e, i) {
          "use strict";
          var r = t("../vast/VASTError"),
            o = t("../../utils/async"),
            a = t("../../utils/playerUtils"),
            s = t("../../utils/utilityFunctions");
          function n(t) {
            if (!(this instanceof n)) return new n(t);
            (this.player = t),
              (this.icons = []),
              (this.controlBarTimer = null),
              this.cbHidden;
          }
          (n.prototype.renderIcons = function (e, i) {
            var n = this;
            if (((i = i || s.noop), !Array.isArray(e) || 0 === e.length))
              return i(new r("On IconIntegrator, missing required icon array"));
            o.waterfall(
              [
                function (t) {
                  t(null, e);
                },
                this._createIcons.bind(this),
                this._setupEvents.bind(this),
                this._renderIcons.bind(this),
              ],
              function (t, e) {
                t && e && n._trackError(t, e), i(t, e);
              }
            );
          }),
            (n.prototype._createIcons = function (t, e) {
              for (var i = this, n = 0; n < t.length; n++) {
                var r = {},
                  o =
                    ((r.icon = t[n]),
                    (function (t) {
                      for (var e = 0; e < i.icons.length; e++)
                        if (i.icons[e].icon.program === t) return e;
                      return -1;
                    })(r.icon.program));
                0 <= o && this.icons.splice(o, 1),
                  (r.content = (function (t) {
                    var e = null;
                    t.staticResource
                      ? ["image/gif", "image/jpeg", "image/png"].indexOf(
                          t.creativeType
                        ) &&
                        (e =
                          "<img src='" +
                          t.staticResource +
                          "' width='" +
                          t.width +
                          "' height='" +
                          t.height +
                          "'>")
                      : t.htmlResource
                      ? (e = t.htmlResource)
                      : t.iframeResource && (e = t.iframeResource);
                    return e;
                  })(r.icon)),
                  (r.type = (o = r.icon).staticResource
                    ? "static"
                    : o.htmlResource
                    ? "html"
                    : o.iframeResource
                    ? "iframe"
                    : void 0),
                  r.content && this.icons.push(r);
              }
              0 < this.icons.length && e(null);
            }),
            (n.prototype._setupEvents = function (t) {
              var i = this.player,
                n = this;
              return (
                a.once(
                  i,
                  ["vast.adEnd", "vast.adsCancel", "vast.adSkip", "adStop"],
                  function () {
                    if (0 < n.icons.length) {
                      n.controlBarTimer &&
                        (clearInterval(n.controlBarTimer),
                        (n.controlBarTimer = null));
                      for (var t = 0; t < n.icons.length; t++) {
                        var e = n.icons[t];
                        e.div &&
                          (e.clickHandler &&
                            e.div.removeEventListener("click", e.clickHandler),
                          i.el().removeChild(e.div));
                      }
                      n.icons = [];
                    }
                  }
                ),
                t(null)
              );
            }),
            (n.prototype._renderIcons = function () {
              var s = this.player,
                l = this,
                t = s.el().querySelectorAll(".vast-icon");
              if (0 < t.length)
                for (var e = 0; e < t.length; e++)
                  t[e].parentNone.removeChild(t[e]);
              for (var i = 0; i < this.icons.length; i++) {
                var n,
                  r = this.icons[i],
                  o = "left",
                  a = 0,
                  d = "top",
                  c = 0,
                  u =
                    (r &&
                      "left" === r.icon.xPosition &&
                      ((o = "left"), (a = 0)),
                    r &&
                      "right" === r.icon.xPosition &&
                      ((o = "right"), (a = 0)),
                    r &&
                      0 <= Number(r.icon.xPosition) &&
                      ((o = "left"), (a = r.icon.xPosition)),
                    r &&
                      "bottom" === r.icon.yPosition &&
                      ((d = "bottom"), (c = 0)),
                    r &&
                      "top" === r.icon.yPosition &&
                      ((d = "top"), (c = 0), (c += 0)),
                    r &&
                      0 <= Number(r.icon.yPosition) &&
                      ((d = "top"), (c = Number(r.icon.yPosition)), (c += 0)),
                    s.el().ownerDocument.createElement("div"));
                s.el().appendChild(u),
                  u.setAttribute("name", "adicon"),
                  (u.className = "vast-icon"),
                  "bottom" === r.icon.yPosition &&
                    (u.className = "vast-icon vjs-vast-bottom"),
                  (u.id = "adicon_" + r.icon.program),
                  "iframe" === r.type
                    ? (((n = document.createElement("iframe")).src = r.content),
                      (n.scrolling = "no"),
                      (n.style.width = "100%"),
                      (n.style.height = "100%"),
                      (n.style.border = "none"),
                      (n.style.overflow = "hidden"),
                      u.appendChild(n))
                    : (u.innerHTML = r.content),
                  (u.style.position = "absolute"),
                  r && "center" === r.icon.xPosition
                    ? ((u.style.left = "50%"),
                      (u.style.webkitTransform = "translateX(-50%)"),
                      (u.style.transform = "translateX(-50%)"))
                    : (u.style[o] = a + "px"),
                  r && "center" === r.icon.yPosition
                    ? ((u.style.top = "50%"),
                      r && "center" === r.icon.xPosition
                        ? ((u.style.webkitTransform = "translate(-50%,-50%)"),
                          (u.style.transform = "translate(-50%,-50%)"))
                        : ((u.style.transform = "translateY(-50%)"),
                          (u.style.webkitTransform = "translateY(-50%)")))
                    : (u.style[d] = c + "px"),
                  (u.style.zIndex = 2147483640),
                  (u.style.display = "none"),
                  (r.origY = c),
                  (u.style.transtion = "all .5s"),
                  (u.style.webkitTransition = "all .5s"),
                  (u.style.opacity = 0),
                  (u.style.width = "auto"),
                  r.icon.width &&
                    ("number" == typeof r.icon.width
                      ? (u.style.width = r.icon.width + "px")
                      : (u.style.width = r.icon.width)),
                  r.icon.height &&
                    ("number" == typeof r.icon.height
                      ? (u.style.height = r.icon.height + "px")
                      : (u.style.height = r.icon.height)),
                  (r.div = u),
                  r.icon.iconClickThrough &&
                    ((r.div.style.cursor = "pointer"),
                    (r.clickHandler = (function (t) {
                      return function () {
                        t.icon.iconClickTracking &&
                          (p(t.icon.iconClickTracking),
                          s.trigger("vast", { eventType: "iconClick" })),
                          s.pause(),
                          window.open(t.icon.iconClickThrough, "_blank");
                      };
                    })(r)),
                    r.div.addEventListener("click", r.clickHandler)),
                  !(function (o, a) {
                    var t =
                      o.icon.offset && 0 < o.icon.offset ? o.icon.offset : 0;
                    setTimeout(function () {
                      (o.div.style.display = "block"),
                        p(o.icon.iconViewTrackings);
                      for (var i, t, e, n, r = 0; r < l.icons.length; r++)
                        l.icons[r].div &&
                          l.icons[r].div != o.div &&
                          ((i = l.icons[r].div),
                          (t = o.div),
                          (e = function (t, e) {
                            return (
                              (t = t.getBoundingClientRect()),
                              (e = e.getBoundingClientRect()).top <= t.top &&
                                t.top <= e.bottom &&
                                e.top <= t.bottom &&
                                t.bottom <= e.bottom &&
                                e.left <= t.left &&
                                t.left <= e.right &&
                                e.left <= t.right &&
                                t.right <= e.right
                            );
                          }),
                          (function (t) {
                            var e = i.getBoundingClientRect(),
                              t = t.getBoundingClientRect();
                            return !(
                              e.top > t.bottom ||
                              e.right < t.left ||
                              e.bottom < t.top ||
                              e.left > t.right
                            );
                          })(t) ||
                            e(i, t) ||
                            e(t, i)) &&
                          ((e = l.icons[r].div.getBoundingClientRect()),
                          "top" === a
                            ? ((o.div.style.top =
                                l.icons[r].div.offsetTop +
                                l.icons[r].div.offsetHeight +
                                1 +
                                "px"),
                              (o.origY =
                                l.icons[r].div.offsetTop +
                                l.icons[r].div.offsetHeight +
                                1))
                            : ((t = l.player.el().getBoundingClientRect()),
                              (o.div.style.bottom =
                                t.height + t.top - e.top + 1 + "px"),
                              (o.origY = t.height + t.top - e.top + 1))),
                          setTimeout(function () {
                            "bottom" !== a ||
                              s.el().querySelector(".vjs-vast-div") ||
                              (o.div.style.margin = " 0 0 -20px 0"),
                              (o.div.style.opacity = 1);
                          }, 200);
                      o.icon.duration &&
                        0 < o.icon.duration &&
                        ((n = o.icon.duration),
                        setTimeout(function () {
                          var t = l.icons.indexOf(o);
                          0 <= t &&
                            (o.clickHandler &&
                              o.div.removeEventListener(
                                "click",
                                o.clickHandler
                              ),
                            s.el().removeChild(o.div),
                            l.icons.splice(t, 1));
                        }, n));
                    }, t);
                  })(r, d);
              }
              function p(t) {
                new Image().src = t;
              }
              r.icon.iconViewTrackings &&
                (p(r.icon.iconViewTrackings),
                s.trigger("vast", { eventType: "iconView" }));
            }),
            (e.exports = n);
        },
        {
          "../../utils/async": 36,
          "../../utils/playerUtils": 41,
          "../../utils/utilityFunctions": 43,
          "../vast/VASTError": 19,
        },
      ],
      7: [
        function (t, e, i) {
          "use strict";
          var n = t("./InLine"),
            r = t("./Wrapper");
          function o(t) {
            if (!(this instanceof o)) return new o(t);
            this.initialize(t);
          }
          (o.prototype.initialize = function (t) {
            (this.id = t.attr("id")),
              window.mol_player.trigger("vast", {
                eventType: "loaded",
                adId: this.id,
              }),
              window.mol_player.trigger("vpaid", {
                eventType: "loaded",
                adId: this.id,
              }),
              (this.sequence = t.attr("sequence")),
              4 === window.mol_vastVersion &&
                (this.conditionalAd = t.attr("conditionalAd")),
              t.inLine && (this.inLine = new n(t.inLine)),
              t.wrapper && (this.wrapper = new r(t.wrapper));
          }),
            (e.exports = o);
        },
        { "./InLine": 12, "./Wrapper": 26 },
      ],
      8: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/xml"),
            r = t("../../utils/utilityFunctions");
          function o(t) {
            if (!(this instanceof o)) return new o(t);
            (this.authority = t.attr("authority")),
              (this.category = n.keyValue(t));
          }
          (o.parseCategories = function (t) {
            var i = [];
            return (
              i &&
                (r.isArray(t) ? t : [t]).forEach(function (t) {
                  var e = new o(t);
                  e.category &&
                    0 < e.category.length &&
                    e.authority &&
                    0 < e.authority.length &&
                    i.push(new o(t));
                }),
              i
            );
          }),
            (e.exports = o);
        },
        { "../../utils/utilityFunctions": 43, "../../utils/xml": 44 },
      ],
      9: [
        function (t, e, i) {
          "use strict";
          var c = t("./TrackingEvent"),
            u = t("../../utils/utilityFunctions"),
            p = t("../../utils/xml"),
            f = t("../../utils/consoleLogger");
          e.exports = function t(e) {
            if (!(this instanceof t)) return new t(e);
            f.info("<Companion> found companion ad"),
              f.debug("<Companion>  companionJTree:", e),
              (this.creativeType = p.attr(e.staticResource, "creativeType")),
              (this.staticResource = p.keyValue(e.staticResource)),
              f.info("<Companion>  creativeType: " + this.creativeType),
              f.info("<Companion>  staticResource: " + this.staticResource);
            var i = null,
              n =
                (p.keyValue(e.HTMLResource)
                  ? (i = p.keyValue(e.HTMLResource))
                  : p.keyValue(e.hTMLResource) &&
                    (i = p.keyValue(e.hTMLResource)),
                (this.htmlResource = i),
                this.creativeType &&
                  this.staticResource &&
                  ["image/gif", "image/jpeg", "image/png"].indexOf(
                    this.creativeType
                  ) &&
                  (i = this.altText
                    ? '<img style="width:100%;height:100%;cursor:pointer" alt="' +
                      this.altText +
                      '" src="' +
                      this.staticResource +
                      '"/>'
                    : '<img style="width:100%;height:100%;cursor:pointer" src="' +
                      this.staticResource +
                      '"/>'),
                null),
              r =
                (p.keyValue(e.IFrameResource)
                  ? (n = p.keyValue(e.IFrameResource))
                  : p.keyValue(e.iFrameresource)
                  ? (n = p.keyValue(e.iFrameresource))
                  : p.keyValue(e.iFrameResource) &&
                    (n = p.keyValue(e.iFrameResource)),
                null !== n && f.info("<Companion> found iframe resource", n),
                (this.iframeResource = n),
                (this.id = p.attr(e, "id")),
                (this.width = p.attr(e, "width")),
                (this.height = p.attr(e, "height")),
                (this.assetWidth = p.attr(e, "assetWidth")),
                (this.assetHeight = p.attr(e, "assetHeight")),
                (this.expandedWidth = p.attr(e, "expandedWidth")),
                (this.expandedHeight = p.attr(e, "expandedHeight")),
                (this.apiFramework = p.attr(e, "apiFramework")),
                (this.adSlotID = p.attr(e, "adSlotId")),
                (this.companionClickThrough = p.keyValue(
                  e.companionClickThrough
                )),
                (this.trackingEvents = (function (t) {
                  var e = [];
                  return (
                    u.isDefined(t) &&
                      (t = u.isArray(t) ? t : [t]).forEach(function (t) {
                        e.push(new c(t));
                      }),
                    e
                  );
                })(e.trackingEvents && e.trackingEvents.tracking)),
                this.companionClickThrough),
              o = this.trackingEvents;
            if (
              (4 === window.mol_vastVersion &&
                (this.pxratio = p.attr(e, "pxratio")),
              null != i || null !== n)
            ) {
              var a,
                s = null;
              if (
                null ===
                (s =
                  this.adSlotID && (e = document.getElementById(this.adSlotID))
                    ? e
                    : s)
              ) {
                var l = document.querySelectorAll(".vjs-companion");
                if (l) {
                  for (var d = 0; d < l.length; d++)
                    if ("" === l[d].innerHTML) {
                      s = l[d];
                      break;
                    }
                  null === s && (s = l[0]);
                }
              }
              null !== s &&
                ((e = i),
                (s.innerHTML = ""),
                (i = document.createElement("div")),
                this.assetWidth && (i.style.width = this.assetWidth + "px"),
                this.assetHeight && (i.style.height = this.assetHeight + "px"),
                "number" == typeof this.width
                  ? (s.style.width = this.width + "px")
                  : (s.style.width = this.width),
                "number" == typeof this.height
                  ? (s.style.height = this.height + "px")
                  : (s.style.height = this.height),
                s.appendChild(i),
                this.expandedWidth &&
                  (s.style.maxWidth = this.expandedWidth + "px"),
                this.expandedHeight &&
                  (s.style.maxHeight = this.expandedHeight + "px"),
                this.altText && s.setAttribute("title", this.altText),
                null !== n
                  ? (((a = document.createElement("iframe")).src = n),
                    (a.scrolling = "no"),
                    (a.style.width = "100%"),
                    (a.style.height = "100%"),
                    (a.style.border = "none"),
                    (a.style.overflow = "hidden"),
                    i.appendChild(a))
                  : (i.innerHTML = e),
                r &&
                  (s.onclick = function () {
                    player.pause(), window.open(r, "_blank");
                  }),
                o) &&
                o.forEach(function (t) {
                  "creativeView" === t.name && (new Image().src = t.uri);
                });
            }
            f.info(
              "<Companion>  companionClickThrough: " +
                this.companionClickThrough
            );
          };
        },
        {
          "../../utils/consoleLogger": 37,
          "../../utils/utilityFunctions": 43,
          "../../utils/xml": 44,
          "./TrackingEvent": 16,
        },
      ],
      10: [
        function (t, e, i) {
          "use strict";
          var n = t("./Linear"),
            r = t("./Companion"),
            o = t("./UniversalAdId"),
            T = t("../../utils/utilityFunctions");
          function a(t) {
            if (!(this instanceof a)) return new a(t);
            var e, i;
            (this.id = t.attr("id")),
              (this.sequence = t.attr("sequence")),
              (this.adId = t.attr("adId")),
              (this.apiFramework = t.attr("apiFramework")),
              t.linear && (this.linear = new n(t.linear)),
              t.companionAds &&
                ((e = []),
                (i = t.companionAds && t.companionAds.companion),
                T.isDefined(i) &&
                  (i = T.isArray(i) ? i : [i]).forEach(function (t) {
                    e.push(new r(t));
                  }),
                (this.companionAds = e)),
              4 === window.mol_vastVersion &&
                (this.universalAdId = new o(t.universalAdId));
          }
          (a.prototype.isSupported = function () {
            return !this.linear || this.linear.isSupported();
          }),
            (a.parseCreatives = function (t) {
              var i = [];
              return (
                T.isDefined(t) &&
                  T.isDefined(t.creative) &&
                  (T.isArray(t.creative) ? t.creative : [t.creative]).forEach(
                    function (t) {
                      var e;
                      t.nonLinearAds &&
                        (e = t.nonLinearAds).nonLinear &&
                        a.nonLinear(e.nonLinear),
                        i.push(new a(t));
                    }
                  ),
                i
              );
            }),
            ((e.exports = a).nonLinear = function (a) {
              var s = window.mol_player,
                l = null,
                d = null;
              function t(t) {
                var e;
                return (
                  T.isString(t) &&
                    (t = t.match(/(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/)) &&
                    ((e = t[1]),
                    (e =
                      60 * parseInt(e, 10) * 60 * 1e3 +
                      60 * parseInt(t[2], 10) * 1e3 +
                      1e3 * parseInt(t[3], 10) +
                      parseInt(t[5] || 0)),
                    (e /= 1e3)),
                  isNaN(e) ? null : e
                );
              }
              window.removeEventListener("resize", k);
              var e,
                i,
                n,
                c,
                u,
                p,
                r,
                f = null,
                h = null,
                v = !1,
                g = null,
                l = null,
                m =
                  (a.nonLinearClickThrough && a.nonLinearClickThrough.keyValue,
                  a.nonLinearClickTracking && a.nonLinearClickTracking.keyValue,
                  a.trackingEvents &&
                    a.trackingEvents.tracking &&
                    ((e = "@event"),
                    (o = a.trackingEvents.tracking),
                    T.isArray(o)
                      ? o.forEach(function (t) {
                          ("close" != t[e] && "closeNonlinear" != t[e]) ||
                            (f = t.keyValue);
                        })
                      : ("close" != o[e] && "closeNonlinear" != o[e]) ||
                        (f = o.keyValue)),
                  a.attr("scalable") && (v = a.attr("scalable")),
                  window._molSettings.nonlinearRecall),
                o = (a.attr("recall") && (m = !0), null),
                y =
                  (a.hTMLResource && (o = a.hTMLResource.keyValue),
                  a.iFrameResource &&
                    (((n = document.createElement("iframe")).src =
                      a.iFrameResource.keyValue),
                    (n.scrolling = "no"),
                    (n.style.width = "100%"),
                    (n.style.height = "100%"),
                    (n.style.border = "none"),
                    (n.style.overflow = "hidden"),
                    (o = n)),
                  0);
              function w() {
                var t,
                  e = s.el().className;
                e.indexOf("vjs-ad-playing") < 0 &&
                  ((t = s.currentTime()),
                  -1 < e.indexOf("vjs-live") && (t = s.liveTime || 0),
                  y + h < t) &&
                  ((g.className = "nonlinear-close"),
                  k(),
                  s.off("timeupdate", w));
              }
              function A(t) {
                var e = t,
                  t = s.el().querySelector(".vjs-nonlinear-recall"),
                  t =
                    (t && t.parentNode.removeChild(t),
                    ((d = document.createElement("div")).className =
                      "vjs-nonlinear-recall vjs-hidden"),
                    d.setAttribute("role", "button"),
                    (d.innerHTML =
                      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 48"><path d="M18.59 16.41L20 15l-8-8-8 8 1.41 1.41L12 9.83"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>'),
                    s.el().appendChild(d),
                    (d.onclick = function (t) {
                      t.preventDefault(),
                        t.stopImmediatePropagation(),
                        (e.className = "vjs-nonlinear vjs-non-show"),
                        (e.style.pointerEvents = "auto"),
                        (d.className = "vjs-nonlinear-recall vjs-hidden");
                    }),
                    s.el().querySelector(".nonlinear-recall"));
                t &&
                  (t.onclick = function (t) {
                    t.preventDefault(),
                      t.stopImmediatePropagation(),
                      (d.className = "vjs-nonlinear-recall"),
                      (e.style.pointerEvents = "none"),
                      (e.className = "vjs-nonlinear");
                  });
              }
              function k() {
                var t,
                  e = document.querySelector(".vjs-nonlinear");
                e &&
                  (t = e.querySelector(".nonlinear-close")) &&
                  ((e = e.getBoundingClientRect()).left < 0
                    ? (t.style.right = -1 * e.left + 10 + "px")
                    : t.style.removeProperty("right"),
                  e.top < 0
                    ? (t.style.top = -1 * e.top + 10 + "px")
                    : t.style.removeProperty("top"));
              }
              o &&
                ((h = t(h)),
                (c = a.attr("width")),
                (u = a.attr("height")),
                (i = s.el().querySelector(".vjs-nonlinear")),
                (r = s.el().querySelector(".vjs-nonlinear-recall")) &&
                  r.parentNode.removeChild(r),
                i
                  ? (l = i).removeAttribute("style")
                  : (l = document.createElement("div")),
                (l.className = "vjs-nonlinear vjs-non-show"),
                null !== c &&
                  (l.style.width = "number" == typeof c ? c + "px" : c),
                null !== u &&
                  (l.style.height = "number" == typeof u ? u + "px" : u),
                a.attr("expandedWidth") &&
                  ((n = a.attr("expandedWidth")),
                  (l.style.maxWidth = "number" == typeof n ? n + "px" : n)),
                a.attr("expandedheight") &&
                  ((n = a.attr("expandedWidth")),
                  (l.style.maxHeight = "number" == typeof n ? n + "px" : n)),
                a.attr("minSuggestedDuration") &&
                  (h = t((h = a.attr("minSuggestedDuration")))),
                a.iFrameResource
                  ? ((l.inneHTML = ""), l.appendChild(o))
                  : (l.innerHTML = o),
                setTimeout(function () {
                  i || s.el().appendChild(l), m && A(l);
                }, 200),
                ((g = document.createElement("div")).className =
                  "nonlinear-close"),
                g.setAttribute("role", "button"),
                (g.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path></svg>'),
                l.appendChild(g),
                g.addEventListener("click", function t(e) {
                  if ((e.preventDefault(), e.stopImmediatePropagation(), m))
                    try {
                      (l.className = "vjs-nonlinear vjs-hidden"),
                        (l.style.pointerEvents = "none"),
                        (d.className = "vjs-nonlinear-recall");
                    } catch (e) {}
                  else
                    g.removeEventListener("click", t),
                      f &&
                        (trackNonlinear(f),
                        s.trigger("vast", { eventType: "closeNonlinear" })),
                      s.el().removeChild(l),
                      s.off("timeupdate", w);
                }),
                null !== h
                  ? 0 < h &&
                    ((y =
                      -1 < s.el().className.indexOf("vjs-live")
                        ? s.liveTime || 0
                        : s.currentTime()),
                    (g.className = "nonlinear-close vjs-hidden"),
                    s.on("timeupdate", w))
                  : k(),
                window.addEventListener("resize", k)),
                a.staticResource &&
                  ((i = s.el().querySelector(".vjs-nonlinear")),
                  (r = s.el().querySelector(".vjs-nonlinear-recall")) &&
                    r.parentNode.removeChild(r),
                  (o = (n = a.staticResource).attr("creativeType")),
                  a.attr("minSuggestedDuration") &&
                    (h = t((h = a.attr("minSuggestedDuration")))),
                  (p = n.keyValue),
                  (o = n.attr("creativeType")),
                  ["image/gif", "image/jpeg", "image/png"].indexOf(o)) &&
                  (((r = new Image()).src = p),
                  (r.onload = function () {
                    (l = document.createElement("div")).className =
                      "vjs-nonlinear";
                    var i = document.createElement("img"),
                      t =
                        ((i.src = p),
                        l.appendChild(i),
                        (c = c || this.width),
                        (l.style.width = c + "px"),
                        !0 !== v &&
                          ((l.style.maxWidth = c + "px"),
                          (l.style.maxHeight = u + "px")),
                        s.el().querySelector(".vjs-nonlinear")),
                      e =
                        (t && t.parentNode.removeChild(t),
                        s.el().appendChild(l),
                        (videojs.nonlinearAdded = !0),
                        a);
                    function n() {
                      var t,
                        e = s.el().className;
                      e.indexOf("vjs-ad-playing") < 0 &&
                        ((t = s.currentTime()),
                        -1 < e.indexOf("vjs-live") && (t = s.liveTime || 0),
                        y + h < t) &&
                        ((g.className = "nonlinear-close"),
                        k(),
                        s.off("timeupdate", n));
                    }
                    function r() {
                      e.nonLinearClickTracking &&
                        (o(e.nonLinearClickTracking.keyValue),
                        s.trigger("vast", { eventType: "nonLinearClick" })),
                        s.pause(),
                        window.open(e.nonLinearClickThrough.keyValue, "_blank");
                    }
                    function o(t) {
                      new Image().src = t;
                    }
                    m && A(l),
                      null !== e.nonLinearClickThrough &&
                        l.addEventListener("click", r),
                      ((g = document.createElement("div")).className =
                        "nonlinear-close"),
                      g.setAttribute("role", "button"),
                      (g.innerHTML =
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><path d="M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5"></path></svg>'),
                      l.appendChild(g),
                      g.addEventListener("click", function t(e) {
                        if (
                          (e.preventDefault(), e.stopImmediatePropagation(), m)
                        )
                          try {
                            (l.className = "vjs-nonlinear vjs-hidden"),
                              (l.style.pointerEvents = "none"),
                              (d.className = "vjs-nonlinear-recall");
                          } catch (e) {}
                        else
                          g.removeEventListener("click", t),
                            i.removeEventListener("click", r),
                            f &&
                              (o(f),
                              s.trigger("vast", {
                                eventType: "closeNonlinear",
                              })),
                            s.el().removeChild(l),
                            s.off("timeupdate", n);
                      }),
                      null !== h
                        ? 0 < h &&
                          ((t = s.el().className),
                          (y =
                            -1 < t.indexOf("vjs-live")
                              ? s.liveTime || 0
                              : s.currentTime()),
                          (g.className = "nonlinear-close vjs-hidden"),
                          s.on("timeupdate", n))
                        : k(),
                      window.addEventListener("resize", k),
                      setTimeout(function () {
                        s.el().appendChild(l),
                          (l.className = "vjs-nonlinear vjs-non-show");
                      }, 1e3);
                  }));
            });
        },
        {
          "../../utils/utilityFunctions": 43,
          "./Companion": 9,
          "./Linear": 14,
          "./UniversalAdId": 17,
        },
      ],
      11: [
        function (t, e, i) {
          "use strict";
          var a = t("../../utils/utilityFunctions"),
            s = t("../../utils/xml"),
            l = t("./parsers"),
            d = [
              "program",
              "width",
              "height",
              "xPosition",
              "yPosition",
              "duration",
              "offset",
              "apiFramework",
              "pxratio",
            ];
          e.exports = function t(e) {
            if (!(this instanceof t)) return new t(e);
            for (var i = 0; i < d.length; i++) {
              var n = d[i];
              this[n] = e.attr(n);
            }
            this.duration && (this.duration = l.duration(this.duration)),
              this.offset && (this.offset = l.duration(this.offset)),
              (this.creativeType = s.attr(e.staticResource, "creativeType")),
              (this.staticResource = s.keyValue(e.staticResource));
            var r = null,
              r =
                (s.keyValue(e.HTMLResource)
                  ? (r = s.keyValue(e.HTMLResource))
                  : s.keyValue(e.hTMLResource) &&
                    (r = s.keyValue(e.hTMLResource)),
                (this.htmlResource = r),
                null);
            function o(t) {
              return t
                ? ((t = a.isArray(t) ? t : [t]),
                  a.transformArray(t, function (t) {
                    if (a.isNotEmptyString(t.keyValue)) return t.keyValue;
                  }))
                : [];
            }
            s.keyValue(e.IFrameResource)
              ? (r = s.keyValue(e.IFrameResource))
              : s.keyValue(e.iFrameresource)
              ? (r = s.keyValue(e.iFrameresource))
              : s.keyValue(e.iFrameResource) &&
                (r = s.keyValue(e.iFrameResource)),
              (this.iframeResource = r),
              (this.iconViewTrackings = o(e.iconViewTracking)),
              e.iconClicks &&
                ((this.iconClickThrough = s.keyValue(
                  e.iconClicks.iconClickThrough
                )),
                (this.iconClickTracking = o(e.iconClicks.iconClickTracking)));
          };
        },
        {
          "../../utils/utilityFunctions": 43,
          "../../utils/xml": 44,
          "./parsers": 27,
        },
      ],
      12: [
        function (t, e, i) {
          "use strict";
          var n = t("./vastUtil"),
            r = t("./Creative"),
            o = t("./Category"),
            a = t("./ViewableImpression"),
            s = t("./Verification"),
            l = t("../../utils/utilityFunctions"),
            d = t("../../utils/xml");
          function c(t) {
            if (!(this instanceof c)) return new c(t);
            (this.adTitle = d.keyValue(t.adTitle)),
              (this.adSystem = d.keyValue(t.adSystem)),
              (this.impressions = n.parseImpressions(t.impression)),
              (this.creatives = r.parseCreatives(t.creatives)),
              (this.description = d.keyValue(t.description)),
              (this.advertiser = d.keyValue(t.advertiser)),
              (this.surveys = (function (t) {
                if (t)
                  return l.transformArray(l.isArray(t) ? t : [t], function (t) {
                    if (l.isNotEmptyString(t.keyValue))
                      return { uri: t.keyValue, type: t.attr("type") };
                  });
                return [];
              })(t.survey)),
              (this.errors = n.parseErrors(t.error)),
              (this.pricing = d.keyValue(t.pricing)),
              (this.extensions = t.extensions),
              4 === window.mol_vastVersion &&
                (t.category &&
                  (this.categories = o.parseCategories(t.category)),
                t.viewableImpression &&
                  (this.viewableImpression = new a(t.viewableImpression)),
                t.adVerifications) &&
                (this.adVerifications = s.parseAdVerifications(
                  t.adVerifications
                ));
          }
          (c.prototype.isSupported = function () {
            var t, e;
            if (0 === this.creatives.length) return !1;
            for (t = 0, e = this.creatives.length; t < e; t += 1)
              if (!this.creatives[t].isSupported()) return !1;
            return !0;
          }),
            (e.exports = c);
        },
        {
          "../../utils/utilityFunctions": 43,
          "../../utils/xml": 44,
          "./Category": 8,
          "./Creative": 10,
          "./Verification": 23,
          "./ViewableImpression": 25,
          "./vastUtil": 28,
        },
      ],
      13: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/xml"),
            r = t("../../utils/utilityFunctions");
          function o(t) {
            if (!(this instanceof o)) return new o(t);
            (this.type = t.attr("type")),
              (this.apiFramework = t.attr("apiFramework")),
              (this.src = n.keyValue(t));
          }
          (o.parseInteractiveCreativeFiles = function (t) {
            var e = [];
            return (
              r.isDefined(t) &&
                (r.isArray(t) ? t : [t]).forEach(function (t) {
                  e.push(new o(t));
                }),
              e
            );
          }),
            (e.exports = o);
        },
        { "../../utils/utilityFunctions": 43, "../../utils/xml": 44 },
      ],
      14: [
        function (t, e, i) {
          "use strict";
          var n = t("./TrackingEvent"),
            r = t("./MediaFile"),
            o = t("./VideoClicks"),
            a = t("./InteractiveCreativeFile"),
            s = t("./Icon"),
            l = t("../../utils/utilityFunctions"),
            d = t("./parsers"),
            c = t("../../utils/xml");
          function u(t) {
            if (!(this instanceof u)) return new u(t);
            (this.duration = d.duration(c.keyValue(t.duration))),
              (this.mediaFiles = (function (t) {
                var e = [];
                l.isDefined(t) &&
                  (t = l.isArray(t) ? t : [t]).forEach(function (t) {
                    e.push(new r(t));
                  });
                return e;
              })(t.mediaFiles && t.mediaFiles.mediaFile)),
              (videojs._vast_Media = this.mediaFiles),
              (this.trackingEvents = (function (t, e) {
                var i = [];
                l.isDefined(t) &&
                  (t = l.isArray(t) ? t : [t]).forEach(function (t) {
                    i.push(new n(t, e));
                  });
                return i;
              })(t.trackingEvents && t.trackingEvents.tracking, this.duration)),
              (this.skipoffset = d.offset(
                c.attr(t, "skipoffset"),
                this.duration
              )),
              this.duration &&
                window._molSettings &&
                window._molSettings.skippable &&
                (window._molSettings.skippable.enabled &&
                this.duration >= window._molSettings.skippable.videoThreshold
                  ? (this.skipoffset =
                      window._molSettings.skippable.videoOffset)
                  : (this.skipoffset = null)),
              t.videoClicks && (this.videoClicks = new o(t.videoClicks)),
              t.adParameters &&
                ((this.adParameters = c.keyValue(t.adParameters)),
                c.attr(t.adParameters, "xmlEncoded")) &&
                (this.adParameters = c.decode(this.adParameters)),
              4 === window.mol_vastVersion &&
                (t.mediaFiles &&
                  t.mediaFiles.mezzanine &&
                  (this.mezzanine = c.keyValue(t.mediaFiles.mezzanine)),
                t.mediaFiles) &&
                t.mediaFiles.interactiveCreativeFile &&
                (this.interactiveCreativeFiles =
                  a.parseInteractiveCreativeFiles(
                    t.mediaFiles.interactiveCreativeFile
                  )),
              t.icons &&
                (this.icons = (function (t) {
                  var e = [];
                  l.isDefined(t) &&
                    (t = l.isArray(t) ? t : [t]).forEach(function (t) {
                      e.push(new s(t));
                    });
                  return e;
                })(t.icons && t.icons.icon));
          }
          (u.prototype.isSupported = function () {
            for (var t = 0, e = this.mediaFiles.length; t < e; t += 1)
              if (this.mediaFiles[t].isSupported()) return !0;
            return !1;
          }),
            (e.exports = u);
        },
        {
          "../../utils/utilityFunctions": 43,
          "../../utils/xml": 44,
          "./Icon": 11,
          "./InteractiveCreativeFile": 13,
          "./MediaFile": 15,
          "./TrackingEvent": 16,
          "./VideoClicks": 24,
          "./parsers": 27,
        },
      ],
      15: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/xml"),
            r = t("./vastUtil"),
            o = [
              "delivery",
              "type",
              "width",
              "height",
              "codec",
              "id",
              "bitrate",
              "minBitrate",
              "maxBitrate",
              "scalable",
              "maintainAspectRatio",
              "apiFramework",
            ];
          function a(t) {
            if (!(this instanceof a)) return new a(t);
            this.src = n.keyValue(t);
            for (var e = 0; e < o.length; e++) {
              var i = o[e];
              this[i] = t.attr(i);
            }
          }
          (a.prototype.isSupported = function () {
            return r.isVPAID(this)
              ? !!r.findSupportedVPAIDTech(this.type)
              : "video/x-flv" !== this.type;
          }),
            (e.exports = a);
        },
        { "../../utils/xml": 44, "./vastUtil": 28 },
      ],
      16: [
        function (t, e, i) {
          "use strict";
          var n = t("./parsers"),
            r = t("../../utils/xml");
          e.exports = function t(e, i) {
            if (!(this instanceof t)) return new t(e, i);
            (this.name = e.attr("event")),
              (this.uri = r.keyValue(e)),
              "progress" === this.name &&
                (this.offset = n.offset(e.attr("offset"), i));
          };
        },
        { "../../utils/xml": 44, "./parsers": 27 },
      ],
      17: [
        function (t, e, i) {
          "use strict";
          e.exports = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e
              ? ((this.idRegistry = e.attr("idRegistry")),
                (this.idValue = e.attr("idValue")))
              : ((this.idRegistry = "unknown"), (this.idValue = "unknown"));
          };
        },
        {},
      ],
      18: [
        function (t, e, i) {
          "use strict";
          var n = t("./Ad"),
            d = t("./VASTError"),
            r = t("./VASTResponse"),
            o = t("./vastUtil"),
            c = t("../../utils/async"),
            a = t("../../utils/http").http,
            u = t("../../utils/utilityFunctions"),
            p = t("../../utils/xml"),
            f = t("../../utils/consoleLogger");
          function s(t) {
            if (!(this instanceof s)) return new s(t);
            var e = {
              WRAPPER_LIMIT:
                t && t.wrapperLimit && 0 < t.wrapperLimit ? t.wrapperLimit : 5,
            };
            (this.settings = u.extend({}, (t = t || {}), e)),
              (this.errorURLMacros = []);
          }
          (s.prototype.getVASTResponse = function (t, e) {
            var n = this,
              i = (function (t, e) {
                if (!t)
                  return new d(
                    "on VASTClient.getVASTResponse, missing ad tag URL"
                  );
                if (!u.isFunction(e))
                  return new d(
                    "on VASTClient.getVASTResponse, missing callback function"
                  );
              })(t, e);
            if (i) {
              if (u.isFunction(e)) return e(i);
              throw i;
            }
            c.waterfall(
              [
                this._getVASTAd.bind(this, t),
                function (t, e) {
                  try {
                    var i = n._buildVASTResponse(t);
                    e(null, i);
                  } catch (t) {
                    e(t);
                  }
                },
              ],
              e
            );
          }),
            (s.prototype._getVASTAd = function (t, o) {
              var a = this;
              window.mol_player.trigger("vast", { eventType: "requested" }),
                window.mol_player.trigger("vpaid", { eventType: "requested" });
              var e = function (t, e) {
                var i,
                  n,
                  r = e && u.isArray(e.ads) ? e.ads : null;
                if (t) return a._trackError(t, r), o(t, r);
                (videojs.vastAdPods = r),
                  (0 !== videojs.vast_adPodTotal &&
                    void 0 !== videojs.vast_adPodTotal) ||
                    (videojs.vast_adPodTotal = r.length),
                  0 < videojs.vast_adPodTotal &&
                    (null == videojs.vast_adPodCurrent &&
                      (videojs.vast_adPodCurrent = 1),
                    (e = videojs.vast_adPodCurrent),
                    (t = videojs.vast_adPodTotal),
                    (i = (n = window.mol_player)
                      .el()
                      .querySelector(".vjs-vast-label")),
                    (n = n.el().querySelector(".vjs-vast-num")),
                    t < 2
                      ? n && n.parentNode.removeChild(n)
                      : i &&
                        (n
                          ? (n.innerHTML = "(" + e + "/" + t + ")")
                          : (((n = document.createElement("div")).className =
                              "vjs-vast-label vjs-vast-num"),
                            (n.innerHTML = "(" + e + "/" + t + ")"),
                            i.parentNode.insertBefore(n, i.nextSibling)))),
                  s(r.shift(), [], function t(e, i) {
                    e
                      ? (a._trackError(e, i),
                        0 < r.length ? s(r.shift(), [], t) : o(e, i))
                      : o(null, i);
                  });
              };
              function i(t, e) {
                var i;
                try {
                  (i = p.toJXONTree(t)),
                    f.debug("built JXONTree from VAST response:", i),
                    u.isArray(i.ad)
                      ? (i.ads = i.ad)
                      : i.ad
                      ? (i.ads = [i.ad])
                      : (i.ads = []),
                    e(r(i), i);
                } catch (t) {
                  e(
                    new d(
                      "on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml",
                      100
                    ),
                    null
                  );
                }
              }
              function r(t) {
                var e = p.attr(t, "version");
                return t.ad
                  ? e && 3 != e && 2 != e && 4 != e && 4.1 != e && 4.2 != e
                    ? new d(
                        'on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' +
                          e +
                          '"',
                        102
                      )
                    : ((window.mol_vastVersion = parseInt(e)), null)
                  : new d(
                      "on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree",
                      303
                    );
              }
              function s(e, i, n) {
                if (i.length >= a.settings.WRAPPER_LIMIT)
                  return n(
                    new d(
                      "on VASTClient.getVASTAd.getAd, player's wrapper limit reached (the limit is " +
                        a.settings.WRAPPER_LIMIT +
                        ")",
                      302
                    ),
                    i
                  );
                c.waterfall(
                  [
                    function (t) {
                      var n;
                      u.isString(e)
                        ? ((n = t),
                          a._requestVASTXml(e, function (t, e) {
                            if (t) return n(t);
                            try {
                              var i = p.toJXONTree(e);
                              n(r(i), i.ad);
                            } catch (t) {
                              n(
                                new d(
                                  "on VASTClient.getVASTAd.requestVASTAd, error parsing xml",
                                  100
                                )
                              );
                            }
                          }))
                        : t(null, e);
                    },
                    l,
                  ],
                  function (t, e) {
                    return (
                      e && i.push(e),
                      t
                        ? n(t, i)
                        : e.wrapper
                        ? s(e.wrapper.VASTAdTagURI, i, n)
                        : n(null, i)
                    );
                  }
                );
              }
              function l(t, e) {
                try {
                  var i = new n(t);
                  e(
                    (function (t) {
                      var e = t.wrapper,
                        t = t.inLine,
                        i = "on VASTClient.getVASTAd.validateAd, ";
                      if (t && e)
                        return new d(
                          i + "InLine and Wrapper both found on the same Ad",
                          101
                        );
                      return t || e
                        ? !t || t.isSupported()
                          ? !e || e.VASTAdTagURI
                            ? null
                            : new d(
                                i + "missing 'VASTAdTagURI' in wrapper",
                                101
                              )
                          : new d(
                              i +
                                "could not find MediaFile that is supported by this video player",
                              403
                            )
                        : new d(
                            i +
                              "nor wrapper nor inline elements found on the Ad",
                            101
                          );
                    })(i),
                    i
                  );
                } catch (t) {
                  e(
                    new d(
                      "on VASTClient.getVASTAd.buildAd, error parsing xml",
                      100
                    ),
                    null
                  );
                }
              }
              (t = a._requestVASTXml.bind(a, t)), c.waterfall([t, i], e);
            }),
            (s.prototype._requestVASTXml = function (t, n) {
              try {
                u.isFunction(t)
                  ? t(e)
                  : (f.info("requesting adTagUrl: " + t),
                    a.get(t, e, { withCredentials: videojs.credentials }));
              } catch (t) {
                n(t);
              }
              function e(t, e, i) {
                if (t)
                  return (
                    (t = u.isDefined(i)
                      ? "on VASTClient.requestVastXML, HTTP request error with status '" +
                        i +
                        "'"
                      : "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn"),
                    n(new d(t, 301), null)
                  );
                n(null, e);
              }
            }),
            (s.prototype._buildVASTResponse = function (t) {
              var e,
                i = new r(),
                t =
                  ((e = i),
                  t.forEach(function (t) {
                    e.addAd(t);
                  }),
                  i),
                n = t.trackingEvents.progress;
              if (!t.hasLinear())
                throw new d(
                  "on VASTClient._buildVASTResponse, Received an Ad type that is not supported",
                  200
                );
              if (void 0 === t.duration)
                throw new d(
                  "on VASTClient._buildVASTResponse, Missing duration field in VAST response",
                  101
                );
              return (
                n &&
                  n.forEach(function (t) {
                    u.isNumber(t.offset) ||
                      console.log(
                        "VASTWarning on VASTClient, missing or wrong offset attribute on progress tracking event"
                      );
                  }),
                i
              );
            }),
            (s.prototype._trackError = function (t, e) {
              var i;
              u.isArray(e) &&
                0 !== e.length &&
                ((i = []),
                e.forEach(function (t) {
                  t.wrapper &&
                    t.wrapper.errors &&
                    Array.isArray(t.wrapper.errors) &&
                    (i = i.concat(t.wrapper.errors));
                  t.inLine &&
                    t.inLine.errors &&
                    Array.isArray(t.inLine.errors) &&
                    (i = i.concat(t.inLine.errors));
                }),
                o.track(i, { ERRORCODE: t.code || 900 }));
            }),
            (e.exports = s);
        },
        {
          "../../utils/async": 36,
          "../../utils/consoleLogger": 37,
          "../../utils/http": 39,
          "../../utils/utilityFunctions": 43,
          "../../utils/xml": 44,
          "./Ad": 7,
          "./VASTError": 19,
          "./VASTResponse": 21,
          "./vastUtil": 28,
        },
      ],
      19: [
        function (t, e, i) {
          "use strict";
          function n(t, e) {
            (this.message = "VAST Error: " + (t || "")),
              e &&
                ((this.code = e),
                window.mol_player.trigger("vastError", { code: e }));
          }
          ((n.prototype = new Error()).name = "VAST Error"), (e.exports = n);
        },
        {},
      ],
      20: [
        function (t, e, i) {
          "use strict";
          var r = t("./VASTResponse"),
            a = t("./VASTError"),
            n = t("./VASTTracker"),
            f = t("./vastUtil"),
            o = t("../../utils/async"),
            h = t("../../utils/dom"),
            v = t("../../utils/playerUtils"),
            g = t("../../utils/utilityFunctions"),
            s = t("../../utils/consoleLogger");
          function l(t) {
            if (!(this instanceof l)) return new l(t);
            (this.player = t), (this.enableFullscreenClickIFrame = !1);
          }
          (l.prototype.playAd = function (e, i) {
            var n = this;
            return (
              (i = i || g.noop),
              e instanceof r
                ? (o.waterfall(
                    [
                      function (t) {
                        t(null, e);
                      },
                      this._selectAdSource.bind(this),
                      this._createVASTTracker.bind(this),
                      this._addClickThrough.bind(this),
                      this._addClickThroughDivBlocker.bind(this),
                      this._addSkipButton.bind(this),
                      this._setupEvents.bind(this),
                      this._playSelectedAd.bind(this),
                    ],
                    function (t, e) {
                      t && e && n._trackError(t, e), i(t, e);
                    }
                  ),
                  (this._adUnit = {
                    _src: null,
                    type: "VAST",
                    pauseAd: function () {
                      n.player.pause(!0);
                    },
                    resumeAd: function () {
                      n.player.play(!0);
                    },
                    isPaused: function () {
                      return n.player.paused(!0);
                    },
                    getSrc: function () {
                      return this._src;
                    },
                  }),
                  this._adUnit)
                : i(new a("On VASTIntegrator, missing required VASTResponse"))
            );
          }),
            (l.prototype._selectAdSource = function (t, e) {
              var i,
                n = h.getDimension(this.player.el()).width;
              if (
                (t.mediaFiles.sort(function (t, e) {
                  return Math.abs(n - t.width) - Math.abs(n - e.width);
                }),
                (i = this.player.selectSource(t.mediaFiles).source) &&
                  this.player.trigger({
                    type: "trace.message",
                    data: {
                      message: "Playing " + i.src + " (type = " + i.type + ")",
                    },
                  }),
                i)
              )
                return (
                  s.info("selected source: ", i),
                  this._adUnit && (this._adUnit._src = i),
                  e(null, i, t)
                );
              e(
                new a(
                  "Could not find Ad mediafile supported by this player",
                  403
                ),
                t
              );
            }),
            (l.prototype._createVASTTracker = function (t, e, i) {
              try {
                i(null, t, new n(t.src, e), e);
              } catch (t) {
                i(t, e);
              }
            }),
            (l.prototype._setupEvents = function (t, e, i, n) {
              var r,
                o = this.player;
              return (
                o.on("fullscreenchange", a),
                o.on("vast.adStart", d),
                o.on("pause", s),
                o.on("timeupdate", l),
                o.on("volumechange", c),
                v.once(o, ["vast.adEnd", "vast.adsCancel"], function () {
                  o.off("fullscreenchange", a),
                    o.off("vast.adStart", d),
                    o.off("pause", s),
                    o.off("timeupdate", l),
                    o.off("volumechange", c);
                }),
                v.once(
                  o,
                  ["vast.adEnd", "vast.adsCancel", "vast.adSkip"],
                  function (t) {
                    "vast.adEnd" === t.type && e.trackComplete();
                  }
                ),
                o.one("adStop", function () {
                  o.trigger("vast.adsCancel");
                }),
                n(null, t, i)
              );
              function a() {
                o.isFullscreen()
                  ? e.trackFullscreen()
                  : e.trackExitFullscreen();
              }
              function s() {
                if (window._molSettings.breakDuration) {
                  if (
                    window._molSettings.realVideoDuration &&
                    Math.abs(
                      window._molSettings.realVideoDuration - o.currentTime()
                    ) < 2
                  )
                    return;
                } else if (Math.abs(o.duration() - o.currentTime()) < 2) return;
                e.trackPause(),
                  v.showBigPlayButton(o, !0),
                  v.once(
                    o,
                    ["play", "vast.adEnd", "vast.adsCancel"],
                    function (t) {
                      "play" === t.type &&
                        (e.trackResume(), v.showBigPlayButton(o, !1));
                    }
                  );
              }
              function l() {
                var t = 1e3 * o.currentTime();
                e.trackProgress(t);
              }
              function d() {
                e.trackImpressions(), e.trackCreativeView();
              }
              function c() {
                var t = o.muted();
                t ? e.trackMute() : r && e.trackUnmute(), (r = t);
              }
            }),
            (l.prototype._addSkipButton = function (t, n, e, i) {
              var r,
                o,
                a,
                s,
                l = this;
              g.isNumber(e.skipoffset) &&
                ((o = e.skipoffset / 1e3),
                (r = this.player),
                (o = o),
                (a = (function (e) {
                  var i = window.document.createElement("div");
                  return (
                    (i.className = "vast-skip-button vjs-hidden"),
                    (i.id = "adSkipButton"),
                    (i.tabIndex = 0),
                    (i.onkeydown = function (t) {
                      t.preventDefault(), t.stopPropagation(), i.click();
                    }),
                    (i.onclick = function (t) {
                      if (
                        (h.hasClass(i, "enabled") &&
                          (n.trackSkip(), e.trigger("vast.adSkip")),
                        v.showBigPlayButton(e, !1),
                        void 0 === window.Event.prototype.stopPropagation)
                      )
                        return !1;
                      t.stopPropagation();
                    }),
                    i
                  );
                })(r)),
                (s = function (t, e, i) {
                  e = Math.ceil(e - i.currentTime());
                  0 < e && !h.hasClass(t, "enabled")
                    ? ((t.innerHTML =
                        '<p class="vast-skip-button-text">' +
                        window._molSettings.skipText +
                        " " +
                        g.toFixedDigits(e, 0) +
                        "</p>"),
                      (t.className = "vast-skip-button"))
                    : h.hasClass(t, "enabled") ||
                      ((t.innerHTML =
                        window._molSettings.skipButtonText +
                        '<span class="vjs-vast-skip-icon"><svg viewBox="0 0 32 32"><path d="M7 24l12.75-9-12.75-9v18zM22 6v18h3v-18h-3z"></path></svg></span>'),
                      (t.className = "vast-skip-button enabled"));
                  window.document.getElementById("iframeBackButton") ||
                    (t.style.display = "block");
                }.bind(l, a, o, r)),
                r.el().appendChild(a),
                r.on("timeupdate", s),
                v.once(r, ["vast.adEnd", "vast.adsCancel"], function () {
                  r.off("timeupdate", s), h.remove(a);
                })),
                i(null, t, n, e);
            }),
            (l.prototype._addClickThrough = function (i, t, e, n) {
              var r,
                o,
                a,
                s,
                l = this.enableFullscreenClickIFrame,
                d = this.player;
              return (
                "link" == window._molSettings.clickThroughMethod
                  ? e.clickThrough &&
                    ((function (t, e) {
                      {
                        var i, n, r;
                        e.clickThrough &&
                          ((i = t.controlBar
                            .el()
                            .querySelector(".vjs-vast-div")),
                          (n = t.controlBar
                            .el()
                            .querySelector(".vjs-vast-num")),
                          (r = t.controlBar
                            .el()
                            .querySelector(".vjs-vast-label")),
                          n && n.classList.add("vjs-hidden"),
                          r && r.classList.add("vjs-hidden"),
                          i ||
                            ((i = document.createElement("div")).className =
                              "vjs-vast-div"),
                          (n = "Ad"),
                          1 < videojs.vast_adPodTotal &&
                            (n +=
                              '<span class="vjs-vast-pod">' +
                              videojs.vast_adPodCurrent +
                              " of " +
                              videojs.vast_adPodTotal +
                              "</span>"),
                          (n += '<span class="vjs-vast-timer"></span>'),
                          (r = e.clickThrough),
                          20 <
                            (e = (e = (e = r.replace(
                              /^https?:\/\//,
                              ""
                            )).replace(/:\d+/, "")).replace("www.", ""))
                              .length && (e = e.substring(0, 17) + "..."),
                          (n +=
                            '<a rel="nofollow" target="_blank" href="' +
                            r +
                            '"><span class="vjs-label-icon"><svg fill="#fff" height="100%" version="1.1" viewBox="0 0 48 48" width="100%"><path d="M0 0h48v48H0z" fill="none"></path><path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"></path></svg></span>' +
                            e +
                            "</a> "),
                          (i.innerHTML = n),
                          t.controlBar.el().appendChild(i));
                      }
                    })(d, e),
                    d.on("timeupdate", c),
                    v.once(d, ["vast.adEnd", "vast.adsCancel"], function () {
                      d.off("timeupdate", c);
                      var t = d.controlBar.el().querySelector(".vjs-vast-div");
                      t && d.controlBar.el().removeChild(t);
                    }))
                  : ((r = d.controlBar.el().querySelector(".vjs-vast-num")),
                    (o = d.controlBar.el().querySelector(".vjs-vast-label")),
                    r && r.classList.remove("vjs-hidden"),
                    o && o.classList.remove("vjs-hidden"),
                    (a = (function (i, n, t) {
                      if (window._molSettings.disableClickThru)
                        return window.document.createElement("div");
                      var e = window.document.createElement("a"),
                        r = t.clickThrough;
                      (window._molSettings.clickURL = u(r, i)),
                        (i.adhref = u(r, i)),
                        h.addClass(e, "vast-blocker"),
                        i.$(".vjs-tech").hasAttribute("outstreamvisit") &&
                          (e.className = "vast-blocker vjs-visit-blocker");
                      g.isIDevice() || (e.href = u(r, i));
                      i.$(".vjs-tech").hasAttribute("outstreamvisit") &&
                        (e.innerHTML = i.localize("VISIT"));
                      g.isString(r) && (e.target = "_blank");
                      function o(t) {
                        i.paused(), i.pause(), n.trackClick();
                        var e = u(r, i);
                        if ("" == e || "#" == e) return !1;
                        g.isIDevice() &&
                          (setTimeout(function () {
                            window.open(u(r, i), "_blank");
                          }, 1),
                          void 0 !== window.Event.prototype.stopPropagation &&
                            t.stopPropagation(),
                          setTimeout(function () {
                            i.paused() || i.pause();
                          }, 500)),
                          (e = i.duration() - i.currentTime()) < 3 &&
                            0 < e &&
                            setTimeout(function () {
                              v.once(
                                i,
                                [
                                  "playing",
                                  "vast.adEnd",
                                  "vast.adsCancel",
                                  "vast.adSkip",
                                ],
                                function () {}
                              );
                            }, 500);
                      }
                      g.isIDevice() ? (e.ontouchend = o) : (e.onclick = o);
                      i.isFullscreen() && l && (e.style.display = "none");
                      return e;
                    })(d, t, e)),
                    (s = function (t, e, i) {
                      g.isIDevice() || (t.href = u(e.clickThrough, i));
                    }.bind(this, a, e, d)),
                    d.el().insertBefore(a, d.controlBar.el()),
                    d.on("timeupdate", s),
                    d.$(".vjs-tech").hasAttribute("outstream") ||
                      v.once(d, ["vast.adEnd", "vast.adsCancel"], function () {
                        d.off("timeupdate", s),
                          d.off("fullscreenchange", p),
                          h.remove(a);
                      }),
                    l && d.on("fullscreenchange", p)),
                n(null, i, t, e)
              );
              function c() {
                var t,
                  e = d.el().querySelector(".vjs-vast-timer");
                e &&
                  ((t = (function (t, e) {
                    t = t < 0 ? 0 : t;
                    let i = Math.floor(t % 60),
                      n = Math.floor((t / 60) % 60),
                      r = Math.floor(t / 3600);
                    var o = Math.floor((e / 60) % 60),
                      e = Math.floor(e / 3600);
                    return (
                      (r =
                        0 <
                          (r = !isNaN(t) && t !== 1 / 0 ? r : (n = i = "-")) ||
                        0 < e
                          ? r + ":"
                          : ""),
                      (n = ((r || 10 <= o) && n < 10 ? "0" + n : n) + ":"),
                      (i = i < 10 ? "0" + i : i),
                      r + n + i
                    );
                  })(d.duration() - d.currentTime(), d.duration())),
                  (e.innerHTML = "- " + t));
              }
              function u(t, e) {
                e = {
                  ASSETURI: i.src,
                  CONTENTPLAYHEAD: f.formatProgress(1e3 * e.currentTime()),
                };
                return t ? f.parseURLMacro(t, e) : "#";
              }
              function p() {
                a.style.display = d.isFullscreen() ? "none" : "block";
              }
            }),
            (l.prototype._addClickThroughDivBlocker = function (n, t, e, i) {
              var r, o, a, s, l, d;
              return (
                this.enableFullscreenClickIFrame &&
                  ((r = this.player),
                  (o = (function (i) {
                    var n = window.document.createElement("div");
                    h.addClass(n, "vast-blocker"),
                      window._molSettings.disableClickThru ||
                        (n.onclick = function (e) {
                          if (i.paused())
                            return (
                              i.play(),
                              void 0 !==
                                window.Event.prototype.stopPropagation &&
                                e.stopPropagation(),
                              !1
                            );
                          i.pause(),
                            (l = window.document.createElement("iframe")),
                            h.addClass(l, "vast-blocker"),
                            (l.src = s),
                            n.appendChild(l),
                            (d = window.document.createElement("div")),
                            h.addClass(d, "vast-back-button"),
                            h.addClass(d, "enabled"),
                            (d.innerHTML = "Back"),
                            (d.id = "iframeBackButton"),
                            n.appendChild(d),
                            d.addEventListener("click", function () {
                              n.removeChild(l),
                                (l = null),
                                n.removeChild(d),
                                (d = null);
                              var t =
                                window.document.getElementById("adSkipButton");
                              t && (t.style.display = "block"),
                                i.controls(!0),
                                void 0 !==
                                  window.Event.prototype.stopPropagation &&
                                  e.stopPropagation();
                            }),
                            setTimeout(function () {
                              v.showBigPlayButton(i, !1);
                            }, 1);
                          var t =
                            window.document.getElementById("adSkipButton");
                          t && (t.style.display = "none"), i.controls(!1);
                        });
                    i.isFullscreen() || (n.style.display = "none");
                    return n;
                  })(r)),
                  (a = function (t, e, i) {
                    s = (function (t, e) {
                      e = {
                        ASSETURI: n.src,
                        CONTENTPLAYHEAD: f.formatProgress(
                          1e3 * e.currentTime()
                        ),
                      };
                      return t ? f.parseURLMacro(t, e) : "#";
                    })(e.clickThrough, i);
                  }.bind(this, o, e, r)),
                  r.el().insertBefore(o, r.controlBar.el()),
                  r.on("timeupdate", a),
                  v.once(r, ["vast.adEnd", "vast.adsCancel"], function () {
                    r.off("timeupdate", a),
                      r.off("fullscreenchange", c),
                      h.remove(o);
                  }),
                  r.on("fullscreenchange", c)),
                i(null, n, t, e)
              );
              function c() {
                var t;
                (o.style.display = r.isFullscreen() ? "block" : "none"),
                  !r.isFullscreen() &&
                    l &&
                    (o.removeChild(l),
                    (l = null),
                    o.removeChild(d),
                    (d = null),
                    v.showBigPlayButton(r, !0),
                    (t = window.document.getElementById("adSkipButton")) &&
                      (t.style.display = "none"),
                    r.controls(!0));
              }
            }),
            (l.prototype._playSelectedAd = function (t, n, r) {
              var o = this.player;
              if (o && o.vast && !0 === o.vast.adsCancelled) r(null);
              else {
                window.MoatApiReference = null;
                try {
                  o.preload("auto"), o.src(t);
                } catch (t) {
                  o.trigger("vast.adEnd");
                }
                s.debug(
                  "<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad..."
                ),
                  v.once(
                    o,
                    ["durationchange", "error", "vast.adsCancel"],
                    function (t) {
                      i && (clearInterval(i), (i = null)),
                        "durationchange" === t.type
                          ? (s.debug(
                              "<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()"
                            ),
                            v.once(
                              o,
                              ["playing", "vast.adsCancel"],
                              function (t) {
                                if ("vast.adsCancel" !== t.type) {
                                  if (
                                    (s.debug(
                                      "<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart..."
                                    ),
                                    o.trigger("vast.adStart"),
                                    g.isMobile())
                                  )
                                    for (var e = 0; e < 5; e++)
                                      setTimeout(function () {
                                        o.userActive(!0);
                                      }, 2e3 * e);
                                  o.on("ended", i),
                                    o.on("vast.adsCancel", i),
                                    o.on("vast.adSkip", i);
                                }
                                function i(t) {
                                  if ("ended" === t.type)
                                    if (window._molSettings.breakDuration) {
                                      if (
                                        window._molSettings.realVideoDuration &&
                                        3 <
                                          window._molSettings
                                            .realVideoDuration -
                                            o.currentTime()
                                      )
                                        return;
                                    } else if (
                                      3 <
                                      o.duration() - o.currentTime()
                                    )
                                      return;
                                  o.off("ended", i),
                                    o.off("vast.adsCancel", i),
                                    o.off("vast.adSkip", i),
                                    ("ended" !== t.type &&
                                      "vast.adSkip" !== t.type) ||
                                      r(null, n);
                                }
                              }
                            ),
                            s.debug(
                              "<VASTIntegrator._playSelectedAd/playAd> calling player.play()..."
                            ),
                            1 < o.currentTime() || e
                              ? (s.debug(
                                  "<VASTIntegrator._playSelectedAd/playAd> Trigger alreadyPlaying event if ad video already playing or durationchange not fired"
                                ),
                                o.trigger("alreadyPlaying"))
                              : o.play())
                          : "error" === t.type &&
                            r(
                              new a(
                                "on VASTIntegrator, Player is unable to play the Ad",
                                400
                              ),
                              n
                            );
                    }
                  );
                var e = !1,
                  i = setInterval(function () {
                    s.debug(
                      "<VASTIntegrator._playSelectedAd> Ad video duration: " +
                        o.duration()
                    );
                    var t = o.duration();
                    try {
                      isNaN(t) ||
                        mainDuration == o.duration() ||
                        (clearInterval(i),
                        (e = !(i = null)),
                        s.debug(
                          "<VASTIntegrator._playSelectedAd> Trigger simulateDurationchange event"
                        ),
                        o.trigger("simulateDurationchange"));
                    } catch (t) {}
                  }, 500);
                setTimeout(function () {
                  i && (clearInterval(i), (i = null));
                }, 5e3);
              }
            }),
            (l.prototype._trackError = function (t, e) {
              f.track(e.errorURLMacros, { ERRORCODE: t.code || 900 });
            }),
            (e.exports = l);
        },
        {
          "../../utils/async": 36,
          "../../utils/consoleLogger": 37,
          "../../utils/dom": 38,
          "../../utils/playerUtils": 41,
          "../../utils/utilityFunctions": 43,
          "./VASTError": 19,
          "./VASTResponse": 21,
          "./VASTTracker": 22,
          "./vastUtil": 28,
        },
      ],
      21: [
        function (t, e, i) {
          "use strict";
          var n = t("./Ad"),
            r = t("./VideoClicks"),
            o = t("./Linear"),
            a = t("./InLine"),
            s = t("./Wrapper"),
            l = t("../../utils/utilityFunctions");
          function d() {
            if (!(this instanceof d)) return new d();
            (this._linearAdded = !1),
              (this._nonlinearAdded = !1),
              (this.vastVersion = void 0),
              (this.ads = []),
              (this.errorURLMacros = []),
              (this.impressions = []),
              (this.clickTrackings = []),
              (this.customClicks = []),
              (this.trackingEvents = {}),
              (this.mediaFiles = []),
              (this.clickThrough = void 0),
              (this.adTitle = ""),
              (this.duration = void 0),
              (this.skipoffset = void 0),
              (this.icons = []);
          }
          function c(e, t) {
            t.forEach(function (t) {
              t && e.push(t);
            });
          }
          (window.InLine__A = a),
            (d.prototype.addAd = function (t) {
              var e, i;
              t instanceof n &&
                ((e = t.inLine),
                (i = t.wrapper),
                this.ads.push(t),
                e && this._addInLine(e),
                i) &&
                this._addWrapper(i);
            }),
            (d.prototype._addErrorTrackUrls = function (t) {
              l.isArray(t) && c(this.errorURLMacros, t);
            }),
            (d.prototype._addImpressions = function (t) {
              l.isArray(t) && c(this.impressions, t);
            }),
            (d.prototype._addClickThrough = function (t) {
              l.isNotEmptyString(t) && (this.clickThrough = t);
            }),
            (d.prototype._addClickTrackings = function (t) {
              l.isArray(t) && c(this.clickTrackings, t);
            }),
            (d.prototype._addCustomClicks = function (t) {
              l.isArray(t) && c(this.customClicks, t);
            }),
            (d.prototype._addTrackingEvents = function (t) {
              var e = this.trackingEvents;
              t &&
                (t = l.isArray(t) ? t : [t]).forEach(function (t) {
                  e[t.name] || (e[t.name] = []), e[t.name].push(t);
                });
            }),
            (d.prototype._addTitle = function (t) {
              l.isNotEmptyString(t) && (this.adTitle = t);
            }),
            (d.prototype._addDuration = function (t) {
              l.isNumber(t) && (this.duration = t);
            }),
            (d.prototype._addVideoClicks = function (t) {
              t instanceof r &&
                (this._addClickThrough(t.clickThrough),
                this._addClickTrackings(t.clickTrackings),
                this._addCustomClicks(t.customClicks));
            }),
            (d.prototype._addMediaFiles = function (t) {
              l.isArray(t) && c(this.mediaFiles, t);
            }),
            (d.prototype._addSkipoffset = function (t) {
              window._molSettings && window._molSettings.skippable
                ? window._molSettings.skippable.enabled &&
                  (!this.duration ||
                    !window._molSettings.skippable.videoThreshold ||
                    this.duration >=
                      window._molSettings.skippable.videoThreshold) &&
                  (this.skipoffset = window._molSettings.skippable.videoOffset)
                : t && (this.skipoffset = t);
            }),
            (d.prototype._addAdParameters = function (t) {
              t && (this.adParameters = t);
            }),
            (d.prototype._addIcons = function (t) {
              l.isArray(t) && c(this.icons, t);
            }),
            (d.prototype._addLinear = function (t) {
              t instanceof o &&
                (this._addDuration(t.duration),
                this._addTrackingEvents(t.trackingEvents),
                this._addVideoClicks(t.videoClicks),
                this._addMediaFiles(t.mediaFiles),
                this._addSkipoffset(t.skipoffset),
                this._addAdParameters(t.adParameters),
                this._addIcons(t.icons),
                (this._linearAdded = !0));
            }),
            (d.prototype._addInLine = function (t) {
              var e = this;
              t instanceof a &&
                (this._addTitle(t.adTitle),
                this._addErrorTrackUrls(t.errors),
                this._addImpressions(t.impressions),
                t.creatives.forEach(function (t) {
                  t.linear && e._addLinear(t.linear);
                }));
            }),
            (d.prototype._addWrapper = function (t) {
              var e = this;
              t instanceof s &&
                (this._addErrorTrackUrls(t.errors),
                this._addImpressions(t.impressions),
                t.creatives.forEach(function (t) {
                  t = t.linear;
                  t &&
                    (e._addVideoClicks(t.videoClicks),
                    (e.clickThrough = void 0),
                    e._addTrackingEvents(t.trackingEvents),
                    e._addIcons(t.icons));
                }));
            }),
            (d.prototype.hasLinear = function () {
              return this._linearAdded;
            }),
            (e.exports = d);
        },
        {
          "../../utils/utilityFunctions": 43,
          "./Ad": 7,
          "./InLine": 12,
          "./Linear": 14,
          "./VideoClicks": 24,
          "./Wrapper": 26,
        },
      ],
      22: [
        function (t, e, i) {
          "use strict";
          var n = t("./VASTError"),
            r = t("./VASTResponse"),
            o = t("./vastUtil"),
            h = t("../../utils/utilityFunctions");
          function a(t, e) {
            if (!(this instanceof a)) return new a(t, e);
            this.sanityCheck(t, e), this.initialize(t, e);
          }
          (a.prototype.initialize = function (t, e) {
            (this.response = e),
              (this.assetURI = t),
              (this.progress = 0),
              (this.quartiles = {
                firstQuartile: {
                  tracked: !1,
                  time: Math.round(25 * e.duration) / 100,
                },
                midpoint: {
                  tracked: !1,
                  time: Math.round(50 * e.duration) / 100,
                },
                thirdQuartile: {
                  tracked: !1,
                  time: Math.round(75 * e.duration) / 100,
                },
              });
          }),
            (a.prototype.sanityCheck = function (t, e) {
              if (!h.isString(t) || h.isEmptyString(t))
                throw new n(
                  "on VASTTracker constructor, missing required the URI of the ad asset being played"
                );
              if (!(e instanceof r))
                throw new n(
                  "on VASTTracker constructor, missing required VAST response"
                );
            }),
            (a.prototype.trackURLs = function (t, e) {
              h.isArray(t) &&
                0 < t.length &&
                ((e = h.extend(
                  {
                    ASSETURI: this.assetURI,
                    CONTENTPLAYHEAD: o.formatProgress(this.progress),
                  },
                  e || {}
                )),
                o.track(t, e));
            }),
            (a.prototype.trackEvent = function (t, e) {
              this.response.trackingEvents[t] &&
                window._molSettings.viewabilityTracking &&
                window._molSettings.viewabilityTracking.invokeEvent(t),
                this.trackURLs(
                  (function (t) {
                    var e;
                    t &&
                      ((e = []),
                      t.forEach(function (t) {
                        t.uri && e.push(t.uri);
                      }));
                    return e;
                  })(this.response.trackingEvents[t])
                ),
                e && (this.response.trackingEvents[t] = void 0);
            }),
            (a.prototype.trackProgress = function (t) {
              var e,
                i,
                n,
                r,
                o,
                a,
                s,
                l = this,
                d = [],
                c = !0,
                u = this.response.trackingEvents;
              function p(t, e) {
                var i = n[t];
                !(function (t, e) {
                  t = t.time;
                  return t <= e && e <= t + 5e3;
                })(i, e) || ((i.tracked = !0), f(t, c, !0));
              }
              function f(t, e, i) {
                u[t] && i && d.push({ name: t, trackOnce: !!e });
              }
              h.isNumber(t) &&
                (f("start", c, 0 < t),
                f(
                  "rewind",
                  !1,
                  ((a = this.progress), (s = t) < a && 3e3 < Math.abs(s - a))
                ),
                (s = t),
                (n = l.quartiles),
                (a = l.quartiles.firstQuartile),
                (r = l.quartiles.midpoint),
                (o = l.quartiles.thirdQuartile),
                a.tracked
                  ? r.tracked
                    ? o.tracked || p("thirdQuartile", s)
                    : p("midpoint", s)
                  : p("firstQuartile", s),
                (e = t),
                h.isArray(u.progress) &&
                  ((i = []),
                  u.progress.forEach(function (t) {
                    t.offset <= e ? l.trackURLs([t.uri]) : i.push(t);
                  }),
                  (u.progress = i)),
                d.forEach(function (t) {
                  l.trackEvent(t.name, t.trackOnce),
                    window.mol_player.trigger("vast", { eventType: t.name });
                }),
                (this.progress = t));
            }),
            [
              "rewind",
              "fullscreen",
              "exitFullscreen",
              "pause",
              "resume",
              "mute",
              "unmute",
              "acceptInvitation",
              "acceptInvitationLinear",
              "collapse",
              "expand",
            ].forEach(function (t) {
              a.prototype["track" + h.capitalize(t)] = function () {
                this.trackEvent(t),
                  window.mol_player.trigger("vast", { eventType: t });
              };
            }),
            ["start", "skip", "close", "closeLinear"].forEach(function (t) {
              a.prototype["track" + h.capitalize(t)] = function () {
                this.trackEvent(t, !0),
                  window.mol_player.trigger("vast", { eventType: t });
              };
            }),
            ["firstQuartile", "midpoint", "thirdQuartile"].forEach(function (
              t
            ) {
              a.prototype["track" + h.capitalize(t)] = function () {
                (this.quartiles[t].tracked = !0),
                  this.trackEvent(t, !0),
                  window.mol_player.trigger("vast", { eventType: t });
              };
            }),
            (a.prototype.trackComplete = function () {
              this.quartiles.thirdQuartile.tracked &&
                (this.trackEvent("complete", !0),
                window.mol_player.trigger("vast", { eventType: "complete" }));
            }),
            (a.prototype.trackErrorWithCode = function (t) {
              h.isNumber(t) &&
                this.trackURLs(this.response.errorURLMacros, { ERRORCODE: t });
            }),
            (a.prototype.trackImpressions = function () {
              this.trackURLs(this.response.impressions),
                window.mol_player.trigger("vast", { eventType: "impression" });
            }),
            (a.prototype.trackCreativeView = function () {
              this.trackEvent("creativeView"),
                window.mol_player.trigger("vast", {
                  eventType: "creativeView",
                });
            }),
            (a.prototype.trackClick = function () {
              window._molSettings.viewabilityTracking &&
                window._molSettings.viewabilityTracking.invokeEvent("ad-click"),
                this.trackURLs(this.response.clickTrackings),
                window.mol_player.trigger("vast", { eventType: "click" });
            }),
            (e.exports = a);
        },
        {
          "../../utils/utilityFunctions": 43,
          "./VASTError": 19,
          "./VASTResponse": 21,
          "./vastUtil": 28,
        },
      ],
      23: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/xml"),
            r = t("./vastUtil"),
            o = t("../../utils/utilityFunctions");
          function a(t) {
            if (!(this instanceof a)) return new a(t);
            function e(t) {
              var e = [];
              return (
                t &&
                  (o.isArray(t) ? t : [t]).forEach(function (t) {
                    e.push({
                      apiFramework: t.attr("apiFramework"),
                      uri: n.keyValue(t),
                    });
                  }),
                e
              );
            }
            (this.vendor = t.attr("vendor")),
              t.javaScriptResource &&
                (this.javaScriptResources = e(t.javaScriptResource)),
              r.isFlashSupported() &&
                t.flashResource &&
                (this.javaScriptResources = e(t.javaScriptResource)),
              t.viewableImpression &&
                (this.viewableImpression = {
                  id: t.viewableImpression.attr("id"),
                  uri: n.keyValue(t.viewableImpression),
                });
          }
          (a.parseAdVerifications = function (t) {
            var e = [];
            return (
              o.isDefined(t) &&
                o.isDefined(t.verification) &&
                (o.isArray(t.verification)
                  ? t.verification
                  : [t.verification]
                ).forEach(function (t) {
                  e.push(new a(t));
                }),
              e
            );
          }),
            (e.exports = a);
        },
        {
          "../../utils/utilityFunctions": 43,
          "../../utils/xml": 44,
          "./vastUtil": 28,
        },
      ],
      24: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/utilityFunctions"),
            r = t("../../utils/xml");
          e.exports = function t(e) {
            if (!(this instanceof t)) return new t(e);
            function i(t) {
              var e = [];
              return (
                t &&
                  (t = n.isArray(t) ? t : [t]).forEach(function (t) {
                    e.push(r.keyValue(t));
                  }),
                e
              );
            }
            r.attr(e.clickThrough, "method")
              ? (window._molSettings.clickThroughMethod = r.attr(
                  e.clickThrough,
                  "method"
                ))
              : (window._molSettings.clickThroughMethod = "blocker"),
              (this.clickThrough = r.keyValue(e.clickThrough)),
              (this.clickTrackings = i(e.clickTracking)),
              (this.customClicks = i(e.customClick));
          };
        },
        { "../../utils/utilityFunctions": 43, "../../utils/xml": 44 },
      ],
      25: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/xml"),
            r = t("../../utils/utilityFunctions");
          e.exports = function t(e) {
            if (!(this instanceof t)) return new t(e);
            function i(t) {
              var e = [];
              return (
                t &&
                  (r.isArray(t) ? t : [t]).forEach(function (t) {
                    e.push(n.keyValue(t));
                  }),
                e
              );
            }
            (this.id = e.attr("id")),
              e.viewable && (this.viewables = i(e.viewable)),
              e.notViewable && (this.notViewables = i(e.notViewable)),
              e.viewUndetermined &&
                (this.viewUndetermineds = i(e.viewUndetermined));
          };
        },
        { "../../utils/utilityFunctions": 43, "../../utils/xml": 44 },
      ],
      26: [
        function (t, e, i) {
          "use strict";
          var n = t("./vastUtil"),
            r = t("./Creative"),
            o = t("./ViewableImpression"),
            a = t("./Verification"),
            s = t("../../utils/utilityFunctions"),
            l = t("../../utils/xml");
          e.exports = function t(e) {
            if (!(this instanceof t)) return new t(e);
            (this.adSystem = l.keyValue(e.adSystem)),
              (this.impressions = n.parseImpressions(e.impression)),
              (this.VASTAdTagURI = l.keyValue(e.vASTAdTagURI)),
              (this.creatives = r.parseCreatives(e.creatives)),
              (this.errors = n.parseErrors(e.error)),
              (this.extensions = e.extensions),
              (this.followAdditionalWrappers =
                !s.isDefined(l.attr(e, "followAdditionalWrappers")) ||
                l.attr(e, "followAdditionalWrappers")),
              (this.allowMultipleAds = l.attr(e, "allowMultipleAds")),
              (this.fallbackOnNoAd = l.attr(e, "fallbackOnNoAd")),
              (this.ver = window.mol_vastVersion),
              4 === this.ver &&
                (e.viewableImpression &&
                  (this.viewableImpression = new o(e.viewableImpression)),
                e.adVerifications) &&
                (this.adVerifications = a.parseAdVerifications(
                  e.adVerifications
                ));
          };
        },
        {
          "../../utils/utilityFunctions": 43,
          "../../utils/xml": 44,
          "./Creative": 10,
          "./Verification": 23,
          "./ViewableImpression": 25,
          "./vastUtil": 28,
        },
      ],
      27: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/utilityFunctions"),
            r = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/,
            o = {
              duration: function (t) {
                var e;
                return (
                  n.isString(t) &&
                    (t = t.match(r)) &&
                    ((e = t[1]),
                    (e =
                      60 * parseInt(e, 10) * 60 * 1e3 +
                      60 * parseInt(t[2], 10) * 1e3 +
                      1e3 * parseInt(t[3], 10) +
                      parseInt(t[5] || 0))),
                  isNaN(e) ? null : e
                );
              },
              offset: function (t, e) {
                var i;
                return /^\d+(\.\d+)?%$/g.test(t)
                  ? ((i = t),
                    (e = e) ? (e * parseFloat(i.replace("%", ""))) / 100 : null)
                  : o.duration(t);
              },
            };
          e.exports = o;
        },
        { "../../utils/utilityFunctions": 43 },
      ],
      28: [
        function (t, e, i) {
          "use strict";
          var r = t("../../utils/utilityFunctions"),
            n = {
              track: function (t, e) {
                var t = n.parseURLMacros(t, e),
                  i = [];
                return (
                  t.forEach(function (t) {
                    var e = new Image();
                    (e.src = t), i.push(e);
                  }),
                  i
                );
              },
              parseURLMacros: function (t, e) {
                var i = [];
                return (
                  (e = e || {}).CACHEBUSTING ||
                    (e.CACHEBUSTING = Math.round(1e10 * Math.random())),
                  t.forEach(function (t) {
                    i.push(n._parseURLMacro(t, e));
                  }),
                  i
                );
              },
              parseURLMacro: function (t, e) {
                return (
                  (e = e || {}).CACHEBUSTING ||
                    (e.CACHEBUSTING = Math.round(1e10 * Math.random())),
                  n._parseURLMacro(t, e)
                );
              },
              _parseURLMacro: function (i, t) {
                return (
                  r.forEach((t = t || {}), function (t, e) {
                    i = i.replace(new RegExp("\\[" + e + "\\]", "gm"), t);
                  }),
                  i
                );
              },
              parseDuration: function (t) {
                var e;
                return (
                  r.isString(t) &&
                    (t = t.match(/(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/)) &&
                    ((e = t[1]),
                    (e =
                      60 * parseInt(e, 10) * 60 * 1e3 +
                      60 * parseInt(t[2], 10) * 1e3 +
                      1e3 * parseInt(t[3], 10) +
                      parseInt(t[5] || 0))),
                  isNaN(e) ? null : e
                );
              },
              parseImpressions: function (t) {
                return t
                  ? ((t = r.isArray(t) ? t : [t]),
                    r.transformArray(t, function (t) {
                      if (r.isNotEmptyString(t.keyValue)) return t.keyValue;
                    }))
                  : [];
              },
              parseErrors: function (t) {
                return t
                  ? ((t = r.isArray(t) ? t : [t]),
                    r.transformArray(t, function (t) {
                      if (r.isNotEmptyString(t.keyValue)) return t.keyValue;
                    }))
                  : [];
              },
              formatProgress: function (t) {
                var e,
                  i,
                  n = t / 36e5;
                return (
                  (n = Math.floor(n)),
                  (e = Math.floor((t / 6e4) % 60)),
                  (i = Math.floor((t / 1e3) % 60)),
                  (t = t % 1e3),
                  r.toFixedDigits(n, 2) +
                    ":" +
                    r.toFixedDigits(e, 2) +
                    ":" +
                    r.toFixedDigits(i, 2) +
                    "." +
                    r.toFixedDigits(t, 3)
                );
              },
              parseOffset: function (t, e) {
                var i;
                return /^\d+(\.\d+)?%$/g.test(t)
                  ? ((i = t),
                    (e = e) ? (e * parseFloat(i.replace("%", ""))) / 100 : null)
                  : n.parseDuration(t);
              },
              VPAID_techs: [t("../vpaid/VPAIDHTML5Tech")],
              isVPAID: function (t) {
                return !!t && "VPAID" === t.apiFramework;
              },
              findSupportedVPAIDTech: function (t) {
                for (var e, i = 0, n = this.VPAID_techs.length; i < n; i += 1)
                  if ((e = this.VPAID_techs[i]).supports(t)) return e;
                return null;
              },
              isFlashSupported: function () {
                return !1;
              },
            };
          e.exports = n;
        },
        { "../../utils/utilityFunctions": 43, "../vpaid/VPAIDHTML5Tech": 30 },
      ],
      29: [
        function (t, e, i) {
          "use strict";
          var l = t("../vast/VASTError"),
            d = t("../../utils/utilityFunctions"),
            a = t("../../utils/consoleLogger");
          function r(t, e) {
            if (!(this instanceof r)) return new r(t, e);
            var i = t,
              n = e;
            if (!i || !r.checkVPAIDInterface(i))
              throw new l(
                "on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface"
              );
            if (!d.isObject(n))
              throw new l(
                "on VPAIDAdUnitWrapper, expected options hash  but got '" +
                  n +
                  "'"
              );
            if (!("responseTimeout" in n && d.isNumber(n.responseTimeout)))
              throw new l(
                "on VPAIDAdUnitWrapper, expected responseTimeout in options"
              );
            (this.options = d.extend({}, e)),
              (this.adStarted = !1),
              (this._adUnit = t);
          }
          (r.checkVPAIDInterface = function (t) {
            for (
              var e,
                i = [
                  "handshakeVersion",
                  "initAd",
                  "startAd",
                  "stopAd",
                  "resizeAd",
                  "pauseAd",
                  "expandAd",
                  "collapseAd",
                ],
                n = 0,
                r = i.length;
              n < r;
              n++
            )
              if (!t || !d.isFunction(t[i[n]])) return !1;
            return (
              (e = t),
              (d.isFunction(e.subscribe) ||
                d.isFunction(e.addEventListener) ||
                d.isFunction(e.on)) &&
                ((e = t),
                d.isFunction(e.unsubscribe) ||
                  d.isFunction(e.removeEventListener) ||
                  d.isFunction(e.off))
            );
          }),
            (r.prototype.adUnitAsyncCall = function () {
              var t,
                e = d.arrayLikeObjToArray(arguments),
                i = e.shift(),
                n = e.pop(),
                r = i,
                o = n,
                a = this._adUnit;
              if (!d.isString(r) || !d.isFunction(a[r]))
                throw new l(
                  "on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name"
                );
              if (!d.isFunction(o))
                throw new l(
                  "on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback"
                );
              e.push(function () {
                t && clearTimeout(t), n.apply(this, arguments);
              }),
                this._adUnit[i].apply(this._adUnit, e),
                (t = setTimeout(function () {
                  (t = null),
                    n(
                      new l(
                        "on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" +
                          i +
                          "'"
                      )
                    ),
                    (n = d.noop);
                }, this.options.responseTimeout));
            }),
            (r.prototype.on = function (t, e) {
              (
                this._adUnit.addEventListener ||
                this._adUnit.subscribe ||
                this._adUnit.on
              ).call(this._adUnit, t, e);
            }),
            (r.prototype.off = function (t, e) {
              (
                this._adUnit.removeEventListener ||
                this._adUnit.unsubscribe ||
                this._adUnit.off
              ).call(this._adUnit, t, e);
            }),
            (r.prototype.waitForEvent = function (e, i, n) {
              var r,
                o = this,
                t = e,
                a = i;
              if (!d.isString(t))
                throw new l(
                  "on VPAIDAdUnitWrapper.waitForEvent, missing evt name"
                );
              if (!d.isFunction(a))
                throw new l(
                  "on VPAIDAdUnitWrapper.waitForEvent, missing callback"
                );
              function s() {
                o.options &&
                  o.options.player &&
                  o.options.player.trigger({
                    type: "trace.event",
                    data: { event: e },
                  }),
                  o.off(e, s);
                var t = d.arrayLikeObjToArray(arguments);
                r && (clearTimeout(r), (r = null)),
                  t.unshift(null),
                  i.apply(n, t);
              }
              (n = n || null),
                this.on(e, s),
                (r = setTimeout(function () {
                  o.off(e, s),
                    0 <= window._timeoutIds.indexOf(r) &&
                      (o.options &&
                        o.options.player &&
                        o.options.player.trigger({
                          type: "trace.message",
                          data: {
                            message: "Timeout while waiting for event " + e,
                          },
                        }),
                      i(
                        new l(
                          "on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" +
                            e +
                            "'. You may need to increase adStartTimeout."
                        )
                      )),
                    (r = null),
                    (i = d.noop);
                }, this.options.responseTimeout)),
                window._timeoutIds.push(r);
            }),
            (r.prototype.handshakeVersion = function (t, e) {
              this.adUnitAsyncCall("handshakeVersion", t, e);
            }),
            (r.prototype.initAd = function (t, e, i, n, r, o) {
              a.log("VPAIDAdUnitWrapper->Calling initAd on creative"),
                this.waitForEvent("AdLoaded", o),
                this._adUnit.initAd(t, e, i, n, r);
            }),
            (r.prototype.resizeAd = function (t, e, i, n) {
              a.log("VPAIDAdUnitWrapper->Calling resizeAd on creative"),
                this.adUnitAsyncCall("resizeAd", t, e, i, n);
            }),
            (r.prototype.startAd = function (t) {
              a.log("VPAIDAdUnitWrapper->Calling startAd on creative"),
                this.adStarted || this.waitForEvent("AdStarted", t),
                this._adUnit.startAd(),
                this.adStarted && t(null);
            }),
            (r.prototype.stopAd = function (t) {
              a.log("VPAIDAdUnitWrapper->Calling stopAd on creative"),
                this.waitForEvent("AdStopped", t),
                this._adUnit.stopAd();
            }),
            (r.prototype.pauseAd = function (t) {
              a.log("VPAIDAdUnitWrapper->Calling pauseAd on creative"),
                this.waitForEvent("AdPaused", t),
                this._adUnit.pauseAd();
            }),
            (r.prototype.resumeAd = function (t) {
              a.log("VPAIDAdUnitWrapper->Calling resumeAd on creative"),
                this.waitForEvent("AdPlaying", t),
                this._adUnit.resumeAd();
            }),
            (r.prototype.expandAd = function (t) {
              a.log("VPAIDAdUnitWrapper->Calling expandAd on creative"),
                this.waitForEvent("AdExpandedChange", t),
                this._adUnit.expandAd();
            }),
            (r.prototype.collapseAd = function (t) {
              a.log("VPAIDAdUnitWrapper->Calling collapseAd on creative"),
                this.waitForEvent("AdExpandedChange", t),
                this._adUnit.collapseAd();
            }),
            (r.prototype.skipAd = function (t) {
              a.log("VPAIDAdUnitWrapper->Calling skipAd on creative"),
                this.waitForEvent("AdSkipped", t),
                this._adUnit.skipAd();
            }),
            [
              "adLinear",
              "adWidth",
              "adHeight",
              "adExpanded",
              "adSkippableState",
              "adRemainingTime",
              "adDuration",
              "adVolume",
              "adCompanions",
              "adIcons",
            ].forEach(function (t) {
              var e = "get" + d.capitalize(t);
              r.prototype[e] = function (t) {
                this.adUnitAsyncCall(e, t);
              };
            }),
            (r.prototype.setAdVolume = function (t, e) {
              this.adUnitAsyncCall("setAdVolume", t, e);
            }),
            (e.exports = r);
        },
        {
          "../../utils/consoleLogger": 37,
          "../../utils/utilityFunctions": 43,
          "../vast/VASTError": 19,
        },
      ],
      30: [
        function (t, e, i) {
          "use strict";
          var n = t("../../utils/mimetypes"),
            a = t("../vast/VASTError"),
            r = t("VPAIDHTML5Client/js/VPAIDHTML5Client"),
            s = t("../../utils/utilityFunctions"),
            l = t("../../utils/dom"),
            o = t("../../utils/consoleLogger");
          function d(t) {
            if (!(this instanceof d)) return new d(t);
            var e = t;
            if (!e || !s.isString(e.src)) throw new a(d.INVALID_MEDIA_FILE);
            (this.name = "vpaid-html5"),
              (this.containerEl = null),
              (this.videoEl = null),
              (this.vpaidHTMLClient = null),
              (this.mediaFile = t);
          }
          (d.VPAIDHTML5Client = r),
            (d.supports = function (t) {
              return !s.isOldIE() && -1 < n.html5.indexOf(t);
            }),
            (d.prototype.loadAdUnit = function (t, e, i) {
              var n = t,
                r = e,
                o = i;
              if (!l.isDomElement(n)) throw new a(d.INVALID_DOM_CONTAINER_EL);
              if (!l.isDomElement(r) || "video" !== r.tagName.toLowerCase())
                throw new a(d.INVALID_DOM_CONTAINER_EL);
              if (!s.isFunction(o)) throw new a(d.MISSING_CALLBACK);
              (this.containerEl = t),
                (this.videoEl = e),
                (this.vpaidHTMLClient = new d.VPAIDHTML5Client(t, e, {})),
                (this.vpaidHTMLClient._id = "vpaidIframe_" + Date.now()),
                this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, i);
            }),
            (d.prototype.unloadAdUnit = function () {
              if (this.vpaidHTMLClient) {
                try {
                  this.vpaidHTMLClient.destroy();
                } catch (t) {
                  o.error("VAST ERROR: trying to unload the VPAID adunit");
                }
                this.vpaidHTMLClient = null;
              }
              this.containerEl &&
                (l.remove(this.containerEl), (this.containerEl = null));
            });
          t = "on VPAIDHTML5Tech";
          (d.INVALID_MEDIA_FILE = t + ", invalid MediaFile"),
            (d.INVALID_DOM_CONTAINER_EL =
              t + ", invalid container HtmlElement"),
            (d.INVALID_DOM_VIDEO_EL = t + ", invalid HTMLVideoElement"),
            (d.MISSING_CALLBACK = t + ", missing valid callback"),
            (e.exports = d);
        },
        {
          "../../utils/consoleLogger": 37,
          "../../utils/dom": 38,
          "../../utils/mimetypes": 40,
          "../../utils/utilityFunctions": 43,
          "../vast/VASTError": 19,
          "VPAIDHTML5Client/js/VPAIDHTML5Client": 3,
        },
      ],
      31: [
        function (t, e, i) {
          "use strict";
          var d = t("../../utils/mimetypes"),
            l = t("../vast/VASTError"),
            c = t("../vast/VASTResponse"),
            n = t("../vast/VASTTracker"),
            y = t("../vast/vastUtil"),
            r = t("./VPAIDAdUnitWrapper"),
            s = t("../../utils/async"),
            w = t("../../utils/dom"),
            A = t("../../utils/playerUtils"),
            k = t("../../utils/utilityFunctions"),
            u = t("../../utils/consoleLogger");
          function o(t, e) {
            if (!(this instanceof o)) return new o(t);
            var i;
            function n() {
              t.userActive(!0);
            }
            (this.VIEW_MODE = {
              NORMAL: "normal",
              FULLSCREEN: "fullscreen",
              THUMBNAIL: "thumbnail",
            }),
              (this.player = t),
              (this.containerEl =
                (((i = document.createElement("div")).id =
                  "BC-VPAID-container"),
                w.addClass(i, "VPAID-container"),
                t.el().insertBefore(i, t.controlBar.el()),
                i)),
              (this.options = { responseTimeout: 5e3, VPAID_VERSION: "2.0" }),
              (this.settings = e),
              (this.contentSource = t.tech_.el_.src),
              (this.needsShowPlayer = !1),
              (this.errorHasBeenTracked = !1),
              (this.adFinished = !1),
              (this.timeUpdateTimer = null),
              (this.addMouseMoveListener = function () {
                var t = this.containerEl.getElementsByTagName("iframe");
                t.length && t[0].contentWindow.addEventListener("mousemove", n);
              }),
              (this.removeMouseMoveListener = function () {
                var t = this.containerEl.getElementsByTagName("iframe");
                t.length &&
                  t[0].contentWindow.removeEventListener("mousemove", n);
              });
          }
          function T(t, e) {
            for (
              var i = t.controlBar.getChild("currentTimeDisplay").el_.children,
                n = 0;
              n < i.length;
              n++
            )
              "bc_time_display" != i[n].id &&
                (i[n].style.display = e ? "" : "none");
          }
          function b(t, e, i) {
            var n = document.getElementById("adSkipButton"),
              r = t.el().querySelector(".vjs-tech"),
              r = w.getDimension(r),
              o = t.isFullscreen() ? i.FULLSCREEN : i.NORMAL;
            o === i.NORMAL &&
              (t.vast && (t.vast.needSyncPlay = !0),
              (r.width = t.el_.offsetWidth),
              (r.height = t.el_.offsetHeight),
              k.isAndroid()) &&
              n &&
              (n.style.display = "block"),
              o === i.FULLSCREEN &&
                (u.log(
                  "****** to fullscreen dimension = " + r.width + "," + r.height
                ),
                k.isAndroid()) &&
                n &&
                (n.style.display = "none"),
              e.resizeAd(r.width, r.height, o, p);
          }
          function p(t) {
            t && u.error("ERROR: " + t.message, t);
          }
          (o.prototype.playAd = function (e, n) {
            var r, o, i;
            return e instanceof c
              ? ((o = (r = this).player),
                u.debug(
                  "<VPAIDIntegrator.playAd> looking for supported tech..."
                ),
                (i = this._findSupportedTech(e, this.settings)),
                (n = n || k.noop),
                (this._adUnit = null),
                w.addClass(o.el(), "vjs-vpaid-ad"),
                o.on("vast.adsCancel", a),
                o.one("vpaid.adEnd", function () {
                  o.off("vast.adsCancel", a),
                    i &&
                      (u.log(
                        "VPAIDIntegrator->Calling unloadAdUnit (implicitly invokes stopAd and unsubscribes VPAID events)"
                      ),
                      i.unloadAdUnit()),
                    w.removeClass(o.el(), "vjs-vpaid-ad");
                }),
                i
                  ? (u.info("<VPAIDIntegrator.playAd> found tech: ", i),
                    s.waterfall(
                      [
                        function (t) {
                          t(null, i, e);
                        },
                        this._loadAdUnit.bind(this),
                        this._playAdUnit.bind(this),
                        this._finishPlaying.bind(this),
                      ],
                      t
                    ),
                    (this._adUnit = {
                      _paused: !0,
                      type: "VPAID",
                      pauseAd: function () {
                        o.trigger("vpaid.pauseAd"), o.pause(!0);
                      },
                      resumeAd: function () {
                        o.trigger("vpaid.resumeAd");
                      },
                      isPaused: function () {
                        return this._paused;
                      },
                      getSrc: function () {
                        return i.mediaFile;
                      },
                    }))
                  : (u.debug(
                      "<VPAIDIntegrator.playAd> could not find suitable tech"
                    ),
                    t(
                      new l(
                        "on VPAIDIntegrator.playAd, could not find a supported mediaFile",
                        403
                      ),
                      this._adUnit,
                      e
                    )),
                this._adUnit)
              : n(
                  new l(
                    "on VASTIntegrator.playAd, missing required VASTResponse"
                  )
                );
            function t(t, e, i) {
              r.removeMouseMoveListener(),
                t && i && r._trackError(i, t.code),
                o.trigger("vpaid.adEnd"),
                n(t, i);
            }
            function a() {
              o.trigger("vpaid.adEnd");
            }
          }),
            (o.prototype._findSupportedTech = function (t, e) {
              if (!(t instanceof c)) return null;
              for (
                var i,
                  n,
                  r = t.mediaFiles.filter(y.isVPAID),
                  o = e && e.preferredTech,
                  a = [],
                  s = 0,
                  l = r.length;
                s < l;
                s += 1
              )
                if (((i = r[s]), (n = y.findSupportedVPAIDTech(i.type)))) {
                  if (
                    !!o &&
                    (i.type === o || (d[o] && -1 < d[o].indexOf(i.type)))
                  )
                    return new n(i, e);
                  a.push({ mediaFile: i, tech: n });
                }
              return a.length ? new (t = a[0]).tech(t.mediaFile, e) : null;
            }),
            (o.prototype._createVPAIDAdUnitWrapper = function (t, e, i, n) {
              return new r(t, { src: e, responseTimeout: i, player: n });
            }),
            (o.prototype._loadAdUnit = function (o, a, s) {
              var l = this,
                d = this.player,
                t = d.el().querySelector(".vjs-tech"),
                c =
                  this.settings.adCancelTimeout || this.options.responseTimeout;
              o.loadAdUnit(this.containerEl, t, function (t, e) {
                if (t) return s(t, e, a);
                try {
                  var i = document.getElementsByTagName("IFRAME"),
                    n =
                      (i &&
                        0 < i.length &&
                        i[0].addEventListener("mouseover", function () {
                          d.userActive(!0),
                            w.hasClass(d.el(), "vjs-has-started") ||
                              w.addClass(d.el(), "vjs-has-started");
                        }),
                      setTimeout(function () {
                        d.controlBar.el_.classList.add("vjs-abs-hidden");
                      }, 300),
                      d.trigger({
                        type: "trace.message",
                        data: {
                          message:
                            "Playing " +
                            o.mediaFile.src +
                            " (type = " +
                            o.mediaFile.type +
                            ", apiFramework = " +
                            o.mediaFile.apiFramework +
                            ")",
                        },
                      }),
                      l._createVPAIDAdUnitWrapper(e, o.mediaFile.src, c, d)),
                    r = "vjs-" + o.name + "-ad";
                  w.addClass(d.el(), r),
                    d.one("vpaid.adEnd", function () {
                      w.removeClass(d.el(), r);
                    }),
                    s(null, n, a);
                } catch (t) {
                  s(t, e, a);
                }
              });
              (window.vpaidLoaded = !1),
                window.parent.addEventListener("message", function (t) {
                  window.postMessage(t.data, window.location.origin);
                });
            }),
            (o.prototype._playAdUnit = function (e, i, t) {
              s.waterfall(
                [
                  function (t) {
                    t(null, e, i);
                  },
                  this._handshake.bind(this),
                  this._setupEvents.bind(this),
                  this._initAd.bind(this),
                  this._addSkipButton.bind(this),
                  this._linkPlayerControls.bind(this),
                  this._startAd.bind(this),
                ],
                t
              );
            }),
            (o.prototype._handshake = function (i, n, r) {
              i.handshakeVersion(this.options.VPAID_VERSION, function (t, e) {
                return t
                  ? r(t, i, n)
                  : e &&
                    (function (t) {
                      t = (function (t) {
                        t = t.split(".");
                        return parseInt(t[0], 10);
                      })(t);
                      return 1 <= t && t <= 2;
                    })(e)
                  ? r(null, i, n)
                  : r(
                      new l(
                        'on VPAIDIntegrator._handshake, unsupported version "' +
                          e +
                          '"'
                      ),
                      i,
                      n
                    );
              });
            }),
            (o.prototype._initAd = function (e, i, n) {
              var t = this.player.el().querySelector(".vjs-tech"),
                t = w.getDimension(t);
              e.initAd(
                t.width,
                t.height,
                this.VIEW_MODE.NORMAL,
                -1,
                { AdParameters: i.adParameters || "" },
                function (t) {
                  n(t, e, i);
                }
              );
            }),
            (o.prototype._createVASTTracker = function (t, e) {
              return new n(t, e);
            }),
            (o.prototype._setupEvents = function (r, n, t) {
              var e = r.options.src,
                o = this._createVASTTracker(e, n),
                a = this.player,
                i = this.contentSource,
                s = this;
              function l() {
                s.impressionTriggered ||
                  ((s.impressionTriggered = !0),
                  a.trigger({
                    type: "trace.event",
                    data: { event: "vpaid.AdImpression" },
                  }),
                  a.trigger("vpaid.AdImpression"),
                  o.trackImpressions());
              }
              function d() {
                var n = document.getElementById("bc_time_display");
                n
                  ? (T(a, !1), (n.style.display = "block"))
                  : ((n = document.createElement("div")),
                    a.controlBar
                      .getChild("currentTimeDisplay")
                      .el_.appendChild(n),
                    (n.id = "bc_time_display"),
                    (n.class = "vjs-current-time-display"),
                    (n["aria-live"] = "off"),
                    (n.innerHTML =
                      '<span class="vjs-control-text"></span>0:00'),
                    T(a, !1)),
                  r.getAdRemainingTime(function (t, e) {
                    var i;
                    0 <= e &&
                      0 <= (e = a.duration() - e) &&
                      (n.childNodes[1].nodeValue =
                        ((e = e),
                        (e = parseInt(e + 0.5)),
                        (i = parseInt(e / 60)),
                        (e -= 60 * i),
                        i.toString() +
                          ":" +
                          (9 < e ? "" : "0") +
                          e.toString()));
                  });
              }
              function c() {
                s._adUnit && s._adUnit.isPaused() && (s._adUnit._paused = !1),
                  a.trigger("play");
              }
              function u() {
                s._adUnit && (s._adUnit._paused = !0), a.trigger("pause");
              }
              (this.tracker = o),
                (this.impressionTriggered = !1),
                r.on("AdSkipped", function () {
                  s.removeMouseMoveListener(),
                    a.trigger({
                      type: "trace.event",
                      data: { event: "vpaid.AdSkipped" },
                    }),
                    a.trigger("vpaid.AdSkipped"),
                    o.trackSkip(),
                    A.showBigPlayButton(a, !1),
                    r.stopAd(k.noop),
                    setTimeout(function () {
                      a.trigger("vast.adsCancel");
                    }, 300);
                }),
                r.on("AdImpression", function () {
                  l();
                }),
                r.on("AdStarted", function () {
                  var t, e;
                  r.adStarted ||
                    (s.addMouseMoveListener(),
                    window._molSettings.viewabilityTracking &&
                      window._molSettings.viewabilityTracking.init(
                        window._molSettings.viewability.contextId,
                        a.duration(),
                        a.el_.offsetWidth,
                        a.el_.offsetHeight
                      ),
                    (r.adStarted = !0),
                    w.hasClass(a.el(), "vjs-has-started") ||
                      w.addClass(a.el(), "vjs-has-started"),
                    a.trigger("vpaid.AdStarted"),
                    o.trackCreativeView(),
                    !window._molSettings.playsInBreak &&
                      r.getAdDuration &&
                      r.getAdDuration(function (t, e) {
                        0 < e && a.duration(e);
                      }),
                    l(),
                    c(),
                    a.one("adStop", function () {
                      r.stopAd && r.stopAd(k.noop);
                    }),
                    k.isIDevice() &&
                      (t =
                        document.getElementsByClassName(
                          "vjs-resize-manager"
                        )) &&
                      0 < t.length &&
                      (e = t[0].parentElement) &&
                      e.removeChild(t[0]));
                }),
                r.on("AdVideoStart", function () {
                  if (
                    (a.trigger({
                      type: "trace.event",
                      data: { event: "AdVideoStart" },
                    }),
                    a.trigger("vpaid.AdVideoStart"),
                    o.trackStart(),
                    !window._molSettings.playsInBreak &&
                      r.getAdDuration &&
                      r.getAdDuration(function (t, e) {
                        0 < e && a.duration(e);
                      }),
                    c(),
                    A.showBigPlayButton(a, !1),
                    k.isMobile())
                  )
                    for (var t = 0; t < 4; t++)
                      setTimeout(function () {
                        a.userActive(!0);
                      }, 1e3 * t);
                  i === a.tech_.el_.src &&
                    (a.trigger({
                      type: "trace.message",
                      data: {
                        message: "VPAID creative uses its own video tag",
                      },
                    }),
                    (s.needsShowPlayer = !0),
                    window._molSettings.playsInBreak
                      ? a.controlBar.hide()
                      : (s.timeUpdateTimer = setInterval(d, 500)));
                }),
                r.on("AdPlaying", function () {
                  s.adFinished ||
                    (a.trigger("vpaid.AdPlaying"),
                    o.trackResume(),
                    c(),
                    A.showBigPlayButton(a, !1));
                }),
                r.on("AdPaused", function () {
                  s.adFinished ||
                    (a.trigger("vpaid.AdPaused"),
                    o.trackPause(),
                    u(),
                    window.document.getElementById("iframeBackButton")
                      ? A.showBigPlayButton(a, !1)
                      : A.showBigPlayButton(a, !0));
                }),
                r.on("AdVideoFirstQuartile", function () {
                  s.adFinished ||
                    (a.trigger({
                      type: "trace.event",
                      data: { event: "vpaid.AdVideoFirstQuartile" },
                    }),
                    a.trigger("vpaid.AdVideoFirstQuartile"),
                    o.trackFirstQuartile());
                }),
                r.on("AdVideoMidpoint", function () {
                  s.adFinished ||
                    (a.trigger({
                      type: "trace.event",
                      data: { event: "vpaid.AdVideoMidpoint" },
                    }),
                    a.trigger("vpaid.AdVideoMidpoint"),
                    o.trackMidpoint());
                }),
                r.on("AdVideoThirdQuartile", function () {
                  s.adFinished ||
                    (a.trigger({
                      type: "trace.event",
                      data: { event: "vpaid.AdVideoThirdQuartile" },
                    }),
                    a.trigger("vpaid.AdVideoThirdQuartile"),
                    o.trackThirdQuartile());
                }),
                r.on("AdVideoComplete", function () {
                  s.removeMouseMoveListener(),
                    s.adFinished ||
                      (a.trigger({
                        type: "trace.event",
                        data: { event: "vpaid.AdVideoComplete" },
                      }),
                      a.trigger("vpaid.AdVideoComplete"),
                      o.trackComplete(),
                      A.showBigPlayButton(a, !1),
                      r.stopAd && r.stopAd(k.noop));
                }),
                r.on("AdClickThru", function (t) {
                  var e, i;
                  s.adFinished ||
                    (a.trigger({
                      type: "trace.event",
                      data: { event: "vpaid.AdClickThru" },
                    }),
                    a.trigger("vpaid.AdClickThru"),
                    (e = t.url),
                    (t = t.playerHandles),
                    (e = k.isNotEmptyString(e)
                      ? e
                      : ((e = n.clickThrough),
                        (i = { ASSETURI: r.options.src, CONTENTPLAYHEAD: 0 }),
                        e ? y.parseURLMacro(e, i) : null)),
                    t && window._molSettings.disableClickThru) ||
                    (o.trackClick(),
                    t && e && (a.isFullscreen(), window.open(e, "_blank")),
                    r.pauseAd(k.noop));
                }),
                r.on("AdUserAcceptInvitation", function () {
                  a.trigger({
                    type: "trace.event",
                    data: { event: "vpaid.AdUserAcceptInvitation" },
                  }),
                    a.trigger("vpaid.AdUserAcceptInvitation"),
                    o.trackAcceptInvitation(),
                    o.trackAcceptInvitationLinear();
                }),
                r.on("AdUserClose", function () {
                  a.trigger({
                    type: "trace.event",
                    data: { event: "vpaid.AdUserClose" },
                  }),
                    a.trigger("vpaid.AdUserClose"),
                    o.trackClose(),
                    o.trackCloseLinear();
                }),
                r.on("AdUserMinimize", function () {
                  a.trigger({
                    type: "trace.event",
                    data: { event: "vpaid.AdUserMinimize" },
                  }),
                    a.trigger("vpaid.AdUserMinimize"),
                    o.trackCollapse();
                }),
                r.on("AdError", function () {
                  s.removeMouseMoveListener(),
                    s.adFinished ||
                      (s.impressionTriggered ||
                        s.errorHasBeenTracked ||
                        (a.trigger({
                          type: "trace.event",
                          data: { event: "vpaid.AdError" },
                        }),
                        a.trigger("vpaid.AdError"),
                        o.trackErrorWithCode(901),
                        (s.errorHasBeenTracked = !0)),
                      A.showBigPlayButton(a, !1));
                }),
                r.on("AdVolumeChange", function () {
                  a.trigger({
                    type: "trace.event",
                    data: { event: "vpaid.AdVolumeChange" },
                  }),
                    a.trigger("vpaid.AdVolumeChange");
                  var i = a.volume();
                  r.getAdVolume(function (t, e) {
                    i !== e &&
                      (0 === e && 0 < i && o.trackMute(),
                      0 < e && 0 === i && o.trackUnmute(),
                      a.volume(e));
                  });
                }),
                r.on("AdSizeChange", function () {
                  a.vast &&
                    a.vast.needSyncPlay &&
                    (a.paused() !== a.tech_.el_.paused &&
                      i != a.tech_.el_.src &&
                      (a.tech_.el_.paused
                        ? (u(), A.showBigPlayButton(a, !0))
                        : (c(), A.showBigPlayButton(a, !1))),
                    (a.vast.needSyncPlay = !1));
                });
              var p = b.bind(this, a, r, this.VIEW_MODE),
                f = k.throttle(p, 100),
                h = this.settings.autoResize;
              function v() {
                r.pauseAd(k.noop);
              }
              function g() {
                r.resumeAd(k.noop);
              }
              function m() {
                r.stopAd && r.stopAd(k.noop);
              }
              h &&
                (w.addEventListener(window, "resize", f),
                w.addEventListener(window, "orientationchange", f)),
                a.on("vast.resize", p),
                a.on("vpaid.pauseAd", v),
                a.on("vpaid.resumeAd", g),
                a.on("stopAd", m),
                a.one("vpaid.adEnd", function () {
                  a.off("vast.resize", p),
                    a.off("vpaid.pauseAd", v),
                    a.off("vpaid.resumeAd", g),
                    a.off("stopAd", m),
                    h &&
                      (w.removeEventListener(window, "resize", f),
                      w.removeEventListener(window, "orientationchange", f));
                }),
                t(null, r, n);
            }),
            (o.prototype._addSkipButton = function (n, t, e) {
              var i,
                r,
                o,
                a,
                s,
                l,
                d,
                c = this.player,
                u = this.tracker,
                p = this;
              function f() {
                w.remove(i), (i = null);
              }
              window._molSettings.disableSkippability ||
                (t.skipoffset && k.isNumber(t.skipoffset)
                  ? ((l = t.skipoffset / 1e3),
                    (d = (function (i) {
                      var e = window.document.createElement("div");
                      return (
                        w.addClass(e, "vast-skip-button"),
                        (e.style.display = "none"),
                        (e.id = "adSkipButton"),
                        (e.tabIndex = 0),
                        (e.onkeydown = function (t) {
                          t.preventDefault(), t.stopPropagation(), e.click();
                        }),
                        (e.onclick = function (t) {
                          if (
                            (w.hasClass(e, "enabled") &&
                              (p.removeMouseMoveListener(),
                              n.getAdSkippableState(function (t, e) {
                                n.skipAd(k.noop),
                                  e ||
                                    (u.trackSkip(),
                                    n.stopAd(k.noop),
                                    setTimeout(function () {
                                      i.trigger("vast.adsCancel");
                                    }, 1));
                              })),
                            A.showBigPlayButton(i, !1),
                            void 0 === window.Event.prototype.stopPropagation)
                          )
                            return !1;
                          t.stopPropagation();
                        }),
                        e
                      );
                    })((s = c))),
                    (l = function (t, e) {
                      n.getAdDuration(function (t, e) {
                        0 < e && (r = e);
                      }),
                        n.getAdRemainingTime(function (t, e) {
                          (o = e), !r && 0 < o && (r = o);
                        }),
                        !r ||
                          !o ||
                          r < 0 ||
                          o < 0 ||
                          (0 < (e = Math.ceil(e - (r - o))) &&
                          !w.hasClass(t, "enabled")
                            ? (t.innerHTML =
                                '<p class="vast-skip-button-text">' +
                                window._molSettings.skipText +
                                " " +
                                k.toFixedDigits(e, 2) +
                                "</p>")
                            : w.hasClass(t, "enabled") ||
                              (w.addClass(t, "enabled"),
                              (t.innerHTML =
                                window._molSettings.skipButtonText +
                                '<span class="vjs-vast-skip-icon"><svg viewBox="0 0 32 32"><path d="M7 24l12.75-9-12.75-9v18zM22 6v18h3v-18h-3z"></path></svg></span>')),
                          window.document.getElementById("iframeBackButton")) ||
                          (c.isFullscreen() && k.isAndroid()
                            ? (t.style.display = "none")
                            : (t.style.display = "block"));
                    }.bind(p, d, l)),
                    s.el().appendChild(d),
                    (a = setInterval(l, 500)),
                    A.once(s, ["vast.adEnd", "vast.adsCancel"], function () {
                      a && (clearInterval(a), (a = null)),
                        w.remove(d),
                        (d = null);
                    }))
                  : ((l = !1),
                    (l =
                      window._molSettings &&
                      window._molSettings.skippable &&
                      (!1 === window._molSettings.skippable.enabled && (l = !0),
                      t.duration) &&
                      window._molSettings.skippable.videoThreshold &&
                      t.duration < window._molSettings.skippable.videoThreshold
                        ? !0
                        : l) ||
                      (n.on("AdSkippableStateChange", function () {
                        c.trigger("vpaid.AdSkippableStateChange"),
                          n.getAdSkippableState(function (t, e) {
                            e
                              ? i ||
                                ((e = c),
                                (i = (function () {
                                  var e = window.document.createElement("div");
                                  return (
                                    w.addClass(e, "vast-skip-button"),
                                    w.addClass(e, "enabled"),
                                    (e.innerHTML =
                                      window._molSettings.skipButtonText +
                                      '<span class="vjs-vast-skip-icon"><svg viewBox="0 0 32 32"><path d="M7 24l12.75-9-12.75-9v18zM22 6v18h3v-18h-3z"></path></svg></span>'),
                                    (e.id = "adSkipButton"),
                                    (e.tabIndex = 0),
                                    (e.onkeydown = function (t) {
                                      t.preventDefault(),
                                        t.stopPropagation(),
                                        e.click();
                                    }),
                                    (e.onclick = function (t) {
                                      if (
                                        (p.removeMouseMoveListener(),
                                        n.getAdSkippableState(function (t, e) {
                                          e
                                            ? n.skipAd(k.noop)
                                            : (u.trackSkip(), n.stopAd(k.noop));
                                        }),
                                        void 0 ===
                                          window.Event.prototype
                                            .stopPropagation)
                                      )
                                        return !1;
                                      t.stopPropagation();
                                    }),
                                    e
                                  );
                                })()),
                                e.el().appendChild(i))
                              : f();
                          });
                      }),
                      A.once(c, ["vast.adEnd", "vast.adsCancel"], f)))),
                e(null, n, t);
            }),
            (o.prototype._linkPlayerControls = function (t, e, i) {
              var n,
                r,
                o,
                a,
                s,
                l = this;
              function d() {
                var t = n.muted() ? 0 : n.volume();
                r.setAdVolume(t, p);
              }
              (n = this.player),
                (r = t),
                n.on("volumechange", d),
                r.on("AdVolumeChange", function () {
                  n.trigger("vpaid.AdVolumeChange");
                  var i = n.volume();
                  r.getAdVolume(function (t, e) {
                    t ? p(t) : i !== e && n.volume(e);
                  });
                }),
                n.one("vpaid.adEnd", function () {
                  n.off("volumechange", d);
                }),
                (o = this.player),
                (a = this.VIEW_MODE),
                (s = b.bind(l, o, t, a)),
                o.on("fullscreenchange", s),
                o.one("vpaid.adEnd", function () {
                  o.off("fullscreenchange", s);
                }),
                i(null, t, e);
            }),
            (o.prototype._startAd = function (e, i, n) {
              var r = this.player,
                o = e.adStarted;
              o &&
                (r.trigger("vast.adStart"),
                r.trigger({
                  type: "trace.event",
                  data: { event: "vpaid.AdStarted" },
                })),
                e.startAd(function (t) {
                  t || o || r.trigger("vast.adStart"), n(t, e, i);
                });
            }),
            (o.prototype._finishPlaying = function (i, n, r) {
              var o = this.player,
                a = this,
                s =
                  (i.on("AdStopped", function () {
                    o.trigger("vpaid.AdStopped"), e(null);
                  }),
                  i.on("AdError", function (t) {
                    a.impressionTriggered
                      ? e(null)
                      : ((t = t
                          ? t.message
                          : "on VPAIDIntegrator, error while waiting for the adUnit to finish playing"),
                        e(new l(t)));
                  }),
                  this.needsShowPlayer);
              function e(t) {
                var e;
                (a.adFinished = !0),
                  A.showBigPlayButton(o, !1),
                  s &&
                    (a.timeUpdateTimer &&
                      (clearInterval(a.timeUpdateTimer),
                      (a.timeUpdateTimer = null),
                      (e = document.getElementById("bc_time_display")) &&
                        o.controlBar
                          .getChild("currentTimeDisplay")
                          .el_.removeChild(e),
                      T(o, !0)),
                    o.controlBar.show(),
                    (o.tech_.el_.style.display = "block")),
                  r(t, i, n);
              }
            }),
            (o.prototype._trackError = function (t, e) {
              this.errorHasBeenTracked ||
                ((this.errorHasBeenTracked = !0),
                y.track(t.errorURLMacros, { ERRORCODE: e || 901 }));
            }),
            (e.exports = o);
        },
        {
          "../../utils/async": 36,
          "../../utils/consoleLogger": 37,
          "../../utils/dom": 38,
          "../../utils/mimetypes": 40,
          "../../utils/playerUtils": 41,
          "../../utils/utilityFunctions": 43,
          "../vast/VASTError": 19,
          "../vast/VASTResponse": 21,
          "../vast/VASTTracker": 22,
          "../vast/vastUtil": 28,
          "./VPAIDAdUnitWrapper": 29,
        },
      ],
      32: [
        function (t, e, i) {
          "use strict";
          document.createElement("div");
        },
        {},
      ],
      33: [
        function (t, e, i) {
          "use strict";
          videojs.getComponent("Component"), t("../../utils/utilityFunctions");
        },
        { "../../utils/utilityFunctions": 43 },
      ],
      34: [
        function (t, e, i) {
          "use strict";
          var o = t("../ads/vast/VASTClient"),
            v = t("../ads/vast/VASTError"),
            g = t("../ads/vast/vastUtil"),
            m = t("../ads/vast/VASTIntegrator"),
            y = t("../ads/vpaid/VPAIDIntegrator"),
            w = t("../ads/icon/IconIntegrator"),
            A = t("../utils/async"),
            k = (t("../utils/dom"), t("../utils/playerUtils")),
            T = t("../utils/utilityFunctions"),
            d = t("../utils/anVideoViewability"),
            b = t("../utils/consoleLogger");
          e.exports = function (t) {
            var a,
              u,
              p = this,
              e = new o({ wrapperLimit: t.wrapperLimit }),
              f = !1,
              h = T.extend(
                {},
                {
                  timeout: 500,
                  iosPrerollCancelTimeout: 2e3,
                  adCancelTimeout: 2e3,
                  nonlinearRecall: !1,
                  playAdAlways: !1,
                  adsEnabled: !0,
                  autoResize: !0,
                  clcikThroughMethod: "blocker",
                  verbosity: 0,
                  playsInBreak: !1,
                  skipText: "Skip Ad in",
                  skipButtonText: "Skip Ad",
                  initialPlayback: "auto",
                  initialAudio: "on",
                  disableClickThru: !1,
                  firstPlay: !0,
                },
                t || {}
              ),
              t = "";
            return (
              (window.mol_player = p).bcinfo
                ? (t = p.bcinfo.playerId)
                : p.options_ &&
                  p.options_["data-player"] &&
                  (t = p.options_["data-player"]),
              b.setPlayerId(t + "-" + p.el_.id),
              T.isUndefined(h.adTagUrl) &&
                T.isDefined(h.url) &&
                (h.adTagUrl = h.url),
              T.isString(h.adTagUrl) && (h.adTagUrl = T.echoFn(h.adTagUrl)),
              h.viewability &&
                h.viewability.config &&
                (h.viewabilityTracking = new d(p)),
              (window._molSettings = h),
              (window._vastVar = []),
              (window._timeoutIds = []),
              (window.MoatApiReference = null),
              T.isDefined(h.adTagXML) && !T.isFunction(h.adTagXML)
                ? l(
                    new v(
                      "on VideoJS VAST plugin, the passed adTagXML option does not contain a function"
                    )
                  )
                : T.isDefined(h.adTagUrl) || T.isFunction(h.adTagXML)
                ? (b.setVerbosity(h.verbosity),
                  h.playsInBreak ||
                    (!0 !== videojs.vast_adPod &&
                      ((a = k.getPlayerSnapshot(p)),
                      ((videojs.vast_Snapshot = a).playing = !0))),
                  "click" === h.initialPlayback && k.showBigPlayButton(p, !0),
                  k.prepareForAds(p),
                  p.on("vast.contentEnd", function () {}),
                  h.playAdAlways &&
                    p.on("vast.contentEnd", function () {
                      setTimeout(function () {
                        p.trigger("vast.reset");
                      }, 0);
                    }),
                  p.on("vast.firstPlay", function t() {
                    p.off("vast.firstPlay", t);
                    p.vast.adsCancelled && delete p.vast.adsCancelled;
                    k.showBigPlayButton(p, !1);
                    "off" === h.initialAudio &&
                      ((h.contentVolume = {
                        muted: p.muted(),
                        volume: p.volume(),
                      }),
                      p.muted(!0));
                    k.removeNativePoster(p);
                    k.once(p, ["vast.adsCancel", "vast.adEnd"], function (t) {
                      function e(t) {
                        (videojs._vast_Media = null),
                          (videojs.vast_adPod = !1),
                          (videojs.vast_adPodTotal = 0),
                          (videojs.vast_adPodCurrent = 0),
                          (window._molSettings.workingXML = ""),
                          d(),
                          (f = !0),
                          t.vast && (t.vast.adsCancelled = !0),
                          t.el().classList.add("vjs-has-started"),
                          c(),
                          setTimeout(function () {
                            t.loadingSpinner.el_.removeAttribute("style");
                          }, 200),
                          setTimeout(function () {
                            t.trigger("adFinished");
                          }, 0);
                      }
                      if (p.$(".vjs-tech").hasAttribute("outstreamvisit")) {
                        var i = window._molSettings.workingXML,
                          n =
                            (d(),
                            p.el().classList.add("vjs-ad-playing"),
                            p.pause(),
                            window._molSettings.clickURL),
                          r = document.createElement("div"),
                          o =
                            (p.el().appendChild(r),
                            document.createElement("div")),
                          a = document.createElement("div"),
                          s = document.createElement("div");
                        (r.className = "vjs-overlay"),
                          (o.class = "vjs-block"),
                          (o.className = "vjs-visit-block"),
                          (a.className = "btn-visit"),
                          (s.className = "btn-visit-replay"),
                          r.appendChild(o),
                          (a.innerHTML = p.localize("VISIT")),
                          (s.innerHTML = p.localize("Replay")),
                          o.appendChild(a),
                          o.appendChild(s),
                          (a.onclick = function () {
                            window.open(n, "_blank");
                          }),
                          (s.onclick = function () {
                            p.play(), p.el().removeChild(r);
                          }),
                          p.trigger("ended");
                        let t = p.el_.querySelector(".vjs-ainfo");
                        t && t.parentNode.removeChild(t);
                        p.vastClient({ adTagXML: l, initialPlayback: !1 });
                      } else p.$(".vjs-tech").hasAttribute("outstream") ? ((p.adList = []), (window._molSettings.workingXML = ""), d(), (f = !0), p.vast && (p.vast.adsCancelled = !0), p.el_.classList.add("vjs-set-replay"), p.trigger("ended"), p.pause(), p.currentTime(0), p.el_.classList.add("vjs-ad-playing")) : null == videojs.vastAdPods || videojs.vastAdPods.length < 1 ? e(p) : (videojs.vastAdPods.shift(), videojs.vast_adPodCurrent++, (o = window._molSettings.workingXML.indexOf(">")), (a = window._molSettings.workingXML.substring(0, o + 1)), (s = window._molSettings.workingXML.indexOf("</Ad>")), (o = window._molSettings.workingXML.substring(s + 6)), (i = a + o), d(), videojs._vast_Media && p.el().classList.add("vjs-ad-playing"), (videojs.vast_adPod = !0), p.pause(), p.play(), "vast.adsCancel" === t.type && (p.trigger("vast.adsCancel"), (f = !0), p.vast) && (p.vast.adsCancelled = !0), p.vastClient({ adTagXML: l }));
                      function l(t) {
                        setTimeout(function () {
                          t(null, i);
                        }, 0);
                      }
                    });
                    A.waterfall([i, n, o, s], function (t, e) {
                      t ? l(t) : p.trigger("vast.adEnd");
                    });
                    function d() {
                      p.vast &&
                        p.vast.adUnit &&
                        ((p.vast.adUnit = null), (p.vast.VPAID = null)),
                        (window._molSettings.firstPlay = !1);
                    }
                    function c() {
                      e(),
                        a
                          ? (k.restorePlayerSnapshot(p, a),
                            (a = null),
                            (videojs.vast_Snapshot = null))
                          : videojs.vast_Snapshot &&
                            (k.restorePlayerSnapshot(p, videojs.vast_Snapshot),
                            (a = null),
                            (videojs.vast_Snapshot = null)),
                        p.one("playing", function () {
                          var t = p.getChild("posterImage");
                          t.el().style.removeProperty("opacity");
                        });
                    }
                    function e() {
                      k.once(
                        p,
                        ["playing", "vast.reset", "vast.firstPlay"],
                        function (t) {
                          "playing" === t.type &&
                            (p.trigger("vast.contentStart"),
                            k.once(
                              p,
                              ["ended", "vast.reset", "vast.firstPlay"],
                              function (t) {
                                "ended" === t.type &&
                                  p.trigger("vast.contentEnd");
                              }
                            ));
                        }
                      );
                    }
                    function i(t) {
                      if (h.adsEnabled) return t(null);
                      t(new v("Ads are not enabled"));
                    }
                    function n(t) {
                      r()
                        ? (k.showBigPlayButton(p, !0),
                          (p.loadingSpinner.el_.style.display = "none"),
                          videojs._vast_Media &&
                            p.el().classList.add("vjs-ad-playing"),
                          !(p.currentTime() < 1) || (p.pause(), p.paused())
                            ? t(null)
                            : k.once(p, ["playing"], function () {
                                p.pause(), t(null);
                              }))
                        : t(
                            new v(
                              "video content has been playing before preroll ad"
                            )
                          );
                    }
                    function r() {
                      return (
                        !T.isIPhone() ||
                        p.currentTime() <= h.iosPrerollCancelTimeout
                      );
                    }
                    function o(t) {
                      var e;
                      function i() {
                        e && (clearTimeout(e), (e = null));
                      }
                      (f = !1),
                        (e = setTimeout(function () {
                          (e = null),
                            l(
                              new v(
                                "timeout while waiting for the video to start playing. You may need to increase adStartTimeout.",
                                402
                              )
                            ),
                            k.showBigPlayButton(p, !1),
                            p.vast.VPAID && p.trigger("vpaid.adEnd");
                        }, h.adCancelTimeout)),
                        k.once(
                          p,
                          [
                            "vast.adStart",
                            "vast.adsCancel",
                            "clearAdCancelTimeout",
                          ],
                          i
                        ),
                        k.once(
                          p,
                          ["vast.adError", "vpaid.adEnd", "vpaid.adError"],
                          function () {
                            i();
                          }
                        ),
                        t(null);
                    }
                  }),
                  p.on("vast.reset", function () {
                    i((a = null));
                  }),
                  (p.vast = {
                    isEnabled: function () {
                      return h.adsEnabled;
                    },
                    enable: function () {
                      h.adsEnabled = !0;
                    },
                    disable: function () {
                      h.adsEnabled = !1;
                    },
                  }),
                  p.vast)
                : l(
                    new v(
                      "on VideoJS VAST plugin, missing adTagUrl on options object"
                    )
                  )
            );
            function i() {
              p.trigger("vast.adsCancel"),
                (f = !0),
                p.vast && (p.vast.adsCancelled = !0);
            }
            function s(t) {
              A.waterfall([n, r], t);
            }
            function n(t) {
              e.getVASTResponse(h.adTagUrl ? h.adTagUrl() : h.adTagXML, t);
            }
            function r(e, i) {
              var t, n, r, o, a;
              function s() {
                3 < p.duration() - o &&
                  (p.pause(!0), p.play(!0), p.currentTime(o));
              }
              function l() {
                var t = p.currentTime();
                3 < Math.abs(t - o)
                  ? (2 <= (a += 1) && p.pause(!0), p.currentTime(o))
                  : (o = t);
              }
              function d(t) {
                for (
                  var e =
                      p.controlBar.getChild("currentTimeDisplay").el_.children,
                    i = 0;
                  i < e.length;
                  i++
                )
                  "bc_time_display" != e[i].id &&
                    (e[i].style.display = t ? "" : "none");
              }
              function c() {
                var t, e;
                window._molSettings.breakDuration &&
                  p.duration() != window._molSettings.breakDuration &&
                  (p.duration() &&
                    (window._molSettings.realVideoDuration = p.duration()),
                  p.duration(window._molSettings.breakDuration)),
                  window._molSettings.timeOffset &&
                    ((t = document.getElementById("bc_time_display"))
                      ? (d(!1), (t.style.display = "block"))
                      : ((t = document.createElement("div")),
                        p.controlBar
                          .getChild("currentTimeDisplay")
                          .el_.appendChild(t),
                        (t.id = "bc_time_display"),
                        (t.class = "vjs-current-time-display"),
                        (t["aria-live"] = "off"),
                        d(
                          !(t.innerHTML =
                            '<span class="vjs-control-text"></span>0:00')
                        )),
                    (e = p.currentTime() + window._molSettings.timeOffset),
                    (t.childNodes[1].nodeValue =
                      ((t = e),
                      (t = parseInt(t + 0.5)),
                      (e = parseInt(t / 60)),
                      (t -= 60 * e),
                      e.toString() + ":" + (9 < t ? "" : "0") + t.toString())));
              }
              f ||
                ((n = (t = (function (t) {
                  var e,
                    i,
                    n = t.mediaFiles;
                  for (e = 0, i = n.length; e < i; e++)
                    if (g.isVPAID(n[e])) return !0;
                  return !1;
                })(e))
                  ? new y(p, h)
                  : new m(p)),
                (r = !1),
                t
                  ? p.trigger("clearAdCancelTimeout")
                  : (p.vast.trackError = n._trackError),
                k.once(p, ["vast.adStart", "vast.adsCancel"], function (t) {
                  "vast.adStart" === t.type &&
                    (window._molSettings.playsInBreak && p.on("timeupdate", c),
                    r ||
                      (e.icons &&
                        0 < e.icons.length &&
                        new w(p).renderIcons(e.icons, i),
                      (t =
                        document.getElementsByClassName("vjs-next-button")) &&
                        0 < t.length &&
                        ((u = t[0]).style.display = "none")),
                    (t = p.el().querySelector(".vjs-replay-button"))) &&
                    t.classList.add("vjs-hidden");
                }),
                k.once(p, ["vast.adEnd", "vast.adsCancel"], function () {
                  {
                    var t;
                    window._molSettings.playsInBreak &&
                      (p.off("timeupdate", c),
                      window._molSettings.timeOffset) &&
                      (d(!0),
                      (t = document.getElementById("bc_time_display"))) &&
                      (t.style.display = "none");
                  }
                  u && ((u.style.display = ""), (u = null));
                  r = !0;
                }),
                T.isIDevice() &&
                  ((a = o = 0),
                  p.on("timeupdate", l),
                  p.on("ended", s),
                  k.once(
                    p,
                    ["vast.adEnd", "vast.adsCancel", "vast.adError"],
                    function () {
                      p.off("timeupdate", l), p.off("ended", s);
                    }
                  )),
                (p.vast.vastResponse = e),
                b.debug("calling adIntegrator.playAd() with vastResponse:", e),
                (p.vast.adUnit = n.playAd(e, i)),
                (p.vast.VPAID = t));
            }
            function l(t) {
              p.trigger({ type: "vast.adError", error: t }),
                t &&
                  402 === t.code &&
                  (p.vast && p.vast.trackError
                    ? p.vast.trackError(t, p.vast.vastResponse)
                    : b.warn(
                        "WARNING: Cannot track ad start timeout error because VAST XML is not parsed yet"
                      )),
                i();
            }
          };
        },
        {
          "../ads/icon/IconIntegrator": 6,
          "../ads/vast/VASTClient": 18,
          "../ads/vast/VASTError": 19,
          "../ads/vast/VASTIntegrator": 20,
          "../ads/vast/vastUtil": 28,
          "../ads/vpaid/VPAIDIntegrator": 31,
          "../utils/anVideoViewability": 35,
          "../utils/async": 36,
          "../utils/consoleLogger": 37,
          "../utils/dom": 38,
          "../utils/playerUtils": 41,
          "../utils/utilityFunctions": 43,
        },
      ],
      35: [
        function (t, e, i) {
          t("./consoleLogger");
          e.exports = function (t) {
            (this.init = function (t, e, i, n) {}),
              (this.invokeEvent = function (t) {}),
              (this.isReady = !1);
          };
        },
        { "./consoleLogger": 37 },
      ],
      36: [
        function (t, e, i) {
          var a = t("./utilityFunctions"),
            s = {
              setImmediate: function (t) {
                setTimeout(t, 0);
              },
            };
          (s.iterator = function (i) {
            function n(t) {
              function e() {
                return i.length && i[t].apply(null, arguments), e.next();
              }
              return (
                (e.next = function () {
                  return t < i.length - 1 ? n(t + 1) : null;
                }),
                e
              );
            }
            return n(0);
          }),
            (s.waterfall = function (t, r) {
              var o;
              return (
                (r = r || function () {}),
                a.isArray(t)
                  ? t.length
                    ? void (o = function (n) {
                        return function (t) {
                          var e, i;
                          t
                            ? (r.apply(null, arguments), (r = function () {}))
                            : ((e = Array.prototype.slice.call(arguments, 1)),
                              (i = n.next()) ? e.push(o(i)) : e.push(r),
                              s.setImmediate(function () {
                                n.apply(null, e);
                              }));
                        };
                      })(s.iterator(t))()
                    : r()
                  : ((t = new Error(
                      "First argument to waterfall must be an array of functions"
                    )),
                    r(t))
              );
            }),
            (s.when = function (t, i) {
              var n;
              if (a.isFunction(i))
                return (
                  (n = a.isFunction(t)
                    ? t
                    : function () {
                        return !!t;
                      }),
                  function () {
                    var t = a.arrayLikeObjToArray(arguments),
                      e = t.pop();
                    return n.apply(null, t)
                      ? i.apply(this, arguments)
                      : (t.unshift(null), e.apply(null, t));
                  }
                );
              throw new Error("async.when error: missing callback argument");
            }),
            (e.exports = s);
        },
        { "./utilityFunctions": 43 },
      ],
      37: [
        function (t, e, i) {
          "use strict";
          var n = 0,
            r = "[Nuevo-Plugin",
            o = "";
          function a(t) {
            try {
              var e = "";
              try {
                e = window.top.location.search;
              } catch (t) {
                try {
                  e = window.location.search;
                } catch (t) {}
              }
              var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
              return null === i
                ? ""
                : decodeURIComponent(i[1].replace(/\+/g, " "));
            } catch (t) {
              return "";
            }
          }
          function s(t, e) {
            var i = r;
            0 < e.length &&
              "string" == typeof e[0] &&
              (o && 0 < o.length && (i += "-" + o),
              (i =
                (i += "]") +
                "[" +
                (function () {
                  var t = "";
                  try {
                    var e = new Date(),
                      t =
                        e.getHours() +
                        ":" +
                        e.getMinutes() +
                        ":" +
                        e.getSeconds() +
                        "." +
                        e.getMilliseconds();
                  } catch (t) {}
                  return t;
                })() +
                "]"),
              (e[0] = i + e[0])),
              t.apply
                ? t.apply(console, Array.prototype.slice.call(e))
                : t(Array.prototype.slice.call(e));
          }
          var l = {
            setPlayerId: function (t) {
              o = t;
            },
            setVerbosity: function (t) {
              n = Math.max(t, n);
            },
            debug: function () {
              n < 4 ||
                (void 0 === console.debug
                  ? s(console.log, arguments)
                  : s(console.debug, arguments));
            },
            log: function () {
              n < 3 || s(console.log, arguments);
            },
            info: function () {
              n < 2 || s(console.info, arguments);
            },
            warn: function () {
              n < 1 || s(console.warn, arguments);
            },
            error: function () {
              s(console.error, arguments);
            },
          };
          ("undefined" != typeof console && console.log) ||
            ((l.debug = function () {}),
            (l.log = function () {}),
            (l.info = function () {}),
            (l.warn = function () {}),
            (l.error = function () {})),
            (e.exports = l);
          try {
            n = "true" == a("ast_debug").toLowerCase() ? 4 : 0;
          } catch (t) {}
        },
        {},
      ],
      38: [
        function (t, e, i) {
          "use strict";
          var a = t("./utilityFunctions"),
            r = {
              isVisible: function (t) {
                return "hidden" !== window.getComputedStyle(t).visibility;
              },
              isHidden: function (t) {
                return "none" === window.getComputedStyle(t).display;
              },
              isShown: function (t) {
                return !r.isHidden(t);
              },
              hide: function (t) {
                (t.__prev_style_display_ = t.style.display),
                  (t.style.display = "none");
              },
              show: function (t) {
                r.isHidden(t) && (t.style.display = t.__prev_style_display_),
                  (t.__prev_style_display_ = void 0);
              },
              hasClass: function (t, e) {
                var i, n, r;
                if (a.isNotEmptyString(e)) {
                  if (t.classList) return t.classList.contains(e);
                  for (
                    e = e || "",
                      n = 0,
                      r = (i = a.isString(t.getAttribute("class"))
                        ? t.getAttribute("class").split(/\s+/)
                        : []).length;
                    n < r;
                    n += 1
                  )
                    if (i[n] === e) return !0;
                }
                return !1;
              },
              addClass: function (t, e) {
                var i;
                if (a.isNotEmptyString(e)) {
                  if (t.classList) return t.classList.add(e);
                  (i = a.isString(t.getAttribute("class"))
                    ? t.getAttribute("class").split(/\s+/)
                    : []),
                    a.isString(e) &&
                      a.isNotEmptyString(e.replace(/\s+/, "")) &&
                      (i.push(e), t.setAttribute("class", i.join(" ")));
                }
              },
              removeClass: function (t, e) {
                if (a.isNotEmptyString(e)) {
                  if (t.classList) return t.classList.remove(e);
                  var i,
                    n,
                    r = a.isString(t.getAttribute("class"))
                      ? t.getAttribute("class").split(/\s+/)
                      : [],
                    o = [];
                  if (
                    a.isString(e) &&
                    a.isNotEmptyString(e.replace(/\s+/, ""))
                  ) {
                    for (i = 0, n = r.length; i < n; i += 1)
                      e !== r[i] && o.push(r[i]);
                    t.setAttribute("class", o.join(" "));
                  }
                }
              },
              addEventListener: function (e, i, n) {
                a.isArray(e)
                  ? a.forEach(e, function (t) {
                      r.addEventListener(t, i, n);
                    })
                  : a.isArray(i)
                  ? a.forEach(i, function (t) {
                      r.addEventListener(e, t, n);
                    })
                  : e.addEventListener
                  ? e.addEventListener(i, n, !1)
                  : e.attachEvent && e.attachEvent("on" + i, n);
              },
              removeEventListener: function (e, i, n) {
                a.isArray(e)
                  ? a.forEach(e, function (t) {
                      r.removeEventListener(t, i, n);
                    })
                  : a.isArray(i)
                  ? a.forEach(i, function (t) {
                      r.removeEventListener(e, t, n);
                    })
                  : e.removeEventListener
                  ? e.removeEventListener(i, n, !1)
                  : e.detachEvent
                  ? e.detachEvent("on" + i, n)
                  : (e["on" + i] = null);
              },
              dispatchEvent: function (t, e) {
                t.dispatchEvent
                  ? t.dispatchEvent(e)
                  : t.fireEvent("on" + e.eventType, e);
              },
              isDescendant: function (t, e) {
                for (var i = e.parentNode; null !== i; ) {
                  if (i === t) return !0;
                  i = i.parentNode;
                }
                return !1;
              },
              getTextContent: function (t) {
                return t.textContent || t.text;
              },
              prependChild: function (t, e) {
                return (
                  e.parentNode && e.parentNode.removeChild(e),
                  t.insertBefore(e, t.firstChild)
                );
              },
              remove: function (t) {
                t && t.parentNode && t.parentNode.removeChild(t);
              },
              isDomElement: function (t) {
                return (
                  t instanceof Element ||
                  (parent && parent.Element && t instanceof parent.Element)
                );
              },
              click: function (t, e) {
                r.addEventListener(t, "click", e);
              },
              once: function (e, i, n) {
                r.addEventListener(e, i, function t() {
                  n.apply(null, arguments), r.removeEventListener(e, i, t);
                });
              },
              getDimension: function (t) {
                var e;
                return !a.isOldIE() && t.getBoundingClientRect
                  ? {
                      width: (e = t.getBoundingClientRect()).width,
                      height: e.height,
                    }
                  : { width: t.offsetWidth, height: t.offsetHeight };
              },
            };
          e.exports = r;
        },
        { "./utilityFunctions": 43 },
      ],
      39: [
        function (t, e, i) {
          "use strict";
          var u = t("./urlUtils"),
            p = t("./utilityFunctions");
          function f(t) {
            this.message = "HttpRequest Error: " + (t || "");
          }
          function n(t) {
            if (!p.isFunction(t))
              throw new f("Missing XMLHttpRequest factory method");
            this.createXhr = t;
          }
          function r() {
            var t = new XMLHttpRequest();
            return (t = "withCredentials" in t ? t : new XDomainRequest());
          }
          ((f.prototype = new Error()).name = "HttpRequest Error"),
            (n.prototype.run = function (t, e, n, i) {
              var r = e,
                o = n,
                a = i;
              if (!p.isString(r) || p.isEmptyString(r))
                throw new f("Invalid url '" + r + "'");
              if (!p.isFunction(o))
                throw new f("Invalid handler '" + o + "' for the http request");
              if (p.isDefined(a) && !p.isObject(a))
                throw new f("Invalid options map '" + a + "'");
              var s,
                l,
                d = this.createXhr();
              function c() {
                n(-1, null, null, "");
              }
              (r = p.isNumber((i = i || {}).timeout) ? i.timeout : 0),
                d.open(t, u.urlParts(e).href, !0),
                i.headers &&
                  ((l = d),
                  (o = i.headers),
                  p.forEach(o, function (t, e) {
                    p.isDefined(t) && l.setRequestHeader(e, t);
                  })),
                videojs.credentials && (d.withCredentials = !0),
                (d.onload = function () {
                  var t, e, i;
                  d.getAllResponseHeaders ||
                    (d.getAllResponseHeaders = function () {
                      return null;
                    }),
                    d.status || (d.status = 200),
                    p.isDefined(s) && (clearTimeout(s), (s = void 0)),
                    (t = d.statusText || ""),
                    (e = "response" in d ? d.response : d.responseText),
                    (i = 1223 === d.status ? 204 : d.status),
                    n(i, e, d.getAllResponseHeaders(), t);
                }),
                (d.onerror = c),
                (d.onabort = c),
                d.send(),
                0 < r &&
                  (s = setTimeout(function () {
                    d && d.abort();
                  }, r));
            }),
            (n.prototype.get = function (t, r, e) {
              this.run(
                "GET",
                t,
                function (t, e, i, n) {
                  !(function (t) {
                    return 200 <= t && t < 300;
                  })(t)
                    ? r(new f(n), e, t, i, n)
                    : r(null, e, t, i, n);
                },
                e
              );
            });
          t = new n(r);
          e.exports = {
            http: t,
            HttpRequest: n,
            HttpRequestError: f,
            createXhr: r,
          };
        },
        { "./urlUtils": 42, "./utilityFunctions": 43 },
      ],
      40: [
        function (t, e, i) {
          "use strict";
          e.exports = {
            html5: [
              "text/javascript",
              "text/javascript1.0",
              "text/javascript1.2",
              "text/javascript1.4",
              "text/jscript",
              "application/javascript",
              "application/x-javascript",
              "text/ecmascript",
              "text/ecmascript1.0",
              "text/ecmascript1.2",
              "text/ecmascript1.4",
              "text/livescript",
              "application/ecmascript",
              "application/x-ecmascript",
            ],
            flash: ["application/x-shockwave-flash"],
          };
        },
        {},
      ],
      41: [
        function (t, e, i) {
          "use strict";
          var m = t("./dom"),
            y = t("./utilityFunctions"),
            n = {};
          (n.getPlayerSnapshot = function (t) {
            var e = t.el().querySelector(".vjs-tech");
            var i = {
                ended: t.ended(),
                src: t.currentSrc(),
                currentTime: t.currentTime(),
                duration: t.duration(),
                currentSource: t.currentSource(),
                type: t.currentType(),
                playing: !t.paused(),
                live: !1,
                suppressedTracks: [],
              },
              n =
                (i.duration &&
                  i.duration - i.currentTime < 1 &&
                  ((i.currentTime = t.duration() - 0.1), (i.ended = !0)),
                i.ended && ((i.currentTime = t.duration() + 1), (i.ended = !0)),
                t.textTracks ? t.textTracks() : []),
              r = [];
            for (let t = 0; t < n.length; t++) {
              var o = n[t];
              r.push({ track: o, mode: o.mode }), (o.mode = "disabled");
            }
            return (
              (i.suppressedTracks = r),
              0 < t.seekable().length &&
                (t.duration() === 1 / 0 ||
                  ("8" === videojs.browser.IOS_VERSION &&
                    0 === t.duration())) &&
                ((i.live = !0),
                (i.currentTime = t.currentTime() - t.seekable().end(0))),
              e &&
                ((i.nativePoster = e.poster),
                (i.style = e.getAttribute("style"))),
              i
            );
          }),
            (n.restorePlayerSnapshot = function (r, o) {
              var t, e, i;
              r.src() === o.src
                ? r.play()
                : (t = r.el().querySelector(".vjs-tech")).hasAttribute(
                    "outstream"
                  ) ||
                  ((e = 20),
                  o.nativePoster,
                  "style" in o && t.setAttribute("style", o.style || ""),
                  o.dockText && (o.dockText.style.display = "block"),
                  r.one("loadedmetadata", function () {
                    for (
                      var t, e = r.textTracks ? r.textTracks() : [], i = 0;
                      i < e.length;
                      i++
                    ) {
                      var n = e[i];
                      (t = o.suppressedTracks[i]), (n.mode = t.mode);
                    }
                  }),
                  r.one("canplay", function t() {
                    {
                      if (o.ended)
                        return r.currentTime(o.currentTime), void r.play();
                      r.play();
                    }
                    if (!n.isReadyToResume(r) && e--) setTimeout(t, 50);
                    else
                      try {
                        r.currentTime() !== o.currentTime
                          ? (o.playing &&
                              r.one("seeked", function () {
                                o.ended
                                  ? (r.currentTime(o.currentTime),
                                    r.trigger("ended"))
                                  : (r.currentTime(o.currentTime), r.play());
                              }),
                            o.live
                              ? r.one("playing", function () {
                                  r.currentTime(
                                    r.seekable().end(0) + o.currentTime
                                  );
                                })
                              : r.currentTime(o.currentTime))
                          : o.playing &&
                            (o.ended ? r.trigger("ended") : r.play());
                      } catch (t) {}
                  }),
                  (i = setTimeout(function () {
                    r.trigger("canplay");
                  }, 1e3)),
                  r.one("canplay", function () {
                    clearTimeout(i);
                  }),
                  r.src(o.currentSource));
            }),
            (n.isReadyToResume = function (t) {
              return y.isIE11()
                ? 1 < t.readyState()
                : 1 < t.readyState() ||
                    void 0 === t.seekable() ||
                    0 < t.seekable().length;
            }),
            (n.prepareForAds = function (i) {
              i.on("error", function () {
                i.trigger("vast.adError");
              });
              var n,
                r,
                t,
                o = i.play,
                e =
                  ((i.play = function (t) {
                    var e = this;
                    return (
                      p()
                        ? (function () {
                            y.isIPhone() ||
                              (n = n || {
                                muted: i.muted(),
                                volume: i.volume(),
                              });
                            (window._molSettings.firstStart = !1),
                              o.apply(e, arguments);
                          })()
                        : (function (t) {
                            d() && !t
                              ? i.vast.adUnit.resumeAd()
                              : l() || o.apply(e, arguments);
                          })(t),
                      this
                    );
                  }),
                  i.pause),
                a =
                  ((i.pause = function (t) {
                    return (
                      d() && !t
                        ? i.vast.adUnit.pauseAd()
                        : l() || e.apply(this, arguments),
                      this
                    );
                  }),
                  i.paused),
                s =
                  ((i.paused = function (t) {
                    return d() && !t
                      ? i.vast.adUnit.isPaused()
                      : a.apply(this, arguments);
                  }),
                  parent &&
                    window !== parent &&
                    videojs &&
                    !videojs.getPlugins &&
                    y.scriptLoadedInIframe() &&
                    ((r = i.src),
                    (i.src = function (t) {
                      if (t && !(t instanceof parent.Object))
                        if (y.isIE11()) {
                          var e,
                            i = new parent.Object();
                          for (e in t) t.hasOwnProperty(e) && (i[e] = t[e]);
                          t = i;
                        } else t = parent.Object.assign(new parent.Object(), t);
                      r.call(this, t);
                    })),
                  i.on("play", c),
                  i.on("vast.reset", u),
                  i.on("vast.firstPlay", f),
                  i.on("error", h),
                  i.on("vast.adStart", h),
                  i.on("vast.adsCancel", h),
                  i.on("vast.adError", h),
                  i.on("vast.adStart", v),
                  i.on("vast.adEnd", g),
                  i.on("vast.adsCancel", g),
                  document.getElementsByClassName("vjs-error-display"));
              function l() {
                return i.vast && i.vast.VPAID;
              }
              function d() {
                return i.vast && i.vast.adUnit;
              }
              function c() {
                var t = i.el().querySelector(".vjs-black-poster");
                t && i.el().removeChild(t),
                  i.el().classList.remove("vjs-iab"),
                  p() &&
                    ((window._molSettings.firstPlay = !1),
                    i.trigger("vast.firstPlay"));
              }
              function u() {
                window._molSettings.firstPlay = !0;
                var t = i.el().querySelector(".vjs-black-poster");
                t && i.el().removeChild(t),
                  i.el().classList.remove("vjs-iab"),
                  f();
              }
              function p() {
                return window._molSettings.firstPlay;
              }
              function f() {
                var t;
                n &&
                  ((t = n),
                  y.isObject(t) && (i.volume(t.volume), i.muted(t.muted)),
                  (n = null));
              }
              function h() {
                var t = i.el().querySelector(".vjs-black-poster");
                t && i.el().removeChild(t), i.el().classList.remove("vjs-iab");
              }
              function v() {
                videojs._vast_Media && m.addClass(i.el(), "vjs-ad-playing");
              }
              function g() {
                i.off("play", c),
                  i.off("vast.reset", u),
                  i.off("vast.firstPlay", f),
                  i.off("error", h),
                  i.off("vast.adStart", h),
                  i.off("vast.adsCancel", h),
                  i.off("vast.adError", h),
                  i.off("vast.adStart", v),
                  i.off("vast.adEnd", g),
                  i.off("vast.adsCancel", g),
                  m.removeClass(i.el(), "vjs-ad-playing"),
                  m.removeClass(i.controlBar.playToggle.el(), "vjs-ended"),
                  t &&
                    setTimeout(function () {
                      t.style.removeProperty("display");
                    }, 500);
              }
              s &&
                0 < s.length &&
                (t = s[0]).style.setProperty("display", "none", "important");
            }),
            (n.removeNativePoster = function (t) {
              t = t.el().querySelector(".vjs-tech");
              t && t.removeAttribute("poster");
            }),
            (n.once = function (e, t, i) {
              function n() {
                i.apply(null, arguments),
                  t.forEach(function (t) {
                    e.off(t, n);
                  });
              }
              t.forEach(function (t) {
                e.on(t, n);
              });
            }),
            (n.showBigPlayButton = function (t, e) {
              t = t.bigPlayButton.el_;
              t && e && t.classList.add("vjs-hidden");
            }),
            (e.exports = n);
        },
        { "./dom": 38, "./utilityFunctions": 43 },
      ],
      42: [
        function (t, e, i) {
          "use strict";
          var r = t("./utilityFunctions"),
            n = document.createElement("a"),
            o = document.documentMode;
          e.exports = {
            urlParts: function (t) {
              return (
                o && (n.setAttribute("href", t), (t = n.href)),
                n.setAttribute("href", t),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: r.isNotEmptyString(n.port) ? n.port : 80,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            },
            queryStringToObj: function (t, i) {
              var n;
              return (
                (i = r.isFunction(i)
                  ? i
                  : function () {
                      return !0;
                    }),
                (t = (t = t.trim().replace(/^\?/, "")).split("&")),
                (n = {}),
                r.forEach(t, function (t) {
                  var e;
                  "" !== t &&
                    ((e = (t = t.split("="))[0]), i(e, (t = t[1]))) &&
                    (n[e] = t);
                }),
                n
              );
            },
            objToQueryString: function (t) {
              var i = [];
              return (
                r.forEach(t, function (t, e) {
                  i.push(e + "=" + t);
                }),
                i.join("&")
              );
            },
          };
        },
        { "./utilityFunctions": 43 },
      ],
      43: [
        function (t, e, i) {
          "use strict";
          var n = /[A-Z]/g,
            r =
              /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i,
            o =
              /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
          function a(t) {
            return null === t;
          }
          function s(t) {
            return "object" == typeof t;
          }
          function l(t) {
            return "function" == typeof t;
          }
          function d(t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }
          function c() {
            return /(edge)\/((\d+)?[\w\.]+)/i.test(u._UA);
          }
          var u = {
            _UA: navigator.userAgent,
            noop: function () {},
            isNull: a,
            isDefined: function (t) {
              return void 0 !== t;
            },
            isUndefined: function (t) {
              return void 0 === t;
            },
            isObject: s,
            isFunction: l,
            isNumber: function (t) {
              return "number" == typeof t;
            },
            isWindow: function (t) {
              return u.isObject(t) && t.window === t;
            },
            isArray: d,
            isArrayLike: function (t) {
              var e;
              return (
                !(
                  null === t ||
                  u.isWindow(t) ||
                  u.isFunction(t) ||
                  u.isUndefined(t)
                ) &&
                ((e = t.length),
                !(1 !== t.nodeType || !e) ||
                  u.isString(t) ||
                  u.isArray(t) ||
                  0 === e ||
                  ("number" == typeof e && 0 < e && e - 1 in t))
              );
            },
            isString: function (t) {
              return "string" == typeof t;
            },
            isEmptyString: function (t) {
              return u.isString(t) && 0 === t.length;
            },
            isNotEmptyString: function (t) {
              return u.isString(t) && 0 !== t.length;
            },
            arrayLikeObjToArray: function (t) {
              return Array.prototype.slice.call(t);
            },
            forEach: function t(e, i, n) {
              if (e)
                if (l(e))
                  for (o in e)
                    "prototype" === o ||
                      "length" === o ||
                      "name" === o ||
                      (e.hasOwnProperty && !e.hasOwnProperty(o)) ||
                      i.call(n, e[o], o, e);
                else if (d(e))
                  for (
                    var r = "object" != typeof e, o = 0, a = e.length;
                    o < a;
                    o++
                  )
                    (r || o in e) && i.call(n, e[o], o, e);
                else if (e.forEach && e.forEach !== t) e.forEach(i, n, e);
                else for (o in e) e.hasOwnProperty(o) && i.call(n, e[o], o, e);
              return e;
            },
            snake_case: function (t, i) {
              return (
                (i = i || "_"),
                t.replace(n, function (t, e) {
                  return (e ? i : "") + t.toLowerCase();
                })
              );
            },
            isValidEmail: function (t) {
              return !!u.isString(t) && r.test(t.trim());
            },
            extend: function t(e) {
              for (var i, n, r = 1; r < arguments.length; r++)
                for (n in (i = arguments[r]))
                  i.hasOwnProperty(n) &&
                    (s(e[n]) && !a(e[n]) && s(i[n])
                      ? (e[n] = t({}, e[n], i[n]))
                      : (e[n] = i[n]));
              return e;
            },
            capitalize: function (t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            },
            decapitalize: function (t) {
              return t.charAt(0).toLowerCase() + t.slice(1);
            },
            transformArray: function (t, i) {
              var n = [];
              return (
                t.forEach(function (t, e) {
                  t = i(t, e);
                  u.isDefined(t) && n.push(t);
                }),
                n
              );
            },
            toFixedDigits: function (t, e) {
              var i = t + "";
              if (
                ((e = u.isNumber(e) ? e : 0),
                (t = u.isNumber(t) ? t : parseInt(t, 10)),
                !u.isNumber(t) || isNaN(t))
              )
                return "NaN";
              for (i = t + ""; i.length < e; ) i = "0" + i;
              return i;
            },
            throttle: function (e, i) {
              var n = new Date().getTime() - (i + 1);
              return function () {
                var t = new Date().getTime();
                i <= t - n && ((n = t), e.apply(this, arguments));
              };
            },
            debounce: function (t, e) {
              var i;
              return function () {
                i && clearTimeout(i),
                  (i = setTimeout(function () {
                    t.apply(this, arguments), (i = void 0);
                  }, e));
              };
            },
            treeSearch: function t(e, i, n) {
              for (var r = i(e), o = 0; o < r.length; o++) {
                if (n(r[o])) return r[o];
                var a = t(r[o], i, n);
                if (a) return a;
              }
            },
            echoFn: function (t) {
              return function () {
                return t;
              };
            },
            isISO8601: function (t) {
              return (
                u.isNumber(t) && (t += ""), !!u.isString(t) && o.test(t.trim())
              );
            },
            isOldIE: function () {
              var t = u.getInternetExplorerVersion(navigator);
              return -1 !== t && t < 10;
            },
            isIE11: function () {
              return (
                0 <=
                navigator.userAgent.search(
                  /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i
                )
              );
            },
            getInternetExplorerVersion: function (t) {
              var e = -1;
              return (e =
                "Microsoft Internet Explorer" == t.appName &&
                ((t = t.userAgent),
                null !== (t = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t)))
                  ? parseFloat(t[1])
                  : e);
            },
            isIDevice: function () {
              return /iP(hone|ad)/.test(u._UA);
            },
            isMobile: function () {
              return /iP(hone|ad|od)|Android|Windows Phone/.test(u._UA);
            },
            isIPhone: function () {
              return /iP(hone|od)/.test(u._UA);
            },
            isAndroid: function () {
              return /Android/.test(u._UA);
            },
            isEdge: c,
            scriptLoadedInIframe: function () {
              var t = document.documentElement.classList;
              return !(t && t.contains("bc-iframe") && c());
            },
          };
          e.exports = u;
        },
        {},
      ],
      44: [
        function (t, e, i) {
          "use strict";
          var l = t("./utilityFunctions"),
            d = {};
          (d.strToXMLDoc = function (t) {
            if (void 0 === window.DOMParser)
              return (
                ((i = new ActiveXObject("Microsoft.XMLDOM")).async = !1),
                i.loadXML(t),
                i
              );
            var e,
              i = t,
              t = new DOMParser();
            try {
              if (
                (function (t) {
                  try {
                    var e = new DOMParser()
                      .parseFromString("INVALID", "text/xml")
                      .getElementsByTagName("parsererror")[0].namespaceURI;
                    return "http://www.w3.org/1999/xhtml" === e
                      ? 0 < t.getElementsByTagName("parsererror").length
                      : 0 < t.getElementsByTagNameNS(e, "parsererror").length;
                  } catch (t) {}
                })((e = t.parseFromString(i, "application/xml"))) ||
                l.isEmptyString(i)
              )
                throw new Error();
            } catch (t) {
              throw new Error(
                "xml.strToXMLDOC: Error parsing the string: '" + i + "'"
              );
            }
            return e;
          }),
            (d.parseText = function (t) {
              return /^\s*$/.test(t)
                ? null
                : /^(?:true|false)$/i.test(t)
                ? "true" === t.toLowerCase()
                : isFinite(t)
                ? parseFloat(t)
                : l.isISO8601(t)
                ? new Date(t)
                : t.trim();
            }),
            (d.JXONTree = function (t) {
              var e = d.parseText;
              if (t.documentElement) return new d.JXONTree(t.documentElement);
              if (t.hasChildNodes()) {
                for (var i, n, r = "", o = 0; o < t.childNodes.length; o++)
                  3 == (((n = t.childNodes.item(o)).nodeType - 1) | 1)
                    ? (r += 3 === n.nodeType ? n.nodeValue.trim() : n.nodeValue)
                    : 1 !== n.nodeType ||
                      n.prefix ||
                      ((i = l.decapitalize(n.nodeName)),
                      (n = new d.JXONTree(n)),
                      this.hasOwnProperty(i)
                        ? (this[i].constructor !== Array &&
                            (this[i] = [this[i]]),
                          this[i].push(n))
                        : (this[i] = n));
                r && (this.keyValue = e(r));
              }
              if (
                void 0 === t.hasAttributes
                  ? 0 < t.attributes.length
                  : t.hasAttributes()
              )
                for (var a, s = 0; s < t.attributes.length; s++)
                  (a = t.attributes.item(s)),
                    (this["@" + l.decapitalize(a.name)] = e(a.value.trim()));
            }),
            (d.JXONTree.prototype.attr = function (t) {
              return this["@" + l.decapitalize(t)];
            }),
            (d.toJXONTree = function (t) {
              window._molSettings.workingXML = t;
              t = d.strToXMLDoc(t);
              return new d.JXONTree(t);
            }),
            (d.keyValue = function (t) {
              if (t) return t.keyValue;
            }),
            (d.attr = function (t, e) {
              if (t) return t["@" + l.decapitalize(e)];
            }),
            (d.encode = function (t) {
              if (l.isString(t))
                return t
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&apos;");
            }),
            (d.decode = function (t) {
              if (l.isString(t))
                return t
                  .replace(/&apos;/g, "'")
                  .replace(/&quot;/g, '"')
                  .replace(/&gt;/g, ">")
                  .replace(/&lt;/g, "<")
                  .replace(/&amp;/g, "&");
            }),
            (e.exports = d);
        },
        { "./utilityFunctions": 43 },
      ],
      45: [
        function (t, e, i) {
          "use strict";
          var n = window.videojs || {
              getComponent: function () {},
              extend: function () {},
              registerComponent: function () {},
              registerPlugin: function () {},
            },
            r = ((window._molSettings = null), t("./utils/consoleLogger")),
            t =
              (r.log("VastVpaid  plugin version 5.0.0"),
              t("./plugin/videojs.vast.vpaid"));
          if (n.registerPlugin)
            n.getPlugins().vastClient || n.registerPlugin("vastClient", t);
          else if (n.Player)
            n.Player.prototype.vastClient || n.plugin("vastClient", t);
          else if (n.plugin)
            try {
              n.plugin("vastClient", t);
            } catch (t) {
              r.log(
                "*** ERROR: Unable to register VastVpaid plugin with VideoJS!"
              );
            }
          parent && window !== parent && (window.bc_vastClientFunc = t);
        },
        { "./plugin/videojs.vast.vpaid": 34, "./utils/consoleLogger": 37 },
      ],
    },
    {},
    [45]
  );
const player = videojs("veoplayer", {
  poster: poster,
  sources: [
    {
      src: streamurl + "/hls/ski/playlist.m3u8",
      type: "application/x-mpegURL",
    },
  ],
  html5: { nativeAudioTracks: false },
});
player.nuevo({
  contextMenu: false,
  url: "https://www.nuevodevel.com/nuevo/showcase/vpaid",
  title: "VideoJs VAST with Nuevo plugin",
});
player.vastAds({
  tagURL: "https://rtr.innovid.com/r1.5554946ab01d97.36996823;",
  id: "x01",
});
