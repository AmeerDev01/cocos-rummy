System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
          return _extends({}, state, {
            currGameType: payload.currGameType
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_CHANGE_VIEW_GAME]: (state, payload) => {
          return _extends({}, state, {
            viewGameType: payload.viewGameType
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_GAMEMODE]: (state, payload) => {
          return _extends({}, state, {
            gameMode: payload.gameMode
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_UPDATE_BALANCE]: (state, payload) => {
          return _extends({}, state, {
            balance: Number(payload.balance.toFixed(0))
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_CHANGE_PROFIT]: (state, payload) => {
          return _extends({}, state, {
            profit: payload.profit
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_BETTINGINFORMATION]: (state, payload) => {
          return _extends({}, state, {
            bettingInformation: payload.bettingInformation
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_APOSTILLE]: (state, payload) => {
          return _extends({}, state, {
            apostille: payload.apostille
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_ISHASTEN]: (state, payload) => {
          return _extends({}, state, {
            isHasten: payload.isHasten
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_MULTIPLETOTAL]: (state, payload) => {
          return _extends({}, state, {
            multipleTotal: payload.multipleTotal
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_MINIGAMECOUNT]: (state, payload) => {
          return _extends({}, state, {
            minigameCount: payload.minigameCount
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_ROLEATTACK]: (state, payload) => {
          return _extends({}, state, {
            roleAttack: payload.roleAttack
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_CHANGE_AUTO_LAUNCHER_TYPE]: (state, payload) => {
          console.log(payload.autoLauncherType);
          return _extends({}, state, {
            autoLauncherType: payload.autoLauncherType
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_UPDATE_SUBGAME_TIMES]: (state, payload) => {
          return _extends({}, state, {
            remainSubGameTimes: payload.subGameTimes
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_GAMEFREEGAMETOTALMULTIPLIER]: (state, payload) => {
          return _extends({}, state, {
            gameFreeGametotalMultiplier: payload.gameFreeGametotalMultiplier
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_SUBGAME_TIMES]: (state, payload) => {
          return _extends({}, state, {
            subGameTimes: payload.subGameTimes
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_UPDATE_JACKPOT_AMOUNT]: (state, payload) => {
          return _extends({}, state, {
            jackpotAmount: payload.jackpotAmount
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_WAITING]: (state, payload) => {
          return _extends({}, state, {
            isWaiting: payload.isWaiting
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_AUTO_LAUNCH]: (state, payload) => {
          return _extends({}, state, {
            isShowAutoLaunch: payload.isShowAutoLaunch
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).STARLIGHT_SET_AUTO_LAUNCHED_TIMES]: (state, payload) => {
          if (payload.autoLaunchedTimes === undefined) {
            return _extends({}, state, {
              autoLaunchedTimes: state.autoLaunchedTimes + 1
            });
          }

          return _extends({}, state, {
            autoLaunchedTimes: payload.autoLaunchedTimes
          });
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
//# sourceMappingURL=402f890c55393e7e273a33859ae5ff4c4f549b5c.js.map