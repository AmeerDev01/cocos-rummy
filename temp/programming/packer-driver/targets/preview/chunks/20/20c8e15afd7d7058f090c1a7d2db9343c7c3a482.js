System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Crash_ViewBase, _dec, _class, _crd, ccclass, property, Crash_Game_settingsLayer;

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
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
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9325bTOLm1OJK11YJzjBRTp", "Crash_Game_settingsLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Game_settingsLayer", Crash_Game_settingsLayer = (_dec = ccclass('Game_settingsLayer'), _dec(_class = class Crash_Game_settingsLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        start() {
          this._nodes['bg'].on(Node.EventType.TOUCH_END, () => {
            this.node.destroy();
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20c8e15afd7d7058f090c1a7d2db9343c7c3a482.js.map