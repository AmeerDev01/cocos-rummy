import { default as reduxAct } from 'redux-act';
import { BtnStatus, CardHeapInfo, FlowInfo, RummyAction, Player, RoomInfo, Card, DeskInfo, Countdown } from '../../type';


export type InitStateType = {
	roomInfos: RoomInfo[],
	gold: number,
	players: Player[],
	/**流程信息 */
	flowInfo: FlowInfo,
	/**是否显示操作按钮 */
	isShowOpBtn: boolean,
	/**是否显示切换房间按钮 */
	isShowSwitchBtn: boolean,
	/**选择的牌数量 */
	selectCardCount: number,
	/**出牌动作 */
	action: RummyAction,
	/**桌子信息 */
	deskInfo: DeskInfo,
	/**结算倒计时 */
	balanceCountdown: Countdown,
	/**弃牌需要顺势的金额 */
	dropAmount: number,
}
export const initState: InitStateType = {
	roomInfos: [],
	gold: 0,
	players: [],
	flowInfo: undefined,
	isShowOpBtn: false,
	isShowSwitchBtn: false,
	selectCardCount: 0,
	action: undefined,
	deskInfo: undefined,
	balanceCountdown: undefined,
	dropAmount: 0,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
	RUMMY_INIT_DATA = 'RUMMY_INIT_DATA',
	RUMMY_QUIT_ROOM = 'RUMMY_QUIT_ROOM',
	RUMMY_INIT_ROOM_LIST = 'RUMMY_INIT_ROOM_LIST',
	RUMMY_UPDATE_GOLD = 'RUMMY_UPDATE_GOLD',
	RUMMY_UPDATE_SEAT = 'RUMMY_UPDATE_SEAT',
	RUMMY_UPDATE_SHOW_OP_BTN = 'RUMMY_UPDATE_SHOW_OP_BTN',
	RUMMY_UPDATE_OP_BTN_STATUS = 'RUMMY_UPDATE_OP_BTN_STATUS',
	RUMMY_UPDATE_SWITCH_BTN = 'RUMMY_UPDATE_SWITCH_BTN',
	RUMMY_UPDATE_ACTION = 'RUMMY_UPDATE_ACTION',
	RUMMY_UPDATE_FLOW_INFO = 'RUMMY_UPDATE_FLOW_INFO',
	RUMMY_UPDATE_SELECT_CARD_COUNT = 'RUMMY_UPDATE_SELECT_CARD_COUNT',
	RUMMY_UPDATE_DESK_INFO = 'RUMMY_UPDATE_DESK_INFO',
	RUMMY_UPDATE_BALANCE_COUNTDOWN = 'RUMMY_UPDATE_BALANCE_COUNTDOWN',
	RUMMY_UPDATE_DROP_AMOUNT = 'RUMMY_UPDATE_DROP_AMOUNT',
	RUMMY_UPDATE_INIT_PLAYER_STATUS = 'RUMMY_UPDATE_INIT_PLAYER_STATUS',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
	A extends ActionTypes.RUMMY_INIT_ROOM_LIST ? { roomInfos: RoomInfo[] } :
	A extends ActionTypes.RUMMY_INIT_DATA ? { initState: InitStateType } :
	A extends ActionTypes.RUMMY_QUIT_ROOM ? {} :
	A extends ActionTypes.RUMMY_UPDATE_GOLD ? { gold: number } :
	A extends ActionTypes.RUMMY_UPDATE_SEAT ? { seatIndex: number, player: Player } :
	A extends ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN ? { isShowOpBtn: boolean } :
	A extends ActionTypes.RUMMY_UPDATE_SWITCH_BTN ? { isShowSwitchBtn: boolean } :
	A extends ActionTypes.RUMMY_UPDATE_OP_BTN_STATUS ? { updateOpBtnStatus: BtnStatus } :
	A extends ActionTypes.RUMMY_UPDATE_ACTION ? { action: RummyAction } :
	A extends ActionTypes.RUMMY_UPDATE_FLOW_INFO ? { flowInfo: FlowInfo } :
	A extends ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT ? { selectCardCount: number } :
	A extends ActionTypes.RUMMY_UPDATE_DESK_INFO ? { deskInfo: DeskInfo } :
	A extends ActionTypes.RUMMY_UPDATE_BALANCE_COUNTDOWN ? { balanceCountdown: Countdown } :
	A extends ActionTypes.RUMMY_UPDATE_DROP_AMOUNT ? { dropAmount: number } :
	A extends ActionTypes.RUMMY_UPDATE_INIT_PLAYER_STATUS ? { bankerId: string } :
	never;

/**初始化房间列表 */
export const initRoomInfo = reduxAct.createAction(ActionTypes.RUMMY_INIT_ROOM_LIST,
	(roomInfos: RoomInfo[]): ActionPayLoad<ActionTypes.RUMMY_INIT_ROOM_LIST> => {
		return { roomInfos }
	})
export const initData = reduxAct.createAction(ActionTypes.RUMMY_INIT_DATA,
	(): ActionPayLoad<ActionTypes.RUMMY_INIT_DATA> => {
		return { initState }
	})
export const quitRoom = reduxAct.createAction(ActionTypes.RUMMY_QUIT_ROOM,
	(): ActionPayLoad<ActionTypes.RUMMY_QUIT_ROOM> => {
		return {}
	})
export const updateGold = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_GOLD,
	(gold: number): ActionPayLoad<ActionTypes.RUMMY_UPDATE_GOLD> => {
		return { gold }
	})
