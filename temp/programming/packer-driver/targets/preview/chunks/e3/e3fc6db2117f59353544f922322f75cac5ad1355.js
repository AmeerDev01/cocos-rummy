System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, AutoLauncherType, GameType, IconEffectType, config, setStopRollAction, initRollAction, setIconEffect, setRollRoundEnd, setRollSpeed, setIconYuanBaoEffect, setIconFreeGameEffect, SKT_MAG_TYPE, sktMsgListener, dataTransfer, refreshData, DataKeyType, setData, TaskScheduler, Task, PrefabPathDefine, footerViewModel, phoenix_Audio, gameBoardViewModel, sourceManageSeletor, playShellEnd, getCoin, EffectType, changeProfit, setFreeGameRate, setWaiting, updateBalance, updateSubGameTimes, BaseViewModel, addToastAction, global, lang, sendNativeVibrate, _dec, _class, _crd, RollerPanelViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_rollerPanel(extras) {
    _reporterNs.report("phoenix_rollerPanel", "../components/phoenix_rollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/phoenix_rollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/phoenix_rollerPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetIconYuanBaoEffect(extras) {
    _reporterNs.report("setIconYuanBaoEffect", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetIconFreeGameEffect(extras) {
    _reporterNs.report("setIconFreeGameEffect", "../store/actions/roller", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetData(extras) {
    _reporterNs.report("setData", "../dataTransfer", _context.meta, extras);
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

  function _reportPossibleCrUseOfphoenix_Audio(extras) {
    _reporterNs.report("phoenix_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameBoardViewModel(extras) {
    _reporterNs.report("gameBoardViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayShellEnd(extras) {
    _reporterNs.report("playShellEnd", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCoin(extras) {
    _reporterNs.report("getCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetFreeGameRate(extras) {
    _reporterNs.report("setFreeGameRate", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfphoenix_dialogWin(extras) {
    _reporterNs.report("phoenix_dialogWin", "../components/phoenix_dialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIState(extras) {
    _reporterNs.report("BPIState", "../components/phoenix_dialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIProps(extras) {
    _reporterNs.report("BPIProps", "../components/phoenix_dialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBPIEvent(extras) {
    _reporterNs.report("BPIEvent", "../components/phoenix_dialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChooseSmallGame(extras) {
    _reporterNs.report("ChooseSmallGame", "./GameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
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
      setIconYuanBaoEffect = _unresolved_6.setIconYuanBaoEffect;
      setIconFreeGameEffect = _unresolved_6.setIconFreeGameEffect;
    }, function (_unresolved_7) {
      SKT_MAG_TYPE = _unresolved_7.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_7.sktMsgListener;
    }, function (_unresolved_8) {
      dataTransfer = _unresolved_8.default;
      refreshData = _unresolved_8.refreshData;
      DataKeyType = _unresolved_8.DataKeyType;
      setData = _unresolved_8.setData;
    }, function (_unresolved_9) {
      TaskScheduler = _unresolved_9.default;
      Task = _unresolved_9.Task;
    }, function (_unresolved_10) {
      PrefabPathDefine = _unresolved_10.PrefabPathDefine;
    }, function (_unresolved_11) {
      footerViewModel = _unresolved_11.footerViewModel;
      phoenix_Audio = _unresolved_11.phoenix_Audio;
      gameBoardViewModel = _unresolved_11.gameBoardViewModel;
      sourceManageSeletor = _unresolved_11.sourceManageSeletor;
      playShellEnd = _unresolved_11.playShellEnd;
      getCoin = _unresolved_11.getCoin;
    }, function (_unresolved_12) {
      EffectType = _unresolved_12.EffectType;
    }, function (_unresolved_13) {
      changeProfit = _unresolved_13.changeProfit;
      setFreeGameRate = _unresolved_13.setFreeGameRate;
      setWaiting = _unresolved_13.setWaiting;
      updateBalance = _unresolved_13.updateBalance;
      updateSubGameTimes = _unresolved_13.updateSubGameTimes;
    }, function (_unresolved_14) {
      BaseViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      addToastAction = _unresolved_15.addToastAction;
    }, function (_unresolved_16) {
      global = _unresolved_16.global;
      lang = _unresolved_16.lang;
    }, function (_unresolved_17) {
      sendNativeVibrate = _unresolved_17.sendNativeVibrate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee7ebF1czxCBpf0FGqkaR6L", "RollerPanelViewModel", undefined);

      __checkObsolete__(['Label', 'Node', 'tween']); // import SgChooseViewModel from "./SgChooseViewModel"


      RollerPanelViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class RollerPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super("phoenix_rollerPanel");
          this.lastGameType = void 0;
          this.gameType = void 0;
          this.viewGameType = void 0;
          this.rollerMap = [];
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.autoLaunchType = void 0;
          this.isWining = void 0;
          this.freeGameRate = void 0;
          // private winnerDialog: BaseViewModel<Fruit777_BigPrize, BPIState, BPIProps, BPIEvent>
          this.stopRollerIndex = -1;
        }

        begin() {
          // const rollerMap: RollerType[] = []
          this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
            error: Error()
          }), setRollRoundEnd) : setRollRoundEnd)(true)); // console.log("this.gameType === GameType.MAIN ",this.gameType === GameType.MAIN );

          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config)["iconRollerQueue"].forEach((queue, queueIndex) => {
            // const isLargeRollGame: boolean = (this.gameType === GameType.SUBGAME1 && queueIndex === 1)
            var gameOption = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption;
            this.rollerMap.push({
              index: queueIndex,
              iconQueue: queue.map((iconId, index) => {
                var uiData = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config)["rollerIcon"].find(i => i.id === iconId);
                return {
                  iconId,
                  queueIndex: index + 1,
                  iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NONE,
                  height: gameOption.singleRollerHeight,
                  width: gameOption.singleRollerWidth,
                  intervalHeight: gameOption.singleIntervalHeight,
                  // LargeIcon: (this.gameType === GameType.SUBGAME1 && queueIndex == 1),
                  uiData
                };
              }),
              // LargeRoller: isLargeRollGame,
              rolling: false,
              speed: gameOption.rollerSpeed,
              speedBackUp: gameOption.rollerSpeed,
              width: gameOption.rollerWidth,
              intervalWidth: gameOption.rollerIntervalWidth,
              stopIconIndex: -1,
              direction: gameOption.direction
            });
          }); // if (this.viewGameType === GameType.SUBGAME2) {
          //   //马上执行的游戏类型是小游戏2
          //   this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
          //   this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
          // }

          this.setEvent({
            panelRollEnd: rollerIndex => {
              // console.log('rollerIndex', rollerIndex)
              this.stopRollerIndex = rollerIndex;
            },

            /**滚动结束时执行 */
            allRollStop: () => {
              // console.log("allRollStop",GameType.MAIN)
              (_crd && phoenix_Audio === void 0 ? (_reportPossibleCrUseOfphoenix_Audio({
                error: Error()
              }), phoenix_Audio) : phoenix_Audio).longStop(); // this.dispatch(setRollRoundEnd(true))//是否爆浆完，控制下注按钮;

              (_crd && playShellEnd === void 0 ? (_reportPossibleCrUseOfplayShellEnd({
                error: Error()
              }), playShellEnd) : playShellEnd)();

              if (this.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN) {
                this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                  error: Error()
                }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).PROFIT_AMOUNT))); //更新盈利
              } else {//小游戏
                // this.dispatch( changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)) ); //更新盈亏
              } // if (this.viewGameType === GameType.MAIN) {
              // this.dispatch( updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)) ); //小游戏剩余次数
              // }


              var flicherArr = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).ICON_EFFECT_DATA); //获取闪动数据

              var flicherYuanBaoArr = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).ICON_YUANBAO_EFFECT_DATA).yuanBaoPosition; //获取元宝闪动数据

              var freeGameArr = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).FREE_GAME_POSITION); //小游戏转轴位置
              // flicherArr.length && fruit777_Audio.playOneShot(SoundPathDefine.FRUIT_SHELL)

              /**中奖特效 */

              var allFlicherTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (flicherArr.length >= 1) {
                  var arrItemArr = [];
                  flicherArr.forEach((arrItem, index) => arrItemArr.push(...arrItem));
                  this.freeGameRate = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).ICON_YUANBAO_EFFECT_DATA).phoenixMagnification;
                  this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                    error: Error()
                  }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NORMAIL, arrItemArr));
                  this.dispatch((_crd && setFreeGameRate === void 0 ? (_reportPossibleCrUseOfsetFreeGameRate({
                    error: Error()
                  }), setFreeGameRate) : setFreeGameRate)(this.freeGameRate));

                  if (!arrItemArr.length) {
                    done();
                  } else {
                    //闪烁2秒钟就结束
                    this.comp.scheduleOnce(() => done(), 2); // window.setTimeout(() => done(), 2000);
                  }
                } else {
                  // this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))//小游戏剩余次数
                  done();
                }
              }).subscribeDone("total", () => {
                this.dispatch((_crd && setIconEffect === void 0 ? (_reportPossibleCrUseOfsetIconEffect({
                  error: Error()
                }), setIconEffect) : setIconEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                  error: Error()
                }), IconEffectType) : IconEffectType).NONE, []));
              });
              /**小游戏特效 */

              var freeGameTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                //小游戏转轴          
                if (freeGameArr.length > 0) {
                  var FreeGameItemArr = [];
                  freeGameArr.forEach((arrItem, index) => FreeGameItemArr.push(...arrItem)); // console.log("---arrYuanBaoItemArr",arrYuanBaoItemArr);

                  this.dispatch((_crd && setIconFreeGameEffect === void 0 ? (_reportPossibleCrUseOfsetIconFreeGameEffect({
                    error: Error()
                  }), setIconFreeGameEffect) : setIconFreeGameEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).FREEEGAMEZ, FreeGameItemArr));

                  if (!FreeGameItemArr.length) {
                    done();
                  } else {
                    //闪烁2秒钟就结束
                    this.comp.scheduleOnce(() => done(), 2); // window.setTimeout(() => done(), 2000);
                  }
                } else {
                  done();
                }
              }).subscribeDone("total", () => {
                this.dispatch((_crd && setIconFreeGameEffect === void 0 ? (_reportPossibleCrUseOfsetIconFreeGameEffect({
                  error: Error()
                }), setIconFreeGameEffect) : setIconFreeGameEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                  error: Error()
                }), IconEffectType) : IconEffectType).NONE, [])); // this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE))); //更新用户金币值
              });
              /**元宝中奖特效 */

              var yuanBaoTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (flicherYuanBaoArr.length > 0) {
                  var arrYuanBaoItemArr = [];
                  flicherYuanBaoArr.forEach((arrItem, index) => arrYuanBaoItemArr.push(arrItem)); // console.log("---arrYuanBaoItemArr",arrYuanBaoItemArr);

                  this.dispatch((_crd && setIconYuanBaoEffect === void 0 ? (_reportPossibleCrUseOfsetIconYuanBaoEffect({
                    error: Error()
                  }), setIconYuanBaoEffect) : setIconYuanBaoEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).YUANBAO, arrYuanBaoItemArr));

                  if (!arrYuanBaoItemArr.length) {
                    done();
                  } else {
                    //闪烁3秒钟就结束
                    this.comp.scheduleOnce(() => done(), 3); // window.setTimeout(() => done(), 3000);
                  }
                } else {
                  done();
                }
              }).subscribeDone("total", () => {
                this.dispatch((_crd && setIconYuanBaoEffect === void 0 ? (_reportPossibleCrUseOfsetIconYuanBaoEffect({
                  error: Error()
                }), setIconYuanBaoEffect) : setIconYuanBaoEffect)((_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                  error: Error()
                }), IconEffectType) : IconEffectType).NONE, []));
              });
              this.taskScheduler.joinqQueue(yuanBaoTask).joinqQueue(allFlicherTask);
              this.taskScheduler.joinqQueue(freeGameTask);
              /**次数飞行特效*/

              var multiplesOfFlight = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (Object.keys(flicherArr).length > 0) {
                  this.comp.multiplier(done);
                } else {
                  done();
                }
              });
              this.taskScheduler.joinqQueue(multiplesOfFlight, false); //加次数

              var addFrequency = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                // 倍数特效
                // this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.ITEMTOTALMULTIPLIER)))
                //检查添加INDEXADDFREECOUNT
                if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE) == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  // 更新次数
                  this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                    error: Error()
                  }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
                  this.comp.scheduleOnce(() => done(), 1);
                } else {
                  done();
                }
              });
              this.taskScheduler.joinqQueue(addFrequency, false); // const yuanBaoYinBiTask = new Task((done) => {
              //   if (flicherYuanBaoArr.length) {
              //   }
              // })

              var showAwardTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                //图标效果执行完之后要执行的任务，检查是否有爆奖 弹jackpot框
                this.checkAward(done);
              }).subscribeDone("total", () => {
                if (this.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).MAIN) {
                  this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                    error: Error()
                  }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                    error: Error()
                  }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                    error: Error()
                  }), DataKeyType) : DataKeyType).BALANCE))); //更新用户金币值
                }

                this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
                  error: Error()
                }), setRollRoundEnd) : setRollRoundEnd)(true)); //是否爆浆完，控制下注按钮;
              });
              this.taskScheduler.joinqQueue(showAwardTask, false); //游戏不跳转，才显示每一条线，并且没有自动,11/6日：如果处于加速模式，也不显示每一个闪动了

              if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE) === this.viewGameType && this.autoLaunchType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).NONE && this.comp.props.stopMode === "jump") {
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

                    this.comp.scheduleOnce(() => done(), 1.5); // window.setTimeout(() => done(), 1500);
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

              if ((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                error: Error()
              }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask && !(_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                error: Error()
              }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask.isExecute) {
                this.gameType = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).GAME_TYPE); //  console.log("111111111111 this.gameType",this.gameType,this.viewGameType );
                //切换游戏

                if (this.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  // this.dispatch(changeGame(GameType.MAIN))
                  this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    console.log("2222");
                    (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                      error: Error()
                    }), gameBoardViewModel) : gameBoardViewModel).currentGameViewModel.viewNode.active = false;
                    var chooseSmall = {
                      done
                    }; // playChooseCardIn()

                    (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                      error: Error()
                    }), gameBoardViewModel) : gameBoardViewModel).createSgChooseSmallGame(chooseSmall);
                  }));
                } //禁用掉主下注按钮


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
          }), initRollAction) : initRollAction)(this.rollerMap)); //更新每个滑槽图标信息配置

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
            if (!data) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.FetcherFaild, {}, {
                  placeStr: "数据加载失败"
                })
              }));
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.FetcherFaild)
              });
              return;
            }

            if (error) {
              console.log(error);
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
              console.log("refreshData(data)", data);
              (_crd && refreshData === void 0 ? (_reportPossibleCrUseOfrefreshData({
                error: Error()
              }), refreshData) : refreshData)(data);

              if (data.dl.si[0].indexGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN) {
                this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                  error: Error()
                }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).COINS_AFTER_BETTING)));
              }

              (_crd && setData === void 0 ? (_reportPossibleCrUseOfsetData({
                error: Error()
              }), setData) : setData)("gameType", data.dl.si[0].nextGameType);
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
                if (this.comp.props.stopMode === "jump" && this.comp.props.isSortStop) {
                  _taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    this.dispatch((_crd && setStopRollAction === void 0 ? (_reportPossibleCrUseOfsetStopRollAction({
                      error: Error()
                    }), setStopRollAction) : setStopRollAction)(index, stopIndex ? stopIndex[index] : 0));

                    if (index < 5) {
                      var t = window.setInterval(() => {
                        if (this.stopRollerIndex === index) {
                          window.clearInterval(t);
                          done();
                        }
                      }, 50);
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
            }
          }, 0); // this.dispatch( changeProfit( dataTransfer( this.viewGameType === GameType.MAIN ? DataKeyType.PROFIT_AMOUNT : DataKeyType.FREE_GAME_AMOUNT  ) ) );

          this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
            error: Error()
          }), changeProfit) : changeProfit)(0));
          this.comp.scheduleOnce(() => {
            this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
              error: Error()
            }), setWaiting) : setWaiting)(true));
          }, 1.5); // window.setTimeout(() => {
          //   console.log("this.isWaiting setWaiting");
          //   this.dispatch(setWaiting(true)); //是否等待人工操作
          // }, 1500);

          /**自动运行的函数 */

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
          /**盈利值 */
          var profitMultiple = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).PROFIT_MULTIPLE);
          var winning = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).winning.find(item => item.minRate <= profitMultiple && profitMultiple <= item.maxRate); //判断使用哪个dialog

          if (winning) {
            (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
              error: Error()
            }), sendNativeVibrate) : sendNativeVibrate)(200);
            this.isWining = true;
            this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
              error: Error()
            }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT))); //更新盈亏

            var winnerDialog = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)("phoenix_dialogWin").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).DIALOG_WIN).source).appendTo(this.parentNode.parent, {
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
                }), EffectType) : EffectType).EFFECT1); //小游戏

                done();
              }
            });
            (_crd && getCoin === void 0 ? (_reportPossibleCrUseOfgetCoin({
              error: Error()
            }), getCoin) : getCoin)();
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
            this.lastGameType = state.game.lastGameType; // this.gameType = state.game.currGameType

            this.viewGameType = state.game.viewGameType;
            this.autoLaunchType = state.game.autoLauncherType;
            return {
              rollerMap: state.roller.rollerMap,
              iconEffectData: state.roller.iconEffectData,
              jackpotAmount: state.game.jackpotAmount,
              stopMode: state.game.stopMode,
              isSortStop: state.game.isSortStop,
              iconYuanBaoEffectData: state.roller.iconYuanBaoEffectData,
              iconFreeGameEffectData: state.roller.iconFreeGameEffectData,
              freeGameRate: state.game.freeGameRate
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
//# sourceMappingURL=e3fc6db2117f59353544f922322f75cac5ad1355.js.map