System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, GameType, _crd;

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_3) {
      GameType = _unresolved_3.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd1ddYbCzxNsZcCAEGPgxL0", "game", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_CHANGE_GAME]: (state, payload) => {
          // const _state = instantiate(state)
          // _state.lastGameType = _state.currGameType === GameType.NONE ? payload.gameType : _state.currGameType
          // _state.currGameType = payload.gameType
          return { ...state,
            lastGameType: state.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE ? payload.gameType : state.currGameType,
            currGameType: payload.gameType
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_CHANGE_VIEW_GAME]: (state, payload) => {
          return { ...state,
            viewGameType: payload.gameType
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_UPDATE_BALANCE]: (state, payload) => {
          return { ...state,
            balance: payload.balance
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_CHANGE_PROFIT]: (state, payload) => {
          return { ...state,
            profit: payload.profit
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE]: (state, payload) => {
          return { ...state,
            autoLauncherType: payload.autoLauncherType
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_UPDATE_SUBGAME_TIMES]: (state, payload) => {
          return { ...state,
            remainSubGameTimes: payload.subGameTimes
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_SET_SUBGAME_TIMES]: (state, payload) => {
          return { ...state,
            subGameTimes: payload.subGameTimes
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_UPDATE_JACKPOT_AMOUNT]: (state, payload) => {
          return { ...state,
            jackpotAmount: payload.jackpotAmount
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_SET_WAITING]: (state, payload) => {
          return { ...state,
            isWaiting: payload.isWaiting
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_SET_AUTO_LAUNCH]: (state, payload) => {
          return { ...state,
            isShowAutoLaunch: payload.isShowAutoLaunch
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_SET_AUTO_LAUNCHED_TIMES]: (state, payload) => {
          if (payload.autoLaunchedTimes === undefined) {
            return { ...state,
              autoLaunchedTimes: state.autoLaunchedTimes + 1
            };
          }

          return { ...state,
            autoLaunchedTimes: payload.autoLaunchedTimes
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_SET_STOP_MODE]: (state, payload) => {
          return { ...state,
            stopMode: payload.stopMode
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_SET_SORT]: (state, payload) => {
          return { ...state,
            isSortStop: payload.isSortStop
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).FRUIT777_RESET_STORE]: (state, payload) => {
          return instantiate(_crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
            error: Error()
          }), initState) : initState);
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b64ed30f241c32dc227eaa260df2cd34fb8cad20.js.map