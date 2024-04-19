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

      _cclegacy._RF.push({}, "f8f6fwIsDZPAoVmiQAS4445", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["shuaige2"] = "atlas/rollerIcon/fl/shuaige2";
        SkeletalPathDefine["yingtou2"] = "atlas/rollerIcon/ying/yingtou2";
        SkeletalPathDefine["goutou"] = "atlas/rollerIcon/gou/goutou";
        SkeletalPathDefine["shuaige3"] = "atlas/rollerIcon/jzt/shuaige3";
        SkeletalPathDefine["shizijia"] = "atlas/rollerIcon/szj/shizijia";
        SkeletalPathDefine["icon_A"] = "atlas/rollerIcon/A/a";
        SkeletalPathDefine["icon_K"] = "atlas/rollerIcon/K/k";
        SkeletalPathDefine["icon_Q"] = "atlas/rollerIcon/q/q";
        SkeletalPathDefine["icon_J"] = "atlas/rollerIcon/J/j";
        SkeletalPathDefine["icon_10"] = "atlas/rollerIcon/10/10";
        SkeletalPathDefine["scatter1"] = "atlas/rollerIcon/scatter/scatter1";
        SkeletalPathDefine["renwu2"] = "atlas/rollerIcon/wild/renwu2";
        SkeletalPathDefine["jiakechong"] = "atlas/rollerIcon/jkc/jiakechong";
        SkeletalPathDefine["shuaige"] = "atlas/rollerIcon/niaotou/shuaige";
        SkeletalPathDefine["yigemeinv"] = "atlas/rollerIcon/gril1/yigemeinv";
        SkeletalPathDefine["sb_lbjs_JACKPOT"] = "atlas/dialog/jackpot/sb_lbjs_JACKPOT";
        SkeletalPathDefine["gemeinv2"] = "atlas/rollerIcon/gril2/2gemeinv";
        SkeletalPathDefine["sangemeinv"] = "atlas/rollerIcon/gril3/sangemeinv";
        SkeletalPathDefine["xuanzhongkuang2"] = "atlas/focusBorder/2/xuanzhongkuang2";
        SkeletalPathDefine["xuanzhongkuang3"] = "atlas/focusBorder/3/xuanzhongkuang3";
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
//# sourceMappingURL=e6ae42b8b454b70e104310b4d26048e7dbe7a0ae.js.map