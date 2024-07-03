import { Asset, Prefab, SpriteFrame, sp, AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

// 音效资源 路径
export enum SoundPathDefine {

    MAIN_BG="sound/bandar_main_bg",
    BTN_CLICK="sound/btn_click",
    FLY_CHIP="sound/fly_chip",
    /**选择下注 */
    CHOOSE_CHIP="sound/choose_chip",
    GET_COIN="sound/recycle_chip",
    TIME_OUT="sound/time_out",
    TURN_CARD="sound/flop_card",
    DEAL_CARD="sound/deal_card",
    STOP_BET="sound/stop_bet",
    START_BET="sound/start_bet",
    MY_WIN="sound/bandar_myWin",
    MY_LOSE="sound/bandar_myLose",
    CLICK_BET="sound/click_bet",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)
