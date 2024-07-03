import { default as reduxAct } from "redux-act";
import { GameStatus, HeadType, MemberInfoVo, TipsVo } from "../../type";

export type InitStateType = {
  /**在线人数 */
  onlineNum: number;
  /**奖金池 */
  jackpot: number;
  /**奖金池 */
  trigJackpot: number;
  /**当前用户信息 */
  myInfo: HeadType;
  myWinLose:number;
  /**倒计时 */
  countDown: number;
  /**用于初始进入游戏时发牌时间判定 大于3秒才可以发牌 */
  seconds: number;
  /** 用户金币值 */
  gold: number;
  /**游戏状态 */
  gameStatus: GameStatus,
  /**初始进入房间游戏状态 */
  initGameStatus: GameStatus,
  // leftUsersInfo:MemberInfoVo[],
  // rightUsersInfo:MemberInfoVo[],
  /** 榜上所有用户 */
  usersInfo: MemberInfoVo[],
  tips:TipsVo[]
};

export const initState: InitStateType = {
  onlineNum: 0, //在线人数
  jackpot: null,
  trigJackpot:0,
  myInfo: null,
  myWinLose:0,
  countDown: 0,
  seconds:0,
  gold: null,
  gameStatus: null,
  initGameStatus:null,
  usersInfo: [],
  tips:null,
  
};

/**必须大写，不然redux-act要自动加序列号 */
export enum ActionTypes {
  BANDAR_CHANGE_ONLINE_NUMBER = "BANDAR_CHANGE_ONLINE_NUMBER",
  BANDAR_CHANGE_MY_INFO = "BANDAR_CHANGE_MY_INFO",
  BANDAR_MY_WIN_LOSE="BANDAR_MY_WIN_LOSE",
  BANDAR_COUNT_DOWN = "BANDAR_COUNT_DOWN",
  BANDAR_SECONDS = "BANDAR_SECONDS",
  BANDAR_GOLD = "BANDAR_GOLD",
  BANDER_GAME_STATUS = "BANDER_GAME_STATUS",
  BANDER_INIT_GAME_STATUS="BANDER_INIT_GAME_STATUS",
  BANDER_GAME_TRIG_JACKPOT="BANDER_GAME_TRIG_JACKPOT",
  BANDAR_GAME_JACKPOT="BANDAR_GAME_JACKPOT",
  BANDER_GAME_USERS_INFO = "BANDER_GAME_USERS_INFO",
  BANDER_GAME_TIPS="BANDER_GAME_TIPS",
  
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDAR_CHANGE_ONLINE_NUMBER
    ? { onlineNum: number }
    : A extends ActionTypes.BANDAR_CHANGE_MY_INFO
    ? { myInfo: HeadType }
    : A extends ActionTypes.BANDAR_MY_WIN_LOSE
    ? { myWinLose:number }
    : A extends ActionTypes.BANDAR_COUNT_DOWN
    ? { countDown: number }
    : A extends ActionTypes.BANDAR_SECONDS
    ? { seconds: number }
    : A extends ActionTypes.BANDAR_GOLD
    ? { gold: number }
    : A extends ActionTypes.BANDER_GAME_STATUS
    ? { gameStatus: GameStatus }
    : A extends ActionTypes.BANDER_INIT_GAME_STATUS
    ? { initGameStatus: GameStatus }
    : A extends ActionTypes.BANDAR_GAME_JACKPOT
    ? { jackpot: number }
    : A extends ActionTypes.BANDER_GAME_TRIG_JACKPOT
    ? { trigJackpot: number }
    : A extends ActionTypes.BANDER_GAME_USERS_INFO
    ? { usersInfo: MemberInfoVo[] }
    : A extends ActionTypes.BANDER_GAME_TIPS
    ? { tips:TipsVo[] }
    : never;

/**设置房间在线人数 */
export const setOnlineNumber = reduxAct.createAction(
  ActionTypes.BANDAR_CHANGE_ONLINE_NUMBER,
  (
    onlineNum: number
  ): ActionPayLoad<ActionTypes.BANDAR_CHANGE_ONLINE_NUMBER> => {
    return { onlineNum };
  }
);
/**初始化用户信息 */
export const setMyInfoAction = reduxAct.createAction(
  ActionTypes.BANDAR_CHANGE_MY_INFO,
  (myInfo: HeadType): ActionPayLoad<ActionTypes.BANDAR_CHANGE_MY_INFO> => {
    return { myInfo };
  }
);
/**用户输赢 */
export const setMyWinLose = reduxAct.createAction(
  ActionTypes.BANDAR_MY_WIN_LOSE,
  (myWinLose:number): ActionPayLoad<ActionTypes.BANDAR_MY_WIN_LOSE> => {
    return { myWinLose };
  }
);
/**初始化榜上用户信息 */
export const setUsersInfoAction = reduxAct.createAction(
  ActionTypes.BANDER_GAME_USERS_INFO,
  (usersInfo:MemberInfoVo[]): ActionPayLoad<ActionTypes.BANDER_GAME_USERS_INFO> => {
    return { usersInfo };
  }
);
/**设置倒计时时间 */
export const setCountDownAction = reduxAct.createAction(
  ActionTypes.BANDAR_COUNT_DOWN,
  (countDown: number): ActionPayLoad<ActionTypes.BANDAR_COUNT_DOWN> => {
    return { countDown };
  }
);
/**用于初始进入游戏时发牌时间判定 大于3秒才可以发牌 */
export const setSecondsAction = reduxAct.createAction(
  ActionTypes.BANDAR_SECONDS,
  (seconds: number): ActionPayLoad<ActionTypes.BANDAR_SECONDS> => {
    return { seconds };
  }
);
/**设置用户金币 */
export const setGoldAction = reduxAct.createAction(
  ActionTypes.BANDAR_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.BANDAR_GOLD> => {
    return { gold };
  }
);
/**设置游戏状态 */
export const setGameStatusAction = reduxAct.createAction(
  ActionTypes.BANDER_GAME_STATUS,
  (gameStatus: GameStatus): ActionPayLoad<ActionTypes.BANDER_GAME_STATUS> => {
    return { gameStatus };
  }
);
/**设置游戏状态 */
export const setInitGameStatusAction = reduxAct.createAction(
  ActionTypes.BANDER_INIT_GAME_STATUS,
  (initGameStatus: GameStatus): ActionPayLoad<ActionTypes.BANDER_INIT_GAME_STATUS> => {
    return { initGameStatus };
  }
);
/**设置游戏jackpot值 */
export const setJackpotNumAction = reduxAct.createAction(
  ActionTypes.BANDAR_GAME_JACKPOT,
  (jackpot: number): ActionPayLoad<ActionTypes.BANDAR_GAME_JACKPOT> => {
    return { jackpot };
  }
);
/**设置游戏TrigJackpot值 */
export const setTrigJackpotNumAction = reduxAct.createAction(
  ActionTypes.BANDER_GAME_TRIG_JACKPOT,
  (trigJackpot: number): ActionPayLoad<ActionTypes.BANDER_GAME_TRIG_JACKPOT> => {
    return { trigJackpot };
  }
);

/**设置用户权限 */
export const setTipsAction = reduxAct.createAction(
  ActionTypes.BANDER_GAME_TIPS,
  (tips: TipsVo[]): ActionPayLoad<ActionTypes.BANDER_GAME_TIPS> => {
    return { tips };
  }
);