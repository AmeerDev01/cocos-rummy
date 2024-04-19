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

      _cclegacy._RF.push({}, "cced5aRdFZBvp5Sh8lI67BP", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOADING_PANEL"] = "prefabs/prefabs_bandar_loading";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/prefabs_bandar_main";
        PrefabPathDefine["MANI_HE_GUAN"] = "prefabs/prefabs_bandar_heguan";
        PrefabPathDefine["MAIN_CLOCK"] = "prefabs/prefabs_bandar_clock";
        PrefabPathDefine["MAIN_DOWN"] = "prefabs/prefabs_bandar_down";
        PrefabPathDefine["MAIN_ONLINES"] = "prefabs/prefabs_bandar_users_online";
        PrefabPathDefine["MAIN_TITLE"] = "prefabs/prefabs_bandar_title";
        PrefabPathDefine["MAIN_USERS"] = "prefabs/prefabs_bandar_users";
        PrefabPathDefine["MAIN_USER"] = "prefabs/prefabs_bandar_user";
        PrefabPathDefine["MAIN_SET"] = "prefabs/prefabs_bandar_set";
        PrefabPathDefine["MAIN_RULE"] = "prefabs/prefabs_bandar_glue";
        PrefabPathDefine["MAIN_HISTORY_WIN"] = "prefabs/prefabs_bandar_history";
        PrefabPathDefine["MAIN_SEND_CARD"] = "prefabs/prefabs_bandar_sendcard";
        PrefabPathDefine["MAIN_JACKPOT"] = "prefabs/prefabs_bandar_jackpot";
        PrefabPathDefine["MAIN_POT"] = "prefabs/prefabs_bandar_pot";
        PrefabPathDefine["MAIN_CHIP"] = "prefabs/prefabs_bandar_chip";
        PrefabPathDefine["MAIN_CARD_BIG"] = "prefabs/prefabs_bandar_card_big";
        PrefabPathDefine["MAIN_CARD_BANKER"] = "prefabs/prefabs_bandar_card_banker";
        PrefabPathDefine["MAIN_CARD_SMALL"] = "prefabs/prefabs_bandar_card_small";
        PrefabPathDefine["MAIN_CARD_USER"] = "prefabs/prefabs_bandar_card_user";
        PrefabPathDefine["MAIN_BEGIN"] = "prefabs/prefabs_bandar_begin";
        PrefabPathDefine["MAIN_BET_AREA"] = "prefabs/prefabs_bandar_bet";
        PrefabPathDefine["MAIN_BET_HISTORY"] = "prefabs/prefabs_bandar_bet_history";
        PrefabPathDefine["MAIN_TRIG_JACKPOT"] = "prefabs/prefabs_bandar_trigJackpot";
        PrefabPathDefine["MAIN_WIN"] = "prefabs/prefabs_bandar_win";
        PrefabPathDefine["MAIN_LOSE"] = "prefabs/prefabs_bandar_lose";
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
//# sourceMappingURL=74dd676c45fddd7348c304327a0bb9d05bedf6d4.js.map