// import {MyInfo} from './userInfo';
import { default as reduxAct } from "redux-act";
import { Statistik, History, RokerTar} from "../../type";

export type JackpotWin={
  name:string,
  icon:number,//头像
  winGold:number,
}

export type Roker={
  black:RokerTar,
  red:RokerTar,
  plum:RokerTar,
  diamond:RokerTar,
}

export type HistoryItem = {
  result: number[],
  time:number,
}

export type InitStateType = {
    /**黑桃区域历史记录 */
    result1:number[],
    /**红桃区域历史记录 */
    result2:number[],
    /**梅花区域历史记录 */
    result3:number[],
    /**方块区域历史记录 */
    result4:number[],
    /**历史输赢状况 */
    tren:History[],
    /**筹码区输赢状况 */
    statistik:Statistik[],
    /**玩家投注输赢状况 */
    rekor:Roker,
    /** jackpot前10位赢家 jackpot奖池获奖金额最高的10名玩家 */
    jackpotWin:JackpotWin[]
    
};

export const initState: InitStateType = {
    result1:[],
    result2:[],
    result3:[],
    result4:[],
    tren:null,
    statistik:null,
    rekor:null,
    jackpotWin:null,
};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  BANDAR_HISTORY_RESULT1="BANDAR_HISTORY_RESULT1",
  BANDAR_HISTORY_RESULT2="BANDAR_HISTORY_RESULT2",
  BANDAR_HISTORY_RESULT3="BANDAR_HISTORY_RESULT3",
  BANDAR_HISTORY_RESULT4="BANDAR_HISTORY_RESULT4",
  BANDAR_HISTORY_TREN="BANDAR_HISTORY_TREN",
  BANDAR_HISTORY_STATISTIK="BANDAR_HISTORY_STATISTIK",
  BANDAR_HISTORY_REKOR="BANDAR_HISTORY_REKOR",
  BANDAR_JACKPOT_WIN="BANDAR_JACKPOT_WIN",
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDAR_HISTORY_RESULT1 ? { result1 : number[] }:
  A extends ActionTypes.BANDAR_HISTORY_RESULT2 ? { result2 : number[] }:
  A extends ActionTypes.BANDAR_HISTORY_RESULT3 ? { result3 : number[] }:
  A extends ActionTypes.BANDAR_HISTORY_RESULT4 ? { result4 : number[] }:
  A extends ActionTypes.BANDAR_HISTORY_TREN ? { tren : History[] }:
  A extends ActionTypes.BANDAR_HISTORY_STATISTIK ? { statistik : Statistik[] }:
  A extends ActionTypes.BANDAR_HISTORY_REKOR ? { rekor : Roker }: 
  A extends ActionTypes.BANDAR_JACKPOT_WIN ? { jackpotWin:JackpotWin[] }:never;

/**改变黑桃区域历史记录 */
export const changeResult1Action = reduxAct.createAction(ActionTypes.BANDAR_HISTORY_RESULT1,
  
  (result1:number[]): ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT1> => {
    return { result1 }
})
/**改变红桃区域历史记录 */
export const changeResult2Action = reduxAct.createAction(ActionTypes.BANDAR_HISTORY_RESULT2,
    (result2:number[]): ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT2> => {
      return { result2 }
})
/**改变梅花区域历史记录 */
export const changeResult3Action = reduxAct.createAction(ActionTypes.BANDAR_HISTORY_RESULT3,
    (result3:number[]): ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT3> => {
      return { result3 }
})
/**改变方块区域历史记录 */
export const changeResult4Action = reduxAct.createAction(ActionTypes.BANDAR_HISTORY_RESULT4,
    (result4:number[]): ActionPayLoad<ActionTypes.BANDAR_HISTORY_RESULT4> => {
      return { result4 }
})
/**改变历史输赢状况信息 */
export const changeTrenAction = reduxAct.createAction(ActionTypes.BANDAR_HISTORY_TREN,
    (tren : History[]): ActionPayLoad<ActionTypes.BANDAR_HISTORY_TREN> => {
      return { tren }
})
/**改变筹码区输赢状况信息 */
export const changeStatistikAction = reduxAct.createAction(ActionTypes.BANDAR_HISTORY_STATISTIK,
    (statistik : Statistik[] ): ActionPayLoad<ActionTypes.BANDAR_HISTORY_STATISTIK> => {
      return { statistik }
})
/**改变玩家投注输赢状况信息 */
export const changeRekorAction = reduxAct.createAction(ActionTypes.BANDAR_HISTORY_REKOR,
  (rekor : Roker ): ActionPayLoad<ActionTypes.BANDAR_HISTORY_REKOR> => {
    return { rekor }
})
/**改变jackpot赢家信息 */
export const changeJackpotWinAction = reduxAct.createAction(ActionTypes.BANDAR_JACKPOT_WIN,
  (jackpotWin:JackpotWin[] ): ActionPayLoad<ActionTypes.BANDAR_JACKPOT_WIN> => {
    return { jackpotWin }
})
