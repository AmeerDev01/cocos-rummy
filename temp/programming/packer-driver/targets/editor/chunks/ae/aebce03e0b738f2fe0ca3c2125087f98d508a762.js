System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setBetDataAction, setNewBetDataAction, setLastBetAction, setMemberBetAction, changeSelectChipAction, changeGoldDataAction, changeWinAreaRateAction, changeCardTypeAction, changeAllCardRateAction, changeAllWinUsersAction, changeAreaWinLoseAction, changeCancelBetDataAction;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendBet(extras) {
    _reporterNs.report("SendBet", "../../type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "75b2akaufVCcKhYwNMrNd1h", "bet", undefined);

      _export("initState", initState = {
        newBetData: null,
        betData: null,
        memberBet: null,
        lastBet: null,
        selectChip: 1000,
        goldData: null,
        winAreaRate: null,
        allCardRate: null,
        areaWinLose: null,
        allWinUsers: null,
        cardType: null,
        cancelBetData: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDARQIUQIU_BET_DATA"] = "BANDARQIUQIU_BET_DATA";
        ActionTypes["BANDARQIUQIU_LAST_BET_DATA"] = "BANDARQIUQIU_LAST_BET_DATA";
        ActionTypes["BANDARQIUQIU_CHANGE_SELECT_CHIP"] = "BANDARQIUQIU_CHANGE_SELECT_CHIP";
        ActionTypes["BANDARQIUQIU_NEW_BET_DATA"] = "BANDARQIUQIU_NEW_BET_DATA";
        ActionTypes["BANDARQIUQIU_GOLD_DATA"] = "BANDARQIUQIU_GOLD_DATA";
        ActionTypes["BANDARQIUQIU_CARD_RATE"] = "BANDARQIUQIU_CARD_RATE";
        ActionTypes["BANDARQIUQIU_CARD_TYPE"] = "BANDARQIUQIU_CARD_TYPE";
        ActionTypes["BANDARQIUQIU_ALL_CARD_RATE"] = "BANDARQIUQIU_ALL_CARD_RATE";
        ActionTypes["BANDARQIUQIU_ALL_WIN_USER"] = "BANDARQIUQIU_ALL_WIN_USER";
        ActionTypes["BANDARQIUQIU_AREA_WIN_LOSE"] = "BANDARQIUQIU_AREA_WIN_LOSE";
        ActionTypes["BANDARQIUQIU_MEMBER_BET"] = "BANDARQIUQIU_MEMBER_BET";
        ActionTypes["BANDARQIUQIU_CANCEL_BET_DATA"] = "BANDARQIUQIU_CANCEL_BET_DATA";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /** 更新下注信息*/
      _export("setBetDataAction", setBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_BET_DATA, betData => {
        return {
          betData
        };
      }));
      /** 更新最新下注信息*/


      _export("setNewBetDataAction", setNewBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_NEW_BET_DATA, newBetData => {
        return {
          newBetData
        };
      }));
      /** 更新最新上把下注信息*/


      _export("setLastBetAction", setLastBetAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_LAST_BET_DATA, lastBet => {
        return {
          lastBet
        };
      }));
      /** 更新最新用户下注区域金币值*/


      _export("setMemberBetAction", setMemberBetAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_MEMBER_BET, memberBet => {
        return {
          memberBet
        };
      }));
      /** 更新最新选择金币值*/


      _export("changeSelectChipAction", changeSelectChipAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_CHANGE_SELECT_CHIP, selectChip => {
        return {
          selectChip
        };
      }));
      /** 更新最新区域下注总值*/


      _export("changeGoldDataAction", changeGoldDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_GOLD_DATA, goldData => {
        return {
          goldData
        };
      }));
      /** 更新最新赢的区域*/


      _export("changeWinAreaRateAction", changeWinAreaRateAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_CARD_RATE, winAreaRate => {
        return {
          winAreaRate
        };
      }));
      /** 更新最新牌型 twin six qiu twins...*/


      _export("changeCardTypeAction", changeCardTypeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_CARD_TYPE, cardType => {
        return {
          cardType
        };
      }));
      /** 更新最新牌的倍率值*/


      _export("changeAllCardRateAction", changeAllCardRateAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_ALL_CARD_RATE, allCardRate => {
        return {
          allCardRate
        };
      }));
      /** 更新最新所有赢的玩家信息*/


      _export("changeAllWinUsersAction", changeAllWinUsersAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_ALL_WIN_USER, allWinUsers => {
        return {
          allWinUsers
        };
      }));
      /** 更新区域输赢*/


      _export("changeAreaWinLoseAction", changeAreaWinLoseAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_AREA_WIN_LOSE, areaWinLose => {
        return {
          areaWinLose
        };
      }));
      /** 更新下注失败的的金币信息*/


      _export("changeCancelBetDataAction", changeCancelBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_CANCEL_BET_DATA, cancelBetData => {
        return {
          cancelBetData
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aebce03e0b738f2fe0ca3c2125087f98d508a762.js.map