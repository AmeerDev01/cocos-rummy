System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, phoenix_BaseComponent, _dec, _class, _crd, ccclass, property, phoenix_FlyBg;

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4dadhAImRIeISDmlDe4OI7", "phoenix_FlyBg", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_FlyBg", phoenix_FlyBg = (_dec = ccclass('phoenix_FlyBg'), _dec(_class = class phoenix_FlyBg extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
        start() {
          this.mirrorImage();
        }

        bindEvent() {}

        bindUI() {
          this.node.setSiblingIndex(1000);
        }

        mirrorImage() {
          var bl = Math.random() >= 0.5;
          this.node.getChildByName('caishenguochang').setScale(bl ? -1 : 1, 1);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=13fe0f3baf363982ba404587e34d0e2f33d349d0.js.map