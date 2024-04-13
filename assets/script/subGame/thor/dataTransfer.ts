import { log } from "cc"

export enum DataKeyType {
  /**5条滚轴对应的道具ID【上升或下降前】 */
  ROLLER_STOP_INDEX_ID = "ROLLER_STOP_INDEX_ID",
  /**扣除余额 */
  COINSAFTERBETTING = "coinsAfterBetting",
  /**余额 */
  BALANCE = "BALANCE",
  /**获取闪动数据 */
  ICON_EFFECT_DATA = "ICON_EFFECT_DATA",
  /**获取盈利倍数信息，用于显示爆奖效果 */
  PROFIT_MULTIPLE = "PROFIT_MULTIPLE",
  /**游戏类型 */
  GAME_TYPE = "GAME_TYPE",
  /**下一把游戏类型 */
  NEXTGAME_TYPE = "NEXTGAME_TYPE",
  /**开宝箱的中奖信息 */
  AWARD_INFO = "AWARD_INFO",
  /**小游戏剩余次数 */
  SUBGAME_TIMES = "SUBGAME_TIMES",
  /**获取盈利 */
  PROFIT_AMOUNT = "PROFIT_AMOUNT",
  /**小游戏盈亏 */
  FREE_GAME_AMOUNT = "FREE_GAME_AMOUNT",
  /**图标倍数 */
  RATES = "RATES",
  /**图标总倍数 */
  ITEMTOTALMULTIPLIER = "ITEMTOTALMULTIPLIER",
  /** 单次次数*/
  INDEXADDFREECOUNT = "INDEXADDFREECOUNT",
  /**小游戏总倍数*/
  GAMEFREEGAMETOTALMULTIPLIER = "GAMEFREEGAMETOTALMULTIPLIER",
}
export const useMock: boolean = false

const mockData: any = {
  // dl: {
  //   si: [{
  //     bl: 99975,
  //     blab: 99975,
  //     blb: 100000,
  //     bubble: 0,
  //     cs: 0,
  //     ctw: 0,
  //     fireRingSwitch: 0,
  //     freeCount: 0,
  //     freeGameAmount: 0,
  //     gameType: 0,
  //     iconStay: 0,
  //     indexGameType: 0,
  //     lw: {},
  //     magnification: 0,
  //     np: 0,
  //     rl: [[7, 3, 1], [7, 3, 1], [7, 3, 1], [7, 3, 1], [7, 3, 1]],
  //     rollerId: [64, 3, 7, 45, 26],
  //     sc: 0,
  //     sgb: 0,
  //     tb: 1,
  //     tbb: 25,
  //     tw: 0,
  //     wp: {}
  //   }]
  // }

  "dl": {
    "si": [
      {
        "balanceAfterSettlement": 106580,
        "bettingGoldCoins": 20,
        "change": {},
        "coinsAfterBetting": 106580,
        "coinsBeforeBetting": 106600,
        "freeCount": 0,
        "freeGame": {},
        "freeGameAmount": 0,
        "freeGameItemCount": 0,
        "indexAddFreeCount": 0,
        "indexGameType": 0,
        "magnification": 0,
        "nextGameType": 0,
        "otherGameAttributesVo": {
          "freeGametotalMultiplier": 0,
          "gameFreeGametotalMultiplier": 0,
          "gameTotalMultiplier": 0,
          "itemTotalMultiplier": 0,
          "rates": [],
          "singleResults": [
            {
              "gameWinningVos": [],
              "rollerIcon": [[2, 3, 2, 5, 3], [6, 1, 7, 2, 4], [2, 2, 1, 2, 7], [5, 9, 3, 1, 6], [4, 1, 2, 9, 4], [6, 3, 8, 7, 6]],
              "totalMultiple": 0,
              "winningPosition": {}
            }
          ]
        },
        "rollerId": [66, 88, 63, 37, 68, 98],
        "totalRewards": 0,
        "whetherFreeGame": 0,
        "winningAmount": {},
        "winningPosition": {}
      }
    ]
  }
}
/**此数据用于缓存，正常情况下，游戏初始化、或skt返回数据之后就应该更新这个值，在下一次更新之前，此值不应该变化
 * 
 * 为什么不用store呢，因为store的值一般和界面关联，数据一变更就有视图变化，但缓存数据没有，主要考虑到有特效缓动，要延迟更新
 */
