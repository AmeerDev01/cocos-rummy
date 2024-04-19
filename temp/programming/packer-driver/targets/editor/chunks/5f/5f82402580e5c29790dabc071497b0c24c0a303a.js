System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = createReducer;

        var _batch = _interopRequireDefault(require("./batch"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }

        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };

          return _extends.apply(this, arguments);
        }

        function normalizeType(typeOrActionCreator) {
          if (typeOrActionCreator && typeOrActionCreator.getType) {
            return typeOrActionCreator.toString();
          }

          return typeOrActionCreator;
        }

        function createReducer() {
          var handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var defaultState = arguments.length > 1 ? arguments[1] : undefined;
          var opts = {
            payload: true,
            fallback: null
          };

          var reducer = _extends(reduce, {
            has: has,
            on: on,
            off: off,
            options: options
          });

          function has(typeOrActionCreator) {
            return !!handlers[normalizeType(typeOrActionCreator)];
          }

          function on(typeOrActionCreator, handler) {
            if (Array.isArray(typeOrActionCreator)) {
              typeOrActionCreator.forEach(function (action) {
                on(action, handler);
              });
            } else {
              handlers[normalizeType(typeOrActionCreator)] = handler;
            }

            return reducer;
          }

          function off(typeOrActionCreator) {
            if (Array.isArray(typeOrActionCreator)) {
              typeOrActionCreator.forEach(off);
            } else {
              delete handlers[normalizeType(typeOrActionCreator)];
            }

            return reducer;
          }

          function options(newOpts) {
            Object.keys(newOpts).forEach(function (name) {
              return opts[name] = newOpts[name];
            });
            return reducer;
          }

          if (typeof handlers === 'function') {
            var factory = handlers;
            handlers = {};
            factory(on, off);
          }

          if (!has(_batch["default"])) {
            on(_batch["default"], function (state, payload) {
              if (opts.payload) {
                return payload.reduce(reduce, state);
              } else {
                return payload.payload.reduce(reduce, state);
              }
            });
          }

          function reduce() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
            var action = arguments.length > 1 ? arguments[1] : undefined;

            if (!action || typeof action.type !== 'string') {
              return state;
            }

            if (action.type.startsWith('@@redux/')) {
              return state;
            }

            var handler = handlers[action.type] || opts.fallback;

            if (handler) {
              if (opts.payload) {
                return handler(state, action.payload, action.meta);
              } else {
                return handler(state, action);
              }
            }

            return state;
          }

          ;
          return reducer;
        }

        ; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        './batch': _req
      }));
    }
  };
});
//# sourceMappingURL=5f82402580e5c29790dabc071497b0c24c0a303a.js.map