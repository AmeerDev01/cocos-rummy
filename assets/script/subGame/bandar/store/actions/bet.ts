import { default as reduxAct } from "redux-act";
import { BetData, BetType, SendBet } from "../../type";


export type Bet={
  gold:number,
  type:BetType,
  userId:string
}

export type WinUser={
  memberName:string,
  memberId:string,//头像
  gold:number,
  index?:number,
  time?:number,
}
export type InitStateType = {
  /**最新的下注信息 */
  newBetData: BetData,//===> 获取下注返回
  /** 当前用户下注信息 */
  betData:BetData,
  /**当前用户每个区域下注情况 */
  memberBet:object,
  /**上一局下注 */
  lastBet: SendBet[],
  /**选择的筹码 */
	selectChip: number,
  /**区域总值 */
  goldData:object,
  /**赢的区域牌的倍率 */
  cardRate:number[],
  /**所有区域倍率 */
  allCardRate:number[],
  /**区域输赢 */
  areaWinLose:number[],
  /**结算 用户赢家 */
  allWinUsers: WinUser[],
  /** 特殊牌型展示 */
  cardType: number[],
  /**下注失败的金币数据 */
  cancelBetData:BetData
};


export const initState: InitStateType = {
  newBetData:null,
  betData:null,
  memberBet:null,
  lastBet:null,
  selectChip:1000,
  goldData:null,
  cardRate:null,
  allCardRate:null,
  areaWinLose:null,
  allWinUsers: null,
  cardType: null,
  cancelBetData:null,

};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  BANDAR_BET_DATA = "BANDAR_BET_DATA",
  BANDAR_LAST_BET_DATA = "BANDAR_LAST_BET_DATA",
  BANDER_CHANGE_SELECT_CHIP = "BANDER_CHANGE_SELECT_CHIP",
  BANDAR_NEW_BET_DATA = "BANDAR_NEW_BET_DATA",
  BANDAR_GOLD_DATA = "BANDAR_GOLD_DATA",
  BANDAR_CARD_RATE = "BANDAR_CARD_RATE",
  BANDAR_CARD_TYPE = "BANDAR_CARD_TYPE",
  BANDAR_ALL_CARD_RATE = "BANDAR_ALL_CARD_RATE",
  BANDAR_ALL_WIN_USER = "BANDAR_ALL_WIN_USER",
  BANDAR_AREA_WIN_LOSE = "BANDAR_AREA_WIN_LOSE",
  BANDAR_MEMBER_BET = "BANDAR_MEMBER_BET",
  BANDAR_CANCEL_BET_DATA = "BANDAR_CANCEL_BET_DATA",

}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDAR_BET_DATA ? { betData:BetData } : 
  A extends ActionTypes.BANDAR_NEW_BET_DATA ? { newBetData:BetData } : 
  A extends ActionTypes.BANDAR_LAST_BET_DATA?{lastBet:SendBet[]}:
  A extends ActionTypes.BANDER_CHANGE_SELECT_CHIP?{selectChip: number}:
  A extends ActionTypes.BANDAR_GOLD_DATA?{goldData: object}:
  A extends ActionTypes.BANDAR_CARD_RATE ? { cardRate: number[] } :
  A extends ActionTypes.BANDAR_CARD_TYPE?{cardType:number[]}:
  A extends ActionTypes.BANDAR_ALL_CARD_RATE?{allCardRate:number[]}:
  A extends ActionTypes.BANDAR_ALL_WIN_USER?{allWinUsers:WinUser[]}:
  A extends ActionTypes.BANDAR_AREA_WIN_LOSE ? { areaWinLose: number[] } :
  A extends ActionTypes.BANDAR_CANCEL_BET_DATA?{cancelBetData:BetData}:
  A extends ActionTypes.BANDAR_MEMBER_BET ? { memberBet: object } :never;
/** 更新下注信息*/
export const setBetDataAction = reduxAct.createAction(ActionTypes.BANDAR_BET_DATA,
  (betData:BetData): ActionPayLoad<ActionTypes.BANDAR_BET_DATA> => {
    return { betData }
})
/** 更新最新下注信息*/
export const setNewBetDataAction = reduxAct.createAction(ActionTypes.BANDAR_NEW_BET_DATA,
  (newBetData:BetData): ActionPayLoad<ActionTypes.BANDAR_NEW_BET_DATA> => {
    return { newBetData }
})
/** 更新最新上把下注信息*/
export const setLastBetAction=reduxAct.createAction(ActionTypes.BANDAR_LAST_BET_DATA,
  (lastBet:SendBet[]):ActionPayLoad<ActionTypes.BANDAR_LAST_BET_DATA>=>{
    return {lastBet}
})
/** 更新最新用户下注区域金币值*/
export const setMemberBetAction=reduxAct.createAction(ActionTypes.BANDAR_MEMBER_BET,
  (memberBet:object):ActionPayLoad<ActionTypes.BANDAR_MEMBER_BET>=>{
    return {memberBet}
})
/** 更新最新选择金币值*/
export const changeSelectChipAction=reduxAct.createAction(ActionTypes.BANDER_CHANGE_SELECT_CHIP,
  (selectChip: number):ActionPayLoad<ActionTypes.BANDER_CHANGE_SELECT_CHIP>=>{
    return {selectChip}
})
/** 更新最新区域下注总值*/
export const changeGoldDataAction=reduxAct.createAction(ActionTypes.BANDAR_GOLD_DATA,
  (goldData:object):ActionPayLoad<ActionTypes.BANDAR_GOLD_DATA>=>{
    return {goldData}
})
/** 更新最新牌的倍率值*/
export const changeCardRateAction=reduxAct.createAction(ActionTypes.BANDAR_CARD_RATE,
  (cardRate:number[]):ActionPayLoad<ActionTypes.BANDAR_CARD_RATE>=>{
    return {cardRate}
  })
/** 更新最新牌型 QIUQIU TWINS...*/
export const changeCardTypeAction=reduxAct.createAction(ActionTypes.BANDAR_CARD_TYPE,
  (cardType:number[]):ActionPayLoad<ActionTypes.BANDAR_CARD_TYPE>=>{
    return {cardType}
})
/** 更新最新牌的倍率值*/
export const changeAllCardRateAction=reduxAct.createAction(ActionTypes.BANDAR_ALL_CARD_RATE,
  (allCardRate:number[]):ActionPayLoad<ActionTypes.BANDAR_ALL_CARD_RATE>=>{
    return {allCardRate}
})
/** 更新最新所有赢的玩家信息*/
export const changeAllWinUsersAction=reduxAct.createAction(ActionTypes.BANDAR_ALL_WIN_USER,
  (allWinUsers:WinUser[]):ActionPayLoad<ActionTypes.BANDAR_ALL_WIN_USER>=>{
    return {allWinUsers}
})
/** 更新区域输赢*/
export const changeAreaWinLoseAction=reduxAct.createAction(ActionTypes.BANDAR_AREA_WIN_LOSE,
  (areaWinLose: number[]):ActionPayLoad<ActionTypes.BANDAR_AREA_WIN_LOSE>=>{
    return {areaWinLose}
  })
/** 更新下注失败的的金币信息*/
export const changeCancelBetDataAction=reduxAct.createAction(ActionTypes.BANDAR_CANCEL_BET_DATA,
  (cancelBetData:BetData):ActionPayLoad<ActionTypes.BANDAR_CANCEL_BET_DATA>=>{
    return {cancelBetData}
})

