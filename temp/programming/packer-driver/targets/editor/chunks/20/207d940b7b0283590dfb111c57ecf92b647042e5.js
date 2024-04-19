System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SkeletalPathDefine, SpriteFramePathDefine, IconId, _crd;

  function _reportPossibleCrUseOfSkeletalPathDefine(extras) {
    _reporterNs.report("SkeletalPathDefine", "./sourceDefine/skeletalDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "./sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconId(extras) {
    _reporterNs.report("IconId", "./type", _context.meta, extras);
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
      IconId = _unresolved_4.IconId;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df5dcidp6JAsomVTSbpnl6A", "config", undefined);

      _export("default", {
        sktCode: "Thor",
        name: "thor",
        gameId: 14,
        testConfig: {
          wsUrl: "",
          token: ""
        },

        /**默认底注 */
        betAmount: 20,
        rateAmount: 25,

        /**默认的列数 */
        columnCount: 6,

        /**下注金额上线点，用于配置jackpot金额的显示 */
        betAmountLimit: 1000,

        /**图标骨骼动画播放速度-快速 */
        iconTimeScaleSpeed: 3,

        /**图标骨骼动画播放速度-正常 */
        iconTimeScaleCommon: 1,

        /**切换游戏类型的时间 */
        changeGameTypeTime: 0.18,

        /**等待数据返回时间 */
        waitDataReturnTime: 4,

        /**游戏默认的固定参数 */
        normalRollOption: {
          /**开始按钮长按的事件 */
          startButtonLangTime: 1000,

          /**每一列显示几个图标 */
          showIconCount: 5,

          /**图标掉落速度 */
          iconDropTime: 0.2,

          /**单图标的高度 */
          singleRollerHeight: 112,

          /**单图标的宽度 */
          singleRollerWidth: 153,

          /**滚轴的下内边距 */
          rollerPaddingBottom: 10,

          /**单图标的上下间隔 */
          intervalHeight: 0,

          /**滚轴的高度 */
          rollerHeight: 590,

          /**滚轴的宽度 */
          rollerWidth: 153,

          /**滚轴的宽度 */
          rollerWidth0: 180,
          rollerWidth5: 160,

          /**列间隔 */
          columnInterval: 0,

          /**滚动窗口的X坐标 */
          rollerWindowX: 0,

          /**滚动窗口的Y坐标 */
          rollerWindowY: 0,

          /**大奖窗口展示时间 */
          dialogWinShowTime: 2,

          /**数字滚动步长，数字越小滚动越慢，数字越大滚动越快 */
          numberRollerTime: 10,

          /**闪电的延迟显示时间 */
          lightningDetryShowTime: 0.1,

          /**倍率的label动画参数 */
          oddsLabelAnimationParam: {
            /**多个倍率之间的间隔时间 */
            moreIntervalTime: 0.8,

            /**延迟时间 */
            delayTime: 0.3,

            /**放大倍数 */
            magnifyScale: 1.3,

            /**放大时间 */
            magnifyTime: 0.5,

            /**缩小倍数 */
            lessenScale: 0.2,

            /**缩小时间 */
            lessenTime: 1
          }
        },
        subGameRollOption: {
          /**滚轴的下内边距 */
          rollerPaddingBottom: 20,

          /**期待边框缩放 */
          expectBorderScaleX: 1,

          /**期待边框缩放 */
          expectBorderScaleY: 1,

          /**小游戏1的滚轴的高度 */
          rollerHeight: 590,

          /**滚轴的宽度 */
          rollerWidth: 152,

          /**单图标的宽度 */
          singleRollerWidth: 152,

          /**单图标的上下间隔 */
          intervalHeight1: 0,

          /**单图标的上下间隔 */
          intervalHeight2: 0,

          /**列间隔 */
          columnInterval: 12,

          /**滚动窗口的X坐标 */
          rollerWindowX: 0,

          /**滚动窗口的Y坐标 */
          rollerWindowY: 0,

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
          "name": "rhombic",

          /**图标对应的文件名称 */
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).rhombic,

          /**骨骼文件名 */
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).rhombic,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).rhombic_small,

          /**图标的动效列表，第一个是静态 */
          "animationArr": ["anima_1", "anima_1"],

          /**图标处于格子中的坐标偏移量 */
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 2,
          "name": "triangle",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).triangle,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).triangle,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).triangle_small,
          "animationArr": ["anina_icon_2", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 3,
          "name": "hexagonal",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).hexagonal,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).hexagonal,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).hexagonal_small,
          "animationArr": ["anina_icon_3", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 4,
          "name": "inverted_triangle",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).inverted_triangle,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).inverted_triangle,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).inverted_triangle_small,
          "animationArr": ["anina_icon_4", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 5,
          "name": "pentagon",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).pentagon,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).pentagon,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).pentagon_small,
          "animationArr": ["anina_icon_5", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 6,
          "name": "grail",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).grail,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).grail,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).grail_small,
          "animationArr": ["animation", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 7,
          "name": "ring",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).ring,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).ring,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).ring_small,
          "animationArr": ["animation", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 8,
          "name": "hourglass",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).hourglass,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).hourglass,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).hourglass_small,
          "animationArr": ["animation", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 9,
          "name": "crown",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).crown,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).crown,

          /**小图标 */
          "smallName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).crown_small,
          "animationArr": ["animation", "animation"],
          "distance": [0, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER,
          "name": "scatter",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).scatter,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).scatter,
          "animationArr": ["drop", "animation"],
          "distance": [2, 0],
          "scale": [0.9, 0.9]
        }, {
          "id": 11,
          "name": "green",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).green,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).green,
          "animationArr": ["anima_chibang_2", "anim_chibang_1"],
          "distance": [-1, -2],
          "scale": [0.9, 0.9]
        }, {
          "id": 12,
          "name": "blue",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).blue,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).blue,
          "animationArr": ["anima_chibang_2", "anim_chibang_1"],
          "distance": [-1, -2],
          "scale": [0.9, 0.9]
        }, {
          "id": 13,
          "name": "purple",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).purple,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).purple,
          "animationArr": ["anima_chibang_2", "anim_chibang_1"],
          "distance": [-1, -2],
          "scale": [0.9, 0.9]
        }, {
          "id": 14,
          "name": "red",
          "fileName": (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).red,
          "skeletonName": (_crd && SkeletalPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletalPathDefine({
            error: Error()
          }), SkeletalPathDefine) : SkeletalPathDefine).red,
          "animationArr": ["anima_chibang_2", "anim_chibang_1"],
          "distance": [-1, -2],
          "scale": [0.9, 0.9]
        }],

        /**线路数量 */
        linesQueueNum: 20,

        /**普通图标的滑槽(6条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        iconRollerQueue: [[2, 7, 1, 2, 2, 7, 3, 3, 5, 4, 12, 2, 2, 3, 1, 3, 2, 1, 2, 2, 1, 4, 10, 10, 1, 9, 8, 5, 3, 5, 5, 8, 2, 11, 6, 2, 4, 5, 7, 6, 1, 2, 7, 3, 1, 8, 1, 1, 2, 1, 2, 2, 3, 1, 1, 6, 5, 1, 6, 1, 2, 1, 2, 1, 3, 2, 3, 2, 5, 3, 1, 2, 9, 1, 3, 8, 5, 3, 4, 7, 4, 4, 3, 6, 1, 3, 1, 1, 1, 4, 2, 1, 6, 6, 9, 1, 1, 4, 3, 4], [2, 3, 8, 3, 1, 1, 8, 5, 9, 9, 6, 5, 3, 3, 3, 6, 3, 9, 8, 4, 6, 1, 6, 3, 8, 4, 1, 3, 10, 12, 8, 4, 7, 5, 6, 1, 7, 6, 2, 2, 4, 7, 1, 4, 9, 3, 4, 9, 5, 5, 5, 4, 2, 5, 2, 7, 7, 5, 7, 9, 1, 6, 6, 9, 2, 8, 1, 2, 6, 6, 2, 9, 5, 4, 4, 5, 8, 7, 1, 8, 3, 2, 4, 8, 7, 10, 9, 6, 1, 7, 2, 4, 11, 9, 7, 1, 3, 5, 2, 8], [3, 1, 1, 1, 6, 3, 2, 1, 2, 1, 3, 3, 2, 9, 2, 3, 1, 2, 4, 1, 7, 3, 3, 8, 3, 3, 1, 1, 2, 2, 4, 5, 4, 1, 8, 2, 1, 1, 2, 11, 4, 5, 6, 3, 1, 3, 2, 7, 1, 7, 2, 10, 6, 8, 6, 6, 5, 6, 2, 10, 5, 1, 2, 2, 1, 2, 7, 1, 5, 4, 3, 1, 8, 3, 5, 4, 4, 1, 7, 3, 2, 5, 5, 2, 9, 4, 1, 3, 12, 1, 9, 4, 2, 1, 6, 1, 2, 1, 2, 1], [4, 1, 8, 4, 2, 2, 11, 5, 7, 6, 1, 2, 7, 4, 4, 6, 5, 8, 4, 1, 3, 8, 6, 2, 1, 12, 5, 4, 2, 1, 3, 3, 8, 5, 7, 9, 5, 9, 3, 1, 6, 3, 6, 5, 6, 9, 6, 9, 4, 7, 6, 9, 9, 1, 7, 2, 3, 5, 3, 4, 10, 8, 6, 7, 8, 5, 2, 3, 8, 7, 4, 3, 2, 4, 1, 6, 4, 5, 5, 8, 2, 7, 9, 9, 9, 2, 7, 8, 3, 10, 9, 3, 1, 1, 8, 1, 5, 7, 6, 2], [8, 1, 4, 2, 2, 4, 6, 11, 6, 3, 6, 1, 3, 3, 1, 6, 2, 4, 3, 8, 6, 5, 7, 1, 1, 2, 2, 9, 2, 9, 1, 2, 2, 8, 1, 3, 4, 10, 3, 3, 5, 1, 4, 2, 3, 5, 5, 4, 5, 3, 7, 3, 3, 1, 1, 5, 3, 1, 3, 5, 2, 1, 1, 3, 2, 1, 2, 4, 1, 2, 9, 4, 1, 1, 2, 12, 2, 2, 6, 2, 1, 2, 7, 1, 1, 4, 3, 10, 5, 1, 2, 7, 1, 1, 8, 6, 7, 1, 1, 2], [7, 6, 2, 7, 7, 6, 4, 5, 10, 6, 7, 1, 2, 8, 8, 1, 5, 5, 8, 5, 1, 9, 5, 4, 3, 11, 2, 9, 1, 6, 7, 9, 7, 6, 4, 9, 5, 3, 8, 3, 5, 3, 4, 9, 2, 3, 8, 4, 7, 8, 1, 3, 4, 1, 4, 9, 4, 9, 9, 4, 3, 8, 12, 9, 2, 6, 8, 2, 2, 6, 5, 1, 10, 5, 1, 5, 3, 7, 8, 4, 6, 4, 2, 1, 3, 7, 9, 1, 1, 2, 3, 7, 6, 2, 6, 5, 2, 6, 3, 8]],

        /**开启翻倍普通图标的滑槽(6条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        rateIconRollerQueue: [[3, 3, 8, 3, 9, 4, 1, 5, 2, 5, 6, 1, 8, 1, 6, 4, 3, 2, 6, 14, 2, 1, 2, 3, 7, 5, 7, 1, 1, 7, 1, 4, 3, 5, 4, 7, 2, 2, 3, 2, 7, 9, 3, 6, 5, 3, 11, 3, 4, 2, 6, 1, 9, 6, 3, 2, 1, 13, 1, 2, 1, 6, 1, 4, 3, 8, 4, 5, 2, 12, 4, 9, 5, 5, 1, 10, 1, 4, 4, 1, 7, 8, 7, 8, 9, 5, 1, 8, 1, 2, 1, 2, 3, 3, 2, 7, 10, 6, 2, 3], [5, 4, 1, 9, 3, 5, 10, 2, 7, 1, 7, 2, 9, 5, 2, 6, 8, 2, 14, 5, 1, 4, 3, 1, 3, 3, 2, 10, 3, 6, 7, 3, 9, 4, 3, 9, 3, 1, 3, 3, 6, 2, 1, 8, 5, 4, 4, 5, 6, 13, 8, 7, 5, 2, 4, 1, 2, 8, 1, 2, 3, 1, 1, 3, 8, 4, 5, 3, 1, 12, 2, 1, 2, 4, 3, 3, 9, 2, 2, 2, 4, 2, 6, 4, 7, 11, 1, 6, 1, 6, 7, 1, 1, 1, 8, 7, 7, 1, 5, 6], [9, 2, 9, 3, 2, 9, 4, 4, 5, 4, 11, 4, 1, 2, 3, 6, 4, 2, 1, 7, 9, 3, 6, 6, 2, 3, 2, 8, 1, 6, 8, 1, 4, 5, 5, 3, 12, 3, 2, 7, 3, 1, 1, 1, 2, 2, 2, 2, 8, 13, 4, 2, 6, 1, 5, 3, 3, 7, 3, 7, 3, 5, 2, 10, 1, 8, 14, 9, 3, 1, 8, 1, 7, 1, 2, 1, 1, 7, 5, 7, 6, 10, 3, 1, 6, 2, 5, 7, 3, 1, 4, 4, 4, 5, 1, 6, 3, 8, 1, 5], [9, 8, 6, 1, 6, 5, 1, 4, 1, 14, 3, 3, 5, 5, 12, 6, 2, 1, 1, 9, 3, 7, 3, 7, 1, 2, 2, 10, 7, 3, 1, 4, 3, 9, 11, 2, 1, 5, 1, 8, 1, 2, 1, 9, 2, 2, 4, 1, 3, 4, 3, 6, 4, 3, 2, 13, 6, 3, 7, 2, 3, 5, 3, 8, 8, 1, 9, 7, 4, 3, 10, 4, 5, 7, 4, 2, 3, 7, 1, 8, 1, 6, 2, 4, 4, 2, 2, 1, 3, 5, 5, 8, 7, 1, 5, 6, 2, 2, 1, 6], [9, 4, 7, 4, 6, 10, 2, 1, 3, 5, 5, 1, 9, 4, 1, 1, 3, 3, 2, 2, 6, 5, 14, 8, 1, 1, 8, 6, 1, 3, 7, 1, 2, 1, 1, 4, 4, 12, 6, 8, 2, 4, 7, 1, 5, 1, 7, 3, 3, 2, 1, 5, 3, 5, 2, 8, 10, 4, 2, 2, 2, 4, 7, 5, 2, 13, 4, 6, 3, 3, 2, 1, 7, 1, 9, 1, 4, 6, 1, 3, 7, 5, 3, 3, 11, 9, 7, 6, 3, 5, 9, 2, 8, 6, 3, 2, 2, 8, 1, 3], [2, 2, 9, 4, 5, 7, 1, 3, 1, 2, 4, 1, 4, 6, 2, 10, 1, 2, 3, 3, 3, 2, 1, 1, 6, 3, 5, 3, 3, 5, 7, 7, 13, 1, 1, 1, 9, 1, 7, 4, 3, 9, 7, 2, 9, 5, 5, 5, 3, 4, 8, 2, 4, 4, 1, 3, 6, 3, 7, 8, 7, 4, 14, 8, 5, 8, 10, 3, 3, 6, 4, 6, 1, 2, 6, 1, 3, 5, 5, 11, 2, 1, 2, 1, 7, 6, 6, 2, 9, 4, 8, 1, 12, 1, 8, 3, 2, 2, 2, 1]],

        /**下注档位 */
        betSwitcher: [{
          /**0≤用户级别<100 */
          "level": [0, 101],

          /**可下注的额度列表 */
          "amount": [{
            "positionId": 1,
            "value": 1
          }, {
            "positionId": 2,
            "value": 2
          }, {
            "positionId": 3,
            "value": 4
          }, {
            "positionId": 4,
            "value": 8
          }, {
            "positionId": 5,
            "value": 16
          }, {
            "positionId": 6,
            "value": 20
          }, {
            "positionId": 7,
            "value": 40
          }, {
            "positionId": 8,
            "value": 60
          }, {
            "positionId": 9,
            "value": 90
          }, {
            "positionId": 10,
            "value": 120
          }, {
            "positionId": 11,
            "value": 150
          }, {
            "positionId": 12,
            "value": 200
          }, {
            "positionId": 13,
            "value": 400
          }, {
            "positionId": 14,
            "value": 600
          }, {
            "positionId": 15,
            "value": 900
          }, {
            "positionId": 16,
            "value": 1200
          }, {
            "positionId": 17,
            "value": 1500
          }, {
            "positionId": 18,
            "value": 2000
          }, {
            "positionId": 19,
            "value": 3000
          }, {
            "positionId": 20,
            "value": 4000
          }, {
            "positionId": 21,
            "value": 6000
          }, {
            "positionId": 22,
            "value": 8000
          }, {
            "positionId": 23,
            "value": 10000
          }]
        }],

        /**中奖配置 */
        winning: [{
          "id": 1,
          "name": "bigwin",
          "fileName": "car/thor_jiesuan",
          "defaultSkin": "big",
          "wintype": "small",
          "minRate": 251,
          "maxRate": 500
        }, {
          "id": 2,
          "name": "megawin",
          "fileName": "car/thor_jiesuan",
          "defaultSkin": "MEGA",
          "wintype": "small",
          "minRate": 501,
          "maxRate": 1000
        }, {
          "id": 3,
          "name": "superwin",
          "fileName": "car/thor_jiesuan",
          "defaultSkin": "SUPER",
          "wintype": "small",
          "minRate": 1001,
          "maxRate": 1600
        }, {
          "id": 4,
          "name": "epicwin",
          "fileName": "car/thor_jiesuan",
          "defaultSkin": "EPIC",
          "minRate": 1601,
          "wintype": "big",
          "maxRate": 3000
        }, {
          "id": 5,
          "name": "ultimatewin",
          "fileName": "car/thor_jiesuan",
          "defaultSkin": "ULTIMATE",
          "wintype": "big",
          "minRate": 3001,
          "maxRate": 99999
        }]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=207d940b7b0283590dfb111c57ecf92b647042e5.js.map