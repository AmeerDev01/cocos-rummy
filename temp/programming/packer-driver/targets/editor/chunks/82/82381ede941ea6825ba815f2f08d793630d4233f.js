System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Label, sp, Sprite, SpriteFrame, UITransform, Widget, GodWealth_BaseComponent, iconConfig, getBgProxy, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, GodWealth_Icon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGodWealth_BaseComponent(extras) {
    _reporterNs.report("GodWealth_BaseComponent", "./GodWealth_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOficonConfig(extras) {
    _reporterNs.report("iconConfig", "../GodWealth_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../GodWealth_utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      GodWealth_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      iconConfig = _unresolved_3.default;
    }, function (_unresolved_4) {
      getBgProxy = _unresolved_4.getBgProxy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d7d64e8PxNx4B3NTte0gL+", "GodWealth_Icon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Label', 'Skeleton', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_Icon", GodWealth_Icon = (_dec = ccclass('GodWealth_Icon'), _dec2 = property(Node), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.SkeletonData), _dec7 = property(sp.SkeletonData), _dec8 = property(sp.SkeletonData), _dec9 = property(sp.SkeletonData), _dec10 = property(sp.SkeletonData), _dec11 = property(sp.SkeletonData), _dec12 = property(sp.SkeletonData), _dec13 = property(sp.SkeletonData), _dec14 = property(sp.SkeletonData), _dec15 = property(Node), _dec16 = property({
        type: [SpriteFrame],
        displayName: 'amount_BG'
      }), _dec(_class = (_class2 = class GodWealth_Icon extends (_crd && GodWealth_BaseComponent === void 0 ? (_reportPossibleCrUseOfGodWealth_BaseComponent({
        error: Error()
      }), GodWealth_BaseComponent) : GodWealth_BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "face", _descriptor, this);

          _initializerDefineProperty(this, "icon10", _descriptor2, this);

          _initializerDefineProperty(this, "iconJ", _descriptor3, this);

          _initializerDefineProperty(this, "iconQ", _descriptor4, this);

          _initializerDefineProperty(this, "iconK", _descriptor5, this);

          _initializerDefineProperty(this, "iconA", _descriptor6, this);

          _initializerDefineProperty(this, "tongqian", _descriptor7, this);

          _initializerDefineProperty(this, "yuanbao", _descriptor8, this);

          _initializerDefineProperty(this, "yaoqianshu", _descriptor9, this);

          _initializerDefineProperty(this, "baicai", _descriptor10, this);

          _initializerDefineProperty(this, "wild", _descriptor11, this);

          _initializerDefineProperty(this, "scatter", _descriptor12, this);

          _initializerDefineProperty(this, "baohe", _descriptor13, this);

          _initializerDefineProperty(this, "effectBorder", _descriptor14, this);

          _initializerDefineProperty(this, "amount_BG", _descriptor15, this);

          // private iconDir = {
          // 	icon_1: this.apple,
          // 	icon_2: this.banana,
          // 	icon_3: this.strawberry,
          // 	icon_4: this.watermelon,
          // 	icon_5: this.grape,
          // 	icon_6: this.bell,
          // 	icon_7: this.wild,
          // 	icon_8: this.icon777,
          // 	icon_9: this.bar1,
          // 	icon_10: this.bar2,
          // 	icon_11: this.bar3
          // }
          this.iconId = 0;
          this.iconDir = void 0;
          this.iconSize = 'normal';
          this.iconConfig = void 0;
        }

        bindUI() {
          const rootUi = this.root.getComponent(UITransform);
          rootUi.anchorY = 1; // rootUi.anchorX = 0
        }
        /**传入图标的ID */


        setFace(iconId) {
          this.iconId = iconId;
          this.iconDir = (_crd && iconConfig === void 0 ? (_reportPossibleCrUseOficonConfig({
            error: Error()
          }), iconConfig) : iconConfig).icon;
          this.iconConfig = this.iconDir.find(item => item.id === iconId);
          this.node.getChildByName("face").active = true;
          this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfig.name];
          this.face.getComponent(sp.Skeleton).premultipliedAlpha = false;
          this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[0];
          this.node.getChildByName("face").getComponent(Widget).left = this.iconConfig.distance[0];
          this.node.getChildByName("face").getComponent(Widget).top = this.iconConfig.distance[1];

          if (this.iconConfig.name === 'scatter') {
            this.node.getChildByName('focusBorder').destroy();
          }

          if (this.iconConfig.name === 'scatter' || this.iconConfig.name === 'wild') {
            this.face.setScale(0.85, 0.85);
          } // this.effectBorder.active = true

        }
        /**启动或停止效果
         * animationIndex设置为0，或不设置的话，就停止效果
         */


        setEffect(animationIndex = 0) {
          // this.face.getComponent(sp.Skeleton).setAnimation(1, this.iconConfig.animationArr[animationIndex], true)
          if (this.iconSize === 'large') return;

          if (animationIndex > this.iconConfig.animationArr.length - 1) {
            animationIndex = this.iconConfig.animationArr.length - 1;
          }

          this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[animationIndex];
          const iseff = animationIndex === 0 ? false : true;
          this.effectBorder.active = iseff;
        }

        hiddenAmounts(amountNum) {
          this.setNumBG(amountNum);
        }
        /**
         设置宝箱数字图片
        */


        setNumBG(amountNum) {
          //
          let {
            mini,
            major
          } = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)().getWinningMultiplier();
          let amountBg = this.node.getChildByName('amount').getChildByName('bg');
          let str = this.node.getChildByName('amount').getChildByName('label').getComponent(Label);

          if (amountNum < mini) {
            amountBg.getComponent(Sprite).spriteFrame = this.amount_BG[0];
            str.string = amountNum;
          } else if (amountNum > mini && amountNum < major) {
            amountBg.getComponent(Sprite).spriteFrame = this.amount_BG[1];
            str.string = 'MINI';
          } else if (amountNum > major) {
            amountBg.getComponent(Sprite).spriteFrame = this.amount_BG[2];
            str.string = 'MAJOR';
          }
        }

        bindEvent() {}

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "face", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon10", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconJ", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconQ", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconK", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconA", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tongqian", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "yuanbao", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "yaoqianshu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "baicai", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scatter", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "baohe", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "effectBorder", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "amount_BG", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82381ede941ea6825ba815f2f08d793630d4233f.js.map