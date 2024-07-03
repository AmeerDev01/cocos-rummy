import { Asset, Prefab, SpriteFrame, sp, AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

// 音效资源 路径
export enum SoundPathDefine {

    MAIN_BG = "sound/bandarQiuQiu_main_bg",
    BTN_CLICK = "sound/btn_click",
    /**选择下注 */
    CHOOSE_CHIP = "sound/choose_chip",
    GET_COIN = "sound/recycleChip",
    TIME_OUT = "sound/countdown",
    TURN_CARD = "sound/flip_card",
    SEND_CARD = "sound/sendcard",
    STOP_BET = "sound/alert",
    START_STOP_BET = "sound/show",
    MY_WIN = "sound/myWin",
    MY_LOSE = "sound/myLose",
    CARD_PK = "sound/PK",
    FLY_CHIP = "sound/bet_coin",
    
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)
