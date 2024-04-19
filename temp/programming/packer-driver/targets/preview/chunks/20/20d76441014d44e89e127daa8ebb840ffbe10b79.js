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

      _cclegacy._RF.push({}, "cd5196mpU1MnbNOpr0apdQv", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["MAIN_BG"] = "audio/phoenix_bg";
        SoundPathDefine["GAME1_BG"] = "audio/phoenix_sg_bg1";
        SoundPathDefine["GAME2_BG"] = "audio/phoenix_sg_bg2";
        SoundPathDefine["BTN_CLICK"] = "audio/btn_click";
        SoundPathDefine["GET_COIN"] = "audio/get_coin";
        SoundPathDefine["SHELL_END"] = "audio/shell_end";
        SoundPathDefine["LING"] = "audio/ling";
        SoundPathDefine["DING"] = "audio/ding";
        SoundPathDefine["TURN"] = "audio/turn";
        SoundPathDefine["MAX_COIN"] = "audio/maxCoin";
        SoundPathDefine["MIN_COIN"] = "audio/minCoin";
        SoundPathDefine["FAST_ROLLER"] = "audio/fast_roller";
        SoundPathDefine["BIU"] = "audio/biu";
        SoundPathDefine["WU_QIONG"] = "audio/chooseNum";
        SoundPathDefine["CHOOSE_CARD_IN"] = "audio/phoenix_choose_card";
        SoundPathDefine["CHOOSE_CARD"] = "audio/phoenix_card";
        SoundPathDefine["PHOENIX_ADD_NUM"] = "audio/phoenix_add_num";
        SoundPathDefine["SCATTER"] = "audio/scatter";
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
//# sourceMappingURL=20d76441014d44e89e127daa8ebb840ffbe10b79.js.map