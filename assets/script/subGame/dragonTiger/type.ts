import ChipViewModel from "./ViewModel/DragonTigerChipViewModel"

/**下注类型 */
export enum BetType {
    /**龙 */
    LONG = 1,
    /**虎 */
    HU = 2,
    /**平 */
    SERI = 3,

}

/**头像类型 */
export type HeadType = {
    index: number,
    memberId: string,
    memberName: string,
    gold: number,
    goldStr?: string,
    winGold?: number,
    betAmount?: number,
    /**头像类型 */
    icon?: number,
    /**输赢类型 */
    winType?: number,
  }

export type BetData = {
    /**下注位置 */
    index: number,
    /**用户id */
    memberId: string,
    /**下注金额 */
    betAmount: number,
    /**下注类型 */
    betType: BetType,
    /**总的下注 */
    totalBetAmount?: number,
    /**是否自己下注 */
    isMyBet?: boolean
    /**自己的累计下注 */
    meTotalBetAmount?: number,
    /**时间戳 */
    time?: number,
    /**是否飞筹码 */
    isFly?: boolean,
    betId?:string
}
/**发送下注信息 */
export type SendBet = {
    roomId: string,
    gold: number,
    betType: number,
    isMe?: boolean,
    betId?:string
}
export type WinUser={
    memberName:string,
    memberId:string,//头像
    gold:number,
    index?:number,
    time?:number,
  }
  
export type BetInfo = {
	index: number,
  userId: string,
	isMe?: boolean,
  chips: Chips[],
}

export type Chips = {
  betId: string,
  betType: BetType,
  betAmount:number
  chip: ChipViewModel,
}
/**牌 */
export type DragonTigerCard={
    suit:number,//花色
    rank:string,//数字
  }
/**重复下注数据 */
export type RepeatBet = {
    index?: number,
    userId?: string,
    roomId?:string,
    betAmount?:number,
    betType?: number,
    betId?: string,
    isMe?: boolean,
}
/**每个区域的总下注值 */  
export type TotalBetArea = {
  totalBetDragon: number,
  totalBetTiger: number,
  totalBetPeace: number,
}
  
/*
* 玩家详情的参数
*/
export type MemberInfoVo = {
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
    memberBet: any,
    index?:number
   }
  
export type GameCacheData = {
    roomId: string,
    memberId: string,
    leftUsers: MemberInfoVo[],
    rightUsers: MemberInfoVo[],
    /**每局结算前4位赢得最多的玩家 */
    winList: MemberInfoVo[],
    goldData:object
  }
/**游戏缓存数据 */
export const gameCacheData: GameCacheData = {
    roomId: "",
    memberId: "",
    leftUsers: [],
    rightUsers: [],
    winList: [],
    goldData:{},
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
  /**玩家剩余金币数 */
  residueGold: number,
}
