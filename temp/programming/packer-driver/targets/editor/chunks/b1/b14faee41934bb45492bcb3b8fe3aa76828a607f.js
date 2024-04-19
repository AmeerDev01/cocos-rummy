System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Crash_ViewBase, ViewType, _dec, _class, _crd, ccclass, property, Crash_TipsLayer;

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "./Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewType(extras) {
    _reporterNs.report("ViewType", "./Crash_ViewBase", _context.meta, extras);
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
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
      ViewType = _unresolved_2.ViewType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c487e/DJX1LP7o1ve3TTJ5u", "Crash_TipsLayer", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Crash_TipsLayer = (_dec = ccclass('CrashTipsLayer'), _dec(_class = class Crash_TipsLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        _init() {
          console.log("TipsLayer init");
          this._viewType = (_crd && ViewType === void 0 ? (_reportPossibleCrUseOfViewType({
            error: Error()
          }), ViewType) : ViewType).Tips;

          super._init();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b14faee41934bb45492bcb3b8fe3aa76828a607f.js.map