System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, sp, Sprite, UITransform, Vec3, BaseComponent, IconEffectType, sourceManageSeletor, _dec, _class, _crd, ccclass, property, Fruit777_RollerIcon;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconEffectType(extras) {
    _reporterNs.report("IconEffectType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconType(extras) {
    _reporterNs.report("IconType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      IconEffectType = _unresolved_3.IconEffectType;
    }, function (_unresolved_4) {
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17e0dtqwkNGs4TyOJe2/qeG", "Fruit777_RollerIcon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'debug', 'instantiate', 'Label', 'Node', 'Skeleton', 'sp', 'Sprite', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fruit777_RollerIcon", Fruit777_RollerIcon = (_dec = ccclass('Fruit777_RollerIcon'), _dec(_class = class Fruit777_RollerIcon extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_iconWrap: new Node(),
            props_iconId: new Label(),
            props_index: new Label(),
            props_focusBorder: new Node()
          };
          this.props = {
            iconData: null,
            iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE
          };
          this.events = {};
          this.iconNodeSkeleton_copy = void 0;
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "iconData") {
            var uiTrasform = this.node.getComponent(UITransform);
            uiTrasform.width = this.props.iconData.width;
            uiTrasform.height = this.props.iconData.height;
            var iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton");
            var iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");
            iconNodeSkeleton.active = false;
            iconNodeSprite.active = false;
            var iconNode;
            iconNode = iconNodeSprite;
            iconNodeSprite.active = true;
            iconNodeSprite.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.iconData.uiData.fileName).source; // if (this.props.iconData.LargeIcon) {
            // 	iconNode = iconNodeSprite
            // 	iconNodeSprite.active = true
            // 	iconNodeSprite.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
            // } else {
            // 	iconNode = iconNodeSkeleton
            // 	iconNodeSkeleton.active = true
            // 	iconNodeSkeleton.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
            // 	iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0]
            // }
            // if (!this.props.iconData.LargeIcon) {
            // 	iconNodeSkeleton.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(this.props.iconData.uiData.skeleton).source
            // 	iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0]
            // }

            iconNode.setScale(new Vec3(...this.props.iconData.uiData.scale));

            if (this.props.iconData.LargeIcon) {
              var {
                x,
                y,
                z
              } = iconNode.getPosition();
              iconNode.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x));
            }

            this.propertyNode.props_iconId.string = this.props.iconData.iconId + "";
            this.propertyNode.props_index.string = this.props.iconData.queueIndex + "";
          }

          if (key === "iconEffect") {
            //闪动框
            var _iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton");

            var _iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");

            var isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NORMAIL && !this.props.iconData.LargeIcon;
            this.propertyNode.props_focusBorder.active = isActive;

            if (!this.props.iconData.LargeIcon) {
              _iconNodeSprite.active = !isActive; // iconNodeSkeleton.active = isActive

              if (this.props.iconEffect === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE) {
                if (this.iconNodeSkeleton_copy) {
                  this.iconNodeSkeleton_copy.destroy();
                } else {
                  this.iconNodeSkeleton_copy = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton_copy");
                }
              } else {
                this.iconNodeSkeleton_copy = instantiate(_iconNodeSkeleton);
                this.iconNodeSkeleton_copy.parent = this.node;
                this.iconNodeSkeleton_copy.active = true;
                this.iconNodeSkeleton_copy.name = "iconNode_skeleton_copy";
                this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.iconData.uiData.skeleton).source;
                this.iconNodeSkeleton_copy.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[1];
                var {
                  x: _x,
                  y: _y,
                  z: _z
                } = this.iconNodeSkeleton_copy.getPosition();
                this.iconNodeSkeleton_copy.setPosition(new Vec3(_x + this.props.iconData.uiData.distance[0], _y + this.props.iconData.uiData.distance[1], _x));
              }
            } // iconNodeSkeleton.getComponent(sp.Skeleton).updateRenderer()
            // console.log(this.props.iconData.iconId, this.props.iconData.uiData.skeleton, this.props.iconData.uiData.animationArr)
            // iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0]

          } // if (key === "iconEffect") {
          // 	//闪动框
          // 	const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")
          // 	const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
          // 	const isActive = (value.cur === IconEffectType.NORMAIL && !this.props.iconData.LargeIcon)
          // 	if (!this.props.iconData.LargeIcon) {
          // 		iconNodeSprite.active = !isActive
          // 		iconNodeSkeleton.active = isActive
          // 	}
          // 	this.propertyNode.props_focusBorder.active = isActive
          // 	iconNodeSkeleton.getComponent(sp.Skeleton).updateRenderer()
          // 	console.log(this.props.iconData.iconId, this.props.iconData.uiData.skeleton, this.props.iconData.uiData.animationArr)
          // 	iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0]
          // 	const { x, y, z } = iconNodeSkeleton.getPosition()
          // 	iconNodeSkeleton.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
          // }

        }

        bindUI() {
          this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5aed92ac94f872a27970b890f35362d78916a5a3.js.map