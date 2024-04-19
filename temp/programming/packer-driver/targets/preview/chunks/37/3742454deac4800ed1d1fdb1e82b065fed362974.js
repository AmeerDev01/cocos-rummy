System.register(["__unresolved_0", "cc", "redux", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, redux, gameReducer, betReducer, gameFlowReducer, _crd, rootReducer;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameReducer(extras) {
    _reporterNs.report("gameReducer", "./game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbetReducer(extras) {
    _reporterNs.report("betReducer", "./bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameFlowReducer(extras) {
    _reporterNs.report("gameFlowReducer", "./gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetStateType(extras) {
    _reporterNs.report("BetStateType", "../actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameFlowStateType(extras) {
    _reporterNs.report("GameFlowStateType", "../actions/gameFlow", _context.meta, extras);
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
    }, function (_unresolved_3) {
      betReducer = _unresolved_3.default;
    }, function (_unresolved_4) {
      gameFlowReducer = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5d5etESmFHn5Yc1IqZtcs+", "index", undefined);

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
        // counter: counterReducer,
        game: _crd && gameReducer === void 0 ? (_reportPossibleCrUseOfgameReducer({
          error: Error()
        }), gameReducer) : gameReducer,
        bet: _crd && betReducer === void 0 ? (_reportPossibleCrUseOfbetReducer({
          error: Error()
        }), betReducer) : betReducer,
        gameFlow: _crd && gameFlowReducer === void 0 ? (_reportPossibleCrUseOfgameFlowReducer({
          error: Error()
        }), gameFlowReducer) : gameFlowReducer
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3742454deac4800ed1d1fdb1e82b065fed362974.js.map