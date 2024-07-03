import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/game";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({

  [ActionTypes.BANDAR_CHANGE_ONLINE_NUMBER]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_CHANGE_ONLINE_NUMBER>): InitStateType => ({
    ...state,
    onlineNum:payload.onlineNum,
  }),
  
  [ActionTypes.BANDAR_CHANGE_MY_INFO]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_CHANGE_MY_INFO>): InitStateType => ({
    ...state,
    myInfo:payload.myInfo,
  }),
  [ActionTypes.BANDAR_MY_WIN_LOSE]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_MY_WIN_LOSE>): InitStateType => ({
    ...state,
    myWinLose:payload.myWinLose,
  }),

  [ActionTypes.BANDER_GAME_USERS_INFO]: (state, payload: ActionPayLoad<ActionTypes.BANDER_GAME_USERS_INFO>): InitStateType => ({
    ...state,
    usersInfo:payload.usersInfo,
  }),

  [ActionTypes.BANDAR_COUNT_DOWN]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_COUNT_DOWN>): InitStateType => ({
    ...state,
    countDown:payload.countDown,
  }),

  [ActionTypes.BANDAR_SECONDS]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_SECONDS>): InitStateType => ({
    ...state,
    seconds:payload.seconds,
  }),

  [ActionTypes.BANDAR_GOLD]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_GOLD>): InitStateType => ({
    ...state,
    gold:payload.gold,
  }),
  [ActionTypes.BANDER_GAME_STATUS]: (state, payload: ActionPayLoad<ActionTypes.BANDER_GAME_STATUS>): InitStateType => ({
    ...state,
    gameStatus:payload.gameStatus,
  }),
  [ActionTypes.BANDER_INIT_GAME_STATUS]: (state, payload: ActionPayLoad<ActionTypes.BANDER_INIT_GAME_STATUS>): InitStateType => ({
    ...state,
    initGameStatus:payload.initGameStatus,
  }),
  [ActionTypes.BANDAR_GAME_JACKPOT]: (state, payload: ActionPayLoad<ActionTypes.BANDAR_GAME_JACKPOT>): InitStateType => ({
    ...state,
    jackpot:payload.jackpot,
  }),
  [ActionTypes.BANDER_GAME_TRIG_JACKPOT]: (state, payload: ActionPayLoad<ActionTypes.BANDER_GAME_TRIG_JACKPOT>): InitStateType => ({
    ...state,
    trigJackpot:payload.trigJackpot,
  }),
  [ActionTypes.BANDER_GAME_TIPS]: (state, payload: ActionPayLoad<ActionTypes.BANDER_GAME_TIPS>): InitStateType => ({
    ...state,
    tips:payload.tips,
  }),

}, initState);