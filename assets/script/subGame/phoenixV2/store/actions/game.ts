import { default as reduxAct } from 'redux-act'
import { AutoLauncherInfo, AutoLauncherType, DialogInfo, DirectionType, GameType, GameTypeInfo, JackpotData, SmallGame, SubGameAnimationPlayInfo } from '../../type';


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
  /**选择的小游戏 */
  chooseSmallGame: SmallGame,
}
export const initState: InitStateType = {
  gameTypeInfo: {
    lastGameType: GameType.NONE,
    currGameType: GameType.NONE,
    viewGameType: GameType.NONE,
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
  chooseSmallGame: null,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  PHOENIXV2_INIT_GAME_STORE = 'PHOENIXV2_INIT_GAME_STORE',
  PHOENIXV2_CHANGE_GAME = 'PHOENIXV2_CHANGE_GAME',
  PHOENIXV2_BET_DROP_DOWN_LIST = 'PHOENIXV2_BET_DROP_DOWN_LIST',
  PHOENIXV2_UPDATE_AUTO_LAUNCHER_INFO = 'PHOENIXV2_UPDATE_AUTO_LAUNCHER_INFO',
  PHOENIXV2_UPDATE_POSITION_ID = 'PHOENIXV2_UPDATE_POSITION_ID',
  PHOENIXV2_UPDATE_WINLOSS = 'PHOENIXV2_UPDATE_WINLOSS',
  PHOENIXV2_UPDATE_GOLD = 'PHOENIXV2_UPDATE_GOLD',
  PHOENIXV2_UPDATE_DIALOGINFO = 'PHOENIXV2_UPDATE_DIALOGINFO',
  PHOENIXV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO = 'PHOENIXV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO',
  PHOENIXV2_UPDATE_JACKPOT_LIST = 'PHOENIXV2_UPDATE_JACKPOT_LIST',
  PHOENIXV2_UPDATE_JACKPOT_AMOUNT = 'PHOENIXV2_UPDATE_JACKPOT_AMOUNT',
  PHOENIXV2_CHOOSE_SMALL_GAME = 'PHOENIXV2_CHOOSE_SMALL_GAME',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.PHOENIXV2_INIT_GAME_STORE ? {initState: InitStateType } :
  A extends ActionTypes.PHOENIXV2_CHANGE_GAME ? { gameTypeInfo: GameTypeInfo } :
  A extends ActionTypes.PHOENIXV2_BET_DROP_DOWN_LIST ? { bool: boolean } :
  A extends ActionTypes.PHOENIXV2_UPDATE_AUTO_LAUNCHER_INFO ? { autoLauncherInfo: AutoLauncherInfo } :
  A extends ActionTypes.PHOENIXV2_UPDATE_POSITION_ID ? { positionId: number } :
  A extends ActionTypes.PHOENIXV2_UPDATE_WINLOSS ? { winloss: number } :
  A extends ActionTypes.PHOENIXV2_UPDATE_GOLD ? { gold: number } :
  A extends ActionTypes.PHOENIXV2_UPDATE_DIALOGINFO ? { dialogInfo: DialogInfo } :
  A extends ActionTypes.PHOENIXV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO ? { subGameAnimationPlayInfo: SubGameAnimationPlayInfo } :
  A extends ActionTypes.PHOENIXV2_UPDATE_JACKPOT_LIST ? { jackpotDatas: JackpotData[] } :
  A extends ActionTypes.PHOENIXV2_UPDATE_JACKPOT_AMOUNT ? { jackpotTotalAmount: number } :
  A extends ActionTypes.PHOENIXV2_CHOOSE_SMALL_GAME ? { chooseSmallGame: SmallGame } :

  never;

export const initGameStore = reduxAct.createAction(ActionTypes.PHOENIXV2_INIT_GAME_STORE,
  (): ActionPayLoad<ActionTypes.PHOENIXV2_INIT_GAME_STORE> => {
    return { initState }
  })
export const changeGame = reduxAct.createAction(ActionTypes.PHOENIXV2_CHANGE_GAME,
  (gameTypeInfo: GameTypeInfo): ActionPayLoad<ActionTypes.PHOENIXV2_CHANGE_GAME> => {
    return { gameTypeInfo }
  })
export const setBetDropDownList = reduxAct.createAction(ActionTypes.PHOENIXV2_BET_DROP_DOWN_LIST,
  (bool: boolean): ActionPayLoad<ActionTypes.PHOENIXV2_BET_DROP_DOWN_LIST> => {
    return { bool }
  })
export const setAutoLauncherInfo = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_AUTO_LAUNCHER_INFO,
  (autoLauncherInfo: AutoLauncherInfo): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_AUTO_LAUNCHER_INFO> => {
    return { autoLauncherInfo }
  })
export const updatePositionId = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_POSITION_ID,
  (positionId: number): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_POSITION_ID> => {
    return { positionId }
  })
export const updateWinloss = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_WINLOSS,
  (winloss: number): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_WINLOSS> => {
    return { winloss }
  })
/**更新余额 */
export const updateGold = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_GOLD> => {
    return { gold }
  })
export const updateDialogInfo = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_DIALOGINFO,
  (dialogInfo: DialogInfo): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_DIALOGINFO> => {
    return { dialogInfo }
  })
export const updateSubGameAnimationPlayInfo = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO,
  (subGameAnimationPlayInfo: SubGameAnimationPlayInfo): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO> => {
    return { subGameAnimationPlayInfo }
  })
export const updateJackpotDatas = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_JACKPOT_LIST,
  (jackpotDatas: JackpotData[]): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_JACKPOT_LIST> => {
    return { jackpotDatas }
  })
export const updateJackpotAmount = reduxAct.createAction(ActionTypes.PHOENIXV2_UPDATE_JACKPOT_AMOUNT,
  (jackpotTotalAmount: number): ActionPayLoad<ActionTypes.PHOENIXV2_UPDATE_JACKPOT_AMOUNT> => {
    return { jackpotTotalAmount }
  })

export const chooseSmallGame = reduxAct.createAction(ActionTypes.PHOENIXV2_CHOOSE_SMALL_GAME,
  (chooseSmallGame: SmallGame): ActionPayLoad<ActionTypes.PHOENIXV2_CHOOSE_SMALL_GAME> => {
    return { chooseSmallGame }
  })