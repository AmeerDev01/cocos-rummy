import { Node, UITransform, color } from "cc"
import { Card, CardColor, CardGroup, CardGroupType, CardValue, DeskStatus, Player } from "./type"

export const isJoker = (card: Card) => {
  return card.points === CardValue.JOKER_SMALL || card.points === CardValue.JOKER_BIG
}

export const isFaceCard = (card: Card) => {
  return card.points === CardValue.J || card.points === CardValue.Q || card.points === CardValue.K
}

/**是否游戏中 */
export const isGameIn = (deskStatus: DeskStatus) => {
  return deskStatus === DeskStatus.DISTRIBUTE || deskStatus === DeskStatus.TOUCH_CARD || deskStatus === DeskStatus.OUT_CARD
}

/**获得癞子牌个数 */
export const getLaiziCount = (cards: Card[]) => {
  return cards.length = filterLaizi(cards).length;
}

/**获得癞子个数 */
const filterLaizi = (cards: Card[]) => {
  return cards.filter(v => !v.laizi && !isJoker(v));
}

/**是否炸弹 */
const isEqualBomb = (cards: Card[], laiziCount: number) => {
  // 炸弹最多四张
  if (cards.length + laiziCount > 4) {
    return false;
  }
  const colors = new Array(5).fill(0);
  cards.forEach(v => colors[v.color]++);
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] > 1) {
      return false;
    }
  }
  return cards.every(v => v.points === cards[0].points)
}

/**是否全是癞子 */
export const isAllLaizi = (cards: Card[]) => {
  return cards.every(v => v.laizi || isJoker(v));
}

/**计算牌组类型 */
export const calCardGroupType = (cards: Card[]): CardGroup => {
  const cardGroup: CardGroup = {
    cardGroupType: CardGroupType.NOT,
  }

  if (cards.length < 3) {
    return cardGroup;
  }

  if (checkStraight(cards, 0)) {
    cardGroup.cardGroupType = CardGroupType.PURE_STRAIGHT;
    return cardGroup;
  }

  // 总牌数
  const totalCount = cards.length;
  // 过滤掉癞子牌
  const notLaiziCards = filterLaizi(cards);

  // 全是癞子牌
  if (notLaiziCards.length === 0) {
    cardGroup.cardGroupType = CardGroupType.STRAIGHT;
    return cardGroup;
  }

  // 癞子牌个数
  const laiziCount = totalCount - notLaiziCards.length;
  if (checkStraight(notLaiziCards, laiziCount)) {
    cardGroup.cardGroupType = CardGroupType.STRAIGHT;
    return cardGroup;
  }

  if (isEqualBomb(notLaiziCards, laiziCount)) {
    cardGroup.cardGroupType = CardGroupType.BOMB;
    return cardGroup;
  }

  return cardGroup;
}

const checkStraight = (cards: Card[], laiziCount: number) => {
  // 全是癞子也成组
  if (laiziCount > 0 && cards.length === 0) {
    return true;
  }
  if (!isFlush(cards)) {
    return false;
  }

  // 计算缺少的牌的数量
  let missingCount = getMissingCount(cards, false)
  // 如果缺少的牌数量大于癞子牌数量，说明不是顺子
  if (missingCount > laiziCount) {
    // 如果牌有A，就要把A变成14再来计算一次顺子
    if (cards.find(v => v.points === CardValue.A)) {
      missingCount = getMissingCount(cards, true)
      if (missingCount > laiziCount) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

/**获得缺牌数量 */
const getMissingCount = (cards: Card[], isSmallA: boolean) => {
  const points = getPoints(cards, isSmallA)
  let missingCount = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let diff = points[i + 1] - points[i];
    // 两张一样的牌肯定不是顺子
    if (diff === 0) {
      return 999;
    } else if (diff > 1) {
      missingCount += diff - 1;
    }
  }
  return missingCount;
}

const getPoints = (cards: Card[], isSmallA: boolean) => {
  const points = cards.map(v => v.points)
  if (isSmallA) {
    for (let i = 0; i < points.length; i++) {
      if (points[i] === CardValue.A) {
        points[i] = 14;
      }
    }
  }
  points.sort((v1, v2) => v1 - v2)
  return points;
}

/**是否同花 */
const isFlush = (cards: Card[]) => {
  const color = cards[0].color;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].color !== color) {
      return false;
    }
  }
  return true;
}
/**计算总点数 */
export const calSumPoint = (cards: Card[]) => {
  let sum = 0
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // 鬼牌不计算点数
    if (isJoker(card)) {
      continue;
    }
    const points = card.points === CardValue.A ? 14 : card.points;
    sum += points >= 10 ? 10 : points
  }
  return sum;
}

/**
 * 转换状态
 * @param state 0：等待，1，游戏中，2：结算
 * @param countdown 当前倒计时 
 * @param operation 当前操作。 1 摸牌 2 出牌
 * @param playerStatus 用户状态
 * @returns 
 */
export const convertDeskStatus = (state: number, countdown: number, operation: number) => {
  if (state === 0) {
    return countdown > 0 ? DeskStatus.COUNTDOWNING : DeskStatus.WAITING;
  } else if (state === 1) {
    return operation === 1 ? DeskStatus.TOUCH_CARD : DeskStatus.OUT_CARD;
  } else if (state === 2) {
    return DeskStatus.BALANCE;
  }

  return DeskStatus.WAITING;
}

export const getPlayer = (players: Player[], uid: string) => {
  return players.find(v => v && equalUid(v.uid, uid))
}
export const getPlayerSeatIndex = (players: Player[], seatIndex: number) => {
  return players.find(v => v && v.seatIndex === seatIndex)
}


export const equalUid = (uid1: string, uid2: string) => {
  return uid1 + '' === uid2 + '';
}