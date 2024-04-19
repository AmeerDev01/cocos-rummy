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

      _cclegacy._RF.push({}, "78397BJP0FOkLB16cnMvw1I", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["TUBIAO_9"] = "icon/9/icon_9";
        SkeletalPathDefine["TUBIAO_10"] = "icon/10/icon_10";
        SkeletalPathDefine["TUBIAO_J"] = "icon/J/icon_j";
        SkeletalPathDefine["TUBIAO_Q"] = "icon/Q/icon_q";
        SkeletalPathDefine["TUBIAO_K"] = "icon/K/icon_k";
        SkeletalPathDefine["TUBIAO_A"] = "icon/A/icon_a";
        SkeletalPathDefine["TUBIAO_SCATTER"] = "icon/SCATTER/eff_spine_slot_dfdc_tl";
        SkeletalPathDefine["TUBIAO_YUAN_BAO"] = "icon/inyuanbao/icon_inyuanbao";
        SkeletalPathDefine["TUBIAO_WU_GUI"] = "icon/wugui/wugui";
        SkeletalPathDefine["TUBIAO_CHUAN"] = "icon/chuan/icon_chuan";
        SkeletalPathDefine["TUBIAO_NIAO"] = "icon/lvniao/icon_lvniao";
        SkeletalPathDefine["TUBIAO_wild"] = "icon/WILD/eff_spine_slot_dfdc_fu";
        SkeletalPathDefine["TUBIAO_JINBI"] = "icon/jinbi/icon_jinbi";
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
//# sourceMappingURL=d5eeb26cf7d45915b41cddb8bba81ffb20dd8dca.js.map