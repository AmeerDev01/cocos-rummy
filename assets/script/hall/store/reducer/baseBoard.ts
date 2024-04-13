import { instantiate } from "cc";
import { ActionTypes, ActionPayLoad, InitStateType, initState } from "../actions/baseBoard";
import { default as reduxAct } from 'redux-act'

export default reduxAct.createReducer<InitStateType>({
  [ActionTypes.ADD_TOAST]: (state, payload: ActionPayLoad<ActionTypes.ADD_TOAST>): InitStateType => {
    return ({
      ...state,
      toastData: payload.toastData
    })
    // state.toastData = { content: "", type: state.toastData.type }
    // return result

    // const _state = instantiate(state)
    // _state.toastData = { ...payload.toastData }
    // console.log('reducer',_state)
    // return _state
  },
  [ActionTypes.SET_LOADING]: (state, payload: ActionPayLoad<ActionTypes.SET_LOADING>): InitStateType => {
    return {
      ...state,
      loadPayload: Object.assign({ isLoadPayload: false, flagId: '_', isAllowCloseLoading: false }, payload.isLoadPayload),
    }
  },
  [ActionTypes.SET_ACTIVE_SUBGAME]: (state, payload: ActionPayLoad<ActionTypes.SET_ACTIVE_SUBGAME>): InitStateType => {
    return {
      ...state,
      subGameInfo: payload.subGameInfo
    }
  },
  [ActionTypes.SET_SUBGAME_STATE]: (state, payload: ActionPayLoad<ActionTypes.SET_SUBGAME_STATE>): InitStateType => {
    const _state = instantiate(state)
    _state.subGameInfo && (_state.subGameInfo.runState = payload.subGameRunState)
    return _state
  },
  [ActionTypes.CHANGE_WEB_VIEW]: (state, payload: ActionPayLoad<ActionTypes.CHANGE_WEB_VIEW>): InitStateType => {
    return {
      ...state,
      isShowWebView: payload.value
    }
  },
  [ActionTypes.LOAD_RECOMMEND_DATA]: (state, payload: ActionPayLoad<ActionTypes.LOAD_RECOMMEND_DATA>): InitStateType => {
    return {
      ...state,
      isLoadRecommendData: Date.parse(new Date().toString()).toString()
    }
  },
  [ActionTypes.APP_DOWNLOAD_GUIDE]: (state, payload: ActionPayLoad<ActionTypes.APP_DOWNLOAD_GUIDE>): InitStateType => {
    return {
      ...state,
      appDownLoadGuide: payload.appDownLoadGuide
    }
  },
  [ActionTypes.SOCKET_CONNECT]: (state, payload: ActionPayLoad<ActionTypes.SOCKET_CONNECT>): InitStateType => {
    if (state.remainRetryCount === undefined) { }
    return {
      ...state,
      isConnect: payload.connectData.isConnect,
      remainRetryCount: payload.connectData.remainRetryCount
      // remainRetryCount: (payload.connectData.remainRetryCount === undefined ? (state.remainRetryCount + 1) : payload.connectData.remainRetryCount)
    }
  },
  [ActionTypes.RESET_DATA_BOARD]: (): InitStateType => instantiate(initState),
  [ActionTypes.UPDATE_MAIL_STATUS]: (state, payload: ActionPayLoad<ActionTypes.UPDATE_MAIL_STATUS>): InitStateType => {
    return {
      ...state,
      UnreadMailNum: payload.UnreadMailNum
    }
  },
}, initState);