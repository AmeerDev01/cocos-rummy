import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
   BG_MUSIC_MAIN = "sound/starlight_main_bgm",
  BG_MUSIC_1 = "sound/starlight_free_bgm",
  // // BG_MUSIC_2 = "sound/fruit_sg_bg2",
   ROLLER_BEGIN = "sound/reel_start",
  ROLLER_END = "sound/quick_stop",
  // OPEN_PRIZE = "sound/chooseNum",
  MIN_COIN = "sound/minCoin",
  MAX_COIN = "sound/maxCoin",
  BUY_FREE_BTN = "sound/buy_free_btn",
  BUY_RATE_BTN_CLICK = "sound/buy_rate_btn_click",
  BUTTONCLICK = "sound/btn_click",
  DRAGANDDROPTOTURNTHEPAGE = "sound/turn",
  WIN1 = "sound/win1",
  WIN2 = "sound/win2",
  WIN3 = "sound/win3",
  FREE_TRANS = "sound/free_trans",
  SGOVER="sound/free_many" ,
  SINGLE_ICON_FALL="sound/single_icon_fall" ,
  SCATTERT_RIGGER="sound/scattert_rigger" ,
  THOR_SMILES="sound/lightning" ,
  DROP_DOWN="sound/ani_spin",
  UI_FREESPIN="sound/ui_freespin",
  SCATTER_BONUS="sound/scatter_bonus",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)