System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, sp, sys, ViewModel, StoreInject, SKT_MAG_TYPE, sktInstance, sktMsgListener, config, AutoLauncherType, GameType, IconEffectType, NORMAL_MAG_TYPE, msgListener, sourceManageSeletor, playSmallGameOver, PrefabPathDefine, changeAutoLauncherType, changeGame, changeProfit, changeViewGame, setAutoLaunchedTimes, setJackPotUserArr, setSubGameTimes, updateBalance, updateJackpotAmount, updateSubGameTimes, getStore, dataTransfer, DataKeyType, setData, TaskScheduler, Task, TaskSchedulerDefault, EffectType, setIconBaoHeEffect, setRollRoundEnd, bundlePkgName, RollerPanelViewModel, SkeletonAnimationPlayer, _dec, _class, _crd, rollerPanelViewModel, smallResultViewModel, GameBoardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth_gameBoard(extras) {
    _reporterNs.report("GodWealth_gameBoard", "../components/GodWealth_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/GodWealth_gameBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/GodWealth_gameBoard", _context.meta, extras);
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

  function _reportPossibleCrUseOfIconEffectType(extras) {
    _reporterNs.report("IconEffectType", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfplaySmallGameOver(extras) {
    _reporterNs.report("playSmallGameOver", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetJackPotUserArr(extras) {
    _reporterNs.report("setJackPotUserArr", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetIconBaoHeEffect(extras) {
    _reporterNs.report("setIconBaoHeEffect", "../store/actions/roller", _context.meta, extras);
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

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  _export({
    rollerPanelViewModel: void 0,
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
      IconEffectType = _unresolved_5.IconEffectType;
    }, function (_unresolved_6) {
      NORMAL_MAG_TYPE = _unresolved_6.NORMAL_MAG_TYPE;
      msgListener = _unresolved_6.msgListener;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
      playSmallGameOver = _unresolved_6.playSmallGameOver;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      changeAutoLauncherType = _unresolved_8.changeAutoLauncherType;
      changeGame = _unresolved_8.changeGame;
      changeProfit = _unresolved_8.changeProfit;
      changeViewGame = _unresolved_8.changeViewGame;
      setAutoLaunchedTimes = _unresolved_8.setAutoLaunchedTimes;
      setJackPotUserArr = _unresolved_8.setJackPotUserArr;
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
      TaskScheduler = _unresolved_11.default;
      Task = _unresolved_11.Task;
      TaskSchedulerDefault = _unresolved_11.TaskSchedulerDefault;
    }, function (_unresolved_12) {
      EffectType = _unresolved_12.EffectType;
    }, function (_unresolved_13) {
      setIconBaoHeEffect = _unresolved_13.setIconBaoHeEffect;
      setRollRoundEnd = _unresolved_13.setRollRoundEnd;
    }, function (_unresolved_14) {
      bundlePkgName = _unresolved_14.bundlePkgName;
    }, function (_unresolved_15) {
      RollerPanelViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      SkeletonAnimationPlayer = _unresolved_16.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b610vij1pBTpAYlHiC5tHI", "GameBoardViewModel", undefined);

      __checkObsolete__(['Game', 'Node', 'instantiate', 'sp', 'sys', 'tween']); // import SgChooseViewModel from "./SgChooseViewModel"


      GameBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class GameBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('GodWealth_gameBoard');
          this.currentGameViewModel = null;
          this.changeGameTypeTask = void 0;
          this.flyBgNode = void 0;
          this.currGameType = (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).NONE;
          this.viewGameType = void 0;
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
        }

        begin() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)(data.gameType));

            if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              //宝盒小游戏
              (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
                error: Error()
              }), setData) : setData)("fixedChessboardIcon", data.fixedChessboardIcon);
            } else if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {// this.dispatch(changeGame(data.gameType))
              // this.dispatch(changeViewGame(data.gameType))
            }
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
            }), setData) : setData)("freeGameAmount", data.freeGameAmount); // this.dispatch(setFreeGameId(data.phoenixFreeGameLine))

            if (data.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              this.dispatch((_crd && setIconBaoHeEffect === void 0 ? (_reportPossibleCrUseOfsetIconBaoHeEffect({
                error: Error()
              }), setIconBaoHeEffect) : setIconBaoHeEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).BAOHE, (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).FIXED_CHESSBOARD_ICON)));
            }

            this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
              error: Error()
            }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).BALANCE)));
            this.dispatch((_crd && setSubGameTimes === void 0 ? (_reportPossibleCrUseOfsetSubGameTimes({
              error: Error()
            }), setSubGameTimes) : setSubGameTimes)(data.freeGameCount));
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
              //小游戏需要读取盈利状态
              this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                error: Error()
              }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
            }

            sys.localStorage.setItem("godWealth", JSON.stringify(data));

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

            this.currentGameViewModel = rollerPanelViewModel;
            this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
              error: Error()
            }), changeViewGame) : changeViewGame)(data.gameType)); // this.dispatch(changeGame(GameType.MAIN))
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
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JACKPOT_USER, _crd && bundlePkgName === void 0 ? (_reportPossibleCrUseOfbundlePkgName({
            error: Error()
          }), bundlePkgName) : bundlePkgName, data => {
            this.dispatch((_crd && setJackPotUserArr === void 0 ? (_reportPossibleCrUseOfsetJackPotUserArr({
              error: Error()
            }), setJackPotUserArr) : setJackPotUserArr)(data));
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
              }), DataKeyType) : DataKeyType).GAME_TYPE))); // if(dataTransfer(DataKeyType.GAME_TYPE)===GameType.MAIN){
              //   this.dispatch(changeProfit(0))
              // }
            }
          }, 100);
          this.setEvent({
            /**切换游戏时执行 */
            changeGameHandler: (lastGameType, currGameType) => {
              console.log("lastGameType", lastGameType, currGameType); // if (lastGameType !== currGameType && lastGameType === GameType.SUBGAME2) {
              //     const flicherBaoHeArr: number[][] = dataTransfer(DataKeyType.FIXED_CHESSBOARD_ICON);//获取宝盒数据
              //        /**宝盒金币飞行特效*/
              //       const multiplesOfFlight = new Task((done) => { 
              //       if(Object.keys(flicherBaoHeArr).length > 0){
              //         this.comp.multiplierBaoHe(done)
              //       } else {
              //         done()
              //       }
              //       })
              //       this.taskScheduler.joinqQueue(multiplesOfFlight, false)
              // }

              this.changeGameTypeTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (this.currentGameViewModel) {
                  if (lastGameType !== currGameType && lastGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).MAIN) {
                    console.log("lastGameType22", lastGameType);
                    this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                      error: Error()
                    }), setRollRoundEnd) : setRollRoundEnd)(false));
                    const winnerDialog = rollerPanelViewModel.showSmallWin();

                    if (lastGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                      error: Error()
                    }), GameType) : GameType).SUBGAME1) {
                      (_crd && playSmallGameOver === void 0 ? (_reportPossibleCrUseOfplaySmallGameOver({
                        error: Error()
                      }), playSmallGameOver) : playSmallGameOver)();
                      winnerDialog.comp.getFreeNode().active = true;
                    } else if (lastGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                      error: Error()
                    }), GameType) : GameType).SUBGAME2) {
                      (_crd && playSmallGameOver === void 0 ? (_reportPossibleCrUseOfplaySmallGameOver({
                        error: Error()
                      }), playSmallGameOver) : playSmallGameOver)();
                      /**宝盒游戏出来 清除宝盒 */

                      rollerPanelViewModel.comp.rollerViewModelMap.forEach(roller => {
                        roller.comp.clearBaoHeIcon();
                      });
                      winnerDialog.comp.getBaoHeNode().active = true;
                    }

                    done();
                  } else if (lastGameType !== currGameType && lastGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).MAIN) {
                    if (currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                      error: Error()
                    }), GameType) : GameType).SUBGAME1) {
                      this.dispatch((_crd && setSubGameTimes === void 0 ? (_reportPossibleCrUseOfsetSubGameTimes({
                        error: Error()
                      }), setSubGameTimes) : setSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                        error: Error()
                      }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                        error: Error()
                      }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
                      done();
                    } else if (currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                      error: Error()
                    }), GameType) : GameType).SUBGAME2) {
                      // window.setTimeout(() => {
                      //   const winnerDialog = rollerPanelViewModel.showSmallWin();
                      //   winnerDialog.comp.getBaoHeBoxNode().active = true;
                      // },1000)
                      done();
                    }
                  }
                } else {
                  done();
                }
              }).subscribeDone('change', () => {
                this.dispatch((_crd && changeViewGame === void 0 ? (_reportPossibleCrUseOfchangeViewGame({
                  error: Error()
                }), changeViewGame) : changeViewGame)(currGameType));
                (_crd && msgListener === void 0 ? (_reportPossibleCrUseOfmsgListener({
                  error: Error()
                }), msgListener) : msgListener).dispath((_crd && NORMAL_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfNORMAL_MAG_TYPE({
                  error: Error()
                }), NORMAL_MAG_TYPE) : NORMAL_MAG_TYPE).CHANGE_GAME, {
                  currGameType
                });
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
        /**转场动画 */


        createFlyBg() {
          //转场
          this.flyBgNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).FLY_BG).source); //动画转场背景

          this.viewNode.addChild(this.flyBgNode);
          const titleSkeleton = this.flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton);
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', false, () => {
            // this.currentGameViewModel.unMount(EffectType.EFFECT1).then(() => {
            //   done()
            // })
            // this.currentGameViewModel.comp.viewNode.active = false;
            this.flyBgNode && this.flyBgNode.destroy();
            this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
              error: Error()
            }), setRollRoundEnd) : setRollRoundEnd)(true));
          }).playAnimation();
        }

        unMountCallBack() {
          this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
            error: Error()
          }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).NONE));
          this.dispatch((_crd && setAutoLaunchedTimes === void 0 ? (_reportPossibleCrUseOfsetAutoLaunchedTimes({
            error: Error()
          }), setAutoLaunchedTimes) : setAutoLaunchedTimes)(undefined));
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
//# sourceMappingURL=195cf610ad68101aaf1de64ae18b2af2031b53fe.js.map