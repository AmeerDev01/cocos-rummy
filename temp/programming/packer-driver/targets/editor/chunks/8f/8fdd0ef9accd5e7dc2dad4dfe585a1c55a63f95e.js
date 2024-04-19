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

      _cclegacy._RF.push({}, "4c3287WZxNPrIjzckiT/rYo", "soundDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp', 'AudioClip']);

      // 音效资源 路径
      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["MAIN_BG"] = "sound/bandar_main_bg";
        SoundPathDefine["BTN_CLICK"] = "sound/btn_click";
        SoundPathDefine["FLY_CHIP"] = "sound/fly_chip";
        SoundPathDefine["CHOOSE_CHIP"] = "sound/choose_chip";
        SoundPathDefine["GET_COIN"] = "sound/recycle_chip";
        SoundPathDefine["TIME_OUT"] = "sound/time_out";
        SoundPathDefine["TURN_CARD"] = "sound/flop_card";
        SoundPathDefine["DEAL_CARD"] = "sound/deal_card";
        SoundPathDefine["STOP_BET"] = "sound/stop_bet";
        SoundPathDefine["START_BET"] = "sound/start_bet";
        SoundPathDefine["MY_WIN"] = "sound/bandar_myWin";
        SoundPathDefine["MY_LOSE"] = "sound/bandar_myLose";
        SoundPathDefine["CLICK_BET"] = "sound/click_bet";
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
//# sourceMappingURL=8fdd0ef9accd5e7dc2dad4dfe585a1c55a63f95e.js.map