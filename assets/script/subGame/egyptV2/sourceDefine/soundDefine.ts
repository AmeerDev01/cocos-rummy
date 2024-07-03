import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  bgFree = "audio/bgFree",
  bgMain = "audio/bgMain",
  bgMusic = "audio/bgMusic",
  /**选择自动模式音效 */
  biu = "audio/biu",
  btn_click = "audio/btn_click",
  /**错误弹窗音效 */
  ding = "audio/ding",
  /**太阳神出场音效 */
  sunGod = "audio/sunGod",
  /**数字飞向太阳神音效 */
  sunGodNum = "audio/sunGodNum",
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
  /**小游戏入场动画背景音乐 */
  sgbegin1 = "audio/sgbegin1",
  /**关门的声音 */
  guanmen = "audio/sgBegin",
  /**中奖音效 */ 
  haveCoin = "audio/haveCoin",
  /**中奖wild的音效 */
  wild = "audio/wild",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)