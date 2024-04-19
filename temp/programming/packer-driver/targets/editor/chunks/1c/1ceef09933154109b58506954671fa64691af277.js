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

      _cclegacy._RF.push({}, "cbe69DM7D1ADbQE8mmQx+9i", "soundDefine", undefined);

      __checkObsolete__(['AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["btn_click"] = "dub/btn_click";
        SoundPathDefine["qq_all_in"] = "dub/qq_all_in";
        SoundPathDefine["qq_bg"] = "dub/qq_bg";
        SoundPathDefine["qq_changcard"] = "dub/qq_changcard";
        SoundPathDefine["qq_choose_card"] = "dub/qq_choose_card";
        SoundPathDefine["qq_coin"] = "dub/qq_coin";
        SoundPathDefine["qq_dead"] = "dub/qq_dead";
        SoundPathDefine["qq_fangqi"] = "dub/qq_fangqi";
        SoundPathDefine["qq_fapai"] = "dub/qq_fapai";
        SoundPathDefine["qq_game_start"] = "dub/qq_game_start";
        SoundPathDefine["qq_goodcard"] = "dub/qq_goodcard";
        SoundPathDefine["qq_guopai"] = "dub/qq_guopai";
        SoundPathDefine["qq_tuo_allin"] = "dub/qq_tuo_allin";
        SoundPathDefine["qq_win"] = "dub/qq_win";
        SoundPathDefine["qq_xiazhu_jinbi"] = "dub/qq_xiazhu_jinbi";
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
//# sourceMappingURL=1ceef09933154109b58506954671fa64691af277.js.map