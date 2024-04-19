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

      _cclegacy._RF.push({}, "1ee01ICgHlHQ6p2tgBEpNpy", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefabs_gxfcv2_loading";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/slotBgnew";
        PrefabPathDefine["ICON"] = "prefabs/icon";
        PrefabPathDefine["DIALOG_WIN"] = "prefabs/dialogWin";
        PrefabPathDefine["RULEPANEL"] = "prefabs/rulePanel";
        PrefabPathDefine["Particle2D"] = "prefabs/Particle2D";
        PrefabPathDefine["FLY_BG"] = "prefabs/flyBg";
        PrefabPathDefine["SINGLE_ICON_ROLLER"] = "prefabs/singleIconRoller";
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
//# sourceMappingURL=b16ba0a055d3c09022b68c2384680fd0fddb18bf.js.map