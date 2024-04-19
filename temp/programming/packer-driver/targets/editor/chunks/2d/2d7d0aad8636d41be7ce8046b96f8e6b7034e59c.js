System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, UITransform, Widget, BaseComponent, iconConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _crd, ccclass, property, Egypt_Icon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOficonConfig(extras) {
    _reporterNs.report("iconConfig", "../config", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      iconConfig = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3833cMcH7RBioXcCFwqk4ma", "Egypt_Icon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'SkelAnimDataHub', 'Skeleton', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Egypt_Icon", Egypt_Icon = (_dec = ccclass('Egypt_Icon'), _dec2 = property(Node), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.SkeletonData), _dec7 = property(sp.SkeletonData), _dec8 = property(sp.SkeletonData), _dec9 = property(sp.SkeletonData), _dec10 = property(sp.SkeletonData), _dec11 = property(sp.SkeletonData), _dec12 = property(sp.SkeletonData), _dec13 = property(sp.SkeletonData), _dec14 = property(sp.SkeletonData), _dec15 = property(sp.SkeletonData), _dec16 = property(sp.SkeletonData), _dec17 = property(sp.SkeletonData), _dec18 = property(sp.SkeletonData), _dec19 = property(sp.SkeletonData), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec(_class = (_class2 = class Egypt_Icon extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "face", _descriptor, this);

          _initializerDefineProperty(this, "iconA", _descriptor2, this);

          _initializerDefineProperty(this, "iconB", _descriptor3, this);

          _initializerDefineProperty(this, "iconC", _descriptor4, this);

          _initializerDefineProperty(this, "iconD", _descriptor5, this);

          _initializerDefineProperty(this, "iconE", _descriptor6, this);

          _initializerDefineProperty(this, "iconF", _descriptor7, this);

          _initializerDefineProperty(this, "iconG", _descriptor8, this);

          _initializerDefineProperty(this, "iconH", _descriptor9, this);

          _initializerDefineProperty(this, "iconI", _descriptor10, this);

          _initializerDefineProperty(this, "iconJ", _descriptor11, this);

          _initializerDefineProperty(this, "scatter", _descriptor12, this);

          _initializerDefineProperty(this, "wild", _descriptor13, this);

          _initializerDefineProperty(this, "bettle", _descriptor14, this);

          _initializerDefineProperty(this, "sunGod", _descriptor15, this);

          _initializerDefineProperty(this, "wild1", _descriptor16, this);

          _initializerDefineProperty(this, "wild2", _descriptor17, this);

          _initializerDefineProperty(this, "wild3", _descriptor18, this);

          _initializerDefineProperty(this, "effectBorder", _descriptor19, this);

          _initializerDefineProperty(this, "effectBorder2", _descriptor20, this);

          _initializerDefineProperty(this, "effectBorder3", _descriptor21, this);

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
          this.iconConfigData = void 0;
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
          this.iconConfigData = this.iconDir.find(item => item.id === iconId);
          this.node.getChildByName("face").active = true;
          this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfigData.name];
          this.face.getComponent(sp.Skeleton).premultipliedAlpha = false;
          this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfigData.animationArr[0];
          this.node.getChildByName("face").getComponent(Widget).left = this.iconConfigData.distance[0];
          this.node.getChildByName("face").getComponent(Widget).top = this.iconConfigData.distance[1];
          this.face.setScale(this.iconConfigData.scale[0], this.iconConfigData.scale[1]);

          if (this.iconConfigData.name === 'scatter') {
            this.node.getChildByName('focusBorder').destroy();
          }

          if (this.iconConfigData.name === 'scatter' || this.iconConfigData.name === 'wild') {} // this.effectBorder.active = true

        }

        hiddenAmounts(amountNum) {
          let amount = this.node.getChildByName('amount');
          amount.getComponent(Label).string = amountNum + '';
        }
        /**启动或停止效果
         * animationIndex设置为0，或不设置的话，就停止效果
         */


        setEffect(animationIndex, borderHeight = 1) {
          // this.face.getComponent(sp.Skeleton).setAnimation(1, this.iconConfig.animationArr[animationIndex], true)
          if (this.iconSize === 'large') return;

          if (animationIndex > this.iconConfigData.animationArr.length - 1) {
            animationIndex = this.iconConfigData.animationArr.length - 1;
          }

          this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfigData.animationArr[animationIndex];
          const iseff = animationIndex === 0 ? false : true;

          if (!iseff) {
            this.effectBorder.active = false;
            this.effectBorder2.active = false;
            this.effectBorder3.active = false;
          } else {
            if (borderHeight === 1) {
              this.effectBorder.active = true;
            } else if (borderHeight === 2) {
              this.effectBorder2.active = true;
            } else if (borderHeight === 3) {
              this.effectBorder3.active = true;
            }
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconA", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconB", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconC", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconD", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconE", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconF", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconG", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iconH", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "iconI", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "iconJ", [_dec12], {
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
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bettle", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "sunGod", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "wild1", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "wild2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "wild3", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "effectBorder", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "effectBorder2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "effectBorder3", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d7d0aad8636d41be7ce8046b96f8e6b7034e59c.js.map