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

      _cclegacy._RF.push({}, "63cbfiaVYdM/oI0GyhW56XG", "soundDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp', 'AudioClip']);

      // 音效资源 路径
      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["MAIN_BG"] = "sound/bandarQiuQiu_main_bg";
        SoundPathDefine["BTN_CLICK"] = "sound/btn_click";
        SoundPathDefine["CHOOSE_CHIP"] = "sound/choose_chip";
        SoundPathDefine["GET_COIN"] = "sound/recycleChip";
        SoundPathDefine["TIME_OUT"] = "sound/countdown";
        SoundPathDefine["TURN_CARD"] = "sound/flip_card";
        SoundPathDefine["SEND_CARD"] = "sound/sendcard";
        SoundPathDefine["STOP_BET"] = "sound/alert";
        SoundPathDefine["START_STOP_BET"] = "sound/show";
        SoundPathDefine["MY_WIN"] = "sound/myWin";
        SoundPathDefine["MY_LOSE"] = "sound/myLose";
        SoundPathDefine["CARD_PK"] = "sound/PK";
        SoundPathDefine["FLY_CHIP"] = "sound/bet_coin";
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
//# sourceMappingURL=966b08f7a6e8f29f556b015f2adc4f2f8337b330.js.map