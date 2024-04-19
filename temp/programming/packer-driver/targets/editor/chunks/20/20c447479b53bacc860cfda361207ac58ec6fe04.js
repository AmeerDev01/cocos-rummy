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

      _cclegacy._RF.push({}, "04e948GUplAh46b3GxfJr/p", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["BG_MUSIC_MAIN"] = "sound/fruit_main_bg";
        SoundPathDefine["BG_MUSIC_1"] = "sound/fruit_sg_bg";
        SoundPathDefine["BG_MUSIC_2"] = "sound/fruit_sg_bg2";
        SoundPathDefine["ROLLER_BEGIN"] = "sound/fast_roller";
        SoundPathDefine["ROLLER_BEGIN2"] = "sound/roll_start";
        SoundPathDefine["ROLLER_END"] = "sound/shell_end";
        SoundPathDefine["OPEN_PRIZE"] = "sound/chooseNum";
        SoundPathDefine["MIN_COIN"] = "sound/minCoin";
        SoundPathDefine["MAX_COIN"] = "sound/maxCoin";
        SoundPathDefine["OPEN_AWARDBOX"] = "sound/fruit_shell";
        SoundPathDefine["FRUIT_UP"] = "sound/fruit_up";
        SoundPathDefine["FRUIT_SHELL"] = "sound/fruit_many_shell";
        SoundPathDefine["TRANSFER"] = "sound/wild";
        SoundPathDefine["GET_COIN"] = "sound/get_coin";
        SoundPathDefine["LEVEV_UP"] = "sound/godWealth_buycard";
        SoundPathDefine["OPEN_WIN_END"] = "sound/fruit_apper_sg";
        SoundPathDefine["CLICK"] = "sound/click";
        SoundPathDefine["BIU"] = "sound/biu";
        SoundPathDefine["DING"] = "sound/ding";
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
//# sourceMappingURL=20c447479b53bacc860cfda361207ac58ec6fe04.js.map