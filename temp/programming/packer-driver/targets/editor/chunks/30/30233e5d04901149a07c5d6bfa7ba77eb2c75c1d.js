System.register(["__unresolved_0", "cc", "redux", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, redux, counterReducer, baseBoardReducer, memberInfoReducer, withdrawReducer, _crd, rootReducer;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcounterReducer(extras) {
    _reporterNs.report("counterReducer", "./counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardReducer(extras) {
    _reporterNs.report("baseBoardReducer", "./baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmemberInfoReducer(extras) {
    _reporterNs.report("memberInfoReducer", "./memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwithdrawReducer(extras) {
    _reporterNs.report("withdrawReducer", "./withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCounterInitStateType(extras) {
    _reporterNs.report("CounterInitStateType", "../actions/counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseBoardInitStateType(extras) {
    _reporterNs.report("BaseBoardInitStateType", "../actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoInitStateType(extras) {
    _reporterNs.report("MemberInfoInitStateType", "../actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWithdrawInitStateType(extras) {
    _reporterNs.report("WithdrawInitStateType", "../actions/withdraw", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_redux) {
      redux = _redux.default;
    }, function (_unresolved_2) {
      counterReducer = _unresolved_2.default;
    }, function (_unresolved_3) {
      baseBoardReducer = _unresolved_3.default;
    }, function (_unresolved_4) {
      memberInfoReducer = _unresolved_4.default;
    }, function (_unresolved_5) {
      withdrawReducer = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b2aeNsPWlHUKkgxmpQ+9pc", "index", undefined);

      window["process"] = {
        env: {
          NODE_ENV: "production"
        },
        on: () => "",
        memoryUsage: () => ({
          rss: 4935680,
          heapTotal: 1826816,
          heapUsed: 650472,
          external: 49879,
          arrayBuffers: 44556
        })
      };

      _export("rootReducer", rootReducer = (_crd && redux === void 0 ? (_reportPossibleCrUseOfredux({
        error: Error()
      }), redux) : redux).combineReducers({
        counter: _crd && counterReducer === void 0 ? (_reportPossibleCrUseOfcounterReducer({
          error: Error()
        }), counterReducer) : counterReducer,
        baseBoard: _crd && baseBoardReducer === void 0 ? (_reportPossibleCrUseOfbaseBoardReducer({
          error: Error()
        }), baseBoardReducer) : baseBoardReducer,
        memberInfo: _crd && memberInfoReducer === void 0 ? (_reportPossibleCrUseOfmemberInfoReducer({
          error: Error()
        }), memberInfoReducer) : memberInfoReducer,
        withdraw: _crd && withdrawReducer === void 0 ? (_reportPossibleCrUseOfwithdrawReducer({
          error: Error()
        }), withdrawReducer) : withdrawReducer
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30233e5d04901149a07c5d6bfa7ba77eb2c75c1d.js.map