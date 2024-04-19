System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Sprite, Toggle, Vec3, _decorator, instantiate, sp, BaseComponent, createSkeleton, createSpriteAtlasNode, sourceManageSelector, _dec, _class, _crd, ccclass, property, Fish_Getnewwwep;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSkeleton(extras) {
    _reporterNs.report("createSkeleton", "../../../common/fish/FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSpriteAtlasNode(extras) {
    _reporterNs.report("createSpriteAtlasNode", "../../../common/fish/FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      createSkeleton = _unresolved_3.createSkeleton;
      createSpriteAtlasNode = _unresolved_3.createSpriteAtlasNode;
    }, function (_unresolved_4) {
      sourceManageSelector = _unresolved_4.sourceManageSelector;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56960+R3chLUaOWy31mX2M6", "Fish_Getnewwwep", undefined);

      __checkObsolete__(['Label', 'Node', 'Sprite', 'Toggle', 'Vec3', '_decorator', 'instantiate', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish_Getnewwwep", Fish_Getnewwwep = (_dec = ccclass('Fish_Getnewwwep'), _dec(_class = class Fish_Getnewwwep extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_list: new Node(),
            props_img_side: new Node()
          };
          this.props = {
            vipLevel: 0,
            myBatteryId: 0,
            textureConfig: null,
            batterySkinConfig: null
          };
          this.events = {
            onClose: () => {},
            changeBattery: batteryId => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClose();
          });
        }

        useProps(key, value) {
          if (key === '_setDone') {
            this.initBatteryList();
          }
        }

        bindUI() {}

        initBatteryList() {
          this.propertyNode.props_list.removeAllChildren();

          for (const key in this.props.batterySkinConfig) {
            const element = this.props.batterySkinConfig[key];
            this.createBattery(element);
          }
        }

        createBattery(skinConfig) {
          const itemNode = instantiate(this.propertyNode.props_img_side);
          let batteryNode;

          if (skinConfig.id === 0) {
            const texture = this.props.textureConfig[skinConfig.src];
            const spriteName = String(texture.pattern).format(1);
            batteryNode = (_crd && createSpriteAtlasNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteAtlasNode({
              error: Error()
            }), createSpriteAtlasNode) : createSpriteAtlasNode)((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
              error: Error()
            }), sourceManageSelector) : sourceManageSelector)(), itemNode, texture, spriteName);
          } else {
            batteryNode = (_crd && createSkeleton === void 0 ? (_reportPossibleCrUseOfcreateSkeleton({
              error: Error()
            }), createSkeleton) : createSkeleton)((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
              error: Error()
            }), sourceManageSelector) : sourceManageSelector)(), itemNode, skinConfig.src);
            batteryNode.getComponent(sp.Skeleton).setAnimation(0, skinConfig.ani1, true);
            batteryNode.setScale(new Vec3(0.8, 0.8));
          }

          batteryNode.angle = 90;
          batteryNode.setSiblingIndex(0);
          const isLock = this.props.vipLevel < skinConfig.vip;
          itemNode.getComponent(Toggle).isChecked = !isLock;
          itemNode.getComponent(Toggle).enabled = !isLock;
          itemNode.getChildByName("txt_title").getComponent(Label).string = skinConfig.name;
          itemNode.getChildByName("txt_vip").getComponent(Label).string = 'VIP ' + skinConfig.vip;
          itemNode.getChildByName("img_unlock").active = !isLock;
          itemNode.getChildByName("img_using").active = this.props.myBatteryId === skinConfig.id;
          itemNode.getChildByName("img_lock").active = isLock;
          itemNode.getChildByName("img_lock_hedi").active = isLock;
          itemNode.getComponent(Sprite).grayscale = isLock;
          this.propertyNode.props_list.addChild(itemNode);
          itemNode.on(Toggle.EventType.CLICK, e => {
            if (e.isChecked) {
              if (skinConfig.id !== this.props.myBatteryId) {
                this.events.changeBattery(skinConfig.id);
              }

              this.events.onClose();
            }
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c21e0e045298aab89f537534c6ab97c1382a8178.js.map