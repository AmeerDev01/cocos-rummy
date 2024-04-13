import { AssetManager, assetManager, resources } from "cc";
import { DEV, EDITOR } from "cc/env";
import { HallGameGateType, config, subGameList } from "../hall/config"
import { getPackageName } from "../common/bridge";

function createBundle(id: string, data: any, options: Record<string, any>, onComplete: ((err: Error | null, data?: AssetManager.Bundle | null) => void)) {
  let bundle = assetManager.bundles.get(data.name);
  if (!bundle) {
    bundle = data.name === AssetManager.BuiltinBundleName.RESOURCES ? resources : new AssetManager.Bundle();
    data.base = data.base || `${id}/`;
    bundle.init(data);
  }
  //HACK: Can not import scripts in GameView due to the difference of Scripting System between the GameView and Preview
  if (!EDITOR && subGameList.map(i => i.bundleName).indexOf(bundle.name) !== -1) {
    // if (!EDITOR && bundle.name !== bundleName) {
    try {
      import(`virtual:///prerequisite-imports/${bundle.name}`).then(() => {
        onComplete(null, bundle);
      }).catch(() => {
        onComplete(null, bundle);
      });
    } catch (e) {
      onComplete(null, bundle);
    }

  } else {
    onComplete(null, bundle);
  }
}

const gameBundle: { [key: string]: AssetManager.Bundle } = {}
export default {
  init: () => {
    assetManager.factory.register("bundle", createBundle)
  },
  getRemoteBundle: (subGameInfo: HallGameGateType, progressFn: (curr: number, total: number) => void): Promise<AssetManager.Bundle> => {
    // return new Promise((reslove, reject) => {
    //   assetManager.loadBundle("http://54.251.66.82:8008/subGame/yxx",
    //     {
    //       version: "9a011",
    //       onFileProgress: (n, t) => {
    //         console.log(`${n}&${t}`)
    //       }
    //     }, (err, _bundle) => {
    //       if (!err) {
    //         reslove(_bundle)
    //       } else {
    //         reject(err)
    //       }
    //     })
    // })
    return new Promise((reslove, reject) => {
      const gemeConfig = subGameList.find(i => i.gameId === subGameInfo.gameId)
      const option = {
        onFileProgress: (n, t) => {
          progressFn(n, t)
        }
      }
      const url = gemeConfig.enableRemote ? `${config.gameBundleUrl}/subGame/${subGameInfo.bundleName}` : subGameInfo.bundleName
      gemeConfig.enableRemote && (option["version"] = gemeConfig.md5)

      const loadGame = () => {
        assetManager.loadBundle(url, option,
          (err1, _bundle) => {
            if (!err1) {
              gameBundle[subGameInfo.bundleName] = _bundle
              window.setTimeout(() => {
                reslove(_bundle)
              }, 2000)
              // this.node.getChildByName("Label").getComponent(Label).string = "done"
            } else {
              reject(err1)
              // this.node.getChildByName("Label").getComponent(Label).string = err1.message
            }
          })
      }
      loadGame()
      // if (!DEV && getPackageName() === 'web' && window['installBundle']) {
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
    })
  },
  releaseBundle: (gameId: number) => {
    const gemeConfig = subGameList.find(i => i.gameId === gameId)
    gameBundle[gemeConfig.bundleName].releaseAll()
  }
}