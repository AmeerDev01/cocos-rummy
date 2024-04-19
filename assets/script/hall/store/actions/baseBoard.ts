import { default as reduxAct } from 'redux-act'
import { HallGameGateType, SubGameRunState } from '../../config'

export enum ToastType {
  NORMAL,
  WARN,
  ERROR,
  SUCCESS
}
export enum ToastPosition {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom'
}
export type InitStateType = {
  toastData: { content: string, type: ToastType },
  loadPayload: { isShow: boolean, isAllowCloseLoading: boolean },
  subGameInfo: HallGameGateType,
  isShowWebView: boolean,
  isLoadRecommendData: string,
  /**是否连接有效 */
  isConnect: boolean,
  /**第几次重连 */
  retryConnectTimes: number,
  appDownLoadGuide: boolean
}
export const initState: InitStateType = {
  toastData: { content: "", type: ToastType.NORMAL },
  loadPayload: { isShow: false, isAllowCloseLoading: false },
  subGameInfo: null,
  isShowWebView: true,
  isLoadRecommendData: '',
  isConnect: true,
  retryConnectTimes: 1,
  appDownLoadGuide: true
}

/**必须大写，不然redux-act这狗日的要自动加序列号 */
export enum ActionTypes {
  ADD_TOAST = 'ADD_TOAST',
  SET_LOADING = 'SET_LOADING',
  SET_ACTIVE_SUBGAME = "SET_ACTIVE_SUBGAME",
  SET_SUBGAME_STATE = "SET_SUBGAME_STATE",
  RESET_DATA_BOARD = "RESET_DATA_BOARD",
  CHANGE_WEB_VIEW = "CHANGE_WEB_VIEW",
  LOAD_RECOMMEND_DATA = "LOAD_RECOMMEND_DATA",
  SOCKET_CONNECT = "SOCKET_CONNECT",
  APP_DOWNLOAD_GUIDE = "APP_DOWNLOAD_GUIDE"
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.ADD_TOAST ? { toastData: { content: string, type: ToastType, position: ToastPosition } } :
  A extends ActionTypes.SET_LOADING ? { isLoadPayload: { isShow: boolean, isAllowCloseLoading?: boolean } } :
  A extends ActionTypes.SET_ACTIVE_SUBGAME ? { subGameInfo: HallGameGateType } :
  A extends ActionTypes.SET_SUBGAME_STATE ? { subGameRunState: SubGameRunState } :
  A extends ActionTypes.CHANGE_WEB_VIEW ? { value: boolean } :
  A extends ActionTypes.LOAD_RECOMMEND_DATA ? {} :
  A extends ActionTypes.SOCKET_CONNECT ? { connectData: { isConnect: boolean, retryConnectTimes?: number } } :
  A extends ActionTypes.APP_DOWNLOAD_GUIDE ? { appDownLoadGuide: boolean } :
  never;


export const addToastAction = reduxAct.createAction(ActionTypes.ADD_TOAST,
  (toastData: { content: string, type?: ToastType, position?: ToastPosition }): ActionPayLoad<ActionTypes.ADD_TOAST> => {
    console.log(toastData.content)
    return { toastData: { ...toastData, type: toastData.type || ToastType.NORMAL, position: toastData.position || ToastPosition.BOTTOM } }
  })

export const setLoadingAction = reduxAct.createAction(ActionTypes.SET_LOADING,
  (isLoadPayload: { isShow: boolean, isAllowCloseLoading?: boolean }): ActionPayLoad<ActionTypes.SET_LOADING> => {
    return { isLoadPayload }
  })

export const setSubGameInfoAction = reduxAct.createAction(ActionTypes.SET_ACTIVE_SUBGAME,
  (subGameInfo: HallGameGateType): ActionPayLoad<ActionTypes.SET_ACTIVE_SUBGAME> => {
    return { subGameInfo }
  })
export const setSubGameRunState = reduxAct.createAction(ActionTypes.SET_SUBGAME_STATE,
  (subGameRunState: SubGameRunState): ActionPayLoad<ActionTypes.SET_SUBGAME_STATE> => {
    return { subGameRunState }
  })
export const changeWebView = reduxAct.createAction(ActionTypes.CHANGE_WEB_VIEW,
  (value: boolean): ActionPayLoad<ActionTypes.CHANGE_WEB_VIEW> => {
    return { value }
  })
export const loadRecommendData = reduxAct.createAction(ActionTypes.LOAD_RECOMMEND_DATA,
  (): ActionPayLoad<ActionTypes.LOAD_RECOMMEND_DATA> => {
    return {}
  })
export const setSocketConnectStatus = reduxAct.createAction(ActionTypes.SOCKET_CONNECT,
  (connectData: { isConnect: boolean, retryConnectTimes?: number }): ActionPayLoad<ActionTypes.SOCKET_CONNECT> => {
    return { connectData }
  })

export const setAppDownLoadGuide = reduxAct.createAction(ActionTypes.APP_DOWNLOAD_GUIDE,
  (appDownLoadGuide: boolean): ActionPayLoad<ActionTypes.APP_DOWNLOAD_GUIDE> => {
    return { appDownLoadGuide }
  })

export const resetDataBaseBoard = reduxAct.createAction(ActionTypes.RESET_DATA_BOARD, (): any => { })