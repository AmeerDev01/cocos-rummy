import { default as reduxAct } from 'redux-act';
import { ActionPayLoad, ActionTypes, InitStateType, initState } from "../action/game";
import { instantiate } from 'cc';

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.FISH_INIT_ROOM_LIST]: (state, payload: ActionPayLoad<ActionTypes.FISH_INIT_ROOM_LIST>): InitStateType => {
    return {
      ...state,
      roomInfos: payload.roomInfos
    }
  },
  [ActionTypes.FISH_QUIT_GAME]: (state, payload: ActionPayLoad<ActionTypes.FISH_QUIT_GAME>): InitStateType => {
    const _state = instantiate(state);
    _state.roomInfos = [];
    return {
      ..._state,
    }
  },
}, initState);