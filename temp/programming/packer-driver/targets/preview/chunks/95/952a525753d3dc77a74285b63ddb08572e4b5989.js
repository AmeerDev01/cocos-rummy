System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, instantiate, Label, Node, sp, Sprite, Toggle, tween, Vec3, BaseComponent, changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss, AutoLauncherType, calBetAmount, GameType, getAutoCount, isLimit, RollerStatus, updateRollerStatus, egyptv2_Audio, mainViewModel, SoundPathDefine, getNodeByNameDeep, global, config, Shake, StepNumberV2, _dec, _class, _crd, ccclass, property, EgyptV2_Main;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGame(extras) {
    _reporterNs.report("changeGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLauncherInfo(extras) {
    _reporterNs.report("setAutoLauncherInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBetDropDownList(extras) {
    _reporterNs.report("setBetDropDownList", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinloss(extras) {
    _reporterNs.report("updateWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcalBetAmount(extras) {
    _reporterNs.report("calBetAmount", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAutoCount(extras) {
    _reporterNs.report("getAutoCount", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisLimit(extras) {
    _reporterNs.report("isLimit", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackpotData(extras) {
    _reporterNs.report("JackpotData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("SubGameAnimationPlayInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateRollerStatus(extras) {
    _reporterNs.report("updateRollerStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfegyptv2_Audio(extras) {
    _reporterNs.report("egyptv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShake(extras) {
    _reporterNs.report("Shake", "../../../utils/Shake", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      changeGame = _unresolved_3.changeGame;
      setAutoLauncherInfo = _unresolved_3.setAutoLauncherInfo;
      setBetDropDownList = _unresolved_3.setBetDropDownList;
      updateWinloss = _unresolved_3.updateWinloss;
    }, function (_unresolved_4) {
      AutoLauncherType = _unresolved_4.AutoLauncherType;
      calBetAmount = _unresolved_4.calBetAmount;
      GameType = _unresolved_4.GameType;
      getAutoCount = _unresolved_4.getAutoCount;
      isLimit = _unresolved_4.isLimit;
      RollerStatus = _unresolved_4.RollerStatus;
    }, function (_unresolved_5) {
      updateRollerStatus = _unresolved_5.updateRollerStatus;
    }, function (_unresolved_6) {
      egyptv2_Audio = _unresolved_6.egyptv2_Audio;
      mainViewModel = _unresolved_6.mainViewModel;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      getNodeByNameDeep = _unresolved_8.getNodeByNameDeep;
    }, function (_unresolved_9) {
      global = _unresolved_9.global;
    }, function (_unresolved_10) {
      config = _unresolved_10.default;
    }, function (_unresolved_11) {
      Shake = _unresolved_11.Shake;
    }, function (_unresolved_12) {
      StepNumberV2 = _unresolved_12.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f61bsGGVZDOIjYpgyU3Xyz", "EgyptV2_Main", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationState', 'Graphics', 'instantiate', 'Label', 'Mask', 'Node', 'sp', 'Sprite', 'Toggle', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EgyptV2_Main", EgyptV2_Main = (_dec = ccclass('EgyptV2_Main'), _dec(_class = class EgyptV2_Main extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.portraitSkLeft = void 0;
          this.portraitSkRight = void 0;
          this.gateSk = void 0;
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.props_aiji_kaiguanmenOrigonPos = void 0;
          this.baseNodeOffectNode = void 0;

          /** 原始缩放大小 */
          this.baseNodeOrigonScale = new Vec3(1, 1, 1);

          /** 缩放大小 */
          this.baseNodeScale = new Vec3(3, 3, 3);
          this.propertyNode = {
            props_main_bg: new Node(),
            props_mini_game_bg: new Node(),
            props_main_slot_bg: new Node(),
            props_Up_Feature: new Node(),
            props_buttomBar: new Node(),
            props_roller: new Node(),
            props_bet_dropdownlist: new Node(),
            props_autoLauncher: new Node(),
            props_aiji_kaiguanmen: new Node(),
            props_aiji_zhuanquanding: new Node(),
            props_btn_jackPot: new Node(),
            props_jackpot_panel: new Node(),
            props_btn_scrollView: new Node(),
            props_jackpot_user_list: new Node(),
            props_jackpot_item: new Node(),
            props_skeletonRight: new Node(),
            props_skeletonLeft: new Node(),
            props_Label_jackpot: new Label(),
            props_btn_off: new Node(),
            props_btn_confirm: new Node()
          };
          this.props = {
            betDropDownlist: false,
            positionId: 0,
            gold: 0,
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              leftCount: 0
            },
            subGameAnimationPlayInfo: null,
            jackpotDatas: [],
            jackpotTotalAmount: 0,
            autoLauncherInfo: null
          };
          this.selectedNode = void 0;
          this.events = {
            onSendBet: () => {}
          };
        }

        start() {}

        getHeader() {
          return this.propertyNode.props_Up_Feature;
        }

        getFooter() {
          return this.propertyNode.props_buttomBar;
        }

        getRoller() {
          return this.propertyNode.props_roller;
        }

        initState() {
          return {};
        }

        bindEvent() {
          // this.propertyNode.props_autoLauncher.getComponent(Animation).on(Animation.EventType.FINISHED, (e, state: AnimationState) => {
          // 	if (state.name === 'animation_autoLauncher_down') {
          // 		this.propertyNode.props_bet_dropdownlist.active = false;
          // 	}
          // });
          this.propertyNode.props_bet_dropdownlist.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && setBetDropDownList === void 0 ? (_reportPossibleCrUseOfsetBetDropDownList({
              error: Error()
            }), setBetDropDownList) : setBetDropDownList)(false));
          });
          this.propertyNode.props_btn_jackPot.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            this.propertyNode.props_jackpot_panel.active = !this.propertyNode.props_jackpot_panel.active;
            this.updateBtnScrollView();
          });
          this.propertyNode.props_jackpot_panel.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_jackpot_panel.active = false;
            this.updateBtnScrollView();
          });
          this.listenerBetDropDownListEvent();
          this.portraitSkLeft.setCompleteListener(x => {
            if (this.node.isValid) {
              if (x.animation.name !== 'static') {
                this.portraitSkLeft.setAnimation(0, 'static', false);
                this.changeGateAnimation();
              }
            }
          });
          this.portraitSkRight.setCompleteListener(() => {
            if (this.node.isValid) {
              this.portraitSkRight.setAnimation(0, 'static', false);
            }
          });
          this.gateSk.setCompleteListener(x => {
            if (this.node.isValid) {
              if (x.animation.name === 'shimen_kaimen') {} else if (x.animation.name === 'shimen_guanmenhuocheng') {} else if (x.animation.name === 'shimen_zhuanquanding') {} else if (x.animation.name === 'shimen_guangmen') {
                // 关门后隐藏转圈动画
                this.propertyNode.props_aiji_zhuanquanding.active = false;
                this.gateSk.setAnimation(0, 'shimen_kaimen', false); // 与开门同步进行，关门后开门表示从小游戏切换到主游戏

                this.scheduleOnce(() => {
                  // 如果下一个是主游戏，直接就结束动画了
                  if (this.isNextMainGame()) {
                    this.propertyNode.props_aiji_kaiguanmen.active = false;
                    this.subGameAnimationEndHandle(0);
                  }
                }, 1);
              }
            }
          });
        }

        listenerBetDropDownListEvent() {
          this.propertyNode.props_autoLauncher.children.forEach(toggle => {
            toggle.getComponent(Toggle).node.on(Node.EventType.TOUCH_END, this.onToggleClick, this);
          });
          this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
            this.openAoutoPanl();
          });
          this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END, () => {
            var autoLauncherType = this.selectedNode ? this.selectedNode.name : 't10'; // 默认T10

            var count = (_crd && getAutoCount === void 0 ? (_reportPossibleCrUseOfgetAutoCount({
              error: Error()
            }), getAutoCount) : getAutoCount)(autoLauncherType);
            this.dispatch((_crd && setAutoLauncherInfo === void 0 ? (_reportPossibleCrUseOfsetAutoLauncherInfo({
              error: Error()
            }), setAutoLauncherInfo) : setAutoLauncherInfo)({
              autoLauncherType: autoLauncherType,
              totalCount: count,
              leftCount: (_crd && isLimit === void 0 ? (_reportPossibleCrUseOfisLimit({
                error: Error()
              }), isLimit) : isLimit)(autoLauncherType) ? 1 : count - 1
            }));
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).biu);
            this.dispatch((_crd && setBetDropDownList === void 0 ? (_reportPossibleCrUseOfsetBetDropDownList({
              error: Error()
            }), setBetDropDownList) : setBetDropDownList)(false));
            this.events.onSendBet();
            this.openAoutoPanl();
          });
        }

        openAoutoPanl() {
          this.propertyNode.props_bet_dropdownlist.active = !this.propertyNode.props_bet_dropdownlist.active;
        }

        getAutoState() {
          return this.propertyNode.props_bet_dropdownlist.active;
        }

        clearAuto() {
          this.dispatch((_crd && setAutoLauncherInfo === void 0 ? (_reportPossibleCrUseOfsetAutoLauncherInfo({
            error: Error()
          }), setAutoLauncherInfo) : setAutoLauncherInfo)({
            autoLauncherType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE,
            totalCount: 0,
            leftCount: 0
          }));
        }

        onToggleClick(event) {
          // 获取点击的 Toggle 按钮
          var clickedToggle = event.target.getComponent(Toggle);

          if (!clickedToggle.isChecked) {
            clickedToggle.isChecked = true;
            this.selectedNode = event.target;
            return;
          } // 取消其他 Toggle 按钮的选中状态


          this.propertyNode.props_autoLauncher.children.forEach(toggle => {
            if (toggle !== clickedToggle) {
              toggle.getComponent(Toggle).isChecked = false;
            }
          });
        }

        useProps(key, value) {
          // console.log("key", key, "value", value);
          if (this.node && this.node.isValid) {
            if (key === 'betDropDownlist') {
              this.showOrHideBetDropDownlist(value.cur);
            } else if (key === 'subGameAnimationPlayInfo') {
              if (value.cur) {
                this.playSubGameAnimation();
              }
            } else if (key === 'gameTypeInfo') {
              this.changeGameType(this.props.gameTypeInfo.viewGameType);
            } else if (key === 'jackpotDatas') {
              this.updateJackpotContent();
            } else if (key === 'jackpotTotalAmount') {
              this.updateJackpotAmount(false, value);
            } else if (key === 'positionId') {
              this.updateJackpotAmount(true, value);
            }
          }
        }

        changeGameType(gameType) {
          var isMainGame = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
          var isSubGame2 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2; // 主游戏要显示的界面

          this.propertyNode.props_skeletonRight.active = isMainGame;
          this.propertyNode.props_skeletonLeft.active = isMainGame;
          this.propertyNode.props_main_bg.active = isMainGame || isSubGame2;
          this.propertyNode.props_main_slot_bg.active = isMainGame || isSubGame2; // 子游戏要显示的界面

          this.propertyNode.props_mini_game_bg.active = !isMainGame && !isSubGame2;
        }
        /**是否准备切换游戏 */


        isChangeGame() {
          return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
        }

        showOrHideBetDropDownlist(status) {
          var pos = this.propertyNode.props_autoLauncher.position;

          if (status) {
            this.propertyNode.props_bet_dropdownlist.active = true;
            this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_up"); // tween(this.propertyNode.props_autoLauncher.getComponent(UIOpacity)).to(0.5, { opacity: 255 }).start();
            // tween(this.propertyNode.props_autoLauncher).to(0.2, { position: new Vec3(pos.x, -160) }).start();
          } else {
            this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_down"); // tween(this.propertyNode.props_autoLauncher.getComponent(UIOpacity)).to(0.5, { opacity: 0 }).start();
            // tween(this.propertyNode.props_autoLauncher).to(0.2, { position: new Vec3(pos.x, -500) }).call(() => {
            // 	this.node.isValid && (this.propertyNode.props_bet_dropdownlist.active = false);
            // }).start();
          }
        }

        bindUI() {
          // this.props_aiji_kaiguanmenOrigonPos = this.propertyNode.props_aiji_kaiguanmen.position.clone();
          this.props_aiji_kaiguanmenOrigonPos = new Vec3();
          this.baseNodeOffectNode = new Vec3(-100, -200);
          this.propertyNode.props_bet_dropdownlist.active = false;
          this.gateSk = this.propertyNode.props_aiji_kaiguanmen.getComponent(sp.Skeleton);
          this.portraitSkLeft = this.propertyNode.props_skeletonLeft.getComponent(sp.Skeleton);
          this.portraitSkRight = this.propertyNode.props_skeletonRight.getComponent(sp.Skeleton);
          this.updateKaiGuanMen();
        }

        updateKaiGuanMen() {
          this.propertyNode.props_aiji_kaiguanmen.active = false;
          this.propertyNode.props_aiji_zhuanquanding.active = false;
        }

        isSubGame(gameType) {
          return gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1 || gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
        }

        isNextMainGame() {
          return this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
        }

        playSubGameAnimation() {
          if (this.isSubGame(this.props.subGameAnimationPlayInfo.gameType)) {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).sgbegin1, 1.0, false); // param 0表示从主游戏切到子游戏,param 1表示从子游戏切到主游戏

            if (this.props.subGameAnimationPlayInfo.param === 0) {
              // 如果左右两边神像显示了就走动画，否则直接开门动画
              if (this.propertyNode.props_skeletonLeft.active) {
                this.portraitSkLeft.setAnimation(0, 'dynamic', false);
                this.portraitSkRight.setAnimation(0, 'dynamic', false);
              } else {
                this.changeGateAnimation();
              }
            } else {
              // 先切到关门的效果然后暂停，这样动画就停在了门是打开的效果
              this.gateSk.setAnimation(0, 'shimen_guangmen', false);
              this.gateSk.paused = true;
              this.propertyNode.props_aiji_kaiguanmen.active = true;
              this.propertyNode.props_aiji_zhuanquanding.active = true;
              this.node.setScale(this.baseNodeScale);
              this.node.setPosition(this.baseNodeOffectNode);
              this.changeGameType((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN);
              tween(this.node).show().to((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.zoomingTime, {
                scale: this.baseNodeOrigonScale,
                position: this.props_aiji_kaiguanmenOrigonPos
              }).call(() => {
                if (this.node.isValid) {
                  this.gateSk.paused = false;
                  this.gateSk.timeScale = 2;
                }
              }).start();
            }
          }
        }
        /**切换大门动画 */


        changeGateAnimation() {
          this.propertyNode.props_aiji_kaiguanmen.active = true;
          this.propertyNode.props_aiji_zhuanquanding.active = true;

          if (this.props.subGameAnimationPlayInfo.param === 0) {
            this.gateSk.timeScale = 1;
            this.gateSk.setAnimation(0, 'shimen_guangmen', false); // egyptv2_Audio.playOneShot(SoundPathDefine.guanmen);
            // 关门之后再开门，然后抖动整个画面，抖动完成之后，再开门放大

            this.scheduleOnce(() => {
              new (_crd && Shake === void 0 ? (_reportPossibleCrUseOfShake({
                error: Error()
              }), Shake) : Shake)().shake(this.node, 0.6, 1, 1, 'xy', () => {
                // 关门后隐藏转圈动画
                this.node.isValid && this.gateSk.setAnimation(0, 'shimen_kaimen', false);
                this.scaleNode();
              }).start();
            }, 1);
          }
        }

        scaleNode() {
          // 和开门动画同时进行，开门之后的动画，放大整个游戏，进入到小游戏
          this.scheduleOnce(() => {
            // this.gateSk.setAnimation(0, 'shimen_zhuanquanding', true)
            this.node.isValid && tween(this.node).to((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.zoomingTime, {
              scale: this.baseNodeScale,
              position: this.baseNodeOffectNode
            }).call(() => {
              if (this.node.isValid) {
                this.propertyNode.props_aiji_kaiguanmen.active = false;
                this.propertyNode.props_aiji_zhuanquanding.active = false;
                this.node.setScale(this.baseNodeOrigonScale);
                this.node.setPosition(this.props_aiji_kaiguanmenOrigonPos);
                this.subGameAnimationEndHandle(0);
              }
            }).start();
          }, 1);
        }
        /**动画结束处理 */


        subGameAnimationEndHandle(type) {
          var gameTypeInfo = _extends({}, this.props.gameTypeInfo);

          gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
          gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
          this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
            error: Error()
          }), changeGame) : changeGame)(gameTypeInfo)); // 进入到小游戏1之后，把进入前的这一局的输赢设置为0

          if (gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
              error: Error()
            }), updateWinloss) : updateWinloss)(0));
          }

          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).playBgMusic(); // 开门动画结束，准备切换到小游戏后，结束游戏

          if (type === 0) {
            this.scheduleOnce(() => {
              this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                error: Error()
              }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                error: Error()
              }), RollerStatus) : RollerStatus).END));
            }, 1);
          }
        }

        updateJackpotContent() {
          if (this.propertyNode.props_jackpot_panel && this.propertyNode.props_jackpot_panel.isValid) {
            // this.buildJackpotItem(this.props.jackpotDatas.shift(), false);
            // 找出已经不存在的jackpot，卸载掉
            this.propertyNode.props_jackpot_user_list.children.forEach(v => {
              var jackpotData = this.props.jackpotDatas.find(jackpot => jackpot.nickName === v.name);

              if (!jackpotData) {
                v.destroy();
              } else {
                (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("props_item_amount", v).getComponent(Label).string = jackpotData.winningAmount.formatAmountWithCommas();
              }
            });
            this.props.jackpotDatas.forEach(v => {
              var children = this.propertyNode.props_jackpot_user_list.children;
              var jackpotNode = children.find(jackpotNode => jackpotNode.name === v.nickName);

              if (!jackpotNode) {
                var item = this.buildJackpotItem(v);
                item.setPosition(new Vec3());

                if (children.length > 0) {
                  item.setPosition(children[children.length - 1].position.clone().add(new Vec3(0, -60, 0)));
                }

                this.propertyNode.props_jackpot_user_list.addChild(item);
              }
            });
          }
        }

        updateBtnScrollView() {
          var scaleY = this.propertyNode.props_jackpot_panel.active ? 1 : -1;
          this.propertyNode.props_btn_scrollView.setScale(new Vec3(1, scaleY));
        }

        buildJackpotItem(jackpotData, isCopy) {
          if (isCopy === void 0) {
            isCopy = true;
          }

          if (!jackpotData) {
            return;
          }

          var jackpotItem = isCopy ? instantiate(this.propertyNode.props_jackpot_item) : this.propertyNode.props_jackpot_item;
          jackpotItem.active = true;
          var headNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_item_head", jackpotItem).getComponent(Sprite);
          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_item_amount", jackpotItem).getComponent(Label).string = jackpotData.winningAmount.formatAmountWithCommas();
          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_item_nickname", jackpotItem).getComponent(Label).string = jackpotData.nickName;
          jackpotItem.name = jackpotData.nickName;
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(jackpotData.avatarIndex, headNode);
          return jackpotItem;
        }

        updateJackpotAmount(updatePositionId, value) {
          var begin = value.pre;
          var end = value.cur;

          if ((_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.positionId) < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betAmountLimit) {
            if (updatePositionId) {
              begin = 0;

              if (value.pre) {
                var amountInfoBegin = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).betSwitcher[0].amount.find(v => v.positionId === value.pre);
                begin = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).winning[3].minRate * amountInfoBegin.value;
              }

              var amountInfoEnd = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).betSwitcher[0].amount.find(v => v.positionId === value.cur);
              end = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning[3].minRate * amountInfoEnd.value;
            } else {
              end = undefined;

              var _amountInfoEnd = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).betSwitcher[0].amount.find(v => v.positionId === this.props.positionId);

              this.propertyNode.props_Label_jackpot.string = ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning[3].minRate * _amountInfoEnd.value).formatAmountWithCommas();
            }
          } else if (updatePositionId) {
            begin = 0;

            if (value.pre) {
              var _amountInfoBegin = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).betSwitcher[0].amount.find(v => v.positionId === value.pre);

              begin = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning[3].minRate * _amountInfoBegin.value;
            }

            end = this.props.jackpotTotalAmount;
          }

          if (end !== undefined) {
            this.stepNumberV2.start(begin, end, num => {
              if (this.node && this.node.isValid) {
                var _value = Number(num.toFixed(0));

                this.propertyNode.props_Label_jackpot.string = _value.formatAmountWithCommas();
              }
            });
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=952a525753d3dc77a74285b63ddb08572e4b5989.js.map