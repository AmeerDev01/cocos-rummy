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

      _cclegacy._RF.push({}, "68497C+Eo9Drbgo7QjXJWFW", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefabs_dragonTiger_main_game";
        PrefabPathDefine["LOADING_PANEL"] = "prefabs/prefabs_dragonTiger_loading";
        PrefabPathDefine["MAIN_DOWN"] = "prefabs/prefabs_dragonTiger_down";
        PrefabPathDefine["MAIN_ONLINES"] = "prefabs/prefabs_dragonTiger_onlines";
        PrefabPathDefine["MAIN_TITLE"] = "prefabs/prefabs_dragonTiger_title";
        PrefabPathDefine["MAIN_USERS"] = "prefabs/prefabs_dragonTiger_users";
        PrefabPathDefine["MAIN_SET"] = "prefabs/prefabs_dragonTiger_set";
        PrefabPathDefine["MAIN_HISTORY_WIN"] = "prefabs/prefabs_dragonTiger_historyWin";
        PrefabPathDefine["MAIN_WIN"] = "prefabs/prefabs_dragonTiger_win";
        PrefabPathDefine["MAIN_LOSE"] = "prefabs/prefabs_dragonTiger_lose";
        PrefabPathDefine["MAIN_CHIP"] = "prefabs/prefabs_dragonTiger_chip";
        PrefabPathDefine["MAIN_POKER"] = "prefabs/prefabs_dragonTiger_poker";
        PrefabPathDefine["MAIN_RULE"] = "prefabs/prefabs_dragonTiger_rule";
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
//# sourceMappingURL=43e1482a1bf41aeb9344cd0409f56bc2706168bf.js.map