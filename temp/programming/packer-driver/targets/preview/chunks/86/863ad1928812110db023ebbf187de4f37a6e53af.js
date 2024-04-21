System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, _dec, _class, _crd, JackPotViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlessedWealthy_jackPot(extras) {
    _reporterNs.report("BlessedWealthy_jackPot", "../components/BlessedWealthy_jackPot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/BlessedWealthy_jackPot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/BlessedWealthy_jackPot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "568b8rkR5JPqalwWDtyhRK+", "JackPotViewModel", undefined);

      __checkObsolete__(['Node']);

      JackPotViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class JackPotViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('BlessedWealthy_jackPot');
        }

        begin() {}

        connect() {
          this.inject({}, state => {
            return {
              jackPotUserArr: state.game.jackPotUserArr
            };
          });
          return this;
        }

      }) || _class);

      _export("default", JackPotViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=863ad1928812110db023ebbf187de4f37a6e53af.js.map