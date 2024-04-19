import { SkeletalPathDefine } from "./sourceDefine/skeletalDefine";
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { DialogType, DirectionType, IconId } from "./type";

export default {
  sktCode: "Egypt",
  name: "Egypt",
  gameId: 8,
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
    singleRollerHeight: 100,
    /**单图标的宽度 */
    singleRollerWidth: 100,
    /**滚轴的下内边距 */
    rollerPaddingBottom: 25,
    /**滚轴的高度 */
    rollerHeight: 390,
    /**单图标的上下间隔 */
    intervalHeight: 25,
    /**列间隔 */
    columnInterval: 12,
    /**滚动窗口的X坐标 */
    rollerWindowX: -388,
    /**滚动窗口的Y坐标 */
    rollerWindowY: 47,
    /**大奖窗口展示时间 */
    dialogWinShowTime: 2,
    /**数字滚动步长，数字越小滚动越慢，数字越大滚动越快 */
    numberRollerTime: 10,
    /**放大缩小时间 */
    zoomingTime: 1,
    /**三个WILD合并图标的高度 */
    threeIconScaleY: 0.95,
    /**两个个WILD合并图标的高度 */
    twoIconScaleY: 0.95,
  },
  subGameRollOption: {
    /**滚轴的下内边距 */
    rollerPaddingBottom: 20,
    /**期待边框缩放 */
    expectBorderScaleX: 1,
    /**期待边框缩放 */
    expectBorderScaleY: 1,
    /**小游戏1的滚轴的高度 */
    rollerHeight1: 420,
    /**小游戏2的滚轴的高度 */
    rollerHeight2: 380,
    /**单图标的上下间隔 */
    intervalHeight1: 39,
    /**单图标的上下间隔 */
    intervalHeight2: 25,
    /**列间隔 */
    columnInterval: 12,
    /**滚动窗口的X坐标 */
    rollerWindowX: -388,
    /**滚动窗口的Y坐标 */
    rollerWindowY: 47,
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
    twoIconScaleY: 1,
  },
  /**普通图标 */
  icon: [
    {
      /**图标id */
      "id": 1,
      /**图标名称,用于人肉识别 */
      "name": "iconA",
      /**图标对应的文件名称 */
      "fileName": SpriteFramePathDefine.icon_nan1,
      /**骨骼文件名 */
      "skeletonName": SkeletalPathDefine.shuaige2,
      /**图标的动效列表，第一个是静态 */
      "animationArr": ["static", "dynamic"],
      /**图标处于格子中的坐标偏移量 */
      "distance": [0, 0],
      "scale": [0.9, 0.9]
    }, {
      "id": 2,
      "name": "iconB",
      "fileName": SpriteFramePathDefine.icon_ying2,
      "skeletonName": SkeletalPathDefine.yingtou2,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [0.9, 0.9]
    }, {
      "id": 3,
      "name": "iconC",
      "fileName": SpriteFramePathDefine.icon_goutou,
      "skeletonName": SkeletalPathDefine.goutou,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [0.9, 0.9]
    }, {
      "id": 4,
      "name": "iconD",
      "fileName": SpriteFramePathDefine.icon_jzt,
      "skeletonName": SkeletalPathDefine.shuaige3,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [0.9, 0.9]
    }, {
      "id": 5,
      "name": "iconE",
      "fileName": SpriteFramePathDefine.icon_szj,
      "skeletonName": SkeletalPathDefine.shizijia,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 6,
      "name": "iconF",
      "fileName": SpriteFramePathDefine.icon_a,
      "skeletonName": SkeletalPathDefine.icon_A,
      "animationArr": ["static", "dynamic"],
      "distance": [5.5, -8],
      "scale": [1, 1]
    }, {
      "id": 7,
      "name": "iconG",
      "fileName": SpriteFramePathDefine.icon_k,
      "skeletonName": SkeletalPathDefine.icon_K,
      "animationArr": ["static", "dynamic"],
      "distance": [5.5, -8],
      "scale": [1, 1]
    }, {
      "id": 8,
      "name": "iconH",
      "fileName": SpriteFramePathDefine.icon_q,
      "skeletonName": SkeletalPathDefine.icon_Q,
      "animationArr": ["static", "dynamic"],
      "distance": [5.5, -8],
      "scale": [1, 1]
    }, {
      "id": 9,
      "name": "iconI",
      "fileName": SpriteFramePathDefine.icon_j,
      "skeletonName": SkeletalPathDefine.icon_J,
      "animationArr": ["static", "dynamic"],
      "distance": [5.5, -8],
      "scale": [1, 1]
    }, {
      "id": 10,
      "name": "iconJ",
      "fileName": SpriteFramePathDefine.icon_10,
      "skeletonName": SkeletalPathDefine.icon_10,
      "animationArr": ["static", "dynamic"],
      "distance": [5.5, -8],
      "scale": [1, 1]
    }, {
      "id": IconId.SCATTER,
      "name": "scatter",
      "fileName": SpriteFramePathDefine.icon_scatter,
      "skeletonName": SkeletalPathDefine.scatter1,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [0.8, 0.8]
    }, {
      "id": IconId.WILD,
      "name": "wild",
      "fileName": SpriteFramePathDefine.icon_wild,
      "skeletonName": SkeletalPathDefine.renwu2,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [0.9, 0.9]
    }, {
      "id": IconId.BEETLE,
      "name": "bettle",
      "fileName": SpriteFramePathDefine.icon_jkc,
      "skeletonName": SkeletalPathDefine.jiakechong,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [1.1, 1.1]
    }, {
      "id": IconId.SUN_GOD,
      "name": "sunGod",
      "fileName": SpriteFramePathDefine.icon_ying1,
      "skeletonName": SkeletalPathDefine.shuaige,
      "animationArr": ["static", "dynamic"],
      "distance": [0, 0],
      "scale": [0.9, 0.9]
    },
  ],
  /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
  iconRollerQueue: [
    [2, 3, 5, 1, 2, 7, 1, 7, 4, 9, 10, 3, 2, 10, 8, 8, 10, 1, 11, 8, 5, 7, 13, 1, 11, 8, 14, 5, 13, 13, 13, 14, 5, 10, 3, 13, 13, 13, 1, 12, 6, 13, 9, 1, 4, 12, 12, 12, 6, 6, 1, 10, 11, 7, 4, 14, 13, 4, 3, 4, 6, 2, 5, 10, 4, 11],
    [13, 10, 5, 1, 3, 6, 7, 5, 5, 8, 2, 14, 3, 10, 10, 10, 7, 4, 3, 14, 2, 11, 8, 8, 8, 11, 4, 13, 13, 7, 10, 1, 13, 7, 6, 5, 12, 2, 10, 3, 14, 5, 9, 10, 6, 3, 12, 12, 12, 5, 11, 12, 8, 13, 13, 13, 6, 13, 1, 1, 5, 4, 13, 8, 2, 9],
    [9, 11, 10, 9, 10, 7, 1, 9, 14, 9, 8, 7, 13, 4, 10, 8, 11, 5, 5, 5, 8, 14, 2, 13, 11, 3, 9, 10, 12, 12, 12, 13, 3, 12, 6, 3, 6, 10, 7, 4, 4, 13, 2, 11, 8, 7, 4, 14, 9, 4, 4, 4, 10, 6, 9, 5, 13, 7, 7, 7, 2, 1, 13, 6, 6, 6],
    [13, 12, 12, 12, 9, 8, 2, 13, 4, 9, 6, 10, 5, 3, 2, 9, 1, 14, 9, 4, 13, 7, 8, 6, 11, 1, 1, 1, 11, 7, 4, 10, 7, 8, 6, 13, 8, 5, 10, 4, 14, 2, 8, 5, 12, 12, 3, 11, 14, 6, 10, 10, 10, 7, 11, 1, 12, 14, 3, 6, 5, 13, 12, 2, 13, 8],
    [13, 12, 12, 12, 3, 10, 7, 13, 2, 8, 9, 9, 1, 1, 2, 2, 10, 3, 11, 6, 6, 6, 13, 1, 1, 1, 3, 11, 5, 9, 9, 9, 5, 2, 12, 2, 7, 4, 7, 6, 12, 3, 9, 5, 7, 10, 13, 8, 8, 6, 2, 4, 8, 13, 3, 2, 6, 4, 12, 5, 7, 13, 13, 3, 4, 9]
  ],
  /**下注档位 */
  betSwitcher: [
    {
      /**0≤用户级别<100 */
      "level": [0, 101],
      /**可下注的额度列表 */
      "amount": [
        {
          "positionId": 1,
          "value": 1,
          "jackpot": 0
        },
        {
          "positionId": 2,
          "value": 2,
          "jackpot": 0
        },
        {
          "positionId": 3,
          "value": 4,
          "jackpot": 0
        },
        {
          "positionId": 4,
          "value": 8,
          "jackpot": 0
        },
        {
          "positionId": 5,
          "value": 16,
          "jackpot": 0
        },
        {
          "positionId": 6,
          "value": 20,
          "jackpot": 0
        },
        {
          "positionId": 7,
          "value": 40,
          "jackpot": 0
        },
        {
          "positionId": 8,
          "value": 60,
          "jackpot": 0
        },
        {
          "positionId": 9,
          "value": 90,
          "jackpot": 0
        },
        {
          "positionId": 10,
          "value": 120,
          "jackpot": 0
        },
        {
          "positionId": 11,
          "value": 150,
          "jackpot": 0
        },
        {
          "positionId": 12,
          "value": 200,
          "jackpot": 1
        },
        {
          "positionId": 13,
          "value": 400,
          "jackpot": 1
        },
        {
          "positionId": 14,
          "value": 600,
          "jackpot": 1
        },
        {
          "positionId": 15,
          "value": 900,
          "jackpot": 1
        },
        {
          "positionId": 16,
          "value": 1200,
          "jackpot": 1
        },
        {
          "positionId": 17,
          "value": 1500,
          "jackpot": 1
        },
        {
          "positionId": 18,
          "value": 2000,
          "jackpot": 1
        },
        {
          "positionId": 19,
          "value": 3000
        },
        {
          "positionId": 20,
          "value": 4000,
          "jackpot": 1
        },
        {
          "positionId": 21,
          "value": 6000,
          "jackpot": 1
        },
        {
          "positionId": 22,
          "value": 8000,
          "jackpot": 1
        },
        {
          "positionId": 23,
          "value": 10000,
          "jackpot": 1
        }
      ]
    }
  ],
  /**中奖配置 */
  winning: [
    {
      "id": 1,
      "name": DialogType.BIG_WIN,
      "fileName": ["sb_lbjs_BIGWIN", "slots_common_game_bw_gold"],
      "minRate": 100,
      "maxRate": 300
    },
    {
      "id": 2,
      "name": DialogType.MEGA_WIN,
      "fileName": ["sb_lbjs_MEGAWIN", "slots_common_game_ew_gold"],
      "minRate": 301,
      "maxRate": 750
    },
    {
      "id": 3,
      "name": DialogType.SUPER_WIN,
      "fileName": ["sb_lbjs_SUPERWIN", "slots_common_game_sw_gold"],
      "minRate": 751,
      "maxRate": 14999
    },
    {
      "id": 4,
      "name": DialogType.JACKPOT,
      "fileName": ["sb_lbjs_JACKPOT", "slots_common_game_uw_gold"],
      "minRate": 15000,
      "maxRate": 99999
    }
  ]
}
