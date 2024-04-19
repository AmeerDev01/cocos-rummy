System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports["default"] = void 0;

        var _createAction = _interopRequireDefault(require("./createAction"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }

        var _default = (0, _createAction["default"])('Batch', function () {
          for (var _len = arguments.length, actions = new Array(_len), _key = 0; _key < _len; _key++) {
            actions[_key] = arguments[_key];
          }

          if (actions.length === 1 && Array.isArray(actions[0])) {
            return actions[0];
          }

          return actions;
        });

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        './createAction': _req
      }));
    }
  };
});
//# sourceMappingURL=8f1145e6eab2917ea34c3dcc7e9cf969b2609ae5.js.map