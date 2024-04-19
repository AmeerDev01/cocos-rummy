System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, BaseComponent, _dec, _class, _crd, ccclass, property, Hall_ShareHelp;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0b4aU9zY5GHbCzCfiUY+TP", "Hall_ShareHelp", undefined);

      __checkObsolete__(['Node', '_decorator', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_ShareHelp", Hall_ShareHelp = (_dec = ccclass('Hall_ShareHelp'), _dec(_class = class Hall_ShareHelp extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_spr_shareHelp_close: new Node()
          };
          this.props = {};
          this.events = {
            close: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_spr_shareHelp_close.on(Node.EventType.TOUCH_END, () => {
            this.events.close();
          });
        }

        bindUI() {}

        useProps(key, value) {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6c33fe6d253da597258f5966d07fce638edc437.js.map