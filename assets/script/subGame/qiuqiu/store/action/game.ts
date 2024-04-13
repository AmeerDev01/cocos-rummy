import { default as reduxAct } from 'redux-act'
import { DeskStatus, Countdown, OperationType, Player, BetInfo, BalanceInfo } from '../../type'
import config from '../../config'


export type InitStateType = {
	deskStatus: DeskStatus
	/**玩家，0号为自己，顺序隐射为顺时针 */
	playerMap: Player[]
	/**上一个激活的用户 */
	lastActiveSeatIndex: number
	/**当前正激活等待的用户 */
	currActiveSeatIndex: number,
	/**余额 */
	gold: number,
	/**操作倒计时 */
	operationCountdown: Countdown,
	/**当前最新下注 */
	betAmount: number,
	/**最高下注 */
	maxAmount: number,
	/**累计下注 */
	totalBetAmount: number,
	/**最新下注 */
	newBetInfo: BetInfo,
	/**结算信息 */
	balanceInfo: BalanceInfo,
	/**本局的结算用户的结算信息 */
	balanceInfos: BalanceInfo[],
	/**开始游戏倒计时 */
	beginGameCountdown: Countdown,
	/**已经发牌张数 */
	dealCount: number,
}
export const initState: InitStateType = {
	deskStatus: DeskStatus.WAITING,
	playerMap: new Array(config.seatNumber).fill(null),
	lastActiveSeatIndex: -1,
	currActiveSeatIndex: -1,
	gold: 0,
	operationCountdown: null,
	newBetInfo: null,
	balanceInfo: null,
	betAmount: 0,
	maxAmount: 0,
	totalBetAmount: 0,
	balanceInfos: [],
	beginGameCountdown: null,
	dealCount: 0
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
	QIUQIU_JOIN_SEAT = 'QIUQIU_JOIN_SEAT',
	QIUQIU_QUIT_SEAT = 'QIUQIU_QUIT_SEAT',
	QIUQIU_UPDATE_GOLD = 'QIUQIU_UPDATE_GOLD',
	QIUQIU_CLEAR_DATA = 'QIUQIU_CLEAR_DATA',
	QIUQIU_CHANGE_DESK_STATUS = 'QIUQIU_CHANGE_DESK_STATUS',
	QIUQIU_READY = 'QIUQIU_READY',
	QIUQIU_BET = 'QIUQIU_BET',
	QIUQIU_DEAL_ACTION = 'QIUQIU_DEAL_ACTION',
	QIUQIU_CHANGE_DEALER = 'QIUQIU_CHANGE_DEALER',
	QIUQIU_DEAL_HAND_CARD = 'QIUQIU_DEAL_HAND_CARD',
	QIUQIU_ADD_GOLD_ANMIE = 'QIUQIU_ADD_GOLD_ANMIE',
	/**存储结算信息 */
	QIUQIU_SAVE_BALANCE_INFO = 'QIUQIU_SAVE_BALANCE_INFO',
	QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD = 'QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD',
	QIUQIU_OPERATION_COUNTDOWN = 'QIUQIU_OPERATION_COUNTDOWN',
	QIUQIU_CHANGE_OPERATION_PLAYER = 'QIUQIU_CHANGE_OPERATION_PLAYER',
	QIUQIU_PLAYER_CHANGE_OP_TYPE = 'QIUQIU_PLAYER_CHANGE_OP_TYPE',
	QIUQIU_BEGIN_GAME_COUNTDOWN = 'QIUQIU_BEGIN_GAME_COUNTDOWN',
	QIUQIU_UPDATE_CALL_AMOUNT = 'QIUQIU_UPDATE_CALL_AMOUNT',
	/**保存赢家的结算信息，用于筹码结算 */
	QIUQIU_SAVE_WIN_BALANCE_INFO = 'QIUQIU_SAVE_WIN_BALANCE_INFO',
	/**重连恢复下注 */
	QIUQIU_RECONNECT_RECOVER_BET = 'QIUQIU_RECONNECT_RECOVER_BET',
	/**重连游戏数据 */
	QIUQIU_RECONNECT_GAME_DATA = 'QIUQIU_RECONNECT_GAME_DATA',
	QIUQIU_SET_PLAYER_GAME_STATUS = 'QIUQIU_SET_PLAYER_GAME_STATUS',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
	A extends ActionTypes.QIUQIU_JOIN_SEAT ? { player: Player } :
	A extends ActionTypes.QIUQIU_QUIT_SEAT ? { memberId: string } :
	A extends ActionTypes.QIUQIU_UPDATE_GOLD ? { gold: number } :
	A extends ActionTypes.QIUQIU_CLEAR_DATA ? {} :
	A extends ActionTypes.QIUQIU_CHANGE_DESK_STATUS ? { deskStatus: DeskStatus } :
	A extends ActionTypes.QIUQIU_READY ? { memberId: string } :
	A extends ActionTypes.QIUQIU_BET ? { memberId: string, betAmount: number, opType: OperationType, gold: number } :
	A extends ActionTypes.QIUQIU_DEAL_ACTION ? { seatIndex: number, dealIndex: number } :
	A extends ActionTypes.QIUQIU_CHANGE_DEALER ? { memberId: string } :
	A extends ActionTypes.QIUQIU_DEAL_HAND_CARD ? { cards: number[] } :
	A extends ActionTypes.QIUQIU_ADD_GOLD_ANMIE ? { seatIndex: number, winloss: number } :
	A extends ActionTypes.QIUQIU_SAVE_BALANCE_INFO ? { memberId: string, gold: number, winloss: number, cards: number[] } :
	A extends ActionTypes.QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD ? { memberId: string } :
	A extends ActionTypes.QIUQIU_OPERATION_COUNTDOWN ? { countdown: Countdown } :
	A extends ActionTypes.QIUQIU_CHANGE_OPERATION_PLAYER ? { memberId: string } :
	A extends ActionTypes.QIUQIU_PLAYER_CHANGE_OP_TYPE ? { memberId: string, opType: OperationType, gold: number } :
	A extends ActionTypes.QIUQIU_BEGIN_GAME_COUNTDOWN ? { countdown: Countdown } :
	A extends ActionTypes.QIUQIU_UPDATE_CALL_AMOUNT ? { memberId: string, callAmount: number } :
	A extends ActionTypes.QIUQIU_SAVE_WIN_BALANCE_INFO ? { balanceInfos: BalanceInfo[] } :
	A extends ActionTypes.QIUQIU_RECONNECT_RECOVER_BET ? { memberId: string, betAmount: number } :
	A extends ActionTypes.QIUQIU_SET_PLAYER_GAME_STATUS ? { isGame: boolean } :
	A extends ActionTypes.QIUQIU_RECONNECT_GAME_DATA ? { betAmount: number, dealCount: number } :
	never;

/**初始化其他玩家座位 */
export const joinSeat = reduxAct.createAction(ActionTypes.QIUQIU_JOIN_SEAT,
	(player: Player): ActionPayLoad<ActionTypes.QIUQIU_JOIN_SEAT> => {
		return { player }
	})
export const quitSeat = reduxAct.createAction(ActionTypes.QIUQIU_QUIT_SEAT,
	(memberId: string): ActionPayLoad<ActionTypes.QIUQIU_QUIT_SEAT> => {
		return { memberId }
	})
export const updateGold = reduxAct.createAction(ActionTypes.QIUQIU_UPDATE_GOLD,
	(gold: number): ActionPayLoad<ActionTypes.QIUQIU_UPDATE_GOLD> => {
		return { gold }
	})
export const clearRoomData = reduxAct.createAction(ActionTypes.QIUQIU_CLEAR_DATA,
	(): ActionPayLoad<ActionTypes.QIUQIU_CLEAR_DATA> => {
		return {}
	})
export const changeDeskStatus = reduxAct.createAction(ActionTypes.QIUQIU_CHANGE_DESK_STATUS,
	(deskStatus: DeskStatus): ActionPayLoad<ActionTypes.QIUQIU_CHANGE_DESK_STATUS> => {
		return { deskStatus }
	})
export const playerReady = reduxAct.createAction(ActionTypes.QIUQIU_READY,
	(memberId: string): ActionPayLoad<ActionTypes.QIUQIU_READY> => {
		return { memberId }
	})
export const playerBet = reduxAct.createAction(ActionTypes.QIUQIU_BET,
	(memberId: string, betAmount: number, opType: OperationType, gold: number): ActionPayLoad<ActionTypes.QIUQIU_BET> => {
		return { memberId, betAmount, opType, gold }
	})
/**发牌动作 */
export const dealAction = reduxAct.createAction(ActionTypes.QIUQIU_DEAL_ACTION,
	(seatIndex: number, dealIndex: number): ActionPayLoad<ActionTypes.QIUQIU_DEAL_ACTION> => {
		return { seatIndex, dealIndex }
	})
export const dealHandCard = reduxAct.createAction(ActionTypes.QIUQIU_DEAL_HAND_CARD,
	(cards: number[]): ActionPayLoad<ActionTypes.QIUQIU_DEAL_HAND_CARD> => {
		return { cards }
	})
export const changeDealer = reduxAct.createAction(ActionTypes.QIUQIU_CHANGE_DEALER,
	(memberId: string): ActionPayLoad<ActionTypes.QIUQIU_CHANGE_DEALER> => {
		return { memberId }
	})
export const addGoldAnime = reduxAct.createAction(ActionTypes.QIUQIU_ADD_GOLD_ANMIE,
	(seatIndex: number, winloss: number): ActionPayLoad<ActionTypes.QIUQIU_ADD_GOLD_ANMIE> => {
		return { seatIndex, winloss }
	})
export const saveBalanceInfo = reduxAct.createAction(ActionTypes.QIUQIU_SAVE_BALANCE_INFO,
	(memberId: string, gold: number, winloss: number, cards: number[]): ActionPayLoad<ActionTypes.QIUQIU_SAVE_BALANCE_INFO> => {
		return { memberId, gold, winloss, cards }
	})
export const syncBalanceGoldToGold = reduxAct.createAction(ActionTypes.QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD,
	(memberId: string): ActionPayLoad<ActionTypes.QIUQIU_SYNC_BALANCE_GOLD_TO_GOLD> => {
		return { memberId }
	})
export const operationCountdown = reduxAct.createAction(ActionTypes.QIUQIU_OPERATION_COUNTDOWN,
	(countdown: Countdown): ActionPayLoad<ActionTypes.QIUQIU_OPERATION_COUNTDOWN> => {
		return { countdown }
	})
export const changeOperationPlayer = reduxAct.createAction(ActionTypes.QIUQIU_CHANGE_OPERATION_PLAYER,
	(memberId: string): ActionPayLoad<ActionTypes.QIUQIU_CHANGE_OPERATION_PLAYER> => {
		return { memberId }
	})
export const playerChangeOpType = reduxAct.createAction(ActionTypes.QIUQIU_PLAYER_CHANGE_OP_TYPE,
	(memberId: string, opType: OperationType, gold: number): ActionPayLoad<ActionTypes.QIUQIU_PLAYER_CHANGE_OP_TYPE> => {
		return { memberId, opType, gold }
	})
export const beginGameCountdown = reduxAct.createAction(ActionTypes.QIUQIU_BEGIN_GAME_COUNTDOWN,
	(countdown: Countdown): ActionPayLoad<ActionTypes.QIUQIU_BEGIN_GAME_COUNTDOWN> => {
		return { countdown }
	})
export const updateCallAmount = reduxAct.createAction(ActionTypes.QIUQIU_UPDATE_CALL_AMOUNT,
	(memberId: string, callAmount: number): ActionPayLoad<ActionTypes.QIUQIU_UPDATE_CALL_AMOUNT> => {
		return { memberId, callAmount }
	})
export const saveWinBalanceInfo = reduxAct.createAction(ActionTypes.QIUQIU_SAVE_WIN_BALANCE_INFO,
	(balanceInfos: BalanceInfo[]): ActionPayLoad<ActionTypes.QIUQIU_SAVE_WIN_BALANCE_INFO> => {
		return { balanceInfos }
	})
export const reconnectRecoverBet = reduxAct.createAction(ActionTypes.QIUQIU_RECONNECT_RECOVER_BET,
	(memberId: string, betAmount: number): ActionPayLoad<ActionTypes.QIUQIU_RECONNECT_RECOVER_BET> => {
		return { memberId, betAmount }
	})
export const setPlayerGameStatus = reduxAct.createAction(ActionTypes.QIUQIU_SET_PLAYER_GAME_STATUS,
	(isGame: boolean): ActionPayLoad<ActionTypes.QIUQIU_SET_PLAYER_GAME_STATUS> => {
		return { isGame }
	})
export const reconnectGameData = reduxAct.createAction(ActionTypes.QIUQIU_RECONNECT_GAME_DATA,
	(betAmount: number, dealCount: number): ActionPayLoad<ActionTypes.QIUQIU_RECONNECT_GAME_DATA> => {
		return { betAmount, dealCount }
	})