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

      _cclegacy._RF.push({}, "5a387D1VTROzKBKC3WQF838", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["bgMain"] = "audio/dragon_bg";
        SoundPathDefine["bgFree"] = "audio/dragon_sg_bg1";
        SoundPathDefine["bgMusic"] = "audio/dragon_sg_bg2";
        SoundPathDefine["biu"] = "audio/biu";
        SoundPathDefine["btn_click"] = "audio/btn_click";
        SoundPathDefine["ding"] = "audio/ling";
        SoundPathDefine["get_coin"] = "audio/get_coin";
        SoundPathDefine["fast_roller"] = "audio/fast_roller";
        SoundPathDefine["shell_end"] = "audio/shell_end";
        SoundPathDefine["ling"] = "audio/ling";
        SoundPathDefine["turn"] = "audio/turn";
        SoundPathDefine["maxCoin"] = "audio/maxCoin";
        SoundPathDefine["minCoin"] = "audio/minCoin";
        SoundPathDefine["voice"] = "audio/dragon_sound";
        SoundPathDefine["spitOut"] = "audio/dragon_ball";
        SoundPathDefine["fallBall"] = "audio/dragon_fall";
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
//# sourceMappingURL=20e55ba9e77e675f2d3aab080e73537a357dca0d.js.map