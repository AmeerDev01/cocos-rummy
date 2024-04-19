System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Dragonv2_Audio, sourceManageSeletor, ViewModel, StoreInject, ModalBox, global, lang, addToastAction, config, cacheData, clearCacheData, SKT_MAG_TYPE, sktInstance, sktMsgListener, bundlePkgName, PrefabPathDefine, getStore, changeGame, quitGame, setAutoLauncherInfo, updateChange, updateGold, updateJackpotAmount, updateJackpotDatas, updatePositionId, updateWinloss, updateRollerStatus, AutoLauncherType, GameType, RollerStatus, calBetAmount, isAuto, isSubGameToSubGame, verifyBetResultData, DragonV2DialogWinViewModel, DragonV2FoolerViewModel, DragonV2HeaderViewModel, DragonV2RollerPanelViewModel, DragonV2topValueViewModel, UseSetOption, DragonV2RulePanelViewModel, EffectType, SoundPathDefine, _dec, _class, _crd, DragonV2MainViewModel;

  function _reportPossibleCrUseOfDragonv2_Audio(extras) {
    _reporterNs.report("Dragonv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfDragon_Main(extras) {
    _reporterNs.report("Dragon_Main", "../components/Dragon_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Dragon_Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Dragon_Main", _context.meta, extras);
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

  function _reportPossibleCrUseOfquitGame(extras) {
    _reporterNs.report("quitGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLauncherInfo(extras) {
    _reporterNs.report("setAutoLauncherInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateChange(extras) {
    _reporterNs.report("updateChange", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfupdateWinloss(extras) {
    _reporterNs.report("updateWinloss", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfDragonV2DialogWinViewModel(extras) {
    _reporterNs.report("DragonV2DialogWinViewModel", "./DragonV2DialogWinViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2FoolerViewModel(extras) {
    _reporterNs.report("DragonV2FoolerViewModel", "./DragonV2FoolerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2HeaderViewModel(extras) {
    _reporterNs.report("DragonV2HeaderViewModel", "./DragonV2HeaderViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2RollerPanelViewModel(extras) {
    _reporterNs.report("DragonV2RollerPanelViewModel", "./DragonV2RollerPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2topValueViewModel(extras) {
    _reporterNs.report("DragonV2topValueViewModel", "./DragonV2topValueViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2RulePanelViewModel(extras) {
    _reporterNs.report("DragonV2RulePanelViewModel", "./DragonV2RulePanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Dragonv2_Audio = _unresolved_2.Dragonv2_Audio;
      sourceManageSeletor = _unresolved_2.sourceManageSeletor;
    }, function (_unresolved_3) {
      ViewModel = _unresolved_3.default;
      StoreInject = _unresolved_3.StoreInject;
    }, function (_unresolved_4) {
      ModalBox = _unresolved_4.default;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
      lang = _unresolved_5.lang;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
      clearCacheData = _unresolved_8.clearCacheData;
    }, function (_unresolved_9) {
      SKT_MAG_TYPE = _unresolved_9.SKT_MAG_TYPE;
      sktInstance = _unresolved_9.sktInstance;
      sktMsgListener = _unresolved_9.sktMsgListener;
    }, function (_unresolved_10) {
      bundlePkgName = _unresolved_10.bundlePkgName;
    }, function (_unresolved_11) {
      PrefabPathDefine = _unresolved_11.PrefabPathDefine;
    }, function (_unresolved_12) {
      getStore = _unresolved_12.getStore;
    }, function (_unresolved_13) {
      changeGame = _unresolved_13.changeGame;
      quitGame = _unresolved_13.quitGame;
      setAutoLauncherInfo = _unresolved_13.setAutoLauncherInfo;
      updateChange = _unresolved_13.updateChange;
      updateGold = _unresolved_13.updateGold;
      updateJackpotAmount = _unresolved_13.updateJackpotAmount;
      updateJackpotDatas = _unresolved_13.updateJackpotDatas;
      updatePositionId = _unresolved_13.updatePositionId;
      updateWinloss = _unresolved_13.updateWinloss;
    }, function (_unresolved_14) {
      updateRollerStatus = _unresolved_14.updateRollerStatus;
    }, function (_unresolved_15) {
      AutoLauncherType = _unresolved_15.AutoLauncherType;
      GameType = _unresolved_15.GameType;
      RollerStatus = _unresolved_15.RollerStatus;
      calBetAmount = _unresolved_15.calBetAmount;
      isAuto = _unresolved_15.isAuto;
      isSubGameToSubGame = _unresolved_15.isSubGameToSubGame;
      verifyBetResultData = _unresolved_15.verifyBetResultData;
    }, function (_unresolved_16) {
      DragonV2DialogWinViewModel = _unresolved_16.default;
    }, function (_unresolved_17) {
      DragonV2FoolerViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      DragonV2HeaderViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      DragonV2RollerPanelViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      DragonV2topValueViewModel = _unresolved_20.default;
    }, function (_unresolved_21) {
      UseSetOption = _unresolved_21.default;
    }, function (_unresolved_22) {
      DragonV2RulePanelViewModel = _unresolved_22.default;
    }, function (_unresolved_23) {
      EffectType = _unresolved_23.EffectType;
    }, function (_unresolved_24) {
      SoundPathDefine = _unresolved_24.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c204QquzNAhZUzj7m1VBUV", "DragonV2MainViewModel", undefined);

      __checkObsolete__(['Vec3']);

      DragonV2MainViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class DragonV2MainViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor(initCallback) {
          super('Dragon_Main');
          this.initCallback = void 0;
          this.headerViewModel = void 0;
          this.footerViewModel = void 0;
          this.rollerPanelViewModel = void 0;
          this.dragonV2topValueViewModel = void 0;
          this.isAuthDone = false;
          this.isBetResult = true;

          /**奖励的坐标 */
          this.goodLuckPos = void 0;
          this.positionId = void 0;
          this.betCallbackFun = void 0;
          this.initCallback = initCallback;
        }

        begin() {
          this.headerViewModel = new (_crd && DragonV2HeaderViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2HeaderViewModel({
            error: Error()
          }), DragonV2HeaderViewModel) : DragonV2HeaderViewModel)().mountViewNode(this.comp.getHeader()).connect();
          this.headerViewModel.setEvent({
            quitGame: () => {
              this.onQuitGame();
            }
          });
          this.footerViewModel = new (_crd && DragonV2FoolerViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2FoolerViewModel({
            error: Error()
          }), DragonV2FoolerViewModel) : DragonV2FoolerViewModel)().mountViewNode(this.comp.getFooter()).connect();
          this.rollerPanelViewModel = new (_crd && DragonV2RollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2RollerPanelViewModel({
            error: Error()
          }), DragonV2RollerPanelViewModel) : DragonV2RollerPanelViewModel)().mountViewNode(this.comp.getRoller()).connect();
          this.dragonV2topValueViewModel = new (_crd && DragonV2topValueViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2topValueViewModel({
            error: Error()
          }), DragonV2topValueViewModel) : DragonV2topValueViewModel)().mountViewNode(this.comp.get_top_value()).connect();
          this.footerViewModel.setEvent({
            onSendBet: () => {
              this.sendBet();
            },
            onOpenRule: () => {
              this.openRule();
            },
            subnoteOperation: () => {
              if (this.positionId && this.comp.props.positionId !== this.positionId) {
                this.rollerPanelViewModel.comp.hidePyrosphere(1);
              } else {
                this.rollerPanelViewModel.comp.hidePyrosphere(2);
              }
            }
          });
          this.setEvent({
            onSendBet: () => {
              this.sendBet();
            },
            renderTheRingOfFire: key => {
              this.dragonV2topValueViewModel.comp.flashbox();
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

            if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              // 锁定的图标
              (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).fixedChessboardIcon = data.fixedChessboardIcon;
            }

            (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).authData = data;
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(data.bl));
            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)({
              lastGameType: data.gameType,
              viewGameType: data.gameType,
              currGameType: data.gameType,
              leftCount: data.freeGameCount,
              freeGameAmount: data.freeGameAmount
            }));
            this.playBgMusic();

            if (data.freeGameAmount > 0 && data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(data.freeGameAmount));
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
            const result = (_crd && verifyBetResultData === void 0 ? (_reportPossibleCrUseOfverifyBetResultData({
              error: Error()
            }), verifyBetResultData) : verifyBetResultData)(data);

            if (!error && result > 0) {
              (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
                error: Error()
              }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).ding);
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
            const si = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0];

            if (si.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2 || this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              //每局的锁定图标
              (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).fixedChessboardIcon = si.fixedChessboardIcon;
            }

            if (si.fireRingSwitch) {
              // 龙喷火
              this.comp.scheduleOnce(() => {
                this.rollerPanelViewModel.comp.joinTheRingOfFire(si.change);
              }, 1.8);
              this.comp.theDragonSpitsFire(() => {
                (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
                  error: Error()
                }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).spitOut);

                if (si.change !== undefined) {
                  if (Object.keys(si.change).length > 0) {
                    this.dispatch((_crd && updateChange === void 0 ? (_reportPossibleCrUseOfupdateChange({
                      error: Error()
                    }), updateChange) : updateChange)(si.change));
                  }
                }
              });
            } // 服务器的索引是从1开始的


            const rollerId = si.rollerId;

            for (let i = 0; i < rollerId.length; i++) {
              rollerId[i]--;
            }

            console.log("rollerId ", si.rollerId);
            const localLeftCount = this.comp.props.gameTypeInfo.leftCount;
            let leftCount = si.freeCount;
            let nextLeftCount = undefined;
            let isDelay = false; // 小游戏切到小游戏时，暂不改变切换状态
            // 为了让玩家延时看到剩余的次数，特殊处理

            if ((_crd && isSubGameToSubGame === void 0 ? (_reportPossibleCrUseOfisSubGameToSubGame({
              error: Error()
            }), isSubGameToSubGame) : isSubGameToSubGame)(this.comp.props.gameTypeInfo.viewGameType, si.gameType)) {}

            if ((_crd && isSubGameToSubGame === void 0 ? (_reportPossibleCrUseOfisSubGameToSubGame({
              error: Error()
            }), isSubGameToSubGame) : isSubGameToSubGame)(this.comp.props.gameTypeInfo.viewGameType, si.gameType) || si.freeCount >= localLeftCount && this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
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

            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)({
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: this.comp.props.gameTypeInfo.viewGameType,
              currGameType: si.gameType,
              leftCount: leftCount,
              freeGameAmount: si.freeGameAmount,
              nextLeftCount: nextLeftCount
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
          /* 更新jackpot */

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JACKPOT_TOTAL, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            if (this.comp.props.positionId >= 6) {
              this.dispatch((_crd && updateJackpotAmount === void 0 ? (_reportPossibleCrUseOfupdateJackpotAmount({
                error: Error()
              }), updateJackpotAmount) : updateJackpotAmount)(data));
            }
          });

          if ((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.dragonV2 && (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.dragonV2.betTarget) {
            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)((_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().option.gameSet.dragonV2.betTarget));
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
          this.comp.schedule(this.betCallbackFun, 10);

          if (this.positionId && this.comp.props.positionId !== this.positionId) {
            this.rollerPanelViewModel.comp.hidePyrosphere(3);
          } else {
            this.positionId = this.comp.props.positionId;
          }

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
          this.rollerPanelViewModel.comp.oldFireCircle();
        }

        openRule() {
          const rulePanelViewMode = new (_crd && DragonV2RulePanelViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2RulePanelViewModel({
            error: Error()
          }), DragonV2RulePanelViewModel) : DragonV2RulePanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).RULEPANEL).source).appendTo(this.viewNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1
          });
        }

        betListenerTimeHandle() {
          if (!this.isBetResult) {
            this.isBetResult = true;
            const content = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
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

        onQuitGame() {
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).closeSubGame();
          this.dispatch((_crd && quitGame === void 0 ? (_reportPossibleCrUseOfquitGame({
            error: Error()
          }), quitGame) : quitGame)(0));
        }
        /**显示大奖 */


        showDialogWin(dialogInfo, done) {
          let dragonV2DialogWinViewModel = new (_crd && DragonV2DialogWinViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2DialogWinViewModel({
            error: Error()
          }), DragonV2DialogWinViewModel) : DragonV2DialogWinViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).DIALOG_WIN).source).appendTo(this.viewNode).connect();
          dragonV2DialogWinViewModel.setProps({
            dialogInfo: dialogInfo,
            gameTypeInfo: this.comp.props.gameTypeInfo,
            autoLauncherInfo: this.comp.props.autoLauncherInfo
          });
          dragonV2DialogWinViewModel.setEvent({
            onWindowCloseHandler: () => {
              done && done();
            }
          });
        }
        /* 显示龙珠 */


        showTheNumberOfDragonBalls(num) {
          this.dragonV2topValueViewModel.comp.setTamako(num);
        }
        /* 初始化龙珠 */


        initOfDragonBalls() {
          this.dragonV2topValueViewModel.comp.initTamako();
        }

        getGoodLuckPos() {
          return this.goodLuckPos;
        }

        setGoodLuckPos(pos) {
          this.goodLuckPos = pos;
        }

        playBgMusic() {
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).stop();

          if (this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
              error: Error()
            }), Dragonv2_Audio) : Dragonv2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).bgMain, true);
          } else if (this.comp.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
              error: Error()
            }), Dragonv2_Audio) : Dragonv2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).bgMusic, true);
          } else {
            (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
              error: Error()
            }), Dragonv2_Audio) : Dragonv2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).bgFree, true);
          }
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
              autoLauncherInfo: state.game.autoLauncherInfo,
              theDragonSpitsFire: state.game.theDragonSpitsFire,
              jackpotTotalAmount: state.game.jackpotTotalAmount
            };
          });
          return this;
        }

      }) || _class);

      _export("default", DragonV2MainViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86e50b163fb5522508354f68eef08d55718e687e.js.map