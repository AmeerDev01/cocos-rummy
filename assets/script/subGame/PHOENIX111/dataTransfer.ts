export enum DataKeyType {
  /**5条滚轴对应的道具ID【上升或下降前】 */
  ROLLER_STOP_INDEX_ID = "ROLLER_STOP_INDEX_ID",
  /**余额 */
  BALANCE = "BALANCE",
  /**余额 */
  COINS_AFTER_BETTING = "COINS_AFTER_BETTING",
  /**获取闪动数据 */
  ICON_EFFECT_DATA = "ICON_EFFECT_DATA",
  /**获取元宝闪动数据 */
  ICON_YUANBAO_EFFECT_DATA = "ICON_YUANBAO_EFFECT_DATA",
  /**获取盈利倍数信息，用于显示爆奖效果 */
  PROFIT_MULTIPLE = "PROFIT_MULTIPLE",
  /**游戏类型 */
  GAME_TYPE = "GAME_TYPE",
  /**开宝箱的中奖信息 */
  AWARD_INFO = "AWARD_INFO",
  /**小游戏剩余次数 */
  SUBGAME_TIMES = "SUBGAME_TIMES",
  /**获取盈利 */
  PROFIT_AMOUNT = "PROFIT_AMOUNT",
  /**小游戏盈亏 */
  FREE_GAME_AMOUNT = "FREE_GAME_AMOUNT",
  /**小游戏转轴位置 */
  FREE_GAME_POSITION = "FREE_GAME_POSITION",
  
}
export const useMock: boolean = false

const mockData: any = {
  "dl": {
    "si":
      [{
        "balanceAfterSettlement": 731736667.00,
        "blab": 731736647.00,
        "blb": 731736697.00,
        "bubble": 0.00,
        "change": {}, "cs": 0.00, "ctw": 0.00, "esb": {},
        "fireRingSwitch": 0,
        "fixedChessboardIcon": [],
        "freeCount": 0,
        "freeGameAmount": 0.00,
        "freegame": {},
        "gameType": 0,
        "iconStay": 0,
        "indexGameType": 0,
        "lw": { "13": 20 },
        "magnification": 10.00,
        "np": 0.00,
        "rollerIcon": [[5, 11, 12], [3, 1, 10], [1, 5, 10], [10, 1, 3], [2, 2, 12]],
        "rollerId": [41, 25, 6, 29, 42],
        "sc": 0,
        "sgb": 0,
        "tb": 2,
        "tbb": 50,
        "totalRewards": 20.00,
        "wp": { "13": [[0, 0], [1, 2], [2, 2]] }
      }]
  }

  // "dl": {
  //   "si": [
  //     {
  //       "bl": 2310,
  //       "blab": 2310,
  //       "blb": 2310,
  //       "bubble": 0,
  //       "cs": 0,
  //       "ctw": 0,
  //       "fireRingSwitch": 0,
  //       "fixedChessboardIcon": [],
  //       "freeCount": 6,
  //       "freeGameAmount": 1830,
  //       "gameType": 2,
  //       "iconStay": 0,
  //       "indexGameType": 0,
  //       "lw": {
  //         "6": 0,
  //         "BONUS": 1500
  //       },
  //       "magnification": 0,
  //       "np": 0,
  //       "sc": 1,
  //       "sgb": 0,
  //       "tb": 0,
  //       "tbb": 0,
  //       "tw": 1500
  //     }
  //   ]
  // }
}
/**此数据用于缓存，正常情况下，游戏初始化、或skt返回数据之后就应该更新这个值，在下一次更新之前，此值不应该变化
 * 
 * 为什么不用store呢，因为store的值一般和界面关联，数据一变更就有视图变化，但缓存数据没有，主要考虑到有特效缓动，要延迟更新
 */
let dataCache: MockDataType = {
  dl: {
    si: [{
      balanceAfterSettlement: 0,
      blab: 99975,
      blb: 100000,
      bubble: 0,
      cs: 0,
      ctw: 0,
      fireRingSwitch: 0,
      freeCount: 0,
      freeGame:{},
      freeGameAmount: 0,
      gameType: 0,
      iconStay: 0,
      indexGameType: 0,
      lw: {},
      magnification: 0,
      np: 0,
      otherGameAttributesVo:{},
      rollerIcon: [[1, 8, 8], [1, 11, 1], [1, 12, 5], [7, 11, 1], [9, 1, 1]],
      rollerId: [1, 27, 41, 20, 30],
      sc: 0,
      sgb: 0,
      tb: 1,
      tbb: 25,
      totalRewards: 0,
      winningPosition: {}
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
}

export default (dataKey: DataKeyType): any => {
  if (!dataCache) {
    console.error("dataCache is null")
    return
  }
  const si = (useMock ? mockData : dataCache).dl.si[0]
  // console.log(dataKey, si)
  // console.log('gameType', si.gameType)
  switch (dataKey) {
    case DataKeyType.ROLLER_STOP_INDEX_ID:
      return si.rollerId
    case DataKeyType.ICON_EFFECT_DATA:
      const wp = si.winningPosition
      const result: number[][] = []
      for (let key in wp) {
        result.push(wp[key])
      }
      return result
    case DataKeyType.BALANCE:
      return si.balanceAfterSettlement
    case DataKeyType.COINS_AFTER_BETTING:
      return si.coinsAfterBetting
    case DataKeyType.PROFIT_MULTIPLE:
      return si.magnification
    case DataKeyType.GAME_TYPE:
      return si.gameType
    case DataKeyType.AWARD_INFO:
      return si.lw
    case DataKeyType.SUBGAME_TIMES:
      return si.freeCount
    case DataKeyType.PROFIT_AMOUNT:
      return si.totalRewards
    case DataKeyType.FREE_GAME_AMOUNT:
      return si.freeGameAmount
    case DataKeyType.ICON_YUANBAO_EFFECT_DATA:
      return si.otherGameAttributesVo
    case DataKeyType.FREE_GAME_POSITION:
      const fg = si.freeGame
      const result1: number[][] = []
      for (let key in fg) {
        result1.push(fg[key])
      }
      return result1
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
        blab: number,
        blb: number,
        bubble: number,
        cs: number,
        ctw: number,
        fireRingSwitch: number,
        freeCount: number,
        freeGame:object,
        freeGameAmount: number,
        gameType: number,
        iconStay: number,
        indexGameType: number,
        lw: object,
        /**倍率  图标数量X图标倍率 */
        magnification: number,
        np: number,
        otherGameAttributesVo:object,
        rollerIcon: number[][],//[[7, 3, 1], [7, 3, 1], [7, 3, 1], [7, 3, 1], [7, 3, 1]],
        rollerId: number[],//[64, 3, 7, 45, 26],
        sc: number,
        sgb: number,
        tb: number,
        tbb: number,
        totalRewards: number,
        winningPosition: object
      }
    ]
  }
}


