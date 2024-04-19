System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setWithdrawChannelList, sizeChangeAction, resetWithDrawInfo;

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

      _cclegacy._RF.push({}, "7868cZACRhLDbXeG4YeHGQP", "withdraw", undefined);

      _export("initState", initState = {
        withdrawBankChannelChoose: null,
        withdrawBankChannelList: []
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["SET_BANK_CHANNEL_LIST"] = "SET_BANK_CHANNEL_LIST";
        ActionTypes["SET_BANK_CHANNEL_CHOOSE"] = "SET_BANK_CHANNEL_CHOOSE";
        ActionTypes["RESET_WITHDRAW_DATA"] = "RESET_WITHDRAW_DATA";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("setWithdrawChannelList", setWithdrawChannelList = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SET_BANK_CHANNEL_LIST, list => {
        return {
          list
        };
      }));

      _export("sizeChangeAction", sizeChangeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SET_BANK_CHANNEL_CHOOSE, item => {
        return {
          item
        };
      }));

      _export("resetWithDrawInfo", resetWithDrawInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.RESET_WITHDRAW_DATA, () => {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0cfbbadba779e5b260abde51d2975cea0f53cc2.js.map