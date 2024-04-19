System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, sp, Sprite, tween, UITransform, Vec3, BaseComponent, IconEffectType, sourceManageSeletor, winShowViewModel, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, Thor_RollerIcon;

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

  function _reportPossibleCrUseOfwinShowViewModel(extras) {
    _reporterNs.report("winShowViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
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
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      IconEffectType = _unresolved_3.IconEffectType;
    }, function (_unresolved_4) {
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
      winShowViewModel = _unresolved_4.winShowViewModel;
    }, function (_unresolved_5) {
      SkeletonAnimationPlayer = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "958e9bp9SBNwYU2zS75Jfz6", "Thor_RollerIcon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'debug', 'instantiate', 'Label', 'Node', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_RollerIcon", Thor_RollerIcon = (_dec = ccclass('Thor_RollerIcon'), _dec(_class = class Thor_RollerIcon extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_iconWrap: new Node(),
            props_iconId: new Label(),
            props_label_rate_num: new Node(),
            props_focusBorder: new Node(),
            props_skeleton_bomb: new Node()
          };
          this.props = {
            iconData: null,
            iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "iconData") {
            if (this.props.iconData) {
              const uiTrasform = this.node.getComponent(UITransform);
              uiTrasform.width = this.props.iconData.width;
              uiTrasform.height = this.props.iconData.height;
              const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton");
              const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");
              iconNodeSkeleton.active = false;
              iconNodeSprite.active = false;
              let iconNode; // if (this.props.iconData.LargeIcon) {
              // 	iconNode = iconNodeSprite
              // 	iconNodeSprite.active = false
              // 	iconNodeSprite.getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(this.props.iconData.uiData.fileName).source
              // } else {
              // }

              iconNode = iconNodeSkeleton;
              iconNodeSkeleton.active = true;
              iconNodeSkeleton.getComponent(sp.Skeleton).skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.iconData.uiData.fileName).source;
              iconNodeSkeleton.getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default');
              iconNodeSkeleton.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0];
              this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = false;
              this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = true;
              this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.iconData.uiData.iconName).source;

              if (this.props.iconData.iconId > 10) {
                this.propertyNode.props_label_rate_num.active = true;
                this.propertyNode.props_label_rate_num.getComponent(Label).string = this.props.iconData.multiple + "X";
              }

              iconNode.setScale(new Vec3(...this.props.iconData.uiData.scale));
              const {
                x,
                y,
                z
              } = iconNode.getPosition();
              iconNode.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x)); // this.propertyNode.props_iconId.string = this.props.iconData.iconId + ""
            }
          }

          if (key === "iconEffect") {
            //闪动框
            const isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NORMAIL;
            this.propertyNode.props_focusBorder.active = isActive;
            this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = true;
            this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = false;
            this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default');
            this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
            this.scheduleOnce(() => {
              this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = false;
              this.propertyNode.props_skeleton_bomb.active = true;
            }, 0.8);
          }
        }

        playAni(isActive, callBack) {
          this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = true;
          this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = false;
          this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default');
          let i = 0;
          let ani = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton), this.props.iconData.uiData.animationArr[isActive ? 2 : 0], true, () => {
            i++;

            if (i == 2) {
              callBack();
            }
          });
          ani.playAnimation();
        }

        playallPurpose(callBack) {
          this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").active = true;
          this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite").active = false;
          this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton).setSkin(this.props.iconData.uiData.skin ? this.props.iconData.uiData.skin : 'default');
          let ani = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton").getComponent(sp.Skeleton), this.props.iconData.uiData.animationArr[1], false, () => {
            // 获取起始和目标的世界坐标
            let startWorldPos = this.propertyNode.props_label_rate_num.worldPosition;
            let targetWorldPos = (_crd && winShowViewModel === void 0 ? (_reportPossibleCrUseOfwinShowViewModel({
              error: Error()
            }), winShowViewModel) : winShowViewModel).comp.node.getChildByName('props_spr_win_box').worldPosition; // 创建节点的实例

            let node = instantiate(this.propertyNode.props_label_rate_num); // 将节点添加到目标节点所在的父节点

            (_crd && winShowViewModel === void 0 ? (_reportPossibleCrUseOfwinShowViewModel({
              error: Error()
            }), winShowViewModel) : winShowViewModel).comp.node.addChild(node); // 获取父节点的 UITransform 组件

            let uiTransform = (_crd && winShowViewModel === void 0 ? (_reportPossibleCrUseOfwinShowViewModel({
              error: Error()
            }), winShowViewModel) : winShowViewModel).comp.node.getComponent(UITransform); // 将世界坐标转换为新父节点的局部坐标

            let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
            let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
            targetLocalPos.y = targetLocalPos.y - 25; // 设置节点的初始位置

            node.setPosition(startLocalPos);
            this.propertyNode.props_label_rate_num.active = false; // 执行缓动动画

            tween(node).to(1, {
              position: targetLocalPos
            }, {
              easing: 'sineInOut'
            }).call(() => {
              callBack();
              node.destroy();
            }).start();
          });
          ani.playAnimation();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=981ec678919e94723ea8d9e615bc3dd0effca5ba.js.map