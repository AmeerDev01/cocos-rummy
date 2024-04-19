System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, reduxAct, IconEffectType, _crd, initState, ActionTypes, initRollAction, beginRollAction, setStopRollAction, endRollingAction, setIconEffect, setSmallBox, setRollRoundEnd, setRollSpeed;

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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      IconEffectType = _unresolved_2.IconEffectType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72d66JkWzNMxp/ydREIWGp7", "roller", undefined);

      __checkObsolete__(['log']);

      _export("initState", initState = {
        rollerMap: [],
        roundAllEnd: true,
        iconEffectData: {
          iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
            error: Error()
          }), IconEffectType) : IconEffectType).NONE,
          coord: []
        },
        smallBox: {}
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["THOR_INIT_ROLL"] = "THOR_INIT_ROLL";
        ActionTypes["THOR_BEGIN_ROLL"] = "THOR_BEGIN_ROLL";
        ActionTypes["THOR_SET_STOP_ROLL"] = "THOR_SET_STOP_ROLL";
        ActionTypes["THOR_END_ROLLING"] = "THOR_END_ROLL";
        ActionTypes["THOR_SET_FLICKER"] = "THOR_SET_FLICKER";
        ActionTypes["THOR_SET_ROUNT_END"] = "THOR_SET_ROUNT_END";
        ActionTypes["THOR_SET_ROLL_SPEED"] = "THOR_SET_ROLL_SPEED";
        ActionTypes["THOR_SET_ROLL_SMALLBOX"] = "THOR_SET_ROLL_SMALLBOX";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("initRollAction", initRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_INIT_ROLL, rollerMap => {
        return {
          rollerMap
        };
      }));

      _export("beginRollAction", beginRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_BEGIN_ROLL, (rollerIndex, speed, direction) => {
        return {
          rollerIndex,
          speed,
          direction
        };
      }));

      _export("setStopRollAction", setStopRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_STOP_ROLL, (rollerIndex, stopIconIndex) => {
        return {
          rollerIndex,
          stopIconIndex
        };
      }));

      _export("endRollingAction", endRollingAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_END_ROLLING, (rollerIndex, rolling) => {
        return {
          rollerIndex,
          rolling
        };
      }));

      _export("setIconEffect", setIconEffect = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_FLICKER, (iconEffect, flickerCoord) => {
        return {
          iconEffect,
          flickerCoord
        };
      }));

      _export("setSmallBox", setSmallBox = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_ROLL_SMALLBOX, smallBox => {
        return {
          smallBox
        };
      }));

      _export("setRollRoundEnd", setRollRoundEnd = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_ROUNT_END, roundAllEnd => {
        return {
          roundAllEnd
        };
      }));

      _export("setRollSpeed", setRollSpeed = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.THOR_SET_ROLL_SPEED, (speedMultiple, rollerIndex) => {
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
//# sourceMappingURL=5c63cc2f4f112b23cdce7d636d5228b3eff8a40b.js.map