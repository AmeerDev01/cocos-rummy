System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, changeBlueCardAction, changeRedCardAction, changeTwinNumAction, changeWinAreaAction;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTwinNum(extras) {
    _reporterNs.report("TwinNum", "../../type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "165b4C3xw1NvJIgS4mQLKWJ", "pokerDetail", undefined);

      _export("initState", initState = {
        blueCard: null,
        redCard: null,
        twinNum: null,
        winArea: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDARQIUQIU_BLUE_CARD"] = "BANDARQIUQIU_BLUE_CARD";
        ActionTypes["BANDARQIUQIU_RED_CARD"] = "BANDARQIUQIU_RED_CARD";
        ActionTypes["BANDARQIUQIU_TWIN_NUM"] = "BANDARQIUQIU_TWIN_NUM";
        ActionTypes["BANDARQIUQIU_WIN_AREA"] = "BANDARQIUQIU_WIN_AREA";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**改变蓝方的牌 */
      _export("changeBlueCardAction", changeBlueCardAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_BLUE_CARD, blueCard => {
        return {
          blueCard
        };
      }));
      /**改变红方的牌 */


      _export("changeRedCardAction", changeRedCardAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_RED_CARD, redCard => {
        return {
          redCard
        };
      }));
      /**改变牌的点数 */


      _export("changeTwinNumAction", changeTwinNumAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_TWIN_NUM, twinNum => {
        return {
          twinNum
        };
      }));
      /**赢的区域 */


      _export("changeWinAreaAction", changeWinAreaAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDARQIUQIU_WIN_AREA, winArea => {
        return {
          winArea
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea42e9e68ca2fdd16b174827778c7a20689f09fd.js.map