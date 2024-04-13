import { ISourceFile } from '../../base/SourceManage'
import prefabDefine from './prefabDefine'
import spriteDefine from './spriteDefine'
import skeletonDefine from './skeletonDefine'
import soundPathDefine from './soundDefine'

const bundlePkgName = "common"

const prefabDefines = prefabDefine(bundlePkgName)
const spriteDefines = spriteDefine(bundlePkgName)
const skeletonDefines = skeletonDefine(bundlePkgName)
const soundPathDefines = soundPathDefine(bundlePkgName)

const fileMap: ISourceFile[] = [
  ...prefabDefines,
  ...spriteDefines,
  ...skeletonDefines,
  ...soundPathDefines,
]

export default fileMap