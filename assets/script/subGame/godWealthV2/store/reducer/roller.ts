import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/roller";
import { default as reduxAct } from 'redux-act'
import config from "../../config";
import { copy } from "../../../../utils/tool";
import { RollerStatus } from "../../type";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.GODWEALTHV2_UPDATE_ROLLER_STATUS]: (state, payload: ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_ROLLER_STATUS>): InitStateType => {
    return {
      ...state,
      rollerStatus: payload.rollerStatus
    }
  },

  [ActionTypes.GODWEALTHV2_UPDATE_SPEED_STATUS]: (state, payload: ActionPayLoad<ActionTypes.GODWEALTHV2_UPDATE_SPEED_STATUS>): InitStateType => {
    return {
      ...state,
      isSpeed: payload.isSpeed
    }
  },
  [ActionTypes.GODWEALTHV2_INIT_ROLLER]: (state, payload: ActionPayLoad<ActionTypes.GODWEALTHV2_INIT_ROLLER>): InitStateType => {
    return {
      rollerStatus: RollerStatus.END,
      isSpeed: false,
    }
  },
}, initState);
