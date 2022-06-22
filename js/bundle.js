!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    e.exports = n(1);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(2);
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var o = document.querySelectorAll("._animated");
    if (o.length > 0) {
      var i = function (e) {
          for (var t = 0; t < o.length; t++) {
            var n = o[t],
              r = n.offsetHeight,
              i = u(n).top,
              l = window.innerHeight - r / 4;
            r > window.innerHeight && (l = window.innerHeight - window.innerHeight / 4),
              pageYOffset > i - l && pageYOffset < i + r && n.classList.add("_active");
          }
        },
        u = function (e) {
          var t = e.getBoundingClientRect(),
            n = window.pageXOffset || document.documentElement.scrollLeft,
            r = window.pageYOffset || document.documentElement.scrollTop;
          return { top: t.top + r, left: t.left + n };
        };
      window.addEventListener("scroll", i), i();
    }
    var l,
      f = (function (e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
            })(e))
          ) {
            var t = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          i,
          u = !0,
          l = !1;
        return {
          s: function () {
            o = e[Symbol.iterator]();
          },
          n: function () {
            var e = o.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              u || null == o.return || o.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      })(document.querySelectorAll("a.scroll-to"));
    try {
      var a = function () {
        var e = l.value;
        e.addEventListener("click", function (t) {
          t.preventDefault();
          var n = e.getAttribute("href");
          document.querySelector(n).scrollIntoView({ behavior: "smooth", block: "start" });
        });
      };
      for (f.s(); !(l = f.n()).done; ) a();
    } catch (e) {
      f.e(e);
    } finally {
      f.f();
    }
    console.log("Great!");
  },
  function (e, t, n) {},
]);
