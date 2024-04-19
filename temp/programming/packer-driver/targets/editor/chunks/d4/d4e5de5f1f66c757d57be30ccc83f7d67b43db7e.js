System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, AutoLauncherType, GameModeType, GameType, IconEffectType, config, setStopRollAction, initRollAction, setIconEffect, setRollRoundEnd, setRollSpeed, setSmallBox, SKT_MAG_TYPE, sktMsgListener, dataTransfer, refreshData, DataKeyType, TaskScheduler, Task, PrefabPathDefine, footerViewModel, starlight_Audio, gameBoardViewModel, sourceManageSeletor, EffectType, changeGameFreeGametotalMultiplier, changeMinigameCount, changeMultipleTotal, changeProfit, changeRoleAttack, changeViewGame, changeapostille, setWaiting, updateBalance, updateGameModeType, updateSubGameTimes, BaseViewModel, SoundPathDefine, addToastAction, SgBoxViewModel, sendNativeVibrate, _dec, _class, _crd, RollerPanelViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStarlight_RollerPanel(extras) {
    _reporterNs.report("Starlight_RollerPanel", "../components/Starlight_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Starlight_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Starlight_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconEffectType(extras) {
    _reporterNs.report("IconEffectType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetStopRollAction(extras) {
    _reporterNs.report("setStopRollAction", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitRollAction(extras) {
    _reporterNs.report("initRollAction", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetIconEffect(extras) {
    _reporterNs.report("setIconEffect", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollRoundEnd(extras) {
    _reporterNs.report("setRollRoundEnd", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollSpeed(extras) {
    _reporterNs.report("setRollSpeed", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSmallBox(extras) {
    _reporterNs.report("setSmallBox", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrefreshData(extras) {
    _reporterNs.report("refreshData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstarlight_Audio(extras) {
    _reporterNs.report("starlight_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameBoardViewModel(extras) {
    _reporterNs.report("gameBoardViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGameFreeGametotalMultiplier(extras) {
    _reporterNs.report("changeGameFreeGametotalMultiplier", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeMinigameCount(extras) {
    _reporterNs.report("changeMinigameCount", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeMultipleTotal(extras) {
    _reporterNs.report("changeMultipleTotal", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeRoleAttack(extras) {
    _reporterNs.report("changeRoleAttack", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeViewGame(extras) {
    _reporterNs.report("changeViewGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeapostille(extras) {
    _reporterNs.report("changeapostille", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWaiting(extras) {
    _reporterNs.report("setWaiting", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateBalance(extras) {
    _reporterNs.report("updateBalance", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateGameModeType(extras) {
    _reporterNs.report("updateGameModeType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameTimes(extras) {
    _reporterNs.report("updateSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStarlight_BigPrize(extras) {
    _reporterNs.report("Starlight_BigPrize", "../components/Starlight_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIState(extras) {
    _reporterNs.report("BPIState", "../components/Starlight_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIProps(extras) {
    _reporterNs.report("BPIProps", "../components/Starlight_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIEvent(extras) {
    _reporterNs.report("BPIEvent", "../components/Starlight_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSgBoxViewModel(extras) {
    _reporterNs.report("SgBoxViewModel", "./SgBoxViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStarlight_SmallGame_caculate(extras) {
    _reporterNs.report("Starlight_SmallGame_caculate", "../components/Starlight_SmallGame_caculate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCPIState(extras) {
    _reporterNs.report("CPIState", "../components/Starlight_SmallGame_caculate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCPIProps(extras) {
    _reporterNs.report("CPIProps", "../components/Starlight_SmallGame_caculate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCPIEvent(extras) {
    _reporterNs.report("CPIEvent", "../components/Starlight_SmallGame_caculate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendNativeVibrate(extras) {
    _reporterNs.report("sendNativeVibrate", "../../../common/bridge", _context.meta, extras);
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
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      AutoLauncherType = _unresolved_4.AutoLauncherType;
      GameModeType = _unresolved_4.GameModeType;
      GameType = _unresolved_4.GameType;
      IconEffectType = _unresolved_4.IconEffectType;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      setStopRollAction = _unresolved_6.setStopRollAction;
      initRollAction = _unresolved_6.initRollAction;
      setIconEffect = _unresolved_6.setIconEffect;
      setRollRoundEnd = _unresolved_6.setRollRoundEnd;
      setRollSpeed = _unresolved_6.setRollSpeed;
      setSmallBox = _unresolved_6.setSmallBox;
    }, function (_unresolved_7) {
      SKT_MAG_TYPE = _unresolved_7.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_7.sktMsgListener;
    }, function (_unresolved_8) {
      dataTransfer = _unresolved_8.default;
      refreshData = _unresolved_8.refreshData;
      DataKeyType = _unresolved_8.DataKeyType;
    }, function (_unresolved_9) {
      TaskScheduler = _unresolved_9.default;
      Task = _unresolved_9.Task;
    }, function (_unresolved_10) {
      PrefabPathDefine = _unresolved_10.PrefabPathDefine;
    }, function (_unresolved_11) {
      footerViewModel = _unresolved_11.footerViewModel;
      starlight_Audio = _unresolved_11.starlight_Audio;
      gameBoardViewModel = _unresolved_11.gameBoardViewModel;
      sourceManageSeletor = _unresolved_11.sourceManageSeletor;
    }, function (_unresolved_12) {
      EffectType = _unresolved_12.EffectType;
    }, function (_unresolved_13) {
      changeGameFreeGametotalMultiplier = _unresolved_13.changeGameFreeGametotalMultiplier;
      changeMinigameCount = _unresolved_13.changeMinigameCount;
      changeMultipleTotal = _unresolved_13.changeMultipleTotal;
      changeProfit = _unresolved_13.changeProfit;
      changeRoleAttack = _unresolved_13.changeRoleAttack;
      changeViewGame = _unresolved_13.changeViewGame;
      changeapostille = _unresolved_13.changeapostille;
      setWaiting = _unresolved_13.setWaiting;
      updateBalance = _unresolved_13.updateBalance;
      updateGameModeType = _unresolved_13.updateGameModeType;
      updateSubGameTimes = _unresolved_13.updateSubGameTimes;
    }, function (_unresolved_14) {
      BaseViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      SoundPathDefine = _unresolved_15.SoundPathDefine;
    }, function (_unresolved_16) {
      addToastAction = _unresolved_16.addToastAction;
    }, function (_unresolved_17) {
      SgBoxViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      sendNativeVibrate = _unresolved_18.sendNativeVibrate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcad0i15u5FfppVOBECeiuH", "RollerPanelViewModel", undefined);

      __checkObsolete__(['Node', 'log']);

      RollerPanelViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class RollerPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Starlight_RollerPanel');
          this.lastGameType = void 0;
          this.currGameType = void 0;
          this.viewGameType = void 0;
          this.rollerMap = [];
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.autoLaunchType = void 0;
          this.winnerDialog = void 0;
          this.apostille = void 0;
          this.isHasten = void 0;
          this.balance = void 0;
          this.gameFreeGametotalMultiplier = void 0;
        }

        begin() {
          // const rollerMap: RollerType[] = []
          // this.dispatch(setRollRoundEnd(true))
          this.initRollerMap(); // 手动切换场景 

          this.comp.setProps({
            currGameType: this.currGameType
          });

          if (this.currGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            // 按钮置灰
            this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
              error: Error()
            }), setRollRoundEnd) : setRollRoundEnd)(true));
          } else {
            this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
              error: Error()
            }), setRollRoundEnd) : setRollRoundEnd)(false));
            this.comp.scheduleOnce(() => {
              (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                error: Error()
              }), footerViewModel) : footerViewModel).manualBetHandler();
            }, 2);
          }

          this.setEvent({
            setRoleAttacks: bl => {
              this.dispatch((_crd && changeRoleAttack === void 0 ? (_reportPossibleCrUseOfchangeRoleAttack({
                error: Error()
              }), changeRoleAttack) : changeRoleAttack)(bl));
            },
            allRollStop: () => {
              (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                error: Error()
              }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).ROLLER_END);
              this.dispatch((_crd && changeMultipleTotal === void 0 ? (_reportPossibleCrUseOfchangeMultipleTotal({
                error: Error()
              }), changeMultipleTotal) : changeMultipleTotal)(0));
              this.dispatch((_crd && changeMinigameCount === void 0 ? (_reportPossibleCrUseOfchangeMinigameCount({
                error: Error()
              }), changeMinigameCount) : changeMinigameCount)(0));
              this.dispatch((_crd && setSmallBox === void 0 ? (_reportPossibleCrUseOfsetSmallBox({
                error: Error()
              }), setSmallBox) : setSmallBox)({}));
              const flicherArr = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).ICON_EFFECT_DATA);
              flicherArr.forEach(item => {
                if (Object.keys(flicherArr).length > 0) {
                  for (let i in item.winningPosition) {
                    const task = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                      error: Error()
                    }), Task) : Task)(done => {
                      for (let i = 0; i < item.gameWinningVos.length; i++) {
                        const v = item.gameWinningVos[i];
                        this.dispatch((_crd && setSmallBox === void 0 ? (_reportPossibleCrUseOfsetSmallBox({
                          error: Error()
                        }), setSmallBox) : setSmallBox)(v));
                      } //console.log('消除列表',item.winningPosition[i]);


                      this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                        error: Error()
                      }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                        error: Error()
                      }), IconEffectType) : IconEffectType).NORMAIL, item.winningPosition[i])); //闪烁2秒钟就结束

                      this.comp.scheduleOnce(() => {
                        done();
                      }, 2);
                    });
                    this.taskScheduler.joinqQueue(task, false);
                  }
                }
              });
              const theNumberOfAdditions = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                // 添加增加特效图标
                if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1 && (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).INDEXADDFREECOUNT) > 2) {
                  this.comp.setokkk(done);
                } else {
                  done();
                }
              });
              this.taskScheduler.joinqQueue(theNumberOfAdditions, false);
              const miniGameFlying = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                // 倍数飞行特效 
                if (flicherArr.length > 1) {
                  this.comp.multiplier(done);
                } else {
                  done();
                }
              });
              this.taskScheduler.joinqQueue(miniGameFlying, false);
              const multiplesOfFlight = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                //小游戏飞行特效
                if (flicherArr.length > 1 && (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).RATES).length > 0 && (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  this.comp.samllMultiplier(done);
                } else {
                  done();
                }
              });
              this.taskScheduler.joinqQueue(multiplesOfFlight, false);
              const addFrequency = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                // 倍数特效
                this.dispatch((_crd && changeMultipleTotal === void 0 ? (_reportPossibleCrUseOfchangeMultipleTotal({
                  error: Error()
                }), changeMultipleTotal) : changeMultipleTotal)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).ITEMTOTALMULTIPLIER))); //检查添加INDEXADDFREECOUNT

                if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  this.dispatch((_crd && changeMinigameCount === void 0 ? (_reportPossibleCrUseOfchangeMinigameCount({
                    error: Error()
                  }), changeMinigameCount) : changeMinigameCount)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).INDEXADDFREECOUNT))); // 更新次数

                  this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                    error: Error()
                  }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
                  this.dispatch((_crd && changeGameFreeGametotalMultiplier === void 0 ? (_reportPossibleCrUseOfchangeGameFreeGametotalMultiplier({
                    error: Error()
                  }), changeGameFreeGametotalMultiplier) : changeGameFreeGametotalMultiplier)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).GAMEFREEGAMETOTALMULTIPLIER)));
                  this.comp.scheduleOnce(() => {
                    done();
                  }, 1);
                } else {
                  done();
                }
              });
              this.taskScheduler.joinqQueue(addFrequency, false);
              const addGold = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                //图标效果执行完之后要执行的任务，检查是否有爆奖
                if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).MAIN) {
                  this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                    error: Error()
                  }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).PROFIT_AMOUNT)));
                } else {
                  this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                    error: Error()
                  }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
                }

                this.comp.scheduleOnce(() => {
                  done();
                }, 0.5);
              });
              this.taskScheduler.joinqQueue(addGold, false);
              const showAwardTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                //图标效果执行完之后要执行的任务，检查是否有爆奖
                this.checkAward(done);
              });
              this.taskScheduler.joinqQueue(showAwardTask, false);

              if ((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                error: Error()
              }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask && !(_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                error: Error()
              }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask.isExecute) {
                if (this.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1 && (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).SUBGAME_TIMES) !== 0) {
                  //isSCATTER显示
                  this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                      error: Error()
                    }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).SCATTER_BONUS);
                    this.comp.setokkk(done);
                  })); //马上执行的游戏类型是小游戏1

                  this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    if (this.apostille) {
                      this.initRollerMap(2);
                    }

                    (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                      error: Error()
                    }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).UI_FREESPIN);
                    const caculateDialog1 = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                      error: Error()
                    }), BaseViewModel) : BaseViewModel)('Starlight_SmallGame_caculate').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                      error: Error()
                    }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).CACULATE).source).appendTo(this.parentNode.parent, {
                      effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT1,
                      isModal: true
                    }).setProps({
                      type: 1,
                      total: (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                        error: Error()
                      }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                        error: Error()
                      }), DataKeyType) : DataKeyType).SUBGAME_TIMES),
                      autoLaunchType: this.autoLaunchType
                    }).setEvent({
                      killSelfHandler: () => {
                        caculateDialog1.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                          error: Error()
                        }), EffectType) : EffectType).EFFECT1); // 手动切换小游戏

                        this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                          error: Error()
                        }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                          error: Error()
                        }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                          error: Error()
                        }), DataKeyType) : DataKeyType).BALANCE)));
                        this.comp.setProps({
                          currGameType: 1
                        });
                        this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                          error: Error()
                        }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                          error: Error()
                        }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                          error: Error()
                        }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
                        (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                          error: Error()
                        }), starlight_Audio) : starlight_Audio).stop();
                        (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                          error: Error()
                        }), starlight_Audio) : starlight_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                          error: Error()
                        }), SoundPathDefine) : SoundPathDefine).BG_MUSIC_1, true);
                        done();
                      }
                    });
                  }));
                }

                if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).NEXTGAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).MAIN) {
                  this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    if (this.apostille) {
                      this.initRollerMap(1);
                      this.dispatch((_crd && updateGameModeType === void 0 ? (_reportPossibleCrUseOfupdateGameModeType({
                        error: Error()
                      }), updateGameModeType) : updateGameModeType)((_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
                        error: Error()
                      }), GameModeType) : GameModeType).buyToWin));
                    } else {
                      this.dispatch((_crd && updateGameModeType === void 0 ? (_reportPossibleCrUseOfupdateGameModeType({
                        error: Error()
                      }), updateGameModeType) : updateGameModeType)((_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
                        error: Error()
                      }), GameModeType) : GameModeType).normal));
                    }

                    if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                      error: Error()
                    }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                      error: Error()
                    }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT) !== 0) {
                      (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                        error: Error()
                      }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                        error: Error()
                      }), SoundPathDefine) : SoundPathDefine).UI_FREESPIN);
                      const caculateDialog2 = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                        error: Error()
                      }), BaseViewModel) : BaseViewModel)('Starlight_SmallGame_caculate').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                        error: Error()
                      }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                        error: Error()
                      }), PrefabPathDefine) : PrefabPathDefine).CACULATE).source).appendTo(this.parentNode.parent, {
                        effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                          error: Error()
                        }), EffectType) : EffectType).EFFECT1,
                        isModal: true
                      }).setProps({
                        type: 2,
                        total: (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                          error: Error()
                        }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                          error: Error()
                        }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT),
                        autoLaunchType: this.autoLaunchType
                      }).setEvent({
                        killSelfHandler: () => {
                          this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                            error: Error()
                          }), setRollRoundEnd) : setRollRoundEnd)(true));
                          this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                            error: Error()
                          }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                            error: Error()
                          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                            error: Error()
                          }), DataKeyType) : DataKeyType).BALANCE)));
                          this.comp.setProps({
                            currGameType: 0
                          });
                          caculateDialog2.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                            error: Error()
                          }), EffectType) : EffectType).EFFECT1);
                          this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                            error: Error()
                          }), changeViewGame) : changeViewGame)(0));
                          (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                            error: Error()
                          }), starlight_Audio) : starlight_Audio).stop();
                          (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                            error: Error()
                          }), starlight_Audio) : starlight_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                            error: Error()
                          }), SoundPathDefine) : SoundPathDefine).BG_MUSIC_MAIN, true);
                          this.comp.scheduleOnce(() => {
                            done();
                          }, 2);
                        }
                      });
                    } else {
                      this.comp.setProps({
                        currGameType: 0
                      });
                      done();
                    }
                  }));
                } //禁用掉主下注按钮


                this.taskScheduler.joinqQueue((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                  error: Error()
                }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask);
                this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                    error: Error()
                  }), setRollRoundEnd) : setRollRoundEnd)(true));

                  if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).NEXTGAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).SUBGAME1) {
                    (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                      error: Error()
                    }), footerViewModel) : footerViewModel).manualBetHandler();
                  } else {
                    this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
                      error: Error()
                    }), setWaiting) : setWaiting)(true));
                  }

                  done();
                }), false);
              } else {
                //不切换游戏
                this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                    error: Error()
                  }), setRollRoundEnd) : setRollRoundEnd)(true));
                  this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
                    error: Error()
                  }), setWaiting) : setWaiting)(true));

                  if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).NEXTGAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).SUBGAME1) {
                    (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                      error: Error()
                    }), footerViewModel) : footerViewModel).manualBetHandler();
                  }

                  if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).GAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).MAIN) {
                    this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                      error: Error()
                    }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                      error: Error()
                    }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                      error: Error()
                    }), DataKeyType) : DataKeyType).BALANCE)));
                  }

                  done();
                }), false);
              }
            },
            // 道具状态
            probabilityDoublingSwitch: e => {
              this.dispatch((_crd && changeapostille === void 0 ? (_reportPossibleCrUseOfchangeapostille({
                error: Error()
              }), changeapostille) : changeapostille)(e));
              this.initRollerMap();
              (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                error: Error()
              }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BUY_RATE_BTN_CLICK);

              if (e) {
                this.dispatch((_crd && updateGameModeType === void 0 ? (_reportPossibleCrUseOfupdateGameModeType({
                  error: Error()
                }), updateGameModeType) : updateGameModeType)((_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
                  error: Error()
                }), GameModeType) : GameModeType).buyToWin));
              } else {
                this.dispatch((_crd && updateGameModeType === void 0 ? (_reportPossibleCrUseOfupdateGameModeType({
                  error: Error()
                }), updateGameModeType) : updateGameModeType)((_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
                  error: Error()
                }), GameModeType) : GameModeType).normal));
              }
            },
            // 是否加速
            isAccelerate: e => {
              if (!e) {
                this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                  error: Error()
                }), setRollSpeed) : setRollSpeed)(2));
              } else {
                this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                  error: Error()
                }), setRollSpeed) : setRollSpeed)(1));
              }
            },
            buyMiniGames: str => {
              (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                error: Error()
              }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).BUY_FREE_BTN);
              new (_crd && SgBoxViewModel === void 0 ? (_reportPossibleCrUseOfSgBoxViewModel({
                error: Error()
              }), SgBoxViewModel) : SgBoxViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).SGBOX).source).appendTo(this.parentNode.parent, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              }).setProps({
                miniGameAmount: str,
                balance: this.balance
              }).setEvent({}).connect();
            }
          });
          this.dispatch((_crd && initRollAction === void 0 ? (_reportPossibleCrUseOfinitRollAction({
            error: Error()
          }), initRollAction) : initRollAction)(this.rollerMap));

          if (this.autoLaunchType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).LAMIT_FAST) {
            this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
              error: Error()
            }), setRollSpeed) : setRollSpeed)(2));
          }

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, "roller", (data, error) => {
            if (error) {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: error
              }));
              this.rollerMap.forEach((rollerItem, index) => {
                this.dispatch((_crd && setStopRollAction === void 0 ? (_reportPossibleCrUseOfsetStopRollAction({
                  error: Error()
                }), setStopRollAction) : setStopRollAction)(index, 1));
              });
            } else {
              (_crd && refreshData === void 0 ? (_reportPossibleCrUseOfrefreshData({
                error: Error()
              }), refreshData) : refreshData)(data);

              if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN) {
                this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                  error: Error()
                }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).COINSAFTERBETTING)));
              }

              this.taskScheduler.stopQueue(false);
              this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                error: Error()
              }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE, []));
              this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                error: Error()
              }), changeViewGame) : changeViewGame)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE)));
              const stopIndex = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).ROLLER_STOP_INDEX_ID);
              this.rollerMap.forEach((rollerItem, index) => {
                this.dispatch((_crd && setStopRollAction === void 0 ? (_reportPossibleCrUseOfsetStopRollAction({
                  error: Error()
                }), setStopRollAction) : setStopRollAction)(index, stopIndex ? stopIndex[index] : 0));
              });
              let indexAddFreeCount = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).INDEXADDFREECOUNT);

              if (indexAddFreeCount > 2) {
                // 加次数的时候 先减再加
                this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                  error: Error()
                }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).SUBGAME_TIMES) - indexAddFreeCount));
              } else {
                this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                  error: Error()
                }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
              }
            }
          }, 0);
          this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
            error: Error()
          }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)(this.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN ? (_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).PROFIT_AMOUNT : (_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
          this.comp.scheduleOnce(() => {
            this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
              error: Error()
            }), setWaiting) : setWaiting)(true));
          }, 1.5);
          (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).autoLauncherPanel.setLaunchEvent(() => {
            (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
              error: Error()
            }), footerViewModel) : footerViewModel).manualBetHandler();
          });
        }

        initRollerMap(state) {
          this.rollerMap = [];
          let asp = state;

          if (state) {
            asp = state == 1 ? true : false;
          } else {
            asp = this.apostille;
          }

          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config)[!asp ? 'iconRollerQueue' : 'rateIconRollerQueue'].forEach((queue, queueIndex) => {
            const isLargeRollGame = this.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2 && queueIndex === 1;
            const gameOption = isLargeRollGame ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).largeRollOption : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption;
            this.rollerMap.push({
              index: queueIndex,
              iconQueue: queue.map((iconId, index) => {
                const uiData = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config)[isLargeRollGame ? 'largeIcon' : 'rollerIcon'].find(i => i.id === iconId);
                return {
                  iconId,
                  queueIndex: index + 1,
                  iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NONE,
                  height: gameOption.singleRollerHeight,
                  width: gameOption.singleRollerWidth,
                  intervalHeight: gameOption.singleIntervalHeight,
                  multiple: [],
                  LargeIcon: this.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).SUBGAME2 && queueIndex == 1,
                  uiData
                };
              }),
              LargeRoller: isLargeRollGame,
              rolling: false,
              speed: gameOption.rollerSpeed,
              speedBackUp: gameOption.rollerSpeed,
              width: gameOption.rollerWidth,
              intervalWidth: gameOption.rollerIntervalWidth,
              stopIconIndex: -1,
              direction: gameOption.direction
            });
          });
          this.dispatch((_crd && initRollAction === void 0 ? (_reportPossibleCrUseOfinitRollAction({
            error: Error()
          }), initRollAction) : initRollAction)(this.rollerMap));
        }
        /**检查是否要爆奖，爆什么奖 */


        checkAward(done) {
          const profitMultiple = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).PROFIT_MULTIPLE);
          const winning = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).winning.find(item => item.minRate <= profitMultiple && profitMultiple < item.maxRate);

          if (winning) {
            (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
              error: Error()
            }), sendNativeVibrate) : sendNativeVibrate)(200);
            const winnerDialog = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)('Starlight_BigPrize').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).BIG_PRIZE).source).appendTo(this.parentNode.parent, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setProps({
              winning,
              glodAmount: (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).PROFIT_AMOUNT)
            }).setEvent({
              killSelfHandler: () => {
                winnerDialog.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1);
                this.comp.scheduleOnce(() => {
                  done();
                }, 1);
              }
            }); //.playOneShot(SoundPathDefine.OPEN_PRIZE)
          } else {
            done();
          }
        }

        unMountCallBack() {
          this.taskScheduler.destoryQueue();
          this.comp.rollerViewModelMap.forEach(mv => mv.unMount()); // this.comp.rollerViewModelMap = []

          this.dispatch((_crd && initRollAction === void 0 ? (_reportPossibleCrUseOfinitRollAction({
            error: Error()
          }), initRollAction) : initRollAction)([]));
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("roller"); // this.winnerDialog && this.winnerDialog.unMount()
        }

        connect() {
          this.inject({}, state => {
            this.lastGameType = state.game.currGameType;
            this.currGameType = state.game.currGameType;
            this.viewGameType = state.game.viewGameType;
            this.autoLaunchType = state.game.autoLauncherType;
            this.apostille = state.game.apostille;
            this.isHasten = state.game.isHasten;
            this.balance = state.game.balance;
            this.gameFreeGametotalMultiplier = state.game.gameFreeGametotalMultiplier;
            return {
              rollerMap: state.roller.rollerMap,
              iconEffectData: state.roller.iconEffectData,
              // jackpotAmount: state.game.jackpotAmount,
              betAmount: state.game.bettingInformation,
              gameMode: state.game.gameMode,
              remainSubGameTimes: state.game.remainSubGameTimes,
              isHasten: state.game.isHasten,
              isRollEnd: state.roller.roundAllEnd,
              minigameCount: state.game.minigameCount,
              gameFreeGametotalMultiplier: state.game.gameFreeGametotalMultiplier
            };
          });
          return this;
        }

      }) || _class);

      _export("default", RollerPanelViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4e5de5f1f66c757d57be30ccc83f7d67b43db7e.js.map