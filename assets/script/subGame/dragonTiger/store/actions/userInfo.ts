import { default as reduxAct } from "redux-act";

export type MyInfo = {
  gold: number;
  memberName: string;
  memberId: string;
  icon: number; //头像的spriteFrame下标值
  winGold: number;
};

export type Bet={

}
export type InitStateType = {

  gold:number,
  memberName: string,
  memberId:string,
  icon: number,//头像的spriteFrame下标值
  winGold:number,
  winType?:number,
  memberBet?:object

};

export type UserInfo = {};

export const initState: InitStateType = {
  gold:null,
  memberName: "",
  memberId:"",
  icon: 0,//头像的spriteFrame下标值
  winGold:0,
  winType:0,
  memberBet:{},
};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  DRAGONTGER_MENBER_RESET_STORE = "DRAGONTGER_MENBER_RESET_STORE",
  DRAGONTGER_MENBER_INFO = "DRAGONTGER_MENBER_INFO",
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.DRAGONTGER_MENBER_INFO ? InitStateType :
  A extends ActionTypes.DRAGONTGER_MENBER_RESET_STORE ? { } :never;
  
  /**初始化用户信息 */
export const setUserInfoAction = reduxAct.createAction(ActionTypes.DRAGONTGER_MENBER_INFO,
  (userInfo:{
    gold:number,
    memberName: string,
    icon: number,
    winGold: number,
    memberId: string,
    winType?:number,
    memberBet?:object
  }): ActionPayLoad<ActionTypes.DRAGONTGER_MENBER_INFO> => {
    return { ...userInfo }
})

export const resetUserStore = reduxAct.createAction(ActionTypes.DRAGONTGER_MENBER_RESET_STORE,
  (): ActionPayLoad<ActionTypes.DRAGONTGER_MENBER_RESET_STORE> => {
    return { initState }
  })
