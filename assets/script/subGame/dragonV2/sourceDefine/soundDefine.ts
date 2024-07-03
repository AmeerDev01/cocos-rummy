import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  bgMain = "audio/dragon_bg",
  bgFree = "audio/dragon_sg_bg1",
  bgMusic = "audio/dragon_sg_bg2",
  biu = "audio/biu",
  btn_click = "audio/btn_click",
  ding = "audio/ling",
  get_coin = "audio/get_coin",
  fast_roller = "audio/fast_roller",
  shell_end = "audio/shell_end",
  ling = "audio/ling",
  turn = "audio/turn",// 规则翻页
  maxCoin = "audio/maxCoin",
  minCoin = "audio/minCoin",
  voice = "audio/dragon_sound",  //小游戏动画龙吟声
  spitOut = "audio/dragon_ball", //金龙吐球
  fallBall = "audio/dragon_fall", //火球向下掉
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)