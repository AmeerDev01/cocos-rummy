import { Vec3 } from "cc";
import { getUUID } from "../../utils/tool";
import { sourceManageSelector } from "./index";
import { FontPathDefine } from "./sourceDefine/fontDefine";
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { BetData, BetType, HeadType } from "./type";

export default {
    sktCode: "BENDER_QIU_QIU",
    name: "BENDER_QIU_QIU",
    gameId: 16,
    testConfig: {
      wsUrl: "ws://192.168.110.243:18005/ws",
      token:"eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NMQoDIRAF0LtMrTATHf16g9R7Ak1mwQVhCRaBkLsnpEr7mvei0RZVSaWoqDA7suf5hRyEVX5wrEGVknbAID51gY8N8EU1-oSgKtF63G_kaNrs9rjeqYIZGRIujtaYtq02z_8p5fL-AKXY5c9_AAAA.nTfzZUqqHFTe7HsH7WzQQO8hL9Xcs9PZIbeKmFWtuWA",
  },
    /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
    preBet: true,
    /**游戏默认的固定参数 */
    gameOption: {
      /**座位数 */
      seatNumber: 6,
      /**自己的头像位置 */
      myHeadPosition: new Vec3(-483, -345.5),
      /**在线人数位置 */
      onlineNumberPosition: new Vec3(598, -347),
      /**荷官位置 */
      dealerPosition: new Vec3(0, 200),
      /**飞筹码速度 单位/秒 */
      flyChipSpeed: 0.5,
      /**昵称省略长度 */
      nicknameOmitLength: 12,
      /**旁观索引 */
      lookOnIndex: 99, //==>用于其他online玩家的index,便于判定飞金币的位置
      /**胜率最大的索引位置 */
      winRateMaxIndex: 3,//==>用于判定飞星星的动画展示
      /**发牌 牌组 */
      decks:14,
    },
    /**上榜头像位置 */
    headLocations: [
      { x: -590, y: 155 },
      { x: -590, y: -15 },
      { x: -590, y: -155 },
      { x: 590, y: 155 },
      { x: 590, y: -15 },
      { x: 590, y: -155 },
    ],
    /**金币数据 */
    chipTypes: [
      {
        value: 1000,
        valueStr: '1000',
        fileUrl: SpriteFramePathDefine.CHIP_ONE,
        fontUrl: FontPathDefine.GREEN_BET
      },
      {
        value: 2000,
        valueStr: '2000',
        fileUrl: SpriteFramePathDefine.CHIP_TWO,
        fontUrl: FontPathDefine.BLUE_BET
      },
      {
        value: 5000,
        valueStr: '5000',
        fileUrl: SpriteFramePathDefine.CHIP_THREE,
        fontUrl: FontPathDefine.DARK_BLUE_BET
      },
      {
        value: 10000,
        valueStr: '10K',
        fileUrl: SpriteFramePathDefine.CHIP_FOUR,
        fontUrl: FontPathDefine.RED_BET
      },
      {
        value: 20000,
        valueStr: '20K',
        fileUrl: SpriteFramePathDefine.CHIP_FIVE,
        fontUrl: FontPathDefine.PURPLE_BET
      },
      {
        value: 50000,
        valueStr: '50K',
        fileUrl: SpriteFramePathDefine.CHIP_SIX,
        fontUrl: FontPathDefine.ORANGE_BET
      },
      {
        value: null,
        valueStr: '',
        fileUrl: SpriteFramePathDefine.CHIP_ZERO,
        fontUrl: FontPathDefine.WU_BET
      },
    ],
    /**牌组 */
    cardType:[
      {up:0,down:0},{up:0,down:1},{up:0,down:2},{up:0,down:3},{up:0,down:4},{up:0,down:5},{up:0,down:6},
      {up:1,down:1},{up:1,down:2},{up:1,down:3},{up:1,down:4},{up:1,down:5},{up:1,down:6},{up:2,down:2},
      {up:2,down:3},{up:2,down:4},{up:2,down:5},{up:2,down:6},{up:3,down:3},{up:3,down:4},{up:3,down:5},
      {up:3,down:6},{up:4,down:4},{up:4,down:5},{up:4,down:6},{up:5,down:5},{up:5,down:6},{up:6,down:6},
    ],
    /**发牌的结束位置 */
    cardPosition:[
      { x: -372, y: 10 }, { x: -312, y: 10 }, { x: -252, y: 10 }, { x: -192, y: 10 }, { x: -132, y: 10 }, { x: -72, y: 10 }, { x: -12, y: 10 },
      { x: 48, y: 10 }, { x: 108, y: 10 }, { x: 168, y: 10 }, { x: 228, y: 10 }, { x: 288, y: 10 }, { x: 348, y: 10 }, { x: 408, y: 10 },
    ],
    /**翻牌后的结束位置 */
    cardItemPosition:[
      [{ x: -343, y: 265 }, { x: -275, y:265}],
      [{ x: 275, y: 265 }, { x: 343, y: 265 }],
    ]
}

/**
 * 初始化头像信息
 */
export const initInfoType = (index: number) => {
  const infoType: HeadType = {
    memberId: "",
    memberName: "",
    gold: 0,
    goldStr: "",
    index,
    winGold: 0,
    betAmount: 0,
    
  };
  return infoType;
}

/**
 * 初始化下注数据
 * @param index 下注位置
 * @param userId 用户id
 * @param betType 下注类型
 * @param betAmount 下注金额
 */
export const  initBetData = (index: number, userId: string, betType: BetType, betAmount: number) => {
  const betData: BetData = {
    index: index,
    memberId: userId,
    betType: betType,
    betAmount: betAmount,
    time: Date.now(),
    isFly: true,
    betId:getUUID()
  }
  return betData;
}


 