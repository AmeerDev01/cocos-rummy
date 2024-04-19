System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, _dec, _class, _crd, GodWealthV2SingleIconRollerViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealthV2_SingleIconRoller(extras) {
    _reporterNs.report("GodWealthV2_SingleIconRoller", "../components/GodWealthV2_SingleIconRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/GodWealthV2_SingleIconRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/GodWealthV2_SingleIconRoller", _context.meta, extras);
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

      _cclegacy._RF.push({}, "c8812HIBcVGP7G0u2I+xsV3", "GodWealthV2SingleIconRollerViewModel", undefined);

      __checkObsolete__(['Node']);

      GodWealthV2SingleIconRollerViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GodWealthV2SingleIconRollerViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('GodWealthV2_SingleIconRoller');
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
              gameTypeInfo: state.game.gameTypeInfo
            };
          });
          return this;
        }

      }) || _class);

      _export("default", GodWealthV2SingleIconRollerViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c0a171b4dbed2f85d730b0b2f6ff52b4a965cdd.js.map