import { DirectionType } from "./type";

export default {
  sktCode: "Starlight",
  name: "starlight",
  gameId: 15,
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
    singleRollerHeight: 110,
    /**单图标的宽度 */
    singleRollerWidth: 130,
    /**单图标的上下间隔 */
    singleIntervalHeight: 0,
    /**滑槽的宽度 */
    rollerWidth: 145,
    /**滑槽的左右间隔宽度 */
    rollerIntervalWidth: 0,
    /**滑动方向 */
    direction: DirectionType.DOWN
  },
  /**游戏默认的固定参数 */
  largeRollOption: {
    /**统一的滚动速度 */
    rollerSpeed: 50,
    /**停止的动作时间 */
    stopSpeed: 1,
    /**单图标的高度 */
    singleRollerHeight: 110,
    /**单图标的宽度 */
    singleRollerWidth: 130,
    /**单图标的上下间隔 */
    singleIntervalHeight: 0,
    /**滑槽的宽度 */
    rollerWidth: 145,
    /**滑槽的左右间隔宽度 */
    rollerIntervalWidth: 0,
    /**滑动方向 */
    direction: DirectionType.DOWN
  },
   /**普通图标 */
   rollerIcon: [
    {
      /**图标id */
      "id": 1,
      /**图标名称,用于人肉识别 */
      "name": "yellow_gem",
      /**图标对应的文件名称 */
      "fileName": "car/iconCar/st_icon_8",
      "iconName": "img/bigIcon/icon_xggz_huang/spriteFrame",      
      /**图标对应的皮肤 */
      "skin":'',
      /**图标的动效列表，第一个是静态 */
      "animationArr": ["", "animation", "animation"],
      /**图标处于格子中的坐标偏移量 */
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 2,
      "name": "blue_green_gem",
      "fileName": "car/iconCar/st_icon_5",
      "iconName": "img/bigIcon/icon_xggz_lanlv/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 3,
      "name": "green_gem",
      "fileName": "car/iconCar/st_icon_6",
      "iconName": "img/bigIcon/icon_xggz_lv/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 4,
      "name": "blue_gem",
      "fileName": "car/iconCar/st_icon_9",
      "iconName": "img/bigIcon/icon_xggz_lan/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 5,
      "name": "red_gem",
      "fileName": "car/iconCar/st_icon_7",
      "iconName": "img/bigIcon/icon_xggz_hong/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 6,
      "name": "star",
      "fileName": "car/iconCar/st_icon_4",
      "iconName": "img/bigIcon/icon_xggz_star/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 7,
      "name": "moon",
      "fileName": "car/iconCar/st_icon_3",
      "iconName": "img/bigIcon/icon_xggz_yueliang/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 8,
      "name": "heart",
      "fileName": "car/iconCar/icon_2",
      "iconName": "img/bigIcon/icon_xggz_xin/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 9,
      "name": "sun",
      "fileName": "car/iconCar/st_icon_1",
      "iconName": "img/bigIcon/icon_xggz_taiyang/spriteFrame",      
      "skin":'',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 10,
      "name": "scatter",
      "fileName": "car/iconCar/scatter",
      "iconName": "img/bigIcon/icon_xggz_scatter/spriteFrame",      
      "skin":'',
      "animationArr": ["", "idle2", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 11,
      "name": "green_heart",
      "fileName": "car/iconCar/icon_bl",
      "iconName": "img/bigIcon/icon_xggz_lvxin/spriteFrame",      
      "skin":'green',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 12,
      "name": "blue_heart",
      "fileName": "car/iconCar/icon_bl",
      "iconName": "img/bigIcon/icon_xggz_lanxin/spriteFrame",      
      "skin":'blue',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 13,
      "name": "purple_heart",
      "fileName": "car/iconCar/icon_bl",
      "iconName": "img/bigIcon/icon_xggz_hongxin/spriteFrame",      
      "skin":'red',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 14,
      "name": "yellow_heart",
      "fileName": "car/iconCar/icon_bl",      
      "iconName": "img/bigIcon/icon_xggz_huangxin/spriteFrame",      
      "skin":'yellow',
      "animationArr": ["", "animation", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    },
  ],

 /**线路数量 */
 linesQueueNum: 20,
 /**普通图标的滑槽(6条滑槽)排列(数据：从左至有=>游戏：从上至下) */
 iconRollerQueue: [
   [2,7,1,2,2,7,3,3,5,4,12,2,2,3,1,3,2,1,2,2,1,4,10,1,1,9,8,5,3,5,5,8,2,11,6,2,4,5,7,6,1,2,7,3,1,8,1,1,2,1,2,2,3,1,1,6,5,1,6,1,2,1,2,1,3,2,3,2,5,3,1,2,9,1,3,8,5,3,4,7,4,4,3,6,1,3,1,10,1,4,2,1,6,6,9,1,1,4,3,4],
   [2,3,8,3,1,1,8,5,9,9,6,5,3,3,3,6,3,9,8,4,6,1,6,3,8,4,1,3,10,12,8,4,7,5,6,1,7,6,2,2,4,7,1,4,9,3,4,9,5,5,5,4,2,5,2,7,7,5,7,9,1,6,6,9,2,8,1,2,6,6,2,9,5,4,4,5,8,7,1,8,3,2,4,8,7,10,9,6,1,7,2,4,11,9,7,1,3,5,2,8],
   [3,1,1,1,6,3,2,1,2,1,3,3,2,9,2,3,1,2,4,1,7,3,3,8,3,3,1,1,2,2,4,5,4,1,8,2,1,1,2,11,4,5,6,3,1,3,2,7,1,7,2,10,6,8,6,6,5,6,2,10,5,1,2,2,1,2,7,1,5,4,3,1,8,3,5,4,4,1,7,3,2,5,5,2,9,4,1,3,12,1,9,4,2,1,6,1,2,1,2,1],
   [4,1,8,4,2,2,11,5,7,6,1,2,7,4,4,6,5,8,4,1,3,8,6,2,1,12,5,4,2,1,3,3,8,5,7,9,5,9,3,1,6,3,6,5,6,9,6,9,4,7,6,9,9,1,7,2,3,5,3,4,10,8,6,7,8,5,2,3,8,7,4,3,2,4,1,6,4,5,5,8,2,7,9,9,9,2,7,8,3,10,9,3,1,1,8,1,5,7,6,2],
   [8,1,4,2,2,4,6,11,6,3,6,1,3,3,1,6,2,4,3,8,6,5,7,1,1,2,2,9,2,9,1,2,2,8,1,3,4,10,3,3,5,1,4,2,3,5,5,4,5,3,7,3,3,1,1,5,3,1,3,5,2,1,1,3,2,1,2,4,1,2,9,4,1,1,2,12,2,2,6,2,1,2,7,1,1,4,3,10,5,1,2,7,1,1,8,6,7,1,1,2],
   [7,6,2,7,7,6,4,5,10,6,7,1,2,8,8,1,5,5,8,5,1,9,5,4,3,11,2,9,1,6,7,9,7,6,4,9,5,3,8,3,5,3,4,9,2,3,8,4,7,8,1,3,4,1,4,9,4,9,9,4,3,8,12,9,2,6,8,2,2,6,5,1,10,5,1,5,3,7,8,4,6,4,2,1,3,7,9,1,1,2,3,7,6,2,6,5,2,6,3,8]
 ],
   /**开启翻倍普通图标的滑槽(6条滑槽)排列(数据：从左至有=>游戏：从上至下) */
   rateIconRollerQueue: [
     [3,3,8,3,9,4,1,5,2,5,6,1,8,1,6,4,3,2,6,1,2,1,2,3,7,5,7,1,1,7,1,4,3,5,4,7,2,2,3,2,7,9,3,6,5,3,1,3,4,2,6,1,9,6,3,2,1,2,1,2,1,6,1,4,3,8,4,5,2,12,4,9,5,5,1,10,1,4,4,1,7,8,7,8,9,5,1,8,1,2,1,2,3,3,2,7,10,6,2,3],
     [5,4,1,9,3,5,10,2,7,1,7,2,9,5,2,6,8,2,1,5,1,4,3,1,3,3,2,10,3,6,7,3,9,4,3,9,3,1,3,3,6,2,1,8,5,4,4,5,6,2,8,7,5,2,4,1,2,8,1,2,3,1,1,3,8,4,5,3,1,3,2,1,2,4,3,3,9,2,2,2,4,2,6,4,7,1,1,6,1,6,7,1,1,1,8,7,7,1,5,6],
     [9,2,9,3,2,9,4,4,5,4,11,4,1,2,3,6,4,2,1,7,9,3,6,6,2,3,2,8,1,6,8,1,4,5,5,3,3,3,2,7,3,1,1,1,2,2,2,2,8,2,4,2,6,1,5,3,3,7,3,7,3,5,2,10,1,8,14,9,3,1,8,1,7,1,2,1,1,7,5,7,6,10,3,1,6,2,5,7,3,1,4,4,4,5,1,6,3,8,1,5],
     [9,8,6,1,6,5,1,4,1,1,3,3,5,5,3,6,2,1,1,9,3,7,3,7,1,2,2,10,7,3,1,4,3,9,11,2,1,5,1,8,1,2,1,9,2,2,4,1,3,4,3,6,4,3,2,2,6,3,7,2,3,5,3,8,8,1,9,7,4,3,10,4,5,7,4,2,3,7,1,8,1,6,2,4,4,2,2,1,3,5,5,8,7,1,5,6,2,2,1,6],
     [9,4,7,4,6,10,2,1,3,5,5,1,9,4,1,1,3,3,2,2,6,5,1,8,1,1,8,6,1,3,7,1,2,1,1,4,4,3,6,8,2,4,7,1,5,1,7,3,3,2,1,5,3,5,2,8,10,4,2,2,2,4,7,5,2,13,4,6,3,3,2,1,7,1,9,1,4,6,1,3,7,5,3,3,1,9,7,6,3,5,9,2,8,6,3,2,2,8,1,3],
     [2,2,9,4,5,7,1,3,1,2,4,1,4,6,2,10,1,2,3,3,3,2,1,1,6,3,5,3,3,5,7,7,2,1,1,1,9,1,7,4,3,9,7,2,9,5,5,5,3,4,8,2,4,4,1,3,6,3,7,8,7,4,1,8,5,8,10,3,3,6,4,6,1,2,6,1,3,5,5,11,2,1,2,1,7,6,6,2,9,4,8,1,3,1,8,3,2,2,2,1]
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
            },
            {
              "positionId": 2,
              "value": 2,
            },
            {
              "positionId": 3,
              "value": 4,
            },
            {
              "positionId": 4,
              "value": 8,
            },
            {
              "positionId": 5,
              "value": 16,
            },
            {
              "positionId": 6,
              "value": 20,
            },
            {
              "positionId": 7,
              "value": 40,
            },
            {
              "positionId": 8,
              "value": 60,
            },
            {
              "positionId": 9,
              "value": 90,
            },
            {
              "positionId": 10,
              "value": 120,
            },
            {
              "positionId": 11,
              "value": 150,
            },
            {
              "positionId": 12,
              "value": 200,
            },
            {
              "positionId": 13,
              "value": 400,
            },
            {
              "positionId": 14,
              "value": 600,
            },
            {
              "positionId": 15,
              "value": 900,
            },
            {
              "positionId": 16,
              "value": 1200,
            },
            {
              "positionId": 17,
              "value": 1500,
            },
            {
              "positionId": 18,
              "value": 2000,
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
            },
            {
              "positionId": 22,
              "value": 8000,
            },
            {
              "positionId": 23,
              "value": 10000,
            }
             ]
            }
        ],

  /**中奖配置 */
  winning: [
    {
      "id": 1,
      "name": "bigwin",
      "fileName": "car/st_bigwin",
      "defaultSkin": "bigwin",
      "wintype":"small",
      "minRate": 251,
      "maxRate": 500
    },
    {
      "id": 2, 
      "name": "megawin",
      "fileName": "car/st_bigwin",
      "defaultSkin": "megawin",
      "wintype":"small",
      "minRate": 501,
      "maxRate": 1000
    },
    {
      "id": 3,
      "name": "superwin",
      "fileName": "car/st_bigwin",
      "defaultSkin": "superwin",
      "wintype":"small",
      "minRate": 1001,
      "maxRate": 1600
    },
    {
      "id": 4,
      "name": "epicwin",
      "fileName": "car/st_bigwin",
      "defaultSkin": "epicwin",
      "wintype":"big",
      "minRate": 1601,
      "maxRate": 3000
    },
    {
      "id": 5,
      "name": "ultimatewin",
      "fileName": "car/st_bigwin",
      "defaultSkin": "ultimatewin",
      "wintype":"big",
      "minRate": 3001,
      "maxRate": 99999
    },
  ]
}