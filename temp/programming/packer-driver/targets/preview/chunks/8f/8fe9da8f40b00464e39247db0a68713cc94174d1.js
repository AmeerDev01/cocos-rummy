System.register(["__unresolved_0", "cc", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, _crd, initState, ActionTypes, changeResult1Action, changeResult2Action, changeResult3Action, changeResult4Action, changeTrenAction, changeStatistikAction, changeRekorAction, changeJackpotWinAction;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStatistik(extras) {
    _reporterNs.report("Statistik", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistory(extras) {
    _reporterNs.report("History", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRokerTar(extras) {
    _reporterNs.report("RokerTar", "../../type", _context.meta, extras);
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

      _cclegacy._RF.push({}, "c86c0KOKRNNZ7RVwDOs+Obl", "history", undefined); // import {MyInfo} from './userInfo';


      _export("initState", initState = {
        result1: [],
        result2: [],
        result3: [],
        result4: [],
        tren: null,
        statistik: null,
        rekor: null,
        jackpotWin: null
      });
      /**必须大写，不然redux-act要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["BANDAR_HISTORY_RESULT1"] = "BANDAR_HISTORY_RESULT1";
        ActionTypes["BANDAR_HISTORY_RESULT2"] = "BANDAR_HISTORY_RESULT2";
        ActionTypes["BANDAR_HISTORY_RESULT3"] = "BANDAR_HISTORY_RESULT3";
        ActionTypes["BANDAR_HISTORY_RESULT4"] = "BANDAR_HISTORY_RESULT4";
        ActionTypes["BANDAR_HISTORY_TREN"] = "BANDAR_HISTORY_TREN";
        ActionTypes["BANDAR_HISTORY_STATISTIK"] = "BANDAR_HISTORY_STATISTIK";
        ActionTypes["BANDAR_HISTORY_REKOR"] = "BANDAR_HISTORY_REKOR";
        ActionTypes["BANDAR_JACKPOT_WIN"] = "BANDAR_JACKPOT_WIN";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      /**改变黑桃区域历史记录 */
      _export("changeResult1Action", changeResult1Action = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HISTORY_RESULT1, result1 => {
        return {
          result1
        };
      }));
      /**改变红桃区域历史记录 */


      _export("changeResult2Action", changeResult2Action = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HISTORY_RESULT2, result2 => {
        return {
          result2
        };
      }));
      /**改变梅花区域历史记录 */


      _export("changeResult3Action", changeResult3Action = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HISTORY_RESULT3, result3 => {
        return {
          result3
        };
      }));
      /**改变方块区域历史记录 */


      _export("changeResult4Action", changeResult4Action = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HISTORY_RESULT4, result4 => {
        return {
          result4
        };
      }));
      /**改变历史输赢状况信息 */


      _export("changeTrenAction", changeTrenAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HISTORY_TREN, tren => {
        return {
          tren
        };
      }));
      /**改变筹码区输赢状况信息 */


      _export("changeStatistikAction", changeStatistikAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HISTORY_STATISTIK, statistik => {
        return {
          statistik
        };
      }));
      /**改变玩家投注输赢状况信息 */


      _export("changeRekorAction", changeRekorAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_HISTORY_REKOR, rekor => {
        return {
          rekor
        };
      }));
      /**改变jackpot赢家信息 */


      _export("changeJackpotWinAction", changeJackpotWinAction = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.BANDAR_JACKPOT_WIN, jackpotWin => {
        return {
          jackpotWin
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8fe9da8f40b00464e39247db0a68713cc94174d1.js.map