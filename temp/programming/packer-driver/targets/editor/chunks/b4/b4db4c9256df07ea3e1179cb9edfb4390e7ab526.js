System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sp, loopFiles, _crd, SkeletalPathDefine;

  function _reportPossibleCrUseOfloopFiles(extras) {
    _reporterNs.report("loopFiles", "../../../base/SourceManage", _context.meta, extras);
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

      _cclegacy._RF.push({}, "28203C71MVO0KEoPGDLP/4m", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["icon_tongqian"] = "atlas/rollerIcon/tongqian/skeleton";
        SkeletalPathDefine["scatter"] = "atlas/rollerIcon/scatter/gxfc_scatter";
        SkeletalPathDefine["icon_bianpao"] = "atlas/rollerIcon/bianpao/skeleton";
        SkeletalPathDefine["icon_yupei"] = "atlas/rollerIcon/yupei/skeleton";
        SkeletalPathDefine["icon_gu"] = "atlas/rollerIcon/gu/skeleton";
        SkeletalPathDefine["icon_shouwa"] = "atlas/rollerIcon/shouwa/gxfc_shouwa";
        SkeletalPathDefine["icon_xiwa"] = "atlas/rollerIcon/xiwa/gxfc_xiwa";
        SkeletalPathDefine["icon_bai_wild"] = "atlas/rollerIcon/baifa/baifa";
        SkeletalPathDefine["icon_jin_wild"] = "atlas/rollerIcon/fa/gxfc_baida";
        SkeletalPathDefine["icon_fushen"] = "atlas/rollerIcon/fushen/gxfc_fushen";
        SkeletalPathDefine["icon_caishen"] = "atlas/rollerIcon/heifuzi/gxfc_caishen";
        return SkeletalPathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, sp.SkeletonData, SkeletalPathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b4db4c9256df07ea3e1179cb9edfb4390e7ab526.js.map