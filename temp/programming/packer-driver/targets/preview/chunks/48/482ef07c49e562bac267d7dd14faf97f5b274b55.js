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

      _cclegacy._RF.push({}, "f4309o1Z2RLh7bF57LHvh6T", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["MAIN_GAME"] = "prefabs/slotBg_new";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_godWealth_loading";
        PrefabPathDefine["ICON"] = "prefabs/icon";
        PrefabPathDefine["ICON2"] = "prefabs/icon2";
        PrefabPathDefine["RULE"] = "prefabs/rulePanel";
        PrefabPathDefine["DIALOG_WIN"] = "prefabs/dialogWin";
        PrefabPathDefine["FLY_BG"] = "prefabs/flyBg";
        PrefabPathDefine["SINGLE_ICON_ROLLER"] = "prefabs/singleIconRoller";
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
//# sourceMappingURL=482ef07c49e562bac267d7dd14faf97f5b274b55.js.map