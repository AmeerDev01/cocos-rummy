import prefabDefine from './prefabDefine'
import skeletalDefine from './skeletalDefine'
import spriteDefine from './spriteDefine'
import soundDefine from './soundDefine'
import { ISourceFile } from '../../../base/SourceManage'
import { fishSourceFiles } from '../config/FishConfig'


export const fishBundlePkgName = "fish"
const fileMap: ISourceFile[] = [
  ...prefabDefine(fishBundlePkgName),
  ...skeletalDefine(fishBundlePkgName),
  ...spriteDefine(fishBundlePkgName),
  ...soundDefine(fishBundlePkgName),
  ...fishSourceFiles(fishBundlePkgName),
]

export default fileMap