System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, prefabDefine, skeletalDefine, spriteDefine, soundDefine, _crd, bundlePkgName, fileMap;

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprefabDefine(extras) {
    _reporterNs.report("prefabDefine", "./prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfskeletalDefine(extras) {
    _reporterNs.report("skeletalDefine", "./skeletalDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfspriteDefine(extras) {
    _reporterNs.report("spriteDefine", "./spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsoundDefine(extras) {
    _reporterNs.report("soundDefine", "./soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      prefabDefine = _unresolved_2.default;
    }, function (_unresolved_3) {
      skeletalDefine = _unresolved_3.default;
    }, function (_unresolved_4) {
      spriteDefine = _unresolved_4.default;
    }, function (_unresolved_5) {
      soundDefine = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfe9eDNJwZFd7qJFBDWBM8C", "index", undefined);

      bundlePkgName = "hall";
      fileMap = [...(_crd && prefabDefine === void 0 ? (_reportPossibleCrUseOfprefabDefine({
        error: Error()
      }), prefabDefine) : prefabDefine)(bundlePkgName), ...(_crd && skeletalDefine === void 0 ? (_reportPossibleCrUseOfskeletalDefine({
        error: Error()
      }), skeletalDefine) : skeletalDefine)(bundlePkgName), ...(_crd && spriteDefine === void 0 ? (_reportPossibleCrUseOfspriteDefine({
        error: Error()
      }), spriteDefine) : spriteDefine)(bundlePkgName), ...(_crd && soundDefine === void 0 ? (_reportPossibleCrUseOfsoundDefine({
        error: Error()
      }), soundDefine) : soundDefine)(bundlePkgName)];

      _export("default", fileMap);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a4af83b8df7fe909b01c7a18df9ef2fa6313af2e.js.map