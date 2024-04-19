System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Game, game, instantiate, sp, sys, ViewModel, StoreInject, SKT_MAG_TYPE, sktInstance, sktMsgListener, config, AutoLauncherType, GameType, RollerPanelViewModel, NORMAL_MAG_TYPE, thor_Audio, msgListener, sourceManageSeletor, PrefabPathDefine, changeAutoLauncherType, changeCurrGameType, changeGame, changeGameFreeGametotalMultiplier, changeProfit, changeViewGame, resetStore, setAutoLaunchedTimes, setSubGameTimes, updateBalance, updateSubGameTimes, getStore, dataTransfer, DataKeyType, setData, Task, TaskSchedulerDefault, EffectType, setRollRoundEnd, SoundPathDefine, global, lang, addToastAction, SkeletonAnimationPlayer, _dec, _class, _crd, GameBoardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThor_GameBoard(extras) {
    _reporterNs.report("Thor_GameBoard", "../components/Thor_GameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Thor_GameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Thor_GameBoard", _context.meta, extras);
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

  function _reportPossibleCrUseOfRollerPanelViewModel(extras) {
    _reporterNs.report("RollerPanelViewModel", "./RollerPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNORMAL_MAG_TYPE(extras) {
    _reporterNs.report("NORMAL_MAG_TYPE", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeCurrGameType(extras) {
    _reporterNs.report("changeCurrGameType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGame(extras) {
    _reporterNs.report("changeGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGameFreeGametotalMultiplier(extras) {
    _reporterNs.report("changeGameFreeGametotalMultiplier", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetAutoLaunchedTimes(extras) {
    _reporterNs.report("setAutoLaunchedTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameTimes(extras) {
    _reporterNs.report("setSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateBalance(extras) {
    _reporterNs.report("updateBalance", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Game = _cc.Game;
      game = _cc.game;
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
      RollerPanelViewModel = _unresolved_6.default;
    }, function (_unresolved_7) {
      NORMAL_MAG_TYPE = _unresolved_7.NORMAL_MAG_TYPE;
      thor_Audio = _unresolved_7.thor_Audio;
      msgListener = _unresolved_7.msgListener;
      sourceManageSeletor = _unresolved_7.sourceManageSeletor;
    }, function (_unresolved_8) {
      PrefabPathDefine = _unresolved_8.PrefabPathDefine;
    }, function (_unresolved_9) {
      changeAutoLauncherType = _unresolved_9.changeAutoLauncherType;
      changeCurrGameType = _unresolved_9.changeCurrGameType;
      changeGame = _unresolved_9.changeGame;
      changeGameFreeGametotalMultiplier = _unresolved_9.changeGameFreeGametotalMultiplier;
      changeProfit = _unresolved_9.changeProfit;
      changeViewGame = _unresolved_9.changeViewGame;
      resetStore = _unresolved_9.resetStore;
      setAutoLaunchedTimes = _unresolved_9.setAutoLaunchedTimes;
      setSubGameTimes = _unresolved_9.setSubGameTimes;
      updateBalance = _unresolved_9.updateBalance;
      updateSubGameTimes = _unresolved_9.updateSubGameTimes;
    }, function (_unresolved_10) {
      getStore = _unresolved_10.getStore;
    }, function (_unresolved_11) {
      dataTransfer = _unresolved_11.default;
      DataKeyType = _unresolved_11.DataKeyType;
      setData = _unresolved_11.setData;
    }, function (_unresolved_12) {
      Task = _unresolved_12.Task;
      TaskSchedulerDefault = _unresolved_12.TaskSchedulerDefault;
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
      addToastAction = _unresolved_17.addToastAction;
    }, function (_unresolved_18) {
      SkeletonAnimationPlayer = _unresolved_18.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb74dMH8UpIsqW9zX67Lj4W", "GameBoardViewModel", undefined);

      __checkObsolete__(['Game', 'Node', 'game', 'instantiate', 'log', 'sp', 'sys']);

      GameBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GameBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Thor_GameBoard');
          this.timer = void 0;
          this.currentGameViewModel = null;
          this.changeGameTypeTask = void 0;
          this.flyFruitNode = void 0;
          this.currGameType = (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).NONE;
        }

        begin() {
          game.on(Game.EVENT_HIDE, () => {
            //游戏切入后台
            this.timer = new Date().getTime();
          });
          game.on(Game.EVENT_SHOW, () => {
            //游戏进入
            var differenceInSeconds = (new Date().getTime() - this.timer) / 1000;

            if (differenceInSeconds > 30) {
              console.log("时间超过30 秒↓↓↓↓");
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.WebSocketModule.socketConnectDisconnect, {}, {
                  placeStr: "等待超长断开连接"
                })
              }));
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame();
            } else {
              console.log("时间差不超过 30 秒");
            }
          });
          this.dispatch((_crd && resetStore === void 0 ? (_reportPossibleCrUseOfresetStore({
            error: Error()
          }), resetStore) : resetStore)('')), (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, "board", data => {
            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)(data.gameType));
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
            this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
              error: Error()
            }), updateSubGameTimes) : updateSubGameTimes)(data.freeGameCount));
            this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
              error: Error()
            }), changeViewGame) : changeViewGame)(data.gameType));
            this.dispatch((_crd && changeCurrGameType === void 0 ? (_reportPossibleCrUseOfchangeCurrGameType({
              error: Error()
            }), changeCurrGameType) : changeCurrGameType)(data.gameType));
            this.dispatch((_crd && changeGameFreeGametotalMultiplier === void 0 ? (_reportPossibleCrUseOfchangeGameFreeGametotalMultiplier({
              error: Error()
            }), changeGameFreeGametotalMultiplier) : changeGameFreeGametotalMultiplier)(data.lessGodFreeGameMultiple));
            this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
              error: Error()
            }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE));
            this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
              error: Error()
            }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(0));
            (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
              error: Error()
            }), msgListener) : msgListener).dispath((_crd && NORMAL_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfNORMAL_MAG_TYPE({
              error: Error()
            }), NORMAL_MAG_TYPE) : NORMAL_MAG_TYPE).CHANGE_GAME, {
              currGameType: data.gameType
            });

            if (data.gameType && data.gameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN) {
              //非小游戏需要读取盈利状态
              this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                error: Error()
              }), setRollRoundEnd) : setRollRoundEnd)(false));
              this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                error: Error()
              }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
            } else {
              this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                error: Error()
              }), setRollRoundEnd) : setRollRoundEnd)(true));
            }

            sys.localStorage.setItem("thor", JSON.stringify(data)); // this.dispatch(changeGame(GameType.MAIN))

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
              effectDone: () => {// this.dispatch(setRollRoundEnd(true))
              }
            }).connect();
          });
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
            token: sys.localStorage.getItem("token"),
            // token:"eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NQQqCIRAG0LvMWsEZJ_30Bq07geYEBsJPuAiiu0et2r7Ne9FsmyrnwCJghiN7Hl-IkpP-4L4nVYKdkqKIb7F0ryFnjwb243obRVIfqkKOlq1uj_OgihCQwVEc7bnssts6_qcEfX8A47WcnH8AAAA.BMHg1CM1e3sq7gf85rA8oSGxAZ89yxc79UytEiLyEXc",
            gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId
          }); // sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, "board", (data)currGameType => {
          //   this.dispatch(updateJackpotAmount(data))
          // })

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE_UPDATE, "board", data => {
            this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
              error: Error()
            }), updateBalance) : updateBalance)(data));
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
            //console.error(this.currGameType !== dataTransfer(DataKeyType.NEXTGAME_TYPE));
            if (this.currGameType !== (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).NEXTGAME_TYPE)) {
              this.currGameType = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).NEXTGAME_TYPE);
              this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                error: Error()
              }), changeViewGame) : changeViewGame)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE)));
              this.dispatch((_crd && changeCurrGameType === void 0 ? (_reportPossibleCrUseOfchangeCurrGameType({
                error: Error()
              }), changeCurrGameType) : changeCurrGameType)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).NEXTGAME_TYPE)));
              this.dispatch((_crd && changeGameFreeGametotalMultiplier === void 0 ? (_reportPossibleCrUseOfchangeGameFreeGametotalMultiplier({
                error: Error()
              }), changeGameFreeGametotalMultiplier) : changeGameFreeGametotalMultiplier)(0));

              if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN) {
                this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                  error: Error()
                }), changeProfit) : changeProfit)(0));
              }
            }
          }, 100);
          this.setEvent({
            changeGameHandler: (lastGameType, currGameType) => {
              this.changeGameTypeTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (this.currentGameViewModel) {
                  // this.dispatch(setRollRoundEnd(true))
                  this.flyFruitNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                    error: Error()
                  }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                    error: Error()
                  }), PrefabPathDefine) : PrefabPathDefine).FLY_FRUITS).source);
                  new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                    error: Error()
                  }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.flyFruitNode.getChildByName('props_sklekton_lightning').getComponent(sp.Skeleton), "animation", false, () => {
                    done();
                  }).playAnimation();
                  (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
                    error: Error()
                  }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).FREE_TRANS);
                  this.viewNode.addChild(this.flyFruitNode);
                } else {
                  done();
                }
              }).subscribeDone('change', () => {
                this.comp.scheduleOnce(() => {
                  this.flyFruitNode && this.flyFruitNode.destroy();
                  (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
                    error: Error()
                  }), msgListener) : msgListener).dispath((_crd && NORMAL_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfNORMAL_MAG_TYPE({
                    error: Error()
                  }), NORMAL_MAG_TYPE) : NORMAL_MAG_TYPE).CHANGE_GAME, {
                    currGameType
                  });
                }, 1.5);
              }); // this.changeGameTypeTask.name = "changeGameTypeTask"

              if (!this.currentGameViewModel) {
                //初始化的时候才直接执行
                (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                  error: Error()
                }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue(this.changeGameTypeTask, true); // console.log('changeGameTypeTask init')
              }

              (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
                error: Error()
              }), msgListener) : msgListener).dispath((_crd && NORMAL_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfNORMAL_MAG_TYPE({
                error: Error()
              }), NORMAL_MAG_TYPE) : NORMAL_MAG_TYPE).CHANGE_GAME, {
                currGameType
              });
            }
          });
        }

        unMountCallBack() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("board");
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
//# sourceMappingURL=094f99d0767cbe8975251fd69fac0a318baa263d.js.map