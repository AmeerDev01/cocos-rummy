System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd360wvbt1M5L7FJBw9DJV/", "config", undefined);

      _export("default", {
        gameCode: 'DragonChase',
        gameId: 9,

        /**普通图标 */
        icon: [{
          /**图标id */
          "id": 1,

          /**图标名称,用于人肉识别 */
          "name": "yaoqianshu",

          /**图标对应的文件名称 */
          "fileName": "tubiaobaozi",

          /**图标的动效列表，第一个是静态 */
          "animationArr": ["", "animation"],

          /**图标处于格子中的坐标偏移量 */
          "distance": [-25, 0],

          /**图标大小 */
          "scale": [1, 1]
        }, {
          "id": 2,
          "name": "yuanbao",
          "fileName": "tubiaolvbaoshi",
          "animationArr": ["", "animation"],
          "distance": [-30, -5],
          "scale": [1, 1]
        }, {
          "id": 3,
          "name": "baohe",
          "fileName": "tubiaolanbaoshi",
          "animationArr": ["", "animation"],
          "distance": [-35, -20],
          "scale": [1, 1]
        }, {
          "id": 4,
          "name": "tongqian",
          "fileName": "tubiaotongqian",
          "animationArr": ["", "animation"],
          "distance": [-25, 0],
          "scale": [1, 1]
        }, {
          "id": 5,
          "name": "iconA",
          "fileName": "tubiaoA",
          "animationArr": ["", "animation"],
          "distance": [-30, 0],
          "scale": [1, 1]
        }, {
          "id": 6,
          "name": "iconK",
          "fileName": "tubiaoK",
          "animationArr": ["", "animation"],
          "distance": [-30, 0],
          "scale": [1, 1]
        }, {
          "id": 7,
          "name": "iconQ",
          "fileName": "tubiaoQ",
          "animationArr": ["", "animation"],
          "distance": [-30, 0],
          "scale": [1, 1]
        }, {
          "id": 8,
          "name": "iconJ",
          "fileName": "tubiaoJ",
          "animationArr": ["", "animation"],
          "distance": [-30, 0],
          "scale": [1, 1]
        }, {
          "id": 9,
          "name": "icon10",
          "fileName": "tubiao10",
          "animationArr": ["", "animation"],
          "distance": [-30, 0],
          "scale": [1, 1]
        }, {
          "id": 10,
          "name": "scatter",
          "fileName": "skeletona",
          "animationArr": ["", "animation"],
          "distance": [-35, -10],
          "scale": [0.9, 0.9]
        }, {
          "id": 11,
          "name": "wild",
          "fileName": "LZTB_wildtubiao",
          "animationArr": ["", "animation"],
          "distance": [-30, -20],
          "scale": [0.8, 0.8]
        }, {
          "id": 12,
          "name": "baicai",
          "fileName": "skeleton",
          "animationArr": ["", "animation"],
          "distance": [-35, -25],
          "scale": [0.8, 0.8]
        }],
        awardBoxItem: [],

        /**触发jackpot特效奖励下注金额范围，包括最值 */
        betSwitcher: [{
          /**0≤用户级别<100 */
          "level": [0, 101],

          /**可下注的额度列表 */
          "amount": [{
            "positionId": 1,
            "value": 2,
            "jackpot": 0
          }, {
            "positionId": 2,
            "value": 4,
            "jackpot": 0
          }, {
            "positionId": 3,
            "value": 8,
            "jackpot": 0
          }, {
            "positionId": 4,
            "value": 16,
            "jackpot": 0
          }, {
            "positionId": 5,
            "value": 20,
            "jackpot": 0
          }, {
            "positionId": 6,
            "value": 40,
            "jackpot": 0
          }, {
            "positionId": 7,
            "value": 60,
            "jackpot": 0
          }, {
            "positionId": 8,
            "value": 90,
            "jackpot": 0
          }, {
            "positionId": 9,
            "value": 120,
            "jackpot": 0
          }, {
            "positionId": 10,
            "value": 150,
            "jackpot": 0
          }, {
            "positionId": 11,
            "value": 200,
            "jackpot": 1
          }, {
            "positionId": 12,
            "value": 400,
            "jackpot": 1
          }, {
            "positionId": 13,
            "value": 600,
            "jackpot": 1
          }, {
            "positionId": 14,
            "value": 900,
            "jackpot": 1
          }, {
            "positionId": 15,
            "value": 1200,
            "jackpot": 1
          }, {
            "positionId": 16,
            "value": 1500,
            "jackpot": 1
          }, {
            "positionId": 17,
            "value": 2000,
            "jackpot": 1
          }, {
            "positionId": 18,
            "value": 3000
          }, {
            "positionId": 19,
            "value": 4000,
            "jackpot": 1
          }, {
            "positionId": 20,
            "value": 6000,
            "jackpot": 1
          }, {
            "positionId": 21,
            "value": 8000,
            "jackpot": 1
          }, {
            "positionId": 22,
            "value": 10000,
            "jackpot": 1
          }]
        }],

        /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        iconRollerQueue: [[12, 2, 9, 1, 9, 12, 12, 9, 2, 10, 2, 5, 6, 6, 6, 9, 10, 6, 7, 2, 3, 3, 3, 1, 1, 8, 2, 4, 1, 6, 12, 8, 1, 9, 10, 4, 1, 1, 1, 4, 5, 6, 8, 9, 9, 9, 12, 12, 12, 3, 3, 8, 10, 1, 7, 5, 2, 8, 12, 12], [12, 2, 9, 7, 8, 4, 3, 6, 1, 2, 3, 8, 5, 4, 12, 12, 12, 7, 5, 8, 9, 2, 1, 1, 1, 6, 3, 6, 3, 8, 12, 6, 6, 3, 3, 3, 10, 12, 2, 2, 8, 5, 3, 1, 8, 3, 2, 12, 9, 10, 4, 9, 1, 5, 2, 10, 7, 10, 12, 12], [1, 2, 10, 3, 4, 8, 9, 3, 6, 7, 2, 10, 1, 9, 5, 12, 3, 2, 4, 10, 6, 9, 6, 1, 2, 7, 2, 1, 8, 3, 8, 5, 9, 8, 8, 9, 2, 1, 5, 8, 5, 8, 2, 6, 3, 5, 8, 12, 4, 12, 7, 1, 6, 3, 10, 12, 12, 12, 9, 3], [3, 2, 7, 10, 1, 6, 5, 12, 7, 9, 2, 6, 2, 12, 1, 8, 1, 10, 3, 1, 9, 12, 12, 12, 8, 1, 2, 3, 4, 8, 6, 9, 4, 6, 5, 3, 3, 3, 12, 1, 8, 8, 5, 9, 5, 10, 12, 6, 10, 12, 8, 7, 3, 9, 2, 3, 9, 9, 4, 2], [1, 10, 9, 4, 2, 1, 3, 3, 3, 5, 8, 10, 4, 8, 4, 3, 6, 2, 3, 5, 8, 2, 12, 1, 9, 6, 8, 6, 1, 2, 9, 2, 12, 12, 12, 3, 3, 6, 2, 3, 10, 8, 8, 12, 8, 8, 8, 5, 5, 6, 7, 1, 1, 12, 7, 5, 8, 12, 3, 7]],

        /**主游戏线路配置 */
        linesQueue: [{
          line: "1",
          date: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
        }, {
          line: "2",
          date: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]
        }, {
          line: "3",
          date: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
        }, {
          line: "4",
          date: [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]
        }, {
          line: "5",
          date: [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]
        }, {
          line: "6",
          date: [[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]]
        }, {
          line: "7",
          date: [[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]]
        }, {
          line: "8",
          date: [[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]]
        }, {
          line: "9",
          date: [[0, 1], [1, 2], [2, 0], [3, 2], [4, 1]]
        }, {
          line: "10",
          date: [[0, 2], [1, 1], [2, 2], [3, 1], [4, 2]]
        }, {
          line: "11",
          date: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]]
        }, {
          line: "12",
          date: [[0, 1], [1, 2], [2, 1], [3, 0], [4, 1]]
        }, {
          line: "13",
          date: [[0, 1], [1, 0], [2, 1], [3, 2], [4, 1]]
        }, {
          line: "14",
          date: [[0, 2], [1, 1], [2, 1], [3, 1], [4, 2]]
        }, {
          line: "15",
          date: [[0, 0], [1, 1], [2, 1], [3, 1], [4, 0]]
        }, {
          line: "16",
          date: [[0, 1], [1, 2], [2, 2], [3, 2], [4, 1]]
        }, {
          line: "17",
          date: [[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]]
        }, {
          line: "18",
          date: [[0, 2], [1, 0], [2, 0], [3, 0], [4, 2]]
        }, {
          line: "19",
          date: [[0, 0], [1, 2], [2, 2], [3, 2], [4, 0]]
        }, {
          line: "20",
          date: [[0, 2], [1, 2], [2, 0], [3, 2], [4, 2]]
        }, {
          line: "21",
          date: [[0, 0], [1, 0], [2, 2], [3, 0], [4, 0]]
        }, {
          line: "22",
          date: [[0, 1], [1, 1], [2, 2], [3, 1], [4, 1]]
        }, {
          line: "23",
          date: [[0, 1], [1, 1], [2, 0], [3, 1], [4, 1]]
        }, {
          line: "24",
          date: [[0, 2], [1, 0], [2, 2], [3, 0], [4, 2]]
        }, {
          line: "25",
          date: [[0, 0], [1, 2], [2, 0], [3, 2], [4, 0]]
        }],

        /**小游戏线路配置 */
        subGameLinesQueue: [{
          line: "1",
          date: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
        }, {
          line: "2",
          date: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
        }, {
          line: "3",
          date: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]
        }, {
          line: "4",
          date: [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]
        }, {
          line: "5",
          date: [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]
        }, {
          line: "6",
          date: [[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]]
        }, {
          line: "7",
          date: [[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]]
        }, {
          line: "8",
          date: [[0, 1], [1, 2], [2, 0], [3, 2], [4, 1]]
        }, {
          line: "9",
          date: [[0, 1], [1, 0], [2, 2], [3, 0], [4, 1]]
        }, {
          line: "10",
          date: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 0]]
        }, {
          line: "11",
          date: [[0, 2], [1, 1], [2, 2], [3, 1], [4, 2]]
        }, {
          line: "12",
          date: [[0, 1], [1, 0], [2, 1], [3, 2], [4, 1]]
        }, {
          line: "13",
          date: [[0, 1], [1, 2], [2, 1], [3, 0], [4, 1]]
        }, {
          line: "14",
          date: [[0, 0], [1, 1], [2, 1], [3, 1], [4, 0]]
        }, {
          line: "15",
          date: [[0, 2], [1, 1], [2, 1], [3, 1], [4, 2]]
        }, {
          line: "16",
          date: [[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]]
        }, {
          line: "17",
          date: [[0, 1], [1, 2], [2, 2], [3, 2], [4, 1]]
        }, {
          line: "18",
          date: [[0, 0], [1, 2], [2, 2], [3, 2], [4, 0]]
        }, {
          line: "19",
          date: [[0, 2], [1, 0], [2, 0], [3, 0], [4, 2]]
        }, {
          line: "20",
          date: [[0, 0], [1, 0], [2, 2], [3, 0], [4, 0]]
        }, {
          line: "21",
          date: [[0, 2], [1, 2], [2, 0], [3, 2], [4, 2]]
        }, {
          line: "22",
          date: [[0, 1], [1, 1], [2, 0], [3, 1], [4, 1]]
        }, {
          line: "23",
          date: [[0, 1], [1, 1], [2, 2], [3, 1], [4, 1]]
        }, {
          line: "24",
          date: [[0, 0], [1, 2], [2, 0], [3, 2], [4, 0]]
        }, {
          line: "25",
          date: [[0, 2], [1, 0], [2, 2], [3, 0], [4, 2]]
        }, {
          line: "26",
          date: [[0, 2], [1, 0], [2, 1], [3, 2], [4, 0]]
        }, {
          line: "27",
          date: [[0, 0], [1, 2], [2, 1], [3, 0], [4, 2]]
        }, {
          line: "28",
          date: [[0, 0], [1, 2], [2, 1], [3, 2], [4, 0]]
        }, {
          line: "29",
          date: [[0, 2], [1, 0], [2, 1], [3, 0], [4, 2]]
        }, {
          line: "30",
          date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 1]]
        }, {
          line: "31",
          date: [[0, 2], [1, 1], [2, 2], [3, 2], [4, 1]]
        }, {
          line: "32",
          date: [[0, 0], [1, 1], [2, 0], [3, 1], [4, 2]]
        }, {
          line: "33",
          date: [[0, 2], [1, 1], [2, 2], [3, 1], [4, 0]]
        }, {
          line: "34",
          date: [[0, 1], [1, 0], [2, 2], [3, 1], [4, 0]]
        }, {
          line: "35",
          date: [[0, 1], [1, 2], [2, 0], [3, 1], [4, 0]]
        }, {
          line: "36",
          date: [[0, 2], [1, 2], [2, 0], [3, 0], [4, 0]]
        }, {
          line: "37",
          date: [[0, 0], [1, 0], [2, 2], [3, 2], [4, 2]]
        }, {
          line: "38",
          date: [[0, 0], [1, 0], [2, 1], [3, 1], [4, 2]]
        }, {
          line: "39",
          date: [[0, 2], [1, 2], [2, 1], [3, 1], [4, 0]]
        }, {
          line: "40",
          date: [[0, 0], [1, 1], [2, 1], [3, 2], [4, 2]]
        }, {
          line: "41",
          date: [[0, 2], [1, 1], [2, 1], [3, 0], [4, 0]]
        }, {
          line: "42",
          date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 0]]
        }, {
          line: "43",
          date: [[0, 0], [1, 1], [2, 2], [3, 2], [4, 2]]
        }, {
          line: "44",
          date: [[0, 1], [1, 0], [2, 0], [3, 1], [4, 1]]
        }, {
          line: "45",
          date: [[0, 1], [1, 2], [2, 2], [3, 1], [4, 1]]
        }, {
          line: "46",
          date: [[0, 1], [1, 1], [2, 2], [3, 2], [4, 1]]
        }, {
          line: "47",
          date: [[0, 1], [1, 1], [2, 0], [3, 0], [4, 1]]
        }, {
          line: "48",
          date: [[0, 2], [1, 1], [2, 0], [3, 0], [4, 2]]
        }, {
          line: "49",
          date: [[0, 0], [1, 1], [2, 2], [3, 2], [4, 0]]
        }, {
          line: "50",
          date: [[0, 0], [1, 1], [2, 1], [3, 1], [4, 2]]
        }],

        /**中奖配置 */
        winning: [{
          "id": 1,
          "name": "bigwin",
          "fileName": ["sb_lbjs_BIGWIN", "slots_common_game_bw_gold"],
          "minRate": 100,
          "maxRate": 200
        }, {
          "id": 2,
          "name": "megawin",
          "fileName": ["sb_lbjs_MEGAWIN", "slots_common_game_ew_gold"],
          "minRate": 201,
          "maxRate": 250
        }, {
          "id": 3,
          "name": "superwin",
          "fileName": ["sb_lbjs_SUPERWIN", "slots_common_game_sw_gold"],
          "minRate": 251,
          "maxRate": 625
        }, {
          "id": 4,
          "name": "jackpot",
          "fileName": ["sb_lbjs_JACKPOT", "slots_common_game_uw_gold"],
          "minRate": 626,
          "maxRate": 7500
        }]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e0d23661345937d7a4aa5e78171d71870c8ae62.js.map