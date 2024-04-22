import { default as reduxAct } from 'redux-act'
import { BetData, BetType, HeadType } from '../../type';
import config from '../../config';


export type InitStateType = {
  /**最新的下注信息 */
  newBetData: BetData,
  /**选择的筹码 */
  selectChip: number,
  /**当前用户的每个位置的下注数据 */
  betData: BetData[],
  /**上一局下注 */
  lastBet: BetData[],
  /**取消下注信息 */
  cancelBetData: BetData,
}
export const initState: InitStateType = {
  newBetData: null,
  selectChip: config.chipTypes[0].value,
  betData: [],
  lastBet: [],
  cancelBetData: null
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  YXX_INIT_BET = 'YXX_INIT_BET',
  YXX_BET = 'YXX_BET',
  YXX_SELECT_CHIP = 'YXX_SELECT_CHIP',
  /**清理下注 */
  YXX_CLEAR_BET = 'YXX_CLEAR_BET',
  /**重复上一局下注 */
  YXX_REPEAT_LAST_BET = 'YXX_REPEAT_LAST_BET',
  /**取消下注 */
  YXX_CANCEL_BET = 'YXX_CANCEL_BET',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.YXX_INIT_BET ? { betDatas: BetData[] } :
  A extends ActionTypes.YXX_BET ? { betData: BetData } :
  A extends ActionTypes.YXX_SELECT_CHIP ? { selectChip: number } :
  A extends ActionTypes.YXX_CLEAR_BET ? { isQuit: boolean } :
  A extends ActionTypes.YXX_CANCEL_BET ? { betData: BetData } :
  never;

export const initBetData = reduxAct.createAction(ActionTypes.YXX_INIT_BET,
  (betDatas: BetData[]): ActionPayLoad<ActionTypes.YXX_INIT_BET> => {
    return { betDatas }
  })

export const seatBet = reduxAct.createAction(ActionTypes.YXX_BET,
  (betData: BetData): ActionPayLoad<ActionTypes.YXX_BET> => {
    return { betData }
  })

export const selectChip = reduxAct.createAction(ActionTypes.YXX_SELECT_CHIP,
  (selectChip: number): ActionPayLoad<ActionTypes.YXX_SELECT_CHIP> => {
    return { selectChip }
  })

export const clearBet = reduxAct.createAction(ActionTypes.YXX_CLEAR_BET,
  (isQuit: boolean = false): ActionPayLoad<ActionTypes.YXX_CLEAR_BET> => {
    return { isQuit }
  })
export const cancelBet = reduxAct.createAction(ActionTypes.YXX_CANCEL_BET,
  (betData: BetData): ActionPayLoad<ActionTypes.YXX_CANCEL_BET> => {
    return { betData }
  })