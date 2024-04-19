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

      _cclegacy._RF.push({}, "27d97uGd3dCfKPNnf9Va5fW", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["Free_bg"] = "audio/gxfc_sg_bg1";
        SoundPathDefine["Main_bg"] = "audio/gxfc_main_bg";
        SoundPathDefine["Small_end"] = "audio/gxfc_sg_bg";
        SoundPathDefine["biu"] = "audio/biu";
        SoundPathDefine["btn_click"] = "audio/btn_click";
        SoundPathDefine["ding"] = "audio/ding";
        SoundPathDefine["get_coin"] = "audio/get_coin";
        SoundPathDefine["fast_roller"] = "audio/fast_roller";
        SoundPathDefine["shell_end"] = "audio/shell_end";
        SoundPathDefine["ling"] = "audio/ling";
        SoundPathDefine["turn"] = "audio/turn";
        SoundPathDefine["maxCoin"] = "audio/maxCoin";
        SoundPathDefine["minCoin"] = "audio/minCoin";
        SoundPathDefine["beatDrum"] = "audio/gxfc_win_beatDrum";
        SoundPathDefine["bianpao"] = "audio/gxfc_win_maroon";
        SoundPathDefine["caishen"] = "audio/gxfc_win_godWealth";
        SoundPathDefine["gu"] = "audio/gxfc_win_durm";
        SoundPathDefine["fa"] = "audio/gxfc_win_fafafa";
        SoundPathDefine["fushen"] = "audio/gxfc_win_mascot";
        SoundPathDefine["shouwa"] = "audio/gxfc_win_shouwa";
        SoundPathDefine["xiwa"] = "audio/gxfc_win_xiwa";
        SoundPathDefine["tongqian"] = "audio/gxfc_win_copper_cash";
        SoundPathDefine["yupei"] = "audio/gxfc_win_jadePendant";
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
//# sourceMappingURL=d79a2be6f95a9f2682d454fccdc0bd3cab6db1c4.js.map