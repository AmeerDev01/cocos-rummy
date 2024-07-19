import {
  _decorator,
  assetManager,
  AssetManager,
  Button,
  Component,
  director,
  find,
  Game,
  game,
  instantiate,
  Label,
  Node,
  Prefab,
  sp,
  Sprite,
  sys,
  tween,
  UITransform,
  Vec3
} from "cc";
import { BaseComponent } from "../../base/BaseComponent";
import {
  setLoadingAction,
  setSocketConnectStatus,
  setSubGameInfoAction,
  setSubGameRunState,
  ToastPosition,
  ToastType
} from "../store/actions/baseBoard";
import isEqual from "fast-deep-equal";
import { HallGameGateType } from "../../common/allTypes";
import BundleSplit from "../../utils/BundleSplit";
import {
  baseBoardView,
  global,
  hallAudio,
  lang,
  sourceManageSeletor
} from "../index";
import { SoundPathDefine } from "../sourceDefine/soundDefine";
import { getPackageName, sendNativeVibrate } from "../../common/bridge";
import WebSocketStarter from "../../common/WebSocketStarter";
import { LanguageItemType } from "../../language/languagePkg";
import { getEnvKey, getIsTest, isH5 } from "../../config/gameConfig";
import { SubGameRunState } from "../../hallType";
import ModalBox from "../../common/ModalBox";

const { ccclass, property } = _decorator;

export interface IState {}

export interface IProps {
  toastData?: {
    content: string;
    type: ToastType;
    position: ToastPosition;
    forceLandscape: boolean;
  };
  // isLoading?: boolean,
  // loadingFlagId: string,
  // isAllowCloseLoading?: boolean
  loadPayload: {
    isShow: boolean;
    flagId: string;
    isAllowCloseLoading?: boolean;
  };
  /**打开游戏 */
  openGameInfo?: HallGameGateType;
  isConnect: boolean;
  /**剩余重试次数 */
  remainRetryCount: number;
}

export interface IEvent {
  toastDone?: () => void;
  onGameClose?: () => void;
}

@ccclass("Hall_Baseboard")
export class Hall_Baseboard extends BaseComponent<IState, IProps, IEvent> {
  start() {}
  private toastTimer: number = 0;
  private openGameId = 0;
  private connectRetryDone: boolean = true;
  protected propertyNode = {
    /**底板重启 */
    props_restart: new Node(),
    /**底板重启按钮 */
    props_Button_restart: new Node(),
    /**toast模板节点(正常提示) */
    props_toast_template_normal: new Node(),
    /**toast模板节点(错误提示) */
    props_toast_template_error: new Node(),
    /**放置toast的包裹节点 */
    props_toastWrap_bottom: new Node(),
    props_toastWrap_middle: new Node(),
    props_toastWrap_top: new Node(),
    /**放置主内容的面板 */
    props_mainBoard: new Node(),
    /**加载中的节点 */
    props_loading: new Node(),
    /**关闭loading */
    props_btn_close_loading: new Button(),
    /**盛放子游戏的node */
    props_subGameBoard: new Node(),
    /**游戏的头部框 */
    // props_subGameBoardHeader: new Node(),
    /**关闭按钮 */
    // props_closeButton: new Node(),
    /**加载图 */
    props_icon_dating_loading: new Node(),
    /**头部条 */
    // props_subGameHeader: new Node(),
    /**断链提示面板 */
    props_disconnect_panel: new Node(),
    props_main_bg_rec: new Node(),
    /**跑马灯 */
    props_marquee: new Node(),
    /**中奖通告 */
    props_winnerBox: new Node(),
    /**断链提示面板 */
    // props_disconnect_panel: new Node(),
    /**网络无法连接提示 */
    props_spr_remind_content: new Node(),
    props_connect_tip: new Label(),
    /**关闭和重试连接外框 */
    props_user_opa: new Node(),
    /**连接关闭，退出 */
    props_sokt_close: new Button(),
    /**连接重试 */
    props_sokt_retry: new Button(),
    /**内部版本提示 */
    props_insideVersion: new Node(),
    /**拉帘 */
    props_offloading: new Node(),
    /**toast外围 */
    props_toastWrap: new Node()
  };
  private loadingCommandMap: { [key: string]: "enable" } = {};
  private disableconnectCancle: number = 0;
  private lastHideAppTime: number = 0;
  public props: IProps = {
    toastData: {
      content: "",
      type: ToastType.NORMAL,
      position: ToastPosition.MIDDLE,
      forceLandscape: false
    },
    // isLoading: false,
    // loadingFlagId: '_',
    // isAllowCloseLoading: false,
    loadPayload: { isShow: false, isAllowCloseLoading: false, flagId: "_" },
    openGameInfo: null,
    isConnect: true,
    remainRetryCount: 0
  };

