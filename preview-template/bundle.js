System.register([], function(_export, _context) {
    return {
        execute: function() {
            System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], (function(t) {
                "use strict";
                return {
                    execute: function() {
                        function e(t, e, r, n, o, i, a) {
                            try {
                                var c = t[i](a),
                                    u = c.value
                            } catch (t) { return void r(t) } c.done ? e(u) : Promise.resolve(u).then(n, o)
                        }

                        function r(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function n(e, r) { return (n = t("setPrototypeOf", Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) { return t.__proto__ = e, t }))(e, r) }

                        function o(t, e) { if (t) { if ("string" == typeof t) return i(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, e) : void 0 } }

                        function i(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n
                        }
                        t({
                            applyDecoratedDescriptor: function(t, e, r, n, o) {
                                var i = {};
                                Object.keys(n).forEach((function(t) { i[t] = n[t] })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0);
                                i = r.slice().reverse().reduce((function(r, n) { return n(t, e, r) || r }), i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0);
                                void 0 === i.initializer && (Object.defineProperty(t, e, i), i = null);
                                return i
                            },
                            arrayLikeToArray: i,
                            assertThisInitialized: function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t },
                            asyncToGenerator: function(t) {
                                return function() {
                                    var r = this,
                                        n = arguments;
                                    return new Promise((function(o, i) {
                                        var a = t.apply(r, n);

                                        function c(t) { e(a, o, i, c, u, "next", t) }

                                        function u(t) { e(a, o, i, c, u, "throw", t) } c(void 0)
                                    }))
                                }
                            },
                            createClass: function(t, e, n) {
                                e && r(t.prototype, e);
                                n && r(t, n);
                                return Object.defineProperty(t, "prototype", { writable: !1 }), t
                            },
                            createForOfIteratorHelperLoose: function(t, e) { var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (r) return (r = r.call(t)).next.bind(r); if (Array.isArray(t) || (r = o(t)) || e && t && "number" == typeof t.length) { r && (t = r); var n = 0; return function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") },
                            inheritsLoose: function(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n(t, e) },
                            initializerDefineProperty: function(t, e, r, n) {
                                if (!r) return;
                                Object.defineProperty(t, e, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(n) : void 0 })
                            },
                            regeneratorRuntime: function() {
                                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                                t("regeneratorRuntime", (function() { return e }));
                                var e = {},
                                    r = Object.prototype,
                                    n = r.hasOwnProperty,
                                    o = "function" == typeof Symbol ? Symbol : {},
                                    i = o.iterator || "@@iterator",
                                    a = o.asyncIterator || "@@asyncIterator",
                                    c = o.toStringTag || "@@toStringTag";

                                function u(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e] }
                                try { u({}, "") } catch (t) { u = function(t, e, r) { return t[e] = r } }

                                function l(t, e, r, n) {
                                    var o = e && e.prototype instanceof h ? e : h,
                                        i = Object.create(o.prototype),
                                        a = new E(n || []);
                                    return i._invoke = function(t, e, r) {
                                        var n = "suspendedStart";
                                        return function(o, i) {
                                            if ("executing" === n) throw new Error("Generator is already running");
                                            if ("completed" === n) { if ("throw" === o) throw i; return _() }
                                            for (r.method = o, r.arg = i;;) {
                                                var a = r.delegate;
                                                if (a) { var c = L(a, r); if (c) { if (c === s) continue; return c } }
                                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                                else if ("throw" === r.method) {
                                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                                    r.dispatchException(r.arg)
                                                } else "return" === r.method && r.abrupt("return", r.arg);
                                                n = "executing";
                                                var u = f(t, e, r);
                                                if ("normal" === u.type) { if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue; return { value: u.arg, done: r.done } }
                                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                                            }
                                        }
                                    }(t, r, a), i
                                }

                                function f(t, e, r) { try { return { type: "normal", arg: t.call(e, r) } } catch (t) { return { type: "throw", arg: t } } } e.wrap = l;
                                var s = {};

                                function h() {}

                                function p() {}

                                function y() {}
                                var v = {};
                                u(v, i, (function() { return this }));
                                var d = Object.getPrototypeOf,
                                    g = d && d(d(j([])));
                                g && g !== r && n.call(g, i) && (v = g);
                                var m = y.prototype = h.prototype = Object.create(v);

                                function b(t) {
                                    ["next", "throw", "return"].forEach((function(e) { u(t, e, (function(t) { return this._invoke(e, t) })) }))
                                }

                                function w(t, e) {
                                    function r(o, i, a, c) {
                                        var u = f(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var l = u.arg,
                                                s = l.value;
                                            return s && "object" == typeof s && n.call(s, "__await") ? e.resolve(s.__await).then((function(t) { r("next", t, a, c) }), (function(t) { r("throw", t, a, c) })) : e.resolve(s).then((function(t) { l.value = t, a(l) }), (function(t) { return r("throw", t, a, c) }))
                                        }
                                        c(u.arg)
                                    }
                                    var o;
                                    this._invoke = function(t, n) {
                                        function i() { return new e((function(e, o) { r(t, n, e, o) })) }
                                        return o = o ? o.then(i, i) : i()
                                    }
                                }

                                function L(t, e) {
                                    var r = t.iterator[e.method];
                                    if (void 0 === r) {
                                        if (e.delegate = null, "throw" === e.method) {
                                            if (t.iterator.return && (e.method = "return", e.arg = void 0, L(t, e), "throw" === e.method)) return s;
                                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                                        }
                                        return s
                                    }
                                    var n = f(r, t.iterator, e.arg);
                                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                                    var o = n.arg;
                                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                                }

                                function x(t) {
                                    var e = { tryLoc: t[0] };
                                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                                }

                                function O(t) {
                                    var e = t.completion || {};
                                    e.type = "normal", delete e.arg, t.completion = e
                                }

                                function E(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(x, this), this.reset(!0) }

                                function j(t) {
                                    if (t) {
                                        var e = t[i];
                                        if (e) return e.call(t);
                                        if ("function" == typeof t.next) return t;
                                        if (!isNaN(t.length)) {
                                            var r = -1,
                                                o = function e() {
                                                    for (; ++r < t.length;)
                                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                                    return e.value = void 0, e.done = !0, e
                                                };
                                            return o.next = o
                                        }
                                    }
                                    return { next: _ }
                                }

                                function _() { return { value: void 0, done: !0 } }
                                return p.prototype = y, u(m, "constructor", y), u(y, "constructor", p), p.displayName = u(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) { var e = "function" == typeof t && t.constructor; return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name)) }, e.mark = function(t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(m), t }, e.awrap = function(t) { return { __await: t } }, b(w.prototype), u(w.prototype, a, (function() { return this })), e.AsyncIterator = w, e.async = function(t, r, n, o, i) { void 0 === i && (i = Promise); var a = new w(l(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then((function(t) { return t.done ? t.value : a.next() })) }, b(m), u(m, c, "Generator"), u(m, i, (function() { return this })), u(m, "toString", (function() { return "[object Generator]" })), e.keys = function(t) {
                                    var e = [];
                                    for (var r in t) e.push(r);
                                    return e.reverse(),
                                        function r() { for (; e.length;) { var n = e.pop(); if (n in t) return r.value = n, r.done = !1, r } return r.done = !0, r }
                                }, e.values = j, E.prototype = {
                                    constructor: E,
                                    reset: function(t) {
                                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                                    },
                                    stop: function() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval },
                                    dispatchException: function(t) {
                                        if (this.done) throw t;
                                        var e = this;

                                        function r(r, n) { return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n }
                                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                            var i = this.tryEntries[o],
                                                a = i.completion;
                                            if ("root" === i.tryLoc) return r("end");
                                            if (i.tryLoc <= this.prev) {
                                                var c = n.call(i, "catchLoc"),
                                                    u = n.call(i, "finallyLoc");
                                                if (c && u) { if (this.prev < i.catchLoc) return r(i.catchLoc, !0); if (this.prev < i.finallyLoc) return r(i.finallyLoc) } else if (c) { if (this.prev < i.catchLoc) return r(i.catchLoc, !0) } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return r(i.finallyLoc) }
                                            }
                                        }
                                    },
                                    abrupt: function(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a) },
                                    complete: function(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s },
                                    finish: function(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s } },
                                    catch: function(t) {
                                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                            var r = this.tryEntries[e];
                                            if (r.tryLoc === t) {
                                                var n = r.completion;
                                                if ("throw" === n.type) {
                                                    var o = n.arg;
                                                    O(r)
                                                }
                                                return o
                                            }
                                        }
                                        throw new Error("illegal catch attempt")
                                    },
                                    delegateYield: function(t, e, r) { return this.delegate = { iterator: j(t), resultName: e, nextLoc: r }, "next" === this.method && (this.arg = void 0), s }
                                }, e
                            },
                            setPrototypeOf: n,
                            unsupportedIterableToArray: o
                        })
                    }
                }
            }));

        }
    };
});