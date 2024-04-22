import { SKT_HOST } from "../../common/WebSocketStarter";
import { getUUID } from "../../utils/tool";
import { sourceManageSelector } from "./index";
import { FontPathDefine } from "./sourceDefine/fontDefine";
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { BetData, BetType, HeadType } from "./type";

export default {
    gameHost: SKT_HOST.MULTI,
    gameServer: "QIUQIU",
    gameName: "QIUQIU",
    gameId: 13,
    testConfig: {
      wsUrl: "ws://192.168.110.243:18004/ws",
      // token:"",
      token:"eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NOwoCMRAA0LtMncCMGeeTG1h7gh2TIguBZUkhiHdXrGxf814wtgWVxE0EnTlBfx5f0ILk8oN9DahgGCKulI0KZ2bR7EyRg9qjSXTVcoEEs8_o561BNcQrOqIkWGP2-9rm8T-JlfcHfpPKT38AAAA.RdfWIlvpaCYu81DdecBv7Wa213t1v6h7g2AWrOUyRHM",
    },
    /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
    preBet: true,
    /**游戏默认的固定参数 */
    gameOption: {
      /**座位数 */
      seatNumber: 6,
      /**自己的头像位置 */
      myHeadPosition: { x: -466, y: -322 },
      /**在线人数位置 */
      onlineNumberPosition: { x: 577, y: -331 },
      /**荷官位置 */
      dealerPosition: { x: 0, y: 210 },
      /**昵称省略长度 */
      nicknameOmitLength: 12,
      /**旁观索引 */
      lookOnIndex: 99, //==>用于其他online玩家的index,便于判定飞金币的位置
      /**胜率最大的索引位置 */
      winRateMaxIndex: 3,//==>用于判定飞星星的动画展示
      unlockBetMinGold:10,
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
        value: 5000,
        valueStr: '5000',
        fileUrl: SpriteFramePathDefine.CHIP_TWO,
        fontUrl: FontPathDefine.BLUE_BET
      },
      {
        value: 10000,
        valueStr: '10K',
        fileUrl: SpriteFramePathDefine.CHIP_THREE,
        fontUrl: FontPathDefine.DARK_BLUE_BET
      },
      {
        value: 100000,
        valueStr: '100K',
        fileUrl: SpriteFramePathDefine.CHIP_FOUR,
        fontUrl: FontPathDefine.RED_BET
      },
      {
        value: 500000,
        valueStr: '500K',
        fileUrl: SpriteFramePathDefine.CHIP_FIVE,
        fontUrl: FontPathDefine.PURPLE_BET
      },
      {
        value: 1000000,
        valueStr: '1M',
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
      {x:-328,y:300},{x:-388,y:-155},{x:-168,y:-155},{x:52,y:-155},{x:272,y:-155},
      {x:-280,y:300},{x:-350,y:-155},{x:-130,y:-155},{x:90,y:-155},{x:310,y:-155},
      {x:-228,y:300},{x:-308,y:-155},{x:-88,y:-155},{x:132,y:-155},{x:352,y:-155},
      {x:-180,y:300},{x:-270,y:-155},{x:-50,y:-155},{x:170,y:-155},{x:390,y:-155},
    ],
    /**换牌的结束位置 */
    cardItemPosition:[
      [{x:-328,y:300}, {x:-280,y:300}, {x:-228,y:300},{x:-180,y:300}],
      [{x:-388,y:-155},{x:-350,y:-155}, {x:-308,y:-155}, {x:-270,y:-155}],
      [{x:-168,y:-155}, {x:-130,y:-155},{x:-88,y:-155},{x:-50,y:-155}],
      [{x:52,y:-155}, {x:90,y:-155}, {x:132,y:-155},{x:170,y:-155}],
      [{x:272,y:-155},{x:310,y:-155},{x:352,y:-155},{x:390,y:-155}],
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
    betId: getUUID(),
  }
  return betData;
}


 