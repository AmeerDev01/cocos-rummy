import { default as reduxAct } from 'redux-act'
import { AutoLauncherType, DirectionType, GameType, RollerType } from '../../type';


export type InitStateType = {
  /**上一局游戏 */
  lastGameType: GameType
  /**下一局游戏 */
  currGameType: GameType
  /**当前界面所处的游戏类型 */
  viewGameType: GameType,
  /**下注金额 */
  // betAmount: number,
  balance: number,
  /**当前盈利 */
  profit: number,
  /**自动运行类型 */
  autoLauncherType: AutoLauncherType,
  /**初始化小游戏时的游戏次数 */
  subGameTimes: number,
  /**剩余的小游戏次数 */
  remainSubGameTimes: number,
  /**jackpot额度 */
  jackpotAmount: number,
  /**是否显示自动执行选择框 */
  isShowAutoLaunch: boolean,
  /**是否等待人工操作 */
  isWaiting: boolean
  /**自动下注已经自动进行了多少次 */
  autoLaunchedTimes: number
  /**停止模式：正常序列号停止，跳跃序列号停止 */
  stopMode: 'index' | 'jump',
  /**是否步停（顺序停止，原则上只支持stopModel=jump；不然stopModel=index会很慢） */
  isSortStop: boolean,
  /**滑槽是否已经接收到数据开始进行停止过程 */
  isBeginStop: boolean
}
export const initState: InitStateType = {
  lastGameType: GameType.NONE,
  viewGameType: GameType.NONE,
  currGameType: GameType.NONE,
  // betAmount: 0,
  balance: 0,
  profit: 0,
  autoLauncherType: AutoLauncherType.NONE,
  subGameTimes: 0,
  remainSubGameTimes: 0,
  jackpotAmount: 0,
  isShowAutoLaunch: false,
  isWaiting: true,
  autoLaunchedTimes: 0,
  stopMode: 'jump',
  isSortStop: true,
  isBeginStop: false
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  FRUIT777_CHANGE_GAME = 'FRUIT777_CHANGE_GAME',
  FRUIT777_UPDATE_BALANCE = 'FRUIT777_UPDATE_BALANCE',
  FRUIT777_CHANGE_VIEW_GAME = 'FRUIT777_CHANGE_VIEW_GAME',
  FRUIT777_CHANGE_PROFIT = 'FRUIT777_CHANGE_PROFIT',
  FRUIT777_CHANGE_BET_AMOUNT = 'FRUIT777_CHANGE_BET_AMOUNT',
  FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE = 'FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE',
  FRUIT777_UPDATE_SUBGAME_TIMES = 'FRUIT777_UPDATE_SUBGAME_TIMES',
  FRUIT777_SET_SUBGAME_TIMES = 'FRUIT777_SET_SUBGAME_TIMES',
  FRUIT777_UPDATE_JACKPOT_AMOUNT = 'FRUIT777_UPDATE_JACKPOT_AMOUNT',
  FRUIT777_SET_WAITING = 'FRUIT777_SET_WAITING',
  FRUIT777_SET_AUTO_LAUNCH = 'FRUIT777_SET_AUTO_LAUNCH',
  FRUIT777_SET_AUTO_LAUNCHED_TIMES = 'FRUIT777_SET_AUTO_LAUNCHED_TIMES',
  FRUIT777_SET_STOP_MODE = 'FRUIT777_SET_STOP_MODE',
  FRUIT777_SET_SORT = 'FRUIT777_SET_SORT',
  FRUIT777_SET_IS_BEGIN_STOP = 'FRUIT777_SET_IS_BEGIN_STOP',
  FRUIT777_RESET_STORE = 'FRUIT777_RESET_STORE'
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.FRUIT777_CHANGE_GAME ? { gameType: GameType } :
  A extends ActionTypes.FRUIT777_UPDATE_BALANCE ? { balance: number } :
  A extends ActionTypes.FRUIT777_CHANGE_VIEW_GAME ? { gameType: GameType } :
  A extends ActionTypes.FRUIT777_CHANGE_PROFIT ? { profit: number } :
  A extends ActionTypes.FRUIT777_CHANGE_BET_AMOUNT ? { betAmount: number } :
  A extends ActionTypes.FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE ? { autoLauncherType: AutoLauncherType } :
  A extends ActionTypes.FRUIT777_UPDATE_SUBGAME_TIMES ? { subGameTimes: number } :
  A extends ActionTypes.FRUIT777_SET_SUBGAME_TIMES ? { subGameTimes: number } :
  A extends ActionTypes.FRUIT777_UPDATE_JACKPOT_AMOUNT ? { jackpotAmount: number } :
  A extends ActionTypes.FRUIT777_SET_WAITING ? { isWaiting: boolean } :
  A extends ActionTypes.FRUIT777_SET_AUTO_LAUNCH ? { isShowAutoLaunch: boolean } :
  A extends ActionTypes.FRUIT777_SET_AUTO_LAUNCHED_TIMES ? { autoLaunchedTimes?: number } :
  A extends ActionTypes.FRUIT777_SET_STOP_MODE ? { stopMode: 'index' | 'jump' } :
  A extends ActionTypes.FRUIT777_SET_SORT ? { isSortStop: boolean } :
  A extends ActionTypes.FRUIT777_SET_IS_BEGIN_STOP ? { isBeginStop: boolean } :
  A extends ActionTypes.FRUIT777_RESET_STORE ? {} :

  never;


export const changeGame = reduxAct.createAction(ActionTypes.FRUIT777_CHANGE_GAME,
  (gameType: GameType): ActionPayLoad<ActionTypes.FRUIT777_CHANGE_GAME> => {
    return { gameType }
  })
export const updateBalance = reduxAct.createAction(ActionTypes.FRUIT777_UPDATE_BALANCE,
  (balance: number): ActionPayLoad<ActionTypes.FRUIT777_UPDATE_BALANCE> => {
    return { balance }
  })

export const changeViewGame = reduxAct.createAction(ActionTypes.FRUIT777_CHANGE_VIEW_GAME,
  (gameType: GameType): ActionPayLoad<ActionTypes.FRUIT777_CHANGE_VIEW_GAME> => {
    return { gameType }
  })

export const changeProfit = reduxAct.createAction(ActionTypes.FRUIT777_CHANGE_PROFIT,
  (profit: number): ActionPayLoad<ActionTypes.FRUIT777_CHANGE_PROFIT> => {
    return { profit }
  })

// export const changeBetAmount = reduxAct.createAction(ActionTypes.FRUIT777_CHANGE_BET_AMOUNT,
//   (betAmount: number): ActionPayLoad<ActionTypes.FRUIT777_CHANGE_BET_AMOUNT> => {
//     return { betAmount }
//   })

export const changeAutoLauncherType = reduxAct.createAction(ActionTypes.FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE,
  (autoLauncherType: AutoLauncherType): ActionPayLoad<ActionTypes.FRUIT777_CHANGE_AUTO_LAUNCHER_TYPE> => {
    return { autoLauncherType }
  })

export const updateSubGameTimes = reduxAct.createAction(ActionTypes.FRUIT777_UPDATE_SUBGAME_TIMES,
  (subGameTimes: number): ActionPayLoad<ActionTypes.FRUIT777_UPDATE_SUBGAME_TIMES> => {
    // console.log('subGameTimes', subGameTimes)
    return { subGameTimes }
  })
/**设置缓存的次数 */
export const setSubGameTimes = reduxAct.createAction(ActionTypes.FRUIT777_SET_SUBGAME_TIMES,
  (subGameTimes: number): ActionPayLoad<ActionTypes.FRUIT777_SET_SUBGAME_TIMES> => {
    return { subGameTimes }
  })
export const updateJackpotAmount = reduxAct.createAction(ActionTypes.FRUIT777_UPDATE_JACKPOT_AMOUNT,
  (jackpotAmount: number): ActionPayLoad<ActionTypes.FRUIT777_UPDATE_JACKPOT_AMOUNT> => {
    return { jackpotAmount }
  })
export const setWaiting = reduxAct.createAction(ActionTypes.FRUIT777_SET_WAITING,
  (isWaiting: boolean): ActionPayLoad<ActionTypes.FRUIT777_SET_WAITING> => {
    return { isWaiting }
  })
export const setShowAuthLaunch = reduxAct.createAction(ActionTypes.FRUIT777_SET_AUTO_LAUNCH,
  (isShowAutoLaunch: boolean): ActionPayLoad<ActionTypes.FRUIT777_SET_AUTO_LAUNCH> => {
    return { isShowAutoLaunch }
  })

export const setAutoLaunchedTimes = reduxAct.createAction(ActionTypes.FRUIT777_SET_AUTO_LAUNCHED_TIMES,
  (autoLaunchedTimes?: number): ActionPayLoad<ActionTypes.FRUIT777_SET_AUTO_LAUNCHED_TIMES> => {
    return { autoLaunchedTimes }
  })

export const setStopMode = reduxAct.createAction(ActionTypes.FRUIT777_SET_STOP_MODE,
  (stopMode: 'index' | 'jump'): ActionPayLoad<ActionTypes.FRUIT777_SET_STOP_MODE> => {
    return { stopMode }
  })

export const setSortStop = reduxAct.createAction(ActionTypes.FRUIT777_SET_SORT,
  (isSortStop: boolean): ActionPayLoad<ActionTypes.FRUIT777_SET_SORT> => {
    return { isSortStop }
  })

export const setIsBeginStop = reduxAct.createAction(ActionTypes.FRUIT777_SET_IS_BEGIN_STOP,
  (isBeginStop: boolean): ActionPayLoad<ActionTypes.FRUIT777_SET_IS_BEGIN_STOP> => {
    return { isBeginStop }
  })

export const resetStore = reduxAct.createAction(ActionTypes.FRUIT777_RESET_STORE,
  (): ActionPayLoad<ActionTypes.FRUIT777_RESET_STORE> => {
    return { initState }
  })