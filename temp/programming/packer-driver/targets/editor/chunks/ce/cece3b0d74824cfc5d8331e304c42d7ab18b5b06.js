System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, sp, find, config, BaseComponent, NumberRoller, getBgProxy, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, dragon_SlotPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function Stateswitch() {
    throw new Error('Function not implemented.');
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberRoller(extras) {
    _reporterNs.report("NumberRoller", "../utils/NumberRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      sp = _cc.sp;
      find = _cc.find;
    }, function (_unresolved_2) {
      config = _unresolved_2.default;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.default;
    }, function (_unresolved_4) {
      NumberRoller = _unresolved_4.NumberRoller;
    }, function (_unresolved_5) {
      getBgProxy = _unresolved_5.getBgProxy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79fbcfcv0hAIZdPIu0vtCkK", "dragon_SlotPanel", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Sprite', 'sp', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dragon_SlotPanel", dragon_SlotPanel = (_dec = ccclass('dragon_SlotPanel'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class dragon_SlotPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "triangletwoButton", _descriptor, this);

          _initializerDefineProperty(this, "boardtwoScrollView", _descriptor2, this);

          _initializerDefineProperty(this, "majorLabel", _descriptor3, this);

          _initializerDefineProperty(this, "miniLabel", _descriptor4, this);

          _initializerDefineProperty(this, "jackTotal", _descriptor5, this);

          _initializerDefineProperty(this, "JackPotContent", _descriptor6, this);

          _initializerDefineProperty(this, "JackPotItem", _descriptor7, this);

          this.majorNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.miniNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.jackTotalNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.dragonBallCollection = [];
        }

        start() {
          const item = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).winning.find(i => i.id === 2);
          this.majorLabel.getComponent(Label).string = item.maxRate.formatAmountWithCommas();
          this.miniLabel.getComponent(Label).string = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).winning[0].maxRate.formatAmountWithCommas();
        }

        bindUI() {
          let left = this._nodes['God_tk_left'].getChildByName('Charge_order').children;

          let center = this._nodes['God_tk_center'].getChildByName('Charge_order').children;

          let right = this._nodes['God_tk_right'].getChildByName('Charge_order').children;

          this.dragonBallCollection = [...left, ...center, ...right]; // console.log(this.dragonBallCollection, '龙设置');
        }

        bindEvent() {
          this.triangletwoButton.on(Node.EventType.TOUCH_END, () => {
            this.boardtwoScrollView.active = !this.boardtwoScrollView.active;
          });
        }

        spitfire(data) {
          let RinghtAnger_dragon = this._nodes['RinghtAnger_dragon'];
          let God_tk_right = this._nodes['God_tk_right'];
          let God_tk_left = this._nodes['God_tk_left'];
          let God_tk_center = this._nodes['God_tk_center'];
          RinghtAnger_dragon.active = true;
          this._nodes['Ringht_dragon'].active = false;
          let spine = RinghtAnger_dragon.getComponent(sp.Skeleton);
          spine.setCompleteListener(entry => {
            // 龙吐火后mini特效出现
            God_tk_right.getChildByName('special').active = true;
            God_tk_left.getChildByName('special').active = true;
            God_tk_center.getChildByName('special').active = true; // 回到默认值

            RinghtAnger_dragon.active = false;
            this._nodes['Ringht_dragon'].active = true;
            window.setTimeout(() => {
              God_tk_right.getChildByName('special').active = false;
              God_tk_left.getChildByName('special').active = false;
              God_tk_center.getChildByName('special').active = false;
            }, 1500);
          });
        }

        bgController(gameType) {
          this._nodes['bg_sg_kuang1'].active = false;
          this.dragonBallStatus(true);
          const God_tk_right = this._nodes['God_tk_right'];
          const God_tk_left = this._nodes['God_tk_left'];
          const God_tk_center = this._nodes['God_tk_center'];

          if (gameType === 0) {
            this.leftDragonSwitching(false);
            this._nodes['bg_sg_kuang'].active = true;
            God_tk_right.getChildByName('special').active = false;
            God_tk_left.getChildByName('special').active = false;
            God_tk_center.getChildByName('special').active = false;
            this.dragonBallCollection.forEach((item, index) => {
              item.active = false;
            });
          } else if (gameType === 1) {
            this._nodes['bg_sg_kuang'].active = true;
          } else if (gameType === 2) {
            this.leftDragonSwitching(true);
            this._nodes['bg_sg_kuang1'].active = true;
            this.dragonBallStatus(true);
          }
        }

        dragonBallStatus(type) {
          // 龙珠状态
          const God_tk_right = this._nodes['God_tk_right'];
          const God_tk_left = this._nodes['God_tk_left'];
          const God_tk_center = this._nodes['God_tk_center'];
          God_tk_left.getChildByName('Charge_order').active = type;
          God_tk_center.getChildByName('Charge_order').active = type;
          God_tk_right.getChildByName('Charge_order').active = type;
        }

        setdragonBallLightsUp(num) {
          let God_tk_right = this._nodes['God_tk_right'];
          let God_tk_left = this._nodes['God_tk_left'];
          let God_tk_center = this._nodes['God_tk_center'];

          if (num >= 15) {
            God_tk_right.getChildByName('special').active = true;
            God_tk_left.getChildByName('special').active = true;
            God_tk_center.getChildByName('special').active = true;
          } else if (num >= 10) {
            God_tk_left.getChildByName('special').active = true;
            God_tk_center.getChildByName('special').active = true;
          } else if (num >= 5) {
            God_tk_left.getChildByName('special').active = true;
          }

          this.dragonBallCollection.forEach((item, index) => {
            if (index <= num - 1) {
              item.active = true;
            } else {
              item.active = false;
            }
          });
        }

        leftDragonSwitching(bl) {
          // 左边龙
          this._nodes['Left_dragon'].active = bl;
          this._nodes['Dragon_Tail'].active = !bl;
          console.log(this._nodes['Dragon_Tail'].active);
        }
        /**排行榜 */


        initJACKPOT(jackPotData) {
          // 排行榜
          this.JackPotContent.destroyAllChildren();
          let sprList = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)().getSpriteFrames();
          jackPotData.forEach(item => {
            let headImgUrl = `head_circle_${item.avatarIndex}`;
            let spr = sprList.find(item => {
              return item.name == headImgUrl;
            });
            let node = instantiate(this.JackPotItem);
            node.getChildByName('One_Right').getComponent(Label).string = item.nickName + '';
            find('One_Left/One_Label', node).getComponent(Label).string = item.winningAmount.formatAmountWithCommas();
            find('One_Left/One_head', node).getComponent(Sprite).spriteFrame = spr;
            node.active = true;
            this.JackPotContent.addChild(node);
          });
        }
        /**mini,major */


        setGod_MAJOR(mini, major) {
          let startNumberMini = parseInt(this.miniLabel.string.replace(/,/g, ""));
          let startNumberMajor = parseInt(this.majorLabel.string.replace(/,/g, ""));
          this.majorNumberRoller.startRolling(startNumberMini, mini, 500, this.miniLabel);
          this.miniNumberRoller.startRolling(startNumberMajor, major, 500, this.majorLabel);
        }
        /**jack_total */


        set_jack_total(num) {
          let startNumberMajor = parseInt(this.jackTotal.string.replace(/,/g, ""));
          this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500, this.jackTotal);
        }

        update(deltaTime) {
          this.majorNumberRoller.update(deltaTime); // 手动触发滚动逻辑

          this.miniNumberRoller.update(deltaTime); // 手动触发滚动逻辑

          this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "triangletwoButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boardtwoScrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "majorLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "miniLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "jackTotal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "JackPotContent", [_dec7, _dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "JackPotItem", [_dec9], {
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
//# sourceMappingURL=cece3b0d74824cfc5d8331e304c42d7ab18b5b06.js.map