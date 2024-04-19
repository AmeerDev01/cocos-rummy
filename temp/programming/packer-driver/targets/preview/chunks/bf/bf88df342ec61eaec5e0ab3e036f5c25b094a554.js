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

      _cclegacy._RF.push({}, "ced39S+sdRJV5a71fHQw7xL", "prefabDefine", undefined);

      __checkObsolete__(['Prefab']);

      _export("PrefabPathDefine", PrefabPathDefine = /*#__PURE__*/function (PrefabPathDefine) {
        PrefabPathDefine["LOAING_PANEL"] = "prefabs/prefabs_quiqui_loading";
        PrefabPathDefine["ROOM_CHOOSE"] = "prefabs/prefabs_quiqui_room";
        PrefabPathDefine["MAIN_BOARD"] = "prefabs/prefabs_quiqui_main";
        PrefabPathDefine["prefabs_quiqui_left1"] = "prefabs/prefabs_quiqui_left1";
        PrefabPathDefine["prefabs_quiqui_left2"] = "prefabs/prefabs_quiqui_left2";
        PrefabPathDefine["prefabs_quiqui_left3"] = "prefabs/prefabs_quiqui_left3";
        PrefabPathDefine["prefabs_quiqui_right1"] = "prefabs/prefabs_quiqui_right1";
        PrefabPathDefine["prefabs_quiqui_right2"] = "prefabs/prefabs_quiqui_right2";
        PrefabPathDefine["prefabs_quiqui_right3"] = "prefabs/prefabs_quiqui_right3";
        PrefabPathDefine["prefabs_quiqui_mine"] = "prefabs/prefabs_quiqui_mine";
        PrefabPathDefine["SET_PANEL"] = "prefabs/prefabs_quiqui_set";
        PrefabPathDefine["prefabs_quiqui_sure"] = "prefabs/prefabs_quiqui_sure";
        PrefabPathDefine["prefads_quiqui_sendcard"] = "prefabs/prefads_quiqui_sendcard";
        PrefabPathDefine["prefabs_quiqui_bigCard"] = "prefabs/prefabs_quiqui_bigCard";
        PrefabPathDefine["prefabs_quiqui_chip"] = "prefabs/prefabs_quiqui_chip";
        PrefabPathDefine["prefabs_quiqui_operate"] = "prefabs/prefabs_quiqui_operate";
        PrefabPathDefine["prefabs_quiqui_modal"] = "prefabs/prefabs_quiqui_modal";
        PrefabPathDefine["TEST"] = "prefabs/prefabs_quiqui_test";
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
//# sourceMappingURL=bf88df342ec61eaec5e0ab3e036f5c25b094a554.js.map