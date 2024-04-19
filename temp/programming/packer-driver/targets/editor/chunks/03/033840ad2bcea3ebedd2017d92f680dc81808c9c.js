System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setBetDataAction, setNewBetDataAction, setLastBetAction, setMemberBetAction, changeSelectChipAction, changeGoldDataAction, changeCardRateAction, changeCardTypeAction, changeAllCardRateAction, changeAllWinUsersAction, changeAreaWinLoseAction, changeCancelBetDataAction;

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

      _cclegacy._RF.push({}, "db331uTgzVJIKxhDTKvYYYN", "bet", undefined);

      _export("initState", initState = {
        newBetData: null,
        betData: null,
        memberBet: null,
        lastBet: null,
        selectChip: 1000,
        goldData: null,
        cardRate: null,
        allCardRate: null,
        areaWinLose: null,
        allWinUsers: null,
        cardType: null,
        cancelBetData: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDAR_BET_DATA"] = "BANDAR_BET_DATA";
        ActionTypes["BANDAR_LAST_BET_DATA"] = "BANDAR_LAST_BET_DATA";
        ActionTypes["BANDER_CHANGE_SELECT_CHIP"] = "BANDER_CHANGE_SELECT_CHIP";
        ActionTypes["BANDAR_NEW_BET_DATA"] = "BANDAR_NEW_BET_DATA";
        ActionTypes["BANDAR_GOLD_DATA"] = "BANDAR_GOLD_DATA";
        ActionTypes["BANDAR_CARD_RATE"] = "BANDAR_CARD_RATE";
        ActionTypes["BANDAR_CARD_TYPE"] = "BANDAR_CARD_TYPE";
        ActionTypes["BANDAR_ALL_CARD_RATE"] = "BANDAR_ALL_CARD_RATE";
        ActionTypes["BANDAR_ALL_WIN_USER"] = "BANDAR_ALL_WIN_USER";
        ActionTypes["BANDAR_AREA_WIN_LOSE"] = "BANDAR_AREA_WIN_LOSE";
        ActionTypes["BANDAR_MEMBER_BET"] = "BANDAR_MEMBER_BET";
        ActionTypes["BANDAR_CANCEL_BET_DATA"] = "BANDAR_CANCEL_BET_DATA";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /** 更新下注信息*/
      _export("setBetDataAction", setBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_BET_DATA, betData => {
        return {
          betData
        };
      }));
      /** 更新最新下注信息*/


      _export("setNewBetDataAction", setNewBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_NEW_BET_DATA, newBetData => {
        return {
          newBetData
        };
      }));
      /** 更新最新上把下注信息*/


      _export("setLastBetAction", setLastBetAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_LAST_BET_DATA, lastBet => {
        return {
          lastBet
        };
      }));
      /** 更新最新用户下注区域金币值*/


      _export("setMemberBetAction", setMemberBetAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_MEMBER_BET, memberBet => {
        return {
          memberBet
        };
      }));
      /** 更新最新选择金币值*/


      _export("changeSelectChipAction", changeSelectChipAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDER_CHANGE_SELECT_CHIP, selectChip => {
        return {
          selectChip
        };
      }));
      /** 更新最新区域下注总值*/


      _export("changeGoldDataAction", changeGoldDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_GOLD_DATA, goldData => {
        return {
          goldData
        };
      }));
      /** 更新最新牌的倍率值*/


      _export("changeCardRateAction", changeCardRateAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_CARD_RATE, cardRate => {
        return {
          cardRate
        };
      }));
      /** 更新最新牌型 QIUQIU TWINS...*/


      _export("changeCardTypeAction", changeCardTypeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_CARD_TYPE, cardType => {
        return {
          cardType
        };
      }));
      /** 更新最新牌的倍率值*/


      _export("changeAllCardRateAction", changeAllCardRateAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_ALL_CARD_RATE, allCardRate => {
        return {
          allCardRate
        };
      }));
      /** 更新最新所有赢的玩家信息*/


      _export("changeAllWinUsersAction", changeAllWinUsersAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_ALL_WIN_USER, allWinUsers => {
        return {
          allWinUsers
        };
      }));
      /** 更新区域输赢*/


      _export("changeAreaWinLoseAction", changeAreaWinLoseAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_AREA_WIN_LOSE, areaWinLose => {
        return {
          areaWinLose
        };
      }));
      /** 更新下注失败的的金币信息*/


      _export("changeCancelBetDataAction", changeCancelBetDataAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_CANCEL_BET_DATA, cancelBetData => {
        return {
          cancelBetData
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=033840ad2bcea3ebedd2017d92f680dc81808c9c.js.map