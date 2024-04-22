import { Node } from "cc"
import config from "./config"
import { equalUid } from "./rummyTool"

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
	/**确认阶段 */
	CONFIRM,
	/**等待结算 */
	WAIT_BALANCE,
	/**结算 */
	BALANCE
}

/**玩家操作状态 */
export enum PlayerStatus {
	NONE = 0,
	TOUCH_COUTNDOWN = 1,
	CONFIRM_COUNTDOWN = 2,
	DROP = 3,
	BALANCE = 4,
}

export type Player = {
	uid: string,
	/**头像序号 */
	head: number
	nickName: string
	glodAmount: number,
	/**结算后最新的金额，临时存储 */
	balanceGoldAmount: number,
	/**与后端一致 */
	chairId: number
	/**座位索引 */
	seatIndex: number,
	/**输赢 */
	winloss: number,
	/**是否游戏中 */
	isGame: boolean,
	/**是否赢 */
	isWin: boolean,
	/**是否自己 */
	isSelf: boolean,
	/**是否庄家 */
	isBanker: boolean,
	/**点数 */
	point: number,
	/**状态 */
	status: number,
	/**投降时的金额 */
	surrenderGold: number,
	/**分数 */
	fraction: number,
}

export type RoomInfo = {
	afee: number,
	/**底注 */
	bet: number,
	id: string,
	name: string,
	vip: number,
	maxNum: number,
	/**在线人数 */
	memberCount: number,
	lower: number,
	upper: number,
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
	A = 1,
	JOKER_SMALL = 14,
	JOKER_BIG = 15,
}

