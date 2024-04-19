System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, StepNumber, DialogType, GameType, isAuto, getNodeByNameDeep, config, StepNumberV2, phoenixV2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, PhoenixV2_DialogWin;

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

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenixV2_Audio(extras) {
    _reporterNs.report("phoenixV2_Audio", "../index", _context.meta, extras);
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
      phoenixV2_Audio = _unresolved_8.phoenixV2_Audio;
    }, function (_unresolved_9) {
      SoundPathDefine = _unresolved_9.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "740c5VrlBNLNZt5UR81WW5p", "PhoenixV2_DialogWin", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'sp', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoenixV2_DialogWin", PhoenixV2_DialogWin = (_dec = ccclass('PhoenixV2_DialogWin'), _dec(_class = class PhoenixV2_DialogWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.isClick = true;
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.propertyNode = {
            // props_freeEntry: new Node(),
            props_freeSettlement: new Node(),
            props_bigWin: new Node(),
            props_jackpot: new Node(),
            props_megaWin: new Node(),
            props_superWin: new Node(),
            props_yuanBao_totalBet: new Node() // props_btn_sgChoose_25: new Node(),
            // props_btn_sgChoose_20: new Node(),
            // props_btn_sgChoose_15: new Node(),
            // props_btn_sgChoose_13: new Node(),
            // props_btn_sgChoose_10: new Node(),

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
            if (this.isFreeGameEntry() || this.isFreeGameSettlement()) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
          this.node.getChildByName('SpriteSplash').on(Node.EventType.TOUCH_END, () => {
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
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).YUAN_BAO_WIN) {
                  this.showYuanBaoWin();
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

        showFreeEntry() {// const labelNode = getNodeByNameDeep("Label_Number", this.propertyNode.props_freeEntry)
          // labelNode.getComponent(Label).string = this.props.dialogInfo.params[0];
          // this.sgChooseShow()
          // // 如果是自动模式，就等待关闭窗口
          // if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
          // 	this.detryCloseWindow();
          // }
        }

        showBigWin() {
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_bigWin.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_bigWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {// this.detryCloseWindow();
          });
          this.propertyNode.props_bigWin.getChildByName("sk_bw").getComponent(sp.Skeleton).setCompleteListener(() => {
            if (this.node && this.node.isValid) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
        }

        showJackpot() {
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_jackpot.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_jackpot);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          }); // this.propertyNode.props_jackpot.getChildByName("sk_jackpot").getComponent(sp.Skeleton).setCompleteListener(() => {
          // 	if (this.node && this.node.isValid) {
          // 		this.node.destroy();
          // 		this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
          // 	}
          // })
        }

        showMegaWin() {
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_megaWin.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_megaWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {// this.detryCloseWindow();
          });
          this.propertyNode.props_megaWin.getChildByName("sk_mw").getComponent(sp.Skeleton).setCompleteListener(() => {
            if (this.node && this.node.isValid) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          });
        }

        showSuperWin() {
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GET_COIN);
          this.propertyNode.props_superWin.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("number", this.propertyNode.props_superWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {// this.detryCloseWindow();
          });
          this.propertyNode.props_superWin.getChildByName("sk_sw").getComponent(sp.Skeleton).setCompleteListener(() => {
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

        showYuanBaoWin() {
          this.propertyNode.props_yuanBao_totalBet.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("label_total_winNum", this.propertyNode.props_yuanBao_totalBet);
          var numberMul = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("label_total_multipl", this.propertyNode.props_yuanBao_totalBet);
          numberMul.getComponent(Label).string = "X" + this.props.dialogInfo.params[1];
          var skeleton = this.propertyNode.props_yuanBao_totalBet.getChildByName("props_skeleton").getComponent(sp.Skeleton);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          }); // let count = 0;
          // const skeletonPlayer = new SkeletonAnimationPlayer(skeleton, "animation", true, () => { 
          // 	count++
          // 	if (count >= 2) {
          // 		if (this.node && this.node.isValid) {
          // 			this.node.destroy();
          // 			this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
          // 		}
          // 	}
          // })
          // skeletonPlayer.playAnimation()
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

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ee99656582c1d8c4be10ec078f7fe4a037747c8.js.map