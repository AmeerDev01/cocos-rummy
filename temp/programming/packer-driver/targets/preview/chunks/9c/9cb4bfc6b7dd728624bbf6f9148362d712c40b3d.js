System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setUserInfoAction;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

      _cclegacy._RF.push({}, "6ba26BoU4lGYohLF5oNFWr+", "userInfo", undefined);

      _export("initState", initState = {});
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDAR_MEMBER_INFO"] = "BANDAR_MEMBER_INFO";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("setUserInfoAction", setUserInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_MEMBER_INFO, userInfo => {
        return _extends({}, userInfo);
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9cb4bfc6b7dd728624bbf6f9148362d712c40b3d.js.map