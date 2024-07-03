System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, sp, Sprite, SpriteFrame, UITransform, Widget, BaseComponent, iconConfig, getSocketProxy, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, gxfc_Icon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOficonConfig(extras) {
    _reporterNs.report("iconConfig", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../utils", _context.meta, extras);
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
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      iconConfig = _unresolved_3.default;
    }, function (_unresolved_4) {
      getSocketProxy = _unresolved_4.getSocketProxy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7dc3fQJgXFKN4+jQafXGrkT", "gxfc_Icon", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Animation', 'Skeleton', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gxfc_Icon", gxfc_Icon = (_dec = ccclass('gxfc_Icon'), _dec2 = property(Node), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.SkeletonData), _dec7 = property(sp.SkeletonData), _dec8 = property(sp.SkeletonData), _dec9 = property(sp.SkeletonData), _dec10 = property(sp.SkeletonData), _dec11 = property(sp.SkeletonData), _dec12 = property(sp.SkeletonData), _dec13 = property(sp.SkeletonData), _dec14 = property(Node), _dec15 = property({
        type: [SpriteFrame],
        displayName: 'BG'
      }), _dec(_class = (_class2 = class gxfc_Icon extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "face", _descriptor, this);

          _initializerDefineProperty(this, "tongqian", _descriptor2, this);

          _initializerDefineProperty(this, "bianpao", _descriptor3, this);

          _initializerDefineProperty(this, "yupei", _descriptor4, this);

          _initializerDefineProperty(this, "gu", _descriptor5, this);

          _initializerDefineProperty(this, "girl", _descriptor6, this);

          _initializerDefineProperty(this, "boy", _descriptor7, this);

          _initializerDefineProperty(this, "baihuzi", _descriptor8, this);

          _initializerDefineProperty(this, "heihuzi", _descriptor9, this);

          _initializerDefineProperty(this, "wild1", _descriptor10, this);

          _initializerDefineProperty(this, "wild2", _descriptor11, this);

          _initializerDefineProperty(this, "scatter", _descriptor12, this);

          _initializerDefineProperty(this, "effectBorder", _descriptor13, this);

          _initializerDefineProperty(this, "bg_1", _descriptor14, this);

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
          this.face.setScale(this.iconConfig.scale[0], this.iconConfig.scale[1]);

          if (this.iconConfig.name === 'scatter') {
            //|| this.iconConfig.name === 'wild'
            this.node.getChildByName('focusBorder').destroy();
          }

          var gameType = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType();
          this.setBg(gameType === 1 ? 3 : 1);
        }
        /**设置背景图片 */


        setBg(bgNameIndex) {
          this.node.getChildByName('bg').getComponent(Sprite).spriteFrame = this.bg_1[bgNameIndex !== 3 ? 0 : 1];
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
          }

          this.node.getChildByName("face").getComponent(sp.Skeleton).animation = this.iconConfig.animationArr[animationIndex];
          var iseff = animationIndex === 0 ? false : true;
          this.effectBorder.active = iseff;
        }

        layout2setEffect(aniKEY, isLoop) {
          if (isLoop === void 0) {
            isLoop = true;
          }

          var animationNameArr = ['animation', 'animation3', 'animation4', 'dynamic', 'static'];
          var Animation = this.node.getChildByName("face").getComponent(sp.Skeleton);
          Animation.clearTracks();
          Animation.setAnimation(0, animationNameArr[aniKEY], isLoop);
        }

        monitorAnimations(onEndCall) {
          var Ani = this.node.getChildByName("face").getComponent(sp.Skeleton); // 监听动画播放完成事件

          Ani.setCompleteListener(entry => {
            onEndCall(entry);
          });
        }

        onAnimationEnd() {
          console.log(""); // 在这里可以执行你需要的逻辑
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tongqian", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bianpao", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "yupei", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "girl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boy", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "baihuzi", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "heihuzi", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "wild1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "wild2", [_dec12], {
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
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "effectBorder", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bg_1", [_dec15], {
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
//# sourceMappingURL=5092cf9894ce5876efa4a144e506a2ca94a71471.js.map