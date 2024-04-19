System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Prefab, find, Sprite, SpriteFrame, tween, UIOpacity, sp, Vec3, AudioSource, instantiate, Animation, BaseComponent, global, AudioManager, SoundList, SceneBgMusic, NumberRoller, MW_Shake, getBgProxy, getSocketProxy, BuyType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _crd, ccclass, property, Egypt_SlotBg;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLaunchType(extras) {
    _reporterNs.report("AutoLaunchType", "../Repositories/BgRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBgMusic(extras) {
    _reporterNs.report("SceneBgMusic", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNumberRoller(extras) {
    _reporterNs.report("NumberRoller", "../utils/NumberRoller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMW_Shake(extras) {
    _reporterNs.report("MW_Shake", "../utils/MW_Shake", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../utils", _context.meta, extras);
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
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      find = _cc.find;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      sp = _cc.sp;
      Vec3 = _cc.Vec3;
      AudioSource = _cc.AudioSource;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
      SoundList = _unresolved_4.SoundList;
      SceneBgMusic = _unresolved_4.SceneBgMusic;
    }, function (_unresolved_5) {
      NumberRoller = _unresolved_5.NumberRoller;
    }, function (_unresolved_6) {
      MW_Shake = _unresolved_6.MW_Shake;
    }, function (_unresolved_7) {
      getBgProxy = _unresolved_7.getBgProxy;
      getSocketProxy = _unresolved_7.getSocketProxy;
    }, function (_unresolved_8) {
      BuyType = _unresolved_8.BuyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2828efMLlVDLYY+SXYmUDXR", "Egypt_SlotBg", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Label', 'Node', 'Prefab', 'find', 'Sprite', 'SpriteFrame', 'tween', 'UIOpacity', 'sp', 'Vec3', 'AudioSource', 'instantiate', 'Animation', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Egypt_SlotBg", Egypt_SlotBg = (_dec = ccclass('Egypt_SlotBg'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(SpriteFrame), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Prefab), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec(_class = (_class2 = class Egypt_SlotBg extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

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

          _initializerDefineProperty(this, "lineCount", _descriptor9, this);

          _initializerDefineProperty(this, "score", _descriptor10, this);

          _initializerDefineProperty(this, "addShift", _descriptor11, this);

          _initializerDefineProperty(this, "spr_nomoney", _descriptor12, this);

          _initializerDefineProperty(this, "subtractShift", _descriptor13, this);

          _initializerDefineProperty(this, "autoLaunch", _descriptor14, this);

          _initializerDefineProperty(this, "ruleButton", _descriptor15, this);

          _initializerDefineProperty(this, "bg_1", _descriptor16, this);

          _initializerDefineProperty(this, "gameArea", _descriptor17, this);

          _initializerDefineProperty(this, "addBet", _descriptor18, this);

          _initializerDefineProperty(this, "subtractBet", _descriptor19, this);

          _initializerDefineProperty(this, "maxBet", _descriptor20, this);

          _initializerDefineProperty(this, "toast", _descriptor21, this);

          _initializerDefineProperty(this, "JackPotContent", _descriptor22, this);

          _initializerDefineProperty(this, "JackPotItem", _descriptor23, this);

          _initializerDefineProperty(this, "propsToggleFast", _descriptor24, this);

          this.GoldNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.timeAccumulator = 0;
          this.jackTotalNumberRoller = new (_crd && NumberRoller === void 0 ? (_reportPossibleCrUseOfNumberRoller({
            error: Error()
          }), NumberRoller) : NumberRoller)();
          this.listState = true;
          this.autoLaunchState = false;
          this.animationType = void 0;
        }

        start() {
          setTimeout(() => {
            this._nodes['Up_Feature'].setSiblingIndex(9999);

            this._nodes['bg1'].setSiblingIndex(0);

            this._nodes['spr_egyptSg_bg'].setSiblingIndex(0);
          }, 100);

          this._nodes['btn_jackPot'].on(Node.EventType.TOUCH_END, () => {
            this.listState = !this.listState;
            this.set_JACKPOT_list();
          }); // this._nodes['ScrollView'].on(Button.EventType.CLICK, () => {
          //     this.listState = !this.listState
          //     this.set_JACKPOT_list()
          // })

        }

        set_JACKPOT_list() {
          this._nodes['btn_scrollView'].setScale(1, this.listState ? -1 : 1); // tween(this._nodes['ScrollView']).to(tweenDuration, {  position: new Vec3(this.listState?-588:-1000, 162, 0)}, { easing: "linear",}).start();


          tween(this._nodes['ScrollView']).to(0.2, {
            height: this.listState ? 345 : 0
          }, {
            easing: "sineIn"
          }).start();
          tween(this._nodes['view']).to(0.1, {
            height: this.listState ? 310 : 0
          }, {
            easing: "sineIn"
          }).start();
        }
        /**更新下注金额 */


        updateBetAmount(baseBetAmount, lineCount) {
          const betAmount = baseBetAmount * lineCount;
          let numberStr = betAmount.formatAmountWithCommas(); // if (betAmount > 1000 * 100) {
          // 	//显示K
          // } else if (betAmount > 10000 * 100) {
          // 	//显示M
          // } else {
          // 	//转为科学计数法
          // 	numberStr = betAmount.formatAmountWithCommas()
          // }

          this.lineCount.getComponent(Label).string = `${lineCount} × ${baseBetAmount}`;
          this.betAmount.getComponent(Label).string = betAmount + ''; //numberStr
        }

        setBtnLabel(str) {
          this._nodes['START'].getComponent(Label).string = str + "";
          this.listState = false; // this.set_JACKPOT_list()
        } // 更新金币数量


        setGold(str) {
          let label = this._nodes['Moeny_Label'].getComponent(Label);

          let startNumberMini = parseInt(label.string.replace(/,/g, ""));

          if (startNumberMini - Number(str) == 0) {
            return false;
          } else {
            // 漂浮效果
            this._nodes['number2'].active = true;
            let labelStr = '';

            if (startNumberMini - Number(str) < 0) {
              labelStr = '+' + Math.abs(startNumberMini - Number(str));
            } else {
              labelStr = '-' + (startNumberMini - Number(str));
            }

            this._nodes['number2'].getComponent(Label).string = String(Number(labelStr).toFixed(0));

            let animation = this._nodes['number2'].getComponent(Animation);

            animation.play(); // 动画播放

            this.GoldNumberRoller.startRolling(startNumberMini, str.toFixed(0), 500, label);
          }
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
        }
        /**更新按钮状态 */


        setBtnState(state, type = 0, num) {
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
        /**set jackPOT */


        setJACKPOT(jackPotData) {
          let sprList = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)().getSpriteFrames();
          this.JackPotContent.destroyAllChildren();
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

        Balance_tips(bl) {
          this.spr_nomoney.active = bl;
        }
        /**设置背景图片 */


        setBg(bgName) {
          this.node.getComponent(Sprite).spriteFrame = this[bgName];
        }
        /**展示自动启动按钮组面板 */


        triggeAutoLaunch(state) {
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

        set_jack_total(num) {
          let label = this._nodes['Label_jackpot'].getComponent(Label);

          let startNumberMajor = parseInt(label.string.replace(/,/g, ""));
          this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500, label);
        } // 初始化插槽


        initSlot() {
          let type = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType();

          if (type == 0) {
            this.slotSwitching(true);
            this._nodes['spr_egyptSg_bg'].active = false;
          } else {
            this.slotSwitching(false);
            this._nodes['spr_egyptSg_bg'].active = true;
          }
        }

        switchAnimations(type, done) {
          this.animationType = type; // console.log('++++++++++++++++++++++switchAnimations +++++++++++++++++ ', type);

          this._nodes['aiji_kaiguanmen'].active = true;

          if (type === 0) {
            this.reverseAnimation(done, type);
          } else if (type === 1) {
            this.animationMethods(done, type);
          } else if (type === 2) {
            this.animationMethods(done, type);
          }
        } // 游戏播放倒序


        reverseAnimation(done, type) {
          let kaiguanmen = this._nodes['aiji_kaiguanmen'].getComponent(sp.Skeleton);

          kaiguanmen.setAnimation(0, 'shimen_kaimen', false);
          let count = 0;
          tween(this._nodes['aiji_kaiguanmen']).to(3, {
            scale: new Vec3(1, 1, 1)
          }).start();
          this.monitorAnimations(kaiguanmen, type, entry => {
            count++;

            if (count === 1) {
              kaiguanmen.setAnimation(0, 'shimen_guangmen', false);
              this.node.getComponent(_crd && MW_Shake === void 0 ? (_reportPossibleCrUseOfMW_Shake({
                error: Error()
              }), MW_Shake) : MW_Shake).shake(this.node, 0.2, 0, 20);
            } else {
              this.slotSwitching(true);
              kaiguanmen.setAnimation(0, 'shimen_guanmenhuocheng', false);
              this._nodes['aiji_kaiguanmen'].active = false;
              this._nodes['spr_egyptSg_bg'].active = false; // console.log('reverseAnimation ++++++++++++++++++++++++++++++++++ done');

              done && done();
            }
          });
        }

        animationMethods(done, type) {
          let skeletonLeft = this._nodes['skeletonLeft'].getComponent(sp.Skeleton);

          skeletonLeft.setAnimation(0, 'dynamic', false);

          let skeletonRight = this._nodes['skeletonRight'].getComponent(sp.Skeleton);

          skeletonRight.setAnimation(0, 'dynamic', false);
          this.monitorAnimations(skeletonRight, type, () => {
            this._nodes['aiji_kaiguanmen'].active = true;
            this.scheduleOnce(() => {
              tween(this._nodes['aiji_kaiguanmen']).to(2, {
                scale: new Vec3(3, 3, 3)
              }).start();
            }, 4);

            let kaiguanmen = this._nodes['aiji_kaiguanmen'].getComponent(sp.Skeleton);

            kaiguanmen.setAnimation(0, 'shimen_guangmen', false);
            let count = 0;
            this.monitorAnimations(kaiguanmen, type, entry => {
              count++;

              if (count === 1) {
                kaiguanmen.setAnimation(0, 'shimen_kaimen', false);
                this._nodes['spr_egyptSg_bg'].active = true;
                this.node.getComponent(_crd && MW_Shake === void 0 ? (_reportPossibleCrUseOfMW_Shake({
                  error: Error()
                }), MW_Shake) : MW_Shake).shake(this.node, 0.2, 0, 20);
              } else {
                this.slotSwitching(false);
                kaiguanmen.setAnimation(0, 'shimen_guanmenhuocheng', false);
                this._nodes['aiji_kaiguanmen'].active = false;
                count = 0; // console.log('animationMethods ------------------------------------- done');

                done && done();
              }
            });
          });
        } // 动画播放一次


        monitorAnimations(Skeleton, type, onEndCall) {
          Skeleton.setCompleteListener(entry => {
            // console.log('monitorAnimations =========================== ', type);
            if (this.animationType === type) {
              onEndCall(entry);
            }
          });
        } //滚槽切换


        slotSwitching(bl) {
          // true 游戏主游戏 false 其他游戏
          this._nodes['bg1'].active = bl;
          this._nodes['skeletonLeft'].active = bl;
          this._nodes['skeletonRight'].active = bl;
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
          const button = this.startButton.getComponent(Button); // 获取节点的 Sprite 组件
          // button.interactable = disable

          const sprite = this.startButton.getComponent(Sprite);
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

          this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        }

        bindUI() {
          // const flyCrane = this.startFlyingCrane()
          // flyCrane.setScale(new Vec3(-1, 1, 1))
          // this.scheduleOnce(() => {
          // 	this.startFlyingCrane()
          // }, 3)
          // 点击首页按钮
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
          let audio = this.node.addComponent(AudioSource);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().setAudioSource(audio);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().playMusic((_crd && SceneBgMusic === void 0 ? (_reportPossibleCrUseOfSceneBgMusic({
            error: Error()
          }), SceneBgMusic) : SceneBgMusic).mainBg, true);
        }

        bindEvent() {// bindClickEvent(this.startButton, () => { })
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "homeButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "topButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "beliButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "speclalButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "settingButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "baseBet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "betAmount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lineCount", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "addShift", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spr_nomoney", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "subtractShift", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "autoLaunch", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "ruleButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bg_1", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "gameArea", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "addBet", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "subtractBet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "maxBet", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "JackPotContent", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "JackPotItem", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "propsToggleFast", [_dec25], {
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
//# sourceMappingURL=1989ec2ce84bbc83b36d8e40bd2d82c04d9e8c49.js.map