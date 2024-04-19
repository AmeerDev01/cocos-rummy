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

      _cclegacy._RF.push({}, "cf1b1XySNdMvIy2asiBq/6a", "spriteDefine", undefined);

      __checkObsolete__(['SpriteFrame']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["bg1"] = "textures/bg/bg_gxfc_zc_1/spriteFrame";
        SpriteFramePathDefine["bg2"] = "textures/bg/bg_gxfc_zc_2/spriteFrame";
        SpriteFramePathDefine["bg3"] = "textures/bg/bg_gxfc_zc_3/spriteFrame";
        SpriteFramePathDefine["icon_tongqian"] = "icon/tubiao_tongqian/spriteFrame";
        SpriteFramePathDefine["icon_bianpao"] = "icon/tubiao_bianpao/spriteFrame";
        SpriteFramePathDefine["icon_yupei"] = "icon/tubiao_yupei/spriteFrame";
        SpriteFramePathDefine["icon_gu"] = "icon/tubiao_gu/spriteFrame";
        SpriteFramePathDefine["icon_shouwa"] = "icon/tubiao_shouwa/spriteFrame";
        SpriteFramePathDefine["icon_xiwa"] = "icon/tubiao_xiwa/spriteFrame";
        SpriteFramePathDefine["icon_fushen"] = "icon/tubiao_fushen/spriteFrame";
        SpriteFramePathDefine["icon_caishen"] = "icon/tubiao_caishen/spriteFrame";
        SpriteFramePathDefine["icon_baifa"] = "icon/tubiao_baifa/spriteFrame";
        SpriteFramePathDefine["icon_jinfa"] = "icon/tubiao_jinfa/spriteFrame";
        SpriteFramePathDefine["icon_scatter"] = "icon/tubiao_scatter/spriteFrame";
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
//# sourceMappingURL=5bff4a9199e448be0be5c90466d2af07ab9422bc.js.map