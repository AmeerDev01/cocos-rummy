System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, find, tween, UIOpacity, getStore, getEffectByType, hallAudio, SoundPathDefine, ViewModel, _crd, viewModelMap;

  function StoreInject(store) {
    return function (constructor) {
      return class extends constructor {
        constructor() {
          super(...arguments);
          this.store = store;
        }

      };
    };
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterOption(extras) {
    _reporterNs.report("EnterOption", "../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetEffectByType(extras) {
    _reporterNs.report("getEffectByType", "../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnyAction(extras) {
    _reporterNs.report("AnyAction", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../hall/sourceDefine/soundDefine", _context.meta, extras);
  }

  _export("StoreInject", StoreInject);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      find = _cc.find;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      getStore = _unresolved_2.getStore;
    }, function (_unresolved_3) {
      getEffectByType = _unresolved_3.getEffectByType;
    }, function (_unresolved_4) {
      hallAudio = _unresolved_4.hallAudio;
    }, function (_unresolved_5) {
      SoundPathDefine = _unresolved_5.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1274dawwi1GS7MZow3epiLb", "ViewModel", undefined);

      __checkObsolete__(['Node', 'Prefab', 'Component', 'assetManager', 'instantiate', 'find', 'tween', 'UIOpacity']);

      _export("viewModelMap", viewModelMap = {});
      /**BaseViewModel为特定的功能而设计，在这里撰写主逻辑 */


      ViewModel = class ViewModel {
        constructor(componentStr) {
          this.componentStr = void 0;
          this.store = void 0;

          /**是否已卸载(此值在卸载开始之时就已赋值) */
          this.isUnMount = false;

          /**被挂载的父节点 */
          this.parentNode = void 0;

          /**取消订阅 */
          this.unsubscribe = void 0;

          /**是否是模态弹出框的模式 */
          this.isModal = false;

          /**模态框的底层透明层 */
          this.modalBg = null;

          /**自身的props，一般选择使用组件的 */
          this.props = void 0;

          /**未实例化的预制体 */
          this.prefabSource = void 0;

          /**已经实例化的节点对象 */
          this.viewNode = void 0;

          /**脚本组件 */
          this.comp = void 0;
          this.componentStr = componentStr;
          this.store = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
            error: Error()
          }), getStore) : getStore)();
        }
        /**链接到redux-store-state，当然，不接入redux，就不调用 */
        // public abstract connect(store: redux.Store<any, redux.AnyAction>): void
        // public abstract connect(storeState: StateType): void

        /**视图初始化并挂载到节点上后要执行的动作（appendTo之后要执行的动作） */


        /**卸载时的回调函数 */
        unMountCallBack() {}

        dispatch(action) {
          this.store.dispatch(action);
        }
        /**挂载到视图 */


        appendTo(parentNode, option) {
          var _option = Object.assign({
            effectType: null,
            effectDone: null,
            isModal: false,
            effectOption: {}
          }, option || {});

          this.isModal = _option.isModal;
          this.parentNode = parentNode;

          if (_option.isModal) {
            this.modalBg = instantiate(find("Canvas/modalBg"));
            this.modalBg.active = true;
            var uiOpacity = this.modalBg.getComponent(UIOpacity) || this.modalBg.addComponent(UIOpacity);
            uiOpacity.opacity = 0;
            tween(uiOpacity).to(0.1, {
              opacity: 255
            }).start();
            this.modalBg.addChild(this.viewNode);
            parentNode.addChild(this.modalBg);
            (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio) && (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).POP_UP);
          } else {
            parentNode.addChild(this.viewNode);
          }

          var done = () => window.setTimeout(() => {
            this.begin();
          }, 10);

          _option.effectType !== null ? (_crd && getEffectByType === void 0 ? (_reportPossibleCrUseOfgetEffectByType({
            error: Error()
          }), getEffectByType) : getEffectByType)(_option.effectType)(this.viewNode).enter(_option.effectOption).then(() => {
            _option.effectDone && _option.effectDone();
            done();
          }) : done();
          viewModelMap[this.viewNode.uuid] = this;
          return this;
        }
        /**初始化视图对象，告知viewmodel需要实例化的预制体和组件脚本(若不执行这个，节点对象和自定义脚本将无法调用) */


        mountView(prefabSource) {
          // this.prefabFile = PrefabFiles.find(item => item.path === prefabFile).source
          this.prefabSource = prefabSource; //sourceManage.getFile("hall", prefabPath)?.source

          this.viewNode = instantiate(prefabSource);
          this.viewNode.addComponent(this.componentStr);
          this.comp = this.viewNode.getComponent(this.componentStr);
          return this;
        }
        /**卸载(销毁节点，且取消订阅) */


        unMount(effectType) {
          if (effectType === void 0) {
            effectType = null;
          }

          // hallAudio && hallAudio.playOneShot(SoundPathDefine.BTU_CLICK)
          this.isUnMount = true;
          return new Promise((reslove, reject) => {
            this.unsubscribe && this.unsubscribe();

            if (this.viewNode) {
              var done = () => {
                try {
                  // this.viewNode && this.viewNode.removeAllChildren()
                  this.comp && this.comp.destroy();
                  this.viewNode && this.viewNode.destroy();

                  if (this.isModal) {
                    var uiOpacity = this.modalBg.getComponent(UIOpacity) || this.modalBg.addComponent(UIOpacity);
                    tween(uiOpacity).to(0.1, {
                      opacity: 0
                    }).call(() => this.modalBg.destroy()).start();
                  }

                  this.unMountCallBack();
                  reslove(true);
                } catch (e) {
                  console.error(e);
                  reslove(true);
                }
              };

              effectType !== null ? (_crd && getEffectByType === void 0 ? (_reportPossibleCrUseOfgetEffectByType({
                error: Error()
              }), getEffectByType) : getEffectByType)(effectType)(this.viewNode).out(false).then(() => done()) : done();
            } else {
              reject("The view has been destroied!");
            }
          });
        }

        setProps(props, force) {
          if (force === void 0) {
            force = false;
          }

          // this.props = props
          this.comp.setProps(props, force);
          return this;
        }

        setEvent(enevts) {
          this.comp.setEvent(enevts);
          return this;
        }
        /**
         * redux的状态注入器
         * @param initProps 注入时的默认props(如果页面已经挂载会触发更新)
         * @param mapStateToProps props对redux-state的订阅映射
         * @param force 是否强制触发订阅函数（默认情况下，若新旧的state数据一致，将不会触发错误，若force=true，将强制触发，比如适用于toast，两次触发toast的字符串是一样的，需要忽略数据是否更新。请慎用true）
         * @returns 
         */


        inject(initProps, mapStateToProps, force) {
          if (force === void 0) {
            force = false;
          }

          this.props = Object.assign({}, this.props, initProps);
          this.comp.setProps(this.props);
          this.dispatch = this.store.dispatch;
          this.comp.dispatch = this.store.dispatch;
          this.unsubscribe = this.store.subscribe(() => {
            var newPropsPart = mapStateToProps(this.store.getState());
            this.props = Object.assign({}, this.props, newPropsPart);
            this.comp.setProps(this.props, force);
          });
          return this;
        }

      };

      _export("default", ViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3580e22386f11f9c121e207421801ac319040ea4.js.map