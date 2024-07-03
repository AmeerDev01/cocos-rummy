System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, instantiate, sp, Sprite, Label, sourceManageSeletor, PrefabPathDefine, getNodeByNameDeep, IconId, config, EgyptV2Icon, _crd;

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

  _export("EgyptV2Icon", void 0);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd5fdUOySFB7KnpeZb3BJix", "EgyptV2_Icon", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3', 'instantiate', 'sp', 'Sprite', 'Label', 'Mask', 'Graphics']);

      _export("EgyptV2Icon", EgyptV2Icon = class EgyptV2Icon {
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
          this.amount = 0;
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

          if (this.isBeetleIcon() || this.isSunGod()) {
            this.amountNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("amount", this.node);
            this.amountNode.active = true;
            this.amountNode.getComponent(Label).string = this.isBeetleIcon() ? "0" : "";
            this.listenerSkeletonEvent();
            this.amount = 0;
          }

          this.buildIcon();
        }

        isBeetleIcon() {
          return this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE;
        }

        isSunGod() {
          return this.iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SUN_GOD;
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

            if (this.amountNode) {
              this.amount = 0;
              this.amountNode.getComponent(Label).string = this.isBeetleIcon() ? '0' : '';
            }

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
            this.borderNode.setWorldPosition(this.node.worldPosition);
          }
        }

        getPosition() {
          return this.node.getPosition();
        }

        buildIcon() {
          this.faceAnimationNode.active = false;
          this.faceAnimationNode.removeFromParent();
          var skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.iconConfig.skeletonName).source;
          this.skeleton.skeletonData = skeletonData;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
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

          if (!this.faceAnimationNode.active) {
            this.faceAnimationNode.active = true; // console.log("playWin ", this.iconConfig.id, " parent " + this.faceAnimationNode.parent);

            if (!this.faceAnimationNode.parent) {
              parentNode.addChild(this.faceAnimationNode);
              this.faceAnimationNode.setWorldPosition(this.node.worldPosition.clone().add(offset));
            }
          }

          if (isBorder && !this.borderNode.active) {
            this.borderNode.active = true;

            if (!this.borderNode.parent) {
              parentNode.addChild(this.borderNode);
              this.borderNode.setWorldPosition(this.node.worldPosition);
            }
          }

          this.faceNode.active = false;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[1], loop);
        }
        /**播放甲壳虫动画 */


        playBeetleAnimation(done) {
          // if (!this.isBeetleIcon()) {
          //   done && done();
          //   return;
          // }
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
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
        }

        pauseWin() {
          this.borderNode.active = false;
          this.skeleton.setAnimation(0, this.iconConfig.animationArr[0], false);
        }
        /**是否使用 */


        isUse() {
          return this.use;
        }

        setAmount(amount) {
          this.amount = amount;

          if (amount > 0) {
            this.amountNode.active = true;
          }

          var amountStr = amount >= 10000 ? amount.formatAmountWithLetter() : amount.formatAmountWithCommas();
          this.amountNode.getComponent(Label).string = amountStr;
        }

        showBg() {
          this.node.getChildByName("bg").active = true;
        }

        hideBg() {
          this.node.getChildByName("bg").active = false;
        }

        showAmount() {
          this.isBeetleIcon() && (this.amountNode.active = false);
        }

        hideAmount() {
          this.amountNode.active = false;
          this.amount = 0;
        }

        getAmountNode() {
          return this.amountNode;
        }

        getAmount() {
          return this.amount;
        }

        destory() {
          this.node.isValid && this.node.destroy();
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
//# sourceMappingURL=6bacd2e83b00eedd18c7ff93d32a84fde38c48ab.js.map