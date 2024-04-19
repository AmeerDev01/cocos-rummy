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

      _cclegacy._RF.push({}, "451abD3bGRHtIcnpGuuLGHu", "spriteDefine", undefined);

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
        SpriteFramePathDefine["POKER_POKER_ZERO"] = "poker/poker_0/spriteFrame";
        SpriteFramePathDefine["POKER_POKER_ONE"] = "poker/poker_1/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_HENG_PAI_MINI"] = "img/pai_longhu_xiao_heng_1/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_HENG_PAI_MIDDLE"] = "img/pai_longhu_xiao_heng_2/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_HENG_PAI_BIG"] = "img/pai_longhu_xiao_heng_3/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_SHU_PAI_MINI"] = "img/pai_longhu_xiao_shu_1/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_SHU_PAI_MIDDLE"] = "img/pai_longhu_xiao_shu_2/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_SHU_PAI_BIG"] = "img/pai_longhu_xiao_shu_3/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_HISTORY_DRAGON"] = "img/img_history_dragon/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_HISTORY_TIGER"] = "img/img_history_tiger/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_HISTORY_SERI"] = "img/img_history_seri/spriteFrame";
        SpriteFramePathDefine["DRAGONTIGER_HISTORY_NEW"] = "img/icon_longhu_zhongjiang_new/spriteFrame";
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
//# sourceMappingURL=c2ba9f177c3a9ae94270b750d95638b7a9614a00.js.map