let dataCache: MockDataType = {
  dl: {
    si: [{
      "balanceAfterSettlement": 106580,
      "bettingGoldCoins": 20,
      "change": {},
      "coinsAfterBetting": 106580,
      "coinsBeforeBetting": 106600,
      "freeCount": 0,
      "freeGame": {},
      "freeGameAmount": 0,
      "freeGameItemCount": 0,
      "indexAddFreeCount": 0,
      "indexGameType": 0,
      "magnification": 0,
      "nextGameType": 0,
      "otherGameAttributesVo": {
        "freeGametotalMultiplier": 0,
        "gameFreeGametotalMultiplier": 0,
        "gameTotalMultiplier": 0,
        "itemTotalMultiplier": 0,
        "rates": [],
        "singleResults": [
          {
            "gameWinningVos": [],
            "rollerIcon": [[2, 3, 2, 5, 3], [6, 1, 7, 2, 4], [2, 2, 1, 2, 7], [5, 9, 3, 1, 6], [4, 1, 2, 9, 4], [6, 3, 8, 7, 6]],
            "totalMultiple": 0,
            "winningPosition": {}
          }
        ]
      },
      "rollerId": [66, 88, 63, 37, 68, 98],
      "totalRewards": 0,
      "whetherFreeGame": 0,
      "winningAmount": {},
      "winningPosition": {}
    }]
  }
}

/**用于手动更新某个值，一般用于初始化游戏时候局部变量更新 */
export const setData = (key: string, value: any) => {
  // console.log(key, value)
  if (useMock) { return }
  const si = (useMock ? mockData : dataCache).dl.si[0]
  si[key] = value
}

/**刷新缓存数据 */
export const refreshData = (data: MockDataType) => {
  if (!useMock) {
    (dataCache = data)
  }
  // console.log('dataCache', dataCache.dl.si[0])
}

export default (dataKey: DataKeyType): any => {
  if (!dataCache) {
    console.error("dataCache is null")
    return
  }

  const si = (useMock ? mockData : dataCache).dl.si[0]
  // console.log('gameType', si.indexGameType)
  switch (dataKey) {
    case DataKeyType.ROLLER_STOP_INDEX_ID:
      // console.log(si.rollerId);
      return si.rollerId
    case DataKeyType.ICON_EFFECT_DATA:
      const wp = si.otherGameAttributesVo.singleResults
      const result: number[][] = []
      for (let key in wp) {
        result.push(wp[key])
      }
      return result
    case DataKeyType.RATES:
      return si.otherGameAttributesVo.rates
    case DataKeyType.ITEMTOTALMULTIPLIER:
      return si.otherGameAttributesVo.itemTotalMultiplier
    case DataKeyType.COINSAFTERBETTING:
      return si.coinsAfterBetting
    case DataKeyType.BALANCE:
      return si.balanceAfterSettlement
    case DataKeyType.PROFIT_MULTIPLE:
      return si.magnification
    case DataKeyType.GAME_TYPE:
      return si.indexGameType
    case DataKeyType.NEXTGAME_TYPE:
      return si.nextGameType
    case DataKeyType.AWARD_INFO:
      return si.winningAmount
    case DataKeyType.SUBGAME_TIMES:
      return si.freeCount
    case DataKeyType.INDEXADDFREECOUNT:
      return si.indexAddFreeCount
    case DataKeyType.PROFIT_AMOUNT:
      return si.totalRewards
    case DataKeyType.FREE_GAME_AMOUNT:
      return si.freeGameAmount
    case DataKeyType.GAMEFREEGAMETOTALMULTIPLIER:
      return si.otherGameAttributesVo.gameFreeGametotalMultiplier
  }

  // if (dataKey === DataKeyType.ROLLER_STOP_INDEX_ID) {
  //   return si.rollerId
  // }
  // if (dataKey === DataKeyType.ICON_EFFECT_DATA) {
  //   const wp = si.wp
  //   const result: number[][] = []
  //   for (let key in wp) {
  //     result.push(wp[key])
  //   }
  //   return result
  // }
  // if (dataKey === DataKeyType.PROFIT_MULTIPLE) {

  // }
}
type MockDataType = {
  dl: {
    si: [
      {
        balanceAfterSettlement: number,
        bettingGoldCoins: number,
        change: {},
        coinsAfterBetting: number,
        coinsBeforeBetting: number,
        freeCount: number,
        freeGame: {},
        freeGameAmount: number,
        freeGameItemCount: number,
        indexAddFreeCount: number,
        indexGameType: number,
        magnification: number,
        nextGameType: number,
        otherGameAttributesVo: {}
        /**倍率  图标数量X图标倍率 */
        rollerId: number[],//[64, 3, 7, 45, 26],
        totalRewards: number,
        whetherFreeGame: number,
        winningAmount: {},
        winningPosition: {},
      }
    ]
  }
}


