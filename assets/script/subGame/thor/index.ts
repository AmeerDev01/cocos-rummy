import { AssetManager, Node, Prefab, assetManager, sys } from "cc"
import fruitStore from './store';
import { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import SourceManage from "../../base/SourceManage";
import thorFileMap from './sourceDefine';
import { SubGameRunState, config as hallConfig, subGameList } from "../../hall/config";
import socketConnect, { SKT_MAG_TYPE, sktInstance } from "./socketConnect";
import HeaderViewModel from "./viewModel/HeaderViewModel";
import FooterViewModel from "./viewModel/FooterViewModel";
import GameBoardViewModel from "./viewModel/GameBoardViewModel";
import { listenerFactoy } from "../../common/listenerFactoy";
import { AudioMgr } from "../../utils/AudioMgr";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import { setActiveAudio } from "../../utils/UseSetOption";
import config from "./config";
import { baseBoardView, global, lang } from "../../hall";
import { addToastAction, setSubGameRunState } from "../../hall/store/actions/baseBoard";
import baseBoard from "../../hall/store/reducer/baseBoard";
import WinShowViewModel from "./viewModel/WinShowViewModel";
import RoleViewModel from "./viewModel/RoleViewModel";


let sourceManageMap: Array<SourceManage> = []
export let bundleThor: AssetManager.Bundle = null
export let gameBoardViewModel: GameBoardViewModel
export let footerViewModel: FooterViewModel
export let headerViewModel: HeaderViewModel
export let winShowViewModel: WinShowViewModel
export let roleViewModel: RoleViewModel
export let thor_Audio: AudioMgr<SoundPathDefine>
export const sourceManageSeletor = (bundleName: string = 'thor') => sourceManageMap.find(i => i.bundle.name === bundleName)

export enum NORMAL_MAG_TYPE {
  /**切换游戏，特效中间触发 */
  CHANGE_GAME
}
/**用于一般逻辑的监听器 */
export const msgListener = listenerFactoy<NORMAL_MAG_TYPE>()
export const startUp = (rootNode: Node) => {
  fruitStore.configureStore()
  let initTimeoutId = 0;
  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundleThor = bundle
    bundleThor.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
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
          thor_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor())
          setActiveAudio(thor_Audio)
          // hallConfig.gameConfig.find(item => item.name === "thor")
          loaderviweModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))
          initTimeoutId = window.setTimeout(() => {
            global.closeSubGame({
              confirmContent: lang.write(k => k.InitGameModule.GameBoardInit),
              confirmDoneBeforeFn: () => destoryGame(loaderviweModel, initTimeoutId)
            });
            global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
          }, 15000);
          const destoryGame = (loaderviweModel: LoaderPanelViewModel, timeId: number) => {
            loaderviweModel.unMount();
            window.clearTimeout(timeId);
          }
          socketConnect().then(() => {
            global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
              gameBoardViewModel = new GameBoardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.GAME_BOARD).source).appendTo(rootNode).connect()
              winShowViewModel = new WinShowViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.WINSHOW).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
              roleViewModel = new RoleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.THORROLE).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
              footerViewModel = new FooterViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.FOOTER_DOWN).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
              headerViewModel = new HeaderViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEADER_UP).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
              loaderviweModel.viewNode.isValid && loaderviweModel.viewNode.setSiblingIndex(loaderviweModel.viewNode.parent.children.length);
              loaderviweModel.comp.scheduleOnce(()=>{
                destoryGame(loaderviweModel, initTimeoutId);
              },1)
          }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'))
        }
      }).setProps({
        // versionStr: `md5: ${subGameList.find(i => i.gameId === config.gameId).md5}`
      })
      loaderviweModel.comp.startLoad([bundle], [...thorFileMap])
    })
  })
}
