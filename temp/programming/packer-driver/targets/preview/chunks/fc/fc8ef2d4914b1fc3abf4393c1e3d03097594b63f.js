System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFileName, getFileType, _crd, getFishMusicResConfigSourceFiles, fishMusicResConfig;

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

      _cclegacy._RF.push({}, "fcfff7nc9VOOZ6M1Qg9qwcf", "ByMusicResConfig", undefined);

      /**
        音效资源配置表
      	
        id,资源id
        file,文件资源
        desc,描述信息
       */
      _export("getFishMusicResConfigSourceFiles", getFishMusicResConfigSourceFiles = bundlePkgName => {
        var arr = [];

        for (var key in fishMusicResConfig) {
          var v = fishMusicResConfig[key];
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

      _export("fishMusicResConfig", fishMusicResConfig = {
        [1]: {
          id: 1,
          file: "music/effect/bosscoming.mp3",
          desc: "鱼死亡"
        },
        [2]: {
          id: 2,
          file: "music/effect/bossjisha.mp3",
          desc: "鱼死亡"
        },
        [3]: {
          id: 3,
          file: "music/effect/girlchengli.mp3",
          desc: "鱼死亡"
        },
        [4]: {
          id: 4,
          file: "music/effect/boyalive.mp3",
          desc: "鱼死亡"
        },
        [5]: {
          id: 5,
          file: "music/effect/boybaoyuan.mp3",
          desc: "鱼死亡"
        },
        [6]: {
          id: 6,
          file: "music/effect/boychengzan.mp3",
          desc: "鱼死亡"
        },
        [7]: {
          id: 7,
          file: "music/effect/boyfollow.mp3",
          desc: "鱼死亡"
        },
        [8]: {
          id: 8,
          file: "music/effect/boyhujiu.mp3",
          desc: "鱼死亡"
        },
        [9]: {
          id: 9,
          file: "music/effect/boyugly.mp3",
          desc: "鱼死亡"
        },
        [10]: {
          id: 10,
          file: "music/effect/boywang.mp3",
          desc: "鱼死亡"
        },
        [11]: {
          id: 11,
          file: "music/effect/girlbaoyuan.mp3",
          desc: "鱼死亡"
        },
        [12]: {
          id: 12,
          file: "music/effect/girlchengzan.mp3",
          desc: "鱼死亡"
        },
        [13]: {
          id: 13,
          file: "music/effect/girlhelp.mp3",
          desc: "鱼死亡"
        },
        [14]: {
          id: 14,
          file: "music/effect/girlhujiu.mp3",
          desc: "鱼死亡"
        },
        [15]: {
          id: 15,
          file: "music/effect/girlpengyou.mp3",
          desc: "鱼死亡"
        },
        [16]: {
          id: 16,
          file: "music/effect/grilfriend.mp3",
          desc: "鱼死亡"
        },
        [17]: {
          id: 17,
          file: "music/effect/lottery.mp3",
          desc: "鱼死亡"
        },
        [18]: {
          id: 18,
          file: "music/effect/lunpanyinxiao.mp3",
          desc: "鱼死亡"
        },
        [19]: {
          id: 19,
          file: "music/effect/qihang.mp3",
          desc: "鱼死亡"
        },
        [20]: {
          id: 20,
          file: "music/effect/qianshui.mp3",
          desc: "鱼死亡"
        },
        [21]: {
          id: 21,
          file: "music/effect/zhadantong2.mp3",
          desc: "鱼死亡"
        },
        [22]: {
          id: 22,
          file: "music/effect/beckon.mp3",
          desc: "鱼死亡"
        },
        [23]: {
          id: 23,
          file: "music/effect/thunderflight.mp3",
          desc: "鱼死亡"
        },
        [24]: {
          id: 24,
          file: "music/effect/zhadantong1.mp3",
          desc: "鱼死亡"
        },
        [25]: {
          id: 25,
          file: "music/effect/bossjisha2.mp3",
          desc: "鱼死亡"
        },
        [26]: {
          id: 26,
          file: "music/effect/bossdrop.mp3",
          desc: "鱼死亡"
        },
        [27]: {
          id: 27,
          file: "music/effect/qianshui2.mp3",
          desc: "鱼死亡"
        },
        // --my self effid
        [1000]: {
          id: 1000,
          file: "music/effect/chanescene.mp3",
          desc: "切换场景"
        },
        [1001]: {
          id: 1001,
          file: "music/effect/sendpao.mp3",
          desc: "发射炮弹"
        },
        [1002]: {
          id: 1002,
          file: "music/effect/deadfishcoin.mp3",
          desc: "产生金币"
        },
        [1003]: {
          id: 1003,
          file: "music/effect/coinluoru.mp3",
          desc: "金币飞入"
        },
        [1004]: {
          id: 1004,
          file: "music/effect/updownpao.mp3",
          desc: "加减炮"
        },
        [1005]: {
          id: 1005,
          file: "music/effect/paoupdate.mp3",
          desc: "更换炮"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc8ef2d4914b1fc3abf4393c1e3d03097594b63f.js.map