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

      _cclegacy._RF.push({}, "74072Ny+QdBjYabzQEIF9nR", "spriteDefine", undefined);

      __checkObsolete__(['SpriteFrame']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["icon_10"] = "atlas/rollerIcon/icon_10/spriteFrame";
        SpriteFramePathDefine["icon_a"] = "atlas/rollerIcon/icon_a/spriteFrame";
        SpriteFramePathDefine["icon_goutou"] = "atlas/rollerIcon/icon_goutou/spriteFrame";
        SpriteFramePathDefine["icon_j"] = "atlas/rollerIcon/icon_j/spriteFrame";
        SpriteFramePathDefine["icon_jkc"] = "atlas/rollerIcon/icon_jkc/spriteFrame";
        SpriteFramePathDefine["icon_jzt"] = "atlas/rollerIcon/icon_jzt/spriteFrame";
        SpriteFramePathDefine["icon_k"] = "atlas/rollerIcon/icon_k/spriteFrame";
        SpriteFramePathDefine["icon_nan1"] = "atlas/rollerIcon/icon_nan1/spriteFrame";
        SpriteFramePathDefine["icon_q"] = "atlas/rollerIcon/icon_q/spriteFrame";
        SpriteFramePathDefine["icon_scatter"] = "atlas/rollerIcon/icon_scatter/spriteFrame";
        SpriteFramePathDefine["icon_szj"] = "atlas/rollerIcon/icon_szj/spriteFrame";
        SpriteFramePathDefine["icon_wild"] = "atlas/rollerIcon/icon_wild/spriteFrame";
        SpriteFramePathDefine["icon_ying1"] = "atlas/rollerIcon/icon_ying1/spriteFrame";
        SpriteFramePathDefine["icon_ying2"] = "atlas/rollerIcon/icon_ying2/spriteFrame";
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
//# sourceMappingURL=4208fc9f654f50452611f079da744efb5cf9a858.js.map