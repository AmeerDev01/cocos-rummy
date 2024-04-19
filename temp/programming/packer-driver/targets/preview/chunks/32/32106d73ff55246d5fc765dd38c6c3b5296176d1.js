System.register(["__unresolved_0", "cc", "redux", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, redux, historyReducer, pokerReducer, gameReducer, betReducer, _crd, rootReducer;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhistoryReducer(extras) {
    _reporterNs.report("historyReducer", "./history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpokerReducer(extras) {
    _reporterNs.report("pokerReducer", "./pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameReducer(extras) {
    _reporterNs.report("gameReducer", "./game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbetReducer(extras) {
    _reporterNs.report("betReducer", "./bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryInitStateType(extras) {
    _reporterNs.report("HistoryInitStateType", "../actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetStateType(extras) {
    _reporterNs.report("BetStateType", "../actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpokerDetailStateType(extras) {
    _reporterNs.report("pokerDetailStateType", "../actions/pokerDetail", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_redux) {
      redux = _redux.default;
    }, function (_unresolved_2) {
      historyReducer = _unresolved_2.default;
    }, function (_unresolved_3) {
      pokerReducer = _unresolved_3.default;
    }, function (_unresolved_4) {
      gameReducer = _unresolved_4.default;
    }, function (_unresolved_5) {
      betReducer = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2b4frGpJhGhoYOiwt0UO6a", "index", undefined);

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
        history: _crd && historyReducer === void 0 ? (_reportPossibleCrUseOfhistoryReducer({
          error: Error()
        }), historyReducer) : historyReducer,
        game: _crd && gameReducer === void 0 ? (_reportPossibleCrUseOfgameReducer({
          error: Error()
        }), gameReducer) : gameReducer,
        bet: _crd && betReducer === void 0 ? (_reportPossibleCrUseOfbetReducer({
          error: Error()
        }), betReducer) : betReducer,
        pokerDetail: _crd && pokerReducer === void 0 ? (_reportPossibleCrUseOfpokerReducer({
          error: Error()
        }), pokerReducer) : pokerReducer
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32106d73ff55246d5fc765dd38c6c3b5296176d1.js.map