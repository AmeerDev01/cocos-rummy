System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, UseSetOption, ActionTypes, initState, _crd;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/game", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      UseSetOption = _unresolved_2.default;
    }, function (_unresolved_3) {
      ActionTypes = _unresolved_3.ActionTypes;
      initState = _unresolved_3.initState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab791+W4uBMp5FXVCQ8/16p", "game", undefined);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_INIT_GAME_STORE]: (state, payload) => {
          return { ...payload.initState
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_CHANGE_GAME]: (state, payload) => {
          return { ...state,
            gameTypeInfo: payload.gameTypeInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_BET_DROP_DOWN_LIST]: (state, payload) => {
          return { ...state,
            betDropDownlist: payload.bool
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload) => {
          return { ...state,
            autoLauncherInfo: payload.autoLauncherInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_POSITION_ID]: (state, payload) => {
          (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().setGameOption("egyptV2", {
            betTarget: payload.positionId
          });
          return { ...state,
            positionId: payload.positionId
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_WINLOSS]: (state, payload) => {
          return { ...state,
            winloss: payload.winloss
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_GOLD]: (state, payload) => {
          return { ...state,
            gold: Number(payload.gold.toFixed(0))
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_DIALOGINFO]: (state, payload) => {
          return { ...state,
            dialogInfo: payload.dialogInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload) => {
          return { ...state,
            subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_JACKPOT_LIST]: (state, payload) => {
          return { ...state,
            jackpotDatas: payload.jackpotDatas
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).EGYPTV2_UPDATE_JACKPOT_AMOUNT]: (state, payload) => {
          return { ...state,
            jackpotTotalAmount: payload.jackpotTotalAmount
          };
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46977197f559b77d2c04a83c6f9b1d8b397bc311.js.map