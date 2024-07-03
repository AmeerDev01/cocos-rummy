import { Asset, AssetManager, Label, __private, assetManager, instantiate, log } from "cc"
export interface ISourceFile {
  bundlePkgName: string,
  path: string,
  sourceType: __private._types_globals__Constructor<Asset>,
  source: any,
  isPreLoad: boolean
}


/**将枚举的文件转换为ISourceFile的列表 */
export const loopFiles = (bundlePkgName: string, sourceType: __private._types_globals__Constructor<Asset>, defineList: any) => {
  const _arr: ISourceFile[] = []
  for (let key in defineList) {
    _arr.push({
      bundlePkgName,
      path: defineList[key],
      sourceType,
      source: null,
      isPreLoad: (key.substring(0, 1) === "_") ? false : true
    })
  }
  return _arr
}

// export const loopFilesDir = (bundlePkgName: string, sourceType: __private._types_globals__Constructor<Asset>, dirPath: string) => {
//   const _arr: ISourceFile[] = []
//   for (let key in defineList) {
//     _arr.push({
//       bundlePkgName,
//       path: defineList[key],
//       sourceType,
//       source: null
//     })
//   }
//   return _arr
// }

/**保存了一组资源的类，具备预加载，获取单个文件的能力 */
export default class SourceManage {
  constructor(bundle: AssetManager.Bundle, fileMap: ISourceFile[]) {
    this.fileMap = fileMap
    this.bundle = bundle
    this.num = 0
  }
  public bundle: AssetManager.Bundle
  private fileMap: ISourceFile[]
  private num: number = 0
  private isStop: boolean = false

  public stopPreLoad() {
    this.isStop = true
  }
  public preLoadAllFiles1(progressHandler: (total: number, doneCount: number, sourceFileloading: ISourceFile | null) => void, done: () => void, logLabel: Label) {
    const _fileMap = this.fileMap
    const file = _fileMap[this.num]
    if (file) {
      // logLabel.string += `=>开始${file.path}`
      // assetManager.loadBundle(file.bundlePkgName, (err, _bundle) => {
      // logLabel.string += `=>bundlePkgName（${err}）`
      // if (!err) {
      // console.log(this.bundle.name, file.path)
      this.bundle.load(file.path, file.sourceType, (err2, asset) => {
        // logLabel.string += `=>load${err2}）`
        if (!err2) {
          file.source = asset
          this.num++
          // console.log(this.fileMap.length, this.num, this)
          progressHandler(_fileMap.length, this.num, file)
          // logLabel.string += `=>完成${file.path}`
          if (!this.isStop) {
            this.preLoadAllFiles1(progressHandler, done, logLabel)
          } else {
            this.isStop = false
          }
        } else {
          logLabel.string += `资源加载错误:${file.path}`
          console.error(`加载资源错误：${this.bundle.name}-${file.path}`)
        }
      })
      // }
      // })
    } else {
      done()
    }
  }

  /**预加载所有的文件 */
  // public preLoadAllFiles(progressHandler: (
  //   total: number, remain: number,
  //   sourceFileloading: ISourceFile | null) => void) {
  //   return new Promise((resolve, reject) => {
  //     const fileCount = this.fileMap.length
  //     let remainLoadCount = this.fileMap.length
  //     this.fileMap.forEach((file, index) => {
  //       console.log('Load the local manifest lose ...', index);
  //       assetManager.loadBundle(file.bundlePkgName, (err, _bundle) => {
  //         if (!err) {
  //           _bundle.load(file.path, file.sourceType, (err, asset) => {
  //             if (!err) {
  //               file.source = asset
  //               // console.log(`文件${file.path}已读取`)
  //             } else {
  //               console.error(`文件<${file.path}>错误或未找到：${err}`)
  //               reject(`文件<${file.path}>错误或未找到：${err}`)
  //             }
  //             remainLoadCount--
  //             progressHandler(fileCount, remainLoadCount, file)
  //             if (remainLoadCount === 0) {
  //               resolve(true)
  //             }
  //           })
  //         } else {
  //           console.log(`bundle包<${file.bundlePkgName}>错误或未找到：${err}`);
  //           reject(`bundle包<${file.bundlePkgName}>错误或未找到：${err}`)
  //         }
  //       })
  //     })
  //   })

  // }

  public getFileAsync(filePath: string, sourceType: __private._types_globals__Constructor<Asset>): Promise<ISourceFile> {
    return new Promise((resolve, reject) => {
      const sourceFile = this.getFile(filePath)
      if (sourceFile) {
        resolve(sourceFile)
        return
      }
      assetManager.loadBundle(this.bundle.name, (err, _bundle) => {
        if (!err) {
          _bundle.load(filePath, sourceType, (err, asset) => {
            if (err) {
              reject(err)
            } else {
              resolve({
                bundlePkgName: this.bundle.name,
                path: filePath,
                sourceType,
                source: asset,
                isPreLoad: false
              })
            }
          })
        } else {
          console.log(`bundle包<${filePath}>错误或未找到：${err}`);
          reject(`bundle包<${filePath}>错误或未找到：${err}`)
        }
      })
    })
  }

  public getFile(filePath: string): ISourceFile | undefined {
    const result: ISourceFile | undefined = this.fileMap.find(file => file.path === filePath)
    if (!result) {
      // console.log(`No file found：${this.bundle.name}/${filePath}`)
      return undefined
    }
    return result
  }

  public getSourceFile(filePath: string): any {
    return this.bundle.get(filePath)
  }
}