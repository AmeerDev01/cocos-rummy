System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, updatePokerInfo, setPokerLeftAction, setPokerRightAction, setSendedPAction, setReadyPAction, setWinAction, setTipsAction, setVipAction, setLevelAction, resetPokerStore;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
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

      _cclegacy._RF.push({}, "8ea28QiWIJL0KGbEIIOZ+f8", "pokerDetail", undefined);

      _export("initState", initState = {
        pokerInfo: null,
        pokerLeftNum: {
          suit: 0,
          //花色
          rank: "",
          //数字
          color: 0
        },
        pokerRightNum: {
          suit: 0,
          //花色
          rank: "",
          //数字
          color: 0
        },
        sendedP: 0,
        readySendP: 0,
        win: 0,
        tips: null,
        vip: 0,
        level: 0
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["DRAGONTGER_POKER_INFO"] = "DRAGONTGER_POKER_INFO";
        ActionTypes["DRAGONTGER_POKER_LEFT"] = "DRAGONTGER_POKER_LEFT";
        ActionTypes["DRAGONTGER_POKER_RIGHT"] = "DRAGONTGER_POKER_RIGHT";
        ActionTypes["DRAGONTGER_POKER_SENDEDP"] = "DRAGONTGER_POKER_SENDEDP";
        ActionTypes["DRAGONTGER_POKER_WIN"] = "DRAGONTGER_POKER_WIN";
        ActionTypes["DRAGONTGER_POKER_READYSENDP"] = "DRAGONTGER_POKER_READYSENDP";
        ActionTypes["DRAGONTGER_TIPS"] = "DRAGONTGER_TIPS";
        ActionTypes["DRAGONTGER_VIP"] = "DRAGONTGER_VIP";
        ActionTypes["DRAGONTGER_LEVEL"] = "DRAGONTGER_LEVEL";
        ActionTypes["DRAGONTGER_POKER_RESET_STORE"] = "DRAGONTGER_POKER_RESET_STORE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("updatePokerInfo", updatePokerInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_POKER_INFO, pokerInfo => {
        return {
          pokerInfo
        };
      }));

      _export("setPokerLeftAction", setPokerLeftAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_POKER_LEFT, pokerLeftNum => {
        return {
          pokerLeftNum
        };
      }));

      _export("setPokerRightAction", setPokerRightAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_POKER_RIGHT, pokerRightNum => {
        return {
          pokerRightNum
        };
      }));

      _export("setSendedPAction", setSendedPAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_POKER_SENDEDP, sendedP => {
        return {
          sendedP
        };
      }));

      _export("setReadyPAction", setReadyPAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_POKER_READYSENDP, readySendP => {
        return {
          readySendP
        };
      }));

      _export("setWinAction", setWinAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_POKER_WIN, win => {
        return {
          win
        };
      }));

      _export("setTipsAction", setTipsAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_TIPS, tips => {
        return {
          tips
        };
      }));

      _export("setVipAction", setVipAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_VIP, vip => {
        return {
          vip
        };
      }));

      _export("setLevelAction", setLevelAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_LEVEL, level => {
        return {
          level
        };
      }));

      _export("resetPokerStore", resetPokerStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_POKER_RESET_STORE, () => {
        return {
          initState
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57cb55036fd287c27af7d66e3b13a7c98961495f.js.map