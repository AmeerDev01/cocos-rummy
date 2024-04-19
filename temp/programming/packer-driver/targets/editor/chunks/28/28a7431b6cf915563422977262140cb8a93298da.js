System.register(["__unresolved_0"], function (_export2, _context2) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export2("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export2("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        System.register([], function (_export, _context) {
          return {
            execute: function () {
              System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js", [], function (e) {
                "use strict";

                return {
                  execute: function () {
                    function i(t, r) {
                      return (i = e("setPrototypeOf", Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, i) {
                        return e.__proto__ = i, e;
                      }))(t, r);
                    }

                    e({
                      applyDecoratedDescriptor: function (e, i, t, r, n) {
                        var o = {};
                        Object.keys(r).forEach(function (e) {
                          o[e] = r[e];
                        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0);
                        o = t.slice().reverse().reduce(function (t, r) {
                          return r(e, i, t) || t;
                        }, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0);
                        void 0 === o.initializer && (Object.defineProperty(e, i, o), o = null);
                        return o;
                      },
                      assertThisInitialized: function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                      },
                      inheritsLoose: function (e, t) {
                        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, i(e, t);
                      },
                      initializerDefineProperty: function (e, i, t, r) {
                        if (!t) return;
                        Object.defineProperty(e, i, {
                          enumerable: t.enumerable,
                          configurable: t.configurable,
                          writable: t.writable,
                          value: t.initializer ? t.initializer.call(r) : void 0
                        });
                      },
                      setPrototypeOf: i
                    });
                  }
                };
              });
            }
          };
        }); // #endregion ORIGINAL CODE

        _export2("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=28a7431b6cf915563422977262140cb8a93298da.js.map