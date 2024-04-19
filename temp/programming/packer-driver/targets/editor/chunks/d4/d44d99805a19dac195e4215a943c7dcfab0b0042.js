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

      _cclegacy._RF.push({}, "589dfmdzJlJHKJtj483bHGA", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefabs_fishPrawnCrab_main";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefabs_fishPrawnCrab_loading";
        PrefabPathDefine["HEAD_PANEL"] = "prefabs/prefabs_fishPrawnCrab_users";
        PrefabPathDefine["HEAD"] = "prefabs/prefabs_fishPrawnCrab_head";
        PrefabPathDefine["FOOTER"] = "prefabs/prefabs_fishPrawnCrab_footer";
        PrefabPathDefine["BET_AREA"] = "prefabs/prefabs_fishPrawnCrab_bet_area";
        PrefabPathDefine["HISOTRY_MIN_PANEL"] = "prefabs/prefabs_fishPrawnCrab_history_min";
        PrefabPathDefine["HISOTRY_MAX_PANEL"] = "prefabs/prefabs_fishPrawnCrab_history_max";
        PrefabPathDefine["LOSE_PANEL"] = "prefabs/prefabs_fishPrawnCrab_lose";
        PrefabPathDefine["WIN_PANEL"] = "prefabs/prefabs_fishPrawnCrab_win";
        PrefabPathDefine["CHIP"] = "prefabs/prefabs_fishPrawnCrab_chip";
        PrefabPathDefine["SET_PANEL"] = "prefabs/prefabs_fishPrawnCrab_set";
        PrefabPathDefine["RULE_PANEL"] = "prefabs/prefabs_fishPrawnCrab_rule";
        PrefabPathDefine["TEST_PANEL"] = "prefabs/prefabs_fishPrawnCrab_test";
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
//# sourceMappingURL=d44d99805a19dac195e4215a943c7dcfab0b0042.js.map