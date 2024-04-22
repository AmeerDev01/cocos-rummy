import { Asset, Prefab, SpriteFrame, sp, AudioClip } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum SoundPathDefine {
  BTU_CLICK = "sound/hall_btn_click",
  ERROR = "sound/hall_error",
  GAME_CLICK = "sound/hall_game_click",
  LOADING = "sound/hall_game_loading",
  MAIN_BGM = "sound/hall_main_bgm",
  POP_UP = "sound/hall_pop_up",
  WINNING = "sound/hall_winning",
  WHIRL = "sound/whirl",
  WINLOTTERY = "sound/Winlottery",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)