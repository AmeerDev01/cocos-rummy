import { default as reduxAct } from 'redux-act'

export type WithdrawBankChannelType = {
  id: string,
  /**icon图片链接 */
  iconMax: string,
  /**渠道名称 */
  name: string,
  /**限额上线 */
  limitUp: number,
  /**限额下线	 */
  limitDown: number,
  bankId: string,
  /**账户号码 */
  accountNumber: string,
  /**是否已经绑定 */
  bind: number,
  /**姓名 */
  realName: string,
  /**渠道类型，0：钱包；1：银行 */
  channelType: number,
  /**手续费率 */
  withdrawalPremium: number,
  /**是否是网银通道，0：钱包；1：银行 */
  onlineBanking: 0 | 1
}

export type InitStateType = {
  withdrawBankChannelList: WithdrawBankChannelType[],
  withdrawBankChannelChoose: WithdrawBankChannelType
}
export const initState: InitStateType = {
  withdrawBankChannelChoose: null,
  withdrawBankChannelList: []
}

/**必须大写，不然redux-act这货要自动加序列号 */
export enum ActionTypes {
  SET_BANK_CHANNEL_LIST = 'SET_BANK_CHANNEL_LIST',
  SET_BANK_CHANNEL_CHOOSE = 'SET_BANK_CHANNEL_CHOOSE',
  RESET_WITHDRAW_DATA = 'RESET_WITHDRAW_DATA'
}

/**定义action的payLoad类型 */
export type ActionPayLoad<A extends ActionTypes> =
  A extends ActionTypes.SET_BANK_CHANNEL_LIST ? { list: WithdrawBankChannelType[] } :
  A extends ActionTypes.SET_BANK_CHANNEL_CHOOSE ? { item: WithdrawBankChannelType } :
  never;


export const setWithdrawChannelList = reduxAct.createAction(ActionTypes.SET_BANK_CHANNEL_LIST,
  (list: WithdrawBankChannelType[]): ActionPayLoad<ActionTypes.SET_BANK_CHANNEL_LIST> => {
    return { list }
  })

export const sizeChangeAction = reduxAct.createAction(ActionTypes.SET_BANK_CHANNEL_CHOOSE,
  (item: WithdrawBankChannelType): ActionPayLoad<ActionTypes.SET_BANK_CHANNEL_CHOOSE> => {
    return { item }
  })
export const resetWithDrawInfo = reduxAct.createAction(ActionTypes.RESET_WITHDRAW_DATA, (): any => { })