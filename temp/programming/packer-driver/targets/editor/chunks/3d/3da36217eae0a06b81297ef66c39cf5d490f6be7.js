System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, baseBoardView, sourceManageSeletor, EffectType, Singleton, PrefabPathDefine, BaseViewModel, ModalBox, _crd;

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../utils/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon_ModalBox(extras) {
    _reporterNs.report("Common_ModalBox", "./components/Common_ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "./components/Common_ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIState(extras) {
    _reporterNs.report("IState", "./components/Common_ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "./components/Common_ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "./sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "./viewModel/BaseViewModel", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      baseBoardView = _unresolved_2.baseBoardView;
      sourceManageSeletor = _unresolved_2.sourceManageSeletor;
    }, function (_unresolved_3) {
      EffectType = _unresolved_3.EffectType;
    }, function (_unresolved_4) {
      Singleton = _unresolved_4.default;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      BaseViewModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad1f6bZHTNFYL8Og6e8Tbea", "ModalBox", undefined);

      _export("default", ModalBox = class ModalBox extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();

          /**模态框是否是打开状态 */
          this.isShow = false;
          this.contentStr = '';
        }

        show(option, okHandler = () => true, cancleHandler = () => true) {
          this.isShow = true;
          this.contentStr = option.content;
          const modalBox = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)("Common_ModalBox").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)("common").getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MODAL_BOX).source).appendTo((_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
            error: Error()
          }), baseBoardView) : baseBoardView).viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1
          }).setProps({
            content: option.content,
            type: option.type,
            url: option.url
          }).setEvent({
            onCloseHandler: () => {
              this.isShow = false;
              this.contentStr = '';
              modalBox.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1);
            },
            onCancleHandler: () => {
              this.isShow = false;
              this.contentStr = '';
              return cancleHandler();
            },
            onOkHandler: () => {
              this.isShow = false;
              this.contentStr = '';
              return okHandler();
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3da36217eae0a06b81297ef66c39cf5d490f6be7.js.map