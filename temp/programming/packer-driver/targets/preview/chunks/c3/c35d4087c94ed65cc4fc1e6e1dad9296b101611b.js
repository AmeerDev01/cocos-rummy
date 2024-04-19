System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, tween, UIOpacity, UITransform, Vec3, BaseComponent, GameType, IconEffectType, sourceManageSeletor, _dec, _class, _crd, ccclass, property, GodWealth_rollerIcon;

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

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
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
      tween = _cc.tween;
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

      _cclegacy._RF.push({}, "a4869rfpOlNNKoL3nxMscXQ", "GodWealth_rollerIcon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'debug', 'instantiate', 'Label', 'Node', 'bezier', 'ParticleSystem2D', 'Skeleton', 'sp', 'Sprite', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_rollerIcon", GodWealth_rollerIcon = (_dec = ccclass('GodWealth_rollerIcon'), _dec(_class = class GodWealth_rollerIcon extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = void 0;
          this.propertyNode = {
            props_iconWrap: new Node(),
            props_iconId: new Label(),
            props_index: new Label(),
            props_focusBorder: new Node(),
            props_focusBorder2: new Node(),
            props_amount: new Node(),
            props_baohe_label: new Label()
          };
          this.props = {
            iconData: null,
            iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE,
            iconBaoHeEffectData: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE,
            iconFreeGameEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NONE,
            viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE,
            isRollEnd: true,
            baoHeAmount: 0,
            gameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE
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
            var uiTrasform = this.node.getComponent(UITransform);
            uiTrasform.width = this.props.iconData.width;
            uiTrasform.height = this.props.iconData.height; // const iconNodeSkeleton = this.propertyNode.props_iconWrap.getChildByName("iconNode_skeleton")

            var iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite"); // iconNodeSkeleton.active = false

            iconNodeSprite.active = false;
            var iconNode;
            iconNode = iconNodeSprite;
            iconNodeSprite.active = true;
            iconNodeSprite.getComponent(sp.Skeleton).skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.iconData.uiData.fileName).source;
            iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[0];
            iconNode.setScale(new Vec3(...this.props.iconData.uiData.scale));
            var {
              x,
              y,
              z
            } = iconNode.getPosition();
            iconNode.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x));
            this.propertyNode.props_iconId.string = this.props.iconData.iconId + "";
            this.propertyNode.props_index.string = this.props.iconData.queueIndex + "";
          }

          if (key === "iconEffect") {
            //闪动框
            var _iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");

            var isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NORMAIL && !this.props.iconData.LargeIcon;
            this.propertyNode.props_focusBorder.active = isActive;
            var uiOpacity = this.propertyNode.props_focusBorder.getComponent(UIOpacity);

            if (isActive) {
              //闪动 repeatForever 重复执行一个动作
              var t = tween(uiOpacity).to(0.4, {
                opacity: 255
              }).to(0.4, {
                opacity: 0
              });
              t.start();
            }

            _iconNodeSprite.getComponent(sp.Skeleton).updateRenderer();

            _iconNodeSprite.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];

            var {
              x: _x,
              y: _y,
              z: _z
            } = _iconNodeSprite.getPosition(); // iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))


            this.activeAmount();
          } // if (key === "iconBaoHeEffectData") {
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


          if (key === "iconFreeGameEffect") {
            if (!value.cur) {
              return;
            } //财神闪动框


            console.log("iconFreeGameEffect", value.cur);

            var _iconNodeSprite2 = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");

            var _isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).FREEEGAMEZ && !this.props.iconData.LargeIcon;

            _iconNodeSprite2.getComponent(sp.Skeleton).updateRenderer(); // iconNodeSprite.getComponent(sp.Skeleton).skeletonData = sourceManageSeletor().getFile(SkeletalPathDefine.TUBIAO_SKELETON).source;


            _iconNodeSprite2.getComponent(sp.Skeleton).animation = this.props.iconData.uiData.animationArr[_isActive ? 1 : 0];

            var {
              x: _x2,
              y: _y2,
              z: _z2
            } = _iconNodeSprite2.getPosition();

            _iconNodeSprite2.setPosition(new Vec3(_x2 + this.props.iconData.uiData.distance[0], _y2 + this.props.iconData.uiData.distance[1], _x2));
          }

          if (key === "baoHeAmount") {
            this.propertyNode.props_baohe_label.string = value.cur + '';
          }

          if (key === "gameType") {// const flicherBaoHeArr: number[][] = dataTransfer(DataKeyType.FIXED_CHESSBOARD_ICON);//获取宝盒数据
            // if (value.cur === GameType.SUBGAME2) {
            //    /**宝盒金币飞行特效*/
            //   const multiplesOfFlight = new Task((done) => { 
            // 	if(Object.keys(flicherBaoHeArr).length > 0){
            // 	  this.multiplierBaoHe(done)
            // 	} else {
            // 	  done()
            // 	}
            //   })
            //   this.taskScheduler.joinqQueue(multiplesOfFlight, false)
            // }
          }
        }

        activeAmount() {
          if (this.props && this.props.iconData.iconId === 12 && this.props.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            this.propertyNode.props_amount.active = true;
            tween(this.propertyNode.props_amount).delay(2).call(() => {
              this.propertyNode.props_amount.active = false;
            }).start();
          }
        }

        getWrapNode() {
          return this.propertyNode.props_iconWrap;
        }

        multiplierBaoHe(callback) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c35d4087c94ed65cc4fc1e6e1dad9296b101611b.js.map