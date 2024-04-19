System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Label, SpriteFrame, Sprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, Crash_RecordItem;

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
      UITransform = _cc.UITransform;
      Label = _cc.Label;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfd3d7oKHNIVo7wpxQTYgo5", "Crash_RecordItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransform', 'Label', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_RecordItem", Crash_RecordItem = (_dec = ccclass('RecordItem'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec(_class = (_class2 = class Crash_RecordItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg1", _descriptor, this);

          _initializerDefineProperty(this, "bg2", _descriptor2, this);

          _initializerDefineProperty(this, "bg3", _descriptor3, this);

          _initializerDefineProperty(this, "bg4", _descriptor4, this);

          _initializerDefineProperty(this, "bg5", _descriptor5, this);
        }

        init(item, style) {
          if (style) {
            this.setStyle(style);
          }

          this.node.getChildByName('record_label').getComponent(Label).string = `x${item.num}`;
          let col = null;

          switch (item.color) {
            case 1:
              col = this.bg1;
              break;

            case 2:
              col = this.bg2;
              break;

            case 3:
              col = this.bg3;
              break;

            case 4:
              col = this.bg4;
              break;

            case 5:
              col = this.bg5;
              break;
          }

          this.node.getChildByName('record_bg').getComponent(Sprite).spriteFrame = col;
        }

        setStyle(style) {
          this.node.getComponent(UITransform).width = style.width;
          this.node.getComponent(UITransform).height = style.height;
          this.node.getChildByName('record_bg').getComponent(UITransform).width = style.width;
          this.node.getChildByName('record_bg').getComponent(UITransform).height = style.height;
          this.node.getChildByName('record_label').getComponent(Label).fontSize = style.fontSize;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bg3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bg4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bg5", [_dec6], {
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
//# sourceMappingURL=52e4e5ecb47e8481fbbb8fb054f68559b972ed8a.js.map