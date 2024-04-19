import { Asset, Prefab, SpriteAtlas, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteAtlasPathDefine {
  // AUTO_FPC_ATLAS = "img/auto_fpc",
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteAtlas, SpriteAtlasPathDefine)