  public events: IEvent = {
    toastDone: () => {},
    onGameClose: () => {}
  };

  protected initState() {
    return {};
  }

  protected bindEvent(): void {
    // this.propertyNode.props_Button_restart.on(Node.EventType.TOUCH_END, () => {
    // 	sys.isNative && game.restart()
    // })

    // this.propertyNode.props_subGameHeader.getChildByName("Up_Left").getChildByName("Back_Bg").on(Node.EventType.TOUCH_END, () => {
    // 	// this.closeSubGame()
    // 	(find("Canvas/baseBoard").getComponent('Hall_Baseboard') as any).closeSubGame()
    // })
    this.propertyNode.props_btn_close_loading.node.on(
      Node.EventType.TOUCH_END,
      () => {
        this.dispatch(setLoadingAction({ isShow: false, flagId: "" }));
      }
    );
    this.propertyNode.props_sokt_close.node.on(Node.EventType.TOUCH_END, () => {
      // game.restart()
      baseBoardView.mainPanelViewModel &&
        baseBoardView.mainPanelViewModel.logOut(false, "");
      this.dispatch(setSocketConnectStatus({ isConnect: true }));
    });
    this.propertyNode.props_sokt_retry.node.on(Node.EventType.TOUCH_END, () => {
      WebSocketStarter.Instance().remainRetryCount =
        WebSocketStarter.Instance().maxReconnectTime;
      WebSocketStarter.Instance().reConnect(true);
      // if (!this.connectRetryDone) {
      // 	console.log('wait please')
      // 	return
      // }
      // this.dispatch(setSocketConnectStatus({ isConnect: false, remainRetryCount: 1 }))

      // sktInstance.reConnectTimes = 0
      // this.connectRetryDone = false
      // sktInstance.reconnect().then(() => {
      // 	this.connectRetryDone = true
      // }).catch(() => {
      // 	this.connectRetryDone = true
      // })
    });
  }

