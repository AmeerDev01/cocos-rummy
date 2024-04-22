import { AudioClip } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SoundPathDefine {
  btn_click = 'dub/btn_click',
  rummy_bg = 'dub/rummy_bg',
  rummy_card_up = 'dub/rummy_card_up',
  rummy_countdown = 'dub/rummy_countdown',
  rummy_fapai = 'dub/rummy_fapai',
  rummy_groupCards = 'dub/rummy_groupCards',
  rummy_shangjia_send = 'dub/rummy_shangjia_send',
  rummy_send = 'dub/rummy_send',
  rummy_win = 'dub/rummy_win',
  rummy_mopai = 'dub/rummy_mopai',
  rummy_laizi = 'dub/rummy_laizi',
  rummy_recycleChip = 'dub/rummy_recycleChip',
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)