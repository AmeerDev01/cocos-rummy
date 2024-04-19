System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, tween, UIOpacity, Vec3, phoenix_BaseComponent, config, bindClickEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, BoxState, Phoenix_AwardBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../phoenix_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbindClickEvent(extras) {
    _reporterNs.report("bindClickEvent", "../phoenix_utils", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      bindClickEvent = _unresolved_4.bindClickEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8fd92FSzChEOoD4J12HCPVC", "phoenix_AwardBox", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'sp', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BoxState", BoxState = /*#__PURE__*/function (BoxState) {
        BoxState[BoxState["OPEN"] = 0] = "OPEN";
        BoxState[BoxState["CLOSE"] = 1] = "CLOSE";
        BoxState[BoxState["OPRNING"] = 2] = "OPRNING";
        return BoxState;
      }({}));

      _export("Phoenix_AwardBox", Phoenix_AwardBox = (_dec = ccclass('Phoenix_AwardBox'), _dec2 = property(Node), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.SkeletonData), _dec7 = property(sp.SkeletonData), _dec8 = property(sp.SkeletonData), _dec9 = property(sp.SkeletonData), _dec(_class = (_class2 = class Phoenix_AwardBox extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
        constructor(...args) {
          super(...args);

          /**宝箱ID */
          this.boxId = '';

          /**宝箱状态 */
          this.status = BoxState.CLOSE;

          _initializerDefineProperty(this, "subIcon", _descriptor, this);

          _initializerDefineProperty(this, "BxApple", _descriptor2, this);

          _initializerDefineProperty(this, "BxStrawberry", _descriptor3, this);

          _initializerDefineProperty(this, "BxGrape", _descriptor4, this);

          _initializerDefineProperty(this, "BxWatermelon", _descriptor5, this);

          _initializerDefineProperty(this, "BxBanana", _descriptor6, this);

          _initializerDefineProperty(this, "up", _descriptor7, this);

          _initializerDefineProperty(this, "addtimes", _descriptor8, this);
        }

        start() {}

        update(deltaTime) {}

        showScore(amount) {
          const score = this.node.getChildByName("score");
          score.getComponent(Label).string = amount.formatAmountWithCommas() + '';
          const ui = score.getComponent(UIOpacity);
          score.active = true;
          score.setScale(0.7, 0.7);
          ui.opacity = 0;
          tween().target(ui).to(0.2, {
            opacity: 255
          }).start();
          tween().target(score).to(0.2, {
            scale: new Vec3(1, 1)
          }).start();
        }
        /**执行响应的效果 */


        setEffect(effectId, amount, cb) {
          // console.log(this.boxId, '开始效果')
          const skeletonRoot = this.node.getComponent(sp.Skeleton);
          skeletonRoot.animation = 'diankaibaoxiang'; // skeletonRoot.loop = false //这个居然没有作用，MMP

          const awardBoxItem = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).awardBoxItem.find(item => item.id === effectId);
          window.setTimeout(() => {
            // 打开贝壳等一秒钟
            this.subIcon.active = true;
            const skeleton = this.subIcon.getComponent(sp.Skeleton);
            skeleton.skeletonData = this[awardBoxItem.name];
            skeleton.animation = awardBoxItem.animafild;
            window.setTimeout(() => {
              // 展示结果耗时
              this.status = BoxState.OPEN;
              amount && this.showScore(amount);
              cb && cb();
            }, 1500);
          }, 1000);
          window.setTimeout(() => skeletonRoot.destroy(), 1500);
        }
        /**执行响应的效果 */


        setBoxId(boxId) {
          this.boxId = boxId;
          this.node.getChildByName("boxId").getComponent(Label).string = boxId;
        }

        bindEvent() {// this.node.on(Node.EventType.TOUCH_END, () => { })
        }

        bindUI() {
          (_crd && bindClickEvent === void 0 ? (_reportPossibleCrUseOfbindClickEvent({
            error: Error()
          }), bindClickEvent) : bindClickEvent)(this.node);
          this.node.setScale(0.9, 0.9);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "subIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BxApple", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BxStrawberry", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "BxGrape", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "BxWatermelon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "BxBanana", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "up", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "addtimes", [_dec9], {
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
//# sourceMappingURL=8c6d4e90037db8af11d584fde42971a1b84b5b4c.js.map