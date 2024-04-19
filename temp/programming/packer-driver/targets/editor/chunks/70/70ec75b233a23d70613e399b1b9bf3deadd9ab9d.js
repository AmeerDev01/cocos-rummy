System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, GodWealth_BaseComponent, NumberRoller, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GodWealth_SlotPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGodWealth_BaseComponent(extras) {
    _reporterNs.report("GodWealth_BaseComponent", "./GodWealth_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberRoller(extras) {
    _reporterNs.report("NumberRoller", "../utils/NumberRoller", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GodWealth_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      NumberRoller = _unresolved_3.NumberRoller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3a30fzqMRI8ZxWPWdff/XC", "GodWealth_SlotPanel", undefined);

      __checkObsolete__(['_decorator', 'tween', 'Label', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_SlotPanel", GodWealth_SlotPanel = (_dec = ccclass('GodWealth_SlotPanel'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class GodWealth_SlotPanel extends (_crd && GodWealth_BaseComponent === void 0 ? (_reportPossibleCrUseOfGodWealth_BaseComponent({
        error: Error()
      }), GodWealth_BaseComponent) : GodWealth_BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "majorLabel", _descriptor, this);

          _initializerDefineProperty(this, "miniLabel", _descriptor2, this);

          _initializerDefineProperty(this, "jackTotal", _descriptor3, this);

          _initializerDefineProperty(this, "btn_jackPot", _descriptor4, this);

          this.majorNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.miniNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.jackTotalNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
        }

        start() {}

        bindUI() {}

        bindEvent() {}

        jackIsShow() {}

        set_jack_total(num) {
          let startNumberMajor = parseInt(this.jackTotal.string.replace(/,/g, ""));
          this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500, this.jackTotal);
        }

        setGod_MAJOR(mini, major) {
          let startNumberMini = parseInt(this.miniLabel.string.replace(/,/g, ""));
          let startNumberMajor = parseInt(this.majorLabel.string.replace(/,/g, ""));
          this.majorNumberRoller.startRolling(startNumberMini, mini, 500, this.miniLabel);
          this.miniNumberRoller.startRolling(startNumberMajor, major, 500, this.majorLabel);
        }

        update(deltaTime) {
          this.majorNumberRoller.update(deltaTime); // 手动触发滚动逻辑

          this.miniNumberRoller.update(deltaTime); // 手动触发滚动逻辑

          this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "majorLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "miniLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jackTotal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_jackPot", [_dec5], {
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
//# sourceMappingURL=70ec75b233a23d70613e399b1b9bf3deadd9ab9d.js.map