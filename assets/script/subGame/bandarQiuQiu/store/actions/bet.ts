import { default as reduxAct } from "redux-act";
import { BetData, BetType, SendBet } from "../../type";

export type CardType = {
  greenType?: number,
  redType?: number,
  blueType?:number,
}

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
  winAreaRate: number[],
  /** 特殊牌型展示 */
  cardType:CardType,
  /**所有区域倍率 */
  allCardRate:number[],
  /**区域输赢 */
  areaWinLose:number[],
  /**结算 用户赢家 */
  allWinUsers: WinUser[],
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
  winAreaRate:null,
  allCardRate:null,
  areaWinLose:null,
  allWinUsers: null,
  cardType: null,
  cancelBetData:null,

};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  BANDARQIUQIU_BET_DATA = "BANDARQIUQIU_BET_DATA",
  BANDARQIUQIU_LAST_BET_DATA = "BANDARQIUQIU_LAST_BET_DATA",
  BANDARQIUQIU_CHANGE_SELECT_CHIP = "BANDARQIUQIU_CHANGE_SELECT_CHIP",
  BANDARQIUQIU_NEW_BET_DATA = "BANDARQIUQIU_NEW_BET_DATA",
  BANDARQIUQIU_GOLD_DATA = "BANDARQIUQIU_GOLD_DATA",
  BANDARQIUQIU_CARD_RATE = "BANDARQIUQIU_CARD_RATE",
  BANDARQIUQIU_CARD_TYPE = "BANDARQIUQIU_CARD_TYPE",
  BANDARQIUQIU_ALL_CARD_RATE = "BANDARQIUQIU_ALL_CARD_RATE",
  BANDARQIUQIU_ALL_WIN_USER = "BANDARQIUQIU_ALL_WIN_USER",
  BANDARQIUQIU_AREA_WIN_LOSE = "BANDARQIUQIU_AREA_WIN_LOSE",
  BANDARQIUQIU_MEMBER_BET = "BANDARQIUQIU_MEMBER_BET",
  BANDARQIUQIU_CANCEL_BET_DATA = "BANDARQIUQIU_CANCEL_BET_DATA",

}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDARQIUQIU_BET_DATA ? { betData:BetData } : 
  A extends ActionTypes.BANDARQIUQIU_NEW_BET_DATA ? { newBetData:BetData } : 
  A extends ActionTypes.BANDARQIUQIU_LAST_BET_DATA?{lastBet:SendBet[]}:
  A extends ActionTypes.BANDARQIUQIU_CHANGE_SELECT_CHIP?{selectChip: number}:
  A extends ActionTypes.BANDARQIUQIU_GOLD_DATA?{goldData: object}:
  A extends ActionTypes.BANDARQIUQIU_CARD_RATE ? { winAreaRate: number[] } :
  A extends ActionTypes.BANDARQIUQIU_CARD_TYPE?{cardType:CardType}:
  A extends ActionTypes.BANDARQIUQIU_ALL_CARD_RATE?{allCardRate:number[]}:
  A extends ActionTypes.BANDARQIUQIU_ALL_WIN_USER?{allWinUsers:WinUser[]}:
  A extends ActionTypes.BANDARQIUQIU_AREA_WIN_LOSE?{areaWinLose:number[]}:
  A extends ActionTypes.BANDARQIUQIU_MEMBER_BET ? { memberBet: object }:
  A extends ActionTypes.BANDARQIUQIU_CANCEL_BET_DATA?{cancelBetData:BetData}:
  never;
/** 更新下注信息*/
export const setBetDataAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_BET_DATA,
  (betData:BetData): ActionPayLoad<ActionTypes.BANDARQIUQIU_BET_DATA> => {
    return { betData }
})
/** 更新最新下注信息*/
export const setNewBetDataAction = reduxAct.createAction(ActionTypes.BANDARQIUQIU_NEW_BET_DATA,
  (newBetData:BetData): ActionPayLoad<ActionTypes.BANDARQIUQIU_NEW_BET_DATA> => {
    return { newBetData }
})
/** 更新最新上把下注信息*/
export const setLastBetAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_LAST_BET_DATA,
  (lastBet:SendBet[]):ActionPayLoad<ActionTypes.BANDARQIUQIU_LAST_BET_DATA>=>{
    return {lastBet}
})
/** 更新最新用户下注区域金币值*/
export const setMemberBetAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_MEMBER_BET,
  (memberBet:object):ActionPayLoad<ActionTypes.BANDARQIUQIU_MEMBER_BET>=>{
    return {memberBet}
})
/** 更新最新选择金币值*/
export const changeSelectChipAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_CHANGE_SELECT_CHIP,
  (selectChip: number):ActionPayLoad<ActionTypes.BANDARQIUQIU_CHANGE_SELECT_CHIP>=>{
    return {selectChip}
})
/** 更新最新区域下注总值*/
export const changeGoldDataAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_GOLD_DATA,
  (goldData:object):ActionPayLoad<ActionTypes.BANDARQIUQIU_GOLD_DATA>=>{
    return {goldData}
})
/** 更新最新赢的区域*/
export const changeWinAreaRateAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_CARD_RATE,
  (winAreaRate:number[]):ActionPayLoad<ActionTypes.BANDARQIUQIU_CARD_RATE>=>{
    return {winAreaRate}
  })
/** 更新最新牌型 twin six qiu twins...*/
export const changeCardTypeAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_CARD_TYPE,
  (cardType:CardType):ActionPayLoad<ActionTypes.BANDARQIUQIU_CARD_TYPE>=>{
    return {cardType}
})
/** 更新最新牌的倍率值*/
export const changeAllCardRateAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_ALL_CARD_RATE,
  (allCardRate:number[]):ActionPayLoad<ActionTypes.BANDARQIUQIU_ALL_CARD_RATE>=>{
    return {allCardRate}
})
/** 更新最新所有赢的玩家信息*/
export const changeAllWinUsersAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_ALL_WIN_USER,
  (allWinUsers:WinUser[]):ActionPayLoad<ActionTypes.BANDARQIUQIU_ALL_WIN_USER>=>{
    return {allWinUsers}
})
/** 更新区域输赢*/
export const changeAreaWinLoseAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_AREA_WIN_LOSE,
  (areaWinLose:number[]):ActionPayLoad<ActionTypes.BANDARQIUQIU_AREA_WIN_LOSE>=>{
    return {areaWinLose}
  })
/** 更新下注失败的的金币信息*/
export const changeCancelBetDataAction=reduxAct.createAction(ActionTypes.BANDARQIUQIU_CANCEL_BET_DATA,
  (cancelBetData:BetData):ActionPayLoad<ActionTypes.BANDARQIUQIU_CANCEL_BET_DATA>=>{
    return {cancelBetData}
})
