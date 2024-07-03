System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, GameType, _crd, initState, ActionTypes, initGameStore, changeGame, setBetDropDownList, setAutoLauncherInfo, updatePositionId, updateWinloss, updateGold, updateDialogInfo, updateSubGameAnimationPlayInfo, updateJackpotDatas, updateJackpotAmount;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogInfo(extras) {
    _reporterNs.report("DialogInfo", "../../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("SubGameAnimationPlayInfo", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      GameType = _unresolved_2.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e46d8G3lDRNI6DscwbMtD6/", "game", undefined);

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
        gold: 0,
        dialogInfo: null,
        subGameAnimationPlayInfo: null,
        jackpotDatas: [],
        jackpotTotalAmount: 0
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["EGYPTV2_INIT_GAME_STORE"] = "EGYPTV2_INIT_GAME_STORE";
        ActionTypes["EGYPTV2_CHANGE_GAME"] = "EGYPTV2_CHANGE_GAME";
        ActionTypes["EGYPTV2_BET_DROP_DOWN_LIST"] = "EGYPTV2_BET_DROP_DOWN_LIST";
        ActionTypes["EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO"] = "EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO";
        ActionTypes["EGYPTV2_UPDATE_POSITION_ID"] = "EGYPTV2_UPDATE_POSITION_ID";
        ActionTypes["EGYPTV2_UPDATE_WINLOSS"] = "EGYPTV2_UPDATE_WINLOSS";
        ActionTypes["EGYPTV2_UPDATE_GOLD"] = "EGYPTV2_UPDATE_GOLD";
        ActionTypes["EGYPTV2_UPDATE_DIALOGINFO"] = "EGYPTV2_UPDATE_DIALOGINFO";
        ActionTypes["EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO"] = "EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO";
        ActionTypes["EGYPTV2_UPDATE_JACKPOT_LIST"] = "EGYPTV2_UPDATE_JACKPOT_LIST";
        ActionTypes["EGYPTV2_UPDATE_JACKPOT_AMOUNT"] = "EGYPTV2_UPDATE_JACKPOT_AMOUNT";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("initGameStore", initGameStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_INIT_GAME_STORE, () => {
        return {
          initState
        };
      }));

      _export("changeGame", changeGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_CHANGE_GAME, gameTypeInfo => {
        return {
          gameTypeInfo
        };
      }));

      _export("setBetDropDownList", setBetDropDownList = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_BET_DROP_DOWN_LIST, bool => {
        return {
          bool
        };
      }));

      _export("setAutoLauncherInfo", setAutoLauncherInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO, autoLauncherInfo => {
        return {
          autoLauncherInfo
        };
      }));

      _export("updatePositionId", updatePositionId = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_POSITION_ID, positionId => {
        return {
          positionId
        };
      }));

      _export("updateWinloss", updateWinloss = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_WINLOSS, winloss => {
        return {
          winloss
        };
      }));
      /**更新余额 */


      _export("updateGold", updateGold = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_GOLD, gold => {
        return {
          gold
        };
      }));

      _export("updateDialogInfo", updateDialogInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_DIALOGINFO, dialogInfo => {
        return {
          dialogInfo
        };
      }));

      _export("updateSubGameAnimationPlayInfo", updateSubGameAnimationPlayInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO, subGameAnimationPlayInfo => {
        return {
          subGameAnimationPlayInfo
        };
      }));

      _export("updateJackpotDatas", updateJackpotDatas = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_JACKPOT_LIST, jackpotDatas => {
        return {
          jackpotDatas
        };
      }));

      _export("updateJackpotAmount", updateJackpotAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.EGYPTV2_UPDATE_JACKPOT_AMOUNT, jackpotTotalAmount => {
        return {
          jackpotTotalAmount
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f9f1a3384e7d98e5c11ab3d3c16267e20038c11.js.map