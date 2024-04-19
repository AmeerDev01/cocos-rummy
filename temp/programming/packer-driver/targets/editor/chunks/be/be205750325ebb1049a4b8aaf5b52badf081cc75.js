System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, ModalBox, global, lang, addToastAction, UseSetOption, config, cacheData, clearCacheData, mainViewModel, phoenixV2_Audio, sourceManageSeletor, SKT_MAG_TYPE, sktInstance, sktMsgListener, bundlePkgName, PrefabPathDefine, getStore, changeGame, setAutoLauncherInfo, updateGold, updateJackpotAmount, updateJackpotDatas, updatePositionId, updateSubGameAnimationPlayInfo, updateWinloss, chooseSmallGame, initGameStore, initRoller, updateRollerStatus, AutoLauncherType, GameType, RollerStatus, calBetAmount, isAuto, isSubGameToSubGame, verifyBetResultData, PhoenixV2DialogWinViewModel, PhoenixV2FoolerViewModel, PhoenixV2HeaderViewModel, PhoenixV2RollerPanelViewModel, PhoenixV2RulePanelViewModel, EffectType, SoundPathDefine, PhoenixV2SgChooseSmallViewMode, _dec, _class, _crd, PhoenixV2MainViewModel;

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

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2_Main(extras) {
    _reporterNs.report("PhoenixV2_Main", "../components/PhoenixV2_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/PhoenixV2_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/PhoenixV2_Main", _context.meta, extras);
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

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenixV2_Audio(extras) {
    _reporterNs.report("phoenixV2_Audio", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfupdateSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("updateSubGameAnimationPlayInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinloss(extras) {
    _reporterNs.report("updateWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchooseSmallGame(extras) {
    _reporterNs.report("chooseSmallGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitGameStore(extras) {
    _reporterNs.report("initGameStore", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitRoller(extras) {
    _reporterNs.report("initRoller", "../store/actions/roller", _context.meta, extras);
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

  function _reportPossibleCrUseOfisSubGameToSubGame(extras) {
    _reporterNs.report("isSubGameToSubGame", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfverifyBetResultData(extras) {
    _reporterNs.report("verifyBetResultData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2DialogWinViewModel(extras) {
    _reporterNs.report("PhoenixV2DialogWinViewModel", "./PhoenixV2DialogWinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2FoolerViewModel(extras) {
    _reporterNs.report("PhoenixV2FoolerViewModel", "./PhoenixV2FoolerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2HeaderViewModel(extras) {
    _reporterNs.report("PhoenixV2HeaderViewModel", "./PhoenixV2HeaderViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2RollerPanelViewModel(extras) {
    _reporterNs.report("PhoenixV2RollerPanelViewModel", "./PhoenixV2RollerPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2RulePanelViewModel(extras) {
    _reporterNs.report("PhoenixV2RulePanelViewModel", "./PhoenixV2RulePanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2SgChooseSmallViewMode(extras) {
    _reporterNs.report("PhoenixV2SgChooseSmallViewMode", "./PhoenixV2SgChooseSmallViewModel", _context.meta, extras);
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
    }, function (_unresolved_6) {
      UseSetOption = _unresolved_6.default;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
      clearCacheData = _unresolved_8.clearCacheData;
    }, function (_unresolved_9) {
      mainViewModel = _unresolved_9.mainViewModel;
      phoenixV2_Audio = _unresolved_9.phoenixV2_Audio;
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
      updateGold = _unresolved_14.updateGold;
      updateJackpotAmount = _unresolved_14.updateJackpotAmount;
      updateJackpotDatas = _unresolved_14.updateJackpotDatas;
      updatePositionId = _unresolved_14.updatePositionId;
      updateSubGameAnimationPlayInfo = _unresolved_14.updateSubGameAnimationPlayInfo;
      updateWinloss = _unresolved_14.updateWinloss;
      chooseSmallGame = _unresolved_14.chooseSmallGame;
      initGameStore = _unresolved_14.initGameStore;
    }, function (_unresolved_15) {
      initRoller = _unresolved_15.initRoller;
      updateRollerStatus = _unresolved_15.updateRollerStatus;
    }, function (_unresolved_16) {
      AutoLauncherType = _unresolved_16.AutoLauncherType;
      GameType = _unresolved_16.GameType;
      RollerStatus = _unresolved_16.RollerStatus;
      calBetAmount = _unresolved_16.calBetAmount;
      isAuto = _unresolved_16.isAuto;
      isSubGameToSubGame = _unresolved_16.isSubGameToSubGame;
      verifyBetResultData = _unresolved_16.verifyBetResultData;
    }, function (_unresolved_17) {
      PhoenixV2DialogWinViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      PhoenixV2FoolerViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      PhoenixV2HeaderViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      PhoenixV2RollerPanelViewModel = _unresolved_20.default;
    }, function (_unresolved_21) {
      PhoenixV2RulePanelViewModel = _unresolved_21.default;
    }, function (_unresolved_22) {
      EffectType = _unresolved_22.EffectType;
    }, function (_unresolved_23) {
      SoundPathDefine = _unresolved_23.SoundPathDefine;
    }, function (_unresolved_24) {
      PhoenixV2SgChooseSmallViewMode = _unresolved_24.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07500OxWrdC57DmLOMfOPX1", "PhoenixV2MainViewModel", undefined);

      __checkObsolete__(['Vec3']);

      PhoenixV2MainViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class PhoenixV2MainViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor(initCallback) {
          super('PhoenixV2_Main');
          this.initCallback = void 0;
          this.gameType = void 0;
          this.smallGameInfo = void 0;
          this.chooseSmallGameSg = void 0;
          this.headerViewModel = void 0;
          this.footerViewModel = void 0;
          this.rollerPanelViewModel = void 0;
          this.isAuthDone = false;
          this.isBetResult = true;

          /**奖励的坐标 */
          this.goodLuckPos = void 0;

          /**开始按钮坐标 */
          this.startBtnV = void 0;

          /**免费游戏次数坐标 */
          this.freeNumNode = void 0;
          this.betCallbackFun = void 0;
          this.initCallback = initCallback;
        }

        begin() {
          this.headerViewModel = new (_crd && PhoenixV2HeaderViewModel === void 0 ? (_reportPossibleCrUseOfPhoenixV2HeaderViewModel({
            error: Error()
          }), PhoenixV2HeaderViewModel) : PhoenixV2HeaderViewModel)().mountViewNode(this.comp.getHeader()).connect();
          this.headerViewModel.setEvent({
            quitGame: () => {
              this.onQuitGame();
            }
          });
          this.footerViewModel = new (_crd && PhoenixV2FoolerViewModel === void 0 ? (_reportPossibleCrUseOfPhoenixV2FoolerViewModel({
            error: Error()
          }), PhoenixV2FoolerViewModel) : PhoenixV2FoolerViewModel)().mountViewNode(this.comp.getFooter()).connect();
          this.rollerPanelViewModel = new (_crd && PhoenixV2RollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfPhoenixV2RollerPanelViewModel({
            error: Error()
          }), PhoenixV2RollerPanelViewModel) : PhoenixV2RollerPanelViewModel)().mountViewNode(this.comp.getRoller()).connect();
          this.footerViewModel.setEvent({
            onSendBet: () => {
              this.sendBet();
            },
            onOpenRule: () => {
              this.openRule();
            }
          });
          this.setEvent({
            onSendBet: () => {
              this.sendBet();
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
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

            if (data.freeGameCoins > 0 && data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(data.freeGameCoins));
            }

            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)({
              lastGameType: data.gameType,
              viewGameType: data.gameType,
              currGameType: data.gameType,
              leftCount: data.freeGameCount,
              freeGameAmount: data.freeGameCoins
            }));

            if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1 && data.totalFreeGameCount <= 0) {
              //还未选择小游戏时
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).comp.getSlotNode().active = false;
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).comp.getFreeNumNode().active = false;
              this.rollerPanelViewModel.viewNode.active = false;
              this.footerViewModel.comp.getStartBtnNode().getChildByName("disable").active = true;
              this.showSmallGame(smallGameInfo => {
                // this.dispatch(updateRollerStatus(RollerStatus.END))
                // 这里选择小游戏后再初始化插槽
                this.rollerPanelViewModel.comp.initSlot(smallGameInfo); // 播放切换游戏动画

                this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                  error: Error()
                }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                  gameType: data.gameType,
                  param: 0 //开门类型

                }));
              });
            } else {
              if (data.phoenixFreeGameLine && data.totalFreeGameCount > 0 && data.freeGameCount > 0) {
                //上一把已进入小游戏
                const i = data.phoenixFreeGameLine - 1;
                this.dispatch((_crd && chooseSmallGame === void 0 ? (_reportPossibleCrUseOfchooseSmallGame({
                  error: Error()
                }), chooseSmallGame) : chooseSmallGame)({
                  id: data.phoenixFreeGameLine,
                  totalCount: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).smallGame[i].times,
                  wildSprite: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).smallGame[i].fileName,
                  wildSkeleton: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).smallGame[i].wildFileName
                })); // 这里初始化插槽

                this.rollerPanelViewModel.comp.initSlot();
              }
            }

            this.playBgMusic();

            if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN) {
              // 这里初始化插槽
              this.rollerPanelViewModel.comp.initSlot();
            } // 延时一点时间才卸载laoding界面


            this.comp.scheduleOnce(() => {
              this.viewNode.isValid && this.initCallback && this.initCallback();

              if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME1 && data.totalFreeGameCount > 0 && data.freeGameCount > 0) {
                // 进入游戏之后如果是自动游戏，就发送下注
                if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
                  error: Error()
                }), isAuto) : isAuto)(this.comp.props.autoLauncherInfo, this.comp.props.gameTypeInfo)) {
                  this.comp.scheduleOnce(() => {
                    this.sendBet();
                  }, 1);
                }
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
            const result = (_crd && verifyBetResultData === void 0 ? (_reportPossibleCrUseOfverifyBetResultData({
              error: Error()
            }), verifyBetResultData) : verifyBetResultData)(data);

            if (!error && result > 0) {
              (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
                error: Error()
              }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).DING);
              const content = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
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
            const si = data.dl.si[0]; // if (si.nextGameType === GameType.SUBGAME2 || this.comp.props.gameTypeInfo.viewGameType === GameType.SUBGAME2) {
            //   //每局的锁定图标
            //   cacheData.fixedChessboardIcon = si.fixedChessboardIcon;
            // }
            // 服务器的索引是从1开始的

            const rollerId = si.rollerId;

            for (let i = 0; i < rollerId.length; i++) {
              rollerId[i]--;
            } // console.log("rollerId ", si.rollerId)


            const localLeftCount = this.comp.props.gameTypeInfo.leftCount;
            let leftCount = si.freeCount;
            let nextLeftCount = undefined;
            let isDelay = false; // 小游戏切到小游戏时，暂不改变切换状态
            // 为了让玩家延时看到剩余的次数，特殊处理

            if ((_crd && isSubGameToSubGame === void 0 ? (_reportPossibleCrUseOfisSubGameToSubGame({
              error: Error()
            }), isSubGameToSubGame) : isSubGameToSubGame)(this.comp.props.gameTypeInfo.viewGameType, si.nextGameType)) {}

            if ((_crd && isSubGameToSubGame === void 0 ? (_reportPossibleCrUseOfisSubGameToSubGame({
              error: Error()
            }), isSubGameToSubGame) : isSubGameToSubGame)(this.comp.props.gameTypeInfo.viewGameType, si.nextGameType) || si.freeCount >= localLeftCount && this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2 // 如果服务器给的次数比本地的次数大了，说明次数发生变化，延迟显示
            || localLeftCount - si.freeCount > 1 && this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              //如果服务器给的次数小于本地的次数超过了1次，说明次数发生变化，延迟显示
              leftCount = localLeftCount - 1;
              leftCount = leftCount < 0 ? 0 : leftCount;
              nextLeftCount = si.freeCount;
            }

            if (isDelay) {
              leftCount = localLeftCount - 1;
              leftCount = leftCount < 0 ? 0 : leftCount;
              nextLeftCount = si.freeCount;
            }

            if (si.indexGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN || si.indexGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1 && si.freeCount < localLeftCount) {
              this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                error: Error()
              }), changeGame) : changeGame)({
                lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).NONE,
                viewGameType: this.comp.props.gameTypeInfo.viewGameType,
                currGameType: si.nextGameType,
                leftCount: leftCount,
                freeGameAmount: si.freeGameAmount,
                nextLeftCount: nextLeftCount
              }));
            }

            if (si.indexGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1 && si.freeCount >= localLeftCount) {
              this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                error: Error()
              }), changeGame) : changeGame)({
                lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).NONE,
                viewGameType: this.comp.props.gameTypeInfo.viewGameType,
                currGameType: si.nextGameType,
                leftCount: localLeftCount - 1,
                freeGameAmount: si.freeGameAmount,
                nextLeftCount: nextLeftCount
              }));
            }
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

          if ((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenixV2 && (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenixV2.betTarget) {
            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenixV2.betTarget));
          } else {
            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)(1));
          }
        }

        sendBet() {
          if (!this.isAuthDone) return;

          if (!this.isBetResult) {
            console.log("已经发送过了下注，不能重复发送，等待服务器返回");
            return;
          }

          const betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.comp.props.positionId); // 在主游戏中才提示余额不足

          if (this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN && this.comp.props.gold < betAmount) {
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
            })); // 如果余额不足，并且是自动状态，就取消自动

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

          if (this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(this.comp.props.gold - betAmount));
          }

          (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).sendBetTime = Date.now(); // console.log("sendBet time " + cacheData.sendBetTime)

          (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult = null;
          (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).fixedChessboardIcon = null;
          this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
            error: Error()
          }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).RUNNING));
          this.isBetResult = false;
          this.betCallbackFun = this.betListenerTimeHandle.bind(this);
          this.comp.schedule(this.betCallbackFun, 10); // sktInstance.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
          //   "positionId": this.comp.props.positionId,
          //   "tableId": cacheData.authData.tableId,
          // });
          //发送下注

          if (this.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            //主游戏
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH, {
              "positionId": this.comp.props.positionId,
              "tableId": (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).authData.tableId
            });
          } else if (this.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            //小游戏
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH, {
              "positionId": this.comp.props.positionId,
              "freeGamePositionId": this.smallGameInfo.id,
              "tableId": (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).authData.tableId
            });
          }
        }

        betListenerTimeHandle() {
          if (!this.isBetResult) {
            this.isBetResult = true;
            const content = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.WebSocketModule.WebSocketError) + '-' + (_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCH;
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).DING);
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
          (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
            error: Error()
          }), getStore) : getStore)().dispatch((_crd && initGameStore === void 0 ? (_reportPossibleCrUseOfinitGameStore({
            error: Error()
          }), initGameStore) : initGameStore)(0));
          (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
            error: Error()
          }), getStore) : getStore)().dispatch((_crd && initRoller === void 0 ? (_reportPossibleCrUseOfinitRoller({
            error: Error()
          }), initRoller) : initRoller)(0));
        }

        getRollerPanelViewModel() {
          return this.rollerPanelViewModel;
        }

        onQuitGame() {
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).closeSubGame();
        }
        /**显示大奖 */


        showDialogWin(dialogInfo, done) {
          let phoenixV2DialogWinViewModel = new (_crd && PhoenixV2DialogWinViewModel === void 0 ? (_reportPossibleCrUseOfPhoenixV2DialogWinViewModel({
            error: Error()
          }), PhoenixV2DialogWinViewModel) : PhoenixV2DialogWinViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).DIALOG_WIN).source).appendTo(this.viewNode);
          phoenixV2DialogWinViewModel.setProps({
            dialogInfo: dialogInfo,
            gameTypeInfo: this.comp.props.gameTypeInfo,
            autoLauncherInfo: this.comp.props.autoLauncherInfo
          });
          phoenixV2DialogWinViewModel.setEvent({
            onWindowCloseHandler: () => {
              done && done();
            }
          });
        }
        /**显示选择小游戏面板 */


        showSmallGame(done) {
          this.chooseSmallGameSg = new (_crd && PhoenixV2SgChooseSmallViewMode === void 0 ? (_reportPossibleCrUseOfPhoenixV2SgChooseSmallViewMode({
            error: Error()
          }), PhoenixV2SgChooseSmallViewMode) : PhoenixV2SgChooseSmallViewMode)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).PHOENIX_SG_CHOOSE).source).appendTo(this.viewNode).setEvent({
            onWindowCloseHandler: i => {
              this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                error: Error()
              }), changeGame) : changeGame)({
                lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).NONE,
                viewGameType: this.comp.props.gameTypeInfo.viewGameType,
                currGameType: this.gameType,
                leftCount: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).smallGame[i].times,
                freeGameAmount: this.comp.props.gameTypeInfo.freeGameAmount,
                nextLeftCount: undefined
              }));
              const smallGameInfo = {
                id: i + 1,
                totalCount: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).smallGame[i].times,
                wildSprite: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).smallGame[i].fileName,
                wildSkeleton: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).smallGame[i].wildFileName
              };
              this.dispatch((_crd && chooseSmallGame === void 0 ? (_reportPossibleCrUseOfchooseSmallGame({
                error: Error()
              }), chooseSmallGame) : chooseSmallGame)(smallGameInfo));
              done && done(smallGameInfo);
            }
          });
        }

        getGoodLuckPos() {
          return this.goodLuckPos;
        }

        getStartBtnPos() {
          return this.startBtnV;
        }

        getFreeNumPos() {
          return this.freeNumNode;
        }

        setGoodLuckPos(pos) {
          this.goodLuckPos = pos;
        }

        setStartBtnPos(pos) {
          this.startBtnV = pos;
        }

        setFreeNumPos(pos) {
          this.freeNumNode = pos;
        }

        openRule() {
          const rulePanelViewMode = new (_crd && PhoenixV2RulePanelViewModel === void 0 ? (_reportPossibleCrUseOfPhoenixV2RulePanelViewModel({
            error: Error()
          }), PhoenixV2RulePanelViewModel) : PhoenixV2RulePanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).RULEPANEL).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1
          });
        }

        playBgMusic() {
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).stop();

          if (this.comp.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MAIN_BG, true);
          } else if (this.comp.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).GAME1_BG, true);
          }
        }

        connect() {
          this.inject({}, state => {
            this.gameType = state.game.gameTypeInfo.currGameType;
            this.smallGameInfo = state.game.chooseSmallGame;
            return {
              betDropDownlist: state.game.betDropDownlist,
              positionId: state.game.positionId,
              gold: state.game.gold,
              gameTypeInfo: state.game.gameTypeInfo,
              subGameAnimationPlayInfo: state.game.subGameAnimationPlayInfo,
              jackpotDatas: state.game.jackpotDatas,
              jackpotTotalAmount: state.game.jackpotTotalAmount,
              autoLauncherInfo: state.game.autoLauncherInfo
            };
          });
          return this;
        }

      }) || _class);

      _export("default", PhoenixV2MainViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be205750325ebb1049a4b8aaf5b52badf081cc75.js.map