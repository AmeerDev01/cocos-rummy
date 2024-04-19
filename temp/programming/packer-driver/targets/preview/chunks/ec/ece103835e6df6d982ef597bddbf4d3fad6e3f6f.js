System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, BaseComponent, _dec, _class, _crd, ccclass, property, Hall_ReliefPanel;

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

      _cclegacy._RF.push({}, "cc78aOxKyhP571ywHX4J9jN", "Hall_reliefPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_ReliefPanel", Hall_ReliefPanel = (_dec = ccclass('Hall_ReliefPanel'), _dec(_class = class Hall_ReliefPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_sure: new Button(),
            props_label_gold: new Label(),
            props_Label_benefit: new Label()
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
            this.propertyNode.props_Label_benefit.string = this.propertyNode.props_Label_benefit.string.replace('000', this.props.amount.formatAmountWithCommas());
            this.propertyNode.props_label_gold.string = this.props.amount.formatAmountWithLetter();
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
//# sourceMappingURL=ece103835e6df6d982ef597bddbf4d3fad6e3f6f.js.map