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

      _cclegacy._RF.push({}, "b712bCjdhBACadjfw2GAH5W", "soundDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp', 'AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["BTN_CLICK"] = "dub/btn_click";
        SoundPathDefine["CHIP"] = "dub/chip";
        SoundPathDefine["DEFEAT"] = "dub/defeat";
        SoundPathDefine["DONG"] = "dub/dong";
        SoundPathDefine["SIEVE"] = "dub/sieve";
        SoundPathDefine["GET_COIN"] = "dub/get_coin";
        SoundPathDefine["MAIN_BG"] = "dub/main_bg";
        SoundPathDefine["TIME_OUT"] = "dub/time_out";
        SoundPathDefine["WIN"] = "dub/win";
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
//# sourceMappingURL=b67b09bf80fede70b2f50d1d3f5e3c6e70797a69.js.map