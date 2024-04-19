System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, getStore, Injector, _crd;

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      getStore = _unresolved_2.getStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c021fOI+WtBk6y47+SQaJez", "Injector", undefined);

      __checkObsolete__(['Node', 'Prefab', 'Component', 'assetManager', 'instantiate']);

      /**注入器，负责实例化节点和装载，并注入store数据、订阅事件 */
      _export("default", Injector = class Injector {
        constructor(prefabSource, ComppStr) {
          this.unsubscribe = void 0;

          /**注入器绑定的 */
          this.prefabFile = void 0;
          this.compStr = void 0;

          /**主节点（绑定脚本的节点） */
          this.view = void 0;
          this.comp = void 0;
          this.props = void 0;
          this.dispatch = void 0;
          this.prefabFile = prefabSource; //PrefabFiles.find(item => item.path === prefabFile).source

          this.compStr = ComppStr;
        }

        /**装载进入视图并注入props */
        mountTo(wrapNode) {
          wrapNode.addChild(this.view);
          this.comp.setProps(this.props, true);
          return this;
        }
        /**卸载 */


        unMount() {
          this.unsubscribe();

          if (this.view) {
            this.view.removeAllChildren();
            this.view.destroy();
          }
        }

        connect(initProps, mapStateToProps) {
          // const mapStateToProps = (state) => ({
          //   count: state.count,
          // })
          this.props = Object.assign({}, this.props, initProps);
          this.view = instantiate(this.prefabFile);
          this.comp = this.view.getComponent(this.compStr);
          this.dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
            error: Error()
          }), getStore) : getStore)().dispatch;
          this.unsubscribe = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
            error: Error()
          }), getStore) : getStore)().subscribe(() => {
            mapStateToProps((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().getState()); // const state = store.getState().count
          });
          return this;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c311593c321cb032118202d804c53d61bfbc4fc9.js.map