System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, sp, Animation, tween, Vec3, Toggle, BaseComponent, changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss, AutoLauncherType, GameType, getAutoCount, isAuto, isLimit, RollerStatus, updateRollerStatus, mainViewModel, phoenixV2_Audio, sourceManageSeletor, SoundPathDefine, config, StepNumberV2, PrefabPathDefine, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, PhoenixV2_Main;

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

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAutoCount(extras) {
    _reporterNs.report("getAutoCount", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisAuto(extras) {
    _reporterNs.report("isAuto", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenixV2_Audio(extras) {
    _reporterNs.report("phoenixV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../../../utils/SkeletonPlay", _context.meta, extras);
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
      Node = _cc.Node;
      sp = _cc.sp;
      Animation = _cc.Animation;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      changeGame = _unresolved_3.changeGame;
      setAutoLauncherInfo = _unresolved_3.setAutoLauncherInfo;
      setBetDropDownList = _unresolved_3.setBetDropDownList;
      updateWinloss = _unresolved_3.updateWinloss;
    }, function (_unresolved_4) {
      AutoLauncherType = _unresolved_4.AutoLauncherType;
      GameType = _unresolved_4.GameType;
      getAutoCount = _unresolved_4.getAutoCount;
      isAuto = _unresolved_4.isAuto;
      isLimit = _unresolved_4.isLimit;
      RollerStatus = _unresolved_4.RollerStatus;
    }, function (_unresolved_5) {
      updateRollerStatus = _unresolved_5.updateRollerStatus;
    }, function (_unresolved_6) {
      mainViewModel = _unresolved_6.mainViewModel;
      phoenixV2_Audio = _unresolved_6.phoenixV2_Audio;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      config = _unresolved_8.default;
    }, function (_unresolved_9) {
      StepNumberV2 = _unresolved_9.default;
    }, function (_unresolved_10) {
      PrefabPathDefine = _unresolved_10.PrefabPathDefine;
    }, function (_unresolved_11) {
      SkeletonAnimationPlayer = _unresolved_11.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "771abNLyOJOQZE4X524f6Kj", "PhoenixV2_Main", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'sp', 'Sprite', 'Animation', 'tween', 'UIOpacity', 'Vec3', 'AnimationState', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoenixV2_Main", PhoenixV2_Main = (_dec = ccclass('PhoenixV2_Main'), _dec(_class = class PhoenixV2_Main extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
            props_spr_phoenix_Bluebg: new Node(),
            props_spr_phoenix_Redbg: new Node(),
            props_spr_smallGame_multipleBg: new Node(),
            props_Label_smallGame_multiple: new Node(),
            props_phoenix_upBg: new Node(),
            props_speed_border_node: new Node(),
            props_slot: new Node(),
            props_btn_off: new Node(),
            props_btn_confirm: new Node(),
            props_sg_free: new Node()
          };
          this.selectedNode = void 0;
          this.props = {
            betDropDownlist: false,
            positionId: 0,
            gold: 0,
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              leftCount: 0
            },
            subGameAnimationPlayInfo: null,
            jackpotDatas: [],
            jackpotTotalAmount: 0,
            autoLauncherInfo: null
          };
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

        getFreeNumNode() {
          return this.propertyNode.props_sg_free;
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
          this.listenerBetDropDownListEvent();
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
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BIU);
            this.dispatch((_crd && setBetDropDownList === void 0 ? (_reportPossibleCrUseOfsetBetDropDownList({
              error: Error()
            }), setBetDropDownList) : setBetDropDownList)(false));
            this.events.onSendBet();
            this.openAoutoPanl();
          }); // this.propertyNode.props_autoLauncher.children.forEach(v => {
          // 	v.on(Node.EventType.TOUCH_END, () => {
          // 		const autoLauncherType = v.name as AutoLauncherType;
          // 		const count = getAutoCount(autoLauncherType);
          // 		this.dispatch(setAutoLauncherInfo({
          // 			autoLauncherType: autoLauncherType,
          // 			totalCount: count,
          // 			leftCount: isLimit(autoLauncherType) ? 1 : count - 1,
          // 		}))
          // 		console.log(count);
          // 		Dragonv2_Audio.playOneShot(SoundPathDefine.biu)
          // 		this.dispatch(setBetDropDownList(false));
          // 		this.events.onSendBet();
          // 	})
          // })
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
                this.createFlyBg();
              }
            } else if (key === 'gameTypeInfo') {
              this.changeGameType(this.props.gameTypeInfo.viewGameType);
            } else if (key === 'jackpotDatas') {// this.updateJackpotContent();
            } else if (key === 'jackpotTotalAmount') {// this.updateJackpotAmount(false, value);
            } else if (key === 'positionId') {// this.updateJackpotAmount(true, value);
            }
          }
        }

        changeGameType(gameType) {
          var isMainGame = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
          var isSubGame1 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1; // 主游戏要显示的界面

          this.propertyNode.props_main_bg.active = isMainGame;
          this.propertyNode.props_main_slot_bg.active = isMainGame || isSubGame1;
          this.propertyNode.props_spr_phoenix_Redbg.active = isMainGame; // 子游戏要显示的界面

          this.propertyNode.props_mini_game_bg.active = !isMainGame && isSubGame1;
          this.propertyNode.props_spr_phoenix_Bluebg.active = !isMainGame && isSubGame1;
          this.propertyNode.props_spr_smallGame_multipleBg.active = !isMainGame && isSubGame1; // this.propertyNode.props_phoenix_upBg.active = isMainGame && !isSubGame1;

          this.propertyNode.props_sg_free.active = !isMainGame && isSubGame1;
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
          this.updateKaiGuanMen();
        }

        updateKaiGuanMen() {}

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
            // param 0表示从主游戏切到子游戏,param 1表示从子游戏切到主游戏
            if (this.props.subGameAnimationPlayInfo.param === 0) {// 如果左右两边神像显示了就走动画，否则直接开门动画
              // if (this.propertyNode.props_skeletonLeft.active) {
              // 	this.portraitSkLeft.setAnimation(0, 'dynamic', false)
              // 	this.portraitSkRight.setAnimation(0, 'dynamic', false)
              // } else {
              // 	this.changeGateAnimation()
              // }
              // phoenixV2_Audio.playOneShot(SoundPathDefine.sgbegin1);
            } else {
              // 先切到关门的效果然后暂停，这样动画就停在了门是打开的效果
              this.gateSk.setAnimation(0, 'shimen_guangmen', false);
              this.gateSk.paused = true; // this.propertyNode.props_aiji_kaiguanmen.active = true;
              // this.propertyNode.props_aiji_zhuanquanding.active = true;

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
        /**转场动画 */


        createFlyBg() {
          //转场
          var flyBgNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FLY_BG).source); //动画转场背景

          this.node.addChild(flyBgNode);
          var titleSkeleton = flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton);
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', false, () => {
            flyBgNode && flyBgNode.destroy();
            this.node && this.node.isValid && this.subGameAnimationEndHandle(0);
            this.propertyNode.props_slot.active = true;
            this.propertyNode.props_roller.active = true;
            this.propertyNode.props_phoenix_upBg.active = true;

            if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              this.propertyNode.props_sg_free.active = true;
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(0));
            } else if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {// let amount = cacheData.rollerLaunchResult.dl.si[0].freeGameAmount
              // this.dispatch(updateWinloss(amount))  
            } // 进入游戏之后如果是自动游戏，就发送下注


            if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              this.scheduleOnce(() => {
                this.events.onSendBet();
              }, 1);
            } //切换游戏 初始化盈利

          }).playAnimation();
        }
        /**动画结束处理 */


        subGameAnimationEndHandle(type) {
          var gameTypeInfo = _extends({}, this.props.gameTypeInfo);

          gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
          gameTypeInfo.viewGameType = gameTypeInfo.currGameType; // gameTypeInfo.viewGameType = GameType.SUBGAME1;
          // gameTypeInfo.currGameType = GameType.SUBGAME1;
          // gameTypeInfo.leftCount = 10;

          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).playBgMusic();
          this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
            error: Error()
          }), changeGame) : changeGame)(gameTypeInfo)); // 开门动画结束，准备切换到小游戏后，结束游戏

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

        getSlotNode() {
          return this.propertyNode.props_slot;
        }

        getSmallMultipleNode() {
          return this.propertyNode.props_Label_smallGame_multiple;
        }

        getupBgNode() {
          return this.propertyNode.props_phoenix_upBg;
        }

        getBorderNode() {
          return this.propertyNode.props_speed_border_node;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2fa4ce8c3f5ad3751912cab8d9c32e74796416f0.js.map