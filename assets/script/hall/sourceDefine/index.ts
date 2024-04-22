import { ISourceFile } from "../../base/SourceManage"
import prefabDefine from './prefabDefine'
import skeletalDefine from './skeletalDefine'
import spriteDefine from './spriteDefine'
import soundDefine from './soundDefine'

const bundlePkgName = "hall"

const fileMap: ISourceFile[] = [
  ...prefabDefine(bundlePkgName),
  ...skeletalDefine(bundlePkgName),
  ...spriteDefine(bundlePkgName),
  ...soundDefine(bundlePkgName)
]

export default fileMap