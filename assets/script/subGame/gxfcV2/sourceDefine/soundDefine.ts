import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  Free_bg = "audio/gxfc_sg_bg1",
  Main_bg = "audio/gxfc_main_bg",
  /**小游戏结束音 */
  Small_end = "audio/gxfc_sg_bg",
  /**选择自动模式音效 */
  biu = "audio/biu",
  btn_click = "audio/btn_click",
  /**错误弹窗音效 */
  ding = "audio/ding",
  get_coin = "audio/get_coin",
  /**快速转动音效 */
  fast_roller = "audio/fast_roller",
  /**滚动结束音效 */
  shell_end = "audio/shell_end",
  /**进入小游戏前的音效 */
  ling = "audio/ling",
  turn = "audio/turn",
  /**加倍数音效 */
  maxCoin = "audio/maxCoin",
  /**减倍数音效 */
  minCoin = "audio/minCoin",
  /**打鼓 */
  beatDrum = "audio/gxfc_win_beatDrum",
  /** 鞭炮全盘*/
  bianpao = "audio/gxfc_win_maroon",
  /**财神全盘 */
  caishen = "audio/gxfc_win_godWealth",
  /**大鼓全盘 */
  gu = "audio/gxfc_win_durm",
  /**发发发全盘 */
  fa = "audio/gxfc_win_fafafa",
  /**福神全盘 */
  fushen = "audio/gxfc_win_mascot",
  /**寿娃全盘 */
  shouwa="audio/gxfc_win_shouwa",
  /**喜娃 */
  xiwa="audio/gxfc_win_xiwa",
  /**铜钱 */
  tongqian="audio/gxfc_win_copper_cash",
  /**玉佩 */
  yupei="audio/gxfc_win_jadePendant"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)