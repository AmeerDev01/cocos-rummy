System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, reduxAct, _crd, initState, ActionTypes, countdown, changeGameStatus, initResult, changeAnimationStatus, setTipType;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipType(extras) {
    _reporterNs.report("TipType", "../../type", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "206f574HkdASbPmlHiMufr7", "gameFlow", undefined);

      __checkObsolete__(['Game']);

      _export("initState", initState = {
        gameStatus: null,
        countdown: 0,
        results: [],
        newResult: null,
        animationStatus: null,
        tipType: null
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["YXX_COUNTDOWN"] = "YXX_COUNTDOWN";
        ActionTypes["YXX_CHANGE_GAME_STATUS"] = "YXX_CHANGE_GAME_STATUS";
        ActionTypes["YXX_INIT_RESULT"] = "YXX_INIT_RESULT";
        ActionTypes["YXX_CHNAGE_ANIMATION_STATUS"] = "YXX_CHNAGE_ANIMATION_STATUS";
        ActionTypes["YXX_TIP_TYPE"] = "YXX_TIP_TYPE";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("countdown", countdown = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_COUNTDOWN, countdown => {
        return {
          countdown
        };
      }));

      _export("changeGameStatus", changeGameStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHANGE_GAME_STATUS, (gameStatus, second, result) => {
        return {
          gameStatus,
          second,
          result
        };
      }));

      _export("initResult", initResult = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_INIT_RESULT, results => {
        return {
          results
        };
      }));

      _export("changeAnimationStatus", changeAnimationStatus = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CHNAGE_ANIMATION_STATUS, animationStatus => {
        return {
          animationStatus
        };
      }));

      _export("setTipType", setTipType = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_TIP_TYPE, tipType => {
        return {
          tipType
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48addfd1eb9c25d6bb3772f2541077333e2ec876.js.map