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

      _cclegacy._RF.push({}, "0dd1cqXKtZIvb68VdSCK6WT", "soundDefine", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', 'sp', 'AudioClip']);

      _export("SoundPathDefine", SoundPathDefine = /*#__PURE__*/function (SoundPathDefine) {
        SoundPathDefine["egg"] = "gift/dub/ani_egg";
        SoundPathDefine["durian"] = "gift/dub/ani_durian";
        SoundPathDefine["rose"] = "gift/dub/ani_rose";
        SoundPathDefine["pan"] = "gift/dub/ani_pot";
        SoundPathDefine["beer"] = "gift/dub/ani_beer";
        SoundPathDefine["money"] = "gift/dub/ani_money";
        SoundPathDefine["bucket"] = "gift/dub/ani_labber";
        SoundPathDefine["shoe"] = "gift/dub/ani_slipper";
        SoundPathDefine["kiss"] = "gift/dub/ani_kiss";
        SoundPathDefine["cock"] = "gift/dub/ani_chicken";
        SoundPathDefine["brick"] = "gift/dub/ani_gold";
        SoundPathDefine["tomato"] = "gift/dub/ani_tomato";
        SoundPathDefine["rocket"] = "gift/dub/ani_rocket";
        SoundPathDefine["spin"] = "gift/dub/ani_spin";
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
//# sourceMappingURL=2fd95af5ae614963000e3991d37fd2be9f6a362d.js.map