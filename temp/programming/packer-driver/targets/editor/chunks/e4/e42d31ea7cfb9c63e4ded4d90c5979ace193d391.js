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

      _cclegacy._RF.push({}, "c6b57r4ufRCvLuXW+ci7A6h", "spriteDefine", undefined);

      __checkObsolete__(['SpriteFrame']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["rhombic_small"] = "img/smallIcon/icon_olps_tubiao_xiao_lan/spriteFrame";
        SpriteFramePathDefine["triangle_small"] = "img/smallIcon/icon_olps_tubiao_xiao_lv/spriteFrame";
        SpriteFramePathDefine["hexagonal_small"] = "img/smallIcon/icon_olps_tubiao_xiao_huang/spriteFrame";
        SpriteFramePathDefine["inverted_triangle_small"] = "img/smallIcon/icon_olps_tubiao_xiao_zi/spriteFrame";
        SpriteFramePathDefine["pentagon_small"] = "img/smallIcon/icon_olps_tubiao_xiao_hong/spriteFrame";
        SpriteFramePathDefine["grail_small"] = "img/smallIcon/icon_olps_tubiao_xiao_shengbei/spriteFrame";
        SpriteFramePathDefine["ring_small"] = "img/smallIcon/icon_olps_tubiao_xiao_jiezhi/spriteFrame";
        SpriteFramePathDefine["hourglass_small"] = "img/smallIcon/icon_olps_tubiao_xiao_shalou/spriteFrame";
        SpriteFramePathDefine["crown_small"] = "img/smallIcon/icon_olps_tubiao_xiao_huangguan/spriteFrame";
        SpriteFramePathDefine["rhombic"] = "img/bigIcon/icon_olps_lan/spriteFrame";
        SpriteFramePathDefine["triangle"] = "img/bigIcon/icon_olps_lv/spriteFrame";
        SpriteFramePathDefine["hexagonal"] = "img/bigIcon/icon_olps_huang/spriteFrame";
        SpriteFramePathDefine["inverted_triangle"] = "img/bigIcon/icon_olps_zi/spriteFrame";
        SpriteFramePathDefine["pentagon"] = "img/bigIcon/icon_olps_hong/spriteFrame";
        SpriteFramePathDefine["grail"] = "img/bigIcon/icon_olps_shengbei/spriteFrame";
        SpriteFramePathDefine["ring"] = "img/bigIcon/icon_olps_jiezhi/spriteFrame";
        SpriteFramePathDefine["hourglass"] = "img/bigIcon/icon_olps_shalou/spriteFrame";
        SpriteFramePathDefine["crown"] = "img/bigIcon/icon_olps_huangguan/spriteFrame";
        SpriteFramePathDefine["scatter"] = "img/bigIcon/icon_olps_scatter/spriteFrame";
        SpriteFramePathDefine["green"] = "img/bigIcon/icon_olps_lvguangquan/spriteFrame";
        SpriteFramePathDefine["blue"] = "img/bigIcon/icon_olps_languangquan/spriteFrame";
        SpriteFramePathDefine["purple"] = "img/bigIcon/icon_olps_ziguangquan/spriteFrame";
        SpriteFramePathDefine["red"] = "img/bigIcon/icon_olps_hongguangquan/spriteFrame";
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
//# sourceMappingURL=e42d31ea7cfb9c63e4ded4d90c5979ace193d391.js.map