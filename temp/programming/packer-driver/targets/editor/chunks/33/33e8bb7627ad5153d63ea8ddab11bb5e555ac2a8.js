System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, sys, find, UITransform, ViewModel, StoreInject, SKT_MAG_TYPE, sktInstance, sktMsgListener, sourceManageSeletor, PrefabPathDefine, HistoryWinViewModel, WinViewModel, LoseViewModel, EffectType, getStore, resetUserStore, setUserInfoAction, setHistoryListAction, setRoomLeftInfosAction, setRoomInfoSizeAction, setRoomRightInfosAction, setRoomWinInfosAction, setMemberBetAction, changeGoldAction, changeGameTypeAction, setMemberDataAction, resetHistoryStore, setPokerLeftAction, setPokerRightAction, setSendedPAction, setWinAction, setReadyPAction, setTipsAction, updatePokerInfo, resetPokerStore, initBetData, UsersViewModel, TitleViewModel, OnlineViewModel, bundlePkgName, global, lang, addToastAction, config, changeAllWinUsersAction, changeCancelBetDataAction, changeGoldDataAction, resetStore, setCountDownAction, setMyInfoAction, setNewBetDataAction, setOnlineNumber, setUsersInfoAction, gameCacheData, _dec, _class, _crd, winViewModel, loseViewModel, historyViewModel, downViewModel, usersViewModel, onlineViewModel, DragonTigerPanelViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonTiger_MainPanel(extras) {
    _reporterNs.report("DragonTiger_MainPanel", "../components/DragonTiger_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/DragonTiger_MainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/DragonTiger_MainPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryWinViewModel(extras) {
    _reporterNs.report("HistoryWinViewModel", "./DragonTigerHistoryWinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinViewModel(extras) {
    _reporterNs.report("WinViewModel", "./DragonTigerWinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoseViewModel(extras) {
    _reporterNs.report("LoseViewModel", "./DragonTigerLoseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDownViewModel(extras) {
    _reporterNs.report("DownViewModel", "./DragonTigerDownViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetUserStore(extras) {
    _reporterNs.report("resetUserStore", "../store/actions/userInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetUserInfoAction(extras) {
    _reporterNs.report("setUserInfoAction", "../store/actions/userInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetHistoryListAction(extras) {
    _reporterNs.report("setHistoryListAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRoomLeftInfosAction(extras) {
    _reporterNs.report("setRoomLeftInfosAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRoomInfoSizeAction(extras) {
    _reporterNs.report("setRoomInfoSizeAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRoomRightInfosAction(extras) {
    _reporterNs.report("setRoomRightInfosAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRoomWinInfosAction(extras) {
    _reporterNs.report("setRoomWinInfosAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberBetAction(extras) {
    _reporterNs.report("setMemberBetAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldAction(extras) {
    _reporterNs.report("changeGoldAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGameTypeAction(extras) {
    _reporterNs.report("changeGameTypeAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberDataAction(extras) {
    _reporterNs.report("setMemberDataAction", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetHistoryStore(extras) {
    _reporterNs.report("resetHistoryStore", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetPokerLeftAction(extras) {
    _reporterNs.report("setPokerLeftAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetPokerRightAction(extras) {
    _reporterNs.report("setPokerRightAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSendedPAction(extras) {
    _reporterNs.report("setSendedPAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWinAction(extras) {
    _reporterNs.report("setWinAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetReadyPAction(extras) {
    _reporterNs.report("setReadyPAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTipsAction(extras) {
    _reporterNs.report("setTipsAction", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdatePokerInfo(extras) {
    _reporterNs.report("updatePokerInfo", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetPokerStore(extras) {
    _reporterNs.report("resetPokerStore", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUsersViewModel(extras) {
    _reporterNs.report("UsersViewModel", "./DragonTigerUsersViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTitleViewModel(extras) {
    _reporterNs.report("TitleViewModel", "./DragonTigerTitleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOnlineViewModel(extras) {
    _reporterNs.report("OnlineViewModel", "./DragonTigerOnlineViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundlePkgName(extras) {
    _reporterNs.report("bundlePkgName", "../sourceDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAllWinUsersAction(extras) {
    _reporterNs.report("changeAllWinUsersAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCancelBetDataAction(extras) {
    _reporterNs.report("changeCancelBetDataAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldDataAction(extras) {
    _reporterNs.report("changeGoldDataAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetStore(extras) {
    _reporterNs.report("resetStore", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetCountDownAction(extras) {
    _reporterNs.report("setCountDownAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMyInfoAction(extras) {
    _reporterNs.report("setMyInfoAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetNewBetDataAction(extras) {
    _reporterNs.report("setNewBetDataAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetOnlineNumber(extras) {
    _reporterNs.report("setOnlineNumber", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetUsersInfoAction(extras) {
    _reporterNs.report("setUsersInfoAction", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGiftVo(extras) {
    _reporterNs.report("ResGiftVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  _export({
    winViewModel: void 0,
    loseViewModel: void 0,
    historyViewModel: void 0,
    downViewModel: void 0,
    usersViewModel: void 0,
    onlineViewModel: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      sys = _cc.sys;
      find = _cc.find;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      HistoryWinViewModel = _unresolved_6.default;
    }, function (_unresolved_7) {
      WinViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      LoseViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      EffectType = _unresolved_9.EffectType;
    }, function (_unresolved_10) {
      getStore = _unresolved_10.getStore;
    }, function (_unresolved_11) {
      resetUserStore = _unresolved_11.resetUserStore;
      setUserInfoAction = _unresolved_11.setUserInfoAction;
    }, function (_unresolved_12) {
      setHistoryListAction = _unresolved_12.setHistoryListAction;
      setRoomLeftInfosAction = _unresolved_12.setRoomLeftInfosAction;
      setRoomInfoSizeAction = _unresolved_12.setRoomInfoSizeAction;
      setRoomRightInfosAction = _unresolved_12.setRoomRightInfosAction;
      setRoomWinInfosAction = _unresolved_12.setRoomWinInfosAction;
      setMemberBetAction = _unresolved_12.setMemberBetAction;
      changeGoldAction = _unresolved_12.changeGoldAction;
      changeGameTypeAction = _unresolved_12.changeGameTypeAction;
      setMemberDataAction = _unresolved_12.setMemberDataAction;
      resetHistoryStore = _unresolved_12.resetHistoryStore;
    }, function (_unresolved_13) {
      setPokerLeftAction = _unresolved_13.setPokerLeftAction;
      setPokerRightAction = _unresolved_13.setPokerRightAction;
      setSendedPAction = _unresolved_13.setSendedPAction;
      setWinAction = _unresolved_13.setWinAction;
      setReadyPAction = _unresolved_13.setReadyPAction;
      setTipsAction = _unresolved_13.setTipsAction;
      updatePokerInfo = _unresolved_13.updatePokerInfo;
      resetPokerStore = _unresolved_13.resetPokerStore;
    }, function (_unresolved_14) {
      initBetData = _unresolved_14.initBetData;
    }, function (_unresolved_15) {
      UsersViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      TitleViewModel = _unresolved_16.default;
    }, function (_unresolved_17) {
      OnlineViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      bundlePkgName = _unresolved_18.bundlePkgName;
    }, function (_unresolved_19) {
      global = _unresolved_19.global;
      lang = _unresolved_19.lang;
    }, function (_unresolved_20) {
      addToastAction = _unresolved_20.addToastAction;
    }, function (_unresolved_21) {
      config = _unresolved_21.default;
    }, function (_unresolved_22) {
      changeAllWinUsersAction = _unresolved_22.changeAllWinUsersAction;
      changeCancelBetDataAction = _unresolved_22.changeCancelBetDataAction;
      changeGoldDataAction = _unresolved_22.changeGoldDataAction;
      resetStore = _unresolved_22.resetStore;
      setCountDownAction = _unresolved_22.setCountDownAction;
      setMyInfoAction = _unresolved_22.setMyInfoAction;
      setNewBetDataAction = _unresolved_22.setNewBetDataAction;
      setOnlineNumber = _unresolved_22.setOnlineNumber;
      setUsersInfoAction = _unresolved_22.setUsersInfoAction;
    }, function (_unresolved_23) {
      gameCacheData = _unresolved_23.gameCacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c50f4NADRONolnBWJoWnZp", "DragonTigerMainViewModel", undefined);

      __checkObsolete__(['Node', 'Animation', 'animation', 'Tween', 'Vec2', 'Vec3', 'Sprite', 'sys', 'find', 'sp', 'Label', 'UITransform']);

      DragonTigerPanelViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class DragonTigerPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        // private isClick:boolean=false
        constructor() {
          super('DragonTiger_MainPanel');
          this.countDown = void 0;
          // 开始倒计时
          this.timer = 0;
        }

        begin() {
          // sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, window.location.search.substring(6))
          //  sys.localStorage.setItem("token",config.testConfig.token)
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
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MY_INFO, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //4
            if (!data || !data.myInfo) {
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
            } // if (!data.myInfo) {
            //   global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
            //   global.closeSubGame({ confirmContent: lang.write(k => k.InitGameModule.GameBoardInit) });
            //   return;
            // }


            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers = data.roomLeftInfoVos;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers = data.roomRightInfoVos;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).roomId = data.roomId;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).memberId = data.myInfo.memberId;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).goldData = data.goldData;
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
            const pokerInfo = {
              pokerLeftNum: data.pokerLeftNum,
              pokerRightNum: data.pokerRightNum
            };
            this.dispatch((_crd && setMyInfoAction === void 0 ? (_reportPossibleCrUseOfsetMyInfoAction({
              error: Error()
            }), setMyInfoAction) : setMyInfoAction)(myInfo));
            this.dispatch((_crd && setOnlineNumber === void 0 ? (_reportPossibleCrUseOfsetOnlineNumber({
              error: Error()
            }), setOnlineNumber) : setOnlineNumber)(data.roomInfoSize));
            this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
              error: Error()
            }), changeGoldDataAction) : changeGoldDataAction)(data.goldData));
            this.dispatch((_crd && setUserInfoAction === void 0 ? (_reportPossibleCrUseOfsetUserInfoAction({
              error: Error()
            }), setUserInfoAction) : setUserInfoAction)({ ...data.myInfo
            }));
            this.dispatch((_crd && changeGoldAction === void 0 ? (_reportPossibleCrUseOfchangeGoldAction({
              error: Error()
            }), changeGoldAction) : changeGoldAction)(data.myInfo.gold));
            this.dispatch((_crd && setSendedPAction === void 0 ? (_reportPossibleCrUseOfsetSendedPAction({
              error: Error()
            }), setSendedPAction) : setSendedPAction)(data.sendedP));
            this.dispatch((_crd && setReadyPAction === void 0 ? (_reportPossibleCrUseOfsetReadyPAction({
              error: Error()
            }), setReadyPAction) : setReadyPAction)(data.readySendP));
            this.dispatch((_crd && updatePokerInfo === void 0 ? (_reportPossibleCrUseOfupdatePokerInfo({
              error: Error()
            }), updatePokerInfo) : updatePokerInfo)(pokerInfo)); // this.dispatch(setPokerLeftAction(data.pokerLeftNum));
            // this.dispatch(setPokerRightAction(data.pokerRightNum));

            this.dispatch((_crd && setRoomLeftInfosAction === void 0 ? (_reportPossibleCrUseOfsetRoomLeftInfosAction({
              error: Error()
            }), setRoomLeftInfosAction) : setRoomLeftInfosAction)(data.roomLeftInfoVos));
            this.dispatch((_crd && setRoomInfoSizeAction === void 0 ? (_reportPossibleCrUseOfsetRoomInfoSizeAction({
              error: Error()
            }), setRoomInfoSizeAction) : setRoomInfoSizeAction)(data.roomInfoSize));
            this.dispatch((_crd && setRoomRightInfosAction === void 0 ? (_reportPossibleCrUseOfsetRoomRightInfosAction({
              error: Error()
            }), setRoomRightInfosAction) : setRoomRightInfosAction)(data.roomRightInfoVos));
            this.dispatch((_crd && setWinAction === void 0 ? (_reportPossibleCrUseOfsetWinAction({
              error: Error()
            }), setWinAction) : setWinAction)(data.win));
            this.dispatch((_crd && changeGameTypeAction === void 0 ? (_reportPossibleCrUseOfchangeGameTypeAction({
              error: Error()
            }), changeGameTypeAction) : changeGameTypeAction)(data.gameType));
            this.setProps({
              oddsList: data.oddsList // gameType: data.gameType,

            });

            if (data.gameType === 1) {
              this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                error: Error()
              }), setCountDownAction) : setCountDownAction)(data.seconds));
              this.countDown = data.seconds;
              this.startCountdown();
              this.setProps({
                seconds: data.seconds
              });
            }

            ;

            if (data.gameType === 2) {
              this.stopCountdown();
            }

            if (data.gameType === 3) {
              this.setProps({
                typeThreeSeconds: data.seconds
              });
            }

            this.saveRoomId(data.roomId); //榜上所有用户信息

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
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TOP_UP, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //10
            this.dispatch((_crd && changeGoldAction === void 0 ? (_reportPossibleCrUseOfchangeGoldAction({
              error: Error()
            }), changeGoldAction) : changeGoldAction)(data));
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
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CRASH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //801
            this.dispatch((_crd && changeGameTypeAction === void 0 ? (_reportPossibleCrUseOfchangeGameTypeAction({
              error: Error()
            }), changeGameTypeAction) : changeGameTypeAction)(data.gameType));
            this.setProps({// durGameType: data.gameType,
            });

            if (data.gameType === 1) {
              this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
                error: Error()
              }), setCountDownAction) : setCountDownAction)(data.seconds));
              this.countDown = data.seconds;
              this.startCountdown();
              this.setProps({
                betSeconds: data.seconds
              });
              this.dispatch((_crd && setUsersInfoAction === void 0 ? (_reportPossibleCrUseOfsetUsersInfoAction({
                error: Error()
              }), setUsersInfoAction) : setUsersInfoAction)((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).leftUsers.concat((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).rightUsers)));
            }

            if (data.gameType === 2) {
              this.stopCountdown();
              this.updatePokerInfo(data.dragonTigerMemberDrawPrizeVo);
              this.updateWinUserInfo(data.dragonTigerWinMemberVo);

              if (data.dragonTigerSettlementVo) {
                this.updateMyInfo(data.dragonTigerSettlementVo);
              }
            }

            if (data.gameType === 3) {
              this.setProps({
                typeThreeSeconds: data.seconds
              });
            }
          }); // sktMsgListener.add(SKT_MAG_TYPE.POKER, bundlePkgName, (data) => {//805
          //   // console.log("805",data.pokerLeftNum,data.pokerRightNum);
          //   const pokerInfo = {
          //     pokerLeftNum: data.pokerLeftNum,
          //     pokerRightNum:data.pokerRightNum,
          //   }
          //   this.dispatch(updatePokerInfo(pokerInfo))
          //   // this.dispatch(setPokerLeftAction(data.pokerLeftNum));
          //   // this.dispatch(setPokerRightAction(data.pokerRightNum));
          //   this.dispatch(setSendedPAction(data.sendedP));
          //   this.dispatch(setReadyPAction(data.readySendP));
          //   this.dispatch(setWinAction(data.win));
          //   this.setProps({
          //     oddNewList: data.list,
          //   })
          // })

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HISTORY, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //806
            this.dispatch((_crd && setHistoryListAction === void 0 ? (_reportPossibleCrUseOfsetHistoryListAction({
              error: Error()
            }), setHistoryListAction) : setHistoryListAction)({ ...data
            }));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_ALL, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //802
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).goldData = data.goldData;
            const memberId = data.memberData.memberId;
            const index = this.getSeatIndex(memberId);
            const isMyBet = this.comp.props.myInfo.memberId === memberId;
            const betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
              error: Error()
            }), initBetData) : initBetData)(index, memberId, data.memberData.type, data.memberData.gold);
            betData.isMyBet = isMyBet;
            this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
              error: Error()
            }), setNewBetDataAction) : setNewBetDataAction)(betData));
            this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
              error: Error()
            }), changeGoldDataAction) : changeGoldDataAction)(data.goldData));
            this.dispatch((_crd && setMemberDataAction === void 0 ? (_reportPossibleCrUseOfsetMemberDataAction({
              error: Error()
            }), setMemberDataAction) : setMemberDataAction)(data.memberData));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_RESPONSE, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //803
            if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).preBet) {
              if (data) {
                this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
                  error: Error()
                }), setMemberBetAction) : setMemberBetAction)(data.memberBet));
                this.dispatch((_crd && setUserInfoAction === void 0 ? (_reportPossibleCrUseOfsetUserInfoAction({
                  error: Error()
                }), setUserInfoAction) : setUserInfoAction)({ ...data
                }));
                this.dispatch((_crd && changeGoldAction === void 0 ? (_reportPossibleCrUseOfchangeGoldAction({
                  error: Error()
                }), changeGoldAction) : changeGoldAction)(data.gold));
              } else {
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
              }
            } else if (data.resultCode === 0) {
              this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
                error: Error()
              }), setMemberBetAction) : setMemberBetAction)(data.memberBet));
              const sendBet = {
                roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId,
                memberId: this.comp.props.memberId,
                memberName: this.comp.props.memberName,
                gold: data.betAmount,
                betType: data.betType,
                isMe: true,
                betId: data.betId
              };
              this.comp.amountArr.push(sendBet);
              this.dispatch((_crd && changeGoldAction === void 0 ? (_reportPossibleCrUseOfchangeGoldAction({
                error: Error()
              }), changeGoldAction) : changeGoldAction)(data.gold));
              this.dispatch((_crd && setUserInfoAction === void 0 ? (_reportPossibleCrUseOfsetUserInfoAction({
                error: Error()
              }), setUserInfoAction) : setUserInfoAction)({ ...data
              }));
            } else if (data.resultCode !== undefined && data.resultCode !== 0) {
              this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
                error: Error()
              }), setMemberBetAction) : setMemberBetAction)(data.memberBet));
              this.dispatch((_crd && setUserInfoAction === void 0 ? (_reportPossibleCrUseOfsetUserInfoAction({
                error: Error()
              }), setUserInfoAction) : setUserInfoAction)({ ...data
              }));
              this.dispatch((_crd && changeGoldAction === void 0 ? (_reportPossibleCrUseOfchangeGoldAction({
                error: Error()
              }), changeGoldAction) : changeGoldAction)(data.gold));
              const betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
                error: Error()
              }), initBetData) : initBetData)(this.comp.props.myInfo.index, this.comp.props.myInfo.memberId, data.betType, data.betAmount);
              betData.isMyBet = true; //当前用户是否下注

              betData.betId = data.betId;
              this.dispatch((_crd && changeCancelBetDataAction === void 0 ? (_reportPossibleCrUseOfchangeCancelBetDataAction({
                error: Error()
              }), changeCancelBetDataAction) : changeCancelBetDataAction)(betData));
            }
          }); // sktMsgListener.add(SKT_MAG_TYPE.SETTLEMENT, bundlePkgName, (data) => {//804
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
          //   this.dispatch(setOnlineNumber(data.roomInfoSize));
          //   this.dispatch(setUserInfoAction({ ...data.myInfo }));
          //   this.dispatch(changeGoldAction(data.myInfo.gold))
          //   this.dispatch(setMemberBetAction(data.myInfo.memberBet))
          //   this.dispatch(setRoomWinInfosAction(data.roomWinInfo))
          //   this.dispatch(setRoomLeftInfosAction(data.roomLeftInfoVos));
          //   this.dispatch(setRoomRightInfosAction(data.roomRightInfoVos));
          // })

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).ALL_USERS, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //807
            this.dispatch((_crd && setOnlineNumber === void 0 ? (_reportPossibleCrUseOfsetOnlineNumber({
              error: Error()
            }), setOnlineNumber) : setOnlineNumber)(data));
            this.dispatch((_crd && setRoomInfoSizeAction === void 0 ? (_reportPossibleCrUseOfsetRoomInfoSizeAction({
              error: Error()
            }), setRoomInfoSizeAction) : setRoomInfoSizeAction)(data));
          }); // sktMsgListener.add(SKT_MAG_TYPE.OTHER_WIN, bundlePkgName, (data) => {//808
          //   this.updateWinloss(data.list)
          //   gameCacheData.leftUsers = data.roomLeftInfoVos;
          //   gameCacheData.rightUsers = data.roomRightInfoVos;
          //   //榜上所有用户信息
          //   this.setUsersInfo();
          //   this.dispatch(changeAllWinUsersAction(data.list))
          // })

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_SHOW, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            //810
            if (1 === this.comp.props.gameType) {
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
          this.openUsers();
          this.openTitle();
          this.openOnline();
          this.setEvent({
            openHistoryPanel: () => {
              this.openHistory();
            },
            giveUsersGift: () => {},
            openWinPanel: () => {
              this.openWin();
            },
            openLosePanel: () => {
              this.openLose();
            }
          });
        }
        /**更新结算后的用户信息 */


        updateMyInfo(data) {
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
            /**弹窗前四位赢的玩家 */

            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).winList = data.roomWinInfo; // const myHead = convertHeadType(data.myInfo);

            this.dispatch((_crd && setMyInfoAction === void 0 ? (_reportPossibleCrUseOfsetMyInfoAction({
              error: Error()
            }), setMyInfoAction) : setMyInfoAction)(myInfo));
            this.dispatch((_crd && setOnlineNumber === void 0 ? (_reportPossibleCrUseOfsetOnlineNumber({
              error: Error()
            }), setOnlineNumber) : setOnlineNumber)(data.roomInfoSize));
            this.dispatch((_crd && setUserInfoAction === void 0 ? (_reportPossibleCrUseOfsetUserInfoAction({
              error: Error()
            }), setUserInfoAction) : setUserInfoAction)({ ...data.myInfo
            }));
            this.dispatch((_crd && changeGoldAction === void 0 ? (_reportPossibleCrUseOfchangeGoldAction({
              error: Error()
            }), changeGoldAction) : changeGoldAction)(data.myInfo.gold));
            this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
              error: Error()
            }), setMemberBetAction) : setMemberBetAction)(data.myInfo.memberBet));
            this.dispatch((_crd && setRoomWinInfosAction === void 0 ? (_reportPossibleCrUseOfsetRoomWinInfosAction({
              error: Error()
            }), setRoomWinInfosAction) : setRoomWinInfosAction)(data.roomWinInfo));
            this.dispatch((_crd && setRoomLeftInfosAction === void 0 ? (_reportPossibleCrUseOfsetRoomLeftInfosAction({
              error: Error()
            }), setRoomLeftInfosAction) : setRoomLeftInfosAction)(data.roomLeftInfoVos));
            this.dispatch((_crd && setRoomRightInfosAction === void 0 ? (_reportPossibleCrUseOfsetRoomRightInfosAction({
              error: Error()
            }), setRoomRightInfosAction) : setRoomRightInfosAction)(data.roomRightInfoVos));
          }, 5);
        }
        /**更新牌的信息 */


        updatePokerInfo(data) {
          const pokerInfo = {
            pokerLeftNum: data.pokerLeftNum,
            pokerRightNum: data.pokerRightNum
          };
          this.dispatch((_crd && updatePokerInfo === void 0 ? (_reportPossibleCrUseOfupdatePokerInfo({
            error: Error()
          }), updatePokerInfo) : updatePokerInfo)(pokerInfo)); // this.dispatch(setPokerLeftAction(data.pokerLeftNum));
          // this.dispatch(setPokerRightAction(data.pokerRightNum));

          this.dispatch((_crd && setSendedPAction === void 0 ? (_reportPossibleCrUseOfsetSendedPAction({
            error: Error()
          }), setSendedPAction) : setSendedPAction)(data.sendedP));
          this.dispatch((_crd && setReadyPAction === void 0 ? (_reportPossibleCrUseOfsetReadyPAction({
            error: Error()
          }), setReadyPAction) : setReadyPAction)(data.readySendP));
          this.dispatch((_crd && setWinAction === void 0 ? (_reportPossibleCrUseOfsetWinAction({
            error: Error()
          }), setWinAction) : setWinAction)(data.win));
          this.setProps({
            oddNewList: data.list
          });
        }
        /**更新每局所有赢的玩家信息 */


        updateWinUserInfo(data) {
          this.comp.scheduleOnce(() => {
            this.updateWinloss(data.list);
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).leftUsers = data.roomLeftInfoVos;
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).rightUsers = data.roomRightInfoVos; //榜上所有用户信息

            this.setUsersInfo();
            this.dispatch((_crd && changeAllWinUsersAction === void 0 ? (_reportPossibleCrUseOfchangeAllWinUsersAction({
              error: Error()
            }), changeAllWinUsersAction) : changeAllWinUsersAction)(data.list));
          }, 5);
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

          this.timer && window.clearInterval(this.timer);
          this.timer = 0;
          this.dispatch((_crd && setCountDownAction === void 0 ? (_reportPossibleCrUseOfsetCountDownAction({
            error: Error()
          }), setCountDownAction) : setCountDownAction)(0));
        }

        openGiftBox(nodeWrap) {}

        openHistory(nodeWrap) {
          _export("historyViewModel", historyViewModel = new (_crd && HistoryWinViewModel === void 0 ? (_reportPossibleCrUseOfHistoryWinViewModel({
            error: Error()
          }), HistoryWinViewModel) : HistoryWinViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_HISTORY_WIN).source).appendTo(find("Canvas"), {
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

        openWin(nodeWrap) {
          _export("winViewModel", winViewModel = new (_crd && WinViewModel === void 0 ? (_reportPossibleCrUseOfWinViewModel({
            error: Error()
          }), WinViewModel) : WinViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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
          }), LoseViewModel) : LoseViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
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

        openUsers(nodeWrap) {
          _export("usersViewModel", usersViewModel = new (_crd && UsersViewModel === void 0 ? (_reportPossibleCrUseOfUsersViewModel({
            error: Error()
          }), UsersViewModel) : UsersViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_USERS).source).appendTo(this.viewNode.parent, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        openTitle(nodeWrap) {
          new (_crd && TitleViewModel === void 0 ? (_reportPossibleCrUseOfTitleViewModel({
            error: Error()
          }), TitleViewModel) : TitleViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_TITLE).source).appendTo(this.viewNode.parent, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect();
        }

        openOnline(nodeWrap) {
          _export("onlineViewModel", onlineViewModel = new (_crd && OnlineViewModel === void 0 ? (_reportPossibleCrUseOfOnlineViewModel({
            error: Error()
          }), OnlineViewModel) : OnlineViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_ONLINES).source).appendTo(this.viewNode.parent, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: false
          }).setEvent({}).connect());
        }

        saveRoomId(roomId) {
          sys.localStorage.setItem("roomId", roomId);
        }

        unMountCallBack() {
          this.clearCacheData();
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName);
        }

        clearCacheData() {
          this.dispatch((_crd && resetStore === void 0 ? (_reportPossibleCrUseOfresetStore({
            error: Error()
          }), resetStore) : resetStore)(null));
          this.dispatch((_crd && resetHistoryStore === void 0 ? (_reportPossibleCrUseOfresetHistoryStore({
            error: Error()
          }), resetHistoryStore) : resetHistoryStore)(null));
          this.dispatch((_crd && resetPokerStore === void 0 ? (_reportPossibleCrUseOfresetPokerStore({
            error: Error()
          }), resetPokerStore) : resetPokerStore)(null));
          this.dispatch((_crd && resetUserStore === void 0 ? (_reportPossibleCrUseOfresetUserStore({
            error: Error()
          }), resetUserStore) : resetUserStore)(null));
          this.dispatch((_crd && setTipsAction === void 0 ? (_reportPossibleCrUseOfsetTipsAction({
            error: Error()
          }), setTipsAction) : setTipsAction)(null));
          this.dispatch((_crd && setSendedPAction === void 0 ? (_reportPossibleCrUseOfsetSendedPAction({
            error: Error()
          }), setSendedPAction) : setSendedPAction)(0));
          this.dispatch((_crd && setReadyPAction === void 0 ? (_reportPossibleCrUseOfsetReadyPAction({
            error: Error()
          }), setReadyPAction) : setReadyPAction)(0));
          this.dispatch((_crd && changeGameTypeAction === void 0 ? (_reportPossibleCrUseOfchangeGameTypeAction({
            error: Error()
          }), changeGameTypeAction) : changeGameTypeAction)(null));
          this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
            error: Error()
          }), changeGoldDataAction) : changeGoldDataAction)({}));
          this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
            error: Error()
          }), setMemberBetAction) : setMemberBetAction)(null));
          this.dispatch((_crd && updatePokerInfo === void 0 ? (_reportPossibleCrUseOfupdatePokerInfo({
            error: Error()
          }), updatePokerInfo) : updatePokerInfo)(null));
          this.dispatch((_crd && setPokerLeftAction === void 0 ? (_reportPossibleCrUseOfsetPokerLeftAction({
            error: Error()
          }), setPokerLeftAction) : setPokerLeftAction)(null));
          this.dispatch((_crd && setPokerRightAction === void 0 ? (_reportPossibleCrUseOfsetPokerRightAction({
            error: Error()
          }), setPokerRightAction) : setPokerRightAction)(null));
          this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
            error: Error()
          }), setNewBetDataAction) : setNewBetDataAction)(null));
          this.dispatch((_crd && changeCancelBetDataAction === void 0 ? (_reportPossibleCrUseOfchangeCancelBetDataAction({
            error: Error()
          }), changeCancelBetDataAction) : changeCancelBetDataAction)(null));
          this.dispatch((_crd && setUsersInfoAction === void 0 ? (_reportPossibleCrUseOfsetUsersInfoAction({
            error: Error()
          }), setUsersInfoAction) : setUsersInfoAction)(null));
        }

        getSeatIndex(memberId) {
          // 倒起找，原因是因为有可能重复上榜，右边上榜优先
          // console.log(this.comp.props.usersInfo);
          if (!this.comp.props.usersInfo || this.comp.props.usersInfo === undefined) {
            return;
          }

          ;
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

          ; // console.log("gameCacheData.leftUsers", gameCacheData.leftUsers);
          // console.log("gameCacheData.rightUsers",gameCacheData.rightUsers);
          // console.log(gameCacheData.leftUsers.concat(gameCacheData.rightUsers));
          // window.setTimeout(()=>{
          // this.dispatch(setUsersInfoAction(gameCacheData.leftUsers.concat(gameCacheData.rightUsers)))
          // },4000)
        }

        connect() {
          const storeState = this.store.getState();
          this.inject({}, state => {
            return {
              historyList: state.history.historyList,
              memberName: state.userInfo.memberName,
              memberId: state.userInfo.memberId,
              icon: state.userInfo.icon,
              gold: state.history.gold,
              winGold: state.userInfo.winGold,
              winType: state.userInfo.winType,
              memberBet: state.history.memberBet,
              oddsList: [],
              oddNewList: [],
              pokerInfo: state.pokerDetail.pokerInfo,
              pokerLeftNum: state.pokerDetail.pokerLeftNum,
              pokerRightNum: state.pokerDetail.pokerRightNum,
              sendedP: state.pokerDetail.sendedP,
              readySendP: state.pokerDetail.readySendP,
              roomId: "",
              win: state.pokerDetail.win,
              seconds: 0,
              betSeconds: 0,
              typeThreeSeconds: 0,
              gameType: state.history.gameType,
              durGameType: null,
              tips: state.pokerDetail.tips,

              /**选择的筹码 */
              selectChip: state.history.selectChip,
              myInfo: state.game.myInfo,
              usersInfo: state.game.usersInfo,
              countDown: state.game.countDown,
              newBetData: state.game.newBetData,
              allWinUsers: state.game.allWinUsers,
              goldData: state.game.goldData,
              cancelBetData: state.game.cancelBetData
            };
          });
          return this;
        }

      }) || _class);

      _export("default", DragonTigerPanelViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33e8bb7627ad5153d63ea8ddab11bb5e555ac2a8.js.map