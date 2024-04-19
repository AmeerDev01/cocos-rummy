System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, UIOpacity, UITransform, Vec3, BaseComponent, GameType, IconEffectType, sourceManageSeletor, _dec, _class, _crd, ccclass, property, BlessedWealthy_rollerIcon;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GameType = _unresolved_3.GameType;
      IconEffectType = _unresolved_3.IconEffectType;
    }, function (_unresolved_4) {
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da186My/kNMWLYttHNcf9pn", "BlessedWealthy_rollerIcon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'debug', 'instantiate', 'Label', 'Node', 'bezier', 'ParticleSystem2D', 'Skeleton', 'sp', 'Sprite', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessedWealthy_rollerIcon", BlessedWealthy_rollerIcon = (_dec = ccclass('BlessedWealthy_rollerIcon'), _dec(_class = class BlessedWealthy_rollerIcon extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_iconWrap: new Node(),
            props_iconId: new Label(),
            props_index: new Label(),
            props_dfdc_huoyankuangxiao: new Node()
          };
          this.props = {
            iconData: null,
            iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE,
            iconYuanBaoEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE,
            iconFreeGameEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE,
            viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE,
            isRollEnd: true
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
            console.log("iconData", value.cur);
            const uiTrasform = this.node.getComponent(UITransform);
            uiTrasform.width = this.props.iconData.width;
            uiTrasform.height = this.props.iconData.height; // const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")

            const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite"); // iconNodeSkeleton.active = false

            iconNodeSprite.active = false;
            let iconNode;
            iconNode = iconNodeSprite;
            iconNodeSprite.active = true;
            iconNodeSprite.getComponent(sp.Skeleton).skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.iconData.uiData.fileName).source;
            iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0];
            iconNode.setScale(new Vec3(...this.props.iconData.uiData.scale));
            const {
              x,
              y,
              z
            } = iconNode.getPosition();
            iconNode.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x));
            this.propertyNode.props_iconId.string = this.props.iconData.iconId + "";
            this.propertyNode.props_index.string = this.props.iconData.queueIndex + "";
          }

          if (key === "iconEffect") {
            // if (this.props && this.props.isRollEnd) {
            // }
            //闪动框
            const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");
            const isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NORMAIL && !this.props.iconData.LargeIcon;
            this.propertyNode.props_dfdc_huoyankuangxiao.active = isActive;
            const uiOpacity = this.propertyNode.props_dfdc_huoyankuangxiao.getComponent(UIOpacity); // if (isActive) {
            // 	//闪动 repeatForever 重复执行一个动作
            // 	const t = tween(uiOpacity).to(0.4, { opacity: 255 }).to(0.4, { opacity: 0 });
            // 	t.start();
            // }

            iconNodeSprite.getComponent(sp.Skeleton).updateRenderer();
            iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
            const {
              x,
              y,
              z
            } = iconNodeSprite.getPosition(); // iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
          } // if (key === "iconYuanBaoEffect") {
          // 	if (!value.cur) { return }
          // 	//元宝闪动框
          // 	const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
          // 	const isActive = (value.cur === IconEffectType.YUANBAO && !this.props.iconData.LargeIcon);
          // 	iconNodeSprite.getComponent(sp.Skeleton).updateRenderer();
          // 	iconNodeSprite.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_YUANBAO).source;
          // 	iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
          // 	tween(iconNodeSprite).delay(1).call(() => { 
          // 		let yuanBaoRate = dataTransfer(DataKeyType.ICON_YUANBAO_EFFECT_DATA).yuanBaoMagnification;
          // 		let yuanBaoWinNum = dataTransfer(DataKeyType.ICON_YUANBAO_EFFECT_DATA).yuanBaoAmount;
          // 		/**展示元宝中奖框 */
          // 		if (!this.node) { return }
          // 		const yuanBaoTotalBet = new BaseViewModel("phoenix_yuanbao_totalBet").mountView(sourceManageSeletor().getFile(PrefabPathDefine.PHOENIX_TOTAL_BET).source)
          // 			.appendTo(rollerPanelViewModel.viewNode, { effectType: EffectType.EFFECT1, isModal: true })
          // 			.setEvent({}).setProps({
          // 				yuanBaoRate: "X" + yuanBaoRate,
          // 				yuanBaoWinNum: yuanBaoWinNum + "",
          // 			}).connect()
          // 	}).start()
          // 	const { x, y, z } = iconNodeSprite.getPosition();
          // 	iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
          // }
          // if (key === "iconFreeGameEffect") {
          // 	if (!value.cur) { return }
          // 	//元宝闪动框
          // 	const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite")
          // 	const isActive = (value.cur === IconEffectType.FREEEGAMEZ && !this.props.iconData.LargeIcon);
          // 	iconNodeSprite.getComponent(sp.Skeleton).updateRenderer();
          // 	iconNodeSprite.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_SKELETON).source;
          // 	iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
          // 	const { x, y, z } = iconNodeSprite.getPosition();
          // 	iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))
          // }

        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fdeefd60e0af3e086519017695a7f4bcde0278d.js.map