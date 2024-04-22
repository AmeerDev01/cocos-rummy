export enum GameType {
  NONE = -1,
  BET = 0,
  FLIGHT = 1,
  SETTLEMENT = 2
}
export type GameTypeInfo = {
  /**上一局游戏 */
  lastGameType: GameType
  /**下一局游戏 */
  currGameType: GameType
  /**当前界面所处的游戏类型 */
  viewGameType: GameType,
}
// 金币
export const enum COINPARAMETERS {
  ONE = 1000,
  TWO = 5000,
  THREE = 10000,
  FOUR = 300000,
  FIVE = 1000000,
}
// 火箭状态
export const enum ROCKETANI {
  /** 等待下注 */
  DENGDAIXAIZHU = 'dengdaixiazhu',
  /** 爆炸 */
  DIE1 = 'die1',
  /** 爆炸 */
  DIE2 = 'die2',
  /** 爬升 */
  PASHENG = 'pasheng',
  /** 起步 */
  QIBU = 'qibu',
}
export type ODDSLIST = [
  {
    color:number
    num:number
  }
]