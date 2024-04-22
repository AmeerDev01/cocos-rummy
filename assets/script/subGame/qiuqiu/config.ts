import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { CardType } from "./type";

export default {
  sktCode: "QiuQiu",
  name: "QiuQiu",
  /**房间底注 */
  afee: 0,
  gameId: 4,
  isTest: false,
  seatNumber: 7,
  dealAnimeSpeed: 0.1,
  isReconnect: false,
  testConfig: {
    // wsUrl: "ws://192.168.110.243:10017/ws",
    wsUrl: "",
    token: "",
    uid: ''
  },
  chips: [
    {
      value: 1,
      spriteFrame: SpriteFramePathDefine.CHIP2,
    }, {
      value: 10,
      spriteFrame: SpriteFramePathDefine.CHIP3,
    }, {
      value: 100,
      spriteFrame: SpriteFramePathDefine.CHIP4,
    }, {
      value: 1000,
      spriteFrame: SpriteFramePathDefine.CHIP5,
    }, {
      value: 10000,
      spriteFrame: SpriteFramePathDefine.CHIP6,
    }, {
      value: 100000,
      spriteFrame: SpriteFramePathDefine.CHIP7,
    }, {
      value: 1000000,
      spriteFrame: SpriteFramePathDefine.CHIP8,
    }, {
      value: 10000000,
      spriteFrame: SpriteFramePathDefine.CHIP9,
    }
  ],
  cardTypes: [
    {
      cardType: CardType.QIUQIU,
      spriteFrame: SpriteFramePathDefine.zi_qiuqiu_jiesuan_QiuQiu,
    },{
      cardType: CardType.BIG_CARD,
      spriteFrame: SpriteFramePathDefine.zi_qiuqiu_jiesuan_BigCards,
    },{
      cardType: CardType.SMALL_CARD,
      spriteFrame: SpriteFramePathDefine.zi_qiuqiu_jiesuan_SmallCards,
    },{
      cardType: CardType.TWIN_CARD,
      spriteFrame: SpriteFramePathDefine.zi_qiuqiu_jiesuan_TwinCards,
    },{
      cardType: CardType.SAIX_CARD,
      spriteFrame: SpriteFramePathDefine.zi_qiuqiu_jiesuan_saix,
    }
  ]
}