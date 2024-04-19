import { default as reduxAct } from "redux-act";

export type MyInfo = {

};

export type Bet={

}
export type InitStateType = {


};

export type UserInfo = {};

export const initState: InitStateType = {

};

/**必须大写，不然redux-act要自动加序列号 */

export enum ActionTypes {
  BANDAR_MEMBER_INFO = "BANDAR_MEMBER_INFO",
}

/**定义action的payLoad类型 */

export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.BANDAR_MEMBER_INFO ? InitStateType : never;

export const setUserInfoAction = reduxAct.createAction(ActionTypes.BANDAR_MEMBER_INFO,
  (userInfo:{}): ActionPayLoad<ActionTypes.BANDAR_MEMBER_INFO> => {
    return { ...userInfo }
})


