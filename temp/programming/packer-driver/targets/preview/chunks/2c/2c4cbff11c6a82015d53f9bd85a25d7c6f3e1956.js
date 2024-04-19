System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, sp, Sprite, Toggle, Animation, BaseComponent, changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss, AutoLauncherType, GameType, getAutoCount, isLimit, RollerStatus, updateRollerStatus, getNodeByNameDeep, global, Dragonv2_Audio, mainViewModel, sourceManageSeletor, PrefabPathDefine, SkeletonAnimationPlayer, SoundPathDefine, _dec, _class, _crd, ccclass, property, Dragon_Main;

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

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonv2_Audio(extras) {
    _reporterNs.report("Dragonv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../../../utils/SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
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
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      Animation = _cc.Animation;
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
      getNodeByNameDeep = _unresolved_6.getNodeByNameDeep;
    }, function (_unresolved_7) {
      global = _unresolved_7.global;
    }, function (_unresolved_8) {
      Dragonv2_Audio = _unresolved_8.Dragonv2_Audio;
      mainViewModel = _unresolved_8.mainViewModel;
      sourceManageSeletor = _unresolved_8.sourceManageSeletor;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }, function (_unresolved_10) {
      SkeletonAnimationPlayer = _unresolved_10.default;
    }, function (_unresolved_11) {
      SoundPathDefine = _unresolved_11.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e59181mkO9KmY0ic4X5I83B", "Dragon_Main", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'sp', 'Sprite', 'Toggle', 'Animation', 'UIOpacity', 'Vec3', 'AnimationState']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Dragon_Main", Dragon_Main = (_dec = ccclass('Dragon_Main'), _dec(_class = class Dragon_Main extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_main_bg: new Node(),
            props_mini_game_bg: new Node(),
            props_slot_bg: new Node(),
            props_Up_Feature: new Node(),
            props_buttomBar: new Node(),
            props_top_value: new Node(),
            props_roller: new Node(),
            props_bet_dropdownlist: new Node(),
            props_autoLauncher: new Node(),
            props_jackpot_panel: new Node(),
            props_jackpot_user_list: new Node(),
            props_jackpot_item: new Node(),
            props_dragon_state: new Node(),
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
            autoLauncherInfo: null,
            theDragonSpitsFire: {}
          };
          this.events = {
            onSendBet: () => {},
            renderTheRingOfFire: key => {}
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

        get_top_value() {
          return this.propertyNode.props_top_value;
        }

        initState() {
          return {};
        }
        /* 排行榜开关 */


        toggleCallback(e) {
          this.node.getChildByName('props_jackpot_panel').getChildByName('Board_ScrollView').active = !e.isChecked;
        }

        bindEvent() {
          console.log(this.propertyNode.props_autoLauncher); // this.propertyNode.props_autoLauncher.getComponent(Animation).on(Animation.EventType.FINISHED, (e, state: AnimationState) => {
          // 	if (state.name === 'animation_autoLauncher_down') {
          // 		this.propertyNode.props_bet_dropdownlist.active = false;
          // 	}
          // });

          this.propertyNode.props_bet_dropdownlist.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && setBetDropDownList === void 0 ? (_reportPossibleCrUseOfsetBetDropDownList({
              error: Error()
            }), setBetDropDownList) : setBetDropDownList)(false));
          });
          this.node.getChildByName('props_jackpot_panel').getChildByName('props_jackpot_grand').on(Node.EventType.TOUCH_END, () => {
            this.node.getChildByName('props_jackpot_panel').getChildByName('Board_ScrollView').active = !this.node.getChildByName('props_jackpot_panel').getChildByName('Board_ScrollView').active;
          });
          this.node.getChildByName('props_jackpot_panel').getChildByName('Toggle_triangle').getComponent(Toggle).node.on('toggle', this.toggleCallback, this);
          this.propertyNode.props_jackpot_user_list.on(Node.EventType.TOUCH_END, () => {
            var jackpot_user_list = this.node.getChildByName('props_jackpot_panel');
            jackpot_user_list.getChildByName('Board_ScrollView').active = false;
            jackpot_user_list.getChildByName('Toggle_triangle').getComponent(Toggle).isChecked = true;
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
            (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
              error: Error()
            }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).biu);
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
          if (key === 'betDropDownlist') {// this.showOrHideBetDropDownlist(value.cur)
          } else if (key === 'subGameAnimationPlayInfo') {
            if (value.cur) {
              this.playSubGameAnimation();
            }
          } else if (key === 'gameTypeInfo') {
            this.changeGameType(this.props.gameTypeInfo.viewGameType);
          } else if (key === 'jackpotDatas') {
            this.updateJackpotContent();
          }

          if (key === 'theDragonSpitsFire') {
            this.events.renderTheRingOfFire(value.cur);
          }
        }

        playSubGameAnimation() {
          var flyBgNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FLY_BG).source); //动画转场背景

          this.node.addChild(flyBgNode);
          var titleSkeleton = flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton);
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).voice);
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', false, () => {
            flyBgNode && flyBgNode.destroy();
            this.node && this.node.isValid && this.subGameAnimationEndHandle(0);
            console.log("this.props.gameTypeInfo", this.props.gameTypeInfo);

            if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(0));
            } else if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {// let amount = cacheData.rollerLaunchResult.dl.si[0].freeGameAmount
              // this.dispatch(updateWinloss(amount))  
            } //切换游戏 初始化盈利

          }).playAnimation();
        }

        changeGameType(gameType) {
          var isMainGame = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
          var isSubGame2 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2; // 主游戏要显示的界面

          this.propertyNode.props_main_bg.active = !isSubGame2;
          this.propertyNode.props_slot_bg.getChildByName('mian_Bg').active = !isSubGame2;
          this.propertyNode.props_slot_bg.getChildByName('mian_Bg').active = !isSubGame2;
          this.propertyNode.props_dragon_state.getChildByName('Dragon_Tail').active = !isSubGame2; // 子游戏要显示的界面

          this.propertyNode.props_mini_game_bg.active = isSubGame2;
          this.propertyNode.props_slot_bg.getChildByName('mini_Bg').active = isSubGame2;
          this.propertyNode.props_dragon_state.getChildByName('Left_dragon').active = isSubGame2; // egyptv2_Audio.stop();
          // if (isMainGame) {
          // 	egyptv2_Audio.play(SoundPathDefine.bgMain, true)
          // } else if (isSubGame2) {
          // 	egyptv2_Audio.play(SoundPathDefine.bgMusic, true)
          // } else {
          // 	egyptv2_Audio.play(SoundPathDefine.bgFree, true)
          // }
        }

        theDragonSpitsFire(callBack) {
          //龙播放动画
          this.propertyNode.props_dragon_state.getChildByName('Ringht_dragon').active = false;
          this.propertyNode.props_dragon_state.getChildByName('RinghtAnger_dragon').active = true;
          var RinghtAnger_dragon = this.propertyNode.props_dragon_state.getChildByName('RinghtAnger_dragon').getComponent(sp.Skeleton);
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(RinghtAnger_dragon, 'animation', false, () => {
            this.propertyNode.props_dragon_state.getChildByName('Ringht_dragon').active = true;
            this.propertyNode.props_dragon_state.getChildByName('RinghtAnger_dragon').active = false;
            callBack();
          }).playAnimation();
        }

        showOrHideBetDropDownlist(status) {
          var pos = this.propertyNode.props_autoLauncher.position;

          if (status) {
            this.propertyNode.props_bet_dropdownlist.active = true;
            this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_up");
          } else {
            this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_down");
          }
        }

        bindUI() {
          // this.props_aiji_kaiguanmenOrigonPos = this.propertyNode.props_aiji_kaiguanmen.position.clone();
          // this.props_aiji_kaiguanmenOrigonPos = new Vec3();
          // this.baseNodeOffectNode = new Vec3(-100, -200);
          this.propertyNode.props_bet_dropdownlist.active = false;
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
        /**切换大门动画 */


        changeGateAnimation() {
          this.subGameAnimationEndHandle(0);
        }
        /**动画结束处理 */


        subGameAnimationEndHandle(type) {
          var gameTypeInfo = _extends({}, this.props.gameTypeInfo);

          gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
          gameTypeInfo.viewGameType = gameTypeInfo.currGameType; // gameTypeInfo.viewGameType = GameType.SUBGAME1;
          // gameTypeInfo.currGameType = GameType.SUBGAME1;
          // gameTypeInfo.leftCount = 10;

          this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
            error: Error()
          }), changeGame) : changeGame)(gameTypeInfo)); // 开门动画结束，准备切换到小游戏后，结束游戏

          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).playBgMusic();

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
                var item = this.buildJackpotItem(v); // item.setPosition(new Vec3());
                // // if (children.length > 0) {
                // // 	item.setPosition(children[children.length - 1].position.clone().add(new Vec3(0, -60, 0)));
                // // }

                this.propertyNode.props_jackpot_user_list.addChild(item);
              }
            });
          }
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

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c4cbff11c6a82015d53f9bd85a25d7c6f3e1956.js.map