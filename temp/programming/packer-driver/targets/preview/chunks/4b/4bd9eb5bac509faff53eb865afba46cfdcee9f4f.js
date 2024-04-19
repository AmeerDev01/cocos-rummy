System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, tween, UIOpacity, Vec3, BaseComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, gxfc_Toast;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "976f02l9HpImKuCyFLnQIr3", "gxfc_Toast", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gxfc_Toast", gxfc_Toast = (_dec = ccclass('gxfc_Toast'), _dec2 = property(Node), _dec(_class = (_class2 = class gxfc_Toast extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "content", _descriptor, this);
        }

        start() {}

        showContent(content) {
          this.node.active = true;
          this.content.getComponent(Label).string = content;
          var uiOpacity = this.node.getComponent(UIOpacity);
          this.node.setScale(0.8, 0.8);
          tween(this.node).to(0.4, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: "backOut"
          }).start();
          tween(uiOpacity).to(0.4, {
            opacity: 255
          }).call(() => {}).start();
          this.scheduleOnce(() => this.hidePanel(), 3);
        }

        bindEvent() {//this.node.active = false
        }

        bindUI() {
          this.node.setScale(0.7, 0.7);
          var uiOpacity = this.node.getComponent(UIOpacity);
          uiOpacity.opacity = 0;
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
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
//# sourceMappingURL=4bd9eb5bac509faff53eb865afba46cfdcee9f4f.js.map