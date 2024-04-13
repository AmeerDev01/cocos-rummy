import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  BG_MUSIC_MAIN = "sound/thor_main_bg",
  BG_MUSIC_1 = "sound/thor_free_bg",
  // BG_MUSIC_2 = "sound/fruit_sg_bg2",
  ROLLER_BEGIN = "sound/reel_start",
  QUICK_STOP = "sound/quick_stop",
  DROP_BOTTOM = "sound/drop_bottom",
  OPEN_PRIZE = "sound/chooseNum",
  MIN_COIN = "sound/minCoin",
  MAX_COIN = "sound/maxCoin",
  BUY_FREE_BTN = "sound/buy_free_btn",
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
  FREE_TRANS = "sound/free_trans",
  FREE_MANY = "sound/free_many",
  SINGLE_ICON_FALL = "sound/single_icon_fall",
  SCATTERT_RIGGER = "sound/scattert_rigger",
  THOR_SMILES = "sound/thor_smiles",
  DROP_DOWN = "sound/ani_spin",
  SCATTER_SHOW = "sound/scatter_show",
  BUY_FREE_DIALOG_CLOSE = "sound/buy_free_dialog_close",
  THOR_FREE_SUMMARY = "sound/thor_free_summary",
  THOR_FREE_DIALOG_WAIT = "sound/thor_free_dialog_wait",
  BELL = "sound/bell",
  SP_WIN = "sound/sp_win",
  SP_WIN_SHOW = "sound/sp_win_show",
  PER_HIT = "sound/per_hit",
  WILD_FLASH = "sound/wild_flash",
  WILD_SHOW = "sound/wild_show",
  WILDMULTIPLIER = "sound/wildmultiplier",
  BIGWIN = "sound/bigwin",
  BIGWIN_OV = "sound/bigwin_ov",
  EPICWIN = "sound/epicwin",
  EPICWIN_OV = "sound/epicwin_ov",
  SUPERWIN = "sound/superwin",
  SUPERWIN_OV = "sound/superwin_ov",
  ULTIMATEWIN = "sound/ultimatewin",
  ULTIMATEWIN_OV = "sound/ultimatewin_ov",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)