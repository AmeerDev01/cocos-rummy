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
  /** 龙是否吐火 */
  theDragonSpitsFire:{}
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
  theDragonSpitsFire:{}
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  DRAGONV2_QUIT_GAME = 'DRAGONV2_QUIT_GAME',
  DRAGONV2_CHANGE_GAME = 'DRAGONV2_CHANGE_GAME',
  DRAGONV2_BET_DROP_DOWN_LIST = 'DRAGONV2_BET_DROP_DOWN_LIST',
  DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO = 'DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO',
  DRAGONV2_UPDATE_POSITION_ID = 'DRAGONV2_UPDATE_POSITION_ID',
  DRAGONV2_UPDATE_WINLOSS = 'DRAGONV2_UPDATE_WINLOSS',
  DRAGONV2_UPDATE_GOLD = 'DRAGONV2_UPDATE_GOLD',
  DRAGONV2_UPDATE_DIALOGINFO = 'DRAGONV2_UPDATE_DIALOGINFO',
  DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO = 'DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO',
  DRAGONV2_UPDATE_JACKPOT_LIST = 'DRAGONV2_UPDATE_JACKPOT_LIST',
  DRAGONV2_UPDATE_JACKPOT_AMOUNT = 'DRAGONV2_UPDATE_JACKPOT_AMOUNT',
  DRAGONV2_UPDATE_THEDRAGONSPITSFIRE = 'DRAGONV2_UPDATE_THEDRAGONSPITSFIRE',
  DRAGONV2_RESET_STORE = 'DRAGONV2_RESET_STORE',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.DRAGONV2_QUIT_GAME ? {} :
  A extends ActionTypes.DRAGONV2_CHANGE_GAME ? { gameTypeInfo: GameTypeInfo } :
  A extends ActionTypes.DRAGONV2_BET_DROP_DOWN_LIST ? { bool: boolean } :
  A extends ActionTypes.DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO ? { autoLauncherInfo: AutoLauncherInfo } :
  A extends ActionTypes.DRAGONV2_UPDATE_POSITION_ID ? { positionId: number } :
  A extends ActionTypes.DRAGONV2_UPDATE_WINLOSS ? { winloss: number } :
  A extends ActionTypes.DRAGONV2_UPDATE_GOLD ? { gold: number } :
  A extends ActionTypes.DRAGONV2_UPDATE_DIALOGINFO ? { dialogInfo: DialogInfo } :
  A extends ActionTypes.DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO ? { subGameAnimationPlayInfo: SubGameAnimationPlayInfo } :
  A extends ActionTypes.DRAGONV2_UPDATE_JACKPOT_LIST ? { jackpotDatas: JackpotData[] } :
  A extends ActionTypes.DRAGONV2_UPDATE_JACKPOT_AMOUNT ? { jackpotTotalAmount: number } :
  A extends ActionTypes.DRAGONV2_UPDATE_THEDRAGONSPITSFIRE ? { theDragonSpitsFire: number } :
  A extends ActionTypes.DRAGONV2_RESET_STORE ?{ } :
  never;

export const quitGame = reduxAct.createAction(ActionTypes.DRAGONV2_QUIT_GAME,
  (): ActionPayLoad<ActionTypes.DRAGONV2_QUIT_GAME> => {
    return {}
  })
export const changeGame = reduxAct.createAction(ActionTypes.DRAGONV2_CHANGE_GAME,
  (gameTypeInfo: GameTypeInfo): ActionPayLoad<ActionTypes.DRAGONV2_CHANGE_GAME> => {
    return { gameTypeInfo }
  })
export const setBetDropDownList = reduxAct.createAction(ActionTypes.DRAGONV2_BET_DROP_DOWN_LIST,
  (bool: boolean): ActionPayLoad<ActionTypes.DRAGONV2_BET_DROP_DOWN_LIST> => {
    return { bool }
  })
export const setAutoLauncherInfo = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO,
  (autoLauncherInfo: AutoLauncherInfo): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_AUTO_LAUNCHER_INFO> => {
    return { autoLauncherInfo }
  })
export const updatePositionId = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_POSITION_ID,
  (positionId: number): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_POSITION_ID> => {
    return { positionId }
  })
export const updateWinloss = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_WINLOSS,
  (winloss: number): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_WINLOSS> => {
    return { winloss }
  })
/**更新余额 */
export const updateGold = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_GOLD> => {
    return { gold }
  })
export const updateDialogInfo = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_DIALOGINFO,
  (dialogInfo: DialogInfo): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_DIALOGINFO> => {
    return { dialogInfo }
  })
export const updateSubGameAnimationPlayInfo = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO,
  (subGameAnimationPlayInfo: SubGameAnimationPlayInfo): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO> => {
    return { subGameAnimationPlayInfo }
  })
export const updateJackpotDatas = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_JACKPOT_LIST,
  (jackpotDatas: JackpotData[]): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_JACKPOT_LIST> => {
    return { jackpotDatas }
  })
export const updateJackpotAmount = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_JACKPOT_AMOUNT,
  (jackpotTotalAmount: number): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_JACKPOT_AMOUNT> => {
    return { jackpotTotalAmount }
  })
export const updateChange = reduxAct.createAction(ActionTypes.DRAGONV2_UPDATE_THEDRAGONSPITSFIRE,
  (theDragonSpitsFire: any): ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_THEDRAGONSPITSFIRE> => {
    return { theDragonSpitsFire }
  })
  export const resetStore = reduxAct.createAction(ActionTypes.DRAGONV2_RESET_STORE,
    (): ActionPayLoad<ActionTypes.DRAGONV2_RESET_STORE> => {
      return { initState }
    })