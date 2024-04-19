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

      _cclegacy._RF.push({}, "d5d33xJoilFxLDplxD6LoL/", "spriteDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["icon_1"] = "img/smallIcon/icon_xggz_huang_s/spriteFrame";
        SpriteFramePathDefine["icon_2"] = "img/smallIcon/icon_xggz_lanlv_s/spriteFrame";
        SpriteFramePathDefine["icon_3"] = "img/smallIcon/icon_xggz_lv_s/spriteFrame";
        SpriteFramePathDefine["icon_4"] = "img/smallIcon/icon_xggz_lan_s/spriteFrame";
        SpriteFramePathDefine["icon_5"] = "img/smallIcon/icon_xggz_hong_s/spriteFrame";
        SpriteFramePathDefine["icon_6"] = "img/smallIcon/icon_xggz_star_s/spriteFrame";
        SpriteFramePathDefine["icon_7"] = "img/smallIcon/icon_xggz_yueliang_s/spriteFrame";
        SpriteFramePathDefine["icon_8"] = "img/smallIcon/icon_xggz_xin_s/spriteFrame";
        SpriteFramePathDefine["icon_9"] = "img/smallIcon/icon_xggz_taiyang_s/spriteFrame";
        SpriteFramePathDefine["yellow_gem"] = "img/bigIcon/icon_xggz_huang/spriteFrame";
        SpriteFramePathDefine["blue_green_gem"] = "img/bigIcon/icon_xggz_lanlv/spriteFrame";
        SpriteFramePathDefine["green_gem"] = "img/bigIcon/icon_xggz_lv/spriteFrame";
        SpriteFramePathDefine["blue_gem"] = "img/bigIcon/icon_xggz_lan/spriteFrame";
        SpriteFramePathDefine["red_gem"] = "img/bigIcon/icon_xggz_hong/spriteFrame";
        SpriteFramePathDefine["star"] = "img/bigIcon/icon_xggz_star/spriteFrame";
        SpriteFramePathDefine["moon"] = "img/bigIcon/icon_xggz_yueliang/spriteFrame";
        SpriteFramePathDefine["heart"] = "img/bigIcon/icon_xggz_xin/spriteFrame";
        SpriteFramePathDefine["sun"] = "img/bigIcon/icon_xggz_taiyang/spriteFrame";
        SpriteFramePathDefine["scatter"] = "img/bigIcon/icon_xggz_scatter/spriteFrame";
        SpriteFramePathDefine["green_heart"] = "img/bigIcon/icon_xggz_lvxin/spriteFrame";
        SpriteFramePathDefine["blue_heart"] = "img/bigIcon/icon_xggz_lanxin/spriteFrame";
        SpriteFramePathDefine["purple_heart"] = "img/bigIcon/icon_xggz_hongxin/spriteFrame";
        SpriteFramePathDefine["yellow_heart"] = "img/bigIcon/icon_xggz_huangxin/spriteFrame";
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
//# sourceMappingURL=fe4087945019068a2962dc3323503f6a953983b0.js.map