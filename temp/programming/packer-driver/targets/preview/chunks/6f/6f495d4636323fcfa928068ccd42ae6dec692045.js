System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setUserInfoAction, resetUserStore;

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

      _cclegacy._RF.push({}, "72968DapLBFz5xhCu9+Wzx9", "userInfo", undefined);

      _export("initState", initState = {
        gold: null,
        memberName: "",
        memberId: "",
        icon: 0,
        //头像的spriteFrame下标值
        winGold: 0,
        winType: 0,
        memberBet: {}
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["DRAGONTGER_MENBER_INFO"] = "DRAGONTGER_MENBER_INFO";
        ActionTypes["DRAGONTGER_MENBER_RESET_STORE"] = "DRAGONTGER_MENBER_RESET_STORE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**初始化用户信息 */
      _export("setUserInfoAction", setUserInfoAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_MENBER_INFO, userInfo => {
        return _extends({}, userInfo);
      }));

      _export("resetUserStore", resetUserStore = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.DRAGONTGER_MENBER_RESET_STORE, () => {
        return {
          initState
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f495d4636323fcfa928068ccd42ae6dec692045.js.map