import prefabDefine from './prefabDefine'
import skeletalDefine from './skeletalDefine'
import spriteDefine from './spriteDefine'
import pokerSpriteDefine from './pokerSpriteDefine'
import soundDefine from './soundDefine'
import { ISourceFile } from '../../../base/SourceManage'

export const bundlePkgName = "rummy"

const fileMap: ISourceFile[] = [
  ...prefabDefine(bundlePkgName),
  ...skeletalDefine(bundlePkgName),
  ...spriteDefine(bundlePkgName),
  ...soundDefine(bundlePkgName),
  ...pokerSpriteDefine(bundlePkgName)
]

export default fileMap