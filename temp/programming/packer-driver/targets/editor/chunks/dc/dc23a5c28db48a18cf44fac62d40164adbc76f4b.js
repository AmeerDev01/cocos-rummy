System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFileName, getFileType, _crd, getFishFntResConfigSourceFiles, fishFntResConfig;

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

      _cclegacy._RF.push({}, "d0687d2pp9H/I/JLNdlbA9A", "ByFntResConfig", undefined);

      /**
        字体资源配置
       */
      _export("getFishFntResConfigSourceFiles", getFishFntResConfigSourceFiles = bundlePkgName => {
        const arr = [];

        for (const key in fishFntResConfig) {
          const v = fishFntResConfig[key];
          const file = v.src;

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

      _export("fishFntResConfig", fishFntResConfig = {
        [1]: {
          id: 1,
          desc: "鱼死亡时的分数",
          src: "fnt/battle2.fnt"
        },
        [2]: {
          id: 2,
          desc: "炮台积分",
          src: "fnt/battlejinbi.fnt"
        },
        [3]: {
          id: 3,
          desc: "倒时计",
          src: "fnt/countime.fnt"
        },
        [4]: {
          id: 4,
          desc: "大鱼死亡时的分数1",
          src: "fnt/fishdeadlabel.fnt"
        },
        [5]: {
          id: 5,
          desc: "大鱼死亡时的分数1",
          src: "fnt/fishdeadlabel1.fnt"
        },
        [6]: {
          id: 6,
          desc: "自己炮台加分提示",
          src: "fnt/hitnumber.fnt"
        },
        [7]: {
          id: 7,
          desc: "炮台倍数",
          src: "fnt/paobei.fnt"
        },
        [8]: {
          id: 8,
          desc: "大鱼转盘倍数",
          src: "fnt/zhuanpanft.fnt"
        },
        [9]: {
          id: 9,
          desc: "大鱼转盘分数",
          src: "fnt/zhuanpanft1.fnt"
        },
        [10]: {
          id: 10,
          desc: "别人炮台加分提示/分数为负",
          src: "fnt/hitnumber1.fnt"
        },
        [11]: {
          id: 11,
          desc: "分数为正",
          src: "fnt/scorewinnum.fnt"
        },
        [12]: {
          id: 12,
          desc: "分数为负",
          src: "fnt/scorelosenum.fnt"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc23a5c28db48a18cf44fac62d40164adbc76f4b.js.map