import { default as reduxAct } from "redux-act";

export interface Poker {
  num1:number,
  num2:number,
  num3:number,
  num4:number,
}

export interface CardNum {
  num1: number,
  num2: number,
  win?: number,
  
}


export type InitStateType = {
  /** 庄家牌信息 */
  bankerPoker: number[];
  newBankerPoker:number[];
  /** 黑桃区域牌信息*/
  blackPoker: number[];
  newBlackPoker: number[];
  /** 红桃区域牌信息*/
  redPoker: number[];
  newRedPoker: number[];
  /** 梅花区域牌信息*/
  plumPoker: number[];
  newPlumPoker: number[];
  /** 方块区域牌信息*/
  diamondPoker: number[];
  newDiamondPoker: number[];
  /**赢的区域 */
  winArea: number[];
  /** jackpot赢的最多的牌型 */
  jackpotCard:number[];
  // 结算阶段进入房间时，展示的牌点数 及类型
  farmhouse:CardNum,
  blockNum: CardNum,
  heartNum: CardNum,
  sakuraNum: CardNum,
  spadeNum: CardNum,
  allCardType:number[]
};

export const initState: InitStateType = {
  bankerPoker: null,
  newBankerPoker:null,
  newBlackPoker:null,
  blackPoker: null,
  redPoker: null,
  newRedPoker:null,
  plumPoker: null,
  newPlumPoker:null,
  newDiamondPoker:null,
  diamondPoker: null,
  winArea: null,
  jackpotCard: null,
  farmhouse:null,
  blockNum: null,
  heartNum: null,
  sakuraNum: null,
  spadeNum: null,
  allCardType:null,
};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  BANDAR_BANKER_POKER = "BANDAR_BANKER_POKER",
  BANDAR_BLACK_POKER = "BANDAR_BLACK_POKER",
  BANDAR_RED_POKER = "BANDAR_RED_POKER",
  BANDAR_PLUM_POKER = "BANDAR_PLUM_POKER",
  BANDAR_DIAMOND_POKER = "BANDAR_DIAMOND_POKER",
  BANDAR_WIN_AREA = "BANDAR_WIN_AREA",
  BANDAR_JACKPOT_WIN_CARD = "BANDAR_JACKPOT_WIN_CARD",
  BANDAR_FARMHOUSE_NUM = "BANDAR_FARMHOUSE_NUM",
  BANDAR_BLOCK_NUM = "BANDAR_BLOCK_NUM",
  BANDAR_HEART_NUM = "BANDAR_HEART_NUM",
  BANDAR_SAKURA_NUM = "BANDAR_SAKURA_NUM",
  BANDAR_SPADE_NUM = "BANDAR_SPADE_NUM",
  BANDAR_ALL_CARD_TYPE = "BANDAR_ALL_CARD_TYPE",
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDAR_BANKER_POKER
    ? { bankerPoker: number[] }
    : A extends ActionTypes.BANDAR_BLACK_POKER
    ? { blackPoker: number[] }
    : A extends ActionTypes.BANDAR_RED_POKER
    ? { redPoker: number[] }
    : A extends ActionTypes.BANDAR_PLUM_POKER
    ? { plumPoker: number[] }
    : A extends ActionTypes.BANDAR_DIAMOND_POKER
    ? { diamondPoker: number[] }
    : A extends ActionTypes.BANDAR_WIN_AREA
    ? { winArea: number[] }
    : A extends ActionTypes.BANDAR_JACKPOT_WIN_CARD
    ? { jackpotCard: number[] }
    : A extends ActionTypes.BANDAR_FARMHOUSE_NUM
    ? { farmhouse: CardNum }
    : A extends ActionTypes.BANDAR_BLOCK_NUM
    ? { blockNum: CardNum }
    : A extends ActionTypes.BANDAR_HEART_NUM
    ? { heartNum: CardNum }
    : A extends ActionTypes.BANDAR_SAKURA_NUM
    ? { sakuraNum: CardNum}
    : A extends ActionTypes.BANDAR_SPADE_NUM
    ? {  spadeNum: CardNum, }
    : A extends ActionTypes.BANDAR_ALL_CARD_TYPE
    ? { allCardType:number[] }
    : never;



