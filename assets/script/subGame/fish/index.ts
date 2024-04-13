import { AssetManager, Node, Prefab, assetManager } from "cc";
import SourceManage from "../../base/SourceManage";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import { global, lang } from "../../hall";
import { SubGameRunState } from "../../hall/config";
import { getStore } from "../../hall/store";
import { addToastAction, setSubGameRunState } from "../../hall/store/actions/baseBoard";
import fishFileMap, { fishBundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import fishStore from './store';
import config from "./config";
import MainViewModel from "./viewModel/MainViewModel";
import TestViewModel from "./viewModel/TestViewModel";
import socketConnect, { removeInstance } from "./socketConnect";

let sourceManageMap: Array<SourceManage> = []
export let bundleFish: AssetManager.Bundle = null
export const sourceManageSelector = (bundleName: string = fishBundlePkgName) => sourceManageMap.find(i => i.bundle.name === bundleName)
export let rootNode: Node
let initTimeoutId = 0;

export let mainViewModel: MainViewModel;

export const startUp = (rootNode: Node) => {
  const dispatch = getStore().dispatch
  rootNode = rootNode
  fishStore.configureStore()
  assetManager.loadBundle(fishBundlePkgName, (err, bundle) => {
    bundleFish = bundle
    bundleFish.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
      global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
      global.setSubGameGate(config.gameId, (progress / total))
    }, (err, prefab) => {
      if (!global.isAllowOpenSubGame(config.gameId)) return
      global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
      const loaderviweModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
        loadBarType: 1
      }).setEvent({
        onLoadDone: (_sourceManageMap) => {
          sourceManageMap = _sourceManageMap

          loaderviweModel.comp.setTipContent("game init...")

          // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住
          initTimeoutId = window.setTimeout(() => {
            global.closeSubGame({
              confirmContent: lang.write(k => k.InitGameModule.GameBoardInit)
            });
            dispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
          }, 10000);

          const socketHandle = () => {
            initTimeoutId && window.clearTimeout(initTimeoutId);
            mainViewModel = new MainViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.GAME_MAIN_PANEL).source).appendTo(rootNode).connect();
            loaderviweModel.unMount();
            if (config.isTest) {
              new TestViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.TEST).source).appendTo(rootNode).connect();
            }
          }
          if (config.isTest) {
            socketConnect();
            socketHandle();
          } else {
            socketConnect().then(socketHandle).catch(e => loaderviweModel.comp.setTipContent(e || 'error'))
          }
        }
      })
      loaderviweModel.comp.startLoad([bundle], [...fishFileMap])
    })
  })
}

export const stopGame = () => {
  initTimeoutId && window.clearTimeout(initTimeoutId);
  mainViewModel && mainViewModel.unMount();
  removeInstance();
}