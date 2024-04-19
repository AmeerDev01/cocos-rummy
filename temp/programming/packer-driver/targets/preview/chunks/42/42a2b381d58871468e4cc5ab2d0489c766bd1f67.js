System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Prefab, CommandDefine, PrefabDefine, BaseMediator, BgMediatorConst, BgCommandConst, getBgProxy, getSocketProxy, dragon_SlotPanel, goldState, ApplicationGlobal, TaskScheduler, Task, ROLL_TIME, RollerMediator, _crd, RollerMediatorConst;

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

  function _reportPossibleCrUseOfdragon_RollerPanel(extras) {
    _reporterNs.report("dragon_RollerPanel", "../Component/dragon_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "./BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgCommandConst(extras) {
    _reporterNs.report("BgCommandConst", "../Command/BgCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdragon_SlotPanel(extras) {
    _reporterNs.report("dragon_SlotPanel", "../Component/dragon_SlotPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgoldState(extras) {
    _reporterNs.report("goldState", "../Proxy/SocketProxy", _context.meta, extras);
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
      getBgProxy = _unresolved_7.getBgProxy;
      getSocketProxy = _unresolved_7.getSocketProxy;
    }, function (_unresolved_8) {
      dragon_SlotPanel = _unresolved_8.dragon_SlotPanel;
    }, function (_unresolved_9) {
      goldState = _unresolved_9.goldState;
    }, function (_unresolved_10) {
      ApplicationGlobal = _unresolved_10.ApplicationGlobal;
    }, function (_unresolved_11) {
      TaskScheduler = _unresolved_11.default;
      Task = _unresolved_11.Task;
    }, function (_unresolved_12) {
      ROLL_TIME = _unresolved_12.ROLL_TIME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed697HHUqBPUorISytf759k", "RollerMediator", undefined);

      __checkObsolete__(['find', 'Prefab']);

      _export("RollerMediatorConst", RollerMediatorConst = /*#__PURE__*/function (RollerMediatorConst) {
        RollerMediatorConst["INIT_ROLLER_PANEL"] = "initdragon_RollerPanel";
        RollerMediatorConst["UNINSTALL_ROLLER_PANEL"] = "uninstalldragon_RollerPanel";
        RollerMediatorConst["BEGIN_ROLL"] = "beginRoll";
        RollerMediatorConst["END_ROLL"] = "endRoll";
        RollerMediatorConst["FORCE_STOP"] = "forceStop";
        RollerMediatorConst["REMOVE_THECHEST_LAYER"] = "removeThechestLayer";
        RollerMediatorConst["CHANGEPANELS"] = "CHANGEPANELS";
        RollerMediatorConst["THERINGOFFIREROLLS"] = "THERINGOFFIREROLLS";
        RollerMediatorConst["UPDATE_JACKPOT"] = "UPDATE_JACKPOT";
        RollerMediatorConst["INIT_JACKPOT"] = "INIT_JACKPOT";
        RollerMediatorConst["UPDATE_JACKPOT_TOTAL"] = "UPDATE_JACKPOT_TOTAL";
        RollerMediatorConst["UPDATETHEBACKGROUND"] = "updateTheBackground";
        RollerMediatorConst["INITDOCKIOCN"] = "initdockiocn";
        RollerMediatorConst["DRAGONBALLLENGTH"] = "DRAGONBALLLENGTH";
        RollerMediatorConst["RINGOFFIREPANELSTATUS"] = "RINGOFFIREPANELSTATUS";
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
            key: 'dragon_SlotPanel',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).SLOT_PANEL,
            sourceType: Prefab,
            source: null
          }];
          this.isFlickerDone = true;
          this.stopRollHandle = void 0;
          this.stopTimeId = void 0;
          this.bettingGears = void 0;
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
              var {
                iconStay
              } = notification.getBody();
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel");
              rollerComp.togglesALLLayer(iconStay === 1); //const dragon_SlotPanel = (<dragon_SlotPanel>this.wrapView.getComponent("dragon_SlotPanel"))
            }

          }, {
            name: RollerMediatorConst.UPDATETHEBACKGROUND,

            handler(notification) {
              var dragon_SlotPanel = this.wrapView.getComponent("dragon_SlotPanel");
              dragon_SlotPanel.bgController((_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType());
            }

          }, {
            name: RollerMediatorConst.INIT_JACKPOT,

            handler(notification) {
              var {
                baseBetAmount,
                lineCount
              } = notification.getBody();
              console.log(baseBetAmount);

              if (this.wrapView && this.wrapView.components) {
                var _dragon_SlotPanel = this.wrapView.getComponent("dragon_SlotPanel");

                _dragon_SlotPanel && _dragon_SlotPanel.setGod_MAJOR(500 * baseBetAmount, 1250 * baseBetAmount);
              }
            }

          }, {
            name: RollerMediatorConst.UPDATE_JACKPOT_TOTAL,

            handler(notification) {
              var {
                total
              } = notification.getBody();

              if (this.wrapView && this.wrapView.components) {
                var _this$wrapView;

                var slotPanel = (_this$wrapView = this.wrapView) == null ? void 0 : _this$wrapView.getComponent("dragon_SlotPanel");
                slotPanel && slotPanel.set_jack_total(total);
              }
            }

          }, {
            name: RollerMediatorConst.RINGOFFIREPANELSTATUS,

            handler(notification) {
              var {
                gears
              } = notification.getBody();

              if (this.wrapView && this.wrapView.components) {
                var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel");
                this.bettingGears && rollerComp.RingOfFirePanl(this.bettingGears === gears);
                this.bettingGears = gears;
              }
            }

          }, {
            name: RollerMediatorConst.UPDATE_JACKPOT,

            handler(notification) {
              var {
                jackPotData
              } = notification.getBody();
              setTimeout(() => {
                var rollerComp = this.wrapView.getComponent(_crd && dragon_SlotPanel === void 0 ? (_reportPossibleCrUseOfdragon_SlotPanel({
                  error: Error()
                }), dragon_SlotPanel) : dragon_SlotPanel);

                if (rollerComp) {
                  rollerComp.initJACKPOT(jackPotData);
                }
              }, 100);
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
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel");
              rollerComp.startAllRoll(stopIndex, (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().isSpeed());
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
                      rollerComp.clearStatus();
                      setTimeout(() => {
                        done();
                        flashLine();
                      }, 500);
                    }
                  });
                });
              }; // let timer: number | undefined;


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
                this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.sendNotification(RollerMediatorConst.DRAGONBALLLENGTH, {
                    num: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getDackiconLenth()
                  }); // 判断

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
                  //dialogType, amount, keepTime, done
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).NUMBEROFDISPLAYS, {
                    amount: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getRemainTimes(),
                    keepTime: 2000,
                    done,
                    type: 2
                  });
                })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  //dialogType, amount, keepTime, done
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).NUMBEROFDISPLAYS, {
                    amount: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getRemainTimes(),
                    keepTime: 2000,
                    done,
                    type: 1
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
                    this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                      error: Error()
                    }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                      error: Error()
                    }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
                    this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                      error: Error()
                    }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
                      state: true
                    });
                  }

                  (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().setDisable(false);
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).CHANGE_BG);
                  setTimeout(() => {
                    this.sendNotification(RollerMediatorConst.UPDATETHEBACKGROUND);
                  }, 300);
                  rollerComp.iconDock('coord', dockIocn);
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
                    state: true
                  });
                  this.sendNotification(RollerMediatorConst.REMOVE_THECHEST_LAYER, {
                    iconStay: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getIconStay()
                  });
                  done();
                }));
              };

              this.stopRollHandle = function (isManualStop) {
                if (isManualStop === void 0) {
                  isManualStop = false;
                }

                _this.stopTimeId = undefined;
                _this.stopRollHandle = undefined;
                rollerComp && rollerComp.stopAllRoll(isManualStop, () => {
                  _this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_USER_GOLD, {
                    state: (_crd && goldState === void 0 ? (_reportPossibleCrUseOfgoldState({
                      error: Error()
                    }), goldState) : goldState).OLD_GOLD
                  });

                  _this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
                    frequency: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getNumberOfRounds()
                  }); //更新游戏奖励


                  _this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_CURRENT_SCORE);

                  rollerComp.clearStatus(); // 开始轮流闪动图标

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
            name: RollerMediatorConst.INITDOCKIOCN,

            handler(notification) {
              var {
                dockIocn
              } = notification.getBody();
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel");
              rollerComp.iconDock('coord', dockIocn);
            }

          }, {
            name: RollerMediatorConst.CHANGEPANELS,

            handler(notification) {
              var {
                Change
              } = notification.getBody();
              var rollerComp = this.wrapView.getComponent(_crd && dragon_SlotPanel === void 0 ? (_reportPossibleCrUseOfdragon_SlotPanel({
                error: Error()
              }), dragon_SlotPanel) : dragon_SlotPanel);
              rollerComp.spitfire(Change);
            }

          }, {
            name: RollerMediatorConst.DRAGONBALLLENGTH,

            handler(notification) {
              if ((_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType() === 2) {
                var {
                  num
                } = notification.getBody();
                var rollerComp = this.wrapView.getComponent(_crd && dragon_SlotPanel === void 0 ? (_reportPossibleCrUseOfdragon_SlotPanel({
                  error: Error()
                }), dragon_SlotPanel) : dragon_SlotPanel);
                rollerComp.setdragonBallLightsUp(num);
              }
            }

          }, {
            name: RollerMediatorConst.END_ROLL,

            handler(notification) {
              this.stopTimeId && window.clearTimeout(this.stopTimeId);
              this.stopRollHandle && this.stopRollHandle(true);
            }

          }, {
            name: RollerMediatorConst.THERINGOFFIREROLLS,

            handler(notification) {
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel");
              rollerComp.controlTheHeightOfTheRingOfFire();
            }

          }, {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,

            handler(notification) {
              // console.log("卸载滑槽游戏")
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("dragon_RollerPanel");
              rollerComp.uninstall();
            }

          }];
          this.mainPrefabSource = {
            key: 'dragon_SlotPanel',
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
          }), ApplicationGlobal) : ApplicationGlobal).mainPanel).destroyAllChildren();
          find("slotBg/gameArea", (_crd && ApplicationGlobal === void 0 ? (_reportPossibleCrUseOfApplicationGlobal({
            error: Error()
          }), ApplicationGlobal) : ApplicationGlobal).mainPanel).addChild(this.wrapView);
          var dragon_SlotPanel = this.wrapView.getComponent("dragon_SlotPanel");
          dragon_SlotPanel.bgController((_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType());
          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).UPDATE_CURRENT_SCORE);
          this.listenerEvent();
        }

        listenerEvent() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42a2b381d58871468e4cc5ab2d0489c766bd1f67.js.map