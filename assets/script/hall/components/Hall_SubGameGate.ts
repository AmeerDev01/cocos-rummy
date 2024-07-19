import {
  _decorator,
  assert,
  Button,
  Color,
  Component,
  instantiate,
  Label,
  Layout,
  Node,
  Prefab,
  ProgressBar,
  sp,
  Sprite,
  SpriteFrame,
  sys,
  UIOpacity,
  UITransform
} from "cc";
import { BaseComponent } from "../../base/BaseComponent";
import { config, subGameList } from "../config";
import { HallGameGateType } from "../../common/allTypes";
import {
  baseBoardView,
  bundleCommon,
  bundleHall,
  global,
  hallAudio,
  sourceManageSeletor
} from "../index";
import { SkeletalPathDefine } from "../sourceDefine/skeletalDefine";
import BundleSplit from "../../utils/BundleSplit";
import {
  addToastAction,
  setLoadingAction,
  setSubGameInfoAction,
  setSubGameRunState,
  ToastType
} from "../store/actions/baseBoard";
import { SoundPathDefine } from "../sourceDefine/soundDefine";
import { lang } from "../index";
import { NATIVE } from "cc/env";
import { getPackageName } from "../../common/bridge";
import { SubGameRunState } from "../../hallType";
import { getIsTest, isH5 } from "../../config/GameConfig";
import { DownloadManagerGame } from "../../base/DownloadManagerGame";
import { GameState } from "../../common/allTypes";
const { ccclass, property } = _decorator;

export interface IState {
  isdownLoaded?: boolean;
}

export interface IProps {
  useVip: number;
  gamesIds?: Array<number>;
  activeSubGameInfo?: HallGameGateType;
}
export interface IEvent {
  /**此图标被点击 */
  onTouchInto?: (gameInfo: HallGameGateType) => void;
}

@ccclass("Hall_SubGameGate")
export class Hall_SubGameGate extends BaseComponent<IState, IProps, IEvent> {
  start() {}
  private gameGateItemNodeList: { key: number; node: Node }[] = [];
  /**进度条的初始值（用于支持多阶段加载的情况） */
  private loadingStart: number = 0.02;
  protected propertyNode = {
    props_gameItem_template: new Node()
  };

  public props: IProps = {
    useVip: 0,
    gamesIds: [],
    activeSubGameInfo: null
  };

  public events: IEvent = {
    onTouchInto: () => {}
  };

  protected initState() {
    return {};
  }

  protected bindEvent(): void {}

  protected useProps(
    key: keyof IProps,
    value: { pre: Partial<IState>; cur: Partial<IState> }
  ) {
    if (key === "gamesIds") {
      this.props.gamesIds.forEach((gameId) => {
        this.renderGateIcon(gameId).then((gameGateItemNode) => {});
      });
    }
    if (key === "useVip") {
      // 因为不能确定用户的vip信息和gameid信息哪个先到，所以vip信息更新的时候，还得执行一次，如果vip信息先到，这个数组为空也不会执行
      this.gameGateItemNodeList.forEach((item) => {
        this.renderGateFace(item.key, item.node);
      });
    }
    if (key === "activeSubGameInfo") {
      // console.log('activeSubGameInfo', this.props.activeSubGameInfo.runState)
      let isChoose: boolean = false;
      this.props.gamesIds.forEach((gameId) => {
        if (gameId && !isChoose) {
          //this.progressBar必须有值，才正确选中了对象，因为gameId是有重复的
          const target = this.gameGateItemNodeList.find(
            (item) => item.key === gameId
          );
          if (target) {
            const progressBarWrap = target.node.getChildByName("loadWrap");
            if (
              this.props.activeSubGameInfo &&
              this.props.activeSubGameInfo.gameId === gameId &&
              progressBarWrap
            ) {
              isChoose = true;
              this.setLoadingState(gameId, 0, false);
              if (
                this.props.activeSubGameInfo.runState === SubGameRunState.RUN
              ) {
                this.downLoadState(gameId, true);
                target.node.getChildByName("download_icon").active = false;
              }
            }
          }
        }
      });
    }
  }

