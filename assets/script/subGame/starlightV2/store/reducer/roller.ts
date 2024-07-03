import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/roller";
import { default as reduxAct } from 'redux-act'
import { RollerStatus } from "../../type";

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.STARLIGHTV2_UPDATE_ROLLER_STATUS]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_ROLLER_STATUS>): InitStateType => {
    return {
      ...state,
      rollerStatus: payload.rollerStatus
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_SPEED_STATUS]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_SPEED_STATUS>): InitStateType => {
    return {
      ...state,
      isSpeed: payload.isSpeed
    }
  },
  [ActionTypes.STARLIGHTV2_UPDATE_MANUAL_SPEED_STATUS]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_UPDATE_MANUAL_SPEED_STATUS>): InitStateType => {
    return {
      ...state,
      isManualSpeed: payload.isManualSpeed
    }
  },
  [ActionTypes.STARLIGHTV2_INIT_ROLLER]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHTV2_INIT_ROLLER>): InitStateType => {
    return {
      rollerStatus: RollerStatus.END,
      isSpeed: false,
      isManualSpeed: false,
    }
  },
}, initState);
