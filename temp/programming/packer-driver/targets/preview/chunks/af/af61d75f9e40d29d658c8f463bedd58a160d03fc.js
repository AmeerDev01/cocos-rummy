System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, BaseComponent, _dec, _class, _crd, ccclass, property, Hall_GivePanel;

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
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26e8aLrSUNI7phI76tGBwiT", "Hall_GivePanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_GivePanel", Hall_GivePanel = (_dec = ccclass('Hall_GivePanel'), _dec(_class = class Hall_GivePanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_sure: new Button(),
            props_Label_welcome: new Label()
          };
          this.props = {
            amount: 0
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {
          if (key === "amount") {
            this.propertyNode.props_Label_welcome.string = this.propertyNode.props_Label_welcome.string.replace("000", this.props.amount.formatAmountWithCommas());
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af61d75f9e40d29d658c8f463bedd58a160d03fc.js.map