/**更新庄家牌信息*/
export const setBankerPokerAction = reduxAct.createAction(
  ActionTypes.BANDAR_BANKER_POKER,
  (bankerPoker: number[]): ActionPayLoad<ActionTypes.BANDAR_BANKER_POKER> => {
    return { bankerPoker };
  }
);
/**更新黑桃牌信息*/
export const setBlackPokerAction = reduxAct.createAction(
  ActionTypes.BANDAR_BLACK_POKER,
  (blackPoker: number[]): ActionPayLoad<ActionTypes.BANDAR_BLACK_POKER> => {
    return { blackPoker };
  }
);
/**更新红桃牌信息*/
export const setRedPokerAction = reduxAct.createAction(
  ActionTypes.BANDAR_RED_POKER,
  (redPoker: number[]): ActionPayLoad<ActionTypes.BANDAR_RED_POKER> => {
    return { redPoker };
  }
);
/**更新梅花牌信息*/
export const setPlumPokerAction = reduxAct.createAction(
  ActionTypes.BANDAR_PLUM_POKER,
  (plumPoker: number[]): ActionPayLoad<ActionTypes.BANDAR_PLUM_POKER> => {
    return { plumPoker };
  }
);
/**更新方块牌信息*/
export const setDiamondPokerAction = reduxAct.createAction(
  ActionTypes.BANDAR_DIAMOND_POKER,
  (diamondPoker: number[]): ActionPayLoad<ActionTypes.BANDAR_DIAMOND_POKER> => {
    return { diamondPoker };
  }
);
/**更新赢的区域*/
export const setWinAreaAction = reduxAct.createAction(
  ActionTypes.BANDAR_WIN_AREA,
  (winArea: number[]): ActionPayLoad<ActionTypes.BANDAR_WIN_AREA> => {
    return { winArea };
  }
);
/**更新中奖框的牌*/
export const setJackpotWinAction = reduxAct.createAction(
  ActionTypes.BANDAR_JACKPOT_WIN_CARD,
  (jackpotCard:number[]): ActionPayLoad<ActionTypes.BANDAR_JACKPOT_WIN_CARD> => {
    return { jackpotCard };
  }
);
/**二阶段进入游戏 更新方块牌信息*/
export const setBlockNumAction = reduxAct.createAction(
  ActionTypes.BANDAR_BLOCK_NUM,
  (blockNum: CardNum): ActionPayLoad<ActionTypes.BANDAR_BLOCK_NUM> => {
    return { blockNum };
  }
);
/**二阶段进入游戏 更新红桃牌信息*/
export const setHeartNumAction = reduxAct.createAction(
  ActionTypes.BANDAR_HEART_NUM,
  (heartNum: CardNum): ActionPayLoad<ActionTypes.BANDAR_HEART_NUM> => {
    return { heartNum };
  }
);
/**二阶段进入游戏 更新梅花牌信息*/
export const setSakuraNumAction = reduxAct.createAction(
  ActionTypes.BANDAR_SAKURA_NUM,
  (sakuraNum: CardNum): ActionPayLoad<ActionTypes.BANDAR_SAKURA_NUM> => {
    return { sakuraNum };
  }
);
/**二阶段进入游戏 更新黑桃牌信息*/
export const setSpadeNumAction = reduxAct.createAction(
  ActionTypes.BANDAR_SPADE_NUM,
  (spadeNum: CardNum): ActionPayLoad<ActionTypes.BANDAR_SPADE_NUM> => {
    return { spadeNum };
  }
);
/**二阶段进入游戏 更新庄家牌信息*/
export const setFarmhouseNumAction = reduxAct.createAction(
  ActionTypes.BANDAR_FARMHOUSE_NUM,
  (farmhouse: CardNum): ActionPayLoad<ActionTypes.BANDAR_FARMHOUSE_NUM> => {
    return { farmhouse };
  }
);
/** 更新所有特殊牌型 QIuQiu twins*/
export const setAllCardTypeAction = reduxAct.createAction(
  ActionTypes.BANDAR_ALL_CARD_TYPE,
  (allCardType: number[]): ActionPayLoad<ActionTypes.BANDAR_ALL_CARD_TYPE> => {
    return { allCardType };
  }
);

