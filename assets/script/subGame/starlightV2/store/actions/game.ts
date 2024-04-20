import { default as reduxAct } from 'redux-act'
import { AutoLauncherInfo, AutoLauncherType, DialogInfo, DirectionType, GameModeType, GameType, GameTypeInfo, JackpotData, PlayAnimationData, SubGameAnimationPlayInfo, WinIconData } from '../../type';
import config from '../../config';


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
  /** 小游戏的总输赢 */
  subGameWinloss: number,
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
  /**中奖的图标数据 */
  winIconDataItem: WinIconData,
  /**播放雷神动画 */
  playThorAnimation: PlayAnimationData
  /**播放中奖倍数动画 */
  playWinOddsAnimation: PlayAnimationData
  /**下注金额 */
  betAmount: number,
  /**游戏模式 */
  gameModeType: GameModeType,
  /**免费游戏倍数 */
  freeGameOdds: number,
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
  subGameWinloss: 0,
  gold: 0,
  dialogInfo: null,
  subGameAnimationPlayInfo: null,
  jackpotDatas: [],
  jackpotTotalAmount: 0,
  winIconDataItem: null,
  playThorAnimation: null,
  playWinOddsAnimation: null,
  betAmount: config.betAmount,
  gameModeType: GameModeType.normal,
  freeGameOdds: 0,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  STARLIGHTV2_INIT_GAME_STORE = 'STARLIGHTV2_INIT_GAME_STORE',
  STARLIGHTV2_CHANGE_GAME = 'STARLIGHTV2_CHANGE_GAME',
  STARLIGHTV2_BET_DROP_DOWN_LIST = 'STARLIGHTV2_BET_DROP_DOWN_LIST',
  STARLIGHTV2_UPDATE_AUTO_LAUNCHER_INFO = 'STARLIGHTV2_UPDATE_AUTO_LAUNCHER_INFO',
  STARLIGHTV2_UPDATE_POSITION_ID = 'STARLIGHTV2_UPDATE_POSITION_ID',
  STARLIGHTV2_UPDATE_WINLOSS = 'STARLIGHTV2_UPDATE_WINLOSS',
  STARLIGHTV2_UPDATE_SUB_GAME_WINLOSS = 'STARLIGHTV2_UPDATE_SUB_GAME_WINLOSS',
  STARLIGHTV2_UPDATE_GOLD = 'STARLIGHTV2_UPDATE_GOLD',
  STARLIGHTV2_UPDATE_DIALOGINFO = 'STARLIGHTV2_UPDATE_DIALOGINFO',
  STARLIGHTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO = 'STARLIGHTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO',
  STARLIGHTV2_UPDATE_JACKPOT_LIST = 'STARLIGHTV2_UPDATE_JACKPOT_LIST',
  STARLIGHTV2_UPDATE_JACKPOT_AMOUNT = 'STARLIGHTV2_UPDATE_JACKPOT_AMOUNT',
  STARLIGHTV2_UPDATE_WIN_ICON_DATA = 'STARLIGHTV2_UPDATE_WIN_ICON_DATA',
  STARLIGHTV2_PLAY_THOR_ANIMATION = 'STARLIGHTV2_PLAY_THOR_ANIMATION',
  STARLIGHTV2_PLAY_WIN_ODDS_ANIMATION = 'STARLIGHTV2_PLAY_WIN_ODDS_ANIMATION',
  STARLIGHTV2_UPDATE_GAME_MODE = 'STARLIGHTV2_UPDATE_GAME_MODE',
  STARLIGHTV2_UPDATE_FREE_GAME_ODDS = 'STARLIGHTV2_UPDATE_FREE_GAME_ODDS',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.STARLIGHTV2_INIT_GAME_STORE ? { initState: InitStateType } :
  A extends ActionTypes.STARLIGHTV2_CHANGE_GAME ? { gameTypeInfo: GameTypeInfo } :
  A extends ActionTypes.STARLIGHTV2_BET_DROP_DOWN_LIST ? { bool: boolean } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_AUTO_LAUNCHER_INFO ? { autoLauncherInfo: AutoLauncherInfo } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_POSITION_ID ? { positionId: number } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_WINLOSS ? { winloss: number } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_SUB_GAME_WINLOSS ? { subGameWinloss: number } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_GOLD ? { gold: number } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_DIALOGINFO ? { dialogInfo: DialogInfo } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO ? { subGameAnimationPlayInfo: SubGameAnimationPlayInfo } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_LIST ? { jackpotDatas: JackpotData[] } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_AMOUNT ? { jackpotTotalAmount: number } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_WIN_ICON_DATA ? { winIconDataItem: WinIconData } :
  A extends ActionTypes.STARLIGHTV2_PLAY_THOR_ANIMATION ? { playThorAnimation: PlayAnimationData } :
  A extends ActionTypes.STARLIGHTV2_PLAY_WIN_ODDS_ANIMATION ? { playWinOddsAnimation: PlayAnimationData } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_GAME_MODE ? { gameModeType: GameModeType } :
  A extends ActionTypes.STARLIGHTV2_UPDATE_FREE_GAME_ODDS ? { freeGameOdds: number } :
  never;

