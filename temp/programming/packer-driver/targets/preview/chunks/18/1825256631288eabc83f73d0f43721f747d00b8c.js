System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _createAction0, _createReducer0, _assignAll0, _bindAll0, _batch0, _disbatch0, _loggers0, _asError0, _types0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req5 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req6 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req7 = _unresolved_10.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "createAction", {
          enumerable: true,
          get: function get() {
            return _createAction["default"];
          }
        });
        Object.defineProperty(exports, "createReducer", {
          enumerable: true,
          get: function get() {
            return _createReducer["default"];
          }
        });
        Object.defineProperty(exports, "assignAll", {
          enumerable: true,
          get: function get() {
            return _assignAll["default"];
          }
        });
        Object.defineProperty(exports, "bindAll", {
          enumerable: true,
          get: function get() {
            return _bindAll["default"];
          }
        });
        Object.defineProperty(exports, "batch", {
          enumerable: true,
          get: function get() {
            return _batch["default"];
          }
        });
        Object.defineProperty(exports, "disbatch", {
          enumerable: true,
          get: function get() {
            return _disbatch["default"];
          }
        });
        Object.defineProperty(exports, "loggers", {
          enumerable: true,
          get: function get() {
            return _loggers["default"];
          }
        });
        Object.defineProperty(exports, "asError", {
          enumerable: true,
          get: function get() {
            return _asError["default"];
          }
        });
        exports.types = void 0;

        var _types = _interopRequireWildcard(require("./types"));

        var _createAction = _interopRequireDefault(require("./createAction"));

        var _createReducer = _interopRequireDefault(require("./createReducer"));

        var _assignAll = _interopRequireDefault(require("./assignAll"));

        var _bindAll = _interopRequireDefault(require("./bindAll"));

        var _batch = _interopRequireDefault(require("./batch"));

        var _disbatch = _interopRequireDefault(require("./disbatch"));

        var _loggers = _interopRequireDefault(require("./loggers"));

        var _asError = _interopRequireDefault(require("./asError"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }

        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();

          _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache;
          };

          return cache;
        }

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              "default": obj
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj["default"] = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var types = _types;
        exports.types = types; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _createAction0 = module.exports.createAction;
        _createReducer0 = module.exports.createReducer;
        _assignAll0 = module.exports.assignAll;
        _bindAll0 = module.exports.bindAll;
        _batch0 = module.exports.batch;
        _disbatch0 = module.exports.disbatch;
        _loggers0 = module.exports.loggers;
        _asError0 = module.exports.asError;
        _types0 = module.exports.types;
      }, () => ({
        './types': _req,
        './createAction': _req0,
        './createReducer': _req1,
        './assignAll': _req2,
        './bindAll': _req3,
        './batch': _req4,
        './disbatch': _req5,
        './loggers': _req6,
        './asError': _req7
      }));
    }
  };
});
//# sourceMappingURL=1825256631288eabc83f73d0f43721f747d00b8c.js.map