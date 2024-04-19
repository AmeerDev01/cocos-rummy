System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, loopFiles, _crd, PrefabPathDefine;

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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      loopFiles = _unresolved_2.loopFiles;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea14absm/1Ft4A6DmarCpB2", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefabs_egyptv2_loading";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/slotBg_new";
        PrefabPathDefine["ICON"] = "prefabs/icon";
        PrefabPathDefine["TWO_ICON"] = "prefabs/two_icon";
        PrefabPathDefine["THREE_ICON"] = "prefabs/three_icon";
        PrefabPathDefine["DIALOG_WIN"] = "prefabs/dialogWin";
        PrefabPathDefine["SINGLE_ICON_ROLLER"] = "prefabs/singleIconRoller";
        PrefabPathDefine["RULEPANEL"] = "prefabs/rulePanel";
        PrefabPathDefine["Particle2D"] = "prefabs/Particle2D";
        return PrefabPathDefine;
      }({}));

      _export("default", bundlePkgName => (_crd && loopFiles === void 0 ? (_reportPossibleCrUseOfloopFiles({
        error: Error()
      }), loopFiles) : loopFiles)(bundlePkgName, Prefab, PrefabPathDefine));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83ce00fec02aaf7f0373ccd109419e0789d78a87.js.map