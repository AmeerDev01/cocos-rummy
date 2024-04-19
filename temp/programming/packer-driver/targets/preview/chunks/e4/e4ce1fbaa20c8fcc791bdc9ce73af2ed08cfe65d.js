System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, StepNumber, AutoLauncherType, DialogType, GameType, isAuto, getNodeByNameDeep, config, StepNumberV2, GxfcV2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, GxfcV2_DialogWin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGxfcV2_Audio(extras) {
    _reporterNs.report("GxfcV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      StepNumber = _unresolved_3.default;
    }, function (_unresolved_4) {
      AutoLauncherType = _unresolved_4.AutoLauncherType;
      DialogType = _unresolved_4.DialogType;
      GameType = _unresolved_4.GameType;
      isAuto = _unresolved_4.isAuto;
    }, function (_unresolved_5) {
      getNodeByNameDeep = _unresolved_5.getNodeByNameDeep;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      StepNumberV2 = _unresolved_7.default;
    }, function (_unresolved_8) {
      GxfcV2_Audio = _unresolved_8.GxfcV2_Audio;
    }, function (_unresolved_9) {
      SoundPathDefine = _unresolved_9.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44b98MB5Z9Df6dr429+gkS9", "GxfcV2_DialogWin", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GxfcV2_DialogWin", GxfcV2_DialogWin = (_dec = ccclass('GxfcV2_DialogWin'), _dec(_class = class GxfcV2_DialogWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.propertyNode = {
            props_freeEntry: new Node(),
            props_freeSettlement: new Node(),
            props_bigWin: new Node(),
            props_jackpot: new Node(),
            props_megaWin: new Node(),
            props_superWin: new Node()
          };
          this.props = {
            dialogInfo: null,
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
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
            if (this.isFreeGameEntry() || this.isFreeGameSettlement()) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
          this.node.getChildByName("SpriteSplash").on(Node.EventType.TOUCH_END, () => {
            if (this.isFreeGameEntry() || this.isFreeGameSettlement()) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
        }

        isFreeGameEntry() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).FREE_GAME_ENTRY;
        }

        isFreeGameSettlement() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).FREE_GAME_SETTLEMENT;
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === '_setDone') {
              this.hideAll();

              if (this.props.dialogInfo) {
                this.node.active = true;

                if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).FREE_GAME_ENTRY) {
                  this.showFreeEntry();
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
                  this.showFreeSettlement();
                }
              } else {
                this.node.active = false;
              }
            }
          }
        }

        hideAll() {
          for (var key in this.propertyNode) {
            this.propertyNode[key].active = false;
          }
        }

        showFreeEntry() {
          this.propertyNode.props_freeEntry.active = true;
          var labelNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_freeEntry);
          labelNode.getComponent(Label).string = this.props.dialogInfo.params[0]; // 如果是自动模式，就等待关闭窗口

          if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            this.detryCloseWindow();
          }
        }

        showBigWin() {
          (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
            error: Error()
          }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_bigWin.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_bigWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
          this.propertyNode.props_bigWin.getChildByName("sk_bw").getComponent(sp.Skeleton).setCompleteListener(() => {
            if (this.node && this.node.isValid) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
        }

        showJackpot() {
          (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
            error: Error()
          }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_jackpot.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_jackpot);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showMegaWin() {
          (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
            error: Error()
          }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_megaWin.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_megaWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {// this.detryCloseWindow();
          });
          this.propertyNode.props_megaWin.getChildByName("sk_bw").getComponent(sp.Skeleton).setCompleteListener(() => {
            if (this.node && this.node.isValid) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
        }

        showSuperWin() {
          (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
            error: Error()
          }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_superWin.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_superWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
          this.propertyNode.props_superWin.getChildByName("sk_bw").getComponent(sp.Skeleton).setCompleteListener(() => {
            if (this.node && this.node.isValid) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
        }

        showFreeSettlement() {
          this.propertyNode.props_freeSettlement.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_freeSettlement); // new StepNumber(0, this.props.dialogInfo.params[0], (num) => {
          // 	numberLabel.getComponent(Label).string = Number(num.toFixed(0)).formatAmountWithCommas();
          // }).start();

          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            // 如果是自动模式，就等待关闭窗口
            if (this.node && this.node.isValid && (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              this.detryCloseWindow();
            }
          });
        }

        isAuto() {
          // 小游戏中都是自动
          if (this.props.gameTypeInfo.viewGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN && this.props.gameTypeInfo.viewGameType === this.props.gameTypeInfo.currGameType) {
            return true;
          }

          var autoLauncherInfo = this.props.autoLauncherInfo;

          if (autoLauncherInfo) {
            if (autoLauncherInfo.autoLauncherType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              if (autoLauncherInfo.totalCount === -99) {
                return true;
              }

              return autoLauncherInfo.leftCount > 0;
            }
          }

          return false;
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
          }), config) : config).normalRollOption.numberRollerTime).start(); // this.stepNumberV2.start(start, end, (num) => {
          // 	if (this.node && this.node.isValid) {
          // 		label.string = Number(num.toFixed(0)).formatAmountWithCommas();
          // 	}
          // }, () => this.node && this.node.isValid && done(), config.normalRollOption.numberRollerTime);
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
          (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
            error: Error()
          }), GxfcV2_Audio) : GxfcV2_Audio).longStop();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4ce1fbaa20c8fcc791bdc9ce73af2ed08cfe65d.js.map