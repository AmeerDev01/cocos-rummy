import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
   /**主背景音乐 */
   MAIN_BG = "audio/phoenix_bg",
   /**小游戏1主音乐 */
   GAME1_BG = "audio/phoenix_sg_bg1",
   /**小游戏2主音乐 */
   GAME2_BG = "audio/phoenix_sg_bg2",
   /** 点击按钮*/
   BTN_CLICK = "audio/btn_click",
   /** 金币收集结算*/
   GET_COIN = "audio/get_coin",
   /** 滚轴停止滚动*/
   SHELL_END = "audio/shell_end",
   /** 小游戏进入前铃声*/
   LING = "audio/ling",
   /**错误提示 */
   DING="audio/ding",
   /**规则翻页 */
   TURN = "audio/turn",
   /**增加下注 */
   MAX_COIN = "audio/maxCoin",
   /**减小下注 */
   MIN_COIN = "audio/minCoin",
   /**滚轴加速 */
   FAST_ROLLER = "audio/fast_roller",
   /**选择自转次数时音效 */
   BIU = "audio/biu",
   /**选择无穷次数自转时 */
   WU_QIONG="audio/chooseNum",
   /**进入小游戏前选择卡片 */
   CHOOSE_CARD_IN = "audio/phoenix_choose_card",
   /**卡片选中成功 */
   CHOOSE_CARD = "audio/phoenix_card",
   /**小游戏万能图标增添次数特效音 */
   PHOENIX_ADD_NUM = "audio/phoenix_add_num",
   /**SCATTER出现 */
   SCATTER="audio/scatter"
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)