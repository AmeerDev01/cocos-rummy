import config from "./config"

export enum DeskStatus {
	/**等待中 */
	WAITING,
	/**准备倒计时中 */
	COUNTDOWNING,
	/**第一轮发牌中 */
	FIRST_DISTRIBUTE,
	/**第二轮发牌中 */
	SECOND_DISTRIBUTE,
	/**牌局中 */
	PLAYING,
	/**结算 */
	CLSOE
}

export enum OperationType {
	/**等待操作 */
	WAIT,
	/**弃牌 */
	GIVE_UP,
	/**过 */
	PASS,
	/**跟注 */
	CALL,
	/**加注 */
	FILL,
	/**梭哈 */
	SHOW_HAND,
}

/**游戏数据 */
export type GameData = {
	/**是否是庄家 */
	isMaster: boolean
	isReady: boolean
	/**是否游戏中 */
	isGame: boolean
	opType: OperationType
	/**需要跟注的金额 */
	callAmount: number,
	betAmount: number
	totalBetAmount: number
	winloss: number,
	dealCardCount: number
	/**牌值 */
	cards: number[],
	/**牌类型 */
	cardType: CardType,
}

export type Player = {
	uid: string,
	/**头像序号 */
	head: number
	nickName: string
	glodAmount: number,
	/**结算后最新的金额，临时存储 */
	balanceGoldAmount: number,
	isSelf: boolean
	tableId: string
	/**与后端一致 */
	chairId: number
	/**座位索引 */
	seatIndex: number
	gameData: GameData
}

export type RoomInfo = {
	afee: number,
	roomId: string,
	roomName: string,
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
	pokers: Poker[]
}

export type Poker = {
	smallNum: number,
	bigNum: number,
	cardNum: number,
}

export type QiuQiuCardVo = {
	stage: number
	pokers: Poker[],
}

export type Countdown = {
	countdown: number,
	seatIndex: number,
	time: number
}

export type CardItem = {
	upFace: number
	downFace: number
	value: number,
}

export type PushDealerVo = {
	bankerId: string,
	chairId: number,
	countdown: number,
}

export type BetInfo = {
	amount: number,
	seatIndex: number,
	time: number
}

export type BalanceInfo = {
	winloss: number,
	seatIndex: number,
	time?: number
}

export type BalancePlayerVo = {
	nickName: string,
	memberId: string,
	/**赢的金币 */
	gold: number,
	/**余额 */
	memBerGold: number,
	pokers: Poker[]
}

export type CardGroup = {
	cardItems: CardItem[],
	sum: number
}

export enum CardType {
	/**散牌 */
	DISERSE,
	/**点数 */
	QIU_POINT,
	/**球球 */
	QIUQIU,
	BIG_CARD,
	SMALL_CARD,
	TWIN_CARD,
	SAIX_CARD
}

export type NextOpVo = {
	leftTime: number,
	memberId: string,
	totalTime: number,
	completionPlayer: any
}

export type OperationVo = {
	action: number,
	betAmount: number,
	memBerInfo: MemberInfoVo,
	qiuqiuNext: NextOpVo,
}

export type ReconnectVo = {
	seconds: number,
	gameStage: number,
	newBet: number,
	pokerNum: number,
	qiuqiuMemBerInfoVo: MemberInfoVo[],
	currentPlayerAction: QiuQiuMemberReconnectVo,
	roomId: string,
	tableId: string,
}
export type QiuQiuMemberReconnectVo = {
	memberId: string,
	completion: number,
	leftTime: number,
	totalTime: number,
}

export const convertOpType = (value: number, betAmount: number = 0) => {
	if (value === 0) {
		return OperationType.WAIT;
	} else if (value === 1) {
		return betAmount > 0 ? OperationType.CALL : OperationType.PASS;
	} else if (value === 2) {
		return OperationType.FILL;
	} else if (value === 3) {
		return OperationType.GIVE_UP;
	} else if (value === 4) {
		return OperationType.SHOW_HAND;
	}
}

export const convertServerAction = (opType: OperationType) => {
	if (OperationType.CALL === opType || OperationType.PASS === opType) {
		return 1;
	} else if (OperationType.FILL === opType) {
		return 2;
	} else if (OperationType.GIVE_UP === opType) {
		return 3;
	} else if (OperationType.SHOW_HAND === opType) {
		return 4;
	}
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
		gameData: {
			isReady: memberInfo.status === 3,
			isMaster: memberInfo.isBanker === 1,
			isGame: false,
			opType: convertOpType(memberInfo.memberStatus, memberInfo.betAmount),
			betAmount: memberInfo.betAmount,
			totalBetAmount: 0,
			callAmount: 0,
			winloss: 0,
			dealCardCount: 0,
			cards: [],
			cardType: CardType.DISERSE
		},
		seatIndex: -1,
		isSelf: false,
	}
	return player;
}

export const convertPoker = (cardItem: CardItem) => {
	const poker: Poker = {
		smallNum: cardItem.upFace,
		bigNum: cardItem.downFace,
		cardNum: 0
	}
	return poker
}

