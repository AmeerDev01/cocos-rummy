System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, _decorator, find, _class, _crd, ccclass, property, BaseViewLayer;

  /**
   * 绑定节点或组件到变量
   * @param path 节点路径，如果为/指根节点
   * @param type 组件类型，为空代表绑定节点。如果有值且节点没有对应组件，会创建组件绑定到节点
   * @returns
   */
  function bindNode(path, type) {
    if (path === void 0) {
      path = "";
    }

    return (obj, name) => {
      if (!("_bindNode" in obj)) {
        obj._bindNode = {};
      }

      obj._bindNode[name] = {
        path: path || name,
        type
      };
    };
  }

  _export("bindNode", bindNode);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3182MY7ahADrUrkuWcXnYx", "BaseViewLayer", undefined);
      /**视图基类 slot内存占用小 释放资源暂未实现 */


      // import EventManager from "../manager/EventManager";
      // import { Tools } from "../tools/Tools";
      __checkObsolete__(['Node', 'Button', 'Component', '_decorator', '__private', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BaseViewLayer = ccclass(_class = class BaseViewLayer extends Component {
        constructor() {
          super(...arguments);
          this.layerName = "";
          this.msgList = {};
          //定时器
          this._onFlush = null;
        }

        getViewNode() {
          return this.node;
        }

        start() {
          // Log.w("BaseViewLayer ===============>  start ")
          this.registerEvents();
        }
        /**查找子节点  */


        searchNode(name, root) {
          if (name == root.name) return root;
          var child = root.getChildByName(name);
          if (child) return child; // let childList: Array<any> = root.children;

          var childList = root.children;

          for (var k = 0; k < childList.length; ++k) {
            var node = childList[k];
            child = this.searchNode(name, node);

            if (child) {
              return child;
            }
          }

          return child;
        }
        /**查找子节点上特定组件 */


        searchCompontent(name, root, type) {
          var tempNode = this.searchNode(name, root);

          if (tempNode) {
            return tempNode.getComponent(type);
          }

          console.error("当前node没有该组件", name);
          return null;
        }
        /**统一按钮回调*/


        addTouchEndEventListener(btn, customData) {
          if (customData === void 0) {
            customData = "";
          }

          if (btn.clickEvents.length > 0) return;
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = this.node; // let scriptName = Tools.getScriptName(this.node.getComponent(BaseViewLayer).name);
          // clickEventHandler.component = scriptName;

          clickEventHandler.handler = "onButtonTouchEnd";
          clickEventHandler.customEventData = customData;
          btn.clickEvents.push(clickEventHandler);
        }

        autoAddButtonListener() {
          var btns = this.node.getComponentsInChildren(Button);
          btns.forEach(btn => {
            this.addTouchEndEventListener(btn);
          });
        }

        registerEvents() {// EventManager.getInstance().addEvents(this.msgList, this);
        }

        unRegisterEvents() {// EventManager.getInstance().removeEvents(this.msgList, this);
        }

        onDestroy() {
          this.unRegisterEvents();
        }

        onButtonTouchEnd(event, customData) {}

        onLoad() {
          BaseViewLayer.bindNode(this);
        }

        startInterval(dt) {
          if (dt === void 0) {
            dt = 1000 / 60;
          }

          //定时器
          this._onFlush = setInterval(() => {
            this.onFlush(dt);
          }, dt);
        }

        onFlush(dt) {}
        /* 异步函数，一旦事件触发 */


        forOnce(target, evtName, timeout) {
          return new Promise(callback => {
            if (timeout) {
              this.scheduleOnce(callback, timeout);
            }

            target.off(evtName, callback, this);
            target.once(evtName, callback, this);
          });
        }
        /* 异步函数，延迟调用 */


        delay(interval) {
          return new Promise(callback => {
            this.scheduleOnce(callback, interval);
          });
        }

        static bindNode(obj) {
          var data = obj._bindNode;

          for (var _key in data) {
            var item = data[_key];
            var res = item.path == "/" ? obj.node : find(item.path, obj.node);

            if (!res) {// Log.e("res>>>>>>", item.path, obj.node)
            }

            if (item.type) {
              obj[_key] = res.getComponent(item.type) || res.addComponent(item.type);
            } else {
              obj[_key] = res;
            }
          }
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd73f90075adeb52ec8948d0861bb5c4e0fb7620.js.map