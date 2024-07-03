import { Vec3 } from "cc"

/**下注类型 */
export enum BetType {
  /**鱼 */
  FISH = 1,
  /**螃蟹 */
  CRAB = 2,
  /**鹿 */
  DEER = 3,
  /**鸡 */
  CHOOK = 4,
  /**葫芦 */
  GOURD = 5,
  /**虾 */
  SHRIMP = 6,
}

/**游戏状态 */
export enum GameStatus {
  BET = 1,
  STOP_BET = 2,
  /**退出游戏 */
  QUIT_GAME = 99,
}

export enum AnimationStatus {
  /**空闲 */
  IDLE = 0,
  /**开盖 */
  KAI_GAI = 1,
  /**飞筹码 */
  FLY_CHIP = 2,
  /**头像加金币 */
  HEAD_ADD_GOLD = 3,
  /**关盖 */
  CLOSE_GAI = 4,
  /**加金币 */
  RECHANGE_ADD_GOLD = 5,
}

/**头像类型 */
export type HeadType = {
  index: number,
  userId: string,
  has: boolean,
  level: number,
  name: string,
  gold: number,
  goldStr: string,
  headUrl: string,
  winloss: number,
  joggle?: boolean
  betAmount?: number,
  /**充值金额 */
  rechange?: number,
  /**头像类型 */
  icon?: number,
  /**头像位置 */
  pos?: Vec3
}

export type UserInfo = {
  userId: string,
  name: string,
  head: string,
  gold: number
  /**头像类型 */
  icon?: number,
}

export type BetData = {
  /**下注位置 */
  index: number,
  /**用户id */
  userId: string,
  /**下注金额 */
  betAmount: number,
  /**下注类型 */
  betType: BetType,
  /**下注id */
  betId: string,
  /**总的下注 */
  totalBetAmount?: number,
  /**是否自己下注 */
  isMyBet?: boolean
  /**自己的累计下注 */
  meTotalBetAmount?: number,
  /**时间戳 */
  time?: number,
  /**是否飞筹码 */
  isFly?: boolean
}

export type ChipType = {
  value: number,
  fileUrl: string
  fontUrl: string
}

export type Result = {
  time: number,
  betTypes: BetType[]
}

/**下注信息 */
export type Bet = {
  betType: BetType,
  betAmount: number
}

export type PowerVo = {
  name: string,
  num: string,
}

/**改变金额 */
export type ChangeGoldVo = {
  type: number,
  gold: number
}

export type TipType = {
  time: number,
  type: number;
}

/**
 * 请求道具
 */
export type ReqGiftSo = {
  roomId: string,
  /**道具Id */
  interactionId: number,
  /**获赠玩家 */
  toSitId: string,
  /** 总共需要花费的金币 */
  num: number
}

/**
 * 接收到的道具
 */
export type ResGiftVo = {
  /**赠送者UID */
  giveMemberId: string,
  /**接收者UID */
  receiveMemberId: string,
  /**礼物ID */
  giftId: number,
}