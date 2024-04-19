System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, sp, tween, UIOpacity, UITransform, Vec3, BaseComponent, GameType, IconEffectType, footerViewModel, sourceManageSeletor, SkeletalPathDefine, dataTransfer, DataKeyType, changeProfit, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, phoenix_rollerIcon;

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

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletalPathDefine(extras) {
    _reporterNs.report("SkeletalPathDefine", "../sourceDefine/skeletalDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
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
      footerViewModel = _unresolved_4.footerViewModel;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      SkeletalPathDefine = _unresolved_5.SkeletalPathDefine;
    }, function (_unresolved_6) {
      dataTransfer = _unresolved_6.default;
      DataKeyType = _unresolved_6.DataKeyType;
    }, function (_unresolved_7) {
      changeProfit = _unresolved_7.changeProfit;
    }, function (_unresolved_8) {
      SkeletonAnimationPlayer = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08d7fWSGN5AD495Cs1pBCNT", "phoenix_rollerIcon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'debug', 'instantiate', 'Label', 'Node', 'bezier', 'ParticleSystem2D', 'Skeleton', 'sp', 'Sprite', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_rollerIcon", phoenix_rollerIcon = (_dec = ccclass('phoenix_rollerIcon'), _dec(_class = class phoenix_rollerIcon extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.isFirstShow = 0;
          this.propertyNode = {
            props_iconWrap: new Node(),
            props_iconId: new Label(),
            props_index: new Label(),
            props_focusBorder: new Node(),
            props_amount: new Node(),
            props_Particle2D: new Node(),
            props_yinbi: new Node(),
            props_addOne: new Node()
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
          this.events = {
            openTotalPanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "iconData") {
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
            //闪动框
            this.isFirstShow++;
            const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");

            if (this.props.iconData.uiData.id === 13) {
              iconNodeSprite.getComponent(sp.Skeleton).skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.props.iconData.uiData.fileName).source;
            } // if (this.props.iconData.uiData.id === 12 && this.isFirstShow === 1) {//初始展示特效
            // this.scheduleOnce(() => {
            // 	// this.propertyNode.props_Particle2D.active = true;
            // 	this.propertyNode.props_amount.active = true;
            // },2.5)
            // }


            const isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).NORMAIL && !this.props.iconData.LargeIcon;
            this.propertyNode.props_focusBorder.active = isActive;
            const uiOpacity = this.propertyNode.props_focusBorder.getComponent(UIOpacity);

            if (isActive) {
              //闪动 repeatForever 重复执行一个动作
              const t = tween(uiOpacity).repeatForever(tween().to(0.4, {
                opacity: 255
              }).to(0.4, {
                opacity: 0
              }));
              t.start(); // this.activeAmount()
            }

            const skeletal = iconNodeSprite.getComponent(sp.Skeleton);
            skeletal.updateRenderer();
            skeletal.animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
            const {
              x,
              y,
              z
            } = iconNodeSprite.getPosition(); // iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x))

            if (!isActive) {
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(skeletal, "animation", false).stopAnimation(); // this.propertyNode.props_amount.active = false;
            }
          }

          if (key === "iconYuanBaoEffect") {
            //元宝闪动框
            const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");
            const isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).YUANBAO && !this.props.iconData.LargeIcon;
            console.log("yuanbao", isActive);
            const skeletal = iconNodeSprite.getComponent(sp.Skeleton);
            skeletal.updateRenderer();
            skeletal.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_YUANBAO).source;
            skeletal.animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
            const {
              x,
              y,
              z
            } = iconNodeSprite.getPosition();
            iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x));

            if (isActive) {
              this.showYinBi();
              tween(iconNodeSprite).delay(1).call(() => {
                /**展示元宝中奖框 */
                if (!this.node) {
                  return;
                }

                this.events.openTotalPanel();
              }).start();
            } else {
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(skeletal, "animation", false).stopAnimation();
            }
          }

          if (key === "iconFreeGameEffect") {
            if (!value.cur) {
              return;
            } //转轴闪动框


            this.node.setSiblingIndex(10);
            const iconNodeSprite = this.propertyNode.props_iconWrap.getChildByName("iconNode_sprite");
            const isActive = value.cur === (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
              error: Error()
            }), IconEffectType) : IconEffectType).FREEEGAMEZ && !this.props.iconData.LargeIcon;
            const skeletal = iconNodeSprite.getComponent(sp.Skeleton);
            skeletal.updateRenderer();
            skeletal.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_SKELETON).source;
            skeletal.animation = this.props.iconData.uiData.animationArr[isActive ? 1 : 0];
            const {
              x,
              y,
              z
            } = iconNodeSprite.getPosition();
            iconNodeSprite.setPosition(new Vec3(x + this.props.iconData.uiData.distance[0], y + this.props.iconData.uiData.distance[1], x));

            if (!isActive) {
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(skeletal, "animation", false).stopAnimation();
            }
          }
        }

        playallPurpose(callBack) {
          // console.log("this.node", this.node, this.propertyNode.props_Particle2D.active);
          // console.log("isFIRst",this.isFirstShow);
          if (this.node && this.isFirstShow <= 0) {
            callBack();
            return;
          }

          ;
          this.propertyNode.props_amount.active = true; // 获取起始和目标的世界坐标

          let startWorldPos = this.propertyNode.props_Particle2D.worldPosition; // console.log(footerViewModel.comp.getPropertyNode().props_btn_down_putar as Node);

          let targetWorldPos = (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).comp.getPropertyNode().props_btn_down_putar.worldPosition; // 创建节点的实例

          let node = instantiate(this.propertyNode.props_Particle2D); // 将节点添加到目标节点所在的父节点

          (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).comp.node.addChild(node); // 获取父节点的 UITransform 组件

          let uiTransform = (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).comp.node.getComponent(UITransform); // 将世界坐标转换为新父节点的局部坐标

          let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
          let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos); // 设置节点的初始位置

          node.setPosition(startLocalPos);
          this.propertyNode.props_Particle2D.active = false;
          this.scheduleOnce(() => {
            this.propertyNode.props_amount.active = false;
          }, 1); // 执行缓动动画

          tween(node).to(1, {
            position: targetLocalPos
          }, {
            easing: 'sineInOut'
          }).call(() => {
            node.destroy();
            callBack();
          }).start();
        }

        showYinBi() {
          this.propertyNode.props_yinbi.active = true; // 获取起始和目标的世界坐标

          let startWorldPos = this.propertyNode.props_yinbi.worldPosition; // console.log(footerViewModel.comp.getPropertyNode().props_btn_down_putar as Node);

          let targetWorldPos = (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).comp.getPropertyNode().props_word_down_winNum.worldPosition; // 创建节点的实例

          let node = instantiate(this.propertyNode.props_yinbi); // 将节点添加到目标节点所在的父节点

          (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).comp.node.addChild(node); // 获取父节点的 UITransform 组件

          let uiTransform = (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).comp.node.getComponent(UITransform); // 将世界坐标转换为新父节点的局部坐标

          let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
          let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos); // 设置节点的初始位置

          node.setPosition(startLocalPos);
          this.propertyNode.props_yinbi.active = false;
          this.scheduleOnce(() => {
            this.propertyNode.props_yinbi.active = false;
          }, 1); // 执行缓动动画

          tween(node).to(1, {
            position: targetLocalPos
          }, {
            easing: 'sineInOut'
          }).call(() => {
            this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
              error: Error()
            }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT))); //更新盈亏

            node.destroy();
          }).start();
        }

        bindUI() {
          this.propertyNode.props_amount.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a372a913a0fbe8505b7f37b6c2228ac6ffd7d19.js.map