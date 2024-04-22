import hallStore, { getStore } from './store';
import { Asset, AssetManager, AudioClip, ImageAsset, Node, Prefab, Sprite, SpriteFrame, TextAsset, Vec3, __private, assetManager, director, find, instantiate } from 'cc'
import SourceManage from '../base/SourceManage';
import BundleSplit from '../utils/BundleSplit';
import { PrefabPathDefine as HallPrefabPathDefine } from '../hall/sourceDefine/prefabDefine';
import { SoundPathDefine } from '../hall/sourceDefine/soundDefine';
import { SoundPathDefine as CommonSoundPathDefine } from '../common/sourceDefine/soundDefine';
import hallFileMap from './sourceDefine';
import commonFileMap from '../common/sourceDefine';
import LoaderPanelViewModel from '../common/viewModel/LoaderPanelViewModel';
import BaseBoardViewModel from './viewModel/BaseBoardViewModel';
import { AudioMgr } from '../utils/AudioMgr';
import { AnyAction } from 'redux';
import Fetcher from '../utils/Fetcher';
import { ApiUrl } from './apiUrl';
import { config } from './config';
import Internationalization from '../language/Internationalization';
import languagePkg, { LanguageItemType, defaultLanguageType } from '../language/languagePkg';
import { GameConfig, getIsTest } from '../config/GameConfig';
import { BuyType } from './components/Hall_ShopPanel';
import ModalBox from '../common/ModalBox';
import GiftUserViewModel, { GameType, UserInfo } from '../common/viewModel/GiftUserViewModel';
import { getPackageName } from '../common/bridge';
import { SKT_MAG_TYPE, hallWebSocketDriver } from './socketConnect';
import { TaskSchedulerDefault } from '../utils/TaskScheduler';
import { ToastPosition, ToastType, addToastAction, setLoadingAction, setSubGameRunState } from './store/actions/baseBoard';
import { SubGameRunState } from '../hallType';

let sourceManageMap: Array<SourceManage> = []
let rootNodeWrap: Node
export let baseBoardView: BaseBoardViewModel
export const sourceManageSeletor = (bundleName: string = 'hall') => sourceManageMap.find(i => i.bundle.name === bundleName)
export let bundleCommon: AssetManager.Bundle = null
export let bundleHall: AssetManager.Bundle = null
export let hallAudio: AudioMgr<SoundPathDefine> = null
export let commonAudio: AudioMgr<CommonSoundPathDefine> = null
export let fetcher: Fetcher<ApiUrl>

export const lang = new Internationalization(languagePkg)


export const startUp = (rootNode: Node) => {
  rootNodeWrap = rootNode
  hallStore.configureStore()
  BundleSplit.init()
  /**调试期间为了便于读懂信息，默认中文 */
  lang.use(getIsTest() ? LanguageItemType.ZH : defaultLanguageType[config.country].language)
  // BuryPoint.Instance().init()
  fetcher = new Fetcher<ApiUrl>(config.httpBaseUrl)
  // const LOADER_PANEL = "prefabs/loaderPanel"
  assetManager.loadBundle("common", (err, commonBundle) => {
    bundleCommon = commonBundle
    assetManager.loadBundle("hall", (err, hallBundle) => {
      bundleHall = hallBundle
      // 首先贴入加载框面板
      hallBundle.load(HallPrefabPathDefine.LOADER_PANEL, Prefab, (err, prefab) => {
        // const loaderPanel = instantiate(prefab)
        // rootNode.addChild(loaderPanel)
        // const loaderviweModel = loaderPanel.getComponent("Common_LoaderPanel") as Common_LoaderPanel
        const loaderviweModel = new LoaderPanelViewModel().mountView(prefab).appendTo(rootNode).setProps({
          loadBarType: 2
        }).setEvent({
          onLoadDone: (_sourceManageMap) => {
            sourceManageMap = _sourceManageMap
            !hallAudio && (hallAudio = new AudioMgr<SoundPathDefine>(sourceManageSeletor("hall")))
            !commonAudio && (commonAudio = new AudioMgr<CommonSoundPathDefine>(sourceManageSeletor("common")))
            loaderviweModel.unMount().then(() => {
              baseBoardView = new BaseBoardViewModel().mountView(sourceManageSeletor("hall").getSourceFile(HallPrefabPathDefine.BASE_BOARD)).appendTo(rootNode)
              baseBoardView.connect()
              // playBgMusic(baseBoardView)
              getPackageName() !== 'web' && hallAudio.play(SoundPathDefine.MAIN_BGM, true)
              initHallGlobal()
            })
          }
        }).setProps({
          versionStr: GameConfig.appLocalVersion
        })
        //开始加载大厅和通用的资源
        loaderviweModel.comp.startLoad([hallBundle, commonBundle], [...hallFileMap, ...commonFileMap])
      })
    })
  })
}

