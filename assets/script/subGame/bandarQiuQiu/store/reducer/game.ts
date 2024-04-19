import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDARQIUQIU_CHANGE_ONLINE_NUMBER]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_CHANGE_ONLINE_NUMBER>): InitStateType => ({
    ...state,
    onlineNum:payload.onlineNum,
  }),
  
  [ActionTypes.BANDARQIUQIU_CHANGE_MY_INFO]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_CHANGE_MY_INFO>): InitStateType => ({
    ...state,
    myInfo:payload.myInfo,
  }),
  [ActionTypes.BANDARQIUQIU_MY_WIN_LOSE]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_MY_WIN_LOSE>): InitStateType => ({
    ...state,
    myWinLose:payload.myWinLose,
  }),

  [ActionTypes.BANDARQIUQIU_GAME_USERS_INFO]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_GAME_USERS_INFO>): InitStateType => ({
    ...state,
    usersInfo:payload.usersInfo,
  }),

  [ActionTypes.BANDARQIUQIU_COUNT_DOWN]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_COUNT_DOWN>): InitStateType => ({
    ...state,
    countDown:payload.countDown,
  }),
  [ActionTypes.BANDARQIUQIU_LAY_COUNT_DOWN]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_LAY_COUNT_DOWN>): InitStateType => ({
    ...state,
    layCountDown:payload.layCountDown,
  }),

  [ActionTypes.BANDARQIUQIU_SECONDS]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_SECONDS>): InitStateType => ({
    ...state,
    seconds:payload.seconds,
  }),

  [ActionTypes.BANDARQIUQIU_GOLD]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_GOLD>): InitStateType => ({
    ...state,
    gold:payload.gold,
  }),
  [ActionTypes.BANDARQIUQIU_GAME_STATUS]: (state, payload: ActionPayLoad<ActionTypes.BANDARQIUQIU_GAME_STATUS>): InitStateType => ({
    ...state,
    gameStatus:payload.gameStatus,
  }),
  [ActionTypes.BANDERQIUQIU_INIT_GAME_STATUS]: (state, payload: ActionPayLoad<ActionTypes.BANDERQIUQIU_INIT_GAME_STATUS>): InitStateType => ({
    ...state,
    initGameStatus:payload.initGameStatus,
  }),
  [ActionTypes.BANDERQIUQIU_GAME_TIPS]: (state, payload: ActionPayLoad<ActionTypes.BANDERQIUQIU_GAME_TIPS>): InitStateType => ({
    ...state,
    tips:payload.tips,
  }),

}, initState);