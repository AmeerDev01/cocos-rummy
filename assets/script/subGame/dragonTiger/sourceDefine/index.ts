import prefabDefine from './prefabDefine'
import skeletalDefine from './skeletalDefine'
import spriteDefine from './spriteDefine'
import soundDefine from './soundDefine'
import fontDefine from './fontDefine'
import { ISourceFile } from '../../../base/SourceManage'

export const bundlePkgName = "dragonTiger"

const fileMap: ISourceFile[] = [
  ...prefabDefine(bundlePkgName),
  ...skeletalDefine(bundlePkgName),
  ...spriteDefine(bundlePkgName),
  ...soundDefine(bundlePkgName),
  ...fontDefine(bundlePkgName),
]

export default fileMap
