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

      _cclegacy._RF.push({}, "d0dd41KIIRBx7huVO+OGyWO", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["BG_MUSIC_MAIN"] = "sound/thor_main_bg";
        SoundPathDefine["BG_MUSIC_1"] = "sound/thor_free_bg";
        SoundPathDefine["ROLLER_BEGIN"] = "sound/reel_start";
        SoundPathDefine["QUICK_STOP"] = "sound/quick_stop";
        SoundPathDefine["DROP_BOTTOM"] = "sound/drop_bottom";
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
        SoundPathDefine["WIN4"] = "sound/win4";
        SoundPathDefine["WIN5"] = "sound/win5";
        SoundPathDefine["WIN6"] = "sound/win6";
        SoundPathDefine["WIN7"] = "sound/win7";
        SoundPathDefine["WIN8"] = "sound/win8";
        SoundPathDefine["WIN9"] = "sound/win9";
        SoundPathDefine["WIN10"] = "sound/win10";
        SoundPathDefine["FREE_TRANS"] = "sound/free_trans";
        SoundPathDefine["FREE_MANY"] = "sound/free_many";
        SoundPathDefine["SINGLE_ICON_FALL"] = "sound/single_icon_fall";
        SoundPathDefine["SCATTERT_RIGGER"] = "sound/scattert_rigger";
        SoundPathDefine["THOR_SMILES"] = "sound/thor_smiles";
        SoundPathDefine["DROP_DOWN"] = "sound/ani_spin";
        SoundPathDefine["SCATTER_SHOW"] = "sound/scatter_show";
        SoundPathDefine["BUY_FREE_DIALOG_CLOSE"] = "sound/buy_free_dialog_close";
        SoundPathDefine["THOR_FREE_SUMMARY"] = "sound/thor_free_summary";
        SoundPathDefine["THOR_FREE_DIALOG_WAIT"] = "sound/thor_free_dialog_wait";
        SoundPathDefine["BELL"] = "sound/bell";
        SoundPathDefine["SP_WIN"] = "sound/sp_win";
        SoundPathDefine["SP_WIN_SHOW"] = "sound/sp_win_show";
        SoundPathDefine["PER_HIT"] = "sound/per_hit";
        SoundPathDefine["WILD_FLASH"] = "sound/wild_flash";
        SoundPathDefine["WILD_SHOW"] = "sound/wild_show";
        SoundPathDefine["WILDMULTIPLIER"] = "sound/wildmultiplier";
        SoundPathDefine["BIGWIN"] = "sound/bigwin";
        SoundPathDefine["BIGWIN_OV"] = "sound/bigwin_ov";
        SoundPathDefine["EPICWIN"] = "sound/epicwin";
        SoundPathDefine["EPICWIN_OV"] = "sound/epicwin_ov";
        SoundPathDefine["SUPERWIN"] = "sound/superwin";
        SoundPathDefine["SUPERWIN_OV"] = "sound/superwin_ov";
        SoundPathDefine["ULTIMATEWIN"] = "sound/ultimatewin";
        SoundPathDefine["ULTIMATEWIN_OV"] = "sound/ultimatewin_ov";
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
//# sourceMappingURL=a210abcc7173fa8740ff3d8a0159489ab814245d.js.map