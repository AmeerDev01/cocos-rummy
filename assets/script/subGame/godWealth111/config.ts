import { DirectionType } from "./type";

export default {
    sktCode: "GodWealth",
    name: "GodWealth",
    gameId: 6,
    testConfig: {
        wsUrl: "",
        token: ""
    },
      /**游戏默认的固定参数 */
  normalRollOption: {
        /**开始按钮长按的事件 */
        startButtonLangTime: 1000,
        /**每一列显示几个图标 */
        showIconCount: 3,
        /**中奖图标闪烁时间 */
        winIconFlickerTime: 1,
        /**期待滚动数组 */
        expectRollerSpeed: 20,
        /**统一的滚动速度 */
        rollerSpeed: 30,
        /**停止的动作时间 */
        stopSpeed: 0.4,
        /**单图标的高度 */
        singleRollerHeight: 127,
        /**单图标的宽度 */
        singleRollerWidth: 135,
        /**单图标的上下间隔 */
        singleIntervalHeight:0,
        /**滑槽的宽度 */
        rollerWidth: 145,
        /**滑槽的左右间隔宽度 */
        rollerIntervalWidth: 3,
        /**滑动方向 */
        direction: DirectionType.DOWN
    },
   /**普通图标 */
   rollerIcon: [
    {
      /**图标id */
      "id": 1,
      /**图标名称,用于人肉识别 */
      "name": "icon10",
      /**图标对应的文件名称 */
      "fileName": "atlas/rollerIcon/10/10",
      /**图标的动效列表，第一个是静态 */
      "animationArr": ["static", "dynamic"],
      /**图标处于格子中的坐标偏移量 */
       "distance": [0, 10],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 2,
      "name": "iconJ",
      "fileName": "atlas/rollerIcon/J/j",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }, {
      "id": 3,
      "name": "iconQ",
      "fileName": "atlas/rollerIcon/q/q",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }, {
      "id": 4,
      "name": "iconK",
      "fileName": "atlas/rollerIcon/K/k",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }, {
      "id": 5,
      "name": "iconA",
      "fileName": "atlas/rollerIcon/A/a",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }, {
      "id": 6,
      "name": "tongqian",
      "fileName": "atlas/rollerIcon/tongqian/tb_tongqian",
      "animationArr": ["static", "animation"],
      "distance": [0, -30],
      "scale": [1, 1]
    }, {
      "id": 7,
      "name": "yuanbao",
      "fileName": "atlas/rollerIcon/yuanbao/yuanbao",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }, {
      "id": 8,
      "name": "yaoqianshu",
      "fileName": "atlas/rollerIcon/yaoqianshu/yaoqianshu",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }, {
      "id": 9,
      "name": "baicai",
      "fileName": "atlas/rollerIcon/baicai/baicai",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }, {
      "id": 10,
      "name": "wild",
      "fileName": "atlas/rollerIcon/wild/jinchan2",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [0.8, 0.8]
    }, {
      "id": 11,
      "name": "scatter",
      "fileName": "atlas/rollerIcon/scatter/caisheng",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [0.8, 0.8]
    }, {
      "id": 12,
      "name": "baohe",
      "fileName": "atlas/rollerIcon/baohe/baohe",
      "animationArr": ["static", "dynamic"],
      "distance": [0, 10],
      "scale": [1, 1]
    }
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
  /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
  iconRollerQueue: [
    [4, 2, 11, 5, 3, 2, 5, 10, 4, 12, 3, 1, 8, 4, 2, 8, 5, 1, 6, 10, 2, 3, 12, 9, 4, 9, 3, 5, 10, 3, 4, 1, 2, 2, 6, 1, 11, 7, 6, 12, 10, 3, 2, 7, 2, 2, 2, 3, 8, 12, 9, 3, 5, 6, 11, 2, 4, 12, 12, 7],
    [7, 6, 5, 8, 2, 3, 1, 5, 12, 12, 5, 8, 5, 9, 11, 3, 1, 7, 8, 1, 2, 3, 11, 1, 3, 3, 9, 4, 2, 7, 11, 4, 6, 12, 6, 12, 12, 6, 10, 3, 11, 1, 3, 11, 10, 3, 3, 1, 6, 3, 1, 4, 2, 10, 2, 2, 12, 12, 12, 6],
    [1, 1, 1, 9, 4, 3, 12, 7, 6, 3, 11, 7, 1, 4, 1, 5, 10, 1, 2, 3, 3, 3, 10, 4, 5, 11, 8, 9, 9, 9, 12, 10, 7, 11, 6, 4, 10, 12, 2, 3, 11, 6, 8, 1, 12, 12, 3, 12, 1, 2, 6, 8, 2, 5, 11, 5, 3, 6, 11, 8],
    [2, 11, 4, 10, 4, 2, 2, 2, 3, 4, 2, 2, 2, 5, 8, 1, 1, 1, 11, 6, 12, 12, 2, 3, 8, 3, 12, 6, 8, 6, 6, 4, 1, 2, 3, 7, 9, 12, 12, 3, 5, 12, 2, 4, 3, 11, 1, 7, 7, 6, 3, 3, 11, 9, 5, 5, 5, 1, 5, 8],
    [2, 10, 12, 1, 12, 4, 6, 10, 1, 5, 1, 8, 12, 4, 1, 11, 9, 5, 6, 5, 8, 2, 12, 1, 5, 3, 2, 10, 1, 5, 7, 9, 6, 7, 4, 11, 2, 10, 3, 9, 11, 2, 3, 2, 6, 7, 7, 7, 12, 1, 3, 12, 12, 3, 12, 6, 9, 11, 12, 3]
  ],

  /**主游戏线路配置 */
  linesQueue: [
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
      line: "10",
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
      line: "10",
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
      "fileName": ["atlas/dialog/bigwin/cs_bw", "atlas/dialog/superwin/slots_common_game_sw_gold"],//sb_lbjs_BIGWIN  slots_common_game_bw_gold
      "minRate": 100,
      "maxRate": 300
    },
    {
      "id": 2,
      "name": "megawin",
      "fileName": ["atlas/dialog/megawin/cs_mw","atlas/dialog/superwin/slots_common_game_sw_gold" ],// "sb_lbjs_MEGAWIN" "slots_common_game_ew_gold"
      "minRate": 301,
      "maxRate": 1250
    },
    {
      "id": 3,
      "name": "superwin",
      "fileName": ["atlas/dialog/superwin/cs_sw", "atlas/dialog/superwin/slots_common_game_sw_gold"],
      "minRate": 1251,
      "maxRate": 3000
    },
    {
      "id": 4,
      "name": "jackpot",
      "fileName": ["atlas/dialog/jackpot/sb_lbjs_JACKPOT", "atlas/dialog/jackpot/slots_common_game_uw_gold"],
      "minRate": 3001,
      "maxRate": 99999
    },

    ]
}