  protected useProps(
    key: keyof IProps | "_setDone",
    value: { pre: any; cur: any }
  ) {
    if (key === "toastData") {
      if (!isEqual(value.pre, value.cur) && value.cur.content) {
        this.addToast(value.cur);
      }
    }
    if (key === "loadPayload") {
      const keys = Object.keys(this.loadingCommandMap);
      if (this.props.loadPayload.isShow) {
        //打开加载
        if (this.props.loadPayload.flagId) {
          const isExistKey = Object.keys(this.loadingCommandMap).some(
            (k) => k === this.props.loadPayload.flagId
          );
          this.loadingCommandMap["lf_" + this.props.loadPayload.flagId] =
            "enable";
          isExistKey &&
            getIsTest() &&
            console.warn(
              `load flig '${this.props.loadPayload.flagId}' has exist`
            );
        } else {
          console.warn(`no load flig`);
        }
        this.propertyNode.props_loading.active = true;
      } else {
        //关闭加载
        if (!this.props.loadPayload.flagId) {
          // 复原
          this.loadingCommandMap = {};
          this.propertyNode.props_loading.active = false;
        } else {
          if (this.loadingCommandMap["lf_" + this.props.loadPayload.flagId]) {
            delete this.loadingCommandMap[
              "lf_" + this.props.loadPayload.flagId
            ];
          } else {
            // DEV && console.warn(`load flig '${this.props.loadPayload.flagId}' not exist`)
          }
          if (
            !Object.keys(this.loadingCommandMap).some((k) => k.includes("lf_"))
          ) {
            //所有的flag都不存在了才关闭
            this.propertyNode.props_loading.active = false;
          }
        }
      }

      // this.propertyNode.props_loading.active = this.props.loadPayload.isShow
      this.propertyNode.props_btn_close_loading.node.active =
        this.props.loadPayload.isAllowCloseLoading;
    }
    // if (key === "isLoading") {
    // 	this.propertyNode.props_loading.active = value.cur
    // }
    // if (key === "isAllowCloseLoading") {
    // 	this.propertyNode.props_btn_close_loading.node.active = value.cur
    // }
    if (key === "openGameInfo") {
      if (value.cur) {
        //打开游戏
        window["onLoadingBundleName"] = undefined;
        hallAudio.pause();
        hallAudio.disable = true;
        this.dispatch(setLoadingAction({ isShow: false, flagId: "" }));
        sendNativeVibrate(200);
        baseBoardView.mainPanelViewModel.viewNode.active = false;
        // this.propertyNode.props_mainBoard.active = false
        if (!this.props.openGameInfo.isDepend) {
          this.closeGameHandler = this.closeGameHandlerTempList.find(
            (item) => item.gameId === this.props.openGameInfo.gameId
          ).closeFn;
        }
      }
    }
    if (key === "isConnect") {
      this.propertyNode.props_disconnect_panel.active = !this.props.isConnect;
      if (!this.props.isConnect) {
        this.propertyNode.props_sokt_close.node.active = false;
        window.clearTimeout(this.disableconnectCancle);
        this.disableconnectCancle = window.setTimeout(() => {
          this.propertyNode.props_sokt_close.node.active = true;
        }, 3000);
      }
      if (
        !this.props.isConnect &&
        this.props.openGameInfo &&
        this.props.openGameInfo.isVertical
      ) {
        this.propertyNode.props_main_bg_rec.angle = 90;
      } else {
        this.propertyNode.props_main_bg_rec.angle = 0;
      }
    }
    if (key === "remainRetryCount") {
      console.log("remainRetryCount", this.props.remainRetryCount);
      this.propertyNode.props_connect_tip.node.active =
        this.props.remainRetryCount > 0;
      // this.propertyNode.props_user_opa.active = this.props.remainRetryCount <= 0
      this.propertyNode.props_sokt_retry.node.active =
        this.props.remainRetryCount <= 0;
      this.propertyNode.props_spr_remind_content.active =
        this.props.remainRetryCount <= 0;
      const times =
        lang.languageItemType === LanguageItemType.EN
          ? ["", "1st", "2nd", "3rd", "4th", "5th"]
          : [0, 1, 2, 3, 4, 5];
      this.propertyNode.props_connect_tip.string = lang.write(
        (k) => k.WebSocketModule.socketRetryTimes,
        {
          times:
            times[
              WebSocketStarter.Instance().maxReconnectTime -
                this.props.remainRetryCount
            ]
        },
        { placeStr: "连接断开，正在进行第{times}次重连..." }
      );
    }
  }

  protected bindUI(): void {
    director.addPersistRootNode(this.node);
    const envKey = getEnvKey();
    if (envKey === "development") {
      this.propertyNode.props_insideVersion.active = true;
      this.propertyNode.props_insideVersion
        .getChildByName("verLabel")
        .getComponent(Label).string = "内部开发版";
    } else if (envKey === "test") {
      this.propertyNode.props_insideVersion.active = true;
      this.propertyNode.props_insideVersion
        .getChildByName("verLabel")
        .getComponent(Label).string = "内部测试版";
    } else if (envKey === "advance") {
      this.propertyNode.props_insideVersion.active = true;
      this.propertyNode.props_insideVersion
        .getChildByName("verLabel")
        .getComponent(Label).string = "内部预发版";
    } else {
      this.propertyNode.props_insideVersion.active = false;
    }
    game.on(Game.EVENT_HIDE, () => {
      //游戏切入后台
      this.lastHideAppTime = Date.now();
    });
    game.on(Game.EVENT_SHOW, () => {
      //游戏进入
      if (
        this.lastHideAppTime !== 0 &&
        Date.now() - this.lastHideAppTime > 24 * 60 * 60 * 1000
      ) {
        //Hide超过一天就要重启
        game.restart();
      }
    });
    // new MarqueeViewModel().mountView(sourceManageSeletor("common").getFile(PrefabPathDefine.MARQUEE).source).appendTo(this.propertyNode.props_marquee).connect()
  }

