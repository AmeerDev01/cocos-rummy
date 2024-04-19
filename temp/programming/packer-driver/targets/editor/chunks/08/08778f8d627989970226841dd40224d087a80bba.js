System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, AutoLauncherType, GameType, _crd, initState, ActionTypes, changeGame, updateBalance, changeViewGame, changeProfit, changeAutoLauncherType, updateSubGameTimes, setSubGameTimes, updateJackpotAmount, setWaiting, setShowAuthLaunch, setAutoLaunchedTimes, setStopMode, setSortStop, resetStore;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../type", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01d5cmGYDlH9bGXlj8/Y3QL", "game", undefined);

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
        stopMode: 'jump',
        isSortStop: true
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["FRUIT777_CHANGE_GAME"] = "FRUIT777_CHANGE_GAME";
        ActionTypes["FRUIT777_UPDATE_BALANCE"] = "FRUIT777_UPDATE_BALANCE";
        ActionTypes["FRUIT777_CHANGE_VIEW_GAME"] = "FRUIT777_CHANGE_VIEW_GAME";
        ActionTypes["FRUIT777_CHANGE_PROFIT"] = "FRUIT777_CHANGE_PROFIT";
        ActionTypes["FRUIT777_CHANGE_BET_AMOUNT"] = "FRUIT777_CHANGE_BET_AMOUNT";
        ActionTypes["FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE"] = "FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE";
        ActionTypes["FRUIT777_UPDATE_SUBGAME_TIMES"] = "FRUIT777_UPDATE_SUBGAME_TIMES";
        ActionTypes["FRUIT777_SET_SUBGAME_TIMES"] = "FRUIT777_SET_SUBGAME_TIMES";
        ActionTypes["FRUIT777_UPDATE_JACKPOT_AMOUNT"] = "FRUIT777_UPDATE_JACKPOT_AMOUNT";
        ActionTypes["FRUIT777_SET_WAITING"] = "FRUIT777_SET_WAITING";
        ActionTypes["FRUIT777_SET_AUTO_LAUNCH"] = "FRUIT777_SET_AUTO_LAUNCH";
        ActionTypes["FRUIT777_SET_AUTO_LAUNCHED_TIMES"] = "FRUIT777_SET_AUTO_LAUNCHED_TIMES";
        ActionTypes["FRUIT777_SET_STOP_MODE"] = "FRUIT777_SET_STOP_MODE";
        ActionTypes["FRUIT777_SET_SORT"] = "FRUIT777_SET_SORT";
        ActionTypes["FRUIT777_RESET_STORE"] = "FRUIT777_RESET_STORE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("changeGame", changeGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_CHANGE_GAME, gameType => {
        return {
          gameType
        };
      }));

      _export("updateBalance", updateBalance = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_UPDATE_BALANCE, balance => {
        return {
          balance
        };
      }));

      _export("changeViewGame", changeViewGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_CHANGE_VIEW_GAME, gameType => {
        return {
          gameType
        };
      }));

      _export("changeProfit", changeProfit = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_CHANGE_PROFIT, profit => {
        return {
          profit
        };
      })); // export const changeBetAmount = reduxAct.createAction(ActionTypes.FRUIT777_CHANGE_BET_AMOUNT,
      //   (betAmount: number): ActionPayLoad<ActionTypes.FRUIT777_CHANGE_BET_AMOUNT> => {
      //     return { betAmount }
      //   })


      _export("changeAutoLauncherType", changeAutoLauncherType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE, autoLauncherType => {
        return {
          autoLauncherType
        };
      }));

      _export("updateSubGameTimes", updateSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_UPDATE_SUBGAME_TIMES, subGameTimes => {
        // console.log('subGameTimes', subGameTimes)
        return {
          subGameTimes
        };
      }));
      /**设置缓存的次数 */


      _export("setSubGameTimes", setSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_SUBGAME_TIMES, subGameTimes => {
        return {
          subGameTimes
        };
      }));

      _export("updateJackpotAmount", updateJackpotAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_UPDATE_JACKPOT_AMOUNT, jackpotAmount => {
        return {
          jackpotAmount
        };
      }));

      _export("setWaiting", setWaiting = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_WAITING, isWaiting => {
        return {
          isWaiting
        };
      }));

      _export("setShowAuthLaunch", setShowAuthLaunch = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_AUTO_LAUNCH, isShowAutoLaunch => {
        return {
          isShowAutoLaunch
        };
      }));

      _export("setAutoLaunchedTimes", setAutoLaunchedTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_AUTO_LAUNCHED_TIMES, autoLaunchedTimes => {
        return {
          autoLaunchedTimes
        };
      }));

      _export("setStopMode", setStopMode = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_STOP_MODE, stopMode => {
        return {
          stopMode
        };
      }));

      _export("setSortStop", setSortStop = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_SORT, isSortStop => {
        return {
          isSortStop
        };
      }));

      _export("resetStore", resetStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_RESET_STORE, () => {
        return {
          initState
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=08778f8d627989970226841dd40224d087a80bba.js.map