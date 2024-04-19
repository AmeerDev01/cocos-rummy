System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, sp, Sprite, Toggle, tween, UITransform, Vec3, Animation, SpriteFrame, bezier, game, Game, BaseComponent, SKT_MAG_TYPE, sktInstance, sktMsgListener, formatNumber, getNodeByNameDeep, getNodePositionInCanvas, getUUID, initToggle, omitStr, SpriteFramePathDefine, PrefabPathDefine, sourceManageSeletor, bundleDragonTiger, bundleCommon, mainGameViewModel, dragonTiger_Audio, playGetCoin, changeSelectChipAction, setMemberBetAction, winViewModel, loseViewModel, historyViewModel, usersViewModel, onlineViewModel, bundlePkgName, playBtnClick, playChip, playDefeat, playDragonCard, playGame, playTigerCard, playTimeout, playTurnCard, playWin, global, lang, ToastPosition, addToastAction, FontPathDefine, ChipViewModel, config, initBetData, BetType, gameCacheData, changeGoldDataAction, TaskScheduler, Task, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, timer, hisTime, gameTime, DragonTiger_MainPanel;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePositionInCanvas(extras) {
    _reporterNs.report("getNodePositionInCanvas", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetUUID(extras) {
    _reporterNs.report("getUUID", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleDragonTiger(extras) {
    _reporterNs.report("bundleDragonTiger", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleCommon(extras) {
    _reporterNs.report("bundleCommon", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdragonTiger_Audio(extras) {
    _reporterNs.report("dragonTiger_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGetCoin(extras) {
    _reporterNs.report("playGetCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeSelectChipAction(extras) {
    _reporterNs.report("changeSelectChipAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberBetAction(extras) {
    _reporterNs.report("setMemberBetAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwinViewModel(extras) {
    _reporterNs.report("winViewModel", "../ViewModel/DragonTigerMainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloseViewModel(extras) {
    _reporterNs.report("loseViewModel", "../ViewModel/DragonTigerMainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhistoryViewModel(extras) {
    _reporterNs.report("historyViewModel", "../ViewModel/DragonTigerMainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfusersViewModel(extras) {
    _reporterNs.report("usersViewModel", "../ViewModel/DragonTigerMainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonlineViewModel(extras) {
    _reporterNs.report("onlineViewModel", "../ViewModel/DragonTigerMainViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundlePkgName(extras) {
    _reporterNs.report("bundlePkgName", "../sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayChip(extras) {
    _reporterNs.report("playChip", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayDefeat(extras) {
    _reporterNs.report("playDefeat", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayDragonCard(extras) {
    _reporterNs.report("playDragonCard", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGame(extras) {
    _reporterNs.report("playGame", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTigerCard(extras) {
    _reporterNs.report("playTigerCard", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTimeout(extras) {
    _reporterNs.report("playTimeout", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTurnCard(extras) {
    _reporterNs.report("playTurnCard", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayWin(extras) {
    _reporterNs.report("playWin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastPosition(extras) {
    _reporterNs.report("ToastPosition", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFontPathDefine(extras) {
    _reporterNs.report("FontPathDefine", "../sourceDefine/fontDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChipViewModel(extras) {
    _reporterNs.report("ChipViewModel", "../ViewModel/DragonTigerChipViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetInfo(extras) {
    _reporterNs.report("BetInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonTigerCard(extras) {
    _reporterNs.report("DragonTigerCard", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRepeatBet(extras) {
    _reporterNs.report("RepeatBet", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendBet(extras) {
    _reporterNs.report("SendBet", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldDataAction(extras) {
    _reporterNs.report("changeGoldDataAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  _export({
    timer: void 0,
    hisTime: void 0,
    gameTime: void 0
  });

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
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      SpriteFrame = _cc.SpriteFrame;
      bezier = _cc.bezier;
      game = _cc.game;
      Game = _cc.Game;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      formatNumber = _unresolved_4.formatNumber;
      getNodeByNameDeep = _unresolved_4.getNodeByNameDeep;
      getNodePositionInCanvas = _unresolved_4.getNodePositionInCanvas;
      getUUID = _unresolved_4.getUUID;
      initToggle = _unresolved_4.initToggle;
      omitStr = _unresolved_4.omitStr;
    }, function (_unresolved_5) {
      SpriteFramePathDefine = _unresolved_5.SpriteFramePathDefine;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      sourceManageSeletor = _unresolved_7.sourceManageSeletor;
      bundleDragonTiger = _unresolved_7.bundleDragonTiger;
      bundleCommon = _unresolved_7.bundleCommon;
      mainGameViewModel = _unresolved_7.mainGameViewModel;
      dragonTiger_Audio = _unresolved_7.dragonTiger_Audio;
      playGetCoin = _unresolved_7.playGetCoin;
    }, function (_unresolved_8) {
      changeSelectChipAction = _unresolved_8.changeSelectChipAction;
      setMemberBetAction = _unresolved_8.setMemberBetAction;
    }, function (_unresolved_9) {
      winViewModel = _unresolved_9.winViewModel;
      loseViewModel = _unresolved_9.loseViewModel;
      historyViewModel = _unresolved_9.historyViewModel;
      usersViewModel = _unresolved_9.usersViewModel;
      onlineViewModel = _unresolved_9.onlineViewModel;
    }, function (_unresolved_10) {
      bundlePkgName = _unresolved_10.bundlePkgName;
    }, function (_unresolved_11) {
      playBtnClick = _unresolved_11.playBtnClick;
      playChip = _unresolved_11.playChip;
      playDefeat = _unresolved_11.playDefeat;
      playDragonCard = _unresolved_11.playDragonCard;
      playGame = _unresolved_11.playGame;
      playTigerCard = _unresolved_11.playTigerCard;
      playTimeout = _unresolved_11.playTimeout;
      playTurnCard = _unresolved_11.playTurnCard;
      playWin = _unresolved_11.playWin;
    }, function (_unresolved_12) {
      global = _unresolved_12.global;
      lang = _unresolved_12.lang;
    }, function (_unresolved_13) {
      ToastPosition = _unresolved_13.ToastPosition;
      addToastAction = _unresolved_13.addToastAction;
    }, function (_unresolved_14) {
      FontPathDefine = _unresolved_14.FontPathDefine;
    }, function (_unresolved_15) {
      ChipViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      config = _unresolved_16.default;
      initBetData = _unresolved_16.initBetData;
    }, function (_unresolved_17) {
      BetType = _unresolved_17.BetType;
      gameCacheData = _unresolved_17.gameCacheData;
    }, function (_unresolved_18) {
      changeGoldDataAction = _unresolved_18.changeGoldDataAction;
    }, function (_unresolved_19) {
      TaskScheduler = _unresolved_19.default;
      Task = _unresolved_19.Task;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "58b99oPrVhKs4y9lWeDclfX", "DragonTiger_MainPanel", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Skeleton', 'sp', 'Sprite', 'Toggle', 'tween', 'UITransform', 'Vec3', 'Animation', 'SpriteFrame', 'sys', 'bezier', 'UIOpacity', 'find', 'game', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_MainPanel", DragonTiger_MainPanel = (_dec = ccclass("DragonTiger_MainPanel"), _dec2 = property(Node), _dec(_class = (_class2 = class DragonTiger_MainPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "history", _descriptor, this);

          this.amountArr = [];
          this.lastArr = [];
          this.repeatArr = [];
          this.skeleton = new Node();
          this.skeletonWin = new Node();
          this.initSeconds = 5;
          this.isShowGame = true;
          this.isBet = true;
          this.isLockBet = false;
          this.betAreaInfo = new Map();
          this.areaInfo = [1, 2, 3];
          this.isFlyStar = false;
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.clearTime = void 0;

          /**牌节点 */
          this.leftNode = void 0;
          this.rightNode = void 0;
          this.propertyNode = {
            props_ToggleGroup: new Node(),
            // toggle下注金币
            props_btn_history: new Node(),
            props_layout_history: new Node(),
            props_btn_dragon: new Node(),
            props_btn_tiger: new Node(),
            props_btn_seri: new Node(),
            props_btn_ulang: new Node(),
            props_spr_user_head: new Node(),
            props_user_name: new Node(),
            props_label_user_goldNum: new Node(),
            props_label_gold_up: new Node(),
            props_btn_addGold: new Node(),
            props_spr_history_new: new Node(),
            props_djs5_0: new Node(),
            props_djs10_6: new Node(),
            props_cards_left: new Node(),
            props_cards_right: new Node(),
            props_dragonTiger_pokerLeft: new Node(),
            props_dragonTiger_pokerRight: new Node(),
            props_spr_cardBg_right: new Node(),
            props_spr_cardBg_left: new Node(),
            props_dragonTiger_game_bet: new Node(),
            props_dragonTiger_stop_bet: new Node(),
            props_layout_lock: new Node(),
            props_btn_shop: new Node(),
            props_add_chips: new Node(),
            //添加金币的父节点
            props_tips_gold: new Node(),
            props_tips_vip: new Node(),
            props_remind_noBet: new Node(),
            props_remind_repeat: new Node()
          };
          this.props = {
            sendedP: 0,
            readySendP: 0,
            win: null,
            seconds: 0,
            betSeconds: 0,
            typeThreeSeconds: 0,
            gameType: null,
            durGameType: null,
            roomId: "",
            gold: null,
            memberName: "",
            memberId: "",
            icon: 0,
            //头像的spriteFrame下标值
            winGold: 0,
            winType: 0,
            memberBet: {},
            oddNewList: [],
            oddsList: [],
            pokerInfo: null,
            pokerRightNum: {
              suit: 0,
              //花色
              rank: "",
              //数字
              color: 0
            },
            pokerLeftNum: {
              suit: 0,
              //花色
              rank: "",
              //数字
              color: 0
            },
            tips: null,
            selectChip: 1000,
            myInfo: null,
            usersInfo: null,
            countDown: null,
            newBetData: null,
            allWinUsers: null,
            goldData: null,
            cancelBetData: null
          };
          this.events = {
            giveUsersGift: () => {},
            openHistoryPanel: () => {},
            openWinPanel: () => {},
            openLosePanel: () => {},
            openChipPanel: () => {},
            closeWinPanel: () => {}
          };
        }

        start() {
          this.sendCard();
        }

        initState() {
          return {
            gameType: 0,
            winType: 0,
            countDown: 0,
            betCountDown: 0,
            initSeconds: 0
          };
        }

        bindEvent() {
          game.on(Game.EVENT_HIDE, () => {
            //用户切入后台
            this.isShowGame = false;
          });
          game.on(Game.EVENT_SHOW, () => {
            this.isShowGame = true;

            if (this.node && this.node.isValid) {
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_SHOW, {
                roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId
              });
            }

            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_SHOW, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
              error: Error()
            }), bundlePkgName) : bundlePkgName, data => {
              //810
              if (data.seconds > 0) {
                if (this.node) {
                  var dragonTiger_VS = this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS");
                  dragonTiger_VS.active = false;

                  if (data.seconds > 5) {
                    this.propertyNode.props_djs10_6.getChildByName("dragonTiger_CountDown").getComponent(Label).string = data.seconds + '';
                  } else {
                    (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                      error: Error()
                    }), bundleDragonTiger) : bundleDragonTiger).load("car/djs5_" + data.seconds, sp.SkeletonData, (err, sk) => {
                      if (!err) {
                        if (!this.propertyNode || !this.propertyNode.props_djs5_0) {
                          return;
                        }

                        this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).skeletonData = sk;
                        this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).animation = "animation";
                      }
                    });
                  }
                }
              }
            });
          });
          this.propertyNode.props_btn_history.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HISTORY, (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).roomId);
            this.events.openHistoryPanel();
          });
          this.propertyNode.props_btn_ulang.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.repeatBet();
          });
          this.propertyNode.props_btn_dragon.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.betArea((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).BLUE);
          });
          this.propertyNode.props_btn_tiger.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.betArea((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).RED);
          });
          this.propertyNode.props_btn_seri.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.betArea((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).SERI);
          });
          this.propertyNode.props_btn_addGold.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_shop.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup, this.node, new DragonTiger_MainPanel.EventHandler(), "DragonTiger_MainPanel", "channelToggleCallback");
          this.useState((key, value) => {
            this.isBet = value.cur === 1;

            if (value.cur === 1) {
              //下注阶段
              if (!this.isShowGame) {
                this.propertyNode.props_cards_left.active = true;
                this.propertyNode.props_cards_right.active = true;
                this.leftNode && this.leftNode.destroy();
                this.rightNode && this.rightNode.destroy();
                return;
              }

              this.leftNode && this.leftNode.destroy();
              this.rightNode && this.rightNode.destroy();
              window.clearTimeout(this.clearTime);
              this.closePopup2();
              this.areaInfo = [1, 2, 3];
              this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active = false;
              this.init(); //初始化

              this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
                error: Error()
              }), setMemberBetAction) : setMemberBetAction)({})); //清空当前用户下注memberBet的数据
              // this.openCountDown(); // 播放倒计时

              this.sendCardAction(); //发牌行为

              this.judgeCoin(this.props.gold);
              this.updateLockBetState();
            }

            if (value.cur === 2) {
              //开奖阶段
              if (!this.isShowGame) {
                this.propertyNode.props_cards_left.active = true;
                this.propertyNode.props_cards_right.active = true;
                this.leftNode && this.leftNode.destroy();
                this.rightNode && this.rightNode.destroy();
                this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active = true;
                return;
              }

              this.stopBet();
              this.propertyNode.props_djs10_6.active = false;
              this.propertyNode.props_djs5_0.active = false;
              this.propertyNode.props_dragonTiger_game_bet.active = false;
              (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
                error: Error()
              }), dragonTiger_Audio) : dragonTiger_Audio).longStop(); //暂停倒计时的音效

              window.clearTimeout(timer);
              this.clearTime = window.setTimeout(() => {
                if (this.node && this.node.isValid) {
                  this.openCard();
                }
              }, 2000);
            }

            if (value.cur === 3) {
              //结算阶段  
              this.propertyNode.props_djs10_6.active = false;
              this.propertyNode.props_djs5_0.active = false;
              this.propertyNode.props_dragonTiger_game_bet.active = false;
              this.propertyNode.props_dragonTiger_stop_bet.active = false;
              (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
                error: Error()
              }), dragonTiger_Audio) : dragonTiger_Audio).longStop();
              window.clearTimeout(timer);
              window.clearTimeout(this.clearTime);
              this.propertyNode.props_ToggleGroup.children.forEach(item => item.getComponent(Toggle).interactable = false);
              this.closePopup();
              this.clearTime = window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                }

                this.betAreaInfo.clear();
                this.clearAllBetAreaGold();
              }, 2000);
              this.areaInfo = [1, 2, 3];

              if (!this.isShowGame) {
                this.init();
                return;
              }
            }
          }, ["gameType"]);
        }

        useProps(key, value) {
          /**当传入的props发生变化，要执行的函数 */
          //这里是如果界面要用到这个数据，把这个值绑定到界面节点上   如果要更改store里这个值 调用this.dispatch(setUserInfoAction(新的 ： gameTotalNum))
          if (key === "gold") {
            var gold = value.cur;

            if (value.cur === undefined) {
              gold = 0;
            }

            this.judgeCoin(gold);
            this.updateLockBetState();

            if (value.cur <= 0 || value.cur == undefined) {
              this.propertyNode.props_label_user_goldNum.getComponent(Label).string = "0";
            } else {
              this.propertyNode.props_label_user_goldNum.getComponent(Label).string = parseInt(value.cur).formatAmountWithCommas();
            }
          }

          if (key === "myInfo") {
            if (!value.cur) {
              return;
            }

            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).loadHeadSprite(value.cur.icon, this.propertyNode.props_spr_user_head.getComponent(Sprite)); //加载头像

            this.propertyNode.props_user_name.getComponent(Label).string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
              error: Error()
            }), omitStr) : omitStr)(value.cur.memberName + "", 12);
          } // key==="memberName" && (this.propertyNode.props_user_name.getComponent(Label).string=omitStr(value.cur+"",12) )


          if (key === "newBetData") {
            if (!value.cur) {
              return;
            }

            if (value.cur.memberId === (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).memberId) {
              return;
            }

            ;
            this.flyChip(value.cur);
          }

          if (key === "allWinUsers") {
            if (!value.cur) {
              return;
            }

            this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              if (value.cur) {
                value.cur.forEach(item => {
                  this.flyWinAreaToUser(item);
                });
              }

              window.setTimeout(() => done(), 1000);
            }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              if (!value.cur) {
                return;
              }

              value.cur.forEach(item => {
                if (item.memberId !== (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).memberId) {
                  if (item.index < 6 && item.index >= 0) {
                    (_crd && usersViewModel === void 0 ? (_reportPossibleCrUseOfusersViewModel({
                      error: Error()
                    }), usersViewModel) : usersViewModel).comp.playAddGold(item, item.gold);
                  }
                }
              });
              window.setTimeout(() => done(), 1000);
            }), false);
          }

          if (key === "countDown") {
            this.propertyNode.props_djs10_6.active = value.cur > 5;
            var dragonTiger_VS = this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS");
            dragonTiger_VS.active = false;
            this.propertyNode.props_dragonTiger_game_bet.active = value.cur === 15;
            this.propertyNode.props_dragonTiger_stop_bet.active = value.cur <= 0;

            if (value.cur === 5) {
              (_crd && playTimeout === void 0 ? (_reportPossibleCrUseOfplayTimeout({
                error: Error()
              }), playTimeout) : playTimeout)();
            } else if (value.cur === 15) {
              (_crd && playGame === void 0 ? (_reportPossibleCrUseOfplayGame({
                error: Error()
              }), playGame) : playGame)();
            }

            if (value.cur > 5) {
              // this.propertyNode.props_djs10_6.active = true;
              // 开始动画播放
              this.propertyNode.props_dragonTiger_game_bet.getComponent(sp.Skeleton).animation = "animation"; //  this.propertyNode.props_dragonTiger_game_bet.setSiblingIndex(1000)

              this.propertyNode.props_djs10_6.getComponent(sp.Skeleton).animation = "animation";
              this.propertyNode.props_djs10_6.getChildByName("dragonTiger_CountDown").getComponent(Label).string = value.cur + "";
            } else {
              this.propertyNode.props_dragonTiger_game_bet.active = false;
              this.propertyNode.props_djs10_6.getChildByName("dragonTiger_CountDown").getComponent(Label).string = "";
              this.propertyNode.props_djs10_6.active = false; // 播放倒计时5-0

              this.propertyNode.props_djs5_0.active = true;
              (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                error: Error()
              }), bundleDragonTiger) : bundleDragonTiger).load("car/djs5_" + value.cur, sp.SkeletonData, (err, sk) => {
                if (!err) {
                  if (!this.propertyNode || !this.propertyNode.props_djs5_0) {
                    return;
                  }

                  this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).skeletonData = sk;
                  this.propertyNode.props_djs5_0.getComponent(sp.Skeleton).animation = "animation";
                }
              });

              if (value.cur <= 0) {
                if ((_crd && historyViewModel === void 0 ? (_reportPossibleCrUseOfhistoryViewModel({
                  error: Error()
                }), historyViewModel) : historyViewModel) !== undefined) {
                  if (!(_crd && historyViewModel === void 0 ? (_reportPossibleCrUseOfhistoryViewModel({
                    error: Error()
                  }), historyViewModel) : historyViewModel).isUnMount) {
                    //历史记录面板未关，倒计时结束，重新请求
                    (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                      error: Error()
                    }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                      error: Error()
                    }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HISTORY, (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                      error: Error()
                    }), gameCacheData) : gameCacheData).roomId);
                  }
                }

                this.propertyNode.props_djs5_0.active = false;
                return;
              }
            }
          }

          if (key === "tips") {
            if (value.cur && value.cur.length > 0) {
              // this.updateLockBetState()
              this.updateTipsShow();
            } else {
              this.propertyNode.props_layout_lock.active = false;
            }
          }

          if (key === "memberBet") {
            if (!value.cur || value.cur === undefined) {
              return;
            }

            ;

            if (Object.keys(value.cur).length != 0) {
              for (var _key in value.cur) {
                var areaNode = void 0;

                if (_key === "1") {
                  areaNode = this.propertyNode.props_btn_dragon;
                } else if (_key === "2") {
                  areaNode = this.propertyNode.props_btn_tiger;
                } else if (_key === "3") {
                  areaNode = this.propertyNode.props_btn_seri;
                }

                if (value.cur[_key] === 0) {
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", areaNode).getComponent(Label).string = "";
                } else {
                  areaNode.getChildByName("spr_bet_bg").active = true;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", areaNode).getComponent(Label).string = value.cur[_key].formatAmountWithCommas();
                }
              }
            }
          }

          if (key === "goldData") {
            if (!value.cur || value.cur === undefined) {
              return;
            }

            ;

            if (value.cur && Object.keys(value.cur).length != 0) {
              for (var _key2 in value.cur) {
                var _areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(_key2)));

                (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", _areaNode).getComponent(Label).string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                  error: Error()
                }), formatNumber) : formatNumber)(value.cur[_key2]);
              }
            }
          }

          if (key === 'cancelBetData') {
            if (!value.cur) {
              return;
            }

            this.cancelBet(value.cur);
          }

          if (key === "icon") {
            if (!value.cur) {
              return;
            }

            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load("resource/head/head_circle_" + value.cur + "/spriteFrame", SpriteFrame, (err, sp) => {
              if (!err) {
                this.propertyNode.props_spr_user_head.getComponent(Sprite).spriteFrame = sp;
              }
            });
          }

          if (key === "sendedP") {
            window.setTimeout(() => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              ;
              this.sendCard();
            }, 4000);
          }

          if (key === "readySendP") {
            window.setTimeout(() => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              ;
              this.sendCard();
            }, 4000);
          } // if(key==="seconds"){
          //     this.setState({
          //       countDown:value.cur
          //     })
          // }


          if (key === "typeThreeSeconds") {
            this.initSeconds = value.cur;

            if (value.cur === 0) {
              this.initSeconds = value.pre;
            }
          }

          if (key === "gameType") {
            this.setState({
              gameType: value.cur
            });
          } // if(key==="betSeconds"){
          //     this.setState({
          //       countDown:value.cur
          //     }) 
          // }
          // if (key === "pokerLeftNum") { this.shuffleCard() }
          // if( key==="pokerRightNum" ){ this.shuffleCard() }


          if (key === "pokerInfo") {
            this.shuffleCard();
          }

          if (key === "oddsList") {
            this.changeHistoryMin(value.cur);
          }

          if (key === "oddNewList") {
            _export("hisTime", hisTime = window.setTimeout(() => {
              this.changeHistoryMin(value.cur);
            }, 4000));
          }

          if (key === "winType") {
            window.setTimeout(() => {
              if (this.node && this.node.isValid) {
                this.settleAccount();
              }
            }, 2000);
          }

          if (key === "winGold") {
            if (value.cur <= 0 || value.cur === undefined) return;
            var startPosition = new Vec3(this.propertyNode.props_label_gold_up.position.x, this.propertyNode.props_label_gold_up.position.y);
            this.propertyNode.props_label_gold_up.getComponent(Label).string = "+" + value.cur.formatAmountWithLetter();
            this.propertyNode.props_label_gold_up.active = true;
            tween(this.propertyNode.props_label_gold_up).by(1, {
              position: new Vec3(0, 30)
            }).call(() => {
              this.scheduleOnce(() => {
                this.propertyNode.props_label_gold_up.active = false;
                this.propertyNode.props_label_gold_up.setPosition(startPosition);
              }, 0.5);
            }).start();
          }
        }
        /**Toggle选中金币的回调 效果切换*/


        channelToggleCallback(event, customEventData) {
          (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
            error: Error()
          }), playBtnClick) : playBtnClick)();
          var toggleArr = event.target["parent"].children;

          for (var i = 0; i < toggleArr.length; i++) {
            if (toggleArr[i].getComponent(Toggle).isChecked) {
              var num = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).chipTypes[i].value;
              this.dispatch((_crd && changeSelectChipAction === void 0 ? (_reportPossibleCrUseOfchangeSelectChipAction({
                error: Error()
              }), changeSelectChipAction) : changeSelectChipAction)(num)); //更新选中的金币值

              toggleArr[i].children[0].active = false;
              toggleArr[i].children[1].active = false;
              toggleArr[i].children[2].active = true;
            } else {
              toggleArr[i].children[0].active = true;
              toggleArr[i].children[1].active = true;
              toggleArr[i].children[2].active = false;
            }
          }
        }
        /** 创造对应选取的金币  */


        createChip(chipValue, parent) {
          return new (_crd && ChipViewModel === void 0 ? (_reportPossibleCrUseOfChipViewModel({
            error: Error()
          }), ChipViewModel) : ChipViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_CHIP).source).appendTo(parent).connect().setProps({
            value: chipValue
          });
        }

        betArea(betType) {
          if (this.props.gameType >= 2) {
            return;
          }

          if (this.props.tips && this.props.tips.length > 0) {
            var tips = this.props.tips[0];

            if ('vip' === tips.name.toLowerCase()) {
              return;
            } else if ('gold' === tips.name.toLowerCase()) {
              // 提示用户余额不足
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                  placeStr: "对不起，您的金币不足，请充值!"
                })
              }));
              return;
            }
          }

          if (this.isLockBet = this.props.gold < 5000) {
            return;
          }

          if (this.props.gold < this.props.selectChip) {
            // 提示用户余额不足
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                placeStr: "对不起，您的金币不足，请充值!"
              })
            }));
            return;
          }

          var betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
            error: Error()
          }), initBetData) : initBetData)(this.props.myInfo.index, this.props.myInfo.memberId, betType, this.props.selectChip);
          betData.isMyBet = true; //当前用户是否下注

          var sendBet = {
            roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).roomId,
            memberId: this.props.myInfo.memberId,
            memberName: this.props.myInfo.memberName,
            gold: betData.betAmount,
            betType: betData.betType,
            isMe: betData.isMyBet
          }; // 下注信息发送给服务器

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_RESPONSE, sendBet);
          this.flyChip(betData); //  this.amountArr.push(sendBet);
        }
        /**
         * 飞筹码
         * @param betData 
         * @param isFly 是否飞筹码的动画，false用于刚进入初始化筹码
         */


        flyChip(betData, isFly) {
          if (isFly === void 0) {
            isFly = true;
          }

          // 下注筹码不存在，不处理
          if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.find(v => v.value === betData.betAmount)) {
            return;
          }

          isFly = betData.isFly;
          isFly = this.isShowGame;
          var betArea = this.getNodeByBetType(betData.betType).getChildByName("Layout_bet");
          var viewModel = this.createChip(betData.betAmount, this.propertyNode.props_add_chips);
          var radom = Math.random() * 90 - 90; //旋转角度

          var chipNode = viewModel.comp.node;
          var endPosition = this.randomBetEndPosition(betData.betType);
          this.addBetInfo(betData, viewModel);
          this.updateAllBet();

          if (isFly) {
            (_crd && playChip === void 0 ? (_reportPossibleCrUseOfplayChip({
              error: Error()
            }), playChip) : playChip)();
            var uiTransform = this.node.getComponent(UITransform);
            var startPosition = this.getBetStartPosition(betData);
            chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
            tween(chipNode).to(1, {
              position: endPosition,
              angle: -radom
            }, {
              easing: 'quintOut'
            }).start(); // if (!isWinRateBet && betData.index === config.gameOption.winRateMaxIndex) {

            if (betData.memberId !== (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).memberId) {
              if (betData.index > (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameOption.seatNumber) {
                (_crd && onlineViewModel === void 0 ? (_reportPossibleCrUseOfonlineViewModel({
                  error: Error()
                }), onlineViewModel) : onlineViewModel).comp.playWinAni();
              }
            }

            if (betData.index === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.winRateMaxIndex) {
              //判定是否是未展示星星的区域数组 若未展示，返回区域下标 否（即已展示） 返回-1
              var betTypeIndex = this.areaInfo.indexOf(betData.betType);

              if (betTypeIndex >= 0) {
                this.areaInfo.splice(betTypeIndex, 1); //移除展示了的区域
                // 飞星星

                this.flyStar(this.getNodeByBetType(betData.betType), betData.betType);
              }
            }
          } // this.updateBetAreaGold(betData, betArea.parent);

        }
        /** 下注总值 用户下注值 */


        updateBetAreaGold(betData, betArea) {
          if (betData.totalBetAmount === 0) {
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", betArea).getComponent(Label).string = "0";
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", betArea).getComponent(Label).string = "";
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", betArea).parent.active = betData.meTotalBetAmount > 0;
          }
        }
        /** 赢的区域飞金币到用户头像 */


        flyWinAreaToUser(betInfo, isFly) {
          if (isFly === void 0) {
            isFly = true;
          }

          if (!this.props.win) {
            return;
          }

          var betInfos = this.betAreaInfo.get(this.props.win);

          if (betInfos) {
            (_crd && playGetCoin === void 0 ? (_reportPossibleCrUseOfplayGetCoin({
              error: Error()
            }), playGetCoin) : playGetCoin)();
            betInfos.forEach(betInfo => {
              betInfo.chips.forEach(chip => {
                var chipNode = chip.comp.node;
                var endPositon = this.getFlyToHeadEndPosition(betInfo);
                var uiTransform = this.node.getComponent(UITransform);
                tween(chipNode).to(0.8, {
                  worldPosition: uiTransform.convertToWorldSpaceAR(endPositon),
                  scale: new Vec3(0.1, 0.1)
                }, {
                  easing: 'quintOut'
                }).call(() => {
                  chip.unMount();
                }).start();
              });
            });
          } // })

        }
        /**清除所有下注区域的金币 */


        clearAllBetAreaGold() {
          this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
            error: Error()
          }), changeGoldDataAction) : changeGoldDataAction)({}));
          this.clearBetAreaGold(this.propertyNode.props_btn_dragon);
          this.clearBetAreaGold(this.propertyNode.props_btn_seri);
          this.clearBetAreaGold(this.propertyNode.props_btn_tiger); // this.hideAllWinRate();

          this.areaInfo = [1, 2, 3]; // this.clearBetWinAreaAni(this.areaInfo);
          // this.amountArr = [];	
        }

        clearBetAreaGold(betArea) {
          betArea.getChildByName("Layout_bet").removeAllChildren();
          this.updateBetAreaGold({
            index: 0,
            memberId: "",
            betAmount: 0,
            betType: null,
            totalBetAmount: 0,
            meTotalBetAmount: 0
          }, betArea);
        }
        /**筹码飞向头像的结束坐标 */


        getFlyToHeadEndPosition(betInfo) {
          if (betInfo.isMe) {
            // 播放获得金币的音效
            // playGetCoin();
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.y);
          }

          if (betInfo.index >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.y);
          }

          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betInfo.index].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betInfo.index].y);
        }
        /** 金币飞向荷官 */


        flyToHeGuan() {
          //this.betAreaInfo 的chip存储了金币节点，可遍历它进行位置移动
          // playGetCoin()
          var chips = [];
          this.betAreaInfo.forEach((v, k) => {
            if (!this.props.win) {
              //没有中奖区域
              v.forEach(betInfo => {
                chips = chips.concat(betInfo.chips);
              });
            } // 找出未中奖的区域


            if (this.props.win) {
              // playGetCoin()
              if (this.props.win !== k) {
                v.forEach(betInfo => {
                  chips = chips.concat(betInfo.chips);
                });
              }
            }
          }); //未中奖区域

          this.FlyLossAreaToHe(chips);
        }
        /** 未中奖区域飞金币到荷官位置 */


        FlyLossAreaToHe(chips) {
          if (chips.length != 0) {
            (_crd && playGetCoin === void 0 ? (_reportPossibleCrUseOfplayGetCoin({
              error: Error()
            }), playGetCoin) : playGetCoin)();
          }

          chips.forEach(chip => {
            var chipNode = chip.comp.node;
            var endPositon = new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.dealerPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.dealerPosition.y);
            var uiTransform = this.node.getComponent(UITransform);
            tween(chipNode).to(0.8, {
              worldPosition: uiTransform.convertToWorldSpaceAR(endPositon),
              scale: new Vec3(0.1, 0.1)
            }, {
              easing: 'quintOut'
            }).call(() => {
              // this.lossAnimationEnd();
              chip.unMount();
            }).start();
          });
        }

        copyBetInfo(betInfos, parent, odds) {
          var arr = [];
          new Array(odds).fill(0).forEach(v => {
            betInfos.forEach(betInfo => {
              arr.push({
                index: betInfo.index,
                userId: betInfo.userId,
                isMe: betInfo.isMe,
                chips: betInfo.chips.filter(chip => chip.comp.props).map(chip => this.createChip(chip.comp.props.value, parent))
              });
            });
          });
          return arr;
        }
        /**获得星星 */


        getStar(parentNode, betType) {
          return (_crd && usersViewModel === void 0 ? (_reportPossibleCrUseOfusersViewModel({
            error: Error()
          }), usersViewModel) : usersViewModel).comp.getPropertyNode().props_spr_icon;
        }
        /**显示星星在下注区域 */


        showWinRate(betType) {
          if (!this.node || !this.node.isValid) return;
          this.getStar(this.getNodeByBetType(betType), betType).active = true;
        }
        /**飞星星 */


        flyStar(parentNode, betType) {
          var endPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
            error: Error()
          }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.getStar(parentNode, betType));
          var starIcon = (_crd && usersViewModel === void 0 ? (_reportPossibleCrUseOfusersViewModel({
            error: Error()
          }), usersViewModel) : usersViewModel).comp.getPropertyNode().props_spr_icon; // let starIcon = getNodeByNameDeep("props_spr_icon",this.node.parent.getChildByName("prefabs_bandar_users"));

          var starNode = instantiate(starIcon);
          var startPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
            error: Error()
          }), getNodePositionInCanvas) : getNodePositionInCanvas)(starIcon);
          starNode.active = true;
          this.node.addChild(starNode);
          starNode.setPosition(startPosition);
          tween(starNode).to(1, {
            scale: new Vec3(0.8, 0.8)
          }).start();
          this.playWinRateTween(starNode, endPosition, 1, () => {
            this.scheduleOnce(() => {
              this.showWinRate(betType);
              starNode.destroy();

              if (this.isFlyStar) {
                this.isFlyStar = false;
              }
            }, 0.5);
          });
        }
        /**飞星星抛物线动画 */


        playWinRateTween(tweenNode, endPos, playTime, callBack) {
          var startPos = tweenNode.position;
          var startAngle = tweenNode.eulerAngles;
          var fruitTween = tween(startPos);
          var x = (startPos.x + endPos.x) / 2;
          var y = (startPos.y + endPos.y) / 2;
          var mixY = y + y * 0.6;
          var maxY = y + y * 0.6;
          var mixX = x;
          var maxX = x;

          var progressX = function progressX(start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixX, maxX, end, t);
            return current;
          };

          var progressY = function progressY(start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixY, maxY, end, t);
            return current;
          };

          fruitTween.parallel(tween().to(playTime, {
            x: endPos.x
          }, {
            progress: progressX,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          }), tween().to(playTime, {
            y: endPos.y
          }, {
            progress: progressY,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          })).start();
          tween(startAngle).to(playTime, {
            z: 360
          }, {
            onUpdate: () => {
              if (tweenNode.isValid) {
                tweenNode.eulerAngles = startAngle;
              }
            }
          }).call(() => callBack()).start();
        }
        /**下注总筹码 */


        updateAllBet() {// for(let key in gameCacheData.goldData){
          // 	let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
          // 	if(gameCacheData.goldData[key] === 0){
          // 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = "0"
          // 	}else{
          // 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = formatNumber(gameCacheData.goldData[key]);
          // 	}
          // }
        }
        /**
        * 添加下注信息
        * @param betData 
        * @param viewModel 
        */


        addBetInfo(betData, viewModel) {
          var betInfos = this.betAreaInfo.get(betData.betType);

          if (!betInfos) {
            betInfos = [];
            this.betAreaInfo.set(betData.betType, betInfos);
          }

          var betInfo = betInfos.find(v => v.userId === betData.memberId);

          if (betInfo) {
            betInfo.chips.push(viewModel);
          } else {
            betInfos.push({
              index: betData.index,
              userId: betData.memberId,
              isMe: betData.isMyBet,
              chips: [viewModel]
            });
          }
        }
        /** 获得下注筹码飞的开始坐标 */


        getBetStartPosition(betData) {
          if (betData.isMyBet) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.y);
          }

          if (betData.index >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.y);
          }

          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betData.index].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betData.index].y);
        }
        /** 获得下注筹码飞的结束坐标 */


        randomBetEndPosition(betType) {
          var y = Math.floor(Math.random() * -150 + 50); //目标位置Y

          var x = 0;

          if (betType === 1) {
            x = Math.floor(Math.random() * -200 - 200);
          } else if (betType === 2) {
            x = Math.floor(Math.random() * 200 + 200);
          } else if (betType === 3) {
            x = Math.floor(Math.random() * 200 - 100);
            y = Math.floor(Math.random() * -100);
          }

          return new Vec3(x, y);
        }
        /** 获取点击区域的节点 */


        getNodeByBetType(betType) {
          if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).BLUE === betType) {
            return this.propertyNode.props_btn_dragon;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).RED === betType) {
            return this.propertyNode.props_btn_tiger;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SERI === betType) {
            return this.propertyNode.props_btn_seri;
          }
        }

        getNodeToBetType(betType) {
          if (1 === betType) {
            return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).BLUE;
          } else if (2 === betType) {
            return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).RED;
          } else if (3 === betType) {
            return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).SERI;
          }
        }
        /**更新历史记录min*/


        changeHistoryMin(list) {
          if (this.node && this.node.isValid) {
            for (var i = 0; i < list.length; i++) {
              var gameWinIcon = instantiate(this.propertyNode.props_layout_history.getChildByName("spr_history_icon1"));
              gameWinIcon.active = true;
              var gameY = gameWinIcon.position.y;
              var gameX = gameWinIcon.position.x + gameWinIcon.getComponent(UITransform).contentSize.width * i;

              if (list[i] === 1) {
                gameWinIcon.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                  error: Error()
                }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HISTORY_DRAGON).source;
              } else if (list[i] === 2) {
                gameWinIcon.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                  error: Error()
                }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HISTORY_TIGER).source;
              } else {
                gameWinIcon.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                  error: Error()
                }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HISTORY_SERI).source;
              }

              gameWinIcon.setPosition(gameX, gameY);
              this.propertyNode.props_layout_history.addChild(gameWinIcon);

              if (list[list.length - 1] && list.length > 0) {
                var newIconX = gameX + gameWinIcon.getComponent(UITransform).contentSize.width * 1 / 2;
                var newIconY = gameY + gameWinIcon.getComponent(UITransform).contentSize.height / 2;
                this.propertyNode.props_spr_history_new.setPosition(newIconX, newIconY);
                this.propertyNode.props_spr_history_new.setSiblingIndex(500);
                this.propertyNode.props_btn_history.setSiblingIndex(0);
                this.propertyNode.props_spr_history_new.active = true;
              }
            }
          }
        }
        /**自动关闭输赢结算弹窗*/


        closePopup() {
          //五秒后自动关闭结算弹框
          if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel).isUnMount) {
            return;
          }

          console.log("this.initSeconds", this.initSeconds);
          var time = this.initSeconds * 1000;
          window.setTimeout(() => {
            if (this.node && this.node.isValid) {
              this.removeChip();

              if ((_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                error: Error()
              }), winViewModel) : winViewModel) != undefined) {
                if (!(_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                  error: Error()
                }), winViewModel) : winViewModel).isUnMount) {
                  // this.removeChip()
                  (_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                    error: Error()
                  }), winViewModel) : winViewModel).unMount();
                }
              }

              if ((_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                error: Error()
              }), loseViewModel) : loseViewModel) != undefined) {
                if (!(_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                  error: Error()
                }), loseViewModel) : loseViewModel).isUnMount) {
                  // this.removeChip()
                  (_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                    error: Error()
                  }), loseViewModel) : loseViewModel).unMount();
                }
              }
            }
          }, time);
        }
        /**自动关闭输赢结算弹窗  避免网卡未关闭弹窗，在一阶段在关一次*/


        closePopup2() {
          //五秒后自动关闭结算弹框
          this.scheduleOnce(() => {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {
              return;
            }

            if (this.node && this.node.isValid) {
              if ((_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                error: Error()
              }), winViewModel) : winViewModel) != undefined) {
                if (!(_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                  error: Error()
                }), winViewModel) : winViewModel).isUnMount) {
                  (_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                    error: Error()
                  }), winViewModel) : winViewModel).unMount();
                }
              }

              if ((_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                error: Error()
              }), loseViewModel) : loseViewModel) != undefined) {
                if (!(_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                  error: Error()
                }), loseViewModel) : loseViewModel).isUnMount) {
                  (_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                    error: Error()
                  }), loseViewModel) : loseViewModel).unMount();
                }
              }
            }
          }, 1);
        }
        /**重复下注按钮*/


        repeatBet() {
          var _this = this;

          if (this.props.gameType >= 2) {
            if (!this.propertyNode && !this.propertyNode.props_remind_noBet) {
              return;
            }

            ;
            this.propertyNode.props_remind_noBet.active = true;
            tween(this.propertyNode.props_remind_noBet).delay(2).call(() => {
              this.propertyNode.props_remind_noBet.active = false;
            }).start();
            return;
          }

          ;

          if (this.props.tips && this.props.tips.length > 0) {
            return;
          }

          var toggleArr = this.propertyNode.props_ToggleGroup.children;
          this.clearRepeatBet();
          this.repeatArr = this.lastArr;

          if (this.repeatArr.length === 0) {
            if (!this.propertyNode && !this.propertyNode.props_remind_repeat) {
              return;
            }

            ;
            this.propertyNode.props_remind_repeat.active = true;
            tween(this.propertyNode.props_remind_repeat).delay(2).call(() => {
              this.propertyNode.props_remind_repeat.active = false;
            }).start();
            return;
          } // this.amountArr.push(...this.lastArr)   


          var isBet = toggleArr.some(item => {
            return item.getComponent(Toggle).interactable === true;
          });

          if (isBet) {
            //是否可以点击下注
            // 恢复上一次下注的情况
            var total = 0;
            var type1Total = 0;
            var type2Total = 0;
            var type3Total = 0;

            for (var i = 0; i < this.repeatArr.length; i++) {
              total += this.repeatArr[i].gold;

              if (this.repeatArr[i].betType === 1) {
                type1Total += this.repeatArr[i].gold;
              } else if (this.repeatArr[i].betType === 2) {
                type2Total += this.repeatArr[i].gold;
              } else if (this.repeatArr[i].betType === 3) {
                type3Total += this.repeatArr[i].gold;
              }
            }

            var betData1 = {
              typeTotal: type1Total,
              type: 1,
              betId: ""
            };
            var betData2 = {
              typeTotal: type2Total,
              type: 2,
              betId: ""
            };
            var betData3 = {
              typeTotal: type3Total,
              type: 3,
              betId: ""
            };
            var lastBetArr = [betData1, betData2, betData3];

            if (this.props.gold >= total) {
              var _loop = function _loop(_i) {
                if (lastBetArr[_i].typeTotal <= 0) {
                  return "continue";
                }

                ;
                lastBetArr[_i].betId = (_crd && getUUID === void 0 ? (_reportPossibleCrUseOfgetUUID({
                  error: Error()
                }), getUUID) : getUUID)();
                var chipNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).MAIN_CHIP).source);
                var positionX = _this.propertyNode.props_spr_user_head.position.x;
                var positionY = _this.propertyNode.props_spr_user_head.position.y; // 设置下注金币初始位置

                chipNode.setPosition(positionX, positionY);
                var chips = [];
                (_crd && usersViewModel === void 0 ? (_reportPossibleCrUseOfusersViewModel({
                  error: Error()
                }), usersViewModel) : usersViewModel).comp.splitChip(lastBetArr[_i].typeTotal, chips);
                chips.forEach(chip => {
                  var sendBet = {
                    roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                      error: Error()
                    }), gameCacheData) : gameCacheData).roomId,
                    memberId: _this.props.myInfo.memberId,
                    memberName: _this.props.myInfo.memberName,
                    gold: chip,
                    betType: lastBetArr[_i].type,
                    betId: lastBetArr[_i].betId,
                    isMe: true
                  };
                  var betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
                    error: Error()
                  }), initBetData) : initBetData)(_this.props.myInfo.index, _this.props.myInfo.memberId, lastBetArr[_i].type, chip);
                  betData.isMyBet = true;
                  (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                    error: Error()
                  }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                    error: Error()
                  }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_RESPONSE, sendBet);

                  _this.flyChip(betData); // this.amountArr.push(sendBet);

                });
              };

              //只有用户总金额大于所有重复下注的金币额之和 才可以下注
              // for (var i = 0; i < this.repeatArr.length; i++) { 
              //   sktInstance.sendSktMessage(SKT_MAG_TYPE.BET_RESPONSE, this.repeatArr[i])
              // }
              for (var _i = 0; _i < lastBetArr.length; _i++) {
                var _ret = _loop(_i);

                if (_ret === "continue") continue;
              }
            } else {
              //禁止下注
              // 提示用户余额不足
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                  placeStr: "对不起，您的金币不足，请充值!"
                })
              }));
              return;
            }
          }
        }
        /**清除重复下注按钮的数据*/


        clearRepeatBet() {
          this.repeatArr = [];
        }
        /**出现停止动画*/


        stopBet() {
          var toggleArr = this.propertyNode.props_ToggleGroup.children; // 5-0倒计时结束节点 隐藏

          this.propertyNode.props_djs10_6.active = false;
          this.propertyNode.props_djs5_0.active = false; // 停止下注

          toggleArr.forEach(item => {
            item.getComponent(Toggle).interactable = false;
            item.getComponent(Toggle).isChecked = false;
            item.children[0].active = true;
            item.children[1].active = true;
            item.children[2].active = false;
          }); // 改为停止动画的资源

          this.scheduleOnce(() => {
            this.vsIcon();
            this.propertyNode.props_dragonTiger_stop_bet.getComponent(sp.Skeleton).animation = "animation";
            this.propertyNode.props_dragonTiger_stop_bet.active = true; // this.propertyNode.props_dragonTiger_stop_bet.setSiblingIndex(500);
            // if(!mainGameViewModel.isUnMount){

            _export("gameTime", gameTime = window.setTimeout(() => {
              if (this.node && this.node.isValid) {
                if (this.propertyNode.props_dragonTiger_stop_bet != null) {
                  this.propertyNode.props_dragonTiger_stop_bet.active = false;
                }
              }
            }, 2000)); // }

          });
        }
        /**vs图标*/


        vsIcon() {
          // VS 图标出现
          var vsIcon = this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS");
          vsIcon.setPosition(0, -200);
          this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active = true;
          tween(vsIcon).to(0.2, {
            position: new Vec3(0, 254, 0)
          }).start();
        }
        /**开牌*/


        openCard() {
          if (this.node && this.node.isValid) {
            // this.shuffleCard();//牌面变化,洗牌
            (_crd && playTurnCard === void 0 ? (_reportPossibleCrUseOfplayTurnCard({
              error: Error()
            }), playTurnCard) : playTurnCard)(); // this.propertyNode.props_cards_left.getChildByName("spr_cardBg_left").active=false
            // this.propertyNode.props_dragonTiger_pokerLeft.active=true;

            this.leftNode = instantiate(this.propertyNode.props_cards_left);
            this.propertyNode.props_cards_left.active = false;
            this.leftNode.active = true;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("prefabs_dragonTiger_card", this.node).addChild(this.leftNode);
            this.leftNode.getComponent(Animation).play();
            this.rightNode = instantiate(this.propertyNode.props_cards_right);
            this.propertyNode.props_cards_right.active = false;
            this.rightNode.active = true;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("prefabs_dragonTiger_card", this.node).addChild(this.rightNode);
            this.leftNode.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
              // this.propertyNode.props_dragonTiger_pokerRight.parent.getChildByName("spr_cardBg_right").active=false
              // this.propertyNode.props_dragonTiger_pokerRight.active=true;
              // leftNode.destroy()
              this.rightNode.getComponent(Animation).play();
              (_crd && playTurnCard === void 0 ? (_reportPossibleCrUseOfplayTurnCard({
                error: Error()
              }), playTurnCard) : playTurnCard)();
            });
            this.rightNode.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
              // rightNode.destroy()
              this.contrastCards();
              this.flyToHeGuan();
            });
          }
        }
        /**对比牌 大小 谁赢，谁播放动画*/


        contrastCards() {
          if (this.props.win === 1) {
            //龙赢
            this.skeleton = this.node.getChildByName("dragon_win");
            this.skeletonWin = this.propertyNode.props_btn_dragon.parent.getChildByName("zhongjiang_long");
            (_crd && playDragonCard === void 0 ? (_reportPossibleCrUseOfplayDragonCard({
              error: Error()
            }), playDragonCard) : playDragonCard)();
          } else if (this.props.win === 2) {
            //虎赢
            this.skeleton = this.node.getChildByName("tiger_win");
            this.skeletonWin = this.propertyNode.props_btn_tiger.parent.getChildByName("zhongjiang_hu");
            (_crd && playTigerCard === void 0 ? (_reportPossibleCrUseOfplayTigerCard({
              error: Error()
            }), playTigerCard) : playTigerCard)();
          } else {
            //和
            this.skeleton = this.node.getChildByName("seri");
            this.skeletonWin = this.propertyNode.props_btn_seri.parent.getChildByName("zhongjiang_he");
          }

          this.skeleton.active = true;
          this.skeletonWin.active = true; // this.skeleton.setSiblingIndex(490);

          this.skeletonWin.getComponent(sp.Skeleton).loop = true;
          this.skeletonWin.getComponent(sp.Skeleton).animation = "animation";
          this.skeleton.getComponent(sp.Skeleton).animation = "animation";
        }
        /**发牌--资源的变化*/


        sendCard() {
          // 发牌数量的变化，影响图片资源的变化
          if (this.node && this.node.isValid) {
            var pokerTotalNum = 414;

            if (!this.node || this.node === undefined) {
              return;
            }

            ;
            var sendCardNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("prefabs_dragonTiger_sendCard", this.node);

            if (!sendCardNode) {
              return;
            }

            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_heng", sendCardNode).getComponent(Label).string = String(this.props.sendedP);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_shu", sendCardNode).getComponent(Label).string = String(this.props.readySendP);
            sendCardNode.getChildByName("spr_poker_heng").active = this.props.sendedP !== 0;
            sendCardNode.getChildByName("spr_poker_shu").active = this.props.readySendP !== 0;

            if (this.props.sendedP / pokerTotalNum < 1 / 3) {
              this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_heng").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HENG_PAI_MINI).source;
            } else if (this.props.sendedP / pokerTotalNum < 2 / 3 && this.props.sendedP / pokerTotalNum > 1 / 3) {
              this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_heng").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HENG_PAI_MIDDLE).source;
            } else {
              this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_heng").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HENG_PAI_BIG).source;
            } // 竖牌--未使用的牌


            if (this.props.readySendP / pokerTotalNum > 2 / 3) {
              this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_shu").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_SHU_PAI_BIG).source;
            } else if (this.props.readySendP / pokerTotalNum < 2 / 3 && this.props.readySendP / pokerTotalNum > 1 / 3) {
              this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_shu").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_SHU_PAI_MIDDLE).source;
            } else {
              this.node.getChildByName("prefabs_dragonTiger_sendCard").getChildByName("spr_poker_shu").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_SHU_PAI_MINI).source;
            }
          }
        }
        /**发牌动画*/


        sendCardAction() {
          //发牌的动画节点
          if (this.node && this.node.isValid) {
            this.propertyNode.props_cards_right.active = false;
            this.propertyNode.props_cards_left.active = false;
            this.propertyNode.props_spr_cardBg_left.active = true;
            this.propertyNode.props_spr_cardBg_left.getComponent(Animation).play();
            this.propertyNode.props_spr_cardBg_left.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
              this.propertyNode.props_cards_left.active = true; // this.propertyNode.props_dragonTiger_pokerLeft.parent.getChildByName("spr_cardBg_left").active=true;

              this.propertyNode.props_spr_cardBg_right.active = true;
              this.propertyNode.props_spr_cardBg_right.getComponent(Animation).play();
            }, this);
            this.propertyNode.props_spr_cardBg_right.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
              this.propertyNode.props_cards_right.active = true; // this.propertyNode.props_dragonTiger_pokerRight.parent.getChildByName("spr_cardBg_right").active=true;

              this.propertyNode.props_spr_cardBg_left.active = false;
              this.propertyNode.props_spr_cardBg_right.active = false;
            }, this);
            this.sendCard();
          } else {
            return;
          }
        }
        /**洗牌*/


        shuffleCard() {
          if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel).isUnMount || !this.propertyNode) {
            return;
          }

          ;
          var leftCard = this.propertyNode.props_dragonTiger_pokerLeft;
          var rightCard = this.propertyNode.props_dragonTiger_pokerRight;

          if (this.node && this.node.isValid) {
            if (this.props && this.props.pokerInfo) {
              var dragonTigerLeftCard = _extends({}, this.props.pokerInfo.pokerLeftNum);

              var dragonTigerRightCard = _extends({}, this.props.pokerInfo.pokerRightNum);

              (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                error: Error()
              }), bundleDragonTiger) : bundleDragonTiger).load(dragonTigerLeftCard.color == 1 ? "poker/poker_num_b" + dragonTigerLeftCard.rank + "/spriteFrame" : "poker/poker_num_r" + dragonTigerLeftCard.rank + "/spriteFrame", SpriteFrame, (err, sp) => {
                if (!err) {
                  if (!leftCard || !leftCard.children) {
                    return;
                  }

                  ; // getNodeByNameDeep("spr_poker_num", leftCard).getComponent(Sprite).spriteFrame = sp;

                  leftCard.getChildByName("spr_poker_num").getComponent(Sprite).spriteFrame = sp;
                }
              });
              (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                error: Error()
              }), bundleDragonTiger) : bundleDragonTiger).load("poker/poker_flower_s" + dragonTigerLeftCard.suit + "/spriteFrame", SpriteFrame, (err, sp) => {
                if (!err) {
                  if (!leftCard || !leftCard.children) {
                    return;
                  }

                  ;
                  leftCard.getChildByName("spr_poker_flowerS").getComponent(Sprite).spriteFrame = sp;
                }
              });

              if (leftCard && Number(dragonTigerLeftCard.rank) <= 10) {
                (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                  error: Error()
                }), bundleDragonTiger) : bundleDragonTiger).load("poker/poker_flower_" + dragonTigerLeftCard.suit + "/spriteFrame", SpriteFrame, (err, sp) => {
                  if (!err) {
                    if (!leftCard || !leftCard.children) {
                      return;
                    }

                    ;
                    leftCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp;
                  }
                });
              } else {
                (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                  error: Error()
                }), bundleDragonTiger) : bundleDragonTiger).load(dragonTigerLeftCard.color == 1 ? "poker/poker_flower_b" + dragonTigerLeftCard.rank + "/spriteFrame" : "poker/poker_flower_r" + dragonTigerLeftCard.rank + "/spriteFrame", SpriteFrame, (err, sp) => {
                  if (!err) {
                    if (!leftCard || !leftCard.children) {
                      return;
                    }

                    ;
                    leftCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp;
                  }
                });
              }

              leftCard.setPosition(-122, 254);
              (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                error: Error()
              }), bundleDragonTiger) : bundleDragonTiger).load(dragonTigerRightCard.color == 1 ? "poker/poker_num_b" + dragonTigerRightCard.rank + "/spriteFrame" : "poker/poker_num_r" + dragonTigerRightCard.rank + "/spriteFrame", SpriteFrame, (err, sp) => {
                if (!err) {
                  if (!rightCard || !rightCard.children) {
                    return;
                  }

                  ;
                  rightCard.getChildByName("spr_poker_num").getComponent(Sprite).spriteFrame = sp;
                }
              });
              (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                error: Error()
              }), bundleDragonTiger) : bundleDragonTiger).load("poker/poker_flower_s" + dragonTigerRightCard.suit + "/spriteFrame", SpriteFrame, (err, sp) => {
                if (!err) {
                  if (!rightCard || !rightCard.children) {
                    return;
                  }

                  ;
                  rightCard.getChildByName("spr_poker_flowerS").getComponent(Sprite).spriteFrame = sp;
                }
              });

              if (rightCard && Number(dragonTigerRightCard.rank) <= 10) {
                (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                  error: Error()
                }), bundleDragonTiger) : bundleDragonTiger).load("poker/poker_flower_" + dragonTigerRightCard.suit + "/spriteFrame", SpriteFrame, (err, sp) => {
                  if (!err) {
                    if (!rightCard || !rightCard.children) {
                      return;
                    }

                    ;
                    rightCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp;
                  }
                });
              } else {
                (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                  error: Error()
                }), bundleDragonTiger) : bundleDragonTiger).load(dragonTigerRightCard.color == 1 ? "poker/poker_flower_b" + dragonTigerRightCard.rank + "/spriteFrame" : "poker/poker_flower_r" + dragonTigerRightCard.rank + "/spriteFrame", SpriteFrame, (err, sp) => {
                  if (!err) {
                    if (!rightCard || !rightCard.children) {
                      return;
                    }

                    ;
                    rightCard.getChildByName("spr_poker_flower").getComponent(Sprite).spriteFrame = sp;
                  }
                });
              }

              rightCard.setPosition(118, 254);
            }
          }
        }
        /**结算输赢*/


        settleAccount() {
          if (this.node && this.node.isValid) {
            console.log("this.props.winType", this.props.winType);

            if (this.props.winType === 1) {
              this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                this.events.openWinPanel();
                (_crd && playWin === void 0 ? (_reportPossibleCrUseOfplayWin({
                  error: Error()
                }), playWin) : playWin)();
                window.setTimeout(() => done(), 1000);
              }), false);
            } else if (this.props.winType === 2) {
              this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                this.events.openLosePanel();
                (_crd && playDefeat === void 0 ? (_reportPossibleCrUseOfplayDefeat({
                  error: Error()
                }), playDefeat) : playDefeat)();
                window.setTimeout(() => done(), 1000);
              }), false);
            } else {}
          }
        }
        /**移除下注的金币*/


        removeChip() {
          //移除添加的金币节点
          if (this.node === null) {
            return;
          } // this.betAreaInfo.clear();
          // this.clearAllBetAreaGold()


          this.areaInfo = [1, 2, 3];
          this.propertyNode.props_add_chips.removeAllChildren(); // let child=this.node.getChildByName("props_add_chips").children
          // let chip:Node[]=[]
          //  for(let i=0;i<child.length;i++){
          //    if(child[i].name==="prefabs_dragonTiger_chip"){
          //     chip.push(child[i])
          //    }
          //  }
          // chip.forEach((item)=>{
          // 	tween(item).to(0.2,{scale:new Vec3(0,0,0)}).start();
          //   // item.destroy()
          //   this.node.getChildByName("props_add_chips").removeChild(item)
          // })
        }
        /**初始化*/


        init() {
          if (this.node && this.node.isValid) {
            this.lastArr = this.amountArr; //留存上一把的下注情况

            this.amountArr = [];
            this.removeChip(); // 被翻过来的牌
            // this.propertyNode.props_dragonTiger_pokerLeft.active=false;
            // this.propertyNode.props_dragonTiger_pokerRight.active=false;
            // vsIcon隐藏

            this.node.getChildByName("prefabs_dragonTiger_card").getChildByName("dragonTiger_VS").active = false; // 倒计时12-6节点

            this.propertyNode.props_djs10_6.active = true; // 赢的光圈节点

            this.skeleton.active = false;
            this.skeletonWin.active = false;
            this.propertyNode.props_btn_dragon.getChildByName("spr_bet_bg").getChildByName("Label_bet_mine").getComponent(Label).string = '0';
            this.propertyNode.props_btn_tiger.getChildByName("spr_bet_bg").getChildByName("Label_bet_mine").getComponent(Label).string = '0';
            this.propertyNode.props_btn_seri.getChildByName("spr_bet_bg").getChildByName("Label_bet_mine").getComponent(Label).string = '0';
            this.propertyNode.props_btn_dragon.getChildByName("spr_bet_bg").active = false;
            this.propertyNode.props_btn_seri.getChildByName("spr_bet_bg").active = false;
            this.propertyNode.props_btn_tiger.getChildByName("spr_bet_bg").active = false; // this.propertyNode.props_btn_dragon.getChildByName("Label_bet_all").getComponent(Label).string="0";
            // this.propertyNode.props_btn_tiger.getChildByName("Label_bet_all").getComponent(Label).string="0";
            // this.propertyNode.props_btn_seri.getChildByName("Label_bet_all").getComponent(Label).string="0";

            if (!this.isShowGame) {
              this.propertyNode.props_cards_right.active = true;
              this.propertyNode.props_cards_left.active = true;
              this.leftNode && this.leftNode.destroy();
              this.rightNode && this.rightNode.destroy();
            }
          }
        }
        /**金币不足*/


        judgeCoin(gold) {
          // 当用户的金币值小于下注的金币值时，下注金币呈现灰度，不可点击
          this.propertyNode.props_ToggleGroup.children.forEach(item => {
            var amountNum = item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).string;

            if (amountNum.charAt(amountNum.length - 1) == "K") {
              amountNum = String(Number(amountNum.substring(0, amountNum.length - 1)) * 1000);
            } else if (amountNum.charAt(amountNum.length - 1) == "M") {
              amountNum = String(Number(amountNum.substring(0, amountNum.length - 1)) * 1000000);
            }

            if (gold < Number(amountNum)) {
              item.getChildByName("spr_chips").getComponent(Sprite).grayscale = true;
              item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).font = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
                error: Error()
              }), FontPathDefine) : FontPathDefine).WU_BET).source;
              item.getComponent(Toggle).interactable = false;
              item.getComponent(Toggle).isChecked = false;
              item.children[0].active = true;
              item.children[1].active = true;
              item.children[2].active = false;
            } else {
              item.getChildByName("spr_chips").getComponent(Sprite).grayscale = false;
              item.getComponent(Toggle).interactable = true;
              var _amountNum = item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).string;
              var font = _amountNum == "1000" ? (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
                error: Error()
              }), FontPathDefine) : FontPathDefine).GREEN_BET).source : _amountNum == "5000" ? (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
                error: Error()
              }), FontPathDefine) : FontPathDefine).BLUE_BET).source : _amountNum == "10K" ? (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
                error: Error()
              }), FontPathDefine) : FontPathDefine).DARK_BLUE_BET).source : _amountNum == "100K" ? (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
                error: Error()
              }), FontPathDefine) : FontPathDefine).RED_BET).source : _amountNum == "500K" ? (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
                error: Error()
              }), FontPathDefine) : FontPathDefine).PURPLE_BET).source : (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
                error: Error()
              }), FontPathDefine) : FontPathDefine).ORANGE_BET).source;
              item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).font = font;
              item.getComponent(Toggle).isChecked = false;
              item.children[0].active = true;
              item.children[1].active = true;
              item.children[2].active = false; //默认选中上一局最后下注的金币

              if (item.getComponent(Toggle).isChecked) {
                item.children[0].active = false;
                item.children[1].active = false;
                item.children[2].active = true;
              }
            }
          });
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
          this.taskScheduler.stopQueue(false);
        }

        bindUI() {
          //充值弹框隐藏
          this.propertyNode.props_layout_lock.active = false;
        }
        /**更新锁定下注区域状态 */


        updateLockBetState() {
          // 是否锁定下注  金币不足5千时出现充值弹框
          var isLock = this.props.gold < 5000 || this.props.gold == undefined || this.props.gold == 0;
          ;

          if (this.props.tips && this.props.tips.length > 0) {
            isLock = true;
          } else {
            isLock = false;
          }

          if (isLock) {
            this.updateTipsValue(this.propertyNode.props_tips_gold, String(5000));
            this.updateTipsShow();
          }

          this.propertyNode.props_layout_lock.active = isLock;

          if (this.props.gold < 5000) {
            // 停止下注
            this.propertyNode.props_ToggleGroup.children.forEach(item => {
              item.getComponent(Toggle).interactable = false;
              item.getComponent(Toggle).isChecked = false;
              item.children[0].active = true;
              item.children[1].active = true;
              item.children[2].active = false;
            });
          }
        }

        updateTipsShow() {
          this.propertyNode.props_tips_vip.active = false;
          this.propertyNode.props_tips_gold.active = false;

          if (this.props.tips && this.props.tips.length > 0) {
            var tips = this.props.tips[0];
            var node;

            if ('vip' === tips.name.toLowerCase()) {
              node = this.propertyNode.props_tips_vip;
            } else if ('gold' === tips.name.toLowerCase()) {
              node = this.propertyNode.props_tips_gold;
            } else if ('level' === tips.name.toLowerCase()) {
              node = this.propertyNode.props_tips_vip;
            }

            node && this.updateTipsValue(node, tips.num);
          }
        }

        updateTipsValue(node, num) {
          node.active = true;
          node.getChildByName('Label_lock_num').getComponent(Label).string = Number(num).formatAmountWithCommas();
          this.propertyNode.props_layout_lock.active = true;
        }
        /**
        * 获得自己的头像位置
        * @returns 
        */


        getMyHeadPosition() {
          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.myHeadPosition.y);
        }
        /**筹码飞向用户头像 */


        chipFlyToHead(chip, betInfo) {
          var chipNode = chip.comp.node;
          var endPositon = betInfo ? this.getFlyToHeadEndPosition(betInfo) : this.getMyHeadPosition();
          var uiTransform = this.node.getComponent(UITransform);
          tween(chipNode).to(0.3, {
            worldPosition: uiTransform.convertToWorldSpaceAR(endPositon)
          }).call(() => {
            chip.unMount();
          }).start();
        }

        cancelBet(cancelBetData) {
          if (cancelBetData) {
            var betInfos = this.betAreaInfo.get(cancelBetData.betType);
            if (betInfos === undefined) return;

            if (betInfos && betInfos.length > 0) {
              var chips = betInfos.find(v => v.userId === (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).memberId || v.isMe).chips;

              for (var i = 0; i < chips.length; i++) {
                var chip = chips[i];

                if (chip.comp.props.value === cancelBetData.betAmount) {
                  chips.splice(i, 1);
                  this.chipFlyToHead(chip, undefined);
                  break;
                }
              }
            }

            var betArea = this.getNodeByBetType(cancelBetData.betType).getChildByName("Layout_bet"); // this.updateBetAreaGold(cancelBetData, betArea.parent);

            var betAmount = cancelBetData.betAmount < 10000 ? cancelBetData.betAmount.formatAmountWithCommas() : cancelBetData.betAmount.formatAmountWithLetter();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              position: (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
                error: Error()
              }), ToastPosition) : ToastPosition).MIDDLE,
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.InitGameModule.BetFaild, {}, {
                placeStr: "{0} 筹码下注失败"
              }).format(betAmount)
            }));
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "history", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b146363db4adb51f1b6cbf10b11923513b0b248.js.map