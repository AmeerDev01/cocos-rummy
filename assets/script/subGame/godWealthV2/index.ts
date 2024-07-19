import { AssetManager, Node, Prefab, assetManager } from "cc";
import SourceManage from "../../base/SourceManage";
import { listenerFactoy } from "../../common/listenerFactoy";
import LoaderPanelViewModel from "../../common/viewModel/LoaderPanelViewModel";
import { global, lang } from "../../hall";
import { subGameList } from "../../config/config";
import {
  addToastAction,
  setSubGameRunState
} from "../../hall/store/actions/baseBoard";
import { AudioMgr } from "../../utils/AudioMgr";
import { setActiveAudio } from "../../utils/UseSetOption";
import config from "./config";
import socketConnect, { removeInstance } from "./socketConnect";
import godWealthV2FileMap, { bundlePkgName } from "./sourceDefine";
import { PrefabPathDefine } from "./sourceDefine/prefabDefine";
import { SoundPathDefine } from "./sourceDefine/soundDefine";
import store, { getStore } from "./store";
import GodWealthV2MainViewModel from "./viewModel/GodWealthV2MainViewModel";
import { resetStore } from "./store/actions/game";
import { initRoller } from "./store/actions/roller";
import { SubGameRunState } from "../../hallType";
import { NORMAL_MAG_TYPE } from "../../common/allEnums";

export const startUp = (rootNode: Node) => {
  store.configureStore();
  assetManager.loadBundle(bundlePkgName, (err, bundle) => {
    bundleGodWealthV2 = bundle;
    bundleGodWealthV2.load(
      PrefabPathDefine.LOAING_PANEL,
      Prefab,
      (progress, total) => {
        global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING));
        const prg = progress / total;
        global.setSubGameGate(config.gameId, prg);
      },
      (err, prefab) => {
        global.hallDispatch(setSubGameRunState(SubGameRunState.READY));
        loaderviweModel = new LoaderPanelViewModel()
          .mountView(prefab)
          .appendTo(rootNode)
          .setProps({
            loadBarType: 1
          })
          .setEvent({
            onLoadDone: (_sourceManageMap) => {
              _startGameAfterLoad(_sourceManageMap, rootNode);
            }
          })
          .setProps({
            versionStr: `md5: ${
              subGameList.find((i) => i.gameId === config.gameId).md5
            }`
          });
        loaderviweModel.comp.startLoad([bundle], [...godWealthV2FileMap]);
      }
    );
  });
};
function _startGameAfterLoad(_sourceManageMap: SourceManage[], rootNode: Node) {
  sourceManageMap = _sourceManageMap;
  godWealthV2_Audio = new AudioMgr<SoundPathDefine>(sourceManageSeletor());

  setActiveAudio(godWealthV2_Audio);

  initTimeoutId = window.setTimeout(() => {
    global.closeSubGame({
      confirmContent: lang.write((k) => k.InitGameModule.GameBoardInit),
      confirmDoneBeforeFn: () => destoryGame(loaderviweModel, initTimeoutId)
    });
    global.hallDispatch(
      addToastAction({
        content: lang.write(
          (k) => k.InitGameModule.GameBoardInit,
          {},
          { placeStr: "game init failed" }
        )
      })
    );
  }, 10000);

  loaderviweModel.comp.setTipContent(
    lang.write(
      (k) => k.WebSocketModule.GameInit,
      {},
      { placeStr: "Game is starting..." }
    )
  );

  global.hallDispatch(setSubGameRunState(SubGameRunState.RUN));

  socketConnect()
    .then(() => {
      getStore().dispatch(resetStore(0));
      getStore().dispatch(initRoller(0));

      mainViewModel = new GodWealthV2MainViewModel(() => {
        destoryGame(loaderviweModel, initTimeoutId);
      })
        .mountView(
          sourceManageSeletor().getFile(PrefabPathDefine.MAIN_GAME).source
        )
        .appendTo(rootNode)
        .connect();

      loaderviweModel.viewNode.isValid &&
        loaderviweModel.viewNode.setSiblingIndex(
          loaderviweModel.viewNode.parent.children.length
        );
    })
    .catch((e) => loaderviweModel.comp.setTipContent(e || "error"));
}

export const stopGame = () => {
  getStore().dispatch(resetStore(0));
  getStore().dispatch(initRoller(0));

  loaderviweModel && loaderviweModel.unMount();
  initTimeoutId && window.clearTimeout(initTimeoutId);
  mainViewModel && mainViewModel.unMount();
  godWealthV2_Audio && godWealthV2_Audio.remove();
  removeInstance();
};

const destoryGame = (loaderviweModel: LoaderPanelViewModel, timeId: number) => {
  loaderviweModel.unMount();
  window.clearTimeout(timeId);
};

let sourceManageMap: Array<SourceManage> = [];
export let bundleGodWealthV2: AssetManager.Bundle = null;
export let mainViewModel: GodWealthV2MainViewModel;
export let godWealthV2_Audio: AudioMgr<SoundPathDefine>;
let loaderviweModel: LoaderPanelViewModel;
export const sourceManageSeletor = (bundleName: string = bundlePkgName) =>
  sourceManageMap.find((i) => i.bundle.name === bundleName);
export const msgListener = listenerFactoy<NORMAL_MAG_TYPE>();
let initTimeoutId = 0;
