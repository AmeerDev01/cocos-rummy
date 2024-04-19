System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, find, instantiate, sys, ViewModel, StoreInject, EffectType, config, initBetData, initHeadType, longStop, sourceManageSeletor, playMainBg, convertBetType, convertGameStatus, convertHeadType, convertResult, convertUserInfo, gameCacheData, SKT_MAG_TYPE, sktInstance, sktMsgListener, PrefabPathDefine, getStore, cancelBetAmount, changeMeGold, changeOnlineNumber, changeSeat, changeSeatBet, changeSeatWinlose, clearData, joinGame, quitGame, updatePower, _changeAnimationStatus, changeGameStatus, countdown, initResult, AnimationStatus, GameStatus, BetAreaViewModel, FooterViewModel, HeadPanelViewModel, HistoryMinViewModel, LosePanelViewModel, SettingViewModel, WinPanelViewModel, cancelBet, clearBet, seatBet, global, lang, bundlePkgName, RuleViewModel, addToastAction, BANKER_ID, _dec, _class, _crd, GameBoardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Yxx_GameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Yxx_GameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfYxx_GameBoard(extras) {
    _reporterNs.report("Yxx_GameBoard", "../components/Yxx_GameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitHeadType(extras) {
    _reporterNs.report("initHeadType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOflongStop(extras) {
    _reporterNs.report("longStop", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMainBg(extras) {
    _reporterNs.report("playMainBg", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetReturnData(extras) {
    _reporterNs.report("BetReturnData", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishPrawnCrabBalanceVo(extras) {
    _reporterNs.report("FishPrawnCrabBalanceVo", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishPrawnCrabGameTypeVo(extras) {
    _reporterNs.report("FishPrawnCrabGameTypeVo", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishPrawnCrabJoinGameRoomInfoVo(extras) {
    _reporterNs.report("FishPrawnCrabJoinGameRoomInfoVo", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishPrawnCrabMemberInfoVo(extras) {
    _reporterNs.report("FishPrawnCrabMemberInfoVo", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishPrawnCrabPushBetVo(extras) {
    _reporterNs.report("FishPrawnCrabPushBetVo", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishPrawnCrabResultVo(extras) {
    _reporterNs.report("FishPrawnCrabResultVo", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertBetType(extras) {
    _reporterNs.report("convertBetType", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertGameStatus(extras) {
    _reporterNs.report("convertGameStatus", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertHeadType(extras) {
    _reporterNs.report("convertHeadType", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertResult(extras) {
    _reporterNs.report("convertResult", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertUserInfo(extras) {
    _reporterNs.report("convertUserInfo", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../serverType", _context.meta, extras);
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

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcancelBetAmount(extras) {
    _reporterNs.report("cancelBetAmount", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeMeGold(extras) {
    _reporterNs.report("changeMeGold", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeOnlineNumber(extras) {
    _reporterNs.report("changeOnlineNumber", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeSeat(extras) {
    _reporterNs.report("changeSeat", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeSeatBet(extras) {
    _reporterNs.report("changeSeatBet", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeSeatWinlose(extras) {
    _reporterNs.report("changeSeatWinlose", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearData(extras) {
    _reporterNs.report("clearData", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjoinGame(extras) {
    _reporterNs.report("joinGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfquitGame(extras) {
    _reporterNs.report("quitGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdatePower(extras) {
    _reporterNs.report("updatePower", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAnimationStatus(extras) {
    _reporterNs.report("changeAnimationStatus", "../store/actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGameStatus(extras) {
    _reporterNs.report("changeGameStatus", "../store/actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcountdown(extras) {
    _reporterNs.report("countdown", "../store/actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitResult(extras) {
    _reporterNs.report("initResult", "../store/actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeGoldVo(extras) {
    _reporterNs.report("ChangeGoldVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerVo(extras) {
    _reporterNs.report("PowerVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqGiftSo(extras) {
    _reporterNs.report("ReqGiftSo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResGiftVo(extras) {
    _reporterNs.report("ResGiftVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfo(extras) {
    _reporterNs.report("UserInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetAreaViewModel(extras) {
    _reporterNs.report("BetAreaViewModel", "./BetAreaViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFooterViewModel(extras) {
    _reporterNs.report("FooterViewModel", "./FooterViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadPanelViewModel(extras) {
    _reporterNs.report("HeadPanelViewModel", "./HeadPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistoryMinViewModel(extras) {
    _reporterNs.report("HistoryMinViewModel", "./HistoryMinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLosePanelViewModel(extras) {
    _reporterNs.report("LosePanelViewModel", "./LosePanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingViewModel(extras) {
    _reporterNs.report("SettingViewModel", "./SettingViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinPanelViewModel(extras) {
    _reporterNs.report("WinPanelViewModel", "./WinPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcancelBet(extras) {
    _reporterNs.report("cancelBet", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearBet(extras) {
    _reporterNs.report("clearBet", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfseatBet(extras) {
    _reporterNs.report("seatBet", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundlePkgName(extras) {
    _reporterNs.report("bundlePkgName", "../sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRuleViewModel(extras) {
    _reporterNs.report("RuleViewModel", "./RuleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBANKER_ID(extras) {
    _reporterNs.report("BANKER_ID", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      find = _cc.find;
      instantiate = _cc.instantiate;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      EffectType = _unresolved_3.EffectType;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
      initBetData = _unresolved_4.initBetData;
      initHeadType = _unresolved_4.initHeadType;
    }, function (_unresolved_5) {
      longStop = _unresolved_5.longStop;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      playMainBg = _unresolved_6.playMainBg;
    }, function (_unresolved_7) {
      convertBetType = _unresolved_7.convertBetType;
      convertGameStatus = _unresolved_7.convertGameStatus;
      convertHeadType = _unresolved_7.convertHeadType;
      convertResult = _unresolved_7.convertResult;
      convertUserInfo = _unresolved_7.convertUserInfo;
      gameCacheData = _unresolved_7.gameCacheData;
    }, function (_unresolved_8) {
      SKT_MAG_TYPE = _unresolved_8.SKT_MAG_TYPE;
      sktInstance = _unresolved_8.sktInstance;
      sktMsgListener = _unresolved_8.sktMsgListener;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }, function (_unresolved_10) {
      getStore = _unresolved_10.getStore;
    }, function (_unresolved_11) {
      cancelBetAmount = _unresolved_11.cancelBetAmount;
      changeMeGold = _unresolved_11.changeMeGold;
      changeOnlineNumber = _unresolved_11.changeOnlineNumber;
      changeSeat = _unresolved_11.changeSeat;
      changeSeatBet = _unresolved_11.changeSeatBet;
      changeSeatWinlose = _unresolved_11.changeSeatWinlose;
      clearData = _unresolved_11.clearData;
      joinGame = _unresolved_11.joinGame;
      quitGame = _unresolved_11.quitGame;
      updatePower = _unresolved_11.updatePower;
    }, function (_unresolved_12) {
      _changeAnimationStatus = _unresolved_12.changeAnimationStatus;
      changeGameStatus = _unresolved_12.changeGameStatus;
      countdown = _unresolved_12.countdown;
      initResult = _unresolved_12.initResult;
    }, function (_unresolved_13) {
      AnimationStatus = _unresolved_13.AnimationStatus;
      GameStatus = _unresolved_13.GameStatus;
    }, function (_unresolved_14) {
      BetAreaViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      FooterViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      HeadPanelViewModel = _unresolved_16.default;
    }, function (_unresolved_17) {
      HistoryMinViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      LosePanelViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      SettingViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      WinPanelViewModel = _unresolved_20.default;
    }, function (_unresolved_21) {
      cancelBet = _unresolved_21.cancelBet;
      clearBet = _unresolved_21.clearBet;
      seatBet = _unresolved_21.seatBet;
    }, function (_unresolved_22) {
      global = _unresolved_22.global;
      lang = _unresolved_22.lang;
    }, function (_unresolved_23) {
      bundlePkgName = _unresolved_23.bundlePkgName;
    }, function (_unresolved_24) {
      RuleViewModel = _unresolved_24.default;
    }, function (_unresolved_25) {
      addToastAction = _unresolved_25.addToastAction;
    }, function (_unresolved_26) {
      BANKER_ID = _unresolved_26.BANKER_ID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d4c7fqBglHbbIPaUSFtubo", "GameBoardViewModel", undefined);

      __checkObsolete__(['Game', 'UITransform', 'Vec3', 'find', 'game', 'instantiate', 'log', 'sys']);

      GameBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GameBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Yxx_GameBoard');
          this.winLossViewModel = void 0;
          this.betAreaViewModel = void 0;
          this.headPanelViewModel = void 0;
          this.historyMinViewModel = void 0;
          this.completeCallback = void 0;
          this.countdown = void 0;
          this.t = 0;
        }

        begin() {
          // 
          this.clear();
          this.setEvent({
            openSettingView: () => {
              new (_crd && SettingViewModel === void 0 ? (_reportPossibleCrUseOfSettingViewModel({
                error: Error()
              }), SettingViewModel) : SettingViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).SET_PANEL).source).appendTo(find("Canvas"), {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT2,
                isModal: true
              }).connect();
            },
            openWinLossView: (userInfos, balance) => {
              userInfos = (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).winList.map(v => (_crd && convertUserInfo === void 0 ? (_reportPossibleCrUseOfconvertUserInfo({
                error: Error()
              }), convertUserInfo) : convertUserInfo)(v));

              if (balance >= 0) {
                this.winLossViewModel = new (_crd && WinPanelViewModel === void 0 ? (_reportPossibleCrUseOfWinPanelViewModel({
                  error: Error()
                }), WinPanelViewModel) : WinPanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).WIN_PANEL).source).appendTo(this.comp.node).connect().setProps({
                  userInfos,
                  balance
                });
              } else {
                this.winLossViewModel = new (_crd && LosePanelViewModel === void 0 ? (_reportPossibleCrUseOfLosePanelViewModel({
                  error: Error()
                }), LosePanelViewModel) : LosePanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).LOSE_PANEL).source).appendTo(this.comp.node).connect().setProps({
                  userInfos,
                  balance
                });
              }
            },
            clearView: () => {
              if (this.winLossViewModel) {
                this.winLossViewModel.unMount();
                this.winLossViewModel = null;
              }

              this.dispatch((_crd && clearData === void 0 ? (_reportPossibleCrUseOfclearData({
                error: Error()
              }), clearData) : clearData)(0));
            },
            quitGame: () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame();
            },
            openRulePanel: () => {
              new (_crd && RuleViewModel === void 0 ? (_reportPossibleCrUseOfRuleViewModel({
                error: Error()
              }), RuleViewModel) : RuleViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).RULE_PANEL).source).appendTo(find("Canvas"), {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT2,
                isModal: true
              }).connect();
            },
            changeAnimationStatus: animationStatus => {
              this.dispatch((_crd && _changeAnimationStatus === void 0 ? (_reportPossibleCrUseOfchangeAnimationStatus({
                error: Error()
              }), _changeAnimationStatus) : _changeAnimationStatus)(animationStatus));
            },
            giveGift: (value, memberId, num) => {
              var data = {
                roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId,

                /**道具Id */
                interactionId: value,

                /**获赠玩家 */
                toSitId: memberId,

                /** 总共需要花费的金币 */
                num: num
              };
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIVE_GIFT, data);
            }
          });
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
          });

          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).testConfig.wsUrl) {
            var token = sys.localStorage.getItem("tokentest");
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
              token
            });
          } else {
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
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            if (error) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.GameBoardInit, {}, {
                  placeStr: "进入游戏失败"
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

            if (!data.myInfo) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.GameBoardInit, {}, {
                  placeStr: "进入游戏失败"
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
            var myHead = (_crd && convertHeadType === void 0 ? (_reportPossibleCrUseOfconvertHeadType({
              error: Error()
            }), convertHeadType) : convertHeadType)(data.myInfo);
            this.dispatch((_crd && joinGame === void 0 ? (_reportPossibleCrUseOfjoinGame({
              error: Error()
            }), joinGame) : joinGame)(myHead));
            var seats = this.refactorSeat();
            data.results = data.results ? data.results : []; // 初始化结果

            var results = data.results.map(v => (_crd && convertResult === void 0 ? (_reportPossibleCrUseOfconvertResult({
              error: Error()
            }), convertResult) : convertResult)(v));
            var gameType = (_crd && convertGameStatus === void 0 ? (_reportPossibleCrUseOfconvertGameStatus({
              error: Error()
            }), convertGameStatus) : convertGameStatus)(data.gameType);
            var isNotBet = (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET !== gameType;
            var result;

            if (isNotBet) {
              result = results.pop();
            }

            this.dispatch((_crd && initResult === void 0 ? (_reportPossibleCrUseOfinitResult({
              error: Error()
            }), initResult) : initResult)(results));

            if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET === gameType && data.seconds > 0) {
              this.startBet(data.seconds);
            } else {} // 改变在线人数


            this.dispatch((_crd && changeOnlineNumber === void 0 ? (_reportPossibleCrUseOfchangeOnlineNumber({
              error: Error()
            }), changeOnlineNumber) : changeOnlineNumber)(data.memberNum)); // 初始化界面

            this.initView(); // 初始化头像

            this.headPanelViewModel.initHead(seats); // 初始化下注

            this.betAreaViewModel.initBetData(data.memberBetDetail, seats);
            isNotBet && this.dispatch((_crd && changeGameStatus === void 0 ? (_reportPossibleCrUseOfchangeGameStatus({
              error: Error()
            }), changeGameStatus) : changeGameStatus)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET, 0, result));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).ONLINE_NUMBER_CHANGE, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            this.dispatch((_crd && changeOnlineNumber === void 0 ? (_reportPossibleCrUseOfchangeOnlineNumber({
              error: Error()
            }), changeOnlineNumber) : changeOnlineNumber)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GOLD_CHANGE, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            var gold = typeof data === 'number' ? data : data.gold;
            this.dispatch((_crd && changeMeGold === void 0 ? (_reportPossibleCrUseOfchangeMeGold({
              error: Error()
            }), changeMeGold) : changeMeGold)(gold));
            this.dispatch((_crd && _changeAnimationStatus === void 0 ? (_reportPossibleCrUseOfchangeAnimationStatus({
              error: Error()
            }), _changeAnimationStatus) : _changeAnimationStatus)((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).RECHANGE_ADD_GOLD));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).POWER_VERIFY, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            this.dispatch((_crd && updatePower === void 0 ? (_reportPossibleCrUseOfupdatePower({
              error: Error()
            }), updatePower) : updatePower)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).QUIT_GAME, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {});
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_SHOW, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            if ((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET === this.comp.props.gameStatus) {
              // 拿到最新的倒计时后，就减掉1秒
              this.countdown = data.seconds - 1;
            }
          });
        }

        startCountdown() {
          if (this.t > 0) {
            window.clearInterval(this.t);
            this.t = 0;
          }

          (_crd && longStop === void 0 ? (_reportPossibleCrUseOflongStop({
            error: Error()
          }), longStop) : longStop)();
          this.dispatch((_crd && countdown === void 0 ? (_reportPossibleCrUseOfcountdown({
            error: Error()
          }), countdown) : countdown)(this.countdown));
          this.t = window.setInterval(() => {
            this.dispatch((_crd && countdown === void 0 ? (_reportPossibleCrUseOfcountdown({
              error: Error()
            }), countdown) : countdown)(--this.countdown));

            if (this.countdown <= 0) {
              window.clearInterval(this.t);
              this.t = 0;
            }
          }, 1000);
        }
        /**停止倒计时 */


        stopCountdown() {
          (_crd && longStop === void 0 ? (_reportPossibleCrUseOflongStop({
            error: Error()
          }), longStop) : longStop)(); // 如果倒计时已经为0了，不处理了

          if (this.comp.props.countdown <= 0) {
            return;
          }

          this.t && window.clearInterval(this.t);
          this.t = 0;
          this.dispatch((_crd && countdown === void 0 ? (_reportPossibleCrUseOfcountdown({
            error: Error()
          }), countdown) : countdown)(0));
        }
        /**
         * 构建座位
         * @param data 
         * @returns 
         */


        genSeats() {
          var seatNumber = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber;
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers = (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers ? (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers : [];
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).rightUsers = (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).rightUsers ? (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).rightUsers : [];
          var headTypes = [];
          headTypes = headTypes.concat(this.genSeatArray((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers, seatNumber / 2, true));
          headTypes = headTypes.concat(this.genSeatArray((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).rightUsers, seatNumber / 2, false));
          return headTypes;
        }

        genSeatArray(users, count, isLeft) {
          var level = isLeft ? 1 : 2;
          var heads = [];

          for (var i = 0; i < count; i++) {
            var head = void 0;
            var index = i + (isLeft ? 0 : 3);

            if (i < users.length) {
              head = (_crd && convertHeadType === void 0 ? (_reportPossibleCrUseOfconvertHeadType({
                error: Error()
              }), convertHeadType) : convertHeadType)(users[i]); // 左边第一个就是本局赢得最多

              head.level = i === 0 ? level : 3;
            } else {
              head = (_crd && initHeadType === void 0 ? (_reportPossibleCrUseOfinitHeadType({
                error: Error()
              }), initHeadType) : initHeadType)(index);
            } // 右边的索引从3开始


            head.index = index;
            heads.push(head);
          }

          return heads;
        }
        /**重构左右两边的座位，同时修改自己的座位号 */


        refactorSeat() {
          var myHead = this.comp.props.myHead; // 默认是在旁观位置

          myHead.index = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.lookOnIndex;
          var seats = this.genSeats();
          seats.forEach(v => {
            this.dispatch((_crd && changeSeat === void 0 ? (_reportPossibleCrUseOfchangeSeat({
              error: Error()
            }), changeSeat) : changeSeat)(v));

            if (v.userId === myHead.userId) {
              myHead.index = v.index;
            }
          });
          this.dispatch((_crd && changeSeat === void 0 ? (_reportPossibleCrUseOfchangeSeat({
            error: Error()
          }), changeSeat) : changeSeat)(myHead));
          return seats;
        }
        /**
         * 监听下注
         */


        listenerBet() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_BET, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            var userId = data.memberData.memberId + "";
            var index = this.getSeatIndex(userId);
            var isMyBet = this.comp.props.myHead.userId === userId;
            var betType = (_crd && convertBetType === void 0 ? (_reportPossibleCrUseOfconvertBetType({
              error: Error()
            }), convertBetType) : convertBetType)(data.memberData.type);
            var betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
              error: Error()
            }), initBetData) : initBetData)(index, userId, betType, data.memberData.gold);
            betData.isMyBet = isMyBet; // let totalBetAmount = data.goldData[data.memberData.type];
            // if (!totalBetAmount) totalBetAmount = 0;
            // betData.totalBetAmount = totalBetAmount;
            // 前端发送下注的时候同时调用的接口

            if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).preBet || !isMyBet) {
              this.dispatch((_crd && changeSeatBet === void 0 ? (_reportPossibleCrUseOfchangeSeatBet({
                error: Error()
              }), changeSeatBet) : changeSeatBet)(betData));
              this.dispatch((_crd && seatBet === void 0 ? (_reportPossibleCrUseOfseatBet({
                error: Error()
              }), seatBet) : seatBet)(betData));
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).preBet) {
              this.dispatch((_crd && changeMeGold === void 0 ? (_reportPossibleCrUseOfchangeMeGold({
                error: Error()
              }), changeMeGold) : changeMeGold)(data.gold));
            } else if (data.resultCode !== undefined && data.resultCode !== 0) {
              this.dispatch((_crd && changeMeGold === void 0 ? (_reportPossibleCrUseOfchangeMeGold({
                error: Error()
              }), changeMeGold) : changeMeGold)(data.gold));
              var betData = {
                betId: data.betId,
                betAmount: data.betAmount,
                userId: this.comp.props.myHead.userId,
                betType: (_crd && convertBetType === void 0 ? (_reportPossibleCrUseOfconvertBetType({
                  error: Error()
                }), convertBetType) : convertBetType)(data.betType),
                index: 0
              }; // console.log("SKT_MAG_TYPE.LAUNCHER_BET ----- ", betData);

              this.dispatch((_crd && cancelBet === void 0 ? (_reportPossibleCrUseOfcancelBet({
                error: Error()
              }), cancelBet) : cancelBet)(betData));
              this.dispatch((_crd && cancelBetAmount === void 0 ? (_reportPossibleCrUseOfcancelBetAmount({
                error: Error()
              }), cancelBetAmount) : cancelBetAmount)(betData.betAmount));
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_RESULT, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {// this.dispatch(changeGameStatus(GameStatus.STOP_BET, 0, convertResult(data.lotteryVo)));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_STATUE, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            if ((_crd && convertGameStatus === void 0 ? (_reportPossibleCrUseOfconvertGameStatus({
              error: Error()
            }), convertGameStatus) : convertGameStatus)(data.gameType) === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              // 重新构建座位
              this.refactorSeat();
              this.startBet(data.seconds);
            } else if (data.gameType === 2) {
              this.stopCountdown();
              this.dispatch((_crd && changeGameStatus === void 0 ? (_reportPossibleCrUseOfchangeGameStatus({
                error: Error()
              }), changeGameStatus) : changeGameStatus)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).STOP_BET, 0, (_crd && convertResult === void 0 ? (_reportPossibleCrUseOfconvertResult({
                error: Error()
              }), convertResult) : convertResult)(data.prawnCrabMemberDrawPrizeVo.lotteryVo)));
              this.handleBalance(data);
            }
          }); // 接受赠送礼物消息

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIVE_GIFT, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            var seats = this.comp.props.seats.filter(v => v.userId === data.receiveMemberId); // 如果展示座位上有两个相同人，就同时送两次

            if (seats && seats.length > 1) {
              seats.forEach(seat => {
                var {
                  x,
                  y
                } = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).headLocations[seat.index];
                var endPos = this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(x, y));
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true), endPos, data.giftId, this.viewNode);
              });
            } else {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).flyGift(data.giveMemberId, data.receiveMemberId, this.getHeadPos(data.giveMemberId, true), this.getHeadPos(data.receiveMemberId, false), data.giftId, this.viewNode);
            }
          });
        }
        /**
         * 获得获得用户所在位置
         * @param memberId 
         * @param isFrom 是否发送方
         * @returns 
         */


        getHeadPos(memberId, isFrom) {
          var seat = this.comp.props.seats.find(v => v.userId === memberId);
          var pos;

          if (seat) {
            var {
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
          } else if (isFrom && this.comp.props.myHead.userId === memberId) {
            pos = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition;
          } else if (isFrom) {
            // 只有发送方才有观战位置，接受方不回在观战位置
            pos = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition;
          } else {
            return undefined;
          }

          return this.viewNode.getComponent(UITransform).convertToWorldSpaceAR(pos);
        }

        listenerBalance() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MY_BALANCE_PUSH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {// const myHead = instantiate(this.comp.props.myHead);
            // gameCacheData.winList = data.roomWinInfo;
            // myHead.winloss = data.myInfo.winGold;
            // myHead.gold = data.myInfo.gold;
            // for (const key in data.myInfo.memberBet) {
            //   myHead.betAmount += data.myInfo.memberBet[key];
            // }
            // this.dispatch(changeSeat(myHead));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE_PUSH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {// gameCacheData.leftUsers = data.roomLeftInfoVos;
            // gameCacheData.rightUsers = data.roomRightInfoVos;
            // this.updateWinloss(data.lastRoomLeftInfoVos);
            // this.updateWinloss(data.lastRoomRightInfoVos);
            // // 改变在线人数
            // this.dispatch(changeOnlineNumber(data.roomInfoSize));
            // if (data.roomWinInfo) {
            //   data.roomWinInfo.forEach(v => {
            //     const seat = this.comp.props.seats.find(seat => seat.userId === v.memberId);
            //     if (seat) {
            //       const newSeat = instantiate(seat);
            //       newSeat.gold = v.gold;
            //       this.dispatch(changeSeat(newSeat));
            //     }
            //   })
            // }
          });
        }

        handleBalance(data) {
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).leftUsers = data.fishPrawnCrabWinMemberVo.roomLeftInfoVos;
          (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).rightUsers = data.fishPrawnCrabWinMemberVo.roomRightInfoVos;
          this.updateWinloss(data.fishPrawnCrabWinMemberVo.lastRoomLeftInfoVos);
          this.updateWinloss(data.fishPrawnCrabWinMemberVo.lastRoomRightInfoVos); // 改变在线人数

          this.dispatch((_crd && changeOnlineNumber === void 0 ? (_reportPossibleCrUseOfchangeOnlineNumber({
            error: Error()
          }), changeOnlineNumber) : changeOnlineNumber)(data.fishPrawnCrabWinMemberVo.roomInfoSize));

          if (data.fishPrawnCrabWinMemberVo.roomWinInfo) {
            data.fishPrawnCrabWinMemberVo.roomWinInfo.forEach(v => {
              var seat = this.comp.props.seats.find(seat => seat.userId === v.memberId);

              if (seat) {
                var newSeat = instantiate(seat);
                newSeat.gold = v.gold;
                this.dispatch((_crd && changeSeat === void 0 ? (_reportPossibleCrUseOfchangeSeat({
                  error: Error()
                }), changeSeat) : changeSeat)(newSeat));
              }
            });
          }

          if (data.fishPrawnCrabSettlementVo && data.fishPrawnCrabSettlementVo.myInfo) {
            var myHead = instantiate(this.comp.props.myHead);
            (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).winList = data.fishPrawnCrabSettlementVo.roomWinInfo;
            myHead.winloss = data.fishPrawnCrabSettlementVo.myInfo.winGold;
            myHead.gold = data.fishPrawnCrabSettlementVo.myInfo.gold;

            for (var key in data.fishPrawnCrabSettlementVo.myInfo.memberBet) {
              myHead.betAmount += data.fishPrawnCrabSettlementVo.myInfo.memberBet[key];
            }

            this.dispatch((_crd && changeSeat === void 0 ? (_reportPossibleCrUseOfchangeSeat({
              error: Error()
            }), changeSeat) : changeSeat)(myHead));
          }
        }
        /**
         * 更新座位输赢
         * @param users 
         * @returns 
         */


        updateWinloss(users) {
          if (!users || users.length === 0) {
            return;
          }

          users.filter(v => v.winGold !== 0).forEach(v => {
            this.comp.props.seats.filter(seat => seat.userId === v.memberId).forEach(seat => {
              this.dispatch((_crd && changeSeatWinlose === void 0 ? (_reportPossibleCrUseOfchangeSeatWinlose({
                error: Error()
              }), changeSeatWinlose) : changeSeatWinlose)(seat.index, v.winGold, v.gold));
            });
          });
        }

        startBet(seconds) {
          this.dispatch((_crd && changeGameStatus === void 0 ? (_reportPossibleCrUseOfchangeGameStatus({
            error: Error()
          }), changeGameStatus) : changeGameStatus)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET, seconds, null));
          this.countdown = seconds;
          this.startCountdown();
        }

        unMountCallBack() {
          this.clear(); // 完成之后的回调，卸载加载界面

          this.completeCallback && this.completeCallback();
        }

        clear() {
          this.winLossViewModel = null;
          this.betAreaViewModel = null;
          this.historyMinViewModel = null;
          this.headPanelViewModel = null;
          this.dispatch((_crd && changeGameStatus === void 0 ? (_reportPossibleCrUseOfchangeGameStatus({
            error: Error()
          }), changeGameStatus) : changeGameStatus)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).QUIT_GAME, 0, undefined));
          this.dispatch((_crd && clearBet === void 0 ? (_reportPossibleCrUseOfclearBet({
            error: Error()
          }), clearBet) : clearBet)(true));
          this.dispatch((_crd && quitGame === void 0 ? (_reportPossibleCrUseOfquitGame({
            error: Error()
          }), quitGame) : quitGame)(""));
        }

        getSeatIndex(userId) {
          // 倒起找，原因是因为有可能重复上榜，右边上榜优先
          var seat = [...this.comp.props.seats].reverse().find(v => v.userId === userId);

          if (seat) {
            return seat.index;
          }

          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.lookOnIndex;
        }

        connect() {
          this.inject({}, state => {
            return {
              gameStatus: state.gameFlow.gameStatus,
              newResult: state.gameFlow.newResult,
              myHead: state.game.myHead,
              seats: state.game.seats,
              countdown: state.gameFlow.countdown,
              tipType: state.gameFlow.tipType
            };
          });
          return this;
        }

        initConnect(completeCallback) {
          this.listenerAuth();
          this.listenerUserJoinOrQuit();
          this.listenerBet();
          this.listenerBalance();
          this.completeCallback = completeCallback;
          return this;
        }

        initView() {
          this.headPanelViewModel = new (_crd && HeadPanelViewModel === void 0 ? (_reportPossibleCrUseOfHeadPanelViewModel({
            error: Error()
          }), HeadPanelViewModel) : HeadPanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).HEAD_PANEL).source).appendTo(this.comp.getGameNode()).connect();
          this.betAreaViewModel = new (_crd && BetAreaViewModel === void 0 ? (_reportPossibleCrUseOfBetAreaViewModel({
            error: Error()
          }), BetAreaViewModel) : BetAreaViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).BET_AREA).source).appendTo(this.comp.getGameNode()).connect();
          this.historyMinViewModel = new (_crd && HistoryMinViewModel === void 0 ? (_reportPossibleCrUseOfHistoryMinViewModel({
            error: Error()
          }), HistoryMinViewModel) : HistoryMinViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).HISOTRY_MIN_PANEL).source).appendTo(this.comp.getGameNode()).connect();
          new (_crd && FooterViewModel === void 0 ? (_reportPossibleCrUseOfFooterViewModel({
            error: Error()
          }), FooterViewModel) : FooterViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FOOTER).source).appendTo(this.comp.getGameNode()).connect(); // 加载完成之后才显示部分界面

          this.comp.initEnd(); // 完成之后的回调，卸载加载界面

          this.completeCallback();
          (_crd && playMainBg === void 0 ? (_reportPossibleCrUseOfplayMainBg({
            error: Error()
          }), playMainBg) : playMainBg)();
          return this;
        }

      }) || _class);

      _export("default", GameBoardViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a464524dbc822d1794edcb9a05482833800e422b.js.map