import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'
export default reduxAct.createReducer<InitStateType>({
    [ActionTypes.CRASHV2_RENEWAL_GOLD]: (state, payload: ActionPayLoad<ActionTypes.CRASHV2_RENEWAL_GOLD>): InitStateType => {
        return {
          ...state,
          gold: payload.gold,
        }
      },
    [ActionTypes.CRASHV2_CHANGE_GAMETYPE]: (state, payload: ActionPayLoad<ActionTypes.CRASHV2_CHANGE_GAMETYPE>): InitStateType => {
        return {
          ...state,
          gameType: payload.gameType,
        }
      },
}, initState);
