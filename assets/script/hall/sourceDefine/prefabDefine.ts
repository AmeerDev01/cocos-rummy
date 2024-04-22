import { Prefab } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum PrefabPathDefine {
  // COUNTER = "prefabs/test/Counter",
  LOADER_PANEL = "prefabs/loaderPanel",
  // _LOGIN_PAGE = "login/prefabs/loginPage",
  // _LOGIN_DIALOG = "login/prefabs/loginDialog",
  _LOGIN_PAGE_V2 = "login/prefabs/V2/loginPage",
  _LOGIN_DIALOG_LOGIN_V2 = "login/prefabs/V2/loginAkunLogin",
  _LOGIN_DIALOG_REG_V2 = "login/prefabs/V2/loginRegister",
  _PROHIBIT_PANEL = "login/prefabs/V2/prohibitLogin",
  _LOGIN_SET_PASSWORD = "login/prefabs/loginSetPassword",
  BASE_BOARD = "prefabs/baseBoard",
  MAIN_PANEL = "prefabs/mainPanel",
  SUB_GAME_GATE = "prefabs/subGameGate",
  PC_MAIN_PANEL = "personalCenter/prefabs/pcMainPanel",
  PC_BACK_WATER = "personalCenter/prefabs/node_layout_water",
  _PC_CHANGE_NICKNAME = "personalCenter/prefabs/node_changeName_bg",
  /**分享帮助 */
  _SHARE_HELP = "personalCenter/prefabs/node_share_help",
  /**填写上级代理确认窗口 */
  _SHARE_SURE = "personalCenter/prefabs/node_share_sure",
  /**分佣模块 */
  SHARE_Info = "personalCenter/prefabs/node_share_info",
  SHARE_MEMBER_LIST = "personalCenter/prefabs/node_share_member",
  _SHARE_SHARE_HELP = "personalCenter/prefabs/node_share_help",
  /*------------------------------------分割线------------------------------------*/
  _HELL_ACTIVITY = "activity/prefabs/node_aktivitas",
  /**转盘框 */
  HELL_ACTIVITY_TURNTABLEPANL = "activity/prefabs/node_turntable",
  HELL_ACTIVITY_TURNTABLE_INTRO = "activity/prefabs/node_turntable_intro",
  HELL_ACTIVITY_TURNTABLE = "activity/prefabs/node_turntable2",
  HELL_ACTIVITY_TURNTABLEWIN = "activity/prefabs/note_turntable_win",

  /*------------------------------------分割线------------------------------------*/
  _HELL_AWARD = "award/prefabs/node_award_level",
  _HELL_BANK = "bank/prefabs/node_bank",
  _HELL_MAIL = "mail/prefabs/node_mail",
  HELL_SHOP = "shop/prefabs/node_shop",
  // HELL_NEWCOMER_SHOP = "shop/prefabs/node_newcomer_shop",
  /**充值历史记录 */
  HELL_SHOP_HISTORY = "shop/prefabs/node_history",
  /**每日首充规则 */
  HELL_SHOP_RACHARGE = "shop/prefabs/node_racharge_rule",
  HELL_WITHDRAWAL = "withdrawal/prefabs/node_withdrawal",
  _HELL_WITHDRAWAL_BANK_LIST = "withdrawal/prefabs/node_withdrawal_metode",
  _HELL_WITHDRAW_TIPS = "withdrawal/prefabs/node_withdrawal_tips",
  _HELL_WITHDRAW_BANK_BIND = "withdrawal/prefabs/node_withdrawal_nformasi",
  _HELL_WITHDRAW_WALLET_BIND = "withdrawal/prefabs/node_withdrawal_rekening",
  _HELL_WITHDRAW_BILL = "withdrawal/prefabs/node_withdrawal_catatan",
  _HELL_BIND_PHONE = "personalCenter/prefabs/node_prefabs_bindPhone",
  _HELL_SERVICE_WEBVIEW = "service/prefabs/prefabs_service",
  _HELL_UPGRADE = "personalCenter/prefabs/node_account_upgrade",
  _HELL_CHANGE_PASSWORD = "personalCenter/prefabs/node_account_changePassword",
  _HELL_RE_LIEF = "welcome/prefabs/benefit",
  _HELL_WELCOME = "welcome/prefabs/welcome",
  _HELL_GIFT_BAG = "shop/prefabs/node_tas",
  _HELL_CHOOSE_BANK = "shop/prefabs/node_chooseBank",
  HELL_WATER_HELP = "personalCenter/prefabs/node_water_help",
  _HELL_APP_DOWNLOAD_PANEL = "downloadGuide/prefabs/node_download_guide",
  _HELL_APP_DOWNLOAD_PANEL_IOS = "downloadGuide/prefabs/node_download_guide_ios",
  /**大厅签到 */
  _HELL_SIGN_IN = "signIn/prefabs/hallSignIn",
  /**VIP升级动画 */
  _HELL_VIP_UP = "vip/prefabs/vipUp",
  /**VIP主界面 */
  _HELL_VIP_MAIN = "vip/prefabs/VipMain_Alls",
  /**中奖广播框 */
  _WINNING_BOX = "prefabs/winningCar",
  /**引导帮助的底框层 */
  _GUIDE_PANEL = "prefabs/guidePanel",
  /**每日任务 */
  _DAILY_TASK = "task/prefabs/prafabs_task"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)
