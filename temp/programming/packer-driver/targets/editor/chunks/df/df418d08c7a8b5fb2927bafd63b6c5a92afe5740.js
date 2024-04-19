System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFileName, getFileType, _crd, getFishBatteryConfigSourceFiles, fishBatteryPosConfig;

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFileName(extras) {
    _reporterNs.report("getFileName", "../../../common/fish/FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFileType(extras) {
    _reporterNs.report("getFileType", "../../../common/fish/FishTool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      getFileName = _unresolved_2.getFileName;
      getFileType = _unresolved_2.getFileType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "935abTf0QlHfqMcVEGSJFgy", "ByBatteryPositionConfig", undefined);

      _export("getFishBatteryConfigSourceFiles", getFishBatteryConfigSourceFiles = bundlePkgName => {
        const arr = [];

        for (const key in fishBatteryPosConfig) {
          const v = fishBatteryPosConfig[key];
          const file = v.prefab;

          if (file) {
            arr.push({
              bundlePkgName: bundlePkgName,
              path: (_crd && getFileName === void 0 ? (_reportPossibleCrUseOfgetFileName({
                error: Error()
              }), getFileName) : getFileName)(file),
              sourceType: (_crd && getFileType === void 0 ? (_reportPossibleCrUseOfgetFileType({
                error: Error()
              }), getFileType) : getFileType)(file),
              source: null,
              isPreLoad: true
            });
          }
        }

        return arr;
      });
      /**
        炮台位置配置
        id: 位置id
        side: 在哪条边上 1->左,2->右,3->上,4->下
        batt_cfg_id: 炮台配置id ByBatteryConfig.lua
        pos: 所在位置
       */


      _export("fishBatteryPosConfig", fishBatteryPosConfig = {
        [1]: {
          id: 1,
          side: 4,
          pos: {
            x: 335,
            y: 5
          },
          prefab: "prefabs/ui_battery_1.prefab"
        },
        [2]: {
          id: 2,
          side: 4,
          pos: {
            x: 800,
            y: 5
          },
          prefab: "prefabs/ui_battery_2.prefab"
        },
        [3]: {
          id: 3,
          side: 3,
          pos: {
            x: 800,
            y: 5
          },
          prefab: "prefabs/ui_battery_3.prefab"
        },
        [4]: {
          id: 4,
          side: 3,
          pos: {
            x: 335,
            y: 5
          },
          prefab: "prefabs/ui_battery_4.prefab"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df418d08c7a8b5fb2927bafd63b6c5a92afe5740.js.map