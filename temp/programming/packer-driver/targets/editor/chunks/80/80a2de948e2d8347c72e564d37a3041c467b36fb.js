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

      _cclegacy._RF.push({}, "ce811kRa0dIsZy6TWp4AjQv", "spriteDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["CARD_NUMBER_0"] = "cards/card_big_0/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_1"] = "cards/card_big_1/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_2"] = "cards/card_big_2/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_3"] = "cards/card_big_3/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_4"] = "cards/card_big_4/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_5"] = "cards/card_big_5/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_6"] = "cards/card_big_6/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_SMALL_0"] = "img/cards_misNum_0/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_SMALL_1"] = "img/cards_misNum_1/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_SMALL_2"] = "img/cards_misNum_2/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_SMALL_3"] = "img/cards_misNum_3/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_SMALL_4"] = "img/cards_misNum_4/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_SMALL_5"] = "img/cards_misNum_5/spriteFrame";
        SpriteFramePathDefine["CARD_NUMBER_SMALL_6"] = "img/cards_misNum_6/spriteFrame";
        SpriteFramePathDefine["WORD_SINGLE"] = "img/word_single/spriteFrame";
        SpriteFramePathDefine["WORD_DOUBLE"] = "img/word_double/spriteFrame";
        SpriteFramePathDefine["WORD_TRIPLE"] = "img/word_triple/spriteFrame";
        SpriteFramePathDefine["WORD_QUARTET"] = "img/word_quartet/spriteFrame";
        SpriteFramePathDefine["WORD_QUINTET"] = "img/word_quintet/spriteFrame";
        SpriteFramePathDefine["WORD_TIMES_1"] = "img/word_times_1/spriteFrame";
        SpriteFramePathDefine["WORD_TIMES_2"] = "img/word_times_2/spriteFrame";
        SpriteFramePathDefine["WORD_TIMES_3"] = "img/word_times_3/spriteFrame";
        SpriteFramePathDefine["WORD_TIMES_4"] = "img/word_times_4/spriteFrame";
        SpriteFramePathDefine["WORD_TIMES_5"] = "img/word_times_5/spriteFrame";
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
//# sourceMappingURL=80a2de948e2d8347c72e564d37a3041c467b36fb.js.map