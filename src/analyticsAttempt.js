/* eslint-disable */

// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "google.de" },
        { function: "__c", vtp_value: 0 },
        { vtp_signal: 0, function: "__c", vtp_value: 0 },
      ],
      tags: [
        { function: "__gct", vtp_trackingId: "G-SQJCGKCC2K", vtp_sessionDuration: 0, tag_id: 1 },
        {
          function: "__set_product_settings",
          original_activity_id: 3001,
          vtp_foreignTldMacroResult: ["macro", 1],
          vtp_isChinaVipRegionMacroResult: ["macro", 2],
          tag_id: 4,
        },
        {
          function: "__ogt_event_settings",
          original_activity_id: 3002,
          vtp_eventSettings: ["list", ["map", "name", "purchase", "conversion", true]],
          tag_id: 5,
        },
        {
          function: "__ogt_google_signals",
          original_activity_id: 3003,
          vtp_googleSignals: "DISABLED",
          vtp_serverMacroResult: ["macro", 3],
          tag_id: 6,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1, 2, 3],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__ogt_event_settings",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [52, "d", [8]],
        [
          53,
          [41, "f"],
          [3, "f", 0],
          [
            63,
            [7, "f"],
            [23, [15, "f"], [17, [17, [15, "a"], "eventSettings"], "length"]],
            [33, [15, "f"], [3, "f", [0, [15, "f"], 1]]],
            [
              46,
              [
                53,
                [52, "g", [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "name"]],
                [
                  43,
                  [15, "d"],
                  [15, "g"],
                  [
                    8,
                    "blacklisted",
                    [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "blacklisted"],
                    "conversion",
                    [16, [16, [17, [15, "a"], "eventSettings"], [15, "f"]], "conversion"],
                  ],
                ],
              ],
            ],
          ],
        ],
        [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]],
        ["b", [15, "e"], "event_settings", [15, "d"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__set_product_settings",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [52, "d", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]],
        ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
        [
          "b",
          [15, "d"],
          "ga_restrict_domain",
          [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_google_signals",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]],
        [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]],
        ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
        [
          22,
          [17, [15, "d"], "enableGa4OnoRemarketing"],
          [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
    ],
    permissions: {
      __ogt_event_settings: { read_container_data: {} },
      __set_product_settings: { read_container_data: {} },
      __ogt_google_signals: { read_container_data: {} },
    },

    security_groups: {
      google: ["__ogt_event_settings", "__set_product_settings", "__ogt_google_signals"],
    },
  };

  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var l,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: ba(a) };
    },
    ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ia;
        ha = ja.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = fa,
    la = function (a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Mk = b.prototype;
    },
    ma = this || self,
    na = function (a) {
      return a;
    };
  var oa = function (a, b) {
    this.g = a;
    this.o = b;
  };
  var pa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    qa = function () {
      this.C = {};
      this.s = !1;
      this.I = {};
    },
    ra = function (a, b) {
      var c = [],
        d;
      for (d in a.C)
        if (a.C.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  qa.prototype.get = function (a) {
    return this.C["dust." + a];
  };
  qa.prototype.set = function (a, b) {
    this.s || ((a = "dust." + a), this.I.hasOwnProperty(a) || (this.C[a] = b));
  };
  qa.prototype.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  var sa = function (a, b) {
    b = "dust." + b;
    a.s || a.I.hasOwnProperty(b) || delete a.C[b];
  };
  qa.prototype.Hb = function () {
    this.s = !0;
  };
  var ta = function (a) {
    this.o = new qa();
    this.g = [];
    this.s = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) && (pa(b) ? (this.g[Number(b)] = a[Number(b)]) : this.o.set(b, a[b]));
  };
  l = ta.prototype;
  l.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.g.length; c++) {
      var d = this.g[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof ta
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  l.set = function (a, b) {
    if (!this.s)
      if ("length" === a) {
        if (!pa(b)) throw Error("RangeError: Length property must be a valid integer.");
        this.g.length = Number(b);
      } else pa(a) ? (this.g[Number(a)] = b) : this.o.set(a, b);
  };
  l.get = function (a) {
    return "length" === a ? this.length() : pa(a) ? this.g[Number(a)] : this.o.get(a);
  };
  l.length = function () {
    return this.g.length;
  };
  l.Gb = function () {
    for (var a = ra(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
    return new ta(a);
  };
  var ua = function (a, b) {
    pa(b) ? delete a.g[Number(b)] : sa(a.o, b);
  };
  l = ta.prototype;
  l.pop = function () {
    return this.g.pop();
  };
  l.push = function (a) {
    return this.g.push.apply(this.g, Array.prototype.slice.call(arguments));
  };
  l.shift = function () {
    return this.g.shift();
  };
  l.splice = function (a, b, c) {
    return new ta(this.g.splice.apply(this.g, arguments));
  };
  l.unshift = function (a) {
    return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments));
  };
  l.has = function (a) {
    return (pa(a) && this.g.hasOwnProperty(a)) || this.o.has(a);
  };
  l.Hb = function () {
    this.s = !0;
    Object.freeze(this.g);
    this.o.Hb();
  };
  var va = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].Vd + g > b[f].max) throw Error("Quota exceeded");
        b[f].Vd += g;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Nj: function (f) {
          c = f;
        },
        Xg: function () {
          c && a(c, 1);
        },
        Pj: function (f) {
          d = f;
        },
        Ib: function (f) {
          d && a(d, f);
        },
        mk: function (f, g) {
          b[f] = b[f] || { Vd: 0 };
          b[f].max = g;
        },
        pj: function (f) {
          return (b[f] && b[f].Vd) || 0;
        },
        reset: function () {
          b = {};
        },
        aj: a,
      };
    e.onFnConsume = e.Nj;
    e.consumeFn = e.Xg;
    e.onStorageConsume = e.Pj;
    e.consumeStorage = e.Ib;
    e.setMax = e.mk;
    e.getConsumed = e.pj;
    e.reset = e.reset;
    e.consume = e.aj;
    return e;
  };
  var wa = function (a, b) {
    this.s = a;
    this.O = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.o = new qa();
    this.g = this.I = void 0;
  };
  wa.prototype.add = function (a, b) {
    xa(this, a, b, !1);
  };
  var xa = function (a, b, c, d) {
    if (!a.o.s)
      if (
        (a.s.Ib(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)),
        d)
      ) {
        var e = a.o;
        e.set(b, c);
        e.I["dust." + b] = !0;
      } else a.o.set(b, c);
  };
  wa.prototype.set = function (a, b) {
    this.o.s ||
      (!this.o.has(a) && this.C && this.C.has(a)
        ? this.C.set(a, b)
        : (this.s.Ib(
            ("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1),
          ),
          this.o.set(a, b)));
  };
  wa.prototype.get = function (a) {
    return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0;
  };
  wa.prototype.has = function (a) {
    return !!this.o.has(a) || !(!this.C || !this.C.has(a));
  };
  var ya = function (a) {
    var b = new wa(a.s, a);
    a.I && (b.I = a.I);
    b.O = a.O;
    b.g = a.g;
    return b;
  };
  var Ba = function () {},
    Ca = function (a) {
      return "function" === typeof a;
    },
    m = function (a) {
      return "string" === typeof a;
    },
    Da = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ea = Array.isArray,
    Ga = function (a, b) {
      if (a && Ea(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ia = function (a, b) {
      if (!Da(a) || !Da(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ka = function (a, b) {
      for (var c = new Ja(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    La = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ma = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Na = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Oa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Pa = function (a) {
      var b = [];
      if (Ea(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Qa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ra = function () {
      return new Date(Date.now());
    },
    Sa = function () {
      return Ra().getTime();
    },
    Ja = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ja.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ja.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ta = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Va = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Wa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Xa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Za = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    $a = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    ab = /^\w{1,9}$/,
    bb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      La(a, function (d, e) {
        ab.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    cb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var db = function (a, b) {
    qa.call(this);
    this.O = a;
    this.ab = b;
  };
  la(db, qa);
  db.prototype.toString = function () {
    return this.O;
  };
  db.prototype.Gb = function () {
    return new ta(ra(this, 1));
  };
  db.prototype.g = function (a, b) {
    a.s.Xg();
    return this.ab.apply(new eb(this, a), Array.prototype.slice.call(arguments, 1));
  };
  db.prototype.o = function (a, b) {
    try {
      return this.g.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var gb = function (a, b) {
      for (var c, d = 0; d < b.length && !((c = fb(a, b[d])), c instanceof oa); d++);
      return c;
    },
    fb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof db))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.g.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.I;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    eb = function (a, b) {
      this.o = a;
      this.g = b;
    },
    G = function (a, b) {
      return Ea(b) ? fb(a.g, b) : b;
    },
    H = function (a) {
      return a.o.O;
    };
  var hb = function () {
    qa.call(this);
  };
  la(hb, qa);
  hb.prototype.Gb = function () {
    return new ta(ra(this, 1));
  };
  var ib = {
    control: function (a, b) {
      return new oa(a, G(this, b));
    },
    fn: function (a, b, c) {
      var d = this.g,
        e = G(this, b);
      if (!(e instanceof ta)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.g.s.Ib(a.length + f.length);
      return new db(
        a,
        (function () {
          return function (g) {
            var h = ya(d);
            void 0 === h.g && (h.g = this.g.g);
            for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
              if (((k[n] = G(this, k[n])), k[n] instanceof oa)) return k[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new ta(k));
            var r = gb(h, f);
            if (r instanceof oa) return "return" === r.g ? r.o : r;
          };
        })(),
      );
    },
    list: function (a) {
      var b = this.g.s;
      b.Ib(arguments.length);
      for (var c = new ta(), d = 0; d < arguments.length; d++) {
        var e = G(this, arguments[d]);
        "string" === typeof e && b.Ib(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (var b = this.g.s, c = new hb(), d = 0; d < arguments.length - 1; d += 2) {
        var e = G(this, arguments[d]) + "",
          f = G(this, arguments[d + 1]),
          g = e.length;
        g += "string" === typeof f ? f.length : 1;
        b.Ib(g);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var jb = function () {
      this.s = va();
      this.g = new wa(this.s);
    },
    kb = function (a, b, c) {
      var d = new db(b, c);
      d.Hb();
      a.g.set(b, d);
    },
    lb = function (a, b, c) {
      ib.hasOwnProperty(b) && kb(a, c || b, ib[b]);
    };
  jb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.o(c);
  };
  jb.prototype.o = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = fb(this.g, arguments[c]);
    return b;
  };
  jb.prototype.C = function (a, b) {
    var c = ya(this.g);
    c.g = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = fb(c, arguments[e]);
    return d;
  };
  var mb,
    nb = function () {
      if (void 0 === mb) {
        var a = null,
          b = ma.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: na,
              createScript: na,
              createScriptURL: na,
            });
          } catch (c) {
            ma.console && ma.console.error(c.message);
          }
          mb = a;
        } else mb = a;
      }
      return mb;
    };
  var pb = function (a, b) {
    this.g = b === ob ? a : "";
  };
  pb.prototype.toString = function () {
    return this.g + "";
  };
  var qb = function (a) {
      return a instanceof pb && a.constructor === pb ? a.g : "type_error:TrustedResourceUrl";
    },
    ob = {},
    rb = function (a) {
      var b = nb(),
        c = b ? b.createScriptURL(a) : a;
      return new pb(c, ob);
    };
  var sb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function tb() {
    var a = ma.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function ub(a) {
    return -1 != tb().indexOf(a);
  }
  var vb = {},
    wb = function (a, b, c) {
      this.g = c === vb ? a : "";
    };
  wb.prototype.toString = function () {
    return this.g.toString();
  };
  var xb = function (a) {
      return a instanceof wb && a.constructor === wb ? a.g : "type_error:SafeHtml";
    },
    yb = function (a) {
      var b = nb(),
        c = b ? b.createHTML(a) : a;
      return new wb(c, null, vb);
    }; /*

   SPDX-License-Identifier: Apache-2.0
  */
  var zb = {};
  var Ab = function () {},
    Bb = function (a) {
      this.g = a;
    };
  la(Bb, Ab);
  Bb.prototype.toString = function () {
    return this.g;
  };
  function Cb(a, b) {
    var c = [new Bb(Db[0].toLowerCase(), zb)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Bb) g = f.g;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true");
  }
  function Eb(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var z = window,
    I = document,
    Fb = navigator,
    Gb = I.currentScript && I.currentScript.src,
    Hb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Ib = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b());
            }));
    },
    Jb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Kb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Lb(a, b, c) {
    b &&
      La(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Mb = function (a, b, c, d) {
      var e = I.createElement("script");
      Lb(e, d, Jb);
      e.type = "text/javascript";
      e.async = !0;
      var f = rb(a);
      e.src = qb(f);
      var g,
        h,
        k,
        n =
          null ==
          (k = (h = ((e.ownerDocument && e.ownerDocument.defaultView) || window).document)
            .querySelector)
            ? void 0
            : k.call(h, "script[nonce]");
      (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
      Ib(e, b);
      c && (e.onerror = c);
      var p = I.getElementsByTagName("script")[0] || I.body || I.head;
      p.parentNode.insertBefore(e, p);
      return e;
    },
    Nb = function () {
      if (Gb) {
        var a = Gb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Ob = function (a, b, c, d, e) {
      var f = e,
        g = !1;
      f || ((f = I.createElement("iframe")), (g = !0));
      Lb(f, c, Kb);
      d &&
        La(d, function (k, n) {
          f.dataset[k] = n;
        });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var h = (I.body && I.body.lastChild) || I.body || I.head;
        h.parentNode.insertBefore(f, h);
      }
      Ib(f, b);
      void 0 !== a && (f.src = a);
      return f;
    },
    Pb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Qb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Rb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      z.setTimeout(a, 0);
    },
    Sb = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Tb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Ub = function (a) {
      var b = I.createElement("div"),
        c = b,
        d = yb("A<div>" + a + "</div>");
      void 0 !== c.tagName && Eb(c);
      c.innerHTML = xb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Vb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Wb = function (a) {
      var b;
      try {
        b = Fb.sendBeacon && Fb.sendBeacon(a);
      } catch (c) {}
      b || Pb(a);
    },
    Xb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Yb = function (a) {
      var b = I.featurePolicy;
      return b && Ca(b.allowsFeature) ? b.allowsFeature(a) : !1;
    };
  var $b = function (a, b) {
      return G(this, a) && G(this, b);
    },
    ac = function (a, b) {
      return G(this, a) === G(this, b);
    },
    bc = function (a, b) {
      return G(this, a) || G(this, b);
    },
    cc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    dc = function (a, b) {
      a = String(G(this, a));
      b = String(G(this, b));
      return a.substring(0, b.length) === b;
    },
    ec = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof hb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var gc = function () {
    this.g = new jb();
    fc(this);
  };
  gc.prototype.execute = function (a) {
    return this.g.o(a);
  };
  var fc = function (a) {
    lb(a.g, "map");
    var b = function (c, d) {
      kb(a.g, c, d);
    };
    b("and", $b);
    b("contains", cc);
    b("equals", ac);
    b("or", bc);
    b("startsWith", dc);
    b("variable", ec);
  };
  var hc = function (a) {
    if (a instanceof hc) return a;
    this.hb = a;
  };
  hc.prototype.toString = function () {
    return String(this.hb);
  };
  var jc = function (a) {
    qa.call(this);
    this.g = a;
    this.set("then", ic(this));
    this.set("catch", ic(this, !0));
    this.set("finally", ic(this, !1, !0));
  };
  la(jc, hb);
  var ic = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new db("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof db || (d = void 0);
      e instanceof db || (e = void 0);
      var f = ya(this.g),
        g = function (k) {
          return function (n) {
            return c ? (k.g(f), a.g) : k.g(f, n);
          };
        },
        h = a.g.then(d && g(d), e && g(e));
      return new jc(h);
    });
  }; /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var kc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    lc = function (a) {
      if (null == a) return String(a);
      var b = kc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    mc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    nc = function (a) {
      if (!a || "object" != lc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !mc(a, "constructor") &&
          !mc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || mc(a, b);
    },
    oc = function (a, b) {
      var c = b || ("array" == lc(a) ? [] : {}),
        d;
      for (d in a)
        if (mc(a, d)) {
          var e = a[d];
          "array" == lc(e)
            ? ("array" != lc(c[d]) && (c[d] = []), (c[d] = oc(e, c[d])))
            : nc(e)
            ? (nc(c[d]) || (c[d] = {}), (c[d] = oc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var qc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n = ra(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (h instanceof ta) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Gb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof jc) return h.g;
          if (h instanceof hb) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof db) {
            var u = function () {
              for (var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++)
                v[x] = pc(v[x], b, c);
              var y = b ? b.s : va(),
                w = new wa(y);
              b && (w.g = b.g);
              return g(h.g.apply(h, [w].concat(v)));
            };
            d.push(h);
            e.push(u);
            f(h, u);
            return u;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (h instanceof hc && t) return h.hb;
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null;
          }
        };
      return g(a);
    },
    pc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (Ea(h) || Ma(h)) {
            var n = new ta([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (nc(h)) {
            var q = new hb();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ("function" === typeof h) {
            var r = new db("", function (w) {
              for (var B = Array.prototype.slice.call(arguments, 0), A = 0; A < B.length; A++)
                B[A] = qc(G(this, B[A]), b, c);
              return g((0, this.g.O)(h, h, B));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var x = typeof h;
          if (null === h || "string" === x || "number" === x || "boolean" === x) return h;
          var y = !1;
          switch (c) {
            case 1:
              y = !0;
              break;
            case 2:
              y = !1;
              break;
            default:
          }
          if (void 0 !== h && y) return new hc(h);
        };
      return g(a);
    };
  var rc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
      return b;
    },
    sc = function (a) {
      if (void 0 === a || Ea(a) || nc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var tc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " ",
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof ta)
          for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
        else c.push(arguments[e]);
      return new ta(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
        this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
      return new ta(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.g(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
        this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
      return new ta(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = rc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : ua(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ta(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = rc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.g(a, e, f));
          });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ua(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1),
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var uc =
      "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
        " ",
      ),
    vc = new oa("break"),
    wc = new oa("continue"),
    xc = function (a, b) {
      return G(this, a) + G(this, b);
    },
    yc = function (a, b) {
      return G(this, a) && G(this, b);
    },
    Ac = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (!(c instanceof ta)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = qc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= uc.indexOf(b)) {
          var f = qc(c);
          return pc(a[b].apply(a, f), this.g);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof ta) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof db) {
            var h = rc(c);
            h.unshift(this.g);
            return g.g.apply(g, h);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= tc.supportedMethods.indexOf(b)) {
          var k = rc(c);
          k.unshift(this.g);
          return tc[b].apply(a, k);
        }
      }
      if (a instanceof db || a instanceof hb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof db) {
            var p = rc(c);
            p.unshift(this.g);
            return n.g.apply(n, p);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof db ? a.O : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, rc(c));
      }
      if (a instanceof hc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Bc = function (a, b) {
      a = G(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.g;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = G(this, b);
      c.set(a, d);
      return d;
    },
    Cc = function (a) {
      var b = ya(this.g),
        c = gb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof oa) return c;
    },
    Dc = function () {
      return vc;
    },
    Ec = function (a) {
      for (var b = G(this, a), c = 0; c < b.length; c++) {
        var d = G(this, b[c]);
        if (d instanceof oa) return d;
      }
    },
    Fc = function (a) {
      for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = G(this, arguments[c + 1]);
          xa(b, d, e, !0);
        }
      }
    },
    Gc = function () {
      return wc;
    },
    Hc = function (a, b, c) {
      var d = new ta();
      b = G(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.g.add(a, G(this, f));
    },
    Ic = function (a, b) {
      return G(this, a) / G(this, b);
    },
    Jc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      var c = a instanceof hc,
        d = b instanceof hc;
      return c || d ? (c && d ? a.hb == b.hb : !1) : a == b;
    },
    Kc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
      return b;
    };
  function Lc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = gb(f, d);
      if (g instanceof oa) {
        if ("break" === g.g) break;
        if ("return" === g.g) return g;
      }
    }
  }
  function Mc(a, b, c) {
    if ("string" === typeof b)
      return Lc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c,
      );
    if (b instanceof hb || b instanceof ta || b instanceof db) {
      var d = b.Gb(),
        e = d.length();
      return Lc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c,
      );
    }
  }
  var Nc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Mc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c,
      );
    },
    Oc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Mc(
        function (e) {
          var f = ya(d);
          xa(f, a, e, !0);
          return f;
        },
        b,
        c,
      );
    },
    Pc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Mc(
        function (e) {
          var f = ya(d);
          f.add(a, e);
          return f;
        },
        b,
        c,
      );
    },
    Rc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Qc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c,
      );
    },
    Sc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Qc(
        function (e) {
          var f = ya(d);
          xa(f, a, e, !0);
          return f;
        },
        b,
        c,
      );
    },
    Tc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.g;
      return Qc(
        function (e) {
          var f = ya(d);
          f.add(a, e);
          return f;
        },
        b,
        c,
      );
    };
  function Qc(a, b, c) {
    if ("string" === typeof b)
      return Lc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c,
      );
    if (b instanceof ta)
      return Lc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c,
      );
    throw new TypeError("The value is not iterable.");
  }
  var Wc = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var u = f.get(r);
          q.add(u, p.get(u));
        }
      }
      var f = G(this, a);
      if (!(f instanceof ta))
        throw Error("TypeError: Non-List argument given to ForLet instruction.");
      var g = this.g;
      d = G(this, d);
      var h = ya(g);
      for (e(g, h); fb(h, b); ) {
        var k = gb(h, d);
        if (k instanceof oa) {
          if ("break" === k.g) break;
          if ("return" === k.g) return k;
        }
        var n = ya(g);
        e(h, n);
        fb(n, c);
        h = n;
      }
    },
    Xc = function (a) {
      a = G(this, a);
      var b = this.g,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Yc = function (a, b) {
      var c;
      a = G(this, a);
      b = G(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof hb || a instanceof ta || a instanceof db) c = a.get(b);
      else if ("string" === typeof a) "length" === b ? (c = a.length) : pa(b) && (c = a[b]);
      else if (a instanceof hc) return;
      return c;
    },
    Zc = function (a, b) {
      return G(this, a) > G(this, b);
    },
    $c = function (a, b) {
      return G(this, a) >= G(this, b);
    },
    ad = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      a instanceof hc && (a = a.hb);
      b instanceof hc && (b = b.hb);
      return a === b;
    },
    bd = function (a, b) {
      return !ad.call(this, a, b);
    },
    cd = function (a, b, c) {
      var d = [];
      G(this, a) ? (d = G(this, b)) : c && (d = G(this, c));
      var e = gb(this.g, d);
      if (e instanceof oa) return e;
    },
    dd = function (a, b) {
      return G(this, a) < G(this, b);
    },
    ed = function (a, b) {
      return G(this, a) <= G(this, b);
    },
    fd = function (a, b) {
      return G(this, a) % G(this, b);
    },
    gd = function (a, b) {
      return G(this, a) * G(this, b);
    },
    hd = function (a) {
      return -G(this, a);
    },
    id = function (a) {
      return !G(this, a);
    },
    jd = function (a, b) {
      return !Jc.call(this, a, b);
    },
    kd = function () {
      return null;
    },
    ld = function (a, b) {
      return G(this, a) || G(this, b);
    },
    md = function (a, b) {
      var c = G(this, a);
      G(this, b);
      return c;
    },
    nd = function (a) {
      return G(this, a);
    },
    od = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pd = function (a) {
      return new oa("return", G(this, a));
    },
    qd = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof db || a instanceof ta || a instanceof hb) && a.set(b, c);
      return c;
    },
    rd = function (a, b) {
      return G(this, a) - G(this, b);
    },
    sd = function (a, b, c) {
      a = G(this, a);
      var d = G(this, b),
        e = G(this, c);
      if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === G(this, d[h]))
          if (((f = G(this, e[h])), f instanceof oa)) {
            var k = f.g;
            if ("break" === k) return;
            if ("return" === k || "continue" === k) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = G(this, e[e.length - 1])),
        f instanceof oa && ("return" === f.g || "continue" === f.g))
      )
        return f;
    },
    wd = function (a, b, c) {
      return G(this, a) ? G(this, b) : G(this, c);
    },
    xd = function (a) {
      a = G(this, a);
      return a instanceof db ? "function" : typeof a;
    },
    yd = function (a) {
      for (var b = this.g, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    zd = function (a, b, c, d) {
      var e = G(this, d);
      if (G(this, c)) {
        var f = gb(this.g, e);
        if (f instanceof oa) {
          if ("break" === f.g) return;
          if ("return" === f.g) return f;
        }
      }
      for (; G(this, a); ) {
        var g = gb(this.g, e);
        if (g instanceof oa) {
          if ("break" === g.g) break;
          if ("return" === g.g) return g;
        }
        G(this, b);
      }
    },
    Ad = function (a) {
      return ~Number(G(this, a));
    },
    Bd = function (a, b) {
      return Number(G(this, a)) << Number(G(this, b));
    },
    Cd = function (a, b) {
      return Number(G(this, a)) >> Number(G(this, b));
    },
    Dd = function (a, b) {
      return Number(G(this, a)) >>> Number(G(this, b));
    },
    Ed = function (a, b) {
      return Number(G(this, a)) & Number(G(this, b));
    },
    Fd = function (a, b) {
      return Number(G(this, a)) ^ Number(G(this, b));
    },
    Gd = function (a, b) {
      return Number(G(this, a)) | Number(G(this, b));
    };
  var Id = function () {
    this.g = new jb();
    Hd(this);
  };
  Id.prototype.execute = function (a) {
    return Jd(this.g.o(a));
  };
  var Kd = function (a, b, c) {
      return Jd(a.g.C(b, c));
    },
    Hd = function (a) {
      var b = function (d, e) {
        lb(a.g, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        kb(a.g, String(d), e);
      };
      c(0, xc);
      c(1, yc);
      c(2, Ac);
      c(3, Bc);
      c(53, Cc);
      c(4, Dc);
      c(5, Ec);
      c(52, Fc);
      c(6, Gc);
      c(9, Ec);
      c(50, Hc);
      c(10, Ic);
      c(12, Jc);
      c(13, Kc);
      c(47, Nc);
      c(54, Oc);
      c(55, Pc);
      c(63, Wc);
      c(64, Rc);
      c(65, Sc);
      c(66, Tc);
      c(15, Xc);
      c(16, Yc);
      c(17, Yc);
      c(18, Zc);
      c(19, $c);
      c(20, ad);
      c(21, bd);
      c(22, cd);
      c(23, dd);
      c(24, ed);
      c(25, fd);
      c(26, gd);
      c(27, hd);
      c(28, id);
      c(29, jd);
      c(45, kd);
      c(30, ld);
      c(32, md);
      c(33, md);
      c(34, nd);
      c(35, nd);
      c(46, od);
      c(36, pd);
      c(43, qd);
      c(37, rd);
      c(38, sd);
      c(39, wd);
      c(40, xd);
      c(41, yd);
      c(42, zd);
      c(58, Ad);
      c(57, Bd);
      c(60, Cd);
      c(61, Dd);
      c(56, Ed);
      c(62, Fd);
      c(59, Gd);
    };
  function Jd(a) {
    if (
      a instanceof oa ||
      a instanceof db ||
      a instanceof ta ||
      a instanceof hb ||
      a instanceof hc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Ld = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Rh: a("consent"),
      qe: a("consent_always_fire"),
      Uf: a("convert_case_to"),
      Vf: a("convert_false_to"),
      Wf: a("convert_null_to"),
      Xf: a("convert_true_to"),
      Yf: a("convert_undefined_to"),
      xk: a("debug_mode_metadata"),
      Fb: a("function"),
      Ci: a("instance_name"),
      Gi: a("live_only"),
      Hi: a("malware_disabled"),
      Ii: a("metadata"),
      Ni: a("original_activity_id"),
      Ck: a("original_vendor_template_id"),
      Bk: a("once_on_load"),
      Mi: a("once_per_event"),
      Cg: a("once_per_load"),
      Ek: a("priority_override"),
      Fk: a("respected_consent_types"),
      Ig: a("setup_tags"),
      Kg: a("tag_id"),
      Lg: a("teardown_tags"),
    };
  })();
  var he;
  var ie = [],
    je = [],
    ke = [],
    le = [],
    me = [],
    ne = {},
    oe,
    pe,
    qe,
    re = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    se = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = ne[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.Wg && d.Wg(a[g]), (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Ld.qe.toString() && a[g]) {
          }
      e && d && d.Vg && (f.vtp_gtmCachedValues = d.Vg);
      return void 0 !== e ? e(f) : he(c, f, b);
    },
    ue = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = te(a[e], b, c));
      return d;
    },
    te = function (a, b, c) {
      if (Ea(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(te(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ie[f];
            if (!g || b.yf(g)) return;
            c[f] = !0;
            try {
              var h = ue(g, b, c);
              h.vtp_gtmEventId = b.id;
              d = se(h, { event: b, index: f, type: 2 });
              qe && (d = qe.bj(d, h));
            } catch (y) {
              b.qh && b.qh(y, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var k = 1; k < a.length; k += 2) d[te(a[k], b, c)] = te(a[k + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = te(a[p], b, c);
              pe && (n = n || q === pe.Ld);
              d.push(q);
            }
            return pe && n ? pe.fj(d) : d.join("");
          case "escape":
            d = te(a[1], b, c);
            if (pe && Ea(a[1]) && "macro" === a[1][0] && pe.Cj(a)) return pe.Uj(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) Md[a[r]] && (d = Md[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!le[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { fh: a[2], index: u });
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t["function"] = a[1];
            var v = ve(t, b, c),
              x = !!a[4];
            return x || 2 !== v ? x !== (1 === v) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    ve = function (a, b, c) {
      try {
        return oe(ue(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var we = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.o = a;
    this.g = c;
  };
  la(we, Error);
  function xe(a, b) {
    if (Ea(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) xe(a[c], b[c]);
    }
  }
  var ye = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Qj = a;
    this.o = b;
    this.g = [];
  };
  la(ye, Error);
  var Ae = function () {
    return function (a, b) {
      a instanceof ye || (a = new ye(a, ze));
      b && a.g.push(b);
      throw a;
    };
  };
  function ze(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var De = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Be(a), f = 0; f < je.length; f++) {
        var g = je[f],
          h = Ce(g, e);
        if (h) {
          for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < le.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ce = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Be = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ve(ke[c], a));
        return b[c];
      };
    };
  var Ee = {
    bj: function (a, b) {
      b[Ld.Uf] &&
        "string" === typeof a &&
        (a = 1 == b[Ld.Uf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ld.Wf) && null === a && (a = b[Ld.Wf]);
      b.hasOwnProperty(Ld.Yf) && void 0 === a && (a = b[Ld.Yf]);
      b.hasOwnProperty(Ld.Xf) && !0 === a && (a = b[Ld.Xf]);
      b.hasOwnProperty(Ld.Vf) && !1 === a && (a = b[Ld.Vf]);
      return a;
    },
  };
  var Fe = function () {
    this.g = {};
  };
  function Ge(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new we(c, d, g);
      }
  }
  function He(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.g[d],
          f = a.g.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Ge(e, b, d, g);
          Ge(f, b, d, g);
        }
      }
    };
  }
  var Le = function () {
      var a = data.permissions || {},
        b = Ie.J,
        c = this;
      this.o = new Fe();
      this.g = {};
      var d = {},
        e = He(this.o, b, function () {
          var f = arguments[0];
          return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {};
        });
      La(a, function (f, g) {
        var h = {};
        La(g, function (k, n) {
          var p = Je(k, n);
          h[k] = p.assert;
          d[k] || (d[k] = p.U);
        });
        c.g[f] = function (k, n) {
          var p = h[k];
          if (!p) throw Ke(k, {}, "The requested permission " + k + " is not configured.");
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Ne = function (a) {
      return Me.g[a] || function () {};
    };
  function Je(a, b) {
    var c = re(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ke;
    try {
      return se(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new we(e, {}, "Permission " + e + " is unknown.");
        },
        U: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Ke(a, b, c) {
    return new we(a, b, c);
  }
  var Oe = !1;
  var Pe = {};
  Pe.wk = Oa("");
  Pe.jj = Oa("");
  var Qe = Oe,
    Re = Pe.jj,
    Se = Pe.wk;
  var Te = function (a, b) {
    var c = String(a);
    return c;
  };
  var Ye = function (a) {
      var b = {},
        c = 0;
      La(a, function (e, f) {
        if (void 0 !== f)
          if (((f = Te(f, 100)), Ue.hasOwnProperty(e))) b[Ue[e]] = Ve(f);
          else if (We.hasOwnProperty(e)) {
            var g = We[e],
              h = Ve(f);
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ("category" === e)
            for (var k = Ve(f).split("/", 5), n = 0; n < k.length; n++) {
              var p = Xe[n],
                q = k[n];
              b.hasOwnProperty(p) || (b[p] = q);
            }
          else 10 > c && ((b["k" + c] = Ve(Te(e, 40))), (b["v" + c] = Ve(f)), c++);
      });
      var d = [];
      La(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    Ve = function (a) {
      return ("" + a).replace(/~/g, function () {
        return "~~";
      });
    },
    Ue = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo",
    },
    We = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn",
    },
    Xe = ["ca", "c2", "c3", "c4", "c5"];
  var Ze = function (a) {
      var b = [];
      La(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    $e = function (a, b, c, d) {
      this.va = a.va;
      this.Qb = a.Qb;
      this.T = a.T;
      this.g = b;
      this.C = c;
      this.s = Ze(a.va);
      this.o = Ze(a.T);
      this.I = this.o.length;
      if (d && 16384 < this.I) throw Error("EVENT_TOO_LARGE");
    };
  var af = function () {
    this.events = [];
    this.g = this.va = "";
    this.s = 0;
    this.o = !1;
  };
  af.prototype.add = function (a) {
    return this.C(a)
      ? (this.events.push(a),
        (this.va = a.s),
        (this.g = a.g),
        (this.s += a.I),
        (this.o = a.C),
        !0)
      : !1;
  };
  af.prototype.C = function (a) {
    var b = 20 > this.events.length && 16384 > a.I + this.s,
      c = this.va === a.s && this.g === a.g && this.o === a.C;
    return 0 == this.events.length || (b && c);
  };

  var bf = function (a, b) {
      La(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    cf = function (a, b) {
      var c = [];
      a.s && c.push(a.s);
      b && c.push("_s=" + b);
      bf(a.Qb, c);
      var d = !1;
      a.o && (c.push(a.o), (d = !0));
      var e = c.join("&"),
        f = "",
        g = e.length + a.g.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join("&")));
      return { Hf: e, body: f };
    },
    df = function (a, b) {
      var c = a.events;
      if (1 == c.length) return cf(c[0], b);
      var d = [];
      a.va && d.push(a.va);
      for (var e = {}, f = 0; f < c.length; f++)
        La(c[f].Qb, function (u, t) {
          null != t && ((e[u] = e[u] || {}), (e[u][String(t)] = e[u][String(t)] + 1 || 1));
        });
      var g = {};
      La(e, function (u, t) {
        var v,
          x = -1,
          y = 0;
        La(t, function (w, B) {
          y += B;
          var A = (w.length + u.length + 2) * (B - 1);
          A > x && ((v = w), (x = A));
        });
        y == c.length && (g[u] = v);
      });
      bf(g, d);
      b && d.push("_s=" + b);
      for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = { wd: n.wd }, p++) {
        var q = [];
        n.wd = {};
        La(
          c[p].Qb,
          (function (u) {
            return function (t, v) {
              g[t] != "" + v && (u.wd[t] = v);
            };
          })(n),
        );
        c[p].o && q.push(c[p].o);
        bf(n.wd, q);
        k.push(q.join("&"));
      }
      var r = k.join("\r\n");
      return { Hf: h, body: r };
    };
  var of = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    sf = { Fn: "function", DustMap: "Object", List: "Array" },
    M = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = of.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          k = c[d];
        if (null == k) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== h) {
          var n = typeof k;
          k instanceof db
            ? (n = "Fn")
            : k instanceof ta
            ? (n = "List")
            : k instanceof hb
            ? (n = "DustMap")
            : k instanceof hc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (sf[n] || n) +
                ", which does not match required type " +
                (sf[h] || h) +
                ".",
            );
        }
      }
    };
  function tf(a) {
    return "" + a;
  }
  function uf(a, b) {
    var c = [];
    return c;
  }
  var vf = function (a, b) {
      var c = new db(a, function () {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
          d[e] = G(this, d[e]);
        return b.apply(this, d);
      });
      c.Hb();
      return c;
    },
    wf = function (a, b) {
      var c = new hb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ca(e)
            ? c.set(d, vf(a + "_" + d, e))
            : (Da(e) || m(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Hb();
      return c;
    };
  var xf = function (a, b) {
    M(H(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new hb();
    return (d = wf("AssertApiSubject", c));
  };
  var yf = function (a, b) {
    M(H(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof jc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.",
      );
    var c = {},
      d = new hb();
    return (d = wf("AssertThatSubject", c));
  };
  function zf(a) {
    return function () {
      for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(qc(arguments[d], c));
      return pc(a.apply(null, b));
    };
  }
  var Bf = function () {
    for (var a = Math, b = Af, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = zf(a[e].bind(a)));
    }
    return c;
  };
  var Cf = function (a) {
    var b;
    return b;
  };
  var Df = function (a) {
    var b;
    return b;
  };
  var Ef = function (a) {
    return encodeURI(a);
  };
  var Ff = function (a) {
    return encodeURIComponent(a);
  };
  var Gf = function (a) {
    M(H(this), ["message:?string"], arguments);
  };
  var Hf = function (a, b) {
    M(H(this), ["min:!number", "max:!number"], arguments);
    return Ia(a, b);
  };
  var N = function (a, b, c) {
    var d = a.g.g;
    if (!d) throw Error("Missing program state.");
    d.Xi.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var If = function () {
    N(this, "read_container_data");
    var a = new hb();
    a.set("containerId", "G-SQJCGKCC2K");
    a.set("version", "1");
    a.set("environmentName", "");
    a.set("debugMode", Qe);
    a.set("previewMode", Se);
    a.set("environmentMode", Re);
    a.Hb();
    return a;
  };
  var Jf = {};
  Jf.sstECEnableData = !0;
  Jf.enableAdsEc = !0;
  Jf.sstFFConversionEnabled = !0;
  Jf.sstEnableAuid = !0;
  Jf.enableGbraidUpdate = !0;
  Jf.enable1pScripts = !0;
  Jf.enableGlobalEventDeveloperIds = !1;
  Jf.enableGa4OnoRemarketing = !1;
  Jf.omitAuidIfWbraidPresent = !1;
  Jf.sstEnableDclid = !0;
  Jf.reconcileCampaignFields = !1;
  Jf.enableEmFormCcd = !1;
  Jf.enableEmFormCcdPart2 = !1;
  Jf.enableUrlPassthrough = !0;
  Jf.enableLandingPageDeduplication = !0;
  Jf.enableGtagDestinationFps = !0;
  Jf.enableFloodlightPrerenderingBypass = !1;
  Jf.requireGtagUserDataTos = !0;
  function Kf() {
    return pc(Jf);
  }
  var Lf = function () {
    return new Date().getTime();
  };
  var Mf = function (a) {
    if (null === a) return "null";
    if (a instanceof ta) return "array";
    if (a instanceof db) return "function";
    if (a instanceof hc) {
      a = a.hb;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Nf = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Qe || Se) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return pc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(qc(c));
      }),
    };
  };
  var Of = function (a) {
    return Na(qc(a, this.g));
  };
  var Pf = function (a) {
    return Number(qc(a, this.g));
  };
  var Qf = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Rf = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Af = "floor ceil round max min abs pow sqrt".split(" ");
  var Sf = function () {
      var a = {};
      return {
        rj: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        nk: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Tf = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return db.prototype.g.apply(a, c);
      };
    },
    Uf = function (a, b) {
      M(H(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Vf = {};
  Vf.keys = function (a) {
    return new ta();
  };
  Vf.values = function (a) {
    return new ta();
  };
  Vf.entries = function (a) {
    return new ta();
  };
  Vf.freeze = function (a) {
    return a;
  };
  Vf.delete = function (a, b) {
    return !1;
  };
  var Xf = function () {
    this.g = {};
    this.o = {};
  };
  Xf.prototype.get = function (a, b) {
    var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
    return c;
  };
  Xf.prototype.add = function (a, b, c) {
    if (this.g.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.o.hasOwnProperty(a))
      throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.g[a] = c ? void 0 : Ca(b) ? vf(a, b) : wf(a, b);
  };
  var Zf = function (a, b, c) {
    if (a.o.hasOwnProperty(b))
      throw "Attempting to add a private function which already exists: " + b + ".";
    if (a.g.hasOwnProperty(b))
      throw "Attempting to add a private function with an existing API name: " + b + ".";
    a.o[b] = Ca(c) ? vf(b, c) : wf(b, c);
  };
  function Yf(a, b) {
    var c = void 0;
    return c;
  }
  function $f() {
    var a = {};
    return a;
  }
  var R = {
    Eb: "_ee",
    kc: "_syn_or_mod",
    Gk: "_uei",
    Uc: "_eu",
    Dk: "_pci",
    zg: "_is_passthrough_cid",
    $b: "event_callback",
    Dd: "event_timeout",
    Ha: "gtag.config",
    Pa: "gtag.get",
    xa: "purchase",
    Xb: "refund",
    zb: "begin_checkout",
    Ub: "add_to_cart",
    Vb: "remove_from_cart",
    $h: "view_cart",
    $f: "add_to_wishlist",
    ya: "view_item",
    Wb: "view_promotion",
    we: "select_promotion",
    ve: "select_item",
    Ab: "view_item_list",
    Zf: "add_payment_info",
    Zh: "add_shipping_info",
    eb: "value_key",
    pb: "value_callback",
    aa: "allow_ad_personalization_signals",
    Qc: "restricted_data_processing",
    Cc: "allow_google_signals",
    Ba: "cookie_expires",
    Zb: "cookie_update",
    Rc: "session_duration",
    Hd: "session_engaged_time",
    Bd: "engagement_time_msec",
    Ka: "user_properties",
    Da: "transport_url",
    fa: "ads_data_redaction",
    Ea: "user_data",
    Lc: "first_party_collection",
    F: "ad_storage",
    P: "analytics_storage",
    se: "region",
    Tf: "wait_for_update",
    Aa: "conversion_linker",
    Qa: "conversion_cookie_prefix",
    la: "value",
    ja: "currency",
    ug: "trip_type",
    ba: "items",
    kg: "passengers",
    ze: "allow_custom_scripts",
    Db: "session_id",
    pg: "quantity",
    sb: "transaction_id",
    rb: "language",
    Ad: "country",
    zd: "allow_enhanced_conversions",
    Ee: "aw_merchant_id",
    Ce: "aw_feed_country",
    De: "aw_feed_language",
    Be: "discount",
    X: "developer_id",
    hg: "global_developer_id_string",
    fg: "event_developer_id_string",
    Id: "delivery_postal_code",
    Ke: "estimated_delivery_date",
    Ie: "shipping",
    Pe: "new_customer",
    Fe: "customer_lifetime_value",
    Je: "enhanced_conversions",
    Bc: "page_view",
    qa: "linker",
    R: "domains",
    bc: "decorate_forms",
    eg: "enhanced_conversions_automatic_settings",
    gi: "auto_detection_enabled",
    Me: "ga_temp_client_id",
    xe: "user_engagement",
    Uh: "app_remove",
    Vh: "app_store_refund",
    Wh: "app_store_subscription_cancel",
    Xh: "app_store_subscription_convert",
    Yh: "app_store_subscription_renew",
    ai: "first_open",
    bi: "first_visit",
    ci: "in_app_purchase",
    di: "session_start",
    ei: "allow_display_features",
    cb: "campaign",
    Dc: "campaign_content",
    Ec: "campaign_id",
    Fc: "campaign_medium",
    Gc: "campaign_name",
    Hc: "campaign_source",
    Ic: "campaign_term",
    na: "client_id",
    oa: "cookie_domain",
    Yb: "cookie_name",
    nb: "cookie_path",
    Ra: "cookie_flags",
    Jc: "custom_map",
    Ne: "groups",
    jg: "non_interaction",
    fb: "page_location",
    Qe: "page_path",
    Sa: "page_referrer",
    Pc: "page_title",
    Ca: "send_page_view",
    cc: "send_to",
    Sc: "session_engaged",
    Kc: "euid_logged_in_state",
    Tc: "session_number",
    zi: "tracking_id",
    tb: "url_passthrough",
    ac: "accept_incoming",
    Oc: "url_position",
    ng: "phone_conversion_number",
    lg: "phone_conversion_callback",
    mg: "phone_conversion_css_class",
    og: "phone_conversion_options",
    ui: "phone_conversion_ids",
    si: "phone_conversion_country_code",
    Bb: "aw_remarketing",
    Ae: "aw_remarketing_only",
    ye: "gclid",
    fi: "auid",
    li: "affiliation",
    dg: "tax",
    He: "list_name",
    cg: "checkout_step",
    bg: "checkout_option",
    mi: "coupon",
    ni: "promotions",
    Ja: "user_id",
    xi: "retoken",
    Ia: "cookie_prefix",
    ag: "disable_merchant_reported_purchases",
    ki: "dc_natural_search",
    ji: "dc_custom_params",
    ig: "method",
    yi: "search_term",
    ii: "content_type",
    ri: "optimize_id",
    oi: "experiments",
    qb: "google_signals",
  };
  R.Fd = "google_tld";
  R.Kd = "update";
  R.Le = "firebase_id";
  R.Mc = "ga_restrict_domain";
  R.Cd = "event_settings";
  R.Ge = "dynamic_event_settings";
  R.fc = "user_data_settings";
  R.rg = "screen_name";
  R.Se = "screen_resolution";
  R.Cb = "_x_19";
  R.ob = "enhanced_client_id";
  R.Ed = "_x_20";
  R.Oe = "internal_traffic_results";
  R.Jd = "traffic_type";
  R.Gd = "referral_exclusion_definition";
  R.Nc = "ignore_referrer";
  R.hi = "content_group";
  R.za = "allow_interest_groups";
  var ag = {};
  R.wg = Object.freeze(
    ((ag[R.aa] = 1),
    (ag[R.zd] = 1),
    (ag[R.Cc] = 1),
    (ag[R.ba] = 1),
    (ag[R.oa] = 1),
    (ag[R.Ba] = 1),
    (ag[R.Ra] = 1),
    (ag[R.Yb] = 1),
    (ag[R.nb] = 1),
    (ag[R.Ia] = 1),
    (ag[R.Zb] = 1),
    (ag[R.Jc] = 1),
    (ag[R.X] = 1),
    (ag[R.Ge] = 1),
    (ag[R.$b] = 1),
    (ag[R.Cd] = 1),
    (ag[R.Dd] = 1),
    (ag[R.Lc] = 1),
    (ag[R.Mc] = 1),
    (ag[R.qb] = 1),
    (ag[R.Fd] = 1),
    (ag[R.Ne] = 1),
    (ag[R.Oe] = 1),
    (ag[R.qa] = 1),
    (ag[R.Gd] = 1),
    (ag[R.Qc] = 1),
    (ag[R.Ca] = 1),
    (ag[R.cc] = 1),
    (ag[R.Rc] = 1),
    (ag[R.Hd] = 1),
    (ag[R.Id] = 1),
    (ag[R.Da] = 1),
    (ag[R.Kd] = 1),
    (ag[R.fc] = 1),
    (ag[R.Ka] = 1),
    (ag[R.Uc] = 1),
    ag),
  );
  R.vg = Object.freeze([R.fb, R.Sa, R.Pc, R.rb, R.rg, R.Ja, R.Le, R.hi]);
  var bg = {};
  R.Bi = Object.freeze(
    ((bg[R.Uh] = 1),
    (bg[R.Vh] = 1),
    (bg[R.Wh] = 1),
    (bg[R.Xh] = 1),
    (bg[R.Yh] = 1),
    (bg[R.ai] = 1),
    (bg[R.bi] = 1),
    (bg[R.ci] = 1),
    (bg[R.di] = 1),
    (bg[R.xe] = 1),
    bg),
  );
  var cg = {};
  R.xg = Object.freeze(
    ((cg[R.Zf] = 1),
    (cg[R.Zh] = 1),
    (cg[R.Ub] = 1),
    (cg[R.Vb] = 1),
    (cg[R.$h] = 1),
    (cg[R.zb] = 1),
    (cg[R.ve] = 1),
    (cg[R.Ab] = 1),
    (cg[R.we] = 1),
    (cg[R.Wb] = 1),
    (cg[R.xa] = 1),
    (cg[R.Xb] = 1),
    (cg[R.ya] = 1),
    (cg[R.$f] = 1),
    cg),
  );
  R.Ue = Object.freeze([R.aa, R.Cc, R.Zb]);
  R.Ki = Object.freeze([].concat(R.Ue));
  R.Ve = Object.freeze([R.Ba, R.Dd, R.Rc, R.Hd, R.Bd]);
  R.Li = Object.freeze([].concat(R.Ve));
  var dg = {};
  R.te = ((dg[R.F] = "1"), (dg[R.P] = "2"), dg);
  var fg = { Zg: "DE", yh: "DE-BY" };
  var gg = {},
    hg = function (a, b) {
      gg[a] = gg[a] || [];
      gg[a][b] = !0;
    },
    ig = function (a) {
      for (var b = [], c = gg[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          b[e] || 0,
        );
      return b.join("");
    },
    jg = function () {
      for (var a = [], b = gg.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var kg = function (a) {
    hg("GTM", a);
  };
  var lg = new (function (a, b) {
    this.g = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var ng = function () {
    var a = mg,
      b = "wf";
    if (a.wf && a.hasOwnProperty(b)) return a.wf;
    var c = new a();
    a.wf = c;
    a.hasOwnProperty(b);
    return c;
  };
  var mg = function () {
    var a = {};
    this.g = function () {
      var b = lg.g,
        c = lg.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.o = function () {
      a[lg.g] = !0;
    };
  };
  var og = [];
  function pg() {
    var a = Hb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: qg,
        update: rg,
        addListener: sg,
        notifyListeners: tg,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function qg(a, b, c, d, e, f) {
    var g = pg();
    g.usedDefault || (!g.accessedDefault && !g.accessedAny) || (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        k = h[a] || {},
        n = k.region,
        p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === k.update),
          r = { region: p, initial: "granted" === b, update: k.update, quiet: q };
        if ("" !== d || !1 !== k.initial) h[a] = r;
        q &&
          z.setTimeout(function () {
            h[a] === r && r.quiet && ((r.quiet = !1), ug(a), tg(), hg("TAGGING", 2));
          }, f);
      }
    }
  }
  function rg(a, b) {
    var c = pg();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = vg(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = vg(c, a);
      f.quiet ? ((f.quiet = !1), ug(a)) : g !== d && ug(a);
    }
  }
  function sg(a, b) {
    og.push({ lf: a, mj: b });
  }
  function ug(a) {
    for (var b = 0; b < og.length; ++b) {
      var c = og[b];
      Ea(c.lf) && -1 !== c.lf.indexOf(a) && (c.uh = !0);
    }
  }
  function tg(a, b) {
    for (var c = 0; c < og.length; ++c) {
      var d = og[c];
      if (d.uh) {
        d.uh = !1;
        try {
          d.mj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function vg(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var wg = function (a) {
      var b = pg();
      b.accessedAny = !0;
      return vg(b, a);
    },
    xg = function (a) {
      var b = pg();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    yg = function (a) {
      var b = pg();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    zg = function () {
      if (!ng().g()) return !1;
      var a = pg();
      a.accessedAny = !0;
      return a.active;
    },
    Ag = function () {
      var a = pg();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Bg = function (a, b) {
      pg().addListener(a, b);
    },
    Cg = function (a, b) {
      pg().notifyListeners(a, b);
    },
    Dg = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!yg(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Bg(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Eg = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === wg(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = m(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Bg(d, function (f) {
          var g = c();
          0 < g.length && ((f.lf = g), a(f));
        });
    };
  function Fg() {}
  function Gg() {}
  function Hg(a) {
    for (var b = [], c = 0; c < Ig.length; c++) {
      var d = a(Ig[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Ig = [R.F, R.P],
    Jg = function (a) {
      var b = a[R.se];
      b && kg(40);
      var c = a[R.Tf];
      c && kg(41);
      for (var d = Ea(b) ? b : [b], e = { xc: 0 }; e.xc < d.length; e = { xc: e.xc }, ++e.xc)
        La(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== R.se && g !== R.Tf) {
                var k = d[f.xc],
                  n = fg.Zg,
                  p = fg.yh;
                pg().set(g, h, k, n, p, c);
              }
            };
          })(e),
        );
    },
    Kg = 0,
    Lg = function (a, b) {
      La(a, function (e, f) {
        pg().update(e, f);
      });
      Cg(b.eventId, b.priorityId);
      var c = Sa(),
        d = c - Kg;
      Kg && 0 <= d && 1e3 > d && kg(66);
      Kg = c;
    },
    Mg = function (a) {
      var b = wg(a);
      return void 0 != b ? b : !0;
    },
    Ng = function () {
      return "G1" + Hg(wg);
    },
    Og = function (a, b) {
      Bg(a, b);
    },
    Pg = function (a, b) {
      Eg(a, b);
    },
    Qg = function (a, b) {
      Dg(a, b);
    };
  var Sg = function (a) {
      return Rg ? I.querySelectorAll(a) : null;
    },
    Tg = function (a, b) {
      if (!Rg) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!I.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Ug = !1;
  if (I.querySelectorAll)
    try {
      var Vg = I.querySelectorAll(":root");
      Vg && 1 == Vg.length && Vg[0] == I.documentElement && (Ug = !0);
    } catch (a) {}
  var Rg = Ug;
  var Wg = function (a) {
      return null == a ? "" : m(a) ? Qa(String(a)) : "e0";
    },
    Yg = function (a) {
      return a.replace(Xg, "");
    },
    $g = function (a) {
      return Zg(a.replace(/\s/g, ""));
    },
    Zg = function (a) {
      return Qa(a.replace(ah, "").toLowerCase());
    },
    ch = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return bh.test(a) ? a : "e0";
    },
    eh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (dh.test(c)) return c;
      }
      return "e0";
    },
    hh = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== fh.indexOf(c.name)
            ? gh(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        }),
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    gh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle)
        try {
          var b = ih(a);
          return z.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    ih = function (a) {
      var b;
      if (z.TextEncoder) b = new z.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63),
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    ah = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    dh = /^\S+@\S+\.\S+$/,
    bh = /^\+\d{11,15}$/,
    Xg = /[.~]/g,
    jh = {},
    kh =
      ((jh.email = "em"),
      (jh.phone_number = "pn"),
      (jh.first_name = "fn"),
      (jh.last_name = "ln"),
      (jh.street = "sa"),
      (jh.city = "ct"),
      (jh.region = "rg"),
      (jh.country = "co"),
      (jh.postal_code = "pc"),
      (jh.error_code = "ec"),
      jh),
    lh = function (a, b) {
      function c(n, p, q) {
        var r = n[p];
        Ea(r) || (r = [r]);
        for (var u = 0; u < r.length; ++u) {
          var t = Wg(r[u]);
          "" !== t && f.push({ name: p, value: q(t), index: void 0 });
        }
      }
      function d(n, p, q, r) {
        var u = Wg(n[p]);
        "" !== u && f.push({ name: p, value: q(u), index: r });
      }
      function e(n) {
        return function (p) {
          kg(64);
          return n(p);
        };
      }
      var f = [];
      if ("https:" === z.location.protocol) {
        c(a, "email", eh);
        c(a, "phone_number", ch);
        c(a, "first_name", e($g));
        c(a, "last_name", e($g));
        var g = a.home_address || {};
        c(g, "street", e(Zg));
        c(g, "city", e(Zg));
        c(g, "postal_code", e(Yg));
        c(g, "region", e(Zg));
        c(g, "country", e(Yg));
        var h = a.address || {};
        Ea(h) || (h = [h]);
        for (var k = 0; k < h.length; k++)
          d(h[k], "first_name", $g, k),
            d(h[k], "last_name", $g, k),
            d(h[k], "street", Zg, k),
            d(h[k], "city", Zg, k),
            d(h[k], "postal_code", Yg, k),
            d(h[k], "region", Zg, k),
            d(h[k], "country", Yg, k);
        hh(f, b);
      } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
    },
    mh = function (a, b) {
      lh(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            k = c[f].index,
            n = kh[g];
          n &&
            h &&
            (-1 === fh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) &&
            (void 0 !== k && (n += k), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    nh = function (a) {
      if (z.Promise)
        try {
          return new Promise(function (b) {
            mh(a, function (c, d) {
              b({ ie: c, Jk: d });
            });
          });
        } catch (b) {}
    },
    fh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var oh = {},
    T = (z.google_tag_manager = z.google_tag_manager || {}),
    wh = Math.random();
  oh.Pd = "3n1";
  oh.Z = "dataLayer";
  oh.Th =
    "ChEI8P+PkgYQxcjenqSxtovfARIlAL8b/fVb9MU5H0OXtMZ0/xmkm/lrL/9ipwkAuzgcxIF/LYwGlBoCfEs\x3d";
  var xh = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    yh = { __paused: !0, __tg: !0 },
    zh;
  for (zh in xh) xh.hasOwnProperty(zh) && (yh[zh] = !0);
  oh.Ac = "www.googletagmanager.com";
  var Ah,
    Bh = oh.Ac + "/gtm.js";
  Bh = oh.Ac + "/gtag/js";
  Ah = Bh;
  var Ch = Oa(""),
    Dh = null,
    Eh = null,
    Fh = {},
    Gh = {},
    Hh = function () {
      var a = T.sequence || 1;
      T.sequence = a + 1;
      return a;
    };
  oh.Sh = "";
  var Ih = "";
  oh.jc = Ih;
  var Jh = new Ja(),
    Kh = {},
    Lh = {},
    Oh = {
      name: oh.Z,
      set: function (a, b) {
        oc($a(a, b), Kh);
        Mh();
      },
      get: function (a) {
        return Nh(a, 2);
      },
      reset: function () {
        Jh = new Ja();
        Kh = {};
        Mh();
      },
    },
    Nh = function (a, b) {
      return 2 != b ? Jh.get(a) : Ph(a);
    },
    Ph = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Kh, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Qh = function (a, b) {
      Lh.hasOwnProperty(a) || (Jh.set(a, b), oc($a(a, b), Kh), Mh());
    },
    Rh = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Nh(c, 1);
        if (Ea(d) || nc(d)) d = oc(d);
        Lh[c] = d;
      }
    },
    Mh = function (a) {
      La(Lh, function (b, c) {
        Jh.set(b, c);
        oc($a(b, void 0), Kh);
        oc($a(b, c), Kh);
        a && delete Lh[b];
      });
    },
    Sh = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Ph(a) : Jh.get(a);
      "array" === lc(d) || "object" === lc(d) ? (c = oc(d)) : (c = d);
      return c;
    };
  var Th,
    Uh = !1;
  function Vh() {
    Uh = !0;
    Th = Th || {};
  }
  var Wh = function (a) {
    Uh || Vh();
    return Th[a];
  };
  var Xh = function (a) {
    if (I.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
    var c = z.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        0 <= h &&
          ((g = g.substring(h + 8, g.indexOf(")", h))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d, null));
    }
    return !1;
  };
  var fi = /:[0-9]+$/,
    gi = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var k = h.slice(1).join("=");
          if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
          e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    ji = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = hi(a.protocol) || hi(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : ""),
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname).replace(fi, "").toLowerCase());
      return ii(a, b, c, d, e);
    },
    ii = function (a, b, c, d, e) {
      var f,
        g = hi(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = ki(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(fi, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || hg("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var k = f.split("/");
          0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
          f = k.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = gi(f, e, !1, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    hi = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    ki = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    li = function (a) {
      var b = I.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || hg("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(fi, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    mi = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = li(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var k = "" + f + g + h;
      "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
      return k;
    };
  var ni = {};
  var qi = function (a) {
      if (0 == a.length) return null;
      var b;
      b = oi(a, function (c) {
        return !pi.test(c.Za);
      });
      b = oi(b, function (c) {
        return "INPUT" === c.element.tagName.toUpperCase();
      });
      b = oi(b, function (c) {
        return !Xh(c.element);
      });
      return b[0];
    },
    oi = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    ri = function (a) {
      var b;
      if (a === I.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = ri(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    si = !0,
    ti = !1;
  ni.Ph = "false";
  var ui = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    vi = new RegExp(/@(gmail|googlemail)\./i),
    pi = new RegExp(/support|noreply/i),
    wi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
    xi = ["BR"],
    yi = {},
    zi = function (a) {
      a = a || { fe: !0, he: !0 };
      a.wb = a.wb || { email: !0, phone: !0, Sg: !0 };
      var b,
        c = a,
        d = !!c.fe + "." + !!c.he;
      c && c.$c && c.$c.length && (d += "." + c.$c.join("."));
      c && c.wb && (d += "." + c.wb.email + "." + c.wb.phone + "." + c.wb.Sg);
      b = d;
      var e = yi[b];
      if (e && 200 > Sa() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = I.body;
      if (h) {
        for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1e4 > n; n++) {
          var p = k[n];
          if (
            !(0 <= wi.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= xi.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < k.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var u = f,
        t = u.status,
        v = [],
        x;
      if (a.wb && a.wb.email) {
        for (var y = u.elements, w = [], B = 0; B < y.length; B++) {
          var A = y[B],
            C = A.textContent;
          "INPUT" === A.tagName.toUpperCase() && A.value && (C = A.value);
          if (C) {
            var D = C.match(ui);
            if (D) {
              var E = D[0],
                F;
              if (z.location) {
                var S = ii(z.location, "host", !0);
                F = 0 <= E.toLowerCase().indexOf(S);
              } else F = !1;
              F || w.push({ element: A, Za: E });
            }
          }
        }
        var K = a && a.$c;
        if (K && 0 !== K.length) {
          for (var Q = [], P = 0; P < w.length; P++) {
            for (var O = !0, L = 0; L < K.length; L++) {
              var aa = K[L];
              if (aa && Tg(w[P].element, aa)) {
                O = !1;
                break;
              }
            }
            O && Q.push(w[P]);
          }
          v = Q;
        } else v = w;
        x = qi(v);
        10 < w.length && (t = "3");
      }
      var W = [];
      !a.Lk && x && (v = [x]);
      for (var V = 0; V < v.length; V++) {
        var za = v[V].element,
          Fa = { Za: v[V].Za, tagName: za.tagName, type: 1 };
        a.fe && (Fa.querySelector = ri(za));
        a.he && (Fa.isVisible = !Xh(za));
        W.push(Fa);
      }
      var Aa = { elements: W.slice(0, 10), status: t };
      yi[b] = { timestamp: Sa(), result: Aa };
      return Aa;
    };
  var Ai = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), h = 0; h < g.length; h++) {
            var k = g[h].trim();
            if (k) {
              if (0 === k.indexOf("dataLayer.")) f = Nh(k.substring(10));
              else {
                var n = k.split(".");
                f = z[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && Rg) {
          var q = Sg(e);
          if (q && 0 < q.length) {
            f = [];
            for (
              var r = 0;
              r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
              r++
            )
              f.push(Tb(q[r]) || Qa(q[r].value));
            f = 1 === f.length ? f[0] : f;
          }
        }
        f && (a[b] = f);
      }
    },
    Bi = function (a) {
      if (a) {
        var b = {};
        Ai(b, "email", a.email);
        Ai(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          Ai(e, "first_name", c[d].first_name);
          Ai(e, "last_name", c[d].last_name);
          Ai(e, "street", c[d].street);
          Ai(e, "city", c[d].city);
          Ai(e, "region", c[d].region);
          Ai(e, "country", c[d].country);
          Ai(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    Ci = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return Bi(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = zi({
                  fe: !1,
                  he: !1,
                  $c: c.exclude_element_selectors,
                  wb: { email: !!c.email, phone: !!c.phone, Sg: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var g = d[f];
                  if (1 === g.type) {
                    e.email = g.Za;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    Di = function (a) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : z.enhanced_conversion_data;
        case "automatic":
          return Bi(a[R.eg]);
      }
    };
  var Ei = {},
    Fi = function (a, b) {
      if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a)) return z._gtmexpgrp[a];
      void 0 === Ei[a] && (Ei[a] = Math.floor(Math.random() * b));
      return Ei[a];
    };
  var Gi = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Hi = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var k = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        k && c && (k = decodeURIComponent(k));
        d.push(k);
      }
    }
    return d;
  };
  var Ii = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Ji = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Ki(a) {
    return "null" !== a.origin;
  }
  var Ni = function (a, b, c, d) {
      return Li(d) ? Hi(a, String(b || Mi()), c) : [];
    },
    Qi = function (a, b, c, d, e) {
      if (Li(e)) {
        var f = Oi(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Pi(
            f,
            function (g) {
              return g.Yd;
            },
            b,
          );
          if (1 === f.length) return f[0].id;
          f = Pi(
            f,
            function (g) {
              return g.jd;
            },
            c,
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Ri(a, b, c, d) {
    var e = Mi(),
      f = window;
    Ki(f) && (f.document.cookie = a);
    var g = Mi();
    return e != g || (void 0 != c && 0 <= Ni(b, g, !1, d).indexOf(c));
  }
  var Vi = function (a, b, c, d) {
      function e(x, y, w) {
        if (null == w) return delete h[y], x;
        h[y] = w;
        return x + "; " + y + "=" + w;
      }
      function f(x, y) {
        if (null == y) return delete h[y], x;
        h[y] = !0;
        return x + "; " + y;
      }
      if (!Li(c.jb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)), (b = Si(b)), (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      g = e(g, "expires", k);
      g = e(g, "max-age", c.Lj);
      g = e(g, "samesite", c.ek);
      c.gk && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Ti(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
          var t = "none" !== p[u] ? p[u] : void 0,
            v = e(g, "domain", t);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (x) {
            q = x;
            continue;
          }
          r = !0;
          if (!Ui(t, c.path) && Ri(v, a, b, c.jb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Ui(n, c.path) ? 1 : Ri(g, a, b, c.jb) ? 0 : 1;
    },
    Wi = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Vi(a, b, c);
    };
  function Pi(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        k = b(h);
      k === c ? d.push(h) : void 0 === f || k < f ? ((e = [h]), (f = k)) : k === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Oi(a, b, c) {
    for (var d = [], e = Ni(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k &&
          ((k = k.split("-")), d.push({ id: g.join("."), Yd: 1 * k[0] || 1, jd: 1 * k[1] || 1 }));
      }
    }
    return d;
  }
  var Si = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Xi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Yi = /(^|\.)doubleclick\.net$/i,
    Ui = function (a, b) {
      return Yi.test(window.document.location.hostname) || ("/" === b && Xi.test(a));
    },
    Mi = function () {
      return Ki(window) ? window.document.cookie : "";
    },
    Ti = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Yi.test(e) || Xi.test(e) || a.push("none");
      return a;
    },
    Li = function (a) {
      if (!ng().g() || !a || !zg()) return !0;
      if (!yg(a)) return !1;
      var b = wg(a);
      return null == b ? !0 : !!b;
    };
  var Zi = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Gi(a) & 2147483647)) : String(b);
    },
    $i = function (a) {
      return [Zi(a), Math.round(Sa() / 1e3)].join(".");
    },
    cj = function (a, b, c, d, e) {
      var f = aj(b);
      return Qi(a, f, bj(c), d, e);
    },
    dj = function (a, b, c, d) {
      var e = "" + aj(c),
        f = bj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    aj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    bj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  function ej(a, b, c) {
    var d,
      e = Number(null != a.Ob ? a.Ob : void 0);
    0 !== e && (d = new Date((b || Sa()) + 1e3 * (e || 7776e3)));
    return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d };
  }
  var fj = ["1"],
    gj = {},
    hj = {},
    lj = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = ij(a.prefix);
      if (!gj[c] && !jj(c, a.path, a.domain) && b) {
        var d = ij(a.prefix),
          e = $i();
        if (0 === kj(d, e, a)) {
          var f = Hb("google_tag_data", {});
          f._gcl_au ? hg("GTM", 57) : (f._gcl_au = e);
        }
        jj(c, a.path, a.domain);
      }
    };
  function kj(a, b, c, d) {
    var e = dj(b, "1", c.domain, c.path),
      f = ej(c, d);
    f.jb = "ad_storage";
    return Wi(a, e, f);
  }
  function jj(a, b, c) {
    var d = cj(a, b, c, fj, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((gj[a] = e.slice(0, 2).join(".")),
        (hj[a] = { id: e.slice(2, 4).join("."), oh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (hj[a] = { id: e.slice(0, 2).join("."), oh: Number(e[2]) || 0 })
      : (gj[a] = d);
    return !0;
  }
  function ij(a) {
    return (a || "_gcl") + "_au";
  }
  var mj = function (a) {
    for (
      var b = [],
        c = I.cookie.split(";"),
        d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f && b.push({ Qf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function nj(a, b) {
    var c = mj(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
        d[c[e].Qf] || (d[c[e].Qf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Fa: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Qf].push(g);
      }
    }
    return d;
  }
  function oj() {
    for (var a = pj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function qj() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var pj, rj;
  function sj(a) {
    function b(k) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = rj[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return k;
    }
    pj = pj || qj();
    rj = rj || oj();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var tj;
  var xj = function () {
      var a = uj,
        b = vj,
        c = wj(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Qb(I, "mousedown", d);
        Qb(I, "keyup", d);
        Qb(I, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    yj = function (a, b, c, d, e) {
      var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
      wj().decorators.push(f);
    },
    zj = function (a, b, c) {
      for (var d = wj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var k = g.domains,
              n = a,
              p = !!g.sameHost;
            if (k && (p || n !== I.location.hostname))
              for (var q = 0; q < k.length; q++)
                if (k[q] instanceof RegExp) {
                  if (k[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (0 <= n.indexOf(k[q]) || (p && 0 <= k[q].indexOf(n))) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Wa(e, g.callback());
        }
      }
      return e;
    };
  function wj() {
    var a = Hb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Aj = /(.*?)\*(.*?)\*(.*)/,
    Bj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Cj = /^(?:www\.|m\.|amp\.)+/,
    Dj = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Ej(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Gj = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            h = String(d);
          pj = pj || qj();
          rj = rj || oj();
          for (var k = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              r = h.charCodeAt(n),
              u = p ? h.charCodeAt(n + 1) : 0,
              t = q ? h.charCodeAt(n + 2) : 0,
              v = r >> 2,
              x = ((r & 3) << 4) | (u >> 4),
              y = ((u & 15) << 2) | (t >> 6),
              w = t & 63;
            q || ((w = 64), p || (y = 64));
            k.push(pj[v], pj[x], pj[y], pj[w]);
          }
          g = k.join("");
          f.call(e, g);
        }
      }
    var B = b.join("*");
    return ["1", Fj(B), B].join("*");
  };
  function Fj(a, b) {
    var c = [
        z.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Fb.userLanguage || Fb.language,
        Math.floor(Sa() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = tj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    tj = d;
    for (var k = 4294967295, n = 0; n < c.length; n++)
      k = (k >>> 8) ^ tj[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36);
  }
  function Hj() {
    return function (a) {
      var b = li(z.location.href),
        c = b.search.replace("?", ""),
        d = gi(c, "_gl", !1, !0) || "";
      a.query = Ij(d) || {};
      var e = ji(b, "fragment").match(Ej("_gl"));
      a.fragment = Ij((e && e[3]) || "") || {};
    };
  }
  function Jj(a, b) {
    var c = Ej(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Kj = function (a, b) {
      b || (b = "_gl");
      var c = Dj.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Jj(b, (c[2] || "").slice(1)),
        f = Jj(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Lj = function (a) {
      var b = Hj(),
        c = wj();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Wa(d, e.query), a && Wa(d, e.fragment));
      return d;
    },
    Ij = function (a) {
      try {
        var b = Mj(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              g = sj(d[e + 1]);
            c[f] = g;
          }
          hg("TAGGING", 6);
          return c;
        }
      } catch (h) {
        hg("TAGGING", 8);
      }
    };
  function Mj(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Aj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          k;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Fj(h, p)) {
              k = !0;
              break a;
            }
          k = !1;
        }
        if (k) return h;
        hg("TAGGING", 7);
      }
    }
  }
  function Nj(a, b, c, d) {
    function e(p) {
      p = Jj(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Dj.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      k = f[3] || "",
      n = a + "=" + b;
    d ? (k = "#" + e(k.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + k;
  }
  function Oj(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = zj(b, 1, c),
      e = zj(b, 2, c),
      f = zj(b, 3, c);
    if (Xa(d)) {
      var g = Gj(d);
      c ? Pj("_gl", g, a) : Qj("_gl", g, a, !1);
    }
    if (!c && Xa(e)) {
      var h = Gj(e);
      Qj("_gl", h, a, !0);
    }
    for (var k in f)
      if (f.hasOwnProperty(k))
        a: {
          var n = k,
            p = f[k],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Qj(n, p, q, void 0);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Pj(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Nj(n, p, q, void 0);
        }
  }
  function Qj(a, b, c, d) {
    if (c.href) {
      var e = Nj(a, b, c.href, void 0 === d ? !1 : d);
      sb.test(e) && (c.href = e);
    }
  }
  function Pj(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var k = I.createElement("input");
          k.setAttribute("type", "hidden");
          k.setAttribute("name", a);
          k.setAttribute("value", b);
          c.appendChild(k);
        }
      } else if ("post" === d) {
        var n = Nj(a, b, c.action);
        sb.test(n) && (c.action = n);
      }
    }
  }
  function uj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Oj(e, e.hostname);
      }
    } catch (g) {}
  }
  function vj(a) {
    try {
      if (a.action) {
        var b = ji(li(a.action), "host");
        Oj(a, b);
      }
    } catch (c) {}
  }
  var Rj = function (a, b, c, d) {
      xj();
      yj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Sj = function (a, b) {
      xj();
      yj(a, [ii(z.location, "host", !0)], b, !0, !0);
    },
    Tj = function () {
      var a = I.location.hostname,
        b = Bj.exec(I.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Cj, ""),
        k = e.replace(Cj, ""),
        n;
      if (!(n = h === k)) {
        var p = "." + k;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Uj = function (a, b) {
      return !1 === a ? !1 : a || b || Tj();
    };
  var Vj = {};
  var Wj = /^\w+$/,
    Xj = /^[\w-]+$/,
    Yj = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Zj = function () {
      if (!ng().g() || !zg()) return !0;
      var a = wg("ad_storage");
      return null == a ? !0 : !!a;
    },
    ak = function (a, b) {
      yg("ad_storage")
        ? Zj()
          ? a()
          : Eg(a, "ad_storage")
        : b
        ? hg("TAGGING", 3)
        : Dg(
            function () {
              ak(a, !0);
            },
            ["ad_storage"],
          );
    },
    ck = function (a) {
      return bk(a).map(function (b) {
        return b.Fa;
      });
    },
    bk = function (a) {
      var b = [];
      if (!Ki(z) || !I.cookie) return b;
      var c = Ni(a, I.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { vd: d.vd }, e++) {
        var f = dk(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.vd = g.Fa;
          var k = g.timestamp,
            n = g.labels,
            p = Ga(
              b,
              (function (q) {
                return function (r) {
                  return r.Fa === q.vd;
                };
              })(d),
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, k)), (p.labels = ek(p.labels, n || [])))
            : b.push({ version: h, Fa: d.vd, timestamp: k, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return fk(b);
    };
  function ek(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function gk(a) {
    return a && "string" == typeof a && a.match(Wj) ? a : "_gcl";
  }
  var ik = function () {
      var a = li(z.location.href),
        b = ji(a, "query", !1, void 0, "gclid"),
        c = ji(a, "query", !1, void 0, "gclsrc"),
        d = ji(a, "query", !1, void 0, "wbraid"),
        e = ji(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || gi(f, "gclid", !1, void 0);
        c = c || gi(f, "gclsrc", !1, void 0);
        d = d || gi(f, "wbraid", !1, void 0);
      }
      return hk(b, c, e, d);
    },
    hk = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Xj.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Xj))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    kk = function (a) {
      var b = ik();
      ak(function () {
        jk(b, !1, a);
      });
    };
  function jk(a, b, c, d, e) {
    function f(x, y) {
      var w = lk(x, g);
      w && (Wi(w, y, h), (k = !0));
    }
    c = c || {};
    e = e || [];
    var g = gk(c.prefix);
    d = d || Sa();
    var h = ej(c, d, !0);
    h.jb = "ad_storage";
    var k = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ["GCL", n, x];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Vj.enable_gbraid_cookie_write ? 0 : Vj.enable_gbraid_cookie_write) &&
      !k &&
      a.gb
    ) {
      var q = a.gb[0],
        r = lk("gb", g),
        u = !1;
      if (!b)
        for (var t = bk(r), v = 0; v < t.length; v++)
          t[v].Fa === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var nk = function (a, b) {
      var c = Lj(!0);
      ak(function () {
        for (var d = gk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Yj[f]) {
            var g = lk(f, d),
              h = c[g];
            if (h) {
              var k = Math.min(mk(h), Sa()),
                n;
              b: {
                var p = k;
                if (Ki(z))
                  for (var q = Ni(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                    if (mk(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = ej(b, k, !0);
                u.jb = "ad_storage";
                Wi(g, h, u);
              }
            }
          }
        }
        jk(hk(c.gclid, c.gclsrc), !1, b);
      });
    },
    lk = function (a, b) {
      var c = Yj[a];
      if (void 0 !== c) return b + c;
    },
    mk = function (a) {
      return 0 !== ok(a.split(".")).length ? 1e3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function dk(a) {
    var b = ok(a.split("."));
    return 0 === b.length
      ? null
      : { version: b[0], Fa: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) };
  }
  function ok(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Xj.test(a[2])
      ? []
      : a;
  }
  var pk = function (a, b, c, d, e) {
      if (Ea(b) && Ki(z)) {
        var f = gk(e),
          g = function () {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var n = lk(a[k], f);
              if (n) {
                var p = Ni(n, I.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        ak(function () {
          Rj(g, b, c, d);
        });
      }
    },
    fk = function (a) {
      return a.filter(function (b) {
        return Xj.test(b.Fa);
      });
    },
    qk = function (a, b) {
      if (Ki(z)) {
        for (var c = gk(b.prefix), d = {}, e = 0; e < a.length; e++)
          Yj[a[e]] && (d[a[e]] = Yj[a[e]]);
        ak(function () {
          La(d, function (f, g) {
            var h = Ni(c + g, I.cookie, void 0, "ad_storage");
            h.sort(function (u, t) {
              return mk(t) - mk(u);
            });
            if (h.length) {
              var k = h[0],
                n = mk(k),
                p = 0 !== ok(k.split(".")).length ? k.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== ok(k.split(".")).length ? k.split(".")[2] : void 0;
              q[f] = [r];
              jk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function rk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var sk = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (zg()) {
      var c = ik();
      if (rk(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Sj(function () {
          return d;
        }, 3);
        Sj(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function tk(a, b) {
    var c = gk(b),
      d = lk(a, c);
    if (!d) return 0;
    for (var e = bk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function uk(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Ok = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Pk = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Qk = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Rk =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " ",
      );
  var Sk = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Uk = function (a) {
      var b = Nh("gtm.allowlist") || Nh("gtm.whitelist");
      b && kg(9);
      Sk() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Ya(Pa(b), Pk),
        d = Nh("gtm.blocklist") || Nh("gtm.blacklist");
      d || ((d = Nh("tagTypeBlacklist")) && kg(3));
      d ? kg(8) : (d = []);
      Tk() && ((d = Pa(d)), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Pa(d).indexOf("google") && kg(2);
      var e = d && Ya(Pa(d), Qk),
        f = {};
      return function (g) {
        var h = g && g[Ld.Fb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var k = Gh[h] || [],
          n = a(h, k);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (k && 0 < k.length)
                  for (var q = 0; q < k.length; q++) {
                    if (0 > c.indexOf(k[q])) {
                      kg(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= e.indexOf(h);
          if (u) r = u;
          else {
            var t = Ka(e, k || []);
            t && kg(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= k.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Ka(e, Rk));
        return (f[h] = v);
      };
    },
    Tk = function () {
      return Ok.test(z.location && z.location.hostname);
    };
  var Ie = { J: "G-SQJCGKCC2K", yd: "" },
    Vk = { Kk: "G-SQJCGKCC2K", th: "G-SQJCGKCC2K" },
    Wk = function () {
      var a = [];
      Vk.th && (a = Vk.th.split("|"));
      return a;
    };
  var nl = function (a) {},
    rl = function (a) {},
    sl = function () {
      return (
        "&tc=" +
        le.filter(function (a) {
          return a;
        }).length
      );
    },
    vl = function () {
      2022 <= tl().length && ul();
    },
    wl = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    yl = function () {
      xl || (xl = z.setTimeout(ul, 500));
    },
    ul = function () {
      xl && (z.clearTimeout(xl), (xl = void 0));
      if (void 0 !== zl && (!Al[zl] || Bl || Cl))
        if (Dl[zl] || El.Dj() || 0 >= Fl--) kg(1), (Dl[zl] = !0);
        else {
          El.Zj();
          var a = tl(!0);
          Pb(a);
          Al[zl] = !0;
          Hl = Gl = Jl = Kl = Ll = Cl = Bl = "";
          Il = [];
        }
    },
    tl = function (a) {
      var b = zl;
      if (void 0 === b) return "";
      var c = ig("GTM"),
        d = ig("TAGGING");
      return [
        Ml,
        Al[b] ? "" : "&es=1",
        Nl[b],
        nl(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        sl(),
        Bl,
        Cl,
        Ll,
        Kl,
        rl(a),
        Jl,
        Gl,
        Hl ? "&dl=" + encodeURIComponent(Hl) : "",
        0 < Il.length ? "&tdp=" + Il.join(".") : "",
        "&z=0",
      ].join("");
    },
    Pl = function () {
      Ml = Ol();
    },
    Ol = function () {
      return [Ql, "&v=3&t=t", "&pid=" + Ia(), "&rv=" + oh.Pd].join("");
    },
    ql = ["L", "S", "Y"],
    ml = ["S", "E"],
    Rl = { sampleRate: "0.005000", Mh: "", Lh: Number("5") },
    Sl =
      0 <= I.location.search.indexOf("?gtm_latency=") ||
      0 <= I.location.search.indexOf("&gtm_latency="),
    Tl;
  if (!(Tl = Sl)) {
    var Ul = Math.random(),
      Vl = Rl.sampleRate;
    Tl = Ul < Vl;
  }
  var Wl = Tl,
    Ql = "https://www.googletagmanager.com/a?id=" + Ie.J + "&cv=1",
    Xl = { label: Ie.J + " Container", children: [{ label: "Initialization", children: [] }] },
    Ml = Ol(),
    Al = {},
    Bl = "",
    Cl = "",
    Jl = "",
    Kl = "",
    Gl = "",
    Il = [],
    Hl = "",
    pl = {},
    ol = !1,
    ll = {},
    Yl = {},
    Ll = "",
    zl = void 0,
    Nl = {},
    Dl = {},
    xl = void 0,
    Zl = 5;
  0 < Rl.Lh && (Zl = Rl.Lh);
  var El = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Dj: function () {
          return c < a ? !1 : Sa() - d[c % a] < b;
        },
        Zj: function () {
          var f = c++ % a;
          d[f] = Sa();
        },
      };
    })(Zl, 1e3),
    Fl = 1e3,
    am = function (a, b) {
      if (Wl && !Dl[a] && zl !== a) {
        ul();
        zl = a;
        Jl = Bl = "";
        Nl[a] = "&e=" + wl(b) + "&eid=" + a;
        yl();
      }
    },
    bm = function (a, b, c, d) {
      if (Wl && b) {
        var e,
          f = String(b[Ld.Fb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Dl[a]) {
          a !== zl && (ul(), (zl = a));
          Bl = Bl ? Bl + "." + g : "&tr=" + g;
          var h = b["function"];
          if (!h) throw Error("Error: No function name given for function call.");
          var k = (ne[h] ? "1" : "2") + e;
          Jl = Jl ? Jl + "." + k : "&ti=" + k;
          yl();
          vl();
        }
      }
    };
  var im = function (a, b, c) {
      if (Wl && !Dl[a]) {
        a !== zl && (ul(), (zl = a));
        var d = c + b;
        Cl = Cl ? Cl + "." + d : "&epr=" + d;
        yl();
        vl();
      }
    },
    jm = function (a, b, c) {};
  var km = { initialized: 11, complete: 12, interactive: 13 },
    lm = {},
    mm = Object.freeze(((lm[R.Eb] = !0), (lm[R.kc] = !0), lm)),
    nm = {},
    om = Object.freeze(((nm[R.Ca] = !0), nm)),
    pm = {},
    qm =
      0 <= I.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= I.location.search.indexOf("&gtm_diagnostics="),
    sm = function (a, b, c) {};
  function tm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function rm(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var u = r[q];
        return void 0 === u ? om[q] : u;
      },
      f;
    for (f in tm(a, b))
      if (!mm[f]) {
        var g = (d ? d + "." : "") + f,
          h = e(f, a),
          k = e(f, b),
          n = "object" === lc(h) || "array" === lc(h),
          p = "object" === lc(k) || "array" === lc(k);
        if (n && p) rm(h, k, c, g);
        else if (n || p || h !== k) c[g] = !0;
      }
    return Object.keys(c);
  }
  var um = !1,
    vm = 0,
    wm = [];
  function xm(a) {
    if (!um) {
      var b = I.createEventObject,
        c = "complete" == I.readyState,
        d = "interactive" == I.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        um = !0;
        for (var e = 0; e < wm.length; e++) J(wm[e]);
      }
      wm.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }
  function ym() {
    if (!um && 140 > vm) {
      vm++;
      try {
        I.documentElement.doScroll("left"), xm();
      } catch (a) {
        z.setTimeout(ym, 50);
      }
    }
  }
  var zm = function (a) {
    um ? a() : wm.push(a);
  };
  var Cm = function (a, b) {
      this.g = !1;
      this.C = [];
      this.I = { tags: [] };
      this.O = !1;
      this.o = this.s = 0;
      Bm(this, a, b);
    },
    Dm = function (a, b, c, d) {
      if (yh.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      nc(d) && (e = oc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    Em = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Fm = function (a) {
      if (!a.g) {
        for (var b = a.C, c = 0; c < b.length; c++) b[c]();
        a.g = !0;
        a.C.length = 0;
      }
    },
    Bm = function (a, b, c) {
      void 0 !== b && a.Sd(b);
      c &&
        z.setTimeout(function () {
          return Fm(a);
        }, Number(c));
    };
  Cm.prototype.Sd = function (a) {
    var b = this,
      c = Va(function () {
        return J(function () {
          a(Ie.J, b.I);
        });
      });
    this.g ? c() : this.C.push(c);
  };
  var Gm = function (a) {
      a.s++;
      return Va(function () {
        a.o++;
        a.O && a.o >= a.s && Fm(a);
      });
    },
    Hm = function (a) {
      a.O = !0;
      a.o >= a.s && Fm(a);
    };
  var Im = function () {
      function a(d) {
        return !Da(d) || 0 > d ? 0 : d;
      }
      if (!T._li && z.performance && z.performance.timing) {
        var b = z.performance.timing.navigationStart,
          c = Da(Oh.get("gtm.start")) ? Oh.get("gtm.start") : 0;
        T._li = { cst: a(c - b), cbt: a(Eh - b) };
      }
    },
    Jm = function (a) {
      z.performance && z.performance.mark(Ie.J + "_" + a + "_start");
    },
    Km = function (a) {
      if (z.performance) {
        var b = Ie.J + "_" + a + "_start",
          c = Ie.J + "_" + a + "_duration";
        z.performance.measure(c, b);
        var d = z.performance.getEntriesByName(c)[0];
        z.performance.clearMarks(b);
        z.performance.clearMeasures(c);
        var e = T._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (T._p = e));
        return d.duration;
      }
    },
    Lm = function () {
      if (z.performance && z.performance.now) {
        var a = T._p || {};
        a.PAGEVIEW = z.performance.now();
        T._p = a;
      }
    };
  var Mm = {},
    Nm = function () {
      return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
    },
    Om = !1;
  function Rm() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var Sm = function (a) {},
    Tm = function (a, b) {
      return function () {
        var c = Nm(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              k = 0 > g.indexOf("&tid=" + b);
            k &&
              (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
              f.set("hitCallback", void 0, !0));
            e(f);
            k &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Ym(a, b, c, d) {
    var e = le[a],
      f = Zm(a, b, c, d);
    if (!f) return null;
    var g = te(e[Ld.Ig], c, []);
    if (g && g.length) {
      var h = g[0];
      f = Ym(
        h.index,
        { onSuccess: f, onFailure: 1 === h.fh ? b.terminate : f, terminate: b.terminate },
        c,
        d,
      );
    }
    return f;
  }
  function Zm(a, b, c, d) {
    function e() {
      if (f[Ld.Hi]) h();
      else {
        var x = ue(f, c, []);
        var y = x[Ld.Rh];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!Mg(y[w])) {
              h();
              return;
            }
        var B = Dm(c.vb, String(f[Ld.Fb]), Number(f[Ld.Kg]), x[Ld.Ii]),
          A = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!A) {
            A = !0;
            var E = Sa() - D;
            bm(c.id, le[a], "5", E);
            Em(c.vb, B, "success", E);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!A) {
            A = !0;
            var E = Sa() - D;
            bm(c.id, le[a], "6", E);
            Em(c.vb, B, "failure", E);
            h();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        bm(c.id, f, "1");
        var C = function () {
          var E = Sa() - D;
          bm(c.id, f, "7", E);
          Em(c.vb, B, "exception", E);
          A || ((A = !0), h());
        };
        var D = Sa();
        try {
          se(x, { event: c, index: a, type: 1 });
        } catch (E) {
          C(E);
        }
      }
    }
    var f = le[a],
      g = b.onSuccess,
      h = b.onFailure,
      k = b.terminate;
    if (c.yf(f)) return null;
    var n = te(f[Ld.Lg], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Ym(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.fh ? k : q;
    }
    if (f[Ld.Cg] || f[Ld.Mi]) {
      var r = f[Ld.Cg] ? me : c.pk,
        u = g,
        t = h;
      if (!r[a]) {
        e = Va(e);
        var v = $m(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function $m(a, b, c) {
    var d = [],
      e = [];
    b[a] = an(d, e, c);
    return {
      onSuccess: function () {
        b[a] = bn;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = cn;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function an(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function bn(a) {
    a();
  }
  function cn(a, b) {
    b();
  }
  function dn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return li("" + c + b).href;
    }
  }
  function en(a, b) {
    return fn() ? dn(a, b) : void 0;
  }
  function fn() {
    var a = !1;
    return a;
  }
  function gn() {
    return !!oh.jc && "SGTM_TOKEN" !== oh.jc.replaceAll("@@", "");
  }
  var hn = function () {
    var a = !1;
    return a;
  };
  var kn = function (a, b, c, d) {
      return (2 === jn() || d || "http:" != z.location.protocol ? a : b) + c;
    },
    jn = function () {
      var a = Nb(),
        b;
      if (1 === a)
        a: {
          var c = Ah;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = I.getElementsByTagName("script"),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var k = g[h].src;
            if (k) {
              k = k.toLowerCase();
              if (0 === k.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === k.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var ln = !1;
  ln = !0;
  var mn = function () {
      if (hn()) {
        return !0;
      }
      return !1;
    },
    nn = function (a, b, c) {
      if (!mn()) {
        var d = "/gtm.js";
        d = "/gtag/js";
        c && (d = "/gtag/js");
        var e = "?id=" + encodeURIComponent(a) + "&l=" + oh.Z,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = gn();
        g && (e += "&sign=" + oh.jc);
        var h = en(b, d + e);
        if (!h) {
          var k = oh.Ac + d;
          g && Gb && f && (k = Gb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          h = kn("https://", "http://", k + e);
        }
        Mb(h);
      }
    },
    on = function (a, b) {
      if (!mn()) {
        var c = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + oh.Z + "&cx=c";
        gn() && (c += "&sign=" + oh.jc);
        var d = en(b, c);
        d || (d = kn("https://", "http://", oh.Ac + c));
        Mb(d);
      }
    };
  var pn = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    qn = function (a) {
      var b = new pn();
      b.eventModel = a;
      return b;
    },
    rn = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    sn = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    tn = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    un = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    vn = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    wn = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    xn = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    yn = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    zn = function (a, b) {
      a.onFailure = b;
      return a;
    };
  l = pn.prototype;
  l.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    An(this, this.globalConfig[a], this.dataLayerConfig[a]) && kg(71);
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  l.getTopLevelKeys = function () {
    function a(e) {
      for (var f = Object.keys(e), g = 0; g < f.length; ++g) b[f[g]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++)
      if (!b.hasOwnProperty(c[d])) {
        kg(71);
        break;
      }
    return Object.keys(b);
  };
  l.getMergedValues = function (a, b) {
    function c(h) {
      nc(h) &&
        La(h, function (k, n) {
          e = !0;
          d[k] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    (e !== f || An(this, d, g)) && kg(71);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  l.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var h = 0; h < a.length; h++) void 0 !== g[a[h]] && ((b[a[h]] = g[a[h]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    An(this, b, e) && kg(71);
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  l.getEventModelKeys = function () {
    var a = [],
      b;
    for (b in this.eventModel)
      b !== R.Eb &&
        this.eventModel.hasOwnProperty(b) &&
        void 0 !== this.eventModel[b] &&
        a.push(b);
    return a;
  };
  var An = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = lc(b);
      if (d !== lc(c) || !((nc(b) && nc(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (An(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b) if (!c.hasOwnProperty(g) || An(a, b[g], c[g])) return !0;
      }
    } catch (h) {
      kg(72);
    }
    return !1;
  };
  function Bn() {
    T.dedupe_gclid || (T.dedupe_gclid = "" + $i());
    return T.dedupe_gclid;
  }
  var Cn;
  if (3 === oh.Pd.length) Cn = "g";
  else {
    var Dn = "G";
    Dn = "g";
    Cn = Dn;
  }
  var En = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Cn, OPT: "o" },
    Fn = function (a) {
      var b = Ie.J.split("-"),
        c = b[0].toUpperCase(),
        d = En[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === oh.Pd.length) {
        var g = "w";
        g = hn() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + oh.Pd + e;
    };
  function Gn(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Hn = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function In() {
    return ub("iPhone") && !ub("iPod") && !ub("iPad");
  }
  ub("Opera");
  ub("Trident") || ub("MSIE");
  ub("Edge");
  !ub("Gecko") ||
    (-1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge")) ||
    ub("Trident") ||
    ub("MSIE") ||
    ub("Edge");
  -1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") && ub("Mobile");
  ub("Macintosh");
  ub("Windows");
  ub("Linux") || ub("CrOS");
  var Jn = ma.navigator || null;
  Jn && (Jn.appVersion || "").indexOf("X11");
  ub("Android");
  In();
  ub("iPad");
  ub("iPod");
  In() || ub("iPad") || ub("iPod");
  tb().toLowerCase().indexOf("kaios");
  var Kn = function (a) {
    if (!a || !I.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    I.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var Ln = function () {};
  var Mn = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Nn = function (a, b) {
      this.o = a;
      this.g = null;
      this.C = {};
      this.O = 0;
      this.I = void 0 === b ? 500 : b;
      this.s = null;
    };
  la(Nn, Ln);
  Nn.prototype.addEventListener = function (a) {
    var b = {},
      c = Ji(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.I &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.I));
    var e = function (f, g) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Mn(b)),
          (g && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      On(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Nn.prototype.removeEventListener = function (a) {
    a && a.listenerId && On(this, "removeEventListener", null, a.listenerId);
  };
  var Qn = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c ? ((h = 0), 2 === g && (h = 1)) : 3 === c && ((h = 1), 1 === g && (h = 0));
      var k;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Pn(a.vendor.consents, void 0 === d ? "755" : d);
          k =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Pn(a.purpose.consents, b);
        } else k = !0;
      else
        k =
          1 === h
            ? a.purpose && a.vendor
              ? Pn(a.purpose.legitimateInterests, b) &&
                Pn(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return k;
    },
    Pn = function (a, b) {
      return !(!a || !a[b]);
    },
    On = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (Rn(a)) {
        Sn(a);
        var f = ++a.O;
        a.C[f] = c;
        if (a.g) {
          var g = {};
          a.g.postMessage(
            ((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g),
            "*",
          );
        }
      } else c({}, !1);
    },
    Rn = function (a) {
      if (a.g) return a.g;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.g = b;
      return a.g;
    },
    Sn = function (a) {
      a.s ||
        ((a.s = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
            a.C[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Hn(a.o, a.s));
    };
  var Tn = !0;
  Tn = !1;
  var Un = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Vn = Gn("", 550),
    Wn = Gn("", 500);
  function Xn() {
    var a = T.tcf || {};
    return (T.tcf = a);
  }
  var bo = function () {
    var a = Xn(),
      b = new Nn(z, Tn ? 3e3 : -1);
    if (
      !0 === z.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof z.__tcfapi || "function" === typeof b.o.__tcfapi || null != Rn(b))
    ) {
      a.active = !0;
      a.md = {};
      Yn();
      var c = null;
      Tn
        ? (c = z.setTimeout(function () {
            Zn(a);
            $n(a);
            c = null;
          }, Wn))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Zn(a), $n(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = ao()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Un)
                if (Un.hasOwnProperty(g))
                  if ("1" === g) {
                    var h = d,
                      k = !0;
                    k = void 0 === k ? !1 : k;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState && (p.internalErrorState = Mn(p)),
                        (n =
                          "error" === p.cmpStatus ||
                          0 !== p.internalErrorState ||
                          ("loaded" === p.cmpStatus &&
                            ("tcloaded" === p.eventStatus ||
                              "useractioncomplete" === p.eventStatus))
                            ? !0
                            : !1));
                    f["1"] = n
                      ? !1 === h.gdprApplies ||
                        "tcunavailable" === h.tcString ||
                        (void 0 === h.gdprApplies && !k) ||
                        "string" !== typeof h.tcString ||
                        !h.tcString.length
                        ? !0
                        : Qn(h, "1", 0)
                      : !1;
                  } else f[g] = Qn(d, g, Un[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.md = e), $n(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Zn(a), $n(a);
      }
    }
  };
  function Zn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Tn && (a.md = ao());
  }
  function Yn() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Vn), a);
    Jg(b);
  }
  function ao() {
    var a = {},
      b;
    for (b in Un) Un.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function $n(a) {
    var b = {},
      c = ((b.ad_storage = a.md["1"] ? "granted" : "denied"), b);
    Lg(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: co() });
  }
  var co = function () {
      var a = Xn();
      return a.active ? a.tcString || "" : "";
    },
    eo = function () {
      var a = Xn();
      return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? "1" : "0") : "";
    },
    fo = function (a) {
      if (!Un.hasOwnProperty(String(a))) return !0;
      var b = Xn();
      return b.active && b.md ? !!b.md[String(a)] : !0;
    };
  var mo = !1;
  var no = function () {
      this.g = {};
    },
    oo = function (a, b, c) {
      null != c && (a.g[b] = c);
    },
    po = function (a) {
      return Object.keys(a.g)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]);
        })
        .join("&");
    },
    ro = function (a, b, c, d, e) {};
  var to = /[A-Z]+/,
    uo = /\s/,
    vo = function (a) {
      if (m(a)) {
        a = Qa(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (to.test(c)) {
            for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
              if (!d[e] || (uo.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], N: d };
          }
        }
      }
    },
    xo = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = vo(a[c]);
        d && (b[d.id] = d);
      }
      wo(b);
      var e = [];
      La(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function wo(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Qo = !1;
  function Ro() {
    if (Ca(Fb.joinAdInterestGroup)) return !0;
    Qo || (Kn(""), (Qo = !0));
    return Ca(Fb.joinAdInterestGroup);
  }
  function So(a, b) {
    var c = void 0;
    try {
      c = I.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Sa() - d) {
        hg("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]')
            .length
        ) {
          hg("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Ob(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Sa() }, c);
  }
  var Ap = function (a, b, c) {
      this.sa = a;
      this.eventName = b;
      this.H = c;
      this.D = {};
      this.metadata = {};
      this.Wa = !1;
    },
    Bp = function (a, b, c) {
      var d = a.H.getWithConfig(b);
      void 0 !== d ? (a.D[b] = d) : void 0 !== c && (a.D[b] = c);
    },
    Cp = function (a, b, c) {
      var d = Wh(a.sa);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Dp(a) {
    return {
      getDestinationId: function () {
        return a.sa;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.D[b];
      },
      setHitData: function (b, c) {
        return void (a.D[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.D[b] && (a.D[b] = c);
      },
      copyToHitData: function (b, c) {
        Bp(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.Wa = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var Fp = function (a) {
      var b = Ep[a.sa];
      if (!a.Wa && b)
        for (var c = Dp(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.Wa = !0;
          }
          if (a.Wa) break;
        }
    },
    Gp = function (a, b) {
      var c = Ep[a];
      c || (c = Ep[a] = []);
      c.push(b);
    },
    Ep = {};
  var bq = function () {
      var a = !0;
      (fo(7) && fo(9) && fo(10)) || (a = !1);
      return a;
    },
    cq = function () {
      var a = !0;
      (fo(3) && fo(4)) || (a = !1);
      return a;
    };
  var Wq = !1;
  var Xq = null,
    Yq = !1;
  function Zq(a) {
    return Yq && !a ? (Xq = Xq || new $q()) : (T.gcq = T.gcq || new $q());
  }
  var ar = function (a, b, c) {
      Zq().register(a, b, c);
    },
    br = function (a, b, c, d) {
      Zq().push("event", [b, a], c, d);
    },
    cr = function (a, b, c) {
      Zq().insert("event", [b, a], c);
    },
    dr = function (a, b) {
      Zq().push("config", [a], b);
    },
    er = function (a, b, c, d) {
      Zq().push("get", [a, b], c, d);
    },
    fr = function (a) {
      return Zq().getRemoteConfig(a);
    },
    gr = {},
    hr = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.s = null;
      this.claimed = this.g = !1;
    },
    ir = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.V = c || "";
      this.g = d;
      this.o = e;
    },
    $q = function () {
      this.o = {};
      this.s = {};
      this.g = [];
      this.C = { AW: !1, UA: !1 };
    },
    jr = function (a, b) {
      var c = vo(b);
      return (a.o[c.containerId] = a.o[c.containerId] || new hr());
    },
    kr = function (a, b, c, d) {
      if (b) {
        var e = vo(b);
        if (e && 1 === jr(a, b).status) {
          jr(a, b).status = 2;
          var f = {};
          Wl &&
            (f.timeoutId = z.setTimeout(function () {
              kg(38);
              yl();
            }, 3e3));
          a.push("require", [f], e.containerId);
          gr[e.containerId] = Sa();
          if (hn()) {
          } else if (ln) Wq && 2 === d ? on(e.containerId, c) : nn(e.containerId, c, !0);
          else {
            var h = "/gtag/js?id=" + encodeURIComponent(e.containerId) + "&l=" + oh.Z + "&cx=c";
            gn() && (h += "&sign=" + oh.jc);
            var k =
                ("http:" != z.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + h),
              n = en(c, h) || k;
            Mb(n);
          }
        }
      }
    },
    lr = function (a, b, c, d) {
      if (d.V) {
        var e = jr(a, d.V),
          f = e.s;
        if (f) {
          var g = oc(c),
            h = oc(e.targetConfig[d.V]),
            k = oc(e.containerConfig),
            n = oc(e.remoteConfig),
            p = oc(a.s),
            q = {};
          try {
            q = oc(Kh);
          } catch (x) {
            kg(72);
          }
          var r = Nh("gtm.uniqueEventId"),
            u = vo(d.V).prefix,
            t = Va(function () {
              var x = g[R.$b];
              x && J(x);
            }),
            v = yn(
              xn(
                zn(
                  wn(un(tn(vn(sn(rn(qn(g), h), k), n), p), q), function () {
                    im(r, u, "2");
                    t();
                  }),
                  function () {
                    im(r, u, "3");
                    t();
                  },
                ),
                function (x, y) {
                  a.C[x] = y;
                },
              ),
              function (x) {
                return a.C[x];
              },
            );
          try {
            im(r, u, "1"), sm(d.type, d.V, v);
            f(d.V, b, d.s, v);
          } catch (x) {
            im(r, u, "4");
          }
        }
      }
    };
  l = $q.prototype;
  l.register = function (a, b, c) {
    var d = jr(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (oc(d.remoteConfig, c), (d.remoteConfig = c));
      var e = vo(a),
        f = gr[e.containerId];
      if (void 0 !== f) {
        var g = T[e.containerId].bootstrap,
          h = e.prefix.toUpperCase();
        T[e.containerId]._spx && (h = h.toLowerCase());
        var k = Nh("gtm.uniqueEventId"),
          n = h,
          p = Sa() - g;
        if (Wl && !Dl[k]) {
          k !== zl && (ul(), (zl = k));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Kl = Kl ? Kl + "," + q : "&cl=" + q;
        }
        delete gr[e.containerId];
      }
      this.flush();
    }
  };
  l.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (vo(f)) {
          var g = jr(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  l.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!vo(c)) return;
      kr(this, c, b[0][R.Da] || this.s[R.Da], "event" === a ? 2 : 1);
      jr(this, c).g && (d = !1);
    }
    this.g.push(new ir(a, Math.floor(Sa() / 1e3), c, b, d));
    d || this.flush();
  };
  l.insert = function (a, b, c) {
    var d = Math.floor(Sa() / 1e3);
    0 < this.g.length
      ? this.g.splice(1, 0, new ir(a, d, c, b, !1))
      : this.g.push(new ir(a, d, c, b, !1));
  };
  l.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.g.length; ) {
      var f = this.g[0];
      if (f.o) !f.V || jr(this, f.V).g ? ((f.o = !1), this.g.push(f)) : c.push(f), this.g.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = jr(this, f.V);
            if (3 !== g.status && !a) {
              this.g.push.apply(this.g, c);
              return;
            }
            Wl && z.clearTimeout(f.g[0].timeoutId);
            break;
          case "set":
            La(f.g[0], function (r, u) {
              oc($a(r, u), b.s);
            });
            break;
          case "config":
            g = jr(this, f.V);
            if (g.claimed) break;
            e.$a = {};
            La(
              f.g[0],
              (function (r) {
                return function (u, t) {
                  oc($a(u, t), r.$a);
                };
              })(e),
            );
            var h = !!e.$a[R.Kd];
            delete e.$a[R.Kd];
            var k = vo(f.V),
              n = k.containerId === k.id;
            h || (n ? (g.containerConfig = {}) : (g.targetConfig[f.V] = {}));
            (g.g && h) || lr(this, R.Ha, e.$a, f);
            g.g = !0;
            delete e.$a[R.Eb];
            n ? oc(e.$a, g.containerConfig) : (oc(e.$a, g.targetConfig[f.V]), kg(70));
            d = !0;
            break;
          case "event":
            g = jr(this, f.V);
            if (g.claimed) break;
            e.ud = {};
            La(
              f.g[0],
              (function (r) {
                return function (u, t) {
                  oc($a(u, t), r.ud);
                };
              })(e),
            );
            lr(this, f.g[1], e.ud, f);
            break;
          case "get":
            if (((g = jr(this, f.V)), !g.claimed)) {
              var p = {},
                q = ((p[R.eb] = f.g[0]), (p[R.pb] = f.g[1]), p);
              lr(this, R.Pa, q, f);
            }
        }
        this.g.shift();
        mr(this, f);
      }
      e = { $a: e.$a, ud: e.ud };
    }
    this.g.push.apply(this.g, c);
    d && this.flush();
  };
  var mr = function (a, b) {
    if ("require" !== b.type)
      if (b.V)
        for (var c = a.getCommandListeners(b.V)[b.type] || [], d = 0; d < c.length; d++) c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o) for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]();
          }
  };
  $q.prototype.getRemoteConfig = function (a) {
    return jr(this, a).remoteConfig;
  };
  $q.prototype.getCommandListeners = function (a) {
    return jr(this, a).o;
  };
  var nr = !1;
  var or = !1;
  var pr = function (a, b) {
    T.addDestinationToContainer
      ? T.addDestinationToContainer(a, b)
      : ((T.pendingDestinationIds = T.pendingDestinationIds || []),
        T.pendingDestinationIds.push([a, b]));
  };
  var qr = {},
    rr = {},
    sr = function (a) {
      T.addTargetToGroup
        ? T.addTargetToGroup(a)
        : ((T.pendingDefaultTargets = T.pendingDefaultTargets || []),
          T.pendingDefaultTargets.push(a));
    },
    tr = function (a, b) {
      var c = rr[b] || [];
      c.push(a);
      rr[b] = c;
    },
    vr = function () {
      T.addTargetToGroup = function (e) {
        ur(e, "default");
      };
      T.addDestinationToContainer = function (e, f) {
        tr(e, f);
      };
      var a = T.pendingDefaultTargets;
      delete T.pendingDefaultTargets;
      if (Array.isArray(a)) for (var b = 0; b < a.length; ++b) ur(a[b], "default");
      var c = T.pendingDestinationIds;
      delete T.pendingDestinationIds;
      if (Array.isArray(c)) for (var d = 0; d < c.length; ++d) tr(c[d][0], c[d][1]);
    },
    ur = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = qr[b[c]] || [];
        qr[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Pr = function (a) {
      La(qr, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zr = function (a) {
      var b = T.zones;
      return b
        ? b.getIsAllowedFn(Ie.J, a)
        : function () {
            return !0;
          };
    },
    $r = function (a) {
      var b = T.zones;
      return b ? b.isActive(Ie.J, a) : !0;
    };
  var cs = function (a, b) {
    for (var c = [], d = 0; d < le.length; d++)
      if (a[d]) {
        var e = le[d];
        var f = Gm(b.vb);
        try {
          var g = Ym(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              k = h.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = ne[p];
            k.call(h, { Eh: n, vh: q ? q.priorityOverride || 0 : 0, execute: g });
          } else as(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(bs);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  function bs(a, b) {
    var c,
      d = b.vh,
      e = a.vh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Eh,
        h = b.Eh;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function as(a, b) {
    if (!Wl) return;
    var c = function (d) {
      var e = b.yf(le[d]) ? "3" : "4",
        f = te(le[d][Ld.Ig], b, []);
      f && f.length && c(f[0].index);
      bm(b.id, le[d], e);
      var g = te(le[d][Ld.Lg], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var fs = !1,
    ds;
  var ls = function (a) {
    var b = Sa(),
      c = a["gtm.uniqueEventId"],
      d = a.event;
    if ("gtm.js" === d) {
      if (fs) return !1;
      fs = !0;
    }
    var g,
      h = !1;
    if ($r(c)) g = Zr(c);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      h = !0;
      g = Zr(Number.MAX_SAFE_INTEGER);
    }
    am(c, d);
    var k = a.eventCallback,
      n = a.eventTimeout,
      p = k;
    var q = {
        id: c,
        name: d,
        yf: Uk(g),
        pk: [],
        qh: function () {
          kg(6);
        },
        Vg: hs(),
        Wg: is(c),
        vb: new Cm(p, n),
      },
      r = De(q);
    h && (r = js(r));
    var u = cs(r, q),
      t = !1;
    Hm(q.vb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Sm(Ie.J);
    return ks(r, u) || t;
  };
  function is(a) {
    return function (b) {
      Wl && (sc(b) || jm(a, "input", b));
    };
  }
  function hs() {
    var a = {};
    a.event = Sh("event", 1);
    a.ecommerce = Sh("ecommerce", 1);
    a.gtm = Sh("gtm");
    a.eventModel = Sh("eventModel");
    return a;
  }
  function js(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] && (xh[String(le[c][Ld.Fb])] && (b[c] = !0), void 0 !== le[c][Ld.Ni] && (b[c] = !0));
    return b;
  }
  function ks(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && le[c] && !yh[String(le[c][Ld.Fb])]) return !0;
    return !1;
  }
  var Me;
  var ms = "HA GF G UA AW DC".split(" "),
    ns = !1,
    os = !1,
    ps = 0;
  function qs(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Hh() });
    return a["gtm.uniqueEventId"];
  }
  function rs() {
    if (Yq) return !1;
    ns || T.gtagRegistered || ((ns = T.gtagRegistered = !0), vr());
    return ns;
  }
  var ss = {
      config: function (a) {
        qs(a);
        if (2 > a.length || !m(a[1])) return;
        var b = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !nc(a[2])) || 3 < a.length) return;
          b = a[2];
        }
        var c = vo(a[1]);
        if (!c || (Yq && c.id !== Ie.J)) return;
        var d = rs() || Yq;
        Pr(c.id);
        ur(c.id, b[R.Ne] || "default");
        delete b[R.Ne];
        os || kg(43);
        if (d && -1 !== ms.indexOf(c.prefix)) {
          "G" === c.prefix && (b[R.Eb] = !0);
          delete b[R.$b];
          c.id === c.containerId && (T.configCount = ++ps);
          dr(b, c.id);
          return;
        }
        Qh("gtag.targets." + c.id, void 0);
        Qh("gtag.targets." + c.id, oc(b));
      },
      consent: function (a) {
        if (3 === a.length) {
          kg(39);
          var b = { eventId: qs(a), priorityId: a["gtm.priorityId"] },
            c = a[1];
          "default" === c ? Jg(a[2]) : "update" === c && Lg(a[2], b);
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && m(b)) {
          var c;
          if (2 < a.length) {
            if ((!nc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = c,
            e = {},
            f = ((e.event = b), e);
          d &&
            ((f.eventModel = oc(d)),
            d[R.$b] && (f.eventCallback = d[R.$b]),
            d[R.Dd] && (f.eventTimeout = d[R.Dd]));
          var g = qs(a),
            h = a["gtm.priorityId"];
          f["gtm.uniqueEventId"] = g;
          h && (f["gtm.priorityId"] = h);
          if ("optimize.callback" === b) return (f.eventModel = f.eventModel || {}), f;
          var k;
          var n = c && c[R.cc];
          void 0 === n && ((n = Nh(R.cc, 2)), void 0 === n && (n = "default"));
          if (m(n) || Ea(n)) {
            for (
              var p = n.toString().replace(/\s+/g, "").split(","), q = [], r = 0;
              r < p.length;
              r++
            )
              if (0 <= p[r].indexOf("-"))
                nr && or ? -1 < (rr[Ie.J] || []).indexOf(p[r]) && q.push(p[r]) : q.push(p[r]);
              else {
                var u = qr[p[r]] || [];
                if (nr)
                  if (or) {
                    if (-1 < u.indexOf(Ie.J)) {
                      var t = rr[Ie.J];
                      t && t.length && (q = q.concat(t));
                    }
                  } else
                    for (var v = 0; v < u.length; v++) {
                      var x = rr[u[v]];
                      x && x.length && (q = q.concat(x));
                    }
                else u && u.length && (q = q.concat(u));
              }
            k = xo(q);
          } else k = void 0;
          var y = k;
          if (!y) return;
          for (var w = rs() || Yq, B = [], A = 0; w && A < y.length; A++) {
            var C = y[A];
            if (-1 !== ms.indexOf(C.prefix)) {
              var D = oc(c);
              "G" === C.prefix && (D[R.Eb] = !0);
              delete D[R.$b];
              br(b, D, C.id);
            }
            B.push(C.id);
          }
          f.eventModel = f.eventModel || {};
          0 < y.length ? (f.eventModel[R.cc] = B.join()) : delete f.eventModel[R.cc];
          os || kg(43);
          return f;
        }
      },
      get: function (a) {
        kg(53);
        if (4 !== a.length || !m(a[1]) || !m(a[2]) || !Ca(a[3])) return;
        var b = vo(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        os || kg(43);
        if (Yq) {
          if (-1 === Wk().indexOf(b.id)) return;
        } else if (!rs()) return;
        if (-1 === ms.indexOf(b.prefix)) return;
        qs(a);
        var e = {};
        Fg(oc(((e[R.eb] = c), (e[R.pb] = d), e)));
        er(
          c,
          function (f) {
            J(function () {
              return d(f);
            });
          },
          b.id,
        );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          os = !0;
          rs();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = qs(a)),
            b
          );
        }
      },
      policy: function (a) {
        if (3 === a.length) {
          var b = a[1],
            c = a[2],
            d = Me.o;
          d.g[b] ? d.g[b].push(c) : (d.g[b] = [c]);
        }
      },
      set: function (a) {
        var b;
        2 == a.length && nc(a[1])
          ? (b = oc(a[1]))
          : 3 == a.length &&
            m(a[1]) &&
            ((b = {}), nc(a[2]) || Ea(a[2]) ? (b[a[1]] = oc(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          var c = qs(a),
            d = a["gtm.priorityId"];
          oc(b);
          if (rs() || Yq) {
            var e = oc(b);
            Zq().push("set", [e]);
          }
          b["gtm.uniqueEventId"] = c;
          d && (b["gtm.priorityId"] = d);
          b._clear = !0;
          return b;
        }
      },
    },
    ts = { policy: !0 };
  var vs = function (a) {
    if (us(a)) return a;
    this.g = a;
  };
  vs.prototype.getUntrustedMessageValue = function () {
    return this.g;
  };
  var us = function (a) {
      return !a || "object" !== lc(a) || nc(a) ? !1 : "getUntrustedMessageValue" in a;
    },
    ws = function (a) {
      if (us(a)) return a.getUntrustedMessageValue();
    };
  vs.prototype.getUntrustedMessageValue = vs.prototype.getUntrustedMessageValue;
  var ys = function () {
      var a = T.mb;
      a || ((a = new xs()), (T.mb = a));
      return a;
    },
    xs = function () {
      this.g = [];
      this.o = [];
    };
  xs.prototype.push = function (a, b, c) {
    var d = this.g.length + 1;
    us(a) && (a = ws(a) || a);
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    a = new vs(a);
    var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d };
    this.g.push(e);
    for (var f = 0; f < this.o.length; f++)
      try {
        this.o[f](e);
      } catch (g) {}
  };
  xs.prototype.listen = function (a) {
    this.o.push(a);
  };
  xs.prototype.get = function () {
    for (var a = {}, b = 0; b < this.g.length; b++) {
      var c = this.g[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  var As = function () {
      var a = zs;
      ys().listen(a);
    },
    Bs = function (a, b) {
      return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId;
    };
  var Cs = function (a) {
      var b = z[oh.Z].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Ds = function (a) {
      var b = z[oh.Z],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Es = !1,
    Fs = [];
  function Gs() {
    if (!Es) {
      Es = !0;
      for (var a = 0; a < Fs.length; a++) J(Fs[a]);
    }
  }
  var Hs = function (a) {
    Es ? J(a) : Fs.push(a);
  };
  var Xs = 0,
    Ys = {},
    Zs = [],
    $s = [],
    at = !1,
    bt = !1,
    ct = function (a) {
      return z[oh.Z].push(a);
    },
    dt = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return ct(a);
    },
    et = function (a, b) {
      var c = T[oh.Z],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d && (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function ft(a) {
    var b = a._clear;
    La(a, function (d, e) {
      "_clear" !== d && (b && Qh(d, void 0), Qh(d, e));
    });
    Dh || (Dh = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Hh()), (a["gtm.uniqueEventId"] = c), Qh("gtm.uniqueEventId", c));
    return ls(a);
  }
  function gt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ma(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }
  function ht() {
    for (var a = !1; !bt && (0 < Zs.length || 0 < $s.length); ) {
      if (!at && gt(Zs[0])) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d),
          f = Zs[0]["gtm.uniqueEventId"];
        f && ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
        Zs.unshift(c, e);
        at = !0;
      }
      bt = !0;
      delete Kh.eventModel;
      Mh();
      var n = null,
        p = void 0;
      if ($s.length) {
        var q = $s.shift();
        n = q.message;
        p = q.debugContext;
      }
      null == n && (n = Zs.shift());
      if (null != n) {
        var r = us(n);
        r && ((n = ws(n)), Rh());
        try {
          if (Ca(n))
            try {
              n.call(Oh);
            } catch (D) {}
          else if (Ea(n)) {
            var u = n;
            if (m(u[0])) {
              var t = u[0].split("."),
                v = t.pop(),
                x = u.slice(1),
                y = Nh(t.join("."), 2);
              if (null != y)
                try {
                  y[v].apply(y, x);
                } catch (D) {}
            }
          } else {
            if (Ma(n)) {
              a: {
                var w = n,
                  B = p;
                if (w.length && m(w[0])) {
                  var A = ss[w[0]];
                  if (A && (!r || !ts[w[0]])) {
                    n = A(w, B);
                    break a;
                  }
                }
                n = void 0;
              }
              if (!n) {
                bt = !1;
                continue;
              }
            }
            a = ft(n) || a;
            if (gt(n)) {
              var C = n["gtm.uniqueEventId"];
              void 0 !== C && (it(C), (Xs = C));
            }
          }
        } finally {
          r && Mh(!0);
        }
      }
      bt = !1;
    }
    return !a;
  }
  function jt() {
    var b = ht();
    try {
      Cs(Ie.J);
    } catch (c) {}
    return b;
  }
  var it = function (a) {
      for (var b = Ys[String(a)] || [], c = 0; c < b.length; c++) $s.push(b[c]);
      b.length && $s.sort(Bs);
      delete Ys[String(a)];
    },
    zs = function (a) {
      var b = a.notBeforeEventId;
      Xs < b
        ? ((Ys[String(b)] = Ys[String(b)] || []), Ys[String(b)].push(a))
        : ($s.push(a),
          $s.sort(Bs),
          J(function () {
            bt || ht();
          }));
    };
  var lt = function () {
      var a = Hb(oh.Z, []),
        b = Hb("google_tag_manager", {});
      (Ys = ys().get()), it(0), As();
      b = b[oh.Z] = b[oh.Z] || {};
      zm(function () {
        if (!b.gtmDom) {
          b.gtmDom = !0;
          var e = {};
          a.push(((e.event = "gtm.dom"), e));
        }
      });
      Hs(function () {
        if (!b.gtmLoad) {
          b.gtmLoad = !0;
          var e = {};
          a.push(((e.event = "gtm.load"), e));
        }
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < T.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++) e[f] = new vs(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        Zs.push.apply(Zs, e);
        var g = c.apply(a, e);
        if (300 < this.length) for (kg(4); 300 < this.length; ) this.shift();
        var h = "boolean" !== typeof g || g;
        return ht() && h;
      };
      var d = a.slice(0);
      Zs.push.apply(Zs, d);
      if (kt()) {
        J(jt);
      }
    },
    kt = function () {
      var a = !0;
      return a;
    };
  function mt(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Sa();
    return b < c + 3e5 && b > c - 9e5;
  }
  var nt = {};
  nt.Ld = new String("undefined");
  var Pt = z.clearTimeout,
    Qt = z.setTimeout,
    U = function (a, b, c, d) {
      if (hn()) {
        b && J(b);
      } else return Mb(a, b, c, d);
    },
    Rt = function () {
      return new Date();
    },
    St = function () {
      return z.location.href;
    },
    Tt = function (a) {
      return ji(li(a), "fragment");
    },
    Ut = function (a) {
      return ki(li(a));
    },
    Vt = function (a, b) {
      return Nh(a, b || 2);
    },
    Wt = function (a, b, c) {
      return b ? dt(a, b, c) : ct(a);
    },
    Xt = function (a, b) {
      z[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    Yt = function (a, b, c) {
      return Ni(a, b, void 0 === c ? !0 : !!c);
    },
    Zt = function (a, b, c) {
      return 0 === Wi(a, b, c);
    },
    $t = function (a, b) {
      if (hn()) {
        b && J(b);
      } else Ob(a, b);
    },
    au = function (a) {
      return !!ut(a, "init", !1);
    },
    bu = function (a) {
      st(a, "init", !0);
    },
    cu = function (a, b, c) {
      Wl && (sc(a) || jm(c, b, a));
    };
  var Au = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Bu(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Cu = new Ja();
  function Du(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Cu.get(e);
      f || ((f = new RegExp(b, d)), Cu.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Eu(a, b) {
    function c(g) {
      var h = li(g),
        k = ji(h, "protocol"),
        n = ji(h, "host", !0),
        p = ji(h, "port"),
        q = ji(h, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === k || ("http" === k && "80" === p) || ("https" === k && "443" === p))
        (k = "web"), (p = "default");
      return [k, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Fu(a) {
    return Gu(a) ? 1 : 0;
  }
  function Gu(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = oc(a, {});
        oc({ arg1: c[d], any_of: void 0 }, e);
        if (Fu(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Au.length; g++) {
                var h = Au[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (k) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Bu(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Du(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Eu(b, c);
    }
    return !1;
  }
  function Hu(a, b) {
    var c = this;
  }
  function Iu(a, b, c) {
    var d;
    return d;
  }
  function Ju(a, b, c) {}
  function Ku(a, b, c, d) {}
  function Lu(a) {}
  function Pu(a) {}
  var Qu = {},
    Ru = [],
    Su = {},
    Tu = 0,
    Uu = 0;
  function av(a, b) {}
  function hv(a, b) {}
  function mv(a) {}
  var nv = {},
    ov = [];
  var vv = function (a, b) {};
  function wv(a, b, c) {}
  function xv(a, b) {
    return !0;
  }
  function yv(a, b, c) {}
  function zv() {
    var a = 2;
    return a;
  }
  function Av(a, b) {
    var c;
    return c;
  }
  function Bv(a) {}
  function Cv(a) {}
  function Dv(a) {
    M(H(this), ["listener:!Fn"], arguments);
    N(this, "process_dom_events", "window", "load");
    Hs(qc(a));
  }
  function Ev(a) {
    var b;
    return b;
  }
  function Fv(a, b) {
    var c;
    var d = pc(c, this.g, zv());
    void 0 === d && void 0 !== c && kg(45);
    return d;
  }
  function Gv(a) {
    var b;
    return b;
  }
  function Hv(a, b) {
    var c;
    return c;
  }
  function Iv(a, b) {
    var c = null,
      d = zv();
    return pc(c, this.g, d);
  }
  function Jv(a) {
    var b;
    return pc(b, this.g, zv());
  }
  var Kv = {},
    Lv = [],
    Mv = {},
    Nv = 0,
    Ov = 0;
  var Uv = function (a, b) {
    return b;
  };
  function Zv(a, b) {
    return b;
  }
  function dw() {}
  var ew = {},
    fw = [];
  function mw(a, b) {
    return b;
  }
  function qw(a, b) {
    return b;
  }
  var rw, sw;
  var Bw = function (a, b) {
    return b;
  };
  var Db = ca(["data-gtm-yt-inspected-"]),
    Cw = ["www.youtube.com", "www.youtube-nocookie.com"],
    Dw,
    Ew = !1;
  function Ow(a, b) {
    return b;
  }
  function Pw(a) {
    return !1;
  }
  var Qw;
  function Rw(a) {
    var b = !1;
    return b;
  }
  var Tw = function (a, b, c) {
      if (c)
        switch (c.type) {
          case "event_name":
            return a;
          case "const":
            return c.const_value;
          case "event_param":
            var d = c.event_param.param_name;
            return b[d];
        }
    },
    Ww = function (a, b, c, d) {
      if (c && !Uw(a, b, c)) return !1;
      if (!d || 0 === d.length) return !0;
      for (var e = 0; e < d.length; e++) if (Vw(a, b, d[e].predicates || [])) return !0;
      return !1;
    },
    Vw = function (a, b, c) {
      for (var d = 0; d < c.length; d++) if (!Uw(a, b, c[d])) return !1;
      return !0;
    },
    Uw = function (a, b, c) {
      var d = c.values || [],
        e = Tw(a, b, d[0]),
        f = Tw(a, b, d[1]),
        g = c.type;
      if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
        m(e) && (e = e.toLowerCase()), m(f) && (f = f.toLowerCase());
      var h = !1;
      switch (g) {
        case "eq":
        case "eqi":
          h = String(e) === String(f);
          break;
        case "sw":
        case "swi":
          h = 0 === String(e).indexOf(String(f));
          break;
        case "ew":
        case "ewi":
          h = Bu(e, f);
          break;
        case "cn":
        case "cni":
          h = 0 <= String(e).indexOf(String(f));
          break;
        case "lt":
          h = Number(e) < Number(f);
          break;
        case "le":
          h = Number(e) <= Number(f);
          break;
        case "gt":
          h = Number(e) > Number(f);
          break;
        case "ge":
          h = Number(e) >= Number(f);
          break;
        case "re":
        case "rei":
          h = Du(e, f, "rei" === g);
      }
      return !!c.negate !== h;
    };
  function Xw(a, b) {
    var c = !1;
    return c;
  }
  var Yw = function (a) {
    var b;
    return b;
  };
  function Zw(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  function $w() {
    return fg.Zg;
  }
  function ax() {
    var a = [];
    return pc(a);
  }
  function bx(a) {
    var b = null;
    return b;
  }
  function cx(a, b) {
    var c;
    return c;
  }
  function dx(a, b) {
    var c;
    return c;
  }
  function ex(a, b) {
    var c;
    return c;
  }
  function fx(a) {
    var b = "";
    return b;
  }
  function gx() {
    return fg.yh;
  }
  function hx(a, b) {
    var c;
    return c;
  }
  function ix(a) {
    var b = "";
    return b;
  }
  function jx() {
    N(this, "get_user_agent");
    return z.navigator.userAgent;
  }
  var lx = function (a, b) {
    return 1 === arguments.length ? kx("set", a) : kx("set", a, b);
  };
  function kx(a) {
    return arguments;
  }
  function mx(a) {
    return a
      ? {
          entityType: a.eh.type,
          indexInOriginContainer: a.eh.index,
          nameInOriginContainer: void 0,
          originContainerId: Ie.J,
        }
      : {};
  }
  function ox(a, b) {}
  function px(a, b) {}
  var qx = {};
  function rx(a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          Mb(
            a,
            function () {
              for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
              g.push = function (k) {
                J(k);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
              e[f] = null;
            },
            b,
          ))
      : Mb(a, c, d, b);
  }
  function sx(a, b, c, d) {}
  var tx = Object.freeze({ dl: 1, id: 1 }),
    ux = {};
  function vx(a, b, c, d) {}
  function wx(a) {
    var b = !0;
    return b;
  }
  var xx = function () {
      return !1;
    },
    yx = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var zx = ["textContent", "value", "tagName", "children", "childElementCount"];
  function Ax(a) {
    var b;
    return b;
  }
  function Bx() {}
  function Cx(a, b) {
    var c;
    return c;
  }
  function Dx(a) {
    var b = void 0;
    return b;
  }
  function Ex(a) {}
  function Fx(a, b) {
    var c = !1;
    return c;
  }
  function Gx() {
    var a = "";
    return a;
  }
  function Hx() {
    var a = "";
    return a;
  }
  function Ix(a, b) {
    var c = this;
  }
  var Jx = Object.freeze(["config", "event", "get", "set"]);
  function Kx(a, b, c) {}
  function Lx(a, b) {
    var c = !1;
    return c;
  }
  function Mx() {}
  function Nx(a, b, c, d) {
    d = void 0 === d ? !1 : d;
  }
  function Ox(a, b, c) {}
  function Px(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  var Qx = !1;
  Qx = !0;
  function Rx(a) {
    M(H(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Gb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== R.se && N(this, "access_consent", e, "write");
    }
    var f = this.g.g,
      g = f.eventId,
      h = mx(f);
    if (Qx) {
      var k = kx("consent", "default", qc(a));
      ys().push(k, g, h);
    } else Jg(qc(a));
  }
  function Sx(a, b, c) {
    return !1;
  }
  function Tx(a, b, c) {
    M(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = Wh(a) || {};
    d[b] = qc(c, this.g);
    var e = a;
    Uh || Vh();
    Th[e] = d;
  }
  function Ux(a, b, c) {}
  var Vx = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  function Wx(a, b, c, d) {
    var e = this;
  }
  function Xx(a, b, c) {}
  var Yx = {},
    Zx = {};
  Yx.getItem = function (a) {
    var b = null;
    return b;
  };
  Yx.setItem = function (a, b) {};
  Yx.removeItem = function (a) {};
  Yx.clear = function () {};
  var $x = function (a) {
    var b;
    return b;
  };
  var ay = !1;
  ay = !0;
  function by(a) {
    M(H(this), ["consentSettings:!DustMap"], arguments);
    var b = qc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
    var d = this.g.g,
      e = d.eventId,
      f = mx(d);
    if (ay) {
      var g = kx("consent", "update", b);
      ys().push(g, e, f);
    } else Lg(b, { eventId: e });
  }
  var cy = function () {
    var a = new Xf();
    hn()
      ? (a.add("injectHiddenIframe", Ba), a.add("injectScript", Ba))
      : (a.add("injectHiddenIframe", px), a.add("injectScript", sx));
    var b = Ox;
    a.add("Math", Bf());
    a.add("Object", Vf);
    a.add("TestHelper", $f());
    a.add("addConsentListener", Hu);
    a.add("addEventCallback", Lu);
    a.add("aliasInWindow", xv);
    a.add("assertApi", xf);
    a.add("assertThat", yf);
    a.add("callInWindow", Av);
    a.add("callLater", Bv);
    a.add("copyFromDataLayer", Fv);
    a.add("copyFromWindow", Gv);
    a.add("createArgumentsQueue", Iv);
    a.add("createQueue", Jv);
    a.add("decodeUri", Cf);
    a.add("decodeUriComponent", Df);
    a.add("encodeUri", Ef);
    a.add("encodeUriComponent", Ff);
    a.add("fail", Gf);
    a.add("fromBase64", Yw, !("atob" in z));
    a.add("generateRandom", Hf);
    a.add("getContainerVersion", If);
    a.add("getCookieValues", Zw);
    a.add("getQueryParameters", dx);
    a.add("getReferrerQueryParameters", ex);
    a.add("getReferrerUrl", fx);
    a.add("getTimestamp", Lf);
    a.add("getTimestampMillis", Lf);
    a.add("getType", Mf);
    a.add("getUrl", ix);
    a.add("isConsentGranted", wx);
    a.add("localStorage", yx, !xx());
    a.add("logToConsole", Bx);
    a.add("makeInteger", Of);
    a.add("makeNumber", Pf);
    a.add("makeString", Qf);
    a.add("makeTableMap", Rf);
    a.add("mock", Uf);
    a.add("parseUrl", Dx);
    a.add("queryPermission", Fx);
    a.add("readCharacterSet", Gx);
    a.add("readTitle", Hx);
    a.add("sendPixel", b);
    a.add("setCookie", Px);
    a.add("setDefaultConsentState", Rx);
    a.add("setInWindow", Sx);
    a.add("sha256", Wx);
    a.add("templateStorage", Yx);
    a.add("toBase64", $x, !("btoa" in z));
    a.add("updateConsentState", by);
    Zf(a, "callOnWindowLoad", Dv);
    Zf(a, "internal.addFormInteractionListener", av);
    Zf(a, "internal.addFormSubmitListener", hv);
    Zf(a, "internal.addGaSendListener", mv);
    Zf(a, "internal.addHistoryChangeListener", vv);
    Zf(a, "internal.evaluateFilteringRules", Pw);
    Zf(a, "internal.evaluateMatchingRules", Rw);
    Zf(a, "internal.getDestinationIds", ax);
    Zf(a, "internal.getFlags", Kf);
    Zf(a, "internal.locateUserData", Ax);
    Zf(a, "internal.registerGtagCommandListener", Kx);
    Zf(a, "internal.sendGtagEvent", Nx);
    a.add(
      "JSON",
      Nf(function (c) {
        var d = this.g.g;
        d && d.log.call(this, "error", c);
      }),
    );
    a.add("gtagSet", ox);
    Zf(a, "internal.appendRemoteConfigParameter", yv),
      Zf(a, "internal.getRemoteConfigParameter", hx),
      Zf(a, "internal.setRemoteConfigParameter", Ux),
      Zf(a, "internal.sortRemoteConfigParameters", Xx),
      Zf(a, "internal.getProductSettingsParameter", cx),
      Zf(a, "internal.setProductSettingsParameter", Tx);
    hn() ? Zf(a, "internal.injectScript", Ba) : Zf(a, "internal.injectScript", vx);
    Zf(a, "internal.enableAutoEventOnFormSubmit", Zv);
    Zf(a, "internal.enableAutoEventOnFormInteraction", Uv);
    Zf(a, "internal.enableAutoEventOnHistoryChange", mw);
    Zf(a, "internal.addDataLayerEventListener", Iu);
    Zf(a, "internal.enableAutoEventOnYouTubeActivity", Ow);
    Zf(a, "internal.removeDataLayerEventListener", Lx);
    Zf(a, "internal.enableAutoEventOnGaSend", dw);
    Zf(a, "internal.enableAutoEventOnLinkClick", qw);
    Zf(a, "internal.enableAutoEventOnScroll", Bw);
    return function (c) {
      var d;
      if (a.g.hasOwnProperty(c)) d = a.get(c, this);
      else {
        var e;
        if ((e = a.o.hasOwnProperty(c))) {
          var f = !1,
            g = this.g.g;
          if (g) {
            var h = g.dd();
            if (h) {
              0 !== h.indexOf("__cvt_") && (f = !0);
            }
          }
          e = f;
        }
        if (e) {
          var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
          d = k;
        } else throw Error(c + " is not a valid API name.");
      }
      return d;
    };
  };
  var dy = function () {
      return !1;
    },
    ey = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var fy;
  function gy() {
    var a = fy;
    return function (b, c, d) {
      var e = d && d.event;
      hy(c);
      var f = new hb();
      La(c, function (q, r) {
        var u = pc(r);
        void 0 === u && void 0 !== r && kg(44);
        f.set(q, u);
      });
      a.g.g.I = Ae();
      var g = {
        Xi: Ne(b),
        eventId: void 0 !== e ? e.id : void 0,
        Sd:
          void 0 !== e
            ? function (q) {
                return e.vb.Sd(q);
              }
            : void 0,
        dd: function () {
          return b;
        },
        log: function () {},
        eh: { index: d && d.index, type: d && d.type },
      };
      if (dy()) {
        var h = ey(),
          k = void 0,
          n = void 0;
        g.Oa = {
          Pf: [],
          Xc: {},
          Va: function (q, r, u) {
            1 === r && (k = q);
            7 === r && (n = u);
            h(q, r, u);
          },
          Df: Sf(),
        };
        g.log = function (q, r) {
          if (k) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(k, 4, { level: q, source: n, message: u });
          }
        };
      }
      var p = Kd(a, g, [b, f]);
      a.g.g.I = void 0;
      p instanceof oa && "return" === p.g && (p = p.o);
      return qc(p);
    };
  }
  function hy(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ca(b) &&
      (a.gtmOnSuccess = function () {
        J(b);
      });
    Ca(c) &&
      (a.gtmOnFailure = function () {
        J(c);
      });
  }
  function iy() {
    fy.g.g.O = function (a, b, c) {
      T.SANDBOXED_JS_SEMAPHORE = T.SANDBOXED_JS_SEMAPHORE || 0;
      T.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        T.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function jy(a) {
    void 0 !== a &&
      La(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Gh[e] = Gh[e] || [];
          Gh[e].push(b);
        }
      });
  }
  var ky = encodeURI,
    Y = encodeURIComponent,
    ly = Pb;
  var my = function (a, b) {
    if (!a) return !1;
    var c = ji(li(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var ny = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  var xz = !1;
  var yz = !1;
  var zz = {};
  zz[R.Yb] = "";
  zz[R.Ia] = "";
  zz[R.Ra] = "";
  zz[R.oa] = "auto";
  zz[R.nb] = "/";
  zz[R.Ba] = 63072e3;
  zz[R.Rc] = 30;
  zz[R.Hd] = 1e4;
  zz[R.Ca] = !0;
  var Az = function (a, b, c, d, e, f) {
    f = void 0 === f ? !1 : f;
    Ap.call(this, a, b, d);
    this.o = c;
    this.T = d.eventModel;
    this.Ag = d.containerConfig;
    xz || ((this.I = d.getWithConfig(R.na) ? 1 : 8), (this.Jg = this.hc = !1));
    xz || (this.Xe = d.getWithConfig(R.ob) ? 1 : 8);
    this.C = e;
    this.O = this.We = this.Qg = this.s = this.Mg = !1;
    this.Mb = 0;
    this.$e = this.yb = !1;
    this.af = void 0;
    this.ab = 0;
    this.Pg = this.g = this.Ze = this.Dg = void 0;
    this.Ng = !1;
    yz || (this.Bg = this.Fg = void 0);
    this.Qi = f;
  };
  la(Az, Ap);
  l = Az.prototype;
  l.Ta = function (a, b) {
    void 0 === this.B(a) && (this.T[a] = b);
  };
  l.B = function (a) {
    return void 0 !== this.T[a]
      ? this.T[a]
      : void 0 !== this.H.getWithConfig(a)
      ? this.H.getWithConfig(a)
      : void 0 !== this.C[a]
      ? this.C[a]
      : zz[a];
  };
  l.getRemoteConfig = function (a) {
    return void 0 !== this.H.remoteConfig[a] ? this.H.remoteConfig[a] : this.C[a];
  };
  l.Lb = function (a) {
    var b = Cp(this, R.Cd, this.C[R.Cd]);
    if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName];
  };
  l.jh = function () {
    var a;
    a = xz ? this.metadata.user_data : this.B(R.Ea);
    if ("object" === typeof a) return a;
  };
  l.lh = function () {
    return !!this.jh();
  };
  l.abort = function () {
    throw "ABORT";
  };
  l.Ma = function () {
    return !((!0 !== this.B(R.Lc) && "true" !== this.B(R.Lc)) || !this.B(R.Da));
  };
  var Bz = !1,
    Cz = function (a) {
      var b = a.eventName === R.Bc && zg() && a.Ma(),
        c = a.metadata.is_conversion || a.yb,
        d = a.metadata.is_session_start || a.s,
        e = a.metadata.create_dc_join || a.We,
        f = a.metadata.create_google_join || a.O,
        g = (a.g || a.metadata.euid_mode_enabled) && a.lh();
      return !(!Fb.sendBeacon || c || g || d || e || f || b || Bz);
    };
  var Dz = !1;
  var Ez = function (a) {
    hg("GA4_EVENT", a);
  };
  var Gz = function (a) {
      return !a || Fz.test(a) || R.Bi.hasOwnProperty(a);
    },
    Hz = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var g = f.edit_param.param_name,
            h = Tw(a, b, f.edit_param.param_value),
            k;
          if (h) {
            var n = Number(h);
            k = isNaN(n) ? h : n;
          } else k = h;
          b[g] = k;
        } else f.delete_param && delete b[f.delete_param.param_name];
      }
    },
    Fz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var Iz = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Sa();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Af() && (d = Sa() - b);
          return d + c;
        },
      };
    },
    Jz = !1;
  var Kz = function () {
    this.g = void 0;
    this.o = 0;
    this.isActive = this.isVisible = this.s = !1;
    this.I = this.C = void 0;
  };
  l = Kz.prototype;
  l.Ei = function (a) {
    var b = this;
    if (!this.g) {
      this.s = I.hasFocus();
      this.isVisible = !I.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Qb(d, e, function (g) {
          b.g.stop();
          f(g);
          b.Af() && b.g.start();
        });
      };
      c(z, "focus", function () {
        b.s = !0;
      });
      c(z, "blur", function () {
        b.s = !1;
      });
      c(z, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && kg(56);
        b.I && b.I();
      });
      c(z, "pagehide", function () {
        b.isActive = !1;
        b.C && b.C();
      });
      c(I, "visibilitychange", function () {
        b.isVisible = !I.hidden;
      });
      a.Ma() &&
        -1 === (Fb.userAgent || "").indexOf("Firefox") &&
        -1 === (Fb.userAgent || "").indexOf("FxiOS") &&
        c(z, "beforeunload", function () {
          Bz = !0;
        });
      this.Mf();
      this.o = 0;
    }
  };
  l.Mf = function () {
    this.o += this.ce();
    this.g = Iz(this);
    this.Af() && this.g.start();
  };
  l.sk = function (a) {
    var b = this.ce();
    a.ab = b;
  };
  l.yj = function (a) {
    Jz ? (a.D[R.Bd] = void 0) : (a.ab = 0);
    this.Mf();
    this.o = 0;
  };
  l.Af = function () {
    return this.s && this.isVisible && this.isActive;
  };
  l.uj = function () {
    return this.o + this.ce();
  };
  l.ce = function () {
    return (this.g && this.g.get()) || 0;
  };
  l.bk = function (a) {
    this.C = a;
  };
  l.zh = function (a) {
    this.I = a;
  };
  function Lz() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var Mz = function () {
      var a = Lz();
      a.hid = a.hid || Ia();
      return a.hid;
    },
    Nz = function (a, b) {
      var c = Lz();
      if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
    };
  var Pz = function (a, b, c) {
      if (Oz) {
        var d = a.metadata.client_id_source;
        if (void 0 === d || c <= d)
          (a.D[R.na] = b), (a.T[R.na] = void 0), (a.metadata.client_id_source = c);
      } else c <= a.I && ((a.T[R.na] = b), (a.I = c));
    },
    Tz = function (a, b) {
      var c;
      var d = Qz(b),
        e = String(b.B(R.oa)),
        f = String(b.B(R.nb)),
        g = Number(b.B(R.Ba)),
        h = b.B(R.Zb),
        k = {
          jb: R.P,
          domain: e,
          path: f,
          expires: g ? new Date(Sa() + 1e3 * g) : void 0,
          flags: "" + b.B(R.Ra),
        };
      if (!1 === h && Rz(b) === a) c = !0;
      else {
        var n = dj(a, Sz[0], e, f);
        c = 1 !== Wi(d, n, k);
      }
      return c;
    },
    Rz = function (a) {
      var b = Qz(a),
        c = "" + a.B(R.oa),
        d = "" + a.B(R.nb),
        e = cj(b, c, d, Sz, R.P);
      if (!e) {
        var f = String(a.B(R.Yb));
        f && f != b && (e = cj(f, c, d, Sz, R.P));
      }
      return e;
    },
    Qz = function (a) {
      return String(a.B(R.Ia)) + "_ga";
    },
    Oz = !1;
  var Sz = ["GA1"];
  var Wz = function (a, b) {
      var c = Uz(b),
        d = String(b.B(R.oa)),
        e = String(b.B(R.nb)),
        f = Number(b.B(R.Ba)),
        g = dj(a, Vz[0], d, e),
        h = {
          jb: R.P,
          domain: d,
          path: e,
          expires: f ? new Date(Sa() + 1e3 * f) : void 0,
          flags: String(b.B(R.Ra)),
        };
      return 1 !== Wi(c, g, h);
    },
    Xz = function (a) {
      var b = Uz(a),
        c = String(a.B(R.oa)),
        d = String(a.B(R.nb));
      return cj(b, c, d, Vz, R.P);
    },
    Yz = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, Na(c), d, e];
        return h.join(".");
      }
    },
    Zz = !1;
  var Vz = ["GS1"],
    Uz = function (a) {
      return String(a.B(R.Ia)) + "_ga_" + a.sa.substr(2);
    },
    $z = function (a) {
      return Zz
        ? Yz(
            a.D[R.Db],
            a.D[R.Tc],
            a.D[R.Sc],
            a.o,
            a.metadata.join_timer_sec || 0,
            !!a.metadata[R.Kc],
            a.D[R.ob],
          )
        : Yz(a.T[R.Db], a.T[R.Tc], a.T[R.Sc], a.o, a.Mb, !!a.T[R.Kc], a.T[R.ob]);
    };
  var aA = function (a) {
      var b = a.B(R.qa),
        c = a.getRemoteConfig(R.qa);
      if (c === b) return c;
      var d = oc(b);
      c && c[R.R] && (d[R.R] = (d[R.R] || []).concat(c[R.R]));
      return d;
    },
    bA = function (a, b) {
      var c = Lj(!0);
      return "1" !== c._up ? {} : { clientId: c[a], Ch: c[b] };
    },
    cA = function (a, b, c) {
      var d = Lj(!0),
        e = d[b];
      e && (Pz(a, e, 2), Tz(e, a));
      var f = d[c];
      f && Wz(f, a);
      return !(!e || !f);
    },
    dA = !1;
  var eA = !1,
    fA = function (a) {
      var b = aA(a) || {},
        c = Qz(a),
        d = Uz(a);
      Uj(b[R.ac], !!b[R.R]) && cA(a, c, d) && (eA = !0);
      b[R.R] &&
        Rj(
          function () {
            var e = {},
              f = Rz(a);
            f && (e[c] = f);
            var g = Xz(a);
            g && (e[d] = g);
            var h = Ni("FPLC", void 0, void 0, R.P);
            h.length && (e._fplc = h[0]);
            return e;
          },
          b[R.R],
          b[R.Oc],
          !!b[R.bc],
        );
    },
    hA = function (a) {
      if (!a.B(R.tb)) return {};
      var b = Qz(a),
        c = Uz(a);
      Sj(function () {
        var d;
        if (Mg("analytics_storage")) d = {};
        else {
          var e = {};
          d = ((e._up = "1"), (e[b] = dA ? a.D[R.na] : a.T[R.na]), (e[c] = $z(a)), e);
        }
        return d;
      }, 1);
      return !Mg("analytics_storage") && gA() ? bA(b, c) : {};
    },
    gA = function () {
      var a = ii(z.location, "host"),
        b = ii(li(I.referrer), "host");
      return a && b
        ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a)
          ? !0
          : !1
        : !1;
    },
    iA = function (a) {
      if (!a) return a;
      var b = String(a);
      b = Kj(b);
      return (b = Kj(b, "_ga"));
    };
  var jA = !1;
  var kA = function (a) {
    var b = !1;
    return b;
  };
  var lA = function () {
    var a = Sa(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Sa();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var nA = function (a) {
      var b;
      b = mA ? a.D[R.Sa] : a.B(R.Sa);
      return ji(li(b), "host", !0);
    },
    oA = !1;
  var mA = !1;
  var pA = !1;
  pA = !0;
  var qA = "" + Ia(),
    rA = !1,
    sA = void 0;
  var tA = function () {
    if (Ca(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var uA = function (a, b) {
      if (b.Ma()) {
        var c = tA();
        c && (a.us_privacy = c);
        var d = eo();
        d && (a.gdpr = d);
        var e = co();
        e && (a.gdpr_consent = e);
      }
    },
    wA = function (a, b) {
      if (zg()) {
        a.gcs = Ng();
        var c = vA ? b.metadata.is_consent_update : b.Fg;
        c && (a.gcu = "1");
        if (b.Ma()) {
          Ag() && (a.gcd = "G1" + Hg(xg));
          var d = b.B(R.fa);
          a.adr = void 0 !== d && !1 !== d ? "1" : "0";
          if (c) {
            var e;
            vA ? (e = b.metadata.consent_update_type) : (e = b.Bg);
            a.gcut = R.te[e || ""];
          }
        }
      }
    },
    xA = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) xA(a + "." + d, b[d], c);
      else c[a] = b;
      return c;
    },
    AA = function (a) {
      var b = dn(a.B(R.Da), "/g/collect");
      if (b) return b;
      var c = Cp(a, R.qb, a.B(R.qb));
      return c && !Cp(a, R.Mc, !1) && !1 !== a.B(R.Cc) && bq() && Mg(R.F) && Mg(R.P)
        ? yA()
        : zA();
    },
    BA = !1;
  var CA = !1;
  var DA = !1;
  var EA = !1;
  var vA = !1;
  var FA = "",
    GA = !1;
  var HA = {};
  HA[R.zi] = "tid";
  HA[R.na] = "cid";
  HA[R.rb] = "ul";
  HA[R.Le] = "_fid";
  HA[R.Jd] = "tt";
  HA[R.Nc] = "ir";
  HA[R.Se] = "sr";
  var IA = {};
  IA[R.Db] = "sid";
  IA[R.Tc] = "sct";
  IA[R.Sc] = "seg";
  IA[R.fb] = "dl";
  IA[R.Sa] = "dr";
  IA[R.Pc] = "dt";
  IA[R.ja] = "cu";
  IA[R.Ja] = "uid";
  var JA = {};
  var KA = {};
  KA[R.Dc] = "cc";
  KA[R.Ec] = "ci";
  KA[R.Fc] = "cm";
  KA[R.Gc] = "cn";
  KA[R.Hc] = "cs";
  KA[R.Ic] = "ck";
  var zA = function () {
      var a = "www";
      GA && FA && (a = FA);
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    yA = function () {
      var a;
      GA && FA && (a = FA);
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    LA = function (a, b, c) {
      function d(D, E) {
        if (void 0 !== E && !R.wg.hasOwnProperty(D)) {
          null === E && (E = "");
          var S = E;
          !0 === E && (S = "1");
          !1 === E && (S = "0");
          var K;
          if (HA[D]) (K = HA[D]), (e[K] = Te(S, 300));
          else if (IA[D]) (K = IA[D]), (g[K] = Te(S, 300));
          else if (JA[D]) (K = JA[D]), (f[K] = Te(S, 300));
          else if ("_" === D.charAt(0)) e[D] = Te(S, 300);
          else {
            var Q;
            (Q = v(D, E)) ||
              (KA[D]
                ? (Q = !0)
                : D !== R.cb
                ? (Q = !1)
                : ("object" !== typeof E && t(D, E), (Q = !0)));
            Q || t(D, E);
          }
        }
      }
      var e = {},
        f = {},
        g = {};
      e.v = "2";
      e.tid = a.sa;
      e.gtm = Fn();
      e._p = Mz();
      a.af && (e.sr = a.af);
      a.Ze && (e._z = a.Ze);
      c && (e.em = c);
      if (BA ? a.metadata.create_google_join : a.O) e._gaz = 1;
      wA(e, a);
      uA(e, a);
      a.Pg && !BA && (e.gtm_up = "1");
      var h = void 0;
      CA ? (h = a.D[R.Ak]) : (h = bb(a.H.getMergedValues(R.X, 1), "."));
      h && (e.gdid = h);
      f.en = Te(a.eventName, 40);
      var k = BA ? a.metadata.is_first_visit_conversion : a.Mg;
      BA ? a.metadata.is_first_visit && (f._fv = k ? 2 : 1) : a.hc && (f._fv = k ? 2 : 1);
      BA ? a.metadata.is_new_to_site && (f._nsi = 1) : a.Jg && (f._nsi = 1);
      var n = BA ? a.metadata.is_session_start_conversion : a.Qg;
      BA ? a.metadata.is_session_start && (f._ss = n ? 2 : 1) : a.s && (f._ss = n ? 2 : 1);
      BA ? a.metadata.is_conversion && (f._c = 1) : a.yb && (f._c = 1);
      0 < a.ab && !BA && (f._et = a.ab);
      if (a.metadata.is_ecommerce || a.$e) {
        var p = a.D[R.ba] || a.B(R.ba);
        if (Ea(p)) for (var q = 0; q < p.length && 200 > q; q++) f["pr" + (q + 1)] = Ye(p[q]);
      }
      var r = DA ? a.metadata.event_usage : a.Dg;
      r && (f._eu = r);
      var u = void 0;
      CA ? (u = a.D[R.zk]) : (u = bb(a.H.getMergedValues(R.X, 2), "."));
      u && (f.edid = u);
      for (
        var t = function (D, E) {
            D = Te(D, 40);
            var F = "ep." + D,
              S = "epn." + D;
            D = Da(E) ? S : F;
            var K = Da(E) ? F : S;
            f.hasOwnProperty(K) && delete f[K];
            f[D] = Te(E, 100);
          },
          v = function (D, E) {
            var F = D.split(".");
            if (D === R.Ea && "object" !== typeof E) return t(D, E), !0;
            if (F[0] === R.Ea) {
              if ((1 < F.length || "object" === typeof E) && a.Ma()) {
                var S = xA(D, E);
                La(S, function (K, Q) {
                  return void t(K, Q);
                });
              }
              return !0;
            }
            return !1;
          },
          x = 0;
        x < R.vg.length;
        ++x
      ) {
        var y = R.vg[x];
        d(y, a.B(y));
      }
      a.$e && d(R.ja, a.B(R.ja));
      La(a.Ag, d);
      La(a.T, d);
      La(a.D, d);
      if (!EA) {
        var w = a.H.getKeysFromFirstOfAnyScope([R.cb, R.Dc, R.Ec, R.Fc, R.Gc, R.Hc, R.Ic]),
          B = function (D, E) {
            if (void 0 !== E) {
              null === E && (E = "");
              var F = KA[D];
              F && (g[F] = Te(E, 300));
            }
          };
        nc(w[R.cb])
          ? La(w[R.cb], function (D, E) {
              B((R.cb + "_" + D).toLowerCase(), E);
            })
          : La(w, B);
      }
      var A;
      A = a.D[R.Ka];
      A = A || a.B(R.Ka) || {};
      (!1 !== a.B(R.aa) && cq()) || (A._npa = "1");
      La(A, function (D, E) {
        if (void 0 !== E && (null === E && (E = ""), b[D] !== E)) {
          if (D !== R.Ja || g.uid) {
            var F = (Da(E) ? "upn." : "up.") + Te(D, 24);
            f[F] = Te(E, 36);
          } else g.uid = Te(E, 36);
          b[D] = E;
        }
      });
      var C = !1;
      return $e.call(this, { va: e, Qb: g, T: f }, AA(a), a.Ma(), C) || this;
    };
  la(LA, $e);
  var MA = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    NA = function (a) {
      var b = a.search;
      return (
        a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
      );
    },
    OA = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    PA = function (a, b) {
      var c = new z.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = li(a),
        h = OA(g),
        k = NA(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = MA(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
            var r;
            a: {
              var u = da(p.substring(0, q).split("\n")),
                t = u.next().value,
                v = u.next().value;
              if (t.startsWith("event: message") && v.startsWith("data: "))
                try {
                  r = JSON.parse(v.substring(v.indexOf(":") + 1));
                  break a;
                } catch (S) {}
              r = void 0;
            }
            if (r) {
              var x = r.send_pixel || [];
              if (Array.isArray(x))
                for (var y = 0; y < x.length; y++) {
                  var w = x[y],
                    B = Gn("", 0);
                  if (1 === B) {
                    var A = Math.floor(2 * Math.random()) + 1,
                      C,
                      D = w,
                      E = A,
                      F = 0 < D.indexOf("?") ? "&" : "?";
                    C = "" + D + F + "gtmexpsb=" + E;
                    2 === A ? Wb(C) : Pb(C);
                  } else 2 === B ? Wb(w) : Pb(w);
                }
            }
            p = p.substring(q + 2);
            q = p.indexOf("\n\n");
          }
          e = p;
        }
      };
      c.open(d, k);
      c.send(b);
    };
  var SA = function (a, b, c, d) {
      var e = a + "?" + b;
      QA && (d = !(0 === e.indexOf(zA()) || 0 === e.indexOf(yA())));
      d && !Bz ? PA(e, c) : RA(a, b, c);
    },
    TA = function (a) {},
    QA = !1;
  var UA = !1;
  var VA = function () {
    this.C = 1;
    this.I = {};
    this.g = new af();
    this.o = -1;
  };
  VA.prototype.s = function (a, b) {
    var c = this,
      d;
    try {
      d = new LA(a, this.I, b);
    } catch (t) {
      a.abort();
    }
    var e = Cz(a);
    (e && this.g.C(d)) || this.flush();
    if (e && this.g.add(d)) {
      if (0 > this.o) {
        var f = z,
          g = f.setTimeout,
          h;
        a.Ma() ? (WA ? ((WA = !1), (h = XA)) : (h = YA)) : (h = 5e3);
        this.o = g.call(
          f,
          function () {
            return c.flush();
          },
          h,
        );
      }
    } else {
      var k = cf(d, this.C++);
      SA(d.g, k.Hf, k.body, d.C);
      var n = a.metadata.create_dc_join || a.We,
        p = a.metadata.create_google_join || a.O,
        q = !1 !== a.B(R.za),
        r = !1 !== a.B(R.aa),
        u = {
          ik: n,
          jk: p,
          wj: String(Cp(a, R.Fd, a.B(R.Fd))),
          df: q,
          Ui: r,
          Bj: Cp(a, R.Mc, !1),
        };
      ZA(d, u);
    }
  };
  VA.prototype.add = function (a) {
    (UA ? a.metadata.euid_mode_enabled : a.g) && !Bz ? this.O(a) : this.s(a);
  };
  VA.prototype.flush = function () {
    if (this.g.events.length) {
      var a = df(this.g, this.C++);
      SA(this.g.g, a.Hf, a.body, this.g.o);
      this.g = new af();
      0 <= this.o && (z.clearTimeout(this.o), (this.o = -1));
    }
  };
  VA.prototype.O = function (a) {
    var b = this,
      c = a.jh();
    c
      ? mh(c, function (d) {
          b.s(a, 1 === d.split("~").length ? void 0 : d);
        })
      : this.s(a);
  };
  var ZA = function (a, b) {
      function c(r) {
        p.push(r + "=" + encodeURIComponent("" + a.va[r]));
      }
      var d = b.ik,
        e = b.jk,
        f = b.wj,
        g = b.df,
        h = b.Ui,
        k = b.Bj,
        n = b.kk;
      if (d || e || n) {
        var p = [];
        c("tid");
        c("cid");
        c("gtm");
        p.push("aip=1");
        a.Qb.uid && p.push("uid=" + encodeURIComponent("" + a.Qb.uid));
        d &&
          (RA("https://stats.g.doubleclick.net/g/collect", "v=2&" + p.join("&")),
          Gg("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
        if (e) {
          p.push("z=" + Ia());
          if (!k) {
            var q =
              f && 0 === f.indexOf("google.") && "google.com" != f
                ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f)
                : void 0;
            q && Pb(q + p.join("&"));
          }
        }
        n && TA(a);
      }
    },
    RA = function (a, b, c) {
      var d = a + "?" + b;
      c ? Fb.sendBeacon && Fb.sendBeacon(d, c) : Wb(d);
    },
    XA = Gn("", 500),
    YA = Gn("", 5e3),
    WA = !0;
  var $A = window,
    aB = document,
    bB = function (a) {
      var b = $A._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === $A["ga-disable-" + a])) return !0;
      try {
        var c = $A.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = Hi("AMP_TOKEN", String(aB.cookie), !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e]) return !0;
      return aB.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var cB = {};
  var dB = function (a, b, c) {
      c || (c = function () {});
      var d = function (e) {
        void 0 !== e[b] && (e[b] = c(e[b]));
      };
      d(a.D);
      d(a.T);
      d(a.Ag);
      d(a.H.globalConfig);
    },
    eB = function () {
      var a = z.screen;
      return (a ? a.width : 0) + "x" + (a ? a.height : 0);
    },
    fB = function (a) {
      var b = Ni("_opt_expid", void 0, void 0, R.P)[0];
      if (b) {
        var c = decodeURIComponent(b).split("$");
        if (3 === c.length) return c[2];
      }
      if (void 0 !== T.ga4_referrer_override) return T.ga4_referrer_override;
      var d = Nh("gtm.gtagReferrer." + a.sa);
      return d ? "" + d : I.referrer;
    },
    gB = function () {
      var a = "",
        b = I.location;
      if (b) {
        var c = b.pathname || "";
        "/" != c.charAt(0) && (c = "/" + c);
        a = b.protocol + "//" + b.hostname + c + b.search;
      }
      return a;
    },
    iB = function (a, b) {
      var c = R.F;
      Mg(c) ||
        Pg(function () {
          hB[11]
            ? ((b.metadata.is_consent_update = !0), (b.metadata.consent_update_type = c))
            : ((b.Fg = !0), (b.Bg = c));
          a.Rg(b);
        }, c);
    },
    hB = {};

  cB.Ai = "";
  var jB = {},
    kB =
      ((jB[R.Dc] = !0),
      (jB[R.Ec] = !0),
      (jB[R.Fc] = !0),
      (jB[R.Gc] = !0),
      (jB[R.Hc] = !0),
      (jB[R.Ic] = !0),
      jB),
    lB = function (a, b) {
      this.ab = a;
      this.hc = b;
      this.O = new VA();
      this.g = void 0;
      this.C = new Kz();
      this.o = this.s = void 0;
      this.I = !1;
      this.yb = void 0;
    };
  l = lB.prototype;
  l.Vj = function (a, b, c) {
    var d = this,
      e = !1;
    if (c.eventModel[R.Eb]) {
      e = !0;
      if ("_" === a.charAt(0)) return;
      a !== R.Ha && a !== R.Pa && Gz(a) && kg(58);
      mB(c);
    }
    var f = new Az(this.ab, a, b, c, this.hc, e),
      g = [R.P],
      h = !1;
    h = f.Ma();
    (Cp(f, R.qb, f.B(R.qb)) || h) && g.push(R.F);
    Qg(function () {
      d.Wj(f);
    }, g);
  };
  l.Wj = function (a) {
    this.o = a;
    try {
      bB(a.sa) && (kg(28), a.abort());
      0 <= cB.Ai.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (kg(33), a.abort());
      var b = a.Lb();
      b && b.blacklisted && (kg(34), a.abort());
      var c = I.location.protocol;
      "http:" != c && "https:" != c && (kg(29), a.abort());
      Fb && "preview" == Fb.loadPurpose && (kg(30), a.abort());
      var d = T.grl;
      d || ((d = lA()), (T.grl = d));
      d() || (kg(35), a.abort());
      nB(a);
      this.Fi(a);
      this.C.sk(a);
      var g = this.xh,
        h;
      !a.B(R.tb) ||
        Mg(R.P) ||
        (dA ? a.H.getWithConfig(R.na) : 1 === a.I) ||
        (dA ? (a.D[R.zg] = !0) : (a.Pg = !0));
      a.eventName === R.Ha ? (a.B(R.tb) && sk(["aw", "dc"]), fA(a), (h = hA(a))) : (h = {});
      g.call(this, h);
      a.eventName == R.Ha &&
        (a.Qi && 0 < a.H.getEventModelKeys().length && (kg(68), 1 < T.configCount && kg(69)),
        a.B(R.Ca) || a.abort(),
        a.H.eventModel[R.X] &&
          ((a.H.containerConfig[R.X] = a.H.eventModel[R.X]),
          (a.H.eventModel[R.X] = void 0),
          hB[8] && (a.D[R.X] = void 0)),
        (a.eventName = R.Bc));
      var v = this.g,
        x = this.s,
        y = this.C,
        w = Xz(a);
      w || (w = x);
      var B = Na(a.B(R.Rc)),
        A;
      A = Na(a.B(R.Hd));
      var C;
      a: {
        if (w) {
          var D = w.split(".");
          if (!(5 > D.length || 7 < D.length)) {
            C = {
              sessionId: D[0],
              me: Number(D[1]),
              od: !!Number(D[2]),
              Bf: Number(D[3]),
              Mb: Number(D[4] || 0),
              Nb: "1" === D[5],
              $d: "0" !== D[6] ? D[6] : void 0,
            };
            break a;
          }
        }
        C = void 0;
      }
      Zz &&
        ((a.metadata.is_first_visit = !1),
        (a.metadata.is_session_start = !1),
        (a.metadata.join_timer_sec = 0));
      if (C && C.Mb) {
        var E = Math.max(0, C.Mb - Math.max(0, a.o - C.Bf));
        Zz ? (a.metadata.join_timer_sec = E) : (a.Mb = E);
      }
      var F = !1;
      C ||
        (Zz ? (a.metadata.is_first_visit = !0) : (a.hc = !0),
        (F = !0),
        (C = { sessionId: String(a.o), me: 1, od: !1, Bf: a.o, Nb: !1, $d: void 0 }));
      a.o > C.Bf + 60 * B &&
        ((F = !0), (C.sessionId = String(a.o)), C.me++, (C.od = !1), (C.$d = void 0));
      if (F) Zz ? (a.metadata.is_session_start = !0) : (a.s = !0), y.yj(a);
      else if (y.uj() > A || a.eventName == R.Bc) C.od = !0;
      if (Zz) {
        Bp(a, R.Db, C.sessionId);
        Bp(a, R.Tc, C.me);
        Bp(a, R.Sc, C.od ? 1 : 0);
      } else {
        a.Ta(R.Db, C.sessionId);
        a.Ta(R.Tc, C.me);
        a.Ta(R.Sc, C.od ? 1 : 0);
      }
      var W = a.B(R.na),
        V;
      Oz ? ((a.metadata.is_new_to_site = !1), (V = W ? 1 : 8)) : (V = a.I);
      W || ((W = Rz(a)), (V = 3));
      W || ((W = v), (V = 5));
      if (!W) {
        var za = Mg(R.P),
          Fa = Lz();
        W = !Fa.from_cookie || za ? Fa.vid : void 0;
        V = 6;
      }
      W
        ? (W = "" + W)
        : ((W = $i()),
          (V = 7),
          Oz ? (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0) : (a.hc = a.Jg = !0));
      Pz(a, W, V);
      pB(a);
      a: {
        a.Ta(R.fb, gB());
        var Aa = fB(a);
        Aa && a.Ta(R.Sa, Aa);
        a.Ta(R.Pc, I.title);
        a.Ta(R.rb, (Fb.language || "").toLowerCase());
        a.af = eB();
      }
      hB[1] && ((a.metadata.create_dc_join = !1), (a.metadata.create_google_join = !1));
      if (!1 !== a.B(R.Cc) && bq() && Mg(R.F)) {
        var Ha = Cp(a, R.qb, a.B(R.qb));
        if ((hB[1] ? a.metadata.is_session_start : a.s) || a.B(R.Me)) {
          hB[1] ? (a.metadata.create_dc_join = !!Ha) : (a.We = !!Ha);
        }
        var Ua;
        hB[1] ? (Ua = a.metadata.join_timer_sec) : (Ua = a.Mb);
        Ha &&
          0 === (Ua || 0) &&
          (hB[1]
            ? ((a.metadata.join_timer_sec = 60), (a.metadata.create_google_join = !0))
            : ((a.Mb = 60), (a.O = !0)));
      }
      qB(a);
      var Uc = R.xg.hasOwnProperty(a.eventName);
      hB[2] ? Uc && ((a.metadata.is_ecommerce = !0), Bp(a, R.ba), Bp(a, R.ja)) : (a.$e = Uc);
      hB[6] && Bp(a, R.Jd);
      for (var Vc = a.B(R.Oe) || [], td = 0; td < Vc.length; td++) {
        var Xk = Vc[td];
        if (Xk.rule_result) {
          hB[6] ? Bp(a, R.Jd, Xk.traffic_type) : a.Ta(R.Jd, Xk.traffic_type);
          Ez(3);
          break;
        }
      }
      if (a.B(R.Da)) {
        var wr = aA(a) || {},
          xr =
            (Uj(wr[R.ac], !!wr[R.R]) ? Lj(!0)._fplc : void 0) ||
            (0 < Ni("FPLC", void 0, void 0, R.P).length ? void 0 : "0");
        jA ? (a.D._fplc = xr) : (a.T._fplc = xr);
      }
      if (void 0 !== a.B(R.Nc)) oA && Bp(a, R.Nc);
      else {
        var yr = a.B(R.Gd),
          Yk,
          ph;
        a: {
          if (eA) {
            var Zk = aA(a) || {};
            if (Zk && Zk[R.R])
              for (var zr = nA(a), qh = Zk[R.R], pf = 0; pf < qh.length; pf++)
                if (qh[pf] instanceof RegExp) {
                  if (qh[pf].test(zr)) {
                    ph = !0;
                    break a;
                  }
                } else if (0 <= zr.indexOf(qh[pf])) {
                  ph = !0;
                  break a;
                }
          }
          ph = !1;
        }
        var rh;
        if (!(rh = ph))
          if (pA) rh = !1;
          else {
            var vB = nA(a),
              sh;
            var $k = String(a.B(R.oa));
            if ("none" !== $k)
              if ("auto" !== $k) sh = $k;
              else {
                if (!rA) {
                  for (var Ar = String(a.B(R.nb)), qf = Ti(), fe = 0; fe < qf.length; fe++)
                    if ("none" !== qf[fe]) {
                      var Br = String(a.B(R.Ia)) + "_ga_autodomain";
                      if (0 === Wi(Br, qA, { jb: R.P, domain: qf[fe], path: Ar })) {
                        Wi(Br, void 0, { jb: R.P, domain: qf[fe], path: Ar });
                        sA = qf[fe];
                        break;
                      }
                    }
                  rA = !0;
                }
                sh = sA;
              }
            else sh = void 0;
            var Cr = sh;
            rh = Cr ? 0 <= vB.indexOf(Cr) : !1;
          }
        if (!(Yk = rh)) {
          var th;
          if ((th = yr))
            a: {
              for (var Dr = yr.include_conditions || [], wB = nA(a), al = 0; al < Dr.length; al++)
                if (Dr[al].test(wB)) {
                  th = !0;
                  break a;
                }
              th = !1;
            }
          Yk = th;
        }
        Yk && (oA ? (a.D[R.Nc] = "1") : a.Ta(R.Nc, 1), Ez(4));
      }
      if (a.Ma() && zg()) {
      }
      if (a.eventName == R.Pa) {
        var Er = a.B(R.eb),
          xB = a.B(R.pb),
          Fr = void 0;
        Fr = a.D[Er];
        xB(Fr || a.B(Er));
        a.abort();
      }
      if (a.T[R.kc]) delete a.T[R.kc];
      else {
        var bl = a.B(R.Ge);
        if (bl) {
          var Zb = oc(a.T);
          oc(a.D, Zb);
          for (var Gr = bl.edit_rules || [], Hr = !1, cl = 0; cl < Gr.length; cl++) {
            var uh;
            a: {
              var ud = a,
                vd = Gr[cl];
              if (Ww(ud.eventName, Zb, vd.event_name_predicate, vd.conditions || [])) {
                if (vd.new_event_name) {
                  var Ir = m(vd.new_event_name)
                    ? String(vd.new_event_name)
                    : Tw(ud.eventName, Zb, vd.new_event_name);
                  if (Gz(Ir)) {
                    uh = !1;
                    break a;
                  }
                  ud.eventName = String(Ir);
                }
                Hz(ud.eventName, Zb, vd);
                var Jr = (Zb[R.kc] = !0);
                Ez(2);
                if (Jr) {
                  var Kr = jg();
                  Kr && (Zb[R.Uc] = Kr);
                  cr(ud.eventName, Zb, ud.sa);
                  ud.abort();
                }
                uh = !0;
              } else uh = !1;
            }
            uh && (Hr = !0);
          }
          for (var Lr = bl.synthesis_rules || [], dl = 0; dl < Lr.length; dl++) {
            var Mr = a,
              rf = Lr[dl];
            if (Ww(Mr.eventName, Zb, rf.event_name_predicate, rf.conditions || [])) {
              var el = rf.new_event_name;
              if (!Gz(el)) {
                var fl = rf.merge_source_event_params ? oc(Zb) : {};
                fl[R.kc] = !0;
                Hz(el, fl, rf);
                cr(el, fl, Mr.sa);
                Ez(1);
              }
            }
          }
        }
      }
      Fp(a);
      var gl = a.T[R.Uc];
      if (Ea(gl)) for (var hl = 0; hl < gl.length; hl++) Ez(gl[hl]);
      var il = ig("GA4_EVENT");
      il && (Dz ? (a.metadata.event_usage = il) : (a.Dg = il));
      rB(a);
      var zB = this.xh,
        Or = this.g,
        jl;
      var kl = $z(a);
      kl ? (Wz(kl, a) || (kg(25), a.abort()), (jl = kl)) : (jl = void 0);
      var AB = jl,
        vh;
      var zc;
      zc = Oz ? a.D[R.na] : a.T[R.na];
      Or && zc === Or
        ? (vh = zc)
        : zc
        ? ((zc = "" + zc), Tz(zc, a) || (kg(31), a.abort()), Nz(zc, Mg(R.P)), (vh = zc))
        : (kg(32), a.abort(), (vh = ""));
      zB.call(this, { clientId: vh, Ch: AB });
      this.qk();
      if (a.Ma()) {
        var BB = hB[1] ? a.metadata.is_conversion : a.yb;
        ("page_view" === a.eventName || BB) && iB(this, a);
      }
      this.C.Mf();
      this.yb = sB(a, this.yb);
      this.Rg(a);
      a.H.onSuccess();
    } catch (HB) {
      a.H.onFailure();
    }
    delete gg.GA4_EVENT;
  };
  l.Rg = function (a) {
    this.O.add(a);
  };
  l.xh = function (a) {
    var b = a.clientId,
      c = a.Ch;
    b && c && ((this.g = b), (this.s = c));
  };
  l.flush = function () {
    this.O.flush();
  };
  l.qk = function () {
    var a = this;
    if (!this.I) {
      var b = Mg(R.P);
      Og([R.P], function () {
        var c = Mg(R.P);
        if (b ^ c && a.o && a.s && a.g) {
          var d = a.g;
          if (c) {
            var e = !0;
            e = !1;
            var f = Rz(a.o);
            if (f) {
              a.g = f;
              var g = Xz(a.o);
              e || g ? (a.s = g) : Wz(a.s, a.o);
            } else Tz(a.g, a.o), Nz(a.g, !0), Wz(a.s, a.o);
            var h = {};
            h[R.Me] = d;
            br(R.xe, h, a.ab);
          } else {
            a.s = void 0;
            a.g = void 0;
            z.gaGlobal = {};
          }
          b = c;
        }
      });
      this.I = !0;
    }
  };
  l.Fi = function (a) {
    a.eventName !== R.Pa && this.C.Ei(a);
  };
  var oB = function (a) {
      if (a.B(R.qg)) (a.g = !1), (a.metadata.euid_mode_enabled = !1);
      else {
        var b = function (c) {
          return !!c && ("auto_detect" === c.mode || "selectors" === c.mode || "code" === c.mode);
        };
        hB[1]
          ? (a.metadata.euid_mode_enabled = b(a.getRemoteConfig(R.fc)))
          : (a.g = b(a.getRemoteConfig(R.fc)));
      }
    },
    nB = function (a) {},
    pB = function (a) {},
    qB = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      hB[1] ? (a.metadata.is_conversion = b(a.Lb())) : (a.yb = b(a.Lb()));
      if (hB[1] ? a.metadata.is_first_visit : a.hc)
        hB[1]
          ? (a.metadata.is_first_visit_conversion = b(a.Lb("first_visit")))
          : (a.Mg = b(a.Lb("first_visit")));
      if (hB[1] ? a.metadata.is_session_start : a.s)
        hB[1]
          ? (a.metadata.is_session_start_conversion = b(a.Lb("session_start")))
          : (a.Qg = b(a.Lb("session_start")));
    },
    rB = function (a) {
      var b = Object.keys(hB);
      if (b.length) {
        b.forEach(function (d) {
          hB[d] && hg("CCD", Number(d));
        });
        var c = ig("CCD");
        c && (a.Ze = "ccd." + c);
      }
    },
    sB = function (a, b) {
      var c = void 0;
      return c;
    };
  function mB(a) {
    delete a.eventModel[R.Eb];
    tB(a.eventModel);
  }
  var tB = function (a) {
    La(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[R.Ka] || {};
    La(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var uB = function (a) {
      if ("prerender" == I.visibilityState) return !1;
      a();
      return !0;
    },
    yB = function (a) {
      if (!uB(a)) {
        var b = !1,
          c = function () {
            !b && uB(a) && ((b = !0), Rb(I, "visibilitychange", c), kg(55));
          };
        Qb(I, "visibilitychange", c);
        kg(54);
      }
    };
  var CB = function (a, b, c) {
      br(b, c, a);
    },
    DB = function (a, b, c) {
      br(b, c, a, !0);
    },
    FB = function (a, b) {
      var c = new lB(a, b);
      yB(function () {
        EB(a, c);
      });
    };
  function EB(a, b) {
    var c = b.C;
    ar(a, function (d, e, f, g) {
      b.Vj(e, f, g);
    });
    c.bk(function () {
      Zq().flush();
      1e3 <= c.ce() && Fb.sendBeacon && CB(a, R.xe, {});
      Bz = !0;
      b.flush();
      c.zh(function () {
        Bz = !1;
        c.zh(void 0);
      });
    });
  }
  var Z = { h: {} };

  (Z.h.read_container_data = ["google"]),
    (function () {
      (function (a) {
        Z.__read_container_data = a;
        Z.__read_container_data.m = "read_container_data";
        Z.__read_container_data.isVendorTemplate = !0;
        Z.__read_container_data.priorityOverride = 0;
      })(function () {
        return {
          assert: function () {},
          U: function () {
            return {};
          },
        };
      });
    })();
  (Z.h.c = ["google"]),
    (function () {
      (function (a) {
        Z.__c = a;
        Z.__c.m = "c";
        Z.__c.isVendorTemplate = !0;
        Z.__c.priorityOverride = 0;
      })(function (a) {
        cu(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (Z.h.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.m = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();

  (Z.h.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.m = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Vt(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        cu(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.h.gct = ["google"]),
    (function () {
      function a(e) {
        for (var f = [], g = 0; g < e.length; g++)
          try {
            f.push(new RegExp(e[g]));
          } catch (h) {}
        return f;
      }
      function b(e) {
        return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
      }
      function c(e) {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = e[g].matchValue,
            k;
          switch (e[g].matchType) {
            case "BEGINS_WITH":
              k = "^" + b(h);
              break;
            case "ENDS_WITH":
              k = b(h) + "$";
              break;
            case "EQUALS":
              k = "^" + b(h) + "$";
              break;
            case "REGEX":
              k = h;
              break;
            default:
              k = b(h);
          }
          f.push(k);
        }
        return f;
      }
      var d = !1;
      (function (e) {
        Z.__gct = e;
        Z.__gct.m = "gct";
        Z.__gct.isVendorTemplate = !0;
        Z.__gct.priorityOverride = 0;
      })(function (e) {
        var f = {},
          g = e.vtp_sessionDuration;
        0 < g && (f[R.Rc] = g);
        f[R.Cd] = e.vtp_eventSettings;
        f[R.Ge] = e.vtp_dynamicEventSettings;
        f[R.qb] = 1 === e.vtp_googleSignals;
        f[R.Fd] = e.vtp_foreignTld;
        f[R.Mc] = 1 === e.vtp_restrictDomain;
        f[R.Oe] = e.vtp_internalTrafficResults;
        var h = R.qa,
          k = e.vtp_linker;
        k && k[R.R] && (k[R.R] = a(k[R.R]));
        f[h] = k;
        var n = R.Gd,
          p = e.vtp_referralExclusionDefinition;
        p && p.include_conditions && (p.include_conditions = a(p.include_conditions));
        f[n] = p;
        var q = e.vtp_trackingId,
          r = fr(q),
          u = r.referral_exclusion_conditions;
        u &&
          (u.length && "object" === typeof u[0] && (u = c(u)),
          (f[R.Gd] = { include_conditions: a(u) }));
        var t = r.cross_domain_conditions;
        if (t) {
          t.length && "object" === typeof t[0] && (t = c(t));
          var v = {};
          f[R.qa] = ((v[R.R] = a(t)), (v[R.bc] = !0), (v[R.ac] = !0), (v[R.Oc] = "query"), v);
        }
        FB(q, f);
        if (d) {
          var x = rr[q] || [];
          Zq(!0).notifyContainerLoaded(q, x);
        }
        J(e.vtp_gtmOnSuccess);
      });
    })();

  (Z.h.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.m = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable
          ? DB
          : CB)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
      });
    })();

  var GB = {};
  GB.dataLayer = Oh;
  GB.callback = function (a) {
    Fh.hasOwnProperty(a) && Ca(Fh[a]) && Fh[a]();
    delete Fh[a];
  };
  GB.bootstrap = 0;
  GB._spx = !1;
  (function (a) {
    if (!z["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (I.referrer) {
        var c = li(I.referrer);
        b = "cct.google" === ii(c, "host");
      }
      if (!b) {
        var d = Ni("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b && ((z["__TAGGY_INSTALLED"] = !0), Mb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          u = "GTM";
        (r = "OGT"), (u = "GTAG");
        var t = z["google.tagmanager.debugui2.queue"];
        t ||
          ((t = []),
          (z["google.tagmanager.debugui2.queue"] = t),
          Mb(
            "https://" +
              oh.Ac +
              "/debug/bootstrap?id=" +
              Ie.J +
              "&src=" +
              u +
              "&cond=" +
              q +
              "&gtm=" +
              Fn(),
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: Gb, containerProduct: r, debug: !1, id: Ie.J },
        };
        v.data.resume = function () {
          a();
        };
        oh.Sh && (v.data.initialPublish = !0);
        t.push(v);
      },
      g = void 0,
      h = ji(z.location, "query", !1, void 0, "gtm_debug");
    mt(h) && (g = 2);
    if (!g && I.referrer) {
      var k = li(I.referrer);
      "tagassistant.google.com" === ii(k, "host") && (g = 3);
    }
    if (!g) {
      var n = Ni("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = I.documentElement.getAttribute("data-tag-assistant-present");
      mt(p) && (g = 5);
    }
    g && Gb ? f(g) : a();
  })(function () {
    var a = !1;
    a && Jm("INIT");
    ng().o();
    bo();
    Vj.enable_gbraid_cookie_write = !0;
    var b = !!T[Ie.J];
    if (b) {
      var c = T.zones;
      c && c.unregisterChild(Ie.J);
    } else {
      for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++)
        ie.push(g[h]);
      for (var k = f.tags || [], n = 0; n < k.length; n++) le.push(k[n]);
      for (var p = f.predicates || [], q = 0; q < p.length; q++) ke.push(p[q]);
      for (var r = f.rules || [], u = 0; u < r.length; u++) {
        for (var t = r[u], v = {}, x = 0; x < t.length; x++)
          v[t[x][0]] = Array.prototype.slice.call(t[x], 1);
        je.push(v);
      }
      ne = Z;
      oe = Fu;
      Me = new Le();
      var y = data.sandboxed_scripts,
        w = data.security_groups,
        B = data.runtime || [],
        A = data.runtime_lines;
      fy = new Id();
      iy();
      he = gy();
      var C = fy,
        D = cy();
      kb(C.g, "require", D);
      for (var E = 0; E < B.length; E++) {
        var F = B[E];
        if (!Ea(F) || 3 > F.length) {
          if (0 === F.length) continue;
          break;
        }
        A && A[E] && A[E].length && xe(F, A[E]);
        fy.execute(F);
      }
      if (void 0 !== y)
        for (var S = ["sandboxedScripts"], K = 0; K < y.length; K++) {
          var Q = y[K].replace(/^_*/, "");
          Gh[Q] = S;
        }
      jy(w);
      T[Ie.J] = GB;
      Wa(Gh, Z.h);
      qe = Ee;
      lt();
      um = !1;
      vm = 0;
      if (("interactive" == I.readyState && !I.createEventObject) || "complete" == I.readyState)
        xm();
      else {
        Qb(I, "DOMContentLoaded", xm);
        Qb(I, "readystatechange", xm);
        if (I.createEventObject && I.documentElement.doScroll) {
          var P = !0;
          try {
            P = !z.frameElement;
          } catch (V) {}
          P && ym();
        }
        Qb(z, "load", xm);
      }
      Es = !1;
      "complete" === I.readyState ? Gs() : Qb(z, "load", Gs);
      Wl && z.setInterval(Pl, 864e5);
      Eh = Sa();
      GB.bootstrap = Eh;
      if (a) {
        var W = Km("INIT");
      }
    }
  });
})();

window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-SQJCGKCC2K");
gtag("event", document.title, {});
console.log(document.title);
