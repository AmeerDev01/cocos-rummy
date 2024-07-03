
/**下注类型 */
export enum BetType {
    /**黑 */
    BLACK = 1,
    /**红 */
    RED = 2,
    /**梅 */
    PLUM = 3,
    /**方 */
    DIAMOND = 4,
  }
  
  /**游戏状态 */
  export enum GameStatus {
    /**下注 */
    BET = 1,
    /**结算 */
    STOP_BET = 2,
    /**等待阶段 */
    WAIT=3,
    /**退出游戏 */
    QUIT_GAME = 99,
  }
  
  /**特殊牌赔率 */
  export enum CardStatus {
    SIX_CARD  = 6,
    TWIN_CARD = 5,
    SMALL_CARD = 4,
    BIG_CARD = 3,
    QIU_QIU = 2,
  }
  
  /**头像类型 */
  export type HeadType = {
    index: number,
    memberId: string,
    memberName: string,
    gold: number,
    goldStr: string,
    winGold: number,
    betAmount?: number,
    /**头像类型 */
    icon?: number,
    memberBet?: object,
    
  }
  
  export type UserInfo = {
    memberId: string,
    memberName: string,
    head: string,
    gold: number
    /**头像类型 */
    icon?: number,
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
    /**下注id */
    betId: string,
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
  
 /**用户权限 */
  export type TipsVo = {
    name: string,
    num: string,
  }

export type MemberData = {
  gold: number;
  memberId: string;
  type:number;
  memberName:string;
};

/**发送下注信息 */
export type SendBet = {
  roomId: string,
  memberId: string,
  memberName: string,
  gold: number,
  betType: number,
  isMe: boolean,
  betId?: string,
}
export type WinInfo={
  gold: number;
  icon:number;
  memberName:string
}

export type History={
  black:number,
  red:number,
  plum:number,
  diamond:number,
  semua:number
}

export type Statistik={
  tingkat:number,
  menang:number,
  kalah:number,
}


export type RokerTar={
  taruhan:number,
  menang:number,
  chip:number,
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
  newBankerPoker:number[],
  newBlackPoker:number[],
  newRedPoker:number[],
  newPlumPoker:number[],
  newDiamondPoker:number[]
  goldData:object
}



/**游戏缓存数据 */
export const gameCacheData: GameCacheData = {
  roomId: "",
  memberId: "",
  leftUsers: [],
  rightUsers: [],
  winList: [],
  newBankerPoker:[],
  newBlackPoker:[],
  newRedPoker:[],
  newPlumPoker:[],
  newDiamondPoker:[],
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
}