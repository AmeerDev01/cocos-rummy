System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, initSeat, changeSeat, changeOnlineNumber, changeMeGold, joinGame, quitGame, otherJoinGame, changeSeatBet, clearData, changeSeatWinlose, updatePower, cancelBetAmount;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerVo(extras) {
    _reporterNs.report("PowerVo", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98e56xUQA1EmbTChdmG9gCS", "game", undefined);

      _export("initState", initState = {
        profit: 0,
        onlineNumber: 0,
        jackpot: 0,
        seats: [],
        myHead: null,
        powers: null
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["YXX_INIT_SEATS"] = "YXX_INIT_SEATS";
        ActionTypes["YXX_CHANGE_SEAT"] = "YXX_CHANGE_SEAT";
        ActionTypes["YXX_CHANGE_ONLINE_NUMBER"] = "YXX_CHANGE_ONLINE_NUMBER";
        ActionTypes["YXX_CHANGE_ME_GOLD"] = "YXX_CHANGE_ME_GOLD";
        ActionTypes["YXX_CHANGE_JOIN_GAME"] = "YXX_CHANGE_JOIN_GAME";
        ActionTypes["YXX_CHANGE_OTHER_JOIN_GAME"] = "YXX_CHANGE_OTHER_JOIN_GAME";
        ActionTypes["YXX_CHANGE_QUIT_GAME"] = "YXX_CHANGE_QUIT_GAME";
        ActionTypes["YXX_CHANGE_SEAT_BET"] = "YXX_CHANGE_SEAT_BET";
        ActionTypes["YXX_CHANGE_CLEAR_DATA"] = "YXX_CHANGE_CLEAR_DATA";
        ActionTypes["YXX_CHANGE_SEAT_WINLOSS"] = "YXX_CHANGE_SEAT_WINLOSS";
        ActionTypes["YXX_UPDATE_POWER"] = "YXX_UPDATE_POWER";
        ActionTypes["YXX_GAME_CANCEL_BET"] = "YXX_GAME_CANCEL_BET";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("initSeat", initSeat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_INIT_SEATS, seats => {
        return {
          seats
        };
      }));

      _export("changeSeat", changeSeat = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_SEAT, headType => {
        return {
          headType
        };
      }));

      _export("changeOnlineNumber", changeOnlineNumber = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_ONLINE_NUMBER, onlineNumber => {
        return {
          onlineNumber
        };
      }));

      _export("changeMeGold", changeMeGold = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_ME_GOLD, gold => {
        return {
          gold
        };
      }));

      _export("joinGame", joinGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_JOIN_GAME, headType => {
        return {
          headType
        };
      }));

      _export("quitGame", quitGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_QUIT_GAME, userId => {
        return {
          userId
        };
      }));

      _export("otherJoinGame", otherJoinGame = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_OTHER_JOIN_GAME, headType => {
        return {
          headType
        };
      }));

      _export("changeSeatBet", changeSeatBet = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_SEAT_BET, betData => {
        return {
          betData
        };
      }));

      _export("clearData", clearData = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_CLEAR_DATA, () => {
        return {};
      }));

      _export("changeSeatWinlose", changeSeatWinlose = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_SEAT_WINLOSS, (index, winloss, gold) => {
        return {
          index,
          winloss,
          gold
        };
      }));

      _export("updatePower", updatePower = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_UPDATE_POWER, powers => {
        return {
          powers
        };
      }));

      _export("cancelBetAmount", cancelBetAmount = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_GAME_CANCEL_BET, cancelAmount => {
        return {
          cancelAmount
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46e5bfa983dda652a8c4e749280913b8905e8338.js.map