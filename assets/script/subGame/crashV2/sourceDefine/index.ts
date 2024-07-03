import prefabDefine from './prefabDefine'
import skeletalDefine from './skeletalDefine'
import spriteDefine from './spriteDefine'
import soundDefine from './soundDefine'
import { ISourceFile } from '../../../base/SourceManage'

export const bundlePkgName = "Crash"

const fileMap: ISourceFile[] = [
  ...prefabDefine(bundlePkgName),
  ...skeletalDefine(bundlePkgName),
  ...spriteDefine(bundlePkgName),
  ...soundDefine(bundlePkgName)
]

export default fileMap