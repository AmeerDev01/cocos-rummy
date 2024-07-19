import { AssetManager, assetManager, log, native, resources } from "cc";
import { EDITOR, NATIVE } from "cc/env";
import { config, subGameList } from "../config/config";
import { HallGameGateType } from "../common/allTypes";

function createBundle(
  id: string,
  data: any,
  options: Record<string, any>,
  onComplete: (err: Error | null, data?: AssetManager.Bundle | null) => void
) {
  let bundle = assetManager.bundles.get(data.name);
  if (!bundle) {
    bundle =
      data.name === AssetManager.BuiltinBundleName.RESOURCES
        ? resources
        : new AssetManager.Bundle();
    data.base = data.base || `${id}/`;
    bundle.init(data);
  }
  if (
    !EDITOR &&
    subGameList.map((i) => i.bundleName).indexOf(bundle.name) !== -1
  ) {
    // if (!EDITOR && bundle.name !== bundleName) {
    try {
      import(`virtual:///prerequisite-imports/${bundle.name}`)
        .then(() => {
          onComplete(null, bundle);
        })
        .catch(() => {
          onComplete(null, bundle);
        });
    } catch (e) {
      onComplete(null, bundle);
    }
  } else {
    onComplete(null, bundle);
  }
}
const gameBundle: { [key: string]: AssetManager.Bundle } = {};
export default {
  init: () => {
    assetManager.factory.register("bundle", createBundle);
  },
  /**获取游戏的AB包，Native情况下，调用此函数时，应该确保本地已经下载了子游戏的AB包 */
  getSubGameAssetsBundle: (
    subGameInfo: HallGameGateType,
    progressFn: (curr: number, total: number) => void
  ): Promise<AssetManager.Bundle> => {
    return new Promise((reslove, reject) => {
      const gemeConfig = subGameList.find(
        (i) => i.gameId === subGameInfo.gameId
      );
      const option = {
        onFileProgress: (n, t) => {
          progressFn(n, t);
        }
      };
      // gemeConfig.enableRemote && (option["version"] = gemeConfig.md5)
      // const url = gemeConfig.enableRemote ? `${config.gameBundleUrl}/subGame/${subGameInfo.bundleName}` : subGameInfo.bundleName
      let path = subGameInfo.bundleName;
      if (NATIVE) {
        path =
          native.fileUtils.getWritablePath() +
          "remote/" +
          subGameInfo.bundleName;
      }
      const loadGame = () => {
        assetManager.loadBundle(path, option, (err1, _bundle) => {
          if (!err1) {
            gameBundle[subGameInfo.bundleName] = _bundle;
            window.setTimeout(() => {
              reslove(_bundle);
            }, 500);
            // this.node.getChildByName("Label").getComponent(Label).string = "done"
          } else {
            console.error(err1);
            reject(err1);
            // this.node.getChildByName("Label").getComponent(Label).string = err1.message
          }
        });
      };
      loadGame();
      // if (!getIsTest() && getPackageName() === 'web' && window['installBundle']) {
      //   // (document.querySelector("#loading2") as any).style.display = 'block'
      //   window['installBundle'](subGameInfo.bundleName)
      //   window['onBundleInstallProgress'] = (bundleName: string, progress: number) => {
      //     if (progress === 1) {
      //       // (document.querySelector("#loading2") as any).style.display = 'none'
      //       loadGame()
      //     } else {
      //     }
      //   }
      // } else {
      //   loadGame()
      // }
    });
  },
  releaseBundle: (gameId: number) => {
    const gemeConfig = subGameList.find((i) => i.gameId === gameId);
    gameBundle[gemeConfig.bundleName].releaseAll();
  }
  // loadBundel(subGameInfo: HallGameGateType, progressFn: (curr: number, total: number) => void): Promise<AssetManager.Bundle> {
  //   const option = {
  //     onFileProgress: (n, t) => {
  //       progressFn(n, t)
  //     }
  //   }
  //   return new Promise((reslove, reject) => {
  //     const gemeConfig = subGameList.find(i => i.gameId === subGameInfo.gameId)
  //     let path = gemeConfig.enableRemote ? `${config.gameBundleUrl}/subGame/${subGameInfo.bundleName}` : subGameInfo.bundleName
  //     if (NATIVE) {
  //       path = native.fileUtils.getWritablePath() + "remote/" + subGameInfo.bundleName
  //     }
  //     assetManager.loadBundle(path, option,
  //       (err1, _bundle) => {
  //         if (!err1) {
  //           gameBundle[subGameInfo.bundleName] = _bundle
  //           window.setTimeout(() => {
  //             reslove(_bundle)
  //           }, 500)
  //         } else {
  //           reject(err1)
  //         }
  //       })
  //   })
  // },

  // getRemoteSubGameVersion(subGameInfo: HallGameGateType): Promise<any> {
  //   return new Promise<any>((reslove, reject) => {
  //     const url = `${config.gameBundleUrl}/subGame/compressed/${subGameInfo.bundleName}/version.manifest`
  //     fetch(url).then((response) => {
  //       if (response.status === 200) {
  //         response.text().then(text => {
  //           const data = JSON.parse(text)
  //           if (data) {
  //             reslove(data);
  //           } else {
  //             reslove(undefined);
  //           }
  //         }).catch(e => {
  //           reslove(undefined);
  //           console.log(`get url ${url} failed, text catch, error: ${e}`);
  //         })
  //       } else {
  //         reslove(undefined);
  //         console.log(`get url ${url} failed, status: ${response.status}`);
  //       }
  //     }).catch((e) => {
  //       reslove(undefined);
  //       console.log(`get url ${url} failed!!`);
  //     })
  //   })
  // },
  // checkGame: (subGameInfo: HallGameGateType, content): any => {
  //   const nativeVersion = getNativeVersion(subGameInfo.bundleName)
  //   const result = CompareVersion(nativeVersion, content.version);
  //   return result
  // }
};

// function GetModulePath(module: string) {
//   let path = native.fileUtils.getWritablePath() + "remote/" + module + "/project.manifest";
//   if (native.fileUtils.isFileExist(path)) {
//     return path;
//   }

//   return native.fileUtils.getWritablePath() + "remote/" + module + "/version.manifest";
// }

// function CompareVersion(versionA: string, versionB: string): number {
//   if (versionA === versionB) {
//     return 0;
//   }
//   var vA = versionA.split('.');
//   var vB = versionB.split('.');
//   for (var i = 0; i < vA.length; ++i) {
//     var a = parseInt(vA[i]);
//     var b = parseInt(vB[i]) || 0;
//     if (a === b) {
//       continue;
//     } else {
//       return a - b;
//     }
//   }
//   if (vB.length > vA.length) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function getNativeVersion(module: string) {
//   // let path = GetModulePath(module);
//   // if(native.fileUtils.isFileExist(path)) {
//   //     let data = native.fileUtils.getStringFromFile(path);
//   //     if(!data) {
//   //         log("û���ҵ�remote��version�汾", data);
//   //         return "0.0.0"
//   //     }
//   //     return JSON.parse(data).version;
//   // }
//   return "0.0.0";
// }
