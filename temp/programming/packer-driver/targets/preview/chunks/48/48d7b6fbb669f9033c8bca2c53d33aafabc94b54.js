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

      _cclegacy._RF.push({}, "0996bHwq/xMPbVjdI89rS3Z", "spriteDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["CARD_NUMBER_0"] = "cards/card_big_0/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_1"] = "cards/card_big_1/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_2"] = "cards/card_big_2/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_3"] = "cards/card_big_3/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_4"] = "cards/card_big_4/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_5"] = "cards/card_big_5/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_6"] = "cards/card_big_6/spriteFrame";
        SpriteFramePathDefine["CHIP1"] = "chips/chip_qiuqiu_1/spriteFrame";
        SpriteFramePathDefine["CHIP2"] = "chips/chip_qiuqiu_2/spriteFrame";
        SpriteFramePathDefine["CHIP3"] = "chips/chip_qiuqiu_3/spriteFrame";
        SpriteFramePathDefine["CHIP4"] = "chips/chip_qiuqiu_4/spriteFrame";
        SpriteFramePathDefine["CHIP5"] = "chips/chip_qiuqiu_5/spriteFrame";
        SpriteFramePathDefine["CHIP6"] = "chips/chip_qiuqiu_6/spriteFrame";
        SpriteFramePathDefine["CHIP7"] = "chips/chip_qiuqiu_7/spriteFrame";
        SpriteFramePathDefine["CHIP8"] = "chips/chip_qiuqiu_8/spriteFrame";
        SpriteFramePathDefine["CHIP9"] = "chips/chip_qiuqiu_9/spriteFrame";
        SpriteFramePathDefine["zi_qiuqiu_jiesuan_BigCards"] = "img/zi_qiuqiu_jiesuan_BigCards/spriteFrame";
        SpriteFramePathDefine["zi_qiuqiu_jiesuan_QiuQiu"] = "img/zi_qiuqiu_jiesuan_QiuQiu/spriteFrame";
        SpriteFramePathDefine["zi_qiuqiu_jiesuan_saix"] = "img/zi_qiuqiu_jiesuan_saix/spriteFrame";
        SpriteFramePathDefine["zi_qiuqiu_jiesuan_SmallCards"] = "img/zi_qiuqiu_jiesuan_SmallCards/spriteFrame";
        SpriteFramePathDefine["zi_qiuqiu_jiesuan_TwinCards"] = "img/zi_qiuqiu_jiesuan_TwinCards/spriteFrame";
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
//# sourceMappingURL=48d7b6fbb669f9033c8bca2c53d33aafabc94b54.js.map