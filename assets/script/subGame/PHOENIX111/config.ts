import { DirectionType } from "./type";

export default {
    sktCode: "Phoenix",
    name: "Phoenix",
    gameId: 10,
    testConfig: {
        wsUrl: "",
        token: ""
    },
      /**游戏默认的固定参数 */
    normalRollOption: {
        /**统一的滚动速度 */
        rollerSpeed: 30,
        /**停止的动作时间 */
        stopSpeed: 0.4,
        /**单图标的高度 */
        singleRollerHeight: 135,
        /**单图标的宽度 */
        singleRollerWidth: 150,
        /**单图标的上下间隔 */
        singleIntervalHeight:4,
        /**滑槽的宽度 */
        rollerWidth: 150,
        /**滑槽的左右间隔宽度 */
        rollerIntervalWidth: 4,
        /**滑动方向 */
        direction: DirectionType.DOWN,
        /**银币动画的结束位置 */
        yinBiPo: { x: 100, y: -200 },
        /**小游戏加次数结束位置 */
        addNumPo: { x: 550, y: -8 },
        
    },
    /**游戏默认的固定参数 */
    // largeRollOption: {
    //     /**统一的滚动速度 */
    //     rollerSpeed: 50,
    //     /**停止的动作时间 */
    //     stopSpeed: 0.4,
    //     /**单图标的高度 */
    //     singleRollerHeight: 405,
    //     /**单图标的宽度 */
    //     singleRollerWidth: 450,
    //     /**单图标的上下间隔 */
    //     singleIntervalHeight: 5,
    //     /**滑槽的宽度 */
    //     rollerWidth: 480,
    //     /**滑槽的左右间隔宽度 */
    //     rollerIntervalWidth: 10,
    //     /**滑动方向 */
    //     direction: DirectionType.DOWN
    // },
    /**普通图标 */
    rollerIcon: [
    {
      /**图标id */
      "id": 1,
      /**图标名称,用于人肉识别 */
      "name": "icon9",
      /**图标对应的文件名称 */
      "fileName": "img/rollerIcon/9/tubiao_9",
      /**图标的动效列表，第一个是静态 */
      "animationArr": [" ", "animation"],
      /**图标处于格子中的坐标偏移量 */
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 2,
      "name": "icon10",
      "fileName": "img/rollerIcon/10/tubiao_10",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 3,
      "name": "iconJ",
      "fileName": "img/rollerIcon/J/tubiao_j",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 4,
      "name": "iconQ",
      "fileName": "img/rollerIcon/q/tubiao_q",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 5,
      "name": "iconK",
      "fileName": "img/rollerIcon/K/tubiao_k",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 6,
      "name": "iconA",
      "fileName": "img/rollerIcon/A/tubiao_a",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 7,
      "name": "bat",
      "fileName": "img/rollerIcon/bat/tubiao_bianfu",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 8,
      "name": "turtle",
      "fileName": "img/rollerIcon/turtle/tubiao_gui",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 9,
      "name": "frog",
      "fileName": "img/rollerIcon/goldenToad/tubiao_jinchan",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 10,
      "name": "tigger",
      "fileName": "img/rollerIcon/tiger/tubiao_hu",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 11,
      "name": "scatter",
      "fileName": "img/rollerIcon/scatter/skeleton",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 12,
      "name": "wild",
      "fileName": "img/rollerIcon/wild/fenghuangputongzhongjiang",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [0.8, 0.8]
    },{
      "id": 13,
      "name": "yuanbao",
      "fileName": "img/rollerIcon/silverCoin/yindingzhongjiang",
      "animationArr": [" ", "animation"],
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }
  ],
    /**小游戏选择 */
    smallGame: [
        {
            /**次数 */
            times:25,
            /**3连倍率 */
            initial_value3:"2",
            /**4连倍率 */
            initial_value4:"3",
            /**5连倍率 */
            initial_value5:"5",
            /**凤凰图标 */
            "wildFileName": "img/rollerIcon/wild/tubiao_xyx_niao1"
        },
        {
            times:20,
            initial_value3:"3",
            initial_value4:"5",
            initial_value5:"8",
            "wildFileName": "img/rollerIcon/wild/tubiao_xyx_niao2"
        },
        {
            times:15,
            initial_value3:"5",
            initial_value4:"8",
            initial_value5:"10",
            "wildFileName": "img/rollerIcon/wild/tubiao_xyx_niao3"
        },
        {
            times:13,
            initial_value3:"8",
            initial_value4:"10",
            initial_value5:"15",
            "wildFileName": "img/rollerIcon/wild/tubiao_xyx_niao4"
        },
        {
            times:10,
            initial_value3:"10",
            initial_value4:"15",
            initial_value5:"30",
            "wildFileName": "img/rollerIcon/wild/tubiao_xyx_niao5"
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
          "jackpot":0
        },
        {
          "positionId": 2,
          "value": 2,
          "jackpot":0
        },
        {
          "positionId": 3,
          "value": 4,
          "jackpot":0
        },
        {
          "positionId": 4,
          "value": 8,
          "jackpot":0
        },
        {
          "positionId": 5,
          "value": 16,
          "jackpot":0
        },
        {
          "positionId": 6,
          "value": 20,
          "jackpot":0
        },
        {
          "positionId": 7,
          "value": 40,
          "jackpot":0
        },
        {
          "positionId": 8,
          "value": 60,
          "jackpot":0
        },
        {
          "positionId": 9,
          "value": 90,
          "jackpot":0
        },
        {
          "positionId": 10,
          "value": 120,
          "jackpot":0
        },
        {
          "positionId": 11,
          "value": 150,
          "jackpot":0
        },
        {
          "positionId": 12,
          "value": 200,
          "jackpot":1
        },
        {
          "positionId": 13,
          "value": 400,
          "jackpot":1
        },
        {
          "positionId": 14,
          "value": 600,
          "jackpot":1
        },
        {
          "positionId": 15,
          "value": 900,
          "jackpot":1
        },
        {
          "positionId": 16,
          "value": 1200,
          "jackpot":1
        },
        {
          "positionId": 17,
          "value": 1500,
          "jackpot":1
        },
        {
          "positionId": 18,
          "value": 2000,
          "jackpot":1
        },
        {
          "positionId": 19,
          "value": 3000
        },
        {
          "positionId": 20,
          "value": 4000,
          "jackpot":1
        },
        {
          "positionId": 21,
          "value": 6000,
          "jackpot":1
        },
        {
          "positionId": 22,
          "value": 8000,
          "jackpot":1
        },
        {
          "positionId": 23,
          "value": 10000,
          "jackpot":1
        }
         ]
        }
    ],
    /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
    iconRollerQueue: [
        [8,8,1,7,6,9,12,4,13,3,  11,8,1,6,6,9,5,2,8,13,  6,4,6,5,13,6,10,8,7,4,  2,12,1,1,9,10,3,13,8,10,  9,10,6,2,7,9,11,5,12,5,  10,10,7,4,3,3,7,2,7,5],
        [6,3,4,10,6,1,12,8,8,8,  10,4,13,5,10,2,2,9,6,7,  9,12,8,7,9,7,1,11,1,3,  3,2,6,9,7,5,5,10,6,13,  13,2,7,8,13,7,3,9,12,5,  10,8,6,8,9,10,4,4,11,1],
        [7,2,8,6,9,8,8,11,1,6,  2,4,8,5,9,12,7,1,9,13,  4,10,6,13,4,2,5,12,7,8,  6,9,3,13,6,3,10,9,7,7,  5,12,1,7,6,4,9,8,10,3,  3,11,10,13,2,10,5,10,1,8],
        [6,7,3,1,10,11,4,10,4,1,  7,3,2,10,2,10,8,13,9,1,  11,7,3,10,2,9,5,9,6,12,  9,7,8,5,6,8,13,7,9,9,  7,13,4,10,12,5,9,4,8,6,  1,13,5,10,2,12,6,6,8,3],
        [2,13,4,9,6,1,1,9,4,10,  11,5,10,8,8,5,8,2,2,10,  8,3,12,3,13,5,7,11,6,1,  1,9,6,12,8,2,10,7,3,10,  5,7,6,10,9,12,6,8,1,9,  7,9,4,3,13,13,4,10,7,4]
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
            "fileName": ["img/dialog/bigwin/bigwin", "img/dialog/bigwin/slots_common_game_bw_gold"],
            "minRate": 100,
            "maxRate": 300
        },
        {
            "id": 2,
            "name": "megawin",
            "fileName": ["img/dialog/megawin/megawin", "img/dialog/megawin/slots_common_game_ew_gold"],
            "minRate": 301,
            "maxRate": 1250
        },
        {
            "id": 3,
            "name": "superwin",
            "fileName": ["img/dialog/superwin/superwin", "img/dialog/superwin/slots_common_game_sw_gold"],
            "minRate": 1251,
            "maxRate": 3000
        },
        {
            "id": 4,
            "name": "jackpot",
            "fileName": ["img/dialog/jackpot/sb_lbjs_JACKPOT", "img/dialog/jackpot/slots_common_game_uw_gold"],
            "minRate": 3001,
            "maxRate": 99999
        }
    ]
}
