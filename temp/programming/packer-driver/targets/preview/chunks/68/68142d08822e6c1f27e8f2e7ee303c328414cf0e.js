System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Animation, BaseComponent, divideNumber, _dec, _class, _crd, ccclass, property, DragonTiger_onlines;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyInfo(extras) {
    _reporterNs.report("MyInfo", "../store/actions/userInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdivideNumber(extras) {
    _reporterNs.report("divideNumber", "./DragonTiger_users", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberData(extras) {
    _reporterNs.report("MemberData", "../store/actions/history", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      divideNumber = _unresolved_3.divideNumber;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0810doHE6FBp4MQmAX/OXKY", "DragonTiger_onlines", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Animation', 'instantiate', 'Sprite', 'SpriteFrame', 'tween', 'Vec3', 'randomRange', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_onlines", DragonTiger_onlines = (_dec = ccclass('DragonTiger_onlines'), _dec(_class = class DragonTiger_onlines extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.memberData = void 0;
          this.goldNum = [];
          this.propertyNode = {
            props_label_onlines_num: new Label(),
            props_spr_onlines_bg: new Node()
          };
          this.props = {
            roomLeftInfoVos: [],
            roomRightInfoVos: [],
            roomInfoSize: 0,
            memberData: {
              gold: 0,
              memberId: "",
              type: 0,
              memberName: ""
            },
            memberId: "",
            memberName: "",
            memberBet: {},
            winType: 0,
            winGold: 0
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {
            goldData: {},
            goldNum: []
          };
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "roomInfoSize") {
            this.propertyNode.props_label_onlines_num.string = value.cur + '';
          }

          if (key === "memberData") {}

          if (key === "winGold") {
            if (this.props.winType === 2) {
              this.goldNum = (_crd && divideNumber === void 0 ? (_reportPossibleCrUseOfdivideNumber({
                error: Error()
              }), divideNumber) : divideNumber)(Math.abs(value.cur));
            }
          }

          if (key === "winType") {
            if (value.cur === 2) {// this.loseCoin()	
            }
          }
        }

        playWinAni() {
          this.propertyNode.props_spr_onlines_bg.getComponent(Animation).play();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68142d08822e6c1f27e8f2e7ee303c328414cf0e.js.map