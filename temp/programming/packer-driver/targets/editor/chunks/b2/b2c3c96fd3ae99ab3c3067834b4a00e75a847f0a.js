System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, Node, Toggle, Sprite, CommandDefine, PrefabDefine, BaseMediator, SubGameType, AutoLaunchType, StopMode, dragon_DialogWin, BgCommandConst, getBgProxy, getSocketProxy, RollerMediatorConst, AudioManager, SoundList, DialogType, global, UseSetOption, addToastAction, sendNativeVibrate, BgMediator, _crd, BgMediatorConst;

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

  function _reportPossibleCrUseOfdragon_SlotBg(extras) {
    _reporterNs.report("dragon_SlotBg", "../Component/dragon_SlotBg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLaunchType(extras) {
    _reporterNs.report("AutoLaunchType", "../Repositories/BgRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopMode(extras) {
    _reporterNs.report("StopMode", "../Repositories/BgRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdragon_DialogWin(extras) {
    _reporterNs.report("dragon_DialogWin", "../Component/dragon_DialogWin", _context.meta, extras);
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

  function _reportPossibleCrUseOfRollerMediatorConst(extras) {
    _reporterNs.report("RollerMediatorConst", "./RollerMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "../Component/dragon_DialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "db://assets/script/hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendNativeVibrate(extras) {
    _reporterNs.report("sendNativeVibrate", "../../../../common/bridge", _context.meta, extras);
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
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      CommandDefine = _unresolved_2.CommandDefine;
    }, function (_unresolved_3) {
      PrefabDefine = _unresolved_3.PrefabDefine;
    }, function (_unresolved_4) {
      BaseMediator = _unresolved_4.default;
    }, function (_unresolved_5) {
      SubGameType = _unresolved_5.SubGameType;
    }, function (_unresolved_6) {
      AutoLaunchType = _unresolved_6.AutoLaunchType;
      StopMode = _unresolved_6.StopMode;
    }, function (_unresolved_7) {
      dragon_DialogWin = _unresolved_7.dragon_DialogWin;
    }, function (_unresolved_8) {
      BgCommandConst = _unresolved_8.BgCommandConst;
    }, function (_unresolved_9) {
      getBgProxy = _unresolved_9.getBgProxy;
      getSocketProxy = _unresolved_9.getSocketProxy;
    }, function (_unresolved_10) {
      RollerMediatorConst = _unresolved_10.RollerMediatorConst;
    }, function (_unresolved_11) {
      AudioManager = _unresolved_11.AudioManager;
      SoundList = _unresolved_11.SoundList;
    }, function (_unresolved_12) {
      DialogType = _unresolved_12.DialogType;
    }, function (_unresolved_13) {
      global = _unresolved_13.global;
    }, function (_unresolved_14) {
      UseSetOption = _unresolved_14.default;
    }, function (_unresolved_15) {
      addToastAction = _unresolved_15.addToastAction;
    }, function (_unresolved_16) {
      sendNativeVibrate = _unresolved_16.sendNativeVibrate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22c3dnxy6tNGKFHYyTaC7Pq", "BgMediator", undefined);

      __checkObsolete__(['Prefab', 'Node', 'Toggle', 'Sprite']);

      // export interface IlistNotificationer {
      //  name: string
      //  isListen?: boolean
      //  handler(notification: INotification): void
      // }
      _export("BgMediatorConst", BgMediatorConst = /*#__PURE__*/function (BgMediatorConst) {
        BgMediatorConst["INIT_MAIN_PANEL"] = "initMainPanel";
        BgMediatorConst["START_FLY_BG"] = "startFlyBg";
        BgMediatorConst["UPDATE_NUMBER"] = "updateNumber";
        BgMediatorConst["CHANGE_BG"] = "changeBG";
        BgMediatorConst["UPDATE_AUTO_LAUNCH"] = "updateAutoLaunch";
        BgMediatorConst["UPDATE_GAME_STATUS"] = "updateGameStatus";
        BgMediatorConst["SHOW_DIALOG_WIN"] = "showDialogWin";
        BgMediatorConst["OPEN_RULE_PANEL"] = "openRulePanel";
        BgMediatorConst["UPDATE_BET_AMOUNT"] = "updateBetAmount";
        BgMediatorConst["UPDATE_CURRENT_SCORE"] = "updateCurrentScore";
        BgMediatorConst["SHOW_TOAST"] = "showToast";
        BgMediatorConst["UPDATE_BTN_LABEL"] = "updateBtnLabel";
        BgMediatorConst["UPDATE_USER_GOLD"] = "updateUserGold";
        BgMediatorConst["TOGGLETHESTARTBUTTON"] = "togglethestartbutton";
        BgMediatorConst["INITSCORE"] = "initScore";
        BgMediatorConst["NUMBEROFDISPLAYS"] = "numberOfDisplays";
        BgMediatorConst["InsufficientBalanceDisplay"] = "InsufficientBalanceDisplay";
        BgMediatorConst["SETGREYOUT"] = "SETGREYOUT";
        return BgMediatorConst;
      }({}));

      _export("default", BgMediator = class BgMediator extends (_crd && BaseMediator === void 0 ? (_reportPossibleCrUseOfBaseMediator({
        error: Error()
      }), BaseMediator) : BaseMediator) {
        constructor(mediatorName = null, viewComponent = null) {
          super(mediatorName, viewComponent);
          this.buttonThrottling = true;
          this.frequency = null;
          this.baseBetAmount = null;
          this.lineCount = null;
          this.sourceMap = [{
            key: 'fruitsSlot',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).SLOT_BG,
            sourceType: Prefab,
            source: null
          }, {
            key: 'flyBg',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).FLY_BG,
            sourceType: Prefab,
            source: null
          }, {
            key: 'dynamicNumber',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).DYNAMIC_NUMBER,
            sourceType: Prefab,
            source: null
          }, {
            key: 'dialogWin',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).DIALOG_WIN,
            sourceType: Prefab,
            source: null
          }, {
            key: 'rulePanel',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).RULE_PANEL,
            sourceType: Prefab,
            source: null
          }, {
            key: 'toast',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).TOAST,
            sourceType: Prefab,
            source: null
          }];
          this.listNotificationConst = [{
            name: BgMediatorConst.INIT_MAIN_PANEL,

            handler(notification) {
              this.init();
              let pdd = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.dragon ? (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.dragon.betTarget.positionId : 1;
              (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().initUserSwitch(pdd);
              this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                error: Error()
              }), CommandDefine) : CommandDefine).BG, {
                order: "curr"
              }, BgMediatorConst.UPDATE_BET_AMOUNT);
            }

          }, {
            name: BgMediatorConst.SETGREYOUT,

            handler(notification) {
              const {
                state
              } = notification.getBody(),
                    comp = this.wrapView.getComponent("dragon_SlotBg");

              if (state !== 0) {
                comp.setGreyOut('SZX_-', state == 1);
                comp.setGreyOut('SZX_+', state == 2);
              } else {
                comp.setGreyOut('SZX_-', false);
                comp.setGreyOut('SZX_+', false);
              }
            }

          }, {
            name: BgMediatorConst.CHANGE_BG,

            handler(notification) {
              const {
                gameType
              } = notification.getBody() || {};
              this.changeBg(gameType);
            }

          }, {
            name: BgMediatorConst.INITSCORE,

            handler(notification) {
              const {
                state
              } = notification.getBody() || {};

              if (state) {
                this.wrapView.getComponent("dragon_SlotBg").updateScore(0);
              }

              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getNextGame() == 0) {
                this.wrapView.getComponent("dragon_SlotBg").updateScore(0);
              }
            }

          }, {
            name: BgMediatorConst.START_FLY_BG,

            handler(notification) {
              const flyBgNode = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).FLY_BG);
              this.viewComponent.addChild(flyBgNode);
              flyBgNode.setSiblingIndex(1000);
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                error: Error()
              }), SoundList) : SoundList).spitOut);
              window.setTimeout(() => {
                this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                  error: Error()
                }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                  error: Error()
                }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
                this.sendNotification(BgMediatorConst.TOGGLETHESTARTBUTTON, {
                  state: true
                });
                this.viewComponent.removeChild(flyBgNode);
              }, 3000);
            }

          }, {
            name: BgMediatorConst.UPDATE_NUMBER,

            handler(notification) {// const { betAmount, score } = notification.getBody();
              // (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateBetAmount(betAmount);
              // (this.wrapView.getComponent("dragon_SlotBg") as dragon_SlotBg).updateScore(score);
            }

          }, {
            name: BgMediatorConst.UPDATE_AUTO_LAUNCH,

            handler(notification) {
              this.wrapView.getComponent("dragon_SlotBg").setActiveButton((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getAutoLaunchType());
            }

          }, {
            name: BgMediatorConst.UPDATE_GAME_STATUS,

            handler(notification) {
              const comp = this.wrapView.getComponent("dragon_SlotBg");
              comp.setDisable((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getDisable());
              console.log((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getLastGame(), (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getNextGame());

              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getNextGame() != 0) {
                comp.setDis_btn(true);
              } else {
                comp.setDis_btn((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getDisable());
              }

              comp.homeButton.getComponent(Sprite).grayscale = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getDisable();
            }

          }, {
            name: BgMediatorConst.UPDATE_BTN_LABEL,

            handler(notification) {
              let {
                frequency
              } = notification.getBody();
              this.frequency = frequency || this.frequency - 1;
              const comp = this.wrapView.getComponent("dragon_SlotBg");
              comp.setBtnLabel(this.frequency);
            }

          }, {
            name: BgMediatorConst.UPDATE_USER_GOLD,

            handler(notification) {
              let {
                state
              } = notification.getBody();
              let gold = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getUserGold(state);
              const comp = this.wrapView.getComponent("dragon_SlotBg");
              comp.setGold(gold);
            }

          }, {
            name: BgMediatorConst.TOGGLETHESTARTBUTTON,

            handler(notification) {
              const {
                state
              } = notification.getBody();

              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getNextGame() == 0) {
                if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().checkAutoLaunch()) {
                  // 是自动
                  let str = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().isUNLIMT() ? "∞" : (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().getAutoLaunchNum() + "/" + (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().getTotal();
                  this.wrapView.getComponent("dragon_SlotBg").setBtnState(state, 3, str);
                } else {
                  this.wrapView.getComponent("dragon_SlotBg").setBtnState(state);
                }
              } else {
                // 小游戏
                this.wrapView.getComponent("dragon_SlotBg").setBtnState(state, 1);
              }
            }

          }, {
            name: BgMediatorConst.SHOW_DIALOG_WIN,

            handler(notification) {
              const {
                dialogType,
                amount,
                keepTime,
                done
              } = notification.getBody();
              const dialog = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).DIALOG_WIN);
              this.viewComponent.addChild(dialog);
              let type = dialogType;

              if (dialogType === 'jackpot' && (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getShiftAmount("curr").jackpot == 0) {
                type = 'superWin';
              }

              (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
                error: Error()
              }), sendNativeVibrate) : sendNativeVibrate)(200);
              dialog.getComponent(_crd && dragon_DialogWin === void 0 ? (_reportPossibleCrUseOfdragon_DialogWin({
                error: Error()
              }), dragon_DialogWin) : dragon_DialogWin).showDialog(dialogType, amount, keepTime || 2000, () => {
                done();
              });
            }

          }, {
            name: BgMediatorConst.NUMBEROFDISPLAYS,

            // 其他的动画
            handler(notification) {
              const {
                amount,
                keepTime,
                done,
                type
              } = notification.getBody(); //type 1普通 2 龙珠结束

              let amounts = amount;
              let dialogType = null;
              const fab = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)();

              if (fab.getIsChangeGameRunning() !== -1) {
                let length = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                  error: Error()
                }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getDackiconLenth();
                let tatalNum = 0;

                if (fab.getNextGame() === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN) {
                  if (fab.getLastGame() === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                    error: Error()
                  }), SubGameType) : SubGameType).SUB_GAME2 && type == 2) {
                    if (length < 5) {
                      done();
                      return;
                    }

                    dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).JACKPOTPOPUPS;
                    tatalNum = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getCurrentScore('curr');
                  } else if (type == 1) {
                    dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                      error: Error()
                    }), DialogType) : DialogType).SPECIALGAME;
                    amounts = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                      error: Error()
                    }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getCurrentScore('auto');
                  } else {
                    done();
                    return;
                  }
                } else if (fab.getNextGame() === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).SUB_GAME1 && type == 1) {
                  dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                    error: Error()
                  }), DialogType) : DialogType).YOUWON;
                } else if (fab.getNextGame() === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).SUB_GAME2 && type == 1) {
                  dialogType = (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                    error: Error()
                  }), DialogType) : DialogType).JACKPOTS;
                } else {
                  done();
                  return;
                }

                const dialog = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                  error: Error()
                }), PrefabDefine) : PrefabDefine).DIALOG_WIN);
                this.viewComponent.addChild(dialog);
                dialog.getComponent(_crd && dragon_DialogWin === void 0 ? (_reportPossibleCrUseOfdragon_DialogWin({
                  error: Error()
                }), dragon_DialogWin) : dragon_DialogWin).showDialog(dialogType, amounts, keepTime || 2000, () => {
                  done();
                }, length, tatalNum);
              } else {
                done();
              }
            }

          }, {
            name: BgMediatorConst.OPEN_RULE_PANEL,

            handler(notification) {
              const rulePanel = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).RULE_PANEL);
              this.viewComponent.addChild(rulePanel);
            }

          }, {
            name: BgMediatorConst.InsufficientBalanceDisplay,

            handler(notification) {
              const {
                bl
              } = notification.getBody();
              this.wrapView.getComponent("dragon_SlotBg").Balance_tips(bl);
            }

          }, {
            name: BgMediatorConst.UPDATE_BET_AMOUNT,

            handler(notification) {
              const {
                baseBetAmount,
                lineCount
              } = notification.getBody();
              this.baseBetAmount = baseBetAmount;
              this.wrapView.getComponent("dragon_SlotBg").updateBetAmount(baseBetAmount, lineCount);
              window.setTimeout(() => {
                this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                  error: Error()
                }), RollerMediatorConst) : RollerMediatorConst).INIT_JACKPOT, notification.getBody());
              }, 500);
            }

          }, {
            name: BgMediatorConst.UPDATE_CURRENT_SCORE,

            handler(notification) {
              const {
                order
              } = notification.getBody() || {};
              const currentScore = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getCurrentScore(order || "auto");
              this.wrapView.getComponent("dragon_SlotBg").updateScore(currentScore);
            }

          }, {
            name: BgMediatorConst.SHOW_TOAST,

            handler(notification) {
              const {
                content
              } = notification.getBody() || {};
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: String(content)
              })); // const toastPanel = this.getSource(PrefabDefine.TOAST)
              // this.viewComponent.addChild(toastPanel);
              // (toastPanel.getComponent("dragon_Toast") as dragon_Toast).showContent(content)
            }

          }];
        }

        listenerEvent() {
          const comp = this.wrapView.getComponent("dragon_SlotBg");
          const autoButtonWrap = this.wrapView.getComponent("dragon_SlotBg").autoLaunch;
          const props_toggle_fast = this.wrapView.getComponent("dragon_SlotBg").propsToggleFast;
          props_toggle_fast.getComponent(Toggle).isChecked = false;
          let pressTime = 0;
          const timeLimit = 500; //按压触发自动面板时间

          let timer = 0;
          let isLongPress = false;
          comp.ruleButton.on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            this.sendNotification(BgMediatorConst.OPEN_RULE_PANEL);
          });
          comp.startButton.on(Node.EventType.TOUCH_START, () => {
            timer = window.setInterval(() => {
              pressTime += 10;

              if (pressTime > timeLimit) {
                window.clearInterval(timer);
                const presentGame = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getNextGame();

                if (presentGame === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN) {
                  this.wrapView.getComponent("dragon_SlotBg").triggeAutoLaunch();
                  isLongPress = true;
                } else {
                  isLongPress = false;
                }
              }
            }, 10);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            this.sendNotification(BgMediatorConst.INITSCORE);
          });
          comp.startButton.on(Node.EventType.TOUCH_END, () => {
            window.clearInterval(timer);

            if (isLongPress) {
              pressTime = 0;
              isLongPress = false;
              return;
            }

            const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)();

            if (fbp.getAutoLaunchType() !== (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
              error: Error()
            }), AutoLaunchType) : AutoLaunchType).DISABLE) {
              fbp.setAutoLaunchType((_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).DISABLE);
            }

            this.wrapView.getComponent("dragon_SlotBg").triggeAutoLaunch(false); // 禁用状态不能点击发送下注

            if (!fbp.getDisable()) {
              if (this.buttonThrottling) {
                // 按钮防抖节流
                this.buttonThrottling = false;
                setTimeout(() => {
                  this.buttonThrottling = true;
                }, 1000);
                (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                  error: Error()
                }), getSocketProxy) : getSocketProxy)().sendLaunch();
              }
            } else if (!fbp.checkAutoLaunch()) {
              this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                error: Error()
              }), RollerMediatorConst) : RollerMediatorConst).END_ROLL);
            }

            pressTime = 0;
          }); // 点击首页按钮

          comp.homeButton.on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)();

            if (fbp.getDisable()) {
              return;
            } else {
              comp.scheduleOnce(() => {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).getInstance().closeMusic(() => {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).closeSubGame();
                });
              }, 1);
            }
          });
          comp.addBet.on(Node.EventType.TOUCH_END, () => {
            const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)();

            if (fbp.getDisable() || fbp.getLastGame() != 0) {
              return;
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).add_coin);
            this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
              error: Error()
            }), CommandDefine) : CommandDefine).BG, {
              order: "add"
            }, BgMediatorConst.UPDATE_BET_AMOUNT);
            (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
              error: Error()
            }), getSocketProxy) : getSocketProxy)().calculateTheBalanceStatus();
          });
          comp.subtractBet.on(Node.EventType.TOUCH_END, () => {
            const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)();

            if (fbp.getDisable() || fbp.getLastGame() != 0) {
              return;
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).reduce_coin);
            this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
              error: Error()
            }), CommandDefine) : CommandDefine).BG, {
              order: "subtract"
            }, BgMediatorConst.UPDATE_BET_AMOUNT);
            (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
              error: Error()
            }), getSocketProxy) : getSocketProxy)().calculateTheBalanceStatus();
          });
          comp.maxBet.on(Node.EventType.TOUCH_END, () => {
            const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)();

            if (fbp.getDisable() || fbp.getLastGame() != 0) {
              return;
            }

            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).add_coin);
            this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
              error: Error()
            }), CommandDefine) : CommandDefine).BG, {
              order: "max"
            }, BgMediatorConst.UPDATE_BET_AMOUNT);
            (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
              error: Error()
            }), getSocketProxy) : getSocketProxy)().calculateTheBalanceStatus();
          });
          autoButtonWrap.children.forEach((child, index) => {
            child.on(Node.EventType.TOUCH_END, () => {
              const fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)(); // 必须处于未开启状态才能修改自动执行

              if (fbp.getAutoLaunchType() === (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).DISABLE) {
                fbp.setAutoLaunchType(index);
                this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                  error: Error()
                }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                  error: Error()
                }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
              }
            });
          });
          this.setStopMode(props_toggle_fast.getComponent(Toggle));
          props_toggle_fast.on(Toggle.EventType.TOGGLE, toggle => {
            (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)().setStopMode(toggle.isChecked ? (_crd && StopMode === void 0 ? (_reportPossibleCrUseOfStopMode({
              error: Error()
            }), StopMode) : StopMode).QUEUE_STOP : (_crd && StopMode === void 0 ? (_reportPossibleCrUseOfStopMode({
              error: Error()
            }), StopMode) : StopMode).NORMAL);
          });
        }

        setStopMode(toggle) {
          (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)().setStopMode(toggle.isChecked ? (_crd && StopMode === void 0 ? (_reportPossibleCrUseOfStopMode({
            error: Error()
          }), StopMode) : StopMode).QUEUE_STOP : (_crd && StopMode === void 0 ? (_reportPossibleCrUseOfStopMode({
            error: Error()
          }), StopMode) : StopMode).NORMAL);
        }

        changeBg(gameRunner) {
          const _gameRunner = gameRunner || (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType();

          this.wrapView.getComponent("dragon_SlotBg").setBg(_gameRunner === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
            error: Error()
          }), SubGameType) : SubGameType).MAIN ? "bg_1" : "bg_2");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2c3c96fd3ae99ab3c3067834b4a00e75a847f0a.js.map