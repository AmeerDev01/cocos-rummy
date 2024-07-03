export enum IconEffectType {
  /**无闪动 */
  NONE,
  /**一般闪动 */
  NORMAIL,
  /**元宝闪动 */
  YUANBAO,
  /**小游戏转轴 */
  FREEEGAMEZ
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
    LargeIcon?: boolean,
    /**原数数据 */
    uiData: {
      id: number;
      name: string;
      fileName: string;
      skeleton?: string;
      animationArr: string[];
      distance: number[];
      scale: number[]
    }
  }
  
  export type RollerType = {
    /**滑槽序号 */
    index: number,
    /**图标列表 */
    iconQueue: IconType[]
    /**是否滚动中,注意，这个值false时不能完全表示滑槽已经停止转动，只是用于update函数是否还更新位置，此值为false之后，图标才开始刹车。若想准确获取滑槽的状态，请通过roller组件的roundEnd属性 */
    rolling: boolean
    /**滚动速度 */
    speed: number,
    /**备份的速度 */
    speedBackUp: number,
    /**宽度 */
    width: number
    // /**高度 */
    // height: number
    // /**步进距离，一般情况下应该和图标高度一致 */
    // stepDistance: number,
    /**是否是大滑槽 */
    LargeRoller?: boolean,
    /**横向间隔 */
    intervalWidth: number
    /**停止的iconID，至于取第几个图标序号，实现来决定 */
    // stopIconId: number
    /**停止的序号 */
    stopIconIndex: number
    /**滚动方向 */
    direction: DirectionType
  }
  
  export enum GameType {
    NONE = -1,
    MAIN = 0,
    SUBGAME1 = 1,
    SUBGAME2 = 2
}
  
/**小游戏 */
export enum SMALLGAME {
  CHOSSE0 = 0,
  CHOOSE25 = 1,
  CHOOSE20 = 2,
  CHOOSE15 = 3,
  CHOOSE13 = 4,
  CHOOSE10 = 5,
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
    TIME_10 = "t10",
    
  }
  
  /**爆奖弹出层类型 */
  export enum DialogType {
    BIG_WIN = "bigWin",
    JACKPOT = "jackpot",
    MEGA_WIN = "megaWin",
    SUPER_WIN = "superWin"
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

export type JackPotUserType={
  avatarIndex: number,
  nickName: string,
  winningAmount:number,
}
  
export const autoLauncherTypeWithTimes = {
  [AutoLauncherType.NONE]: 0,
  [AutoLauncherType.TIME_10]: 10,
  [AutoLauncherType.TIME_20]: 20,
  [AutoLauncherType.TIME_50]: 50,
  [AutoLauncherType.TIME_100]: 100,
  [AutoLauncherType.TIME_500]: 500,
  [AutoLauncherType.LAMIT_FAST]: 10000,
  [AutoLauncherType.LIMIT]: 20000,
}
  