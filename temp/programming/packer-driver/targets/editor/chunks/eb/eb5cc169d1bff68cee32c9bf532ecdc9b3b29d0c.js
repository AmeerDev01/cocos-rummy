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

      _cclegacy._RF.push({}, "f2923fTo7xDXqKWlO6rvSt2", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefab_thor_bg_main";
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefab_thor_gameBoard";
        PrefabPathDefine["FOOTER_DOWN"] = "prefabs/prefab_thor_down_new";
        PrefabPathDefine["HEADER_UP"] = "prefabs/prefab_thor_header_new";
        PrefabPathDefine["ICON"] = "prefabs/prefab_thor_iconCar";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_thor_loading";
        PrefabPathDefine["AUTO_LAUNCHER"] = "prefabs/prefab_thor_auth_launcher";
        PrefabPathDefine["INTRODUCE"] = "prefabs/prefab_thor_introduce";
        PrefabPathDefine["BIG_PRIZE"] = "prefabs/prefab_thor_bigPrize";
        PrefabPathDefine["ROLLER"] = "prefabs/prefab_thor_roller";
        PrefabPathDefine["WINSHOW"] = "prefabs/prefab_thor_win_show";
        PrefabPathDefine["THORROLE"] = "prefabs/prefab_thor_role";
        PrefabPathDefine["SGBOX"] = "prefabs/prefab_thor_sg_box";
        PrefabPathDefine["FLY_FRUITS"] = "prefabs/prefab_thor_lightning";
        PrefabPathDefine["CACULATE"] = "prefabs/prefab_thor_smallGame_caculate";
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
//# sourceMappingURL=eb5cc169d1bff68cee32c9bf532ecdc9b3b29d0c.js.map