export default
{
    gameCode: 'Egypt',
    gameId: 8,
    /**普通图标 */
    icon: [
        {
            /**图标id */
            "id": 1,
            /**图标名称,用于人肉识别 */
            "name": "iconA",
            /**图标对应的文件名称 */
            "fileName": "shuaige2",
            /**图标的动效列表，第一个是静态 */
            "animationArr": ["static", "dynamic"],
            /**图标处于格子中的坐标偏移量 */
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 2,
            "name": "iconB",
            "fileName": "yingtou2",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 3,
            "name": "iconC",
            "fileName": "goutou",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 4,
            "name": "iconD",
            "fileName": "shuaige3",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 5,
            "name": "iconE",
            "fileName": "shizijia",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 6,
            "name": "iconF",
            "fileName": "a",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 7,
            "name": "iconG",
            "fileName": "k",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 8,
            "name": "iconH",
            "fileName": "q",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 9,
            "name": "iconI",
            "fileName": "j",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 10,
            "name": "iconJ",
            "fileName": "10",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 11,
            "name": "scatter",
            "fileName": "scatter1",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [0.8, 0.8]
        }, {
            "id": 12,
            "name": "wild",
            "fileName": "renwu2",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 13,
            "name": "bettle",
            "fileName": "jiakechong",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 14,
            "name": "sunGod",
            "fileName": "shuaige",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 15,
            "name": "wild1",
            "fileName": "yigemeinv",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 16,
            "name": "wild2",
            "fileName": "2gemeinv",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        }, {
            "id": 17,
            "name": "wild3",
            "fileName": "sangemeinv",
            "animationArr": ["static", "dynamic"],
            "distance": [0, 0],
            "scale": [1, 1]
        },
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
        [2,3,5,1,2,7,1,7,4,9,10,3,2,10,8,8,10,1,11,8,5,7,13,1,11,8,14,5,13,13,13,14,5,10,3,13,13,13,1,12,6,13,9,1,4,12,12,12,6,6,1,10,11,7,4,14,13,4,3,4,6,2,5,10,4,11],
        [13,10,5,1,3,6,7,5,5,8,2,14,3,10,10,10,7,4,3,14,2,11,8,8,8,11,4,13,13,7,10,1,13,7,6,5,12,2,10,3,14,5,9,10,6,3,12,12,12,5,11,12,8,13,13,13,6,13,1,1,5,4,13,8,2,9],
        [9,11,10,9,10,7,1,9,14,9,8,7,13,4,10,8,11,5,5,5,8,14,2,13,11,3,9,10,12,12,12,13,3,12,6,3,6,10,7,4,4,13,2,11,8,7,4,14,9,4,4,4,10,6,9,5,13,7,7,7,2,1,13,6,6,6],
        [13,12,12,12,9,8,2,13,4,9,6,10,5,3,2,9,1,14,9,4,13,7,8,6,11,1,1,1,11,7,4,10,7,8,6,13,8,5,10,4,14,2,8,5,12,12,3,11,14,6,10,10,10,7,11,1,12,14,3,6,5,13,12,2,13,8],
        [13,12,12,12,3,10,7,13,2,8,9,9,1,1,2,2,10,3,11,6,6,6,13,1,1,1,3,11,5,9,9,9,5,2,12,2,7,4,7,6,12,3,9,5,7,10,13,8,8,6,2,4,8,13,3,2,6,4,12,5,7,13,13,3,4,9]
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
        },
        {
            line: "26",
            date: [[0, 0], [1, 2], [2, 1], [3, 0], [4, 2]]
        },
        {
            line: "27",
            date: [[0, 2], [1, 0], [2, 1], [3, 2], [4, 0]]
        },
        {
            line: "28",
            date: [[0, 2], [1, 0], [2, 1], [3, 0], [4, 2]]
        },
        {
            line: "29",
            date: [[0, 0], [1, 2], [2, 1], [3, 2], [4, 0]]
        },
        {
            line: "30",
            date: [[0, 0], [1, 1], [2, 2], [3, 2], [4, 1]]
        },
        {
            line: "31",
            date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 1]]
        },
        {
            line: "32",
            date: [[0, 2], [1, 1], [2, 2], [3, 1], [4, 0]]
        },
        {
            line: "33",
            date: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 2]]
        },
        {
            line: "34",
            date: [[0, 1], [1, 2], [2, 0], [3, 1], [4, 0]]
        },
        {
            line: "35",
            date: [[0, 1], [1, 0], [2, 2], [3, 1], [4, 2]]
        },
        {
            line: "36",
            date: [[0, 0], [1, 0], [2, 2], [3, 2], [4, 2]]
        },
        {
            line: "37",
            date: [[0, 2], [1, 2], [2, 0], [3, 0], [4, 0]]
        },
        {
            line: "38",
            date: [[0, 2], [1, 2], [2, 1], [3, 1], [4, 0]]
        },
        {
            line: "39",
            date: [[0, 0], [1, 0], [2, 1], [3, 1], [4, 2]]
        },
        {
            line: "40",
            date: [[0, 2], [1, 1], [2, 1], [3, 0], [4, 0]]
        },
        {
            line: "41",
            date: [[0, 0], [1, 1], [2, 1], [3, 2], [4, 2]]
        },
        {
            line: "42",
            date: [[0, 0], [1, 1], [2, 2], [3, 2], [4, 2]]
        },
        {
            line: "43",
            date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 0]]
        },
        {
            line: "44",
            date: [[0, 1], [1, 2], [2, 2], [3, 1], [4, 1]]
        },
        {
            line: "45",
            date: [[0, 1], [1, 0], [2, 0], [3, 1], [4, 1]]
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
            date: [[0, 0], [1, 1], [2, 2], [3, 2], [4, 0]]
        },
        {
            line: "49",
            date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 2]]
        },
        {
            line: "50",
            date: [[0, 2], [1, 1], [2, 1], [3, 1], [4, 0]]
        }
    ],
    /**中奖配置 */
    winning: [
        {
            "id": 1,
            "name": "bigwin",
            "fileName": ["sb_lbjs_BIGWIN", "slots_common_game_bw_gold"],
            "minRate": 100,
            "maxRate": 300
        },
        {
            "id": 2,
            "name": "megawin",
            "fileName": ["sb_lbjs_MEGAWIN", "slots_common_game_ew_gold"],
            "minRate": 301,
            "maxRate": 750
        },
        {
            "id": 3,
            "name": "superwin",
            "fileName": ["sb_lbjs_SUPERWIN", "slots_common_game_sw_gold"],
            "minRate": 751,
            "maxRate": 14999
        },
        {
            "id": 4,
            "name": "jackpot",
            "fileName": ["sb_lbjs_JACKPOT", "slots_common_game_uw_gold"],
            "minRate": 15000,
            "maxRate": 99999
        }
    ]
}
