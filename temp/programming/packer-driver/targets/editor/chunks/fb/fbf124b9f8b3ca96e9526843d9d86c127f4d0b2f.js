System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, color, Label, Node, BaseComponent, _dec, _class, _crd, ccclass, property, Counter;

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
      color = _cc.color;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2621clP+TNIC7Lldma/MHkI", "Counter", undefined);

      __checkObsolete__(['_decorator', 'Color', 'color', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Counter", Counter = (_dec = ccclass('Counter'), _dec(_class = class Counter extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super();
          this.propertyNode = {
            /**运算显示值 */
            props_value: null,

            /**左边按钮 */
            props_leftBtu: null,

            /**右边按钮 */
            props_rightBtu: null,

            /**因子显示 */
            props_factor: null
          };
          this.props = {
            color: "#cccccc",
            size: 12
          };
          this.events = {
            onChange: e => {}
          };
        }

        initState() {
          return {
            count: 0,
            factor: 1
          };
        }

        useProps(key, value) {
          /**传入的props变更触发的函数 */
          // console.log(key, "change", value.cur)
          if (key === "color") {
            this.propertyNode.props_factor.getComponent(Label).color = color().fromHEX(this.props.color);
          }

          if (key === "size") {
            this.propertyNode.props_factor.getComponent(Label).fontSize = this.props.size;
          }
        }

        bindEvent() {
          this.propertyNode.props_leftBtu.on(Node.EventType.TOUCH_START, () => {
            this.setState({
              count: this.state.count - this.state.factor
            });
          });
          this.propertyNode.props_rightBtu.on(Node.EventType.TOUCH_START, () => {
            this.setState({
              count: this.state.count + this.state.factor
            });
          });
          this.propertyNode.props_factor.on(Node.EventType.TOUCH_START, () => {
            this.setState({
              factor: this.state.factor + 1
            });
          });
        }

        bindUI() {
          this.useState((key, {
            pre,
            cur
          }) => {
            this.propertyNode.props_value.getComponent(Label).string = cur;
            this.events.onChange(cur);
          }, ["count"]);
          this.useState((key, {
            pre,
            cur
          }) => {
            this.propertyNode.props_factor.getComponent(Label).string = `因子：${cur}`;
          }, ["factor"]);
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbf124b9f8b3ca96e9526843d9d86c127f4d0b2f.js.map