  private closeGameHandler: Function;
  private closeGameHandlerTempList: Array<{
    gameId: number;
    closeFn: Function;
  }> = [];

  /**开始初始化子游戏 */
  public beginInitSubGame(gameInfo: HallGameGateType) {
    // if (this.openGameId) return
    window.HALL_GLOBAL.currGameConfig = gameInfo;
    // 打开游戏底板
    this.propertyNode.props_subGameBoard.active = true;
    this.openGameId = gameInfo.gameId;
    if (gameInfo.isDepend) {
      this.showGameLoading(gameInfo);
    } else {
      const closeFn = gameInfo.startUpHandler(
        this.propertyNode.props_subGameBoard
      );
      if (
        this.closeGameHandlerTempList.some((i) => i.gameId === gameInfo.gameId)
      ) {
        this.closeGameHandlerTempList.find(
          (i) => i.gameId === gameInfo.gameId
        ).closeFn = closeFn;
      } else {
        this.closeGameHandlerTempList.push({
          gameId: gameInfo.gameId,
          closeFn: closeFn
        });
      }
    }

    // effect1(this.propertyNode.props_subGameBoard).enter().then(() => { })
    // director.loadScene("fruit777")
  }
  /**加载游戏加载界面 */
  showGameLoading(gameInfo: HallGameGateType) {
    console.error(
      "加载游戏加载界面",
      gameInfo.bundleName,
      assetManager.bundles
    );
    let bundle: AssetManager.Bundle = assetManager.getBundle(
      gameInfo.bundleName
    );
    console.error(bundle);
    let url = `prefabs/prefab_${gameInfo.bundleName}_loading`;
    bundle.load(
      url,
      Prefab,
      (progress, total) => {
        global.hallDispatch(setSubGameRunState(SubGameRunState.LOADING));
        global.setSubGameGate(gameInfo.gameId, progress / total);
      },
      (err, pre: Prefab) => {
        if (pre) {
          global.hallDispatch(setSubGameRunState(SubGameRunState.READY));
          this.dispatch(setSubGameInfoAction(gameInfo));
          baseBoardView.mainPanelViewModel.viewNode.active = false;
          // this.propertyNode.props_mainBoard.children[0].active = false;
          let nd = instantiate(pre);
          nd.parent = this.propertyNode.props_subGameBoard;
          console.error("加载预制体成功 ", url);
        } else {
          console.error("加载预制体失败 ", url);
        }
      }
    );
  }
  /**设置大厅旋转 */
  // setShowAngle(inGame: boolean) {
  // 	return
  // 	if (inGame) {

  // 	} else {
  // 		window.HALL_GLOBAL.currGameConfig = null;
  // 	}
  // 	let nd = baseBoardView.mainPanelViewModel.viewNode.parent;
  // 	let nd1 = nd.parent.getChildByName("props_disconnect_panel");
  // 	if (window.HALL_GLOBAL.currGameConfig && window.HALL_GLOBAL.currGameConfig.isVertical) {
  // 		nd.angle = 90;
  // 		nd1.angle = 90;
  // 	} else {
  // 		nd.angle = 0;
  // 		nd1.angle = 0;
  // 	}
  // }
  public closeSubGame() {
    if (!this.props.openGameInfo) return;
    this.openGameId = 0;
    const gameId = this.props.openGameInfo.gameId;
    // effect1(this.propertyNode.props_subGameBoard).out(false).then(() => { })
    hallAudio.disable = false;
    hallAudio.playOneShot(SoundPathDefine.BTU_CLICK);
    // if (!isPre) {
    if (this.closeGameHandler) {
      this.closeGameHandler();
      // 	} else {
      // 		console.error("未返回结束游戏的方案")
    }
    // }
    baseBoardView.mainPanelViewModel.viewNode.active = true;
    this.dispatch(setLoadingAction({ isShow: true, flagId: "closeGame" }));
    // this.propertyNode.props_offloading.active = true
    // this.propertyNode.props_offloading.getComponent(sp.Skeleton).animation = 'animation'
    // baseBoardView.mainPanelViewModel.openReliefPanel()
    this.scheduleOnce(() => {
      this.propertyNode.props_subGameBoard.destroyAllChildren();
      BundleSplit.releaseBundle(gameId);
    }, 0.2);
    this.scheduleOnce(() => {
      this.propertyNode.props_subGameBoard.destroyAllChildren();
      this.events.onGameClose();
      // this.propertyNode.props_subGameBoard.active = false
      // hallAudio.resume()
      hallAudio.resume(); //.play(SoundPathDefine.MAIN_BGM, true)
      this.closeGameHandler = undefined;
      this.dispatch(setSubGameInfoAction(null));
      this.dispatch(setLoadingAction({ isShow: false, flagId: "closeGame" }));
      // this.propertyNode.props_offloading.getComponent(sp.Skeleton).animation = ''
      // this.propertyNode.props_offloading.active = false
    }, 1.2);
    // this.propertyNode.props_subGameHeader.active = false
  }

