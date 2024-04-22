import { SKT_HOST } from "../../common/WebSocketStarter";
import { DirectionType } from "./type";

export default {
  gameName: "fruit777",
  gameId: 3,
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
    singleIntervalHeight: 5,
    /**滑槽的宽度 */
    rollerWidth: 150,
    /**滑槽的左右间隔宽度 */
    rollerIntervalWidth: 10,
    /**滑动方向 */
    direction: DirectionType.DOWN
  },
  /**游戏默认的固定参数 */
  largeRollOption: {
    /**统一的滚动速度 */
    rollerSpeed: 50,
    /**停止的动作时间 */
    stopSpeed: 0.4,
    /**单图标的高度 */
    singleRollerHeight: 450,
    /**单图标的宽度 */
    singleRollerWidth: 450,
    /**单图标的上下间隔 */
    singleIntervalHeight: 5,
    /**滑槽的宽度 */
    rollerWidth: 480,
    /**滑槽的左右间隔宽度 */
    rollerIntervalWidth: 10,
    /**滑动方向 */
    direction: DirectionType.DOWN
  },
  /**普通图标 */
  rollerIcon: [
    {
      /**图标id */
      "id": 1,
      /**图标名称,用于人肉识别 */
      "name": "banana",
      /**图标对应的文件名称 */
      "fileName": "icon/icon_fruits777_jiangjiao/spriteFrame",
      /**骨骼动画文件 */
      "skeleton": "move_icon/xiaoyouxixiaojiang",
      /**图标的动效列表，第一个是静态 */
      "animationArr": ["", "animation2", "animation"],
      /**图标处于格子中的坐标偏移量 */
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 2,
      "name": "strawberry",
      "fileName": "icon/icon_fruits777_caomei/spriteFrame",
      "skeleton": "move_icon/xiaoyouxilanmei",
      "animationArr": ["", "animation2", "animation"],
      "distance": [-10, 0],
      "scale": [1, 1]
    }, {
      "id": 3,
      "name": "apple",
      "fileName": "icon/icon_fruits777_pingguo/spriteFrame",
      "skeleton": "move_icon/xiaoyouxiboluo",
      "animationArr": ["", "animation2", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 4,
      "name": "grape",
      "fileName": "icon/icon_fruits777_putao/spriteFrame",
      "skeleton": "move_icon/xiaoyouxiputao",
      "animationArr": ["", "animation2", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 5,
      "name": "watermelon",
      "fileName": "icon/icon_fruits777_xigua/spriteFrame",
      "skeleton": "move_icon/xiaoyouxixigua",
      "animationArr": ["", "animation2", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 6,
      "name": "bell",
      "fileName": "icon/icon_fruits777_lingdang/spriteFrame",
      "skeleton": "move_icon/lingdangtubiao",
      "animationArr": ["", "animation"],
      "distance": [-10, 30],
      "scale": [1, 1]
    }, {
      "id": 7,
      "name": "bar1",
      "fileName": "icon/icon_fruits777_bar/spriteFrame",
      "skeleton": "move_icon/lansetubiaodonghua",
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 8,
      "name": "bar2",
      "fileName": "icon/icon_fruits777_2bar/spriteFrame",
      "skeleton": "move_icon/lvsedonghua",
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 9,
      "name": "bar3",
      "fileName": "icon/icon_fruits777_3bar/spriteFrame",
      "skeleton": "move_icon/hongsedonghua",
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 10,
      "name": "wild",
      "fileName": "icon/icon_fruits777_wild/spriteFrame",
      "skeleton": "move_icon/lanzitubiaodonghua",
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 11,
      "name": "icon777",
      "fileName": "icon/icon_fruits777_777/spriteFrame",
      "skeleton": "move_icon/777tubiao",
      "animationArr": ["", "animation"],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 12,
      "name": "bouns",
      "fileName": "icon/icon_fruits777_bonus/spriteFrame",
      "skeleton": "move_icon/SGJ_baoxiangdonghua",
      "animationArr": ["static", "dynamic"],
      "distance": [7, -10],
      "scale": [0.9, 0.9]
    }
  ],
  /**大图标 */
  largeIcon: [
    {
      /**图标id */
      "id": 13,
      /**图标名称，用于人肉识别 */
      "name": "bananaLarge",
      /**图标对应的文件名称 */
      "fileName": "icon/icon_fruits777_xiangjiao_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      /**图标处于格子中的坐标偏移量 */
      "distance": [0, 0],
      /**图标的缩放 */
      "scale": [1, 1]
    }, {
      "id": 14,
      "name": "strawberryLarge",
      "fileName": "icon/icon_fruits777_caomei_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 15,
      "name": "appleLarge",
      "fileName": "icon/icon_fruits777_pingguo_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 16,
      "name": "grapeLarge",
      "fileName": "icon/icon_fruits777_putao_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 17,
      "name": "watermelonLarge",
      "fileName": "icon/icon_fruits777_xigua_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 18,
      "name": "bellLarge",
      "fileName": "icon/icon_fruits777_lingdang_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 20,
      "name": "bar2Large",
      "fileName": "icon/icon_fruits777_2bar_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 21,
      "name": "bar3Large",
      "fileName": "icon/icon_fruits777_3bar_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }, {
      "id": 23,
      "name": "icon777Large",
      "fileName": "icon/icon_fruits777_777_big/spriteFrame",
      "skeleton": "",
      "animationArr": [],
      "distance": [0, 0],
      "scale": [1, 1]
    }
  ],
  /**普通图标的滑槽(5条滑槽)排列(数据：从左至有=>游戏：从上至下) */
  iconRollerQueue: [
    [3, 2, 7, 8, 9, 3, 10, 5, 12, 3, 3, 2, 4, 4, 4, 6, 2, 1, 2, 6, 6, 6, 2, 10, 1, 1, 5, 3, 11, 2, 6, 11, 4, 2, 2, 2, 12, 9, 9, 9, 12, 11, 5, 3, 2, 12, 8, 6, 10, 3, 1, 7, 10, 4, 2, 1, 10, 1, 1, 1, 4, 12, 10, 1, 3, 7],
    [8, 8, 3, 3, 3, 1, 4, 2, 1, 2, 4, 5, 9, 8, 1, 3, 9, 1, 3, 3, 4, 4, 2, 5, 10, 1, 3, 2, 12, 2, 10, 5, 10, 11, 6, 2, 10, 1, 12, 10, 2, 2, 3, 6, 9, 6, 6, 6, 2, 6, 1, 12, 7, 2, 2, 1, 5, 1, 11, 8, 12, 3, 7, 10, 4, 1],
    [3, 2, 8, 6, 2, 10, 5, 1, 2, 12, 10, 7, 7, 1, 12, 2, 5, 10, 3, 3, 3, 11, 5, 9, 1, 4, 9, 2, 10, 2, 10, 4, 1, 12, 3, 5, 4, 3, 4, 1, 6, 10, 1, 4, 6, 2, 5, 1, 12, 3, 1, 8, 2, 9, 1, 8, 3, 4, 11, 3, 3, 3, 7, 7, 6, 12],
    [10, 5, 4, 4, 4, 9, 3, 5, 12, 11, 2, 3, 4, 5, 6, 5, 12, 4, 1, 11, 4, 1, 2, 9, 2, 1, 9, 10, 3, 1, 10, 12, 8, 6, 3, 3, 2, 12, 1, 3, 10, 6, 8, 1, 7, 5, 5, 5, 12, 8, 2, 5, 3, 1, 10, 3, 1, 7, 1, 10, 12, 11, 4, 2, 2, 7],
    [7, 5, 12, 4, 4, 4, 2, 6, 2, 7, 3, 8, 1, 3, 4, 1, 8, 7, 5, 2, 1, 1, 1, 12, 11, 9, 6, 6, 6, 1, 1, 6, 10, 5, 2, 4, 10, 2, 12, 11, 10, 12, 2, 2, 8, 9, 10, 3, 3, 3, 4, 4, 3, 2, 1, 3, 5, 1, 9, 3, 2, 2, 10, 10, 6, 9]
  ],
  /**小游戏的滑槽(3条滑槽)配置，中间滑槽为大图标的配置 */
  largeIconRollerQueue: [
    [5, 8, 3, 2, 6, 5, 4, 2, 1, 1, 6, 3, 5, 11, 9, 1, 11, 3, 3, 3, 6, 9, 2, 6, 1, 2, 4, 8, 5, 5, 8, 5, 2, 9, 4, 1, 4, 4, 6, 6, 1, 4, 3, 8, 2],
    [17, 20, 15, 14, 18, 17, 16, 14, 13, 13, 13, 18, 17, 23, 21, 14, 23, 15, 15, 15, 18, 21, 14, 18, 13, 14, 16, 20, 17, 17, 20, 17, 14, 21, 16, 13, 16, 16, 18, 18, 13, 16, 18, 20, 14],
    [3, 6, 6, 3, 5, 8, 6, 11, 8, 2, 6, 4, 2, 2, 2, 3, 4, 4, 1, 1, 3, 11, 4, 6, 4, 1, 6, 1, 3, 8, 5, 5, 9, 5, 2, 9, 5, 5, 1, 9, 4, 8, 3, 1, 2]
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
  /**中奖配置 */
  winning: [
    {
      "id": 1,
      "name": "bigwin",
      "fileName": ["dialog/bigwin/sb_lbjs_BIGWIN", "dialog/bigwin/slots_common_game_bw_gold"],
      "minRate": 50,
      "maxRate": 100
    },
    {
      "id": 2,
      "name": "megawin",
      "fileName": ["dialog/megawin/sb_lbjs_MEGAWIN", "dialog/megawin/slots_common_game_ew_gold"],
      "minRate": 101,
      "maxRate": 1250
    },
    {
      "id": 3,
      "name": "superwin",
      "fileName": ["dialog/superwin/sb_lbjs_SUPERWIN", "dialog/superwin/slots_common_game_sw_gold"],
      "minRate": 1251,
      "maxRate": 3749
    },
    {
      "id": 4,
      "name": "jackpot",
      "fileName": ["dialog/jackpot/sb_lbjs_JACKPOT", "dialog/jackpot/slots_common_game_uw_gold"],
      "minRate": 3750,
      "maxRate": 99999
    },
    {
      "id": 5,
      "name": "watermelon",
      "fileName": ["dialog/bigWatermelon/skeleton", ""],
      "minRate": 0,
      "maxRate": 0
    }
  ],
  /**宝箱图标 */
  awardBoxItem: [
    {
      "id": 1,
      /**图标名称,用于人肉识别 */
      "name": "BxApple",
      /**图标对应的文件名称 */
      "fileName": "move_icon/xiaoyouxiboluo",
      /**图标的动效列表，第一个是静态 */
      "animafild": "animation",
      "up": 0,/**上升层数 */
      "rate": 65,/**倍数 */
      "addTimes": 0,/**增加次数 */
      "distance": [0, -20]
    },
    {
      "id": 2,
      "name": "BxStrawberry",
      "fileName": "move_icon/xiaoyouxilanmei",
      "animafild": "animation",
      "up": 0,
      "rate": 50,
      "addTimes": 0,
      "distance": [0, 0]
    },
    {
      "id": 3,
      "name": "BxGrape",
      "fileName": "move_icon/xiaoyouxiputao",
      "animafild": "animation",
      "up": 0,
      "rate": 80,
      "addTimes": 0,
      "distance": [0, 0]
    },
    {
      "id": 4,
      "name": "BxWatermelon",
      "fileName": "move_icon/xiaoyouxixigua",
      "animafild": "animation",
      "up": 0,
      "rate": 100,
      "addTimes": 0,
      "distance": [0, 0]
    },
    {
      "id": 5,
      "name": "BxBanana",
      "fileName": "move_icon/xiaoyouxixiaojiang",
      "animafild": "animation",
      "up": 0,
      "rate": 35,
      "addTimes": 0,
      "distance": [0, 0]
    },
    {
      "id": 6,
      "name": "up",
      "fileName": "move_icon/+1tubiaodonghua",
      "animafild": "animation",
      "up": 1,
      "rate": 0,
      "addTimes": 0,
      "distance": [0, 0]
    },
    {
      "id": 7,
      "name": "addtimes",
      "fileName": "move_icon/+2tubiaodonghua",
      "animafild": "animation",
      "up": 0,
      "rate": 0,
      "addTimes": 2,
      "distance": [0, 0]
    }
  ],
  /**线路数量 */
  linesQueueNum: 25,
  /**宝箱附加奖励倍数配置 */
  treasureBoxAddition: {
    /**1行 */
    multiple1: 125,
    /**2行 */
    multiple2: 250,
    /**3行 */
    multiple3: 500,
    /*4行 */
    multiple4: 750,
    /*5行 */
    multiple5: 1000
  }
}
