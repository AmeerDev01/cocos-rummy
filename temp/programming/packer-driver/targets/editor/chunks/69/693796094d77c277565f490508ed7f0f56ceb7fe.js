System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getFileName, getFileType, _crd, getFishBullteConfigSourceFiles, fishBullteConfig;

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

      _cclegacy._RF.push({}, "0d8dfl8zM1PmLxm6NCppae9", "ByBulletConfig", undefined);
      /**
        子弹配置
        id,子弹id
        act_v,子弹发运动速度
        bonding_box : {--包围盒
          [1] : {--一个圆
            a,b,r：圆心坐标，半径
          },
        }
      
        src,子弹资源
        my_fnet_id,为自己炮台时鱼网资源id
        oth_net_id,为其它人炮台时鱼网资源id
        desc,描述信息
       */


      _export("getFishBullteConfigSourceFiles", getFishBullteConfigSourceFiles = bundlePkgName => {
        const arr = [];

        for (const key in fishBullteConfig) {
          const v = fishBullteConfig[key];
          const file = v.src;

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

      _export("fishBullteConfig", fishBullteConfig = {
        [0]: {
          id: 0,
          desc: "默认皮肤",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/bullet_pifu1.json",
          ani: "animation",
          net_id: 0
        },
        [1]: {
          id: 1,
          desc: "超人归来",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/bullet_pifu1.json",
          ani: "animation",
          net_id: 1
        },
        [2]: {
          id: 2,
          desc: "黑暗骑士",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/bullet_pifu2.json",
          ani: "pifu2",
          net_id: 2
        },
        [3]: {
          id: 3,
          desc: "钢铁之躯",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/bullet_pifu3.json",
          ani: "pifu3",
          net_id: 3
        },
        [4]: {
          id: 4,
          desc: "正义盟友",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/bullet_pifu4.json",
          ani: "pifu3",
          net_id: 4
        },
        [5]: {
          id: 5,
          desc: "雷神之锤",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/bullet_pifu5.json",
          ani: "pifu5",
          net_id: 5
        },
        [6]: {
          id: 6,
          desc: "狮吼礼炮",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/zidan-cth.json",
          ani: "animation",
          net_id: 6
        },
        [7]: {
          id: 7,
          desc: "霸之龙炮",
          act_v: 1300,
          bonding_box: {
            [1]: {
              a: 0,
              b: 0,
              r: 16
            }
          },
          src: "bullets/zidan-3.json",
          ani: "pifu5",
          net_id: 7
        } // [8]: { id: 8, desc: "默认皮肤", act_v: 1300, bonding_box: { [1]: { a: 0, b: 0, r: 16, }, }, src: "1jizidan1.png", ani: "", net_id: 0, },

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=693796094d77c277565f490508ed7f0f56ceb7fe.js.map