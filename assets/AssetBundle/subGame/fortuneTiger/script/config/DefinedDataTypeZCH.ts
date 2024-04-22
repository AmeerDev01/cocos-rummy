import { math } from "cc"


/**游戏初始化数据类型 */
export interface gameInitData {
    bundleName: string,
    /**游戏名称 */
    gameName: string,
    /**游戏类型 */
    gameHost: string,
    /**资源是否初始化完成 */
    isInitRes: boolean,
    /**网络是否初始化 (从链接到登录完成)*/
    isInitWs: boolean,
    /**游戏id */
    gameID: number,
    /**游戏 转轴数量 */
    gameRollX: number,
    gameRollY: number,
    /**投注列表 */
    betList: number[],
    bigWin: number,
    megaWin: number,
    superWin: number,
    /**icon 偏移位置 */
    iconPos?: showIconSpine[],

    /**投注倍数显示 */
    betMultiple: number,
}
/**游戏投注消息结构 */
export interface gameBetData {
    /*************************初始信息 的 必要数据*********************** */
    /**玩家当前金币 */
    gold: number,
    /**当前投注 */
    bet: number,
    /**开奖数据 */
    prizeList: number[][],
    /** 总赢钱(付费+免费)*/
    allWinGold: number,
    /**触发的小游戏图标 */
    freeIcon: number,
    /**已经出现的小游戏图标 */
    freeIconList: showIconSpine[],
    /**玩家投注下标 */
    betIndex: number,
    /**中奖倍数 */
    magnification: number,
    /****************************当前局的数据************************************* */

    /**中奖线 */
    winLines: winLinesList[],


    /******************************客户端自己的用的数据************************************************* */
    /**当前是否获取进入小游戏的机会 */
    isFreeGameChance: boolean,
    /**当前是否是小游戏 */
    isFreeGameCurr: boolean,
    /**下局是否是小游戏 */
    isFreeGameNext: boolean,
    /**当前是否是第一局小游戏 */
    isFreeGameFirst: boolean,
    /**当前是否是最后一局小游戏 */
    isFreeGameLast: boolean,


}
/**中奖线 */
export interface winLinesList {
    /**线条id */
    index: number,
    /**中奖图数据 */
    iconList: showIconSpine[]
}

/**播放图标动画数据 */
export interface showIconSpine {
    x: number,
    y: number,
    icon: number
}
/**播放动画（type= 1 播放scatter  type =2 播放 单线 type = 3播放所以中将线） */
export interface showIconMge {
    /**播放的动画 */
    showIcon: showIconSpine[],
    /**播放类型 */
    type: number,
    /**当前播放单线的下标 */
    index?: number,
}
/**动画位置数据 */
export interface iconPosData {
    x: number,
    y: number,
    pos: math.Vec3
}
/**游戏类型 0付费游戏 1免费游戏 2小游戏*/
export enum gameType {
    /**付费 */
    gamePay = 0,
    /**免费 */
    gameFree = 1,
    /**jackpot */
    jackpot = 2,

}
/**大奖类型 */
export enum bigWinType {
    /**没有中将 */
    noWin = 0,
    /**small */
    small = 1,
    bigWin = 2,
    megaWin = 3,
    superWin = 4,
}
/**jackpot 类型 */
export enum jackpotType {
    mini = 0,
    minor = 1,
    mojor = 2,
    grand = 3
}


