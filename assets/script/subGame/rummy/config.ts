import { Vec3 } from "cc";
import { PokerSpriteFramePathDefine } from "./sourceDefine/pokerSpriteDefine";

export default {
  sktCode: "Rummy",
  name: "Rummy",
  gameId: 16,
  isTest: true,
  seatNumber: 4,
  isReconnect: false,
  testConfig: {
    wsUrl: "",
    token: "",
    uid: ''
  },

  gameConfig: {
    /**自己的座位号 */
    mySeatIndex: 0,
    /**长按牌的时间，用于拖动牌 */
    longPressCardTime: 0.3,
    /**牌飞的时间 */
    flyTime: 0.3,
    /**背面牌数量 */
    backPokerCount: 13,
    /**背面牌起始位置 */
    backPokerStartPos: new Vec3(-320, 0),
    /**背面牌间隔 */
    backPokerInterval: 55,
    /**牌间隔 */
    showPokerInterval: 40,
    /**倒计时颜色 */
    countdownColor: ['3ec104', 'cdb700', 'cd6f00', 'cd2b00', 'e20000'],
    /**组的名称 */
    groupTypeName: {
      notCuurent: 'Not Current',
      oneGroup: '1st Life',
      twoGroup: '2st Life',
      otherGroup: 'Impure Sequence',
      neededGroup: '1st Life Needed',
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

  pokerConfigs: [
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
      point: 11,
      spriteName: [PokerSpriteFramePathDefine.PJB, PokerSpriteFramePathDefine.PJR],
      headSpriteName: ["", PokerSpriteFramePathDefine.J_TX_1, PokerSpriteFramePathDefine.J_TX_2, PokerSpriteFramePathDefine.J_TX_3, PokerSpriteFramePathDefine.J_TX_4]
    }, {
      point: 12,
      spriteName: [PokerSpriteFramePathDefine.PQB, PokerSpriteFramePathDefine.PQR],
      headSpriteName: ["", PokerSpriteFramePathDefine.Q_TX_1, PokerSpriteFramePathDefine.Q_TX_2, PokerSpriteFramePathDefine.Q_TX_3, PokerSpriteFramePathDefine.Q_TX_4]
    }, {
      point: 13,
      spriteName: [PokerSpriteFramePathDefine.PKB, PokerSpriteFramePathDefine.PKR],
      headSpriteName: ["", PokerSpriteFramePathDefine.K_TX_1, PokerSpriteFramePathDefine.K_TX_2, PokerSpriteFramePathDefine.K_TX_3, PokerSpriteFramePathDefine.K_TX_4]
    }, {
      point: 14,
      spriteName: [PokerSpriteFramePathDefine.PAB, PokerSpriteFramePathDefine.PAR],
    }, {
      point: 15,
      spriteName: [PokerSpriteFramePathDefine.P_JOKER_SMALL],
      headSpriteName: [PokerSpriteFramePathDefine.JOKER_SMALL]
    }, {
      point: 16,
      spriteName: [PokerSpriteFramePathDefine.P_JOKER_BIG],
      headSpriteName: [PokerSpriteFramePathDefine.JOKER_BIG]
    }
  ]
}