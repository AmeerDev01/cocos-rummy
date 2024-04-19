System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Prefab, CommandDefine, PrefabDefine, BaseMediator, BgMediatorConst, BgCommandConst, getBgProxy, getSocketProxy, goldState, config, ApplicationGlobal, AudioManager, SceneBgMusic, TaskScheduler, Task, SubGameType, ROLL_TIME, RollerMediator, _crd, RollerMediatorConst;

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

  function _reportPossibleCrUseOfphoenix_RollerPanel(extras) {
    _reporterNs.report("phoenix_RollerPanel", "../Component/phoenix_RollerPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_SlotPanel(extras) {
    _reporterNs.report("phoenix_SlotPanel", "../Component/phoenix_SlotPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "./BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgCommandConst(extras) {
    _reporterNs.report("BgCommandConst", "../Command/BgCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../phoenix_utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../phoenix_utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgoldState(extras) {
    _reporterNs.report("goldState", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../phoenix_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApplicationGlobal(extras) {
    _reporterNs.report("ApplicationGlobal", "../Const/ApplicationGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBgMusic(extras) {
    _reporterNs.report("SceneBgMusic", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
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
      goldState = _unresolved_8.goldState;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
    }, function (_unresolved_10) {
      ApplicationGlobal = _unresolved_10.ApplicationGlobal;
    }, function (_unresolved_11) {
      AudioManager = _unresolved_11.AudioManager;
      SceneBgMusic = _unresolved_11.SceneBgMusic;
    }, function (_unresolved_12) {
      TaskScheduler = _unresolved_12.default;
      Task = _unresolved_12.Task;
    }, function (_unresolved_13) {
      SubGameType = _unresolved_13.SubGameType;
    }, function (_unresolved_14) {
      ROLL_TIME = _unresolved_14.ROLL_TIME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "029baJxKBZAs6SFMJuwQx++", "RollerMediator", undefined);

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
        RollerMediatorConst["REPLACETHESLOTBACKGROUND"] = "replacetheslotbackground";
        RollerMediatorConst["THESLOTISHIDDEN"] = "theslotishidden";
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
              var {
                gameType,
                freeGameCount
              } = notification.getBody() || {}; //在初始化界面之前要初始化数据 'iconRollerQueue' | 'largeIconRollerQueue'

              var _gameRunner = gameType || (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType();

              this.init(); //getBgProxy().setDisable(false)
              // window.setTimeout(() => {
              //     // 可能有动画
              //     this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
              // }, 2500)

              if (gameType === 1) {
                if (freeGameCount === 0) {
                  this.sendNotification(RollerMediatorConst.THESLOTISHIDDEN, {
                    subGameType: (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).MAIN,
                    state: true
                  });
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).PHOENIX_SGCHOOSE);
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).CHANGE_BG, {
                    gameType: (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).MAIN
                  });
                } else {
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).CHANGE_BG, {
                    gameType: _gameRunner
                  });
                }

                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).getInstance().playMusic((_crd && SceneBgMusic === void 0 ? (_reportPossibleCrUseOfSceneBgMusic({
                  error: Error()
                }), SceneBgMusic) : SceneBgMusic).gameBg, true);
              } else {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).getInstance().playMusic((_crd && SceneBgMusic === void 0 ? (_reportPossibleCrUseOfSceneBgMusic({
                  error: Error()
                }), SceneBgMusic) : SceneBgMusic).mainBg, true);
                this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                  error: Error()
                }), BgMediatorConst) : BgMediatorConst).CHANGE_BG, {
                  gameType: _gameRunner
                });
              }
            }

          }, {
            name: RollerMediatorConst.REMOVE_THECHEST_LAYER,

            handler(notification) {
              var {
                iconStay
              } = notification.getBody();
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel");
              rollerComp.togglesALLLayer(iconStay === 1);
            }

          }, {
            name: RollerMediatorConst.REPLACETHESLOTBACKGROUND,

            handler(notification) {
              var _this$wrapView;

              var {
                state
              } = notification.getBody();
              var slotPanel = (_this$wrapView = this.wrapView) == null ? void 0 : _this$wrapView.getComponent("phoenix_SlotPanel");
              slotPanel.isBgShow(state);
            }

          }, {
            name: RollerMediatorConst.THESLOTISHIDDEN,

            handler(notification) {
              var {
                subGameType,
                state,
                done,
                isSlow
              } = notification.getBody();
              var slotPanel = this.wrapView.getComponent("phoenix_SlotPanel"); // slotPanel.lostHidden(state)

              if (state) {
                slotPanel.hideSlot(subGameType === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN, isSlow, done);
              } else {
                slotPanel.showSlot(subGameType === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN, isSlow, done);
              }
            }

          }, {
            name: RollerMediatorConst.BEGIN_ROLL,

            handler(notification) {
              var _this = this;

              var {
                stopIndex,
                targetList,
                dockIocn
              } = notification.getBody(); // console.log('BEGIN_ROLL',notification.getBody())

              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel");
              rollerComp.startAllRoll(stopIndex, (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().isSpeed());
              rollerComp.iconDock('coord', dockIocn);
              (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().setDisable(true);
              this.taskScheduler.stopQueue(false); //闪动图标

              var i = 0;

              var finalEnd = () => {
                // 最后闪动完成之后执行下一步的动作
                var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)();
                var nextGame = fbp.getIsChangeGameRunning();
                var win = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                  error: Error()
                }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getFreeGameAmount(); // 如果是从小游戏切换到主游戏就展示结算面板

                if (nextGame !== -1 && nextGame === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN) {
                  this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                      error: Error()
                    }), BgMediatorConst) : BgMediatorConst).SHOW_SMALL_GAME_RESULT, {
                      win,
                      done
                    });
                  })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                    error: Error()
                  }), Task) : Task)(done => {
                    this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                      error: Error()
                    }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                      error: Error()
                    }), BgCommandConst) : BgCommandConst).GAME_TYPE_CHANGE);
                    this.sendNotification(RollerMediatorConst.THESLOTISHIDDEN, {
                      subGameType: (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                        error: Error()
                      }), SubGameType) : SubGameType).MAIN,
                      state: false,
                      done
                    });
                    this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                      error: Error()
                    }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
                      state: true
                    });
                    this.autoLaunch();
                  }));
                } else {
                  this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                    error: Error()
                  }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                    error: Error()
                  }), BgCommandConst) : BgCommandConst).GAME_TYPE_CHANGE);
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
                    state: true
                  });

                  if (nextGame === -1) {
                    this.autoLaunch();
                  }
                }
              };

              var flickerFn = () => {
                targetList.forEach(item => {
                  rollerComp.iconFlicker('coord', item, true, () => {
                    i++;

                    if (i === targetList.length) {
                      //全部闪动完成
                      done(() => {
                        rollerComp.clearStatus();
                        setTimeout(() => {
                          flashLine();
                          (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                            error: Error()
                          }), getBgProxy) : getBgProxy)().setDisable(false);
                          finalEnd();
                        }, 1000);
                      });
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

                    window.setTimeout(() => done(), 2000);
                  });
                  this.taskScheduler.joinqQueue(task, false);
                });
              };

              var done = cb => {
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
                  // 元宝播放大奖
                  // 是否播放元宝动画
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).DISPLAYSTHEINGOTSMULTIPLIER, {
                    done
                  });
                  var OtherGameAttributesVo = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                    error: Error()
                  }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getOtherGameAttributesVo();

                  if (OtherGameAttributesVo.yuanBaoSpecialEffect) {
                    // 闪动元宝
                    var _rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel");

                    _rollerComp.playTheIngotsIconAnimation(OtherGameAttributesVo.yuanBaoPosition);
                  }

                  var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)();

                  if (fbp.getLastGame() == (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).SUB_GAME1) {
                    var slotPanel = this.wrapView.getComponent("phoenix_SlotPanel");
                    slotPanel.setLost(OtherGameAttributesVo.phoenixMagnification);
                    var getNumberOfRounds = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getNumberOfRounds();
                    (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                      error: Error()
                    }), getBgProxy) : getBgProxy)().setGameCount(getNumberOfRounds);
                    (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                      error: Error()
                    }), getBgProxy) : getBgProxy)().setGameTotalNumber(OtherGameAttributesVo.totalFreeGameCount);
                    this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                      error: Error()
                    }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
                      state: false
                    });
                  } else {// done()
                    // this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true })
                  } // if (fbp.getNextGame) {


                  done(); // this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, { state: true });
                  // }
                })).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  cb && cb();
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
                  }); //更新游戏奖励


                  _this.sendNotification(RollerMediatorConst.REMOVE_THECHEST_LAYER, {
                    iconStay: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getIconStay()
                  });

                  _this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).UPDATE_CURRENT_SCORE); // // 开始轮流闪动图标


                  rollerComp.clearStatus();
                  console.log('BEGIN_ROLL_______', targetList);

                  if (!targetList || !targetList.length) {
                    done(() => {
                      var yuanBaoSpecialEffect = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                        error: Error()
                      }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getOtherGameAttributesVo().yuanBaoSpecialEffect;
                      yuanBaoSpecialEffect ? window.setTimeout(() => finalEnd(), 500) : finalEnd();
                    });
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
            name: RollerMediatorConst.UPDATE_JACKPOT,

            handler(notification) {
              var _this$wrapView2;

              var {
                baseBetAmount,
                lineCount
              } = notification.getBody();
              var slotPanel = (_this$wrapView2 = this.wrapView) == null ? void 0 : _this$wrapView2.getComponent("phoenix_SlotPanel");

              if (slotPanel) {
                slotPanel.setGod_MAJOR((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).winning[0].maxRate * baseBetAmount, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).winning[1].maxRate * baseBetAmount);
              }
            }

          }, {
            name: RollerMediatorConst.UPDATE_JACKPOT_TOTAL,

            handler(notification) {// const { total } = notification.getBody();
              // const slotPanel = (<phoenix_SlotPanel>this.wrapView?.getComponent("phoenix_SlotPanel"))
              // if (slotPanel) {
              //     slotPanel.set_jack_total(total)
              // }
            }

          }, {
            name: RollerMediatorConst.UNINSTALL_ROLLER_PANEL,

            handler(notification) {
              // console.log("卸载滑槽游戏")
              var rollerComp = this.wrapView.getChildByName("slotListPanel").getComponent("phoenix_RollerPanel");
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
          }), BgMediatorConst) : BgMediatorConst).UPDATE_CURRENT_SCORE, {
            isInit: true
          });
          this.listenerEvent();
        }

        listenerEvent() {
          var _this$wrapView3;

          var slotPanel = (_this$wrapView3 = this.wrapView) == null ? void 0 : _this$wrapView3.getComponent("phoenix_SlotPanel"); // slotPanel.btn_jackPot.on(Node.EventType.TOUCH_END, () => {
          //     this.sendNotification(BgMediatorConst.HANDOFF_JACKPOT)
          // }, this)
        }

        autoLaunch() {
          var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
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
//# sourceMappingURL=54df31c7aa76d68c16755a051698d333211c7841.js.map