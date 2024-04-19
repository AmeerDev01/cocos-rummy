System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, IconEffectType, _crd, initState, ActionTypes, initRollAction, beginRollAction, setStopRollAction, endRollingAction, setIconEffect, setRollRoundEnd, setRollSpeed, setIconYuanBaoEffect, setIconFreeGameEffect;

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

      _cclegacy._RF.push({}, "b5934LL9ypK0IVJ13bYoGLH", "roller", undefined);

      _export("initState", initState = {
        rollerMap: [],
        roundAllEnd: true,
        iconEffectData: {
          iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
            error: Error()
          }), IconEffectType) : IconEffectType).NONE,
          coord: []
        },
        iconYuanBaoEffectData: {
          iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
            error: Error()
          }), IconEffectType) : IconEffectType).NONE,
          coord: []
        },
        iconFreeGameEffectData: {
          iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
            error: Error()
          }), IconEffectType) : IconEffectType).NONE,

          /**示例数据：[[0,1],[1,2],[2,1]] */
          coord: []
        }
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["PHOENIX_INIT_ROLL"] = "PHOENIX_INIT_ROLL";
        ActionTypes["PHOENIX_BEGIN_ROLL"] = "PHOENIX_BEGIN_ROLL";
        ActionTypes["PHOENIX_SET_STOP_ROLL"] = "PHOENIX_SET_STOP_ROLL";
        ActionTypes["PHOENIX_END_ROLLING"] = "PHOENIX_END_ROLL";
        ActionTypes["PHOENIX_SET_FLICKER"] = "PHOENIX_SET_FLICKER";
        ActionTypes["PHOENIX_SET_ROUNT_END"] = "PHOENIX_SET_ROUNT_END";
        ActionTypes["PHOENIX_SET_ROLL_SPEED"] = "PHOENIX_SET_ROLL_SPEED";
        ActionTypes["PHOENIX_SET_YUANBAO_FLICKER"] = "PHOENIX_SET_YUANBAO_FLICKER";
        ActionTypes["PHOENIX_SET_FREEGAME_FLICKER"] = "PHOENIX_SET_FREEGAME_FLICKER";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("initRollAction", initRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_INIT_ROLL, rollerMap => {
        return {
          rollerMap
        };
      }));

      _export("beginRollAction", beginRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_BEGIN_ROLL, (rollerIndex, speed, direction) => {
        return {
          rollerIndex,
          speed,
          direction
        };
      }));

      _export("setStopRollAction", setStopRollAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_STOP_ROLL, (rollerIndex, stopIconIndex) => {
        return {
          rollerIndex,
          stopIconIndex
        };
      }));

      _export("endRollingAction", endRollingAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_END_ROLLING, (rollerIndex, rolling) => {
        return {
          rollerIndex,
          rolling
        };
      }));

      _export("setIconEffect", setIconEffect = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_FLICKER, (iconEffect, flickerCoord) => {
        return {
          iconEffect,
          flickerCoord
        };
      }));

      _export("setRollRoundEnd", setRollRoundEnd = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_ROUNT_END, roundAllEnd => {
        return {
          roundAllEnd
        };
      }));

      _export("setRollSpeed", setRollSpeed = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_ROLL_SPEED, (speedMultiple, rollerIndex) => {
        return {
          speedMultiple,
          rollerIndex
        };
      }));

      _export("setIconYuanBaoEffect", setIconYuanBaoEffect = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_YUANBAO_FLICKER, (iconEffect, flickerCoord) => {
        return {
          iconEffect,
          flickerCoord
        };
      }));

      _export("setIconFreeGameEffect", setIconFreeGameEffect = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.PHOENIX_SET_FREEGAME_FLICKER, (iconEffect, flickerCoord) => {
        return {
          iconEffect,
          flickerCoord
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa0b56a2666a0cdef36666c50be5347259bb7797.js.map