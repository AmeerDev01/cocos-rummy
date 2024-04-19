System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, instantiate, Crash_ViewBase, _dec, _class, _crd, ccclass, property, Crash_Dotted_lineLayer;

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
      Label = _cc.Label;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5106aedkQpE6LDmHgSPDSEm", "Crash_Dotted_lineLayer", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'instantiate', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Dotted_lineLayer", Crash_Dotted_lineLayer = (_dec = ccclass('Dotted_lineLayer'), _dec(_class = class Crash_Dotted_lineLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        init(seconds, total) {
          this._nodes['dot_box'].destroyAllChildren();

          let quotient = Math.floor(total);

          for (let i = 1; i <= quotient + 4; i++) {
            let node = instantiate(this._nodes['dot_item']);
            node.active = true;
            node.getChildByName('Label').getComponent(Label).string = i + 'X';

            this._nodes['dot_box'].addChild(node);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca26874a037da22072f464235e957da99d9d9e25.js.map