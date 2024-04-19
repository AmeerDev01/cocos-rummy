System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, sp, sys, ViewModel, StoreInject, SKT_MAG_TYPE, sktInstance, sktMsgListener, config, AutoLauncherType, GameType, NORMAL_MAG_TYPE, msgListener, sourceManageSeletor, gameBoardViewModel, PrefabPathDefine, changeAutoLauncherType, changeGame, changeProfit, changeViewGame, setAutoLaunchedTimes, setFreeGameId, setSubGameTimes, updateBalance, updateJackpotAmount, updateSubGameTimes, getStore, dataTransfer, DataKeyType, setData, Task, TaskSchedulerDefault, EffectType, setRollRoundEnd, bundlePkgName, RollerPanelViewModel, SgChooseSmallViewModel, SmallReaultViewModel, SkeletonAnimationPlayer, _dec, _class, _crd, rollerPanelViewModel, chooseSmallGame, smallResultViewModel, GameBoardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_gameBoard(extras) {
    _reporterNs.report("phoenix_gameBoard", "../components/phoenix_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/phoenix_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/phoenix_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMALLGAME(extras) {
    _reporterNs.report("SMALLGAME", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNORMAL_MAG_TYPE(extras) {
    _reporterNs.report("NORMAL_MAG_TYPE", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgListener(extras) {
    _reporterNs.report("msgListener", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameBoardViewModel(extras) {
    _reporterNs.report("gameBoardViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGame(extras) {
    _reporterNs.report("changeGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeViewGame(extras) {
    _reporterNs.report("changeViewGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLaunchedTimes(extras) {
    _reporterNs.report("setAutoLaunchedTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetFreeGameId(extras) {
    _reporterNs.report("setFreeGameId", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameTimes(extras) {
    _reporterNs.report("setSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateBalance(extras) {
    _reporterNs.report("updateBalance", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateJackpotAmount(extras) {
    _reporterNs.report("updateJackpotAmount", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameTimes(extras) {
    _reporterNs.report("updateSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetData(extras) {
    _reporterNs.report("setData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskSchedulerDefault(extras) {
    _reporterNs.report("TaskSchedulerDefault", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollRoundEnd(extras) {
    _reporterNs.report("setRollRoundEnd", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundlePkgName(extras) {
    _reporterNs.report("bundlePkgName", "../sourceDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerPanelViewModel(extras) {
    _reporterNs.report("RollerPanelViewModel", "./RollerPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSgChooseSmallViewModel(extras) {
    _reporterNs.report("SgChooseSmallViewModel", "./SgChooseSmallViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmallReaultViewModel(extras) {
    _reporterNs.report("SmallReaultViewModel", "./SmallReaultViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  _export({
    rollerPanelViewModel: void 0,
    chooseSmallGame: void 0,
    smallResultViewModel: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      AutoLauncherType = _unresolved_5.AutoLauncherType;
      GameType = _unresolved_5.GameType;
    }, function (_unresolved_6) {
      NORMAL_MAG_TYPE = _unresolved_6.NORMAL_MAG_TYPE;
      msgListener = _unresolved_6.msgListener;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
      gameBoardViewModel = _unresolved_6.gameBoardViewModel;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      changeAutoLauncherType = _unresolved_8.changeAutoLauncherType;
      changeGame = _unresolved_8.changeGame;
      changeProfit = _unresolved_8.changeProfit;
      changeViewGame = _unresolved_8.changeViewGame;
      setAutoLaunchedTimes = _unresolved_8.setAutoLaunchedTimes;
      setFreeGameId = _unresolved_8.setFreeGameId;
      setSubGameTimes = _unresolved_8.setSubGameTimes;
      updateBalance = _unresolved_8.updateBalance;
      updateJackpotAmount = _unresolved_8.updateJackpotAmount;
      updateSubGameTimes = _unresolved_8.updateSubGameTimes;
    }, function (_unresolved_9) {
      getStore = _unresolved_9.getStore;
    }, function (_unresolved_10) {
      dataTransfer = _unresolved_10.default;
      DataKeyType = _unresolved_10.DataKeyType;
      setData = _unresolved_10.setData;
    }, function (_unresolved_11) {
      Task = _unresolved_11.Task;
      TaskSchedulerDefault = _unresolved_11.TaskSchedulerDefault;
    }, function (_unresolved_12) {
      EffectType = _unresolved_12.EffectType;
    }, function (_unresolved_13) {
      setRollRoundEnd = _unresolved_13.setRollRoundEnd;
    }, function (_unresolved_14) {
      bundlePkgName = _unresolved_14.bundlePkgName;
    }, function (_unresolved_15) {
      RollerPanelViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      SgChooseSmallViewModel = _unresolved_16.default;
    }, function (_unresolved_17) {
      SmallReaultViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      SkeletonAnimationPlayer = _unresolved_18.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c5ec/2eClNqLhf+p+XnPsT", "GameBoardViewModel", undefined);

      __checkObsolete__(['Game', 'Node', 'instantiate', 'sp', 'sys', 'tween']);

      GameBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GameBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('phoenix_gameBoard');
          this.currentGameViewModel = null;
          this.changeGameTypeTask = void 0;
          this.flyBgNode = void 0;
          this.currGameType = (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).NONE;
          this.viewGameType = void 0;
        }

        begin() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            if (data.gameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN && data.freeGameCount === 0) {
              //还未选择小游戏id
              const chooseSmall = {
                gameType: data.gameType
              };
              this.createSgChooseSmallGame(chooseSmall);
            } else {
              this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                error: Error()
              }), changeGame) : changeGame)(data.gameType));
              this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                error: Error()
              }), changeViewGame) : changeViewGame)(data.gameType));
            } // this.dispatch(changeGame(GameType.SUBGAME1))

            /**刚刚初始化游戏，需要带入必要的游戏状态 */


            (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
              error: Error()
            }), setData) : setData)("balanceAfterSettlement", data.coinsBeforeBetting);
            (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
              error: Error()
            }), setData) : setData)("gameType", data.gameType);
            (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
              error: Error()
            }), setData) : setData)("freeCount", data.freeGameCount);
            (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
              error: Error()
            }), setData) : setData)("freeGameAmount", data.freeGameCoins);
            this.dispatch((_crd && setFreeGameId === void 0 ? (_reportPossibleCrUseOfsetFreeGameId({
              error: Error()
            }), setFreeGameId) : setFreeGameId)(data.phoenixFreeGameLine));
            this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
              error: Error()
            }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).BALANCE)));
            this.dispatch((_crd && setSubGameTimes === void 0 ? (_reportPossibleCrUseOfsetSubGameTimes({
              error: Error()
            }), setSubGameTimes) : setSubGameTimes)(data.totalFreeGameCount)); // this.dispatch(changeViewGame(data.gameType))

            this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
              error: Error()
            }), updateSubGameTimes) : updateSubGameTimes)(data.freeGameCount));
            this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
              error: Error()
            }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE));
            (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
              error: Error()
            }), msgListener) : msgListener).dispath((_crd && NORMAL_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfNORMAL_MAG_TYPE({
              error: Error()
            }), NORMAL_MAG_TYPE) : NORMAL_MAG_TYPE).CHANGE_GAME, {
              currGameType: data.gameType
            });

            if (data.gameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN) {
              //小游戏需要读取盈利状态
              this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                error: Error()
              }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
            }

            sys.localStorage.setItem("phoenix", JSON.stringify(data)); // this.dispatch(changeGame(GameType.MAIN))
          });
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
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JACKPOT, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            this.dispatch((_crd && updateJackpotAmount === void 0 ? (_reportPossibleCrUseOfupdateJackpotAmount({
              error: Error()
            }), updateJackpotAmount) : updateJackpotAmount)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE_UPDATE, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
              error: Error()
            }), updateBalance) : updateBalance)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, (data, error) => {
            console.log('curGame------------', this.currGameType, (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).GAME_TYPE)); //小游戏转主游戏时判定 切换gameType值

            if (this.currGameType !== (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).GAME_TYPE)) {
              this.currGameType = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE);
              this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                error: Error()
              }), changeGame) : changeGame)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE)));
            }
          }, 100);
          this.setEvent({
            /**切换游戏时执行 */
            changeGameHandler: (lastGameType, currGameType) => {
              console.log(lastGameType, currGameType);
              this.changeGameTypeTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (this.currentGameViewModel) {
                  if (lastGameType !== currGameType && lastGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).SUBGAME1) {
                    this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                      error: Error()
                    }), setRollRoundEnd) : setRollRoundEnd)(false));
                    this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                      error: Error()
                    }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                      error: Error()
                    }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                      error: Error()
                    }), DataKeyType) : DataKeyType).BALANCE))); //更新用户金币值

                    _export("smallResultViewModel", smallResultViewModel = new (_crd && SmallReaultViewModel === void 0 ? (_reportPossibleCrUseOfSmallReaultViewModel({
                      error: Error()
                    }), SmallReaultViewModel) : SmallReaultViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                      error: Error()
                    }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).SMALL_RESULT).source).appendTo(this.comp.getGameNode(), {
                      effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT1,
                      isModal: true
                    }).setProps({
                      goldAmount: (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                        error: Error()
                      }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                        error: Error()
                      }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)
                    }).setEvent({
                      killSelfHadler: () => {
                        smallResultViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                          error: Error()
                        }), EffectType) : EffectType).EFFECT1);
                      }
                    }).connect());

                    this.comp.scheduleOnce(() => {
                      //卸载当前的roller面板
                      this.currentGameViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT1).then(() => {
                        done();
                      });
                    }, 3); // window.setTimeout(() => {
                    //   //卸载当前的roller面板
                    //   this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
                    //     done()
                    //   })
                    // }, 3000)
                  } else if (lastGameType !== currGameType && lastGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).MAIN) {
                    // phoenix_Audio.playOneShot(SoundPathDefine.TRANSFER)
                    this.flyBgNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                      error: Error()
                    }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).FLY_BG).source); //转场动画 飞云的背景

                    this.viewNode.addChild(this.flyBgNode);
                    const titleSkeleton = this.flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton);
                    new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                      error: Error()
                    }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', false, () => {
                      this.currentGameViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT1).then(() => {
                        done();
                      });
                    }).playAnimation();
                  }
                } else {
                  done();
                }
              }).subscribeDone('change', () => {
                this.createRollerView(currGameType);
              });

              if (!this.currentGameViewModel) {
                //初始化的时候才直接执行
                (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                  error: Error()
                }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(this.changeGameTypeTask, true);
              }
            }
          });
        }
        /**roller面板 */


        createRollerView(currGameType) {
          this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
            error: Error()
          }), changeViewGame) : changeViewGame)(currGameType));
          let greenBg = (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
            error: Error()
          }), gameBoardViewModel) : gameBoardViewModel).comp.getPropertyNode().props_spr_main_greenBg;
          let mBlueBg = (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
            error: Error()
          }), gameBoardViewModel) : gameBoardViewModel).comp.getPropertyNode().props_spr_main_blueBg; // 判断主游戏0和小游戏1时加载的roller面板 

          if (currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            _export("rollerPanelViewModel", rollerPanelViewModel = new (_crd && RollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfRollerPanelViewModel({
              error: Error()
            }), RollerPanelViewModel) : RollerPanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT_FADE,
              effectDone: () => {
                this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                  error: Error()
                }), setRollRoundEnd) : setRollRoundEnd)(true));
              }
            }).connect());

            mBlueBg.active = true;
            greenBg.active = false;
            let redBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Redbg;
            let blueBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Bluebg;
            let smallGameMBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_smallGame_multipleBg;
            redBg.active = true;
            blueBg.active = false;
            smallGameMBg.active = false;
            this.currentGameViewModel = rollerPanelViewModel;
          } else if (currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            _export("rollerPanelViewModel", rollerPanelViewModel = new (_crd && RollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfRollerPanelViewModel({
              error: Error()
            }), RollerPanelViewModel) : RollerPanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_GAME).source).appendTo(this.comp.getGameNode(), {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT_FADE,
              effectDone: () => {
                this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                  error: Error()
                }), setRollRoundEnd) : setRollRoundEnd)(true));
              }
            }).connect());

            mBlueBg.active = false;
            greenBg.active = true;
            let redBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Redbg;
            let blueBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_phoenix_Bluebg;
            let smallGameMBg = rollerPanelViewModel.comp.getPropertyNode().props_spr_smallGame_multipleBg;
            redBg.active = false;
            blueBg.active = true;
            smallGameMBg.active = true;
            this.currentGameViewModel = rollerPanelViewModel;
          }

          (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
            error: Error()
          }), msgListener) : msgListener).dispath((_crd && NORMAL_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfNORMAL_MAG_TYPE({
            error: Error()
          }), NORMAL_MAG_TYPE) : NORMAL_MAG_TYPE).CHANGE_GAME, {
            currGameType
          });
          this.comp.scheduleOnce(() => {
            this.flyBgNode && this.flyBgNode.destroy();
          }, 1.5); // window.setTimeout(() => {
          //   this.flyBgNode && this.flyBgNode.destroy()
          // }, 1500)
        }
        /**转场动画 */


        createFlyBg(gameType, done) {
          //转场
          this.flyBgNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FLY_BG).source); //动画 飞云的背景

          this.viewNode.addChild(this.flyBgNode);
          const titleSkeleton = this.flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton);
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', false, () => {
            this.flyBgNode && this.flyBgNode.destroy();
            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)(gameType)); //切换小游戏gameType===1

            this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
              error: Error()
            }), changeViewGame) : changeViewGame)(gameType));
          }).playAnimation(); // window.setTimeout(() => {
          //   this.flyBgNode && this.flyBgNode.destroy()
          //   this.dispatch(changeGame(gameType))//切换小游戏gameType===1
          //   this.dispatch(changeViewGame(gameType))
          // }, 1500)
        }
        /**选择小游戏的板 */


        createSgChooseSmallGame(chooseSmall) {
          //禁用掉主下注按钮
          this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
            error: Error()
          }), setRollRoundEnd) : setRollRoundEnd)(false));

          _export("chooseSmallGame", chooseSmallGame = new (_crd && SgChooseSmallViewModel === void 0 ? (_reportPossibleCrUseOfSgChooseSmallViewModel({
            error: Error()
          }), SgChooseSmallViewModel) : SgChooseSmallViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).PHOENIX_SG_CHOOSE).source).appendTo(this.parentNode, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1,
            isModal: true
          }).setEvent({
            killSelfHandler: smallGameId => {
              this.dispatch((_crd && setFreeGameId === void 0 ? (_reportPossibleCrUseOfsetFreeGameId({
                error: Error()
              }), setFreeGameId) : setFreeGameId)(smallGameId));
              this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                error: Error()
              }), updateSubGameTimes) : updateSubGameTimes)((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).smallGame[smallGameId - 1].times));
              this.dispatch((_crd && setSubGameTimes === void 0 ? (_reportPossibleCrUseOfsetSubGameTimes({
                error: Error()
              }), setSubGameTimes) : setSubGameTimes)((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).smallGame[smallGameId - 1].times));
              chooseSmallGame.comp.isClick1 = true;
              chooseSmallGame.comp.isClick2 = true;
              chooseSmallGame.comp.isClick3 = true;
              chooseSmallGame.comp.isClick4 = true;
              chooseSmallGame.comp.isClick5 = true;
              this.comp.scheduleOnce(() => {
                chooseSmallGame.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1);

                if (chooseSmall.gameType) {
                  (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                    error: Error()
                  }), gameBoardViewModel) : gameBoardViewModel).createFlyBg(chooseSmall.gameType);
                }

                if (chooseSmall.done) {
                  chooseSmall.done();
                }
              }, 1); // window.setTimeout(() => {
              //   chooseSmallGame.unMount(EffectType.EFFECT1)
              //   if (chooseSmall.gameType) {
              //     gameBoardViewModel.createFlyBg(chooseSmall.gameType);
              //   }
              //   if (chooseSmall.done) {
              //     chooseSmall.done()
              //   }
              // },1000)
            }
          }));
        }

        unMountCallBack() {
          this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
            error: Error()
          }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).NONE));
          this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
            error: Error()
          }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(undefined)); // this.dispatch(changeProfit(0))

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById(_crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName);
        }

        connect() {
          this.inject({}, state => {
            this.viewGameType = state.game.viewGameType;
            return {
              gameType: state.game.currGameType
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
//# sourceMappingURL=23d4eaa776b3ffa8a6b8894a974b20fa5971ca21.js.map