System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, _dec, _class, _crd, PhoenixV2FoolerViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2_Footer(extras) {
    _reporterNs.report("PhoenixV2_Footer", "../components/PhoenixV2_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/PhoenixV2_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/PhoenixV2_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
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

      _cclegacy._RF.push({}, "620ee1pPQhFn51l41+tv1RM", "PhoenixV2FoolerViewModel", undefined);

      __checkObsolete__(['Node']);

      PhoenixV2FoolerViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class PhoenixV2FoolerViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('PhoenixV2_Footer');
        }

        begin() {}

        mountViewNode(viewNode) {
          this.viewNode = viewNode;
          this.viewNode.addComponent(this.componentStr);
          this.comp = this.viewNode.getComponent(this.componentStr);
          return this;
        }

        connect() {
          this.inject({}, state => {
            return {
              rollerStatus: state.roller.rollerStatus,
              autoLauncherInfo: state.game.autoLauncherInfo,
              betDropDownlist: state.game.betDropDownlist,
              positionId: state.game.positionId,
              winloss: state.game.winloss,
              gameTypeInfo: state.game.gameTypeInfo,
              gold: state.game.gold
            };
          });
          return this;
        }

      }) || _class);

      _export("default", PhoenixV2FoolerViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44fb4929e51e8fedfb108ccd8f37c8e2f1e6eee4.js.map