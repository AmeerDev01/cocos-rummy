import { History } from "../../type"
import { default as reduxAct } from "redux-act";


export type InitStateType = {
  maxHistory:History[],
  minHistory:number[],
};

export const initState: InitStateType = {
  minHistory: null,
  maxHistory: null,
  
};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  BANDARQIUQIU_MIN_HISTORY = "BANDARQIUQIU_MIN_HISTORY",
  BANDARQIUQIU_MAX_HISTORY = "BANDARQIUQIU_MAX_HISTORY",
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDARQIUQIU_MIN_HISTORY ? { minHistory: number[] } :
  A extends ActionTypes.BANDARQIUQIU_MAX_HISTORY ? { maxHistory: History[] } : never;

/**改变小板历史记录 */
export const changeMinHistoryAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_MIN_HISTORY,
  (minHistory:number[]): ActionPayLoad<ActionTypes.BANDARQIUQIU_MIN_HISTORY> => {
    return { minHistory }
  })
/**改变大板历史记录 */
  export const changeMaxHistoryAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_MAX_HISTORY,
    (maxHistory:History[]): ActionPayLoad<ActionTypes.BANDARQIUQIU_MAX_HISTORY> => {
      return { maxHistory }
  })


