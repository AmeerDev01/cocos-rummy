import { Card, CardColor, CardValue, DeskStatus } from "./type"

export const isJoker = (card: Card) => {
  return card.point === CardValue.JOKER_SMALL || card.point === CardValue.JOKER_BIG
}

export const isFaceCard = (card: Card) => {
  return card.point === CardValue.J || card.point === CardValue.Q || card.point === CardValue.K
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
export const isEqualBomb = (cards: Card[]) => {
  if (cards.length < 3) return false;
  // 不能有相同花色
  for (let i = 0; i < cards.length - 1; i++) {
    if (cards[i].color === cards[i - 1].color) {
      return false;
    }
  }
  return cards.every(v => v.point === cards[0].point)
}

/**是否顺子 */
export const isStraight = (cards: Card[]) => {
  // 总牌数
  const totalCount = cards.length;
  // 过滤掉癞子牌
  cards = filterLaizi(cards);
  if (!isFlush(cards)) {
    return false;
  }
  // 癞子牌个数
  const laiziCount = totalCount - cards.length;
  // 计算缺少的牌的数量
  let missingCount = getMissingCount(cards, false)
  // 如果缺少的牌数量大于癞子牌数量，说明不是顺子
  if (missingCount > laiziCount) {
    // 如果牌有A和2，就要把A变成1再来计算一次顺子
    if (cards.find(v => v.point === 2) && cards.find(v => v.point === CardValue.A)) {
      missingCount = getMissingCount(cards, true)
      if (missingCount > laiziCount) {
        return false;
      }
    } else {
      return false;
    }
  }
}

/**获得缺牌数量 */
const getMissingCount = (cards: Card[], isSmallA: boolean) => {
  const points = getPoints(cards, false)
  let missingCount = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let diff = points[i + 1] - points[i];
    if (diff > 1) {
      missingCount++;
    }
  }
  return missingCount;
}

const getPoints = (cards: Card[], isSmallA: boolean) => {
  const points = cards.map(v => v.point)
  if (isSmallA) {
    for (let i = 0; i < points.length; i++) {
      if (points[i] === CardValue.A) {
        points[i] = 1;
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