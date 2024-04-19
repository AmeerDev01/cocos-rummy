System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, StepNumber, AutoLauncherType, _dec, _class, _crd, ccclass, property, Thor_SmallGame_caculate;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be285vCnLVC/ZUM5l9gaK3X", "Thor_SmallGame_caculate", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Component', 'Label', 'Layout', 'Node', 'ScrollView', 'tween', 'Vec3', 'log', 'Sprite', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_SmallGame_caculate", Thor_SmallGame_caculate = (_dec = ccclass('Thor_SmallGame_caculate'), _dec(_class = class Thor_SmallGame_caculate extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
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
            if (this.props.type === 1) {
              this.propertyNode.props_label_sgNum && (this.propertyNode.props_label_goldNum.string = this.props.total.formatAmountWithCommas());
            } else {
              this.propertyNode.props_label_goldNum && (this.propertyNode.props_label_goldNum.string = this.props.total.formatAmountWithCommas());
            }

            this.scheduleOnce(() => {
              this.events && this.events.killSelfHandler();
            }, 1);
          });
        }

        useProps(key, value) {
          if (key === "type" || key === "total") {
            if (this.props.type === 1) {
              this.propertyNode.props_node_start.active = true;
              this.propertyNode.props_node_end.active = false;
              this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton).setAnimation(0, "keep", true);
              new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                error: Error()
              }), StepNumber) : StepNumber)(0, value.cur, num => {
                this.propertyNode && this.propertyNode.props_label_sgNum && (this.propertyNode.props_label_sgNum.string = (+num.toFixed(0)).formatAmountWithCommas());
              }, () => {
                if (this.props.autoLaunchType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).NONE) {
                  this.scheduleOnce(() => {
                    this.events && this.events.killSelfHandler();
                  }, 2);
                }
              }).start();
            }

            if (this.props.type === 2) {
              this.propertyNode.props_node_start.active = false;
              this.propertyNode.props_node_end.active = true;
              this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton).setAnimation(0, "keep2", true);
              new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                error: Error()
              }), StepNumber) : StepNumber)(0, value.cur, num => {
                this.propertyNode && this.propertyNode.props_label_goldNum && (this.propertyNode.props_label_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas());
              }, () => {
                if (this.props.autoLaunchType !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).NONE) {
                  this.scheduleOnce(() => {
                    this.events && this.events.killSelfHandler();
                  }, 2);
                }
              }).start();
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
//# sourceMappingURL=8bf0c814aa7d35d81ea835222acb4c0ccadaf795.js.map