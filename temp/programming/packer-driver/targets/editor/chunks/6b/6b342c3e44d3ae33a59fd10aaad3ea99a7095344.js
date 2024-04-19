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

      _cclegacy._RF.push({}, "60270+24rlDfKayeKy4qEpa", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["BG_MUSIC_MAIN"] = "sound/thor_main_bg";
        SoundPathDefine["BG_MUSIC_1"] = "sound/thor_free_bg";
        SoundPathDefine["ROLLER_BEGIN"] = "sound/reel_start";
        SoundPathDefine["ROLLER_END"] = "sound/quick_stop";
        SoundPathDefine["OPEN_PRIZE"] = "sound/chooseNum";
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
        SoundPathDefine["THOR_SMILES"] = "sound/thor_smiles";
        SoundPathDefine["DROP_DOWN"] = "sound/ani_spin";
        SoundPathDefine["SCATTER_SHOW"] = "sound/scatter_show";
        SoundPathDefine["BUY_FREE_DIALOG_CLOSE"] = "sound/buy_free_dialog_close";
        SoundPathDefine["THOR_FREE_SUMMARY"] = "sound/thor_free_summary";
        SoundPathDefine["THOR_FREE_DIALOG_WAIT"] = "sound/thor_free_dialog_wait";
        SoundPathDefine["BELL"] = "sound/bell";
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
//# sourceMappingURL=6b342c3e44d3ae33a59fd10aaad3ea99a7095344.js.map