System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFileName, getFileType, _crd, getFishBgmConfigSourceFiles, fishBgmConfig;

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

      _cclegacy._RF.push({}, "3463fl6Hd9OJYxiy4q3RNJN", "ByBgmConfig", undefined);
      /**
        背景声音资源配置
        id,资源id
        file,资源路径
        desc,描述信息
       */


      _export("getFishBgmConfigSourceFiles", getFishBgmConfigSourceFiles = bundlePkgName => {
        var arr = [];

        for (var key in fishBgmConfig) {
          var v = fishBgmConfig[key];
          var file = v.file;

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

      _export("fishBgmConfig", fishBgmConfig = {
        [1]: {
          id: 1,
          file: "music/bgm/bgm1.mp3",
          desc: "场景1背景音乐"
        },
        [2]: {
          id: 2,
          file: "music/bgm/bgm2.mp3",
          desc: "场景2背景音乐"
        },
        [3]: {
          id: 3,
          file: "music/bgm/bgm3.mp3",
          desc: "场景3背景音乐"
        },
        [4]: {
          id: 4,
          file: "music/bgm/bgm4.mp3",
          desc: "场景4背景音乐"
        },
        [5]: {
          id: 5,
          file: "music/bgm/bgm5.mp3",
          desc: "场景5背景音乐"
        },
        [6]: {
          id: 6,
          file: "music/bgm/bgm6.mp3",
          desc: "场景6背景音乐"
        },
        [7]: {
          id: 7,
          file: "music/bgm/bgm7.mp3",
          desc: "场景7背景音乐"
        },
        [8]: {
          id: 8,
          file: "music/bgm/bossbgm.mp3",
          desc: "场景boss背景音乐"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7b4ff39741f98bdcaa5bde26a40581469938920.js.map