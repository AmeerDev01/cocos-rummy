import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
    /**主背景音乐 */
    MAIN_BG = "audio/godWealth_main_bg",
    /**小游戏1主音乐 */
    GAME1_BG = "audio/godWealth_sg_bg1",
    /**小游戏2主音乐 */
    GAME2_BG = "audio/godWealth_sg_bg2",
    /** 小游戏1进入前铃声*/
    LING = "audio/ling",
    /** 小游戏2进入前铃声*/
    DANG = "audio/godWealth_dang",
    /** 小游戏1结束音效*/
    GAME1_OVER_BG = "audio/godWealth_sg_bg_over",
    /** 小游戏2结束音效*/
    GAME2_OVER_BG = "audio/godWealth_guangdang",
    /** 点击按钮*/
    BTN_CLICK = "audio/btn_click",
    /** 金币收集结算*/
    GET_COIN = "audio/get_coin",
    /** 滚轴停止滚动*/
    SHELL_END = "audio/shell_end",
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
    /**错误提示音效 */
    DING = "audio/ding",
    /**财神scatter出现 */
    HA = 'audio/godWealth_hahaha',
    /**wild出现 */
    WILD = "audio/godWealth_wild",
    /**盈利区收集金盆金额时音乐 */
    SUN_GOD = "audio/sunGodNum",
    

    
    
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)