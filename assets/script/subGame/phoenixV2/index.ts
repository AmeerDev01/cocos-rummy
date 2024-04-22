import { AssetManager, Node, Prefab, assetManager } from "cc";
import SourceManage from "../../base/SourceManage";
import { listenerFactoy } from "../../common/listenerFactoy";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import { global, lang } from "../../hall";
import { subGameList } from "../../hall/config";
import { addToastAction, setSubGameRunState } from "../../hall/store/actions/baseBoard";
import { AudioMgr } from "../../utils/AudioMgr";
import { setActiveAudio } from "../../utils/UseSetOption";
import config from "./config";
import socketConnect, { removeInstance } from "./socketConnect";
import phoenixV2FileMap, { bundlePkgName } from './sourceDefine';
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import fruitStore, { getStore } from './store';
import PhoenixV2MainViewModel from "./viewModel/PhoenixV2MainViewModel";
import { initGameStore } from "./store/actions/game";
import { initRoller } from "./store/actions/roller";
import { SubGameRunState } from "../../hallType";


let sourceManageMap: Array<SourceManage> = []
export let bundlePhoenixV2: AssetManager.Bundle = null
export let mainViewModel: PhoenixV2MainViewModel;
export let phoenixV2_Audio: AudioMgr<SoundPathDefine>
let loaderviweModel: LoaderPanelViewModel;
export const sourceManageSeletor = (bundleName: string = bundlePkgName) => sourceManageMap.find(i => i.bundle.name === bundleName)

export enum NORMAL_MAG_TYPE {
  /**切换游戏，特效中间触发 */
  CHANGE_GAME
}
/**用于一般逻辑的监听器 */
export const msgListener = listenerFactoy<NORMAL_MAG_TYPE>()
let initTimeoutId = 0;
export const startUp = (rootNode: Node) => {
  fruitStore.configureStore()

  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundlePhoenixV2 = bundle
    bundlePhoenixV2.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
      global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
      global.setSubGameGate(config.gameId, (progress / total))
    }, (err, prefab) => {
      if (!global.isAllowOpenSubGame(config.gameId)) return
      global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
      loaderviweModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
        loadBarType: 1
      }).setEvent({
        onLoadDone: (_sourceManageMap) => {
          sourceManageMap = _sourceManageMap
          phoenixV2_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor())
          setActiveAudio(phoenixV2_Audio)

          // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住
          initTimeoutId = window.setTimeout(() => {
            global.closeSubGame({
              confirmContent: lang.write(k => k.InitGameModule.GameBoardInit),
              confirmDoneBeforeFn: () => destoryGame(loaderviweModel, initTimeoutId)
            });
            global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
            phoenixV2_Audio.playOneShot(SoundPathDefine.DING)
          }, 10000);

          // 卸载游戏方法
          const destoryGame = (loaderviweModel: LoaderPanelViewModel, timeId: number) => {
            loaderviweModel.unMount();
            window.clearTimeout(timeId);
          }

          loaderviweModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))
          global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
          socketConnect().then(() => {
            getStore().dispatch(initGameStore(0));
            getStore().dispatch(initRoller(0));
            mainViewModel = new PhoenixV2MainViewModel(() => {
              destoryGame(loaderviweModel, initTimeoutId);
            })
              .mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source)
              .appendTo(rootNode)
              .connect();
            // 调整loader层级到最上层，让主界面初始化完成后才卸载
            loaderviweModel.viewNode.isValid && loaderviweModel.viewNode.setSiblingIndex(loaderviweModel.viewNode.parent.children.length);
          }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'))
        }
      }).setProps({
        versionStr: `md5: ${subGameList.find(i => i.gameId === config.gameId).md5}`
      })
      loaderviweModel.comp.startLoad([bundle], [...phoenixV2FileMap])
    })
  })
}

export const stopGame = () => {
  // log("stopGame", initTimeoutId);
  getStore().dispatch(initGameStore(0));
  getStore().dispatch(initRoller(0));
  loaderviweModel && loaderviweModel.unMount();
  initTimeoutId && window.clearTimeout(initTimeoutId);
  mainViewModel && mainViewModel.unMount();
  phoenixV2_Audio && phoenixV2_Audio.remove();
  removeInstance();
}