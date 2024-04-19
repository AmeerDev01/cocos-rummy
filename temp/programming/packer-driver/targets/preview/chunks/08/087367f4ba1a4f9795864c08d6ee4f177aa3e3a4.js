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

      _cclegacy._RF.push({}, "e140fhrak9ML4AgW63f+Wky", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["BG_MUSIC_MAIN"] = "sound/starlight_main_bgm";
        SoundPathDefine["BG_MUSIC_1"] = "sound/starlight_free_bgm";
        SoundPathDefine["ROLLER_BEGIN"] = "sound/reel_start";
        SoundPathDefine["ROLLER_END"] = "sound/quick_stop";
        SoundPathDefine["MIN_COIN"] = "sound/minCoin";
        SoundPathDefine["MAX_COIN"] = "sound/maxCoin";
        SoundPathDefine["BUY_FREE_BTN"] = "sound/buy_free_btn";
        SoundPathDefine["BUY_RATE_BTN_CLICK"] = "sound/buy_rate_btn_click";
        SoundPathDefine["BUTTONCLICK"] = "sound/btn_click";
        SoundPathDefine["DRAGANDDROPTOTURNTHEPAGE"] = "sound/turn";
        SoundPathDefine["WIN1"] = "sound/win1";
        SoundPathDefine["WIN2"] = "sound/win2";
        SoundPathDefine["WIN3"] = "sound/win3";
        SoundPathDefine["FREE_TRANS"] = "sound/free_trans";
        SoundPathDefine["SGOVER"] = "sound/free_many";
        SoundPathDefine["SINGLE_ICON_FALL"] = "sound/single_icon_fall";
        SoundPathDefine["SCATTERT_RIGGER"] = "sound/scattert_rigger";
        SoundPathDefine["THOR_SMILES"] = "sound/lightning";
        SoundPathDefine["DROP_DOWN"] = "sound/ani_spin";
        SoundPathDefine["UI_FREESPIN"] = "sound/ui_freespin";
        SoundPathDefine["SCATTER_BONUS"] = "sound/scatter_bonus";
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
//# sourceMappingURL=087367f4ba1a4f9795864c08d6ee4f177aa3e3a4.js.map