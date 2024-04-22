import config from "./config"
import { SkeletalPathDefine } from "./sourceDefine/skeletalDefine"
import { SpriteFramePathDefine } from "./sourceDefine/spriteDefine"

/**
 * 滑动状态
 */
export enum RollerStatus {
  /**滑动中 */
  RUNNING,
  /**滑动结束中 */
  ENDING,
  /**滑动结束 */
  END
}

/**滚动信息 */
export type RollerInfo = {
  /**滑槽序号 */
  index: number,
  /**停止位置 */
  stopIndex: number,
}

export enum IconEffectType {
  /**无闪动 */
  NONE,
  /**一般闪动 */
  NORMAIL
}

export enum DirectionType {
  UP, DOWN
}

export enum IconSizeType {
  NORMAIL, LARGE
}

export type IconType = {
  iconId: number
  /**图标所处队列的序号 */
  queueIndex: number,
  /**闪动类型 */
  iconEffect: IconEffectType
  /**宽度 */
  width: number
  /**高度 */
  height: number
  /**上下的纵向间隔 */
  intervalHeight: number
  /**缩放 */
  // scale: number,
  /**是否是大图标 */
  LargeIcon: boolean,
  /**原数数据 */
  uiData: {
    id: number;
    name: string;
    fileName: string;
    skeleton: string;
    animationArr: string[];
    distance: number[];
    scale: number[]
  }
}

export enum GameType {
  NONE = -1,
  MAIN = 0,
  SUBGAME1 = 1,
  SUBGAME2 = 2
}

/**游戏类型信息 */
export type GameTypeInfo = {
  /**上一局游戏 */
  lastGameType: GameType
  /**下一局游戏 */
  currGameType: GameType
  /**当前界面所处的游戏类型 */
  viewGameType: GameType,
  /**当前小游戏剩余次数 */
  leftCount: number,
  /**游戏奖励 */
  freeGameAmount?: number,
  /**下一个小游戏剩余次数 */
  nextLeftCount?: number
}

/**自动运行类型 */
export enum AutoLauncherType {
  NONE = 'none',
  LIMIT = 'limit',
  LAMIT_FAST = 'limit_fast',
  TIME_500 = 't500',
  TIME_100 = 't100',
  TIME_50 = 't50',
  TIME_20 = 't20',
  TIME_10 = 't10'
}

/**
 * 自动运行数据
 */
export type AutoLauncherInfo = {
  /**自动运行类型 */
  autoLauncherType: AutoLauncherType,
  /**总次数 */
  totalCount: number,
  /**剩余次数 */
  leftCount: number
}

/**爆奖弹出层类型 */
export enum DialogType {
  BIG_WIN = "bigWin",
  JACKPOT = "jackpot",
  MEGA_WIN = "megaWin",
  SUPER_WIN = "superWin",
  /**免费游戏进入 */
  FREE_GAME_ENTRY = "freeGameEntry",
  /**免费游戏结算 */
  FREE_GAME_SETTLEMENT = "freeGameSettlement",
  /**元宝中奖框 */
  YUAN_BAO_WIN = "YUAN_BAO_WIN",
  
}

/**弹窗信息 */
export type DialogInfo = {
  dialogType: DialogType,
  params: any[],
}

/**
 * 子游戏动画播放信息
 */
export type SubGameAnimationPlayInfo = {
  gameType: GameType,
  param: number
}

export type RollOptionType = {
  /**统一的滚动速度 */
  rollerSpeed: number,
  /**停止的动作时间 */
  stopSpeed: number,
  /**单图标的高度 */
  singleRollerHeight: number,
  /**单图标的宽度 */
  singleRollerWidth: number,
  /**单图标的上下间隔 */
  singleIntervalHeight: number,
  /**滑槽的宽度 */
  rollerWidth: number,
  /**滑槽的左右间隔宽度 */
  rollerIntervalWidth: number,
  /**滑动方向 */
  direction: DirectionType
}

export enum JactpotType {
  BANANA,
  STRAWBERRY,
  APPLE,
  GRAPE,
  WATERMELON,
  LEVEL
}

