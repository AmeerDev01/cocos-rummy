System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Crash_Main, _crd;

  function _reportPossibleCrUseOfCrash_Main(extras) {
    _reporterNs.report("Crash_Main", "./Crash_Main", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Crash_Main = _unresolved_2.Crash_Main;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "acbf3D1tgBLtZaewl78NHB7", "StartUp", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node']);

      _export("default", boardNode => {
        let Main = new (_crd && Crash_Main === void 0 ? (_reportPossibleCrUseOfCrash_Main({
          error: Error()
        }), Crash_Main) : Crash_Main)();
        Main.init(boardNode);
        return () => {
          Main.stopCrash_WsManage();
        };
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a8f31ec71ef39ef9948daaf470ebb3afa2ac5c7.js.map