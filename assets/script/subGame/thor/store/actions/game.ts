import { default as reduxAct } from 'redux-act'
import { AutoLauncherType, DirectionType, GameModeType, GameType, RollerType } from '../../type';
import { log } from 'cc';

export type BETTINGINFORMATION = {
  betAmount: number,
  bet: number
}

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
  isWaiting: boolean,
  /**自动下注已经自动进行了多少次 */
  autoLaunchedTimes: number,
  /**下注信息 */
  bettingInformation: BETTINGINFORMATION,
  /**是否加注 */
  apostille: boolean,
  /**发送游戏类型 */
  gameMode: GameModeType,
  /**是否加速 */
  isHasten: boolean,
  /**雷神攻击 */
  roleAttack: boolean,
  /**雷神总倍数 */
  multipleTotal: number,
  /**雷神小游戏次数 */
  minigameCount: number,
   /**小游戏倍数 */
  gameFreeGametotalMultiplier: number,
}

export const initState: InitStateType = {
  lastGameType: GameType.NONE,
  viewGameType: GameType.NONE,
  currGameType: GameType.NONE,
  balance: 0,
  profit: 0,
  autoLauncherType: AutoLauncherType.NONE,
  subGameTimes: 0,
  remainSubGameTimes: 0,
  jackpotAmount: 0,
  isShowAutoLaunch: false,
  isWaiting: true,
  autoLaunchedTimes: 0,
  bettingInformation: { betAmount: 0, bet: 0 },
  apostille: false,
  gameMode: GameModeType.normal,
  isHasten: true,
  roleAttack: false,
  multipleTotal: 0,
  minigameCount: 0,
  gameFreeGametotalMultiplier: 0,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  THOR_CHANGE_GAME = 'THOR_CHANGE_GAME',
  THOR_CHANGE_CURRGAMETYPE = 'THOR_CHANGE_CURRGAMETYPE',
  THOR_UPDATE_BALANCE = 'THOR_UPDATE_BALANCE',
  THOR_CHANGE_VIEW_GAME = 'THOR_CHANGE_VIEW_GAME',
  THOR_CHANGE_PROFIT = 'THOR_CHANGE_PROFIT',
  THOR_CHANGE_AUTO_LAUNCHER_TYPE = 'THOR_CHANGE_AUTO_LAUNCHER_TYPE',
  THOR_UPDATE_SUBGAME_TIMES = 'THOR_UPDATE_SUBGAME_TIMES',
  THOR_SET_SUBGAME_TIMES = 'THOR_SET_SUBGAME_TIMES',
  THOR_UPDATE_JACKPOT_AMOUNT = 'THOR_UPDATE_JACKPOT_AMOUNT',
  THOR_SET_WAITING = 'THOR_SET_WAITING',
  THOR_SET_AUTO_LAUNCH = 'THOR_SET_AUTO_LAUNCH',
  THOR_SET_AUTO_LAUNCHED_TIMES = 'THOR_SET_AUTO_LAUNCHED_TIMES',
  THOR_SET_BETTINGINFORMATION = 'THOR_SET_BETTINGINFORMATION',
  THOR_SET_APOSTILLE = 'THOR_SET_APOSTILLE',
  THOR_SET_GAMEMODE = 'THOR_SET_GAMEMODE',
  THOR_SET_ISHASTEN = 'THOR_SET_ISHASTEN',
  THOR_SET_ROLEATTACK = 'THOR_SET_ROLEATTACK',
  THOR_SET_MULTIPLETOTAL = 'THOR_SET_MULTIPLETOTAL',
  THOR_SET_MINIGAMECOUNT = 'THOR_SET_MINIGAMECOUNT',
  THOR_SET_GAMEFREEGAMETOTALMULTIPLIER = 'THOR_SET_GAMEFREEGAMETOTALMULTIPLIER',
  THOR_RESET_STORE = 'THOR_RESET_STORE',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.THOR_CHANGE_GAME ? { gameType: GameType } :
  A extends ActionTypes.THOR_CHANGE_CURRGAMETYPE ? { currGameType: GameType } :
  A extends ActionTypes.THOR_UPDATE_BALANCE ? { balance: number } :
  A extends ActionTypes.THOR_CHANGE_VIEW_GAME ? { viewGameType: GameType } :
  A extends ActionTypes.THOR_CHANGE_PROFIT ? { profit: number } :
  A extends ActionTypes.THOR_CHANGE_AUTO_LAUNCHER_TYPE ? { autoLauncherType: AutoLauncherType } :
  A extends ActionTypes.THOR_UPDATE_SUBGAME_TIMES ? { subGameTimes: number } :
  A extends ActionTypes.THOR_SET_SUBGAME_TIMES ? { subGameTimes: number } :
  A extends ActionTypes.THOR_UPDATE_JACKPOT_AMOUNT ? { jackpotAmount: number } :
  A extends ActionTypes.THOR_SET_WAITING ? { isWaiting: boolean } :
  A extends ActionTypes.THOR_SET_AUTO_LAUNCH ? { isShowAutoLaunch: boolean } :
  A extends ActionTypes.THOR_SET_AUTO_LAUNCHED_TIMES ? { autoLaunchedTimes?: number } :
  A extends ActionTypes.THOR_SET_BETTINGINFORMATION ? { bettingInformation?: BETTINGINFORMATION } :
  A extends ActionTypes.THOR_SET_APOSTILLE ? { apostille?: boolean } :
  A extends ActionTypes.THOR_SET_GAMEMODE ? { gameMode?: GameModeType } :
  A extends ActionTypes.THOR_SET_ISHASTEN ? { isHasten?: boolean } :
  A extends ActionTypes.THOR_SET_ROLEATTACK ? { roleAttack?: boolean } :
  A extends ActionTypes.THOR_SET_MULTIPLETOTAL ? { multipleTotal?: number } :
  A extends ActionTypes.THOR_SET_MINIGAMECOUNT ? { minigameCount?: number } :
  A extends ActionTypes.THOR_SET_GAMEFREEGAMETOTALMULTIPLIER ? { gameFreeGametotalMultiplier?: number } :
  A extends ActionTypes.THOR_RESET_STORE ? {} :
  never;


export const changeGame = reduxAct.createAction(ActionTypes.THOR_CHANGE_GAME,
  (gameType: GameType): ActionPayLoad<ActionTypes.THOR_CHANGE_GAME> => {
    return { gameType }
  })
export const changeCurrGameType = reduxAct.createAction(ActionTypes.THOR_CHANGE_CURRGAMETYPE,
  (currGameType: GameType): ActionPayLoad<ActionTypes.THOR_CHANGE_CURRGAMETYPE> => {
    return { currGameType }
  })
export const updateBalance = reduxAct.createAction(ActionTypes.THOR_UPDATE_BALANCE,
  (balance: number): ActionPayLoad<ActionTypes.THOR_UPDATE_BALANCE> => {
    return { balance }
  })
export const updateGameModeType = reduxAct.createAction(ActionTypes.THOR_SET_GAMEMODE,
  (gameMode: GameModeType): ActionPayLoad<ActionTypes.THOR_SET_GAMEMODE> => {
    return { gameMode }
  })

export const changebetAmount = reduxAct.createAction(ActionTypes.THOR_SET_BETTINGINFORMATION,
  (bettingInformation: BETTINGINFORMATION): ActionPayLoad<ActionTypes.THOR_SET_BETTINGINFORMATION> => {
    return { bettingInformation }
  })
export const changeapostille = reduxAct.createAction(ActionTypes.THOR_SET_APOSTILLE,
  (apostille: boolean): ActionPayLoad<ActionTypes.THOR_SET_APOSTILLE> => {
    return { apostille }
  })
export const changeIsHasten = reduxAct.createAction(ActionTypes.THOR_SET_ISHASTEN,
  (isHasten: boolean): ActionPayLoad<ActionTypes.THOR_SET_ISHASTEN> => {
    return { isHasten }
  })
export const changeMultipleTotal = reduxAct.createAction(ActionTypes.THOR_SET_MULTIPLETOTAL,
  (multipleTotal: number): ActionPayLoad<ActionTypes.THOR_SET_MULTIPLETOTAL> => {
    return { multipleTotal }
  })
export const changeMinigameCount = reduxAct.createAction(ActionTypes.THOR_SET_MINIGAMECOUNT,
  (minigameCount: number): ActionPayLoad<ActionTypes.THOR_SET_MINIGAMECOUNT> => {
    return { minigameCount }
  })
export const changeGameFreeGametotalMultiplier = reduxAct.createAction(ActionTypes.THOR_SET_GAMEFREEGAMETOTALMULTIPLIER,
  (gameFreeGametotalMultiplier: number): ActionPayLoad<ActionTypes.THOR_SET_GAMEFREEGAMETOTALMULTIPLIER> => {
    return { gameFreeGametotalMultiplier }
  })
export const changeRoleAttack = reduxAct.createAction(ActionTypes.THOR_SET_ROLEATTACK,
  (roleAttack: boolean): ActionPayLoad<ActionTypes.THOR_SET_ROLEATTACK> => {
    return { roleAttack }
  })
export const changeViewGame = reduxAct.createAction(ActionTypes.THOR_CHANGE_VIEW_GAME,
  (viewGameType: GameType): ActionPayLoad<ActionTypes.THOR_CHANGE_VIEW_GAME> => {
    return { viewGameType }
  })

export const changeProfit = reduxAct.createAction(ActionTypes.THOR_CHANGE_PROFIT,
  (profit: number): ActionPayLoad<ActionTypes.THOR_CHANGE_PROFIT> => {
    return { profit }
  })

export const changeAutoLauncherType = reduxAct.createAction(ActionTypes.THOR_CHANGE_AUTO_LAUNCHER_TYPE,
  (autoLauncherType: AutoLauncherType): ActionPayLoad<ActionTypes.THOR_CHANGE_AUTO_LAUNCHER_TYPE> => {
    return { autoLauncherType }
  })

export const updateSubGameTimes = reduxAct.createAction(ActionTypes.THOR_UPDATE_SUBGAME_TIMES,
  (subGameTimes: number): ActionPayLoad<ActionTypes.THOR_UPDATE_SUBGAME_TIMES> => {
    return { subGameTimes }
  })
/**设置缓存的次数 */
export const setSubGameTimes = reduxAct.createAction(ActionTypes.THOR_SET_SUBGAME_TIMES,
  (subGameTimes: number): ActionPayLoad<ActionTypes.THOR_SET_SUBGAME_TIMES> => {
    return { subGameTimes }
  })
export const updateJackpotAmount = reduxAct.createAction(ActionTypes.THOR_UPDATE_JACKPOT_AMOUNT,
  (jackpotAmount: number): ActionPayLoad<ActionTypes.THOR_UPDATE_JACKPOT_AMOUNT> => {
    return { jackpotAmount }
  })
export const setWaiting = reduxAct.createAction(ActionTypes.THOR_SET_WAITING,
  (isWaiting: boolean): ActionPayLoad<ActionTypes.THOR_SET_WAITING> => {
    return { isWaiting }
  })
export const setShowAuthLaunch = reduxAct.createAction(ActionTypes.THOR_SET_AUTO_LAUNCH,
  (isShowAutoLaunch: boolean): ActionPayLoad<ActionTypes.THOR_SET_AUTO_LAUNCH> => {
    return { isShowAutoLaunch }
  })

export const setAutoLaunchedTimes = reduxAct.createAction(ActionTypes.THOR_SET_AUTO_LAUNCHED_TIMES,
  (autoLaunchedTimes?: number): ActionPayLoad<ActionTypes.THOR_SET_AUTO_LAUNCHED_TIMES> => {
    return { autoLaunchedTimes }
  })
  export const resetStore = reduxAct.createAction(ActionTypes.THOR_RESET_STORE,
    (): ActionPayLoad<ActionTypes.THOR_RESET_STORE> => {
      return { initState }
    })
