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

      _cclegacy._RF.push({}, "41438n03BVGFKnX/EriVLKw", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefab_starlight_bg_main";
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefab_starlight_gameBoard";
        PrefabPathDefine["FOOTER_DOWN"] = "prefabs/prefab_starlight_down_new";
        PrefabPathDefine["HEADER_UP"] = "prefabs/prefab_starlight_header_new";
        PrefabPathDefine["ICON"] = "prefabs/prefab_starlight_iconCar";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_starlight_loading";
        PrefabPathDefine["AUTO_LAUNCHER"] = "prefabs/prefab_starlight_auth_launcher";
        PrefabPathDefine["INTRODUCE"] = "prefabs/prefab_starlight_introduce";
        PrefabPathDefine["BIG_PRIZE"] = "prefabs/prefab_starlight_bigPrize";
        PrefabPathDefine["ROLLER"] = "prefabs/prefab_starlight_roller";
        PrefabPathDefine["WINSHOW"] = "prefabs/prefab_starlight_win_show";
        PrefabPathDefine["STARLIGHTROLE"] = "prefabs/prefab_starlight_princess";
        PrefabPathDefine["SGBOX"] = "prefabs/prefab_starlight_sg_buyBox";
        PrefabPathDefine["CACULATE"] = "prefabs/prefab_starlight_smallGame_caculate";
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
//# sourceMappingURL=13557b06eb6be262babe5374f762210839e7d4b1.js.map