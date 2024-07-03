import { AssetManager, Node, Prefab, assetManager, log } from "cc";
import SourceManage from "../../base/SourceManage";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import { AudioMgr } from "../../utils/AudioMgr";
import config from "./config";
import socketConnect, { removeInstance } from "./socketConnect";
import yxxFileMap, { bundlePkgName } from './sourceDefine';
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import fruitStore from './store';
import GameBoardViewModel from "./viewModel/GameBoardViewModel";
import TestViewModel from "./viewModel/TestViewModel";
import { getStore } from "../../hall/store";
import { addToastAction, setSubGameRunState } from "../../hall/store/actions/baseBoard";
import { global, lang } from "../../hall";
import { subGameList } from "../../hall/config";
import { SubGameRunState } from "../../hallType";


let sourceManageMap: Array<SourceManage> = [];
export let bundleyxx: AssetManager.Bundle = null;
export let gameBoardViewModel: GameBoardViewModel;
export let yxxAudio: AudioMgr<SoundPathDefine>;
let loaderviweModel: LoaderPanelViewModel;
export const sourceManageSeletor = (bundleName: string = 'yxx') => sourceManageMap.find(i => i.bundle.name === bundleName)
let initTimeoutId = 0;

export const startUp = (rootNode: Node) => {
  const dispatch = getStore().dispatch
  fruitStore.configureStore()
  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundleyxx = bundle
    bundleyxx.load(PrefabPathDefine.LOAING_PANEL, Prefab, (progress, total) => {
      global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING))
      global.setSubGameGate(config.gameId, (progress / total))
    }, (err, prefab) => {
      if (!global.isAllowOpenSubGame(config.gameId)) return
      global.hallDispatch(setSubGameRunState(SubGameRunState.READY))
      loaderviweModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
        loadBarType: 1
      }).setEvent({
        onLoadDone: (_sourceManageMap) => {
          // window.clearTimeout(initTimeoutId);
          // 默认给10秒进入游戏超时处理，有时候socket连接成功之后，服务器没有发送进入房间 消息，导致卡住
          // initTimeoutId = window.setTimeout(() => {
          //   global.closeSubGame({
          //     confirmContent: lang.write(k => k.InitGameModule.GameBoardInit),
          //     confirmDoneBeforeFn: () => destoryGame(loaderviweModel, initTimeoutId)
          //   });
          //   dispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "game init failed" }) }))
          // }, 10000);

          sourceManageMap = _sourceManageMap
          // hallConfig.gameConfig.find(item => item.name === "yxx")
          yxxAudio = new AudioMgr<SoundPathDefine>(sourceManageSeletor("yxx"));

          loaderviweModel.comp.setTipContent(lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." }))
          global.hallDispatch(setSubGameRunState(SubGameRunState.RUN))
          // 卸载游戏方法
          const destoryGame = (loaderviweModel: LoaderPanelViewModel, timeId: number) => {
            loaderviweModel.unMount();
            window.clearTimeout(timeId);
          }
          removeInstance();

          socketConnect().then(() => {

            gameBoardViewModel = new GameBoardViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.GAME_BOARD).source)
              .appendTo(rootNode).connect().initConnect(() => {
                destoryGame(loaderviweModel, initTimeoutId);
              });

            /**测试界面，可以随时注释 */
            if (config.isTest) {
              new TestViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.TEST_PANEL).source).appendTo(gameBoardViewModel.comp.getGameNode()).connect()
            }
          }).catch(e => loaderviweModel.comp.setTipContent(e || 'error'))
        }
      }).setProps({
        versionStr: `md5: ${subGameList.find(i => i.gameId === config.gameId).md5}`
      })
      loaderviweModel.comp.startLoad([bundle], [...yxxFileMap])
    })
  })
}

export const stopGame = () => {
  // log("stopGame", initTimeoutId);
  loaderviweModel && loaderviweModel.unMount();
  initTimeoutId && window.clearTimeout(initTimeoutId);
  gameBoardViewModel && gameBoardViewModel.unMount();
  yxxAudio && yxxAudio.remove();
  removeInstance();
}

/**
 * 按钮单击音效
 */
export const playBtnClick = () => {
  yxxAudio.playOneShot(SoundPathDefine.BTN_CLICK);
}

/**
 * 下注筹码音效
 */
export const playChip = () => {
  yxxAudio.playOneShot(SoundPathDefine.CHIP);
}

/**
 * 失败音效
 */
export const playDefeat = () => {
  yxxAudio.playOneShot(SoundPathDefine.DEFEAT);
}

/**
 * 胜利音效
 */
export const playWin = () => {
  yxxAudio.playOneShot(SoundPathDefine.WIN);
}

/**
 * 开盖，关盖音效
 */
export const playDong = () => {
  yxxAudio.playOneShot(SoundPathDefine.DONG);
}
/**
 * 摇骰子
 */
export const playSieve = () => {
  yxxAudio.playOneShot(SoundPathDefine.SIEVE);
}

/**
 * 金币收集音效
 */
export const playGetCoin = () => {
  yxxAudio.playOneShot(SoundPathDefine.GET_COIN);
}

/**
 * 3秒倒计时
 */
export const playTimeout = () => {
  yxxAudio.playOneShot(SoundPathDefine.TIME_OUT);
}

/**
 * 背景音乐
 */
export const playMainBg = () => {
  yxxAudio.play(SoundPathDefine.MAIN_BG, true);
}

export const longStop = () => {
  yxxAudio.longStop();
}