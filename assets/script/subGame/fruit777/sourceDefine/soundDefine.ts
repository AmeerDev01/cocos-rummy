import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  BG_MUSIC_MAIN = "sound/fruit_main_bg",
  BG_MUSIC_1 = "sound/fruit_sg_bg",
  BG_MUSIC_2 = "sound/fruit_sg_bg2",
  ROLLER_BEGIN = "sound/fast_roller",
  ROLLER_BEGIN2 = "sound/roll_start",
  ROLLER_END = "sound/shell_end",
  OPEN_PRIZE = "sound/chooseNum",
  MIN_COIN = "sound/minCoin",
  MAX_COIN = "sound/maxCoin",
  OPEN_AWARDBOX = "sound/fruit_shell",
  FRUIT_UP = "sound/fruit_up",
  FRUIT_SHELL = "sound/fruit_many_shell",
  TRANSFER = "sound/wild",
  GET_COIN = "sound/get_coin",
  LEVEV_UP = "sound/godWealth_buycard",
  OPEN_WIN_END = "sound/fruit_apper_sg",
  CLICK = "sound/click",
  BIU = "sound/biu",
  DING = "sound/ding"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)