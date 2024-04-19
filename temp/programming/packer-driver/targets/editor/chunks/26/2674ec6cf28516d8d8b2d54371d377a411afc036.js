System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Toggle, BaseComponent, AutoLauncherType, getAutoCount, isLimit, setAutoLauncherInfo, _dec, _class, _crd, ccclass, property, ThorV2_AuthLauncher;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAutoCount(extras) {
    _reporterNs.report("getAutoCount", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisLimit(extras) {
    _reporterNs.report("isLimit", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLauncherInfo(extras) {
    _reporterNs.report("setAutoLauncherInfo", "../store/actions/game", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      AutoLauncherType = _unresolved_3.AutoLauncherType;
      getAutoCount = _unresolved_3.getAutoCount;
      isLimit = _unresolved_3.isLimit;
    }, function (_unresolved_4) {
      setAutoLauncherInfo = _unresolved_4.setAutoLauncherInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e72ffTT9CREQqkZWfd7jjN7", "ThorV2_AuthLauncher", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_AuthLauncher", ThorV2_AuthLauncher = (_dec = ccclass('ThorV2_AuthLauncher'), _dec(_class = class ThorV2_AuthLauncher extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.autoType = (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).TIME_10;
          this.propertyNode = {
            props_btn_confirm: new Node(),
            props_btn_off: new Node(),
            props_btn_auto: new Node()
          };
          this.props = {
            buyAmount: 0
          };
          this.events = {
            onClose: () => {},
            onSendBet: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
            this.events.onClose();
          });
          this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END, () => {
            const count = (_crd && getAutoCount === void 0 ? (_reportPossibleCrUseOfgetAutoCount({
              error: Error()
            }), getAutoCount) : getAutoCount)(this.autoType);
            this.dispatch((_crd && setAutoLauncherInfo === void 0 ? (_reportPossibleCrUseOfsetAutoLauncherInfo({
              error: Error()
            }), setAutoLauncherInfo) : setAutoLauncherInfo)({
              autoLauncherType: this.autoType,
              totalCount: count,
              leftCount: (_crd && isLimit === void 0 ? (_reportPossibleCrUseOfisLimit({
                error: Error()
              }), isLimit) : isLimit)(this.autoType) ? 1 : count - 1
            })); // egyptv2_Audio.playOneShot(SoundPathDefine.biu)
            // this.dispatch(setBetDropDownList(false));

            this.events.onSendBet();
            this.events.onClose();
          });
          this.propertyNode.props_btn_auto.children.forEach(v => {
            v.on(Toggle.EventType.TOGGLE, e => {
              if (e.isChecked) {
                this.autoType = e.node.name;
              }
            });
          });
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {}
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2674ec6cf28516d8d8b2d54371d377a411afc036.js.map