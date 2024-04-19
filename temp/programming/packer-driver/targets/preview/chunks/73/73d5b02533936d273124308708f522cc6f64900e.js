System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, Toggle, ToggleContainer, BaseComponent, EffectType, getEffectByType, changeAutoLauncherType, setShowAuthLaunch, AutoLauncherType, setRollSpeed, initToggle, _dec, _class, _crd, ccclass, property, Fruit777_AuthLauncher;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetEffectByType(extras) {
    _reporterNs.report("getEffectByType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetShowAuthLaunch(extras) {
    _reporterNs.report("setShowAuthLaunch", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollSpeed(extras) {
    _reporterNs.report("setRollSpeed", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../../utils/tool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      ToggleContainer = _cc.ToggleContainer;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      EffectType = _unresolved_3.EffectType;
      getEffectByType = _unresolved_3.getEffectByType;
    }, function (_unresolved_4) {
      changeAutoLauncherType = _unresolved_4.changeAutoLauncherType;
      setShowAuthLaunch = _unresolved_4.setShowAuthLaunch;
    }, function (_unresolved_5) {
      AutoLauncherType = _unresolved_5.AutoLauncherType;
    }, function (_unresolved_6) {
      setRollSpeed = _unresolved_6.setRollSpeed;
    }, function (_unresolved_7) {
      initToggle = _unresolved_7.initToggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30511nDMQZJ1LShY5v4DVOW", "Fruit777_AuthLauncher", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Toggle', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fruit777_AuthLauncher", Fruit777_AuthLauncher = (_dec = ccclass('Fruit777_AuthLauncher'), _dec(_class = class Fruit777_AuthLauncher extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_down10: new Node(),
            props_btn_down20: new Node(),
            props_btn_down50: new Node(),
            props_btn_down100: new Node(),
            props_btn_down500: new Node(),
            // props_btn_downFast: new Node(),
            props_btn_downMax: new Node(),
            props_btn_off: new Button(),
            props_btn_auto: new ToggleContainer(),
            props_btn_confirm: new Button()
          };
          this.props = {
            isShowAutoLaunch: false,
            isWaiting: true,
            autoLauncherType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {
            thenAutoLaunchType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).TIME_10
          };
        }

        bindEvent() {
          // this.propertyNode.props_btn_down10.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_10))
          // this.propertyNode.props_btn_down20.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_20))
          // this.propertyNode.props_btn_down50.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_50))
          // this.propertyNode.props_btn_down100.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_100))
          // this.propertyNode.props_btn_down500.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.TIME_500))
          // this.propertyNode.props_btn_downMax.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.LIMIT))
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_btn_auto.node, this.node, new Fruit777_AuthLauncher.EventHandler(), "Fruit777_AuthLauncher", "changeToggleCallback");
          this.propertyNode.props_btn_confirm.node.on(Node.EventType.TOUCH_END, () => {
            this.setType(this.state.thenAutoLaunchType);
          });
          this.propertyNode.props_btn_off.node.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
              error: Error()
            }), setShowAuthLaunch) : setShowAuthLaunch)(false));
          });
        }

        useProps(key, value) {
          if (key === "isWaiting") {// console.log("isWaiting", this.props.isWaiting)
          }

          if (key === "isShowAutoLaunch") {
            if (this.props.isShowAutoLaunch) {
              this.show();
            } else {
              this.hide();
            }
          }

          if (key === "autoLauncherType") {
            console.log(value.cur);
            this.updateCheckType();
          }
        }

        setType(autoLauncherType) {
          this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
            error: Error()
          }), changeAutoLauncherType) : changeAutoLauncherType)(autoLauncherType));
          this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
            error: Error()
          }), setShowAuthLaunch) : setShowAuthLaunch)(false));

          if (autoLauncherType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).LAMIT_FAST) {
            this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
              error: Error()
            }), setRollSpeed) : setRollSpeed)(1.5));
          } else {
            this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
              error: Error()
            }), setRollSpeed) : setRollSpeed)(1));
          }
        }

        show() {
          this.node.active = true;
          (_crd && getEffectByType === void 0 ? (_reportPossibleCrUseOfgetEffectByType({
            error: Error()
          }), getEffectByType) : getEffectByType)((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).EFFECT1)(this.node).enter().then(() => {});
        }

        hide() {
          (_crd && getEffectByType === void 0 ? (_reportPossibleCrUseOfgetEffectByType({
            error: Error()
          }), getEffectByType) : getEffectByType)((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
            error: Error()
          }), EffectType) : EffectType).EFFECT1)(this.node).out(false).then(() => {
            this.node.active = false;
          });
        }

        changeToggleCallback(event, customEventData) {
          switch (event.target.getSiblingIndex()) {
            case 0:
              this.setState({
                "thenAutoLaunchType": (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).TIME_10
              });
              break;

            case 1:
              this.setState({
                "thenAutoLaunchType": (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).TIME_20
              });
              break;

            case 2:
              this.setState({
                "thenAutoLaunchType": (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).TIME_50
              });
              break;

            case 3:
              this.setState({
                "thenAutoLaunchType": (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).TIME_100
              });
              break;

            case 4:
              this.setState({
                "thenAutoLaunchType": (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).TIME_500
              });
              break;

            case 5:
              this.setState({
                "thenAutoLaunchType": (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).LIMIT
              });
              break;
          }
        }

        updateCheckType() {
          switch (this.props.autoLauncherType) {
            case (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).TIME_10:
              this.propertyNode.props_btn_down10.getComponent(Toggle).isChecked = true;
              break;

            case (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).TIME_20:
              this.propertyNode.props_btn_down20.getComponent(Toggle).isChecked = true;
              break;

            case (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).TIME_50:
              this.propertyNode.props_btn_down50.getComponent(Toggle).isChecked = true;
              break;

            case (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).TIME_100:
              this.propertyNode.props_btn_down100.getComponent(Toggle).isChecked = true;
              break;

            case (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).TIME_500:
              this.propertyNode.props_btn_down500.getComponent(Toggle).isChecked = true;
              break;

            case (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).LIMIT:
              this.propertyNode.props_btn_downMax.getComponent(Toggle).isChecked = true;
              break;
          }
        }

        bindUI() {
          this.node.active = false;
          this.updateCheckType();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=73d5b02533936d273124308708f522cc6f64900e.js.map