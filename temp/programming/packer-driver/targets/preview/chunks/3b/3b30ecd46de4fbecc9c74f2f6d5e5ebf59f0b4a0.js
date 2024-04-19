System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, UseSetOption, ActionTypes, initState, GameModeType, config, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
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
    }, function (_unresolved_4) {
      GameModeType = _unresolved_4.GameModeType;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64689yHQ1hDgK5PvVl5wczD", "game", undefined);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_INIT_GAME_STORE]: (state, payload) => {
          return _extends({}, payload.initState);
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_CHANGE_GAME]: (state, payload) => {
          return _extends({}, state, {
            gameTypeInfo: payload.gameTypeInfo
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_BET_DROP_DOWN_LIST]: (state, payload) => {
          return _extends({}, state, {
            betDropDownlist: payload.bool
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_AUTO_LAUNCHER_INFO]: (state, payload) => {
          return _extends({}, state, {
            autoLauncherInfo: payload.autoLauncherInfo
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_POSITION_ID]: (state, payload) => {
          (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().setGameOption("egyptV2", {
            betTarget: payload.positionId
          });
          return _extends({}, state, {
            positionId: payload.positionId
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_WINLOSS]: (state, payload) => {
          return _extends({}, state, {
            winloss: payload.winloss
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_SUB_GAME_WINLOSS]: (state, payload) => {
          return _extends({}, state, {
            subGameWinloss: payload.subGameWinloss
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_GOLD]: (state, payload) => {
          return _extends({}, state, {
            gold: payload.gold
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_DIALOGINFO]: (state, payload) => {
          return _extends({}, state, {
            dialogInfo: payload.dialogInfo
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO]: (state, payload) => {
          return _extends({}, state, {
            subGameAnimationPlayInfo: payload.subGameAnimationPlayInfo
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_JACKPOT_LIST]: (state, payload) => {
          return _extends({}, state, {
            jackpotDatas: payload.jackpotDatas
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_JACKPOT_AMOUNT]: (state, payload) => {
          return _extends({}, state, {
            jackpotTotalAmount: payload.jackpotTotalAmount
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_WIN_ICON_DATA]: (state, payload) => {
          return _extends({}, state, {
            winIconDataItem: payload.winIconDataItem
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_PLAY_THOR_ANIMATION]: (state, payload) => {
          return _extends({}, state, {
            playThorAnimation: payload.playThorAnimation
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_PLAY_WIN_ODDS_ANIMATION]: (state, payload) => {
          return _extends({}, state, {
            playWinOddsAnimation: payload.playWinOddsAnimation
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_GAME_MODE]: (state, payload) => {
          return _extends({}, state, {
            betAmount: payload.gameModeType === (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
              error: Error()
            }), GameModeType) : GameModeType).buyToWin ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).rateAmount : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).betAmount,
            gameModeType: payload.gameModeType
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).THORV2_UPDATE_FREE_GAME_ODDS]: (state, payload) => {
          return _extends({}, state, {
            freeGameOdds: payload.freeGameOdds
          });
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b30ecd46de4fbecc9c74f2f6d5e5ebf59f0b4a0.js.map