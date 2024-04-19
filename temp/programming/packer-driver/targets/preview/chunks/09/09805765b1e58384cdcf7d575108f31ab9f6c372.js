System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFileName, getFileType, _crd, getFishBatterySkinConfigSourceFiles, fishBatterySkinConfig;

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

      _cclegacy._RF.push({}, "4de1bPOgARKSo2haeRyWrXq", "ByBatterySkinConfig", undefined);
      /**
        炮台皮肤配置,skin
       */


      _export("getFishBatterySkinConfigSourceFiles", getFishBatterySkinConfigSourceFiles = bundlePkgName => {
        var arr = [];

        for (var key in fishBatterySkinConfig) {
          var v = fishBatterySkinConfig[key];
          var file = v.src;

          if (typeof file === 'string' && file.indexOf('.') !== -1) {
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

      _export("fishBatterySkinConfig", fishBatterySkinConfig = {
        // --普通炮台
        [0]: {
          id: 0,
          name: "默认皮肤",
          src: 1001,
          ani1: "cannon0_%d",
          ani2: "cannon_norm",
          time: 0.05,
          vip: 0
        },
        [1]: {
          id: 1,
          name: "超人归来",
          src: "battery/pao-1.json",
          ani1: "jing",
          ani2: "dong",
          time: 0.2,
          time_scale: 3.5,
          vip: 1
        },
        [2]: {
          id: 2,
          name: "黑暗骑士",
          src: "battery/pao-2.json",
          ani1: "jing",
          ani2: "dong",
          time: 0.2,
          time_scale: 3.5,
          vip: 1
        },
        [3]: {
          id: 3,
          name: "钢铁之躯",
          src: "battery/pao-3.json",
          ani1: "jing",
          ani2: "dong",
          time: 0.2,
          time_scale: 3.5,
          vip: 1
        },
        [4]: {
          id: 4,
          name: "正义盟友",
          src: "battery/pao-4.json",
          ani1: "jing",
          ani2: "dong",
          time: 0.2,
          time_scale: 3.5,
          vip: 1
        },
        [5]: {
          id: 5,
          name: "雷神之锤",
          src: "battery/pao-5.json",
          ani1: "jing",
          ani2: "dong",
          time: 0.2,
          time_scale: 3.5,
          vip: 1
        },
        [6]: {
          id: 6,
          name: "狮吼礼炮",
          src: "battery/pao-6.json",
          ani1: "jing",
          ani2: "dong",
          time: 0.2,
          time_scale: 3.5,
          vip: 1
        },
        [7]: {
          id: 7,
          name: "霸之龙炮",
          src: "battery/pao-7.json",
          ani1: "jing",
          ani2: "dong",
          time: 0.2,
          time_scale: 3.5,
          vip: 1
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09805765b1e58384cdcf7d575108f31ab9f6c372.js.map