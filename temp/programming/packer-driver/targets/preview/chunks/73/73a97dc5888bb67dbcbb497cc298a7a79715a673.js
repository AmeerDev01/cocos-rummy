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

      _cclegacy._RF.push({}, "d738aHungBAvobckbvDH5o3", "fontDefine", undefined);

      __checkObsolete__(['Font']);

      _export("FontPathDefine", FontPathDefine = /*#__PURE__*/function (FontPathDefine) {
        FontPathDefine["BLACK_BET"] = "font/num_blackBet";
        FontPathDefine["BLUE_BET"] = "font/num_blueBet";
        FontPathDefine["DARK_BLUE_BET"] = "font/num_darkBlueBet";
        FontPathDefine["GREEN_BET"] = "font/num_greenBet";
        FontPathDefine["ORANGE_BET"] = "font/num_orangeBet";
        FontPathDefine["PURPLE_BET"] = "font/num_purpleBet";
        FontPathDefine["RED_BET"] = "font/num_redBet";
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
//# sourceMappingURL=73a97dc5888bb67dbcbb497cc298a7a79715a673.js.map