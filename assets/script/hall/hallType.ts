/**
 * 拉去充值或者充值成功回调
 */
export type RechangeCallbackVo = {
  id: string,
  /**充值渠道 */
  channelName: string,
  /**货币类型 */
  currency: string,
  /**是否首次 */
  isFirstRecharge: boolean,
  /**充值账号 */
  memberId: string,
  /**1 是拉起支付  2 是 支付成功 */
  orderOperations: number,
  /**充值金额 */
  rechargeAmount: string
}