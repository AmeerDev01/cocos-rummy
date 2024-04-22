import { Vec3 } from "cc";
import { PokerSpriteFramePathDefine } from "./sourceDefine/pokerSpriteDefine";
import { CardValue } from "./type";

export default {
  sktCode: "Rummy",
  name: "Rummy",
  gameId: 19,
  isTest: false,
  seatNumber: 4,
  isReconnect: false,
  memberId: '',
  testConfig: {
    wsUrl: "",
    token: "",
    uid: ''
  },

  gameConfig: {
    /**分组后的牌的大小，调整牌大小之后，groupInterval，showPokerInterval，groupNameBgAddWidth，这几个字段都要  */
    groupCardScale: new Vec3(1.1, 1.1, 1.1),
    /**组的间隔 */
    groupInterval: 26,
    /**牌间隔 */
    showPokerInterval: 40,
    /**分组名称背景的加宽 */
    groupNameBgAddWidth: 20,
    /**背面牌间隔 */
    backPokerInterval: 55,
    /**癞子牌位置 */
    laiziPos: new Vec3(-35, 0),
    /**癞子牌的角度 */
    laiziAngle: 25,
    /**摸牌的缩放 */
    touchCardScale: new Vec3(0.95, 0.95, 0.95),
    /**自己的座位号 */
    mySeatIndex: 0,
    /**消息超时时间 单位/秒 */
    msgTimeout: 10,
    /**桌子锁住超时，如果桌子卡住了60秒，就直接退出游戏 单位/秒 */
    deskLockTimeout: 60,
    /**长按牌的时间，用于拖动牌 */
    longPressCardTime: 0.2,
    /**发牌飞的时间 */
    dealFlyTime: 0.3,
    /**背面牌数量 */
    backPokerCount: 13,
    /**背面牌起始位置 */
    backPokerStartPos: new Vec3(-320, 0),
    /**最大分数 */
    maxPoint: 80,
    /**结算提示文字消失事件 */
    balancePromptTextTime: 3,
    /**出牌摸牌飞牌动画时长 */
    outTouchflyCardTime: 0.4,
    /**倒计时颜色 */
    countdownColor: ['3ec104', 'cdb700', 'cd6f00', 'cd2b00', 'e20000'],
    /**组的名称 */
    groupTypeName: {
      notCuurent: 'Not Current',
      oneGroup: '1st Life',
      twoGroup: '2nd Life',
      /**3组真组 */
      pureSequence: 'Pure Sequence',
      /**2组真组+1组由赖子或(和）大小王组成的 （第一个真组牌数大于3） */
      impureSequence: 'Impure Sequence',
      /**2组真组+1组由赖子或(和）大小王组成的 （第一个真组牌数等于3） */
      impure: 'Impure',
      bombGroup: 'Set',
      neededGroup1: '1st Life Needed',
      neededGroup2: '2nd Life Needed',
    }
  },

  /**作为信息, 顺时针，0的位置最最下面的 */
  seatInfo: [
    {
      index: 0,
      pos: new Vec3(0, -305),
      scale: new Vec3(0.5, 0.5, 0.5),
    }, {
      index: 1,
      pos: new Vec3(-528, 19),
      scale: new Vec3(0.5, 0.5, 0.5),
    }, {
      index: 2,
      pos: new Vec3(-3, 259),
      scale: new Vec3(0.5, 0.5, 0.5),
    }, {
      index: 3,
      pos: new Vec3(523, 19),
      scale: new Vec3(0.5, 0.5, 0.5),
    }
  ],

  cardConfigs: [
    {
      point: 2,
      spriteName: [PokerSpriteFramePathDefine.P2B, PokerSpriteFramePathDefine.P2R],
    }, {
      point: 3,
      spriteName: [PokerSpriteFramePathDefine.P3B, PokerSpriteFramePathDefine.P3R],
    }, {
      point: 4,
      spriteName: [PokerSpriteFramePathDefine.P4B, PokerSpriteFramePathDefine.P4R],
    }, {
      point: 5,
      spriteName: [PokerSpriteFramePathDefine.P5B, PokerSpriteFramePathDefine.P5R],
    }, {
      point: 6,
      spriteName: [PokerSpriteFramePathDefine.P6B, PokerSpriteFramePathDefine.P6R],
    }, {
      point: 7,
      spriteName: [PokerSpriteFramePathDefine.P7B, PokerSpriteFramePathDefine.P7R],
    }, {
      point: 8,
      spriteName: [PokerSpriteFramePathDefine.P8B, PokerSpriteFramePathDefine.P8R],
    }, {
      point: 9,
      spriteName: [PokerSpriteFramePathDefine.P9B, PokerSpriteFramePathDefine.P9R],
    }, {
      point: 10,
      spriteName: [PokerSpriteFramePathDefine.P10B, PokerSpriteFramePathDefine.P10R],
    }, {
      point: CardValue.J,
      spriteName: [PokerSpriteFramePathDefine.PJB, PokerSpriteFramePathDefine.PJR],
      headSpriteName: ["", PokerSpriteFramePathDefine.J_TX_1, PokerSpriteFramePathDefine.J_TX_2, PokerSpriteFramePathDefine.J_TX_3, PokerSpriteFramePathDefine.J_TX_4]
    }, {
      point: CardValue.Q,
      spriteName: [PokerSpriteFramePathDefine.PQB, PokerSpriteFramePathDefine.PQR],
      headSpriteName: ["", PokerSpriteFramePathDefine.Q_TX_1, PokerSpriteFramePathDefine.Q_TX_2, PokerSpriteFramePathDefine.Q_TX_3, PokerSpriteFramePathDefine.Q_TX_4]
    }, {
      point: CardValue.K,
      spriteName: [PokerSpriteFramePathDefine.PKB, PokerSpriteFramePathDefine.PKR],
      headSpriteName: ["", PokerSpriteFramePathDefine.K_TX_1, PokerSpriteFramePathDefine.K_TX_2, PokerSpriteFramePathDefine.K_TX_3, PokerSpriteFramePathDefine.K_TX_4]
    }, {
      point: CardValue.A,
      spriteName: [PokerSpriteFramePathDefine.PAB, PokerSpriteFramePathDefine.PAR],
    }, {
      point: CardValue.JOKER_SMALL,
      spriteName: [PokerSpriteFramePathDefine.P_JOKER_SMALL],
      headSpriteName: [PokerSpriteFramePathDefine.JOKER_SMALL]
    }, {
      point: CardValue.JOKER_BIG,
      spriteName: [PokerSpriteFramePathDefine.P_JOKER_BIG],
      headSpriteName: [PokerSpriteFramePathDefine.JOKER_BIG]
    }
  ]
}