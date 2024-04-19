System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SkeletalPathDefine, SpriteFramePathDefine, DialogType, _crd;

  function _reportPossibleCrUseOfSkeletalPathDefine(extras) {
    _reporterNs.report("SkeletalPathDefine", "./sourceDefine/skeletalDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "./sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SkeletalPathDefine = _unresolved_2.SkeletalPathDefine;
    }, function (_unresolved_3) {
      SpriteFramePathDefine = _unresolved_3.SpriteFramePathDefine;
    }, function (_unresolved_4) {
      DialogType = _unresolved_4.DialogType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49f2eT/jwJPO4Jr0UJaJUVp", "config", undefined);

      _export("default", {
        sktCode: "GongXiFaCai",
        name: "GongXiFaCai",
        gameId: 7,
        testConfig: {
          wsUrl: "",
          token: ""
        },

        /**默认底注 */
        betAmount: 45,

        /**默认的列数 */
        columnCount: 5,

        /**下注金额上线点，用于配置jackpot金额的显示 */
        betAmountLimit: 1000,

        /**游戏默认的固定参数 */
        normalRollOption: {
          /**开始按钮长按的事件 */
          startButtonLangTime: 1000,

          /**每一列显示几个图标 */
          showIconCount: 3,

          /**中奖图标闪烁时间 */
          winIconFlickerTime: 1,

          /**统一的滚动速度 */
          rollerSpeed: 30,

          /**期待滚动数组 */
          expectRollerSpeed: 20,

          /**期待边框缩放 */
          expectBorderScaleX: 1,

          /**期待边框缩放 */
          expectBorderScaleY: 0.86,

          /**停止的动作时间 */
          stopSpeed: 0.4,

          /**单图标的高度 */
          singleRollerHeight: 150,

          /**单图标的宽度 */
          singleRollerWidth: 146,

          /**滚轴的下内边距 */
          rollerPaddingBottom: 0,

          /**滚轴的高度 */
          rollerHeight: 450,

          /**单图标的上下间隔 */
          intervalHeight: 0,

          /**列间隔 */
          columnInterval: 0,

          /**滚动窗口的X坐标 */
          rollerWindowX: -411,

          /**滚动窗口的Y坐标 */
          rollerWindowY: -10,

          /**大奖窗口展示时间 */
          dialogWinShowTime: 2,

          /**数字滚动步长，数字越小滚动越慢，数字越大滚动越快 */
          numberRollerTime: 10,

          /**放大缩小时间 */
          zoomingTime: 1,

          /**三个WILD合并图标的高度 */
          threeIconScaleY: 0.95,

          /**两个个WILD合并图标的高度 */
          twoIconScaleY: 0.95
        },
        subGameRollOption: {
          /**滚轴的下内边距 */
          rollerPaddingBottom: 0,

          /**期待边框缩放 */
          expectBorderScaleX: 1,

          /**期待边框缩放 */
          expectBorderScaleY: 1,

          /**小游戏1的滚轴的高度 */
          rollerHeight1: 450,

          /**小游戏2的滚轴的高度 */
          rollerHeight2: 450,

          /**单图标的上下间隔 */
          intervalHeight1: 0,

          /**单图标的上下间隔 */
          intervalHeight2: 0,

          /**列间隔 */
          columnInterval: 0,

          /**滚动窗口的X坐标 */
          rollerWindowX: -411,

          /**滚动窗口的Y坐标 */
          rollerWindowY: -10,

          /**单个图标遮罩的宽度 */
          singleIconMaskWidth: 160,

          /**单个图标遮罩的高度 */
          singleIconMaskHeight: 130,

          /**统一的滚动速度 */
          rollerSpeed: 30,

          /**甲壳虫上面的数字飞的时长 */
          beetleFlyTime: 0.6,

          /**三个WILD合并图标的高度 */
          threeIconScaleY: 1,

          /**两个个WILD合并图标的高度 */
          twoIconScaleY: 1
        },

        /**普通图标 */
        icon: [{
          /**图标id */
          "id": 1,

          /**图标名称,用于人肉识别 */
          "name": "tongqian",

          /**图标对应的文件名称 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_tongqian,

          /**骨骼文件名 */
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_tongqian,

          /**图标的动效列表，第一个是静态 */
          "animationArr": [" ", "dynamic"],

          /**图标处于格子中的坐标偏移量 */
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 2,
          "name": "bianpao",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_bianpao,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_bianpao,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],
          "scale": [1, 1]
        }, {
          "id": 3,
          "name": "yupei",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_yupei,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_yupei,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],
          "scale": [1, 1]
        }, {
          "id": 4,
          "name": "gu",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_gu,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_gu,
          "animationArr": [" ", "animation"],
          "distance": [-0.5, 0],
          "scale": [1, 1]
        }, {
          "id": 5,
          "name": "girl",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_shouwa,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_shouwa,
          "animationArr": ["static", "dynamic"],
          "distance": [-8, 0],
          "scale": [1, 1]
        }, {
          "id": 6,
          "name": "boy",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_xiwa,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_xiwa,
          "animationArr": ["static", "dynamic"],
          "distance": [-3, 6],
          "scale": [1, 1]
        }, {
          "id": 7,
          "name": "baihuzi",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_fushen,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_fushen,
          "animationArr": ["static", "dynamic"],
          "distance": [-5, 4],
          "scale": [1, 1]
        }, {
          "id": 8,
          "name": "heihuzi",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_caishen,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_caishen,
          "animationArr": ["static", "dynamic"],
          "distance": [0, 5],
          "scale": [1, 1]
        }, {
          "id": 9,
          "name": "wild1",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_baifa,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_bai_wild,
          "animationArr": ["", "animation"],
          "distance": [0, 0],
          "scale": [1, 1]
        }, {
          "id": 10,
          "name": "wild2",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_jinfa,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).icon_jin_wild,
          "animationArr": ["static", "dynamic", "animation4"],
          "distance": [-4, 5],
          "scale": [1, 1]
        }, {
          "id": 11,
          "name": "scatter",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_scatter,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).scatter,
          "animationArr": ["animation4", "animation2", "animation3"],
          "distance": [4, 1],
          "scale": [1, 1]
        }],

        /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        iconRollerQueue: [[5, 3, 3, 10, 2, 3, 6, 8, 6, 2, 2, 5, 1, 2, 3, 5, 5, 5, 7, 1, 5, 4, 1, 7, 11, 5, 3, 4, 1, 3, 2, 9, 3, 7, 1, 1, 4, 4, 2, 7, 11, 1, 1, 4, 6, 3, 8, 6, 2, 9, 10, 2, 3, 4, 11, 7, 6, 6, 2, 7], [8, 1, 2, 6, 7, 1, 1, 6, 9, 6, 4, 6, 4, 10, 5, 3, 11, 2, 1, 1, 7, 5, 2, 6, 8, 7, 3, 4, 3, 2, 2, 2, 2, 7, 8, 5, 6, 1, 3, 8, 1, 5, 3, 3, 5, 3, 7, 3, 2, 3, 4, 4, 4, 1, 7, 5, 1, 5, 3, 6], [6, 7, 3, 1, 5, 5, 2, 1, 4, 5, 5, 7, 5, 2, 2, 7, 2, 3, 4, 6, 3, 2, 6, 9, 7, 2, 2, 8, 4, 6, 5, 1, 10, 3, 3, 6, 4, 3, 6, 2, 11, 1, 5, 4, 9, 1, 7, 3, 5, 4, 3, 7, 3, 1, 4, 1, 3, 6, 1, 8], [7, 1, 7, 5, 1, 1, 7, 1, 9, 2, 7, 6, 1, 1, 4, 5, 4, 2, 4, 8, 2, 4, 3, 2, 6, 3, 2, 6, 3, 6, 10, 6, 3, 1, 4, 6, 8, 7, 5, 6, 4, 7, 5, 3, 3, 7, 4, 3, 2, 3, 5, 2, 3, 11, 3, 3, 5, 1, 5, 8], [11, 1, 7, 1, 1, 4, 6, 1, 1, 5, 3, 8, 4, 4, 6, 6, 4, 5, 6, 5, 8, 2, 2, 1, 5, 3, 2, 3, 1, 5, 7, 9, 6, 7, 4, 8, 3, 10, 3, 1, 2, 2, 3, 2, 6, 7, 7, 7, 6, 1, 2, 5, 1, 3, 3, 6, 3, 3, 4, 3]],

        /**下注档位 */
        betSwitcher: [{
          /**0≤用户级别<100 */
          "level": [0, 101],

          /**可下注的额度列表 */
          "amount": [{
            "positionId": 1,
            "value": 1,
            "jackpot": 0
          }, {
            "positionId": 2,
            "value": 2,
            "jackpot": 0
          }, {
            "positionId": 3,
            "value": 4,
            "jackpot": 0
          }, {
            "positionId": 4,
            "value": 8,
            "jackpot": 0
          }, {
            "positionId": 5,
            "value": 16,
            "jackpot": 0
          }, {
            "positionId": 6,
            "value": 20,
            "jackpot": 0
          }, {
            "positionId": 7,
            "value": 40,
            "jackpot": 0
          }, {
            "positionId": 8,
            "value": 60,
            "jackpot": 0
          }, {
            "positionId": 9,
            "value": 90,
            "jackpot": 0
          }, {
            "positionId": 10,
            "value": 120,
            "jackpot": 0
          }, {
            "positionId": 11,
            "value": 150,
            "jackpot": 0
          }, {
            "positionId": 12,
            "value": 200,
            "jackpot": 1
          }, {
            "positionId": 13,
            "value": 400,
            "jackpot": 1
          }, {
            "positionId": 14,
            "value": 600,
            "jackpot": 1
          }, {
            "positionId": 15,
            "value": 900,
            "jackpot": 1
          }, {
            "positionId": 16,
            "value": 1200,
            "jackpot": 1
          }, {
            "positionId": 17,
            "value": 1500,
            "jackpot": 1
          }, {
            "positionId": 18,
            "value": 2000,
            "jackpot": 1
          }, {
            "positionId": 19,
            "value": 3000
          }, {
            "positionId": 20,
            "value": 4000,
            "jackpot": 1
          }, {
            "positionId": 21,
            "value": 6000,
            "jackpot": 1
          }, {
            "positionId": 22,
            "value": 8000,
            "jackpot": 1
          }, {
            "positionId": 23,
            "value": 10000,
            "jackpot": 1
          }]
        }],

        /**中奖配置 */
        winning: [{
          "id": 1,
          "name": (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).BIG_WIN,
          "fileName": ["atlas/dialog/bigwin/cs_bw", "atlas/dialog/superwin/slots_common_game_sw_gold"],
          //sb_lbjs_BIGWIN  slots_common_game_bw_gold
          "minRate": 100,
          "maxRate": 300
        }, {
          "id": 2,
          "name": (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).MEGA_WIN,
          "fileName": ["atlas/dialog/megawin/cs_mw", "atlas/dialog/superwin/slots_common_game_sw_gold"],
          // "sb_lbjs_MEGAWIN" "slots_common_game_ew_gold"
          "minRate": 301,
          "maxRate": 1250
        }, {
          "id": 3,
          "name": (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).SUPER_WIN,
          "fileName": ["atlas/dialog/superwin/cs_sw", "atlas/dialog/superwin/slots_common_game_sw_gold"],
          "minRate": 1251,
          "maxRate": 3000
        }, {
          "id": 4,
          "name": (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).JACKPOT,
          "fileName": ["atlas/dialog/jackpot/sb_lbjs_JACKPOT", "atlas/dialog/jackpot/slots_common_game_uw_gold"],
          "minRate": 3001,
          "maxRate": 99999
        }]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18b4f5c6166747249abe47a3eb9a8ea8b7a1acb5.js.map