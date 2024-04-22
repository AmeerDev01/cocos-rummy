export enum ApiUrl {
  /**停服通知公告 */
  NOTICE = `/global/api/appNotice`,
  /**密码登录 */
  LOGIN_PWD = `/user/api/memberLogin`,
  /*退出*/
  LOGIN_OUT = `/hall/api/member/loginOut`,
  /**验证码登录 */
  // LOGIN_CODE = `/sso/api/memberLogin`,
  // /**游客登录 */
  // LOGIN_GUEST = `/sso/api/memberLogin`,
  /**发送验证码 */
  SEND_SMS = `/user/api/sendLoginSms`,
  /**重置密码 */
  RESET_PASSWORD = `/user/api/resetLoginPassword`,
  /**用户升级 */
  MEMBER_UPGRADES = `/user/api/memberUpgrades`,
  /**快速登录 */
  LOGIN_FAST = `/user/api/memberLoginF`,
  /**注册 */
  REG = `/user/api/memberRegister`,
  /**是否需要强制设置银行密码 */
  IS_SET_PWD = `/hall/api/member/querySafePassword`,
  /**验证银行密码 */
  VERIFY_BANK_PWD = `/hall/api/member/authAccessSafe`,
  /**设置银行密码 */
  SET_BANK_PWD = `/hall/api/member/setSafePassword`,
  /**存取保险箱 */
  TRASFER_BANK_GLOD = `/hall/api/member/accessSafe`,
  /**获取提现银行渠道 */
  WITHDRAW_BANK_CHANNEL_LIST = `/hall/api/transfer/list`,
  /**提现绑定卡 */
  WITHDRAW_BIND_CARD = `/hall/api/transfer/bindBank`,
  /**确认提现 */
  WITHDRAW_ORDER = `/hall/api/transfer/transferOrder`,
  /**用户订单列表 */
  USER_ORDER_LIST = `/hall/api/order/list`,
  /**邮件列表 */
  // EMAIL_LIST = `/hall/api/member/emailList`,
  EMAIL_LIST = `/hall/api/member/emailPage`,
  /**查看邮件 */
  CHECK_EMAIL = `/hall/api/member/emailCheck`,
  /**删除邮件 */
  DELETE_EMAIL = `/hall/api/member/emailDel`,
  /**获得签到列表 */
  GET_MEMBER_SIGN_IN_LIST = `/hall/api/member/getMemberSignInList`,
  /**签到 */
  SIGN_IN = `/hall/api/member/signIn`,
  /**活动列表 */
  ACTIVITY_LIST = `/hall/api/activity/list`,
  /**推荐信息 */
  RECOMMEND_DATA = `/hall/api/member/recommendData`,
  /**今日推荐用户总数 */
  RECOMMENDDATATOTODAY = `/hall/api/member/recommendDataToToday`,
  /**查询推荐人信息 */
  RECOMMEND_MEMBER_INFO = `/hall/api/member/recommendMemberInfo`,
  /**查询推荐人信息 */
  MYRECOMMENDINFO = `/hall/api/member/myRecommendInfo`,
  /**绑定推荐人 */
  RECOMMEND_BIND = `/hall/api/member/recommendBind`,
  /**兑换码 */
  CODE_CONVER = `/hall/api/member/redeemGiftPackage`,
  /**确认领取救济金 */
  BENEFIT = `/hall/api/member/benefit`,
  /**确认抽水 */
  DRAW_WATER = `/hall/api/member/withdrawCommissionOrWater`,
  /**检测需要弹出的东西 */
  // POP_UPS = `/hall/api/game/popUps`,
  /**分享绑定地址 */
  INVITE = `/hall/api/invite`,
  /**游戏轮播图 */
  GAME_SWIPE = `/hall/api/swipe/list`,
  /**获得渠道包信息 */
  CHANNEL_PACKAGE = `/hall/channelPackage/thirdEvent`,
  /**fcm的token绑定 */
  FCM_TOKEN_BIND = `/hall/api/fcm/bind`,
  /**获取绑定之后可能获取的金币 */
  GET_BIND_PHONE_GOLD = `/hall/api/invite/getBindPoneGold`,
  /**收到充值消息回调接口 */
  ADJUST_ACCEPT = `/user/adjust/accept`,
  /**vip活动 */
  GET_VIP_BONUS = '/hall/api/member/vipBonus',
  /**充值活动 */
  GET_RECHARGE_LIST = '/hall/api/channel/rechargeList',
  /**领取站内信附件奖励 */
  RECEIVE_EMAIL_ANNEX = '/hall/api/member/receiveEmailAnnex',
  /**获取累计存款活动列表 */
  GET_DAILY_TASK_LIST = '/api/dailyTask/accumulatedDeposits/getList',
  /**领取领取每日累加充值活动任务 */
  DAILY_TASK_RECEIVE = '/api/dailyTask/accumulatedDeposits/receive'

}