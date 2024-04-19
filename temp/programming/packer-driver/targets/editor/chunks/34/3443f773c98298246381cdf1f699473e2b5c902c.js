System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DialogType, BgMediatorConst, SubGameType, config, getBgProxy, getSocketProxy, BaseCommand, UseSetOption, BgCommand, _crd, BgCommandConst;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "../Component/gxfc_DialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "../Mediator/BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSocketProxy(extras) {
    _reporterNs.report("getSocketProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCommand(extras) {
    _reporterNs.report("BaseCommand", "./BaseCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIListExecute(extras) {
    _reporterNs.report("IListExecute", "./BaseCommand", _context.meta, extras);
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
      UseSetOption = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3431da8EdlCuZ/uQe0GiBTk", "BgCommand", undefined);

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
        constructor(...args) {
          super(...args);
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
              const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)();
              const nextGame = fbp.getIsChangeGameRunning();

              if (nextGame !== -1) {
                // //开始切换屏幕
                const gameTypePre = fbp.getLastGame();
                const gameTypeNew = nextGame; // 播放飞水果动画,2秒的时候悄悄切换界面

                this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                  error: Error()
                }), BgMediatorConst) : BgMediatorConst).START_FLY_BG);
                this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                  error: Error()
                }), BgMediatorConst) : BgMediatorConst).INITSCORE, {
                  state: true
                });
                window.setTimeout(() => {
                  // 更换背景
                  const _gameRunner = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                    error: Error()
                  }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType();

                  this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                    error: Error()
                  }), BgMediatorConst) : BgMediatorConst).CHANGE_BG, {
                    gameType: (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                      error: Error()
                    }), getBgProxy) : getBgProxy)().getNextGame()
                  }); // 先卸载之前的游戏，由于是渐出，所以给一个时间

                  if (gameTypePre === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).MAIN || gameTypePre === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).SUB_GAME2) {//getBgProxy().setDisable(false)
                    // this.sendNotification(CommandDefine.ROLLER, {}, RollerMediatorConst.UNINSTALL_ROLLER_PANEL)
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
                      this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                        error: Error()
                      }), BgMediatorConst) : BgMediatorConst).UPDATE_GAME_STATUS); // this.sendNotification(CommandDefine.ROLLER, { gameType: 0 }, RollerMediatorConst.INIT_ROLLER_PANEL)
                    } else if (gameTypeNew === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).SUB_GAME1) {//getBgProxy().setDisable(false)
                      // this.sendNotification(CommandDefine.ROLLER, { gameType: 1 }, RollerMediatorConst.INIT_ROLLER_PANEL)
                    } else if (gameTypeNew === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).SUB_GAME2) {//大滑槽
                      //getBgProxy().setDisable(false)
                      // this.sendNotification(CommandDefine.ROLLER, { gameType: 2 }, RollerMediatorConst.INIT_ROLLER_PANEL)
                    }
                  }, 300);
                }, 1000);
              } else {
                (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().setDisable(false);
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
              const {
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
                const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
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
              const {
                dialogType,
                amount,
                keepTime,
                order,
                done
              } = notification.getBody();

              const _amount = amount || (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getCurrentScore(order);

              const _keepTime = keepTime || 2500; //获取奖励类型


              const magnification = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getMagnification();
              const win = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning.find(item => item.minRate <= magnification && magnification <= item.maxRate);

              if (win && !dialogType) {
                let dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BIG_WIN;

                switch (win.name) {
                  case "bigwin":
                    dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).BIG_WIN;
                    break;

                  case "megawin":
                    dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).MEGA_WIN;
                    break;

                  case "superwin":
                    dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).SUPER_WIN;
                    break;

                  case "jackpot":
                    dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).JACKPOT;
                    break;
                }

                return {
                  dialogType,
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
          let str = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getShiftAmount(order);
          const baseBetAmount = str.value;
          (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().setGameOption("gxfc", {
            betTarget: str
          });
          const lineCount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
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
//# sourceMappingURL=3443f773c98298246381cdf1f699473e2b5c902c.js.map