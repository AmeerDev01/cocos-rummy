System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, instantiate, sp, Sprite, Label, sourceManageSeletor, PrefabPathDefine, getNodeByNameDeep, IconId, config, SkeletonAnimationPlayer, SpriteFramePathDefine, SkeletalPathDefine, DragonV2Icon, _crd;

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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../../../utils/SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletalPathDefine(extras) {
    _reporterNs.report("SkeletalPathDefine", "../sourceDefine/skeletalDefine", _context.meta, extras);
  }

  _export("DragonV2Icon", void 0);

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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      sourceManageSeletor = _unresolved_2.sourceManageSeletor;
    }, function (_unresolved_3) {
      PrefabPathDefine = _unresolved_3.PrefabPathDefine;
    }, function (_unresolved_4) {
      getNodeByNameDeep = _unresolved_4.getNodeByNameDeep;
    }, function (_unresolved_5) {
      IconId = _unresolved_5.IconId;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      SkeletonAnimationPlayer = _unresolved_7.default;
    }, function (_unresolved_8) {
      SpriteFramePathDefine = _unresolved_8.SpriteFramePathDefine;
    }, function (_unresolved_9) {
      SkeletalPathDefine = _unresolved_9.SkeletalPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e213Rp5m5PlKeysAELtpkg", "DragonV2Icon", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3', 'instantiate', 'sp', 'Sprite', 'Label']);

      _export("DragonV2Icon", DragonV2Icon = class DragonV2Icon {
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
          this.borderNode2 = void 0;
          this.amountNode = void 0;
          // public Particle2DNode: Node;
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
          this.borderNode.active = false;
          this.borderNode.removeFromParent(); // this.borderNode2 = getNodeByNameDeep("focusBorder2", this.node);
          // this.borderNode2.active = true;
          // this.borderNode2.removeFromParent();

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE) {
            this.amountNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("amount", this.node);
            this.amountNode.active = true; // this.Particle2DNode = this.amountNode.getChildByName("props_Particle");

            this.amountNode.getChildByName("label_number").getComponent(Label).string = Math.ceil(Math.random() * 100) + '';
            this.listenerSkeletonEvent();
          }

          this.buildIcon();
        }

        listenerSkeletonEvent() {
          this.skeleton.setCompleteListener(() => {
            if (this.node && this.node.isValid && this.callback) {
              this.callback && this.callback();
              this.callback = null;
              this.hideWin();
            }
          });
        }

        pauseWin() {
          this.borderNode.active = false;
          this.skeleton.clearTracks();
        }

        changeIcon(bl) {
          if (bl) {
            this.sprite.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).baicai1).source;
            this.skeleton.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).baicai1).source;
          } else {
            this.sprite.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).baicai).source;
            this.skeleton.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
              error: Error()
            }), SkeletalPathDefine) : SkeletalPathDefine).baicai).source;
          }
        }
        /**获得图标 */


        resetIcon(iconConfig, parentNode, iconIndex) {
          this.use = true;
          this.iconConfig = iconConfig;
          this.iconIndex = iconIndex;
          parentNode && parentNode.addChild(this.node);
          this.node.setScale(iconConfig.scale[0], iconConfig.scale[1]);
        }

        getId() {
          return this.iconConfig.id;
        }
        /**归还到缓存池 */


        restore() {
          this.use = false;
          this.iconIndex = -1;
          this.node.active = true;
          this.node.removeFromParent();

          if (this.node && this.node.isValid) {
            this.amountNode && (this.amountNode.getChildByName("label_number").getComponent(Label).string = (Math.random() * 100).toFixed(0) + '');

            if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).BEETLE) {
              this.amountNode.active = false;
            }
          }

          !this.isPoolObject && this.destory();
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
          }
        }

        getPosition() {
          return this.node.getPosition();
        }

        buildIcon() {
          this.faceAnimationNode.active = true;
          this.faceAnimationNode.removeFromParent();
          var skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.skeletonName).source;
          this.skeleton.skeletonData = skeletonData; // this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);

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
          this.faceAnimationNode.active = true;
          parentNode.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));

          if (isBorder && !this.borderNode.active) {
            this.borderNode.active = true;

            if (!this.borderNode.parent) {
              parentNode.addChild(this.borderNode);
              this.borderNode.setWorldPosition(this.node.worldPosition);
            }
          }

          this.faceNode.active = false;

          if (loop) {
            this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
          } else {
            // 播放一次切换回图片
            new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
              error: Error()
            }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.skeleton, this.iconConfig.animationArr[1], false, () => {
              this.faceNode.active = true;
              this.faceAnimationNode.active = false;
            }).playAnimation();
          }
        }
        /**播放宝盒动画 */


        playBaoHeAnimation(done) {
          this.callback = done;
          this.faceAnimationNode.active = true;
          this.node.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
          this.faceNode.active = true;
          this.amountNode.setSiblingIndex(this.node.children.length);
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], true);
        }

        playGame2BaoHeAnimation(done) {
          this.callback = done;
        }
        /**隐藏普通中奖 */


        hideWin() {
          this.faceAnimationNode.active = false;
          this.faceAnimationNode.removeFromParent();
          this.borderNode.active = false;
          this.skeleton.clearTrack(1);
          this.borderNode.removeFromParent();
          this.faceNode.active = true;
        }
        /**是否使用 */


        isUse() {
          return this.use;
        }

        setAmount(amount) {
          this.amountNode.getChildByName("label_number").getComponent(Label).string = amount >= 10000 ? amount.formatAmountWithLetter() : amount.formatAmountWithCommas();
        }

        showBg() {
          this.node.getChildByName("bg").active = true;
        }

        hideBg() {
          this.node.getChildByName("bg").active = false;
        }

        getAmountNode() {
          return this.amountNode;
        } // public getParticleNode() {
        //   return this.Particle2DNode;
        // }


        destory() {
          this.node && this.node.isValid && this.node.destroy();
          this.faceAnimationNode.destroy();
          this.borderNode.destroy();
          this.node = null;
          this.iconConfig = null;
          this.skeleton = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bfca73ebfb399abc30b248486b485da47544c9f5.js.map