System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, GameModeType, GameType, _crd, initState, ActionTypes, initGameStore, changeGame, setBetDropDownList, setAutoLauncherInfo, updatePositionId, updateWinloss, updateSubGameWinloss, updateGold, updateDialogInfo, updateSubGameAnimationPlayInfo, updateJackpotDatas, updateJackpotAmount, updateWinIconDataItem, playThorAnimation, playWinOddsAnimation, updateGameMode, updateFreeGameOdds;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogInfo(extras) {
    _reporterNs.report("DialogInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackpotData(extras) {
    _reporterNs.report("JackpotData", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayAnimationData(extras) {
    _reporterNs.report("PlayAnimationData", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("SubGameAnimationPlayInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinIconData(extras) {
    _reporterNs.report("WinIconData", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      GameModeType = _unresolved_2.GameModeType;
      GameType = _unresolved_2.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a036dPvM4ZKxJopyiKE+Zl4", "game", undefined);

      _export("initState", initState = {
        gameTypeInfo: {
          lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN,
          currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN,
          viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN,
          leftCount: 0
        },
        betDropDownlist: false,
        autoLauncherInfo: null,
        positionId: 1,
        winloss: 0,
        subGameWinloss: 0,
        gold: 0,
        dialogInfo: null,
        subGameAnimationPlayInfo: null,
        jackpotDatas: [],
        jackpotTotalAmount: 0,
        winIconDataItem: null,
        playThorAnimation: null,
        playWinOddsAnimation: null,
        betAmount: 0,
        gameModeType: (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
          error: Error()
        }), GameModeType) : GameModeType).normal,
        freeGameOdds: 0
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["THORV2_INIT_GAME_STORE"] = "THORV2_INIT_GAME_STORE";
        ActionTypes["THORV2_CHANGE_GAME"] = "THORV2_CHANGE_GAME";
        ActionTypes["THORV2_BET_DROP_DOWN_LIST"] = "THORV2_BET_DROP_DOWN_LIST";
        ActionTypes["THORV2_UPDATE_AUTO_LAUNCHER_INFO"] = "THORV2_UPDATE_AUTO_LAUNCHER_INFO";
        ActionTypes["THORV2_UPDATE_POSITION_ID"] = "THORV2_UPDATE_POSITION_ID";
        ActionTypes["THORV2_UPDATE_WINLOSS"] = "THORV2_UPDATE_WINLOSS";
        ActionTypes["THORV2_UPDATE_SUB_GAME_WINLOSS"] = "THORV2_UPDATE_SUB_GAME_WINLOSS";
        ActionTypes["THORV2_UPDATE_GOLD"] = "THORV2_UPDATE_GOLD";
        ActionTypes["THORV2_UPDATE_DIALOGINFO"] = "THORV2_UPDATE_DIALOGINFO";
        ActionTypes["THORV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO"] = "THORV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO";
        ActionTypes["THORV2_UPDATE_JACKPOT_LIST"] = "THORV2_UPDATE_JACKPOT_LIST";
        ActionTypes["THORV2_UPDATE_JACKPOT_AMOUNT"] = "THORV2_UPDATE_JACKPOT_AMOUNT";
        ActionTypes["THORV2_UPDATE_WIN_ICON_DATA"] = "THORV2_UPDATE_WIN_ICON_DATA";
        ActionTypes["THORV2_PLAY_THOR_ANIMATION"] = "THORV2_PLAY_THOR_ANIMATION";
        ActionTypes["THORV2_PLAY_WIN_ODDS_ANIMATION"] = "THORV2_PLAY_WIN_ODDS_ANIMATION";
        ActionTypes["THORV2_UPDATE_GAME_MODE"] = "THORV2_UPDATE_GAME_MODE";
        ActionTypes["THORV2_UPDATE_FREE_GAME_ODDS"] = "THORV2_UPDATE_FREE_GAME_ODDS";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("initGameStore", initGameStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_INIT_GAME_STORE, () => {
        return {
          initState
        };
      }));

      _export("changeGame", changeGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_CHANGE_GAME, gameTypeInfo => {
        return {
          gameTypeInfo
        };
      }));

      _export("setBetDropDownList", setBetDropDownList = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_BET_DROP_DOWN_LIST, bool => {
        return {
          bool
        };
      }));

      _export("setAutoLauncherInfo", setAutoLauncherInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_AUTO_LAUNCHER_INFO, autoLauncherInfo => {
        return {
          autoLauncherInfo
        };
      }));

      _export("updatePositionId", updatePositionId = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_POSITION_ID, positionId => {
        return {
          positionId
        };
      }));

      _export("updateWinloss", updateWinloss = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_WINLOSS, winloss => {
        return {
          winloss
        };
      }));

      _export("updateSubGameWinloss", updateSubGameWinloss = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_SUB_GAME_WINLOSS, subGameWinloss => {
        return {
          subGameWinloss
        };
      }));
      /**更新余额 */


      _export("updateGold", updateGold = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_GOLD, gold => {
        return {
          gold
        };
      }));

      _export("updateDialogInfo", updateDialogInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_DIALOGINFO, dialogInfo => {
        return {
          dialogInfo
        };
      }));

      _export("updateSubGameAnimationPlayInfo", updateSubGameAnimationPlayInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO, subGameAnimationPlayInfo => {
        return {
          subGameAnimationPlayInfo
        };
      }));

      _export("updateJackpotDatas", updateJackpotDatas = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_JACKPOT_LIST, jackpotDatas => {
        return {
          jackpotDatas
        };
      }));

      _export("updateJackpotAmount", updateJackpotAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_JACKPOT_AMOUNT, jackpotTotalAmount => {
        return {
          jackpotTotalAmount
        };
      }));

      _export("updateWinIconDataItem", updateWinIconDataItem = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_WIN_ICON_DATA, winIconDataItem => {
        return {
          winIconDataItem
        };
      }));

      _export("playThorAnimation", playThorAnimation = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_PLAY_THOR_ANIMATION, playThorAnimation => {
        return {
          playThorAnimation
        };
      }));

      _export("playWinOddsAnimation", playWinOddsAnimation = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_PLAY_WIN_ODDS_ANIMATION, playWinOddsAnimation => {
        return {
          playWinOddsAnimation
        };
      }));

      _export("updateGameMode", updateGameMode = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_GAME_MODE, gameModeType => {
        return {
          gameModeType
        };
      }));

      _export("updateFreeGameOdds", updateFreeGameOdds = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_FREE_GAME_ODDS, freeGameOdds => {
        return {
          freeGameOdds
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e42cf7c2d9ac96644b34385e30cf9887331b54e.js.map