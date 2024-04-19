System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFileName, getFileType, _crd, getFishNetConfigSourceFiles, fishNetConfig;

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

      _cclegacy._RF.push({}, "b4763rplOpCvoEQF3dn6aQ3", "ByFishNetConfig", undefined);
      /** 
        鱼网配置
        id,唯一标识
        src_id,资源id[spr_ani_config.lua]
        desc,描述信息
      */


      _export("getFishNetConfigSourceFiles", getFishNetConfigSourceFiles = bundlePkgName => {
        var arr = [];

        for (var key in fishNetConfig) {
          var v = fishNetConfig[key];
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

      _export("fishNetConfig", fishNetConfig = {
        [0]: {
          id: 0,
          desc: "默认皮肤",
          src: "bullets/hit_1ji.json",
          ani: "animation"
        },
        [1]: {
          id: 1,
          desc: "超人归来",
          src: "bullets/hit_pifu1.json",
          ani: "jibie1"
        },
        [2]: {
          id: 2,
          desc: "黑暗骑士",
          src: "bullets/hit_pifu2.json",
          ani: "jibie1"
        },
        [3]: {
          id: 3,
          desc: "钢铁之躯",
          src: "bullets/hit_pifu3.json",
          ani: "jibie1"
        },
        [4]: {
          id: 4,
          desc: "正义盟友",
          src: "bullets/hit_pifu4.json",
          ani: "jibie1"
        },
        [5]: {
          id: 5,
          desc: "雷神之锤",
          src: "bullets/hit_pifu5.json",
          ani: "jibie1"
        },
        [6]: {
          id: 6,
          desc: "狮吼礼炮",
          src: "bullets/yuwang-5.json",
          ani: "animation"
        },
        [7]: {
          id: 7,
          desc: "霸之龙炮",
          src: "bullets/yuwang-3.json",
          ani: "jibie1"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=410517b13c8e5f61fa489917ba96bc567d5381e4.js.map