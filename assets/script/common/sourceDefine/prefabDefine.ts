import { Prefab } from "cc"
import { loopFiles } from "../../base/SourceManage"

export enum PrefabPathDefine {
  // LOADER_PANEL = "prefabs/loaderPanel",
  MARQUEE = "prefabs/marquee",
  MARQUEE_INSERT = "prefabs/marquee_insert",
  MODAL_BOX = "prefabs/modalBoxSingle",
  GIFT_USER = "gift/prefabs/prefabs_gift_user",
  GIFT_ANIMATION = "gift/prefabs/prefabs_gift_animation",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, Prefab, PrefabPathDefine)