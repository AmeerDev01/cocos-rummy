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

      _cclegacy._RF.push({}, "b859bFS9Z9LaoBMRtTCJzcT", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["TUBIAO_10"] = "atlas/rollerIcon/10/10";
        SkeletalPathDefine["TUBIAO_J"] = "atlas/rollerIcon/J/j";
        SkeletalPathDefine["TUBIAO_Q"] = "atlas/rollerIcon/q/q";
        SkeletalPathDefine["TUBIAO_K"] = "atlas/rollerIcon/K/k";
        SkeletalPathDefine["TUBIAO_A"] = "atlas/rollerIcon/A/a";
        SkeletalPathDefine["TUBIAO_TONG_QIAN"] = "atlas/rollerIcon/tongqian/tb_tongqian";
        SkeletalPathDefine["TUBIAO_YUAN_BAO"] = "atlas/rollerIcon/yuanbao/yuanbao";
        SkeletalPathDefine["TUBIAO_YAO_QIAN_SHU"] = "atlas/rollerIcon/yaoqianshu/yaoqianshu";
        SkeletalPathDefine["TUBIAO_BAI_CAI"] = "atlas/rollerIcon/baicai/baicai";
        SkeletalPathDefine["TUBIAO_cai_sheng"] = "atlas/rollerIcon/scatter/caisheng";
        SkeletalPathDefine["TUBIAO_wild"] = "atlas/rollerIcon/wild/jinchan2";
        SkeletalPathDefine["TUBIAO_BAO_HE"] = "atlas/rollerIcon/baohe/baohe";
        SkeletalPathDefine["BIGWIN"] = "atlas/dialog/bigwin/cs_bw";
        SkeletalPathDefine["BIGWIN_BW_GLOD"] = "atlas/dialog/superwin/slots_common_game_sw_gold";
        SkeletalPathDefine["MEGAWIN"] = "atlas/dialog/megawin/cs_mw";
        SkeletalPathDefine["MEGAWIN_BW_GLOD"] = "atlas/dialog/superwin/slots_common_game_sw_gold";
        SkeletalPathDefine["SUPERWIN"] = "atlas/dialog/superwin/cs_sw";
        SkeletalPathDefine["SUPERWIN_BW_GLOD"] = "atlas/dialog/superwin/slots_common_game_sw_gold";
        SkeletalPathDefine["JACKPOT"] = "atlas/dialog/jackpot/sb_lbjs_JACKPOT";
        SkeletalPathDefine["JACKPOT_BW_GLOD"] = "atlas/dialog/jackpot/slots_common_game_uw_gold";
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
//# sourceMappingURL=31147f7012298063eeb70bc7f36823c65dbbd7b6.js.map