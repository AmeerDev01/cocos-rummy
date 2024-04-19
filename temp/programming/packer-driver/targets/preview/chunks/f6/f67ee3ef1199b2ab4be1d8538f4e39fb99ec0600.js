System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, tween, UIOpacity, UITransform, Vec3, phoenix_BaseComponent, AudioManager, SoundList, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, phoenix_RulesPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
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
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
      SoundList = _unresolved_3.SoundList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5df1dxWw5pINLkbYCcU+EEz", "phoenix_RulesPanel", undefined);

      __checkObsolete__(['_decorator', 'color', 'Label', 'Node', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_RulesPanel", phoenix_RulesPanel = (_dec = ccclass('phoenix_RulesPanel'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class phoenix_RulesPanel extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "closeButton", _descriptor, this);

          _initializerDefineProperty(this, "mainPanel", _descriptor2, this);

          _initializerDefineProperty(this, "contentWrap", _descriptor3, this);

          _initializerDefineProperty(this, "indexMark", _descriptor4, this);

          this.showIndex = 0;
        }

        start() {}

        bindEvent() {
          this.closeButton.on(Node.EventType.TOUCH_END, () => {
            this.hidePanel();
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
              if (this.contentWrap.children[0].position.x <= -(this.contentWrap.children.length - 1) * width) {
                return;
              }

              this.contentWrap.children.forEach((child, index) => {
                tween(child).to(0.1, {
                  position: new Vec3(child.position.x - width, child.position.y)
                }).start();
              });
              this.showIndex++;
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).dragAndDropToTurnThePage);
            }

            if (t > 0) {
              //向右滑动
              if (this.contentWrap.children[this.contentWrap.children.length - 1].position.x + 100 >= (this.contentWrap.children.length - 1) * width) {
                return;
              }

              this.contentWrap.children.forEach((child, index) => {
                tween(child).to(0.1, {
                  position: new Vec3(child.position.x + width, child.position.y)
                }).start();
              });
              this.showIndex--;
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).dragAndDropToTurnThePage);
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentWrap", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "indexMark", [_dec5], {
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
//# sourceMappingURL=f67ee3ef1199b2ab4be1d8538f4e39fb99ec0600.js.map