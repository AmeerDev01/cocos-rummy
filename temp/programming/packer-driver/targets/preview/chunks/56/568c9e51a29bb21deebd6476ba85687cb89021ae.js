System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, ModalBox, global, lang, addToastAction, setLoadingAction, UseSetOption, config, cacheData, clearCacheData, thorv2_Audio, sourceManageSeletor, SKT_MAG_TYPE, sktInstance, sktMsgListener, bundlePkgName, PrefabPathDefine, getStore, changeGame, setAutoLauncherInfo, updateFreeGameOdds, updateGameMode, updateGold, updateJackpotAmount, updateJackpotDatas, updatePositionId, updateSubGameWinloss, updateManualSpeedStatus, updateRollerStatus, AutoLauncherType, GameModeType, GameType, RollerStatus, calBetAmount, isAuto, verifyBetResultData, ThorV2DialogWinViewModel, ThorV2FoolerViewModel, ThorV2HeaderViewModel, ThorV2RollerPanelViewModel, ThorV2RulePanelViewModel, EffectType, SoundPathDefine, ThorV2BuyMiniViewModel, ThorV2SubGameCalculateViewModel, ThorV2AuthLauncherViewModel, _dec, _class, _crd, ThorV2MainViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../../common/ModalBox", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2_Main(extras) {
    _reporterNs.report("ThorV2_Main", "../components/ThorV2_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/ThorV2_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/ThorV2_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearCacheData(extras) {
    _reporterNs.report("clearCacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGame(extras) {
    _reporterNs.report("changeGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLauncherInfo(extras) {
    _reporterNs.report("setAutoLauncherInfo", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfupdateJackpotAmount(extras) {
    _reporterNs.report("updateJackpotAmount", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateJackpotDatas(extras) {
    _reporterNs.report("updateJackpotDatas", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdatePositionId(extras) {
    _reporterNs.report("updatePositionId", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameWinloss(extras) {
    _reporterNs.report("updateSubGameWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateManualSpeedStatus(extras) {
    _reporterNs.report("updateManualSpeedStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateRollerStatus(extras) {
    _reporterNs.report("updateRollerStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAuthDataVo(extras) {
    _reporterNs.report("AuthDataVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogInfo(extras) {
    _reporterNs.report("DialogInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackpotData(extras) {
    _reporterNs.report("JackpotData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerLaunchResult(extras) {
    _reporterNs.report("RollerLaunchResult", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcalBetAmount(extras) {
    _reporterNs.report("calBetAmount", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisAuto(extras) {
    _reporterNs.report("isAuto", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfverifyBetResultData(extras) {
    _reporterNs.report("verifyBetResultData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2DialogWinViewModel(extras) {
    _reporterNs.report("ThorV2DialogWinViewModel", "./ThorV2DialogWinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2FoolerViewModel(extras) {
    _reporterNs.report("ThorV2FoolerViewModel", "./ThorV2FoolerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2HeaderViewModel(extras) {
    _reporterNs.report("ThorV2HeaderViewModel", "./ThorV2HeaderViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2RollerPanelViewModel(extras) {
    _reporterNs.report("ThorV2RollerPanelViewModel", "./ThorV2RollerPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2RulePanelViewModel(extras) {
    _reporterNs.report("ThorV2RulePanelViewModel", "./ThorV2RulePanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2BuyMiniViewModel(extras) {
    _reporterNs.report("ThorV2BuyMiniViewModel", "./ThorV2BuyMiniViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2SubGameCalculateViewModel(extras) {
    _reporterNs.report("ThorV2SubGameCalculateViewModel", "./ThorV2SubGameCalculateViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2AuthLauncherViewModel(extras) {
    _reporterNs.report("ThorV2AuthLauncherViewModel", "./ThorV2AuthLauncherViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      ModalBox = _unresolved_3.default;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
      lang = _unresolved_4.lang;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
      setLoadingAction = _unresolved_5.setLoadingAction;
    }, function (_unresolved_6) {
      UseSetOption = _unresolved_6.default;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
      clearCacheData = _unresolved_8.clearCacheData;
    }, function (_unresolved_9) {
      thorv2_Audio = _unresolved_9.thorv2_Audio;
      sourceManageSeletor = _unresolved_9.sourceManageSeletor;
    }, function (_unresolved_10) {
      SKT_MAG_TYPE = _unresolved_10.SKT_MAG_TYPE;
      sktInstance = _unresolved_10.sktInstance;
      sktMsgListener = _unresolved_10.sktMsgListener;
    }, function (_unresolved_11) {
      bundlePkgName = _unresolved_11.bundlePkgName;
    }, function (_unresolved_12) {
      PrefabPathDefine = _unresolved_12.PrefabPathDefine;
    }, function (_unresolved_13) {
      getStore = _unresolved_13.getStore;
    }, function (_unresolved_14) {
      changeGame = _unresolved_14.changeGame;
      setAutoLauncherInfo = _unresolved_14.setAutoLauncherInfo;
      updateFreeGameOdds = _unresolved_14.updateFreeGameOdds;
      updateGameMode = _unresolved_14.updateGameMode;
      updateGold = _unresolved_14.updateGold;
      updateJackpotAmount = _unresolved_14.updateJackpotAmount;
      updateJackpotDatas = _unresolved_14.updateJackpotDatas;
      updatePositionId = _unresolved_14.updatePositionId;
      updateSubGameWinloss = _unresolved_14.updateSubGameWinloss;
    }, function (_unresolved_15) {
      updateManualSpeedStatus = _unresolved_15.updateManualSpeedStatus;
      updateRollerStatus = _unresolved_15.updateRollerStatus;
    }, function (_unresolved_16) {
      AutoLauncherType = _unresolved_16.AutoLauncherType;
      GameModeType = _unresolved_16.GameModeType;
      GameType = _unresolved_16.GameType;
      RollerStatus = _unresolved_16.RollerStatus;
      calBetAmount = _unresolved_16.calBetAmount;
      isAuto = _unresolved_16.isAuto;
      verifyBetResultData = _unresolved_16.verifyBetResultData;
    }, function (_unresolved_17) {
      ThorV2DialogWinViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      ThorV2FoolerViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      ThorV2HeaderViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      ThorV2RollerPanelViewModel = _unresolved_20.default;
    }, function (_unresolved_21) {
      ThorV2RulePanelViewModel = _unresolved_21.default;
    }, function (_unresolved_22) {
      EffectType = _unresolved_22.EffectType;
    }, function (_unresolved_23) {
      SoundPathDefine = _unresolved_23.SoundPathDefine;
    }, function (_unresolved_24) {
      ThorV2BuyMiniViewModel = _unresolved_24.default;
    }, function (_unresolved_25) {
      ThorV2SubGameCalculateViewModel = _unresolved_25.default;
    }, function (_unresolved_26) {
      ThorV2AuthLauncherViewModel = _unresolved_26.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a54d6o5l9pMgqHTgzFFFRJW", "ThorV2MainViewModel", undefined);

      __checkObsolete__(['Vec3']);

      ThorV2MainViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class ThorV2MainViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor(initCallback) {
          super('ThorV2_Main');
          this.initCallback = void 0;
          this.headerViewModel = void 0;
          this.footerViewModel = void 0;
          this.rollerPanelViewModel = void 0;
          this.isAuthDone = false;
          this.isBetResult = true;

          /**奖励的坐标 */
          this.goodLuckPos = void 0;
          this.betCallbackFun = void 0;
          this.initCallback = initCallback;
        }

        begin() {
          this.footerViewModel = new (_crd && ThorV2FoolerViewModel === void 0 ? (_reportPossibleCrUseOfThorV2FoolerViewModel({
            error: Error()
          }), ThorV2FoolerViewModel) : ThorV2FoolerViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FOOTER).source).appendTo(this.comp.getActionBarNode()).connect();
          this.headerViewModel = new (_crd && ThorV2HeaderViewModel === void 0 ? (_reportPossibleCrUseOfThorV2HeaderViewModel({
            error: Error()
          }), ThorV2HeaderViewModel) : ThorV2HeaderViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).HEADER).source).appendTo(this.comp.getActionBarNode()).connect();
          this.headerViewModel.setEvent({
            quitGame: () => {
              this.onQuitGame();
            },
            onOpenRule: () => {
              this.openRule();
            }
          });
          this.rollerPanelViewModel = new (_crd && ThorV2RollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfThorV2RollerPanelViewModel({
            error: Error()
          }), ThorV2RollerPanelViewModel) : ThorV2RollerPanelViewModel)().mountViewNode(this.comp.getRollerPanel()).connect();
          this.footerViewModel.setEvent({
            onSendBet: () => {
              this.sendBet();
            },
            onOpenRule: () => {
              this.openRule();
            },
            onOpenAuto: () => {
              this.openAutoPanel();
            }
          });
          this.setEvent({
            onSendBet: () => {
              this.sendBet();
            },
            onOpenBuyMiniPanel: () => {
              this.openBubMiniPanel();
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            if (error) {
              return;
            }

            if (!data) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.FetcherFaild) + '-' + (_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH
              });
              return;
            }

            this.isAuthDone = true;
            (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).authData = data;
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(data.coinsBeforeBetting));
            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)({
              lastGameType: data.gameType,
              viewGameType: data.gameType,
              currGameType: data.gameType,
              leftCount: data.freeGameCount,
              freeGameAmount: data.freeGameCoins
            }));
            this.dispatch((_crd && updateGameMode === void 0 ? (_reportPossibleCrUseOfupdateGameMode({
              error: Error()
            }), updateGameMode) : updateGameMode)((_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
              error: Error()
            }), GameModeType) : GameModeType).normal));
            this.playBgMusic();

            if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              this.dispatch((_crd && updateFreeGameOdds === void 0 ? (_reportPossibleCrUseOfupdateFreeGameOdds({
                error: Error()
              }), updateFreeGameOdds) : updateFreeGameOdds)(data.lessGodFreeGameMultiple));

              if (data.freeGameCoins > 0) {
                this.dispatch((_crd && updateSubGameWinloss === void 0 ? (_reportPossibleCrUseOfupdateSubGameWinloss({
                  error: Error()
                }), updateSubGameWinloss) : updateSubGameWinloss)(data.freeGameCoins));
              }
            } // 这里初始化插槽


            this.rollerPanelViewModel.comp.initSlot(); // 延时一点时间才卸载laoding界面

            this.comp.scheduleOnce(() => {
              this.viewNode.isValid && this.initCallback && this.initCallback(); // 进入游戏之后如果是自动游戏，就发送下注

              if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
                error: Error()
              }), isAuto) : isAuto)(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
                this.sendBet();
              }
            }, 0.1);
          });
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
            token: localStorage.getItem("token"),
            gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            this.comp.unschedule(this.betCallbackFun);
            this.betCallbackFun = undefined;
            this.isBetResult = true;
            var result = (_crd && verifyBetResultData === void 0 ? (_reportPossibleCrUseOfverifyBetResultData({
              error: Error()
            }), verifyBetResultData) : verifyBetResultData)(data);

            if (!error && result > 0) {
              var content = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.InitGameModule.FetcherFaild) + '-ERROR(' + result + ')';
              (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                error: Error()
              }), ModalBox) : ModalBox).Instance().show({
                content: content,
                type: 'Prompt'
              }, () => {
                return true;
              });
              return;
            }

            (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult = data;
            var si = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0]; // 服务器的索引是从1开始的

            var rollerId = si.rollerId;

            for (var i = 0; i < rollerId.length; i++) {
              rollerId[i]--;
            }

            console.log("rollerId ", si.rollerId);
            var leftCount = si.freeCount;
            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)({
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: si.indexGameType,
              currGameType: si.nextGameType,
              leftCount: leftCount,
              freeGameAmount: si.freeGameAmount
            }));
          }); // 更新金额

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).REFRESHCOINS, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JACKPOT, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            this.dispatch((_crd && updateJackpotDatas === void 0 ? (_reportPossibleCrUseOfupdateJackpotDatas({
              error: Error()
            }), updateJackpotDatas) : updateJackpotDatas)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JACKPOT_TOTAL, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            this.dispatch((_crd && updateJackpotAmount === void 0 ? (_reportPossibleCrUseOfupdateJackpotAmount({
              error: Error()
            }), updateJackpotAmount) : updateJackpotAmount)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).VACATETHEROOM, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame({
              confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.UpdateModule.GameNotice, {}, {
                placeStr: "对不起，系统维护中，请稍后再尝试登录"
              })
            });
          });

          if ((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.egyptV2 && (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.egyptV2.betTarget) {
            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.gameSet.egyptV2.betTarget));
          } else {
            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)(1));
          }
        }

        sendBet(betAmount) {
          if (betAmount === void 0) {
            betAmount = 0;
          }

          if (!this.isAuthDone) {
            return;
          }

          if (!this.isBetResult) {
            console.log("已经发送过了下注，不能重复发送，等待服务器返回");
            return;
          } // 是否购买


          var isBuy = betAmount > 0;
          var gameModeType = isBuy ? (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
            error: Error()
          }), GameModeType) : GameModeType).buyMiniGames : this.comp.props.gameModeType;

          if (betAmount === 0) {
            betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
              error: Error()
            }), calBetAmount) : calBetAmount)(this.comp.props.betAmount, this.comp.props.positionId);
          } // 在主游戏中才提示余额不足


          if (this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN && this.comp.props.gold < betAmount) {
            if (isBuy) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop();
            } else {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                  placeStr: "对不起，您的金币不足，请充值！"
                })
              }));
            } // 如果余额不足，并且是自动状态，就取消自动


            if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
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

            return;
          }

          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).PER_HIT);
          this.dispatch((_crd && updateManualSpeedStatus === void 0 ? (_reportPossibleCrUseOfupdateManualSpeedStatus({
            error: Error()
          }), updateManualSpeedStatus) : updateManualSpeedStatus)(false));

          if (this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(this.comp.props.gold - betAmount));
          }

          (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).sendBetTime = Date.now();
          console.log("sendBet time " + (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).sendBetTime);
          (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult = null;
          this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
            error: Error()
          }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).RUNNING));
          this.isBetResult = false;
          this.betCallbackFun = this.betListenerTimeHandle.bind(this);
          this.comp.schedule(this.betCallbackFun, 10);
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH, {
            positionId: this.comp.props.positionId,
            tableId: (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).authData.tableId,
            buy: gameModeType
          });
        }

        betListenerTimeHandle() {
          if (!this.isBetResult) {
            this.isBetResult = true;
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
            var content = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.WebSocketModule.WebSocketError) + '-' + (_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH;
            (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().show({
              content: content,
              type: 'Prompt'
            }, () => {
              this.onQuitGame();
              return true;
            });
          }
        }

        unMountCallBack() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName);
          this.footerViewModel.unMount();
          this.headerViewModel.unMount();
          this.rollerPanelViewModel.unMount();
          (_crd && clearCacheData === void 0 ? (_reportPossibleCrUseOfclearCacheData({
            error: Error()
          }), clearCacheData) : clearCacheData)();
        }

        getRollerPanelViewModel() {
          return this.rollerPanelViewModel;
        }

        onQuitGame() {
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).closeSubGame();
        }
        /**进入退出小游戏处理 */


        enterExitSubGame(dialogInfo, done) {
          var thorV2SubGameCalculateViewModel = new (_crd && ThorV2SubGameCalculateViewModel === void 0 ? (_reportPossibleCrUseOfThorV2SubGameCalculateViewModel({
            error: Error()
          }), ThorV2SubGameCalculateViewModel) : ThorV2SubGameCalculateViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).SUB_GAME_CACULATE).source).appendTo(this.viewNode, {
            isModal: true
          });
          thorV2SubGameCalculateViewModel.setProps({
            dialogInfo: dialogInfo,
            gameTypeInfo: this.comp.props.gameTypeInfo,
            autoLauncherInfo: this.comp.props.autoLauncherInfo
          });
          thorV2SubGameCalculateViewModel.setEvent({
            onWindowCloseHandler: () => {
              done && done();
            }
          });
        }
        /**显示大奖 */


        showDialogWin(winningConfig, amount, done) {
          var thorV2DialogWinViewModel = new (_crd && ThorV2DialogWinViewModel === void 0 ? (_reportPossibleCrUseOfThorV2DialogWinViewModel({
            error: Error()
          }), ThorV2DialogWinViewModel) : ThorV2DialogWinViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).DIALOG_WIN).source).appendTo(this.viewNode, {
            isModal: true
          });
          thorV2DialogWinViewModel.setProps({
            winningConfig: winningConfig,
            amount: amount,
            gameTypeInfo: this.comp.props.gameTypeInfo,
            autoLauncherInfo: this.comp.props.autoLauncherInfo
          });
          thorV2DialogWinViewModel.setEvent({
            onWindowCloseHandler: () => {
              done && done();
            }
          });
        }

        getGoodLuckPos() {
          return this.goodLuckPos;
        }

        setGoodLuckPos(pos) {
          this.goodLuckPos = pos;
        }

        openRule() {
          var rulePanelViewMode = new (_crd && ThorV2RulePanelViewModel === void 0 ? (_reportPossibleCrUseOfThorV2RulePanelViewModel({
            error: Error()
          }), ThorV2RulePanelViewModel) : ThorV2RulePanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).RULEPANEL).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          });
        }

        playBgMusic() {
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).stop();

          if (this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BG_MUSIC_MAIN, true);
          } else {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BG_MUSIC_1, true);
          }
        }

        openBubMiniPanel() {
          var buyAmount = this.comp.getBuyMiniGameAmount();
          var thorV2BuyMiniViewModel = new (_crd && ThorV2BuyMiniViewModel === void 0 ? (_reportPossibleCrUseOfThorV2BuyMiniViewModel({
            error: Error()
          }), ThorV2BuyMiniViewModel) : ThorV2BuyMiniViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).BUY_MINI).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).connect();
          thorV2BuyMiniViewModel.setProps({
            buyAmount
          });
          thorV2BuyMiniViewModel.setEvent({
            onBuy: () => {
              this.sendBet(buyAmount);
            }
          });
        }

        openAutoPanel() {
          var thorV2AuthLauncherViewModel = new (_crd && ThorV2AuthLauncherViewModel === void 0 ? (_reportPossibleCrUseOfThorV2AuthLauncherViewModel({
            error: Error()
          }), ThorV2AuthLauncherViewModel) : ThorV2AuthLauncherViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).AUTH_LAUNCHER).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).connect();
          thorV2AuthLauncherViewModel.setEvent({
            onSendBet: () => {
              this.sendBet();
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {
              betDropDownlist: state.game.betDropDownlist,
              positionId: state.game.positionId,
              gold: state.game.gold,
              gameTypeInfo: state.game.gameTypeInfo,
              subGameAnimationPlayInfo: state.game.subGameAnimationPlayInfo,
              jackpotDatas: state.game.jackpotDatas,
              jackpotTotalAmount: state.game.jackpotTotalAmount,
              autoLauncherInfo: state.game.autoLauncherInfo,
              winIconDataItem: state.game.winIconDataItem,
              rollerStatus: state.roller.rollerStatus,
              playThorAnimation: state.game.playThorAnimation,
              playWinOddsAnimation: state.game.playWinOddsAnimation,
              winloss: state.game.winloss,
              subGameWinloss: state.game.subGameWinloss,
              betAmount: state.game.betAmount,
              gameModeType: state.game.gameModeType,
              freeGameOdds: state.game.freeGameOdds
            };
          });
          return this;
        }

      }) || _class);

      _export("default", ThorV2MainViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=568c9e51a29bb21deebd6476ba85687cb89021ae.js.map