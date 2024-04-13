import { default as reduxAct } from "redux-act";
import { BetData, HeadType, MemberInfoVo, TotalBetArea, WinUser } from "../../type";

export type InitStateType = {
    /**当前用户信息 */
    myInfo: HeadType;
      /** 榜上所有用户 */
    usersInfo: MemberInfoVo[];
      /**倒计时 */
    countDown: number;
      /**最新的下注信息 */
    newBetData: BetData,//===> 获取下注返回
    /**区域总值 */
    goldData: TotalBetArea,
    allWinUsers: WinUser[],
        /**下注失败的金币信息 */
    cancelBetData:BetData
}
export const initState: InitStateType = {
  myInfo: null,
  usersInfo:null,
  countDown: null,
  newBetData: null,
  goldData: null,
  allWinUsers: null,
  cancelBetData:null,
}
/**必须大写，不然redux-act要自动加序列号 */
export enum ActionTypes { 
  DRAGONTIGER_CHANGE_MY_INFO = "DRAGONTIGER_CHANGE_MY_INFO",
  DRAGONTIGER_USERS_INFO = "DRAGONTIGER_USERS_INFO",
  DRAGONTIGER_COUNT_DOWN = "DRAGONTIGER_COUNT_DOWN",
  DRAGONTIGER_NEW_BET_DATA = "DRAGONTIGER_NEW_BET_DATA", 
  DRAGONTIGER_GOLD_DATA = "DRAGONTIGER_GOLD_DATA",
  DRAGONTIGER_ALL_WIN_USER = "DRAGONTIGER_ALL_WIN_USER",
  DRAGONTIGER_CHANGE_ONLINE_NUMBER = 'DRAGONTIGER_CHANGE_ONLINE_NUMBER',
  DRAGONTGER_CANCEL_BET_DATA="DRAGONTGER_CANCEL_BET_DATA",
  DRAGONTGER_RESET_STORE = "DRAGONTGER_RESET_STORE",
  
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.DRAGONTIGER_CHANGE_MY_INFO ? { myInfo: HeadType } 
  :A extends ActionTypes.DRAGONTIGER_USERS_INFO ? { usersInfo: MemberInfoVo[] }
  : A extends ActionTypes.DRAGONTIGER_COUNT_DOWN ? { countDown: number } 
  :A extends ActionTypes.DRAGONTIGER_NEW_BET_DATA ? {  newBetData: BetData } 
  : A extends ActionTypes.DRAGONTIGER_GOLD_DATA ? { goldData: TotalBetArea } 
  : A extends ActionTypes.DRAGONTIGER_ALL_WIN_USER ? { allWinUsers: WinUser[] } 
  :A extends ActionTypes.DRAGONTGER_CANCEL_BET_DATA ? {cancelBetData:BetData}
  :A extends ActionTypes.DRAGONTGER_RESET_STORE ? { } 
  : never;

/**初始化用户信息 */
export const setMyInfoAction = reduxAct.createAction(
    ActionTypes.DRAGONTIGER_CHANGE_MY_INFO,
    (myInfo: HeadType): ActionPayLoad<ActionTypes.DRAGONTIGER_CHANGE_MY_INFO> => {
      return { myInfo };
    }
);    
  /**初始化榜上用户信息 */
export const setUsersInfoAction = reduxAct.createAction(

  
    ActionTypes.DRAGONTIGER_USERS_INFO,
  (usersInfo: MemberInfoVo[]): ActionPayLoad<ActionTypes.DRAGONTIGER_USERS_INFO> => {
      return { usersInfo };
    }
);
  /**设置倒计时时间 */
export const setCountDownAction = reduxAct.createAction(
    ActionTypes.DRAGONTIGER_COUNT_DOWN,
    (countDown: number): ActionPayLoad<ActionTypes.DRAGONTIGER_COUNT_DOWN> => {
      return { countDown };
    }
);
export const setNewBetDataAction = reduxAct.createAction(ActionTypes.DRAGONTIGER_NEW_BET_DATA,
    (newBetData:BetData): ActionPayLoad<ActionTypes.DRAGONTIGER_NEW_BET_DATA> => {
      return { newBetData }
})
export const changeGoldDataAction=reduxAct.createAction(ActionTypes.DRAGONTIGER_GOLD_DATA,
    (goldData:TotalBetArea):ActionPayLoad<ActionTypes.DRAGONTIGER_GOLD_DATA>=>{
    return {goldData}
})
export const changeAllWinUsersAction=reduxAct.createAction(ActionTypes.DRAGONTIGER_ALL_WIN_USER,
    (allWinUsers:WinUser[]):ActionPayLoad<ActionTypes.DRAGONTIGER_ALL_WIN_USER>=>{
    return {allWinUsers}
    })


export const changeCancelBetDataAction = reduxAct.createAction(ActionTypes.DRAGONTGER_CANCEL_BET_DATA,
  (cancelBetData:BetData): ActionPayLoad<ActionTypes.DRAGONTGER_CANCEL_BET_DATA> => {
    return { cancelBetData }
  })

  export const resetStore = reduxAct.createAction(ActionTypes.DRAGONTGER_RESET_STORE,
   (): ActionPayLoad<ActionTypes.DRAGONTGER_RESET_STORE> => {
    return { initState }
  })