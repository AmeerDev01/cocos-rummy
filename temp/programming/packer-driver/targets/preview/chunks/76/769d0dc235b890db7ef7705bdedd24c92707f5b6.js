System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, BaseComponent, _dec, _class, _crd, ccclass, property, Fish_Rotation;

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
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e16eeAhsaFPJLF1gyS9qqj8", "Fish_Rotation", undefined);

      __checkObsolete__(['Label', 'Node', 'Sprite', 'Toggle', 'Vec3', '_decorator', 'instantiate', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish_Rotation", Fish_Rotation = (_dec = ccclass('Fish_Rotation'), _dec(_class = class Fish_Rotation extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {};
          this.props = {};
          this.events = {
            onClose: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClose();
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
//# sourceMappingURL=769d0dc235b890db7ef7705bdedd24c92707f5b6.js.map