  private async renderGateIcon(gameId: number) {
    // 实例化界面
    if (gameId) {
      if (gameId == 20) {
        //老鼠游戏没上
        return;
      }
      // subGameList.forEach(i => {
      // 	i.status = GameState.WORKING
      // })
      const hallGameGate: HallGameGateType = subGameList.find(
        (i) => i.gameId === gameId
      );
      if (!hallGameGate) {
        return;
      }
      // 根据
      const gameGateItemNode: Node = instantiate(
        this.propertyNode.props_gameItem_template
      );
      this.node.addChild(gameGateItemNode);
      gameGateItemNode.active = true;
      hallGameGate.status === GameState.WORKING &&
        gameGateItemNode.on(Node.EventType.TOUCH_END, () => {
          this.openGateGame(gameId);
        });

      hallGameGate.hotMark &&
        (gameGateItemNode.getChildByName("hot_jiaobiao").active = true);
      gameGateItemNode.getChildByName("gameSkeleton").active = true;
      gameGateItemNode.getChildByName("spr_word").active = true;
      gameGateItemNode.getChildByName("download_icon").active =
        !this.downLoadState(gameId);
      const skeletonComp = gameGateItemNode
        .getChildByName("gameSkeleton")
        .getComponent(sp.Skeleton);
      skeletonComp.skeletonData = (
        await sourceManageSeletor().getFileAsync(
          this.props.gamesIds.length === 1
            ? hallGameGate.fileNameLarge
            : hallGameGate.fileNameSmall,
          sp.SkeletonData
        )
      ).source;
      // skeletonComp._animationIndex = (hallGameGate.status === GameState.COME_SOON) ? 2 : 1
      if (hallGameGate.status === GameState.WORKING) {
        skeletonComp._animationIndex = 1;
      } else if (hallGameGate.status === GameState.COME_SOON) {
        //comeSoon
        gameGateItemNode
          .getChildByName("comeSoon")
          .getChildByName(
            this.props.gamesIds.length === 1 ? "cs_large" : "cs_small"
          ).active = true;
        // skeletonComp._animationIndex = 0
        skeletonComp.animation = "none";
        skeletonComp.color = new Color().fromHEX("#696874");
      } else if (hallGameGate.status === GameState.MAINTENANCE) {
        //维护
      }
      gameGateItemNode
        .getChildByName("spr_word")
        .getComponent(Sprite).spriteFrame = (
        await sourceManageSeletor().getFileAsync(
          hallGameGate.nameSprite[this.props.gamesIds.length - 1],
          SpriteFrame
        )
      ).source;
      this.gameGateItemNodeList.push({ key: gameId, node: gameGateItemNode });
      this.renderGateFace(gameId, gameGateItemNode);

      return gameGateItemNode;
    } else {
      //做个占位
      const gameGateItemNode: Node = instantiate(
        this.propertyNode.props_gameItem_template
      );
      gameGateItemNode.active = true;
      this.node.addChild(gameGateItemNode);
      return gameGateItemNode;
    }
  }

