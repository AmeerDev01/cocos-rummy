import { default as reduxAct } from 'redux-act'
import { HallGameGateType } from '../../config'
import { SubGameRunState } from '../../../hallType'

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
export type VipBonus = {
  myVipLevel: number,
  myUpgradeBonus: number,
  myDayBonus: number,
  myWeeklyBonus: number,
  myMonthlyBonus: number,
  clickVipLevel: number,
  clickUpgradeBonus: number,
  clickDayBonus: number,
  clickWeeklyBonus: number,
  clickMonthlyBonus: number
}

export type ChooseAmount = {
  /**充值选择的金额 */
  chooseAmount: number,
  /**充值获得的总金额 */
  totalGet: number,
}

export type InitStateType = {
  toastData: { content: string, type: ToastType, position: ToastPosition, forceLandscape: boolean },
  loadPayload: { isShow: boolean, isAllowCloseLoading: boolean, flagId: string },
  subGameInfo: HallGameGateType,
  isShowWebView: boolean,
  isLoadRecommendData: string,
  /**是否连接有效 */
  isConnect: boolean,
  /**剩余重连次数 */
  remainRetryCount: number,
  appDownLoadGuide: boolean,
  /**是否有未读邮箱 */
  UnreadMailNum: number,
  vipBonusInfo: VipBonus,
  /**选择充值的金额 */
  chooseAmount: ChooseAmount,
}
export const initState: InitStateType = {
  toastData: { content: "", type: ToastType.NORMAL, position: ToastPosition.MIDDLE, forceLandscape: false },
  loadPayload: { isShow: false, isAllowCloseLoading: false, flagId: '_' },
  subGameInfo: null,
  isShowWebView: true,
  isLoadRecommendData: '',
  isConnect: true,
  remainRetryCount: 0,
  appDownLoadGuide: true,
  UnreadMailNum: -1,
  vipBonusInfo: null,
  chooseAmount: null,
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
  APP_DOWNLOAD_GUIDE = "APP_DOWNLOAD_GUIDE",
  UPDATE_MAIL_STATUS = 'UPDATE_MAIL_STATUS',
  UPDATE_VIP_BONUSINFO = 'UPDATE_VIP_BONUSINFO',
  TOP_UP_CHOOSE_AMOUNT = 'TOP_UP_CHOOSE_AMOUNT',
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.ADD_TOAST ? { toastData: { content: string, type: ToastType, position: ToastPosition, forceLandscape: boolean } } :
  A extends ActionTypes.SET_LOADING ? { isLoadPayload: { isShow: boolean, flagId: string, isAllowCloseLoading?: boolean } } :
  A extends ActionTypes.SET_ACTIVE_SUBGAME ? { subGameInfo: HallGameGateType } :
  A extends ActionTypes.SET_SUBGAME_STATE ? { subGameRunState: SubGameRunState } :
  A extends ActionTypes.CHANGE_WEB_VIEW ? { value: boolean } :
  A extends ActionTypes.LOAD_RECOMMEND_DATA ? {} :
  A extends ActionTypes.SOCKET_CONNECT ? { connectData: { isConnect: boolean, remainRetryCount?: number } } :
  A extends ActionTypes.APP_DOWNLOAD_GUIDE ? { appDownLoadGuide: boolean } :
  A extends ActionTypes.UPDATE_MAIL_STATUS ? { UnreadMailNum: number } :
  A extends ActionTypes.UPDATE_VIP_BONUSINFO ? { vipBonusInfo: VipBonus, } :
  A extends ActionTypes.TOP_UP_CHOOSE_AMOUNT ? { chooseAmount: ChooseAmount, } :

  never;

/**
 * 添加toast消息，forceLandscape：是否强制横向，默认强制，若设为false，则根据游戏的方向自动适应展示
 */
export const addToastAction = reduxAct.createAction(ActionTypes.ADD_TOAST,
  (toastData: { content: string, type?: ToastType, position?: ToastPosition, forceLandscape?: boolean }): ActionPayLoad<ActionTypes.ADD_TOAST> => {
    console.log(toastData.content)
    return {
      toastData:
      {
        ...toastData,
        type: toastData.type || ToastType.NORMAL,
        position: toastData.position || ToastPosition.BOTTOM,
        forceLandscape: toastData.forceLandscape === undefined ? true : toastData.forceLandscape
      }
    }
  })

export const setLoadingAction = reduxAct.createAction(ActionTypes.SET_LOADING,
  (isLoadPayload: { isShow: boolean, flagId: string, isAllowCloseLoading?: boolean }): ActionPayLoad<ActionTypes.SET_LOADING> => {
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
  (connectData: { isConnect: boolean, remainRetryCount?: number }): ActionPayLoad<ActionTypes.SOCKET_CONNECT> => {
    return { connectData }
  })

export const setAppDownLoadGuide = reduxAct.createAction(ActionTypes.APP_DOWNLOAD_GUIDE,
  (appDownLoadGuide: boolean): ActionPayLoad<ActionTypes.APP_DOWNLOAD_GUIDE> => {
    return { appDownLoadGuide }
  })

export const resetDataBaseBoard = reduxAct.createAction(ActionTypes.RESET_DATA_BOARD, (): any => { })

export const updateMailStatus = reduxAct.createAction(ActionTypes.UPDATE_MAIL_STATUS,
  (UnreadMailNum: number): ActionPayLoad<ActionTypes.UPDATE_MAIL_STATUS> => {
    return { UnreadMailNum }
  })

export const updateVipBonusInfo = reduxAct.createAction(ActionTypes.UPDATE_VIP_BONUSINFO,
  (vipBonusInfo: VipBonus,): ActionPayLoad<ActionTypes.UPDATE_VIP_BONUSINFO> => {
    return { vipBonusInfo }
  })
export const changeChooseAmount = reduxAct.createAction(ActionTypes.TOP_UP_CHOOSE_AMOUNT,
  (chooseAmount: ChooseAmount): ActionPayLoad<ActionTypes.TOP_UP_CHOOSE_AMOUNT> => {
    return { chooseAmount }
  })