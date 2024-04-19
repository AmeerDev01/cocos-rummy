System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, reduxAct, AutoLauncherType, GameModeType, GameType, _crd, initState, ActionTypes, changeGame, changeCurrGameType, updateBalance, updateGameModeType, changebetAmount, changeapostille, changeIsHasten, changeMultipleTotal, changeMinigameCount, changeGameFreeGametotalMultiplier, changeRoleAttack, changeViewGame, changeProfit, changeAutoLauncherType, updateSubGameTimes, setSubGameTimes, updateJackpotAmount, setWaiting, setShowAuthLaunch, setAutoLaunchedTimes, resetStore;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../../type", _context.meta, extras);
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
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      AutoLauncherType = _unresolved_2.AutoLauncherType;
      GameModeType = _unresolved_2.GameModeType;
      GameType = _unresolved_2.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "724c0Z4K6lCL50reTLpnODy", "game", undefined);

      __checkObsolete__(['log']);

      _export("initState", initState = {
        lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
          error: Error()
        }), GameType) : GameType).NONE,
        viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
          error: Error()
        }), GameType) : GameType).NONE,
        currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
          error: Error()
        }), GameType) : GameType).NONE,
        balance: 0,
        profit: 0,
        autoLauncherType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).NONE,
        subGameTimes: 0,
        remainSubGameTimes: 0,
        jackpotAmount: 0,
        isShowAutoLaunch: false,
        isWaiting: true,
        autoLaunchedTimes: 0,
        bettingInformation: {
          betAmount: 0,
          bet: 0
        },
        apostille: false,
        gameMode: (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
          error: Error()
        }), GameModeType) : GameModeType).normal,
        isHasten: true,
        roleAttack: false,
        multipleTotal: 0,
        minigameCount: 0,
        gameFreeGametotalMultiplier: 0
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["THOR_CHANGE_GAME"] = "THOR_CHANGE_GAME";
        ActionTypes["THOR_CHANGE_CURRGAMETYPE"] = "THOR_CHANGE_CURRGAMETYPE";
        ActionTypes["THOR_UPDATE_BALANCE"] = "THOR_UPDATE_BALANCE";
        ActionTypes["THOR_CHANGE_VIEW_GAME"] = "THOR_CHANGE_VIEW_GAME";
        ActionTypes["THOR_CHANGE_PROFIT"] = "THOR_CHANGE_PROFIT";
        ActionTypes["THOR_CHANGE_AUTO_LAUNCHER_TYPE"] = "THOR_CHANGE_AUTO_LAUNCHER_TYPE";
        ActionTypes["THOR_UPDATE_SUBGAME_TIMES"] = "THOR_UPDATE_SUBGAME_TIMES";
        ActionTypes["THOR_SET_SUBGAME_TIMES"] = "THOR_SET_SUBGAME_TIMES";
        ActionTypes["THOR_UPDATE_JACKPOT_AMOUNT"] = "THOR_UPDATE_JACKPOT_AMOUNT";
        ActionTypes["THOR_SET_WAITING"] = "THOR_SET_WAITING";
        ActionTypes["THOR_SET_AUTO_LAUNCH"] = "THOR_SET_AUTO_LAUNCH";
        ActionTypes["THOR_SET_AUTO_LAUNCHED_TIMES"] = "THOR_SET_AUTO_LAUNCHED_TIMES";
        ActionTypes["THOR_SET_BETTINGINFORMATION"] = "THOR_SET_BETTINGINFORMATION";
        ActionTypes["THOR_SET_APOSTILLE"] = "THOR_SET_APOSTILLE";
        ActionTypes["THOR_SET_GAMEMODE"] = "THOR_SET_GAMEMODE";
        ActionTypes["THOR_SET_ISHASTEN"] = "THOR_SET_ISHASTEN";
        ActionTypes["THOR_SET_ROLEATTACK"] = "THOR_SET_ROLEATTACK";
        ActionTypes["THOR_SET_MULTIPLETOTAL"] = "THOR_SET_MULTIPLETOTAL";
        ActionTypes["THOR_SET_MINIGAMECOUNT"] = "THOR_SET_MINIGAMECOUNT";
        ActionTypes["THOR_SET_GAMEFREEGAMETOTALMULTIPLIER"] = "THOR_SET_GAMEFREEGAMETOTALMULTIPLIER";
        ActionTypes["THOR_RESET_STORE"] = "THOR_RESET_STORE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("changeGame", changeGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_CHANGE_GAME, gameType => {
        return {
          gameType
        };
      }));

      _export("changeCurrGameType", changeCurrGameType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_CHANGE_CURRGAMETYPE, currGameType => {
        return {
          currGameType
        };
      }));

      _export("updateBalance", updateBalance = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_UPDATE_BALANCE, balance => {
        return {
          balance
        };
      }));

      _export("updateGameModeType", updateGameModeType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_GAMEMODE, gameMode => {
        return {
          gameMode
        };
      }));

      _export("changebetAmount", changebetAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_BETTINGINFORMATION, bettingInformation => {
        return {
          bettingInformation
        };
      }));

      _export("changeapostille", changeapostille = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_APOSTILLE, apostille => {
        return {
          apostille
        };
      }));

      _export("changeIsHasten", changeIsHasten = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_ISHASTEN, isHasten => {
        return {
          isHasten
        };
      }));

      _export("changeMultipleTotal", changeMultipleTotal = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_MULTIPLETOTAL, multipleTotal => {
        return {
          multipleTotal
        };
      }));

      _export("changeMinigameCount", changeMinigameCount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_MINIGAMECOUNT, minigameCount => {
        return {
          minigameCount
        };
      }));

      _export("changeGameFreeGametotalMultiplier", changeGameFreeGametotalMultiplier = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_GAMEFREEGAMETOTALMULTIPLIER, gameFreeGametotalMultiplier => {
        return {
          gameFreeGametotalMultiplier
        };
      }));

      _export("changeRoleAttack", changeRoleAttack = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_ROLEATTACK, roleAttack => {
        return {
          roleAttack
        };
      }));

      _export("changeViewGame", changeViewGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_CHANGE_VIEW_GAME, viewGameType => {
        return {
          viewGameType
        };
      }));

      _export("changeProfit", changeProfit = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_CHANGE_PROFIT, profit => {
        return {
          profit
        };
      }));

      _export("changeAutoLauncherType", changeAutoLauncherType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_CHANGE_AUTO_LAUNCHER_TYPE, autoLauncherType => {
        return {
          autoLauncherType
        };
      }));

      _export("updateSubGameTimes", updateSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_UPDATE_SUBGAME_TIMES, subGameTimes => {
        return {
          subGameTimes
        };
      }));
      /**设置缓存的次数 */


      _export("setSubGameTimes", setSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_SUBGAME_TIMES, subGameTimes => {
        return {
          subGameTimes
        };
      }));

      _export("updateJackpotAmount", updateJackpotAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_UPDATE_JACKPOT_AMOUNT, jackpotAmount => {
        return {
          jackpotAmount
        };
      }));

      _export("setWaiting", setWaiting = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_WAITING, isWaiting => {
        return {
          isWaiting
        };
      }));

      _export("setShowAuthLaunch", setShowAuthLaunch = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_AUTO_LAUNCH, isShowAutoLaunch => {
        return {
          isShowAutoLaunch
        };
      }));

      _export("setAutoLaunchedTimes", setAutoLaunchedTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_AUTO_LAUNCHED_TIMES, autoLaunchedTimes => {
        return {
          autoLaunchedTimes
        };
      }));

      _export("resetStore", resetStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_RESET_STORE, () => {
        return {
          initState
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99adbdaef72b669ba18e23233b33e06c4aab17d5.js.map