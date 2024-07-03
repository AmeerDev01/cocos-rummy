import { Asset, Prefab, SpriteFrame, sp } from "cc"
import { loopFiles } from "../../../base/SourceManage"

export enum SpriteFramePathDefine {
    icon10 = "atlas/iconSprite/10/spriteFrame",
    iconJ = "atlas/iconSprite/j/spriteFrame",
    iconQ = "atlas/iconSprite/q/spriteFrame",
    iconK = "atlas/iconSprite/k/spriteFrame",
    iconA = "atlas/iconSprite/a/spriteFrame",
    tongqian = "atlas/iconSprite/tongqian/spriteFrame",
    yuanbao = "atlas/iconSprite/yuanbao/spriteFrame",
    yaoqianshu = "atlas/iconSprite/yaoqianshu/spriteFrame",
    baicai = "atlas/iconSprite/baicai/spriteFrame",
    wild = "atlas/iconSprite/wild/spriteFrame",
    scatter = "atlas/iconSprite/scatter/spriteFrame",
    baohe = "atlas/iconSprite/baohe/spriteFrame",
    
}

export default (bundlePkgName: string) => loopFiles(bundlePkgName, SpriteFrame, SpriteFramePathDefine)