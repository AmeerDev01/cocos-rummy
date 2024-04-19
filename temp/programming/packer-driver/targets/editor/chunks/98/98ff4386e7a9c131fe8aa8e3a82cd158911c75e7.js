System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, _dec, _class, _crd, ThorV2RollerPanelViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2_RollerPanel(extras) {
    _reporterNs.report("ThorV2_RollerPanel", "../components/ThorV2_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/ThorV2_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/ThorV2_RollerPanel", _context.meta, extras);
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

      _cclegacy._RF.push({}, "e8569fmNZBLQLzFe85cI1mA", "ThorV2RollerPanelViewModel", undefined);

      __checkObsolete__(['Node']);

      ThorV2RollerPanelViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class ThorV2RollerPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('ThorV2_RollerPanel');
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
              isSpeed: state.roller.isSpeed,
              isManualSpeed: state.roller.isManualSpeed,
              autoLauncherInfo: state.game.autoLauncherInfo,
              gameTypeInfo: state.game.gameTypeInfo,
              winloss: state.game.winloss,
              subGameWinloss: state.game.subGameWinloss,
              freeGameOdds: state.game.freeGameOdds
            };
          });
          return this;
        }

      }) || _class);

      _export("default", ThorV2RollerPanelViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=98ff4386e7a9c131fe8aa8e3a82cd158911c75e7.js.map