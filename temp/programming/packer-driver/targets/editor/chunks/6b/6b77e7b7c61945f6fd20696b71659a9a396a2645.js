System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ParticleAsset, getFileName, getFileType, _crd, getFishTexturesConfigSourceFiles, fishTexturesConfig;

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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ParticleAsset = _cc.ParticleAsset;
    }, function (_unresolved_2) {
      getFileName = _unresolved_2.getFileName;
      getFileType = _unresolved_2.getFileType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7269axZAR5DS4D2ggtAWXGr", "ByTexturesConfig", undefined); // --
      // 	id：		资源编号
      // 	stype：		资源类型 1->序列帧 2->图片 3->粒子
      // 	key：		标识资源，动画帧时为动画key
      // 	file：		文件资源
      // 	pattern：	文件格式化字符串，主要用于序列帧
      // 	ft：		帧率，单位秒
      // 	fs：		帧数
      // 	loop：		循环次数，-1为无限循环，只对动画帧生效
      // 


      __checkObsolete__(['ParticleAsset']);

      _export("getFishTexturesConfigSourceFiles", getFishTexturesConfigSourceFiles = bundlePkgName => {
        const arr = [];

        for (const key in fishTexturesConfig) {
          const v = fishTexturesConfig[key];
          const file = v.file;

          if (file) {
            arr.push({
              bundlePkgName: bundlePkgName,
              path: (_crd && getFileName === void 0 ? (_reportPossibleCrUseOfgetFileName({
                error: Error()
              }), getFileName) : getFileName)(file),
              sourceType: v.stype === 3 ? ParticleAsset : (_crd && getFileType === void 0 ? (_reportPossibleCrUseOfgetFileType({
                error: Error()
              }), getFileType) : getFileType)(file),
              source: null,
              isPreLoad: true
            });
          }
        }

        return arr;
      });

      _export("fishTexturesConfig", fishTexturesConfig = {
        //			  资源编号		资源类型			标识资源										文件资源																		文件格式化字符串 							帧率(s)			帧数			循环次数
        1: {
          id: 1,
          stype: 1,
          key: "fish1",
          file: "fish/fish120.plist",
          pattern: "fish1_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "小蓝鱼"
        },
        2: {
          id: 2,
          stype: 1,
          key: "fish2",
          file: "fish/fish120.plist",
          pattern: "fish2_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "小红鱼"
        },
        3: {
          id: 3,
          stype: 1,
          key: "fish3",
          file: "fish/fish120.plist",
          pattern: "fish3_{0}",
          ft: 0.08,
          fs: 8,
          loop: -1,
          desc: "大眼鱼"
        },
        4: {
          id: 4,
          stype: 1,
          key: "fish4",
          file: "fish/fish120.plist",
          pattern: "fish4_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "黑白纹鱼"
        },
        5: {
          id: 5,
          stype: 1,
          key: "fish5",
          file: "fish/fish120.plist",
          pattern: "fish5_{0}",
          ft: 0.08,
          fs: 16,
          loop: -1,
          desc: "黄白纹鱼"
        },
        6: {
          id: 6,
          stype: 1,
          key: "fish6",
          file: "fish/fish120.plist",
          pattern: "fish6_{0}",
          ft: 0.08,
          fs: 16,
          loop: -1,
          desc: "河豚"
        },
        7: {
          id: 7,
          stype: 1,
          key: "fish7",
          file: "fish/fish120.plist",
          pattern: "fish7_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "海马"
        },
        8: {
          id: 8,
          stype: 1,
          key: "fish8",
          file: "fish/fish120.plist",
          pattern: "fish8_{0}",
          ft: 0.08,
          fs: 24,
          loop: -1,
          desc: "彩灯鱼"
        },
        9: {
          id: 9,
          stype: 1,
          key: "fish9",
          file: "fish/fish120.plist",
          pattern: "fish9_{0}",
          ft: 0.08,
          fs: 14,
          loop: -1,
          desc: "蓝胖鱼"
        },
        10: {
          id: 10,
          stype: 1,
          key: "fish10",
          file: "fish/fish120.plist",
          pattern: "fish10_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "黄旗鱼"
        },
        11: {
          id: 11,
          stype: 1,
          key: "fish11",
          file: "fish/fish120.plist",
          pattern: "fish11_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "绿纹黄胖鱼 "
        },
        12: {
          id: 12,
          stype: 1,
          key: "fish12",
          file: "fish/fish120.plist",
          pattern: "fish12_{0}",
          ft: 0.08,
          fs: 8,
          loop: -1,
          desc: "宝石猪角鱼"
        },
        13: {
          id: 13,
          stype: 1,
          key: "fish13",
          file: "fish/fish120.plist",
          pattern: "fish13_{0}",
          ft: 0.08,
          fs: 11,
          loop: -1,
          desc: "碧蓝瞌睡鱼"
        },
        14: {
          id: 14,
          stype: 1,
          key: "fish14",
          file: "fish/fish120.plist",
          pattern: "fish14_{0}",
          ft: 0.08,
          fs: 19,
          loop: -1,
          desc: "凶恶灯笼鱼"
        },
        15: {
          id: 15,
          stype: 1,
          key: "fish15",
          file: "fish/fish120.plist",
          pattern: "fish15_{0}",
          ft: 0.08,
          fs: 14,
          loop: -1,
          desc: "乌龟"
        },
        16: {
          id: 16,
          stype: 1,
          key: "fish16",
          file: "fish/fish120.plist",
          pattern: "fish16_{0}",
          ft: 0.08,
          fs: 18,
          loop: -1,
          desc: "水母"
        },
        17: {
          id: 17,
          stype: 1,
          key: "fish17",
          file: "fish/fish120.plist",
          pattern: "fish17_{0}",
          ft: 0.08,
          fs: 15,
          loop: -1,
          desc: "海豹"
        },
        18: {
          id: 18,
          stype: 1,
          key: "fish18",
          file: "fish/fish120.plist",
          pattern: "fish18_{0}",
          ft: 0.08,
          fs: 15,
          loop: -1,
          desc: "宝石蝠鲼"
        },
        19: {
          id: 19,
          stype: 1,
          key: "fish19",
          file: "fish/fish120.plist",
          pattern: "fish19_{0}",
          ft: 0.08,
          fs: 17,
          loop: -1,
          desc: "白银剑鲨"
        },
        20: {
          id: 20,
          stype: 1,
          key: "fish20",
          file: "fish/fish120.plist",
          pattern: "fish20_{0}",
          ft: 0.08,
          fs: 16,
          loop: -1,
          desc: "黄金鲨"
        },
        21: {
          id: 21,
          stype: 1,
          key: "fish21",
          file: "fish/fish21.plist",
          pattern: "fish21_{0}",
          ft: 0.08,
          fs: 21,
          loop: -1,
          desc: "金纹海豚"
        },
        22: {
          id: 22,
          stype: 1,
          key: "fish23",
          file: "fish/fish23.plist",
          pattern: "fish23_{0}",
          ft: 0.08,
          fs: 17,
          loop: -1,
          desc: "美人鱼"
        },
        23: {
          id: 23,
          stype: 1,
          key: "fish24",
          file: "fish/fish24.plist",
          pattern: "fish24_{0}",
          ft: 0.08,
          fs: 25,
          loop: -1,
          desc: "蓝鲸王"
        },
        24: {
          id: 24,
          stype: 1,
          key: "fish28",
          file: "fish/fish28.plist",
          pattern: "fish28_{0}",
          ft: 0.08,
          fs: 12,
          loop: -1,
          desc: "炸弹桶"
        },
        25: {
          id: 25,
          stype: 1,
          key: "fish62",
          file: "fish/fish62.plist",
          pattern: "fish62_{0}",
          ft: 0.08,
          fs: 15,
          loop: -1,
          desc: "章鱼海盗王"
        },
        26: {
          id: 26,
          stype: 1,
          key: "fish63",
          file: "fish/fish63.plist",
          pattern: "fish63_{0}",
          ft: 0.08,
          fs: 11,
          loop: -1,
          desc: "骷髅海盗王"
        },
        27: {
          id: 27,
          stype: 1,
          key: "fish64",
          file: "fish/fish64.plist",
          pattern: "fish64_{0}",
          ft: 0.08,
          fs: 17,
          loop: -1,
          desc: "黄金海盗船"
        },
        28: {
          id: 28,
          stype: 1,
          key: "fish72",
          file: "fish/fish72.plist",
          pattern: "fish72_{0}",
          ft: 0.08,
          fs: 15,
          loop: -1,
          desc: "打捞潜艇"
        },
        29: {
          id: 29,
          stype: 1,
          key: "fish52",
          file: "fish/fish52.plist",
          pattern: "fish52_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "雷电球"
        },
        32: {
          id: 32,
          stype: 2,
          key: "",
          file: "effect/huangzhuanpan.png",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "金币圆盘"
        },
        33: {
          id: 33,
          stype: 2,
          key: "",
          file: "effect/liumangxing.png",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "六芒星圆盘"
        },
        34: {
          id: 34,
          stype: 2,
          key: "",
          file: "effect/luanpanda.png",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "花纹圆盘"
        },
        35: {
          id: 35,
          stype: 1,
          key: "dead",
          file: "fish/fish120.plist",
          pattern: "dead_{0}",
          ft: 0.07,
          fs: 14,
          loop: 1,
          desc: "烟消云散"
        },
        36: {
          id: 36,
          stype: 3,
          key: "",
          file: "effect/baozha.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "金币爆炸特效"
        },
        37: {
          id: 37,
          stype: 1,
          key: "baozha1",
          file: "effect/baozha1.plist",
          pattern: "baozha1_{0}",
          ft: 0.08,
          fs: 7,
          loop: -1,
          desc: "金币喷射"
        },
        38: {
          id: 38,
          stype: 1,
          key: "baozha2",
          file: "effect/baozha2.plist",
          pattern: "baozha2_{0}",
          ft: 0.08,
          fs: 7,
          loop: -1,
          desc: "宝石喷射"
        },
        39: {
          id: 39,
          stype: 3,
          key: "",
          file: "effect/chijinbi.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "吃金币"
        },
        41: {
          id: 41,
          stype: 2,
          key: "",
          file: "scene/bg1.jpg",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "海洞场景"
        },
        42: {
          id: 42,
          stype: 2,
          key: "",
          file: "scene/bg2.jpg",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "幽灵墓穴"
        },
        43: {
          id: 43,
          stype: 2,
          key: "",
          file: "scene/bg3.jpg",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "海底缝隙"
        },
        44: {
          id: 44,
          stype: 2,
          key: "",
          file: "scene/bg4.jpg",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "珊瑚礁洞"
        },
        45: {
          id: 45,
          stype: 2,
          key: "",
          file: "scene/bg5.jpg",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "海底沉船"
        },
        46: {
          id: 46,
          stype: 2,
          key: "",
          file: "scene/bg6.jpg",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "海底村落"
        },
        47: {
          id: 47,
          stype: 2,
          key: "",
          file: "scene/bg7.jpg",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "大祭坛"
        },
        48: {
          id: 48,
          stype: 1,
          key: "bg1guang0",
          file: "scene/bg1guangpls.plist",
          pattern: "bg1guang0_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "海洞场景效果1"
        },
        49: {
          id: 49,
          stype: 1,
          key: "bg1guang1",
          file: "scene/bg1guangpls.plist",
          pattern: "bg1guang1_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "海洞场景效果2"
        },
        50: {
          id: 50,
          stype: 1,
          key: "bg1guang2",
          file: "scene/bg1guangpls.plist",
          pattern: "bg1guang2_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海洞场景效果3"
        },
        51: {
          id: 51,
          stype: 1,
          key: "bg1guang3",
          file: "scene/bg1guangpls.plist",
          pattern: "bg1guang3_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海洞场景效果4"
        },
        52: {
          id: 52,
          stype: 1,
          key: "bg2guang0",
          file: "scene/bg2guangpls.plist",
          pattern: "bg2guang0_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "幽灵墓穴效果1"
        },
        53: {
          id: 53,
          stype: 1,
          key: "bg2guang1",
          file: "scene/bg2guangpls.plist",
          pattern: "bg2guang1_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "幽灵墓穴效果2"
        },
        54: {
          id: 54,
          stype: 1,
          key: "bg3guang0",
          file: "scene/bg3guangpls.plist",
          pattern: "bg3guang0_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "海底缝隙效果1"
        },
        55: {
          id: 55,
          stype: 1,
          key: "bg3guang1",
          file: "scene/bg3guangpls.plist",
          pattern: "bg3guang1_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "海底缝隙效果2"
        },
        56: {
          id: 56,
          stype: 1,
          key: "bg3guang2",
          file: "scene/bg3guangpls.plist",
          pattern: "bg3guang2_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海底缝隙效果3"
        },
        57: {
          id: 57,
          stype: 1,
          key: "bg3guang3",
          file: "scene/bg3guangpls.plist",
          pattern: "bg3guang3_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海底缝隙效果4"
        },
        58: {
          id: 58,
          stype: 1,
          key: "bg4guang0",
          file: "scene/bg4guangpls.plist",
          pattern: "bg4guang0_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "珊瑚礁洞效果1"
        },
        59: {
          id: 59,
          stype: 1,
          key: "bg4guang1",
          file: "scene/bg4guangpls.plist",
          pattern: "bg4guang1_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "珊瑚礁洞效果2"
        },
        60: {
          id: 60,
          stype: 1,
          key: "bg4guang2",
          file: "scene/bg4guangpls.plist",
          pattern: "bg4guang2_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "珊瑚礁洞效果3"
        },
        61: {
          id: 61,
          stype: 1,
          key: "bg5guang0",
          file: "scene/bg5guangpls.plist",
          pattern: "bg5guang0_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "海底沉船效果1"
        },
        62: {
          id: 62,
          stype: 1,
          key: "bg5guang1",
          file: "scene/bg5guangpls.plist",
          pattern: "bg5guang1_{0}",
          ft: 0.08,
          fs: 9,
          loop: -1,
          desc: "海底沉船效果2"
        },
        63: {
          id: 63,
          stype: 1,
          key: "bg5guang2",
          file: "scene/bg5guangpls.plist",
          pattern: "bg5guang2_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海底沉船效果3"
        },
        64: {
          id: 64,
          stype: 1,
          key: "bg6guang0",
          file: "scene/bg6guangpls.plist",
          pattern: "bg6guang0_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海底村落效果1"
        },
        65: {
          id: 65,
          stype: 1,
          key: "bg6guang1",
          file: "scene/bg6guangpls.plist",
          pattern: "bg6guang1_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海底村落效果2"
        },
        66: {
          id: 66,
          stype: 1,
          key: "bg6guang2",
          file: "scene/bg6guangpls.plist",
          pattern: "bg6guang2_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海底村落效果3"
        },
        67: {
          id: 67,
          stype: 1,
          key: "bg7guang0",
          file: "scene/bg7guangpls.plist",
          pattern: "bg7guang0_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "大祭坛效果1"
        },
        68: {
          id: 68,
          stype: 1,
          key: "bg7guang1",
          file: "scene/bg7guangpls.plist",
          pattern: "bg7guang1_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "大祭坛效果2"
        },
        69: {
          id: 69,
          stype: 1,
          key: "bg7guang2",
          file: "scene/bg7guangpls.plist",
          pattern: "bg7guang2_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "大祭坛效果3"
        },
        70: {
          id: 70,
          stype: 1,
          key: "SeaWave",
          file: "scene/SeaWave.plist",
          pattern: "SeaWave_{0}",
          ft: 0.1,
          fs: 4,
          loop: 20,
          desc: "切换海浪"
        },
        71: {
          id: 71,
          stype: 1,
          key: "paopao",
          file: "scene/paopao.plist",
          pattern: "paopao_{0}",
          ft: 0.08,
          fs: 10,
          loop: -1,
          desc: "海底气泡"
        },
        96: {
          id: 96,
          stype: 3,
          key: "",
          file: "effect/YB1.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "元宝粒子特效1"
        },
        97: {
          id: 97,
          stype: 3,
          key: "",
          file: "effect/YB2.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "元宝粒子特效2"
        },
        98: {
          id: 98,
          stype: 3,
          key: "",
          file: "effect/zhuanshi1.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "放射线粒子特效"
        },
        99: {
          id: 99,
          stype: 3,
          key: "",
          file: "effect/zhuanshi2.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "粒子特效"
        },
        100: {
          id: 100,
          stype: 3,
          key: "",
          file: "effect/zhuanshi3.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "钻石特效"
        },
        101: {
          id: 101,
          stype: 3,
          key: "",
          file: "effect/zhuanshi4.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "钻石特效"
        },
        103: {
          id: 103,
          stype: 3,
          key: "",
          file: "effect/YB3.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "元宝粒子特效3"
        },
        104: {
          id: 104,
          stype: 3,
          key: "",
          file: "effect/bz1.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "爆炸特效"
        },
        105: {
          id: 105,
          stype: 3,
          key: "",
          file: "effect/bz2.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "爆炸特效"
        },
        106: {
          id: 106,
          stype: 3,
          key: "",
          file: "effect/bz3.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "爆炸特效"
        },
        107: {
          id: 107,
          stype: 3,
          key: "",
          file: "effect/bz4.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "爆炸特效"
        },
        108: {
          id: 108,
          stype: 3,
          key: "",
          file: "effect/bp1.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        109: {
          id: 109,
          stype: 3,
          key: "",
          file: "effect/bp2.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        110: {
          id: 110,
          stype: 3,
          key: "",
          file: "effect/bp3.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        111: {
          id: 111,
          stype: 3,
          key: "",
          file: "effect/bp4.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        112: {
          id: 112,
          stype: 3,
          key: "",
          file: "effect/hua1.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        113: {
          id: 113,
          stype: 3,
          key: "",
          file: "effect/hua2.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        114: {
          id: 114,
          stype: 3,
          key: "",
          file: "effect/hua3.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        115: {
          id: 115,
          stype: 3,
          key: "",
          file: "effect/hua4.plist",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "炸弹特效"
        },
        116: {
          id: 116,
          stype: 2,
          key: "",
          file: "scene/shuiyin.png",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "体验房水印"
        },
        117: {
          id: 117,
          stype: 2,
          key: "fish74",
          file: "fish/fish74.png",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "红包鱼"
        },
        // OTHER TEXTURE DEFINE
        1000: {
          id: 1000,
          stype: 1,
          key: "paohuo",
          file: "effect/paohuo.plist",
          pattern: "paohuo_{0}",
          ft: 0.03,
          fs: 4,
          loop: 1,
          desc: "炮火"
        },
        1001: {
          id: 1001,
          stype: 1,
          key: "cannon0",
          file: "battery/cannon_norm.plist",
          pattern: "cannon0_{0}",
          ft: 0.04,
          fs: 5,
          loop: 1,
          desc: "默认皮肤"
        },
        1002: {
          id: 1002,
          stype: 1,
          key: "huanpao",
          file: "effect/changepao.plist",
          pattern: "huanpao_{0}",
          ft: 0.04,
          fs: 6,
          loop: 1,
          desc: "加减炮效果"
        },
        1003: {
          id: 1003,
          stype: 1,
          key: "jineng",
          file: "effect/jinengguangxiao.plist",
          pattern: "jineng_{0}",
          ft: 0.04,
          fs: 10,
          loop: 1,
          desc: "锁定时效果"
        },
        1004: {
          id: 1004,
          stype: 1,
          key: "lock",
          file: "common/lock.plist",
          pattern: "lock_{0}",
          ft: 0.04,
          fs: 1,
          loop: 1,
          desc: "锁定线"
        },
        1005: {
          id: 1005,
          stype: 1,
          key: "coinjump",
          file: "effect/coin.plist",
          pattern: "coinjump_{0}",
          ft: 0.05,
          fs: 12,
          loop: 1,
          desc: "金币跳动特效"
        },
        1006: {
          id: 1006,
          stype: 1,
          key: "coinzhuan",
          file: "effect/coin.plist",
          pattern: "coinzhuan_{0}",
          ft: 0.05,
          fs: 8,
          loop: 6,
          desc: "金币旋转特效"
        },
        1007: {
          id: 1007,
          stype: 1,
          key: "rubao",
          file: "effect/coin.plist",
          pattern: "rubao_{0}",
          ft: 0.03,
          fs: 6,
          loop: 1,
          desc: "金币入包特效"
        },
        1008: {
          id: 1008,
          stype: 1,
          key: "greenrayline",
          file: "effect/greenraylinepls.plist",
          pattern: "greenrayline{0}",
          ft: 0.04,
          fs: 10,
          loop: 1,
          desc: "蓝色闪电特效"
        },
        1009: {
          id: 1009,
          stype: 1,
          key: "greenrayline",
          file: "effect/yellowraylinepls.plist",
          pattern: "yellowrayline{0}",
          ft: 0.04,
          fs: 10,
          loop: 1,
          desc: "黄色闪电特效"
        },
        1010: {
          id: 1010,
          stype: 1,
          key: "bosscoming",
          file: "effect/bosscoming.plist",
          pattern: "bosscoming_{0}",
          ft: 0.06,
          fs: 30,
          loop: 1,
          desc: "boss来了动画帧"
        },
        1011: {
          id: 1011,
          stype: 2,
          key: "",
          file: "effect/bossWarn.png",
          pattern: "",
          ft: 0,
          fs: 0,
          loop: 0,
          desc: "boss来了背景"
        },
        1012: {
          id: 1012,
          stype: 1,
          key: "bigfish",
          file: "effect/bigfish.plist",
          pattern: "dy_zh{0}",
          ft: 0.08,
          fs: 8,
          loop: -1,
          desc: "大鱼转圈"
        },
        1013: {
          id: 1013,
          stype: 1,
          key: "1jizidan",
          file: "bullets/1jizidan.plist",
          pattern: "1jizidan",
          ft: 1,
          fs: 2,
          loop: -1,
          desc: "子弹"
        },
        1014: {
          id: 1014,
          stype: 1,
          key: "nengliangpao",
          file: "common/nengliangpao.plist",
          pattern: "nengliangpao_{0}",
          ft: 0.16,
          fs: 13,
          loop: -1,
          desc: "能量炮标识"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b77e7b7c61945f6fd20696b71659a9a396a2645.js.map