export type AuthDataVo = {
  bl: number,
  fixedChessboardIcon?: any[],
  freeGameAmount: number,
  freeGameCount: number,
  gameType: number,
  iconStay?: number,
  lv: number,
  memberId: string,
  tableId: string,
  phoenixFreeGameLine?:number,
  totalFreeGameCount?:number,
}

/**图标id定义 */
export enum IconId {
  SCATTER = 11,
  WILD = 12,
  /**元宝 */
  BEETLE = 13,
  /**太阳神 */
  SUN_GOD = 14,
}

/**锁定图标信息 */
export type LockIcon = {
  /**图标id */
  iconId: number
  /**所在列的第几个位置 */
  index: number,
  /**图标上的金额 */
  amount: number
}

/**选择的小游戏信息 */
export type SmallGame = {
  /**id */
  id: number
  /**总次数 */
  totalCount: number,
  /**凤凰万能图标资源 */
  wildSprite: any,
  /**凤凰万能图标骨骼动画 */
  wildSkeleton:any
}

/**下注之后获取的最后一次结果数据 */
export type RollerLaunchResult = {
  "dl": {
    "si": [{
      /**本轮结算之后的余额 */
      "balanceAfterSettlement": number,
      /**扣除下注金额之后的余额 */
      "coinsAfterBetting": number,
      /**转之前的余额 */
      "coinsBeforeBetting": number,
      /**气泡奖励 */
      "bubble": number,
      // /**投注金额 */
      // "cs": 0,
      "iconStay": number,
      /**要定住的图标 */
      "otherGameAttributesVo":{"lineId":[],
        "phoenixCount": number,
        "phoenixMagnification":number,
        "totalFreeGameCount": number,
        "yuanBaoAmount" : number,
        "yuanBaoMagnification" : number,
        "yuanBaoPosition" : [[0, 1], [4, 2]],
        "yuanBaoSpecialEffect": boolean,
      },
      /**这一此转动获得的奖励 */
      "ctw"?: number,
      /**免费游戏的图标和位置 */
      "freeGame": { "1": number },
      /**剩余小游戏次数 */
      "freeCount": number,
      /**免费游戏（小游戏）的得分奖励 */
      "freeGameAmount": number,
      "indexGameType": number,
      /**下一局gameType */
      "nextGameType": number,
      /**本轮中奖的道具及该道具对应的奖励金额 */
      "lw"?: { "6": number },
      /**获得的奖励倍数 */
      "magnification": number,
      /**盈亏情况 */
      "np"?: number,
      /**	5条滚轴对应的道具ID【上升或下降前】 [[9, 10, 11], [6, 7, 8], [6, 7, 8], [2, 3, 4], [7, 8, 9]] */
      "rollerIcon": [],
      /**滚轴Id */
      "rollerId": [],
      /**页面出现"上升/下降"图标的个数 */
      "sc"?: number,
      /**进入的小游戏ID，0不进入，1对应小游戏1,2对应小游戏2。 */
      "sgb"?: number,
      /**每条线的投注额 */
      "tb"?: number,
      /**本轮投注总额 */
      "tbb"?: number,
      /**总奖励 */
      "totalRewards": number,
      /**中奖的道具ID以及位置，格式为：“中奖图标ID”[[滚轴id,滚轴上的图标ID]] */
      "winningPosition": { "2": [[0, 0], [1, 0], [2, 0]] }
    }]
  }
}

export type JackpotData = {
  avatarIndex: number,
  nickName: string,
  winningAmount: number,
}



/**
 * 获得自动次数
 * @param type 
 * @returns 
 */
export const getAutoCount = (type: AutoLauncherType) => {
  if (AutoLauncherType.TIME_500 === type) {
    return 500;
  } else if (AutoLauncherType.TIME_100 === type) {
    return 100;
  } else if (AutoLauncherType.TIME_50 === type) {
    return 50;
  } else if (AutoLauncherType.TIME_20 === type) {
    return 20;
  } else if (AutoLauncherType.TIME_10 === type) {
    return 10;
  } else if (AutoLauncherType.NONE === type) {
    return 0;
  }

  return -99;
}

