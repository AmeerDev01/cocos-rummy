
/**牌的放置方向 */
export enum CardPosition {
  HORIZONTAL,
  VERTICAL
}

export enum SeatPosition {
  LEFT,
  TOP,
  RIGHT,
  DOWN
}

/**玩家状态 */
export enum PlayerSatus {
  /**等待 */
  WAITING,
  /**已准备 */
  READY,
  /**出牌 */
  CARD
}

/**牌桌状态 */
export enum DeskStatus {
  /**等待中 */
  WAITING,
  /**倒计时中 */
  COUNTDOWNING,
  /**发牌中 */
  DISTRIBUTE,
  /**牌局中 */
  PLAYING,
  /**结算 */
  CLSOE
}

export type RoomInfo = {
  afee: number,
  roomId: string,
  roomName: string,
  maxNum: number,
  lower: number,
  upper: number,
}

export type CardItem = {
  upFace: number
  downFace: number
  position: CardPosition,
  value: number,
  seatIndex?: number,
  /**对齐值 */
  alignValue?: number,
  /**方位 0：左 1：右 */
  azimuth?: 0 | 1 | 2,
  /**是否重连 */
  isReconnect?: boolean
}

/**玩家 */
export type Player = {
  uid: string,
  /**头像序号 */
  head: number
  nickName: string
  glodAmount: number
  gameData: PlayerGameData
  isSelf: boolean
  tableId: string
  /**与后端一致 */
  chairId: number
  /**座位索引 */
  seatIndex: number,
  winloss: number,
}

export type PlayerGameData = {
  /**状态 */
  state: PlayerSatus,
  /**是否是庄家 */
  isMaster: boolean
  /**剩余牌数量 */
  remainCardCount: number
  /**倒计时 */
  // countDownTime: number
  /**手牌组，正常情况下，只有玩家自身才有 */
  cardIList: CardItem[]
  /**跟不上的牌点数 */
  noWayCardNumber: number[]
}

export const initPlayer = () => {
  const player: Player = {
    uid: '',
    /**头像序号 */
    head: 1,
    nickName: '',
    glodAmount: 0,
    tableId: '',
    gameData: {
      state: PlayerSatus.WAITING,
      /**是否是庄家 */
      isMaster: false,
      /**剩余牌数量 */
      remainCardCount: 0,
      /**倒计时 */
      // countDownTime: number
      /**手牌组，正常情况下，只有玩家自身才有 */
      cardIList: [],
      /**跟不上的牌点数 */
      noWayCardNumber: [],
    },
    isSelf: false,
    /**与后端一致 */
    chairId: -1,
    seatIndex: -1,
    winloss: 0
  }
  return player;
}
export const initPlayerGameData = () => {
  const gameData: PlayerGameData = {
    /**状态 */
    state: PlayerSatus.WAITING,
    /**是否是庄家 */
    isMaster: false,
    /**剩余牌数量 */
    remainCardCount: 0,
    /**倒计时 */
    // countDownTime: number
    /**手牌组，正常情况下，只有玩家自身才有 */
    cardIList: [],
    /**跟不上的牌点数 */
    noWayCardNumber: []
  }
  return gameData;
}

/**出牌数据 */
export type OutCardDataSo = {
  tableId: string,
  gameId: string,
  chairId: number,
  position: number, // 1为左，2为右 3：中
  poker: number,
  memberId: string
}

/**出牌返回数据 */
export type OutCardDataVo = {
  chairId: number,
  card: number,
  position: number,
  membersCards: any,
  dominoDeductMoneyVo: DominoDeductMoneyVo,
  dominoNext: DominoNextOpVo,
  dominoMemBerInfo: MemberInfoVo
}

export type DominoDeductMoneyVo = {
  winMemberId: string,
  lossMemberId: string,
  money: number,
}

export type DominoNextOpVo = {
  totalTime: number,
  leftTime: number,
  memberId: string,
}

export type Countdown = {
  time: number,
  seatIndex: number,
  timestamp?: number
}

