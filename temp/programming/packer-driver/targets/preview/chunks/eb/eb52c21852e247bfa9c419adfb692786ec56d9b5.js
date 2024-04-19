System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, IconEffectType, _crd, initState, ActionTypes, initRollAction, beginRollAction, setStopRollAction, endRollingAction, setIconEffect, setRollRoundEnd, setRollSpeed;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirectionType(extras) {
    _reporterNs.report("DirectionType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconEffectType(extras) {
    _reporterNs.report("IconEffectType", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      IconEffectType = _unresolved_2.IconEffectType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "524d6UWt5JMwoeUFzXlM4Bi", "roller", undefined);

      _export("initState", initState = {
        rollerMap: [],
        roundAllEnd: true,
        iconEffectData: {
          iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
            error: Error()
          }), IconEffectType) : IconEffectType).NONE,
          coord: []
        }
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["FRUIT777_INIT_ROLL"] = "FRUIT777_INIT_ROLL";
        ActionTypes["FRUIT777_BEGIN_ROLL"] = "FRUIT777_BEGIN_ROLL";
        ActionTypes["FRUIT777_SET_STOP_ROLL"] = "FRUIT777_SET_STOP_ROLL";
        ActionTypes["FRUIT777_END_ROLLING"] = "FRUIT777_END_ROLL";
        ActionTypes["FRUIT777_SET_FLICKER"] = "FRUIT777_SET_FLICKER";
        ActionTypes["FRUIT777_SET_ROUNT_END"] = "FRUIT777_SET_ROUNT_END";
        ActionTypes["FRUIT777_SET_ROLL_SPEED"] = "FRUIT777_SET_ROLL_SPEED";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("initRollAction", initRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_INIT_ROLL, rollerMap => {
        return {
          rollerMap
        };
      }));

      _export("beginRollAction", beginRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_BEGIN_ROLL, (rollerIndex, speed, direction) => {
        return {
          rollerIndex,
          speed,
          direction
        };
      }));

      _export("setStopRollAction", setStopRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_STOP_ROLL, (rollerIndex, stopIconIndex) => {
        return {
          rollerIndex,
          stopIconIndex
        };
      }));

      _export("endRollingAction", endRollingAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_END_ROLLING, (rollerIndex, rolling) => {
        return {
          rollerIndex,
          rolling
        };
      }));

      _export("setIconEffect", setIconEffect = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_FLICKER, (iconEffect, flickerCoord) => {
        return {
          iconEffect,
          flickerCoord
        };
      }));

      _export("setRollRoundEnd", setRollRoundEnd = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_ROUNT_END, roundAllEnd => {
        return {
          roundAllEnd
        };
      }));

      _export("setRollSpeed", setRollSpeed = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.FRUIT777_SET_ROLL_SPEED, (speedMultiple, rollerIndex) => {
        return {
          speedMultiple,
          rollerIndex
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb52c21852e247bfa9c419adfb692786ec56d9b5.js.map