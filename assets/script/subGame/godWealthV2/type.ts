import config from "./config";

export type JackpotData = {
  avatarIndex: number;
  nickName: string;
  winningAmount: number;
};

export type DialogInfo = {
  dialogType: DialogType;
  params: any[];
};

export type SubGameAnimationPlayInfo = {
  gameType: GameType;
  param: number;
};

export type GameTypeInfo = {
  lastGameType: GameType;
  currGameType: GameType;
  viewGameType: GameType;
  leftCount: number;
  freeGameAmount?: number;
  nextLeftCount?: number;
};

export type RollerType = {
  index: number;
  iconQueue: IconType[];
  rolling: boolean;
  speed: number;
  speedBackUp: number;
  width: number;

  LargeRoller?: boolean;
  intervalWidth: number;

  stopIconIndex: number;
  direction: DirectionType;
};

export enum RollerStatus {
  RUNNING,
  ENDING,
  END
}

export type RollerInfo = {
  index: number;
  stopIndex: number;
};

export enum IconEffectType {
  NONE,
  NORMAIL
}

export enum DirectionType {
  UP,
  DOWN
}

export enum IconSizeType {
  NORMAIL,
  LARGE
}

export type IconType = {
  iconId: number;
  queueIndex: number;
  iconEffect: IconEffectType;
  width: number;
  height: number;
  intervalHeight: number;

  LargeIcon: boolean;
  uiData: {
    id: number;
    name: string;
    fileName: string;
    skeleton: string;
    animationArr: string[];
    distance: number[];
    scale: number[];
  };
};

export enum GameType {
  NONE = -1,
  MAIN = 0,
  SUBGAME1 = 1,
  SUBGAME2 = 2
}

export enum AutoLauncherType {
  NONE = "none",
  LIMIT = "limit",
  LAMIT_FAST = "limit_fast",
  TIME_500 = "t500",
  TIME_100 = "t100",
  TIME_50 = "t50",
  TIME_20 = "t20",
  TIME_10 = "t10"
}

export type AutoLauncherInfo = {
  autoLauncherType: AutoLauncherType;
  totalCount: number;
  leftCount: number;
};

export enum DialogType {
  BIG_WIN = "bigwin",
  JACKPOT = "jackpot",
  MEGA_WIN = "megawin",
  SUPER_WIN = "superwin",
  FREE_GAME_ENTRY = "freeGameEntry",
  FREE_GAME_SETTLEMENT = "freeGameSettlement",

  BAO_HE_GAME_ENTRY = "baoHeGameEntry",
  BAO_HE_GAME_SETTLEMENT = "baoHeGameSettlement"
}

export type RollOptionType = {
  rollerSpeed: number;
  stopSpeed: number;
  singleRollerHeight: number;
  singleRollerWidth: number;
  singleIntervalHeight: number;
  rollerWidth: number;
  rollerIntervalWidth: number;
  direction: DirectionType;
};

export type LockIcon = {
  iconId: number;
  index: number;
  amount: number;
};

export enum JactpotType {
  BANANA,
  STRAWBERRY,
  APPLE,
  GRAPE,
  WATERMELON,
  LEVEL
}

export type AuthDataVo = {
  bl: number;
  fixedChessboardIcon: any[];
  freeGameAmount: number;
  freeGameCount: number;
  gameType: number;
  iconStay: number;
  lv: number;
  memberId: string;
  tableId: string;
};

export enum IconId {
  SCATTER = 11,
  WILD = 10,
  BEETLE = 12,
  SUN_GOD = 14
}

export type RollerLaunchResult = {
  dl: {
    si: [
      {
        bl: number;
        blab: number;
        blb: number;
        bubble: number;

        iconStay: number;
        fixedChessboardIconAndAmount: [];
        ctw: number;
        freegame: { "1": number };
        freeCount: number;
        freeGameAmount: number;
        gameType: number;
        lw: { "6": number };
        magnification: number;
        np: number;
        rl: [];
        rollerId: [];
        sc: number;
        sgb: number;
        tb: number;
        tbb: number;
        tw: number;
        wp: { "2": [[0, 0], [1, 0], [2, 0]] };
      }
    ];
  };
};

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
};

/**
 * 是否无限运行
 * @returns
 */
export const isLimit = (autoLauncherType: AutoLauncherType) => {
  return (
    autoLauncherType === AutoLauncherType.LIMIT ||
    autoLauncherType === AutoLauncherType.LAMIT_FAST
  );
};

export const isSubGameToSubGame = (
  viewGameType: GameType,
  currGameType: GameType
) => {
  return (
    (viewGameType === GameType.SUBGAME1 &&
      currGameType === GameType.SUBGAME2) ||
    (viewGameType === GameType.SUBGAME2 && currGameType === GameType.SUBGAME1)
  );
};

export const isAuto = (
  autoLauncherInfo: AutoLauncherInfo,
  gameTypeInfo: GameTypeInfo
) => {
  if (
    gameTypeInfo.viewGameType !== GameType.MAIN &&
    gameTypeInfo.viewGameType === gameTypeInfo.currGameType
  ) {
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
};

export const verifyBetResultData = (data: RollerLaunchResult) => {
  if (!data) {
    return 1;
  }

  if (!data.dl) {
    return 2;
  }

  if (!Object.prototype.hasOwnProperty.call(data.dl, "si")) {
    return 3;
  }

  if (Object.prototype.toString.call(data.dl.si) !== "[object Array]") {
    return 4;
  }

  const si = data.dl.si as any[];
  if (si.length === 0) {
    return 5;
  }

  if (!data.dl.si[0]) {
    return 6;
  }

  if (!Object.prototype.hasOwnProperty.call(data.dl.si[0], "rollerId")) {
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
};

export const calBetAmount = (positionId: number) => {
  const amountInfo = config.betSwitcher[0].amount.find(
    (v) => v.positionId === positionId
  );
  return config.betAmount * amountInfo.value;
};

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
  const icons = values
    .filter((v) => v[0] === columnIndex)
    .map((v) => {
      const lockIcon: LockIcon = {
        index: v[1],
        iconId: 12,
        amount: v[2]
      };
      return lockIcon;
    });

  return icons ? icons : [];
};
