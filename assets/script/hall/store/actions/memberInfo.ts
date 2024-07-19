import { default as reduxAct } from "redux-act";
import { HallGameGateType } from "../../../common/allTypes";

export type InitStateType = {
  memberName: string;
  avatarIndex: number;
  /**玩家当前金币 */
  memberAssetGoldPieces: number;
  memberAssetSafeGoldPieces: number;
  memberId: string;
  nickName: string;
  vipLevel: number;
  vipLevelExperience: number;
  gender: number;
  level: number;
  levelExperience: number;
  phone: string;
  tourist: number;
  /**可提取返水 */
  memberRechargeWater: number;
  /**返水触发线 */
  minimumWithdrawal: number;
  /**总打码量 */
  totalFlowingWater: number;
  /**玩家返佣 */
  canExtractRebateGold: number;
  /**返水兑换比例 */
  rebateScale: number;
  /**总返水金额 */
  totalReturnWaterAmount: number;
  /**当前有效打码量 */
  flowingWater: number;
  /**是否有未读活动 */
  isUnreadActivity: boolean;
};
export const initState: InitStateType = {
  memberName: "",
  avatarIndex: 0,
  memberAssetGoldPieces: 0,
  memberAssetSafeGoldPieces: 0,
  memberId: "",
  nickName: "",
  vipLevel: 0,
  vipLevelExperience: 0,
  gender: 0,
  level: 0,
  levelExperience: 0,
  phone: "",
  tourist: 1,
  memberRechargeWater: 0,
  minimumWithdrawal: 0,
  totalFlowingWater: 0,
  canExtractRebateGold: 0,
  rebateScale: 0,
  totalReturnWaterAmount: 0,
  flowingWater: 0,
  isUnreadActivity: false
};

/**必须大写，不然redux-act这狗日的要自动加序列号 */
export enum ActionTypes {
  SET_MEMBER_INFO = "SET_MEMBER_INFO",
  RESET_MEMBER_INFO_DATA = "RESET_MEMBER_INFO_DATA",
  SET_VIP = "SET_VIP",
  CHANGE_GOLD = "CHANGE_GOLD",
  UPDATE_ACTIVITY_STATUS = "UPDATE_ACTIVITY_STATUS"
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.SET_MEMBER_INFO
    ? InitStateType
    : A extends ActionTypes.SET_VIP
    ? { vipLevel: number; vipLevelExperience: number }
    : A extends ActionTypes.CHANGE_GOLD
    ? { value: number }
    : A extends ActionTypes.UPDATE_ACTIVITY_STATUS
    ? { isUnreadActivity: boolean }
    : never;

export const setMemberInfo = reduxAct.createAction(
  ActionTypes.SET_MEMBER_INFO,
  (memberInfo: {
    memberName: string;
    avatarIndex: number;
    memberAssetGoldPieces: number;
    memberAssetSafeGoldPieces: number;
    memberId: string;
    nickName: string;
    vipLevel: number;
    vipLevelExperience: number;
    gender: number;
    level: number;
    levelExperience: number;
    phone: string;
    tourist: number;
    /**可提取返水 */
    memberRechargeWater: number;
    /**返水触发线 */
    minimumWithdrawal: number;
    /**总打码量 */
    totalFlowingWater: number;
    /**玩家返佣 */
    canExtractRebateGold: number;
    /**返水兑换比例 */
    rebateScale: number;
    /**总返水金额 */
    totalReturnWaterAmount: number;
    /**传入的当前有效打码量 */
    flowingWater: number;
    /**是否有未读活动 */
    isUnreadActivity: boolean;
  }): ActionPayLoad<ActionTypes.SET_MEMBER_INFO> => {
    return { ...memberInfo };
  }
);

export const resetMemberInfo = reduxAct.createAction(
  ActionTypes.RESET_MEMBER_INFO_DATA,
  (): any => {}
);
export const setVip = reduxAct.createAction(
  ActionTypes.SET_VIP,
  (
    vipLevel: number,
    vipLevelExperience: number
  ): ActionPayLoad<ActionTypes.SET_VIP> => {
    return { vipLevel, vipLevelExperience };
  }
);
export const changeGold = reduxAct.createAction(
  ActionTypes.CHANGE_GOLD,
  (value: number): ActionPayLoad<ActionTypes.CHANGE_GOLD> => {
    return { value };
  }
);
export const updateActivityStatus = reduxAct.createAction(
  ActionTypes.UPDATE_ACTIVITY_STATUS,
  (
    isUnreadActivity: boolean
  ): ActionPayLoad<ActionTypes.UPDATE_ACTIVITY_STATUS> => {
    return { isUnreadActivity };
  }
);
