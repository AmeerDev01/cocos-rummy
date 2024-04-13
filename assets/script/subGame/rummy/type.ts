import config from "./config"

export enum DeskStatus {
	/**等待中 */
	WAITING,
	/**准备倒计时中 */
	COUNTDOWNING,
	/**发牌中 */
	DISTRIBUTE,
	/**摸牌中 */
	TOUCH_CARD,
	/**出牌中 */
	OUT_CARD,
	/**结算 */
	CLSOE
}

/**游戏数据 */
export type GameData = {
	/**是否是庄家 */
	isMaster: boolean
	isReady: boolean
	/**是否游戏中 */
	isGame: boolean
	/**需要跟注的金额 */
	callAmount: number,
	betAmount: number
	totalBetAmount: number
	winloss: number,
	dealCardCount: number
	/**牌值 */
	cards: number[],
}

export type Player = {
	uid: string,
	/**头像序号 */
	head: number
	nickName: string
	glodAmount: number,
	/**结算后最新的金额，临时存储 */
	balanceGoldAmount: number,
	tableId: string
	/**与后端一致 */
	chairId: number
	/**座位索引 */
	seatIndex: number
}

export type RoomInfo = {
	afee: number,
	roomId: string,
	roomName: string,
	vipLevel: number,
	maxNum: number,
	lower: number,
	upper: number,
}

export type EnterGameVo = {
	tableId: string,
	list: Array<MemberInfoVo>
}

export type MemberInfoVo = {
	memberId: string,
	nickName: string,
	gold: number,
	icon: number,
	isBanker: number,
	cacheChairId: number,
	tableId: string,
	status: number,
	betAmount: number,
	memberStatus: number,
	cards: Card[]
}

/**牌的花色值 */
export enum CardColor {
	/**黑桃 */
	SPADE = 1,
	/**红心 */
	HEART = 2,
	/**梅花 */
	CLUB = 3,
	/**方块 */
	DIAMOND = 4,
}

/**牌的点数值 */
export enum CardValue {
	J = 11,
	Q = 12,
	K = 13,
	A = 14,
	JOKER_SMALL = 15,
	JOKER_BIG = 16,
}

export type Card = {
	point: number,
	color: number,
	/**是否癞子 */
	laizi?: boolean
}

export type Countdown = {
	countdown: number,
	seatIndex: number,
	time: number
}

/**桌子信息 */
export type DeskInfo = {
	pointValue: number,
	deskNo: number,
	maxWin: number,
}

export enum BtnType {
	DROP = 1,
	SHOW = 2,
	GROUP = 3,
	DISCARD = 4,
}

/**游戏流程信息 */
export type FlowInfo = {
	/**当前状态 */
	deskStatus: DeskStatus,
	/**上一个操作的位置 */
	preIndex: number,
	/**当前操作的位置 */
	curIndex: number,
	/**操作倒计时 */
	opCountdown: number,
	params?: any[]
}

/**动作类型 */
export enum ActionType {
	/**出牌 */
	OUT,
	/**摸牌 */
	TOUCH,
	/**分组 */
	GROUP,
}

/**动作 */
export type RummyAction = {
	actionType: ActionType,
	seatIndex: number,
	params: any[],
	time: number
}

/**按钮状态 */
export type BtnStatus = {
	btnType: BtnType,
	/**是否禁用 */
	disable: boolean,
	time: number
}

/**牌堆信息 */
export type CardHeapInfo = {
	/**剩余牌数量 */
	remainCardNumber: number,
	/**出牌队列 */
	outCards: Card[],
}

export enum PromptType {
	DROP_PROMPT,
	SHOW,
}

/**构建用户 */
export const genPlayer = (memberInfo: MemberInfoVo) => {
	const player: Player = {
		uid: memberInfo.memberId,
		head: memberInfo.icon,
		nickName: memberInfo.nickName,
		glodAmount: memberInfo.gold,
		balanceGoldAmount: memberInfo.gold,
		chairId: memberInfo.cacheChairId,
		tableId: memberInfo.tableId,
		seatIndex: -1,
	}
	return player;
}