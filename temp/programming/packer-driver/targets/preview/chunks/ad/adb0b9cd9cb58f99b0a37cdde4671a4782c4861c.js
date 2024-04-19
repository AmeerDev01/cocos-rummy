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

      _cclegacy._RF.push({}, "03813vdNTNOyLmS+0GLcqGg", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      //动画资源 路径
      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["DRAGONTIGER_DJS5_1"] = "car/djs5_1";
        SkeletalPathDefine["DRAGONTIGER_DJS5_2"] = "car/djs5_2";
        SkeletalPathDefine["DRAGONTIGER_DJS5_3"] = "car/djs5_3";
        SkeletalPathDefine["DRAGONTIGER_DJS5_4"] = "car/djs5_4";
        SkeletalPathDefine["DRAGONTIGER_DJS5_5"] = "car/djs5_5";
        SkeletalPathDefine["DRAGONTIGER_VS"] = "car/dragonTiger/VS";
        SkeletalPathDefine["DRAGONTIGER_GAME_START_BET"] = "car/start_bet";
        SkeletalPathDefine["DRAGONTIGER_GAME_STOP_BET"] = "car/stop_bet";
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
//# sourceMappingURL=adb0b9cd9cb58f99b0a37cdde4671a4782c4861c.js.map