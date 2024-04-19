System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, Toggle, BaseComponent, EffectType, getEffectByType, changeAutoLauncherType, setShowAuthLaunch, AutoLauncherType, setRollSpeed, _dec, _class, _crd, ccclass, property, Thor_AuthLauncher;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ba87aD8jtMj5dXUgfmvwuv", "Thor_AuthLauncher", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_AuthLauncher", Thor_AuthLauncher = (_dec = ccclass('Thor_AuthLauncher'), _dec(_class = class Thor_AuthLauncher extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            // props_btn_down10: new Node(),
            // props_btn_down20: new Node(),
            // props_btn_down50: new Node(),
            // props_btn_down100: new Node(),
            // props_btn_down500: new Node(),
            // props_btn_downFast: new Node(),
            // props_btn_downMax: new Node(),
            props_btn_auto: new Node(),
            props_btn_confirm: new Node(),
            props_btn_off: new Node()
          };
          this.selectedNode = void 0;
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
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_auto.children.forEach(toggle => {
            toggle.getComponent(Toggle).node.on(Node.EventType.TOUCH_END, this.onToggleClick, this);
          });
          this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END, () => {
            this.currentSelection(this.selectedNode && this.selectedNode.name);
          });
          this.propertyNode.props_btn_off.getComponent(Button).node.on(Button.EventType.CLICK, () => {
            this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
              error: Error()
            }), setShowAuthLaunch) : setShowAuthLaunch)(false));
          });
        }

        useProps(key, value) {
          if (key === "isWaiting") {//console.log("isWaiting", this.props.isWaiting)
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
          }
        }

        currentSelection(name) {
          switch (name) {
            case 'props_btn_down10':
              this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).TIME_10);
              break;

            case 'props_btn_down20':
              this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).TIME_20);
              break;

            case 'props_btn_down50':
              this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).TIME_50);
              break;

            case 'props_btn_down100':
              this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).TIME_100);
              break;

            case 'props_btn_down500':
              this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).TIME_500);
              break;

            case 'props_btn_downMax':
              this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).LIMIT);
              break;

            default:
              this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).TIME_10);
          }
        }

        onToggleClick(event) {
          // 获取点击的 Toggle 按钮
          var clickedToggle = event.target.getComponent(Toggle);

          if (!clickedToggle.isChecked) {
            clickedToggle.isChecked = true;
            this.selectedNode = event.target;
            return;
          } // 取消其他 Toggle 按钮的选中状态


          this.propertyNode.props_btn_auto.children.forEach(toggle => {
            if (toggle !== clickedToggle) {
              toggle.getComponent(Toggle).isChecked = false;
            }
          });
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

        bindUI() {
          this.node.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a1cd27970c00d2d1ff004e3d8ad74043c247f74.js.map