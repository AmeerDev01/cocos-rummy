System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tween, BaseComponent, _dec, _class, _crd, ccclass, property, BlessedWealthy_popup;

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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72ba3VVQrBF2a97DbZbUY7R", "BlessedWealthy_popup", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessedWealthy_popup", BlessedWealthy_popup = (_dec = ccclass('BlessedWealthy_popup'), _dec(_class = class BlessedWealthy_popup extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {};
          this.props = {};
          this.events = {
            closeHandler: () => {}
          };
        }

        start() {
          this.destroyView();
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {}

        bindUI() {}

        destroyView() {
          tween(this.node).delay(2).call(() => {
            this.events.closeHandler();
          }).start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99ab7e8e0f8047ccfe773fa8c847835535651d96.js.map