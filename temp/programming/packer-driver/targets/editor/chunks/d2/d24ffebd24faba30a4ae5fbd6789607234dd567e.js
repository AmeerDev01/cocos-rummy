System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, BaseViewModel, EffectType, sourceManageSeletor, PrefabPathDefine, global, _dec, _class, _crd, HeaderViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777_Header(extras) {
    _reporterNs.report("Fruit777_Header", "../components/Fruit777_Header", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Fruit777_Header", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Fruit777_Header", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../hall/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777_HelpPanel(extras) {
    _reporterNs.report("Fruit777_HelpPanel", "../components/Fruit777_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIProps(extras) {
    _reporterNs.report("FIProps", "../components/Fruit777_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIState(extras) {
    _reporterNs.report("FIState", "../components/Fruit777_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFIEvent(extras) {
    _reporterNs.report("FIEvent", "../components/Fruit777_HelpPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
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
    }, function (_unresolved_4) {
      BaseViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      EffectType = _unresolved_5.EffectType;
    }, function (_unresolved_6) {
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb793yiaM9H+bX5T+l2Etu4", "HeaderViewModel", undefined);

      __checkObsolete__(['Node']);

      HeaderViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class HeaderViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Fruit777_Header');
        }

        begin() {
          this.setEvent({
            openHelpPanel: () => {
              const helpPanelPanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)("Fruit777_HelpPanel").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).INTRODUCE).source).appendTo(this.viewNode.parent, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              }).setEvent({
                closeHandler: () => {
                  helpPanelPanel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1);
                }
              });
            },
            openVipMain: () => (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openVipMain()
          });
        }

        connect() {
          // console.log('inject', dataTransfer(DataKeyType.BALANCE))
          this.inject({}, state => {
            // console.log('state.game.balance', state.game.balance)
            return {
              balance: state.game.balance,
              roundAllEnd: state.roller.roundAllEnd
            };
          });
          return this;
        }

      }) || _class);

      _export("default", HeaderViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d24ffebd24faba30a4ae5fbd6789607234dd567e.js.map