export type BalancePlayer = {
  icon: number,
  balance: number,
  memberId: string,
  nickName: string,
  bet: number,
  count: number,
  odds: number,
  cards: number[]
}

export type GameStateVo = {
  gameState: number,
  seconds: number
}

export type PushDealerVo = {
  villageId: string,
  totalTime: string,
}

export type WinlossType = {
  winloss: number,
  lossSeatIndex: number,
  winSeatIndex: number,
  time?: number
}

export type MemberInfoVo = {
  memberId: string,
  nickName: string,
  memberAssetGoldPieces: number,
  icon: number,
  isDealer: number,
  chairId: number,
  isLewat: number,
  tableId: string,
  pokes: number[],
  lewatPokes: number[],
  isCard: boolean,
  memberState: boolean,
}

export type CardRecordsVo = {
  memberId: string,
  card: number,
  position: number,
  isLewat: number
}

/**重连数据 */
export type ReconnectVo = {
  gameType: number,
  seconds: number,
  roomId: string,
  thisMemberId: string,
  dominoMemBerInfoVo: MemberInfoVo[],
  membersCards: any,
  lewatPokers: any,
  cardRecordsVos: CardRecordsVo[],
}

/**构建用户 */
export const genPlayer = (memberInfo: MemberInfoVo) => {
  const pokers = memberInfo.pokes ? memberInfo.pokes : [];
  const player: Player = {
    uid: memberInfo.memberId,
    head: memberInfo.icon,
    nickName: memberInfo.nickName,
    glodAmount: memberInfo.memberAssetGoldPieces,
    chairId: memberInfo.chairId,
    tableId: memberInfo.tableId,
    gameData: {
      state: memberInfo.memberState ? PlayerSatus.READY : PlayerSatus.WAITING,
      isMaster: Boolean(memberInfo.isDealer),
      remainCardCount: 0,
      cardIList: pokers.map(v => genCardItem(v)),
      noWayCardNumber: []
    },
    seatIndex: -1,
    isSelf: false,
    winloss: 0
  }
  return player;
}

/**构建牌 */
export const genCardItem = (index: number) => {
  const cardItem: CardItem = {
    upFace: 0,
    downFace: 0,
    position: CardPosition.VERTICAL,
    value: index
  }
  if (index === 0) {
    cardItem.upFace = 0;
    cardItem.downFace = 0;
  } else if (index === 1) {
    cardItem.upFace = 0;
    cardItem.downFace = 1;
  } else if (index === 2) {
    cardItem.upFace = 0;
    cardItem.downFace = 2;
  } else if (index === 3) {
    cardItem.upFace = 0;
    cardItem.downFace = 3;
  } else if (index === 4) {
    cardItem.upFace = 0;
    cardItem.downFace = 4;
  } else if (index === 5) {
    cardItem.upFace = 0;
    cardItem.downFace = 5;
  } else if (index === 6) {
    cardItem.upFace = 0;
    cardItem.downFace = 6;
  } else if (index === 7) {
    cardItem.upFace = 1;
    cardItem.downFace = 1;
  } else if (index === 8) {
    cardItem.upFace = 1;
    cardItem.downFace = 2;
  } else if (index === 9) {
    cardItem.upFace = 1;
    cardItem.downFace = 3;
  } else if (index === 10) {
    cardItem.upFace = 1;
    cardItem.downFace = 4;
  } else if (index === 11) {
    cardItem.upFace = 1;
    cardItem.downFace = 5;
  } else if (index === 12) {
    cardItem.upFace = 1;
    cardItem.downFace = 6;
  } else if (index === 13) {
    cardItem.upFace = 2;
    cardItem.downFace = 2;
  } else if (index === 14) {
    cardItem.upFace = 2;
    cardItem.downFace = 3;
  } else if (index === 15) {
    cardItem.upFace = 2;
    cardItem.downFace = 4;
  } else if (index === 16) {
    cardItem.upFace = 2;
    cardItem.downFace = 5;
  } else if (index === 17) {
    cardItem.upFace = 2;
    cardItem.downFace = 6;
  } else if (index === 18) {
    cardItem.upFace = 3;
    cardItem.downFace = 3;
  } else if (index === 19) {
    cardItem.upFace = 3;
    cardItem.downFace = 4;
  } else if (index === 20) {
    cardItem.upFace = 3;
    cardItem.downFace = 5;
  } else if (index === 21) {
    cardItem.upFace = 3;
    cardItem.downFace = 6;
  } else if (index === 22) {
    cardItem.upFace = 4;
    cardItem.downFace = 4;
  } else if (index === 23) {
    cardItem.upFace = 4;
    cardItem.downFace = 5;
  } else if (index === 24) {
    cardItem.upFace = 4;
    cardItem.downFace = 6;
  } else if (index === 25) {
    cardItem.upFace = 5;
    cardItem.downFace = 5;
  } else if (index === 26) {
    cardItem.upFace = 5;
    cardItem.downFace = 6;
  } else if (index === 27) {
    cardItem.upFace = 6;
    cardItem.downFace = 6;
  }

  return cardItem;
}

