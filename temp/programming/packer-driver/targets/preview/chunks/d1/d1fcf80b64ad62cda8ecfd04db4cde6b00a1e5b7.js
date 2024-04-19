System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, BaseComponent, playBtnClick, _dec, _class, _crd, ccclass, property, BlessedWealthy_helpPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      playBtnClick = _unresolved_3.playBtnClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2660EcRNRJWp/n2p7Srs2H", "BlessedWealthy_helpPanel", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessedWealthy_helpPanel", BlessedWealthy_helpPanel = (_dec = ccclass('BlessedWealthy_helpPanel'), _dec(_class = class BlessedWealthy_helpPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_rule_colse: new Button(),
            props_btn_rule_left: new Node(),
            props_btn_rule_right: new Node() // props_guize_sg_3:new Node(),

          };
          this.props = {};
          this.events = {
            closeHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {}

        bindUI() {
          this.propertyNode.props_btn_rule_colse.node.on(Button.EventType.CLICK, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.closeHandler();
          }, true); // this.propertyNode.props_guize_sg_1.on(Node.EventType.TOUCH_MOVE, () => {
          // 	// playTurn()
          // })
          // this.propertyNode.props_guize_sg_2.on(Node.EventType.TOUCH_MOVE, () => {
          // 	// playTurn()
          // })
          // this.propertyNode.props_guize_sg_3.on(Node.EventType.TOUCH_MOVE, () => {
          // 	playTurn()
          // })
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1fcf80b64ad62cda8ecfd04db4cde6b00a1e5b7.js.map