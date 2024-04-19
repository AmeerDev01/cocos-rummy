System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d72e1BmvVD2qUBmEHJOz5M", "config", undefined);

      _export("default", {
        gameCode: 'GongXiFaCai',
        gameId: 7,
        icon: [{
          /**图标id */
          "id": 1,

          /**图标名称,用于人肉识别 */
          "name": "tongqian",

          /**图标对应的文件名称 */
          "fileName": "icon_gxfc_tubiao_tongqian",

          /**图标的动效列表，第一个是静态 第二个是动态 */
          "animationArr": ["static", "animation"],

          /**图标处于格子中的坐标偏移量 */
          "distance": [0, 10],
          "scale": [1, 1]
        }, {
          "id": 2,
          "name": "bianpao",
          "fileName": "icon_gxfc_tubiao_bianpao",
          "animationArr": ["static", "animation"],
          "distance": [0, 10],
          "scale": [1, 1]
        }, {
          "id": 3,
          "name": "yupei",
          "fileName": "icon_gxfc_tubiao_yupei",
          "animationArr": ["static", "animation"],
          "distance": [0, 0],
          "scale": [1, 1]
        }, {
          "id": 4,
          "name": "gu",
          "fileName": "icon_gxfc_tubiao_gu",
          "animationArr": ["static", "animation"],
          "distance": [0, 10],
          "scale": [1, 1]
        }, {
          "id": 5,
          "name": "girl",
          "fileName": "icon_gxfc_tubiao_shouwa",
          "animationArr": ["static", "dynamic"],
          "distance": [0, 15],
          "scale": [1, 1]
        }, {
          "id": 6,
          "name": "boy",
          "fileName": "icon_gxfc_tubiao_xiwa",
          "animationArr": ["static", "dynamic"],
          "distance": [0, 0],
          "scale": [1, 1]
        }, {
          "id": 7,
          "name": "baihuzi",
          "fileName": "icon_gxfc_tubiao_fushen",
          "animationArr": ["static", "dynamic"],
          "distance": [0, 5],
          "scale": [1, 1]
        }, {
          "id": 8,
          "name": "heihuzi",
          "fileName": "icon_gxfc_tubiao_caishen",
          "animationArr": ["static", "dynamic"],
          "distance": [0, 5],
          "scale": [1, 1]
        }, {
          "id": 9,
          "name": "wild1",
          "fileName": "icon_gxfc_tubiao_baifa",
          "animationArr": ["static", "animation"],
          "distance": [0, 0],
          "scale": [1, 1]
        }, {
          "id": 10,
          "name": "wild2",
          "fileName": "icon_gxfc_tubiao_jinfa",
          "animationArr": ["static", "animation"],
          "distance": [0, 0],
          "scale": [1, 1]
        }, {
          "id": 11,
          "name": "scatter",
          "fileName": "icon_gxfc_tubiao_scatter",
          "animationArr": ["animation4", "animation2"],
          "distance": [0, 5],
          "scale": [1, 1]
        }],

        /**下注档位 */
        betSwitcher: [{
          /**0≤用户级别<100 */
          "level": [0, 101],

          /**可下注的额度列表 */
          "amount": [{
            "positionId": 1,
            "value": 5,
            "jackpot": 0
          }, {
            "positionId": 2,
            "value": 8,
            "jackpot": 0
          }, {
            "positionId": 3,
            "value": 16,
            "jackpot": 0
          }, {
            "positionId": 4,
            "value": 20,
            "jackpot": 0
          }, {
            "positionId": 5,
            "value": 40,
            "jackpot": 0
          }, {
            "positionId": 6,
            "value": 60,
            "jackpot": 0
          }, {
            "positionId": 7,
            "value": 90,
            "jackpot": 0
          }, {
            "positionId": 8,
            "value": 120,
            "jackpot": 0
          }, {
            "positionId": 9,
            "value": 150,
            "jackpot": 0
          }, {
            "positionId": 10,
            "value": 200,
            "jackpot": 1
          }, {
            "positionId": 11,
            "value": 400,
            "jackpot": 1
          }, {
            "positionId": 12,
            "value": 600,
            "jackpot": 1
          }, {
            "positionId": 13,
            "value": 900,
            "jackpot": 1
          }, {
            "positionId": 14,
            "value": 1200,
            "jackpot": 1
          }, {
            "positionId": 15,
            "value": 1500,
            "jackpot": 1
          }, {
            "positionId": 16,
            "value": 2000,
            "jackpot": 1
          }, {
            "positionId": 17,
            "value": 3000
          }, {
            "positionId": 18,
            "value": 4000,
            "jackpot": 1
          }, {
            "positionId": 19,
            "value": 6000,
            "jackpot": 1
          }, {
            "positionId": 20,
            "value": 8000,
            "jackpot": 1
          }, {
            "positionId": 21,
            "value": 10000,
            "jackpot": 1
          }]
        }],

        /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        iconRollerQueue: [[5, 3, 3, 10, 2, 3, 6, 8, 6, 2, 2, 5, 1, 2, 3, 5, 5, 5, 7, 1, 5, 4, 1, 7, 11, 5, 3, 4, 1, 3, 2, 9, 3, 7, 1, 1, 4, 4, 2, 7, 11, 1, 1, 4, 6, 3, 8, 6, 2, 9, 10, 2, 3, 4, 11, 7, 6, 6, 2, 7], [8, 1, 2, 6, 7, 1, 1, 6, 9, 6, 4, 6, 4, 10, 5, 3, 11, 2, 1, 1, 7, 5, 2, 6, 8, 7, 3, 4, 3, 2, 2, 2, 2, 7, 8, 5, 6, 1, 3, 8, 1, 5, 3, 3, 5, 3, 7, 3, 2, 3, 4, 4, 4, 1, 7, 5, 1, 5, 3, 6], [6, 7, 3, 1, 5, 5, 2, 1, 4, 5, 5, 7, 5, 2, 2, 7, 2, 3, 4, 6, 3, 2, 6, 9, 7, 2, 2, 8, 4, 6, 5, 1, 10, 3, 3, 6, 4, 3, 6, 2, 11, 1, 5, 4, 9, 1, 7, 3, 5, 4, 3, 7, 3, 1, 4, 1, 3, 6, 1, 8], [7, 1, 7, 5, 1, 1, 7, 1, 9, 2, 7, 6, 1, 1, 4, 5, 4, 2, 4, 8, 2, 4, 3, 2, 6, 3, 2, 6, 3, 6, 10, 6, 3, 1, 4, 6, 8, 7, 5, 6, 4, 7, 5, 3, 3, 7, 4, 3, 2, 3, 5, 2, 3, 11, 3, 3, 5, 1, 5, 8], [11, 1, 7, 1, 1, 4, 6, 1, 1, 5, 3, 8, 4, 4, 6, 6, 4, 5, 6, 5, 8, 2, 2, 1, 5, 3, 2, 3, 1, 5, 7, 9, 6, 7, 4, 8, 3, 10, 3, 1, 2, 2, 3, 2, 6, 7, 7, 7, 6, 1, 2, 5, 1, 3, 3, 6, 3, 3, 4, 3]],

        /**主游戏线路配置 */
        linesQueue: [{
          line: "1",
          date: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
        }, {
          line: "2",
          date: [[4, 0], [3, 0], [2, 0], [1, 0], [0, 0]]
        }, {
          line: "3",
          date: [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]
        }, {
          line: "4",
          date: [[4, 2], [3, 2], [2, 2], [1, 2], [0, 2]]
        }, {
          line: "5",
          date: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]
        }, {
          line: "6",
          date: [[4, 1], [3, 1], [2, 1], [1, 1], [0, 1]]
        }, {
          line: "7",
          date: [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]
        }, {
          line: "8",
          date: [[4, 2], [3, 1], [2, 0], [1, 1], [0, 2]]
        }, {
          line: "9",
          date: [[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]
        }, {
          line: "10",
          date: [[4, 0], [3, 1], [2, 2], [2, 1], [0, 0]]
        }, {
          line: "11",
          date: [[0, 2], [1, 2], [2, 1], [3, 2], [4, 2]]
        }, {
          line: "12",
          date: [[4, 2], [3, 2], [2, 1], [1, 2], [0, 2]]
        }, {
          line: "13",
          date: [[0, 0], [1, 0], [2, 1], [3, 0], [4, 0]]
        }, {
          line: "14",
          date: [[4, 0], [3, 0], [2, 1], [1, 0], [0, 0]]
        }, {
          line: "15",
          date: [[0, 1], [1, 2], [2, 2], [3, 2], [4, 0]]
        }, {
          line: "16",
          date: [[4, 1], [3, 2], [2, 2], [1, 2], [0, 0]]
        }, {
          line: "17",
          date: [[0, 1], [1, 0], [2, 0], [3, 0], [4, 0]]
        }, {
          line: "18",
          date: [[4, 1], [3, 0], [2, 0], [1, 0], [0, 0]]
        }],

        /**中奖配置 */
        winning: [{
          "id": 1,
          "name": "bigwin",
          "fileName": ["sb_lbjs_BIGWIN", "slots_common_game_bw_gold"],
          "minRate": 20,
          "maxRate": 100
        }, {
          "id": 2,
          "name": "megawin",
          "fileName": ["sb_lbjs_MEGAWIN", "slots_common_game_ew_gold"],
          "minRate": 101,
          "maxRate": 200
        }, {
          "id": 3,
          "name": "superwin",
          "fileName": ["sb_lbjs_SUPERWIN", "slots_common_game_sw_gold"],
          "minRate": 201,
          "maxRate": 3000
        }, {
          "id": 4,
          "name": "jackpot",
          "fileName": ["sb_lbjs_JACKPOT", "slots_common_game_uw_gold"],
          "minRate": 3001,
          "maxRate": 99999
        }]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91889552a2aaaadd832626e4158badf8402b0424.js.map