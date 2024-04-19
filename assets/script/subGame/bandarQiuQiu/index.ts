import { AssetManager, Node, Prefab, assetManager, find, instantiate, log } from "cc"
import bandarQiuQiuStore from './store';
import { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import SourceManage from "../../base/SourceManage";
import BandarQiuQiuFileMap from './sourceDefine';
import { SubGameRunState, config, subGameList } from "../../hall/config";
import dtConfig from "./config";
import socketConnect from "./socketConnect";
import GameBoardViewModel from "./viewModel/BandarQiuQiuGameBoardViewModel";
import { listenerFactoy } from "../../common/listenerFactoy";
import { AudioMgr } from "../../utils/AudioMgr";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import UseSetOption, { setActiveAudio } from "../../utils/UseSetOption";
import { global } from "../../hall";
import { setSubGameRunState } from "../../hall/store/actions/baseBoard";

let sourceManageMap: Array<SourceManage> = []
export let bundleCommon: AssetManager.Bundle = null
export let bundleBanDarQiuQiu: AssetManager.Bundle = null
export let mainGameViewModel: GameBoardViewModel
export let bandarQiuQiu_Audio: AudioMgr<SoundPathDefine>
export const sourceManageSelector = (bundleName: string = 'bandar-qiuqiu') => sourceManageMap.find(i => i.bundle.name === bundleName)


export const startUp = (rootNode: Node) => {

  assetManager.loadBundle("common", (err, commonBundle) => {
    bundleCommon = commonBundle
    assetManager.loadBundle(bundlePkgName, Prefab, (err, bundle) => {
      bundleBanDarQiuQiu = bundle
      bundleBanDarQiuQiu.load(PrefabPathDefine.LOADING_PANEL, Prefab,(progress, total) => {
        global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
        global.setSubGameGate(dtConfig.gameId, (progress / total))
      },  (err, prefab) => {
        if (!global.isAllowOpenSubGame(dtConfig.gameId)) return
        global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
        const loaderViewModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
          loadBarType: 1
        }).setEvent({
          onLoadDone: (_sourceManageMap) => {
            sourceManageMap = _sourceManageMap
            bandarQiuQiu_Audio = new AudioMgr<SoundPathDefine>(sourceManageSelector("bandar-qiuqiu"))
            config.gameConfig.find(item => item.name === "bandar-qiuqiu")
            loaderViewModel.comp.setTipContent("Game init...")
            global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
            socketConnect().then(() => {
              loaderViewModel.unMount().then(() => {
                
                mainGameViewModel = new GameBoardViewModel().mountView(sourceManageSelector("bandar-qiuqiu").getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(rootNode).connect()
                bandarQiuQiu_Audio.play(SoundPathDefine.MAIN_BG, UseSetOption.Instance().option.music)
              })
            }).catch(e => loaderViewModel.comp.setTipContent(e || 'error'))
          }
        })
        .setProps({
          versionStr: `md5: ${subGameList.find(i => i.gameId === dtConfig.gameId).md5}`
        })
        loaderViewModel.comp.startLoad([bundle], [...BandarQiuQiuFileMap])

      })
    })
  })
}

/**
 * 背景音乐
 */
export const playMainBg = () => {
  bandarQiuQiu_Audio.play(SoundPathDefine.MAIN_BG, true);
}
/**
* 游戏开始 停止
*/
export const playGame = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.START_STOP_BET);
}
/**
* 按钮单击音效
*/
export const playBtnClick = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
}

/**
* 下注飞筹码音效
*/
export const playChip = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.FLY_CHIP);
}

/**
* 3秒倒计时
*/
export const playTimeout = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.TIME_OUT);
}
/**
* 金币收集音效
*/
export const playGetCoin = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.GET_COIN);
}
/**
* 翻牌声
*/
export const playTurnCard = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.TURN_CARD);
}

/**
* 发牌声
*/
export const playDealCard = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.SEND_CARD);
}

/**
* 停止下注 打铃
*/
export const stopBet = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.STOP_BET);
}
/**
 * 玩家赢
 */
export const playMyWin = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.MY_WIN);
}

/**
 * 玩家输
 */
export const playMyLose = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.MY_LOSE);
}

/**
 * 选择筹码
 */
export const playChooseChip = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.CHOOSE_CHIP);
}

/**
 * PK声
 */
export const playPK = () => {
  bandarQiuQiu_Audio.playOneShot(SoundPathDefine.CARD_PK);
}