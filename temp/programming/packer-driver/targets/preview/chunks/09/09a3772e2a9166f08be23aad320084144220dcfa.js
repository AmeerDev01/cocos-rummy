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

      _cclegacy._RF.push({}, "7028aPM19tKYYfbQKjphCUF", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["rhombic"] = "car/icon/thor_icon_1";
        SkeletalPathDefine["triangle"] = "car/icon/thor_icon_2";
        SkeletalPathDefine["hexagonal"] = "car/icon/thor_icon_3";
        SkeletalPathDefine["inverted_triangle"] = "car/icon/thor_icon_4";
        SkeletalPathDefine["pentagon"] = "car/icon/thor_icon_5";
        SkeletalPathDefine["grail"] = "car/icon/hw_thor_icon_6";
        SkeletalPathDefine["ring"] = "car/icon/thor_icon_7";
        SkeletalPathDefine["hourglass"] = "car/icon/thor_hourglass";
        SkeletalPathDefine["crown"] = "car/icon/thor_icon_9";
        SkeletalPathDefine["scatter"] = "car/icon/thor_scatter";
        SkeletalPathDefine["green"] = "car/icon/thor_anim_wild_green";
        SkeletalPathDefine["blue"] = "car/icon/thor_anim_wild_blue";
        SkeletalPathDefine["purple"] = "car/icon/thor_anim_wild";
        SkeletalPathDefine["red"] = "car/icon/thor_anim_wild_red";
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
//# sourceMappingURL=09a3772e2a9166f08be23aad320084144220dcfa.js.map