export type Card = {
	/**后端枚举名称 */
	name: string,
	points: number,
	color: number,
	num?: number,
	/**是否癞子 */
	laizi?: boolean
	wild?: boolean
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

/**牌分组 */
export type CardGroup = {
	/**牌组类型 */
	cardGroupType: CardGroupType,
}

/**牌堆信息 */
export type CardHeapInfo = {
	/**剩余牌数量 */
	remainCardNumber: number,
	/**出牌队列 */
	outCards: Card[],
}

/**提示框类型 */
export enum PromptType {
	DROP_PROMPT,
	SHOW_CONFIRM,
	INVALID_SHOW,
}

/**牌组类型 */
export enum CardGroupType {
	/**无 */
	NOT,
	/**全是癞子 */
	ALL_LAIZI,
	/**炸弹 */
	BOMB,
	/**有癞子的顺子 */
	STRAIGHT,
	/**无癞子的顺子 */
	PURE_STRAIGHT,
}

/**组信息 */
export type GroupInfo = {
	uuid: string,
	groups: Node,
	groupName: string,
	cardGroupType: CardGroupType,
	groupType: GroupType,
	point: number,
	cards?: Card[],
}

/**组类型 */
export enum GroupType {
	/**无 */
	NOT = 0,
	/**假组 */
	FAKE = 1,
	/**真组 */
	PURE = 2,
}

export type LoginVo = {
	memberId: string,
	gold: number,
	rooms: RoomInfo[],
	/**玩家正在游戏的房间 */
	indexRoom: string,
}

export type MemberInfoVo = {
	memberId: string,
	nickName: string,
	/**玩家余额 */
	gold: number,
	/**头像下标 */
	avatarIndex: number,
	isBanker: number,
	tableNum: number,
	/**玩家状态[0投降  1正常  2听牌] */
	status: number,
	/**投降时的金额 */
	surrenderGold: number,
	fraction: number,
	drop: boolean,
	show: boolean,
}

export type JoinRoomVo = {
	/**玩家分数 */
	fraction: number,
	/**玩家信息 */
	rummyMemberInfo: MemberInfoVo[],
	/**对局状态 【0 等待中  1游戏中 2结算】 */
	roomStatus: number,
	/**当前回合玩家下表 */
	indexMember: number,
	tableId: string,
	/**当前操作人的状态 1 摸牌 2 出牌 */
	playOperate: number,
	/**剩余牌数 */
	remainingCount: number,
	/**玩家回合数 */
	roundCount: number,
	/**是否倒计时 */
	isCountdown: boolean,
	/**当前回合玩家id */
	playMemberId?: string,
	/**剩余秒数 */
	countdown?: number,
	isAgain: boolean,
	bet: number,
	bankerId: string,
	userPokers: RummyRemadeGroupCard,
	wildPoker: Card,
	rightPoker: Card,
	/**房间累计输的 */
	dropOrShowGold: number,
}

export type RummyRemadeGroupCard = {
	/**扑克组 */
	userPoker: Card[],
	/**牌组 */
	cardGroup: RummyUserPokerVo[],
	/**本次获取的牌 */
	points: number,
	/**是否是胜者牌 */
	win: boolean,
}

export type RummyUserPokerVo = {
	poker: Card[],
	num: number,
	cardGroupType: CardGroupType,
	groupType: GroupType,
}

/**发牌 */
export type DealVo = {
	fraction: number,
	/**玩家手牌 */
	userPokers: RummyRemadeGroupCard,
	/**对局状态 【0 等待中  1游戏中 2结算】 */
	status: number,
	/**癞子牌 */
	wildPoker: Card,
	rightPoker: Card,
	/**庄家id */
	bankerId: string,
	/**当前回合玩家id */
	playerMemberId: string,
	/**下一次操作的玩家 */
	nextMemberId: string,
	/**剩余秒数 */
	countdown: number,
	/**弃牌组 */
	discard: string[],
	/**当前操作。 1 摸牌 2 出牌 3禁止 */
	operation: number,
	/**剩余牌数 */
	remainingCount: number,
}

/**摸牌 */
export type TouchCardVo = {
	/**当前回合玩家id */
	memberId: string,
	/**前一张明牌 */
	previousPoker: Card,
	/**玩家摸的牌 */
	drawPoker: Card,
	/**对局状态 【0 等待中  1游戏中 2结算】 */
	status: number,
	/**当前操作人的状态 1 摸牌 2 出牌 */
	operation: number,
	/**当前操作类型 1摸牌区，2弃牌区 */
	type: number,
	/**剩余牌数 */
	remainingCount: number,
	/**玩家牌数组 */
	userPokers: RummyRemadeGroupCard,
	prohibit: boolean
}

/**出牌 */
export type OutCardVo = {
	/**当前回合玩家id */
	playerMemberId: string,
	/**下一次操作的玩家 */
	nextMemberId: string,
	/**玩家出牌 */
	playPoker: Card,
	/**剩余秒数 */
	countdown: number,
	win: boolean,
	show: boolean,
	roomStatus: number,
}

/**通知摸牌 */
export type NotifyTouchVo = {
	/**当前回合玩家下表 */
	indexMember: number,
	/**当前回合玩家id */
	indexMemberId: string,
	/**对局状态 【0 等待中  1游戏中 2结算】 */
	status: number,
	/**剩余秒数 */
	seconds: number,
}
/**投降结构 */
export type DropVo = {
	/**对局状态 【0 等待中  1游戏中 2结算】 */
	status: number,
	/**当前回合玩家下表 */
	indexMember: number,
	/**当前回合玩家id */
	indexMemberId: string,
	tableId: string,
	/**剩余秒数 */
	seconds: number,
	/**当前操作人的状态 1 摸牌 2 出牌 */
	operation: number,
	/**投降金额 */
	surrenderGold: number,
	/**玩家信息 */
	userInfos: MemberInfoVo[],
}
/**提前结算结构 */
export type ShowVo = {
	/**对局状态 【0 等待中  1游戏中 2结算】 */
	status: number,
	/**当前回合玩家下表 */
	indexMember: number,
	/**当前回合玩家id */
	indexMemberId: string,
	tableId: string,
	/**剩余秒数 */
	seconds: number,
	/**当前操作人的状态 1 摸牌 2 出牌 */
	operation: number,
}
/**确认消息 */
export type ConfirmVo = {
	/**分数 */
	score: number,
	/**确认消息的玩家id */
	memberId: string,
	/**下一次操作的玩家 */
	nextMemberId: string,
	gold: number,
	/**1：赢家， 2：输家 */
	type: number,
	/**是否投降 */
	drop: boolean,
	show: boolean,
	/**剩余秒数 */
	countdown: number,
	/**自己余额 */
	balanceGold: number
}

export type BalanceVo = {
	/**剩余秒数 */
	countdown: number,
	rummyMemberSettlements: BalanceInfo[],
}
/**更新数据 */
export type UpdateDataVo = {
	/**对局状态 【0 等待中  1游戏中 2结算】 */
	status: number,
	/**当前回合玩家下表 */
	indexMember: number,
	/**当前回合玩家id */
	indexMemberId: string,
	tableId: string,
	/**剩余秒数 */
	seconds: number,
	/**当前操作人的状态 1 摸牌 2 出牌 */
	operation: number,
	/**玩家信息 */
	userInfos: MemberInfoVo[],
}

/**结算信息 */
export type BalanceInfo = {
	memberId: string,
	avatarIndex: number,
	nickName: string,
	score: number,
	type: number,
	gold: number,
	/**结算余额 */
	balanceGold: number,
	drop: boolean,
	/**牌组 */
	cardGroup: RummyUserPokerVo[],
}

/**构建用户 */
export const genPlayer = (memberInfo: MemberInfoVo) => {
	const player: Player = {
		uid: memberInfo.memberId,
		head: memberInfo.avatarIndex,
		nickName: memberInfo.nickName,
		glodAmount: memberInfo.gold,
		balanceGoldAmount: memberInfo.gold,
		chairId: memberInfo.tableNum,
		surrenderGold: memberInfo.surrenderGold,
		fraction: memberInfo.fraction,
		winloss: memberInfo.surrenderGold !== undefined && memberInfo.surrenderGold > 0 ? -memberInfo.surrenderGold : 0,
		status: memberInfo.drop ? PlayerStatus.DROP : memberInfo.show ? PlayerStatus.BALANCE : PlayerStatus.NONE,
		isSelf: equalUid(memberInfo.memberId, config.memberId),
		seatIndex: equalUid(memberInfo.memberId, config.memberId) ? 0 : -1,
		isGame: memberInfo.drop || memberInfo.show ? false : true,
		isBanker: false,
		isWin: false,
		point: 0,
	}
	return player;
}
