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

      _cclegacy._RF.push({}, "aa6abNQ29BNqojk2AZmMJuN", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["GAME_BOARD"] = "prefabs/prefab_godWealth_gameBoard";
        PrefabPathDefine["MAIN_GAME"] = "prefabs/slotPanel";
        PrefabPathDefine["FOOTER_DOWN"] = "prefabs/prefab_godWealth_down";
        PrefabPathDefine["HEADER_UP"] = "prefabs/prefab_godWealth_header";
        PrefabPathDefine["AUTO_LAUNCHER"] = "prefabs/prefab_godWealth_auth_launcher";
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefab_godWealth_loading";
        PrefabPathDefine["ROLLER"] = "prefabs/prefab_godWealth_roller";
        PrefabPathDefine["ICON"] = "prefabs/prefab_godWealth_icon";
        PrefabPathDefine["ICON2"] = "prefabs/prefab_godWealth_icon2";
        PrefabPathDefine["RULE"] = "prefabs/rulePanel";
        PrefabPathDefine["DIALOG_WIN"] = "prefabs/prefab_godWealth_bigPrize";
        PrefabPathDefine["DYNAMIC_NUMBER"] = "prefabs/dynamicNumber";
        PrefabPathDefine["FLY_BG"] = "prefabs/flyBg";
        PrefabPathDefine["JACK_POT"] = "prefabs/prefab_godWealth_jackPot";
        PrefabPathDefine["PARTICLE_2D"] = "prefabs/Particle2D";
        PrefabPathDefine["TOAST"] = "prefabs/toast";
        PrefabPathDefine["SMALL_RESULT"] = "prefabs/prefab_smallGame_win";
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
//# sourceMappingURL=a4cb32a65e60fb1c6b3fa128b29276e0c0c0b084.js.map