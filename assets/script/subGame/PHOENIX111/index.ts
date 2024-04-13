import { AssetManager, Node, Prefab, assetManager, sys } from "cc"
import fruitStore from './store';
import { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import SourceManage from "../../base/SourceManage";
import fruit777FileMap from './sourceDefine';
import { SubGameRunState, config as hallConfig, subGameList } from "../../hall/config";
import socketConnect, { SKT_MAG_TYPE, sktInstance } from "./socketConnect";
import HeaderViewModel from "./viewModel/HeaderViewModel";
import FooterViewModel from "./viewModel/FooterViewModel";
import GameBoardViewModel from "./viewModel/GameBoardViewModel";
import { listenerFactoy } from "../../common/listenerFactoy";
import { AudioMgr } from "../../utils/AudioMgr";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import UseSetOption, { setActiveAudio } from "../../utils/UseSetOption";
import config from "./config";
import { baseBoardView, global } from "../../hall";
import { setSubGameRunState } from "../../hall/store/actions/baseBoard";
import baseBoard from "../../hall/store/reducer/baseBoard";


let sourceManageMap: Array<SourceManage> = []
export let bundlePhoenix: AssetManager.Bundle = null
export let gameBoardViewModel: GameBoardViewModel
export let footerViewModel: FooterViewModel
export let headerViewModel: HeaderViewModel
export let phoenix_Audio: AudioMgr<SoundPathDefine>
export const sourceManageSeletor = (bundleName: string = 'PHOENIX111') => sourceManageMap.find(i => i.bundle.name === bundleName)

export enum NORMAL_MAG_TYPE {
  /**切换游戏，特效中间触发 */
  CHANGE_GAME
}
/**用于一般逻辑的监听器 */
export const msgListener = listenerFactoy<NORMAL_MAG_TYPE>()
export const startUp = (rootNode: Node) => {
  fruitStore.configureStore()

  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundlePhoenix = bundle
    bundlePhoenix.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
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
          phoenix_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor())
          setActiveAudio(phoenix_Audio)
          // hallConfig.gameConfig.find(item => item.name === "phoenix")
          loaderviweModel.comp.setTipContent("game init...")
          global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
          socketConnect().then(() => {
            loaderviweModel.unMount().then(() => {
              gameBoardViewModel = new GameBoardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.GAME_BOARD).source).appendTo(rootNode).connect()
              headerViewModel = new HeaderViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEADER_UP).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
              footerViewModel = new FooterViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.FOOTER_DOWN).source).appendTo(gameBoardViewModel.comp.getWrapNode()).connect()
              phoenix_Audio.play(SoundPathDefine.MAIN_BG, UseSetOption.Instance().option.music)
            })
          }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'))
        }
      }).setProps({
        versionStr: `md5: ${subGameList.find(i => i.gameId === config.gameId).md5}`
      })
      loaderviweModel.comp.startLoad([bundle], [...fruit777FileMap])
    })
  })
}

/**
 * 背景音乐
 */
export const playMainBg = () => {
  phoenix_Audio.play(SoundPathDefine.MAIN_BG, true);
}
/**
* 小游戏1背景
*/
export const playGame1Bg = () => {
  phoenix_Audio.play(SoundPathDefine.GAME1_BG);
}
/**
* 小游戏2背景
*/
export const playGame2Bg = () => {
  phoenix_Audio.play(SoundPathDefine.GAME2_BG);
}
/**点击按钮 */
export const playBtnClick = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
}
/**金币收集结算 */
export const getCoin = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.GET_COIN);
}
/**滚轴停止滚动 */
export const playShellEnd = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.SHELL_END);
}
/** 小游戏进入前铃声*/
export const playLing = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.LING);
}
/**规则翻页 */
export const playTurn = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.TURN);
}
/** 增加下注*/
export const playMaxCoin = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.MAX_COIN);
}
/** 减小下注*/
export const playMinCoin = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.MIN_COIN);
}
/** 滚轴加速*/
export const playFastRoller = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.FAST_ROLLER);
}
/** 选择自转次数时音效*/
export const playBiu = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.BIU);
}
/** 进入小游戏前选择卡片*/
export const playChooseCardIn = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.CHOOSE_CARD_IN);
}
/** 卡片选中成功*/
export const playChooseCard = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.CHOOSE_CARD);
}
/** 小游戏万能图标增添次数特效音*/
export const playAddNum = () => {
  phoenix_Audio.playOneShot(SoundPathDefine.PHOENIX_ADD_NUM);
}