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
import RoomChooseViewModel from "./viewModel/RoomChooseViewModel";
import TestViewModel from "./viewModel/TestViewModel";
import { global, lang } from "../../hall";
import { addToastAction, setSubGameRunState } from "../../hall/store/actions/baseBoard";
import { SubGameRunState } from "../../hall/config";
import { getStore } from "../../hall/store";

let sourceManageMap: Array<SourceManage> = []
export let bundleDomino: AssetManager.Bundle = null
export let domino_Audio: AudioMgr<SoundPathDefine>
export let roomChooseViewModel: RoomChooseViewModel
export const sourceManageSeletor = (bundleName: string = bundlePkgName) => sourceManageMap.find(i => i.bundle.name === bundleName)
export let rootNode: Node
let initTimeoutId = 0;

export const startUp = (rootNode: Node) => {
  const dispatch = getStore().dispatch
  rootNode = rootNode
  dominoStore.configureStore()
  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundleDomino = bundle
    bundleDomino.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
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
          domino_Audio && domino_Audio.remove();
          domino_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor())
          loaderviweModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))
          global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
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
              
              roomChooseViewModel = new RoomChooseViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ROOM_CHOOSE).source).appendTo(rootNode).connect()

              playBg();

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
  roomChooseViewModel && roomChooseViewModel.unMount();
  domino_Audio && domino_Audio.remove();
  removeInstance();
}

export const playBg = () => {
  domino_Audio.play(SoundPathDefine.domino_jl_bk, true);
}
export const playBtnClick = () => {
  domino_Audio.playOneShot(SoundPathDefine.btn_click);
}
export const playChooseCard = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_choose_card);
}
export const playCoin = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_coin);
}
export const playFapai = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_fapai);
}
export const playGameBegin = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_game_begin);
}
export const playGuoPai = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_guopai);
}
export const playSend = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_send);
}
export const playTimeout = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_time_out);
}
export const playWin = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_win);
}
export const playDead = () => {
  domino_Audio.playOneShot(SoundPathDefine.domino_dead);
}