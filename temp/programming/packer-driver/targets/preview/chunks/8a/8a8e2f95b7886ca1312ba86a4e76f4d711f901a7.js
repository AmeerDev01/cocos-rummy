System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, instantiate, sp, Sprite, Animation, sourceManageSeletor, PrefabPathDefine, getNodeByNameDeep, IconId, getWild, config, SkeletalPathDefine, SkeletonAnimationPlayer, PhoenixV2Icon, _crd;

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconId(extras) {
    _reporterNs.report("IconId", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetWild(extras) {
    _reporterNs.report("getWild", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletalPathDefine(extras) {
    _reporterNs.report("SkeletalPathDefine", "../sourceDefine/skeletalDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../../../utils/SkeletonPlay", _context.meta, extras);
  }

  _export("PhoenixV2Icon", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      sourceManageSeletor = _unresolved_2.sourceManageSeletor;
    }, function (_unresolved_3) {
      PrefabPathDefine = _unresolved_3.PrefabPathDefine;
    }, function (_unresolved_4) {
      getNodeByNameDeep = _unresolved_4.getNodeByNameDeep;
    }, function (_unresolved_5) {
      IconId = _unresolved_5.IconId;
      getWild = _unresolved_5.getWild;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      SkeletalPathDefine = _unresolved_7.SkeletalPathDefine;
    }, function (_unresolved_8) {
      SkeletonAnimationPlayer = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cffd8mWhUlOH4CMz3oC2w6C", "PhoenixV2_Icon", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3', 'instantiate', 'sp', 'Sprite', 'Label', 'Animation', 'Mask', 'Graphics', 'UIOpacity', 'tween']);

      _export("PhoenixV2Icon", PhoenixV2Icon = class PhoenixV2Icon {
        constructor(iconConfig, isPoolObject) {
          if (isPoolObject === void 0) {
            isPoolObject = true;
          }

          this.node = void 0;
          this.faceNode = void 0;
          this.faceAnimationNode = void 0;
          this.iconConfig = void 0;
          this.skeleton = void 0;
          this.sprite = void 0;
          this.use = false;
          this.iconIndex = 0;
          this.borderNode = void 0;
          this.amountNode = void 0;
          this.Particle2D = void 0;
          this.yinBiNode = void 0;
          this.isPoolObject = true;
          this.callback = void 0;
          this.iconConfig = iconConfig;
          this.isPoolObject = isPoolObject;
          this.node = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).ICON).source);
          this.node.getComponent(UITransform).width = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerWidth;
          this.node.getComponent(UITransform).height = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight;
          this.faceNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("face", this.node);
          this.faceAnimationNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("face-animation", this.node);
          this.sprite = this.faceNode.getComponent(Sprite);
          this.skeleton = this.faceAnimationNode.getComponent(sp.Skeleton);
          this.borderNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("focusBorder", this.node);
          this.borderNode.active = true;
          this.borderNode.removeFromParent();
          this.yinBiNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("yinBi", this.node);
          this.yinBiNode.active = false;

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).WILD) {
            this.amountNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("amount", this.node);
            this.Particle2D = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_Particle2D", this.node); // this.amountNode.active = true;

            this.listenerSkeletonEvent();
          }

          this.buildIcon();
        }

        listenerSkeletonEvent() {
          this.skeleton.setCompleteListener(() => {
            if (this.node.isValid && this.callback) {
              this.callback && this.callback();
              this.callback = null;
              this.hideWin();
            }
          });
        }
        /**获得图标 */


        resetIcon(iconConfig, parentNode, iconIndex) {
          this.use = true;
          this.iconConfig = iconConfig;
          this.iconIndex = iconIndex;
          parentNode && parentNode.addChild(this.node);
          this.node.setScale(iconConfig.scale[0], iconConfig.scale[1]);
          this.faceAnimationNode.setScale(iconConfig.scale[0], iconConfig.scale[1]);
        }

        getId() {
          return this.iconConfig.id;
        }
        /**归还到缓存池 */


        restore() {
          if (this.node && this.node.isValid) {
            this.use = false;
            this.iconIndex = -1;
            this.node.active = true;
            this.node.removeFromParent();
            this.amountNode && (this.amountNode.active = false);
            this.Particle2D && (this.Particle2D.active = true);
            this.yinBiNode && (this.yinBiNode.active = false);
            !this.isPoolObject && this.destory();
          }
        }

        getNode() {
          return this.node;
        }

        getHeight() {
          return this.node.getComponent(UITransform).height;
        }

        getIconIndex() {
          return this.iconIndex;
        }

        setPosition(value) {
          if (this.node) {
            this.node.setPosition(value);
            var offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
            this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
          }
        }

        getPosition() {
          return this.node.getPosition();
        }

        changeIcon(id) {
          var {
            fileName,
            skeletonName
          } = (_crd && getWild === void 0 ? (_reportPossibleCrUseOfgetWild({
            error: Error()
          }), getWild) : getWild)(id);
          this.sprite.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(fileName).source;
          this.skeleton.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(skeletonName).source;
        }

        buildIcon() {
          this.faceAnimationNode.active = false;
          this.faceAnimationNode.removeFromParent();
          var skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.skeletonName).source;
          this.skeleton.skeletonData = skeletonData;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false); // if (this.iconConfig.id === 12) {
          //   console.log("this.iconConfig.fileName",this.iconConfig.fileName,this.iconConfig.skeletonName);
          // }

          this.sprite.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.fileName).source;
        }
        /**播放普通中奖 */


        playWin(parentNode, isBorder, loop) {
          if (isBorder === void 0) {
            isBorder = true;
          }

          if (loop === void 0) {
            loop = true;
          }

          var offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);
          this.yinBiNode && (this.yinBiNode.active = false);
          this.yinBiNode && this.yinBiNode.removeFromParent();
          this.faceAnimationNode.active = true;
          parentNode.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset)); // if (!this.faceAnimationNode.active) {
          // this.faceAnimationNode.active = true;
          //   if (!this.faceAnimationNode.parent) {
          //     parentNode.addChild(this.faceAnimationNode)
          //     this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
          //   }
          // }

          if (isBorder && !this.borderNode.active) {
            this.borderNode.active = true;

            if (!this.borderNode.parent) {
              parentNode.addChild(this.borderNode);
              this.borderNode.setWorldPosition(this.node.worldPosition);
              this.borderNode.getComponent(Animation).play();
            }
          }

          this.faceNode.active = false;

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE) {
            //元宝
            var skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_YUANBAO_ZHONG_JIANG).source;
            this.skeleton.skeletonData = skeletonData;
          }

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER) {
            //出现金钱图标时
            var _skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_SCATTER_CHUXIAN).source;
            this.skeleton.skeletonData = _skeletonData;
            new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
              error: Error()
            }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.skeleton, this.iconConfig.animationArr[1], false, () => {
              this.faceNode.active = true;
              this.faceAnimationNode.active = false;
            }).playAnimation();
          } else {
            this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
          }
        }
        /**播放scatter进入小游戏动画 */


        playScatterWin(parentNode, done, loop) {
          if (loop === void 0) {
            loop = false;
          }

          var offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);

          if (!this.faceAnimationNode.active) {
            this.faceAnimationNode.active = true;

            if (!this.faceAnimationNode.parent) {
              parentNode.addChild(this.faceAnimationNode);
              this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
            }
          }

          this.faceNode.active = false;

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER) {
            //scatter
            var skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_SCATTER).source;
            this.skeleton.skeletonData = skeletonData;
          }

          var count = 0;
          var skeletonPlayer = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.skeleton, this.iconConfig.animationArr[1], false, () => {
            count++;

            if (count >= 1) {
              skeletonPlayer.stopAnimation();
            }
          });
          skeletonPlayer.playAnimation();
        }
        /**播放特殊元宝动画 */


        playYuanBaoWinIcon(parentNode, isWin) {
          this.faceAnimationNode.active = true;
          this.node.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
          this.faceNode.active = false;
          var count = 0;

          if (!isWin) {
            var skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_CHUXIAN).source;
            this.skeleton.skeletonData = skeletonData;
            this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], false);
            this.yinBiNode.active = false;
          } else {
            var _skeletonData2 = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_YUANBAO_ZHONG_JIANG).source;
            this.skeleton.skeletonData = _skeletonData2;
            this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], false);
            var skeletonPlayer = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
              error: Error()
            }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.skeleton, this.iconConfig.animationArr[1], false, () => {
              count++;

              if (count >= 1) {
                skeletonPlayer.stopAnimation();
                this.faceNode.active = true;
                this.faceAnimationNode.active = false;
                this.yinBiNode.active = true;
                this.node.addChild(this.faceAnimationNode);
                this.yinBiNode.setWorldPosition(this.node.worldPosition);
              }
            });
            skeletonPlayer.playAnimation();
          }
        }
        /**播放甲壳虫动画 */


        playBeetleAnimation(done) {
          this.callback = done;
          this.faceAnimationNode.active = true;
          this.node.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
          this.faceNode.active = false;
          this.amountNode.setSiblingIndex(this.node.children.length);
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], true);
        }
        /**隐藏普通中奖 */


        hideWin() {
          this.faceAnimationNode.active = false;
          this.faceAnimationNode.removeFromParent();
          this.borderNode.active = false;
          this.borderNode.removeFromParent();
          this.faceNode.active = true;
          this.yinBiNode.active = false;
          this.yinBiNode.removeFromParent();
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
          this.Particle2D && (this.Particle2D.active = false);
        }

        pauseWin() {
          this.borderNode.active = false; // this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);

          this.skeleton.clearTracks();
        }
        /**是否使用 */


        isUse() {
          return this.use;
        }

        setAmount(amount) {// this.amountNode.getComponent(Label).string = amount;
        }

        showBg() {
          this.node.getChildByName("bg").active = true;
        }

        hideBg() {
          this.node.getChildByName("bg").active = false;
        }

        getAmountNode() {
          return this.amountNode;
        }

        getParticle2DNode() {
          return this.Particle2D;
        }

        getYinBiNode() {
          return this.yinBiNode;
        }

        destory() {
          this.node.isValid && this.node.destroy();
          this.faceAnimationNode.destroy();
          this.borderNode.destroy();
          this.node = null;
          this.iconConfig = null;
          this.skeleton = null;
          this.yinBiNode.destroy();
          this.Particle2D.destroy();
          this.amountNode.destroy();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a8e2f95b7886ca1312ba86a4e76f4d711f901a7.js.map