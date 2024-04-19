System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Prefab, CommandDefine, PrefabDefine, BaseMediator, BgMediatorConst, BgCommandConst, ApplicationGlobal, getBgProxy, getSocketProxy, goldState, AudioManager, SoundList, TaskScheduler, Task, ROLL_TIME, RollerMediator, _crd, RollerMediatorConst;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandDefine(extras) {
    _reporterNs.report("CommandDefine", "../Const/CommandDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabDefine(extras) {
    _reporterNs.report("PrefabDefine", "../Const/PrefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseMediator(extras) {
    _reporterNs.report("BaseMediator", "./BaseMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIlistTypeHander(extras) {
    _reporterNs.report("IlistTypeHander", "../types/IlistTypeHander", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../types/ISourceFile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgxfc_RollerPanel(extras) {
    _reporterNs.report("gxfc_RollerPanel", "../Component/gxfc_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "./BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgCommandConst(extras) {
    _reporterNs.report("BgCommandConst", "../Command/BgCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "../Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgoldState(extras) {
    _reporterNs.report("goldState", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfROLL_TIME(extras) {
    _reporterNs.report("ROLL_TIME", "../../../../utils/SlotSpeedConfig", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      CommandDefine = _unresolved_2.CommandDefine;
    }, function (_unresolved_3) {
      PrefabDefine = _unresolved_3.PrefabDefine;
    }, function (_unresolved_4) {
      BaseMediator = _unresolved_4.default;
    }, function (_unresolved_5) {
      BgMediatorConst = _unresolved_5.BgMediatorConst;
    }, function (_unresolved_6) {
      BgCommandConst = _unresolved_6.BgCommandConst;
    }, function (_unresolved_7) {
      ApplicationGlobal = _unresolved_7.ApplicationGlobal;
    }, function (_unresolved_8) {
      getBgProxy = _unresolved_8.getBgProxy;
      getSocketProxy = _unresolved_8.getSocketProxy;
    }, function (_unresolved_9) {
      goldState = _unresolved_9.goldState;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
      SoundList = _unresolved_10.SoundList;
    }, function (_unresolved_11) {
      TaskScheduler = _unresolved_11.default;
      Task = _unresolved_11.Task;
    }, function (_unresolved_12) {
      ROLL_TIME = _unresolved_12.ROLL_TIME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f77dd/FYuJC2rSzN6gIpeMC", "RollerMediator", undefined);

      __checkObsolete__(['find', 'Prefab']);

      _export("RollerMediatorConst", RollerMediatorConst = /*#__PURE__*/function (RollerMediatorConst) {
        RollerMediatorConst["INIT_ROLLER_PANEL"] = "initgxfc_RollerPanel";
        RollerMediatorConst["UNINSTALL_ROLLER_PANEL"] = "uninstallgxfc_RollerPanel";
        RollerMediatorConst["BEGIN_ROLL"] = "beginRoll";
        RollerMediatorConst["END_ROLL"] = "endRoll";
        RollerMediatorConst["FORCE_STOP"] = "forceStop";
        RollerMediatorConst["REMOVE_THECHEST_LAYER"] = "removeThechestLayer";
        RollerMediatorConst["UPDATE_ICON_STATE"] = "updateIconState";
        return RollerMediatorConst;
      }({}));

      _export("default", RollerMediator = class RollerMediator extends (_crd && BaseMediator === void 0 ? (_reportPossibleCrUseOfBaseMediator({
        error: Error()
      }), BaseMediator) : BaseMediator) {
        constructor(mediatorName, viewComponent) {
          if (mediatorName === void 0) {
            mediatorName = null;
          }

          if (viewComponent === void 0) {
            viewComponent = null;
          }

          super(mediatorName, viewComponent);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.sourceMap = [{
            key: 'slotPanel',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).SLOT_PANEL,
            sourceType: Prefab,
            source: null
          }];
          this.isFlickerDone = true;
          this.stopRollHandle = void 0;
          this.stopTimeId = void 0;
          this.listNotificationConst = [{
            name: RollerMediatorConst.INIT_ROLLER_PANEL,

            handler(notification) {
              this.init();
              var {
                gameType
              } = notification.getBody() || {}; //在初始化界面之前要初始化数据 'iconRollerQueue' | 'largeIconRollerQueue'

              var _gameRunner = gameType || (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType();

              this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                error: Error()
              }), BgMediatorConst) : BgMediatorConst).CHANGE_BG, {
                gameType: _gameRunner
              });
              (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().setDisable(false);
              window.setTimeout(() => {
                // 可能有动画
                this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                  error: Error()
                }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                  error: Error()
                }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
              }, 2500);
            }

          }, {
            name: RollerMediatorConst.REMOVE_THECHEST_LAYER,

            handler(notification) {
              var {
                iconStay
              } = notification.getBody();
              var rollerComp = this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel");
              rollerComp.togglesALLLayer(iconStay);
            }

          }, {
            name: RollerMediatorConst.BEGIN_ROLL,

            handler(notification) {
              var _this = this;

              var {
                stopIndex,
                targetList,
                dockIocn
              } = notification.getBody();
              var rollerComp = this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel");
              rollerComp.startAllRoll(stopIndex, (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().isSpeed());
              rollerComp.iconDock('coord', dockIocn);
              (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().setDisable(true);
              this.taskScheduler.stopQueue(false); //闪动图标

              var i = 0;

              var flickerFn = () => {
                targetList.forEach(item => {
                  rollerComp.iconFlicker('coord', item, true, () => {
                    i++;

                    if (i === targetList.length) {
                      //全部闪动完成
                      rollerComp.iconDock('coord', dockIocn);
                      rollerComp.clearStatus();
                      setTimeout(() => {
                        done();
                        flashLine();
                      }, 500);
                    }
                  });
                });
              };

              var flashLine = () => {
                targetList.forEach((res, index) => {
                  var task = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    rollerComp.iconFlicker('coord', targetList[index], false); //闪烁2秒钟就结束

                    window.setTimeout(() => done(), 1000);
                  });
                  this.taskScheduler.joinqQueue(task, false);
                });
              };

              var done = () => {
                // 闪动效果播放完毕，判断是否要切换游戏
                this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                    error: Error()
                  }), CommandDefine) : CommandDefine).BG, {
                    order: "curr",
                    done
                  }, (_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).SHOW_DIALOG_WIN);
                })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).NUMBEROFDISPLAYS, {
                    amount: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getRemainTimes(),
                    keepTime: 2000,
                    done
                  });
                })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().getIsChangeGameRunning() !== -1) {
                    this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                      error: Error()
                    }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                      error: Error()
                    }), BgCommandConst) : BgCommandConst).GAME_TYPE_CHANGE);
                  } else {
                    this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                      error: Error()
                    }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
                      state: true
                    });
                    this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                      error: Error()
                    }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                      error: Error()
                    }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
                  }

                  rollerComp.iconDock('coord', dockIocn);
                  done();
                  (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().setDisable(false);
                })); // this.judgeTheGamePopUp(()=>{
                //     this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                //     this.autoLaunch()
                // })
              };

              this.stopRollHandle = function (isManualStop) {
                if (isManualStop === void 0) {
                  isManualStop = false;
                }

                _this.stopRollHandle = undefined;
                _this.stopTimeId = undefined;
                rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
                  _this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_USER_GOLD, {
                    state: (_crd && goldState === void 0 ? (_reportPossibleCrUseOfgoldState({
                      error: Error()
                    }), goldState) : goldState).OLD_GOLD
                  }); //更新游戏奖励


                  _this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_CURRENT_SCORE); // // 开始轮流闪动图标


                  rollerComp.clearStatus();

                  if (!targetList.length) {
                    done();
                    (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                      error: Error()
                    }), getBgProxy) : getBgProxy)().setDisable(false);
                  } else {
                    flickerFn();
                  }
                });
              }; // 多少秒钟后开始停止转动


              this.stopTimeId = window.setTimeout(this.stopRollHandle, _crd && ROLL_TIME === void 0 ? (_reportPossibleCrUseOfROLL_TIME({
                error: Error()
              }), ROLL_TIME) : ROLL_TIME);
            }

          }, {
            name: RollerMediatorConst.END_ROLL,

            handler(notification) {
              this.stopTimeId && window.clearTimeout(this.stopTimeId);
              this.stopRollHandle && this.stopRollHandle(true);
            }

          }, {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,

            handler(notification) {
              // console.log("卸载滑槽游戏")
              var rollerComp = this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel");
              rollerComp.uninstall();
            }

          }, {
            name: RollerMediatorConst.UPDATE_ICON_STATE,

            handler(notification) {
              var {
                bgIndex
              } = notification.getBody();
              var rollerComp = this.wrapView.getChildByName('Mask').getChildByName("slotListPanel").getComponent("gxfc_RollerPanel");
              rollerComp.setIconBG(bgIndex);
            }

          }];
          this.mainPrefabSource = {
            key: 'slotPanel',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).SLOT_PANEL,
            sourceType: Prefab,
            source: null
          };
        }

        init() {
          //this.viewComponent.addChild(this.getSource(PrefabDefine.SLOT_PANEL))
          this.wrapView = this.getSource(this.sourceMap[0].path); // this.viewComponent.getChildByName("gameArea").addChild(this.wrapView);

          find("slotBg/gameArea", (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
            error: Error()
          }), ApplicationGlobal) : ApplicationGlobal).mainPanel).addChild(this.wrapView);
          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).UPDATE_CURRENT_SCORE);
          this.listenerEvent();
        }

        listenerEvent() {}

        judgeTheGamePopUp(cb) {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).theRollerStops); // const fbp = getBgProxy();
          // const nextGame = fbp.getIsChangeGameRunning()
          // if (nextGame !== -1) {
          //
          // }else {
          // }
          // this.sendNotification(CommandDefine.BG, { dialogType: DialogType.BIG_WIN, order: "total", keeptime: 3000 }, BgMediatorConst.SHOW_DIALOG_WIN)

          window.setTimeout(() => {
            cb();
          }, 1000);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b91c53b4c717421a968acd5ba0c4abd6b8568e35.js.map