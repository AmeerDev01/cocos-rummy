export enum SubGameRunState {
  CLOSE, INIT, LOADING, READY, CANCEL, RUN
}

/**大厅的事件类型 */
export enum HallEventType {
  /**金额变化 */
  BALANCE_CHANGE,
  /**中奖通告 */
  WINNING_NOTICE,
  /**收到站内信 */
  RECEIVE_LETTER,
  /**收到跑马灯 */
  NEW_MARGUEE,
  /**关闭游戏 */
  CLOSE_GAME
}

export enum GameState {
  /**正常运行中 */
  WORKING = 0,
  /**维护 */
  MAINTENANCE = 1,
  /**即将开放 */
  COME_SOON = 2,
  /**下架 */
  OFF_LINE = 9,
}