System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, AutoLauncherType, GameType, SMALLGAME, _crd, initState, ActionTypes, changeGame, updateBalance, changeViewGame, changeProfit, changeAutoLauncherType, updateSubGameTimes, setSubGameTimes, updateJackpotAmount, setWaiting, setShowAuthLaunch, setAutoLaunchedTimes, setStopMode, setSortStop, setFreeGameId, setFreeGameRate, setJackPotUserArr;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackPotUserType(extras) {
    _reporterNs.report("JackPotUserType", "../../type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "38b60P0I9VDoYyAEWzpiyi0", "game", undefined);

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
        freeGameRate: 0,
        jackPotUserArr: []
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["DFDC_CHANGE_GAME"] = "DFDC_CHANGE_GAME";
        ActionTypes["DFDC_UPDATE_BALANCE"] = "DFDC_UPDATE_BALANCE";
        ActionTypes["DFDC_CHANGE_VIEW_GAME"] = "DFDC_CHANGE_VIEW_GAME";
        ActionTypes["DFDC_CHANGE_PROFIT"] = "DFDC_CHANGE_PROFIT";
        ActionTypes["DFDC_CHANGE_BET_AMOUNT"] = "DFDC_CHANGE_BET_AMOUNT";
        ActionTypes["DFDC_CHANGE_AUTO_LAUNCHER_TYPE"] = "DFDC_CHANGE_AUTO_LAUNCHER_TYPE";
        ActionTypes["DFDC_UPDATE_SUBGAME_TIMES"] = "DFDC_UPDATE_SUBGAME_TIMES";
        ActionTypes["DFDC_SET_SUBGAME_TIMES"] = "DFDC_SET_SUBGAME_TIMES";
        ActionTypes["DFDC_UPDATE_JACKPOT_AMOUNT"] = "DFDC_UPDATE_JACKPOT_AMOUNT";
        ActionTypes["DFDC_SET_WAITING"] = "DFDC_SET_WAITING";
        ActionTypes["DFDC_SET_AUTO_LAUNCH"] = "DFDC_SET_AUTO_LAUNCH";
        ActionTypes["DFDC_SET_AUTO_LAUNCHED_TIMES"] = "DFDC_SET_AUTO_LAUNCHED_TIMES";
        ActionTypes["DFDC_SET_STOP_MODE"] = "DFDC_SET_STOP_MODE";
        ActionTypes["DFDC_SET_SORT"] = "DFDC_SET_SORT";
        ActionTypes["DFDC_FREE_GAME_ID"] = "DFDC_FREE_GAME_ID";
        ActionTypes["DFDC_FREE_GAME_RATE"] = "DFDC_FREE_GAME_RATE";
        ActionTypes["DFDC_JACK_POT_USER"] = "DFDC_JACK_POT_USER";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("changeGame", changeGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_CHANGE_GAME, gameType => {
        return {
          gameType
        };
      }));

      _export("updateBalance", updateBalance = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_UPDATE_BALANCE, balance => {
        return {
          balance
        };
      }));

      _export("changeViewGame", changeViewGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_CHANGE_VIEW_GAME, gameType => {
        return {
          gameType
        };
      }));

      _export("changeProfit", changeProfit = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_CHANGE_PROFIT, profit => {
        return {
          profit
        };
      })); // export const changeBetAmount = reduxAct.createAction(ActionTypes.DFDC_CHANGE_BET_AMOUNT,
      //   (betAmount: number): ActionPayLoad<ActionTypes.DFDC_CHANGE_BET_AMOUNT> => {
      //     return { betAmount }
      //   })


      _export("changeAutoLauncherType", changeAutoLauncherType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_CHANGE_AUTO_LAUNCHER_TYPE, autoLauncherType => {
        return {
          autoLauncherType
        };
      }));

      _export("updateSubGameTimes", updateSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_UPDATE_SUBGAME_TIMES, subGameTimes => {
        return {
          subGameTimes
        };
      }));
      /**设置缓存的次数 */


      _export("setSubGameTimes", setSubGameTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_SET_SUBGAME_TIMES, subGameTimes => {
        return {
          subGameTimes
        };
      }));

      _export("updateJackpotAmount", updateJackpotAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_UPDATE_JACKPOT_AMOUNT, jackpotAmount => {
        return {
          jackpotAmount
        };
      }));

      _export("setWaiting", setWaiting = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_SET_WAITING, isWaiting => {
        return {
          isWaiting
        };
      }));

      _export("setShowAuthLaunch", setShowAuthLaunch = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_SET_AUTO_LAUNCH, isShowAutoLaunch => {
        return {
          isShowAutoLaunch
        };
      }));

      _export("setAutoLaunchedTimes", setAutoLaunchedTimes = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_SET_AUTO_LAUNCHED_TIMES, autoLaunchedTimes => {
        return {
          autoLaunchedTimes
        };
      }));

      _export("setStopMode", setStopMode = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_SET_STOP_MODE, stopMode => {
        return {
          stopMode
        };
      }));

      _export("setSortStop", setSortStop = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_SET_SORT, isSortStop => {
        return {
          isSortStop
        };
      }));

      _export("setFreeGameId", setFreeGameId = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_FREE_GAME_ID, freeGamePositionId => {
        return {
          freeGamePositionId
        };
      }));

      _export("setFreeGameRate", setFreeGameRate = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_FREE_GAME_RATE, freeGameRate => {
        return {
          freeGameRate
        };
      }));

      _export("setJackPotUserArr", setJackPotUserArr = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DFDC_JACK_POT_USER, jackPotUserArr => {
        return {
          jackPotUserArr
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2153517532227984a3d9bea7b3607f802af76c95.js.map