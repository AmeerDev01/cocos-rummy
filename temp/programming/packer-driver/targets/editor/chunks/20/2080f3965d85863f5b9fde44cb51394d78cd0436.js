System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Font, Label, phoenix_BaseComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, phoenix_DynamicNumber;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Font = _cc.Font;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc9c4xrgWpGrqjmpj2VKP/D", "phoenix_DynamicNumber", undefined);

      __checkObsolete__(['_decorator', 'Font', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_DynamicNumber", phoenix_DynamicNumber = (_dec = ccclass('phoenix_DynamicNumber'), _dec2 = property(Font), _dec3 = property(Font), _dec(_class = (_class2 = class phoenix_DynamicNumber extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "font1", _descriptor, this);

          _initializerDefineProperty(this, "font2", _descriptor2, this);

          this.currNumber = 0;
          this.fromNumber = 0;
          this.time = 1000;
          this.cb = void 0;
          this.timer = void 0;
          this.targetNumber = 0;
        }

        start() {
          window.setTimeout(() => {}, 10);
        }

        update(deltaTime) {}

        bindEvent() {}

        onLoad() {
          const slef = this;
          let labelObj = this.getComponent(Label);
          Object.defineProperty(labelObj, "string", {
            get: function () {
              const label = slef.node.getChildByName("number").getComponent(Label); // return self.currNumber

              return label.string;
            },
            set: function (newValue) {
              if (newValue) {
                this.value = newValue; // const label = this.node.getChildByName("number").getComponent(Label)
                // label.string = newValue

                slef.startEffect(+newValue);
              }
            }
          });
        }

        bindUI() {}

        setFont(fontCode, fontSize) {
          const label = this.node.getComponent(Label);
          label.font = this[fontCode];
          label.fontSize = fontSize;
        }

        resetNumber() {
          this.fromNumber = 0;
        }

        setOption(fromNumber, time, cb) {
          this.fromNumber = fromNumber;
          this.time = time;
          this.cb = cb;
        }
        /**数字渐变效果 */


        startEffect(targetNumber) {
          this.targetNumber = targetNumber;
          const label = this.node.getChildByName("number").getComponent(Label); // if (this.timer) {
          // 	// 如果有在进行的动作
          // 	label.string = this.targetNumber.formatAmountWithCommas()
          // 	this.fromNumber = this.targetNumber
          // 	window.clearInterval(this.timer)
          // 	this.timer = 0
          // 	return
          // }
          //每20毫秒要增加的数字

          const unitNum = +((this.targetNumber - this.fromNumber) * 20 / this.time).toFixed(0);

          if (unitNum <= 0) {
            label.string = this.targetNumber.formatAmountWithCommas();
            this.fromNumber = this.targetNumber;
            return;
          }

          let dynamicNum = this.fromNumber;
          !this.timer && (this.timer = window.setInterval(() => {
            dynamicNum += unitNum;

            if (this.targetNumber - dynamicNum < unitNum) {
              label.string = this.targetNumber.formatAmountWithCommas();
              this.currNumber = dynamicNum;
              window.clearInterval(this.timer);
              this.timer = 0;
              this.cb && this.cb();
              this.fromNumber = this.targetNumber;
            } else {
              label.string = dynamicNum.formatAmountWithCommas();
              this.currNumber = dynamicNum;
            }
          }, 20)); // this.schedule(() => {
          // 	label.string = (fromNumber + unitNum) + ''
          // }, 0.02)
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "font1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "font2", [_dec3], {
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
//# sourceMappingURL=2080f3965d85863f5b9fde44cb51394d78cd0436.js.map