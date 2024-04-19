System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, tween, UIOpacity, UITransform, Vec3, color, Label, GodWealth_BaseComponent, AudioManager, SoundList, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, dragon_RulesPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGodWealth_BaseComponent(extras) {
    _reporterNs.report("GodWealth_BaseComponent", "./GodWealth_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      color = _cc.color;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GodWealth_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
      SoundList = _unresolved_3.SoundList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8fc1dLtVf9MqbS+cvjRdER6", "GodWealth_RulesPanel", undefined);

      __checkObsolete__(['_decorator', 'Node', 'tween', 'UIOpacity', 'UITransform', 'Vec3', 'color', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dragon_RulesPanel", dragon_RulesPanel = (_dec = ccclass('dragon_RulesPanel'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = class dragon_RulesPanel extends (_crd && GodWealth_BaseComponent === void 0 ? (_reportPossibleCrUseOfGodWealth_BaseComponent({
        error: Error()
      }), GodWealth_BaseComponent) : GodWealth_BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "closeButton", _descriptor, this);

          //Game gratis按钮
          _initializerDefineProperty(this, "gratisButton", _descriptor2, this);

          // Mangkuk_harta_karun按钮
          _initializerDefineProperty(this, "karunButton", _descriptor3, this);

          // Mangkuk_harta_karun文字
          _initializerDefineProperty(this, "karunLabel", _descriptor4, this);

          // Aturan_dasar按钮
          _initializerDefineProperty(this, "dasarButton", _descriptor5, this);

          _initializerDefineProperty(this, "mainPanel", _descriptor6, this);

          _initializerDefineProperty(this, "contentWrap", _descriptor7, this);

          _initializerDefineProperty(this, "indexMark", _descriptor8, this);

          // Game gratis文本框
          _initializerDefineProperty(this, "gratisLabel", _descriptor9, this);

          // Aturan_dasar文本框
          _initializerDefineProperty(this, "dasarLabel", _descriptor10, this);

          // Game gratis面板
          _initializerDefineProperty(this, "gratisPanel", _descriptor11, this);

          // Aturan_dasar面板
          _initializerDefineProperty(this, "dasarPanel", _descriptor12, this);

          // Mangkuk_harta_karun面板
          _initializerDefineProperty(this, "karunPanel", _descriptor13, this);

          this.showIndex = 0;
        }

        start() {}

        bindEvent() {
          this.closeButton.on(Node.EventType.TOUCH_END, () => {
            this.hidePanel();
          }); // 点击Game gratis按钮

          this.gratisButton.on(Node.EventType.TOUCH_END, () => {
            // 显示Game gratis页面
            this.gratisPanel.active = true; //  隐藏Aturan_dasar页面

            this.dasarPanel.active = false; // 隐藏Mangkuk_harta_karun页面

            this.karunPanel.active = false;
          }); // 点击Mangkuk_harta_karun按钮

          this.karunButton.on(Node.EventType.TOUCH_END, () => {
            // 隐藏显示页面
            this.karunPanel.active = true;
            this.gratisPanel.active = false;
            this.dasarPanel.active = false;
          }); // 点击Aturan_dasar按钮

          this.dasarButton.on(Node.EventType.TOUCH_END, () => {
            // 隐藏显示页面
            this.dasarPanel.active = true;
            this.karunPanel.active = false;
            this.gratisPanel.active = false;
          }); // 点击 Aturan_dasar文字改变颜色

          this.dasarLabel.on(Node.EventType.TOUCH_END, () => {
            this.dasarLabel.getComponent(Label).color = color().fromHEX('#942600'); // Aturan_dasar未选中状态

            this.gratisLabel.getComponent(Label).color = color().fromHEX('#F8C55C'); //Mangkuk_harta_karun未选中状态

            this.karunLabel.getComponent(Label).color = color().fromHEX('#F8C55C');
          }); // 点击 Game gratis文字改变颜色

          this.gratisLabel.on(Node.EventType.TOUCH_END, () => {
            this.gratisLabel.getComponent(Label).color = color().fromHEX('#942600'); // Aturan_dasar未选中状态

            this.dasarLabel.getComponent(Label).color = color().fromHEX('#F8C55C'); //Mangkuk_harta_karun未选中状态

            this.karunLabel.getComponent(Label).color = color().fromHEX('#F8C55C');
          }); // 点击Mangkuk_harta_karun文字改变颜色

          this.karunLabel.on(Node.EventType.TOUCH_END, () => {
            this.karunLabel.getComponent(Label).color = color().fromHEX('#942600'); // Aturan_dasar未选中状态

            this.dasarLabel.getComponent(Label).color = color().fromHEX('#F8C55C'); //Mangkuk_harta_karun未选中状态

            this.gratisLabel.getComponent(Label).color = color().fromHEX('#F8C55C');
          });
          var con_x = 0;
          this.showIndexMark();
          var width = this.contentWrap.getComponent(UITransform).width;
          this.contentWrap.on(Node.EventType.TOUCH_START, e => {
            con_x = e.getLocation().x;
          });
          this.contentWrap.on(Node.EventType.TOUCH_MOVE, () => {});
          this.contentWrap.on(Node.EventType.TOUCH_END, e => {
            var t = e.getLocation().x - con_x;

            if (t < 0) {
              //向左滑动
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).dragAndDropToTurnThePage);

              if (this.contentWrap.children[0].position.x <= -(this.contentWrap.children.length - 1) * width) {
                return;
              }

              this.contentWrap.children.forEach((child, index) => {
                tween(child).to(0.1, {
                  position: new Vec3(child.position.x - width, child.position.y)
                }).start();
              });
              this.showIndex++;
            }

            if (t > 0) {
              //向右滑动
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).dragAndDropToTurnThePage);

              if (this.contentWrap.children[this.contentWrap.children.length - 1].position.x + 100 >= (this.contentWrap.children.length - 1) * width) {
                return;
              }

              this.contentWrap.children.forEach((child, index) => {
                tween(child).to(0.1, {
                  position: new Vec3(child.position.x + width, child.position.y)
                }).start();
              });
              this.showIndex--;
            }

            this.showIndexMark();
          });
        }

        showIndexMark() {
          this.indexMark.children.forEach((item, i) => {
            if (this.showIndex !== i) {
              item.children[0].active = false;
            } else {
              item.children[0].active = true;
            }
          });
        }

        bindUI() {
          var uiOpacity = this.node.getComponent(UIOpacity);
          uiOpacity.opacity = 0;
          this.mainPanel.setScale(0.8, 0.8);
          tween(this.mainPanel).to(0.4, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: "backOut"
          }).start();
          tween(uiOpacity).to(0.4, {
            opacity: 255
          }).call(() => {}).start();
        }

        hidePanel() {
          var uiOpacity = this.node.getComponent(UIOpacity);
          tween(this.node).to(0.2, {
            scale: new Vec3(0, 0, 0)
          }).start();
          tween(uiOpacity).to(0.2, {
            opacity: 0
          }).call(() => {
            this.node.destroy();
          }).start();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gratisButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "karunButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "karunLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dasarButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mainPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contentWrap", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "indexMark", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gratisLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "dasarLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gratisPanel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "dasarPanel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "karunPanel", [_dec14], {
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
//# sourceMappingURL=d03bf45e3ce586bce6c9b262d4abb2e6dd3fa3b9.js.map