export const initGameStore = reduxAct.createAction(ActionTypes.STARLIGHTV2_INIT_GAME_STORE,
  (): ActionPayLoad<ActionTypes.STARLIGHTV2_INIT_GAME_STORE> => {
    return { initState }
  })
export const changeGame = reduxAct.createAction(ActionTypes.STARLIGHTV2_CHANGE_GAME,
  (gameTypeInfo: GameTypeInfo): ActionPayLoad<ActionTypes.STARLIGHTV2_CHANGE_GAME> => {
    return { gameTypeInfo }
  })
export const setBetDropDownList = reduxAct.createAction(ActionTypes.STARLIGHTV2_BET_DROP_DOWN_LIST,
  (bool: boolean): ActionPayLoad<ActionTypes.STARLIGHTV2_BET_DROP_DOWN_LIST> => {
    return { bool }
  })
export const setAutoLauncherInfo = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_AUTO_LAUNCHER_INFO,
  (autoLauncherInfo: AutoLauncherInfo): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_AUTO_LAUNCHER_INFO> => {
    return { autoLauncherInfo }
  })
export const updatePositionId = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_POSITION_ID,
  (positionId: number): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_POSITION_ID> => {
    return { positionId }
  })
export const updateWinloss = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_WINLOSS,
  (winloss: number): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_WINLOSS> => {
    return { winloss }
  })
export const updateSubGameWinloss = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_SUB_GAME_WINLOSS,
  (subGameWinloss: number): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_SUB_GAME_WINLOSS> => {
    return { subGameWinloss }
  })
/**更新余额 */
export const updateGold = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_GOLD> => {
    return { gold }
  })
export const updateDialogInfo = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_DIALOGINFO,
  (dialogInfo: DialogInfo): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_DIALOGINFO> => {
    return { dialogInfo }
  })
export const updateSubGameAnimationPlayInfo = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO,
  (subGameAnimationPlayInfo: SubGameAnimationPlayInfo): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_SUBGAME_ANIMATION_PLAY_INFO> => {
    return { subGameAnimationPlayInfo }
  })
export const updateJackpotDatas = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_LIST,
  (jackpotDatas: JackpotData[]): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_LIST> => {
    return { jackpotDatas }
  })
export const updateJackpotAmount = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_AMOUNT,
  (jackpotTotalAmount: number): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_JACKPOT_AMOUNT> => {
    return { jackpotTotalAmount }
  })
export const updateWinIconDataItem = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_WIN_ICON_DATA,
  (winIconDataItem: WinIconData): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_WIN_ICON_DATA> => {
    return { winIconDataItem }
  })
export const playThorAnimation = reduxAct.createAction(ActionTypes.STARLIGHTV2_PLAY_THOR_ANIMATION,
  (playThorAnimation: PlayAnimationData): ActionPayLoad<ActionTypes.STARLIGHTV2_PLAY_THOR_ANIMATION> => {
    return { playThorAnimation }
  })
export const playWinOddsAnimation = reduxAct.createAction(ActionTypes.STARLIGHTV2_PLAY_WIN_ODDS_ANIMATION,
  (playWinOddsAnimation: PlayAnimationData): ActionPayLoad<ActionTypes.STARLIGHTV2_PLAY_WIN_ODDS_ANIMATION> => {
    return { playWinOddsAnimation }
  })
export const updateGameMode = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_GAME_MODE,
  (gameModeType: GameModeType): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_GAME_MODE> => {
    return { gameModeType }
  })
export const updateFreeGameOdds = reduxAct.createAction(ActionTypes.STARLIGHTV2_UPDATE_FREE_GAME_ODDS,
  (freeGameOdds: number): ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_FREE_GAME_ODDS> => {
    return { freeGameOdds }
  })