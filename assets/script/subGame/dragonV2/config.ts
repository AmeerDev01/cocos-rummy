import { SkeletalPathDefine } from "./sourceDefine/skeletalDefine";
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { DirectionType, IconId } from "./type";

export default {
  sktCode: "DragonChase",
  name: "DragonChase",
  gameCode: 'DragonChase',
  gameId: 9,
  testConfig: {
    wsUrl: "",
    token: ""
  },
  /**默认底注 */
  betAmount: 25,
  /**默认的列数 */
  columnCount: 5,
  /**下注金额上线点，用于配置jackpot金额的显示 */
  betAmountLimit: 6,
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
    expectBorderScaleX: 2,
    /**期待边框缩放 */
    expectBorderScaleY: 2,
    /**停止的动作时间 */
    stopSpeed: 0.4,
    /**单图标的高度 */
    singleRollerHeight: 138,
    /**单图标的宽度 */
    singleRollerWidth: 170,
    /**滚轴的下内边距 */
    rollerPaddingBottom: 25,
    /**滚轴的高度 */
    rollerHeight: 390,
    /**单图标的上下间隔 */
    intervalHeight: 0,
    /**列间隔 */
    columnInterval: 5,
    /**滚动窗口的X坐标 */
    rollerWindowX: -437,
    /**滚动窗口的Y坐标 */
    rollerWindowY: -30,
    /**大奖窗口展示时间 */
    dialogWinShowTime: 2,
    /**数字滚动步长，数字越小滚动越慢，数字越大滚动越快 */
    numberRollerTime: 10,
    /**放大缩小时间 */
    zoomingTime: 1,
    /**滑动方向 */
    direction: DirectionType.DOWN
  },
  subGameRollOption: {
    /**期待边框缩放 */
    expectBorderScaleX: 2,
    /**期待边框缩放 */
    expectBorderScaleY: 2,
    /**列间隔 */
    columnInterval: 5,
    /**滚动窗口的X坐标 */
    rollerWindowX: -437,
    /**滚动窗口的Y坐标 */
    rollerWindowY: -30,
    /**单个图标遮罩的宽度 */
    singleIconMaskWidth: 170,
    /**单个图标遮罩的高度 */
    singleIconMaskHeight: 138,
    /**统一的滚动速度 */
    rollerSpeed: 30,
    /**甲壳虫上面的数字飞的时长 */
    beetleFlyTime: 0.8
  },
  /**普通图标 */
  icon: [
    {
      /**图标id */
      "id": 1,
      /**图标名称,用于人肉识别 */
      "name": "yaoqianshu",
      /**图标对应的文件名称 */
      "fileName": SpriteFramePathDefine.tubiaobaozi,
      "skeletonName": SkeletalPathDefine.yaoqianshu,
      /**图标的动效列表，第一个是静态 */
      "animationArr": ["", "animation"],
      /**图标处于格子中的坐标偏移量 */
      "distance": [0, 0],
      /**图标大小 */
      "scale": [1, 1]
    }, {
      "id": 2,
      "name": "yuanbao",
      "fileName": SpriteFramePathDefine.baohe,
      "skeletonName": SkeletalPathDefine.baohe,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 3,
      "name": "baohe",
      "fileName": SpriteFramePathDefine.yuanbao,
      "skeletonName": SkeletalPathDefine.yuanbao,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 4,
      "name": "tongqian",
      "fileName": SpriteFramePathDefine.tongqian,
      "skeletonName": SkeletalPathDefine.tongqian,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 5,
      "name": "iconA",
      "fileName": SpriteFramePathDefine.tubiaoA,
      "skeletonName": SkeletalPathDefine.tubiaoA,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 6,
      "name": "iconK",
      "fileName": SpriteFramePathDefine.tubiaoK,
      "skeletonName": SkeletalPathDefine.tubiaoK,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 7,
      "name": "iconQ",
      "fileName": SpriteFramePathDefine.tubiaoQ,
      "skeletonName": SkeletalPathDefine.tubiaoQ,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 8,
      "name": "iconJ",
      "fileName": SpriteFramePathDefine.tubiaoJ,
      "skeletonName": SkeletalPathDefine.tubiaoJ,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 9,
      "name": "icon10",
      "fileName": SpriteFramePathDefine.tubiao10,
      "skeletonName": SkeletalPathDefine.icon10,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": IconId.SCATTER,
      "name": "scatter",
      "fileName": SpriteFramePathDefine.scatter,
      "skeletonName": SkeletalPathDefine.scatter,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": IconId.BEETLE,
      "name": "baicai",
      "fileName": SpriteFramePathDefine.baicai,
      "skeletonName": SkeletalPathDefine.baicai,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }
    , {
      "id": IconId.WILD,
      "name": "wild",
      "fileName": SpriteFramePathDefine.baicai1,
      "skeletonName": SkeletalPathDefine.wild,
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    },
  ],
  awardBoxItem: [],
  /**触发jackpot特效奖励下注金额范围，包括最值 */

  betSwitcher: [
    {
      /**0≤用户级别<100 */
      "level": [0, 101],
      /**可下注的额度列表 */
      "amount": [
        {
          "positionId": 1,
          "value": 0.008,
          "jackpot": 1
        },
        {
          "positionId": 2,
          "value": 0.032,
          "jackpot": 1
        },
        {
          "positionId": 3,
          "value": 0.064,
          "jackpot": 1
        },
        {
          "positionId": 4,
          "value": 0.160,
          "jackpot": 1
        },
        {
          "positionId": 5,
          "value": 0.320,
          "jackpot": 1
        },
        {
          "positionId": 6,
          "value": 0.720,
          "jackpot": 1
        },
        {
          "positionId": 7,
          "value": 1.600,
          "jackpot": 0
        },
        {
          "positionId": 8,
          "value": 3.200,
          "jackpot": 0
        },
        {
          "positionId": 9,
          "value": 7.200,
          "jackpot": 0
        },
        {
          "positionId": 10,
          "value": 12.000,
          "jackpot": 0
        },
        {
          "positionId": 11,
          "value": 24.000,
          "jackpot": 0
        },
        {
          "positionId": 12,
          "value": 32.000,
          "jackpot": 0
        },
        {
          "positionId": 13,
          "value": 64.000,
          "jackpot": 0
        }
      ]
    }
  ],
  /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
  iconRollerQueue: [
    [12, 2, 9, 1, 9, 12, 12, 9, 2, 10, 2, 5, 6, 6, 6, 9, 10, 6, 7, 2, 3, 3, 3, 1, 1, 8, 2, 4, 1, 6, 12, 8, 1, 9, 10, 4, 1, 1, 1, 4, 5, 6, 8, 9, 9, 9, 12, 12, 12, 3, 3, 8, 10, 1, 7, 5, 2, 8, 12, 12],
    [12, 2, 9, 7, 8, 4, 3, 6, 1, 2, 3, 8, 5, 4, 12, 12, 12, 7, 5, 8, 9, 2, 1, 1, 1, 6, 3, 6, 3, 8, 12, 6, 6, 3, 3, 3, 10, 12, 2, 2, 8, 5, 3, 1, 8, 3, 2, 12, 9, 10, 4, 9, 1, 5, 2, 10, 7, 10, 12, 12],
    [1, 2, 10, 3, 4, 8, 9, 3, 6, 7, 2, 10, 1, 9, 5, 12, 3, 2, 4, 10, 6, 9, 6, 1, 2, 7, 2, 1, 8, 3, 8, 5, 9, 8, 8, 9, 2, 1, 5, 8, 5, 8, 2, 6, 3, 5, 8, 12, 4, 12, 7, 1, 6, 3, 10, 12, 12, 12, 9, 3],
    [3, 2, 7, 10, 1, 6, 5, 12, 7, 9, 2, 6, 2, 12, 1, 8, 1, 10, 3, 1, 9, 12, 12, 12, 8, 1, 2, 3, 4, 8, 6, 9, 4, 6, 5, 3, 3, 3, 12, 1, 8, 8, 5, 9, 5, 10, 12, 6, 10, 12, 8, 7, 3, 9, 2, 3, 9, 9, 4, 2],
    [1, 10, 9, 4, 2, 1, 3, 3, 3, 5, 8, 10, 4, 8, 4, 3, 6, 2, 3, 5, 8, 2, 12, 1, 9, 6, 8, 6, 1, 2, 9, 2, 12, 12, 12, 3, 3, 6, 2, 3, 10, 8, 8, 12, 8, 8, 8, 5, 5, 6, 7, 1, 1, 12, 7, 5, 8, 12, 3, 7]
  ],
  /**主游戏线路配置 */
  linesQueue: [
    {
      line: "1",
      date: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
    },
    {
      line: "2",
      date: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]
    },
    {
      line: "3",
      date: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
    },
    {
      line: "4",
      date: [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]
    },
    {
      line: "5",
      date: [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]
    },
    {
      line: "6",
      date: [[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]]
    },
    {
      line: "7",
      date: [[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]]
    },
    {
      line: "8",
      date: [[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]]
    },
    {
      line: "9",
      date: [[0, 1], [1, 2], [2, 0], [3, 2], [4, 1]]
    },
    {
      line: "10",
      date: [[0, 2], [1, 1], [2, 2], [3, 1], [4, 2]]
    },
    {
      line: "11",
      date: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]]
    },
    {
      line: "12",
      date: [[0, 1], [1, 2], [2, 1], [3, 0], [4, 1]]
    },
    {
      line: "13",
      date: [[0, 1], [1, 0], [2, 1], [3, 2], [4, 1]]
    },
    {
      line: "14",
      date: [[0, 2], [1, 1], [2, 1], [3, 1], [4, 2]]
    },
    {
      line: "15",
      date: [[0, 0], [1, 1], [2, 1], [3, 1], [4, 0]]
    },
    {
      line: "16",
      date: [[0, 1], [1, 2], [2, 2], [3, 2], [4, 1]]
    },
    {
      line: "17",
      date: [[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]]
    },
    {
      line: "18",
      date: [[0, 2], [1, 0], [2, 0], [3, 0], [4, 2]]
    },
    {
      line: "19",
      date: [[0, 0], [1, 2], [2, 2], [3, 2], [4, 0]]
    },
    {
      line: "20",
      date: [[0, 2], [1, 2], [2, 0], [3, 2], [4, 2]]
    },
    {
      line: "21",
      date: [[0, 0], [1, 0], [2, 2], [3, 0], [4, 0]]
    },
    {
      line: "22",
      date: [[0, 1], [1, 1], [2, 2], [3, 1], [4, 1]]
    },
    {
      line: "23",
      date: [[0, 1], [1, 1], [2, 0], [3, 1], [4, 1]]
    },
    {
      line: "24",
      date: [[0, 2], [1, 0], [2, 2], [3, 0], [4, 2]]
    },
    {
      line: "25",
      date: [[0, 0], [1, 2], [2, 0], [3, 2], [4, 0]]
    }
  ],
  /**小游戏线路配置 */
  subGameLinesQueue: [
    {
      line: "1",
      date: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
    },
    {
      line: "2",
      date: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
    },
    {
      line: "3",
      date: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]
    },
    {
      line: "4",
      date: [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]
    },
    {
      line: "5",
      date: [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]
    },
    {
      line: "6",
      date: [[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]]
    },
    {
      line: "7",
      date: [[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]]
    },
    {
      line: "8",
      date: [[0, 1], [1, 2], [2, 0], [3, 2], [4, 1]]
    },
    {
      line: "9",
      date: [[0, 1], [1, 0], [2, 2], [3, 0], [4, 1]]
    },
    {
      line: "10",
      date: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]]
    },
    {
      line: "11",
      date: [[0, 2], [1, 1], [2, 2], [3, 1], [4, 2]]
    },
    {
      line: "12",
      date: [[0, 1], [1, 0], [2, 1], [3, 2], [4, 1]]
    },
    {
      line: "13",
      date: [[0, 1], [1, 2], [2, 1], [3, 0], [4, 1]]
    },
    {
      line: "14",
      date: [[0, 0], [1, 1], [2, 1], [3, 1], [4, 0]]
    },
    {
      line: "15",
      date: [[0, 2], [1, 1], [2, 1], [3, 1], [4, 2]]
    },
    {
      line: "16",
      date: [[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]]
    },
    {
      line: "17",
      date: [[0, 1], [1, 2], [2, 2], [3, 2], [4, 1]]
    },
    {
      line: "18",
      date: [[0, 0], [1, 2], [2, 2], [3, 2], [4, 0]]
    },
    {
      line: "19",
      date: [[0, 2], [1, 0], [2, 0], [3, 0], [4, 2]]
    },
    {
      line: "20",
      date: [[0, 0], [1, 0], [2, 2], [3, 0], [4, 0]]
    },
    {
      line: "21",
      date: [[0, 2], [1, 2], [2, 0], [3, 2], [4, 2]]
    },
    {
      line: "22",
      date: [[0, 1], [1, 1], [2, 0], [3, 1], [4, 1]]
    },
    {
      line: "23",
      date: [[0, 1], [1, 1], [2, 2], [3, 1], [4, 1]]
    },
    {
      line: "24",
      date: [[0, 0], [1, 2], [2, 0], [3, 2], [4, 0]]
    },
    {
      line: "25",
      date: [[0, 2], [1, 0], [2, 2], [3, 0], [4, 2]]
    },
    {
      line: "26",
      date: [[0, 2], [1, 0], [2, 1], [3, 2], [4, 0]]
    },
    {
      line: "27",
      date: [[0, 0], [1, 2], [2, 1], [3, 0], [4, 2]]
    },
    {
      line: "28",
      date: [[0, 0], [1, 2], [2, 1], [3, 2], [4, 0]]
    },
    {
      line: "29",
      date: [[0, 2], [1, 0], [2, 1], [3, 0], [4, 2]]
    },
    {
      line: "30",
      date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 1]]
    },
    {
      line: "31",
      date: [[0, 2], [1, 1], [2, 2], [3, 2], [4, 1]]
    },
    {
      line: "32",
      date: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 2]]
    },
    {
      line: "33",
      date: [[0, 2], [1, 1], [2, 2], [3, 1], [4, 0]]
    },
    {
      line: "34",
      date: [[0, 1], [1, 0], [2, 2], [3, 1], [4, 0]]
    },
    {
      line: "35",
      date: [[0, 1], [1, 2], [2, 0], [3, 1], [4, 0]]
    },
    {
      line: "36",
      date: [[0, 2], [1, 2], [2, 0], [3, 0], [4, 0]]
    },
    {
      line: "37",
      date: [[0, 0], [1, 0], [2, 2], [3, 2], [4, 2]]
    },
    {
      line: "38",
      date: [[0, 0], [1, 0], [2, 1], [3, 1], [4, 2]]
    },
    {
      line: "39",
      date: [[0, 2], [1, 2], [2, 1], [3, 1], [4, 0]]
    },
    {
      line: "40",
      date: [[0, 0], [1, 1], [2, 1], [3, 2], [4, 2]]
    },
    {
      line: "41",
      date: [[0, 2], [1, 1], [2, 1], [3, 0], [4, 0]]
    },
    {
      line: "42",
      date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 0]]
    },
    {
      line: "43",
      date: [[0, 0], [1, 1], [2, 2], [3, 2], [4, 2]]
    },
    {
      line: "44",
      date: [[0, 1], [1, 0], [2, 0], [3, 1], [4, 1]]
    },
    {
      line: "45",
      date: [[0, 1], [1, 2], [2, 2], [3, 1], [4, 1]]
    },
    {
      line: "46",
      date: [[0, 1], [1, 1], [2, 2], [3, 2], [4, 1]]
    },
    {
      line: "47",
      date: [[0, 1], [1, 1], [2, 0], [3, 0], [4, 1]]
    },
    {
      line: "48",
      date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 2]]
    },
    {
      line: "49",
      date: [[0, 0], [1, 1], [2, 2], [3, 2], [4, 0]]
    },
    {
      line: "50",
      date: [[0, 0], [1, 1], [2, 1], [3, 1], [4, 2]]
    }
  ],

  /**中奖配置 */
  winning: [
    {
      "id": 1,
      "name": "bigwin",
      "fileName": ["bigwin", "tongyong_bw"],
      "minRate": 100,
      "maxRate": 200
    },
    {
      "id": 2,
      "name": "megawin",
      "fileName": ["megawin", "tongyong_mw"],
      "minRate": 201,
      "maxRate": 250
    },
    {
      "id": 3,
      "name": "superwin",
      "fileName": ["superwin", "tongyong_sw"],
      "minRate": 251,
      "maxRate": 625
    },
    {
      "id": 4,
      "name": "jackpot",
      "fileName": ["sb_lbjs_JACKPOT", "slots_common_game_uw_gold"],
      "minRate": 626,
      "maxRate": 7500
    }
  ]
}
