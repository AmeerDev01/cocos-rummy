System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, RollerStatus, _crd, initState, ActionTypes, updateRollerStatus, updateSpeedStatus, updateManualSpeedStatus, initRoller;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      RollerStatus = _unresolved_2.RollerStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4183ULEYpMj64nb65dxAKr", "roller", undefined);

      _export("initState", initState = {
        rollerStatus: (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
          error: Error()
        }), RollerStatus) : RollerStatus).END,
        isSpeed: false,
        isManualSpeed: false
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["THORV2_UPDATE_ROLLER_STATUS"] = "THORV2_UPDATE_ROLLER_STATUS";
        ActionTypes["THORV2_UPDATE_SPEED_STATUS"] = "THORV2_UPDATE_SPEED_STATUS";
        ActionTypes["THORV2_INIT_ROLLER"] = "THORV2_ROLLER_QUIT_GAME";
        ActionTypes["THORV2_UPDATE_MANUAL_SPEED_STATUS"] = "THORV2_UPDATE_MANUAL_SPEED_STATUS";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("updateRollerStatus", updateRollerStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_ROLLER_STATUS, rollerStatus => {
        return {
          rollerStatus
        };
      }));

      _export("updateSpeedStatus", updateSpeedStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_SPEED_STATUS, isSpeed => {
        return {
          isSpeed
        };
      }));

      _export("updateManualSpeedStatus", updateManualSpeedStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_UPDATE_MANUAL_SPEED_STATUS, isManualSpeed => {
        return {
          isManualSpeed
        };
      }));

      _export("initRoller", initRoller = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THORV2_INIT_ROLLER, () => {
        return {
          initState
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=603575ce4d0f258b465ca68caa21c9454d8bdf0b.js.map