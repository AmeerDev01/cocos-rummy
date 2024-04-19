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
          for (var _key in this.propertyNode) {
            if (this.nodeMap[_key]) {
              // 打包web桌面版同时release版本时，引擎会替换 Node 这些函数名，Node替换为i,非node替换为了e
              // 节点
              if (this.propertyNode[_key].constructor.name === "Node" || this.propertyNode[_key].constructor.name === "i") {
                this.propertyNode[_key] = this.nodeMap[_key];
              } else {
                var comp = this.nodeMap[_key].getComponent(this.propertyNode[_key].constructor);

                if (comp) {
                  this.propertyNode[_key] = comp;
                } else {
                  console.error(this.node.name + "\u7684\u8282\u70B9" + _key + "\u672A\u627E\u5230\u5BF9\u5BF9\u5E94\u7684\u7EC4\u4EF6" + this.propertyNode[_key].constructor.name);
                }
              }
            } else {
              console.error(this.node.name + "\u672A\u627E\u5230\u811A\u672C\u9700\u8981\u7684\u6210\u5458\u8282\u70B9" + _key);
            }
          }
        }
        /**
         * 订阅值变更的渲染
         * @param render 订阅变化的回调函数
         * @param keyArr 需要订阅的键
         * @param isLoop 是否循环，当keyArr=[]的时候，此值有效，若=true，state有几个值变化，rander函数就会触发几次，并给予更新前后相应的值，若=false，无论多少个state值有多少个值变化，只会在完成后调用一次，并给予更新前后的state，且key=state
         */


        useState(render, keyArr, isLoop) {
          if (keyArr === void 0) {
            keyArr = [];
          }

          if (isLoop === void 0) {
            isLoop = true;
          }

          var _keyArr = Array.from(new Set(keyArr));

          if (_keyArr.length) {
            _keyArr.forEach(key => {
              var renderItem = this.renderQueue.find(i => i.key === key);
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


        setState(newState, isDeep) {
          if (isDeep === void 0) {
            isDeep = false;
          }

          if (!this.state) return;
          var compos = [];
          var oldState = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
            error: Error()
          }), copy) : copy)(this.state || {});

          for (var _key2 in newState) {
            if (this.state.hasOwnProperty(_key2)) {
              var preValue = this.state[_key2];

              if (this.state[_key2] !== undefined && this.state[_key2] !== null) {
                preValue = ["object", "function"].indexOf(typeof this.state[_key2]) !== -1 ? (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
                  error: Error()
                }), copy) : copy)(this.state[_key2]) : this.state[_key2];
              }

              if (!(_crd && equalValue === void 0 ? (_reportPossibleCrUseOfequalValue({
                error: Error()
              }), equalValue) : equalValue)(preValue, newState[_key2], isDeep)) {
                this.state[_key2] = newState[_key2];
                compos.push({
                  key: _key2,
                  preValue,
                  newValue: newState[_key2]
                });
              }
            } else {
              throw new Error("Invalid key: " + _key2);
            }
          }

          compos.forEach(_ref => {
            var {
              key,
              preValue,
              newValue
            } = _ref;
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
          var self = this;
          var proxy = new Proxy(this.props, {
            get(target, key) {
              return target[key];
            },

            set(target, key, value) {
              // if (!this.forceListen) return true
              // const oldValue = ["object", "function"].indexOf(typeof (target[key])) !== -1 ? instantiate(target[key]) : target[key]
              var oldValue = target[key];

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


        setProps(props, force, isDeep) {
          if (force === void 0) {
            force = false;
          }

          if (isDeep === void 0) {
            isDeep = false;
          }

          this.forceListen = force;

          if (this.proxyProps) {
            var oldValue = (_crd && copy === void 0 ? (_reportPossibleCrUseOfcopy({
              error: Error()
            }), copy) : copy)(this.props);

            for (var _key3 in props) {
              if (this.proxyProps.hasOwnProperty(_key3)) {
                this.proxyProps[_key3] = props[_key3];
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

          for (var _key4 in events) {
            if (this.events.hasOwnProperty(_key4)) {
              this.events[_key4] = events[_key4];
            }
          }
        }
        /**获取挂载的节点列表 */


        getPropertyNode() {
          return this.propertyNode;
        }
        /**平铺节点 */


        tiledNode(parent) {
          if (parent === void 0) {
            parent = this.node;
          }

          var isPropsNode = parent.name.indexOf("props_") !== -1;
          this.nodeMap[parent.name] && isPropsNode && console.warn(this.node.name + "\u5728\u521D\u59CB\u5316nodeMap\u65F6\u53D1\u73B0\u540C\u540D\u8282\u70B9" + parent.name + "\uFF0C\u5C06\u8986\u76D6\u4E3A\u6700\u540E\u4E00\u4E2A");
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
//# sourceMappingURL=43e4138e74334db012a75020262ebead48d0e474.js.map