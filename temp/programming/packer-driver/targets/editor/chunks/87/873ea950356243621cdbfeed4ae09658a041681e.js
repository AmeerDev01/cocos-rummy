System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Font, loopFiles, _crd, FontPathDefine;

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
      Font = _cc.Font;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e00314gB39FTaeiE4gc3zsU", "fontDefine", undefined);

      __checkObsolete__(['Font']);

      _export("FontPathDefine", FontPathDefine = /*#__PURE__*/function (FontPathDefine) {
        FontPathDefine["WU_BET"] = "font/shuzi_longhu_cm_wu";
        FontPathDefine["BLUE_BET"] = "font/shuzi_longhu_cm_lan";
        FontPathDefine["DARK_BLUE_BET"] = "font/shuzi_longhu_cm_shenlan";
        FontPathDefine["GREEN_BET"] = "font/shuzi_longhu_cm_lv";
        FontPathDefine["ORANGE_BET"] = "font/shuzi_longhu_cm_cheng";
        FontPathDefine["PURPLE_BET"] = "font/shuzi_longhu_cm_zi";
        FontPathDefine["RED_BET"] = "font/shuzi_longhu_cm_hong";
        return FontPathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, Font, FontPathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=873ea950356243621cdbfeed4ae09658a041681e.js.map