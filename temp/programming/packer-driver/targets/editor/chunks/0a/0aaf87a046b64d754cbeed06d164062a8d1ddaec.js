System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, CommandDefine, PrefabDefine, BaseMediator, BgMediatorConst, BgCommandConst, goldState, getBgProxy, ApplicationGlobal, TaskScheduler, Task, ROLL_TIME, RollerMediator, _crd, RollerMediatorConst;

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

  function _reportPossibleCrUseOfEgypt_RollerPanel(extras) {
    _reporterNs.report("Egypt_RollerPanel", "../Component/Egypt_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "./BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgCommandConst(extras) {
    _reporterNs.report("BgCommandConst", "../Command/BgCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgoldState(extras) {
    _reporterNs.report("goldState", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "../Const/ApplicationGlobal", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      find = _cc.find;
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
      goldState = _unresolved_7.goldState;
    }, function (_unresolved_8) {
      getBgProxy = _unresolved_8.getBgProxy;
    }, function (_unresolved_9) {
      ApplicationGlobal = _unresolved_9.ApplicationGlobal;
    }, function (_unresolved_10) {
      TaskScheduler = _unresolved_10.default;
      Task = _unresolved_10.Task;
    }, function (_unresolved_11) {
      ROLL_TIME = _unresolved_11.ROLL_TIME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ba871x2C9GELaI81KUCfy0", "RollerMediator", undefined);

      __checkObsolete__(['Prefab', 'Vec3', 'color', 'find', 'tween']);

      _export("RollerMediatorConst", RollerMediatorConst = /*#__PURE__*/function (RollerMediatorConst) {
        RollerMediatorConst["INIT_ROLLER_PANEL"] = "initRollerPanel";
        RollerMediatorConst["UNINSTALL_ROLLER_PANEL"] = "uninstallRollerPanel";
        RollerMediatorConst["REMOVE_THECHEST_LAYER"] = "removeThechestLayer";
        RollerMediatorConst["BEGIN_ROLL"] = "beginRoll";
        RollerMediatorConst["END_ROLL"] = "endRoll";
        return RollerMediatorConst;
      }({}));

      _export("default", RollerMediator = class RollerMediator extends (_crd && BaseMediator === void 0 ? (_reportPossibleCrUseOfBaseMediator({
        error: Error()
      }), BaseMediator) : BaseMediator) {
        constructor(mediatorName = null, viewComponent = null) {
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
          this.stopRollHandle = void 0;
          this.stopTimeId = void 0;
          this.listNotificationConst = [{
            name: RollerMediatorConst.INIT_ROLLER_PANEL,

            handler(notification) {
              this.init();
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
              let {
                iconStay
              } = notification.getBody();
              const rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("Egypt_RollerPanel");
              rollerComp.togglesALLLayer(iconStay === 1);
            }

          }, {
            name: RollerMediatorConst.BEGIN_ROLL,

            handler(notification) {
              const {
                stopIndex,
                targetList,
                dockIocn
              } = notification.getBody();
              const rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("Egypt_RollerPanel");
              rollerComp.startAllRoll(stopIndex, (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().isSpeed());
              (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().setDisable(true);
              this.taskScheduler.stopQueue(false); //闪动图标

              let i = 0;

              const flickerFn = () => {
                targetList.forEach(item => {
                  rollerComp.iconFlicker('coord', item, true, () => {
                    i++;

                    if (i === targetList.length) {
                      //全部闪动完成
                      rollerComp.clearStatus();
                      setTimeout(() => {
                        doneFinish();
                        flashLine();
                      }, 500);
                    }
                  });
                });
              };

              const flashLine = () => {
                targetList.forEach((res, index) => {
                  const task = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    rollerComp.iconFlicker('coord', targetList[index], false); //闪烁2秒钟就结束

                    window.setTimeout(() => done(), 1000);
                  });
                  this.taskScheduler.joinqQueue(task, false);
                });
              };

              const doneFinish = () => {
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
                }), Task) : Task)(doneTmp => {
                  this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                    error: Error()
                  }), CommandDefine) : CommandDefine).BG, {
                    done: () => {
                      // console.log('doneFinish ===================================================== done');
                      rollerComp.iconDock('coord', dockIocn);
                      this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                        error: Error()
                      }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
                        state: true
                      });
                      window.setTimeout(() => {
                        doneTmp();
                      }, 1000);
                      (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                        error: Error()
                      }), getBgProxy) : getBgProxy)().setDisable(false);
                      this.autoLaunch();
                    }
                  }, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                    error: Error()
                  }), BgCommandConst) : BgCommandConst).GAME_TYPE_CHANGE);
                }));
              };

              this.stopRollHandle = (isManualStop = false) => {
                this.stopRollHandle = undefined;
                this.stopTimeId = undefined;
                rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_USER_GOLD, {
                    state: (_crd && goldState === void 0 ? (_reportPossibleCrUseOfgoldState({
                      error: Error()
                    }), goldState) : goldState).OLD_GOLD
                  }); //更新游戏奖励

                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_CURRENT_SCORE); // // 开始轮流闪动图标

                  rollerComp.clearStatus();

                  if (!targetList.length) {
                    doneFinish();
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
              console.log("uninstallTheChuteGame");
              const rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("Egypt_RollerPanel");
              rollerComp.uninstall();
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

        autoLaunch() {
          const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)(); // if (fbp.getIsChangeGameRunning() === -1) {
          // 没有跳转游戏才自动发

          this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
            error: Error()
          }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH); // }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0aaf87a046b64d754cbeed06d164062a8d1ddaec.js.map