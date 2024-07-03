import { Asset, Prefab, SpriteFrame, sp, AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

// 音效资源 路径
export enum SoundPathDefine {

    MAIN_BG="sound/main_bgm",
    BTN_CLICK="sound/btn_click",
    CHIP="sound/chip",
    DEFEAT="sound/defeat",
    WIN="sound/win",
    DRAGON_CARD="sound/dragon_card",
    TIGER_CARD="sound/tigger_card",
    GET_COIN="sound/get_coin",
    TIME_OUT="sound/time_out",
    TURN_CARD="sound/turn_card",
    VOICE_CHIP="sound/voice_chip",


}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)
