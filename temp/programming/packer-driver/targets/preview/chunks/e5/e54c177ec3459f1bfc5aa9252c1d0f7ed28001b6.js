System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, _dec, _class, _crd, GodWealthV2FooterViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealthV2_Footer(extras) {
    _reporterNs.report("GodWealthV2_Footer", "../components/GodWealthV2_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/GodWealthV2_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/GodWealthV2_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../hall/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealthV2_helpPanel(extras) {
    _reporterNs.report("GodWealthV2_helpPanel", "../components/GodWealthV2_helpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIState(extras) {
    _reporterNs.report("FIState", "../components/GodWealthV2_helpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIProps(extras) {
    _reporterNs.report("FIProps", "../components/GodWealthV2_helpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIEvent(extras) {
    _reporterNs.report("FIEvent", "../components/GodWealthV2_helpPanel", _context.meta, extras);
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

      _cclegacy._RF.push({}, "36618GwphhBKozYffguw8F8", "GodWealthV2FooterViewModel", undefined);

      __checkObsolete__(['Node', 'find']);

      GodWealthV2FooterViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GodWealthV2FooterViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('GodWealthV2_Footer');
          this.helpPanelPanel = void 0;
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
              gold: state.game.gold,
              rollerStatus: state.roller.rollerStatus,
              autoLauncherInfo: state.game.autoLauncherInfo,
              betDropDownlist: state.game.betDropDownlist,
              positionId: state.game.positionId,
              winloss: state.game.winloss,
              gameTypeInfo: state.game.gameTypeInfo
            };
          });
          return this;
        }

      }) || _class);

      _export("default", GodWealthV2FooterViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e54c177ec3459f1bfc5aa9252c1d0f7ed28001b6.js.map