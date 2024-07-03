import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/counter";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.CHANGE_SIZE]: (state, payload: ActionPayLoad<ActionTypes.CHANGE_SIZE>): InitStateType => ({
    ...state,
    size: payload.size
  }),
  [ActionTypes.CHANGE_COLOR]: (state, payload: ActionPayLoad<ActionTypes.CHANGE_COLOR>): InitStateType => {
    return {
      ...state,
      color: payload.color
    }
  },
}, initState);