const playBgMusic = (baseBoardView) => {
  if (getPackageName() === 'web') {
    const fn = () => {
      // let element = document.documentElement
      // if (element.requestFullscreen) {
      //   element.requestFullscreen()
      // } else if (element['msRequestFullscreen']) { 
      //   element['msRequestFullscreen']()
      // } else if (element['mozRequestFullScreen']) {
      //   element['mozRequestFullScreen']()
      // } else if (element['webkitRequestFullscreen']) {
      //   element['webkitRequestFullscreen']()
      // }
      hallAudio.play(SoundPathDefine.MAIN_BGM, true)
      document.getElementById('GameDiv').removeEventListener('click', fn)
      document.getElementById('GameDiv').removeEventListener('touchstart', fn)
    }
    document.getElementById('GameDiv').addEventListener('click', fn)
    document.getElementById('GameDiv').addEventListener("touchstart", fn)
  } else {
    hallAudio.play(SoundPathDefine.MAIN_BGM, true)
  }
}

const initHallGlobal = () => {
  window.HALL_GLOBAL.hallDispatch = (action: AnyAction) => { getStore().dispatch(action) }
  window.HALL_GLOBAL.closeSubGame = (option?: {
    isPre?: boolean,
    confirmContent?: string,
    confirmDoneAfterFn?: Function
    confirmDoneBeforeFn?: Function
  }) => {
    const _option = Object.assign({ isPre: false, confirmContent: "", confirmDoneAfterFn: () => { }, confirmDoneBeforeFn: () => { } }, option || {})
    // (find("Canvas/baseBoard").getComponent('Hall_Baseboard') as Hall_Baseboard).closeSubGame()
    //避免重复弹窗
    if (_option.confirmContent) {
      if (!ModalBox.Instance().isShow && _option.confirmContent !== ModalBox.Instance().contentStr) {
        ModalBox.Instance().show({ content: _option.confirmContent, type: "Prompt" }, () => {
          _option.confirmDoneBeforeFn()
          baseBoardView.comp && baseBoardView.comp.closeSubGame()
          _option.confirmDoneAfterFn()
          return true
        })
      }
    } else {
      baseBoardView.comp && baseBoardView.comp.closeSubGame()
    }
    TaskSchedulerDefault().stopQueue(false)
    hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, '', { isLoading: false })
  }
  window.HALL_GLOBAL.openShop = (buyType?: BuyType) => {
    baseBoardView && baseBoardView.mainPanelViewModel.openShop(buyType)
  }
  window.HALL_GLOBAL.openPersonCenter = (index?: number) => {
    baseBoardView && baseBoardView.mainPanelViewModel.openPc(index)
  }
  window.HALL_GLOBAL.openVipMain = () => {
    baseBoardView && baseBoardView && baseBoardView.mainPanelViewModel.openVipMain();
  }
  window.HALL_GLOBAL.openSign = () => {
    baseBoardView && baseBoardView.mainPanelViewModel.openSign();
  }
  window.HALL_GLOBAL.loadHeadSprite = (icon: number, sprite: Sprite) => {
    bundleCommon && bundleCommon.load(`resource/head/head_circle_${icon}/spriteFrame`, SpriteFrame, (err, sp) => {
      if (!err) {
        sprite.spriteFrame = sp;
      }
    })
  }
  window.HALL_GLOBAL.openShop = (buyType?: BuyType) => {
    baseBoardView && baseBoardView.mainPanelViewModel.openShop(buyType)
  }
  window.HALL_GLOBAL.setSubGameGate = (gameId: number, progress: number) => {
    baseBoardView && baseBoardView.mainPanelViewModel.comp.setSubGameGate(gameId, progress)
  }
  window.HALL_GLOBAL.isAllowOpenSubGame = (gameId: number) => {
    if (baseBoardView) {
      return baseBoardView.isAllowOpenSubGame(gameId)
    }
    return true
  }
  window.HALL_GLOBAL.showGiftWindow = (gameType: GameType, userInfo: UserInfo | null, callback) => {
    if (rootNodeWrap && rootNodeWrap.isValid) {
      GiftUserViewModel.show(rootNodeWrap, gameType, userInfo, callback);
    }
  }
  window.HALL_GLOBAL.flyGift = (fromMemberId: string, toMemberId: string, startPos: Vec3, endPos: Vec3, value: number, parentNode: Node) => {
    if (!parentNode) {
      parentNode = rootNodeWrap;
    }
    if (parentNode && parentNode.isValid) {
      GiftUserViewModel.flyGift(parentNode, fromMemberId, toMemberId, startPos, endPos, value)
    }
  }
  window.HALL_GLOBAL.setLoading = (isShow: boolean, flagId: string, isAllowCloseLoading?: boolean) => {
    getStore().dispatch(setLoadingAction({ isShow, flagId, isAllowCloseLoading }))
  }
  window.HALL_GLOBAL.addToast = (content: string, option?: { type?: ToastType, position?: ToastPosition, forceLandscape?: boolean }) => {
    getStore().dispatch(addToastAction({ content, type: option?.type, position: option?.position, forceLandscape: option?.forceLandscape }))
  }
  window.HALL_GLOBAL.setSubGameRunState = (subGameRunState: SubGameRunState) => {
    getStore().dispatch(setSubGameRunState(subGameRunState))
  }
  window.HALL_GLOBAL.SubGameRunState = SubGameRunState
  window.HALL_GLOBAL.lang = lang
  window.HALL_GLOBAL.defaultLanguageType = defaultLanguageType
}
/**大厅暴露出来的通用方法 */
export const global = {
  /**使用大厅的store */
  hallDispatch: (action: AnyAction) => { getStore().dispatch(action) },
  /**
   * 关闭子游戏
   * @param isPre 是否在初始化完成之前退出，一般指在加载的时候退出
   * @param confirmContent 如果值非空的话，则会弹出确认框
   * @param confirmDoneAfterFn 点击确认后，在实施关闭游戏之后要做的事情
   * @param confirmDoneBeforeFn 点击确认后，在实施关闭游戏之前要做的事情
   */
  closeSubGame: (option?: {
    isPre?: boolean,
    confirmContent?: string,
    confirmDoneAfterFn?: Function
    confirmDoneBeforeFn?: Function
  }) => {
    const _option = Object.assign({ isPre: false, confirmContent: "", confirmDoneAfterFn: () => { }, confirmDoneBeforeFn: () => { } }, option || {})
    // (find("Canvas/baseBoard").getComponent('Hall_Baseboard') as Hall_Baseboard).closeSubGame()
    //避免重复弹窗
    if (_option.confirmContent) {
      if (!ModalBox.Instance().isShow && _option.confirmContent !== ModalBox.Instance().contentStr) {
        ModalBox.Instance().show({ content: _option.confirmContent, type: "Prompt" }, () => {
          _option.confirmDoneBeforeFn()
          baseBoardView.comp && baseBoardView.comp.closeSubGame()
          _option.confirmDoneAfterFn()
          return true
        })
      }
    } else {
      baseBoardView.comp && baseBoardView.comp.closeSubGame()
    }
    TaskSchedulerDefault().stopQueue(false)
    hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, '', { isLoading: false })
  },
  /**打开商城 */
  openShop: (buyType?: BuyType) => {
    baseBoardView && baseBoardView.mainPanelViewModel.openShop(buyType)
  },
  /**打开个人中心 */
  openPersonCenter: (index?: number) => {
    baseBoardView && baseBoardView.mainPanelViewModel.openPc(index)
  },
  /**打开vip主界面 */
  openVipMain: () => {
    baseBoardView && baseBoardView.mainPanelViewModel.openVipMain();
  },
  openSign: () => {
    baseBoardView && baseBoardView.mainPanelViewModel.openSign();
  },

  /**加载头像 */
  loadHeadSprite: (icon: number, sprite: Sprite) => {
    bundleCommon && bundleCommon.load(`resource/head/head_circle_${icon}/spriteFrame`, SpriteFrame, (err, sp) => {
      if (!err) {
        sprite.spriteFrame = sp;
      }
    })
  },
  /**更新子游戏的进度信息 */
  setSubGameGate: (gameId: number, progress: number) => {
    baseBoardView && baseBoardView.mainPanelViewModel.comp.setSubGameGate(gameId, progress)
  },
  /**是否允许打开子游戏,一半用于子游戏的第一个首预制体已经加载完毕 */
  isAllowOpenSubGame: (gameId: number) => {
    if (baseBoardView) {
      return baseBoardView.isAllowOpenSubGame(gameId)
    }
    return true
  },

  showGiftWindow: (gameType: GameType, userInfo: UserInfo | null, callback) => {
    if (rootNodeWrap && rootNodeWrap.isValid) {
      GiftUserViewModel.show(rootNodeWrap, gameType, userInfo, callback);
    }
  },
  flyGift: (fromMemberId: string, toMemberId: string, startPos: Vec3, endPos: Vec3, value: number, parentNode: Node) => {
    if (!parentNode) {
      parentNode = rootNodeWrap;
    }
    if (parentNode && parentNode.isValid) {
      GiftUserViewModel.flyGift(parentNode, fromMemberId, toMemberId, startPos, endPos, value);
    }
  }
}
