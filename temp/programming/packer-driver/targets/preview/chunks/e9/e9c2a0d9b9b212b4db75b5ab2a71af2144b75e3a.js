System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, prefabDefine, skeletalDefine, spriteDefine, soundDefine, _crd, bundlePkgName, fileMap;

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

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../../../base/SourceManage", _context.meta, extras);
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

      _cclegacy._RF.push({}, "46a7f2NxVNIMIaeR8EnTE0L", "index", undefined);

      _export("bundlePkgName", bundlePkgName = "PHOENIX111");

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
//# sourceMappingURL=e9c2a0d9b9b212b4db75b5ab2a71af2144b75e3a.js.map