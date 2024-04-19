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

      _cclegacy._RF.push({}, "a6cb6tdBw9GoaBdX8hLfXG+", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["btn_click"] = "dub/btn_click";
        SoundPathDefine["domino_choose_card"] = "dub/domino_choose_card";
        SoundPathDefine["domino_coin"] = "dub/domino_coin";
        SoundPathDefine["domino_dead"] = "dub/domino_dead";
        SoundPathDefine["domino_fapai"] = "dub/domino_fapai";
        SoundPathDefine["domino_game_begin"] = "dub/domino_game_begin";
        SoundPathDefine["domino_guopai"] = "dub/domino_guopai";
        SoundPathDefine["domino_jl_bk"] = "dub/domino_jl_bk";
        SoundPathDefine["domino_send"] = "dub/domino_send";
        SoundPathDefine["domino_time_out"] = "dub/domino_time_out";
        SoundPathDefine["domino_win"] = "dub/domino_win";
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
//# sourceMappingURL=9ef0065ad10d5491f2de0f62eca3ee5f78920b02.js.map