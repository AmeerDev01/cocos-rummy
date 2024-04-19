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

      _cclegacy._RF.push({}, "fd35eRVlpdOEIPKFvudD28+", "soundDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp', 'AudioClip']);

      // 音效资源 路径
      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["MAIN_BG"] = "sound/main_bgm";
        SoundPathDefine["BTN_CLICK"] = "sound/btn_click";
        SoundPathDefine["CHIP"] = "sound/chip";
        SoundPathDefine["DEFEAT"] = "sound/defeat";
        SoundPathDefine["WIN"] = "sound/win";
        SoundPathDefine["DRAGON_CARD"] = "sound/dragon_card";
        SoundPathDefine["TIGER_CARD"] = "sound/tigger_card";
        SoundPathDefine["GET_COIN"] = "sound/get_coin";
        SoundPathDefine["TIME_OUT"] = "sound/time_out";
        SoundPathDefine["TURN_CARD"] = "sound/turn_card";
        SoundPathDefine["VOICE_CHIP"] = "sound/voice_chip";
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
//# sourceMappingURL=d86f71e0a63a1fecf0610e11205585e7f756e2ff.js.map