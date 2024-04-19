System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, changeMinHistoryAction, changeMaxHistoryAction;

  function _reportPossibleCrUseOfHistory(extras) {
    _reporterNs.report("History", "../../type", _context.meta, extras);
  }

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

      _cclegacy._RF.push({}, "aa8a5PzYTVBxbhasuS2Rwbi", "history", undefined);

      _export("initState", initState = {
        minHistory: null,
        maxHistory: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDARQIUQIU_MIN_HISTORY"] = "BANDARQIUQIU_MIN_HISTORY";
        ActionTypes["BANDARQIUQIU_MAX_HISTORY"] = "BANDARQIUQIU_MAX_HISTORY";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**改变小板历史记录 */
      _export("changeMinHistoryAction", changeMinHistoryAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_MIN_HISTORY, minHistory => {
        return {
          minHistory
        };
      }));
      /**改变大板历史记录 */


      _export("changeMaxHistoryAction", changeMaxHistoryAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_MAX_HISTORY, maxHistory => {
        return {
          maxHistory
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09159f9c4744546ec6705dc2fd4328377c375133.js.map