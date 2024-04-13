import { AssetManager, Node, Prefab, assetManager } from "cc";
import SourceManage from "../../base/SourceManage";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import { AudioMgr } from "../../utils/AudioMgr";
import config from "./config";
import socketConnect, { removeInstance } from "./socketConnect";
import dominoFileMap, { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import dominoStore from './store';
import { global, lang } from "../../hall";
import { addToastAction, setSubGameRunState } from "../../hall/store/actions/baseBoard";
import { SubGameRunState } from "../../hall/config";
import { getStore } from "../../hall/store";
import TestViewModel from "./viewModel/TestViewModel";
import RoomChooseViewModel from "./viewModel/RoomChooseViewModel";

let sourceManageMap: Array<SourceManage> = []
export let bundleDomino: AssetManager.Bundle = null
export let rummy_Audio: AudioMgr<SoundPathDefine>
export const sourceManageSeletor = (bundleName: string = bundlePkgName) => sourceManageMap.find(i => i.bundle.name === bundleName)
export let rummyRoomChoseView: RoomChooseViewModel;
let initTimeoutId = 0;
let loaderviweModel: LoaderPanelViewModel;

export const startUp = (rootNode: Node) => {
  const dispatch = getStore().dispatch
  dominoStore.configureStore()
  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundleDomino = bundle
    bundleDomino.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
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
          rummy_Audio && rummy_Audio.remove();
          rummy_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor())
          loaderviweModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))

          // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住
          initTimeoutId = window.setTimeout(() => {
            global.closeSubGame({
              confirmContent: lang.write(k => k.InitGameModule.GameBoardInit)
            });
            dispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
          }, 10000);

          const socketHandle = () => {
            initTimeoutId && window.clearTimeout(initTimeoutId);
            loaderviweModel.unMount().then(() => {
              global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))

              rummyRoomChoseView = new RoomChooseViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ROOM_CHOOSE).source).appendTo(rootNode).connect()

              if (config.isTest) {
                new TestViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.TEST).source).appendTo(rootNode).connect()
              }
            })
          }

          if (config.isTest) {
            socketConnect();
            socketHandle();
          } else {
            socketConnect().then(socketHandle).catch(e => loaderviweModel.comp.setTipContent(e || 'error'))
          }
        }
      })
      loaderviweModel.comp.startLoad([bundle], [...dominoFileMap])
    })
  })
}

export const stopGame = () => {
  // log("stopGame", initTimeoutId);
  initTimeoutId && window.clearTimeout(initTimeoutId);
  
  loaderviweModel && loaderviweModel.unMount();
  rummy_Audio && rummy_Audio.remove();
  removeInstance();
}