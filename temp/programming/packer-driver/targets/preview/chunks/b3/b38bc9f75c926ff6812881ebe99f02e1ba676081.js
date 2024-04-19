System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, tween, BaseComponent, StepNumber, config, thorv2_Audio, GameType, SoundPathDefine, _dec, _class, _crd, ccclass, property, ThorV2_DialogWin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      StepNumber = _unresolved_3.default;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      thorv2_Audio = _unresolved_5.thorv2_Audio;
    }, function (_unresolved_6) {
      GameType = _unresolved_6.GameType;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c08f5h7s8VFjZsmXFiFK05R", "ThorV2_DialogWin", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'sp', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_DialogWin", ThorV2_DialogWin = (_dec = ccclass('ThorV2_DialogWin'), _dec(_class = class ThorV2_DialogWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.stepNumber = void 0;
          this.isStepNumberOver = false;
          this.propertyNode = {
            props_layout_goldMax: new Node(),
            props_layout_goldMin: new Node(),
            props_bigWin: new Node(),
            props_number: new Label()
          };
          this.props = {
            winningConfig: null,
            amount: 0,
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
            if (this.stepNumber && !this.isStepNumberOver) {
              this.stepNumber.stop();
            }
          });
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === '_setDone') {
              this.handle();
            }
          }
        }

        handle() {
          var winType = this.props.winningConfig.wintype;
          var defaultSkin = this.props.winningConfig.defaultSkin;
          this.playBigSound(defaultSkin);
          this.propertyNode.props_layout_goldMax.active = winType === "big";
          this.propertyNode.props_layout_goldMin.active = winType !== "big";
          var gameGoldNode = winType === "big" ? this.propertyNode.props_layout_goldMax : this.propertyNode.props_layout_goldMin;
          var startName = winType === "big" ? 'start' : 'shart';
          var titleSkeleton = this.propertyNode.props_bigWin.getComponent(sp.Skeleton);
          titleSkeleton.setCompleteListener(e => {
            if (e.animation.name === 'start') {
              this.startStepNumber(this.propertyNode.props_number, 0, this.props.amount, () => {
                this.isStepNumberOver = true;
                titleSkeleton.timeScale = 3;
              });
              titleSkeleton.setAnimation(0, 'keep', true);
            } else if (e.animation.name === 'keep') {
              if (this.isStepNumberOver) {
                this.playBigEndSound(defaultSkin);
                titleSkeleton.timeScale = 1;
                titleSkeleton.setAnimation(0, 'end', false);
                this.showOrHideNode(this.propertyNode.props_number, false);
              }
            } else if (e.animation.name === 'end') {// this.events.onUnMount();
              // this.events.onWindowCloseHandler();
            }
          });
          gameGoldNode.children.forEach(v => {
            var sk = v.getComponent(sp.Skeleton);
            sk.setCompleteListener(e => {
              if (e.animation.name === startName) {
                sk.setAnimation(0, 'keep', true);
              } else if (e.animation.name === 'keep') {
                if (this.isStepNumberOver) {
                  sk.setAnimation(0, 'end', false);
                }
              } else if (e.animation.name === 'end') {
                if (this.node && this.node.isValid) {
                  this.events.onUnMount();
                  this.events.onWindowCloseHandler();
                }
              }
            });
          });
          titleSkeleton.setSkin(defaultSkin);
          titleSkeleton.setAnimation(0, "start", false);
          this.setGoldSkeleton(gameGoldNode, startName, false);
        }

        setGoldSkeleton(gameGoldNode, animationName, loop) {
          gameGoldNode.children.forEach(v => {
            v.getComponent(sp.Skeleton).setAnimation(0, animationName, loop);
          });
        }

        playBigSound(defaultSkin) {
          if (defaultSkin === 'big') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BIGWIN);
          } else if (defaultSkin === 'MEGA') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BIGWIN);
          } else if (defaultSkin === 'SUPER') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).SUPERWIN);
          } else if (defaultSkin === 'EPIC') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).EPICWIN);
          } else if (defaultSkin === 'ULTIMATE') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).ULTIMATEWIN);
          }
        }

        playBigEndSound(defaultSkin) {
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).longStop();

          if (defaultSkin === 'big') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BIGWIN_OV);
          } else if (defaultSkin === 'MEGA') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BIGWIN_OV);
          } else if (defaultSkin === 'SUPER') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).SUPERWIN_OV);
          } else if (defaultSkin === 'EPIC') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).EPICWIN_OV);
          } else if (defaultSkin === 'ULTIMATE') {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).ULTIMATEWIN_OV);
          }
        }

        showOrHideNode(nodePanel, isShow, hideOp) {
          if (hideOp === void 0) {
            hideOp = 0;
          }

          if (isShow && nodePanel.color.a === 255) {
            return;
          }

          if (!isShow && nodePanel.color.a === hideOp) {
            return;
          }

          tween(nodePanel.color).delay(0.8333).to(0.3, {
            a: isShow ? 255 : hideOp
          }).start();
        }

        startStepNumber(label, start, end, done) {
          this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
            error: Error()
          }), StepNumber) : StepNumber)(start, end, num => {
            if (this.node && this.node.isValid) {
              label.string = Number(num.toFixed(0)).formatAmountWithCommas();
            }
          }, () => this.node && this.node.isValid && done());
          this.stepNumber.set(0.5).start();
        }

        detryCloseWindow() {
          this.scheduleOnce(() => {
            if (this.node && this.node.isValid) {
              this.events.onUnMount();
              this.events.onWindowCloseHandler();
            }
          }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.dialogWinShowTime);
        }

        onDestroy() {
          this.stepNumber.stop();
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
//# sourceMappingURL=b38bc9f75c926ff6812881ebe99f02e1ba676081.js.map