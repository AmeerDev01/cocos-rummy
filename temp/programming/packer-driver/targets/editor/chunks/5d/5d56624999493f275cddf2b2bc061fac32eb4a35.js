System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ActionTypes, initState, reduxAct, GameType, cacheData, UseSetOption, _crd;

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

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../../utils/UseSetOption", _context.meta, extras);
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
    }, function (_unresolved_4) {
      cacheData = _unresolved_4.cacheData;
    }, function (_unresolved_5) {
      UseSetOption = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f99aczHwCpGMa0qxUWvflDi", "game", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_QUIT_GAME]: (state, payload) => {
          (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult = null;
          return {
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              leftCount: 0
            },
            betDropDownlist: false,
            autoLauncherInfo: null,
            positionId: 1,
            winloss: 0,
            gold: 0,
            dialogInfo: null,
            subGameAnimationPlayInfo: null,
            jackpotDatas: [],
            jackpotTotalAmount: 0,
            theDragonSpitsFire: 0
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_CHANGE_GAME]: (state, payload) => {
          return { ...state,
            gameTypeInfo: payload.gameTypeInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_BET_DROP_DOWN_LIST]: (state, payload) => {
          return { ...state,
            betDropDownlist: payload.bool
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload) => {
          return { ...state,
            autoLauncherInfo: payload.autoLauncherInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_POSITION_ID]: (state, payload) => {
          (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().setGameOption("dragonV2", {
            betTarget: payload.positionId
          });
          return { ...state,
            positionId: payload.positionId
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_WINLOSS]: (state, payload) => {
          return { ...state,
            winloss: payload.winloss
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_GOLD]: (state, payload) => {
          return { ...state,
            gold: Number(payload.gold.toFixed(0))
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_DIALOGINFO]: (state, payload) => {
          return { ...state,
            dialogInfo: payload.dialogInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload) => {
          return { ...state,
            subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_JACKPOT_LIST]: (state, payload) => {
          return { ...state,
            jackpotDatas: payload.jackpotDatas
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_THEDRAGONSPITSFIRE]: (state, payload) => {
          return { ...state,
            theDragonSpitsFire: payload.theDragonSpitsFire
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_UPDATE_JACKPOT_AMOUNT]: (state, payload) => {
          return { ...state,
            jackpotTotalAmount: payload.jackpotTotalAmount
          };
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).DRAGONV2_RESET_STORE]: (state, payload) => {
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
//# sourceMappingURL=5d56624999493f275cddf2b2bc061fac32eb4a35.js.map