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

      _cclegacy._RF.push({}, "73eadnr9uFIJon18o94QUMC", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["bgFree"] = "audio/bgFree";
        SoundPathDefine["bgMain"] = "audio/bgMain";
        SoundPathDefine["bgMusic"] = "audio/bgMusic";
        SoundPathDefine["biu"] = "audio/biu";
        SoundPathDefine["btn_click"] = "audio/btn_click";
        SoundPathDefine["ding"] = "audio/ding";
        SoundPathDefine["sunGod"] = "audio/sunGod";
        SoundPathDefine["sunGodNum"] = "audio/sunGodNum";
        SoundPathDefine["get_coin"] = "audio/get_coin";
        SoundPathDefine["fast_roller"] = "audio/fast_roller";
        SoundPathDefine["shell_end"] = "audio/shell_end";
        SoundPathDefine["ling"] = "audio/ling";
        SoundPathDefine["turn"] = "audio/turn";
        SoundPathDefine["maxCoin"] = "audio/maxCoin";
        SoundPathDefine["minCoin"] = "audio/minCoin";
        SoundPathDefine["sgbegin1"] = "audio/sgbegin1";
        SoundPathDefine["guanmen"] = "audio/sgBegin";
        SoundPathDefine["haveCoin"] = "audio/haveCoin";
        SoundPathDefine["wild"] = "audio/wild";
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
//# sourceMappingURL=93721369316144c080ef205ecf3f6ce16ca631bc.js.map