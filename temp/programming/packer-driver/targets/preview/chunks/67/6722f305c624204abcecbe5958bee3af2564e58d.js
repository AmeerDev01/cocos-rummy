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

      _cclegacy._RF.push({}, "4e85eh1McZBc7nBftGKVr6Q", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefabs_fish_loading";
        PrefabPathDefine["GAME_MAIN_PANEL"] = "prefabs/prefabs_fish_main";
        PrefabPathDefine["ROOM_CHOOSE"] = "prefabs/prefabs_fish_room_choose";
        PrefabPathDefine["GAME_ROOM"] = "prefabs/prefabs_fish_room";
        PrefabPathDefine["HELP"] = "prefabs/prefabs_fish_help";
        PrefabPathDefine["GET_NEWWAP"] = "prefabs/prefabs_fish_getnewwwep";
        PrefabPathDefine["ROTATION"] = "prefabs/prefabs_fish_rotation";
        PrefabPathDefine["TEST"] = "prefabs/prefabs_fish_test";
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
//# sourceMappingURL=6722f305c624204abcecbe5958bee3af2564e58d.js.map