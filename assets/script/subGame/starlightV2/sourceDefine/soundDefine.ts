import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  BG_MUSIC_MAIN = "sound/starlight_main_bgm",
  BG_MUSIC_1 = "sound/starlight_free_bgm",
  // BG_MUSIC_2 = "sound/fruit_sg_bg2",
  ROLLER_BEGIN = "sound/spin",
  /**所有图标一起掉落音效（加速时） */
  QUICK_STOP = "sound/quick_stop",
  OPEN_PRIZE = "sound/chooseNum",
  MIN_COIN = "sound/minCoin",
  MAX_COIN = "sound/maxCoin",
  /**点击购买免费小游戏按钮音效 */
  BUY_FREE_BTN = "sound/buy_free_btn",
  /**点击开关概率道具音效 */
  BUY_RATE_BTN_CLICK = "sound/buy_rate_btn_click",
  BUTTONCLICK = "sound/btn_click",
  DRAGANDDROPTOTURNTHEPAGE = "sound/turn",
  WIN1 = "sound/win1",
  WIN2 = "sound/win2",
  WIN3 = "sound/win3",
  WIN4 = "sound/win4",
  WIN5 = "sound/win5",
  WIN6 = "sound/win6",
  WIN7 = "sound/win7",
  WIN8 = "sound/win8",
  WIN9 = "sound/win9",
  WIN10 = "sound/win10",
  SINGLE_ICON_FALL = "sound/single_icon_fall",
  SCATTERT_RIGGER = "sound/scattert_rigger",
  /**播放出现倍率图标的音效 */
  THOR_SMILES = "sound/lightning",
  /**准备切换小游戏之前音效 */
  SCATTER_SHOW = "sound/scatter_bonus",
  /**出现一个scatter图标播放的音效 */
  scatter_flash1 = "sound/scatter_flash1",
  BUY_FREE_DIALOG_CLOSE = "sound/freespin_cancel",
  BUY_FREE_DIALOG_CONFIRM = "sound/freespin_confirm",
  THOR_FREE_SUMMARY = "sound/buy_free_btn",
  THOR_FREE_DIALOG_WAIT = "sound/ui_freespin",
  BELL = "sound/btn_click",
  /**免费小游戏获胜中奖展示音效 */
  SP_WIN = "sound/win_freespin",
  /**普通获胜中奖展示音效 */
  SP_WIN_SHOW = "sound/win_normal",
  PER_HIT = "sound/btn_click",
  /**滚轴倍率图标倍率飞出结算音效 */
  WILD_FLASH = "sound/multiplier_reward",
  WILD_SHOW = "sound/btn_click",
  WILDMULTIPLIER = "sound/lightning",
  BIGWIN = "sound/bigwin1",
  BIGWIN_OV = "sound/bigwin1over",
  EPICWIN = "sound/bigwin2",
  EPICWIN_OV = "sound/bigwin2over",
  SUPERWIN = "sound/bigwin3",
  SUPERWIN_OV = "sound/bigwin3over",
  ULTIMATEWIN = "sound/bigwin4",
  ULTIMATEWIN_OV = "sound/bigwin4over",
  /**小游戏左侧累计倍率出现及增加音效 */
  vol_total_multiplier_increase = "sound/vol_total_multiplier_increase",
  vol_scatter1 = "sound/vol_scatter1",
  vol_scatter2 = "sound/vol_scatter2",
  vol_scatter3 = "sound/vol_scatter3",
  vol_scatter4 = "sound/vol_scatter4",
  vol_scatter5 = "sound/vol_scatter5",
  vol_scatter6 = "sound/vol_scatter6",
  vol_scatter7 = "sound/vol_scatter7",
  vol_scatter8 = "sound/vol_scatter8",
  vol_total_multiplier_reward1 = "sound/vol_total_multiplier_reward1",
  vol_total_multiplier_reward2 = "sound/vol_total_multiplier_reward2",
  vol_total_multiplier_reward3 = "sound/vol_total_multiplier_reward3",
  vol_total_multiplier_reward4 = "sound/vol_total_multiplier_reward4",
  vol_total_multiplier_reward5 = "sound/vol_total_multiplier_reward5",
  vol_total_multiplier_reward6 = "sound/vol_total_multiplier_reward6",
  vol_total_multiplier_reward7 = "sound/vol_total_multiplier_reward7",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)