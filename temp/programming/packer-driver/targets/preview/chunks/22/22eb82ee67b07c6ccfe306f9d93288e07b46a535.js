System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Facade, ProxyDefine, _dec, _class, _crd, ccclass, property, BaseComponent;

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../../Framework/care/Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotProxy(extras) {
    _reporterNs.report("SlotProxy", "../Proxy/SlotProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyDefine(extras) {
    _reporterNs.report("ProxyDefine", "../Const/ProxyDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }, function (_unresolved_3) {
      ProxyDefine = _unresolved_3.ProxyDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2236dnO+IRIir45di9ySaxC", "BaseComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", BaseComponent = (_dec = ccclass('BaseComponent'), _dec(_class = class BaseComponent extends Component {
        constructor() {
          super(...arguments);
          this.root = void 0;
          this.facade = (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
            error: Error()
          }), Facade) : Facade).Instance;
          this._nodes = {};
        }
        /**只做页面的初始化 */

        /**完成效果级别的事件绑定，只完成效果，不处理数据 */


        _init() {
          var dealChilds = node => {
            var children = node.children;

            for (var i = 0; i < children.length; ++i) {
              var child = children[i];
              this._nodes[child.name] = child;
              dealChilds(child);
            }
          };

          dealChilds(this.node);
        }

        onLoad() {
          this.root = this.node;

          this._init();

          this.bindUI();
          this.bindEvent();
        }

        start() {}

        update(deltaTime) {}

        getRollProxy() {
          return this.facade.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).SLOT);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22eb82ee67b07c6ccfe306f9d93288e07b46a535.js.map