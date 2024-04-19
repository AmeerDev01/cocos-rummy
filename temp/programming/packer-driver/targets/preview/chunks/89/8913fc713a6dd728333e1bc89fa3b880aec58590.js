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

      _cclegacy._RF.push({}, "32bdcdtVQFOo4WsxTcIXJNU", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefabs_domino_loading";
        PrefabPathDefine["MAIN_BOARD"] = "prefabs/prefabs_domino_main";
        PrefabPathDefine["ROOM_CHOOSE"] = "prefabs/prefabs_domino_room";
        PrefabPathDefine["SET_PANEL"] = "prefabs/prefabs_domino_set";
        PrefabPathDefine["MINE_SEAT"] = "prefabs/prefabs_domino_mine";
        PrefabPathDefine["LEFT_SEAT"] = "prefabs/prefabs_domino_left";
        PrefabPathDefine["RIGHT_SEAT"] = "prefabs/prefabs_domino_right";
        PrefabPathDefine["TOP_SEAT"] = "prefabs/prefabs_domino_up";
        PrefabPathDefine["CARD"] = "prefabs/prefabs_domino_bigCard";
        PrefabPathDefine["RECORD"] = "prefabs/prefabs_domino_record";
        PrefabPathDefine["SEND_CARD"] = "prefabs/prefabs_domino_sendCards";
        PrefabPathDefine["WIN_BALANCE_PANEL"] = "prefabs/prefabs_domino_win";
        PrefabPathDefine["LOSE_BALANCE_PANEL"] = "prefabs/prefabs_domino_lose";
        PrefabPathDefine["GAME_ENDING_ODDS"] = "prefabs/prefabs_domino_ending";
        PrefabPathDefine["TEST"] = "prefabs/prefabs_domino_test";
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
//# sourceMappingURL=8913fc713a6dd728333e1bc89fa3b880aec58590.js.map