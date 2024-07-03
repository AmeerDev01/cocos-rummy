import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
    // /**主背景音乐 */
    // MAIN_BG = "audio/dfdc_main_bg",
    // /**小游戏1主音乐 */
    // GAME1_BG = "audio/dfdc_sg_bg1",
    // /**小游戏2主音乐 */
    // GAME2_BG = "audio/dfdc_sg_bg2",
    // /** */
    // GAME_OVER_BG = "audio/dfdc_sg_bg_over",
    // /** 点击按钮*/
    // BTN_CLICK = "audio/btn_click",
    // /** 金币收集结算*/
    // GET_COIN = "audio/get_coin",
    // /** 滚轴停止滚动*/
    // SHELL_END = "audio/shell_end",
    // /** 小游戏进入前铃声*/
    // LING = "audio/ling",
    // /**规则翻页 */
    // TURN = "audio/turn",
    // /**增加下注 */
    // MAX_COIN = "audio/maxCoin",
    // /**减小下注 */
    // MIN_COIN = "audio/minCoin",
    // /**滚轴加速 */
    // FAST_ROLLER = "audio/fast_roller",
    // /**选择自转次数时音效 */
    // BIU = "audio/biu",

    
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)