export const updateSeat = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_SEAT,
	(seatIndex: number, player: Player): ActionPayLoad<ActionTypes.RUMMY_UPDATE_SEAT> => {
		return { seatIndex, player }
	})
/**是否显示操作按钮 */
export const isShowOpBtn = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN,
	(isShowOpBtn: boolean): ActionPayLoad<ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN> => {
		return { isShowOpBtn }
	})
/**是否显示切换房间按钮 */
export const setShowSwtichBtn = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_SWITCH_BTN,
	(isShowSwitchBtn: boolean): ActionPayLoad<ActionTypes.RUMMY_UPDATE_SWITCH_BTN> => {
		return { isShowSwitchBtn }
	})
/**更新操作按钮状态 */
export const updateOpBtnStatus = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_OP_BTN_STATUS,
	(updateOpBtnStatus: BtnStatus): ActionPayLoad<ActionTypes.RUMMY_UPDATE_OP_BTN_STATUS> => {
		return { updateOpBtnStatus }
	})
export const updateAction = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_ACTION,
	(action: RummyAction): ActionPayLoad<ActionTypes.RUMMY_UPDATE_ACTION> => {
		return { action: action }
	})
/**更新流程信息 */
export const updateFlowFnfo = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_FLOW_INFO,
	(flowInfo: FlowInfo): ActionPayLoad<ActionTypes.RUMMY_UPDATE_FLOW_INFO> => {
		return { flowInfo }
	})
export const updateSelectCardCount = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT,
	(selectCardCount: number): ActionPayLoad<ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT> => {
		return { selectCardCount }
	})
export const updateDeskInfo = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_DESK_INFO,
	(deskInfo: DeskInfo): ActionPayLoad<ActionTypes.RUMMY_UPDATE_DESK_INFO> => {
		return { deskInfo }
	})
/**更新结算倒计时 */
export const updateBalanceCountdown = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_BALANCE_COUNTDOWN,
	(balanceCountdown: Countdown): ActionPayLoad<ActionTypes.RUMMY_UPDATE_BALANCE_COUNTDOWN> => {
		return { balanceCountdown }
	})
/**更新弃牌金额 */
export const reduxUpdateDropAmount = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_DROP_AMOUNT,
	(dropAmount: number): ActionPayLoad<ActionTypes.RUMMY_UPDATE_DROP_AMOUNT> => {
		return { dropAmount }
	})
/**初始化用户状态 */
export const initPlayerStatus = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_INIT_PLAYER_STATUS,
	(bankerId: string): ActionPayLoad<ActionTypes.RUMMY_UPDATE_INIT_PLAYER_STATUS> => {
		return { bankerId }
	})