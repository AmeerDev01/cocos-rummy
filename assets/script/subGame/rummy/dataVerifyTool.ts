/**
 * 数据校验工具
 */

import { SKT_MAG_TYPE } from "./socketConnect"
import { BalanceVo, ConfirmVo, DealVo, DropVo, JoinRoomVo, NotifyTouchVo, OutCardVo, TouchCardVo } from "./type"

const joinRoomSimple: JoinRoomVo = {
  fraction: 0,
  /**玩家信息 */
  rummyMemberInfo: [],
  /**对局状态 【0 等待中  1游戏中 2结算】 */
  roomStatus: 0,
  /**当前回合玩家下表 */
  indexMember: 0,
  tableId: 'string',
  /**当前操作人的状态 1 摸牌 2 出牌 */
  playOperate: 0,
  /**剩余牌数 */
  remainingCount: 0,
  /**玩家回合数 */
  roundCount: 0,
  /**是否倒计时 */
  isCountdown: false,
  isAgain: false,
  bet: 0,
  bankerId: 'string',
  userPokers: undefined,
  wildPoker: undefined,
  rightPoker: undefined,
  /**房间累计输的 */
  dropOrShowGold: 0,
}

const dealSimple: DealVo = {
  fraction: 0,
  /**玩家手牌 */
  userPokers: undefined,
  /**对局状态 【0 等待中  1游戏中 2结算】 */
  status: 0,
  /**癞子牌 */
  wildPoker: undefined,
  rightPoker: undefined,
  /**当前回合玩家id */
  playerMemberId: 'string',
  bankerId: 'string',
  /**下一次操作的玩家 */
  nextMemberId: 'string',
  /**剩余秒数 */
  countdown: 0,
  /**弃牌组 */
  discard: [],
  /**当前操作。 1 摸牌 2 出牌 3禁止 */
  operation: 0,
  /**剩余牌数 */
  remainingCount: 0,
}

/**摸牌 */
const touchCardSimple: TouchCardVo = {
  /**当前回合玩家id */
  memberId: 'string',
  previousPoker: null,
  /**玩家手牌 */
  drawPoker: null,
  /**对局状态 【0 等待中  1游戏中 2结算】 */
  status: 0,
  /**当前操作人的状态 1 摸牌 2 出牌 */
  operation: 0,
  /**当前操作类型 1摸牌区，2弃牌区 */
  type: 0,
  /**剩余牌数 */
  remainingCount: 0,
  userPokers: undefined,
  prohibit: false
}

/**出牌 */
const outCardSimple: OutCardVo = {
  /**当前回合玩家id */
  playerMemberId: 'string',
  /**下一次操作的玩家 */
  nextMemberId: 'string',
  /**玩家出牌 */
  playPoker: undefined,
  /**剩余秒数 */
  countdown: 0,
  win: false,
  show: false,
  roomStatus: 0,
}
/**通知摸牌 */
const notifyTouchSimple: NotifyTouchVo = {
  /**当前回合玩家下表 */
  indexMember: 0,
  /**当前回合玩家id */
  indexMemberId: 'string',
  /**对局状态 【0 等待中  1游戏中 2结算】 */
  status: 0,
  /**剩余秒数 */
  seconds: 0,
}
/**投降结构 */
const dropSimple: DropVo = {
  /**对局状态 【0 等待中  1游戏中 2结算】 */
  status: 0,
  /**当前回合玩家下表 */
  indexMember: 0,
  /**当前回合玩家id */
  indexMemberId: 'string',
  tableId: 'string',
  /**剩余秒数 */
  seconds: 0,
  /**当前操作人的状态 1 摸牌 2 出牌 */
  operation: 0,
  /**投降金额 */
  surrenderGold: 0,
  /**玩家信息 */
  userInfos: [],
}
/**确认消息 */
const confirmVo: ConfirmVo = {
  /**分数 */
  score: 0,
  /**确认消息的玩家id */
  memberId: '',
  /**下一次操作的玩家 */
  nextMemberId: 'string',
  gold: 0,
  /**1：赢家， 2：输家 */
  type: 0,
  /**是否投降 */
  drop: false,
  show: false,
  /**剩余秒数 */
  countdown: 0,
  /**自己余额 */
  balanceGold: 0
}
const balanceSimple: BalanceVo = {
  /**剩余秒数 */
  countdown: 0,
  rummyMemberSettlements: [],
}

export const verifyServerData = (msgType: SKT_MAG_TYPE, data: any) => {
  let result = true;
  // if (msgType === SKT_MAG_TYPE.JOIN_ROOM) {
  //   result = validateJson(joinRoomSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.DEAL) {
  //   result = validateJson(dealSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.TOUCH_CARD) {
  //   result = validateJson(touchCardSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.OUT) {
  //   result = validateJson(outCardSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.NOTIFY_TOUCH) {
  //   result = validateJson(notifyTouchSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.DROP) {
  //   result = validateJson(dropSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.SHOW) {
  //   result = validateJson(showSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.NOTIFY_CONFIRM) {
  //   result = validateJson(notifyConfirmSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.SEND_CONFIRM) {
  //   result = validateJson(confirmSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.BALANCE) {
  //   result = validateJson(balanceSimple, data, false);
  // } else if (msgType === SKT_MAG_TYPE.UPDATE_DATA) {
  //   result = validateJson(updateDataSimple, data, false);
  // }

  // if (!result) {
  //   const content = lang.write(k => k.WebSocketModule.SocketDataError, {}, { placeStr: "服务数据错误" });
  //   console.log(`${content} msgType: ${msgType}`);
  //   ModalBox.Instance().show({
  //     content: content, type: 'Prompt'
  //   }, () => {
  //     return true
  //   })
  // }

  return result;
}