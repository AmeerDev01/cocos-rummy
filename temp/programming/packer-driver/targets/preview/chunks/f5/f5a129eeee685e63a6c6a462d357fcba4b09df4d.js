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

      _cclegacy._RF.push({}, "a036370/thNiI/BFyrTmamE", "spriteDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp']);

      _export("SpriteFramePathDefine", SpriteFramePathDefine = /*#__PURE__*/function (SpriteFramePathDefine) {
        SpriteFramePathDefine["BANANA_SMALL"] = "icon/icon_fruits777_jiangjiao/spriteFrame";
        SpriteFramePathDefine["STRAWBERRY_SMALL"] = "icon/icon_fruits777_caomei/spriteFrame";
        SpriteFramePathDefine["SPPLE_SMALL"] = "icon/icon_fruits777_pingguo/spriteFrame";
        SpriteFramePathDefine["GRAPE_SMALL"] = "icon/icon_fruits777_putao/spriteFrame";
        SpriteFramePathDefine["WATERMELON_SMALL"] = "icon/icon_fruits777_xigua/spriteFrame";
        SpriteFramePathDefine["bell_SMALL"] = "icon/icon_fruits777_lingdang/spriteFrame";
        SpriteFramePathDefine["BAR1_SMALL"] = "icon/icon_fruits777_bar/spriteFrame";
        SpriteFramePathDefine["BAR2_SMALL"] = "icon/icon_fruits777_2bar/spriteFrame";
        SpriteFramePathDefine["BAR3_SMALL"] = "icon/icon_fruits777_3bar/spriteFrame";
        SpriteFramePathDefine["WILD_SMALL"] = "icon/icon_fruits777_wild/spriteFrame";
        SpriteFramePathDefine["ICON777_SMALL"] = "icon/icon_fruits777_777/spriteFrame";
        SpriteFramePathDefine["BOUNS_SMALL"] = "icon/icon_fruits777_bonus/spriteFrame";
        SpriteFramePathDefine["BANANA_LARGE"] = "icon/icon_fruits777_xiangjiao_big/spriteFrame";
        SpriteFramePathDefine["STRAW_BERRY_LARGE"] = "icon/icon_fruits777_caomei_big/spriteFrame";
        SpriteFramePathDefine["APPLE_LARGE"] = "icon/icon_fruits777_pingguo_big/spriteFrame";
        SpriteFramePathDefine["GRAPE_LARGE"] = "icon/icon_fruits777_putao_big/spriteFrame";
        SpriteFramePathDefine["WATERMELON_LARGE"] = "icon/icon_fruits777_xigua_big/spriteFrame";
        SpriteFramePathDefine["BELL_LARGE"] = "icon/icon_fruits777_lingdang_big/spriteFrame";
        SpriteFramePathDefine["BAR2_LARGE"] = "icon/icon_fruits777_2bar_big/spriteFrame";
        SpriteFramePathDefine["BAR3_LARGE"] = "icon/icon_fruits777_3bar_big/spriteFrame";
        SpriteFramePathDefine["ICON777_LARGE"] = "icon/icon_fruits777_777_big/spriteFrame";
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
//# sourceMappingURL=f5a129eeee685e63a6c6a462d357fcba4b09df4d.js.map