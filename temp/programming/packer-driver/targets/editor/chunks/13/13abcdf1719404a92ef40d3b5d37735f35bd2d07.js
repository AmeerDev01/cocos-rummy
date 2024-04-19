System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, BaseViewModel, EffectType, PrefabPathDefine, sourceManageSeletor, TurntableViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurntablePanel(extras) {
    _reporterNs.report("TurntablePanel", "./TurntablePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "./TurntablePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "./TurntablePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurntable(extras) {
    _reporterNs.report("Turntable", "./Turntable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBState(extras) {
    _reporterNs.report("CBState", "./Turntable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBProps(extras) {
    _reporterNs.report("CBProps", "./Turntable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBEvent(extras) {
    _reporterNs.report("CBEvent", "./Turntable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurntableHelp(extras) {
    _reporterNs.report("TurntableHelp", "./TurntableHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHBState(extras) {
    _reporterNs.report("HBState", "./TurntableHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHBProps(extras) {
    _reporterNs.report("HBProps", "./TurntableHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHBEvent(extras) {
    _reporterNs.report("HBEvent", "./TurntableHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      BaseViewModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      EffectType = _unresolved_4.EffectType;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f177docgftMRrWcicumklDO", "TurntableViewModel", undefined);

      TurntableViewModel = class TurntableViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('TurntablePanel');
        }

        begin() {
          this.setEvent({
            rotaryStarting: (type, data) => {
              if (type == 1) {
                const givePanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)('TurntableHelp').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).HELL_ACTIVITY_TURNTABLE_INTRO).source).appendTo(this.comp.node, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onClosePanel: () => {
                    givePanel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2);
                  }
                });
                return;
              }

              if (type == 2) {
                const givePanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)('Turntable').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).HELL_ACTIVITY_TURNTABLE).source).appendTo(this.parentNode.parent, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onClosePanel: () => {
                    givePanel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2);
                  },
                  setCount: num => {
                    this.comp.setCount(num);
                  },
                  setReadStatus: value => {
                    this.comp.events.setReadStatus(value);
                  }
                }).setProps({
                  TurntableData: data
                });
              }
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {};
          });
          return this;
        }

      };

      _export("default", TurntableViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13abcdf1719404a92ef40d3b5d37735f35bd2d07.js.map