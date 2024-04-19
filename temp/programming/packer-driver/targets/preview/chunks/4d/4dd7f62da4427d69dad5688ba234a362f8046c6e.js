System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, setMemberInfo, resetMemberInfo, setVip, changeGold, updateActivityStatus;

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

      _cclegacy._RF.push({}, "6ba63veJuRNMZ7HTtlEybBC", "memberInfo", undefined);

      _export("initState", initState = {
        memberName: "",
        avatarIndex: 0,
        memberAssetGoldPieces: 0,
        memberAssetSafeGoldPieces: 0,
        memberId: '',
        nickName: '',
        vipLevel: 0,
        vipLevelExperience: 0,
        gender: 0,
        level: 0,
        levelExperience: 0,
        phone: "",
        tourist: 1,
        memberRechargeWater: 0,
        minimumWithdrawal: 0,
        totalFlowingWater: 0,
        canExtractRebateGold: 0,
        rebateScale: 0,
        totalReturnWaterAmount: 0,
        flowingWater: 0,
        isUnreadActivity: false
      });
      /**必须大写，不然redux-act这狗日的要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["SET_MEMBER_INFO"] = "SET_MEMBER_INFO";
        ActionTypes["RESET_MEMBER_INFO_DATA"] = "RESET_MEMBER_INFO_DATA";
        ActionTypes["SET_VIP"] = "SET_VIP";
        ActionTypes["CHANGE_GOLD"] = "CHANGE_GOLD";
        ActionTypes["UPDATE_ACTIVITY_STATUS"] = "UPDATE_ACTIVITY_STATUS";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("setMemberInfo", setMemberInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SET_MEMBER_INFO, memberInfo => {
        return _extends({}, memberInfo);
      }));

      _export("resetMemberInfo", resetMemberInfo = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.RESET_MEMBER_INFO_DATA, () => {}));

      _export("setVip", setVip = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.SET_VIP, (vipLevel, vipLevelExperience) => {
        return {
          vipLevel,
          vipLevelExperience
        };
      }));

      _export("changeGold", changeGold = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.CHANGE_GOLD, value => {
        return {
          value
        };
      }));

      _export("updateActivityStatus", updateActivityStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.UPDATE_ACTIVITY_STATUS, isUnreadActivity => {
        return {
          isUnreadActivity
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4dd7f62da4427d69dad5688ba234a362f8046c6e.js.map