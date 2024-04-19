System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, StepNumber, DialogType, GameType, isAuto, getNodeByNameDeep, config, godWealthV2_Audio, SoundPathDefine, StepNumberV2, _dec, _class, _crd, ccclass, property, GodWealthV2_DialogWin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogInfo(extras) {
    _reporterNs.report("DialogInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisAuto(extras) {
    _reporterNs.report("isAuto", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgodWealthV2_Audio(extras) {
    _reporterNs.report("godWealthV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      StepNumber = _unresolved_3.default;
    }, function (_unresolved_4) {
      DialogType = _unresolved_4.DialogType;
      GameType = _unresolved_4.GameType;
      isAuto = _unresolved_4.isAuto;
    }, function (_unresolved_5) {
      getNodeByNameDeep = _unresolved_5.getNodeByNameDeep;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      godWealthV2_Audio = _unresolved_7.godWealthV2_Audio;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }, function (_unresolved_9) {
      StepNumberV2 = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8c309RFedGeqjZRjmZ+oEP", "GodWealthV2_DialogWin", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealthV2_DialogWin", GodWealthV2_DialogWin = (_dec = ccclass('GodWealthV2_DialogWin'), _dec(_class = class GodWealthV2_DialogWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.propertyNode = {
            props_bigWin: new Node(),
            props_jackpot: new Node(),
            props_megaWin: new Node(),
            props_superWin: new Node(),
            props_smallGame_win: new Node(),
            props_free_spins: new Node(),
            props_freeGame_win: new Node(),
            props_baohe_box: new Node(),
            props_baoHeGame_win: new Node()
          };
          this.props = {
            dialogInfo: null,
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              leftCount: 0
            },
            autoLauncherInfo: null
          };
          this.events = {
            onWindowCloseHandler: dialogType => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            if (this.isFreeGameEntry() || this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.isBaoHeGameSettlement()) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            } else {
              console.log("00000000 this.props.dialogInfo111111111", this.props.dialogInfo);
            }
          });
          this.node.getChildByName('SpriteSplash').on(Node.EventType.TOUCH_END, () => {
            if (this.isFreeGameEntry() || this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.isBaoHeGameSettlement()) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            } else {
              console.log("00000000 this.props.dialogInfo111111111", this.props.dialogInfo);
            }
          });
        }

        isFreeGameEntry() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).FREE_GAME_ENTRY;
        }

        isBaoHeGameEntry() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).BAO_HE_GAME_ENTRY;
        }

        isFreeGameSettlement() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).FREE_GAME_SETTLEMENT;
        }

        isBaoHeGameSettlement() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).BAO_HE_GAME_SETTLEMENT;
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === 'dialogInfo') {
              this.hideAll();

              if (value.cur) {
                this.node.active = true;

                if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).FREE_GAME_ENTRY) {
                  this.showFreeEntry();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BAO_HE_GAME_ENTRY) {
                  this.showBaoHeEntry();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BIG_WIN) {
                  this.showBigWin();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).JACKPOT) {
                  this.showJackpot();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).MEGA_WIN) {
                  this.showMegaWin();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).SUPER_WIN) {
                  this.showSuperWin();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).FREE_GAME_SETTLEMENT) {
                  console.log("this.props.dialogInfo.dialogType", this.props.dialogInfo.dialogType);
                  this.showFreeSettlement();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BAO_HE_GAME_SETTLEMENT) {
                  this.showBaoHeSettlement();
                }
              } else {
                this.node.active = false;
              }
            }
          }
        }

        hideAll() {
          for (const key in this.propertyNode) {
            this.propertyNode[key].active = false;
          }
        }

        showFreeEntry() {
          this.propertyNode.props_smallGame_win.active = true;
          this.propertyNode.props_free_spins.active = true;
          const labelNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_free_spins);
          labelNode.getComponent(Label).string = this.props.dialogInfo.params[0]; // 如果是自动模式，就等待关闭窗口

          console.log(this.props.gameTypeInfo, this.props.autoLauncherInfo); // console.log("isAuto",isAuto(this.props.autoLauncherInfo,this.props.gameTypeInfo));

          if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            this.detryCloseWindow();
          }
        }

        showBaoHeEntry() {
          this.propertyNode.props_smallGame_win.active = true;
          this.propertyNode.props_baohe_box.active = true; // 如果是自动模式，就等待关闭窗口

          if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            this.detryCloseWindow();
          }
        }

        showBigWin() {
          (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
            error: Error()
          }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_bigWin.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_bigWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showJackpot() {
          (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
            error: Error()
          }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_jackpot.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_jackpot);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showMegaWin() {
          (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
            error: Error()
          }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_megaWin.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_megaWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showSuperWin() {
          (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
            error: Error()
          }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_superWin.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_superWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showFreeSettlement() {
          (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
            error: Error()
          }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GAME1_OVER_BG);
          this.propertyNode.props_smallGame_win.active = true;
          this.propertyNode.props_freeGame_win.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_freeGame_win);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            // 如果是自动模式，就等待关闭窗口
            if (this.node && this.node.isValid && (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              this.detryCloseWindow();
            }
          });
        }

        showBaoHeSettlement() {
          (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
            error: Error()
          }), godWealthV2_Audio) : godWealthV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GAME1_OVER_BG);
          this.propertyNode.props_smallGame_win.active = true;
          this.propertyNode.props_baoHeGame_win.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_baoHeGame_win);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            // 如果是自动模式，就等待关闭窗口
            if (this.node && this.node.isValid && (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              this.detryCloseWindow();
            }
          });
        }

        startStepNumber(label, start, end, done) {
          new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
            error: Error()
          }), StepNumber) : StepNumber)(start, end, num => {
            if (this.node && this.node.isValid) {
              label.string = Number(num.toFixed(0)).formatAmountWithCommas();
            }
          }, () => this.node && this.node.isValid && done()).set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.numberRollerTime).start();
        }

        detryCloseWindow() {
          this.scheduleOnce(() => {
            if (this.node && this.node.isValid) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.dialogWinShowTime);
        }

        onDestroy() {
          (_crd && godWealthV2_Audio === void 0 ? (_reportPossibleCrUseOfgodWealthV2_Audio({
            error: Error()
          }), godWealthV2_Audio) : godWealthV2_Audio).longStop();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93912f141df9b0987766918ad846766b56e42028.js.map