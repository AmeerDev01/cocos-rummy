System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, find, viewModelMap, copy, equalValue, BaseComponent, _crd;

  function _reportPossibleCrUseOfviewModelMap(extras) {
    _reporterNs.report("viewModelMap", "./ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcopy(extras) {
    _reporterNs.report("copy", "../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfequalValue(extras) {
    _reporterNs.report("equalValue", "../utils/tool", _context.meta, extras);
  }

  _export("BaseComponent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      viewModelMap = _unresolved_2.viewModelMap;
    }, function (_unresolved_3) {
      copy = _unresolved_3.copy;
      equalValue = _unresolved_3.equalValue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd5d1hpu5NFOYzG1URruTHB", "BaseComponent", undefined);

      // import isEqual from "fast-deep-equal"
      __checkObsolete__(['Button', 'Component', 'find', 'instantiate', 'Label', 'log', 'Node', 'sys', 'view']);

      // import { copy } from 'copy-anything'
      _export("BaseComponent", BaseComponent = class BaseComponent extends Component {
        constructor() {
          super();
          this.root = void 0;
          this.renderQueue = [{
            key: "*",
            renderHandlerMap: []
          }, {
            key: "state",
            renderHandlerMap: []
          }];
          this.nodeMap = {};
          this.state = void 0;
          this.dispatch = void 0;

          /**是否强制触发，不进行props数据对比 */
          this.forceListen = false;
          this.proxyProps = void 0;
          this.root = find("Canvas");
          this.setState = this.setState.bind(this);
        }
        /**在这里绑定节点事件 */

        /**初始化state数据 */

        /**当传入的props发生变化，要执行的函数(key=_setDone表示一次setProps执行完毕且数据有变更的时候执行) */

        /**绑定UI，界面的初始化工作，也可以在这里做一些useState等操作 */


        /**脚本需要实例化的节点或者节点挂载的组件，这里的key名，必须在被挂载的预制体中存在，否则会异常 */

        /**销毁之前的回调 */
        destroyCallBack() {}
        /**初始化需要用的节点变量 */


        iniProperty() {
          for (let key in this.propertyNode) {
            if (this.nodeMap[key]) {
              // 打包web桌面版同时release版本时，引擎会替换 Node 这些函数名，Node替换为i,非node替换为了e
              // 节点
              if (this.propertyNode[key].constructor.name === "Node" || this.propertyNode[key].constructor.name === "i") {
                this.propertyNode[key] = this.nodeMap[key];
              } else {
                const comp = this.nodeMap[key].getComponent(this.propertyNode[key].constructor);

                if (comp) {
                  this.propertyNode[key] = comp;
                } else {
                  console.error(`${this.node.name}的节点${key}未找到对对应的组件${this.propertyNode[key].constructor.name}`);
                }
              }
            } else {
              console.error(`${this.node.name}未找到脚本需要的成员节点${key}`);
            }
          }
        }
        /**
         * 订阅值变更的渲染
         * @param render 订阅变化的回调函数
         * @param keyArr 需要订阅的键
         * @param isLoop 是否循环，当keyArr=[]的时候，此值有效，若=true，state有几个值变化，rander函数就会触发几次，并给予更新前后相应的值，若=false，无论多少个state值有多少个值变化，只会在完成后调用一次，并给予更新前后的state，且key=state
         */


        useState(render, keyArr = [], isLoop = true) {
          const _keyArr = Array.from(new Set(keyArr));

          if (_keyArr.length) {
            _keyArr.forEach(key => {
              const renderItem = this.renderQueue.find(i => i.key === key);
              renderItem ? renderItem.renderHandlerMap.push(render) : this.renderQueue.push({
                key: key,
                renderHandlerMap: [render]
              });
            });
          } else {
            this.renderQueue.find(i => i.key === (isLoop ? "*" : "state")).renderHandlerMap.push(render);
          } // console.log(this.renderQueue)

        }
        /**
         * 配置state
         * @param newState 新值
         * @param isDeep 是否深度对比（属性有数组才用）
         * @returns 
         */


        setState(newState, isDeep = false) {
          if (!this.state) return;
          const compos = [];
          const oldState = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(this.state || {});

          for (const key in newState) {
            if (this.state.hasOwnProperty(key)) {
              let preValue = this.state[key];

              if (this.state[key] !== undefined && this.state[key] !== null) {
                preValue = ["object", "function"].indexOf(typeof this.state[key]) !== -1 ? (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
                  error: Error()
                }), copy) : copy)(this.state[key]) : this.state[key];
              }

              if (!(_crd && equalValue === void 0 ? (_reportPossibleCrUseOfequalValue({
                error: Error()
              }), equalValue) : equalValue)(preValue, newState[key], isDeep)) {
                this.state[key] = newState[key];
                compos.push({
                  key,
                  preValue,
                  newValue: newState[key]
                });
              }
            } else {
              throw new Error(`Invalid key: ${key}`);
            }
          }

          compos.forEach(({
            key,
            preValue,
            newValue
          }) => {
            this.renderQueue.filter(item => item.key === key || item.key === "*").forEach(item => item.renderHandlerMap.forEach(render => render(key, {
              pre: preValue,
              cur: newValue
            })));
          });
          compos.length && this.renderQueue.filter(item => item.key === "state").forEach(item => item.renderHandlerMap.forEach(render => render("state", {
            pre: oldState,
            cur: this.state
          })));
        }

        propsProxy() {
          const self = this;
          let proxy = new Proxy(this.props, {
            get(target, key) {
              return target[key];
            },

            set(target, key, value) {
              // if (!this.forceListen) return true
              // const oldValue = ["object", "function"].indexOf(typeof (target[key])) !== -1 ? instantiate(target[key]) : target[key]
              const oldValue = target[key];

              if (!(_crd && equalValue === void 0 ? (_reportPossibleCrUseOfequalValue({
                error: Error()
              }), equalValue) : equalValue)(oldValue, value) || self.forceListen) {
                target[key] = value;

                try {
                  self.useProps(key, {
                    pre: oldValue,
                    cur: value
                  });
                } catch (e) {
                  console.error(e);
                }
              }

              return true;
            }

          });
          this.proxyProps = proxy;
        }

        onLoad() {
          this.tiledNode();
          this.iniProperty();
          this.state = this.initState(this.props);
          this.bindUI();
          this.bindEvent();
          this.propsProxy(); // this.setState({ ...this.state })
        }
        /**
         * 初始化props，此函数在节点被挂载后调用才会触发订阅事件
         * @param props 新的props
         * @param force 是否强制触发更新（新旧数据不一致也要触发useProps函数）
         * @param isDeep 是否深度对比（属性有数组才用）
         */


        setProps(props, force = false, isDeep = false) {
          this.forceListen = force;

          if (this.proxyProps) {
            const oldValue = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
              error: Error()
            }), copy) : copy)(this.props);

            for (let key in props) {
              if (this.proxyProps.hasOwnProperty(key)) {
                this.proxyProps[key] = props[key];
              }
            }

            !(_crd && equalValue === void 0 ? (_reportPossibleCrUseOfequalValue({
              error: Error()
            }), equalValue) : equalValue)(oldValue, this.props, isDeep) && this.useProps('_setDone', {
              pre: oldValue,
              cur: this.props
            });
          } else {
            this.props = Object.assign({}, this.props, props);
          }

          this.forceListen && (this.forceListen = false);
        }
        /**
         * 配置事件列表
         * @param events 事件列表
         */


        setEvent(events) {
          if (!this.events) return;

          for (let key in events) {
            if (this.events.hasOwnProperty(key)) {
              this.events[key] = events[key];
            }
          }
        }
        /**获取挂载的节点列表 */


        getPropertyNode() {
          return this.propertyNode;
        }
        /**平铺节点 */


        tiledNode(parent = this.node) {
          let isPropsNode = parent.name.indexOf("props_") !== -1;
          this.nodeMap[parent.name] && isPropsNode && console.warn(`${this.node.name}在初始化nodeMap时发现同名节点${parent.name}，将覆盖为最后一个`);
          isPropsNode && (this.nodeMap[parent.name] = parent);
          parent.children.length && parent.children.forEach(node => this.tiledNode(node));
        }

        onDestroy() {
          this.destroyCallBack();

          if ((_crd && viewModelMap === void 0 ? (_reportPossibleCrUseOfviewModelMap({
            error: Error()
          }), viewModelMap) : viewModelMap)[this.node.uuid]) {
            (_crd && viewModelMap === void 0 ? (_reportPossibleCrUseOfviewModelMap({
              error: Error()
            }), viewModelMap) : viewModelMap)[this.node.uuid].unMount();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb2457813b216b995d322a32a18ee1f6b60c5499.js.map