System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, loopFiles, _crd, SoundPathDefine;

  function _reportPossibleCrUseOfloopFiles(extras) {
    _reporterNs.report("loopFiles", "../../base/SourceManage", _context.meta, extras);
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

      _cclegacy._RF.push({}, "3a985/MknlKZqgxGBTzemNJ", "soundDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp', 'AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["BTU_CLICK"] = "sound/hall_btn_click";
        SoundPathDefine["ERROR"] = "sound/hall_error";
        SoundPathDefine["GAME_CLICK"] = "sound/hall_game_click";
        SoundPathDefine["LOADING"] = "sound/hall_game_loading";
        SoundPathDefine["MAIN_BGM"] = "sound/hall_main_bgm";
        SoundPathDefine["POP_UP"] = "sound/hall_pop_up";
        SoundPathDefine["WINNING"] = "sound/hall_winning";
        SoundPathDefine["WHIRL"] = "sound/whirl";
        SoundPathDefine["WINLOTTERY"] = "sound/Winlottery";
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
//# sourceMappingURL=9607b80e7abc85773b970fdb2e5e414e921a421e.js.map