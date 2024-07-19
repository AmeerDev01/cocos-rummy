import { AudioClip } from "cc";
import { loopFiles } from "../../../base/SourceManage";

export enum SoundPathDefine {
  MAIN_BG = "audio/godWealth_main_bg",
  GAME1_BG = "audio/godWealth_sg_bg1",
  GAME2_BG = "audio/godWealth_sg_bg2",
  LING = "audio/ling",
  DANG = "audio/godWealth_dang",
  GAME1_OVER_BG = "audio/godWealth_sg_bg_over",
  GAME2_OVER_BG = "audio/godWealth_guangdang",
  BTN_CLICK = "audio/btn_click",
  GET_COIN = "audio/get_coin",
  SHELL_END = "audio/shell_end",
  TURN = "audio/turn",
  MAX_COIN = "audio/maxCoin",
  MIN_COIN = "audio/minCoin",
  FAST_ROLLER = "audio/fast_roller",
  BIU = "audio/biu",
  DING = "audio/ding",
  HA = "audio/godWealth_hahaha",
  WILD = "audio/godWealth_wild",
  SUN_GOD = "audio/sunGodNum"
}

export default (bundlePkgName: string) =>
  loopFiles(bundlePkgName, AudioClip, SoundPathDefine);
