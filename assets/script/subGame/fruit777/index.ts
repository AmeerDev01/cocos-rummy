import { AssetManager, Node, Prefab, assetManager, sys } from "cc"
import fruitStore from './store';
import { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import SourceManage from "../../base/SourceManage";
import fruit777FileMap from './sourceDefine';
import { SubGameRunState, config as hallConfig, subGameList } from "../../hall/config";
import socketConnect, { gameLogin } from "./socketConnect";
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


let sourceManageMap: Array<SourceManage> = []
export let bundleFruit777: AssetManager.Bundle = null
export let loaderviweModel: LoaderPanelViewModel
export let gameBoardViewModel: GameBoardViewModel
export let footerViewModel: FooterViewModel
export let headerViewModel: HeaderViewModel
export let fruit777_Audio: AudioMgr<SoundPathDefine>

export const sourceManageSeletor = (bundleName: string = 'fruit777') => sourceManageMap.find(i => i.bundle.name === bundleName)

export enum NORMAL_MAG_TYPE {
  /**切换游戏，特效中间触发 */
  CHANGE_GAME
}
/**用于一般逻辑的监听器 */
export const msgListener = listenerFactoy<NORMAL_MAG_TYPE>()
export const startUp = (rootNode: Node) => {
  fruitStore.configureStore()

  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundleFruit777 = bundle
    bundleFruit777.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
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
          fruit777_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor())
          setActiveAudio(fruit777_Audio)
          // hallConfig.gameConfig.find(item => item.name === "fruit777")
          loaderviweModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))
          global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
          socketConnect().then(() => {
            loaderviweModel.unMount().then(() => {
              try {
                gameBoardViewModel = new GameBoardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.GAME_BOARD).source).appendTo(rootNode).bindDoneHandler(gameLogin).connect()
                headerViewModel = new HeaderViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEADER_UP).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
                footerViewModel = new FooterViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.FOOTER_DOWN).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
              } catch (e) {
                global.closeSubGame({
                  confirmContent: lang.write(k => k.WebSocketModule.ErrorGeneral) + ":mount"
                })
              }
            })
          }).catch(e => {
            loaderviweModel.comp.setTipContent(e || 'error')
            global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "游戏初始化失败" }) }))
            global.closeSubGame({
              confirmContent: lang.write(k => k.WebSocketModule.ConfigGameFaild)
            });
          })
        }
      }).setProps({
        versionStr: `md5: ${subGameList.find(i => i.gameId === config.gameId).md5}`
      })
      loaderviweModel.comp.startLoad([bundle], [...fruit777FileMap])
    })
  })
}