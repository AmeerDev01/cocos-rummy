import { default as reduxAct } from "redux-act";
import { TwinNum } from "../../type";


export type InitStateType = {
  blueCard: number[],
  redCard: number[],
  /**红蓝方的牌点数*/
  twinNum:TwinNum,
    /**赢的区域 */
  winArea: number[];
};

export const initState: InitStateType = {
  blueCard: null,
  redCard: null,
  twinNum:null,
  winArea: null,
    
};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  BANDARQIUQIU_BLUE_CARD = "BANDARQIUQIU_BLUE_CARD",
  BANDARQIUQIU_RED_CARD = "BANDARQIUQIU_RED_CARD",
  BANDARQIUQIU_TWIN_NUM = "BANDARQIUQIU_TWIN_NUM",
  BANDARQIUQIU_WIN_AREA = "BANDARQIUQIU_WIN_AREA",
    
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDARQIUQIU_BLUE_CARD ? { blueCard: number[] } :
  A extends ActionTypes.BANDARQIUQIU_RED_CARD ? { redCard: number[] } :
  A extends ActionTypes.BANDARQIUQIU_TWIN_NUM ? { twinNum: TwinNum } :
  A extends ActionTypes.BANDARQIUQIU_WIN_AREA ? { winArea: number[] } :never;

/**改变蓝方的牌 */
export const changeBlueCardAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_BLUE_CARD,
  (blueCard: number[]): ActionPayLoad<ActionTypes.BANDARQIUQIU_BLUE_CARD> => {
    return { blueCard }
  })
/**改变红方的牌 */
export const changeRedCardAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_RED_CARD,
  (redCard: number[]): ActionPayLoad<ActionTypes.BANDARQIUQIU_RED_CARD> => {
    return { redCard }
  })
  /**改变牌的点数 */
export const changeTwinNumAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_TWIN_NUM,
  (twinNum: TwinNum): ActionPayLoad<ActionTypes.BANDARQIUQIU_TWIN_NUM> => {
    return { twinNum }
  })
/**赢的区域 */
export const changeWinAreaAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_WIN_AREA,
  (winArea: number[]): ActionPayLoad<ActionTypes.BANDARQIUQIU_WIN_AREA> => {
    return { winArea }
})


