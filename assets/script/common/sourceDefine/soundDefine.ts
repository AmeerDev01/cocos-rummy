import { Asset, Prefab, SpriteFrame, sp, AudioClip } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum SoundPathDefine {
  egg = "gift/dub/ani_egg",
  durian = "gift/dub/ani_durian",
  rose = "gift/dub/ani_rose",
  pan = "gift/dub/ani_pot",
  beer = "gift/dub/ani_beer",
  money = "gift/dub/ani_money",
  bucket = "gift/dub/ani_labber",
  shoe = "gift/dub/ani_slipper",
  kiss = "gift/dub/ani_kiss",
  cock = "gift/dub/ani_chicken",
  brick = "gift/dub/ani_gold",
  tomato = "gift/dub/ani_tomato",
  /**火箭 */
  rocket = "gift/dub/ani_rocket",
  /**点击头像音效 */
  spin = "gift/dub/ani_spin",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, AudioClip, SoundPathDefine)