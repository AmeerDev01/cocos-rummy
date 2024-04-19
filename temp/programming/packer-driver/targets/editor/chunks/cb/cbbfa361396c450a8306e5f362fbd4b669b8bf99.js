System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Prefab, sp, Sprite, Label, Button, Toggle, CommandDefine, PrefabDefine, BaseMediator, SubGameType, AutoLaunchType, StopMode, phoenix_DialogWin, phoenix_sgChoose, phoenix_totalBet, BgCommandConst, getBgProxy, getSocketProxy, RollerMediatorConst, AudioManager, SoundList, config, global, UseSetOption, addToastAction, sendNativeVibrate, BgMediator, _crd, BgMediatorConst;

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

  function _reportPossibleCrUseOfphoenix_SlotBg(extras) {
    _reporterNs.report("phoenix_SlotBg", "../Component/phoenix_SlotBg", _context.meta, extras);
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

  function _reportPossibleCrUseOfphoenix_DialogWin(extras) {
    _reporterNs.report("phoenix_DialogWin", "../Component/phoenix_DialogWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_sgChoose(extras) {
    _reporterNs.report("phoenix_sgChoose", "../Component/phoenix_sgChoose", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_totalBet(extras) {
    _reporterNs.report("phoenix_totalBet", "../Component/phoenix_totalBet", _context.meta, extras);
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

  function _reportPossibleCrUseOfRollerMediatorConst(extras) {
    _reporterNs.report("RollerMediatorConst", "./RollerMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../phoenix_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "db://assets/script/hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "db://assets/script/utils/UseSetOption", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Button = _cc.Button;
      Toggle = _cc.Toggle;
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
      phoenix_DialogWin = _unresolved_7.phoenix_DialogWin;
    }, function (_unresolved_8) {
      phoenix_sgChoose = _unresolved_8.phoenix_sgChoose;
    }, function (_unresolved_9) {
      phoenix_totalBet = _unresolved_9.phoenix_totalBet;
    }, function (_unresolved_10) {
      BgCommandConst = _unresolved_10.BgCommandConst;
    }, function (_unresolved_11) {
      getBgProxy = _unresolved_11.getBgProxy;
      getSocketProxy = _unresolved_11.getSocketProxy;
    }, function (_unresolved_12) {
      RollerMediatorConst = _unresolved_12.RollerMediatorConst;
    }, function (_unresolved_13) {
      AudioManager = _unresolved_13.AudioManager;
      SoundList = _unresolved_13.SoundList;
    }, function (_unresolved_14) {
      config = _unresolved_14.default;
    }, function (_unresolved_15) {
      global = _unresolved_15.global;
    }, function (_unresolved_16) {
      UseSetOption = _unresolved_16.default;
    }, function (_unresolved_17) {
      addToastAction = _unresolved_17.addToastAction;
    }, function (_unresolved_18) {
      sendNativeVibrate = _unresolved_18.sendNativeVibrate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0b1a703C9DWLEYg4IAbgc+", "BgMediator", undefined);

      __checkObsolete__(['Node', 'Prefab', 'sp', 'Sprite', 'Color', 'Component', 'Label', 'Button', 'Toggle']);

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
        BgMediatorConst["UPDATE_JACKPOT"] = "UPDATE_JACKPOT";
        BgMediatorConst["HANDOFF_JACKPOT"] = "handoff_jackpot";
        BgMediatorConst["PHOENIX_SGCHOOSE"] = "phoenix_sgchoose";
        BgMediatorConst["DISPLAYSTHEINGOTSMULTIPLIER"] = "displaystheingotsmultiplier";
        BgMediatorConst["TOGGLETHESTARTBUTTON"] = "togglethestartbutton";
        BgMediatorConst["SHOW_SMALL_GAME_RESULT"] = "showSmallGameResult";
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
            key: 'phoenix_dialogwin',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).PHOENIX_DIALOGWIN,
            sourceType: Prefab,
            source: null
          }, {
            key: 'phoenix_totalbet',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).PHOENIX_TOTALBET,
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
          }, {
            key: 'resultSmall',
            path: (_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
              error: Error()
            }), PrefabDefine) : PrefabDefine).RESULT_SMALL,
            sourceType: Prefab,
            source: null
          }];
          this.listNotificationConst = [{
            name: BgMediatorConst.INIT_MAIN_PANEL,

            handler(notification) {
              this.init();
              let pdd = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenix ? (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.phoenix.betTarget.positionId : 1;
              (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().initUserSwitch(pdd);
              this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                error: Error()
              }), CommandDefine) : CommandDefine).BG, {
                order: "curr"
              }, BgMediatorConst.UPDATE_BET_AMOUNT); // if (UseSetOption.Instance().option.gameSet.phoenix && UseSetOption.Instance().option.gameSet.phoenix.betTarget) {
              //     let pdd = UseSetOption.Instance().option.gameSet.phoenix ? UseSetOption.Instance().option.gameSet.phoenix.betTarget.positionId : 1
              //     getSocketProxy().initUserSwitch(pdd)
              // }
              // this.sendNotification(CommandDefine.BG, { order: "curr" }, BgMediatorConst.UPDATE_BET_AMOUNT)
            }

          }, {
            name: BgMediatorConst.SETGREYOUT,

            handler(notification) {
              const {
                state
              } = notification.getBody(),
                    comp = this.wrapView.getComponent("phoenix_SlotBg");

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
            name: BgMediatorConst.START_FLY_BG,

            handler(notification) {
              const {
                cb,
                done
              } = notification.getBody() || {};
              const flyBgNode = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).FLY_BG);
              this.viewComponent.addChild(flyBgNode);
              flyBgNode.setSiblingIndex(1000);
              flyBgNode.getChildByName("caishenguochang").getComponent(sp.Skeleton).setCompleteListener(() => {
                this.viewComponent.removeChild(flyBgNode);
                this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                  error: Error()
                }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                  error: Error()
                }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
                done && done();
              });
              window.setTimeout(() => {
                if (cb) {
                  cb();
                } else {
                  console.log("START_FLY_BG settimeout ", (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().getNextGame());
                  this.sendNotification(BgMediatorConst.CHANGE_BG, {
                    gameType: (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                      error: Error()
                    }), getBgProxy) : getBgProxy)().getNextGame()
                  });
                  this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                    error: Error()
                  }), RollerMediatorConst) : RollerMediatorConst).THESLOTISHIDDEN, {
                    subGameType: (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                      error: Error()
                    }), SubGameType) : SubGameType).SUB_GAME1,
                    state: false
                  });
                }
              }, 500);
            }

          }, {
            name: BgMediatorConst.UPDATE_NUMBER,

            handler(notification) {// const { betAmount, score } = notification.getBody();
              // (this.wrapView.getComponent("SlotBg") as SlotBg).updateBetAmount(betAmount);
              // (this.wrapView.getComponent("SlotBg") as SlotBg).updateScore(score);
            }

          }, {
            name: BgMediatorConst.UPDATE_AUTO_LAUNCH,

            handler(notification) {
              this.wrapView.getComponent("phoenix_SlotBg").setActiveButton((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getAutoLaunchType());
            }

          }, {
            name: BgMediatorConst.UPDATE_JACKPOT,

            handler(notification) {// let { jackPotData } = notification.getBody();
              // (<phoenix_SlotBg>this.wrapView.getComponent("phoenix_SlotBg")).setJACKPOT(jackPotData)
            }

          }, {
            name: BgMediatorConst.UPDATE_GAME_STATUS,

            handler(notification) {
              const comp = this.wrapView.getComponent("phoenix_SlotBg");
              comp.setDisable((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getDisable());

              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getLastGame() != 0) {
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
              const comp = this.wrapView.getComponent("phoenix_SlotBg");
              let {
                state
              } = notification.getBody(); // const isMainGame = getBgProxy().getGameCount() === 0;
              // comp.setBtnState(isMainGame, isMainGame ? 0 : 1);
              // if (isMainGame) return;

              let btnLabel;

              if (state) {
                btnLabel = `${(_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getGameCount() - 1}/${(_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getGameTotalNumber()}`;
              } else {
                btnLabel = `${(_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getGameCount()}/${(_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getGameTotalNumber()}`;
              }

              comp.setBtnLabel(btnLabel);
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
              const comp = this.wrapView.getComponent("phoenix_SlotBg");
              comp.setGold(gold.toString());
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
              dialog.getComponent(_crd && phoenix_DialogWin === void 0 ? (_reportPossibleCrUseOfphoenix_DialogWin({
                error: Error()
              }), phoenix_DialogWin) : phoenix_DialogWin).showDialog(dialogType, amount, keepTime || 2000, () => {
                done();
              });
            }

          }, {
            name: BgMediatorConst.DISPLAYSTHEINGOTSMULTIPLIER,

            handler(notification) {
              const {
                done
              } = notification.getBody();
              let OtherGameAttributesVo = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getOtherGameAttributesVo();

              if (OtherGameAttributesVo.yuanBaoSpecialEffect) {
                const dialog = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                  error: Error()
                }), PrefabDefine) : PrefabDefine).PHOENIX_TOTALBET);
                this.viewComponent.addChild(dialog);
                const totalBetComponent = dialog.getComponent(_crd && phoenix_totalBet === void 0 ? (_reportPossibleCrUseOfphoenix_totalBet({
                  error: Error()
                }), phoenix_totalBet) : phoenix_totalBet);
                totalBetComponent.setTotalText(OtherGameAttributesVo);
                setTimeout(() => {
                  dialog.isValid && dialog.destroy();
                  done();
                }, 2000);
              } else {
                done();
              }
            }

          }, {
            name: BgMediatorConst.PHOENIX_SGCHOOSE,

            handler(notification) {
              (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().setDisable(true);
              const dialog = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).PHOENIX_DIALOGWIN);
              let sgChooseComponent = dialog.getComponent(_crd && phoenix_sgChoose === void 0 ? (_reportPossibleCrUseOfphoenix_sgChoose({
                error: Error()
              }), phoenix_sgChoose) : phoenix_sgChoose); // let click = false

              sgChooseComponent.node.children.filter(item => item.name.startsWith("props_")).forEach((item, index) => {
                item.once(Node.EventType.TOUCH_END, e => {
                  item.getComponent(Button).enabled = false;
                  sgChooseComponent.node.children.filter(item => item.name.startsWith("props_")).forEach((item, i) => {
                    if (index !== i) {
                      // 其他node开启灰度
                      item.getComponent(Sprite).grayscale = true;
                      item.getComponent(Button).enabled = false;
                    }
                  });
                  let skeleton_in = e.target.getChildByName('skeleton_in');
                  skeleton_in.active = true;
                  (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().setFreeGamePositionId(index + 1); // 设置按钮次数

                  let smallGame = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).smallGame[index];
                  (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().setGameCount(smallGame.times);
                  (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().setGameTotalNumber(smallGame.times);
                  this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL, {
                    state: false
                  }); // 选择次数之后播放转场动画

                  this.monitorAnimations(skeleton_in.getComponent(sp.Skeleton), entry => {
                    (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                      error: Error()
                    }), getBgProxy) : getBgProxy)().setDisable(false);
                    this.sendNotification(BgMediatorConst.START_FLY_BG);
                    sgChooseComponent.sgChooseHide();
                  });
                });
              }); // 选择框

              this.viewComponent.addChild(dialog);
            }

          }, {
            name: BgMediatorConst.HANDOFF_JACKPOT,

            handler(notification) {
              this.wrapView.getComponent("phoenix_SlotBg").handoffJACKPOT();
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
              this.wrapView.getComponent("phoenix_SlotBg").Balance_tips(bl);
            }

          }, {
            name: BgMediatorConst.UPDATE_BET_AMOUNT,

            handler(notification) {
              const {
                baseBetAmount,
                lineCount
              } = notification.getBody();
              window.setTimeout(() => {
                this.wrapView.getComponent("phoenix_SlotBg").updateBetAmount(baseBetAmount, lineCount);
              }, 300);
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
                  this.wrapView.getComponent("phoenix_SlotBg").setBtnState(state, 3, str);
                } else {
                  this.wrapView.getComponent("phoenix_SlotBg").setBtnState(state);
                }
              } else {
                // 小游戏
                this.wrapView.getComponent("phoenix_SlotBg").setBtnState(state, 1);
              }
            }

          }, {
            name: BgMediatorConst.UPDATE_CURRENT_SCORE,

            handler(notification) {
              const {
                order,
                isInit,
                clear
              } = notification.getBody() || {};
              const currentScore = clear ? 0 : (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getCurrentScore(order || "auto"); // console.log("UPDATE_CURRENT_SCORE", currentScore);

              const isChange = this.wrapView.getComponent("phoenix_SlotBg").updateScore(currentScore);

              if (currentScore > 0 && !isInit && isChange) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).coinCollection);
              }
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
              // (toastPanel.getComponent("phoenix_Toast") as phoenix_Toast).showContent(content)
            }

          }, {
            name: BgMediatorConst.SHOW_SMALL_GAME_RESULT,

            handler(notification) {
              const {
                win,
                done
              } = notification.getBody() || {};
              const resultSmall = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).RESULT_SMALL);
              this.viewComponent.addChild(resultSmall);
              resultSmall.getChildByName("prop_label_result_num").getComponent(Label).string = Number(win).formatAmountWithCommas(); // 展示一段时间消失

              window.setTimeout(() => {
                resultSmall.isValid && resultSmall.destroy();
                done && done(); // this.sendNotification(BgMediatorConst.START_FLY_BG, {
                //     cb: () => {
                //         this.sendNotification(CommandDefine.BG, {}, BgCommandConst.GAME_TYPE_CHANGE);
                //     }
                // });
              }, 2000);
            }

          }];
        }

        listenerEvent() {
          const comp = this.wrapView.getComponent("phoenix_SlotBg");
          const autoButtonWrap = this.wrapView.getComponent("phoenix_SlotBg").autoLaunch;
          const props_toggle_fast = this.wrapView.getComponent("phoenix_SlotBg").propsToggleFast;
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
            // 小游戏中和已经是自动模式不能长按
            if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)().getCurrentGame() !== (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
              error: Error()
            }), SubGameType) : SubGameType).MAIN || (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)().checkAutoLaunch()) return;
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
                  this.wrapView.getComponent("phoenix_SlotBg").triggeAutoLaunch();
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

            if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)().getNextGame() == 0) {
              // 按钮状态
              this.wrapView.getComponent("phoenix_SlotBg").updateScore(0);
            }
          });
          comp.startButton.on(Node.EventType.TOUCH_CANCEL, () => {
            window.clearInterval(timer);

            if (isLongPress) {
              pressTime = 0;
              isLongPress = false;
              return;
            }
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
              return;
            } // 禁用状态不能点击发送下注


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

            this.wrapView.getComponent("phoenix_SlotBg").triggeAutoLaunch(false);
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

            if (fbp.getDisable() || (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)().checkAutoLaunch()) {
              return;
            }

            comp.scheduleOnce(() => {
              (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager).getInstance().closeMusic(() => {
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).closeSubGame();
              });
            }, 1);
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
          autoButtonWrap.on(Node.EventType.TOUCH_END, () => {
            autoButtonWrap.active = false;
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
            this.setStopMode(toggle);
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
        } // 动画播放一次


        monitorAnimations(Skeleton, onEndCall) {
          Skeleton.setCompleteListener(entry => {
            onEndCall(entry);
          });
        }

        changeBg(gameRunner) {
          this.wrapView.getComponent("phoenix_SlotBg").setBg(gameRunner === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
            error: Error()
          }), SubGameType) : SubGameType).MAIN ? "bg_1" : "bg_2");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cbbfa361396c450a8306e5f362fbd4b669b8bf99.js.map