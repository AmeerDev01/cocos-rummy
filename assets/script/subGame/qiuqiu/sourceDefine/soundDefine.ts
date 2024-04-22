import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  btn_click = 'dub/btn_click',
  qq_all_in = 'dub/qq_all_in',
  qq_bg = 'dub/qq_bg',
  qq_changcard = 'dub/qq_changcard',
  qq_choose_card = 'dub/qq_choose_card',
  qq_coin = 'dub/qq_coin',
  qq_dead = 'dub/qq_dead',
  qq_fangqi = 'dub/qq_fangqi',
  qq_fapai = 'dub/qq_fapai',
  qq_game_start = 'dub/qq_game_start',
  qq_goodcard = 'dub/qq_goodcard',
  qq_guopai = 'dub/qq_guopai',
  qq_tuo_allin = 'dub/qq_tuo_allin',
  qq_win = 'dub/qq_win',
  qq_xiazhu_jinbi = 'dub/qq_xiazhu_jinbi',
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)