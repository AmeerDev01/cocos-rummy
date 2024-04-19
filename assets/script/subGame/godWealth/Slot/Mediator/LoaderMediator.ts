import { Prefab, Script, TypeScript, Widget, assetManager, instantiate, SpriteFrame } from "cc";
import { INotification } from "../../Framework/interfaces/INotification";
import Mediator from "../../Framework/patterns/mediator/Mediator";
import { CommandDefine } from "../Const/CommandDefine";
import { PrefabDefine } from "../Const/PrefabDefine";
import BaseMediator from "./BaseMediator";
import { IlistTypeHander } from "../types/IlistTypeHander";
import { ISourceFile } from "../types/ISourceFile";
import { GodWealth_Loader } from "../Component/GodWealth_Loader";
import { AudioManager } from "../Managr/AudioManager";
import { getBgProxy } from "../GodWealth_utils";
import { global } from "../../../../hall";
import {addToastAction, setSubGameRunState} from "../../../../hall/store/actions/baseBoard";
import { SubGameRunState } from "../../../../hall/config";
import GodWealth_config from "../GodWealth_config";

export enum LoaderViewType {
  INIT_LOADER_PANEL = "initLoaderPanel"
}
export default class LoaderMediator extends BaseMediator {
  public constructor(mediatorName: string = null, viewComponent: any = null) {
    super(mediatorName, viewComponent)
  }
  public sourceMap: Array<ISourceFile> = [
    {
      key: 'loaderPanel',
      path: PrefabDefine.LOADER_PANEL,
      sourceType: Prefab,
      source: null
    }
  ]
  protected listenerEvent() {

  }
  protected listNotificationConst: Array<IlistTypeHander<LoaderMediator>> = [
    {
      name: LoaderViewType.INIT_LOADER_PANEL,
      handler(notification: INotification) {
        const panel = this.getSource(PrefabDefine.LOADER_PANEL, false)

        // resources.load(panel.path, Prefab, (err, prefab) => {
        //   // 首先贴入加载框面板
        //   const node = instantiate(prefab)
        //   this.viewComponent.addChild(node)
        //   const fileList: ISourceFile[] = notification.getBody().data
        //   const loaderScript = <Loader>node.getComponent("Loader")
        //   let remainNum = fileList.length
        //   //加载面板
        //   fileList.forEach((file, i) => {
        //     resources.load(file.path, Prefab, (err, prefab) => {
        //       file.source = prefab
        //       loaderScript.setLoadingProgress(file.key, fileList.length, --remainNum)
        //       !remainNum && notification.getBody().done()
        //     })
        //   })
        // })
        assetManager.loadBundle("godWealth",async (err, _bundle) => {
          // 首先贴入加载框面板
            try{
                await AudioManager.getInstance().init(_bundle)
            }catch(e) {
                global.hallDispatch(addToastAction({content: String(e)}))
            }
          _bundle.load(panel.path, Prefab, (progress, total) => {
            global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
            global.setSubGameGate(GodWealth_config.gameId, (progress / total))
          }, (err, prefab) => {
            if (!global.isAllowOpenSubGame(GodWealth_config.gameId)) return
            global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
            const node = instantiate(prefab)
            this.viewComponent.addChild(node)
            const fileList: ISourceFile[] = notification.getBody().data
            const loaderScript = <GodWealth_Loader>node.getComponent("GodWealth_Loader")
            let remainNum = fileList.length
            //加载面板
            fileList.forEach((file, i) => {
              _bundle.load(file.path, Prefab, (err, prefab) => {
                file.source = prefab
                loaderScript.setLoadingProgress(file.key, fileList.length, --remainNum)
                if (loaderScript.getLoaderState()) {
                  if (!remainNum) {
                    notification.getBody().done()
                    global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
                  }
                }
              })
            })
          })
          _bundle.loadDir('head', SpriteFrame, null, (err, SpriteFrames) => {
            if (err) {
              console.log(`theResourceFailedToLoad ${name}：`, err);
            }
            getBgProxy().setSpriteFrames(SpriteFrames)
          })
        })
      }
    }
  ]
}
