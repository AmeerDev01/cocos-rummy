System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, startUp, _dec, _class, _crd, ccclass, property, GodWealth_senceStartUp;

  function _reportPossibleCrUseOfstartUp(extras) {
    _reporterNs.report("startUp", "./index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      startUp = _unresolved_2.startUp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed9bc52fWtAUJ999aKPqjix", "GodWealth_senceStartUp", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_senceStartUp", GodWealth_senceStartUp = (_dec = ccclass('GodWealth_senceStartUp'), _dec(_class = class GodWealth_senceStartUp extends Component {
        start() {
          (_crd && startUp === void 0 ? (_reportPossibleCrUseOfstartUp({
            error: Error()
          }), startUp) : startUp)(this.node);
        }

        onLoad() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab288610dc4c89d736262b2cffaa6923eb6d037b.js.map