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

      _cclegacy._RF.push({}, "3219eh3Z3hHB4gOoMZztq/S", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_thor_loading";
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefab_thor_gameBoard";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefab_thor_bg_main";
        PrefabPathDefine["HEADER"] = "prefabs/prefab_thor_header_new";
        PrefabPathDefine["FOOTER"] = "prefabs/prefab_thor_down_new";
        PrefabPathDefine["ICON"] = "prefabs/prefab_thor_iconCar";
        PrefabPathDefine["DIALOG_WIN"] = "prefabs/prefab_thor_bigPrize";
        PrefabPathDefine["RULEPANEL"] = "prefabs/prefab_thor_introduce";
        PrefabPathDefine["ROLLER"] = "prefabs/prefab_thor_roller";
        PrefabPathDefine["BUY_MINI"] = "prefabs/prefab_thor_sg_box";
        PrefabPathDefine["SUB_GAME_CACULATE"] = "prefabs/prefab_thor_smallGame_caculate";
        PrefabPathDefine["AUTH_LAUNCHER"] = "prefabs/prefab_thor_auth_launcher";
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
//# sourceMappingURL=0c9aaf2ca99bf495aba3d4d185191b17dbf0dcea.js.map