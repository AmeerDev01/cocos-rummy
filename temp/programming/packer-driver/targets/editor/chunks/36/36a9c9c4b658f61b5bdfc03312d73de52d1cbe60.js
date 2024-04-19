System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, sys, UITransform, Vec3, ViewModel, StoreInject, getStore, HistoryViewModel, mainGameViewModel, sourceManageSelector, PrefabPathDefine, EffectType, UsersViewModel, TitleViewModel, BetAreaViewModel, FooterViewModel, SKT_MAG_TYPE, sktInstance, sktMsgListener, bundlePkgName, config, initBetData, global, lang, addToastAction, ClockViewModel, OnlineViewModel, BetHistoryViewModel, setCountDownAction, setGameStatusAction, setGoldAction, setInitGameStatusAction, setMyInfoAction, setMyWinLose, setOnlineNumber, setSecondsAction, setTipsAction, setUsersInfoAction, BaseViewModel, gameCacheData, GameStatus, CardBankerViewModel, PotViewModel, SendViewModel, TrigJackpotViewModel, CardUserViewModel, changeRekorAction, changeResult1Action, changeResult2Action, changeResult3Action, changeResult4Action, changeStatistikAction, changeTrenAction, setAllCardTypeAction, setBankerPokerAction, setBlackPokerAction, setBlockNumAction, setDiamondPokerAction, setFarmhouseNumAction, setHeartNumAction, setPlumPokerAction, setRedPokerAction, setSakuraNumAction, setSpadeNumAction, setWinAreaAction, changeAllCardRateAction, changeAllWinUsersAction, changeCardRateAction, changeAreaWinLoseAction, changeCardTypeAction, changeGoldDataAction, setMemberBetAction, setNewBetDataAction, changeCancelBetDataAction, WinViewModel, LoseViewModel, BANKER_ID, _dec, _class, _crd, ccclass, property, historyViewModel, sendViewModel, usersViewModel, footerViewModel, onlineViewModel, betAreaViewModel, winViewModel, loseViewModel, userCardViewModel, bankerCardViewModel, titleViewModel, GameBoardViewModel;

  function _reportPossibleCrUseOfBandar_gameBoard(extras) {
    _reporterNs.report("Bandar_gameBoard", "../components/Bandar_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Bandar_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Bandar_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryViewModel(extras) {
    _reporterNs.report("HistoryViewModel", "./BandarHistoryViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUsersViewModel(extras) {
    _reporterNs.report("UsersViewModel", "./BandarUsersViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTitleViewModel(extras) {
    _reporterNs.report("TitleViewModel", "./BandarTitleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetAreaViewModel(extras) {
    _reporterNs.report("BetAreaViewModel", "./BandarBetAreaViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFooterViewModel(extras) {
    _reporterNs.report("FooterViewModel", "./BandarFooterViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfClockViewModel(extras) {
    _reporterNs.report("ClockViewModel", "./BandarClockViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOnlineViewModel(extras) {
    _reporterNs.report("OnlineViewModel", "./BandarOnlineViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetHistoryViewModel(extras) {
    _reporterNs.report("BetHistoryViewModel", "./BandarBetHistoryViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGiftVo(extras) {
    _reporterNs.report("ResGiftVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardBankerViewModel(extras) {
    _reporterNs.report("CardBankerViewModel", "./BandarCardBankerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPotViewModel(extras) {
    _reporterNs.report("PotViewModel", "./BandarPotViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendViewModel(extras) {
    _reporterNs.report("SendViewModel", "./BandarSendCardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigJackpotViewModel(extras) {
    _reporterNs.report("TrigJackpotViewModel", "./BandarTrigJackpotViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUserViewModel(extras) {
    _reporterNs.report("CardUserViewModel", "./BandarCardUserViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeRekorAction(extras) {
    _reporterNs.report("changeRekorAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult1Action(extras) {
    _reporterNs.report("changeResult1Action", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult2Action(extras) {
    _reporterNs.report("changeResult2Action", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult3Action(extras) {
    _reporterNs.report("changeResult3Action", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeResult4Action(extras) {
    _reporterNs.report("changeResult4Action", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeStatistikAction(extras) {
    _reporterNs.report("changeStatistikAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeTrenAction(extras) {
    _reporterNs.report("changeTrenAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAllCardTypeAction(extras) {
    _reporterNs.report("setAllCardTypeAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBankerPokerAction(extras) {
    _reporterNs.report("setBankerPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBlackPokerAction(extras) {
    _reporterNs.report("setBlackPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBlockNumAction(extras) {
    _reporterNs.report("setBlockNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetDiamondPokerAction(extras) {
    _reporterNs.report("setDiamondPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetFarmhouseNumAction(extras) {
    _reporterNs.report("setFarmhouseNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetHeartNumAction(extras) {
    _reporterNs.report("setHeartNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetPlumPokerAction(extras) {
    _reporterNs.report("setPlumPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRedPokerAction(extras) {
    _reporterNs.report("setRedPokerAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSakuraNumAction(extras) {
    _reporterNs.report("setSakuraNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSpadeNumAction(extras) {
    _reporterNs.report("setSpadeNumAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWinAreaAction(extras) {
    _reporterNs.report("setWinAreaAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAllCardRateAction(extras) {
    _reporterNs.report("changeAllCardRateAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAllWinUsersAction(extras) {
    _reporterNs.report("changeAllWinUsersAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCardRateAction(extras) {
    _reporterNs.report("changeCardRateAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAreaWinLoseAction(extras) {
    _reporterNs.report("changeAreaWinLoseAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCardTypeAction(extras) {
    _reporterNs.report("changeCardTypeAction", "../store/actions/bet", _context.meta, extras);
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

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCancelBetDataAction(extras) {
    _reporterNs.report("changeCancelBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinViewModel(extras) {
    _reporterNs.report("WinViewModel", "./BandarWinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoseViewModel(extras) {
    _reporterNs.report("LoseViewModel", "./BandarLoseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBANKER_ID(extras) {
    _reporterNs.report("BANKER_ID", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  _export({
    historyViewModel: void 0,
    sendViewModel: void 0,
    usersViewModel: void 0,
    footerViewModel: void 0,
    onlineViewModel: void 0,
    betAreaViewModel: void 0,
    winViewModel: void 0,
    loseViewModel: void 0,
    userCardViewModel: void 0,
    bankerCardViewModel: void 0,
    titleViewModel: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      HistoryViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      mainGameViewModel = _unresolved_5.mainGameViewModel;
      sourceManageSelector = _unresolved_5.sourceManageSelector;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      EffectType = _unresolved_7.EffectType;
    }, function (_unresolved_8) {
      UsersViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      TitleViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      BetAreaViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      FooterViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      SKT_MAG_TYPE = _unresolved_12.SKT_MAG_TYPE;
      sktInstance = _unresolved_12.sktInstance;
      sktMsgListener = _unresolved_12.sktMsgListener;
    }, function (_unresolved_13) {
      bundlePkgName = _unresolved_13.bundlePkgName;
    }, function (_unresolved_14) {
      config = _unresolved_14.default;
      initBetData = _unresolved_14.initBetData;
    }, function (_unresolved_15) {
      global = _unresolved_15.global;
      lang = _unresolved_15.lang;
    }, function (_unresolved_16) {
      addToastAction = _unresolved_16.addToastAction;
    }, function (_unresolved_17) {
      ClockViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      OnlineViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      BetHistoryViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      setCountDownAction = _unresolved_20.setCountDownAction;
      setGameStatusAction = _unresolved_20.setGameStatusAction;
      setGoldAction = _unresolved_20.setGoldAction;
      setInitGameStatusAction = _unresolved_20.setInitGameStatusAction;
      setMyInfoAction = _unresolved_20.setMyInfoAction;
      setMyWinLose = _unresolved_20.setMyWinLose;
      setOnlineNumber = _unresolved_20.setOnlineNumber;
      setSecondsAction = _unresolved_20.setSecondsAction;
      setTipsAction = _unresolved_20.setTipsAction;
      setUsersInfoAction = _unresolved_20.setUsersInfoAction;
    }, function (_unresolved_21) {
      BaseViewModel = _unresolved_21.default;
    }, function (_unresolved_22) {
      gameCacheData = _unresolved_22.gameCacheData;
      GameStatus = _unresolved_22.GameStatus;
    }, function (_unresolved_23) {
      CardBankerViewModel = _unresolved_23.default;
    }, function (_unresolved_24) {
      PotViewModel = _unresolved_24.default;
    }, function (_unresolved_25) {
      SendViewModel = _unresolved_25.default;
    }, function (_unresolved_26) {
      TrigJackpotViewModel = _unresolved_26.default;
    }, function (_unresolved_27) {
      CardUserViewModel = _unresolved_27.default;
    }, function (_unresolved_28) {
      changeRekorAction = _unresolved_28.changeRekorAction;
      changeResult1Action = _unresolved_28.changeResult1Action;
      changeResult2Action = _unresolved_28.changeResult2Action;
      changeResult3Action = _unresolved_28.changeResult3Action;
      changeResult4Action = _unresolved_28.changeResult4Action;
      changeStatistikAction = _unresolved_28.changeStatistikAction;
      changeTrenAction = _unresolved_28.changeTrenAction;
    }, function (_unresolved_29) {
      setAllCardTypeAction = _unresolved_29.setAllCardTypeAction;
      setBankerPokerAction = _unresolved_29.setBankerPokerAction;
      setBlackPokerAction = _unresolved_29.setBlackPokerAction;
      setBlockNumAction = _unresolved_29.setBlockNumAction;
      setDiamondPokerAction = _unresolved_29.setDiamondPokerAction;
      setFarmhouseNumAction = _unresolved_29.setFarmhouseNumAction;
      setHeartNumAction = _unresolved_29.setHeartNumAction;
      setPlumPokerAction = _unresolved_29.setPlumPokerAction;
      setRedPokerAction = _unresolved_29.setRedPokerAction;
      setSakuraNumAction = _unresolved_29.setSakuraNumAction;
      setSpadeNumAction = _unresolved_29.setSpadeNumAction;
      setWinAreaAction = _unresolved_29.setWinAreaAction;
    }, function (_unresolved_30) {
      changeAllCardRateAction = _unresolved_30.changeAllCardRateAction;
      changeAllWinUsersAction = _unresolved_30.changeAllWinUsersAction;
      changeCardRateAction = _unresolved_30.changeCardRateAction;
      changeAreaWinLoseAction = _unresolved_30.changeAreaWinLoseAction;
      changeCardTypeAction = _unresolved_30.changeCardTypeAction;
      changeGoldDataAction = _unresolved_30.changeGoldDataAction;
      setMemberBetAction = _unresolved_30.setMemberBetAction;
      setNewBetDataAction = _unresolved_30.setNewBetDataAction;
      changeCancelBetDataAction = _unresolved_30.changeCancelBetDataAction;
    }, function (_unresolved_31) {
      WinViewModel = _unresolved_31.default;
    }, function (_unresolved_32) {
      LoseViewModel = _unresolved_32.default;
    }, function (_unresolved_33) {
      BANKER_ID = _unresolved_33.BANKER_ID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9bcebfBwtRAgabZ6xiIzM9S", "BandarGameBoardViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'find', 'Game', 'game', 'instantiate', 'Node', 'sys', 'UITransform', 'Vec3']);

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
          super('Bandar_gameBoard');
          this.sendViewModel = void 0;
          this.betHistoryViewModel = void 0;
          this.clockViewModel = void 0;
          this.gameType = (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
          this.countDown = void 0;
          this.isShowGame = true;
          this.winArea = [];
          this.winCardRate = [];
          this.allCardRate = [];
          // 开始倒计时
          this.timer = 0;
        }

        begin() {
          this.listenerAuth(); //认证

          this.listenerUserJoinOrQuit(); // 初始化界面

          this.initView();
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TOP_UP, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //10
            this.comp.scheduleOnce(() => {
              this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
                error: Error()
              }), setGoldAction) : setGoldAction)(data));
            }, 7);
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
          }); // sktMsgListener.add(SKT_MAG_TYPE.POKER, bundlePkgName, (data) => {//805
          //   this.dispatch(setBankerPokerAction(data.lotteryVo.farmhouse))
          //   this.dispatch(setBlackPokerAction(data.lotteryVo.spade))
          //   this.dispatch(setRedPokerAction(data.lotteryVo.heart))
          //   this.dispatch(setPlumPokerAction(data.lotteryVo.sakura))
          //   this.dispatch(setDiamondPokerAction(data.lotteryVo.block));
          // })

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAMESTATUS_CRASH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //8101
            if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET && data.seconds > 0) {
              this.winArea = [];
              this.winCardRate = [];
              this.allCardRate = [];
              this.dispatch((_crd && setSecondsAction === void 0 ? (_reportPossibleCrUseOfsetSecondsAction({
                error: Error()
              }), setSecondsAction) : setSecondsAction)(data.seconds));
              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).BET));
              this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                error: Error()
              }), setCountDownAction) : setCountDownAction)(data.seconds));
              this.countDown = data.seconds;
              this.startCountdown();

              if (data.seconds > 3) {
                if (this.comp.isShowGame) {
                  this.openBeginAnim(); // this.openSendCard();
                }
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
              this.updatePokerInfo(data.qiuQiuMemberDrawPrizeVo);
              this.updateAllWinUser(data.qiuQiuWinMemberVo);
              this.updateAreaWinLoseRateInfo(data.qiuQiuMemberWinLoseVo, data.seconds);

              if (data.qiuQiuSettlementVo) {
                this.updateUserSettlement(data.qiuQiuSettlementVo);
              }
            } else {
              (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newBankerPoker = [];
              (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newBlackPoker = [];
              (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newRedPoker = [];
              (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newPlumPoker = [];
              (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newDiamondPoker = [];
              this.winCardRate = [];
              this.allCardRate = [];
              this.winArea = [];
              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).WAIT));
              this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                error: Error()
              }), setCountDownAction) : setCountDownAction)(data.seconds));
              this.countDown = data.seconds;
              this.startCountdown();
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
            this.dispatch((_crd && changeTrenAction === void 0 ? (_reportPossibleCrUseOfchangeTrenAction({
              error: Error()
            }), changeTrenAction) : changeTrenAction)(data.winLoseList.reverse()));
            this.dispatch((_crd && changeStatistikAction === void 0 ? (_reportPossibleCrUseOfchangeStatistikAction({
              error: Error()
            }), changeStatistikAction) : changeStatistikAction)(data.qiuStatistikVo));
            this.dispatch((_crd && changeRekorAction === void 0 ? (_reportPossibleCrUseOfchangeRekorAction({
              error: Error()
            }), changeRekorAction) : changeRekorAction)(data.qiuQiuMemberWinVo));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_RESPONSE, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //8102
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).goldData = data.goldData;
            this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
              error: Error()
            }), changeGoldDataAction) : changeGoldDataAction)(data.goldData));
            const memberId = data.memberData.memberId;
            const index = this.getSeatIndex(memberId);
            const isMyBet = this.comp.props.myInfo.memberId === memberId; // console.log(data.goldData[data.memberData.type]);
            // const totalBetAmount=data.goldData[data.memberData.type]
            // const betType = convertBetType(data.memberData.type);

            const betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
              error: Error()
            }), initBetData) : initBetData)(index, memberId, data.memberData.type, data.memberData.gold);
            betData.isMyBet = isMyBet;
            this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
              error: Error()
            }), setNewBetDataAction) : setNewBetDataAction)(betData)); // console.log(data);
          }); // sktMsgListener.add(SKT_MAG_TYPE.SETTLEMENT, bundlePkgName, (data) => {//804
          //   // console.log(data);
          //   let myInfo = {
          //     gold: data.myInfo.gold,
          //     goldStr: data.myInfo.gold + "",
          //     icon: data.myInfo.icon,
          //     memberName: data.myInfo.memberName,
          //     winGold: data.myInfo.winGold,
          //     memberId: data.myInfo.memberId,
          //     index: config.gameOption.lookOnIndex,
          //     memberBet: data.myInfo.memberBet,
          //     winType: data.myInfo
          //   }
          //   gameCacheData.winList = data.roomWinInfo;
          //   // const myHead = convertHeadType(data.myInfo);
          //   this.dispatch(setMyInfoAction(myInfo));
          //   this.dispatch(setGoldAction(data.myInfo.gold))
          //   this.dispatch(setMyWinLose(data.myInfo.winType))
          // })

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
          }); // sktMsgListener.add(SKT_MAG_TYPE.OTHER_WIN, bundlePkgName, (data) => {//808
          //   this.updateWinloss(data.list)
          //   // 改变在线人数
          //   this.dispatch(setOnlineNumber(data.roomInfoSize));
          //   gameCacheData.leftUsers = data.roomLeftInfoVos;
          //   gameCacheData.rightUsers = data.roomRightInfoVos;
          //   //榜上所有用户信息
          //   this.setUsersInfo();
          //   // this.dispatch(changeAllWinUsersAction(data.list))
          // })

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
              // 拿到最新的倒计时后，就减掉1秒
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
        /**更新用户结算 */


        updateUserSettlement(data) {
          this.comp.scheduleOnce(() => {
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
            }), gameCacheData) : gameCacheData).winList = data.roomWinInfo; // const myHead = convertHeadType(data.myInfo);

            this.dispatch((_crd && setMyInfoAction === void 0 ? (_reportPossibleCrUseOfsetMyInfoAction({
              error: Error()
            }), setMyInfoAction) : setMyInfoAction)(myInfo));
            this.dispatch((_crd && setGoldAction === void 0 ? (_reportPossibleCrUseOfsetGoldAction({
              error: Error()
            }), setGoldAction) : setGoldAction)(data.myInfo.gold));
            this.dispatch((_crd && setMyWinLose === void 0 ? (_reportPossibleCrUseOfsetMyWinLose({
              error: Error()
            }), setMyWinLose) : setMyWinLose)(data.myInfo.winType));
          }, 7);
        }
        /**更新所有赢的玩家信息 */


        updateAllWinUser(data) {
          this.comp.scheduleOnce(() => {
            this.updateWinloss(data.list); // 改变在线人数

            this.dispatch((_crd && setOnlineNumber === void 0 ? (_reportPossibleCrUseOfsetOnlineNumber({
              error: Error()
            }), setOnlineNumber) : setOnlineNumber)(data.roomInfoSize));
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers = data.roomLeftInfoVos;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers = data.roomRightInfoVos; //榜上所有用户信息

            this.setUsersInfo();
          }, 6);
        }
        /**更新牌的信息 */


        updatePokerInfo(data) {
          this.dispatch((_crd && setBankerPokerAction === void 0 ? (_reportPossibleCrUseOfsetBankerPokerAction({
            error: Error()
          }), setBankerPokerAction) : setBankerPokerAction)(data.lotteryVo.farmhouse));
          this.dispatch((_crd && setBlackPokerAction === void 0 ? (_reportPossibleCrUseOfsetBlackPokerAction({
            error: Error()
          }), setBlackPokerAction) : setBlackPokerAction)(data.lotteryVo.spade));
          this.dispatch((_crd && setRedPokerAction === void 0 ? (_reportPossibleCrUseOfsetRedPokerAction({
            error: Error()
          }), setRedPokerAction) : setRedPokerAction)(data.lotteryVo.heart));
          this.dispatch((_crd && setPlumPokerAction === void 0 ? (_reportPossibleCrUseOfsetPlumPokerAction({
            error: Error()
          }), setPlumPokerAction) : setPlumPokerAction)(data.lotteryVo.sakura));
          this.dispatch((_crd && setDiamondPokerAction === void 0 ? (_reportPossibleCrUseOfsetDiamondPokerAction({
            error: Error()
          }), setDiamondPokerAction) : setDiamondPokerAction)(data.lotteryVo.block));
        }
        /**更新小历史记录及牌的倍率及区域赢信息 */


        updateAreaWinLoseRateInfo(data, second) {
          let cardType = [];
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).newBankerPoker = data.farmhouse;
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).newBlackPoker = data.spade;
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).newRedPoker = data.heart;
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).newPlumPoker = data.sakura;
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).newDiamondPoker = data.block;
          this.stopCountdown();
          let areaWinLose = [data.spadeWinLose, data.heartWinLose, data.sakuraWinLose, data.blockWinLose];

          if (data.spadeWinLose === 1) {
            this.winArea.push(1);
            this.winCardRate.push(data.spadeType);
          }

          if (data.heartWinLose === 1) {
            this.winArea.push(2);
            this.winCardRate.push(data.heartType);
          }

          if (data.sakuraWinLose === 1) {
            this.winArea.push(3);
            this.winCardRate.push(data.sakuraType);
          }

          if (data.blockWinLose === 1) {
            this.winArea.push(4);
            this.winCardRate.push(data.blockType);
          }

          cardType.push(data.farmhouseType);
          this.allCardRate.push(data.spadeType);
          this.allCardRate.push(data.heartType);
          this.allCardRate.push(data.sakuraType);
          this.allCardRate.push(data.blockType);
          cardType = cardType.concat(this.allCardRate);
          this.dispatch((_crd && changeCardTypeAction === void 0 ? (_reportPossibleCrUseOfchangeCardTypeAction({
            error: Error()
          }), changeCardTypeAction) : changeCardTypeAction)(cardType));
          this.dispatch((_crd && changeAllCardRateAction === void 0 ? (_reportPossibleCrUseOfchangeAllCardRateAction({
            error: Error()
          }), changeAllCardRateAction) : changeAllCardRateAction)(this.allCardRate));
          this.dispatch((_crd && changeAreaWinLoseAction === void 0 ? (_reportPossibleCrUseOfchangeAreaWinLoseAction({
            error: Error()
          }), changeAreaWinLoseAction) : changeAreaWinLoseAction)(areaWinLose));
          this.dispatch((_crd && setWinAreaAction === void 0 ? (_reportPossibleCrUseOfsetWinAreaAction({
            error: Error()
          }), setWinAreaAction) : setWinAreaAction)(this.winArea));
          this.dispatch((_crd && changeCardRateAction === void 0 ? (_reportPossibleCrUseOfchangeCardRateAction({
            error: Error()
          }), changeCardRateAction) : changeCardRateAction)(this.winCardRate));
          this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
            error: Error()
          }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).STOP_BET));
          let seconds = second - 5; // result1.push(data.data.spadeWin[data.data.spadeWin.length-1])

          this.comp.scheduleOnce(() => {
            if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {
              this.dispatch((_crd && changeResult1Action === void 0 ? (_reportPossibleCrUseOfchangeResult1Action({
                error: Error()
              }), changeResult1Action) : changeResult1Action)(data.spadeWin));
              this.dispatch((_crd && changeResult2Action === void 0 ? (_reportPossibleCrUseOfchangeResult2Action({
                error: Error()
              }), changeResult2Action) : changeResult2Action)(data.heartWin));
              this.dispatch((_crd && changeResult3Action === void 0 ? (_reportPossibleCrUseOfchangeResult3Action({
                error: Error()
              }), changeResult3Action) : changeResult3Action)(data.sakuraWin));
              this.dispatch((_crd && changeResult4Action === void 0 ? (_reportPossibleCrUseOfchangeResult4Action({
                error: Error()
              }), changeResult4Action) : changeResult4Action)(data.blockWin));
            }
          }, seconds);
        }
        /**获得获得用户所在位置 */


        getHeadPos(memberId, isFrom) {
          const seat = this.comp.props.usersInfo.find(v => v.memberId === memberId);
          let pos;

          if (seat) {
            pos = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).headLocations[seat.index];
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

          return this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
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
          }); // sys.localStorage.setItem("token",window.location.search.substring(6))
          // sys.localStorage.setItem("token",config.testConfig.token)

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
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).goldData = data.goldData;
            this.dispatch((_crd && setInitGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetInitGameStatusAction({
              error: Error()
            }), setInitGameStatusAction) : setInitGameStatusAction)(data.gameType));
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
            this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
              error: Error()
            }), changeGoldDataAction) : changeGoldDataAction)(data.goldData));
            let result1 = data.blackResults ? data.blackResults : [];
            let result2 = data.redResults ? data.redResults : [];
            let result3 = data.plumResults ? data.plumResults : [];
            let result4 = data.diamondResults ? data.diamondResults : [];
            let black = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_black;
            let red = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_red;
            let plum = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_plum;
            let diamond = this.betHistoryViewModel.comp.getPropertyNode().props_layout_icon_diamond;
            this.betHistoryViewModel.comp.createResult(black, result1, false);
            this.betHistoryViewModel.comp.createResult(red, result2, false);
            this.betHistoryViewModel.comp.createResult(plum, result3, false);
            this.betHistoryViewModel.comp.createResult(diamond, result4, false);

            if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET && data.seconds > 0) {
              this.dispatch((_crd && setSecondsAction === void 0 ? (_reportPossibleCrUseOfsetSecondsAction({
                error: Error()
              }), setSecondsAction) : setSecondsAction)(data.seconds));
              this.winArea = [];
              this.winCardRate = [];
              this.allCardRate = [];
              this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                error: Error()
              }), setCountDownAction) : setCountDownAction)(data.seconds));

              if (data.seconds !== 0) {
                this.countDown = data.seconds;
                this.startCountdown();
              }

              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).BET));

              if (data.seconds > 3) {
                this.openBeginAnim(); // this.openSendCard();
              }
            } else if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)(null));
              this.dispatch((_crd && setWinAreaAction === void 0 ? (_reportPossibleCrUseOfsetWinAreaAction({
                error: Error()
              }), setWinAreaAction) : setWinAreaAction)([]));
              this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
                error: Error()
              }), setNewBetDataAction) : setNewBetDataAction)(null));
              this.stopCountdown();
              let allCardType = [];
              allCardType.push(data.farmhouseType);
              allCardType.push(data.spadeType);
              allCardType.push(data.heartType);
              allCardType.push(data.sakuraType);
              allCardType.push(data.blockType);
              this.dispatch((_crd && setAllCardTypeAction === void 0 ? (_reportPossibleCrUseOfsetAllCardTypeAction({
                error: Error()
              }), setAllCardTypeAction) : setAllCardTypeAction)(allCardType));
              window.setTimeout(() => {
                this.dispatch((_crd && setSpadeNumAction === void 0 ? (_reportPossibleCrUseOfsetSpadeNumAction({
                  error: Error()
                }), setSpadeNumAction) : setSpadeNumAction)(data.spadeNum));
                this.dispatch((_crd && setHeartNumAction === void 0 ? (_reportPossibleCrUseOfsetHeartNumAction({
                  error: Error()
                }), setHeartNumAction) : setHeartNumAction)(data.heartNum));
                this.dispatch((_crd && setSakuraNumAction === void 0 ? (_reportPossibleCrUseOfsetSakuraNumAction({
                  error: Error()
                }), setSakuraNumAction) : setSakuraNumAction)(data.sakuraNum));
                this.dispatch((_crd && setBlockNumAction === void 0 ? (_reportPossibleCrUseOfsetBlockNumAction({
                  error: Error()
                }), setBlockNumAction) : setBlockNumAction)(data.blockNum));
                this.dispatch((_crd && setFarmhouseNumAction === void 0 ? (_reportPossibleCrUseOfsetFarmhouseNumAction({
                  error: Error()
                }), setFarmhouseNumAction) : setFarmhouseNumAction)(data.farmhouseNum));
              }, 100);
            } else if (data.gameType === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT && data.seconds > 0) {
              this.winArea = [];
              this.winCardRate = [];
              this.allCardRate = [];
              this.dispatch((_crd && setGameStatusAction === void 0 ? (_reportPossibleCrUseOfsetGameStatusAction({
                error: Error()
              }), setGameStatusAction) : setGameStatusAction)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).WAIT));
              this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                error: Error()
              }), setCountDownAction) : setCountDownAction)(data.seconds));

              if (data.seconds !== 0) {
                this.countDown = data.seconds;
                this.startCountdown();
              }
            } // 改变在线人数


            this.dispatch((_crd && setOnlineNumber === void 0 ? (_reportPossibleCrUseOfsetOnlineNumber({
              error: Error()
            }), setOnlineNumber) : setOnlineNumber)(data.memberNum)); //榜上所有用户信息

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
            }); // // 初始化界面
            // this.initView();
          });
        }

        initView() {
          this.openUsers();
          this.openTitle();
          this.openHeGuan();
          this.openSendCard(); //荷官发牌，下注阶段出现

          this.openClock();
          this.openOnline();
          this.openBetHistory();
          this.openCardBanker();
          this.openCardUser(this.clockViewModel.viewNode);
          this.openBetArea();
          this.openFooter(); // titleViewModel.clearCacheData()
          // this.openPot();
          // this.openTrigJackpot();//trigJackpot
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
        /**停止倒计时 */


        stopCountdown() {
          // 如果倒计时已经为0了，不处理了
          if (this.comp.props.countDown <= 0) {
            return;
          }

          this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
            error: Error()
          }), setCountDownAction) : setCountDownAction)(0));
          this.timer && window.clearInterval(this.timer);
          this.timer = 0;
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
          const baseViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)("Bandar_heGuan").mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MANI_HE_GUAN).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect();
        }

        openClock(nodeWrap) {
          this.clockViewModel = new (_crd && ClockViewModel === void 0 ? (_reportPossibleCrUseOfClockViewModel({
            error: Error()
          }), ClockViewModel) : ClockViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_CLOCK).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect();
        }

        openOnline(nodeWrap) {
          _export("onlineViewModel", onlineViewModel = new (_crd && OnlineViewModel === void 0 ? (_reportPossibleCrUseOfOnlineViewModel({
            error: Error()
          }), OnlineViewModel) : OnlineViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_ONLINES).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openBetHistory(nodeWrap) {
          this.betHistoryViewModel = new (_crd && BetHistoryViewModel === void 0 ? (_reportPossibleCrUseOfBetHistoryViewModel({
            error: Error()
          }), BetHistoryViewModel) : BetHistoryViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_BET_HISTORY).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect();
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

        openFooter() {
          _export("footerViewModel", footerViewModel = new (_crd && FooterViewModel === void 0 ? (_reportPossibleCrUseOfFooterViewModel({
            error: Error()
          }), FooterViewModel) : FooterViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_USER).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openPot() {
          const baseViewModel = new (_crd && PotViewModel === void 0 ? (_reportPossibleCrUseOfPotViewModel({
            error: Error()
          }), PotViewModel) : PotViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_POT).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect();
        }

        openBeginAnim() {
          const baseViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)("Bandar_begin").mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_BEGIN).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect();
        }

        openCardBanker() {
          _export("bankerCardViewModel", bankerCardViewModel = new (_crd && CardBankerViewModel === void 0 ? (_reportPossibleCrUseOfCardBankerViewModel({
            error: Error()
          }), CardBankerViewModel) : CardBankerViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_BANKER).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openCardUser(nodeWrap) {
          _export("userCardViewModel", userCardViewModel = new (_crd && CardUserViewModel === void 0 ? (_reportPossibleCrUseOfCardUserViewModel({
            error: Error()
          }), CardUserViewModel) : CardUserViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_USER).source).appendTo(nodeWrap, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openSendCard() {
          _export("sendViewModel", sendViewModel = new (_crd && SendViewModel === void 0 ? (_reportPossibleCrUseOfSendViewModel({
            error: Error()
          }), SendViewModel) : SendViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
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

        openTrigJackpot() {
          const baseViewModel = new (_crd && TrigJackpotViewModel === void 0 ? (_reportPossibleCrUseOfTrigJackpotViewModel({
            error: Error()
          }), TrigJackpotViewModel) : TrigJackpotViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_TRIG_JACKPOT).source).appendTo(find("Canvas"), {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          });
        }

        getSeatIndex(memberId) {
          // 倒起找，原因是因为有可能重复上榜，右边上榜优先
          // console.log(this.comp.props.usersInfo);
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
          // console.log(gameCacheData.leftUsers);
          if ((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers) {
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers.forEach((leftItem, i) => {
              leftItem.index = i; // memberName: ;
              // memberId:;
              // icon: ;
              // gold: ;
              // winType:;
              // winGold:;
              // memberBet: ;
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
          } // window.setTimeout(()=>{
          // this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)))
          // },4000)

        }

        connect() {
          this.inject({}, state => {
            return {
              countDown: state.game.countDown,
              usersInfo: state.game.usersInfo,
              myInfo: state.game.myInfo,
              myWinLose: state.game.myWinLose,
              gameStatus: state.game.gameStatus,
              // initGameType: null,
              initGameStatus: state.game.initGameStatus
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
//# sourceMappingURL=36a9c9c4b658f61b5bdfc03312d73de52d1cbe60.js.map