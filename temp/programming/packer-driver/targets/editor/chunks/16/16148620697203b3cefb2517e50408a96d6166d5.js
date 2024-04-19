System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GodWealth_BaseComponent, _dec, _class, _crd, ccclass, property, GodWealth_FlyBg;

  function _reportPossibleCrUseOfGodWealth_BaseComponent(extras) {
    _reporterNs.report("GodWealth_BaseComponent", "./GodWealth_BaseComponent", _context.meta, extras);
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
      GodWealth_BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5c9dqBfshDKLUY/Wyi1ULd", "GodWealth_FlyBg", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_FlyBg", GodWealth_FlyBg = (_dec = ccclass('GodWealth_FlyBg'), _dec(_class = class GodWealth_FlyBg extends (_crd && GodWealth_BaseComponent === void 0 ? (_reportPossibleCrUseOfGodWealth_BaseComponent({
        error: Error()
      }), GodWealth_BaseComponent) : GodWealth_BaseComponent) {
        start() {
          this.mirrorImage();
        }

        bindEvent() {}

        bindUI() {
          this.node.setSiblingIndex(1000);
        }

        mirrorImage() {
          const bl = Math.random() >= 0.5;
          this.node.getChildByName('caishenguochang').setScale(bl ? -1 : 1, 1);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16148620697203b3cefb2517e50408a96d6166d5.js.map