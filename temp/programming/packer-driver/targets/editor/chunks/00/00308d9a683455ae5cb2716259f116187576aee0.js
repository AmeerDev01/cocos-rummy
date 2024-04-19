System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, sp, Animation, Sprite, Toggle, Vec3, BaseComponent, changeGame, setAutoLauncherInfo, setBetDropDownList, updateWinloss, AutoLauncherType, GameType, getAutoCount, isLimit, RollerStatus, updateRollerStatus, EffectType, getEffectByType, getNodeByNameDeep, omitStr, global, StepNumber, config, godWealthV2_Audio, mainViewModel, sourceManageSeletor, PrefabPathDefine, SkeletonAnimationPlayer, SoundPathDefine, _dec, _class, _crd, ccclass, property, GodWealthV2_Main;

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

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetEffectByType(extras) {
    _reporterNs.report("getEffectByType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgodWealthV2_Audio(extras) {
    _reporterNs.report("godWealthV2_Audio", "../index", _context.meta, extras);
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
      Animation = _cc.Animation;
      Sprite = _cc.Sprite;
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
      EffectType = _unresolved_6.EffectType;
      getEffectByType = _unresolved_6.getEffectByType;
    }, function (_unresolved_7) {
      getNodeByNameDeep = _unresolved_7.getNodeByNameDeep;
      omitStr = _unresolved_7.omitStr;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
    }, function (_unresolved_9) {
      StepNumber = _unresolved_9.default;
    }, function (_unresolved_10) {
      config = _unresolved_10.default;
    }, function (_unresolved_11) {
      godWealthV2_Audio = _unresolved_11.godWealthV2_Audio;
      mainViewModel = _unresolved_11.mainViewModel;
      sourceManageSeletor = _unresolved_11.sourceManageSeletor;
    }, function (_unresolved_12) {
      PrefabPathDefine = _unresolved_12.PrefabPathDefine;
    }, function (_unresolved_13) {
      SkeletonAnimationPlayer = _unresolved_13.default;
    }, function (_unresolved_14) {
      SoundPathDefine = _unresolved_14.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da345edBCFKB5vGR8SZYr1C", "GodWealthV2_Main", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'sp', 'Animation', 'Sprite', 'Toggle', 'UIOpacity', 'Vec3', 'AnimationState']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealthV2_Main", GodWealthV2_Main = (_dec = ccclass('GodWealthV2_Main'), _dec(_class = class GodWealthV2_Main extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.baseNodeOffectNode = void 0;

          /** 原始缩放大小 */
          this.baseNodeOrigonScale = new Vec3(1, 1, 1);

          /** 缩放大小 */
          this.baseNodeScale = new Vec3(3, 3, 3);
          this.majorNum = 0;
          this.miniNum = 0;
          this.isChecked = false;
          this.propertyNode = {
            props_main_bg: new Node(),
            props_mini_game_bg: new Node(),
            props_main_slot_bg: new Node(),
            props_Up_Feature: new Node(),
            props_buttomBar: new Node(),
            props_roller: new Node(),
            props_bet_dropdownlist: new Node(),
            props_autoLauncher: new Node(),
            props_jackpot_user_list: new Node(),
            props_jackpot_item: new Node(),
            props_jackpot_panel: new Node(),
            props_grand_number: new Label(),
            props_major_number: new Label(),
            props_mini_number: new Label(),
            props_God_tk_center: new Node(),
            props_btn_jackpot: new Node(),
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
          this.propertyNode.props_God_tk_center.on(Node.EventType.TOUCH_END, () => {
            (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
              error: Error()
            }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            this.propertyNode.props_jackpot_panel.active = !this.propertyNode.props_jackpot_panel.active;
          });
          this.propertyNode.props_btn_jackpot.on(Node.EventType.TOUCH_END, () => {
            (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
              error: Error()
            }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
            this.propertyNode.props_jackpot_panel.active = !this.propertyNode.props_jackpot_panel.active;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("isjackpot", this.propertyNode.props_btn_jackpot).active = !this.isChecked;
            this.isChecked = !this.isChecked;
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
            const autoLauncherType = this.selectedNode ? this.selectedNode.name : 't10'; // 默认T10

            const count = (_crd && getAutoCount === void 0 ? (_reportPossibleCrUseOfgetAutoCount({
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
            (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
              error: Error()
            }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BIU);
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
          const clickedToggle = event.target.getComponent(Toggle);

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
          if (this.node && this.node.isValid) {
            if (key === 'betDropDownlist') {// this.showOrHideBetDropDownlist(value.cur)
            } else if (key === 'subGameAnimationPlayInfo') {
              // console.log("subGameAnimationPlayInfo",value.cur);
              if (value.cur) {
                this.createFlyBg();
              }
            } else if (key === 'gameTypeInfo') {
              this.changeGameType(this.props.gameTypeInfo.viewGameType);
            } else if (key === "jackpotDatas") {
              if (value.cur) {
                this.propertyNode.props_jackpot_user_list.removeAllChildren();
                value.cur.forEach((item, index) => {
                  let userItem = instantiate(this.propertyNode.props_jackpot_item);
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).loadHeadSprite(item.avatarIndex, (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("head", userItem).getComponent(Sprite)); //加载头像

                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("gold_label", userItem).getComponent(Label).string = item.winningAmount.formatAmountWithCommas();
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("user_name", userItem).getComponent(Label).string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
                    error: Error()
                  }), omitStr) : omitStr)(item.nickName + "", 20);
                  this.propertyNode.props_jackpot_user_list.addChild(userItem);
                });
              }
            } else if (key === "positionId") {
              let startNumberGrand = parseInt(this.propertyNode.props_grand_number.string.replace(/,/g, ""));
              let startNumberMajor = parseInt(this.propertyNode.props_major_number.string.replace(/,/g, ""));
              let startNumberMini = parseInt(this.propertyNode.props_mini_number.string.replace(/,/g, ""));
              let betValueId = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).betSwitcher[0].amount[value.cur - 1].value;
              this.majorNum = 1500 * betValueId;
              this.miniNum = 750 * betValueId;

              if (value.cur <= 5) {
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(startNumberGrand, 15000 * betValueId, num => {
                  if (this.node && this.node.isValid) {
                    const value = Number(num.toFixed(0));
                    this.propertyNode.props_grand_number.string = value.formatAmountWithCommas();
                  }
                }).set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).normalRollOption.numberRollerTime).start();
              }

              new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                error: Error()
              }), StepNumber) : StepNumber)(startNumberMajor, 1500 * betValueId, num => {
                if (this.node && this.node.isValid) {
                  const value = Number(num.toFixed(0));
                  this.propertyNode.props_major_number.string = value.formatAmountWithCommas();
                }
              }).set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.numberRollerTime).start();
              new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                error: Error()
              }), StepNumber) : StepNumber)(startNumberMini, 750 * betValueId, num => {
                if (this.node && this.node.isValid) {
                  const value = Number(num.toFixed(0));
                  this.propertyNode.props_mini_number.string = value.formatAmountWithCommas();
                }
              }).set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.numberRollerTime).start();
            } else if (key === "jackpotTotalAmount") {
              if (this.props.positionId > 5) {
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  if (this.node && this.node.isValid) {
                    const value = Number(num.toFixed(0));
                    this.propertyNode.props_grand_number.string = value.formatAmountWithCommas();
                  }
                }).set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).normalRollOption.numberRollerTime).start();
              }
            }
          }
        }

        changeGameType(gameType) {
          const isMainGame = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
          const isSubGame2 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2; // 主游戏要显示的界面
          // this.propertyNode.props_skeletonRight.active = isMainGame;
          // this.propertyNode.props_skeletonLeft.active = isMainGame;

          this.propertyNode.props_main_bg.active = isMainGame; // this.propertyNode.props_main_slot_bg.active = isMainGame
          // 子游戏要显示的界面

          this.propertyNode.props_mini_game_bg.active = !isMainGame; // godWealthV2_Audio.stop();
          // if (isMainGame) {
          // 	godWealthV2_Audio.play(SoundPathDefine.MAIN_BG, true)
          // } else if (isSubGame2) {
          // 	godWealthV2_Audio.play(SoundPathDefine.GAME2_BG, true)
          // } else {
          // 	godWealthV2_Audio.play(SoundPathDefine.GAME1_BG, true)
          // }
        }

        showOrHideBetDropDownlist(status) {
          const pos = this.propertyNode.props_autoLauncher.position;

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

        show() {
          this.propertyNode.props_bet_dropdownlist.active = true;
          (_crd && getEffectByType === void 0 ? (_reportPossibleCrUseOfgetEffectByType({
            error: Error()
          }), getEffectByType) : getEffectByType)((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).EFFECT1)(this.propertyNode.props_bet_dropdownlist).enter().then(() => {});
        }

        hide() {
          (_crd && getEffectByType === void 0 ? (_reportPossibleCrUseOfgetEffectByType({
            error: Error()
          }), getEffectByType) : getEffectByType)((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).EFFECT1)(this.propertyNode.props_bet_dropdownlist).out(false).then(() => {
            this.propertyNode.props_bet_dropdownlist.active = false;
          });
        }

        bindUI() {
          this.baseNodeOffectNode = new Vec3(-100, -200);
          this.propertyNode.props_bet_dropdownlist.active = false;
        }
        /**转场动画 */


        createFlyBg() {
          //转场
          let flyBgNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FLY_BG).source); //动画转场背景

          this.node.addChild(flyBgNode);
          const titleSkeleton = flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton);
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', false, () => {
            flyBgNode && flyBgNode.destroy();
            this.node && this.node.isValid && this.subGameAnimationEndHandle(0); //   console.log("this.props.gameTypeInfo",this.props.gameTypeInfo);

            if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(0));
            } //切换游戏 初始化盈利

          }).playAnimation();
        }
        /**切换大门动画 */


        changeGateAnimation() {// this.propertyNode.props_aiji_kaiguanmen.active = true;
          // if (this.props.subGameAnimationPlayInfo.param === 0) {
          // 	this.gateSk.setAnimation(0, 'shimen_kaimen', true)
          // } else {
          // }
        }
        /**动画结束处理 */


        subGameAnimationEndHandle(type) {
          const gameTypeInfo = { ...this.props.gameTypeInfo
          };
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

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=00308d9a683455ae5cb2716259f116187576aee0.js.map