export const getWild = (id: number) => {
  if (id === 0) {
    return {
      fileName: SpriteFramePathDefine.icon_wildG,
      skeletonName: SkeletalPathDefine.TUBIAO_WILD,
    }
  }else if (id === 1) {
    return {
      fileName: SpriteFramePathDefine.icon_wildG1,
      skeletonName: SkeletalPathDefine.TUBIAO_NIAOG,
    }
  } else if (id === 2) {
    return {
      fileName: SpriteFramePathDefine.icon_wildR,
      skeletonName: SkeletalPathDefine.TUBIAO_NIAOR,
    }
  }else if (id === 3) {
    return {
      fileName: SpriteFramePathDefine.icon_wildP,
      skeletonName: SkeletalPathDefine.TUBIAO_NIAOP,
    }
  }else if (id === 4) {
    return {
      fileName: SpriteFramePathDefine.icon_wildB,
      skeletonName: SkeletalPathDefine.TUBIAO_NIAOB,
    }
  }else if (id === 5) {
    return {
      fileName: SpriteFramePathDefine.icon_wildY,
      skeletonName: SkeletalPathDefine.TUBIAO_NIAOY,
    }
  }
}

/**WILD资源更改 */
export const updateWildSprite = (gameTypeInfo: GameTypeInfo, smallGameInfo) => {
  if (smallGameInfo) {
    
  }
}

/**
 * 是否无限运行
 * @returns 
 */
export const isLimit = (autoLauncherType: AutoLauncherType) => {
  return autoLauncherType === AutoLauncherType.LIMIT || autoLauncherType === AutoLauncherType.LAMIT_FAST;
}

/**是否小游戏切到小游戏 */
export const isSubGameToSubGame = (viewGameType: GameType, currGameType: GameType) => {
  return viewGameType === GameType.SUBGAME1 && currGameType === GameType.SUBGAME2 || viewGameType === GameType.SUBGAME2 && currGameType === GameType.SUBGAME1
}

/**是否自动 */
export const isAuto = (autoLauncherInfo: AutoLauncherInfo, gameTypeInfo: GameTypeInfo) => {
  // 小游戏中都是自动
  if (gameTypeInfo.viewGameType !== GameType.MAIN && gameTypeInfo.viewGameType === gameTypeInfo.currGameType) {
    return true;
  }
  if (autoLauncherInfo) {
    if (autoLauncherInfo.autoLauncherType !== AutoLauncherType.NONE) {
      if (autoLauncherInfo.totalCount === -99) {
        return true;
      }
      return autoLauncherInfo.leftCount > 0;
    }
  }
  return false;
}

/**验证下注返回数据 */
export const verifyBetResultData = (data: RollerLaunchResult) => {
  if (!data) {
    return 1;
  }

  if (!data.dl) {
    return 2;
  }

  if (!Object.prototype.hasOwnProperty.call(data.dl, 'si')) {
    return 3;
  }

  if (Object.prototype.toString.call(data.dl.si) !== '[object Array]') {
    return 4;
  }

  const si = data.dl.si as any[];
  if (si.length === 0) {
    return 5;
  }

  if (!data.dl.si[0]) {
    return 6;
  }

  if (!Object.prototype.hasOwnProperty.call(data.dl.si[0], 'rollerId')) {
    return 7;
  }

  if (!data.dl.si[0].rollerId) {
    return 8;
  }
  const rollerId = data.dl.si[0].rollerId as any[];
  if (rollerId.length === 0) {
    return 9;
  }

  return 0;
}

/**计算下注金额 */
export const calBetAmount = (positionId: number) => {
  const amountInfo = config.betSwitcher[0].amount.find(v => v.positionId === positionId);
  return config.betAmount * amountInfo.value;
}

/**
 * 获得列锁定的图标列表
 * @param values 
 * @param columnIndex 
 * @returns 
 */
export const getColumnLockIconArr = (values: any[], columnIndex: number) => {
  if (!values || values.length === 0) {
    return [];
  }
  const icons = values.filter(v => v[0] === columnIndex).map(v => {
    const lockIcon: LockIcon = {
      index: v[1],
      iconId: v[2],
      amount: v[3]
    }
    return lockIcon;
  })

  return icons ? icons : [];
}