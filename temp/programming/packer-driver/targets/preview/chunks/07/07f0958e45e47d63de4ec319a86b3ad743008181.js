System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, startUp, _dec, _class, _crd, ccclass, property, GodWealthV2_senceStartUp;

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

      _cclegacy._RF.push({}, "f7c407bViJPzpqagNB+j30z", "GodWealthV2_senceStartUp", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealthV2_senceStartUp", GodWealthV2_senceStartUp = (_dec = ccclass('GodWealthV2_senceStartUp'), _dec(_class = class GodWealthV2_senceStartUp extends Component {
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
//# sourceMappingURL=07f0958e45e47d63de4ec319a86b3ad743008181.js.map