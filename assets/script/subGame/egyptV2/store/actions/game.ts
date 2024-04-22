import { default as reduxAct } from 'redux-act'
import { AutoLauncherInfo, AutoLauncherType, DialogInfo, DirectionType, GameType, GameTypeInfo, JackpotData, SubGameAnimationPlayInfo } from '../../type';


export type InitStateType = {
  /**游戏类型信息 */
  gameTypeInfo: GameTypeInfo,
  /** 是否显示下注下拉列表 */
  betDropDownlist: boolean,
  /** 自动运行信息 */
  autoLauncherInfo: AutoLauncherInfo,
  /** 选择的线id */
  positionId: number,
  /** 当前输赢 */
  winloss: number,
  /** 余额 */
  gold: number,
  /** 弹窗信息 */
  dialogInfo: DialogInfo,
  /** 子游戏过场动画播放信息 */
  subGameAnimationPlayInfo: SubGameAnimationPlayInfo,
  /** jackpot数据 */
  jackpotDatas: JackpotData[],
  /** jackpot总金额 */
  jackpotTotalAmount: number,
}
export const initState: InitStateType = {
  gameTypeInfo: {
    lastGameType: GameType.MAIN,
    currGameType: GameType.MAIN,
    viewGameType: GameType.MAIN,
    leftCount: 0
  },
  betDropDownlist: false,
  autoLauncherInfo: null,
  positionId: 1,
  winloss: 0,
  gold: 0,
  dialogInfo: null,
  subGameAnimationPlayInfo: null,
  jackpotDatas: [],
  jackpotTotalAmount: 0,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  EGYPTV2_INIT_GAME_STORE = 'EGYPTV2_INIT_GAME_STORE',
  EGYPTV2_CHANGE_GAME = 'EGYPTV2_CHANGE_GAME',
  EGYPTV2_BET_DROP_DOWN_LIST = 'EGYPTV2_BET_DROP_DOWN_LIST',
  EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO = 'EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO',
  EGYPTV2_UPDATE_POSITION_ID = 'EGYPTV2_UPDATE_POSITION_ID',
  EGYPTV2_UPDATE_WINLOSS = 'EGYPTV2_UPDATE_WINLOSS',
  EGYPTV2_UPDATE_GOLD = 'EGYPTV2_UPDATE_GOLD',
  EGYPTV2_UPDATE_DIALOGINFO = 'EGYPTV2_UPDATE_DIALOGINFO',
  EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO = 'EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO',
  EGYPTV2_UPDATE_JACKPOT_LIST = 'EGYPTV2_UPDATE_JACKPOT_LIST',
  EGYPTV2_UPDATE_JACKPOT_AMOUNT = 'EGYPTV2_UPDATE_JACKPOT_AMOUNT',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.EGYPTV2_INIT_GAME_STORE ? { initState: InitStateType } :
  A extends ActionTypes.EGYPTV2_CHANGE_GAME ? { gameTypeInfo: GameTypeInfo } :
  A extends ActionTypes.EGYPTV2_BET_DROP_DOWN_LIST ? { bool: boolean } :
  A extends ActionTypes.EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO ? { autoLauncherInfo: AutoLauncherInfo } :
  A extends ActionTypes.EGYPTV2_UPDATE_POSITION_ID ? { positionId: number } :
  A extends ActionTypes.EGYPTV2_UPDATE_WINLOSS ? { winloss: number } :
  A extends ActionTypes.EGYPTV2_UPDATE_GOLD ? { gold: number } :
  A extends ActionTypes.EGYPTV2_UPDATE_DIALOGINFO ? { dialogInfo: DialogInfo } :
  A extends ActionTypes.EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO ? { subGameAnimationPlayInfo: SubGameAnimationPlayInfo } :
  A extends ActionTypes.EGYPTV2_UPDATE_JACKPOT_LIST ? { jackpotDatas: JackpotData[] } :
  A extends ActionTypes.EGYPTV2_UPDATE_JACKPOT_AMOUNT ? { jackpotTotalAmount: number } :
  never;

export const initGameStore = reduxAct.createAction(ActionTypes.EGYPTV2_INIT_GAME_STORE,
  (): ActionPayLoad<ActionTypes.EGYPTV2_INIT_GAME_STORE> => {
    return { initState }
  })
export const changeGame = reduxAct.createAction(ActionTypes.EGYPTV2_CHANGE_GAME,
  (gameTypeInfo: GameTypeInfo): ActionPayLoad<ActionTypes.EGYPTV2_CHANGE_GAME> => {
    return { gameTypeInfo }
  })
export const setBetDropDownList = reduxAct.createAction(ActionTypes.EGYPTV2_BET_DROP_DOWN_LIST,
  (bool: boolean): ActionPayLoad<ActionTypes.EGYPTV2_BET_DROP_DOWN_LIST> => {
    return { bool }
  })
export const setAutoLauncherInfo = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO,
  (autoLauncherInfo: AutoLauncherInfo): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_AUTO_LAUNCHER_INFO> => {
    return { autoLauncherInfo }
  })
export const updatePositionId = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_POSITION_ID,
  (positionId: number): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_POSITION_ID> => {
    return { positionId }
  })
export const updateWinloss = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_WINLOSS,
  (winloss: number): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_WINLOSS> => {
    return { winloss }
  })
/**更新余额 */
export const updateGold = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_GOLD> => {
    return { gold }
  })
export const updateDialogInfo = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_DIALOGINFO,
  (dialogInfo: DialogInfo): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_DIALOGINFO> => {
    return { dialogInfo }
  })
export const updateSubGameAnimationPlayInfo = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO,
  (subGameAnimationPlayInfo: SubGameAnimationPlayInfo): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO> => {
    return { subGameAnimationPlayInfo }
  })
export const updateJackpotDatas = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_JACKPOT_LIST,
  (jackpotDatas: JackpotData[]): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_JACKPOT_LIST> => {
    return { jackpotDatas }
  })
export const updateJackpotAmount = reduxAct.createAction(ActionTypes.EGYPTV2_UPDATE_JACKPOT_AMOUNT,
  (jackpotTotalAmount: number): ActionPayLoad<ActionTypes.EGYPTV2_UPDATE_JACKPOT_AMOUNT> => {
    return { jackpotTotalAmount }
  })