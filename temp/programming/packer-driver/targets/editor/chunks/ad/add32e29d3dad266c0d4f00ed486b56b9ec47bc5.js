System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, colorChangeAction, sizeChangeAction;

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

      _cclegacy._RF.push({}, "5a852Kidj9OO4U7Wdn8PtnU", "counter", undefined);

      _export("initState", initState = {
        size: 12,
        color: "#fcfcfc"
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["CHANGE_SIZE"] = "CHANGE_SIZE";
        ActionTypes["CHANGE_COLOR"] = "CHANGE_COLOR";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("colorChangeAction", colorChangeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.CHANGE_COLOR, color => {
        return {
          color
        };
      }));

      _export("sizeChangeAction", sizeChangeAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.CHANGE_SIZE, size => {
        return {
          size
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=add32e29d3dad266c0d4f00ed486b56b9ec47bc5.js.map