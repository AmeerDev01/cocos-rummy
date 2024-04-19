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
        exports["default"] = createAction;

        var _types = require("./types");

        var id = 0;

        var identity = function identity(arg) {
          return arg;
        };

        var normalize = function normalize(dispatchOrStore) {
          if (dispatchOrStore && typeof dispatchOrStore.dispatch === 'function') {
            return dispatchOrStore.dispatch;
          } else {
            return dispatchOrStore;
          }
        };

        var normalizeAll = function normalizeAll(dispatchOrStores) {
          if (Array.isArray(dispatchOrStores)) {
            return dispatchOrStores.map(normalize);
          } else {
            return normalize(dispatchOrStores);
          }
        };

        function createAction(description, payloadReducer, metaReducer) {
          if (typeof description === 'function') {
            metaReducer = payloadReducer;
            payloadReducer = description;
            description = undefined;
          }

          if (typeof payloadReducer !== 'function') {
            payloadReducer = identity;
          }

          if (typeof metaReducer !== 'function') {
            metaReducer = undefined;
          }

          var isSerializable = typeof description === 'string' && /^[0-9A-Z_]+$/.test(description);

          if (isSerializable) {
            (0, _types.check)(description);
            (0, _types.add)(description);
          } else {
            ++id;
          }

          var type = isSerializable ? description : "[".concat(id, "]").concat(description ? ' ' + description : '');
          var dispatchFunctions = undefined;

          function makeAction() {
            var payload = payloadReducer.apply(void 0, arguments);

            if (metaReducer) {
              return {
                type: type,
                payload: payload,
                error: payload instanceof Error,
                meta: metaReducer.apply(void 0, arguments)
              };
            }

            return {
              type: type,
              payload: payload,
              error: payload instanceof Error
            };
          }

          var makeAndDispatch = function makeAndDispatch(dispatchs, isError) {
            return function () {
              var payloadedAction = makeAction.apply(void 0, arguments);

              if (!payloadedAction.error) {
                payloadedAction.error = isError;
              }

              if (Array.isArray(dispatchs)) {
                return dispatchs.map(function (dispatch) {
                  return dispatch(payloadedAction);
                });
              } else if (dispatchs) {
                return dispatchs(payloadedAction);
              } else {
                return payloadedAction;
              }
            };
          };

          function actionCreator() {
            return makeAndDispatch(dispatchFunctions, false).apply(void 0, arguments);
          }

          actionCreator.asError = function () {
            return makeAndDispatch(dispatchFunctions, true).apply(void 0, arguments);
          };

          actionCreator.getType = function () {
            return type;
          };

          actionCreator.toString = function () {
            return type;
          };

          actionCreator.raw = makeAction;

          actionCreator.assignTo = function (dispatchOrStores) {
            dispatchFunctions = normalizeAll(dispatchOrStores);
            return actionCreator;
          };

          actionCreator.assigned = function () {
            return !!dispatchFunctions;
          };

          actionCreator.bound = function () {
            return false;
          };

          actionCreator.dispatched = actionCreator.assigned;

          actionCreator.bindTo = function (dispatchOrStores) {
            var boundActionCreator = makeAndDispatch(normalizeAll(dispatchOrStores, false));
            boundActionCreator.asError = makeAndDispatch(normalizeAll(dispatchOrStores, true));
            boundActionCreator.raw = makeAction;
            boundActionCreator.getType = actionCreator.getType;
            boundActionCreator.toString = actionCreator.toString;

            boundActionCreator.assignTo = function () {
              return boundActionCreator;
            };

            boundActionCreator.bindTo = function () {
              return boundActionCreator;
            };

            boundActionCreator.assigned = function () {
              return false;
            };

            boundActionCreator.bound = function () {
              return true;
            };

            boundActionCreator.dispatched = boundActionCreator.bound;
            return boundActionCreator;
          };

          return actionCreator;
        }

        ; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        './types': _req
      }));
    }
  };
});
//# sourceMappingURL=ad8cddea0e756bb3cfd0c34b9021689a10bf26a2.js.map