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

      _cclegacy._RF.push({}, "01d65yOt49KX4F6sPyLfbIQ", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefab_phoenix_gameBoard";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/slotPanel";
        PrefabPathDefine["FOOTER_DOWN"] = "prefabs/prefab_phoenix_down";
        PrefabPathDefine["HEADER_UP"] = "prefabs/prefab_phoenix_header";
        PrefabPathDefine["AUTO_LAUNCHER"] = "prefabs/prefab_phoenix_auth_launcher";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefabs_phoenix_loading";
        PrefabPathDefine["ROLLER"] = "prefabs/prefab_phoenix_roller";
        PrefabPathDefine["ICON"] = "prefabs/prefab_phoenix_icon";
        PrefabPathDefine["RULE"] = "prefabs/rulePanel";
        PrefabPathDefine["DIALOG_WIN"] = "prefabs/prefab_phoenix_bigPrize";
        PrefabPathDefine["FLY_BG"] = "prefabs/flyBg";
        PrefabPathDefine["PHOENIX_SG_CHOOSE"] = "prefabs/node_phoenix_sgChoose";
        PrefabPathDefine["PHOENIX_TOTAL_BET"] = "prefabs/node_phoenix_totalBet";
        PrefabPathDefine["PARTICLE_2D"] = "prefabs/Particle2D";
        PrefabPathDefine["SMALL_RESULT"] = "prefabs/prefab_resultSmall";
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
//# sourceMappingURL=050c23cba2faf12552ad743826473bc9aae96220.js.map