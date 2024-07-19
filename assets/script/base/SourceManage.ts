import { Asset, AssetManager, Label, __private, assetManager } from "cc";
export interface ISourceFile {
  bundlePkgName: string;
  path: string;
  sourceType: __private.__types_globals__Constructor<Asset>;
  source: any;
  isPreLoad: boolean;
}

export const loopFiles = (
  bundlePkgName: string,
  sourceType: __private.__types_globals__Constructor<Asset>,
  defineList: any
) => {
  const _arr: ISourceFile[] = [];
  for (let key in defineList) {
    _arr.push({
      bundlePkgName,
      path: defineList[key],
      sourceType,
      source: null,
      isPreLoad: key.substring(0, 1) !== "_"
    });
  }
  return _arr;
};

export default class SourceManage {
  constructor(bundle: AssetManager.Bundle, fileMap: ISourceFile[]) {
    this.fileMap = fileMap;
    this.bundle = bundle;
    this.num = 0;
  }
  public bundle: AssetManager.Bundle;
  private fileMap: ISourceFile[];
  private num: number = 0;
  private isStop: boolean = false;

  public stopPreLoad() {
    this.isStop = true;
  }
  public preLoadAllFiles1(
    progressHandler: (
      total: number,
      doneCount: number,
      sourceFileloading: ISourceFile | null
    ) => void,
    done: () => void,
    logLabel: Label
  ) {
    const _fileMap = this.fileMap;
    const file = _fileMap[this.num];
    if (file) {
      this.bundle.load(file.path, file.sourceType, (err2, asset) => {
        if (!err2) {
          file.source = asset;
          this.num++;

          progressHandler(_fileMap.length, this.num, file);

          if (!this.isStop) {
            this.preLoadAllFiles1(progressHandler, done, logLabel);
          } else {
            this.isStop = false;
          }
        } else {
          logLabel.string += `资源加载错误:${file.path}`;
          console.error(`加载资源错误：${this.bundle.name}-${file.path}`);
        }
      });
    } else {
      done();
    }
  }

  public getFileAsync(
    filePath: string,
    sourceType: __private.__types_globals__Constructor<Asset>
  ): Promise<ISourceFile> {
    return new Promise((resolve, reject) => {
      const sourceFile = this.getFile(filePath);
      if (sourceFile) {
        resolve(sourceFile);
        return;
      }
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
          console.log(`bundle包<${filePath}>错误或未找到：${err}`);
          reject(`bundle包<${filePath}>错误或未找到：${err}`);
        }
      });
    });
  }

  public getFile(filePath: string): ISourceFile | undefined {
    const result: ISourceFile | undefined = this.fileMap.find(
      (file) => file.path === filePath
    );
    if (!result) {
      return undefined;
    }
    return result;
  }

  public getSourceFile(filePath: string): any {
    return this.bundle.get(filePath);
  }
}
