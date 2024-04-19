System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, instantiate, Crash_ViewBase, _dec, _class, _crd, ccclass, property, Crash_Pre_dotLayer;

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

      _cclegacy._RF.push({}, "447fezG/glGHa156ZCekNXS", "Crash_Pre_dotLayer", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Pre_dotLayer", Crash_Pre_dotLayer = (_dec = ccclass('Pre_dotLayer'), _dec(_class = class Crash_Pre_dotLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        init(seconds, total) {
          this._nodes['pre_box'].destroyAllChildren();

          let quotient = Math.floor(total);

          for (let i = 1; i <= quotient + 10; i++) {
            let node = instantiate(this._nodes['pre_item']);
            node.active = true;
            node.getChildByName('dot_label').getComponent(Label).string = i + 'S';

            this._nodes['pre_box'].addChild(node);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=725d20fbf808ed99315d05e49e0c0a27630d6163.js.map