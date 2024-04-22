import config, { initBetData, initHeadType } from "./config";
import { BetData, BetType, GameStatus, HeadType, Result, UserInfo } from "./type";

/**
 * 玩家详情的参数
 */
export type FishPrawnCrabMemberInfoVo = {
  memberName: string,
  memberId: string,
  /**玩家头像 */
  icon: number,
  /**玩家金币 */
  gold: number,
  /**输赢类型 */
  winType: number,
  /**赢的总额 */
  winGold: number,
  /**下注 */
  memberBet: any
}

/**
 * 进入游戏详细数据
 */
export type FishPrawnCrabJoinGameRoomInfoVo = {
  /**下注金额 */
  betList: number[],
  /**自己信息 */
  myInfo: FishPrawnCrabMemberInfoVo;
  /**左边用户 */
  leftMember: FishPrawnCrabMemberInfoVo[];
  /**右边用户 */
  rightMember: FishPrawnCrabMemberInfoVo[];
  /**房间玩家总人数 */
  memberNum: number;
  /**开奖结果 */
  results: FishPrawnCrabLotteryVo[];
  /**用户下注详情 */
  memberBetDetail: MebmerBet[];
  /**游戏阶段 */
  gameType: number;
  /**剩余秒数 */
  seconds: number;
  roomId: string;
}

/**用户下注 */
export type MemberBet = {
  gold: number;
  memberId: string;
  type: number
}

/**
 * 开奖结果
 */
export type FishPrawnCrabLotteryVo = {
  num1: number;
  num2: number;
  num3: number;
}

export type FishPrawnCrabResultVo = {
  lotteryVo: FishPrawnCrabLotteryVo;
}

/**游戏状态 */
export type FishPrawnCrabGameTypeVo = {
  gameType: number,
  seconds: number,
  prawnCrabMemberDrawPrizeVo: FishPrawnCrabResultVo,
  fishPrawnCrabWinMemberVo: FishPrawnCrabBalanceVo,
  fishPrawnCrabSettlementVo: FishPrawnCrabBalanceVo,
}
export type MebmerBet = {
  memberId: string;
  gold: number;
  type: number;
}
/**推送下注结构 */
export type FishPrawnCrabPushBetVo = {
  goldData: any;
  memberData: MebmerBet;
}
/**发送下注信息 */
export type SendBet = {
  roomId: string,
  memberId: string,
  memberName: string,
  gold: number,
  betType: number,
  betId: string
}

export type FishPrawnCrabWinVo = {
  memberId: string,
  memberName: string,
  gold: number,
}

/**结算数据 */
export type FishPrawnCrabBalanceVo = {
  /**赢的用户 */
  list: FishPrawnCrabWinVo[];
  /**最新左边用户 */
  roomLeftInfoVos: FishPrawnCrabMemberInfoVo[];
  /**最新右边用户 */
  roomRightInfoVos: FishPrawnCrabMemberInfoVo[];
  /**本局左边用户 */
  lastRoomLeftInfoVos: FishPrawnCrabMemberInfoVo[];
  /**本局右边用户 */
  lastRoomRightInfoVos: FishPrawnCrabMemberInfoVo[];
  /**自己的下注信息 */
  myInfo: FishPrawnCrabMemberInfoVo;
  /**4个大赢家 */
  roomWinInfo: FishPrawnCrabMemberInfoVo[];
  /**房间里面的玩家数量 */
  roomInfoSize: number;
}

/**转换下注类型 */
export const convertBetType = (betType: number) => {
  if (betType === 1) {
    return BetType.DEER;
  } else if (betType === 2) {
    return BetType.GOURD;
  } else if (betType === 3) {
    return BetType.CHOOK;
  } else if (betType === 4) {
    return BetType.FISH;
  } else if (betType === 5) {
    return BetType.SHRIMP;
  } else if (betType === 6) {
    return BetType.CRAB;
  }
}

/**转换为服务器的下注类型 */
export const convertToServerBetType = (betType: BetType) => {
  if (BetType.DEER === betType) {
    return 1;
  } else if (BetType.GOURD === betType) {
    return 2;
  } else if (BetType.CHOOK === betType) {
    return 3;
  } else if (BetType.FISH === betType) {
    return 4;
  } else if (BetType.SHRIMP === betType) {
    return 5;
  } else if (BetType.CRAB === betType) {
    return 6;
  }
}
/**转换游戏状态 */
export const convertGameStatus = (value: number) => {
  if (value === 1) {
    return GameStatus.BET;
  } {
    return GameStatus.STOP_BET;
  }
}

/**转换游戏结果 */
export const convertResult = (value: FishPrawnCrabLotteryVo): Result => {
  const result: Result = {
    betTypes: [
      convertBetType(value.num1),
      convertBetType(value.num2),
      convertBetType(value.num3),
    ],
    time: 0
  }
  return result;
}

/**
 * 转换头像数据
 * @param value 
 * @returns 
 */
export const convertHeadType = (value: FishPrawnCrabMemberInfoVo): HeadType => {
  const headType = initHeadType(config.gameOption.lookOnIndex);
  headType.gold = value.gold;
  headType.name = value.memberName;
  headType.userId = value.memberId + "";
  headType.winloss = value.winGold;
  headType.icon = value.icon;

  return headType;
}

export const convertUserInfo = (value: FishPrawnCrabMemberInfoVo): UserInfo => {
  const userInfo: UserInfo = {
    userId: value.memberId,
    gold: value.gold,
    name: value.memberName,
    icon: value.icon,
    head: "",
  }
  return userInfo;
}

export const convertBetData = (mebmerBet: MebmerBet, index: number) => {
  return initBetData(index, mebmerBet.memberId, convertBetType(mebmerBet.type), mebmerBet.gold);
}

export type GameCacheData = {
  roomId: string,
  memberId: string,
  leftUsers: FishPrawnCrabMemberInfoVo[],
  rightUsers: FishPrawnCrabMemberInfoVo[],
  /**每局结算前4位赢得最多的玩家 */
  winList: FishPrawnCrabMemberInfoVo[],
}

/**802下注返回数据 */
export type BetReturnData = {
  resultCode: number,
  betAmount: number,
  betType: number,
  gold: number,
  betId: string,
}

/**游戏缓存数据 */
export const gameCacheData: GameCacheData = {
  roomId: "",
  memberId: "",
  leftUsers: [],
  rightUsers: [],
  winList: [],
}