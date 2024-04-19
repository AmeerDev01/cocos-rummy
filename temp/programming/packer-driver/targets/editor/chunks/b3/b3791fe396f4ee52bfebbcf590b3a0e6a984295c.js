System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DialogType, CommandDefine, BgMediatorConst, SubGameType, config, getBgProxy, getSocketProxy, BaseCommand, AudioManager, SceneBgMusic, UseSetOption, BgCommand, _crd, BgCommandConst;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "../Component/dragon_DialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommandDefine(extras) {
    _reporterNs.report("CommandDefine", "../Const/CommandDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBgMusic(extras) {
    _reporterNs.report("SceneBgMusic", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../../utils/UseSetOption", _context.meta, extras);
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
      CommandDefine = _unresolved_3.CommandDefine;
    }, function (_unresolved_4) {
      BgMediatorConst = _unresolved_4.BgMediatorConst;
    }, function (_unresolved_5) {
      SubGameType = _unresolved_5.SubGameType;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      getBgProxy = _unresolved_7.getBgProxy;
      getSocketProxy = _unresolved_7.getSocketProxy;
    }, function (_unresolved_8) {
      BaseCommand = _unresolved_8.BaseCommand;
    }, function (_unresolved_9) {
      AudioManager = _unresolved_9.AudioManager;
      SceneBgMusic = _unresolved_9.SceneBgMusic;
    }, function (_unresolved_10) {
      UseSetOption = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1710a7+4d1MNKATZvSTrbAR", "BgCommand", undefined);

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
                // this.sendNotification(CommandDefine.BG, { gameTypePre: fbp.getLastGame(), gameTypeNew: nextGame }, FruitsBgCommandConst.GAME_TYPE_CHANGE)
                // const { gameTypePre, gameTypeNew } = notification.getBody()
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
                    }), BgMediatorConst) : BgMediatorConst).UPDATE_GAME_STATUS);
                    this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                      error: Error()
                    }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
                      frequency: 0
                    });
                  } else if (gameTypeNew === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).SUB_GAME1) {
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
                    }), SceneBgMusic) : SceneBgMusic).gameBg, true);
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
                    }), SceneBgMusic) : SceneBgMusic).gameBgT, true);
                  }
                }, 1000);
              } else {
                this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                  error: Error()
                }), CommandDefine) : CommandDefine).BG, {}, BgCommandConst.AUTO_LAUNCH);
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

              const _keepTime = keepTime || 3000; //获取奖励类型


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
          }), UseSetOption) : UseSetOption).Instance().setGameOption("dragon", {
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
//# sourceMappingURL=b3791fe396f4ee52bfebbcf590b3a0e6a984295c.js.map