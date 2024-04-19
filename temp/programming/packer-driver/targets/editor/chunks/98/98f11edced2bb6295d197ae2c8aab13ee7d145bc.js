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

      _cclegacy._RF.push({}, "5fabcF4rFdLY7poIpDLms0z", "spriteDefine", undefined);

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
        SpriteFramePathDefine["BANDARQIUQIU_HISTORY_RED_WIN"] = "img/icon_bdqq_lish_hongqiu/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_HISTORY_BLUE_WIN"] = "img/icon_bdqq_lish_lanqiu/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_HISTORY_LV_WIN"] = "img/icon_bdqq_lish_lvqiu/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_MIN_HISTORY_RED_WIN"] = "img/icon_bdqiuqiu_lishibox_hong/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_MIN_HISTORY_BLUE_WIN"] = "img/icon_bdqiuqiu_lishibox_lan/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_MIN_HISTORY_LV_WIN"] = "img/icon_bdqiuqiu_lishibox_lv/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_HISTORY_LOSE"] = "img/icon_bdqq_lish_huiqiu/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_POKER0"] = "cards/pai_big_dian_0/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_POKER1"] = "cards/pai_big_dian_1/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_POKER2"] = "cards/pai_big_dian_2/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_POKER3"] = "cards/pai_big_dian_3/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_POKER4"] = "cards/pai_big_dian_4/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_POKER5"] = "cards/pai_big_dian_5/spriteFrame";
        SpriteFramePathDefine["BANDARQIUQIU_POKER6"] = "cards/pai_big_dian_6/spriteFrame";
        SpriteFramePathDefine["S"] = "img/icon_bdqq_lishi_s/spriteFrame";
        SpriteFramePathDefine["Q"] = "img/icon_bdqq_lishi_q/spriteFrame";
        SpriteFramePathDefine["T"] = "img/icon_bdqq_lishi_t/spriteFrame";
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
//# sourceMappingURL=98f11edced2bb6295d197ae2c8aab13ee7d145bc.js.map