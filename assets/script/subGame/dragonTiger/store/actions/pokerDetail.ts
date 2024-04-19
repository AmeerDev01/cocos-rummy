import { default as reduxAct } from "redux-act";

export interface DragonTigerCard{
    suit:number,//花色
    rank:string,//数字
    color:number,//颜色
  }
  export type Tips = {
    name: string,
    num: string,
  }

export type InitStateType = {
    pokerInfo: {
      pokerLeftNum: DragonTigerCard;
      pokerRightNum:DragonTigerCard ;
    }
    /**左边牌信息 */
    pokerLeftNum:DragonTigerCard ;
    /**右边牌信息 */
    pokerRightNum:DragonTigerCard ;
    /**已使用牌数量 */
    sendedP:number,
    /**未使用牌数量 */
    readySendP:number
    /**赢的区域 */
    win: number,
    tips: Tips[],
    vip: number,
    level: number,
};



export const initState: InitStateType = {
    pokerInfo:null,
    pokerLeftNum: {
        suit:0,//花色
        rank:"",//数字
        color:0
    },
    pokerRightNum: {
        suit:0,//花色
        rank:"",//数字
        color:0
    },
    sendedP:0,
    readySendP:0,
  win: 0,
  tips: null,
  vip: 0,
  level:0,
};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  DRAGONTGER_POKER_INFO = "DRAGONTGER_POKER_INFO",
  DRAGONTGER_POKER_LEFT = "DRAGONTGER_POKER_LEFT",
  DRAGONTGER_POKER_RIGHT='DRAGONTGER_POKER_RIGHT',
  DRAGONTGER_POKER_SENDEDP="DRAGONTGER_POKER_SENDEDP",
  DRAGONTGER_POKER_WIN="DRAGONTGER_POKER_WIN",
  DRAGONTGER_POKER_READYSENDP = "DRAGONTGER_POKER_READYSENDP",
  DRAGONTGER_TIPS = "DRAGONTGER_TIPS",
  DRAGONTGER_VIP="DRAGONTGER_VIP",
  DRAGONTGER_LEVEL="DRAGONTGER_LEVEL",
  DRAGONTGER_POKER_RESET_STORE = "DRAGONTGER_POKER_RESET_STORE",
  
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.DRAGONTGER_POKER_INFO ? {pokerInfo:{
    pokerLeftNum: DragonTigerCard;
    pokerRightNum:DragonTigerCard ;
  }}:
  A extends ActionTypes.DRAGONTGER_POKER_LEFT ? {pokerLeftNum:{
    suit:number,
    rank:string,
    color:number,
  }} : 
  A extends ActionTypes.DRAGONTGER_POKER_RIGHT ? {pokerRightNum:{
    suit:number,
    rank:string,
    color:number,
  }} : 
  A extends ActionTypes.DRAGONTGER_POKER_SENDEDP ? {sendedP:number}:
  A extends ActionTypes.DRAGONTGER_POKER_READYSENDP ? {readySendP:number}:
  A extends ActionTypes.DRAGONTGER_POKER_WIN ? { win: number }:
  A extends ActionTypes.DRAGONTGER_TIPS ? { tips: Tips[] } :
  A extends ActionTypes.DRAGONTGER_VIP ? { vip: number } :
  A extends ActionTypes.DRAGONTGER_LEVEL ? { level: number } :
  A extends ActionTypes.DRAGONTGER_POKER_RESET_STORE ? { } :

  never;
  
export const updatePokerInfo= reduxAct.createAction(ActionTypes.DRAGONTGER_POKER_INFO,
  (pokerInfo:{
    pokerLeftNum: DragonTigerCard;
    pokerRightNum:DragonTigerCard ;
  }): ActionPayLoad<ActionTypes.DRAGONTGER_POKER_INFO> => {
    return { pokerInfo }
})

export const setPokerLeftAction = reduxAct.createAction(ActionTypes.DRAGONTGER_POKER_LEFT,
  (pokerLeftNum:{
    suit:number,
    rank:string,
    color:number,
  }): ActionPayLoad<ActionTypes.DRAGONTGER_POKER_LEFT> => {
    return { pokerLeftNum }
})

export const setPokerRightAction = reduxAct.createAction(ActionTypes.DRAGONTGER_POKER_RIGHT,
    (pokerRightNum:{
      suit:number,
      rank:string,
      color:number,
    }): ActionPayLoad<ActionTypes.DRAGONTGER_POKER_RIGHT> => {
      return {pokerRightNum }
  })

  export const setSendedPAction = reduxAct.createAction(ActionTypes.DRAGONTGER_POKER_SENDEDP,
    (sendedP:number): ActionPayLoad<ActionTypes.DRAGONTGER_POKER_SENDEDP> => {
      return { sendedP }
  })
  export const setReadyPAction = reduxAct.createAction(ActionTypes.DRAGONTGER_POKER_READYSENDP,
    (readySendP:number): ActionPayLoad<ActionTypes.DRAGONTGER_POKER_READYSENDP> => {
      return { readySendP }
  })
  export const setWinAction = reduxAct.createAction(ActionTypes.DRAGONTGER_POKER_WIN,
    (win:number): ActionPayLoad<ActionTypes.DRAGONTGER_POKER_WIN> => {
      return { win }
  })
  export const setTipsAction = reduxAct.createAction(ActionTypes.DRAGONTGER_TIPS,
    (tips:Tips[]): ActionPayLoad<ActionTypes.DRAGONTGER_TIPS> => {
      return { tips }
  })
  export const setVipAction = reduxAct.createAction(ActionTypes.DRAGONTGER_VIP,
    (vip:number): ActionPayLoad<ActionTypes.DRAGONTGER_VIP> => {
      return { vip }
   })
  export const setLevelAction = reduxAct.createAction(ActionTypes.DRAGONTGER_LEVEL,
    (level:number): ActionPayLoad<ActionTypes.DRAGONTGER_LEVEL> => {
      return { level }
    })
  
export const resetPokerStore = reduxAct.createAction(ActionTypes.DRAGONTGER_POKER_RESET_STORE,
  (): ActionPayLoad<ActionTypes.DRAGONTGER_POKER_RESET_STORE> => {
    return { initState }
  })
    




