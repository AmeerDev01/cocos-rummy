import { AssetManager, Node, Prefab, assetManager, find, instantiate, log } from "cc"
import bandarStore from './store';
import { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import SourceManage from "../../base/SourceManage";
import BandarFileMap from './sourceDefine';
import { config, subGameList } from "../../hall/config";
import dtConfig from "./config";
import socketConnect, { bandarGameLogin } from "./socketConnect";
import GameBoardViewModel from "./viewModel/BandarGameBoardViewModel";
import { listenerFactoy } from "../../common/listenerFactoy";
import { AudioMgr } from "../../utils/AudioMgr";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import UseSetOption, { setActiveAudio } from "../../utils/UseSetOption";
import { global, lang } from "../../hall";
import { setSubGameRunState } from "../../hall/store/actions/baseBoard";
import { SubGameRunState } from "../../hallType";

let sourceManageMap: Array<SourceManage> = []
export let bundleCommon: AssetManager.Bundle = null
export let bundleBanDar: AssetManager.Bundle = null
export let mainGameViewModel: GameBoardViewModel
export let bandar_Audio: AudioMgr<SoundPathDefine>
export let loaderViewModel: LoaderPanelViewModel;
export const sourceManageSelector = (bundleName: string = 'bandar') => sourceManageMap.find(i => i.bundle.name === bundleName)


export const startUp = (rootNode: Node) => {

  assetManager.loadBundle("common", (err, commonBundle) => {
    bundleCommon = commonBundle
    assetManager.loadBundle(bundlePkgName, Prefab, (err, bundle) => {
      bundleBanDar = bundle
      bundleBanDar.load(PrefabPathDefine.LOADING_PANEL, Prefab, (progress, total) => {
        global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
        global.setSubGameGate(dtConfig.gameId, (progress / total))
      }, (err, prefab) => {
        if (!global.isAllowOpenSubGame(dtConfig.gameId)) return
        global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
        loaderViewModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
          loadBarType: 1
        }).setEvent({
          onLoadDone: (_sourceManageMap) => {
            sourceManageMap = _sourceManageMap
            bandar_Audio = new AudioMgr<SoundPathDefine>(sourceManageSelector("bandar"))
            config.gameConfig.find(item => item.name === "bandar")
            loaderViewModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))
            global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
            socketConnect().then(() => {
              loaderViewModel.unMount().then(() => {

                mainGameViewModel = new GameBoardViewModel().mountView(sourceManageSelector("bandar").getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(rootNode).bindDoneHandler(bandarGameLogin).connect()
                bandar_Audio.play(SoundPathDefine.MAIN_BG, UseSetOption.Instance().option.music)
              })
            }).catch(e => loaderViewModel.comp.setTipContent(e || 'error'))
          }
        })
          .setProps({
            versionStr: `md5: ${subGameList.find(i => i.gameId === dtConfig.gameId).md5}`
          })
        loaderViewModel.comp.startLoad([bundle], [...BandarFileMap])

      })
    })
  })
}

/**
 * 背景音乐
 */
export const playMainBg = () => {
  bandar_Audio.play(SoundPathDefine.MAIN_BG, true);
}
/**
* 游戏开始
*/
export const playGame = () => {
  bandar_Audio.playOneShot(SoundPathDefine.START_BET);
}
/**
* 按钮单击音效
*/
export const playBtnClick = () => {
  bandar_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
}

/**
* 下注飞筹码音效
*/
export const playChip = () => {
  bandar_Audio.playOneShot(SoundPathDefine.FLY_CHIP);
}

/**
* 3秒倒计时
*/
export const playTimeout = () => {
  bandar_Audio.playOneShot(SoundPathDefine.TIME_OUT);
}
/**
* 金币收集音效
*/
export const playGetCoin = () => {
  bandar_Audio.playOneShot(SoundPathDefine.GET_COIN);
}
/**
* 翻牌声
*/
export const playTurnCard = () => {
  bandar_Audio.playOneShot(SoundPathDefine.TURN_CARD);
}

/**
* 发牌声
*/
export const playDealCard = () => {
  bandar_Audio.playOneShot(SoundPathDefine.DEAL_CARD);
}

/**
* 停止下注
*/
export const stopBet = () => {
  bandar_Audio.playOneShot(SoundPathDefine.STOP_BET);
}
/**
 * 玩家赢
 */
export const playMyWin = () => {
  bandar_Audio.playOneShot(SoundPathDefine.MY_WIN);
}

/**
 * 玩家输
 */
export const playMyLose = () => {
  bandar_Audio.playOneShot(SoundPathDefine.MY_LOSE);
}

/**
 * 选择筹码
 */
export const playChooseChip = () => {
  bandar_Audio.playOneShot(SoundPathDefine.CHOOSE_CHIP);
}