/**构建牌 */
export const genCardItem = (value: number) => {
	const cardItem: CardItem = {
		upFace: 0,
		downFace: 0,
		value: value
	}
	if (value === 0) {
		cardItem.upFace = 0;
		cardItem.downFace = 0;
	} else if (value === 1) {
		cardItem.upFace = 0;
		cardItem.downFace = 1;
	} else if (value === 2) {
		cardItem.upFace = 0;
		cardItem.downFace = 2;
	} else if (value === 3) {
		cardItem.upFace = 0;
		cardItem.downFace = 3;
	} else if (value === 4) {
		cardItem.upFace = 0;
		cardItem.downFace = 4;
	} else if (value === 5) {
		cardItem.upFace = 0;
		cardItem.downFace = 5;
	} else if (value === 6) {
		cardItem.upFace = 0;
		cardItem.downFace = 6;
	} else if (value === 7) {
		cardItem.upFace = 1;
		cardItem.downFace = 1;
	} else if (value === 8) {
		cardItem.upFace = 1;
		cardItem.downFace = 2;
	} else if (value === 9) {
		cardItem.upFace = 1;
		cardItem.downFace = 3;
	} else if (value === 10) {
		cardItem.upFace = 1;
		cardItem.downFace = 4;
	} else if (value === 11) {
		cardItem.upFace = 1;
		cardItem.downFace = 5;
	} else if (value === 12) {
		cardItem.upFace = 1;
		cardItem.downFace = 6;
	} else if (value === 13) {
		cardItem.upFace = 2;
		cardItem.downFace = 2;
	} else if (value === 14) {
		cardItem.upFace = 2;
		cardItem.downFace = 3;
	} else if (value === 15) {
		cardItem.upFace = 2;
		cardItem.downFace = 4;
	} else if (value === 16) {
		cardItem.upFace = 2;
		cardItem.downFace = 5;
	} else if (value === 17) {
		cardItem.upFace = 2;
		cardItem.downFace = 6;
	} else if (value === 18) {
		cardItem.upFace = 3;
		cardItem.downFace = 3;
	} else if (value === 19) {
		cardItem.upFace = 3;
		cardItem.downFace = 4;
	} else if (value === 20) {
		cardItem.upFace = 3;
		cardItem.downFace = 5;
	} else if (value === 21) {
		cardItem.upFace = 3;
		cardItem.downFace = 6;
	} else if (value === 22) {
		cardItem.upFace = 4;
		cardItem.downFace = 4;
	} else if (value === 23) {
		cardItem.upFace = 4;
		cardItem.downFace = 5;
	} else if (value === 24) {
		cardItem.upFace = 4;
		cardItem.downFace = 6;
	} else if (value === 25) {
		cardItem.upFace = 5;
		cardItem.downFace = 5;
	} else if (value === 26) {
		cardItem.upFace = 5;
		cardItem.downFace = 6;
	} else if (value === 27) {
		cardItem.upFace = 6;
		cardItem.downFace = 6;
	}

	return cardItem;
}

export const convertCardValue = (smaill: number, big: number) => {
	if (smaill === 0 && big === 0) {
		return 0;
	} else if (smaill === 0 && big === 1) {
		return 1;
	} else if (smaill === 0 && big === 2) {
		return 2;
	} else if (smaill === 0 && big === 3) {
		return 3;
	} else if (smaill === 0 && big === 4) {
		return 4;
	} else if (smaill === 0 && big === 5) {
		return 5;
	} else if (smaill === 0 && big === 6) {
		return 6;
	} else if (smaill === 1 && big === 1) {
		return 7;
	} else if (smaill === 1 && big === 2) {
		return 8;
	} else if (smaill === 1 && big === 3) {
		return 9;
	} else if (smaill === 1 && big === 4) {
		return 10;
	} else if (smaill === 1 && big === 5) {
		return 11;
	} else if (smaill === 1 && big === 6) {
		return 12;
	} else if (smaill === 2 && big === 2) {
		return 13;
	} else if (smaill === 2 && big === 3) {
		return 14;
	} else if (smaill === 2 && big === 4) {
		return 15;
	} else if (smaill === 2 && big === 5) {
		return 16;
	} else if (smaill === 2 && big === 6) {
		return 17;
	} else if (smaill === 3 && big === 3) {
		return 18;
	} else if (smaill === 3 && big === 4) {
		return 19;
	} else if (smaill === 3 && big === 5) {
		return 20;
	} else if (smaill === 3 && big === 6) {
		return 21;
	} else if (smaill === 4 && big === 4) {
		return 22;
	} else if (smaill === 4 && big === 5) {
		return 23;
	} else if (smaill === 4 && big === 6) {
		return 24;
	} else if (smaill === 5 && big === 5) {
		return 25;
	} else if (smaill === 5 && big === 6) {
		return 26;
	} else if (smaill === 6 && big === 6) {
		return 27;
	}
	return -1;
}