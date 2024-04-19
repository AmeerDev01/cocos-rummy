System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, tween, UIOpacity, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, DialogType, GodWealth_DialogWin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2fd2aWHe1PDZ5qZtJyqQa4", "GodWealth_DialogWin", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'UIOpacity', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DialogType", DialogType = /*#__PURE__*/function (DialogType) {
        DialogType["BIG_WIN"] = "bigWin";
        DialogType["JACKPOT"] = "jackpot";
        DialogType["MEGA_WIN"] = "megaWin";
        DialogType["SUPER_WIN"] = "superWin";
        DialogType["SETTLE"] = "settle";
        DialogType["YOUWON"] = "youWon";
        DialogType["FREQUENCY"] = "frequency";
        DialogType["TREASUREBOWL"] = "treasurebowl";
        return DialogType;
      }({}));

      _export("GodWealth_DialogWin", GodWealth_DialogWin = (_dec = ccclass('GodWealth_DialogWin'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class GodWealth_DialogWin extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "insider", _descriptor, this);

          _initializerDefineProperty(this, "bigWin", _descriptor2, this);

          _initializerDefineProperty(this, "jackpot", _descriptor3, this);

          _initializerDefineProperty(this, "megaWin", _descriptor4, this);

          _initializerDefineProperty(this, "superWin", _descriptor5, this);

          _initializerDefineProperty(this, "settle", _descriptor6, this);

          _initializerDefineProperty(this, "SpriteSplash", _descriptor7, this);

          _initializerDefineProperty(this, "youWon", _descriptor8, this);

          _initializerDefineProperty(this, "frequency", _descriptor9, this);

          _initializerDefineProperty(this, "treasurebowl", _descriptor10, this);

          this.timer = void 0;
          this.showNode = void 0;
        }

        start() {}

        bindEvent() {}

        bindUI() {}

        /**
         * 大奖弹窗
         * @param dialogType 展示类型
         * @param amount 展示金额
         * @param keepTime 持续时间（若传0，则不自动关闭）
         * @param cb 回调函数
         */
        showDialog(dialogType, amount, keepTime, cb) {
          this.insider.setScale(new Vec3(0, 0, 0));
          var uiOpacity = this.insider.getComponent(UIOpacity);
          uiOpacity.opacity = 0;
          this.showNode = this[dialogType];
          this.showNode.active = true;
          this.SpriteSplash.active = false;
          this.showNode.getChildByName("score").getComponent(Label).string = amount + ''; //.formatAmountWithCommas()

          tween(this.insider).to(0.5, {
            scale: new Vec3(1, 1, 0)
          }, {
            easing: "backOut"
          }).start();
          tween(uiOpacity).to(0.2, {
            opacity: 255
          }).call(() => {
            this.SpriteSplash.active = true;
          }).start();
          keepTime && (this.timer = window.setTimeout(() => {
            this.hideDialog();
            this.node.destroy();
            cb && cb();
          }, keepTime));
        }

        hideDialog() {
          var uiOpacity = this.insider.getComponent(UIOpacity);
          this.SpriteSplash.active = false;
          tween(this.insider).to(0.3, {
            scale: new Vec3(0, 0, 0)
          }).start();
          tween(uiOpacity).to(0.3, {
            opacity: 0
          }).call(() => {
            this.showNode.active = false;
          }).start();
          this.timer && window.clearTimeout(this.timer);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "insider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bigWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jackpot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "megaWin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "superWin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "settle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "SpriteSplash", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "youWon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "frequency", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "treasurebowl", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6885b2f9f4e0527a1e7480ae49dd0a1c05b80206.js.map