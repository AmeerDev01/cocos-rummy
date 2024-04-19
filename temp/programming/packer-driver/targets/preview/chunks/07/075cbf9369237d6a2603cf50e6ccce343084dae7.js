System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DirectionType, _crd;

  function _reportPossibleCrUseOfDirectionType(extras) {
    _reporterNs.report("DirectionType", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DirectionType = _unresolved_2.DirectionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "908c5v/Uo9C6p3IeP1/SElx", "config", undefined);

      _export("default", {
        sktCode: "Thor",
        name: "thor",
        gameId: 14,
        testConfig: {
          wsUrl: "",
          token: ""
        },

        /**游戏默认的固定参数 */
        normalRollOption: {
          /**统一的滚动速度 */
          rollerSpeed: 35,

          /**停止的动作时间 */
          stopSpeed: 0.4,

          /**单图标的高度 */
          singleRollerHeight: 117,

          /**单图标的宽度 */
          singleRollerWidth: 140,

          /**单图标的上下间隔 */
          singleIntervalHeight: 0,

          /**滑槽的宽度 */
          rollerWidth: 152,

          /**滑槽的左右间隔宽度 */
          rollerIntervalWidth: 0,

          /**滑动方向 */
          direction: (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN
        },

        /**游戏默认的固定参数 */
        largeRollOption: {
          /**统一的滚动速度 */
          rollerSpeed: 50,

          /**停止的动作时间 */
          stopSpeed: 1,

          /**单图标的高度 */
          singleRollerHeight: 117,

          /**单图标的宽度 */
          singleRollerWidth: 140,

          /**单图标的上下间隔 */
          singleIntervalHeight: 0,

          /**滑槽的宽度 */
          rollerWidth: 152,

          /**滑槽的左右间隔宽度 */
          rollerIntervalWidth: 0,

          /**滑动方向 */
          direction: (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN
        },

        /**普通图标 */
        rollerIcon: [{
          /**图标id */
          "id": 1,

          /**图标名称,用于人肉识别 */
          "name": "rhombic",

          /**图标动画对应的文件名称 */
          "fileName": "car/icon/thor_icon_1",

          /**图标对应的文件名称 */
          "iconName": "img/bigIcon/icon_olps_lan/spriteFrame",

          /**图标对应的皮肤 */
          "skin": '',

          /**图标动画的动效列表，第一个是静态 */
          "animationArr": ["", "anima_1", "animation"],

          /**图标动画处于格子中的坐标偏移量 */
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 2,
          "name": "triangle",
          "fileName": "car/icon/thor_icon_2",
          "iconName": "img/bigIcon/icon_olps_lv/spriteFrame",
          "skin": '',
          "animationArr": ["", "anina_icon_2", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 3,
          "name": "hexagonal",
          "fileName": "car/icon/thor_icon_3",
          "iconName": "img/bigIcon/icon_olps_huang/spriteFrame",
          "skin": '',
          "animationArr": ["", "anina_icon_3", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 4,
          "name": "inverted_triangle",
          "fileName": "car/icon/thor_icon_4",
          "iconName": "img/bigIcon/icon_olps_zi/spriteFrame",
          "skin": '',
          "animationArr": ["", "anina_icon_4", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 5,
          "name": "pentagon",
          "fileName": "car/icon/thor_icon_5",
          "iconName": "img/bigIcon/icon_olps_hong/spriteFrame",
          "skin": '',
          "animationArr": ["", "anina_icon_5", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 6,
          "name": "grail",
          "fileName": "car/icon/hw_thor_icon_6",
          "iconName": "img/bigIcon/icon_olps_shengbei/spriteFrame",
          "skin": '',
          "animationArr": ["", "animation", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 7,
          "name": "ring",
          "fileName": "car/icon/thor_icon_7",
          "iconName": "img/bigIcon/icon_olps_jiezhi/spriteFrame",
          "skin": '',
          "animationArr": ["", "animation", "animation"],
          "distance": [0, 0],
          "scale": [0.7, 0.7]
        }, {
          "id": 8,
          "name": "hourglass",
          "fileName": "car/icon/thor_hourglass",
          "iconName": "img/bigIcon/icon_olps_shalou/spriteFrame",
          "skin": '',
          "animationArr": ["", "animation", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 9,
          "name": "crown",
          "fileName": "car/icon/thor_icon_9",
          "iconName": "img/bigIcon/icon_olps_huangguan/spriteFrame",
          "skin": '',
          "animationArr": ["", "animation", "animation"],
          "distance": [0, 0],
          "scale": [0.7, 0.7]
        }, {
          "id": 10,
          "name": "scatter",
          "fileName": "car/icon/thor_scatter",
          "iconName": "img/bigIcon/icon_olps_scatter/spriteFrame",
          "skin": '',
          "animationArr": ["", "drop", "animation"],
          "distance": [0, 0],
          "scale": [0.55, 0.55]
        }, {
          "id": 11,
          "name": "green",
          "fileName": "car/icon/thor_anim_wild_green",
          "iconName": "img/bigIcon/icon_olps_lvguangquan/spriteFrame",
          "skin": 'green',
          "animationArr": ["", "anima_chibang_2", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 12,
          "name": "blue",
          "fileName": "car/icon/thor_anim_wild_blue",
          "iconName": "img/bigIcon/icon_olps_languangquan/spriteFrame",
          "skin": 'blue',
          "animationArr": ["", "anima_chibang_2", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 13,
          "name": "purple",
          "fileName": "car/icon/thor_anim_wild",
          "iconName": "img/bigIcon/icon_olps_ziguangquan/spriteFrame",
          "skin": 'Purple',
          "animationArr": ["", "anima_chibang_2", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }, {
          "id": 14,
          "name": "red",
          "fileName": "car/icon/thor_anim_wild_red",
          "iconName": "img/bigIcon/icon_olps_hongguangquan/spriteFrame",
          "skin": 'red',
          "animationArr": ["", "anima_chibang_2", "animation"],
          "distance": [0, 0],
          "scale": [0.5, 0.5]
        }],

        /**线路数量 */
        linesQueueNum: 20,

        /**普通图标的滑槽(6条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        iconRollerQueue: [[2, 7, 1, 2, 2, 7, 3, 3, 5, 4, 1, 2, 2, 3, 1, 3, 2, 1, 2, 2, 1, 4, 10, 10, 1, 9, 8, 5, 3, 5, 5, 8, 2, 11, 6, 2, 4, 5, 7, 6, 1, 2, 7, 3, 1, 8, 1, 1, 2, 1, 2, 2, 3, 1, 1, 6, 5, 1, 6, 1, 2, 1, 2, 1, 3, 2, 3, 2, 5, 3, 1, 2, 9, 1, 3, 8, 5, 3, 4, 7, 4, 4, 3, 6, 1, 3, 1, 1, 1, 4, 2, 1, 6, 6, 9, 1, 1, 4, 3, 4], [2, 3, 8, 3, 1, 1, 8, 5, 9, 9, 6, 5, 3, 3, 3, 6, 3, 9, 8, 4, 6, 1, 6, 3, 8, 4, 1, 3, 10, 1, 8, 4, 7, 5, 6, 1, 7, 6, 2, 2, 4, 7, 1, 4, 9, 3, 4, 9, 5, 5, 5, 4, 2, 5, 2, 7, 7, 5, 7, 9, 1, 6, 6, 9, 2, 8, 1, 2, 6, 6, 2, 9, 5, 4, 4, 5, 8, 7, 1, 8, 3, 2, 4, 8, 7, 10, 9, 6, 1, 7, 2, 4, 11, 9, 7, 1, 3, 5, 2, 8], [3, 1, 1, 1, 6, 3, 2, 1, 2, 1, 3, 3, 2, 9, 2, 3, 1, 2, 4, 1, 7, 3, 3, 8, 3, 3, 1, 1, 2, 2, 4, 5, 4, 1, 8, 2, 1, 1, 2, 1, 4, 5, 6, 3, 1, 3, 2, 7, 1, 7, 2, 10, 6, 8, 6, 6, 5, 6, 2, 10, 5, 1, 2, 2, 1, 2, 7, 1, 5, 4, 3, 1, 8, 3, 5, 4, 4, 1, 7, 3, 2, 5, 5, 2, 9, 4, 1, 3, 12, 1, 9, 4, 2, 1, 6, 1, 2, 1, 2, 1], [4, 1, 8, 4, 2, 2, 11, 5, 7, 6, 1, 2, 7, 4, 4, 6, 5, 8, 4, 1, 3, 8, 6, 2, 1, 1, 5, 4, 2, 1, 3, 3, 8, 5, 7, 9, 5, 9, 3, 1, 6, 3, 6, 5, 6, 9, 6, 9, 4, 7, 6, 9, 9, 1, 7, 2, 3, 5, 3, 4, 10, 8, 6, 7, 8, 5, 2, 3, 8, 7, 4, 3, 2, 4, 1, 6, 4, 5, 5, 8, 2, 7, 9, 9, 9, 2, 7, 8, 3, 10, 9, 3, 1, 1, 8, 1, 5, 7, 6, 2], [8, 1, 4, 2, 2, 4, 6, 1, 6, 3, 6, 1, 3, 3, 1, 6, 2, 4, 3, 8, 6, 5, 7, 1, 1, 2, 2, 9, 2, 9, 1, 2, 2, 8, 1, 3, 4, 10, 3, 3, 5, 1, 4, 2, 3, 5, 5, 4, 5, 3, 7, 3, 3, 1, 1, 5, 3, 1, 3, 5, 2, 1, 1, 3, 2, 1, 2, 4, 1, 2, 9, 4, 1, 1, 2, 12, 2, 2, 6, 2, 1, 2, 7, 1, 1, 4, 3, 10, 5, 1, 2, 7, 1, 1, 8, 6, 7, 1, 1, 2], [7, 6, 2, 7, 7, 6, 4, 5, 10, 6, 7, 1, 2, 8, 8, 1, 5, 5, 8, 5, 1, 9, 5, 4, 3, 11, 2, 9, 1, 6, 7, 9, 7, 6, 4, 9, 5, 3, 8, 3, 5, 3, 4, 9, 2, 3, 8, 4, 7, 8, 1, 3, 4, 1, 4, 9, 4, 9, 9, 4, 3, 8, 1, 9, 2, 6, 8, 2, 2, 6, 5, 1, 10, 5, 1, 5, 3, 7, 8, 4, 6, 4, 2, 1, 3, 7, 9, 1, 1, 2, 3, 7, 6, 2, 6, 5, 2, 6, 3, 8]],

        /**开启翻倍普通图标的滑槽(6条滑槽)排列(数据：从左至有=>游戏：从上至下) */
        rateIconRollerQueue: [[3, 3, 8, 3, 9, 4, 1, 5, 2, 5, 6, 1, 8, 1, 6, 4, 3, 2, 6, 1, 2, 1, 2, 3, 7, 5, 7, 1, 1, 7, 1, 4, 3, 5, 4, 7, 2, 2, 3, 2, 7, 9, 3, 6, 5, 3, 11, 3, 4, 2, 6, 1, 9, 6, 3, 2, 1, 2, 1, 2, 1, 6, 1, 4, 3, 8, 4, 5, 2, 3, 4, 9, 5, 5, 1, 10, 1, 4, 4, 1, 7, 8, 7, 8, 9, 5, 1, 8, 1, 2, 1, 2, 3, 3, 2, 7, 10, 6, 2, 3], [5, 4, 1, 9, 3, 5, 10, 2, 7, 1, 7, 2, 9, 5, 2, 6, 8, 2, 1, 5, 1, 4, 3, 1, 3, 3, 2, 10, 3, 6, 7, 3, 9, 4, 3, 9, 3, 1, 3, 3, 6, 2, 1, 8, 5, 4, 4, 5, 6, 13, 8, 7, 5, 2, 4, 1, 2, 8, 1, 2, 3, 1, 1, 3, 8, 4, 5, 3, 1, 2, 2, 1, 2, 4, 3, 3, 9, 2, 2, 2, 4, 2, 6, 4, 7, 3, 1, 6, 1, 6, 7, 1, 1, 1, 8, 7, 7, 1, 5, 6], [9, 2, 9, 3, 2, 9, 4, 4, 5, 4, 2, 4, 1, 2, 3, 6, 4, 2, 1, 7, 9, 3, 6, 6, 2, 3, 2, 8, 1, 6, 8, 1, 4, 5, 5, 3, 12, 3, 2, 7, 3, 1, 1, 1, 2, 2, 2, 2, 8, 2, 4, 2, 6, 1, 5, 3, 3, 7, 3, 7, 3, 5, 2, 10, 1, 8, 1, 9, 3, 1, 8, 1, 7, 1, 2, 1, 1, 7, 5, 7, 6, 10, 3, 1, 6, 2, 5, 7, 3, 1, 4, 4, 4, 5, 1, 6, 3, 8, 1, 5], [9, 8, 6, 1, 6, 5, 1, 4, 1, 14, 3, 3, 5, 5, 2, 6, 2, 1, 1, 9, 3, 7, 3, 7, 1, 2, 2, 10, 7, 3, 1, 4, 3, 9, 1, 2, 1, 5, 1, 8, 1, 2, 1, 9, 2, 2, 4, 1, 3, 4, 3, 6, 4, 3, 2, 1, 6, 3, 7, 2, 3, 5, 3, 8, 8, 1, 9, 7, 4, 3, 10, 4, 5, 7, 4, 2, 3, 7, 1, 8, 1, 6, 2, 4, 4, 2, 2, 1, 3, 5, 5, 8, 7, 1, 5, 6, 2, 2, 1, 6], [9, 4, 7, 4, 6, 10, 2, 1, 3, 5, 5, 1, 9, 4, 1, 1, 3, 3, 2, 2, 6, 5, 1, 8, 1, 1, 8, 6, 1, 3, 7, 1, 2, 1, 1, 4, 4, 2, 6, 8, 2, 4, 7, 1, 5, 1, 7, 3, 3, 2, 1, 5, 3, 5, 2, 8, 10, 4, 2, 2, 2, 4, 7, 5, 2, 1, 4, 6, 3, 3, 2, 1, 7, 1, 9, 1, 4, 6, 1, 3, 7, 5, 3, 3, 11, 9, 7, 6, 3, 5, 9, 2, 8, 6, 3, 2, 2, 8, 1, 3], [2, 2, 9, 4, 5, 7, 1, 3, 1, 2, 4, 1, 4, 6, 2, 10, 1, 2, 3, 3, 3, 2, 1, 1, 6, 3, 5, 3, 3, 5, 7, 7, 1, 1, 1, 1, 9, 1, 7, 4, 3, 9, 7, 2, 9, 5, 5, 5, 3, 4, 8, 2, 4, 4, 1, 3, 6, 3, 7, 8, 7, 4, 2, 8, 5, 8, 10, 3, 3, 6, 4, 6, 1, 2, 6, 1, 3, 5, 5, 11, 2, 1, 2, 1, 7, 6, 6, 2, 9, 4, 8, 1, 1, 1, 8, 3, 2, 2, 2, 1]],

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
//# sourceMappingURL=075cbf9369237d6a2603cf50e6ccce343084dae7.js.map