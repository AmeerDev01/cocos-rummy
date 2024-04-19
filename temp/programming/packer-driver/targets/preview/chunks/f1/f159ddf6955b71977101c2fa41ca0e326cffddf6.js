System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Node, Prefab, CommandDefine, PrefabDefine, BaseMediator, BgMediatorConst, BgCommandConst, getBgProxy, getSocketProxy, goldState, config, ApplicationGlobal, TaskScheduler, Task, ROLL_TIME, RollerMediator, _crd, RollerMediatorConst;

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

  function _reportPossibleCrUseOfGodWealth_RollerPanel(extras) {
    _reporterNs.report("GodWealth_RollerPanel", "../Component/GodWealth_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth_SlotPanel(extras) {
    _reporterNs.report("GodWealth_SlotPanel", "../Component/GodWealth_SlotPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "./BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgCommandConst(extras) {
    _reporterNs.report("BgCommandConst", "../Command/BgCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../GodWealth_utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../GodWealth_utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgoldState(extras) {
    _reporterNs.report("goldState", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../GodWealth_config", _context.meta, extras);
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
      Node = _cc.Node;
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
      goldState = _unresolved_8.goldState;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
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

      _cclegacy._RF.push({}, "8c44eNfZPRGT4BXecaQUzuF", "RollerMediator", undefined);

      __checkObsolete__(['find', 'Node', 'Prefab']);

      _export("RollerMediatorConst", RollerMediatorConst = /*#__PURE__*/function (RollerMediatorConst) {
        RollerMediatorConst["INIT_ROLLER_PANEL"] = "initRollerPanel";
        RollerMediatorConst["UNINSTALL_ROLLER_PANEL"] = "uninstallRollerPanel";
        RollerMediatorConst["BEGIN_ROLL"] = "beginRoll";
        RollerMediatorConst["END_ROLL"] = "endRoll";
        RollerMediatorConst["FORCE_STOP"] = "forceStop";
        RollerMediatorConst["REMOVE_THECHEST_LAYER"] = "removeThechestLayer";
        RollerMediatorConst["UPDATE_JACKPOT"] = "update_jackpot";
        RollerMediatorConst["UPDATE_JACKPOT_TOTAL"] = "UPDATE_JACKPOT_TOTAL";
        RollerMediatorConst["INITDOCKIOCN"] = "initdockiocn";
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
          this.stopRollHandle = void 0;
          this.stopTimeId = void 0;
          this.listNotificationConst = [{
            name: RollerMediatorConst.INIT_ROLLER_PANEL,

            handler(notification) {
              this.init(); //getBgProxy().setDisable(false)

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
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel");
              rollerComp.togglesALLLayer(iconStay === 1);
            }

          }, {
            name: RollerMediatorConst.INITDOCKIOCN,

            handler(notification) {
              var {
                dockIocn
              } = notification.getBody();
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel");
              rollerComp.iconDock('coord', dockIocn);
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
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel");
              rollerComp.startAllRoll(stopIndex, (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().isSpeed());
              (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().setDisable(true);
              this.taskScheduler.stopQueue(false);
              rollerComp.clearStatus();
              console.log(targetList); //闪动图标

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
                    this.autoLaunch();
                    (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                      error: Error()
                    }), getBgProxy) : getBgProxy)().setDisable(false);
                  }

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

                _this.stopRollHandle = undefined;
                _this.stopTimeId = undefined;
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

                  rollerComp.iconDock('coord', dockIocn); // // 开始轮流闪动图标

                  rollerComp.clearStatus();

                  if (!targetList.length) {
                    done();
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
            name: RollerMediatorConst.UPDATE_JACKPOT,

            handler(notification) {
              var {
                baseBetAmount,
                lineCount
              } = notification.getBody();

              if (this.wrapView && this.wrapView.components) {
                var _this$wrapView;

                var slotPanel = (_this$wrapView = this.wrapView) == null ? void 0 : _this$wrapView.getComponent("GodWealth_SlotPanel");

                if (slotPanel) {
                  (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().setWinningMultiplier({
                    mini: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).winning[1].maxRate * baseBetAmount,
                    major: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).winning[2].maxRate * baseBetAmount
                  });
                  slotPanel.setGod_MAJOR((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).winning[1].maxRate * baseBetAmount, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).winning[2].maxRate * baseBetAmount);
                }
              }
            }

          }, {
            name: RollerMediatorConst.UPDATE_JACKPOT_TOTAL,

            handler(notification) {
              var {
                total
              } = notification.getBody();

              if (this.wrapView && this.wrapView.components) {
                var _this$wrapView2;

                var slotPanel = (_this$wrapView2 = this.wrapView) == null ? void 0 : _this$wrapView2.getComponent("GodWealth_SlotPanel");
                slotPanel && slotPanel.set_jack_total(total);
              }
            }

          }, {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,

            handler(notification) {
              // console.log("卸载滑槽游戏")
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel");
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
          this.isFlickerDone = true;
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

        listenerEvent() {
          var _this$wrapView3;

          var slotPanel = (_this$wrapView3 = this.wrapView) == null ? void 0 : _this$wrapView3.getComponent("GodWealth_SlotPanel");
          slotPanel.btn_jackPot.on(Node.EventType.TOUCH_END, () => {
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).HANDOFF_JACKPOT);
          }, this);
        }

        autoLaunch() {
          var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)(); // if (fbp.getIsChangeGameRunning() === -1) {
          // 没有跳转游戏才自动发

          var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("GodWealth_RollerPanel");
          rollerComp.clearStatus();
          this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
            error: Error()
          }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
            error: Error()
          }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
        } // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f159ddf6955b71977101c2fa41ca0e326cffddf6.js.map