/**获得比较的牌值(与对齐值相反的值) */
export const getComposeCardValue = (cardItem: CardItem) => {
  return cardItem.alignValue === cardItem.upFace ? cardItem.downFace : cardItem.upFace;
}

/**获得与前一张牌能对齐的值 */
export const getCardAlignValue = (middleCardItem: CardItem, outCardItems: CardItem[], cardItem: CardItem) => {
  const composeCardItem = outCardItems.length ? outCardItems[outCardItems.length - 1] : middleCardItem;
  let composeCardValue = getComposeCardValue(composeCardItem);
  // 如果左边或者右边没有出牌时，同时中间的牌上下不相等时，小的朝左边，大的朝右边
  if (outCardItems.length === 0 && middleCardItem.upFace !== middleCardItem.downFace) {
    composeCardValue = getFirshCardComponseValue(cardItem, middleCardItem);
  }
  if (composeCardValue === cardItem.upFace) {
    return cardItem.upFace;
  }
  return cardItem.downFace;
}
/**
 * 获得第一张牌比较值
 * @param cardItem 
 * @param middleCardItem 
 * @returns 
 */
export const getFirshCardComponseValue = (cardItem: CardItem, middleCardItem: CardItem) => {
  // 横向的第一张牌，小的始终的对齐左边，否则相反
  return cardItem.azimuth === 0 ? middleCardItem.upFace : middleCardItem.downFace;
}

/**
 * 计算牌是放在左边还是右边
 * @param cardItem 出的牌
 * @param middleCardItem 最中间的牌
 * @param leftCardItems 左边出的牌堆
 * @param rightCardItems 右边出的牌堆
 */
export const calCardAzimuth = (cardItem: CardItem, middleCardItem: CardItem, leftCardItems: CardItem[], rightCardItems: CardItem[]) => {
  if (cardItem.azimuth === 0 && isComponseSuccess(cardItem, middleCardItem, leftCardItems)) {
    cardItem.azimuth = 1;
  } else if (cardItem.azimuth === 1 && isComponseSuccess(cardItem, middleCardItem, rightCardItems)) {
    cardItem.azimuth = 0;
  }
}

/**
 * 是否比较成功
 * @param cardItem 
 * @param middleCardItem 
 * @param outCardItems 
 * @returns 
 */
const isComponseSuccess = (cardItem: CardItem, middleCardItem: CardItem, outCardItems: CardItem[]) => {
  let composeCardValue;
  if (outCardItems.length) {
    composeCardValue = getComposeCardValue(outCardItems[outCardItems.length - 1])
  } else {
    composeCardValue = getFirshCardComponseValue(cardItem, middleCardItem);
  }
  return composeCardValue !== cardItem.upFace && composeCardValue !== cardItem.downFace;
}

export const convertAzimuth = (position: number): 0 | 1 | 2 => {
  if (position === 1) {
    return 0;
  } else if (position === 2) {
    return 1;
  } else if (position === 3) {
    return 2;
  }
  return 0;
}

export const getRoomUpper = (roomInfo: RoomInfo)=> {
  return roomInfo.upper > 0 ? roomInfo.upper : 10000000000000000;
}
