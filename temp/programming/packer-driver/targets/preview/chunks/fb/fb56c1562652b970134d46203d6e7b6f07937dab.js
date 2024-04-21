System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Button, Animation, Label, Layers, Node, Prefab, sp, Sprite, SpriteFrame, UIOpacity, Vec3, phoenix_BaseComponent, global, NumberRoller, AudioManager, SoundList, BuyType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _crd, ccclass, property, phoenix_SlotBg;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLaunchType(extras) {
    _reporterNs.report("AutoLaunchType", "../Repositories/BgRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberRoller(extras) {
    _reporterNs.report("NumberRoller", "../utils/NumberRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyType(extras) {
    _reporterNs.report("BuyType", "../../../../hall/components/Hall_ShopPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Button = _cc.Button;
      Animation = _cc.Animation;
      Label = _cc.Label;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      NumberRoller = _unresolved_4.NumberRoller;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
      SoundList = _unresolved_5.SoundList;
    }, function (_unresolved_6) {
      BuyType = _unresolved_6.BuyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86307kLv0xCLrdJqudy+1Qo", "phoenix_SlotBg", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Button', 'find', 'Animation', 'Label', 'Layers', 'Node', 'Prefab', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_SlotBg", phoenix_SlotBg = (_dec = ccclass('phoenix_SlotBg'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Prefab), _dec24 = property(sp.SkeletonData), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec(_class = (_class2 = class phoenix_SlotBg extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
        constructor() {
          super(...arguments);

          //返回首页
          _initializerDefineProperty(this, "homeButton", _descriptor, this);

          //充值按钮
          _initializerDefineProperty(this, "topButton", _descriptor2, this);

          //商城
          _initializerDefineProperty(this, "beliButton", _descriptor3, this);

          //礼包
          _initializerDefineProperty(this, "speclalButton", _descriptor4, this);

          //设置
          _initializerDefineProperty(this, "settingButton", _descriptor5, this);

          _initializerDefineProperty(this, "startButton", _descriptor6, this);

          _initializerDefineProperty(this, "baseBet", _descriptor7, this);

          _initializerDefineProperty(this, "betAmount", _descriptor8, this);

          _initializerDefineProperty(this, "spr_nomoney", _descriptor9, this);

          _initializerDefineProperty(this, "lineCount", _descriptor10, this);

          _initializerDefineProperty(this, "score", _descriptor11, this);

          _initializerDefineProperty(this, "addShift", _descriptor12, this);

          _initializerDefineProperty(this, "subtractShift", _descriptor13, this);

          _initializerDefineProperty(this, "autoLaunch", _descriptor14, this);

          _initializerDefineProperty(this, "ruleButton", _descriptor15, this);

          _initializerDefineProperty(this, "bg_1", _descriptor16, this);

          _initializerDefineProperty(this, "bg_2", _descriptor17, this);

          _initializerDefineProperty(this, "gameArea", _descriptor18, this);

          _initializerDefineProperty(this, "addBet", _descriptor19, this);

          _initializerDefineProperty(this, "subtractBet", _descriptor20, this);

          _initializerDefineProperty(this, "maxBet", _descriptor21, this);

          _initializerDefineProperty(this, "toast", _descriptor22, this);

          _initializerDefineProperty(this, "flyingCrane", _descriptor23, this);

          _initializerDefineProperty(this, "JackPotContent", _descriptor24, this);

          _initializerDefineProperty(this, "JackPotItem", _descriptor25, this);

          _initializerDefineProperty(this, "propsToggleFast", _descriptor26, this);

          this.GoldNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.timeAccumulator = 0;
          this.autoLaunchState = false;
          this.lastScore = 0;
        }

        start() {
          setTimeout(() => {
            this._nodes['Up_Feature'].setSiblingIndex(9999);
          }, 100);
        }

        bindUI() {
          // this.autoLaunch.children.forEach(child => {
          // 	child.on(Node.EventType.TOUCH_START, ({ target }) => {
          // 		(target as Node).getComponent(UIOpacity).opacity = 0
          // 	})
          // 	child.on(Node.EventType.TOUCH_END, ({ target }) => {
          // 		tween(target.getComponent(UIOpacity)).to(0.2, { opacity: 255 }).start();
          // 	})
          // })
          var flyCrane = this.startFlyingCrane();
          flyCrane.setScale(new Vec3(-1, 1, 1));
          this.scheduleOnce(() => {
            this.startFlyingCrane();
          }, 3); // // 点击首页按钮
          // this.homeButton.on(Node.EventType.TOUCH_END, () => {
          //     AudioManager.getInstance().playSound(SoundList.buttonClick);
          //     AudioManager.getInstance().closeMusic(()=>{
          //         global.closeSubGame()
          //     });
          // })
          // 点击充值按钮

          this.topButton.on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          }); // 点击商城按钮

          this.beliButton.on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          }); // 点击礼包按钮

          this.speclalButton.on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop((_crd && BuyType === void 0 ? (_reportPossibleCrUseOfBuyType({
              error: Error()
            }), BuyType) : BuyType).TAS);
          }); // 点击设置按钮

          this.settingButton.on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2);
          });
          var audio = this.node.addComponent(AudioSource);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().setAudioSource(audio);
        }

        bindEvent() {// bindClickEvent(this.startButton, () => { })
        }
        /**更新下注金额 */


        updateBetAmount(baseBetAmount, lineCount) {
          var betAmount = baseBetAmount * lineCount;
          var numberStr = betAmount.formatAmountWithCommas();
          this.lineCount.getComponent(Label).string = lineCount + " \xD7 " + baseBetAmount;
          this.betAmount.getComponent(Label).string = betAmount + ''; //numberStr
        }

        Balance_tips(bl) {
          this.spr_nomoney.active = bl;
        }

        /**更新积分 */
        updateScore(score) {
          if (score == 0) {
            this._nodes['goodluck'].active = true;
            this._nodes['bottom_score'].active = false;
          } else {
            this._nodes['goodluck'].active = false;
            this._nodes['bottom_score'].active = true;
            this.score.getComponent(Label).string = score + "";
          }

          var isChange = this.lastScore !== score;
          this.lastScore = score;
          return isChange;
        }

        setBtnLabel(str) {
          //this.setBtnState(false,1)
          this._nodes['START'].getComponent(Label).string = str + "";
        }

        setBtnState(state, type, num) {
          if (type === void 0) {
            type = 0;
          }

          // if(type==0){ // 主游戏按钮
          //     this._nodes['STARTBG'].active=state
          //     this._nodes['scrollingThePicture'].active=!state
          //     this._nodes['START'].active=false
          // }else { // 小游戏按钮
          //     this._nodes['STARTBG'].active=false
          //     this._nodes['scrollingThePicture'].active=false
          //     this._nodes['START'].active=true
          // }
          if (type == 0) {
            // 主游戏按钮
            this._nodes['STARTBG'].active = state;
            this._nodes['scrollingThePicture'].active = !state;
            this._nodes['START'].active = false;
            this._nodes['AUTO'].active = false;
          } else if (type == 1) {
            // 小游戏按钮
            this._nodes['STARTBG'].active = false;
            this._nodes['scrollingThePicture'].active = false;
            this._nodes['START'].active = true;
            this._nodes['AUTO'].active = false;
          } else {
            // 自动按钮
            this._nodes['scrollingThePicture'].active = false;
            this._nodes['START'].active = false;
            this._nodes['STARTBG'].active = false;
            this._nodes['AUTO'].active = true;
            this._nodes['AUTO'].getComponent(Label).string = num;
          }
        }
        /**设置背景图片 */


        setBg(bgName) {
          if (!this.node.isValid) return;
          console.log(bgName);
          this.node.getComponent(Sprite).spriteFrame = this[bgName];
        } // 更新金币数量


        setGold(str) {
          // 漂浮效果
          var label = this._nodes['Moeny_Bg'].getChildByName('number').getComponent(Label);

          var startNumberMini = parseInt(label.string.replace(/,/g, ""));

          if (startNumberMini - Number(str) == 0) {
            return false;
          } else {
            this._nodes['number2'].active = true;
            var labelStr = '';

            if (startNumberMini - Number(str) < 0) {
              labelStr = '+' + Math.abs(startNumberMini - Number(str));
            } else {
              labelStr = '-' + (startNumberMini - Number(str));
            }

            this._nodes['number2'].getComponent(Label).string = String(Number(labelStr).toFixed(0));

            var animation = this._nodes['number2'].getComponent(Animation);

            animation.play(); // 动画播放

            this.GoldNumberRoller.startRolling(startNumberMini, Number(String(Number(str).toFixed(0))), 500, label);
          }
        }
        /**展示自动启动按钮组面板 */


        triggeAutoLaunch(state) {
          this.autoLaunch.active = true;

          if (state === false) {
            if (this.autoLaunchState) {
              this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_down');
              this.autoLaunchState = false;
            }

            return;
          } else {
            this.autoLaunchState = !this.autoLaunchState;

            if (this.autoLaunchState) {
              this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_up');
            } else {
              this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_down');
            }
          }
        }
        /**自动按钮设置为激活状态 */


        setActiveButton(autoLaunchType) {
          this.autoLaunch.children.forEach((child, index) => {
            if (index === autoLaunchType) {
              child.getComponent(UIOpacity).opacity = 60;
            } else {
              child.getComponent(UIOpacity).opacity = 255;
            }
          });

          if (this.autoLaunchState) {
            this.autoLaunch.getComponent(Animation).play('animation_autoLauncher_down');
            this.autoLaunchState = false;
          }
        }
        /**set jackPOT */


        setJACKPOT(jackPotData) {// this.JackPotContent.destroyAllChildren()
          // jackPotData.forEach(item => {
          //     let node = instantiate(this.JackPotItem)
          //     node.getChildByName('One_Right').getComponent(Label).string = item.nickName + ''
          //     find('One_Left/One_Label', node).getComponent(Label).string = item.winningAmount.formatAmountWithCommas()
          //     node.active = true
          //     this.JackPotContent.addChild(node)
          // })
        }

        handoffJACKPOT() {
          this._nodes['ScrollView'].active = !this._nodes['ScrollView'].active;
        }
        /**启动飞鹤 */


        startFlyingCrane() {
          var node = new Node("flyingCrane");
          var ske = node.addComponent(sp.Skeleton);
          ske.skeletonData = this.flyingCrane;
          ske.animation = 'animation';
          this.node.addChild(node);
          node.setSiblingIndex(1);
          node.setPosition(new Vec3(0, 0));
          node.layer = Layers.Enum.UI_2D;
          return node; // node.setPosition(new Vec3(640, -250))
          // tween(node).to(3, { position: new Vec3(-640, 250) }).call(() => {
          // 	this.startFlyingCrane()
          // }).start()
        } // 设置小游戏按钮置灰


        setDis_btn(disable) {
          this._nodes['SZX_-'].getComponent(Sprite).grayscale = disable;
          this._nodes['SZX_+'].getComponent(Sprite).grayscale = disable;
          this._nodes['maxBet'].getComponent(Sprite).grayscale = disable;
        }

        setGreyOut(str, disable) {
          this._nodes[str].getComponent(Sprite).grayscale = disable;
        }
        /**设置面板按钮可用性 */


        setDisable(disable) {
          // const op = this.startButton.getComponent(UIOpacity)
          // op.opacity = disable ? 100 : 255
          var button = this.startButton.getComponent(Button); // 获取节点的 Sprite 组件
          // button.interactable = disable

          var sprite = this.startButton.getComponent(Sprite);
          sprite.grayscale = disable; // const material = Material.getBuiltinMaterial(Material.BUILTIN_NAME.GRAY_SPRITE); // 获取置灰材质
          // const material = Material.getInstantiatedBuiltinMaterial(Material.BUILTIN_NAME.GRAY_SPRITE);
          // node.setMaterial(material, 0);
          // const mat = new Material();
          // mat.initialize({
          // 	// 通过 effect 名指定材质使用的着色器资源
          // 	effectAsset: 'pipeline/skybox',
          // 	defines: {
          // 		USE_RGBE_CUBEMAP: true
          // 	}
          // })
          // this.node.getComponent(Sprite).setMaterial(Material.getBuiltinMaterial(Material.BUILTIN_NAME.GRAY_SPRITE + ''), 0);
        }

        update(deltaTime) {
          this.timeAccumulator += deltaTime;

          if (this.timeAccumulator >= 3) {
            this.timeAccumulator = 0;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().updateTheMusicStatus();
          }

          this.GoldNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "topButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "beliButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speclalButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "settingButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "baseBet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "betAmount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spr_nomoney", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lineCount", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "addShift", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "subtractShift", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "autoLaunch", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "ruleButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bg_1", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bg_2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "gameArea", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "addBet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "subtractBet", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "maxBet", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "flyingCrane", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "JackPotContent", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "JackPotItem", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "propsToggleFast", [_dec27], {
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
//# sourceMappingURL=fb56c1562652b970134d46203d6e7b6f07937dab.js.map