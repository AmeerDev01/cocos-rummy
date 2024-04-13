import {MyInfo} from './userInfo';import { default as reduxAct } from "redux-act";

export type History ={
  /**100场开奖结果 */
  data: number[];
  /**龙个数 */
  dragonNum: number;
  /**虎个数 */
  tigerNum: number;
  /**平个数 */
  drawNum:number
  /**龙概率 */
  dragon: number;
  /**虎概率 */
  tiger: number;
  
}
export type MemberData = {
  gold: number;
  memberId: string;
  type:number;
  memberName:string;

};
export type WinInfo={
  gold: number;
  icon:number;
  memberName:string
}
export type InitStateType = {
  /**历史记录信息 */
  historyList:History
   /**左上榜用户信息 */
  roomLeftInfoVos:MyInfo[]
   /**右上榜用户信息 */
  roomRightInfoVos:MyInfo[]
   /**前四位赢家用户信息 */
  roomWinInfo:WinInfo[]
   /**在线人数 */
  roomInfoSize:number
  /**当前用户下注信息 */
  memberBet?:object
  /**当前用户金币值 */
  gold: number,
  gameType: number,
    /**选择的筹码 */
	selectChip: number,
};


export const initState: InitStateType = {
  historyList:{
    data:[],
    dragonNum: 0,
    tigerNum: 0,
    dragon: 0,
    tiger: 0,
    drawNum:0,
  },
  roomLeftInfoVos:[],
  roomRightInfoVos:[],
  roomWinInfo:[],
  roomInfoSize:0,
  memberBet:null,
  gold: 0,
  gameType: null,
  selectChip:1000,
};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  DRAGONTGER_HISTORY_LIST = "DRAGONTGER_HISTORY_LIST",
  DRAGONTGER_ROOM_LEFT_INFOS="DRAGONTGER_ROOM_LEFT_INFOS",
  DRAGONTGER_ROOM_RIGHT_INFOS='DRAGONTGER_ROOM_RIGHT_INFOS',
  DRAGONTGER_ROOM_INFO_SIZE='DRAGONTGER_ROOM_INFO_SIZE',
  DRAGONTGER_ROOM_WIN_INFO='DRAGONTGER_ROOM_WIN_INFO',
  DRAGONTGER_MEMBER_DATA='DRAGONTGER_MEMBER_DATA',
  DRAGONTGER_MEMBER_BET='DRAGONTGER_MEMBER_BET',
  DRAGONTGER_GOLD = "DRAGONTGER_GOLD",
  DRAGONTGER_GAMETYPE="DRAGONTGER_GAMETYPE",
  DRAGONTGER_SELECT_CHIP = "DRAGONTGER_SELECT_CHIP",
  DRAGONTGER_HISTORY_RESET_STORE = "DRAGONTGER_HISTORY_RESET_STORE",
  
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.DRAGONTGER_HISTORY_LIST
    ? { historyList: { 
      data: number[];
      dragonNum: number;
      tigerNum: number;
      dragon: number;
      tiger: number;
      drawNum:number   
  } }:
  A extends ActionTypes.DRAGONTGER_ROOM_LEFT_INFOS?{roomLeftInfoVos:MyInfo[]}:
  A extends ActionTypes.DRAGONTGER_ROOM_RIGHT_INFOS?{roomRightInfoVos:MyInfo[]}:
  A extends ActionTypes.DRAGONTGER_ROOM_WIN_INFO?{roomWinInfo:WinInfo[]}:
  A extends ActionTypes.DRAGONTGER_ROOM_INFO_SIZE?{roomInfoSize:number}:
  A extends ActionTypes.DRAGONTGER_GOLD ? { gold: number } : 
   A extends ActionTypes.DRAGONTGER_GAMETYPE ? {gameType:number}: 
   A extends ActionTypes.DRAGONTGER_SELECT_CHIP ? {selectChip:number}: 
  
  A extends ActionTypes.DRAGONTGER_MEMBER_BET ? { memberBet: object }
  :A extends ActionTypes.DRAGONTGER_HISTORY_RESET_STORE ? { } 
  : never

export const setHistoryListAction = reduxAct.createAction(
  ActionTypes.DRAGONTGER_HISTORY_LIST,
  (
    historyList: {
      data: number[];
      dragonNum: number;
      tigerNum: number;
      dragon: number;
      tiger: number;
      drawNum:number
    
  }
  ): ActionPayLoad<ActionTypes.DRAGONTGER_HISTORY_LIST> => {
    return { historyList };
  }
);

export const setRoomLeftInfosAction = reduxAct.createAction(ActionTypes.DRAGONTGER_ROOM_LEFT_INFOS,
  (roomLeftInfoVos:MyInfo[]): ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_LEFT_INFOS> => {
    return { roomLeftInfoVos }
})

export const setRoomRightInfosAction = reduxAct.createAction(ActionTypes.DRAGONTGER_ROOM_RIGHT_INFOS,
  (roomRightInfoVos:MyInfo[]): ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_RIGHT_INFOS> => {
    return { roomRightInfoVos }
})
export const setRoomWinInfosAction = reduxAct.createAction(ActionTypes.DRAGONTGER_ROOM_WIN_INFO,
  (roomWinInfo:WinInfo[]): ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_WIN_INFO> => {
    return { roomWinInfo }
})
export const setRoomInfoSizeAction = reduxAct.createAction(ActionTypes.DRAGONTGER_ROOM_INFO_SIZE,
  (roomInfoSize:number): ActionPayLoad<ActionTypes.DRAGONTGER_ROOM_INFO_SIZE> => {
    return { roomInfoSize }
})
export const setMemberBetAction = reduxAct.createAction(ActionTypes.DRAGONTGER_MEMBER_BET,
  (memberBet:object): ActionPayLoad<ActionTypes.DRAGONTGER_MEMBER_BET> => {
    return { memberBet }
})
export const changeGoldAction = reduxAct.createAction(ActionTypes.DRAGONTGER_GOLD,
  (gold:number): ActionPayLoad<ActionTypes.DRAGONTGER_GOLD> => {
    return { gold }
  })
export const changeGameTypeAction = reduxAct.createAction(ActionTypes.DRAGONTGER_GAMETYPE,
(gameType:number): ActionPayLoad<ActionTypes.DRAGONTGER_GAMETYPE> => {
  return { gameType }
})

export const changeSelectChipAction=reduxAct.createAction(ActionTypes.DRAGONTGER_SELECT_CHIP,
  (selectChip: number):ActionPayLoad<ActionTypes.DRAGONTGER_SELECT_CHIP>=>{
    return {selectChip}
  })
export const resetHistoryStore = reduxAct.createAction(ActionTypes.DRAGONTGER_HISTORY_RESET_STORE,
  (): ActionPayLoad<ActionTypes.DRAGONTGER_HISTORY_RESET_STORE> => {
    return { initState }
  })
  
