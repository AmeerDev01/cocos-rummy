System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sp, loopFiles, _crd, SkeletonPathDefine;

  function _reportPossibleCrUseOfloopFiles(extras) {
    _reporterNs.report("loopFiles", "../../base/SourceManage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9afbds45RJMJoGyO0dxKtO", "skeletonDefine", undefined);

      __checkObsolete__(['sp']);

      _export("SkeletonPathDefine", SkeletonPathDefine = /*#__PURE__*/function (SkeletonPathDefine) {
        SkeletonPathDefine["egg"] = "gift/car/jidan";
        SkeletonPathDefine["durian"] = "gift/car/liulian";
        SkeletonPathDefine["rose"] = "gift/car/meigui";
        SkeletonPathDefine["pan"] = "gift/car/pdg";
        SkeletonPathDefine["beer"] = "gift/car/pjgb";
        SkeletonPathDefine["money"] = "gift/car/qian";
        SkeletonPathDefine["bucket"] = "gift/car/shuitong";
        SkeletonPathDefine["shoe"] = "gift/car/tuoxie";
        SkeletonPathDefine["kiss"] = "gift/car/wen";
        SkeletonPathDefine["cock"] = "gift/car/zhuaji";
        SkeletonPathDefine["brick"] = "gift/car/zhuantou";
        SkeletonPathDefine["tomato"] = "gift/car/xihongshi";
        return SkeletonPathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, sp.SkeletonData, SkeletonPathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63b6b76dc92a6f42d0436b60f288300a42548b13.js.map