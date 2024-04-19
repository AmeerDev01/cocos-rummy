System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Prefab, Sprite, Toggle, CommandDefine, PrefabDefine, BaseMediator, SubGameType, AutoLaunchType, StopMode, Egypt_DialogWin, BgCommandConst, getBgProxy, getSocketProxy, AudioManager, SoundList, global, UseSetOption, addToastAction, RollerMediatorConst, sendNativeVibrate, BgMediator, _crd, BgMediatorConst;

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

  function _reportPossibleCrUseOfEgypt_SlotBg(extras) {
    _reporterNs.report("Egypt_SlotBg", "../Component/Egypt_SlotBg", _context.meta, extras);
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

  function _reportPossibleCrUseOfEgypt_DialogWin(extras) {
    _reporterNs.report("Egypt_DialogWin", "../Component/Egypt_DialogWin", _context.meta, extras);
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

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfRollerMediatorConst(extras) {
    _reporterNs.report("RollerMediatorConst", "./RollerMediator", _context.meta, extras);
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
      Sprite = _cc.Sprite;
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
      Egypt_DialogWin = _unresolved_7.Egypt_DialogWin;
    }, function (_unresolved_8) {
      BgCommandConst = _unresolved_8.BgCommandConst;
    }, function (_unresolved_9) {
      getBgProxy = _unresolved_9.getBgProxy;
      getSocketProxy = _unresolved_9.getSocketProxy;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
      SoundList = _unresolved_10.SoundList;
    }, function (_unresolved_11) {
      global = _unresolved_11.global;
    }, function (_unresolved_12) {
      UseSetOption = _unresolved_12.default;
    }, function (_unresolved_13) {
      addToastAction = _unresolved_13.addToastAction;
    }, function (_unresolved_14) {
      RollerMediatorConst = _unresolved_14.RollerMediatorConst;
    }, function (_unresolved_15) {
      sendNativeVibrate = _unresolved_15.sendNativeVibrate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da109OYgklCPrZN2R2lXHPc", "BgMediator", undefined);

      __checkObsolete__(['Node', 'Prefab', 'Sprite', 'Toggle']);

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
        BgMediatorConst["UPDATE_JACKPOT"] = "update_jackpot";
        BgMediatorConst["UPDATE_JACKPOT_TOTAL"] = "update_jackpot_total";
        BgMediatorConst["INITIALIZETHEPANEL"] = "initializethepanel";
        BgMediatorConst["TOGGLESSCROLLINGPANELS"] = "togglesscrollingpanels";
        BgMediatorConst["TOGGLETHESTARTBUTTON"] = "togglethestartbutton";
        BgMediatorConst["INITSCORE"] = "initScore";
        BgMediatorConst["InsufficientBalanceDisplay"] = "InsufficientBalanceDisplay";
        BgMediatorConst["SETGREYOUT"] = "SETGREYOUT";
        return BgMediatorConst;
      }({}));

      _export("default", BgMediator = class BgMediator extends (_crd && BaseMediator === void 0 ? (_reportPossibleCrUseOfBaseMediator({
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
              var pdd = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.egypt ? (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
                error: Error()
              }), UseSetOption) : UseSetOption).Instance().option.gameSet.egypt.betTarget.positionId : 1;
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
              var {
                state
              } = notification.getBody(),
                  comp = this.wrapView.getComponent("Egypt_SlotBg");

              if (state !== 0) {
                comp.setGreyOut('SZX_-', state == 1);
                comp.setGreyOut('SZX_+', state == 2);
              } else {
                comp.setGreyOut('SZX_-', false);
                comp.setGreyOut('SZX_+', false);
              }
            }

          }, {
            name: BgMediatorConst.INITIALIZETHEPANEL,

            handler(notification) {
              this.wrapView.getComponent("Egypt_SlotBg").initSlot();
            }

          }, {
            name: BgMediatorConst.CHANGE_BG,

            handler(notification) {
              var {
                gameType
              } = notification.getBody() || {};
              this.changeBg(gameType);
            }

          }, {
            name: BgMediatorConst.INITSCORE,

            handler(notification) {
              var {
                state
              } = notification.getBody() || {};

              if (state) {
                this.wrapView.getComponent("Egypt_SlotBg").updateScore(0);
              }

              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getNextGame() == 0) {
                this.wrapView.getComponent("Egypt_SlotBg").updateScore(0);
              }
            }

          }, {
            name: BgMediatorConst.START_FLY_BG,

            handler(notification) {
              var flyBgNode = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).FLY_BG);
              this.viewComponent.addChild(flyBgNode);
              flyBgNode.setSiblingIndex(1000);
              window.setTimeout(() => {
                this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                  error: Error()
                }), CommandDefine) : CommandDefine).BG, {}, (_crd && BgCommandConst === void 0 ? (_reportPossibleCrUseOfBgCommandConst({
                  error: Error()
                }), BgCommandConst) : BgCommandConst).AUTO_LAUNCH);
                this.viewComponent.removeChild(flyBgNode);
              }, 3000);
            }

          }, {
            name: BgMediatorConst.UPDATE_NUMBER,

            handler(notification) {// const { betAmount, score } = notification.getBody();
              // (this.wrapView.getComponent("SlotBg") as SlotBg).updateBetAmount(betAmount);
              // (this.wrapView.getComponent("SlotBg") as SlotBg).updateScore(score);
            }

          }, {
            name: BgMediatorConst.UPDATE_BTN_LABEL,

            handler(notification) {
              var {
                frequency
              } = notification.getBody();
              var comp = this.wrapView.getComponent("Egypt_SlotBg");
              comp.setBtnLabel(frequency);
            }

          }, {
            name: BgMediatorConst.UPDATE_AUTO_LAUNCH,

            handler(notification) {
              this.wrapView.getComponent("Egypt_SlotBg").setActiveButton((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getAutoLaunchType());
            }

          }, {
            name: BgMediatorConst.TOGGLETHESTARTBUTTON,

            handler(notification) {
              var {
                state
              } = notification.getBody();

              if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                error: Error()
              }), getBgProxy) : getBgProxy)().getNextGame() == 0) {
                if ((_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().checkAutoLaunch()) {
                  // 是自动
                  var str = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().isUNLIMT() ? "∞" : (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().getAutoLaunchNum() + "/" + (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                    error: Error()
                  }), getBgProxy) : getBgProxy)().getTotal();
                  this.wrapView.getComponent("Egypt_SlotBg").setBtnState(state, 3, str);
                } else {
                  this.wrapView.getComponent("Egypt_SlotBg").setBtnState(state);
                }
              } else {
                // 小游戏
                this.wrapView.getComponent("Egypt_SlotBg").setBtnState(state, 1);
              }
            }

          }, {
            name: BgMediatorConst.UPDATE_GAME_STATUS,

            handler(notification) {
              var comp = this.wrapView.getComponent("Egypt_SlotBg");
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
            name: BgMediatorConst.SHOW_DIALOG_WIN,

            handler(notification) {
              var {
                dialogType,
                amount,
                keepTime,
                done
              } = notification.getBody();
              var dialog = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).DIALOG_WIN);
              this.viewComponent.addChild(dialog);
              var type = dialogType;

              if (dialogType === 'jackpot' && (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getShiftAmount("curr").jackpot == 0) {
                type = 'superWin';
              }

              (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
                error: Error()
              }), sendNativeVibrate) : sendNativeVibrate)(200);
              dialog.getComponent(_crd && Egypt_DialogWin === void 0 ? (_reportPossibleCrUseOfEgypt_DialogWin({
                error: Error()
              }), Egypt_DialogWin) : Egypt_DialogWin).showDialog(dialogType, amount, keepTime || 2000, () => {
                done();
              });
            }

          }, {
            name: BgMediatorConst.UPDATE_JACKPOT,

            handler(notification) {
              var {
                jackPotData
              } = notification.getBody();
              this.wrapView.getComponent("Egypt_SlotBg").setJACKPOT(jackPotData);
            }

          }, {
            name: BgMediatorConst.OPEN_RULE_PANEL,

            handler(notification) {
              var rulePanel = this.getSource((_crd && PrefabDefine === void 0 ? (_reportPossibleCrUseOfPrefabDefine({
                error: Error()
              }), PrefabDefine) : PrefabDefine).RULE_PANEL);
              this.viewComponent.addChild(rulePanel);
            }

          }, {
            name: BgMediatorConst.InsufficientBalanceDisplay,

            handler(notification) {
              var {
                bl
              } = notification.getBody();
              this.wrapView.getComponent("Egypt_SlotBg").Balance_tips(bl);
            }

          }, {
            name: BgMediatorConst.UPDATE_BET_AMOUNT,

            handler(notification) {
              var {
                baseBetAmount,
                lineCount
              } = notification.getBody();
              this.wrapView.getComponent("Egypt_SlotBg").updateBetAmount(baseBetAmount, lineCount);
            }

          }, {
            name: BgMediatorConst.UPDATE_USER_GOLD,

            handler(notification) {
              var {
                state
              } = notification.getBody();
              var gold = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getUserGold(state);
              var comp = this.wrapView.getComponent("Egypt_SlotBg");
              comp.setGold(gold);
            }

          }, {
            name: BgMediatorConst.UPDATE_CURRENT_SCORE,

            handler(notification) {
              var {
                order
              } = notification.getBody() || {};
              var currentScore = (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
                error: Error()
              }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().getCurrentScore(order || "auto");
              this.wrapView.getComponent("Egypt_SlotBg").updateScore(currentScore);
            }

          }, {
            name: BgMediatorConst.UPDATE_JACKPOT_TOTAL,

            handler(notification) {
              var {
                total
              } = notification.getBody();
              var comp = this.wrapView.getComponent("Egypt_SlotBg");

              if (comp) {
                comp.set_jack_total(total);
              }
            }

          }, {
            name: BgMediatorConst.SHOW_TOAST,

            handler(notification) {
              var {
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
              // (toastPanel.getComponent("Egypt_Toast") as Egypt_Toast).showContent(content)
            }

          }, {
            name: BgMediatorConst.TOGGLESSCROLLINGPANELS,

            handler(notification) {
              var {
                gameType,
                done
              } = notification.getBody() || {};
              this.wrapView.getComponent("Egypt_SlotBg").switchAnimations(gameType, done);
            }

          }];
        }

        listenerEvent() {
          var comp = this.wrapView.getComponent("Egypt_SlotBg");
          var autoButtonWrap = this.wrapView.getComponent("Egypt_SlotBg").autoLaunch;
          var props_toggle_fast = this.wrapView.getComponent("Egypt_SlotBg").propsToggleFast;
          props_toggle_fast.getComponent(Toggle).isChecked = false;
          var pressTime = 0;
          var timeLimit = 500; //按压触发自动面板时间

          var timer = 0;
          var isLongPress = false;
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
                var presentGame = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
                  error: Error()
                }), getBgProxy) : getBgProxy)().getNextGame();

                if (presentGame === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                  error: Error()
                }), SubGameType) : SubGameType).MAIN) {
                  this.wrapView.getComponent("Egypt_SlotBg").triggeAutoLaunch();
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

            this.wrapView.getComponent("Egypt_SlotBg").triggeAutoLaunch(false);
            var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)();

            if (fbp.getAutoLaunchType() !== (_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
              error: Error()
            }), AutoLaunchType) : AutoLaunchType).DISABLE) {
              fbp.setAutoLaunchType((_crd && AutoLaunchType === void 0 ? (_reportPossibleCrUseOfAutoLaunchType({
                error: Error()
              }), AutoLaunchType) : AutoLaunchType).DISABLE);
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

            pressTime = 0;
          }); // 点击首页按钮

          comp.homeButton.on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
              error: Error()
            }), getBgProxy) : getBgProxy)();

            if (fbp.getDisable()) {
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
            var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
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
            var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
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
            var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
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
              var fbp = (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
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
          var _gameRunner = gameRunner || (_crd && getSocketProxy === void 0 ? (_reportPossibleCrUseOfgetSocketProxy({
            error: Error()
          }), getSocketProxy) : getSocketProxy)().getTransferGameInfo().gameType();

          this.wrapView.getComponent("Egypt_SlotBg").setBg(_gameRunner === (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
            error: Error()
          }), SubGameType) : SubGameType).MAIN ? "bg_1" : "bg_1"); // (this.wrapView.getComponent("Egypt_SlotBg") as Egypt_SlotBg).setBg("bg_1")
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a84f14311b4352106ff4cda0749134627233c5b.js.map