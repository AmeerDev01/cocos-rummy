import { default as reduxAct } from 'redux-act'
import { Bet, BetData, BetType, HeadType, PowerVo } from '../../type';


export type InitStateType = {
  /**当前盈利 */
  profit: number,
  /**在线人数 */
  onlineNumber: number,
  /**奖金池 */
  jackpot: number,
  /**座位 */
  seats: HeadType[],
  /**当前用户信息 */
  myHead: HeadType,
  /**权限验证 */
  powers: PowerVo[]
}
export const initState: InitStateType = {
  profit: 0,
  onlineNumber: 0,
  jackpot: 0,
  seats: [],
  myHead: null,
  powers: null,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  YXX_INIT_SEATS = 'YXX_INIT_SEATS',
  YXX_CHANGE_SEAT = 'YXX_CHANGE_SEAT',
  YXX_CHANGE_ONLINE_NUMBER = 'YXX_CHANGE_ONLINE_NUMBER',
  YXX_CHANGE_ME_GOLD = 'YXX_CHANGE_ME_GOLD',
  YXX_CHANGE_JOIN_GAME = 'YXX_CHANGE_JOIN_GAME',
  YXX_CHANGE_OTHER_JOIN_GAME = 'YXX_CHANGE_OTHER_JOIN_GAME',
  YXX_CHANGE_QUIT_GAME = 'YXX_CHANGE_QUIT_GAME',
  YXX_CHANGE_SEAT_BET = 'YXX_CHANGE_SEAT_BET',
  /**清理数据 */
  YXX_CHANGE_CLEAR_DATA = 'YXX_CHANGE_CLEAR_DATA',
  /**变更座位的输赢 */
  YXX_CHANGE_SEAT_WINLOSS = 'YXX_CHANGE_SEAT_WINLOSS',
  YXX_UPDATE_POWER = 'YXX_UPDATE_POWER',
  YXX_GAME_CANCEL_BET = 'YXX_GAME_CANCEL_BET',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.YXX_INIT_SEATS ? { seats: HeadType[] } :
  A extends ActionTypes.YXX_CHANGE_ONLINE_NUMBER ? { onlineNumber: number } :
  A extends ActionTypes.YXX_CHANGE_SEAT ? { headType: HeadType } :
  A extends ActionTypes.YXX_CHANGE_ME_GOLD ? { gold: number } :
  A extends ActionTypes.YXX_CHANGE_JOIN_GAME ? { headType: HeadType } :
  A extends ActionTypes.YXX_CHANGE_OTHER_JOIN_GAME ? { headType: HeadType } :
  A extends ActionTypes.YXX_CHANGE_QUIT_GAME ? { userId: string } :
  A extends ActionTypes.YXX_CHANGE_SEAT_BET ? { betData: BetData } :
  A extends ActionTypes.YXX_CHANGE_CLEAR_DATA ? {} :
  A extends ActionTypes.YXX_CHANGE_SEAT_WINLOSS ? { index: number, winloss: number, gold: number } :
  A extends ActionTypes.YXX_UPDATE_POWER ? { powers: PowerVo[] } :
  A extends ActionTypes.YXX_GAME_CANCEL_BET ? { cancelAmount: number } :
  never;

export const initSeat = reduxAct.createAction(ActionTypes.YXX_INIT_SEATS,
  (seats: HeadType[]): ActionPayLoad<ActionTypes.YXX_INIT_SEATS> => {
    return { seats }
  })

export const changeSeat = reduxAct.createAction(ActionTypes.YXX_CHANGE_SEAT,
  (headType: HeadType): ActionPayLoad<ActionTypes.YXX_CHANGE_SEAT> => {
    return { headType }
  })

export const changeOnlineNumber = reduxAct.createAction(ActionTypes.YXX_CHANGE_ONLINE_NUMBER,
  (onlineNumber: number): ActionPayLoad<ActionTypes.YXX_CHANGE_ONLINE_NUMBER> => {
    return { onlineNumber }
  })

export const changeMeGold = reduxAct.createAction(ActionTypes.YXX_CHANGE_ME_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.YXX_CHANGE_ME_GOLD> => {
    return { gold }
  })

export const joinGame = reduxAct.createAction(ActionTypes.YXX_CHANGE_JOIN_GAME,
  (headType: HeadType): ActionPayLoad<ActionTypes.YXX_CHANGE_JOIN_GAME> => {
    return { headType }
  })

export const quitGame = reduxAct.createAction(ActionTypes.YXX_CHANGE_QUIT_GAME,
  (userId: string): ActionPayLoad<ActionTypes.YXX_CHANGE_QUIT_GAME> => {
    return { userId }
  })

export const otherJoinGame = reduxAct.createAction(ActionTypes.YXX_CHANGE_OTHER_JOIN_GAME,
  (headType: HeadType): ActionPayLoad<ActionTypes.YXX_CHANGE_OTHER_JOIN_GAME> => {
    return { headType }
  })

export const changeSeatBet = reduxAct.createAction(ActionTypes.YXX_CHANGE_SEAT_BET,
  (betData: BetData): ActionPayLoad<ActionTypes.YXX_CHANGE_SEAT_BET> => {
    return { betData }
  })

export const clearData = reduxAct.createAction(ActionTypes.YXX_CHANGE_CLEAR_DATA,
  (): ActionPayLoad<ActionTypes.YXX_CHANGE_CLEAR_DATA> => {
    return {}
  })

export const changeSeatWinlose = reduxAct.createAction(ActionTypes.YXX_CHANGE_SEAT_WINLOSS,
  (index: number, winloss: number, gold: number): ActionPayLoad<ActionTypes.YXX_CHANGE_SEAT_WINLOSS> => {
    return { index, winloss, gold }
  })
export const updatePower = reduxAct.createAction(ActionTypes.YXX_UPDATE_POWER,
  (powers: PowerVo[]): ActionPayLoad<ActionTypes.YXX_UPDATE_POWER> => {
    return { powers }
  })
export const cancelBetAmount = reduxAct.createAction(ActionTypes.YXX_GAME_CANCEL_BET,
  (cancelAmount: number): ActionPayLoad<ActionTypes.YXX_GAME_CANCEL_BET> => {
    return { cancelAmount }
  })