System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, AutoLauncherType, GameType, IconEffectType, config, setStopRollAction, initRollAction, setIconEffect, setRollRoundEnd, setRollSpeed, SKT_MAG_TYPE, sktMsgListener, dataTransfer, refreshData, DataKeyType, TaskScheduler, Task, PrefabPathDefine, footerViewModel, fruit777_Audio, gameBoardViewModel, sourceManageSeletor, EffectType, changeProfit, setSubGameTimes, setWaiting, updateBalance, updateSubGameTimes, BaseViewModel, SoundPathDefine, addToastAction, sendNativeVibrate, global, lang, _dec, _class, _crd, RollerPanelViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777_RollerPanel(extras) {
    _reporterNs.report("Fruit777_RollerPanel", "../components/Fruit777_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Fruit777_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Fruit777_RollerPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOffruit777_Audio(extras) {
    _reporterNs.report("fruit777_Audio", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameTimes(extras) {
    _reporterNs.report("setSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWaiting(extras) {
    _reporterNs.report("setWaiting", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateBalance(extras) {
    _reporterNs.report("updateBalance", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameTimes(extras) {
    _reporterNs.report("updateSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777_BigPrize(extras) {
    _reporterNs.report("Fruit777_BigPrize", "../components/Fruit777_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIState(extras) {
    _reporterNs.report("BPIState", "../components/Fruit777_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIProps(extras) {
    _reporterNs.report("BPIProps", "../components/Fruit777_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIEvent(extras) {
    _reporterNs.report("BPIEvent", "../components/Fruit777_BigPrize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendNativeVibrate(extras) {
    _reporterNs.report("sendNativeVibrate", "../../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall/index", _context.meta, extras);
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
      fruit777_Audio = _unresolved_11.fruit777_Audio;
      gameBoardViewModel = _unresolved_11.gameBoardViewModel;
      sourceManageSeletor = _unresolved_11.sourceManageSeletor;
    }, function (_unresolved_12) {
      EffectType = _unresolved_12.EffectType;
    }, function (_unresolved_13) {
      changeProfit = _unresolved_13.changeProfit;
      setSubGameTimes = _unresolved_13.setSubGameTimes;
      setWaiting = _unresolved_13.setWaiting;
      updateBalance = _unresolved_13.updateBalance;
      updateSubGameTimes = _unresolved_13.updateSubGameTimes;
    }, function (_unresolved_14) {
      BaseViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      SoundPathDefine = _unresolved_15.SoundPathDefine;
    }, function (_unresolved_16) {
      addToastAction = _unresolved_16.addToastAction;
    }, function (_unresolved_17) {
      sendNativeVibrate = _unresolved_17.sendNativeVibrate;
    }, function (_unresolved_18) {
      global = _unresolved_18.global;
      lang = _unresolved_18.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3108cBW+rpIsqScCln2V0q3", "RollerPanelViewModel", undefined);

      __checkObsolete__(['Node']);

      RollerPanelViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class RollerPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Fruit777_RollerPanel');
          this.lastGameType = void 0;
          this.gameType = void 0;
          this.viewGameType = void 0;
          this.rollerMap = [];
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.autoLaunchType = void 0;
          this.winnerDialog = void 0;
          this.stopRollerIndex = -1;
          this.id = void 0;
          this.id = parseInt(Math.random() * 100000000 + '');
        }

        begin() {
          // const rollerMap: RollerType[] = []
          var isInitFaild = false;
          this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
            error: Error()
          }), setRollRoundEnd) : setRollRoundEnd)(true));
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config)[this.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN ? 'iconRollerQueue' : 'largeIconRollerQueue'].forEach((queue, queueIndex) => {
            var isLargeRollGame = this.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2 && queueIndex === 1;
            var gameOption = isLargeRollGame ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).largeRollOption : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption;
            this.rollerMap.push({
              index: queueIndex,
              iconQueue: queue.map((iconId, index) => {
                var uiData = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config)[isLargeRollGame ? 'largeIcon' : 'rollerIcon'].find(i => i.id === iconId);
                !uiData && (isInitFaild = true);
                return {
                  iconId,
                  queueIndex: index + 1,
                  iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NONE,
                  height: gameOption.singleRollerHeight,
                  width: gameOption.singleRollerWidth,
                  intervalHeight: gameOption.singleIntervalHeight,
                  LargeIcon: this.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
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

          if (isInitFaild) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame({
              confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.HallModule.LoadFaild)
            });
            return;
          }

          if (this.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            //马上执行的游戏类型是小游戏2
            this.dispatch((_crd && setSubGameTimes === void 0 ? (_reportPossibleCrUseOfsetSubGameTimes({
              error: Error()
            }), setSubGameTimes) : setSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
            this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
              error: Error()
            }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
          }

          this.setEvent({
            panelRollEnd: rollerIndex => {
              // console.log('rollerIndex', rollerIndex)
              this.stopRollerIndex = rollerIndex;
            },
            allRollStop: () => {
              // console.log("allRollStop")
              this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                error: Error()
              }), setRollRoundEnd) : setRollRoundEnd)(true));

              if (this.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
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
              } // console.log(this.lastGameType, this.gameType)


              this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                error: Error()
              }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).BALANCE)));
              this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                error: Error()
              }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
              var flicherArr = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).ICON_EFFECT_DATA); // flicherArr.length && fruit777_Audio.playOneShot(SoundPathDefine.FRUIT_SHELL)

              var allFlicherTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (flicherArr.length >= 1) {
                  (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                    error: Error()
                  }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).GET_COIN);
                  var arrItemArr = [];
                  flicherArr.forEach((arrItem, index) => arrItemArr.push(...arrItem)); // console.log('arrItemArr', arrItemArr)

                  this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                    error: Error()
                  }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NORMAIL, arrItemArr)); // this.dispatch(setIconEffect(IconEffectType.NORMAIL, [[0, 2], [1, 0], [2, 0]]))

                  if (!arrItemArr.length) {
                    done();
                  } else {
                    //闪烁2秒钟就结束
                    this.comp.scheduleOnce(() => done(), 2);
                  }
                } else {
                  (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                    error: Error()
                  }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).ROLLER_END);
                  done();
                }
              }).subscribeDone("total", () => {
                this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                  error: Error()
                }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                  error: Error()
                }), IconEffectType) : IconEffectType).NONE, []));
              });
              this.taskScheduler.joinqQueue(allFlicherTask); //游戏不跳转，才显示每一条线，并且没有自动,11/6日：如果处于加速模式，也不显示每一个闪动了

              if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE) === this.viewGameType && this.autoLaunchType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).NONE && this.comp.props.isSortStop) {
                //将闪动加入任务调度器队列
                flicherArr.forEach((arrItem, index) => {
                  var task = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                      error: Error()
                    }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                      error: Error()
                    }), IconEffectType) : IconEffectType).NORMAIL, arrItem)); //闪烁2秒钟就结束

                    this.comp.scheduleOnce(() => done(), 1.5);
                  }).subscribeDone("" + index, () => {
                    this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                      error: Error()
                    }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                      error: Error()
                    }), IconEffectType) : IconEffectType).NONE, []));
                  });
                  this.taskScheduler.joinqQueue(task, false);
                });
              }

              var showAwardTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
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
                //切换游戏
                if (this.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME2 && (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT) !== 0) {
                  // 大滑槽小游戏结束之后要开西瓜
                  this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    //大滑槽小游戏，要开西瓜
                    // fruit777_Audio.playOneShot(SoundPathDefine.OPEN_WIN_END)
                    (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                      error: Error()
                    }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).FRUIT_SHELL);
                    var winning = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).winning[(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).winning.length - 1];
                    this.winnerDialog = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                      error: Error()
                    }), BaseViewModel) : BaseViewModel)('Fruit777_BigPrize').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                      error: Error()
                    }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).BIG_PRIZE).source).appendTo(this.parentNode, {
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
                      }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)
                    }).setEvent({
                      killSelfHandler: () => {
                        this.winnerDialog.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                          error: Error()
                        }), EffectType) : EffectType).EFFECT1);
                        done();
                      }
                    });
                  }));
                } // else if (this.gameType === GameType.SUBGAME2) {
                //   //马上执行的游戏类型是小游戏2
                //   this.taskScheduler.joinqQueue(new Task((done) => {
                //     this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
                //     done()
                //   }))
                // }
                //禁用掉主下注按钮


                this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                  error: Error()
                }), setRollRoundEnd) : setRollRoundEnd)(false));
                this.taskScheduler.joinqQueue((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                  error: Error()
                }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask);
              } else {
                //不切换游戏
                this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
                    error: Error()
                  }), setWaiting) : setWaiting)(true));
                  done();
                }));
              }
            }
          }); // this.setProps({ rollerMap })

          this.dispatch((_crd && initRollAction === void 0 ? (_reportPossibleCrUseOfinitRollAction({
            error: Error()
          }), initRollAction) : initRollAction)(this.rollerMap));

          if (this.autoLaunchType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).LAMIT_FAST) {
            this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
              error: Error()
            }), setRollSpeed) : setRollSpeed)(1.5));
          }

          var _taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, "roller", (data, error) => {
            if (error) {
              // this.dispatch(addToastAction({ content: error }))
              // this.rollerMap.forEach((rollerItem, index) => {
              //   this.dispatch(setStopRollAction(index, 1))
              // })
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.WebSocketModule.ConfigGameFaild) + ':' + error
              });
            } else {
              try {
                (_crd && refreshData === void 0 ? (_reportPossibleCrUseOfrefreshData({
                  error: Error()
                }), refreshData) : refreshData)(data);
                this.taskScheduler.stopQueue(false);
                this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                  error: Error()
                }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                  error: Error()
                }), IconEffectType) : IconEffectType).NONE, []));
                var stopIndex = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).ROLLER_STOP_INDEX_ID);
                this.stopRollerIndex = -1;
                this.rollerMap.forEach((rollerItem, index) => {
                  //顺序停止，stopMode=index的时候不使用这种方案，因为一轮可能就会花不少时间，所以最好不用这种
                  if (this.comp.props.stopMode === 'jump' && this.comp.props.isSortStop) {
                    _taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                      error: Error()
                    }), Task) : Task)(done => {
                      this.dispatch((_crd && setStopRollAction === void 0 ? (_reportPossibleCrUseOfsetStopRollAction({
                        error: Error()
                      }), setStopRollAction) : setStopRollAction)(index, stopIndex ? stopIndex[index] : 0));

                      if (index < 5) {
                        // const t = window.setInterval(() => {
                        //   if (this.stopRollerIndex === index) {
                        //     window.clearInterval(t)
                        //     done()
                        //   }
                        // }, 1000)
                        window.setTimeout(() => {
                          done();
                        }, 200);
                      } else {
                        done();
                      }
                    }));
                  } else {
                    this.dispatch((_crd && setStopRollAction === void 0 ? (_reportPossibleCrUseOfsetStopRollAction({
                      error: Error()
                    }), setStopRollAction) : setStopRollAction)(index, stopIndex ? stopIndex[index] : 0));
                  }
                });
              } catch (e) {
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: e
                }));
                this.rollerMap.forEach((rollerItem, index) => {
                  this.dispatch((_crd && setStopRollAction === void 0 ? (_reportPossibleCrUseOfsetStopRollAction({
                    error: Error()
                  }), setStopRollAction) : setStopRollAction)(index, 1));
                });
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
        /**检查是否要爆奖，爆什么奖 */


        checkAward(done) {
          var profitMultiple = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).PROFIT_MULTIPLE);
          var winning = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).winning.find(item => item.minRate <= profitMultiple && profitMultiple < item.maxRate);

          if (winning) {
            (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
              error: Error()
            }), sendNativeVibrate) : sendNativeVibrate)(200);
            var winnerDialog = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)('Fruit777_BigPrize').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).BIG_PRIZE).source).appendTo(this.parentNode, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setProps({
              winning,
              glodAmount: (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)(this.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN ? (_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).PROFIT_AMOUNT : (_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)
            }).setEvent({
              killSelfHandler: () => {
                winnerDialog.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1);
                done();
              }
            });
            (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
              error: Error()
            }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).OPEN_PRIZE);
          } else {
            done();
          }
        }

        unMountCallBack() {
          this.taskScheduler.destoryQueue();
          this.comp.rollerViewModelMap && this.comp.rollerViewModelMap.forEach(mv => mv.unMount()); // this.comp.rollerViewModelMap = []

          this.dispatch((_crd && initRollAction === void 0 ? (_reportPossibleCrUseOfinitRollAction({
            error: Error()
          }), initRollAction) : initRollAction)([]));
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("roller"); // this.winnerDialog && this.winnerDialog.unMount()
        }
        /**按照上次的位置停止 */


        stopForLast() {
          var stopIndex = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).ROLLER_STOP_INDEX_ID);
          this.rollerMap.forEach((rollerItem, index) => {
            this.dispatch((_crd && setStopRollAction === void 0 ? (_reportPossibleCrUseOfsetStopRollAction({
              error: Error()
            }), setStopRollAction) : setStopRollAction)(index, stopIndex ? stopIndex[index] : 0));
          });
        }

        connect() {
          this.inject({}, state => {
            this.lastGameType = state.game.lastGameType;
            this.gameType = state.game.currGameType;
            this.viewGameType = state.game.viewGameType;
            this.autoLaunchType = state.game.autoLauncherType;
            return {
              rollerMap: state.roller.rollerMap,
              iconEffectData: state.roller.iconEffectData,
              jackpotAmount: state.game.jackpotAmount,
              stopMode: state.game.stopMode,
              isSortStop: state.game.isSortStop
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
//# sourceMappingURL=e9c3fe0bb8cc25170fdacbab1db3c6b5aa0d4421.js.map