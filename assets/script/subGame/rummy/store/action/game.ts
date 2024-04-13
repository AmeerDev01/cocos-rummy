import { default as reduxAct } from 'redux-act';
import { BtnStatus, CardHeapInfo, FlowInfo, RummyAction, Player, RoomInfo, Card, DeskInfo } from '../../type';


export type InitStateType = {
	roomInfos: RoomInfo[],
	players: Player[],
	/**流程信息 */
	flowInfo: FlowInfo,
	gold: number,
	/**是否显示操作按钮 */
	isShowOpBtn: boolean,
	/**牌堆数据 */
	cardHeapInfo: CardHeapInfo,
	/**癞子牌点数 */
	laiziPoint: number,
	/**选择的牌数量 */
	selectCardCount: number,
	/**出牌动作 */
	action: RummyAction,
	/**摸的最新的牌 */
	touchCard: Card,
	/**桌子信息 */
	deskInfo: DeskInfo,
}
export const initState: InitStateType = {
	roomInfos: [],
	players: [],
	flowInfo: undefined,
	gold: 0,
	isShowOpBtn: false,
	cardHeapInfo: undefined,
	laiziPoint: 0,
	selectCardCount: 0,
	action: undefined,
	touchCard: undefined,
	deskInfo: undefined,
}
/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
	RUMMY_INIT_DATA = 'RUMMY_INIT_DATA',
	RUMMY_QUIT_ROOM = 'RUMMY_QUIT_ROOM',
	RUMMY_INIT_ROOM_LIST = 'RUMMY_INIT_ROOM_LIST',
	RUMMY_UPDATE_GOLD = 'RUMMY_UPDATE_GOLD',
	RUMMY_JOIN_SEAT = 'RUMMY_JOIN_SEAT',
	RUMMY_UPDATE_SHOW_OP_BTN = 'RUMMY_UPDATE_SHOW_OP_BTN',
	RUMMY_UPDATE_OP_BTN_STATUS = 'RUMMY_UPDATE_OP_BTN_STATUS',
	RUMMY_UPDATE_ACTION = 'RUMMY_UPDATE_ACTION',
	RUMMY_UPDATE_FLOW_INFO = 'RUMMY_UPDATE_FLOW_INFO',
	RUMMY_UPDATE_CARD_HEAP_INFO = 'RUMMY_UPDATE_CARD_HEAP_INFO',
	RUMMY_UPDATE_LAIZI_POINT = 'RUMMY_UPDATE_LAIZI_POINT',
	RUMMY_UPDATE_SELECT_CARD_COUNT = 'RUMMY_UPDATE_SELECT_CARD_COUNT',
	RUMMY_UPDATE_TOUCH_CARD = 'RUMMY_UPDATE_TOUCH_CARD',
	RUMMY_UPDATE_DESK_INFO = 'RUMMY_UPDATE_DESK_INFO',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
	A extends ActionTypes.RUMMY_INIT_ROOM_LIST ? { roomInfos: RoomInfo[] } :
	A extends ActionTypes.RUMMY_INIT_DATA ? { initState: InitStateType } :
	A extends ActionTypes.RUMMY_QUIT_ROOM ? {} :
	A extends ActionTypes.RUMMY_UPDATE_GOLD ? { gold: number } :
	A extends ActionTypes.RUMMY_JOIN_SEAT ? { player: Player } :
	A extends ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN ? { isShowOpBtn: boolean } :
	A extends ActionTypes.RUMMY_UPDATE_OP_BTN_STATUS ? { updateOpBtnStatus: BtnStatus } :
	A extends ActionTypes.RUMMY_UPDATE_ACTION ? { action: RummyAction } :
	A extends ActionTypes.RUMMY_UPDATE_FLOW_INFO ? { flowInfo: FlowInfo } :
	A extends ActionTypes.RUMMY_UPDATE_CARD_HEAP_INFO ? { cardHeapInfo: CardHeapInfo } :
	A extends ActionTypes.RUMMY_UPDATE_LAIZI_POINT ? { laiziPoint: number } :
	A extends ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT ? { selectCardCount: number } :
	A extends ActionTypes.RUMMY_UPDATE_TOUCH_CARD ? { touchCard: Card } :
	A extends ActionTypes.RUMMY_UPDATE_DESK_INFO ? { deskInfo: DeskInfo } :
	never;

/**初始化房间列表 */
export const initRoomInfo = reduxAct.createAction(ActionTypes.RUMMY_INIT_ROOM_LIST,
	(roomInfos: RoomInfo[]): ActionPayLoad<ActionTypes.RUMMY_INIT_ROOM_LIST> => {
		return { roomInfos }
	})
export const initData = reduxAct.createAction(ActionTypes.RUMMY_INIT_DATA,
	(initState: InitStateType): ActionPayLoad<ActionTypes.RUMMY_INIT_DATA> => {
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
export const joinSeat = reduxAct.createAction(ActionTypes.RUMMY_JOIN_SEAT,
	(player: Player): ActionPayLoad<ActionTypes.RUMMY_JOIN_SEAT> => {
		return { player }
	})
/**是否显示操作按钮 */
export const isShowOpBtn = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN,
	(isShowOpBtn: boolean): ActionPayLoad<ActionTypes.RUMMY_UPDATE_SHOW_OP_BTN> => {
		return { isShowOpBtn }
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
/**更新牌堆信息 */
export const updateCardHeapInfo = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_CARD_HEAP_INFO,
	(cardHeapInfo: CardHeapInfo): ActionPayLoad<ActionTypes.RUMMY_UPDATE_CARD_HEAP_INFO> => {
		return { cardHeapInfo }
	})
export const updateLaiziPoint = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_LAIZI_POINT,
	(laiziPoint: number): ActionPayLoad<ActionTypes.RUMMY_UPDATE_LAIZI_POINT> => {
		return { laiziPoint }
	})
export const updateSelectCardCount = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT,
	(selectCardCount: number): ActionPayLoad<ActionTypes.RUMMY_UPDATE_SELECT_CARD_COUNT> => {
		return { selectCardCount }
	})
/**更新摸的一张牌 */
export const updateTouchCard = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_TOUCH_CARD,
	(touchCard: Card): ActionPayLoad<ActionTypes.RUMMY_UPDATE_TOUCH_CARD> => {
		return { touchCard }
	})
export const updateDeskInfo = reduxAct.createAction(ActionTypes.RUMMY_UPDATE_DESK_INFO,
	(deskInfo: DeskInfo): ActionPayLoad<ActionTypes.RUMMY_UPDATE_DESK_INFO> => {
		return { deskInfo }
	})