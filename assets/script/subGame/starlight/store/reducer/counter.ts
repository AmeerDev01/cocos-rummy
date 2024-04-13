import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/counter";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.STARLIGHT_CHANGE_SIZE]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_SIZE>): InitStateType => ({
    ...state,
    size: payload.size
  }),
  [ActionTypes.STARLIGHT_CHANGE_COLOR]: (state, payload: ActionPayLoad<ActionTypes.STARLIGHT_CHANGE_COLOR>): InitStateType => {
    return {
      ...state,
      color: payload.color
    }
  },
}, initState);
