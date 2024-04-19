System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Sprite, tween, Vec3, BaseComponent, playChooseCard, _dec, _class, _crd, ccclass, property, phoenix_sgChoose_small;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMALLGAME(extras) {
    _reporterNs.report("SMALLGAME", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayChooseCard(extras) {
    _reporterNs.report("playChooseCard", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      playChooseCard = _unresolved_3.playChooseCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ad9esFqjhFeKpUILgk4DP4", "phoenix_sgChoose_small", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_sgChoose_small", phoenix_sgChoose_small = (_dec = ccclass('phoenix_sgChoose_small'), _dec(_class = class phoenix_sgChoose_small extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.isClick1 = true;
          this.isClick2 = true;
          this.isClick3 = true;
          this.isClick4 = true;
          this.isClick5 = true;
          this.propertyNode = {
            props_btn_sgChoose_25: new Node(),
            props_props_btn_sgChoose_20: new Node(),
            props_btn_sgChoose_15: new Node(),
            props_btn_sgChoose_13: new Node(),
            props_btn_sgChoose_10: new Node()
          };
          this.props = {};
          this.events = {
            killSelfHandler: () => {}
          };
        }

        start() {
          this.sgChooseShow();
        }

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_sgChoose_25.on(Node.EventType.TOUCH_END, () => {
            (_crd && playChooseCard === void 0 ? (_reportPossibleCrUseOfplayChooseCard({
              error: Error()
            }), playChooseCard) : playChooseCard)();
            this.propertyNode.props_btn_sgChoose_25.getChildByName("skeleton_in").active = true;
            this.isClick1 = false;
            this.changeGray();
            this.events.killSelfHandler(1);
          });
          this.propertyNode.props_props_btn_sgChoose_20.on(Node.EventType.TOUCH_END, () => {
            (_crd && playChooseCard === void 0 ? (_reportPossibleCrUseOfplayChooseCard({
              error: Error()
            }), playChooseCard) : playChooseCard)();
            this.isClick2 = false;
            this.propertyNode.props_props_btn_sgChoose_20.getChildByName("skeleton_in").active = true;
            this.changeGray();
            this.events.killSelfHandler(2);
          });
          this.propertyNode.props_btn_sgChoose_15.on(Node.EventType.TOUCH_END, () => {
            (_crd && playChooseCard === void 0 ? (_reportPossibleCrUseOfplayChooseCard({
              error: Error()
            }), playChooseCard) : playChooseCard)();
            this.isClick3 = false;
            this.propertyNode.props_btn_sgChoose_15.getChildByName("skeleton_in").active = true;
            this.changeGray();
            this.events.killSelfHandler(3);
          });
          this.propertyNode.props_btn_sgChoose_13.on(Node.EventType.TOUCH_END, () => {
            (_crd && playChooseCard === void 0 ? (_reportPossibleCrUseOfplayChooseCard({
              error: Error()
            }), playChooseCard) : playChooseCard)();
            this.isClick4 = false;
            this.propertyNode.props_btn_sgChoose_13.getChildByName("skeleton_in").active = true;
            this.changeGray();
            this.events.killSelfHandler(4);
          });
          this.propertyNode.props_btn_sgChoose_10.on(Node.EventType.TOUCH_END, () => {
            (_crd && playChooseCard === void 0 ? (_reportPossibleCrUseOfplayChooseCard({
              error: Error()
            }), playChooseCard) : playChooseCard)();
            this.isClick5 = false;
            this.propertyNode.props_btn_sgChoose_10.getChildByName("skeleton_in").active = true;
            this.changeGray();
            this.events.killSelfHandler(5);
          });
        }

        changeGray() {
          this.propertyNode.props_btn_sgChoose_10.getComponent(Sprite).grayscale = this.isClick5;
          this.propertyNode.props_btn_sgChoose_13.getComponent(Sprite).grayscale = this.isClick4;
          this.propertyNode.props_btn_sgChoose_15.getComponent(Sprite).grayscale = this.isClick3;
          this.propertyNode.props_props_btn_sgChoose_20.getComponent(Sprite).grayscale = this.isClick2;
          this.propertyNode.props_btn_sgChoose_25.getComponent(Sprite).grayscale = this.isClick1;
        }

        sgChooseShow() {
          tween(this.node.getChildByName('props_btn_sgChoose_25')).to(0.2, {
            position: new Vec3(-392, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_props_btn_sgChoose_20')).to(0.4, {
            position: new Vec3(-194, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_15')).to(0.6, {
            position: new Vec3(4, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_13')).to(0.8, {
            position: new Vec3(202, -4, 0)
          }).start();
          tween(this.node.getChildByName('props_btn_sgChoose_10')).to(1, {
            position: new Vec3(400, -4, 0)
          }).start();
        }

        useProps(key, value) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a22ac00b2a31354e48f13c74b04cfcdd5ac3993.js.map