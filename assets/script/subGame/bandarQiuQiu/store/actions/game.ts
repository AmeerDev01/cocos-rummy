import { default as reduxAct } from "redux-act";
import { GameStatus, HeadType, MemberInfoVo, TipsVo } from "../../type";

export type InitStateType = {
  /**在线人数 */
  onlineNum: number;
  /**当前用户信息 */
  myInfo: HeadType;
  /**用户输赢 */
  myWinLose:number;
  /**下注倒计时 */
  countDown: number;
  /**等待倒计时 */
  layCountDown: number;
  /**用于初始进入游戏时发牌时间判定 大于3秒才可以发牌 */
  seconds: number;
  /** 用户金币值 */
  gold: number;
  /**游戏状态 */
  gameStatus: GameStatus,
  // leftUsersInfo:MemberInfoVo[],
  // rightUsersInfo:MemberInfoVo[],
  /** 榜上所有用户 */
  usersInfo: MemberInfoVo[],
  /**初始进入房间游戏状态 */
  initGameStatus: GameStatus,
  tips:TipsVo[],
};

export const initState: InitStateType = {
  onlineNum: 0, //在线人数
  myInfo: null,
  myWinLose:0,
  countDown: 0,
  layCountDown:0,
  seconds:0,
  gold: null,
  gameStatus: null,
  initGameStatus:null,
  usersInfo: [],
  tips:null,
};

/**必须大写，不然redux-act要自动加序列号 */
export enum ActionTypes {
  BANDARQIUQIU_CHANGE_ONLINE_NUMBER = "BANDARQIUQIU_CHANGE_ONLINE_NUMBER",
  BANDARQIUQIU_CHANGE_MY_INFO = "BANDARQIUQIU_CHANGE_MY_INFO",
  BANDARQIUQIU_MY_WIN_LOSE="BANDARQIUQIU_MY_WIN_LOSE",
  BANDARQIUQIU_COUNT_DOWN = "BANDARQIUQIU_COUNT_DOWN",
  BANDARQIUQIU_LAY_COUNT_DOWN = "BANDARQIUQIU_LAY_COUNT_DOWN",
  BANDARQIUQIU_SECONDS = "BANDARQIUQIU_SECONDS",
  BANDARQIUQIU_GOLD = "BANDARQIUQIU_GOLD",
  BANDARQIUQIU_GAME_STATUS="BANDARQIUQIU_GAME_STATUS",
  BANDARQIUQIU_GAME_USERS_INFO = "BANDARQIUQIU_GAME_USERS_INFO",
  BANDERQIUQIU_INIT_GAME_STATUS = "BANDERQIUQIU_INIT_GAME_STATUS",
  BANDERQIUQIU_GAME_TIPS="BANDERQIUQIU_GAME_TIPS",
  
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDARQIUQIU_CHANGE_ONLINE_NUMBER
  ? { onlineNum: number }
  : A extends ActionTypes.BANDARQIUQIU_CHANGE_MY_INFO
  ? { myInfo: HeadType }
  : A extends ActionTypes.BANDARQIUQIU_MY_WIN_LOSE
  ? { myWinLose:number }
  : A extends ActionTypes.BANDARQIUQIU_COUNT_DOWN
  ? { countDown: number }
  : A extends ActionTypes.BANDARQIUQIU_LAY_COUNT_DOWN
  ? { layCountDown: number }
  : A extends ActionTypes.BANDARQIUQIU_SECONDS
  ? { seconds: number }
  : A extends ActionTypes.BANDARQIUQIU_GOLD
  ? { gold: number }
  : A extends ActionTypes.BANDARQIUQIU_GAME_STATUS
  ? { gameStatus: GameStatus }
  : A extends ActionTypes.BANDARQIUQIU_GAME_USERS_INFO
  ? { usersInfo: MemberInfoVo[] }
  : A extends ActionTypes.BANDERQIUQIU_INIT_GAME_STATUS
  ? { initGameStatus: GameStatus }
  : A extends ActionTypes.BANDERQIUQIU_GAME_TIPS
  ? { tips:TipsVo[] }
  : never;

/**设置房间在线人数 */
export const setOnlineNumber = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_CHANGE_ONLINE_NUMBER,
  (
    onlineNum: number
  ): ActionPayLoad<ActionTypes.BANDARQIUQIU_CHANGE_ONLINE_NUMBER> => {
    return { onlineNum };
  }
);
/**初始化用户信息 */
export const setMyInfoAction = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_CHANGE_MY_INFO,
  (myInfo: HeadType): ActionPayLoad<ActionTypes.BANDARQIUQIU_CHANGE_MY_INFO> => {
    return { myInfo };
  }
);
/**用户输赢 */
export const setMyWinLose = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_MY_WIN_LOSE,
  (myWinLose:number): ActionPayLoad<ActionTypes.BANDARQIUQIU_MY_WIN_LOSE> => {
    return { myWinLose };
  }
);
/**初始化榜上用户信息 */
export const setUsersInfoAction = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_GAME_USERS_INFO,
  (usersInfo:MemberInfoVo[]): ActionPayLoad<ActionTypes.BANDARQIUQIU_GAME_USERS_INFO> => {
    return { usersInfo };
  }
);
/**设置下注倒计时时间 */
export const setCountDownAction = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_COUNT_DOWN,
  (countDown: number): ActionPayLoad<ActionTypes.BANDARQIUQIU_COUNT_DOWN> => {
    return { countDown };
  }
);
/**设置等待倒计时时间 */
export const setLayCountDownAction = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_LAY_COUNT_DOWN,
  (layCountDown: number): ActionPayLoad<ActionTypes.BANDARQIUQIU_LAY_COUNT_DOWN> => {
    return { layCountDown };
  }
);
/**用于初始进入游戏时发牌时间判定 大于3秒才可以发牌 */
export const setSecondsAction = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_SECONDS,
  (seconds: number): ActionPayLoad<ActionTypes.BANDARQIUQIU_SECONDS> => {
    return { seconds };
  }
);
/**设置用户金币 */
export const setGoldAction = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.BANDARQIUQIU_GOLD> => {
    return { gold };
  }
);
/**设置游戏状态 */
export const setGameStatusAction = reduxAct.createAction(
  ActionTypes.BANDARQIUQIU_GAME_STATUS,
  (gameStatus: GameStatus): ActionPayLoad<ActionTypes.BANDARQIUQIU_GAME_STATUS> => {
    return { gameStatus };
  }
);

/**设置初始游戏状态 */
export const setInitGameStatusAction = reduxAct.createAction(
  ActionTypes.BANDERQIUQIU_INIT_GAME_STATUS,
  (initGameStatus: GameStatus): ActionPayLoad<ActionTypes.BANDERQIUQIU_INIT_GAME_STATUS> => {
    return { initGameStatus };
  }
);

/**设置用户权限 */
export const setTipsAction = reduxAct.createAction(
  ActionTypes.BANDERQIUQIU_GAME_TIPS,
  (tips: TipsVo[]): ActionPayLoad<ActionTypes.BANDERQIUQIU_GAME_TIPS> => {
    return { tips };
  }
);
