System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, instantiate, sp, Sprite, Label, mainViewModel, sourceManageSeletor, PrefabPathDefine, getNodeByNameDeep, config, IconId, GodWealthV2Icon, _crd;

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconId(extras) {
    _reporterNs.report("IconId", "../type", _context.meta, extras);
  }

  _export("GodWealthV2Icon", void 0);

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
      mainViewModel = _unresolved_2.mainViewModel;
      sourceManageSeletor = _unresolved_2.sourceManageSeletor;
    }, function (_unresolved_3) {
      PrefabPathDefine = _unresolved_3.PrefabPathDefine;
    }, function (_unresolved_4) {
      getNodeByNameDeep = _unresolved_4.getNodeByNameDeep;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      IconId = _unresolved_6.IconId;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6ea6oZIFtOOrg5hnItoRY7", "GodWealthV2_Icon", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3', 'instantiate', 'sp', 'Sprite', 'Label']);

      _export("GodWealthV2Icon", GodWealthV2Icon = class GodWealthV2Icon {
        constructor(iconConfig, isPoolObject = true) {
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
          this.Particle2DNode = void 0;
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
          this.borderNode2 = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("focusBorder2", this.node); // this.borderNode2.active = true;

          this.borderNode2.removeFromParent();

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE) {
            this.amountNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("amount", this.node);
            this.amountNode.active = true;
            this.Particle2DNode = this.amountNode.getChildByName("props_Particle");
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
          this.node && this.node.isValid && this.amountNode && (this.amountNode.getChildByName("label_number").getComponent(Label).string = Math.ceil(Math.random() * 100) + '');

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE) {
            this.amountNode.active = true;
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
          const skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.skeletonName).source;
          this.skeleton.skeletonData = skeletonData;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
          this.sprite.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.fileName).source;
        }
        /**播放普通中奖 */


        playWin(parentNode, isBorder = true, loop = true) {
          const offset = new Vec3(this.iconConfig.distance[0], this.iconConfig.distance[1]);

          if (this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).WILD) {
            this.faceAnimationNode.setScale(this.iconConfig.scale[0], this.iconConfig.scale[1]);
          }

          this.faceAnimationNode.active = true;
          parentNode.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));

          if (isBorder) {
            this.borderNode.active = true;
            parentNode.addChild(this.borderNode);
            this.borderNode.setWorldPosition(this.node.worldPosition);
          }

          this.faceNode.active = false;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);

          if (!loop && this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER) {
            // && mainViewModel.rollerPanelViewModel.comp.isAllEnd
            this.faceAnimationNode.getComponent(sp.Skeleton).timeScale = 2.5;
          }
        }
        /**播放宝盒动画 */


        playBaoHeAnimation(parentNode, done) {
          this.callback = done;
          this.faceAnimationNode.active = true;
          this.node.addChild(this.faceAnimationNode);
          this.faceAnimationNode.setWorldPosition(this.node.worldPosition);
          this.faceNode.active = false;
          this.borderNode2.active = true;
          this.borderNode2.setScale(1, 0.95); // if (!this.borderNode2.parent) {

          parentNode.addChild(this.borderNode2);
          this.borderNode2.setWorldPosition(this.node.worldPosition); // }
          // this.borderNode2.active = true;
          // this.node.addChild(this.borderNode2)

          this.amountNode.setSiblingIndex(this.node.children.length);
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], true);
        }

        pauseWin() {
          this.borderNode.active = false;

          if (this.iconConfig.id === 6) {
            this.skeleton.clearTracks();
          } // this.skeleton.clearTracks()


          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
        }
        /**隐藏普通中奖 */


        hideWin() {
          this.faceAnimationNode.active = false;
          this.faceAnimationNode.removeFromParent();
          this.borderNode.active = false;
          this.borderNode.removeFromParent();
          this.faceNode.active = true;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
        }
        /**隐藏宝盒中奖 */


        hideBaoHeWin() {
          this.faceAnimationNode.active = false;
          this.faceAnimationNode.removeFromParent();
          this.borderNode2.active = false;
          this.borderNode2.removeFromParent();
          this.faceNode.active = true;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
        }
        /**是否使用 */


        isUse() {
          return this.use;
        }

        setAmount(amount) {
          const miniNum = (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.miniNum;
          const majorNum = (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.majorNum;

          if (this.node && this.node.isValid) {
            if (amount >= miniNum && amount < majorNum) {
              this.amountNode.getChildByName("label_number").getComponent(Label).string = "MINI";
            } else if (amount >= majorNum) {
              this.amountNode.getChildByName("label_number").getComponent(Label).string = "MAJOR";
            } else if (amount < miniNum) {
              this.amountNode.getChildByName("label_number").getComponent(Label).string = amount >= 10000 ? amount.formatAmountWithLetter() : amount.formatAmountWithCommas();
            }
          }
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

        getParticleNode() {
          return this.Particle2DNode;
        }

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
//# sourceMappingURL=9f5711d7ae1c7595b445adce016690731f8151ce.js.map