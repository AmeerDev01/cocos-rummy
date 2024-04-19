System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, EffectType, getEffectByType, changeAutoLauncherType, setShowAuthLaunch, AutoLauncherType, setRollSpeed, playBiu, _dec, _class, _crd, ccclass, property, phoenix_authLauncher;

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

  function _reportPossibleCrUseOfplayBiu(extras) {
    _reporterNs.report("playBiu", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
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
      playBiu = _unresolved_7.playBiu;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f348etEJxZDQ6oryAy+q0PW", "phoenix_authLauncher", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_authLauncher", phoenix_authLauncher = (_dec = ccclass('phoenix_authLauncher'), _dec(_class = class phoenix_authLauncher extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_down10: new Node(),
            props_btn_down20: new Node(),
            props_btn_down50: new Node(),
            props_btn_down100: new Node(),
            props_btn_down500: new Node(),
            // props_btn_downFast: new Node(),
            props_btn_downMax: new Node()
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
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_down10.on(Node.EventType.TOUCH_END, () => this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).TIME_10));
          this.propertyNode.props_btn_down20.on(Node.EventType.TOUCH_END, () => this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).TIME_20));
          this.propertyNode.props_btn_down50.on(Node.EventType.TOUCH_END, () => this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).TIME_50));
          this.propertyNode.props_btn_down100.on(Node.EventType.TOUCH_END, () => this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).TIME_100));
          this.propertyNode.props_btn_down500.on(Node.EventType.TOUCH_END, () => this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).TIME_500)); // this.propertyNode.props_btn_downFast.on(Node.EventType.TOUCH_END, () => this.setType(AutoLauncherType.LAMIT_FAST))

          this.propertyNode.props_btn_downMax.on(Node.EventType.TOUCH_END, () => this.setType((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).LIMIT));
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
            if (value.cur === "none") {
              return;
            } else {
              (_crd && playBiu === void 0 ? (_reportPossibleCrUseOfplayBiu({
                error: Error()
              }), playBiu) : playBiu)();
            }
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
//# sourceMappingURL=d631933be66981ae0b85b9c6fa4f167df823e38e.js.map