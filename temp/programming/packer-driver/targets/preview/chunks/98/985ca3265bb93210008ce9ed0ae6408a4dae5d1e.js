System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, DEV, SourceManage, _crd, loopFiles;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85baao0bORAqpFb7cLR1whg", "SourceManage", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'Label', '__private', 'assetManager', 'instantiate', 'log']);

      /**将枚举的文件转换为ISourceFile的列表 */
      _export("loopFiles", loopFiles = (bundlePkgName, sourceType, defineList) => {
        var _arr = [];

        for (var key in defineList) {
          _arr.push({
            bundlePkgName,
            path: defineList[key],
            sourceType,
            source: null,
            isPreLoad: key.substring(0, 1) === "_" && !DEV ? false : true
          });
        }

        return _arr;
      }); // export const loopFilesDir = (bundlePkgName: string, sourceType: __private._types_globals__Constructor<Asset>, dirPath: string) => {
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


      _export("default", SourceManage = class SourceManage {
        constructor(bundle, fileMap) {
          this.bundle = void 0;
          this.fileMap = void 0;
          this.num = 0;
          this.isStop = false;
          this.fileMap = fileMap;
          this.bundle = bundle;
          this.num = 0;
        }

        stopPreLoad() {
          this.isStop = true;
        }

        preLoadAllFiles1(progressHandler, done, logLabel) {
          var _fileMap = this.fileMap;
          var file = _fileMap[this.num];

          if (file) {
            // logLabel.string += `=>开始${file.path}`
            // assetManager.loadBundle(file.bundlePkgName, (err, _bundle) => {
            // logLabel.string += `=>bundlePkgName（${err}）`
            // if (!err) {
            // console.log(this.bundle.name, file.path)
            this.bundle.load(file.path, file.sourceType, (err2, asset) => {
              // logLabel.string += `=>load${err2}）`
              if (!err2) {
                file.source = asset;
                this.num++; // console.log(this.fileMap.length, this.num, this)

                progressHandler(_fileMap.length, this.num, file); // logLabel.string += `=>完成${file.path}`

                if (!this.isStop) {
                  this.preLoadAllFiles1(progressHandler, done, logLabel);
                } else {
                  this.isStop = false;
                }
              } else {
                logLabel.string += "\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF:" + file.path;
                console.error("\u52A0\u8F7D\u8D44\u6E90\u9519\u8BEF\uFF1A" + this.bundle.name + "-" + file.path);
              }
            }); // }
            // })
          } else {
            done();
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


        getFileAsync(filePath, sourceType) {
          return new Promise((resolve, reject) => {
            var sourceFile = this.getFile(filePath);
            sourceFile && resolve(sourceFile);
            assetManager.loadBundle(this.bundle.name, (err, _bundle) => {
              if (!err) {
                _bundle.load(filePath, sourceType, (err, asset) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve({
                      bundlePkgName: this.bundle.name,
                      path: filePath,
                      sourceType,
                      source: asset,
                      isPreLoad: false
                    });
                  }
                });
              } else {
                console.log("bundle\u5305<" + filePath + ">\u9519\u8BEF\u6216\u672A\u627E\u5230\uFF1A" + err);
                reject("bundle\u5305<" + filePath + ">\u9519\u8BEF\u6216\u672A\u627E\u5230\uFF1A" + err);
              }
            });
          });
        }

        getFile(filePath) {
          var result = this.fileMap.find(file => file.path === filePath);

          if (!result) {
            // console.log(`No file found：${this.bundle.name}/${filePath}`)
            return undefined;
          }

          return result;
        }

        getSourceFile(filePath) {
          return this.bundle.get(filePath);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=985ca3265bb93210008ce9ed0ae6408a4dae5d1e.js.map