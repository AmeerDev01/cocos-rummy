import { Asset, Prefab, SpriteFrame, sp, AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
    BTN_CLICK = "dub/btn_click",
    CHIP = "dub/chip",
    DEFEAT = "dub/defeat",
    DONG = "dub/dong",
    SIEVE = "dub/sieve",
    GET_COIN = "dub/get_coin",
    MAIN_BG = "dub/main_bg",
    TIME_OUT = "dub/time_out",
    WIN = "dub/win",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)