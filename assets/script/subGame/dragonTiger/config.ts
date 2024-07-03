import { Vec3 } from "cc";
import { getUUID } from "../../utils/tool";
import { FontPathDefine } from "./sourceDefine/fontDefine";
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine";
import { BetData, BetType } from "./type";
import { SKT_HOST } from "../../common/WebSocketStarter";

export default {
    gameHost: SKT_HOST.MULTI,
    gameServer: "DRAGON",
    gameName: "DRAGON",
    gameId: 12,
    testConfig: {
      wsUrl: "ws://192.168.110.243:18003/ws",
      token:"",
      // token:"eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3NQQqCIRAG0LvMWsEZJ_1CopZeypHcpbuerDSNGYT8ryNJE3izi3UuwCJghiN7Hl-IkpP-4L4nVYKdkqKIb7F0ryFnjwb243obRVIfqkKOlq1uj_OgihCQwVEc7bnssts6_qcEfX8A47WcnH8AAAA.BMHg1CM1e3sq7gf85rA8oSGxAZ89yxc79UytEiLyEXc",
      
  },
    /**是否前置下注，前端先飞筹码，再发送消息，如果后台返回下注失败，前端取消下注 */
    preBet: true,
     /**游戏默认的固定参数 */
     gameOption: {
      /**座位数 */
      seatNumber: 6,
      /**自己的头像位置 */
      myHeadPosition: new Vec3(-596, -304 ),
      /**在线人数位置 */
      onlineNumberPosition: new Vec3(522, -282 ),
      /**荷官位置 */
      dealerPosition: { x: 0, y: 254 },
      /**昵称省略长度 */
      nicknameOmitLength: 12,
      /**旁观索引 */
      lookOnIndex: 99, //==>用于其他online玩家的index,便于判定飞金币的位置
      /**胜率最大的索引位置 */
       winRateMaxIndex: 3,//==>用于判定飞星星的动画展示
       unlockBetMinGold:10,
    },
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
    
     /**上榜头像位置 */
     headLocations: [
      { x: -589, y: 145 },
      { x: -589, y: -14 },
      { x: -589, y: -154 },
      { x: 590, y: 145 },
      { x: 590, y: -10 },
      { x: 590, y: -150 },
    ],
    
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
  