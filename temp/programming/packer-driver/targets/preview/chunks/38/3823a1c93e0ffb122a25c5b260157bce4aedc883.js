System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Sprite, BaseComponent, _dec, _class, _crd, ccclass, property, Thor_SgBox;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf8aeU3F9lDRpLDgrq1J0uS", "Thor_SgBox", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_SgBox", Thor_SgBox = (_dec = ccclass('Thor_SgBox'), _dec(_class = class Thor_SgBox extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.miniGameAmount = 0;
          this.propertyNode = {
            props_label_box_gold: new Label(),
            props_btn_box_off: new Button(),
            props_btn_box_on: new Node()
          };
          this.props = {
            miniGameAmount: "",
            balance: 0
          };
          this.events = {
            closeHandler: () => {},
            confirmThePayment: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_box_off.node.on(Node.EventType.TOUCH_END, () => {
            this.events.closeHandler();
          });
          this.propertyNode.props_btn_box_on.getComponent(Button).node.on(Button.EventType.CLICK, () => {
            this.events.confirmThePayment();
          });
        }

        removeComma(str) {
          var newStr = str.replace(/,/g, "");
          return newStr;
        }

        useProps(key, value) {
          if (key === "miniGameAmount") {
            this.propertyNode.props_label_box_gold.string = this.props.miniGameAmount;
            this.miniGameAmount = Number(this.removeComma(value.cur));
          }

          if (key === "balance") {
            if (value.cur && this.miniGameAmount > 0) {
              console.log(value.cur, this.miniGameAmount);
              this.propertyNode.props_btn_box_on.getComponent(Sprite).grayscale = !(value.cur >= this.miniGameAmount);
              this.propertyNode.props_btn_box_on.getComponent(Button).interactable = value.cur >= this.miniGameAmount;
            }
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
//# sourceMappingURL=3823a1c93e0ffb122a25c5b260157bce4aedc883.js.map