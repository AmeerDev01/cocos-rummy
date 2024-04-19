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

      _cclegacy._RF.push({}, "463dfClgH5GPqcl6uyRctmE", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefab_fruits777_main";
        PrefabPathDefine["BOX_GAME"] = "prefabs/prefab_fruits777_boxMain";
        PrefabPathDefine["FOOTER_DOWN"] = "prefabs/prefab_fruits777_down_new";
        PrefabPathDefine["HEADER_UP"] = "prefabs/prefab_fruits777_header_new";
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefab_fruits777_gameBoard";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_fruits777_loading";
        PrefabPathDefine["ROLLER"] = "prefabs/prefab_fruits777_roller";
        PrefabPathDefine["ICON"] = "prefabs/prefab_fruits777_iconCar";
        PrefabPathDefine["ICON_S"] = "prefabs/prefab_fruits777_iconCar_simple";
        PrefabPathDefine["AUTO_LAUNCHER"] = "prefabs/prefab_fruits777_auth_launcher_new";
        PrefabPathDefine["INTRODUCE"] = "prefabs/prefab_fruits777_introduce";
        PrefabPathDefine["BIG_PRIZE"] = "prefabs/prefab_fruits777_bigPrize";
        PrefabPathDefine["FLY_FRUITS"] = "prefabs/prefab_fruits777_sgGoin";
        PrefabPathDefine["AWARD_BOX"] = "prefabs/prefab_fruits777_award_box";
        PrefabPathDefine["JACK_POT"] = "prefabs/prefab_fruits777_jackpot";
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
//# sourceMappingURL=6b0d4950e9642c1c1db0bbb442e27ca461a09dc9.js.map