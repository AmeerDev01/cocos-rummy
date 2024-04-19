System.register(["__unresolved_0", "cc", "redux-act", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, reduxAct, config, _crd, initState, ActionTypes, initBetData, seatBet, selectChip, clearBet, cancelBet;

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../../config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }, function (_unresolved_2) {
      config = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e042UKGq5HVIiFvmD0HpwO", "bet", undefined);

      _export("initState", initState = {
        newBetData: null,
        selectChip: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).chipTypes[0].value,
        betData: [],
        lastBet: [],
        cancelBetData: null
      });
      /**必须大写，不然redux-act这货要自动加序列号 */


      _export("ActionTypes", ActionTypes = /*#__PURE__*/function (ActionTypes) {
        ActionTypes["YXX_INIT_BET"] = "YXX_INIT_BET";
        ActionTypes["YXX_BET"] = "YXX_BET";
        ActionTypes["YXX_SELECT_CHIP"] = "YXX_SELECT_CHIP";
        ActionTypes["YXX_CLEAR_BET"] = "YXX_CLEAR_BET";
        ActionTypes["YXX_REPEAT_LAST_BET"] = "YXX_REPEAT_LAST_BET";
        ActionTypes["YXX_CANCEL_BET"] = "YXX_CANCEL_BET";
        return ActionTypes;
      }({}));
      /**定义action的payLoad类型 */


      _export("initBetData", initBetData = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_INIT_BET, betDatas => {
        return {
          betDatas
        };
      }));

      _export("seatBet", seatBet = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_BET, betData => {
        return {
          betData
        };
      }));

      _export("selectChip", selectChip = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_SELECT_CHIP, selectChip => {
        return {
          selectChip
        };
      }));

      _export("clearBet", clearBet = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CLEAR_BET, (isQuit = false) => {
        return {
          isQuit
        };
      }));

      _export("cancelBet", cancelBet = (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createAction(ActionTypes.YXX_CANCEL_BET, betData => {
        return {
          betData
        };
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa5b61fa7ceb3758b909c49aa562efcc40ea5a23.js.map