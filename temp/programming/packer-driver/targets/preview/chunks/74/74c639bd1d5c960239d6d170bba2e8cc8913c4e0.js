System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Button, instantiate, Label, Node, ScrollView, sp, Sprite, Tween, tween, UIOpacity, UITransform, Vec3, BaseComponent, changeGame, updateFreeGameOdds, updateGameMode, updateGold, updateSubGameWinloss, updateWinloss, calBetAmount, GameModeType, GameType, RollerStatus, updateRollerStatus, thorv2_Audio, mainViewModel, sourceManageSeletor, SoundPathDefine, StepNumber, config, cacheData, _dec, _class, _crd, ccclass, property, ThorV2_Main;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGame(extras) {
    _reporterNs.report("changeGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateFreeGameOdds(extras) {
    _reporterNs.report("updateFreeGameOdds", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateGameMode(extras) {
    _reporterNs.report("updateGameMode", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateGold(extras) {
    _reporterNs.report("updateGold", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameWinloss(extras) {
    _reporterNs.report("updateSubGameWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinloss(extras) {
    _reporterNs.report("updateWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcalBetAmount(extras) {
    _reporterNs.report("calBetAmount", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackpotData(extras) {
    _reporterNs.report("JackpotData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayAnimationData(extras) {
    _reporterNs.report("PlayAnimationData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("SubGameAnimationPlayInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinIconData(extras) {
    _reporterNs.report("WinIconData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateRollerStatus(extras) {
    _reporterNs.report("updateRollerStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
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
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      changeGame = _unresolved_3.changeGame;
      updateFreeGameOdds = _unresolved_3.updateFreeGameOdds;
      updateGameMode = _unresolved_3.updateGameMode;
      updateGold = _unresolved_3.updateGold;
      updateSubGameWinloss = _unresolved_3.updateSubGameWinloss;
      updateWinloss = _unresolved_3.updateWinloss;
    }, function (_unresolved_4) {
      calBetAmount = _unresolved_4.calBetAmount;
      GameModeType = _unresolved_4.GameModeType;
      GameType = _unresolved_4.GameType;
      RollerStatus = _unresolved_4.RollerStatus;
    }, function (_unresolved_5) {
      updateRollerStatus = _unresolved_5.updateRollerStatus;
    }, function (_unresolved_6) {
      thorv2_Audio = _unresolved_6.thorv2_Audio;
      mainViewModel = _unresolved_6.mainViewModel;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      StepNumber = _unresolved_8.default;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
    }, function (_unresolved_10) {
      cacheData = _unresolved_10.cacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4826fSDrBG+pmLTi04fcoj", "ThorV2_Main", undefined);

      __checkObsolete__(['_decorator', 'animation', 'Animation', 'AnimationState', 'Button', 'Graphics', 'instantiate', 'Label', 'Mask', 'Node', 'ScrollView', 'sp', 'Sprite', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_Main", ThorV2_Main = (_dec = ccclass('ThorV2_Main'), _dec(_class = class ThorV2_Main extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.props_thorSk = void 0;
          this.props_shandianSk = void 0;

          /**转场动画 */
          this.props_transitionSk = void 0;
          this.contentItemInitHeight = 0;
          this.winBoxAnimation = void 0;
          this.kaiguanNodeOriginPos = void 0;
          this.kaiguanNodeMovePos = void 0;
          this.propsLabelRateOriginPos = void 0;

          /**播放输赢金额动画的回调 */
          this.props_label_gold_animation = void 0;
          this.props_label_rate_animation = void 0;
          this.winOdds = 0;

          /**是否累加倍率动画结束 */
          this.isAddRateAnimationEnd = void 0;
          this.propertyNode = {
            props_action_bar: new Node(),
            props_top: new Node(),
            props_main_panel: new Node(),
            props_smallGame_panel: new Node(),
            props_spr_MainRoller_list: new Node(),
            props_content: new Node(),
            props_item: new Node(),
            props_ScrollView_note: new Node(),
            props_thor: new Node(),
            props_shandian: new Node(),
            props_spr_tools_rate: new Node(),
            props_btn_rate: new Node(),
            props_btn_olpn_kaiguan: new Node(),
            props_spr_tools_beli: new Node(),
            props_spr_win_box: new Node(),

            /**转场闪电动画 */
            props_sklekton_lightning: new Node(),
            props_label_beil: new Label(),
            props_label_rateNum: new Label(),
            props_label_rate: new Label(),
            props_label_gold: new Label(),

            /**小游戏左边显示的倍率 */
            props_label_rate_small: new Label(),

            /**免费游戏次数 */
            props_label_sg_num: new Label()
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
            autoLauncherInfo: null,
            winIconDataItem: null,
            rollerStatus: (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END,
            playThorAnimation: null,
            playWinOddsAnimation: null,
            winloss: 0,
            subGameWinloss: 0,
            betAmount: 0,
            gameModeType: (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
              error: Error()
            }), GameModeType) : GameModeType).normal,
            freeGameOdds: 0
          };
          this.events = {
            onSendBet: () => {},
            onOpenBuyMiniPanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        getActionBarNode() {
          return this.propertyNode.props_action_bar;
        }

        getTopNode() {
          return this.propertyNode.props_top;
        }

        bindEvent() {
          this.props_thorSk.setCompleteListener(e => {
            if (e.animation.name === 'anima_1') {
              this.props_thorSk.setAnimation(0, 'anima_3', false);
              this.props_shandianSk.node.active = true;
              this.props_shandianSk.setAnimation(0, 'animation', false);
            }
          });
          this.props_shandianSk.setCompleteListener(e => {
            this.props_shandianSk.node.active = false;
            this.props_shandianSk.clearTracks();
          });
          this.props_transitionSk.setCompleteListener(e => {
            this.props_transitionSk.node.active = false;
            this.props_transitionSk.clearTracks();
            this.subGameAnimationEndHandle(0);
          });
          this.winBoxAnimation.on(Animation.EventType.FINISHED, () => {
            this.propertyNode.props_label_rate.string = '';
            this.propertyNode.props_label_rate.node.getComponent(UIOpacity).opacity = 255;

            if (this.props.playWinOddsAnimation.params.length > 2) {
              var done = this.props.playWinOddsAnimation.params[2];
              done && done();
            }
          });
          this.propertyNode.props_btn_rate.on(Button.EventType.CLICK, () => {
            var gameModeType = this.props.gameModeType === (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
              error: Error()
            }), GameModeType) : GameModeType).normal ? (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
              error: Error()
            }), GameModeType) : GameModeType).buyToWin : (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
              error: Error()
            }), GameModeType) : GameModeType).normal;

            if (gameModeType === (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
              error: Error()
            }), GameModeType) : GameModeType).buyToWin) {
              (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                error: Error()
              }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BUY_RATE_BTN_CLICK);
            }

            this.dispatch((_crd && updateGameMode === void 0 ? (_reportPossibleCrUseOfupdateGameMode({
              error: Error()
            }), updateGameMode) : updateGameMode)(gameModeType));
          });
          this.propertyNode.props_spr_tools_beli.on(Button.EventType.CLICK, () => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUY_FREE_BTN);
            this.events.onOpenBuyMiniPanel();
          });
          this.props_label_rate_animation.on(Animation.EventType.FINISHED, () => {
            if (this.isAddRateAnimationEnd) {
              this.isAddRateAnimationEnd = false;
              this.winBoxAnimation.play();
            }
          });
          this.props_label_gold_animation.on(Animation.EventType.FINISHED, () => {
            if (this.winOdds > 0) {
              this.propertyNode.props_label_rate.string = this.winOdds + 'X';
              this.props_label_rate_animation.play();
              this.winOdds = 0;
            } else if (this.props.playWinOddsAnimation) {
              var odds = this.props.playWinOddsAnimation.params[0];
              var type = this.props.playWinOddsAnimation.params[1];
              this.propertyNode.props_label_rate.string = odds + 'X';

              if (type === 0) {
                this.winBoxAnimation.play();
              }
            }
          });
        }
        /**更新结束状态 */


        updateEndStatus(isUpdateGold) {
          if (isUpdateGold === void 0) {
            isUpdateGold = true;
          }

          if ((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult) {
            var si = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0];

            if (si.balanceAfterSettlement > this.props.gold && isUpdateGold) {
              this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                error: Error()
              }), updateGold) : updateGold)(si.balanceAfterSettlement));
              this.scheduleOnce(() => {
                this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                  error: Error()
                }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                  error: Error()
                }), RollerStatus) : RollerStatus).END));
              }, 0.5);
            } else {
              this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                error: Error()
              }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                error: Error()
              }), RollerStatus) : RollerStatus).END));
            }
          } else {
            this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
              error: Error()
            }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END));
          }
        }

        getRollerPanel() {
          return this.propertyNode.props_spr_MainRoller_list;
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === 'subGameAnimationPlayInfo') {
              if (value.cur) {
                this.playSubGameAnimation();
              }
            } else if (key === 'gameTypeInfo') {
              this.changeGameType(this.props.gameTypeInfo.viewGameType);
            } else if (key === 'rollerStatus') {
              if (this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                error: Error()
              }), RollerStatus) : RollerStatus).RUNNING) {
                this.removeWinIconItem();
              }

              this.changeRollerStatusHandle();
            } else if (key === 'winIconDataItem') {
              this.addWinIconItem();
            } else if (key === 'playThorAnimation') {
              this.playThorAnimation();
            } else if (key === 'playWinOddsAnimation') {
              this.playAddOddsAnimation();
            } else if (key === 'winloss') {
              this.updateWinloss(value);
            } else if (key === 'gameModeType') {
              this.updateGameModeType(value);
            } else if (key === 'freeGameOdds') {
              this.updateFreeGameOddsLabel();
            } else if (key === '_setDone') {
              this.updateFreeAmount();
            }
          }
        }

        changeGameType(gameType) {
          var isMainGame = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN; // 主游戏要显示的界面

          this.propertyNode.props_main_panel.active = isMainGame; // 子游戏要显示的界面

          this.propertyNode.props_smallGame_panel.active = !isMainGame;

          if (!isMainGame) {
            this.propertyNode.props_label_sg_num.string = this.props.gameTypeInfo.leftCount + '';
          }

          if (this.isChangeGame()) {
            if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                error: Error()
              }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).FREE_TRANS);
            } else {
              (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                error: Error()
              }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).FREE_MANY);
            }
          }
        }
        /**是否准备切换游戏 */


        isChangeGame() {
          return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
        }

        bindUI() {
          this.props_thorSk = this.propertyNode.props_thor.getComponent(sp.Skeleton);
          this.props_shandianSk = this.propertyNode.props_shandian.getComponent(sp.Skeleton);
          this.propertyNode.props_sklekton_lightning.active = false;
          this.props_transitionSk = this.propertyNode.props_sklekton_lightning.getComponent(sp.Skeleton);
          this.contentItemInitHeight = this.propertyNode.props_content.getComponent(UITransform).height;
          this.winBoxAnimation = this.propertyNode.props_spr_win_box.getComponent(Animation);
          this.propertyNode.props_spr_win_box.getComponent(UIOpacity).opacity = 0;
          this.kaiguanNodeOriginPos = this.propertyNode.props_btn_olpn_kaiguan.position.clone();
          this.kaiguanNodeMovePos = new Vec3(20, 0);
          this.propsLabelRateOriginPos = this.propertyNode.props_label_rate.node.worldPosition.clone();
          this.props_label_gold_animation = this.propertyNode.props_label_gold.getComponent(Animation);
          this.props_label_rate_animation = this.propertyNode.props_label_rate.getComponent(Animation);
          this.propertyNode.props_label_rate.string = '';
          this.updateFreeGameOddsLabel();
        }

        isSubGame(gameType) {
          return gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1 || gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
        }

        isMainGame() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
        }

        isNextMainGame() {
          return this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
        }

        playSubGameAnimation() {
          this.props_transitionSk.node.active = true;
          this.props_transitionSk.setAnimation(0, "animation", false);
          this.scheduleOnce(() => {
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
              this.dispatch((_crd && updateSubGameWinloss === void 0 ? (_reportPossibleCrUseOfupdateSubGameWinloss({
                error: Error()
              }), updateSubGameWinloss) : updateSubGameWinloss)(0));
            }
          }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).changeGameTypeTime);
        }
        /**动画结束处理 */


        subGameAnimationEndHandle(type) {
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).playBgMusic();
          this.dispatch((_crd && updateFreeGameOdds === void 0 ? (_reportPossibleCrUseOfupdateFreeGameOdds({
            error: Error()
          }), updateFreeGameOdds) : updateFreeGameOdds)(0)); // console.log("subGameAnimationEndHandle ==========================");

          this.updateEndStatus();
        }

        addWinIconItem() {
          if (!this.props.winIconDataItem) {
            return;
          }

          var contentTransform = this.propertyNode.props_content.getComponent(UITransform);
          var item = instantiate(this.propertyNode.props_item);
          item.active = true;
          item.getChildByName("props_label_num").getComponent(Label).string = this.props.winIconDataItem.count + '';
          item.getChildByName("props_label_glod").getComponent(Label).string = this.props.winIconDataItem.amount.formatAmountWithCommas();
          var itemHeight = item.getComponent(UITransform).height;
          item.setPosition(new Vec3(0, this.contentItemInitHeight + itemHeight));
          var iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).icon.find(v => v.id === this.props.winIconDataItem.itemId);

          if (iconConfig.smallName) {
            var spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(iconConfig.smallName).source;
            item.getChildByName("props_spr_icon").getComponent(Sprite).spriteFrame = spriteFrame;
          }

          var index = this.propertyNode.props_content.children.length;
          this.propertyNode.props_content.addChild(item);
          var contentHeight = (index + 1) * item.getComponent(UITransform).height;
          contentTransform.height = this.contentItemInitHeight < contentHeight ? contentHeight : this.contentItemInitHeight;
          var endPos = this.getItemEndPos(index);
          tween(item).to(0.5, {
            position: endPos
          }).call(() => {
            this.propertyNode.props_ScrollView_note.getComponent(ScrollView).scrollToTop(0.1, false);
          }).start();
        }

        getItemEndPos(index) {
          var height = this.propertyNode.props_item.getComponent(UITransform).height;
          var y = index * height + height / 2;
          return new Vec3(0, y);
        }

        removeWinIconItem() {
          var height = this.propertyNode.props_content.parent.getComponent(UITransform).height;
          this.propertyNode.props_content.children.forEach(v => {
            tween(v).by(0.2, {
              position: new Vec3(0, -height)
            }).call(() => {
              v.destroy();
            }).start();
          });
        }

        playThorAnimation() {
          if (!this.props.playThorAnimation) {
            return;
          }

          this.props_thorSk.timeScale = this.props.playThorAnimation.timeScale;
          this.props_thorSk.getComponent(sp.Skeleton).setAnimation(0, 'anima_1', false);
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).THOR_SMILES);
        }

        updateWinloss(value, done) {
          if (done === void 0) {
            done = undefined;
          }

          this.showOrHideNode(this.propertyNode.props_spr_win_box, value.cur > 0);

          if (value.cur > 0) {
            new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
              error: Error()
            }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
              if (this.node && this.node.isValid) {
                // const numStr = num > 10000 ? Number(num.toFixed(0)).formatAmountWithLetter() : Number(num.toFixed(0)).formatAmountWithCommas();
                this.propertyNode.props_label_gold.string = Number(num.toFixed(0)).formatAmountWithCommas();
              }
            }, () => {
              if (this.node && this.node.isValid) {
                done && done();
              }
            }).set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.numberRollerTime).start();
          }
        }

        showOrHideNode(nodePanel, isShow, hideOp) {
          if (hideOp === void 0) {
            hideOp = 0;
          }

          var opacity = nodePanel.getComponent(UIOpacity);

          if (isShow && opacity.opacity === 255) {
            return;
          }

          if (!isShow && opacity.opacity === hideOp) {
            return;
          }

          tween(opacity).to(0.2, {
            opacity: isShow ? 255 : hideOp
          }).start();
        }

        playAddOddsAnimation() {
          if (!this.props.playWinOddsAnimation) {
            return;
          }

          if (this.propertyNode.props_label_rate.string === '') {
            this.props_label_gold_animation.play("animation_win_gold");
          }
        }

        updateFreeAmount() {
          this.propertyNode.props_label_beil.string = Number(this.getBuyMiniGameAmount()).formatAmountWithCommas();
          var betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.betAmount, this.props.positionId);
          this.propertyNode.props_label_rateNum.string = Number(betAmount).formatAmountWithCommas();
        }

        updateBtnStatus() {
          this.props;
        }

        getBuyMiniGameAmount() {
          return (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betAmount, this.props.positionId) * 100;
        }

        updateGameModeType(value) {
          var kaiguanNode = this.propertyNode.props_btn_olpn_kaiguan;
          var isWin = value.cur === (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
            error: Error()
          }), GameModeType) : GameModeType).buyToWin;
          kaiguanNode.getChildByName("icon_kaiguan_duihao").active = isWin;
          kaiguanNode.getChildByName("icon_kaiguan_jiantou").active = !isWin;
          Tween.stopAllByTarget(kaiguanNode);

          if (isWin) {
            tween(kaiguanNode).to(0.2, {
              position: this.kaiguanNodeMovePos
            }).start();
          } else {
            tween(kaiguanNode).to(0.2, {
              position: this.kaiguanNodeOriginPos
            }).start();
          }

          this.disableBtnBuyMini(isWin);
        }

        changeRollerStatusHandle() {
          var disable = this.props.rollerStatus !== (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END;
          var isDisableBuyMini = disable || this.props.gameModeType === (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
            error: Error()
          }), GameModeType) : GameModeType).buyToWin;
          this.disableBtnBuyMini(isDisableBuyMini);
          this.disableBtnDouble(disable);
        }
        /**禁用购买小游戏按钮 */


        disableBtnBuyMini(value) {
          this.disableBtn(this.propertyNode.props_spr_tools_beli, value);
        }
        /**禁用翻倍道具 */


        disableBtnDouble(value) {
          var btnRate = this.propertyNode.props_btn_rate;
          btnRate.getComponent(Button).enabled = !value;
          Tween.stopAllByTarget(btnRate.getComponent(UIOpacity));
          this.showOrHideNode(this.propertyNode.props_spr_tools_rate, !value, 100);
        }

        disableBtn(btnNode, value) {
          btnNode.getComponent(Button).enabled = !value;
          Tween.stopAllByTarget(btnNode.getComponent(UIOpacity));
          this.showOrHideNode(btnNode, !value, 100);
        }

        updateFreeGameOddsLabel() {
          var str = this.props.freeGameOdds === 0 ? '' : this.props.freeGameOdds + 'X';
          this.propertyNode.props_label_rate_small.string = str;

          if (this.props.freeGameOdds > 0) {
            this.propertyNode.props_label_rate_small.getComponent(Animation).play();
          }
        }
        /**飞免费游戏的倍率 */


        flyFreeGameTotalOdds(done) {
          if (this.isMainGame() || this.props.freeGameOdds === 0) {
            done && done(false);
            return;
          }

          var labelRateTemp = instantiate(this.propertyNode.props_label_rate_small.node);
          this.node.addChild(labelRateTemp);
          labelRateTemp.setWorldPosition(this.propertyNode.props_label_rate_small.node.worldPosition);
          var delayTime = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.delayTime;
          var lessenTime = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.lessenTime;
          var lessenScale = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.lessenScale;
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).WILDMULTIPLIER);
          tween(labelRateTemp).delay(delayTime * 1.5).to(lessenTime, {
            worldPosition: this.getWinOddsPosition(),
            scale: new Vec3(lessenScale, lessenScale)
          }).call(() => {
            labelRateTemp.destroy();
            done && done(true);
            this.playWinlossAnimation(this.props.freeGameOdds, false);
          }).start();
        }
        /**播放输赢动画 */


        playWinlossAnimation(odds, isEnd) {
          if (this.propertyNode.props_label_rate.string === '') {
            this.winOdds = odds;
            this.props_label_gold_animation.play();
            return;
          }

          var totalOdds = this.getOddsLabelValue(this.propertyNode.props_label_rate.node) + odds;
          this.isAddRateAnimationEnd = isEnd;
          this.propertyNode.props_label_rate.string = totalOdds + 'X';
          this.props_label_rate_animation.play();
        }

        getOddsLabelValue(labelNode) {
          var oddsLabel = labelNode.getComponent(Label).string;
          var odds = parseInt(oddsLabel.toUpperCase().replace("X", ""));
          return odds;
        }
        /**获得赢的倍率的世界坐标 */


        getWinOddsPosition() {
          return this.propsLabelRateOriginPos;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74c639bd1d5c960239d6d170bba2e8cc8913c4e0.js.map