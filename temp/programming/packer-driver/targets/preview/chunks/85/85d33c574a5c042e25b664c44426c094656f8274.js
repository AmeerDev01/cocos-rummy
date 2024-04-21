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
        exports["default"] = disbatch;

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

        function disbatch(store) {
          for (var _len = arguments.length, actions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            actions[_key - 1] = arguments[_key];
          }

          if (actions && actions.length > 0) {
            if (!store || typeof store !== 'function' && typeof store.dispatch !== 'function') {
              throw new TypeError('disbatch must take either a valid Redux store or a dispatch function as first parameter');
            }

            if (typeof store.dispatch === 'function') {
              store = store.dispatch;
            } // store is actually the dispatch function here


            return store(_batch["default"].apply(void 0, actions));
          } else {
            if (!store || typeof store.dispatch !== 'function') {
              throw new TypeError('disbatch must take a valid Redux store with a dispatch function as first parameter');
            }

            return _extends(store, {
              disbatch: disbatch.bind(undefined, store)
            });
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        './batch': _req
      }));
    }
  };
});
//# sourceMappingURL=85d33c574a5c042e25b664c44426c094656f8274.js.map