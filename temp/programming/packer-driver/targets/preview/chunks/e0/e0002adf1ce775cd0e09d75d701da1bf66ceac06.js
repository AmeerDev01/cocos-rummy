System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, AutoLauncherType, GameType, SMALLGAME, _crd, initState, ActionTypes, changeGame, updateBalance, changeViewGame, changeProfit, changeAutoLauncherType, updateSubGameTimes, setSubGameTimes, updateJackpotAmount, setWaiting, setShowAuthLaunch, setAutoLaunchedTimes, setStopMode, setSortStop, setFreeGameId, setFreeGameRate;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMALLGAME(extras) {
    _reporterNs.report("SMALLGAME", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      AutoLauncherType = _unresolved_2.AutoLauncherType;
      GameType = _unresolved_2.GameType;
      SMALLGAME = _unresolved_2.SMALLGAME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99f5fjTmT5E2aE2ZDejlfxS", "game", undefined);

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
        // betAmount: 0,
        balance: 0,
        profit: null,
        autoLauncherType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
          error: Error()
        }), AutoLauncherType) : AutoLauncherType).NONE,
        subGameTimes: 0,
        remainSubGameTimes: 0,
        jackpotAmount: 0,
        isShowAutoLaunch: false,
        isWaiting: true,
        autoLaunchedTimes: 0,
        stopMode: 'jump',
        isSortStop: true,
        freeGamePositionId: (_crd && SMALLGAME === void 0 ? (_reportPossibleCrUseOfSMALLGAME({
          error: Error()
        }), SMALLGAME) : SMALLGAME).CHOSSE0,
        freeGameRate: 0
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["PHOENIX_CHANGE_GAME"] = "PHOENIX_CHANGE_GAME";
        ActionTypes["PHOENIX_UPDATE_BALANCE"] = "PHOENIX_UPDATE_BALANCE";
        ActionTypes["PHOENIX_CHANGE_VIEW_GAME"] = "PHOENIX_CHANGE_VIEW_GAME";
        ActionTypes["PHOENIX_CHANGE_PROFIT"] = "PHOENIX_CHANGE_PROFIT";
        ActionTypes["PHOENIX_CHANGE_BET_AMOUNT"] = "PHOENIX_CHANGE_BET_AMOUNT";
        ActionTypes["PHOENIX_CHANGE_AUTO_LAUNCHER_TYPE"] = "PHOENIX_CHANGE_AUTO_LAUNCHER_TYPE";
        ActionTypes["PHOENIX_UPDATE_SUBGAME_TIMES"] = "PHOENIX_UPDATE_SUBGAME_TIMES";
        ActionTypes["PHOENIX_SET_SUBGAME_TIMES"] = "PHOENIX_SET_SUBGAME_TIMES";
        ActionTypes["PHOENIX_UPDATE_JACKPOT_AMOUNT"] = "PHOENIX_UPDATE_JACKPOT_AMOUNT";
        ActionTypes["PHOENIX_SET_WAITING"] = "PHOENIX_SET_WAITING";
        ActionTypes["PHOENIX_SET_AUTO_LAUNCH"] = "PHOENIX_SET_AUTO_LAUNCH";
        ActionTypes["PHOENIX_SET_AUTO_LAUNCHED_TIMES"] = "PHOENIX_SET_AUTO_LAUNCHED_TIMES";
        ActionTypes["PHOENIX_SET_STOP_MODE"] = "PHOENIX_SET_STOP_MODE";
        ActionTypes["PHOENIX_SET_SORT"] = "PHOENIX_SET_SORT";
        ActionTypes["PHOENIX_FREE_GAME_ID"] = "PHOENIX_FREE_GAME_ID";
        ActionTypes["PHOENIX_FREE_GAME_RATE"] = "PHOENIX_FREE_GAME_RATE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("changeGame", changeGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_CHANGE_GAME, gameType => {
        return {
          gameType
        };
      }));

      _export("updateBalance", updateBalance = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_UPDATE_BALANCE, balance => {
        return {
          balance
        };
      }));

      _export("changeViewGame", changeViewGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_CHANGE_VIEW_GAME, gameType => {
        return {
          gameType
        };
      }));

      _export("changeProfit", changeProfit = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_CHANGE_PROFIT, profit => {
        return {
          profit
        };
      })); // export const changeBetAmount = reduxAct.createAction(ActionTypes.PHOENIX_CHANGE_BET_AMOUNT,
      //   (betAmount: number): ActionPayLoad<ActionTypes.PHOENIX_CHANGE_BET_AMOUNT> => {
      //     return { betAmount }
      //   })


      _export("changeAutoLauncherType", changeAutoLauncherType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_CHANGE_AUTO_LAUNCHER_TYPE, autoLauncherType => {
        return {
          autoLauncherType
        };
      }));

      _export("updateSubGameTimes", updateSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_UPDATE_SUBGAME_TIMES, subGameTimes => {
        return {
          subGameTimes
        };
      }));
      /**设置缓存的次数 */


      _export("setSubGameTimes", setSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_SUBGAME_TIMES, subGameTimes => {
        return {
          subGameTimes
        };
      }));

      _export("updateJackpotAmount", updateJackpotAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_UPDATE_JACKPOT_AMOUNT, jackpotAmount => {
        return {
          jackpotAmount
        };
      }));

      _export("setWaiting", setWaiting = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_WAITING, isWaiting => {
        return {
          isWaiting
        };
      }));

      _export("setShowAuthLaunch", setShowAuthLaunch = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_AUTO_LAUNCH, isShowAutoLaunch => {
        return {
          isShowAutoLaunch
        };
      }));

      _export("setAutoLaunchedTimes", setAutoLaunchedTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_AUTO_LAUNCHED_TIMES, autoLaunchedTimes => {
        return {
          autoLaunchedTimes
        };
      }));

      _export("setStopMode", setStopMode = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_STOP_MODE, stopMode => {
        return {
          stopMode
        };
      }));

      _export("setSortStop", setSortStop = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_SORT, isSortStop => {
        return {
          isSortStop
        };
      }));

      _export("setFreeGameId", setFreeGameId = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_FREE_GAME_ID, freeGamePositionId => {
        return {
          freeGamePositionId
        };
      }));

      _export("setFreeGameRate", setFreeGameRate = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_FREE_GAME_RATE, freeGameRate => {
        return {
          freeGameRate
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e0002adf1ce775cd0e09d75d701da1bf66ceac06.js.map