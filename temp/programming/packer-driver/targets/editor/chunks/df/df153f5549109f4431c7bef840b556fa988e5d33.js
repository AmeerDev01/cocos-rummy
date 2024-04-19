System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, loopFiles, _crd, SoundPathDefine;

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
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2420khaXxFTqTuG2eJCMNV", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["MAIN_BG"] = "audio/godWealth_main_bg";
        SoundPathDefine["GAME1_BG"] = "audio/godWealth_sg_bg1";
        SoundPathDefine["GAME2_BG"] = "audio/godWealth_sg_bg2";
        SoundPathDefine["LING"] = "audio/ling";
        SoundPathDefine["DANG"] = "audio/godWealth_dang";
        SoundPathDefine["GAME1_OVER_BG"] = "audio/godWealth_sg_bg_over";
        SoundPathDefine["GAME2_OVER_BG"] = "audio/godWealth_guangdang";
        SoundPathDefine["BTN_CLICK"] = "audio/btn_click";
        SoundPathDefine["GET_COIN"] = "audio/get_coin";
        SoundPathDefine["SHELL_END"] = "audio/shell_end";
        SoundPathDefine["TURN"] = "audio/turn";
        SoundPathDefine["MAX_COIN"] = "audio/maxCoin";
        SoundPathDefine["MIN_COIN"] = "audio/minCoin";
        SoundPathDefine["FAST_ROLLER"] = "audio/fast_roller";
        SoundPathDefine["BIU"] = "audio/biu";
        SoundPathDefine["DING"] = "audio/ding";
        SoundPathDefine["HA"] = "audio/godWealth_hahaha";
        SoundPathDefine["WILD"] = "audio/godWealth_wild";
        SoundPathDefine["SUN_GOD"] = "audio/sunGodNum";
        return SoundPathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, AudioClip, SoundPathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df153f5549109f4431c7bef840b556fa988e5d33.js.map