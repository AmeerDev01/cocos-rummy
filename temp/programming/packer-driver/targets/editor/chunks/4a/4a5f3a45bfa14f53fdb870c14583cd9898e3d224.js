System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Game, UITransform, Vec3, _decorator, find, game, sys, ViewModel, StoreInject, GameStatus, gameCacheData, SKT_MAG_TYPE, sktInstance, sktMsgListener, bundlePkgName, mainGameViewModel, sourceManageSelector, config, initBetData, global, lang, addToastAction, BaseViewModel, PrefabPathDefine, EffectType, BetAreaViewModel, FooterViewModel, WinViewModel, LoseViewModel, UsersViewModel, setCountDownAction, setGameStatusAction, setGoldAction, setInitGameStatusAction, setLayCountDownAction, setMyInfoAction, setMyWinLose, setOnlineNumber, setSecondsAction, setTipsAction, setUsersInfoAction, TitleViewModel, changeAllWinUsersAction, changeWinAreaRateAction, changeGoldDataAction, setMemberBetAction, setNewBetDataAction, changeCardTypeAction, changeCancelBetDataAction, HistoryViewModel, CardsViewModel, SendCardsViewModel, getStore, changeMaxHistoryAction, changeMinHistoryAction, changeBlueCardAction, changeRedCardAction, changeTwinNumAction, BeginViewModel, BANKER_ID, _dec, _class, _crd, ccclass, property, historyViewModel, usersViewModel, footerViewModel, betAreaViewModel, winViewModel, loseViewModel, sendCardsViewModel, cardViewModel, beginViewModel, titleViewModel, heGuanViewModel, GameBoardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBandarQiuQiu_gameBoard(extras) {
    _reporterNs.report("BandarQiuQiu_gameBoard", "../components/BandarQiuQiu_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/BandarQiuQiu_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/BandarQiuQiu_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGiftVo(extras) {
    _reporterNs.report("ResGiftVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfbundlePkgName(extras) {
    _reporterNs.report("bundlePkgName", "../sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetAreaViewModel(extras) {
    _reporterNs.report("BetAreaViewModel", "./BandarQiuQiuBetAreaViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFooterViewModel(extras) {
    _reporterNs.report("FooterViewModel", "./BandarQiuQiuFooterViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinViewModel(extras) {
    _reporterNs.report("WinViewModel", "./BandarQiuQiuWinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoseViewModel(extras) {
    _reporterNs.report("LoseViewModel", "./BandarQiuQiuLoseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUsersViewModel(extras) {
    _reporterNs.report("UsersViewModel", "./BandarQiuQiuUsersViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetCountDownAction(extras) {
    _reporterNs.report("setCountDownAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetGameStatusAction(extras) {
    _reporterNs.report("setGameStatusAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetGoldAction(extras) {
    _reporterNs.report("setGoldAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetInitGameStatusAction(extras) {
    _reporterNs.report("setInitGameStatusAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLayCountDownAction(extras) {
    _reporterNs.report("setLayCountDownAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMyInfoAction(extras) {
    _reporterNs.report("setMyInfoAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMyWinLose(extras) {
    _reporterNs.report("setMyWinLose", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetOnlineNumber(extras) {
    _reporterNs.report("setOnlineNumber", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSecondsAction(extras) {
    _reporterNs.report("setSecondsAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTipsAction(extras) {
    _reporterNs.report("setTipsAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetUsersInfoAction(extras) {
    _reporterNs.report("setUsersInfoAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTitleViewModel(extras) {
    _reporterNs.report("TitleViewModel", "./BandarQiuQiuTitleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAllWinUsersAction(extras) {
    _reporterNs.report("changeAllWinUsersAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeWinAreaRateAction(extras) {
    _reporterNs.report("changeWinAreaRateAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldDataAction(extras) {
    _reporterNs.report("changeGoldDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberBetAction(extras) {
    _reporterNs.report("setMemberBetAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetNewBetDataAction(extras) {
    _reporterNs.report("setNewBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCardTypeAction(extras) {
    _reporterNs.report("changeCardTypeAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCancelBetDataAction(extras) {
    _reporterNs.report("changeCancelBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryViewModel(extras) {
    _reporterNs.report("HistoryViewModel", "./BandarQiuQiuMaxHistoryViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardsViewModel(extras) {
    _reporterNs.report("CardsViewModel", "./BandarQiuQiuCardsViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendCardsViewModel(extras) {
    _reporterNs.report("SendCardsViewModel", "./BandarQiuQiuSendCardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeMaxHistoryAction(extras) {
    _reporterNs.report("changeMaxHistoryAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeMinHistoryAction(extras) {
    _reporterNs.report("changeMinHistoryAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeBlueCardAction(extras) {
    _reporterNs.report("changeBlueCardAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeRedCardAction(extras) {
    _reporterNs.report("changeRedCardAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeTwinNumAction(extras) {
    _reporterNs.report("changeTwinNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeginViewModel(extras) {
    _reporterNs.report("BeginViewModel", "./BandarQiuQIuBeginViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBANKER_ID(extras) {
    _reporterNs.report("BANKER_ID", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  _export({
    historyViewModel: void 0,
    usersViewModel: void 0,
    footerViewModel: void 0,
    betAreaViewModel: void 0,
    winViewModel: void 0,
    loseViewModel: void 0,
    sendCardsViewModel: void 0,
    cardViewModel: void 0,
    beginViewModel: void 0,
    titleViewModel: void 0,
    heGuanViewModel: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Game = _cc.Game;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      find = _cc.find;
      game = _cc.game;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      GameStatus = _unresolved_3.GameStatus;
      gameCacheData = _unresolved_3.gameCacheData;
    }, function (_unresolved_4) {
      SKT_MAG_TYPE = _unresolved_4.SKT_MAG_TYPE;
      sktInstance = _unresolved_4.sktInstance;
      sktMsgListener = _unresolved_4.sktMsgListener;
    }, function (_unresolved_5) {
      bundlePkgName = _unresolved_5.bundlePkgName;
    }, function (_unresolved_6) {
      mainGameViewModel = _unresolved_6.mainGameViewModel;
      sourceManageSelector = _unresolved_6.sourceManageSelector;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
      initBetData = _unresolved_7.initBetData;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
      lang = _unresolved_8.lang;
    }, function (_unresolved_9) {
      addToastAction = _unresolved_9.addToastAction;
    }, function (_unresolved_10) {
      BaseViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      PrefabPathDefine = _unresolved_11.PrefabPathDefine;
    }, function (_unresolved_12) {
      EffectType = _unresolved_12.EffectType;
    }, function (_unresolved_13) {
      BetAreaViewModel = _unresolved_13.default;
    }, function (_unresolved_14) {
      FooterViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      WinViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      LoseViewModel = _unresolved_16.default;
    }, function (_unresolved_17) {
      UsersViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      setCountDownAction = _unresolved_18.setCountDownAction;
      setGameStatusAction = _unresolved_18.setGameStatusAction;
      setGoldAction = _unresolved_18.setGoldAction;
      setInitGameStatusAction = _unresolved_18.setInitGameStatusAction;
      setLayCountDownAction = _unresolved_18.setLayCountDownAction;
      setMyInfoAction = _unresolved_18.setMyInfoAction;
      setMyWinLose = _unresolved_18.setMyWinLose;
      setOnlineNumber = _unresolved_18.setOnlineNumber;
      setSecondsAction = _unresolved_18.setSecondsAction;
      setTipsAction = _unresolved_18.setTipsAction;
      setUsersInfoAction = _unresolved_18.setUsersInfoAction;
    }, function (_unresolved_19) {
      TitleViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      changeAllWinUsersAction = _unresolved_20.changeAllWinUsersAction;
      changeWinAreaRateAction = _unresolved_20.changeWinAreaRateAction;
      changeGoldDataAction = _unresolved_20.changeGoldDataAction;
      setMemberBetAction = _unresolved_20.setMemberBetAction;
      setNewBetDataAction = _unresolved_20.setNewBetDataAction;
      changeCardTypeAction = _unresolved_20.changeCardTypeAction;
      changeCancelBetDataAction = _unresolved_20.changeCancelBetDataAction;
    }, function (_unresolved_21) {
      HistoryViewModel = _unresolved_21.default;
    }, function (_unresolved_22) {
      CardsViewModel = _unresolved_22.default;
    }, function (_unresolved_23) {
      SendCardsViewModel = _unresolved_23.default;
    }, function (_unresolved_24) {
      getStore = _unresolved_24.getStore;
    }, function (_unresolved_25) {
      changeMaxHistoryAction = _unresolved_25.changeMaxHistoryAction;
      changeMinHistoryAction = _unresolved_25.changeMinHistoryAction;
    }, function (_unresolved_26) {
      changeBlueCardAction = _unresolved_26.changeBlueCardAction;
      changeRedCardAction = _unresolved_26.changeRedCardAction;
      changeTwinNumAction = _unresolved_26.changeTwinNumAction;
    }, function (_unresolved_27) {
      BeginViewModel = _unresolved_27.default;
    }, function (_unresolved_28) {
      BANKER_ID = _unresolved_28.BANKER_ID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6ac8vVFRtP8q/XwBdWsa4y", "BandarQiuQiuGameBoardViewModel", undefined);

      __checkObsolete__(['Game', 'Node', 'UITransform', 'Vec3', '_decorator', 'find', 'game', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      GameBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GameBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('BandarQiuQiu_gameBoard');
          this.gameType = (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
          this.countDown = void 0;
          this.layCountdown = void 0;
          // private isInit: boolean = true;
          this.winArea = [];
          this.winCardRate = [];
          this.allCardRate = [];
          this.isShowGame = true;
          // 开始倒计时
          this.timer = 0;
          this.timer2 = 0;
        }

        begin() {
          this.listenerAuth(); //认证

          this.listenerUserJoinOrQuit(); // 初始化界面

          this.initView();
          game.on(Game.EVENT_HIDE, () => {
            //游戏切入后台
            this.isShowGame = false;
          });
          game.on(Game.EVENT_SHOW, () => {
            //游戏进入
            this.isShowGame = true;

            if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {}
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TOP_UP, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //10
            this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
              error: Error()
            }), setGoldAction) : setGoldAction)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_TIP, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //11
            this.dispatch((_crd && setTipsAction === void 0 ? (_reportPossibleCrUseOfsetTipsAction({
              error: Error()
            }), setTipsAction) : setTipsAction)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).POKER, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //805  
            this.dispatch((_crd && changeBlueCardAction === void 0 ? (_reportPossibleCrUseOfchangeBlueCardAction({
              error: Error()
            }), changeBlueCardAction) : changeBlueCardAction)(data.lotteryVo.blue));
            this.dispatch((_crd && changeRedCardAction === void 0 ? (_reportPossibleCrUseOfchangeRedCardAction({
              error: Error()
            }), changeRedCardAction) : changeRedCardAction)(data.lotteryVo.red));
            let twinNum = {
              blueNum: data.lotteryVo.blueNum,
              redNum: data.lotteryVo.redNum
            };
            let greenType;
            let blueType;
            let redType;

            if (data.lotteryVo.greenType) {
              greenType = data.lotteryVo.greenType;
            } else {
              greenType = 0;
            }

            if (data.lotteryVo.blueType) {
              blueType = data.lotteryVo.blueType;
            } else {
              blueType = 0;
            }

            if (data.lotteryVo.redType) {
              redType = data.lotteryVo.redType;
            } else {
              redType = 0;
            }

            let cardType = {
              greenType,
              blueType,
              redType
            };
            this.dispatch((_crd && changeTwinNumAction === void 0 ? (_reportPossibleCrUseOfchangeTwinNumAction({
              error: Error()
            }), changeTwinNumAction) : changeTwinNumAction)(twinNum));
            this.dispatch((_crd && changeWinAreaRateAction === void 0 ? (_reportPossibleCrUseOfchangeWinAreaRateAction({
              error: Error()
            }), changeWinAreaRateAction) : changeWinAreaRateAction)(data.lotteryVo.winType));
            this.dispatch((_crd && changeCardTypeAction === void 0 ? (_reportPossibleCrUseOfchangeCardTypeAction({
              error: Error()
            }), changeCardTypeAction) : changeCardTypeAction)(cardType));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAMESTATUS_CRASH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //8101
            // this.isInit = false;
            if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET && data.seconds > 0) {
              this.winArea = [];
              this.winCardRate = [];
              this.allCardRate = [];
              this.dispatch((_crd && setSecondsAction === void 0 ? (_reportPossibleCrUseOfsetSecondsAction({
                error: Error()
              }), setSecondsAction) : setSecondsAction)(data.seconds));
              this.countDown = 15;
              window.setTimeout(() => {
                this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                  error: Error()
                }), setCountDownAction) : setCountDownAction)(this.countDown));
                this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                  error: Error()
                }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                  error: Error()
                }), GameStatus) : GameStatus).BET));
                this.startCountdown();
              }, 4500);
              this.stopLayCountdown();

              if (data.seconds === 19) {
                if (!this.isShowGame) {
                  return;
                }

                this.openSendCard();
              }

              this.dispatch((_crd && setUsersInfoAction === void 0 ? (_reportPossibleCrUseOfsetUsersInfoAction({
                error: Error()
              }), setUsersInfoAction) : setUsersInfoAction)((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).leftUsers.concat((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).rightUsers)));
            } else if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              this.stopCountdown();
              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).STOP_BET));
              this.dispatch((_crd && changeMinHistoryAction === void 0 ? (_reportPossibleCrUseOfchangeMinHistoryAction({
                error: Error()
              }), changeMinHistoryAction) : changeMinHistoryAction)(data.data.list));
            } else {
              this.winCardRate = [];
              this.allCardRate = [];
              this.winArea = [];
              this.layCountdown = data.seconds;
              this.startLayCountdown();
              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).WAIT));
              this.dispatch((_crd && setLayCountDownAction === void 0 ? (_reportPossibleCrUseOfsetLayCountDownAction({
                error: Error()
              }), setLayCountDownAction) : setLayCountDownAction)(data.seconds));
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_ALL, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //802
            if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).preBet) {
              this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
                error: Error()
              }), setGoldAction) : setGoldAction)(data.gold));
              this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
                error: Error()
              }), setMemberBetAction) : setMemberBetAction)(data.memberBet));
            } else if (data.resultCode === 0) {
              const sendBet = {
                roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId,
                memberId: this.comp.props.myInfo.memberId,
                memberName: this.comp.props.myInfo.memberName,
                gold: data.betAmount,
                betType: data.betType,
                isMe: true,
                betId: data.betId
              };
              betAreaViewModel.comp.amountArr.push(sendBet);
              this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
                error: Error()
              }), setGoldAction) : setGoldAction)(data.gold));
              this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
                error: Error()
              }), setMemberBetAction) : setMemberBetAction)(data.memberBet));
            } else if (data.resultCode !== undefined && data.resultCode !== 0) {
              this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
                error: Error()
              }), setGoldAction) : setGoldAction)(data.gold));
              this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
                error: Error()
              }), setMemberBetAction) : setMemberBetAction)(data.memberBet));
              const betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
                error: Error()
              }), initBetData) : initBetData)(this.comp.props.myInfo.index, this.comp.props.myInfo.memberId, data.betType, data.betAmount);
              betData.betId = data.betId;
              betData.isMyBet = true;
              this.dispatch((_crd && changeCancelBetDataAction === void 0 ? (_reportPossibleCrUseOfchangeCancelBetDataAction({
                error: Error()
              }), changeCancelBetDataAction) : changeCancelBetDataAction)(betData));
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HISTORY, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //806
            this.dispatch((_crd && changeMaxHistoryAction === void 0 ? (_reportPossibleCrUseOfchangeMaxHistoryAction({
              error: Error()
            }), changeMaxHistoryAction) : changeMaxHistoryAction)(data.winLoseList));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_RESPONSE, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //8102
            const memberId = data.memberData.memberId;
            const index = this.getSeatIndex(memberId);
            const isMyBet = this.comp.props.myInfo.memberId === memberId; // console.log(data.goldData[data.memberData.type]);

            const betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
              error: Error()
            }), initBetData) : initBetData)(index, memberId, data.memberData.type, data.memberData.gold);
            betData.isMyBet = isMyBet;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).goldData = data.goldData;
            this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
              error: Error()
            }), setNewBetDataAction) : setNewBetDataAction)(betData));
            this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
              error: Error()
            }), changeGoldDataAction) : changeGoldDataAction)(data.goldData)); // console.log(data);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).SETTLEMENT, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //804
            // console.log(data);
            let myInfo = {
              gold: data.myInfo.gold,
              goldStr: data.myInfo.gold + "",
              icon: data.myInfo.icon,
              memberName: data.myInfo.memberName,
              winGold: data.myInfo.winGold,
              memberId: data.myInfo.memberId,
              index: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameOption.lookOnIndex,
              memberBet: data.myInfo.memberBet,
              winType: data.myInfo
            };
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).winList = data.roomWinInfo;
            this.dispatch((_crd && setMyInfoAction === void 0 ? (_reportPossibleCrUseOfsetMyInfoAction({
              error: Error()
            }), setMyInfoAction) : setMyInfoAction)(myInfo));
            this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
              error: Error()
            }), setGoldAction) : setGoldAction)(data.myInfo.gold));
            this.dispatch((_crd && setMyWinLose === void 0 ? (_reportPossibleCrUseOfsetMyWinLose({
              error: Error()
            }), setMyWinLose) : setMyWinLose)(data.myInfo.winType));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).ALL_USERS, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //807
            // 改变在线人数
            this.dispatch((_crd && setOnlineNumber === void 0 ? (_reportPossibleCrUseOfsetOnlineNumber({
              error: Error()
            }), setOnlineNumber) : setOnlineNumber)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).OTHER_WIN, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //808
            this.updateWinloss(data.list); // 改变在线人数
            // this.dispatch(setOnlineNumber(data.roomInfoSize));

            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers = data.roomLeftInfoVos;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers = data.roomRightInfoVos; //榜上所有用户信息

            this.setUsersInfo();
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_SHOW, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //810
            if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET === this.comp.props.gameStatus) {
              this.countDown = data.seconds;
              this.startCountdown();
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIVE_GIFT, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //11
            const seats = this.comp.props.usersInfo.filter(v => v.memberId === data.receiveMemberId); // 如果展示座位上有两个相同人，就同时送两次

            if (seats && seats.length > 1) {
              seats.forEach(seat => {
                const {
                  x,
                  y
                } = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).headLocations[seat.index];
                const endPos = this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(x, y));
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true), endPos, data.giftId, this.viewNode.parent);
              });
            } else {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true), this.getHeadPos(data.receiveMemberId, false), data.giftId, this.viewNode.parent);
            }
          });
          this.setEvent({
            openHistoryPanel: () => {
              this.openHistory();
            },
            openWinPanel: () => {
              this.openWin();
            },
            openLosePanel: () => {
              this.openLose();
            },
            sendGameShowEvent: () => {
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
          });
        }
        /**获得获得用户所在位置 */


        getHeadPos(memberId, isFrom) {
          const seat = this.comp.props.usersInfo.find(v => v.memberId === memberId);
          let pos;

          if (seat) {
            const {
              x,
              y
            } = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).headLocations[seat.index];
            pos = new Vec3(x, y);
          } else if ((_crd && BANKER_ID === void 0 ? (_reportPossibleCrUseOfBANKER_ID({
            error: Error()
          }), BANKER_ID) : BANKER_ID) === memberId) {
            pos = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.dealerPosition;
          } else if (isFrom && this.comp.props.myInfo.memberId === memberId) {
            pos = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition;
          } else if (isFrom) {
            pos = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition;
          } else {
            return undefined;
          }

          return this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(pos);
        }
        /**
         * 认证消息监听及处理
         */


        listenerAuth() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            sys.localStorage.setItem("auth", JSON.stringify(data));
          }); // sys.localStorage.setItem("token",config.testConfig.token)
          // sys.localStorage.setItem("token",window.location.search.substring(6))

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
            token: sys.localStorage.getItem("token"),
            gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId
          });
        }
        /**
        * 监听用户进出游戏
        */


        listenerUserJoinOrQuit() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_GAME, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //4
            if (!data) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.GameBoardInit, {}, {
                  placeStr: "game init failed"
                })
              }));
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.GameBoardInit)
              });
              return;
            }

            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers = data.leftMember;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers = data.rightMember;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).roomId = data.roomId;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).memberId = data.myInfo.memberId;
            this.dispatch((_crd && setInitGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetInitGameStatusAction({
              error: Error()
            }), setInitGameStatusAction) : setInitGameStatusAction)(data.gameType));
            this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
              error: Error()
            }), changeGoldDataAction) : changeGoldDataAction)(data.goldData));
            let myInfo = {
              gold: data.myInfo.gold,
              goldStr: data.myInfo.gold + "",
              icon: data.myInfo.icon,
              memberName: data.myInfo.memberName,
              winGold: data.myInfo.winGold,
              memberId: data.myInfo.memberId,
              index: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameOption.lookOnIndex,
              memberBet: data.myInfo.memberBet
            };
            this.dispatch((_crd && setMyInfoAction === void 0 ? (_reportPossibleCrUseOfsetMyInfoAction({
              error: Error()
            }), setMyInfoAction) : setMyInfoAction)(myInfo));
            this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
              error: Error()
            }), setGoldAction) : setGoldAction)(data.myInfo.gold));
            this.comp.createMinHistory(data.drawPrizeResults);

            if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.dispatch((_crd && setSecondsAction === void 0 ? (_reportPossibleCrUseOfsetSecondsAction({
                error: Error()
              }), setSecondsAction) : setSecondsAction)(data.seconds));
              this.winArea = [];
              this.winCardRate = [];
              this.allCardRate = [];

              if (data.seconds > 0) {
                if (data.seconds > 15) {
                  this.countDown = 15;
                  let time = data.seconds - 15;
                  window.setTimeout(() => {
                    this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                      error: Error()
                    }), setCountDownAction) : setCountDownAction)(this.countDown));
                    this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                      error: Error()
                    }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                      error: Error()
                    }), GameStatus) : GameStatus).BET));
                    this.startCountdown();
                  }, time * 1000);
                } else {
                  this.countDown = data.seconds;
                  this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                    error: Error()
                  }), setCountDownAction) : setCountDownAction)(this.countDown));
                  this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                    error: Error()
                  }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                    error: Error()
                  }), GameStatus) : GameStatus).BET));
                  this.startCountdown();
                }

                if (data.seconds === 19) {
                  if (!this.isShowGame) {
                    return;
                  }

                  this.openSendCard();
                }
              } else {
                this.stopCountdown();

                if (!data.newQiuQiuLotteryVo || data.newQiuQiuLotteryVo.length === 0) {
                  return;
                }

                ;
                this.dispatch((_crd && changeBlueCardAction === void 0 ? (_reportPossibleCrUseOfchangeBlueCardAction({
                  error: Error()
                }), changeBlueCardAction) : changeBlueCardAction)(data.newQiuQiuLotteryVo.blue));
                this.dispatch((_crd && changeRedCardAction === void 0 ? (_reportPossibleCrUseOfchangeRedCardAction({
                  error: Error()
                }), changeRedCardAction) : changeRedCardAction)(data.newQiuQiuLotteryVo.red));
                let twinNum = {
                  blueNum: data.newQiuQiuLotteryVo.blueNum,
                  redNum: data.newQiuQiuLotteryVo.redNum
                };
                let greenType;
                let blueType;
                let redType;

                if (data.newQiuQiuLotteryVo.greenType) {
                  greenType = data.newQiuQiuLotteryVo.greenType;
                } else {
                  greenType = 0;
                }

                if (data.newQiuQiuLotteryVo.blueType) {
                  blueType = data.newQiuQiuLotteryVo.blueType;
                } else {
                  blueType = 0;
                }

                if (data.newQiuQiuLotteryVo.redType) {
                  redType = data.newQiuQiuLotteryVo.redType;
                } else {
                  redType = 0;
                }

                let cardType = {
                  greenType,
                  blueType,
                  redType
                };
                this.dispatch((_crd && changeTwinNumAction === void 0 ? (_reportPossibleCrUseOfchangeTwinNumAction({
                  error: Error()
                }), changeTwinNumAction) : changeTwinNumAction)(twinNum));
                this.dispatch((_crd && changeWinAreaRateAction === void 0 ? (_reportPossibleCrUseOfchangeWinAreaRateAction({
                  error: Error()
                }), changeWinAreaRateAction) : changeWinAreaRateAction)(data.newQiuQiuLotteryVo.winType));
                this.dispatch((_crd && changeCardTypeAction === void 0 ? (_reportPossibleCrUseOfchangeCardTypeAction({
                  error: Error()
                }), changeCardTypeAction) : changeCardTypeAction)(cardType));
              }
            } else if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)(null));
              this.stopCountdown();

              if (!data.newQiuQiuLotteryVo || data.newQiuQiuLotteryVo.length === 0) {
                return;
              }

              ;
              let cardRoll = cardViewModel.comp.getPropertyNode().props_note_card_roll;
              let cardBack = cardViewModel.comp.getPropertyNode().props_node_card_back;
              cardBack.active = false;
              cardRoll.active = true;
              cardViewModel.comp.changeCardUpDown(data.newQiuQiuLotteryVo.blue, data.newQiuQiuLotteryVo.red);
              let twinNum = {
                blueNum: data.newQiuQiuLotteryVo.blueNum,
                redNum: data.newQiuQiuLotteryVo.redNum
              };
              let greenType;
              let blueType;
              let redType;

              if (data.newQiuQiuLotteryVo.greenType) {
                greenType = data.newQiuQiuLotteryVo.greenType;
              } else {
                greenType = 0;
              }

              if (data.newQiuQiuLotteryVo.blueType) {
                blueType = data.newQiuQiuLotteryVo.blueType;
              } else {
                blueType = 0;
              }

              if (data.newQiuQiuLotteryVo.redType) {
                redType = data.newQiuQiuLotteryVo.redType;
              } else {
                redType = 0;
              }

              let cardType = {
                greenType,
                blueType,
                redType
              };
              this.dispatch((_crd && changeTwinNumAction === void 0 ? (_reportPossibleCrUseOfchangeTwinNumAction({
                error: Error()
              }), changeTwinNumAction) : changeTwinNumAction)(twinNum));
              cardViewModel.comp.playWinBg(twinNum, cardType);
              betAreaViewModel.comp.playWinAnimation(data.newQiuQiuLotteryVo.winType);
              this.dispatch((_crd && changeCardTypeAction === void 0 ? (_reportPossibleCrUseOfchangeCardTypeAction({
                error: Error()
              }), changeCardTypeAction) : changeCardTypeAction)(cardType));
            } else if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT && data.seconds > 0) {
              this.winArea = [];
              this.winCardRate = [];
              this.allCardRate = [];

              if (data.seconds !== 0) {
                this.layCountdown = data.seconds;
                this.startLayCountdown();
              }

              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).WAIT));
              this.dispatch((_crd && setLayCountDownAction === void 0 ? (_reportPossibleCrUseOfsetLayCountDownAction({
                error: Error()
              }), setLayCountDownAction) : setLayCountDownAction)(data.seconds));
            } // 改变在线人数
            // this.dispatch(setOnlineNumber(data.memberNum));
            //榜上所有用户信息


            this.setUsersInfo();
            this.dispatch((_crd && setUsersInfoAction === void 0 ? (_reportPossibleCrUseOfsetUsersInfoAction({
              error: Error()
            }), setUsersInfoAction) : setUsersInfoAction)((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers.concat((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers)));

            if (!this.comp.props.usersInfo || this.comp.props.usersInfo === undefined) {
              return;
            }

            ;
            this.comp.props.usersInfo.forEach((v, i) => {
              usersViewModel.comp.initBSUsers(v, v.index);
            });
          });
        }

        initView() {
          this.openUsers();
          this.openTitle();
          this.openHeGuan();
          this.openBetArea();
          this.openFooter();
          this.openCards(); // this.openSendCard();

          this.openBeginAnim();
        }

        startCountdown() {
          if (this.timer > 0) {
            window.clearInterval(this.timer);
            this.timer = 0;
          }

          this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
            error: Error()
          }), setCountDownAction) : setCountDownAction)(this.countDown--));
          this.timer = window.setInterval(() => {
            this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
              error: Error()
            }), setCountDownAction) : setCountDownAction)(this.countDown--));

            if (this.countDown <= 0) {
              window.clearInterval(this.timer); // this.stopCountdown();//测试为0时不展示时钟

              this.timer = 0;
            }
          }, 1000);
        }

        startLayCountdown() {
          if (this.timer2 > 0) {
            window.clearInterval(this.timer2);
            this.timer2 = 0;
          }

          this.dispatch((_crd && setLayCountDownAction === void 0 ? (_reportPossibleCrUseOfsetLayCountDownAction({
            error: Error()
          }), setLayCountDownAction) : setLayCountDownAction)(this.layCountdown--));
          this.timer2 = window.setInterval(() => {
            this.dispatch((_crd && setLayCountDownAction === void 0 ? (_reportPossibleCrUseOfsetLayCountDownAction({
              error: Error()
            }), setLayCountDownAction) : setLayCountDownAction)(this.layCountdown--));

            if (this.layCountdown <= 0) {
              window.clearInterval(this.timer2); // this.stopCountdown();//测试为0时不展示时钟

              this.timer2 = 0;
            }
          }, 1000);
        }
        /**停止倒计时 */


        stopCountdown() {
          // 如果倒计时已经为0了，不处理了
          if (this.comp.props.countDown <= 0) {
            return;
          }

          this.timer && window.clearInterval(this.timer);
          this.timer = 0;
          this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
            error: Error()
          }), setCountDownAction) : setCountDownAction)(0));
        }
        /**停止倒计时 */


        stopLayCountdown() {
          // 如果倒计时已经为0了，不处理了
          if (beginViewModel.comp.props.layCountDown <= 0) {
            return;
          }

          this.timer2 && window.clearInterval(this.timer2);
          this.timer2 = 0;
          this.dispatch((_crd && setLayCountDownAction === void 0 ? (_reportPossibleCrUseOfsetLayCountDownAction({
            error: Error()
          }), setLayCountDownAction) : setLayCountDownAction)(0));
        }

        unMountCallBack() {
          this.clearData();
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName);
        }

        clearData() {
          titleViewModel.clearCacheData();
        }

        openHistory(nodeWrap) {
          _export("historyViewModel", historyViewModel = new (_crd && HistoryViewModel === void 0 ? (_reportPossibleCrUseOfHistoryViewModel({
            error: Error()
          }), HistoryViewModel) : HistoryViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_HISTORY_WIN).source).appendTo(this.viewNode.parent, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setEvent({
            onClosePanel: () => {
              historyViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            }
          }).connect());
        }

        openHeGuan(nodeWrap) {
          _export("heGuanViewModel", heGuanViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)("BandarQiuQiu_heGuan").mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MANI_HE_GUAN).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openUsers(nodeWrap) {
          _export("usersViewModel", usersViewModel = new (_crd && UsersViewModel === void 0 ? (_reportPossibleCrUseOfUsersViewModel({
            error: Error()
          }), UsersViewModel) : UsersViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_USERS).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openTitle(nodeWrap) {
          _export("titleViewModel", titleViewModel = new (_crd && TitleViewModel === void 0 ? (_reportPossibleCrUseOfTitleViewModel({
            error: Error()
          }), TitleViewModel) : TitleViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_TITLE).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openBetArea() {
          _export("betAreaViewModel", betAreaViewModel = new (_crd && BetAreaViewModel === void 0 ? (_reportPossibleCrUseOfBetAreaViewModel({
            error: Error()
          }), BetAreaViewModel) : BetAreaViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_BET_AREA).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openCards() {
          _export("cardViewModel", cardViewModel = new (_crd && CardsViewModel === void 0 ? (_reportPossibleCrUseOfCardsViewModel({
            error: Error()
          }), CardsViewModel) : CardsViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARDS).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openFooter() {
          _export("footerViewModel", footerViewModel = new (_crd && FooterViewModel === void 0 ? (_reportPossibleCrUseOfFooterViewModel({
            error: Error()
          }), FooterViewModel) : FooterViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_FOOTER).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openBeginAnim() {
          _export("beginViewModel", beginViewModel = new (_crd && BeginViewModel === void 0 ? (_reportPossibleCrUseOfBeginViewModel({
            error: Error()
          }), BeginViewModel) : BeginViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_BEGIN).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openSendCard() {
          _export("sendCardsViewModel", sendCardsViewModel = new (_crd && SendCardsViewModel === void 0 ? (_reportPossibleCrUseOfSendCardsViewModel({
            error: Error()
          }), SendCardsViewModel) : SendCardsViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_SEND_CARD).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).connect());
        }

        openWin(nodeWrap) {
          _export("winViewModel", winViewModel = new (_crd && WinViewModel === void 0 ? (_reportPossibleCrUseOfWinViewModel({
            error: Error()
          }), WinViewModel) : WinViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_WIN).source).appendTo(find("Canvas"), {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setEvent({
            onClosePanel: () => {
              winViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            }
          }).connect());
        }

        openLose(nodeWrap) {
          _export("loseViewModel", loseViewModel = new (_crd && LoseViewModel === void 0 ? (_reportPossibleCrUseOfLoseViewModel({
            error: Error()
          }), LoseViewModel) : LoseViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_LOSE).source).appendTo(find("Canvas"), {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setEvent({
            onClosePanel: () => {
              loseViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            }
          }).connect());
        }

        getSeatIndex(memberId) {
          // 倒起找，原因是因为有可能重复上榜，右边上榜优先
          const seat = [...this.comp.props.usersInfo].reverse().find(v => v.memberId === memberId);

          if (seat) {
            return seat.index;
          }

          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.lookOnIndex;
        }

        updateWinloss(users) {
          if (!users || users.length === 0) {
            this.dispatch((_crd && changeAllWinUsersAction === void 0 ? (_reportPossibleCrUseOfchangeAllWinUsersAction({
              error: Error()
            }), changeAllWinUsersAction) : changeAllWinUsersAction)(null));
            return;
          }

          users.filter(v => v.gold !== 0).forEach(v => {
            v.index = this.getSeatIndex(v.memberId);
            v.time = Date.now();
          }); // console.log("users-----",users);

          this.dispatch((_crd && changeAllWinUsersAction === void 0 ? (_reportPossibleCrUseOfchangeAllWinUsersAction({
            error: Error()
          }), changeAllWinUsersAction) : changeAllWinUsersAction)(users));
        }

        setUsersInfo() {
          /** 初始化榜上用户信息 */
          if ((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers) {
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers.forEach((leftItem, i) => {
              leftItem.index = i;
            });
          }

          if ((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).rightUsers) {
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers.forEach((rightItem, i) => {
              rightItem.index = 3 + i;
            });
          }

          if ((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers === undefined) {
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers = [];
          }

          ;

          if ((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).rightUsers === undefined) {
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers = [];
          }

          ; // this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)));
        }

        connect() {
          this.inject({}, state => {
            return {
              minHistory: state.history.minHistory,
              countDown: state.game.countDown,
              usersInfo: state.game.usersInfo,
              myInfo: state.game.myInfo,
              myWinLose: state.game.myWinLose,
              gameStatus: state.game.gameStatus // initGameType:null,

            };
          });
          return this;
        }

      }) || _class);

      _export("default", GameBoardViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a5f3a45bfa14f53fdb870c14583cd9898e3d224.js.map