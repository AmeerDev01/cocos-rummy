System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, instantiate, Node, sp, Toggle, Vec3, BaseComponent, changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss, AutoLauncherType, GameType, getAutoCount, isLimit, RollerStatus, updateRollerStatus, GxfcV2_Audio, mainViewModel, sourceManageSeletor, SoundPathDefine, StepNumberV2, PrefabPathDefine, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, GxfcV2_Main;

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

  function _reportPossibleCrUseOfGxfcV2_Audio(extras) {
    _reporterNs.report("GxfcV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
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
      Animation = _cc.Animation;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      sp = _cc.sp;
      Toggle = _cc.Toggle;
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
      GameType = _unresolved_4.GameType;
      getAutoCount = _unresolved_4.getAutoCount;
      isLimit = _unresolved_4.isLimit;
      RollerStatus = _unresolved_4.RollerStatus;
    }, function (_unresolved_5) {
      updateRollerStatus = _unresolved_5.updateRollerStatus;
    }, function (_unresolved_6) {
      GxfcV2_Audio = _unresolved_6.GxfcV2_Audio;
      mainViewModel = _unresolved_6.mainViewModel;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      StepNumberV2 = _unresolved_8.default;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }, function (_unresolved_10) {
      SkeletonAnimationPlayer = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52151Znh3xLl5+RzEHl1Nhs", "GxfcV2_Main", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationState', 'Graphics', 'instantiate', 'Label', 'Mask', 'Node', 'sp', 'Sprite', 'Toggle', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GxfcV2_Main", GxfcV2_Main = (_dec = ccclass('GxfcV2_Main'), _dec(_class = class GxfcV2_Main extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
          this.isChangeSmall = false;
          this.bgIndex = 0;
          this.propertyNode = {
            props_main_bg1: new Node(),
            props_main_bg2: new Node(),
            props_main_bg3: new Node(),
            props_mini_game_bg: new Node(),
            props_main_slot_bg: new Node(),
            props_small_down: new Node(),
            props_mini_slot_small_bg: new Node(),
            props_main_slot_small_bg: new Node(),
            props_Up_Feature: new Node(),
            props_buttomBar: new Node(),
            props_roller: new Node(),
            props_bet_dropdownlist: new Node(),
            props_autoLauncher: new Node(),
            props_btn_off: new Node(),
            props_btn_confirm: new Node()
          };
          this.selectedNode = void 0;
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
          this.events = {
            onSendBet: () => {}
          };
        }

        start() {
          this.getHour();
        }

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
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
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
                this.createFlyBg();
              }
            } else if (key === 'gameTypeInfo') {
              this.changeGameType(this.props.gameTypeInfo.viewGameType);
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

          this.propertyNode.props_main_bg1.active = isMainGame && this.bgIndex === 0;
          this.propertyNode.props_main_bg2.active = isMainGame && this.bgIndex === 1;
          this.propertyNode.props_main_bg3.active = isMainGame && this.bgIndex === 2; // this.propertyNode.props_main_slot_bg.active = isMainGame 

          this.propertyNode.props_main_slot_small_bg.active = isMainGame; // 子游戏要显示的界面

          this.propertyNode.props_mini_game_bg.active = !isMainGame;
          this.propertyNode.props_mini_slot_small_bg.active = !isMainGame;
          this.propertyNode.props_small_down.active = !isMainGame;
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
          // this.props_aiji_kaiguanmenOrigonPos = new Vec3();
          this.baseNodeOffectNode = new Vec3(-100, -200);
          this.propertyNode.props_bet_dropdownlist.active = false; // this.gateSk = this.propertyNode.props_aiji_kaiguanmen.getComponent(sp.Skeleton)
          // this.portraitSkLeft = this.propertyNode.props_skeletonLeft.getComponent(sp.Skeleton)
          // this.portraitSkRight = this.propertyNode.props_skeletonRight.getComponent(sp.Skeleton)

          this.updateKaiGuanMen();
        }

        updateKaiGuanMen() {// this.propertyNode.props_aiji_kaiguanmen.active = false;
          // this.propertyNode.props_aiji_zhuanquanding.active = false;
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
        /**转场动画 */


        createFlyBg() {
          //转场
          var flyBgNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FLY_BG).source); //动画转场背景

          this.node.addChild(flyBgNode);
          var titleSkeleton = flyBgNode.getChildByName("fly").getComponent(sp.Skeleton);

          if (this.node && this.node.isValid && this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.isChangeSmall = true;
          }

          this.scheduleOnce(() => {
            if (this.node && this.node.isValid && this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN) {
              if (this.bgIndex === 0) {
                this.propertyNode.props_main_bg1.active = true;
              } else if (this.bgIndex === 1) {
                this.propertyNode.props_main_bg2.active = true;
              } else if (this.bgIndex === 2) {
                this.propertyNode.props_main_bg3.active = true;
              }

              this.propertyNode.props_main_slot_small_bg.active = true;
              this.propertyNode.props_mini_game_bg.active = false;
              this.propertyNode.props_mini_slot_small_bg.active = false;
              this.propertyNode.props_small_down.active = false; // this.unscheduleAllCallbacks()

              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).rollerPanelViewModel.comp.rollerViewModelArr.forEach((v, index) => {
                v.comp.getWildListNode().active = false;
                v.comp.getWildListNode().removeAllChildren();
              }); // for (let i = 0; i < 5; i++) {
              // 	mainViewModel.rollerPanelViewModel.comp.rollerViewModelArr[i].comp.getWildListNode().active = false;
              // 	mainViewModel.rollerPanelViewModel.comp.rollerViewModelArr[i].comp.getWildListNode().removeAllChildren();
              // }
            } else {
              this.propertyNode.props_mini_game_bg.active = true;
              this.propertyNode.props_mini_slot_small_bg.active = true;
              this.propertyNode.props_small_down.active = true;
            }
          }, 1.5);
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', false, () => {
            flyBgNode && flyBgNode.destroy();
            this.node && this.node.isValid && this.subGameAnimationEndHandle(0); //切换游戏 初始化盈利
          }).playAnimation();
        }
        /**动画结束处理 */


        subGameAnimationEndHandle(type) {
          var gameTypeInfo = _extends({}, this.props.gameTypeInfo);

          gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
          gameTypeInfo.viewGameType = gameTypeInfo.currGameType;
          this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
            error: Error()
          }), changeGame) : changeGame)(gameTypeInfo));
          console.log("gameTypeInfo", gameTypeInfo, type); // 进入到小游戏1之后，把进入前的这一局的输赢设置为0

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

        getHour() {
          var currentTime = new Date();
          var currentHour = currentTime.getHours();
          console.log("index currentHour", currentHour);

          if (currentHour >= 6 && currentHour < 12) {
            this.bgIndex = 0; // 早上
          } else if (currentHour >= 12 && currentHour < 18) {
            this.bgIndex = 1; // 中午
          } else {
            this.bgIndex = 2; // 晚上
          }

          this.changeBg(this.bgIndex);
        }

        changeBg(index) {
          console.log("index", index); // let sprite = this.propertyNode.props_main_bg.getComponent(Sprite).spriteFrame;
          // if (index === 0) {
          // 	sprite = sourceManageSeletor().getFile(SpriteFramePathDefine.bg1).source;
          // } else if (index === 1) {
          // 	sprite = sourceManageSeletor().getFile(SpriteFramePathDefine.bg2).source;
          // } else if (index === 2) {
          // 	sprite = sourceManageSeletor().getFile(SpriteFramePathDefine.bg3).source;
          // }
          // console.log("index sprite",sprite);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eed3a46418b7d934806e52b27263d888347b39f3.js.map