System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, UITransform, phoenix_BaseComponent, iconConfig, getBgProxy, SubGameType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, phoenix_Icon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOficonConfig(extras) {
    _reporterNs.report("iconConfig", "../phoenix_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../phoenix_utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
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
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      iconConfig = _unresolved_3.default;
    }, function (_unresolved_4) {
      getBgProxy = _unresolved_4.getBgProxy;
    }, function (_unresolved_5) {
      SubGameType = _unresolved_5.SubGameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88b59056nJI46Y0+jjEvTkl", "phoenix_Icon", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'sp', 'UITransform', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_Icon", phoenix_Icon = (_dec = ccclass('phoenix_Icon'), _dec2 = property(Node), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.SkeletonData), _dec7 = property(sp.SkeletonData), _dec8 = property(sp.SkeletonData), _dec9 = property(sp.SkeletonData), _dec10 = property(sp.SkeletonData), _dec11 = property(sp.SkeletonData), _dec12 = property(sp.SkeletonData), _dec13 = property(sp.SkeletonData), _dec14 = property(sp.SkeletonData), _dec15 = property(sp.SkeletonData), _dec16 = property(Node), _dec17 = property(sp.SkeletonData), _dec(_class = (_class2 = class phoenix_Icon extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "face", _descriptor, this);

          _initializerDefineProperty(this, "icon9", _descriptor2, this);

          _initializerDefineProperty(this, "icon10", _descriptor3, this);

          _initializerDefineProperty(this, "iconJ", _descriptor4, this);

          _initializerDefineProperty(this, "iconQ", _descriptor5, this);

          _initializerDefineProperty(this, "iconK", _descriptor6, this);

          _initializerDefineProperty(this, "iconA", _descriptor7, this);

          _initializerDefineProperty(this, "bat", _descriptor8, this);

          _initializerDefineProperty(this, "turtle", _descriptor9, this);

          _initializerDefineProperty(this, "frog", _descriptor10, this);

          _initializerDefineProperty(this, "tigger", _descriptor11, this);

          _initializerDefineProperty(this, "scatter", _descriptor12, this);

          _initializerDefineProperty(this, "wild", _descriptor13, this);

          _initializerDefineProperty(this, "yuanbao", _descriptor14, this);

          _initializerDefineProperty(this, "effectBorder", _descriptor15, this);

          _initializerDefineProperty(this, "phoenixAtlas", _descriptor16, this);

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
          var rootUi = this.root.getComponent(UITransform);
          rootUi.anchorY = 1; // rootUi.anchorX = 0
        }
        /**传入图标的ID */


        setFace(iconId) {
          try {
            this.iconId = iconId;
            this.iconDir = (_crd && iconConfig === void 0 ? (_reportPossibleCrUseOficonConfig({
              error: Error()
            }), iconConfig) : iconConfig).icon;
            this.iconConfig = this.iconDir.find(item => item.id === iconId);

            if (!this[this.iconConfig.name]) {
              console.log(this.iconConfig.name);
            }

            this.face.getComponent(sp.Skeleton).premultipliedAlpha = false;

            if (this.iconConfig.name === 'wild') {
              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getLastGame() !== 0) {
                // 不等于主游戏
                this.face.getComponent(sp.Skeleton).skeletonData = this.phoenixAtlas[(_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getFreeGamePositionId()];
              } else {
                this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfig.name];
              }
            } else {
              this.node.getChildByName("face").active = true;
              this.face.getComponent(sp.Skeleton).skeletonData = this[this.iconConfig.name];
              this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[0];
            } // this.node.getChildByName("face").getComponent(Widget).left = this.iconConfig.distance[0]
            // this.node.getChildByName("face").getComponent(Widget).top = this.iconConfig.distance[1]


            if (this.iconConfig.name === 'scatter') {
              //|| this.iconConfig.name === 'wild'
              this.node.getChildByName('focusBorder').destroy();
            }

            if (this.iconConfig.name === 'scatter' || this.iconConfig.name === 'wild') {
              this.face.setScale(0.85, 0.85);
            }
          } catch (e) {} // this.effectBorder.active = true

        }

        playYuanbao() {
          this.node.getChildByName("face").getComponent(sp.Skeleton).animation = 'animation';
        }

        playFreeGae(active) {
          if (this.iconConfig.name === 'wild' && (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)().getLastGame() !== (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
            error: Error()
          }), SubGameType) : SubGameType).MAIN) {
            var amount = this.node.getChildByName('amount');
            if (!amount.isValid) return;
            amount.setPosition(this.face.position);
            amount.active = active;
          }
        }
        /**启动或停止效果
         * animationIndex设置为0，或不设置的话，就停止效果
         */


        setEffect(animationIndex) {
          if (animationIndex === void 0) {
            animationIndex = 0;
          }

          // this.face.getComponent(sp.Skeleton).setAnimation(1, this.iconConfig.animationArr[animationIndex], true)
          if (this.iconSize === 'large') return;

          if (animationIndex > this.iconConfig.animationArr.length - 1) {
            animationIndex = this.iconConfig.animationArr.length - 1;
          } // 普通连线不展示元宝的动画


          if (this.iconConfig.name !== 'yuanbao') {
            this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[animationIndex];
          }

          var iseff = animationIndex === 0 ? false : true;
          this.effectBorder.active = iseff;
        }

        hiddenAmounts(state, amountNum) {
          var amount = this.node.getChildByName('amount');

          if (state) {
            this.node.getChildByName('focusBorder').active = false;
            this.node.getChildByName('focusBorder2').active = true;
          } else {
            this.node.getChildByName('focusBorder').active = true;
            this.node.getChildByName('focusBorder2').active = false;
          }

          amount.getComponent(Label).string = amountNum + '';
          amount.active = state;
        }

        bindEvent() {}

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "face", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon9", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon10", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconJ", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconQ", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconK", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconA", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bat", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "turtle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "frog", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "tigger", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scatter", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "yuanbao", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "effectBorder", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "phoenixAtlas", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=51d95aa06df890cdbd5a3738b580acb4c9a95013.js.map