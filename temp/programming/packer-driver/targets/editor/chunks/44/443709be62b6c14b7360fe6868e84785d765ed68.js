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

      _cclegacy._RF.push({}, "39b3aF9P5JED6UNCfLm++5c", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["yaoqianshu"] = "atlas/rollerIcon/yaoqianshu/tubiaobaozi";
        SkeletalPathDefine["yuanbao"] = "atlas/rollerIcon/baohe/tubiaolanbaoshi";
        SkeletalPathDefine["baohe"] = "atlas/rollerIcon/yuanbao/tubiaolvbaoshi";
        SkeletalPathDefine["tongqian"] = "atlas/rollerIcon/tongqian/tubiaotongqian";
        SkeletalPathDefine["tubiaoA"] = "atlas/rollerIcon/A/tubiaoA";
        SkeletalPathDefine["tubiaoK"] = "atlas/rollerIcon/K/tubiaoK";
        SkeletalPathDefine["tubiaoQ"] = "atlas/rollerIcon/q/tubiaoQ";
        SkeletalPathDefine["tubiaoJ"] = "atlas/rollerIcon/J/tubiaoJ";
        SkeletalPathDefine["icon10"] = "atlas/rollerIcon/10/tubiao10";
        SkeletalPathDefine["scatter"] = "atlas/rollerIcon/scatter/skeletona";
        SkeletalPathDefine["wild"] = "atlas/rollerIcon/wild/LZTB_wildtubiao";
        SkeletalPathDefine["baicai"] = "atlas/rollerIcon/baicai/skeleton";
        SkeletalPathDefine["baicai1"] = "atlas/focusBorder/LZTB_baozhalanguang";
        SkeletalPathDefine["dragon"] = "atlas/PublicSkeleton/skeleton";
        SkeletalPathDefine["dragonFire"] = "atlas/spoutingDragon/longpenhuodonghua";
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
//# sourceMappingURL=443709be62b6c14b7360fe6868e84785d765ed68.js.map