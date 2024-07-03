import { AssetManager, Node, Prefab, assetManager, find, instantiate } from "cc"
import dragonStore from './store';
import { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import SourceManage from "../../base/SourceManage";
import DragonTigerFileMap from './sourceDefine';
import { subGameList } from "../../hall/config";
import dtConfig from "./config";
import socketConnect, { dragonTigerGameLogin } from "./socketConnect";
import DragonTigerMainViewModel from "./ViewModel/DragonTigerMainViewModel";
import { listenerFactoy } from "../../common/listenerFactoy";
import { AudioMgr } from "../../utils/AudioMgr";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import UseSetOption, { setActiveAudio } from "../../utils/UseSetOption";
import { global, lang } from "../../hall";
import { setSubGameRunState } from "../../hall/store/actions/baseBoard";
import { SubGameRunState } from "../../hallType";

let sourceManageMap: Array<SourceManage> = []
export let bundleCommon: AssetManager.Bundle = null
export let bundleDragonTiger: AssetManager.Bundle = null
export let mainGameViewModel: DragonTigerMainViewModel
export let dragonTiger_Audio: AudioMgr<SoundPathDefine>
export let loaderviweModel: LoaderPanelViewModel;
export const sourceManageSeletor = (bundleName: string = 'dragonTiger') => sourceManageMap.find(i => i.bundle.name === bundleName)

export const startUp = (rootNode: Node) => {
  assetManager.loadBundle("common", (err, commonBundle) => {
    bundleCommon = commonBundle
    assetManager.loadBundle(bundlePkgName, Prefab, (err, bundle) => {
      bundleDragonTiger = bundle

      bundleDragonTiger.load(PrefabPathDefine.LOADING_PANEL, Prefab, (progress, total) => {
        global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
        global.setSubGameGate(dtConfig.gameId, (progress / total))
      }, (err, prefab) => {
        if (!global.isAllowOpenSubGame(dtConfig.gameId)) return
        global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
        loaderviweModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
          loadBarType: 1
        }).setEvent({
          onLoadDone: (_sourceManageMap) => {
            sourceManageMap = _sourceManageMap
            dragonTiger_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor("dragonTiger"))
            // config.gameConfig.find(item => item.name === "dragonTiger")
            loaderviweModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))
            global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
            socketConnect().then(() => {
              loaderviweModel.unMount().then(() => {
                try {
                  mainGameViewModel = new DragonTigerMainViewModel().mountView(sourceManageSeletor("dragonTiger").getFile(PrefabPathDefine.MAIN_GAME).source).appendTo(rootNode).bindDoneHandler(dragonTigerGameLogin).connect()
                  dragonTiger_Audio.play(SoundPathDefine.MAIN_BG, UseSetOption.Instance().option.music)
                } catch (e) {
                  global.closeSubGame({
                    confirmContent: lang.write(k => k.WebSocketModule.ErrorGeneral) + ":mount"
                  })
                }
              })
            }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'))
          }
        }).setProps({
          versionStr: `md5: ${subGameList.find(i => i.gameId === dtConfig.gameId).md5}`
        })
        loaderviweModel.comp.startLoad([bundle], [...DragonTigerFileMap])

      })
    })
  })
}

/**
 * 背景音乐
 */
export const playMainBg = () => {
  dragonTiger_Audio.play(SoundPathDefine.MAIN_BG, true);
}
/**
* 游戏开始
*/
export const playGame = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.VOICE_CHIP);
}
/**
* 按钮单击音效
*/
export const playBtnClick = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
}

/**
* 下注筹码音效
*/
export const playChip = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.CHIP);
}

/**
* 失败音效
*/
export const playDefeat = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.DEFEAT);
}

/**
* 胜利音效
*/
export const playWin = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.WIN);
}
/**
* 5秒倒计时
*/
export const playTimeout = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.TIME_OUT);
}
/**
* 金币收集音效
*/
export const playGetCoin = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.GET_COIN);
}
/**
* 翻牌声
*/
export const playTurnCard = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.TURN_CARD);
}
/**
* 翻虎
*/
export const playTigerCard = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.TIGER_CARD);
}
/**
* 翻龙
*/
export const playDragonCard = () => {
  dragonTiger_Audio.playOneShot(SoundPathDefine.DRAGON_CARD);
}