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

      _cclegacy._RF.push({}, "91b6ec7WzhC1pJ/wtZUkGiC", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOADING_PANEL"] = "prefabs/prefabs_bandarQiuQiu_loading";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefabs_bandarQiuQiu_main";
        PrefabPathDefine["MANI_HE_GUAN"] = "prefabs/prefabs_bandarQiuQiu_heguan";
        PrefabPathDefine["MAIN_TITLE"] = "prefabs/prefabs_bandarQiuQiu_title";
        PrefabPathDefine["MAIN_USERS"] = "prefabs/prefabs_bandarQiuQiu_users";
        PrefabPathDefine["MAIN_FOOTER"] = "prefabs/prefabs_bandarQiuQiu_user";
        PrefabPathDefine["MAIN_SET"] = "prefabs/prefabs_bandarQiuQiu_set";
        PrefabPathDefine["MAIN_RULE"] = "prefabs/prefabs_bandarQiuQiu_rule";
        PrefabPathDefine["MAIN_HISTORY_WIN"] = "prefabs/prefabs_bandarQiuQiu_history";
        PrefabPathDefine["MAIN_SEND_CARD"] = "prefabs/prefabs_bandarQiuQiu_sendCard";
        PrefabPathDefine["MAIN_CHIP"] = "prefabs/prefabs_bandarQiuQiu_chip";
        PrefabPathDefine["MAIN_CARDS"] = "prefabs/prefabs_bandarQiuQiu_cards";
        PrefabPathDefine["MAIN_BEGIN"] = "prefabs/prefabs_bandarQiuQiu_begin";
        PrefabPathDefine["MAIN_BET_AREA"] = "prefabs/prefabs_bandarQiuQiu_bet_area";
        PrefabPathDefine["MAIN_WIN"] = "prefabs/prefabs_bandarQiuQiu_win";
        PrefabPathDefine["MAIN_LOSE"] = "prefabs/prefabs_bandarQiuQiu_lose";
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
//# sourceMappingURL=3efee0cb5f05465042fc7e9de18c468c7f660653.js.map