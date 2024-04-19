System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, _dec, _class, _crd, ccclass, property, TurntableHelp;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f1ceBjAc9AE5NeeN8wS7Z9", "TurntableHelp", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'ImageAsset', 'instantiate', 'log', 'native', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'sys', 'systemEvent', 'Texture2D', 'tween', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TurntableHelp", TurntableHelp = (_dec = ccclass('TurntableHelp'), _dec(_class = class TurntableHelp extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_off: new Node()
          };
          this.props = {};
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e1354a66dd4e776f6b7bda7e7f1626c086e73ad0.js.map