  /**更新vip和下载状态 */
  private async renderGateFace(gameId: number, gameGateItemNode: Node) {
    if (gameId) {
      const hallGameGate: HallGameGateType = subGameList.find(
        (i) => i.gameId === gameId
      );
      if (!hallGameGate) {
        return;
      }
      // 根据
      if (hallGameGate.vipMark > this.props.useVip) {
        gameGateItemNode.getChildByName("vipWrap").active = true;
        const nodeLabel = gameGateItemNode
          .getChildByName("vipWrap")
          .getChildByName("vip_jiaobiao")
          .getChildByName("label_vipLevel");
        const VIPNode = gameGateItemNode
          .getChildByName("vipWrap")
          .getChildByName("vip_jiaobiao")
          .getChildByName("spr_vipIcon");
        nodeLabel &&
          (nodeLabel.getComponent(Label).string = `VIP${hallGameGate.vipMark}`);
        gameGateItemNode.getChildByName("download_icon").active = false;
        bundleHall.load(
          `vip/resource/img/icon_dt_xinxi_vip${hallGameGate.vipMark}/spriteFrame`,
          SpriteFrame,
          (err, sp) => {
            !err && (VIPNode.getComponent(Sprite).spriteFrame = sp);
          }
        );
      } else {
        //用的vip已经大于vip门槛
        gameGateItemNode.getChildByName("vipWrap").active = false;
        gameGateItemNode.getChildByName("download_icon").active =
          !this.downLoadState(gameId);
      }
      hallGameGate.status === GameState.COME_SOON &&
        (gameGateItemNode.getChildByName("download_icon").active = false);
    }
  }
  /**抽离的临时函数 */
  private downLoadZipGame(hallGameGate: HallGameGateType) {
    if (!NATIVE || isH5()) {
      this.beginEnterGame(hallGameGate);
      return;
    }
    if (this.downLoadState(hallGameGate.gameId)) {
      //已下载ZIP
      this.beginEnterGame(hallGameGate);
    } else {
      //未下载ZIP
      const targetGate = this.gameGateItemNodeList.find(
        (i) => i.key === hallGameGate.gameId
      );
      const downLoadProgress = targetGate.node.getChildByName(
        "downLoadProgressBar"
      );
      if (downLoadProgress.active) return true;

      targetGate.node.getChildByName("download_icon").active = false;
      downLoadProgress.active = true;
      new DownloadManagerGame().DownloadMultiple(
        [hallGameGate.bundleName],
        (downloaded: number, total: number) => {
          //下载ZIP进度
          // console.log(downloaded, total)
          // this.setLoadingState(hallGameGate.gameId, downloaded / total)
          downLoadProgress.getComponent(ProgressBar).progress = total
            ? downloaded / total
            : 0;
          downLoadProgress
            .getChildByName("progressLabel")
            .getComponent(Label).string =
            ((total ? downloaded / total : 0) * 100).toFixed(0) + "%";
        },
        () => {
          downLoadProgress.active = false;
          hallGameGate.runState = SubGameRunState.CLOSE;
          this.dispatch(
            addToastAction({
              content: lang.write(
                (k) => k.HallModule.GameDownLoadDone,
                { gameName: hallGameGate.gameName },
                { placeStr: "游戏{gameName}下载完成，请轻击开始" }
              )
            })
          );
        },
        () => {
          this.downLoadState(hallGameGate.gameId, true);
          // this.beginEnterGame(hallGameGate)
          this.renderGateFace(targetGate.key, targetGate.node);
        },
        (e: any) => {
          targetGate.node.getChildByName("download_icon").active = true;
          downLoadProgress.active = false;
          this.dispatch &&
            this.dispatch(
              addToastAction({ content: e, type: ToastType.ERROR })
            );
          hallAudio.playOneShot(SoundPathDefine.ERROR);
          // console.log('download error', JSON.stringify(e))
          this.setLoadingState(hallGameGate.gameId, 0, false, isH5() ? 0.5 : 1);
        }
      );
    }
  }
  public openGateGame(gameId: number) {
    // const isH5 = !getIsTest() && getPackageName() === 'web' && window['installBundle']
    const hallGameGate: HallGameGateType = subGameList.find(
      (i) => i.gameId === gameId
    );
    hallAudio.playOneShot(SoundPathDefine.GAME_CLICK);
    if (hallGameGate.runState === SubGameRunState.CLOSE) {
      hallGameGate.runState = SubGameRunState.INIT;
    } else {
      return;
    }
    // const loadGame = () => {
    // 	console.log('开始加载', gameId)
    // 	BundleSplit.getRemoteBundle(hallGameGate, (curr, total) => {
    // 		// this.setLoadingState(gameId, 0.2 * curr / total)
    // 	}).then((bundle) => {
    // 		this.setLoadingState(gameId, this.loadingStart, true, isH5 ? 0.5 : 1)
    // 		baseBoardView.comp.beginInitSubGame(hallGameGate)
    // 	}).catch(e => {
    // 		window['onLoadingBundleName'] = undefined
    // 		this.dispatch && this.dispatch(addToastAction({ content: e }))
    // 		hallAudio.playOneShot(SoundPathDefine.ERROR)
    // 		this.setLoadingState(gameId, 0, false, isH5 ? 0.5 : 1)
    // 	})
    // }
    if (isH5()) {
      window["installBundle"](hallGameGate.bundleName);
      window["onBundleInstallProgress"] = (
        bundleName: string,
        progress: number
      ) => {
        if (progress === 1) {
          this.downLoadZipGame(hallGameGate);
          this.setLoadingState(gameId, 1, true, 0.5);
          this.loadingStart = 0.5;
        } else {
          this.setLoadingState(gameId, progress, true, 0.5);
        }
      };
    } else {
      this.downLoadZipGame(hallGameGate);
    }
  }
  /**
   * 设置加载的进度状态，也可同时控制进度框的显示隐藏
   * @param gameId 子游戏id
   * @param progress 进度
   * @param isShow 是否显示进度框
   * @param progressRatio 传入进度值的打折量
   * @returns
   */
  public setLoadingState(
    gameId: number,
    progress: number,
    isShow: boolean = true,
    progressRatio: number = 1
  ) {
    // console.log(gameId, progress)
    const gameGateItemNode = this.gameGateItemNodeList.find(
      (item) => item.key === gameId
    ).node;
    const progressBarWrap = gameGateItemNode.getChildByName("loadWrap");
    const progressBar = progressBarWrap
      .getChildByName("DownloadPb")
      .getChildByName("progressBar")
      .getComponent(ProgressBar);
    progressBarWrap.active = isShow;
    progressBar.progress = this.loadingStart + progress * progressRatio;
    !isShow &&
      (subGameList.find((i) => i.gameId === gameId).runState =
        SubGameRunState.CLOSE);
    return progressBarWrap;
  }
  /**
   * 获取是否已经下载
   * @param gameId 子游戏ID
   * @param set 获取到没有下载结果时是否要重设
   * @returns
   */
  private downLoadState(gameId: number, set: boolean = false) {
    !sys.localStorage.getItem("download") &&
      sys.localStorage.setItem("download", "[]");
    const loadList: Array<{ gameId: number; md5: string }> = JSON.parse(
      sys.localStorage.getItem("download")
    );
    const hallGameGate: HallGameGateType = subGameList.find(
      (i) => i.gameId === gameId
    );
    const result = loadList.some(
      (item) => item.gameId === gameId && item.md5 === hallGameGate.md5
    );
    if (!result && set) {
      const target = loadList.find((item) => item.gameId === gameId);
      target
        ? (target.md5 = hallGameGate.md5)
        : loadList.push({ gameId, md5: hallGameGate.md5 });
      sys.localStorage.setItem("download", JSON.stringify(loadList));
    }
    return result;
  }
  protected bindUI(): void {
    this.propertyNode.props_gameItem_template.active = false;
    this.useState(
      (key, value) => {
        if (value.pre === true) {
        }
      },
      ["isdownLoaded"]
    );
  }
  /**开始加载并进入游戏 */
  private beginEnterGame(hallGameGate: HallGameGateType) {
    if (this.props.activeSubGameInfo || window["onLoadingBundleName"]) {
      global.hallDispatch(
        addToastAction({
          content: lang.write(
            (k) => k.PersonCenterModule.PersonCenterSumbit,
            {},
            { placeStr: "操作过于频繁，请稍等" }
          )
        })
      );
      return;
    }
    this.setLoadingState(hallGameGate.gameId, 0);
    window["onLoadingBundleName"] = hallGameGate.gameId;
    BundleSplit.getSubGameAssetsBundle(hallGameGate, (curr, total) => {
      this.setLoadingState(hallGameGate.gameId, (0.2 * curr) / total);
    })
      .then((bundle) => {
        this.setLoadingState(
          hallGameGate.gameId,
          this.loadingStart,
          true,
          isH5() ? 0.5 : 1
        );
        baseBoardView.comp.beginInitSubGame(hallGameGate);
      })
      .catch((e) => {
        window["onLoadingBundleName"] = undefined;
        this.dispatch && this.dispatch(addToastAction({ content: e }));
        hallAudio.playOneShot(SoundPathDefine.ERROR);
        this.setLoadingState(hallGameGate.gameId, 0, false, isH5() ? 0.5 : 1);
      });
  }
  update(deltaTime: number) {}
}
