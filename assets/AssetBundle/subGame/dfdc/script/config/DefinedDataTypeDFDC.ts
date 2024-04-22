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
    /**聚宝盆 伐值 */
    jackpotGrandList: number[],
    /**金色图标替换普通图标的投注小标 */
    changeIcon: number[],
    /**投注倍数显示 */
    betMultiple: number,
    /** 进入jackpot游戏 wild 数量条件*/
    jackpotWildList: number[],
    jackMap: any,

}
/**游戏投注消息结构 */
export interface gameBetData {
    /*************************初始信息 的 必要数据*********************** */
    /**玩家总金币 */
    gold: number,
    /**玩家显示的金币 */
    goldShow: number,
    /**投注挡位 */
    betIndex: number,
    /**当前投注 */
    bet: number,
    /**开奖数据 */
    prizeList: number[][],
    /**当前剩余免费次数 */
    freeNumSurplus: number,
    /**当局获取的免费次数 */
    currGetFreeNum: number,
    /**当局 玩家 赢钱  单句*/
    currWinGold: number,
    /**聚宝盆的奖池数据 */
    jbpWildNum: any,
    /**jack 的图标数据 */
    jackIconList: jackpotType[][],
    /**jack 的中奖图标 */
    jackIconWin: jackpotType,
    /**jackpot 的显示倍数 */
    jackMap: any,
    /**赢钱倍数 */
    magnification: number,


    /**当前游戏类型  0 付费   1 免费  2小游戏*/
    currGameType: number,
    /**下局游戏类型  0 付费   1 免费  2小游戏*/
    nextGameType: number;
    /** 总赢钱(付费+免费)*/
    allWinGold: number,
    /**总免费次数 */
    freeNumAll: number,

    /****************************当前局的数据************************************* */

    /**中奖线 */
    winLines: showIconSpine[][],


    /******************************客户端自己的用的数据************************************************* */
    /**是否是当局获取免费 */
    isFreeFirst: boolean,
    /**超级滚动的触发轴 */
    superRoll: number,
    /**当局是否是最后一句免费 */
    isFreeLast: boolean,
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
    mini = "MINI",
    minor = "MINOR",
    major = "MAJOR",
    grand = "GRAND",
}


