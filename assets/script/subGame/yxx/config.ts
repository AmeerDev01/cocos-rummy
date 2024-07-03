import { Vec3 } from "cc";
import { FontPathDefine } from "./sourceDefine/fontDefine";
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { BetData, BetType, HeadType } from "./type";
import { getUUID } from "../../utils/tool";

export default {
  sktCode: "FISH_PRAWN_CRAB",
  gameServer: "YXX",
  name: "yxx",
  gameId: 11,
  isTest: false,
  /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
  preBet: true,
  testConfig: {
    // wsUrl: "ws://54.251.66.82:18002/ws",
    wsUrl: "",
    token: ""
  },
  /**游戏默认的固定参数 */
  gameOption: {
    /**座位数 */
    seatNumber: 6,
    /**自己的头像位置 */
    myHeadPosition: new Vec3(-487, -316),
    /**在线人数位置 */
    onlineNumberPosition: new Vec3(522, -282),
    /**荷官位置 */
    dealerPosition: new Vec3(0, 224),
    /**结果数组最大值 */
    resultArrayMax: 50,
    /**飞筹码速度 单位/秒 */
    flyChipSpeed: 0.5,
    /**昵称省略长度 */
    nicknameOmitLength: 12,
    /**旁观索引 */
    lookOnIndex: 99,
    /**胜率最大的索引位置 */
    winRateMaxIndex: 3,
    /**解锁下注最小金币 */
    unlockBetMinGold: 10
  },

  /**头像位置 */
  headLocations: [
    { x: -590, y: 166 },
    { x: -590, y: 0 },
    { x: -590, y: -145 },
    { x: 590, y: 166 },
    { x: 590, y: 0 },
    { x: 590, y: -145 }
  ],

  /**下注赔率 */
  betTypeOdds: [
    {
      betType: BetType.CHOOK,
      odds: [2, 3, 4]
    }, {
      betType: BetType.CRAB,
      odds: [2, 3, 4]
    }, {
      betType: BetType.DEER,
      odds: [2, 3, 4]
    }, {
      betType: BetType.GOURD,
      odds: [2, 3, 4]
    }, {
      betType: BetType.FISH,
      odds: [2, 3, 4]
    }, {
      betType: BetType.SHRIMP,
      odds: [2, 3, 4]
    }
  ],

  chipTypes: [
    {
      value: 1000,
      valueStr: '1000',
      fileUrl: SpriteFramePathDefine.CHIP_1,
      fontUrl: FontPathDefine.GREEN_BET
    },
    {
      value: 5000,
      valueStr: '5000',
      fileUrl: SpriteFramePathDefine.CHIP_2,
      fontUrl: FontPathDefine.BLUE_BET
    },
    {
      value: 10000,
      valueStr: '10K',
      fileUrl: SpriteFramePathDefine.CHIP_3,
      fontUrl: FontPathDefine.DARK_BLUE_BET
    },
    {
      value: 100000,
      valueStr: '100K',
      fileUrl: SpriteFramePathDefine.CHIP_4,
      fontUrl: FontPathDefine.RED_BET
    },
    {
      value: 200000,
      valueStr: '200K',
      fileUrl: SpriteFramePathDefine.CHIP_5,
      fontUrl: FontPathDefine.PURPLE_BET
    },
    {
      value: 1000000,
      valueStr: '1M',
      fileUrl: SpriteFramePathDefine.CHIP_6,
      fontUrl: FontPathDefine.ORANGE_BET
    },
  ],

  /**骰子的位置 */
  dicePosition: [
    new Vec3(-6, 50),//上
    new Vec3(75, 8),//右
    new Vec3(-81, 2),//左
    new Vec3(1, -30),//下
  ]
}

/**
 * 初始化头像信息
 */
export const initHeadType = (index: number) => {
  const headType: HeadType = {
    has: false,
    headUrl: "",
    userId: "",
    name: "",
    joggle: false,
    gold: 0,
    goldStr: "",
    index,
    level: index === 0 ? 1 : index === 3 ? 2 : 3,
    winloss: 0,
    betAmount: 0
  };
  return headType;
}

/**
 * 初始化下注数据
 * @param index 下注位置
 * @param userId 用户id
 * @param betType 下注类型
 * @param betAmount 下注金额
 */
export const initBetData = (index: number, userId: string, betType: BetType, betAmount: number) => {
  const betData: BetData = {
    index: index,
    userId: userId,
    betType: betType,
    betAmount: betAmount,
    time: Date.now() + Math.random(),
    isFly: true,
    betId: getUUID(),
  }
  return betData;
}