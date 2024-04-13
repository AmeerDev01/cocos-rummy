import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
    btn_click = 'dub/btn_click',
    domino_choose_card = 'dub/domino_choose_card',
    domino_coin = 'dub/domino_coin',
    domino_dead = 'dub/domino_dead',
    domino_fapai = 'dub/domino_fapai',
    domino_game_begin = 'dub/domino_game_begin',
    domino_guopai = 'dub/domino_guopai',
    domino_jl_bk = 'dub/domino_jl_bk',
    domino_send = 'dub/domino_send',
    domino_time_out = 'dub/domino_time_out',
    domino_win = 'dub/domino_win',
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)