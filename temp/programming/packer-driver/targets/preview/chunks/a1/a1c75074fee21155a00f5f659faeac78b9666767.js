System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, prefabDefine, spriteDefine, skeletonDefine, soundPathDefine, _crd, bundlePkgName, prefabDefines, spriteDefines, skeletonDefines, soundPathDefines, fileMap;

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprefabDefine(extras) {
    _reporterNs.report("prefabDefine", "./prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfspriteDefine(extras) {
    _reporterNs.report("spriteDefine", "./spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfskeletonDefine(extras) {
    _reporterNs.report("skeletonDefine", "./skeletonDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsoundPathDefine(extras) {
    _reporterNs.report("soundPathDefine", "./soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      prefabDefine = _unresolved_2.default;
    }, function (_unresolved_3) {
      spriteDefine = _unresolved_3.default;
    }, function (_unresolved_4) {
      skeletonDefine = _unresolved_4.default;
    }, function (_unresolved_5) {
      soundPathDefine = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25c55p9YHhACKsgNObyGoMQ", "index", undefined);

      bundlePkgName = "common";
      prefabDefines = (_crd && prefabDefine === void 0 ? (_reportPossibleCrUseOfprefabDefine({
        error: Error()
      }), prefabDefine) : prefabDefine)(bundlePkgName);
      spriteDefines = (_crd && spriteDefine === void 0 ? (_reportPossibleCrUseOfspriteDefine({
        error: Error()
      }), spriteDefine) : spriteDefine)(bundlePkgName);
      skeletonDefines = (_crd && skeletonDefine === void 0 ? (_reportPossibleCrUseOfskeletonDefine({
        error: Error()
      }), skeletonDefine) : skeletonDefine)(bundlePkgName);
      soundPathDefines = (_crd && soundPathDefine === void 0 ? (_reportPossibleCrUseOfsoundPathDefine({
        error: Error()
      }), soundPathDefine) : soundPathDefine)(bundlePkgName);
      fileMap = [...prefabDefines, ...spriteDefines, ...skeletonDefines, ...soundPathDefines];

      _export("default", fileMap);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1c75074fee21155a00f5f659faeac78b9666767.js.map