System.register(["__unresolved_0", "cc", "redux", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, redux, gameReducer, _crd, rootReducer;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameReducer(extras) {
    _reporterNs.report("gameReducer", "./game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "../action/game", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_redux) {
      redux = _redux.default;
    }, function (_unresolved_2) {
      gameReducer = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f548iloqFKibUpskZSqPdW", "index", undefined);

      window["process"] = {
        env: {
          NODE_ENV: "production"
        },
        on: () => "",
        memoryUsage: () => ({
          rss: 4935680,
          heapTotal: 1826816,
          heapUsed: 650472,
          external: 49879
        })
      };

      _export("rootReducer", rootReducer = (_crd && redux === void 0 ? (_reportPossibleCrUseOfredux({
        error: Error()
      }), redux) : redux).combineReducers({
        deskData: _crd && gameReducer === void 0 ? (_reportPossibleCrUseOfgameReducer({
          error: Error()
        }), gameReducer) : gameReducer
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=155b3acab7d40713b9fad75e222e8b2911583d37.js.map