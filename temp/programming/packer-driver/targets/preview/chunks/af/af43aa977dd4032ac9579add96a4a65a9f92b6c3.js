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

      _cclegacy._RF.push({}, "600caAw/5xPXZLyeO2yWPpp", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["yellow_gem"] = "car/iconCar/st_icon_8";
        SkeletalPathDefine["blue_green_gem"] = "car/iconCar/st_icon_5";
        SkeletalPathDefine["green_gem"] = "car/iconCar/st_icon_6";
        SkeletalPathDefine["blue_gem"] = "car/iconCar/st_icon_9";
        SkeletalPathDefine["red_gem"] = "car/iconCar/st_icon_7";
        SkeletalPathDefine["star"] = "car/iconCar/st_icon_4";
        SkeletalPathDefine["moon"] = "car/iconCar/st_icon_3";
        SkeletalPathDefine["heart"] = "car/iconCar/icon_2";
        SkeletalPathDefine["sun"] = "car/iconCar/st_icon_1";
        SkeletalPathDefine["scatter"] = "car/iconCar/scatter";
        SkeletalPathDefine["green_heart"] = "car/iconCar/icon_bl";
        SkeletalPathDefine["blue_heart"] = "car/iconCar/icon_bl";
        SkeletalPathDefine["purple_heart"] = "car/iconCar/icon_bl";
        SkeletalPathDefine["yellow_heart"] = "car/iconCar/icon_bl";
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
//# sourceMappingURL=af43aa977dd4032ac9579add96a4a65a9f92b6c3.js.map