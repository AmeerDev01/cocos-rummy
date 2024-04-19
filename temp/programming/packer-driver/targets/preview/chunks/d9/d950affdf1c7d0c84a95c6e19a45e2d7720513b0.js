System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, sys, ViewModel, StoreInject, SKT_MAG_TYPE, sktInstance, sktMsgListener, GameType, RollerPanelViewModel, NORMAL_MAG_TYPE, fruit777_Audio, msgListener, sourceManageSeletor, PrefabPathDefine, changeGame, changeProfit, changeViewGame, resetStore, setSubGameTimes, updateBalance, updateJackpotAmount, updateSubGameTimes, getStore, BoxPanelViewModel, dataTransfer, DataKeyType, resetData, setData, TaskScheduler, Task, EffectType, setRollRoundEnd, SoundPathDefine, global, lang, config, _dec, _class, _crd, GameBoardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777_GameBoard(extras) {
    _reporterNs.report("Fruit777_GameBoard", "../components/Fruit777_GameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Fruit777_GameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Fruit777_GameBoard", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerPanelViewModel(extras) {
    _reporterNs.report("RollerPanelViewModel", "./RollerPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNORMAL_MAG_TYPE(extras) {
    _reporterNs.report("NORMAL_MAG_TYPE", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffruit777_Audio(extras) {
    _reporterNs.report("fruit777_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgListener(extras) {
    _reporterNs.report("msgListener", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfresetStore(extras) {
    _reporterNs.report("resetStore", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfBoxPanelViewModel(extras) {
    _reporterNs.report("BoxPanelViewModel", "./BoxPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetData(extras) {
    _reporterNs.report("resetData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetData(extras) {
    _reporterNs.report("setData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollRoundEnd(extras) {
    _reporterNs.report("setRollRoundEnd", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      GameType = _unresolved_4.GameType;
    }, function (_unresolved_5) {
      RollerPanelViewModel = _unresolved_5.default;
    }, function (_unresolved_6) {
      NORMAL_MAG_TYPE = _unresolved_6.NORMAL_MAG_TYPE;
      fruit777_Audio = _unresolved_6.fruit777_Audio;
      msgListener = _unresolved_6.msgListener;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      changeGame = _unresolved_8.changeGame;
      changeProfit = _unresolved_8.changeProfit;
      changeViewGame = _unresolved_8.changeViewGame;
      resetStore = _unresolved_8.resetStore;
      setSubGameTimes = _unresolved_8.setSubGameTimes;
      updateBalance = _unresolved_8.updateBalance;
      updateJackpotAmount = _unresolved_8.updateJackpotAmount;
      updateSubGameTimes = _unresolved_8.updateSubGameTimes;
    }, function (_unresolved_9) {
      getStore = _unresolved_9.getStore;
    }, function (_unresolved_10) {
      BoxPanelViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      dataTransfer = _unresolved_11.default;
      DataKeyType = _unresolved_11.DataKeyType;
      resetData = _unresolved_11.resetData;
      setData = _unresolved_11.setData;
    }, function (_unresolved_12) {
      TaskScheduler = _unresolved_12.default;
      Task = _unresolved_12.Task;
    }, function (_unresolved_13) {
      EffectType = _unresolved_13.EffectType;
    }, function (_unresolved_14) {
      setRollRoundEnd = _unresolved_14.setRollRoundEnd;
    }, function (_unresolved_15) {
      SoundPathDefine = _unresolved_15.SoundPathDefine;
    }, function (_unresolved_16) {
      global = _unresolved_16.global;
      lang = _unresolved_16.lang;
    }, function (_unresolved_17) {
      config = _unresolved_17.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dc2e51i/PxLxZ40G71SlUuZ", "GameBoardViewModel", undefined);

      __checkObsolete__(['Game', 'Node', 'instantiate', 'sys']);

      GameBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GameBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Fruit777_GameBoard');
          this.currentGameViewModel = null;
          this.changeGameTypeTask = void 0;
          this.flyFruitNode = void 0;
          this.currGameType = (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).NONE;
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
        }

        begin() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, "board", data => {
            try {
              this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                error: Error()
              }), changeGame) : changeGame)(data.gameType)); // this.dispatch(changeGame(GameType.SUBGAME1))

              /**刚刚初始化游戏，需要带入必要的游戏状态 */

              (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
                error: Error()
              }), setData) : setData)("bl", data.bl);
              (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
                error: Error()
              }), setData) : setData)("gameType", data.gameType);
              (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
                error: Error()
              }), setData) : setData)("freeCount", data.freeGameCount);
              (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
                error: Error()
              }), setData) : setData)("freeGameAmount", data.freeGameAmount);
              this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                error: Error()
              }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).BALANCE)));
              this.dispatch((_crd && setSubGameTimes === void 0 ? (_reportPossibleCrUseOfsetSubGameTimes({
                error: Error()
              }), setSubGameTimes) : setSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
              this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                error: Error()
              }), changeViewGame) : changeViewGame)(data.gameType));
              this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                error: Error()
              }), updateSubGameTimes) : updateSubGameTimes)(data.freeGameCount));
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
                //非小游戏需要读取盈利状态
                this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                  error: Error()
                }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
              }

              sys.localStorage.setItem("fruit777", JSON.stringify(data));
            } catch (e) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.GameBoardInit)
              });
            } // this.dispatch(changeGame(GameType.MAIN))

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
          }, {
            isReSend: true
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JACKPOT, "board", data => {
            this.dispatch((_crd && updateJackpotAmount === void 0 ? (_reportPossibleCrUseOfupdateJackpotAmount({
              error: Error()
            }), updateJackpotAmount) : updateJackpotAmount)(data));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE_UPDATE, "board", data => {// this.dispatch(updateBalance(data))
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).VACATETHEROOM, "board", data => {
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
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, "board", (data, error) => {
            // console.log('curGame', dataTransfer(DataKeyType.GAME_TYPE))
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
            changeGameHandler: (lastGameType, currGameType) => {
              console.log(lastGameType, currGameType);
              this.changeGameTypeTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                try {
                  if (this.currentGameViewModel) {
                    (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                      error: Error()
                    }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).TRANSFER);
                    this.flyFruitNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                      error: Error()
                    }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                      error: Error()
                    }), PrefabPathDefine) : PrefabPathDefine).FLY_FRUITS).source);
                    this.viewNode.addChild(this.flyFruitNode);
                    this.comp.scheduleOnce(() => {
                      //卸载当前
                      this.currentGameViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                        error: Error()
                      }), EffectType) : EffectType).EFFECT1).then(() => {
                        done();
                      });
                    }, 1);
                  } else {
                    done();
                  }
                } catch (e) {
                  done();
                  console.log('err', e);
                }
              }).subscribeDone('change', () => {
                if (!this.comp.getPropertyNode()) return;
                this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                  error: Error()
                }), changeViewGame) : changeViewGame)(currGameType));

                if (currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).MAIN) {
                  this.currentGameViewModel = new (_crd && RollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfRollerPanelViewModel({
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
                  }).connect();
                } else if (currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  this.currentGameViewModel = new (_crd && BoxPanelViewModel === void 0 ? (_reportPossibleCrUseOfBoxPanelViewModel({
                    error: Error()
                  }), BoxPanelViewModel) : BoxPanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                    error: Error()
                  }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).BOX_GAME).source).appendTo(this.comp.getGameNode(), {
                    effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT_FADE,
                    effectDone: () => {
                      this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                        error: Error()
                      }), setRollRoundEnd) : setRollRoundEnd)(true));
                    }
                  }).connect();
                } else if (currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME2) {
                  this.currentGameViewModel = new (_crd && RollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfRollerPanelViewModel({
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
                  }).connect();
                }

                (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
                  error: Error()
                }), msgListener) : msgListener).dispath((_crd && NORMAL_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfNORMAL_MAG_TYPE({
                  error: Error()
                }), NORMAL_MAG_TYPE) : NORMAL_MAG_TYPE).CHANGE_GAME, {
                  currGameType
                });
                this.comp.scheduleOnce(() => {
                  this.flyFruitNode && this.flyFruitNode.destroy();
                }, 1.5);
              });

              if (!this.currentGameViewModel) {
                //初始化的时候才直接执行
                this.taskScheduler.joinqQueue(this.changeGameTypeTask, true);
              }
            }
          });
          (_crd && resetData === void 0 ? (_reportPossibleCrUseOfresetData({
            error: Error()
          }), resetData) : resetData)();
          this.dispatch((_crd && resetStore === void 0 ? (_reportPossibleCrUseOfresetStore({
            error: Error()
          }), resetStore) : resetStore)(''));
        }

        unMountCallBack() {// fruit777WebSocketDriver.sktMsgListener.removeById("fruit777_board")
        }

        connect() {
          this.inject({}, state => {
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
//# sourceMappingURL=d950affdf1c7d0c84a95c6e19a45e2d7720513b0.js.map