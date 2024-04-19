System.register(["__unresolved_0", "cc", "redux", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, redux, rollerReducer, gameReducer, _crd, rootReducer;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrollerReducer(extras) {
    _reporterNs.report("rollerReducer", "./roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameReducer(extras) {
    _reporterNs.report("gameReducer", "./game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStateType(extras) {
    _reporterNs.report("RollerStateType", "../actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateType(extras) {
    _reporterNs.report("GameStateType", "../actions/game", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_redux) {
      redux = _redux.default;
    }, function (_unresolved_2) {
      rollerReducer = _unresolved_2.default;
    }, function (_unresolved_3) {
      gameReducer = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c34aas9/0RITZqI2z6o/3Lq", "index", undefined);

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
        roller: _crd && rollerReducer === void 0 ? (_reportPossibleCrUseOfrollerReducer({
          error: Error()
        }), rollerReducer) : rollerReducer,
        game: _crd && gameReducer === void 0 ? (_reportPossibleCrUseOfgameReducer({
          error: Error()
        }), gameReducer) : gameReducer
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0938aa774be32d026ee178d842e39679ece66463.js.map