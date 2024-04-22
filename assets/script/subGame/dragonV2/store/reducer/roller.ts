
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/roller";
import { default as reduxAct } from 'redux-act'
import { RollerStatus } from "../../type";


export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.DRAGONV2_UPDATE_ROLLER_STATUS]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_ROLLER_STATUS>): InitStateType => {
    return {
      ...state,
      rollerStatus: payload.rollerStatus
    }
  },
  [ActionTypes.DRAGONV2_UPDATE_SPEED_STATUS]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_UPDATE_SPEED_STATUS>): InitStateType => {
    return {
      ...state,
      isSpeed: payload.isSpeed
    }
  },
  [ActionTypes.DRAGONV2_INIT_ROLLER]: (state, payload: ActionPayLoad<ActionTypes.DRAGONV2_INIT_ROLLER>): InitStateType => {
    return {
      rollerStatus: RollerStatus.END,
      isSpeed: false,
    }
  },
}, initState);