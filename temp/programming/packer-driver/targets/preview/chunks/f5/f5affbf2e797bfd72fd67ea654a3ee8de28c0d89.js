System.register(["__unresolved_0", "cc", "redux", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, redux, UserInfoReducer, historyReducer, pokerReducer, gameReducer, _crd, rootReducer;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfoReducer(extras) {
    _reporterNs.report("UserInfoReducer", "./userInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfoInitStateType(extras) {
    _reporterNs.report("UserInfoInitStateType", "../actions/userInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryInitStateType(extras) {
    _reporterNs.report("HistoryInitStateType", "../actions/history", _context.meta, extras);
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
      UserInfoReducer = _unresolved_2.default;
    }, function (_unresolved_3) {
      historyReducer = _unresolved_3.default;
    }, function (_unresolved_4) {
      pokerReducer = _unresolved_4.default;
    }, function (_unresolved_5) {
      gameReducer = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f23bePB/91Aao6t73rdN9AQ", "index", undefined);

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
        userInfo: _crd && UserInfoReducer === void 0 ? (_reportPossibleCrUseOfUserInfoReducer({
          error: Error()
        }), UserInfoReducer) : UserInfoReducer,
        history: _crd && historyReducer === void 0 ? (_reportPossibleCrUseOfhistoryReducer({
          error: Error()
        }), historyReducer) : historyReducer,
        pokerDetail: _crd && pokerReducer === void 0 ? (_reportPossibleCrUseOfpokerReducer({
          error: Error()
        }), pokerReducer) : pokerReducer,
        game: _crd && gameReducer === void 0 ? (_reportPossibleCrUseOfgameReducer({
          error: Error()
        }), gameReducer) : gameReducer
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5affbf2e797bfd72fd67ea654a3ee8de28c0d89.js.map