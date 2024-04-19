System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SpriteFrame, loopFiles, _crd, SpriteFramePathDefine;

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
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b49bQtrs9Psa1LNBymsdwp", "spriteDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp']);

      // 图标
      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["CHIP_ZERO"] = "chips/chip_0/spriteFrame";
        SpriteFramePathDefine["CHIP_ONE"] = "chips/chip_1/spriteFrame";
        SpriteFramePathDefine["CHIP_TWO"] = "chips/chip_2/spriteFrame";
        SpriteFramePathDefine["CHIP_THREE"] = "chips/chip_3/spriteFrame";
        SpriteFramePathDefine["CHIP_FOUR"] = "chips/chip_4/spriteFrame";
        SpriteFramePathDefine["CHIP_FIVE"] = "chips/chip_5/spriteFrame";
        SpriteFramePathDefine["CHIP_SIX"] = "chips/chip_6/spriteFrame";
        SpriteFramePathDefine["BANDAR_HISTORY_WIN"] = "img/icon_bandar_shuyingts_hong/spriteFrame";
        SpriteFramePathDefine["BANDAR_HISTORY_LOSE"] = "img/icon_bandar_shuyingts_hui/spriteFrame";
        SpriteFramePathDefine["BANDAR_HISTORY_MENANG"] = "history/icon_bandar_lishi_menang/spriteFrame";
        SpriteFramePathDefine["BANDAR_HISTORY_KALAH"] = "history/icon_bandar_lishi_kalah/spriteFrame";
        SpriteFramePathDefine["BANDAR_HISTORY_SEMUA_WIN"] = "history/btn_bandar_lishi_quanying/spriteFrame";
        SpriteFramePathDefine["BANDAR_HISTORY_SEMUA_LOSS"] = "history/btn_bandar_lishi_quanshu/spriteFrame";
        SpriteFramePathDefine["BANDAR_HISTORY_BARU"] = "history/icon_bandar_lishi_baru/spriteFrame";
        SpriteFramePathDefine["BANDAR_POKER0"] = "cards/pai_big_dian_0/spriteFrame";
        SpriteFramePathDefine["BANDAR_POKER1"] = "cards/pai_big_dian_1/spriteFrame";
        SpriteFramePathDefine["BANDAR_POKER2"] = "cards/pai_big_dian_2/spriteFrame";
        SpriteFramePathDefine["BANDAR_POKER3"] = "cards/pai_big_dian_3/spriteFrame";
        SpriteFramePathDefine["BANDAR_POKER4"] = "cards/pai_big_dian_4/spriteFrame";
        SpriteFramePathDefine["BANDAR_POKER5"] = "cards/pai_big_dian_5/spriteFrame";
        SpriteFramePathDefine["BANDAR_POKER6"] = "cards/pai_big_dian_6/spriteFrame";
        SpriteFramePathDefine["BIG_CARDS"] = "img/icon_bandar_zi_big/spriteFrame";
        SpriteFramePathDefine["SIX_DEVIL"] = "img/icon_bandar_zi_six/spriteFrame";
        SpriteFramePathDefine["QIU_QIU"] = "img/icon_bandar_zi_qiu/spriteFrame";
        SpriteFramePathDefine["SMALL_CARDS"] = "img/icon_bandar_zi_small/spriteFrame";
        SpriteFramePathDefine["TWIN_CARDS"] = "img/icon_bandar_zi_twin/spriteFrame";
        return SpriteFramePathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, SpriteFrame, SpriteFramePathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28fb8c1b10d8640e41bf08877af62ec2293052f2.js.map