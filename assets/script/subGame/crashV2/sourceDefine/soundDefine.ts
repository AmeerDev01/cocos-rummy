import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  MAIN_BGM = "audio/main_bgm",
  XIU = "audio/xiu",
  BTN_CLICK = "audio/btn_click",
  BINGO = "audio/bingo",
  DING = "audio/ding",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)