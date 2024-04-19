System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DialogType, BgMediatorConst, SubGameType, config, getBgProxy, getSocketProxy, BaseCommand, AudioManager, SceneBgMusic, UseSetOption, BgCommand, _crd, BgCommandConst;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "../Component/GodWealth_DialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "../Mediator/BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../GodWealth_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../GodWealth_utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../GodWealth_utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCommand(extras) {
    _reporterNs.report("BaseCommand", "./BaseCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIListExecute(extras) {
    _reporterNs.report("IListExecute", "./BaseCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBgMusic(extras) {
    _reporterNs.report("SceneBgMusic", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "db://assets/script/utils/UseSetOption", _context.meta, extras);
  }

  _export("BgCommand", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DialogType = _unresolved_2.DialogType;
    }, function (_unresolved_3) {
      BgMediatorConst = _unresolved_3.BgMediatorConst;
    }, function (_unresolved_4) {
      SubGameType = _unresolved_4.SubGameType;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      getBgProxy = _unresolved_6.getBgProxy;
      getSocketProxy = _unresolved_6.getSocketProxy;
    }, function (_unresolved_7) {
      BaseCommand = _unresolved_7.BaseCommand;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
      SceneBgMusic = _unresolved_8.SceneBgMusic;
    }, function (_unresolved_9) {
      UseSetOption = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5433fnxI5BJ7a5DZ5u3b+Tl", "BgCommand", undefined);

      _export("BgCommandConst", BgCommandConst = /*#__PURE__*/function (BgCommandConst) {
        BgCommandConst["AUTH"] = "authentication";
        BgCommandConst["GAME_TYPE_CHANGE"] = "gameTypeChange";
        BgCommandConst["AUTO_LAUNCH"] = "autoLaunch";
        return BgCommandConst;
      }({})); // const listNotificationConst: Array<IlistNotificationer<FruitsSlotCommand>> = [
      // 	{
      // 		type: MainSlotViewType.INIT_MAIN_PANEL,
      // 		handler(notification: INotification) {
      // 			return false
      // 		}
      // 	}
      // ]


      _export("BgCommand", BgCommand = class BgCommand extends (_crd && BaseCommand === void 0 ? (_reportPossibleCrUseOfBaseCommand({
        error: Error()
      }), BaseCommand) : BaseCommand) {
        constructor() {
          super(...arguments);
          this.listExecute = [{
            type: (_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).INIT_MAIN_PANEL,

            handler(notification) {
              // this.updateBetAmount("curr")
              return true;
            }

          }, {
            type: BgCommandConst.AUTH,

            handler(notification) {
              (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().sendAnth();
            }

          }, {
            type: BgCommandConst.GAME_TYPE_CHANGE,

            handler(notification) {
              var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)();
              var nextGame = fbp.getIsChangeGameRunning();

              if (nextGame !== -1) {
                // //开始切换屏幕
                // this.sendNotification(CommandDefine.BG, { gameTypePre: fbp.getLastGame(), gameTypeNew: nextGame }, FruitsBgCommandConst.GAME_TYPE_CHANGE)
                // const { gameTypePre, gameTypeNew } = notification.getBody()
                var gameTypePre = fbp.getLastGame();
                var gameTypeNew = nextGame;
                this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                  error: Error()
                }), BgMediatorConst) : BgMediatorConst).START_FLY_BG, {
                  done: () => {
                    fbp.setDisable(false);
                  }
                });
                window.setTimeout(() => {
                  // 先卸载之前的游戏，由于是渐出，所以给一个时间
                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).INITSCORE, {
                    state: true
                  });

                  if (gameTypePre === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).MAIN || gameTypePre === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).SUB_GAME2) {// this.sendNotification(CommandDefine.ROLLER, {}, RollerMediatorConst.UNINSTALL_ROLLER_PANEL)
                  } else if (gameTypePre === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).SUB_GAME1) {}

                  window.setTimeout(() => {
                    if (gameTypeNew === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).MAIN) {
                      (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                        error: Error()
                      }), getBgProxy) : getBgProxy)().setIsChangeNextGameType(gameTypePre, 0);
                      (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                        error: Error()
                      }), AudioManager) : AudioManager).getInstance().playMusic((_crd && SceneBgMusic === void 0 ? (_reportPossibleCrUseOfSceneBgMusic({
                        error: Error()
                      }), SceneBgMusic) : SceneBgMusic).mainBg, true);
                      this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                        error: Error()
                      }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
                        frequency: 0
                      });
                      this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                        error: Error()
                      }), BgMediatorConst) : BgMediatorConst).UPDATE_GAME_STATUS); // this.sendNotification(CommandDefine.ROLLER, { gameType: 0 }, RollerMediatorConst.INIT_ROLLER_PANEL)
                    } else if (gameTypeNew === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).SUB_GAME1) {
                      (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                        error: Error()
                      }), AudioManager) : AudioManager).getInstance().playMusic((_crd && SceneBgMusic === void 0 ? (_reportPossibleCrUseOfSceneBgMusic({
                        error: Error()
                      }), SceneBgMusic) : SceneBgMusic).gameBg, true);
                      this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                        error: Error()
                      }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
                        frequency: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                          error: Error()
                        }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getNumberOfRounds()
                      }); // this.sendNotification(CommandDefine.ROLLER, { gameType: 1 }, RollerMediatorConst.INIT_ROLLER_PANEL)
                    } else if (gameTypeNew === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).SUB_GAME2) {
                      //大滑槽
                      this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                        error: Error()
                      }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
                        frequency: (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                          error: Error()
                        }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getNumberOfRounds()
                      });
                      (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                        error: Error()
                      }), AudioManager) : AudioManager).getInstance().playMusic((_crd && SceneBgMusic === void 0 ? (_reportPossibleCrUseOfSceneBgMusic({
                        error: Error()
                      }), SceneBgMusic) : SceneBgMusic).gameBgT, true); // this.sendNotification(CommandDefine.ROLLER, { gameType: 2 }, RollerMediatorConst.INIT_ROLLER_PANEL)
                    }
                  }, 300);
                }, 1000);
              } else {
                fbp.setDisable(false);
              }
            }

          }, // {
          // 	type: BgMediatorConst.UPDATE_NUMBER,
          // 	handler(notification: INotification) {
          // 		const betAmount = this.getSocketProxy().getRepository().userServerData
          // 		return {
          // 			betAmount: betAmount,
          // 			score: 0
          // 		}
          // 	}
          // },
          {
            type: (_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).UPDATE_BET_AMOUNT,

            handler(notification) {
              var {
                order
              } = notification.getBody();
              return this.updateBetAmount(order);
            }

          }, {
            type: BgCommandConst.AUTO_LAUNCH,

            handler(notification) {
              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().checkAutoLaunch()) {
                (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                  error: Error()
                }), getSocketProxy) : getSocketProxy)().sendLaunch();
                var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)();

                if (fbp.getNextGame() === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN) {
                  (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().subtractAutoLaunchTimes();
                }
              }
            }

          }, {
            type: (_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).SHOW_DIALOG_WIN,

            handler(notification) {
              var {
                dialogType,
                amount,
                keepTime,
                order,
                done
              } = notification.getBody();

              var _amount = amount || (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getCurrentScore(order);

              var _keepTime = keepTime || 3000; //获取奖励类型


              var magnification = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getMagnification();
              var win = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning.find(item => item.minRate <= magnification && magnification <= item.maxRate);

              if (win && !dialogType) {
                var _dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BIG_WIN;

                switch (win.name) {
                  case "bigwin":
                    _dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).BIG_WIN;
                    break;

                  case "megawin":
                    _dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).MEGA_WIN;
                    break;

                  case "superwin":
                    _dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).SUPER_WIN;
                    break;

                  case "jackpot":
                    _dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).JACKPOT;
                    break;
                }

                return {
                  dialogType: _dialogType,
                  amount: _amount,
                  keepTime: _keepTime,
                  done
                };
              } else if (dialogType) {
                //如果dialogType被强制赋值，那么就会强制显示
                return {
                  dialogType,
                  amount: _amount,
                  keepTime: _keepTime,
                  done
                };
              } else {
                done();
              }
            }

          }];
        }

        updateBetAmount(order) {
          var str = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getShiftAmount(order);
          var baseBetAmount = str.value;
          (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().setGameOption("godWealth", {
            betTarget: str
          });
          var lineCount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).linesQueue.length;
          return {
            baseBetAmount,
            lineCount
          };
        }

        execute(notification) {
          super.execute(notification);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e0aadd9194355710234287ce61322ae800d44d6.js.map