import { instantiate } from "cc";
import {
  ActionTypes,
  ActionPayLoad,
  InitStateType,
  initState
} from "../actions/memberInfo";
import { default as reduxAct } from "redux-act";
import { defaultLanguageType } from "../../../language/languagePkg";
import { config } from "../../../config/config";

export default reduxAct.createReducer<InitStateType>(
  {
    [ActionTypes.SET_MEMBER_INFO]: (
      state,
      payload: ActionPayLoad<ActionTypes.SET_MEMBER_INFO>
    ): InitStateType => ({
      ...state,
      memberName: payload.memberName
        ? payload.memberName.replace(
            new RegExp(
              `^${defaultLanguageType[config.country].phoneAreaNum}`,
              "g"
            ),
            ""
          )
        : payload.memberName,
      avatarIndex: payload.avatarIndex,
      memberAssetGoldPieces: payload.memberAssetGoldPieces,
      memberAssetSafeGoldPieces: payload.memberAssetSafeGoldPieces,
      memberId: payload.memberId,
      nickName: payload.nickName,
      vipLevel: payload.vipLevel,
      level: payload.level,
      phone: payload.phone,
      gender: payload.gender,
      vipLevelExperience: payload.vipLevelExperience,
      levelExperience: payload.levelExperience,
      tourist: payload.tourist,
      memberRechargeWater: payload.memberRechargeWater,
      minimumWithdrawal: payload.minimumWithdrawal,
      canExtractRebateGold: payload.canExtractRebateGold,
      rebateScale: payload.rebateScale,
      totalReturnWaterAmount: payload.totalReturnWaterAmount,
      totalFlowingWater: payload.totalFlowingWater,
      flowingWater: payload.flowingWater
    }),
    [ActionTypes.RESET_MEMBER_INFO_DATA]: (state): InitStateType => ({
      ...Object.assign({}, initState)
    }),
    [ActionTypes.SET_VIP]: (
      state,
      payload: ActionPayLoad<ActionTypes.SET_VIP>
    ): InitStateType => {
      return {
        ...state,
        vipLevel: payload.vipLevel,
        vipLevelExperience: payload.vipLevelExperience
      };
    },
    [ActionTypes.CHANGE_GOLD]: (
      state,
      payload: ActionPayLoad<ActionTypes.CHANGE_GOLD>
    ): InitStateType => {
      return {
        ...state,
        memberAssetGoldPieces: state.memberAssetGoldPieces + payload.value
      };
    },
    [ActionTypes.UPDATE_ACTIVITY_STATUS]: (
      state,
      payload: ActionPayLoad<ActionTypes.UPDATE_ACTIVITY_STATUS>
    ): InitStateType => {
      return {
        ...state,
        isUnreadActivity: payload.isUnreadActivity
      };
    }
  },
  initState
);
