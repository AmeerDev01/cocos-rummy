System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, _crd;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80df13FcadINadQhWYBFUim", "game", undefined);

      __checkObsolete__(['instantiate', 'log']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_CHANGE_CURRGAMETYPE]: (state, payload) => {
          return { ...state,
            currGameType: payload.currGameType
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_CHANGE_VIEW_GAME]: (state, payload) => {
          return { ...state,
            viewGameType: payload.viewGameType
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_GAMEMODE]: (state, payload) => {
          return { ...state,
            gameMode: payload.gameMode
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_UPDATE_BALANCE]: (state, payload) => {
          return { ...state,
            balance: Number(payload.balance.toFixed(0))
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_CHANGE_PROFIT]: (state, payload) => {
          return { ...state,
            profit: payload.profit
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_BETTINGINFORMATION]: (state, payload) => {
          return { ...state,
            bettingInformation: payload.bettingInformation
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_APOSTILLE]: (state, payload) => {
          return { ...state,
            apostille: payload.apostille
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_ISHASTEN]: (state, payload) => {
          return { ...state,
            isHasten: payload.isHasten
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_MULTIPLETOTAL]: (state, payload) => {
          return { ...state,
            multipleTotal: payload.multipleTotal
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_MINIGAMECOUNT]: (state, payload) => {
          return { ...state,
            minigameCount: payload.minigameCount
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_ROLEATTACK]: (state, payload) => {
          return { ...state,
            roleAttack: payload.roleAttack
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_CHANGE_AUTO_LAUNCHER_TYPE]: (state, payload) => {
          console.log(payload.autoLauncherType);
          return { ...state,
            autoLauncherType: payload.autoLauncherType
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_UPDATE_SUBGAME_TIMES]: (state, payload) => {
          return { ...state,
            remainSubGameTimes: payload.subGameTimes
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_GAMEFREEGAMETOTALMULTIPLIER]: (state, payload) => {
          return { ...state,
            gameFreeGametotalMultiplier: payload.gameFreeGametotalMultiplier
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_SUBGAME_TIMES]: (state, payload) => {
          return { ...state,
            subGameTimes: payload.subGameTimes
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_UPDATE_JACKPOT_AMOUNT]: (state, payload) => {
          return { ...state,
            jackpotAmount: payload.jackpotAmount
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_WAITING]: (state, payload) => {
          return { ...state,
            isWaiting: payload.isWaiting
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_AUTO_LAUNCH]: (state, payload) => {
          return { ...state,
            isShowAutoLaunch: payload.isShowAutoLaunch
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_AUTO_LAUNCHED_TIMES]: (state, payload) => {
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
        }), ActionTypes) : ActionTypes).STARLIGHT_RESET_STORE]: (state, payload) => {
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
//# sourceMappingURL=7d114ac42439f4317dbd4260ed309fab6150938e.js.map