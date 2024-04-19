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

      _cclegacy._RF.push({}, "1a03b83ciBO67cUfi6F3+gk", "skeletalDefine", undefined);

      __checkObsolete__(['Prefab', 'sp']);

      _export("SkeletalPathDefine", SkeletalPathDefine = /*#__PURE__*/function (SkeletalPathDefine) {
        SkeletalPathDefine["BANANA"] = "move_icon/xiaoyouxixiaojiang";
        SkeletalPathDefine["STRAW_BRRRY"] = "move_icon/xiaoyouxiboluo";
        SkeletalPathDefine["APPLE"] = "move_icon/xiaoyouxiputao";
        SkeletalPathDefine["GRAPE"] = "move_icon/xiaoyouxilanmei";
        SkeletalPathDefine["WATER_MELON"] = "move_icon/xiaoyouxixigua";
        SkeletalPathDefine["BELL"] = "move_icon/lingdangtubiao";
        SkeletalPathDefine["BAR_1"] = "move_icon/lansetubiaodonghua";
        SkeletalPathDefine["BAR_2"] = "move_icon/lvsedonghua";
        SkeletalPathDefine["BAR_3"] = "move_icon/hongsedonghua";
        SkeletalPathDefine["WILD"] = "move_icon/lanzitubiaodonghua";
        SkeletalPathDefine["ICON777"] = "move_icon/777tubiao";
        SkeletalPathDefine["BOUNS"] = "move_icon/SGJ_baoxiangdonghua";
        SkeletalPathDefine["TIME_ADD"] = "move_icon/+1tubiaodonghua";
        SkeletalPathDefine["LEVEL_UP"] = "move_icon/+2tubiaodonghua";
        SkeletalPathDefine["BIGWIN"] = "dialog/bigwin/sb_lbjs_BIGWIN";
        SkeletalPathDefine["BIGWIN_BW_GLOD"] = "dialog/bigwin/slots_common_game_bw_gold";
        SkeletalPathDefine["MEGAWIN"] = "dialog/megawin/sb_lbjs_MEGAWIN";
        SkeletalPathDefine["MEGAWIN_BW_GLOD"] = "dialog/megawin/slots_common_game_ew_gold";
        SkeletalPathDefine["SUPERWIN"] = "dialog/superwin/sb_lbjs_SUPERWIN";
        SkeletalPathDefine["SUPERWIN_BW_GLOD"] = "dialog/superwin/slots_common_game_sw_gold";
        SkeletalPathDefine["JACKPOT"] = "dialog/jackpot/sb_lbjs_JACKPOT";
        SkeletalPathDefine["JACKPOT_BW_GLOD"] = "dialog/jackpot/slots_common_game_uw_gold";
        SkeletalPathDefine["WATERMELON"] = "dialog/bigWatermelon/skeleton";
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
//# sourceMappingURL=e4e1e919596b9d55460b00279dcd2a4369bb42d5.js.map