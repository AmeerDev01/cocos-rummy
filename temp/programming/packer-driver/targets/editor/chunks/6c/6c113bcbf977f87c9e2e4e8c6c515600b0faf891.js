System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, StepNumber, SkeletonAnimationPlayer, AutoLauncherType, starlight_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, Starlight_SmallGame_caculate;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstarlight_Audio(extras) {
    _reporterNs.report("starlight_Audio", "../index", _context.meta, extras);
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
      SkeletonAnimationPlayer = _unresolved_4.default;
    }, function (_unresolved_5) {
      AutoLauncherType = _unresolved_5.AutoLauncherType;
    }, function (_unresolved_6) {
      starlight_Audio = _unresolved_6.starlight_Audio;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1b20kID5VLo7Wcx/7bQV2u", "Starlight_SmallGame_caculate", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Component', 'Label', 'Layout', 'Node', 'ScrollView', 'tween', 'Vec3', 'log', 'Sprite', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Starlight_SmallGame_caculate", Starlight_SmallGame_caculate = (_dec = ccclass('Starlight_SmallGame_caculate'), _dec(_class = class Starlight_SmallGame_caculate extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.ani = true;
          this.propertyNode = {
            props_node_start: new Node(),
            props_node_end: new Node(),
            props_label_goldNum: new Label(),
            props_label_sgNum: new Label(),
            props_calcuate_box: new Node()
          };
          this.props = {
            type: 1,
            total: 0,
            autoLaunchType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE
          };
          this.events = {
            killSelfHandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_calcuate_box.on(Node.EventType.TOUCH_END, e => {
            if (this.ani) {
              this.ani = false;

              if (this.props.type === 1) {
                this.propertyNode.props_label_sgNum && (this.propertyNode.props_label_sgNum.string = this.props.total.formatAmountWithCommas());
              } else {
                this.propertyNode.props_label_goldNum && (this.propertyNode.props_label_goldNum.string = this.props.total.formatAmountWithCommas());
              }

              (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                error: Error()
              }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).FREE_TRANS);
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton), "cx3", false, () => {
                this.scheduleOnce(() => {
                  this.ani = true;
                  this.events && this.events.killSelfHandler();
                }, 1);
              }).playAnimation();
            }
          });
        }

        useProps(key, value) {
          if (key === "type" || key === "total") {
            if (this.props.type === 1) {
              this.propertyNode.props_node_start.active = true;
              this.propertyNode.props_node_end.active = false;
              let ani = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton), "cx", false, () => {
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(0, value.cur, num => {
                  this.propertyNode && this.propertyNode.props_label_sgNum && (this.propertyNode.props_label_sgNum.string = (+num.toFixed(0)).formatAmountWithCommas());
                }).start();
                ani.changeAnimation('cx2', false, () => {
                  if (this.props.autoLaunchType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                    error: Error()
                  }), AutoLauncherType) : AutoLauncherType).NONE) {
                    this.scheduleOnce(() => {
                      this.events && this.events.killSelfHandler();
                    }, 2);
                  }
                });
              });
              ani.playAnimation();
            }

            if (this.props.type === 2) {
              this.propertyNode.props_node_start.active = false;
              this.propertyNode.props_node_end.active = true;
              let ani = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton), "cx", false, () => {
                new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(0, value.cur, num => {
                  this.propertyNode && this.propertyNode.props_label_goldNum && (this.propertyNode.props_label_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas());
                }, () => {}).start();

                if (this.props.autoLaunchType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).NONE) {
                  this.scheduleOnce(() => {
                    this.events && this.events.killSelfHandler();
                  }, 2);
                }
              });
              ani.playAnimation();
            }
          }
        }

        startFalling() {}

        clearTheDrop() {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c113bcbf977f87c9e2e4e8c6c515600b0faf891.js.map