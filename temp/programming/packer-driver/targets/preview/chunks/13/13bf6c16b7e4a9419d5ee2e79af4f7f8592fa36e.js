System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, BaseViewModel, sourceManageSeletor, PrefabPathDefine, EffectType, rollerPanelViewModel, dataTransfer, DataKeyType, _dec, _class, _crd, RollerIconViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_rollerIcon(extras) {
    _reporterNs.report("phoenix_rollerIcon", "../components/phoenix_rollerIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/phoenix_rollerIcon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/phoenix_rollerIcon", _context.meta, extras);
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

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrollerPanelViewModel(extras) {
    _reporterNs.report("rollerPanelViewModel", "./GameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_yuanbao_totalBet(extras) {
    _reporterNs.report("phoenix_yuanbao_totalBet", "../components/phoenix_yuanbao_totalBet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIEvent(extras) {
    _reporterNs.report("BPIEvent", "../components/phoenix_yuanbao_totalBet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIProps(extras) {
    _reporterNs.report("BPIProps", "../components/phoenix_yuanbao_totalBet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIState(extras) {
    _reporterNs.report("BPIState", "../components/phoenix_yuanbao_totalBet", _context.meta, extras);
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
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      EffectType = _unresolved_7.EffectType;
    }, function (_unresolved_8) {
      rollerPanelViewModel = _unresolved_8.rollerPanelViewModel;
    }, function (_unresolved_9) {
      dataTransfer = _unresolved_9.default;
      DataKeyType = _unresolved_9.DataKeyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a1d7sdm9ROwa3fbvE3sVr4", "RollerIconViewModel", undefined);

      __checkObsolete__(['Node']);

      RollerIconViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class RollerIconViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('phoenix_rollerIcon');
        }

        begin() {
          this.setEvent({
            openTotalPanel: () => {
              this.openTotal();
            }
          });
        }

        openTotal() {
          var yuanBaoRate = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).ICON_YUANBAO_EFFECT_DATA).yuanBaoMagnification;
          var yuanBaoWinNum = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).ICON_YUANBAO_EFFECT_DATA).yuanBaoAmount;
          var yuanBaoTotalBet = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)("phoenix_yuanbao_totalBet").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).PHOENIX_TOTAL_BET).source).appendTo((_crd && rollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfrollerPanelViewModel({
            error: Error()
          }), rollerPanelViewModel) : rollerPanelViewModel).viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setProps({
            yuanBaoRate: "X" + yuanBaoRate,
            yuanBaoWinNum: yuanBaoWinNum + ""
          }).setEvent({
            killSelfHandler: () => {
              yuanBaoTotalBet.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1);
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {
              viewGameType: state.game.viewGameType,
              isRollEnd: state.roller.roundAllEnd
            };
          });
          return this;
        }

      }) || _class);

      _export("default", RollerIconViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13bf6c16b7e4a9419d5ee2e79af4f7f8592fa36e.js.map