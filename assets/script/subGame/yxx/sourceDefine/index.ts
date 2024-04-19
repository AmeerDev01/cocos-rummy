import prefabDefine from './prefabDefine'
import skeletalDefine from './skeletalDefine'
import spriteDefine from './spriteDefine'
import soundDefine from './soundDefine'
import { ISourceFile } from '../../../base/SourceManage'
import spriteAtlasDefine from './spriteAtlasDefine'
import fontDefine from './fontDefine'

export const bundlePkgName = "yxx"

const fileMap: ISourceFile[] = [
  ...prefabDefine(bundlePkgName),
  ...skeletalDefine(bundlePkgName),
  ...spriteDefine(bundlePkgName),
  ...soundDefine(bundlePkgName),
  // ...spriteAtlasDefine(bundlePkgName),
  ...fontDefine(bundlePkgName)
]

export default fileMap