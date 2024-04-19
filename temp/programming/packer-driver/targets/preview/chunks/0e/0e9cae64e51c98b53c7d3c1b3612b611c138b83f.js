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

      _cclegacy._RF.push({}, "6249fczsbFCDrs5GQrdynEP", "fontDefine", undefined);

      __checkObsolete__(['Font']);

      _export("FontPathDefine", FontPathDefine = /*#__PURE__*/function (FontPathDefine) {
        FontPathDefine["WU_BET"] = "chips/num_wu";
        FontPathDefine["BLUE_BET"] = "chips/num_blue";
        FontPathDefine["DARK_BLUE_BET"] = "chips/num_darkBlue";
        FontPathDefine["GREEN_BET"] = "chips/num_green";
        FontPathDefine["ORANGE_BET"] = "chips/num_orange";
        FontPathDefine["PURPLE_BET"] = "chips/num_purple";
        FontPathDefine["RED_BET"] = "chips/num_red";
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
//# sourceMappingURL=0e9cae64e51c98b53c7d3c1b3612b611c138b83f.js.map