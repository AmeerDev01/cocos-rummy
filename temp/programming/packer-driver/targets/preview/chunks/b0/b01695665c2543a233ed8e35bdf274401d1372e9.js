System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, thorv2_Audio, DialogType, GameType, isAuto, StepNumber, config, getNodeByNameDeep, SoundPathDefine, _dec, _class, _crd, ccclass, property, ThorV2_SubGameCalculate;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
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
      thorv2_Audio = _unresolved_3.thorv2_Audio;
    }, function (_unresolved_4) {
      DialogType = _unresolved_4.DialogType;
      GameType = _unresolved_4.GameType;
      isAuto = _unresolved_4.isAuto;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      getNodeByNameDeep = _unresolved_7.getNodeByNameDeep;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09945FMEldMIpUIOmK9JrRe", "ThorV2_SubGameCalculate", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Label', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_SubGameCalculate", ThorV2_SubGameCalculate = (_dec = ccclass('ThorV2_SubGameCalculate'), _dec(_class = class ThorV2_SubGameCalculate extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.stepNumber = void 0;
          this.propertyNode = {
            props_calcuate_box: new Node(),
            props_node_start: new Node(),
            props_node_end: new Node()
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
            onUnMount: () => {},
            onWindowCloseHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onUnMount();
            this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
          });
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === '_setDone') {
              if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).FREE_GAME_ENTRY) {
                this.showFreeEntry();
              } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).FREE_GAME_SETTLEMENT) {
                this.showFreeSettlement();
              }
            }
          }
        }

        showFreeEntry() {
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).stop();
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).THOR_FREE_DIALOG_WAIT, true);
          this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton).setAnimation(0, 'keep', true);
          this.propertyNode.props_node_start.active = true;
          var labelNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_sgNum", this.propertyNode.props_node_start);
          labelNode.getComponent(Label).string = this.props.dialogInfo.params[0]; // 如果是自动模式，就等待关闭窗口

          if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            this.detryCloseWindow();
          }
        }

        showFreeSettlement() {
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).THOR_FREE_SUMMARY);
          this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton).setAnimation(0, 'keep2', true);
          this.propertyNode.props_node_end.active = true;
          var numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_goldNum", this.propertyNode.props_node_end);
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
          this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
            error: Error()
          }), StepNumber) : StepNumber)(start, end, num => {
            if (this.node && this.node.isValid) {
              label.string = Number(num.toFixed(0)).formatAmountWithCommas();
            }
          }, () => this.node && this.node.isValid && done());
          this.stepNumber.set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.numberRollerTime).start();
        }

        detryCloseWindow() {
          this.scheduleOnce(() => {
            if (this.node && this.node.isValid) {
              this.events.onUnMount();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.dialogWinShowTime);
        }

        onDestroy() {
          this.stepNumber && this.stepNumber.stop();
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).longStop();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b01695665c2543a233ed8e35bdf274401d1372e9.js.map