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

      _cclegacy._RF.push({}, "3bd5dzENZJLHJ/YnoNiPRb9", "spriteDefine", undefined);

      __checkObsolete__(['SpriteFrame']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["tubiaobaozi"] = "atlas/tubiao/icon_lztb_tubiao_baozi/spriteFrame";
        SpriteFramePathDefine["yuanbao"] = "atlas/tubiao/icon_lztb_tubiao_yuanbao/spriteFrame";
        SpriteFramePathDefine["baohe"] = "atlas/tubiao/icon_lztb_tubiao_baoshi/spriteFrame";
        SpriteFramePathDefine["tongqian"] = "atlas/tubiao/icon_lztb_tubiao_tongqian/spriteFrame";
        SpriteFramePathDefine["tubiaoA"] = "atlas/tubiao/icon_lztb_tubiao_a/spriteFrame";
        SpriteFramePathDefine["tubiaoK"] = "atlas/tubiao/icon_lztb_tubiao_k/spriteFrame";
        SpriteFramePathDefine["tubiaoQ"] = "atlas/tubiao/icon_lztb_tubiao_q/spriteFrame";
        SpriteFramePathDefine["tubiaoJ"] = "atlas/tubiao/icon_lztb_tubiao_j/spriteFrame";
        SpriteFramePathDefine["tubiao10"] = "atlas/tubiao/icon_lztb_tubiao_10/spriteFrame";
        SpriteFramePathDefine["scatter"] = "atlas/tubiao/icon_lztb_tubiao_scatter/spriteFrame";
        SpriteFramePathDefine["wild"] = "atlas/tubiao/icon_lztb_tubiao_wild/spriteFrame";
        SpriteFramePathDefine["baicai"] = "atlas/tubiao/icon_lztb_tubiao_jp/spriteFrame";
        SpriteFramePathDefine["baicai1"] = "atlas/tubiao/icon_lztb_tubiao_jp3/spriteFrame";
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
//# sourceMappingURL=b411d44c0cfb1b7fb14eeed7d8fd617cd8f811f1.js.map