  /**
   * 添加toast提示
   * @param toastObj (forceLandscape:强制横向)
   */
  private addToast(toastObj: {
    content: string;
    type: ToastType;
    position: ToastPosition;
    forceLandscape: boolean;
  }) {
    let toastWrap: Node;
    switch (toastObj.position) {
      case ToastPosition.BOTTOM:
        toastWrap = this.propertyNode.props_toastWrap_bottom;
        break;
      case ToastPosition.MIDDLE:
        toastWrap = this.propertyNode.props_toastWrap_middle;
        break;
      case ToastPosition.TOP:
        toastWrap = this.propertyNode.props_toastWrap_top;
        break;
    }

    if (
      toastObj.type !== ToastType.ERROR &&
      toastObj.position === ToastPosition.BOTTOM
    ) {
      toastWrap = this.propertyNode.props_toastWrap_middle;
    }

    (toastWrap as Node).setSiblingIndex(1000);
    const props_toast: Node = instantiate(
      toastObj.type === ToastType.ERROR
        ? this.propertyNode.props_toast_template_error
        : this.propertyNode.props_toast_template_normal
    );
    props_toast.setPosition(new Vec3(0, 0, 0));
    props_toast.getChildByName("toastLabel").getComponent(Label).string =
      toastObj.content;
    props_toast.active = true;
    toastWrap.addChild(props_toast);
    props_toast.setScale(new Vec3(1, 0, 1));
    if (
      this.props.openGameInfo &&
      this.props.openGameInfo.isVertical &&
      !toastObj.forceLandscape
    ) {
      // toastWrap.setRotationFromEuler(0, 90, 0)
      this.propertyNode.props_toastWrap.angle = 90;
    } else {
      // toastWrap.setRotationFromEuler(0, 0, 0)
      this.propertyNode.props_toastWrap.angle = 0;
    }
    tween(props_toast)
      .to(0.1, { scale: new Vec3(1, 1, 1) })
      .delay(3)
      .to(0.1, { scale: new Vec3(1, 0, 1) })
      .call(() => {
        props_toast.destroy();
        this.events.toastDone();
      })
      .start();

    // props_toast.setScale(new Vec3(1, 1, 1))
    // const { x, y, z } = props_toast.position
    // tween(props_toast).to(0.1, { position: new Vec3(x, y, z) }).delay(3).to(0.1, { position: new Vec3(x, y + 100, z) }).call(() => {
    // 	props_toast.destroy()
    // 	this.events.toastDone()
    // }).start()

    // tween(props_toast).to(0.2, { position: new Vec3(x, y) }, { easing: "backOut" }).delay(2).to(0.1, { position: new Vec3(x, y + 200) }).call(() => {
    // 	props_toast.destroy()
    // 	this.events.toastDone()
    // }).start()
  }
  public getSubGameWrapNode() {
    return this.propertyNode.props_subGameBoard;
  }
  public getMainBoardNode() {
    return this.propertyNode.props_mainBoard;
  }
  update(deltaTime: number) {}
}
