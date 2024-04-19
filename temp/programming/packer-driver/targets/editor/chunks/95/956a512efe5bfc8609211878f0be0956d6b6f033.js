System.register(["__unresolved_0", "cc", "redux", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, redux, rootReducer, _crd, store, configureStore, getStore;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrootReducer(extras) {
    _reporterNs.report("rootReducer", "./reducer", _context.meta, extras);
  }

  _export("store", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_redux) {
      redux = _redux.default;
    }, function (_unresolved_2) {
      rootReducer = _unresolved_2.rootReducer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5951f4trpBJtpuulo3iPPrI", "index", undefined);

      configureStore = preloadedState => {
        if (!store) {
          const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || (_crd && redux === void 0 ? (_reportPossibleCrUseOfredux({
            error: Error()
          }), redux) : redux).compose;

          _export("store", store = (_crd && redux === void 0 ? (_reportPossibleCrUseOfredux({
            error: Error()
          }), redux) : redux).createStore(_crd && rootReducer === void 0 ? (_reportPossibleCrUseOfrootReducer({
            error: Error()
          }), rootReducer) : rootReducer, composeEnhancer((_crd && redux === void 0 ? (_reportPossibleCrUseOfredux({
            error: Error()
          }), redux) : redux).applyMiddleware())));
        }

        return store;
      };

      _export("default", {
        configureStore
      });

      _export("getStore", getStore = () => {
        if (!store) {
          configureStore();
        }

        return store;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=956a512efe5bfc8609211878f0be0956d6b6f033.js.map