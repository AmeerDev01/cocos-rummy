import { default as reduxAct } from 'redux-act'
import { GameType } from '../../type';


export type InitStateType = {
  /**游戏类型信息 */
  gameType: GameType,
  gold: number,
}
export const initState: InitStateType = {
  gameType:GameType.NONE,
  /**玩家金币 */
  gold: 0,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  CRASHV2_RESET_STORE = 'CRASHV2_RESET_STORE',
  CRASHV2_RENEWAL_GOLD = 'CRASHV2_RENEWAL_GOLD',
  CRASHV2_CHANGE_GAMETYPE = 'CRASHV2_CHANGE_GAMETYPE',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.CRASHV2_RESET_STORE ? {} :
  A extends ActionTypes.CRASHV2_RENEWAL_GOLD ? { gold: number } :
  A extends ActionTypes.CRASHV2_CHANGE_GAMETYPE ? { gameType: number } :
  never;

/**更新游戏状态 */
export const changeGameType = reduxAct.createAction(ActionTypes.CRASHV2_CHANGE_GAMETYPE,
  (gameType: GameType): ActionPayLoad<ActionTypes.CRASHV2_CHANGE_GAMETYPE> => {
    return { gameType }
  })
/**更新余额 */
export const updateGold = reduxAct.createAction(ActionTypes.CRASHV2_RENEWAL_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.CRASHV2_RENEWAL_GOLD> => {
    return { gold }
  })

export const resetStore = reduxAct.createAction(ActionTypes.CRASHV2_RESET_STORE,
  (): ActionPayLoad<ActionTypes.CRASHV2_RESET_STORE> => {
    return { initState }
  })