import config from "./config";
import { InitStateType } from "./store/action/game";
import { CardGroup, CardItem, DeskStatus, Player, RoomInfo } from "./type";

export const calCardPoint = (value1: CardItem, value2: CardItem) => {
  const sum = value1.upFace + value1.downFace + value2.upFace + value2.downFace;
  return sum % 10;
}

export const getPlayer = (players: Player[], uid: string) => {
  return players.find(v => v && v.uid === uid);
}

export const clearInitStateType = (data: InitStateType) => {
  data.playerMap = new Array(config.seatNumber).fill(null);
  data.deskStatus = DeskStatus.WAITING;
  data.lastActiveSeatIndex = -1;
  data.currActiveSeatIndex = -1;
  data.gold = 0;
  data.betAmount = 0;
  data.totalBetAmount = 0;
}

/**
 * 根据传入金额，拆分多个筹码
 * @param paramValue 
 * @returns 
 */
export const splitChip = (paramValue: number) => {
  const arr: number[] = [];
  const split = (value: number) => {
    for (let i = config.chips.length - 1; i >= 0; i--) {
      const chip = config.chips[i];
      if (value >= chip.value) {
        value -= chip.value;
        arr.push(chip.value);
        if (value > 0) {
          split(value);
        }
        break;
      }
    }
  }

  split(paramValue);
  return arr;
}

export const getOptimalCardGroup = (cardItems: CardItem[]) => {
  // 找出所有组合
  const newArr = permutations(cardItems).map(v => {
    const arr = v as CardItem[]
    const cardItems = [arr.shift(), arr.shift()]
    let sum = calNum(cardItems);
    const cardGroup: CardGroup = {
      cardItems,
      sum: sum,
    }

    sum = calNum(arr);
    const cardGroup1: CardGroup = {
      cardItems: arr,
      sum: sum,
    }
    return [cardGroup, cardGroup1];
  });

  // 排序
  newArr.sort((v1, v2) => {
    let res = v2[0].sum - v1[0].sum;
    if (res === 0) {
      res = v2[1].sum - v1[1].sum;
    }
    return res;
  })

  return newArr[0];
}

export const permutations = (arr: CardItem[]) => {
  let len = arr.length
  let res = [] // 所有排列结果
  /**
   * 【全排列算法】
   * 说明：arrange用来对arr中的元素进行排列组合，将排列好的各个结果存在新数组中
   * @param tempArr：排列好的元素
   * @param leftArr：待排列元素
   */
  let arrange = (tempArr, leftArr) => {
    if (tempArr.length === len) { // 这里就是递归结束的地方
      res.push(tempArr) // 得到全排列的每个元素都是数组
    } else {
      leftArr.forEach((item, index) => {
        let temp = [].concat(leftArr)
        temp.splice(index, 1)
        // 此时，第一个参数是当前分离出的元素所在数组；第二个参数temp是传入的leftArr去掉第一个后的结果
        arrange(tempArr.concat(item), temp) // 这里使用了递归
      })
    }
  }
  arrange([], arr)
  return res
}

export const calNum = (cardItems: CardItem[]) => {
  let sum = 0;
  cardItems.forEach(v => sum += v.downFace + v.upFace)
  return sum % 10;
}

export const getRoomUpper = (roomInfo: RoomInfo)=> {
  return roomInfo.upper > 0 ? roomInfo.upper : 10000000000000000;
}
