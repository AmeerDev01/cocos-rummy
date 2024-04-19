System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, tween, UIOpacity, phoenix_BaseComponent, NumberRoller, getSocketProxy, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, phoenix_SlotPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberRoller(extras) {
    _reporterNs.report("NumberRoller", "../utils/NumberRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../phoenix_utils", _context.meta, extras);
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
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      NumberRoller = _unresolved_3.NumberRoller;
    }, function (_unresolved_4) {
      getSocketProxy = _unresolved_4.getSocketProxy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dde67UwFaVLS7QMlAWsSYW2", "phoenix_SlotPanel", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_SlotPanel", phoenix_SlotPanel = (_dec = ccclass('phoenix_SlotPanel'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class phoenix_SlotPanel extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
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

        start() {// this.btn_jackPot.on(Node.EventType.TOUCH_END, this.jackIsShow, this)
        }

        bindUI() {
          // this.isBgShow(getSocketProxy().getTransferGameInfo().gameType(0) == 0)
          this.showSlot((_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType(0) == 0, false, null);
        }

        bindEvent() {}

        jackIsShow() {}

        isBgShow(state) {// this._nodes['spr_phoenix_sgBg'].active = state
          // this._nodes['spr_smallGame_multipleBg'].active = !state
        }

        lostHidden(state) {// this._nodes['slotListPanel'].active = state
        }

        setLost(total) {
          let node = this.node.getChildByName('spr_smallGame_multipleBg').getChildByName('Label_smallGame_multiple').getComponent(Label);
          total > 0 ? node.string = 'X' + total : node.string = '';
        }
        /**
         * 隐藏插槽
         * @param isSlow 是否缓动
         * @param done 完成函数
         */


        hideSlot(isMain, isSlow, done) {
          const slotListPanelNode = this.node.getChildByName("slotListPanel");
          const upBgNode = this.node.getChildByName("spr_phoenix_upBg");
          const slotBgNode = this.getSlotBgNode(isMain);
          this.node.getChildByName("spr_smallGame_multipleBg").active = false;

          if (isSlow) {
            tween(slotBgNode.getComponent(UIOpacity)).to(0.3, {
              opacity: 0
            }).start();
            tween(slotListPanelNode.getComponent(UIOpacity)).to(0.3, {
              opacity: 0
            }).start();
            tween(upBgNode.getComponent(UIOpacity)).to(0.3, {
              opacity: 0
            }).call(() => {
              if (!this.node.isValid) return;
              done && done();
              slotBgNode.active = false;
              slotListPanelNode.active = false;
              upBgNode.active = false;
            }).start();
          } else {
            slotBgNode.active = false;
            slotListPanelNode.active = false;
            upBgNode.active = false;
            done && done();
          }
        }
        /**
         * 显示插槽
         * @param isMain 
         * @param isSlow 
         * @param done 
         */


        showSlot(isMain, isSlow, done) {
          const slotBgNode = this.getSlotBgNode(isMain);
          slotBgNode.active = true;
          slotBgNode.getComponent(UIOpacity).opacity = 255;
          const slotListPanelNode = this.node.getChildByName("slotListPanel");
          const upBgNode = this.node.getChildByName("spr_phoenix_upBg");
          slotListPanelNode.active = true;
          upBgNode.active = true;
          slotListPanelNode.getComponent(UIOpacity).opacity = 255;
          upBgNode.getComponent(UIOpacity).opacity = 255; // 倍数气泡

          this._nodes['spr_smallGame_multipleBg'].active = !isMain;
          done && done();
        }

        getSlotBgNode(isMain) {
          // 获得背景的同时，把另外一个背景隐藏了
          this.node.getChildByName(!isMain ? 'spr_phoenix_bg' : 'spr_phoenix_sgBg').active = false;
          return this.node.getChildByName(isMain ? 'spr_phoenix_bg' : 'spr_phoenix_sgBg');
        }

        set_jack_total(num) {// let startNumberMajor = parseInt(this.jackTotal.string.replace(/,/g, ""));
          // this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500, this.jackTotal)
        }

        setGod_MAJOR(mini, major) {// let startNumberMini = parseInt(this.miniLabel.string.replace(/,/g, ""));
          // let startNumberMajor = parseInt(this.majorLabel.string.replace(/,/g, ""));
          // this.majorNumberRoller.startRolling(startNumberMini, mini, 500, this.miniLabel)
          // this.miniNumberRoller.startRolling(startNumberMajor, major, 500, this.majorLabel);
        }

        update(deltaTime) {// this.majorNumberRoller.update(deltaTime); // 手动触发滚动逻辑
          // this.miniNumberRoller.update(deltaTime); // 手动触发滚动逻辑
          // this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
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
//# sourceMappingURL=efe560d2ae21c9d90477a954ba423321f7d508dd.js.map