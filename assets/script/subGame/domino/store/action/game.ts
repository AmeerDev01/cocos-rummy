import { default as reduxAct } from 'redux-act'
import { BalancePlayer, CardItem, Countdown, DeskStatus, Player, PlayerGameData, PlayerSatus, SeatPosition, WinlossType } from '../../type'


export type InitStateType = {
  statue: DeskStatus
  /**玩家，0号为自己，顺序隐射为顺时针 */
  playerMap: Player[]
  /**还未显示的牌点 */
  noShowCardNumber: number[]
  /**已经在桌面打出的牌组 */
  outCardItem: CardItem[]
  /**左边出牌 */
  leftOutCardItem: CardItem[],
  /**右边出牌 */
  rightOutCardItem: CardItem[],
  /**最新出的牌 */
  newCardItem: CardItem,
  /**上一个激活的用户 */
  lastActiveSeatIndex: number
  /**当前正激活等待的用户 */
  currActiveSeatIndex: number,
  /**出牌倒计时 */
  outCountdown: Countdown,
  /**准备出的牌 */
  intendOutCard: CardItem,
  /**退出房间动作 */
  quitRoomAction: number,
  /**准备倒计时 */
  readyCountdown: Countdown,
  /**余额 */
  gold: number,
  /**结算倍数 */
  balanceOdds: number,
}
export const initState: InitStateType = {
  statue: DeskStatus.WAITING,
  playerMap: [null, null, null, null],
  noShowCardNumber: [0, 0, 0, 0, 0, 0, 0],
  outCardItem: [],
  leftOutCardItem: [],
  rightOutCardItem: [],
  newCardItem: null,
  lastActiveSeatIndex: -1,
  currActiveSeatIndex: -1,
  outCountdown: null,
  intendOutCard: null,
  quitRoomAction: 0,
  readyCountdown: null,
  gold: 0,
  balanceOdds: 0,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  DOMINO_INIT_SELF_SEAT = 'DOMINO_INIT_SELF_SEAT',
  DOMINO_JOIN_SEAT = 'DOMINO_JOIN_SEAT',
  DOMINO_CHANGE_DESK_STATUS = 'DOMINO_CHANGE_DESK_STATUS',
  DOMINO_UPDATE_PLAYER_GAME_DATA = 'DOMINO_UPDATE_PLAYER_GAME_DATA',
  DOMINO_UPDATE_NO_SHOW_CARD = 'DOMINO_UPDATE_NO_SHOW_CARD',
  DOMINO_SHOW_OUT_CARD = "DOMINO_SHOW_OUT_CARD",
  DOMINO_GET_CARD = "DOMINO_GET_CARD",
  DOMINO_QUIT_SEAT = "DOMINO_QUIT_SEAT",
  DOMINO_DEAL = "DOMINO_DEAL",
  /**切换出牌用户 */
  DOMINO_CHANGE_OUT_CARD_PLAYER = "DOMINO_CHANGE_OUT_CARD_PLAYER",
  /**退出游戏 */
  DOMINO_QUIT_GAME = "DOMINO_QUIT_GAME",
  /**退出房间 */
  DOMINO_CLEAR_ROOM_DATA = "DOMINO_CLEAR_ROOM_DATA",
  /**出牌倒计时 */
  DOMINO_OUT_COUTNDOWN = "DOMINO_OUT_COUTNDOWN",
  /**设置桌面轮廓 */
  DOMINO_SET_DESK_CARD_OUTLINE = "DOMINO_SET_DESK_CARD_OUTLINE",
  /**退出房间 */
  DOMINO_QUIT_ROOM = "DOMINO_QUIT_ROOM",
  /**游戏中的输赢 */
  DOMINO_GAME_IN_WINLOSS = "DOMINO_GAME_IN_WINLOSS",
  /**更新用户缺点 */
  DOMINO_UPDATE_LEWAT = "DOMINO_UPDATE_LEWAT",
  /**结算 */
  DOMINO_BALANCE = "DOMINO_BALANCE",
  /**修改余额 */
  DOMINO_UPDATE_GOLD = "DOMINO_UPDATE_GOLD",
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.DOMINO_INIT_SELF_SEAT ? { player: Player } :
  A extends ActionTypes.DOMINO_JOIN_SEAT ? { seatPostion: SeatPosition, player: Player } :
  A extends ActionTypes.DOMINO_CHANGE_DESK_STATUS ? { status: DeskStatus, countdown: Countdown } :
  A extends ActionTypes.DOMINO_UPDATE_PLAYER_GAME_DATA ? { palyerId: string, playGame: PlayerGameData } :
  A extends ActionTypes.DOMINO_UPDATE_NO_SHOW_CARD ? { noShowCardNumber: number[] } :
  A extends ActionTypes.DOMINO_SHOW_OUT_CARD ? { showOutCard: CardItem } :
  A extends ActionTypes.DOMINO_GET_CARD ? { playerId: string, card?: CardItem } :
  A extends ActionTypes.DOMINO_GET_CARD ? { playerId: string } :
  A extends ActionTypes.DOMINO_DEAL ? { cardItems: CardItem[] } :
  A extends ActionTypes.DOMINO_CHANGE_OUT_CARD_PLAYER ? { seatIndex: number } :
  A extends ActionTypes.DOMINO_OUT_COUTNDOWN ? { outCountdown: Countdown } :
  A extends ActionTypes.DOMINO_CLEAR_ROOM_DATA ? {} :
  A extends ActionTypes.DOMINO_SET_DESK_CARD_OUTLINE ? { intendOutCard: CardItem } :
  A extends ActionTypes.DOMINO_QUIT_ROOM ? {} :
  A extends ActionTypes.DOMINO_GAME_IN_WINLOSS ? { winlossType: WinlossType } :
  A extends ActionTypes.DOMINO_QUIT_SEAT ? { playerId: string } :
  A extends ActionTypes.DOMINO_UPDATE_LEWAT ? { playerId: string, lewatPokers: number[] } :
  A extends ActionTypes.DOMINO_BALANCE ? { balances: BalancePlayer[] } :
  A extends ActionTypes.DOMINO_UPDATE_GOLD ? { gold: number } :
  never;

/**初始化玩家座位 */
export const initSelfSeat = reduxAct.createAction(ActionTypes.DOMINO_INIT_SELF_SEAT,
  (player: Player): ActionPayLoad<ActionTypes.DOMINO_INIT_SELF_SEAT> => {
    return { player }
  })
/**其他对手入座 */
export const joinSeat = reduxAct.createAction(ActionTypes.DOMINO_JOIN_SEAT,
  (seatPostion: SeatPosition, player: Player): ActionPayLoad<ActionTypes.DOMINO_JOIN_SEAT> => {
    return { seatPostion, player }
  })
/**改变玩家准备状态 */
export const changePlayerStatus = reduxAct.createAction(ActionTypes.DOMINO_UPDATE_PLAYER_GAME_DATA,
  (palyerId: string, playGame: PlayerGameData): ActionPayLoad<ActionTypes.DOMINO_UPDATE_PLAYER_GAME_DATA> => {
    return { palyerId, playGame }
  })
/**改变牌桌状态 */
export const changeDeskStatus = reduxAct.createAction(ActionTypes.DOMINO_CHANGE_DESK_STATUS,
  (status: DeskStatus, countdown: Countdown): ActionPayLoad<ActionTypes.DOMINO_CHANGE_DESK_STATUS> => {
    return { status, countdown }
  })
/**刷新未显示牌的记录 */
export const updateNoShowCardNumber = reduxAct.createAction(ActionTypes.DOMINO_UPDATE_NO_SHOW_CARD,
  (noShowCardNumber: number[]): ActionPayLoad<ActionTypes.DOMINO_UPDATE_NO_SHOW_CARD> => {
    return { noShowCardNumber }
  })
/**出牌 */
export const showOutCard = reduxAct.createAction(ActionTypes.DOMINO_SHOW_OUT_CARD,
  (showOutCard: CardItem): ActionPayLoad<ActionTypes.DOMINO_SHOW_OUT_CARD> => {
    return { showOutCard }
  })
/**获取牌型 */
export const getCard = reduxAct.createAction(ActionTypes.DOMINO_GET_CARD,
  (playerId: string, card?: CardItem): ActionPayLoad<ActionTypes.DOMINO_GET_CARD> => {
    return { playerId, card }
  })
/**发牌 */
export const deal = reduxAct.createAction(ActionTypes.DOMINO_DEAL,
  (cardItems: CardItem[]): ActionPayLoad<ActionTypes.DOMINO_DEAL> => {
    return { cardItems }
  })
/**切换出牌用户 */
export const changeOutCardPlayer = reduxAct.createAction(ActionTypes.DOMINO_CHANGE_OUT_CARD_PLAYER,
  (seatIndex: number): ActionPayLoad<ActionTypes.DOMINO_CHANGE_OUT_CARD_PLAYER> => {
    return { seatIndex }
  })
/**切换出牌用户 */
export const outCountdown = reduxAct.createAction(ActionTypes.DOMINO_OUT_COUTNDOWN,
  (outCountdown: Countdown): ActionPayLoad<ActionTypes.DOMINO_OUT_COUTNDOWN> => {
    return { outCountdown }
  })
export const clearRoomData = reduxAct.createAction(ActionTypes.DOMINO_CLEAR_ROOM_DATA,
  (): ActionPayLoad<ActionTypes.DOMINO_CLEAR_ROOM_DATA> => {
    return {}
  })
export const quitRoom = reduxAct.createAction(ActionTypes.DOMINO_QUIT_ROOM,
  (): ActionPayLoad<ActionTypes.DOMINO_QUIT_ROOM> => {
    return {}
  })
export const setDeskCardOutline = reduxAct.createAction(ActionTypes.DOMINO_SET_DESK_CARD_OUTLINE,
  (intendOutCard: CardItem): ActionPayLoad<ActionTypes.DOMINO_SET_DESK_CARD_OUTLINE> => {
    return { intendOutCard }
  })
export const setWinlossType = reduxAct.createAction(ActionTypes.DOMINO_GAME_IN_WINLOSS,
  (winlossType: WinlossType): ActionPayLoad<ActionTypes.DOMINO_GAME_IN_WINLOSS> => {
    return { winlossType }
  })
export const quitSeat = reduxAct.createAction(ActionTypes.DOMINO_QUIT_SEAT,
  (playerId: string): ActionPayLoad<ActionTypes.DOMINO_QUIT_SEAT> => {
    return { playerId }
  })
export const updatePlayerLewat = reduxAct.createAction(ActionTypes.DOMINO_UPDATE_LEWAT,
  (playerId: string, lewatPokers: number[]): ActionPayLoad<ActionTypes.DOMINO_UPDATE_LEWAT> => {
    return { playerId, lewatPokers }
  })
export const sendBalance = reduxAct.createAction(ActionTypes.DOMINO_BALANCE,
  (balances: BalancePlayer[]): ActionPayLoad<ActionTypes.DOMINO_BALANCE> => {
    return { balances }
  })
export const updateGold = reduxAct.createAction(ActionTypes.DOMINO_UPDATE_GOLD,
  (gold: number): ActionPayLoad<ActionTypes.DOMINO_UPDATE_GOLD> => {
    return { gold }
  })