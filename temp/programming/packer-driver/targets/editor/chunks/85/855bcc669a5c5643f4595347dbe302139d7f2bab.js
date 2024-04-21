System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SkeletalPathDefine, SpriteFramePathDefine, DirectionType, _crd;

  function _reportPossibleCrUseOfSkeletalPathDefine(extras) {
    _reporterNs.report("SkeletalPathDefine", "./sourceDefine/skeletalDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "./sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirectionType(extras) {
    _reporterNs.report("DirectionType", "./type", _context.meta, extras);
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
      DirectionType = _unresolved_4.DirectionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "001cbkYelNGkoIfIQ30DUtP", "config", undefined);

      _export("default", {
        sktCode: "Phoenix",
        name: "Phoenix",
        gameId: 10,
        testConfig: {
          wsUrl: "",
          token: ""
        },

        /**默认底注 */
        betAmount: 50,

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

          /**银币一次飞几个 */
          yinBiCount: 3,

          /**中奖图标闪烁时间 */
          winIconFlickerTime: 2,

          /**统一的滚动速度 */
          rollerSpeed: 30,

          /**期待滚动数组 */
          expectRollerSpeed: 20,

          /**期待边框缩放 */
          expectBorderScaleX: 1,

          /**期待边框缩放 */
          expectBorderScaleY: 1,

          /**停止的动作时间 */
          stopSpeed: 0.4,

          /**单图标的高度 */
          singleRollerHeight: 143,

          /**单图标的宽度 */
          singleRollerWidth: 157,

          /**滚轴的下内边距 */
          rollerPaddingBottom: -1,

          /**滚轴的高度 */
          rollerHeight: 446,

          /**单图标的上下间隔 */
          intervalHeight: 0,

          /**列间隔 */
          columnInterval: 4,

          /**滚动窗口的X坐标 */
          rollerWindowX: -396,

          /**滚动窗口的Y坐标 */
          rollerWindowY: 0,

          /**大奖窗口展示时间 */
          dialogWinShowTime: 2,

          /**数字滚动步长，数字越小滚动越慢，数字越大滚动越快 */
          numberRollerTime: 10,

          /**放大缩小时间 */
          zoomingTime: 1,

          /**滑动方向 */
          direction: (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN
        },
        subGameRollOption: {
          /**滚轴的下内边距 */
          rollerPaddingBottom: -1,

          /**期待边框缩放 */
          expectBorderScaleX: 1,

          /**期待边框缩放 */
          expectBorderScaleY: 1,

          /**小游戏1的滚轴的高度 */
          rollerHeight1: 446,

          /**小游戏2的滚轴的高度 */
          rollerHeight2: 446,

          /**单图标的上下间隔 */
          intervalHeight1: 0,

          /**单图标的上下间隔 */
          intervalHeight2: 0,

          /**列间隔 */
          columnInterval: 4,

          /**滚动窗口的X坐标 */
          rollerWindowX: -396,

          /**滚动窗口的Y坐标 */
          rollerWindowY: 0,

          /**单个图标遮罩的宽度 */
          singleIconMaskWidth: 160,

          /**单个图标遮罩的高度 */
          singleIconMaskHeight: 146,

          /**统一的滚动速度 */
          rollerSpeed: 30,

          /**甲壳虫上面的数字飞的时长 */
          beetleFlyTime: 0.6
        },

        /**普通图标 */
        icon: [{
          /**图标id */
          "id": 1,

          /**图标名称,用于人肉识别 */
          "name": "icon9",

          /**图标对应的文件名称 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_9,

          /**骨骼文件名 */
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_9,

          /**图标的动效列表，第一个是静态 */
          "animationArr": [" ", "animation"],

          /**图标处于格子中的坐标偏移量 */
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 2,
          "name": "icon10",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_10,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_10,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 3,
          "name": "iconJ",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_j,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_J,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 4,
          "name": "iconQ",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_Q,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_Q,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 5,
          "name": "iconK",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_K,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_K,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 6,
          "name": "iconA",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_A,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_A,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 7,
          "name": "bat",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_bat,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_BAT,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 8,
          "name": "turtle",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_tortoise,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_GUI,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 9,
          "name": "frog",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_frog,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_JINCHAN,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 10,
          "name": "tiger",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_tiger,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_HU,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 11,
          "name": "scatter",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_scatter,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_SCATTER,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 12,
          "name": "wild",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_wildG,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_WILD,
          "animationArr": [" ", "animation"],
          "distance": [0, 0],

          /**图标的缩放 */
          "scale": [1, 1]
        }, {
          "id": 13,
          "name": "yuanbao",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_yuanBao,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_YUANBAO_ZHONG_JIANG,
          "animationArr": [" ", "animation"],
          "distance": [1, -2],

          /**图标的缩放 */
          "scale": [1, 1]
        }],

        /**小游戏选择 */
        smallGame: [{
          /**次数 */
          times: 25,

          /**3连倍率 */
          initial_value3: "2",

          /**4连倍率 */
          initial_value4: "3",

          /**5连倍率 */
          initial_value5: "5",

          /**凤凰图标 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_wildG,

          /**凤凰骨骼文件 */
          "wildFileName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_NIAOG
        }, {
          times: 20,
          initial_value3: "3",
          initial_value4: "5",
          initial_value5: "8",

          /**凤凰图标 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_wildR,

          /**凤凰骨骼文件 */
          "wildFileName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_NIAOR
        }, {
          times: 15,
          initial_value3: "5",
          initial_value4: "8",
          initial_value5: "10",

          /**凤凰图标 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_wildP,

          /**凤凰骨骼文件 */
          "wildFileName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_NIAOP
        }, {
          times: 13,
          initial_value3: "8",
          initial_value4: "10",
          initial_value5: "15",

          /**凤凰图标 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_wildB,

          /**凤凰骨骼文件 */
          "wildFileName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_NIAOB
        }, {
          times: 10,
          initial_value3: "10",
          initial_value4: "15",
          initial_value5: "30",

          /**凤凰图标 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_wildY,

          /**凤凰骨骼文件 */
          "wildFileName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).TUBIAO_NIAOY
        }],

        /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        iconRollerQueue: [[8, 8, 1, 7, 6, 9, 12, 4, 13, 3, 11, 8, 1, 6, 6, 9, 5, 2, 8, 13, 6, 4, 6, 5, 13, 6, 10, 8, 7, 4, 2, 12, 1, 1, 9, 10, 3, 13, 8, 10, 9, 10, 6, 2, 7, 9, 11, 5, 12, 5, 10, 10, 7, 4, 3, 3, 7, 2, 7, 5], [6, 3, 4, 10, 6, 1, 12, 8, 8, 8, 10, 4, 13, 5, 10, 2, 2, 9, 6, 7, 9, 12, 8, 7, 9, 7, 1, 11, 1, 3, 3, 2, 6, 9, 7, 5, 5, 10, 6, 13, 13, 2, 7, 8, 13, 7, 3, 9, 12, 5, 10, 8, 6, 8, 9, 10, 4, 4, 11, 1], [7, 2, 8, 6, 9, 8, 8, 11, 1, 6, 2, 4, 8, 5, 9, 12, 7, 1, 9, 13, 4, 10, 6, 13, 4, 2, 5, 12, 7, 8, 6, 9, 3, 13, 6, 3, 10, 9, 7, 7, 5, 12, 1, 7, 6, 4, 9, 8, 10, 3, 3, 11, 10, 13, 2, 10, 5, 10, 1, 8], [6, 7, 3, 1, 10, 11, 4, 10, 4, 1, 7, 3, 2, 10, 2, 10, 8, 13, 9, 1, 11, 7, 3, 10, 2, 9, 5, 9, 6, 12, 9, 7, 8, 5, 6, 8, 13, 7, 9, 9, 7, 13, 4, 10, 12, 5, 9, 4, 8, 6, 1, 13, 5, 10, 2, 12, 6, 6, 8, 3], [2, 13, 4, 9, 6, 1, 1, 9, 4, 10, 11, 5, 10, 8, 8, 5, 8, 2, 2, 10, 8, 3, 12, 3, 13, 5, 7, 11, 6, 1, 1, 9, 6, 12, 8, 2, 10, 7, 3, 10, 5, 7, 6, 10, 9, 12, 6, 8, 1, 9, 7, 9, 4, 3, 13, 13, 4, 10, 7, 4]],

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
          "name": "bigWin",
          "fileName": ["img/dialog/bigwin/bigwin", "img/dialog/bigwin/slots_common_game_bw_gold"],
          "minRate": 100,
          "maxRate": 300
        }, {
          "id": 2,
          "name": "megaWin",
          "fileName": ["img/dialog/megawin/megawin", "img/dialog/megawin/slots_common_game_ew_gold"],
          "minRate": 301,
          "maxRate": 1250
        }, {
          "id": 3,
          "name": "superWin",
          "fileName": ["img/dialog/superwin/superwin", "img/dialog/superwin/slots_common_game_sw_gold"],
          "minRate": 1251,
          "maxRate": 3000
        }, {
          "id": 4,
          "name": "jackpot",
          "fileName": ["img/dialog/jackpot/sb_lbjs_JACKPOT", "img/dialog/jackpot/slots_common_game_uw_gold"],
          "minRate": 3001,
          "maxRate": 99999
        }]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=855bcc669a5c5643f4595347dbe302139d7f2bab.js.map