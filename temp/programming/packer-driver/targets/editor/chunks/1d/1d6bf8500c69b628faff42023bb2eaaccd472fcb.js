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

      _cclegacy._RF.push({}, "894fcXgpz5Kq4t6gzgI8LIn", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefab_dfdc_gameBoard";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefab_dfdc_main";
        PrefabPathDefine["FOOTER_DOWN"] = "prefabs/prefab_dfdc_down";
        PrefabPathDefine["HEADER_UP"] = "prefabs/prefab_dfdc_header";
        PrefabPathDefine["AUTO_LAUNCHER"] = "prefabs/prefab_dfdc_auth_launcher";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_dfdc_loading";
        PrefabPathDefine["ROLLER"] = "prefabs/prefab_dfdc_roller";
        PrefabPathDefine["ICON"] = "prefabs/prefab_dfdc_scatter_icon";
        PrefabPathDefine["RULE"] = "prefabs/prefab_dfdc_introduce";
        PrefabPathDefine["DIALOG_WIN"] = "prefabs/prefab_dfdc_youwin";
        PrefabPathDefine["CONTINUE"] = "prefabs/prefab_dfdc_scatter_continue";
        PrefabPathDefine["POPUP"] = "prefabs/prefab_dfdc_popup";
        PrefabPathDefine["JACKPOT_GAME"] = "prefabs/prefab_dfdc_jackpot_game";
        PrefabPathDefine["FLY_BG"] = "prefabs/prefab_dfdc_hengfu";
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
//# sourceMappingURL=1d6bf8500c69b628faff42023bb2eaaccd472fcb.js.map