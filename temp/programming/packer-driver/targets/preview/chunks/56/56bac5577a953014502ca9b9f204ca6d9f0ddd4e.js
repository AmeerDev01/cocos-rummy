System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _actionTransformer, _logger, __cjsMetaURL;

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
        exports.actionTransformer = actionTransformer;
        exports.logger = void 0;

        var _batch = _interopRequireDefault(require("../batch"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }

        var batchType = _batch["default"].getType();

        function actionTransformer(action) {
          if (action && action.type === batchType) {
            action.payload.type = batchType;
            return action.payload;
          }

          return action;
        }

        var logger = {};
        exports.logger = logger;

        var _loop = function _loop(level) {
          if (typeof console[level] === 'function') {
            logger[level] = function levelFn() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var lastArg = args.pop();

              if (Array.isArray(lastArg) && lastArg.type === batchType) {
                lastArg.forEach(function (action) {
                  console[level].apply(console, [].concat(args, [action]));
                });
              } else {
                args.push(lastArg);
                console[level].apply(console, args);
              }
            };
          }
        };

        for (var level in console) {
          _loop(level);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _actionTransformer = module.exports.actionTransformer;
        _logger = module.exports.logger;
      }, () => ({
        '../batch': _req
      }));
    }
  };
});
//# sourceMappingURL=56bac5577a953014502ca9b9f204ca6d9f0ddd4e.js.map