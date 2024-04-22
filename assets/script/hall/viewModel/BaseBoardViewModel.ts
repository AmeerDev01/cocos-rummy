import { Node, Prefab, native, sys } from "cc"
import ViewModel from "../../base/ViewModel"
import { StateType } from "../store/reducer"
import { Hall_Baseboard, IProps, IEvent } from "../components/Hall_Baseboard"
import { fetcher, hallAudio, sourceManageSeletor } from "../index"
import { PrefabPathDefine as HallPrefabPathDefine, PrefabPathDefine } from '../../hall/sourceDefine/prefabDefine';
import { ToastPosition, ToastType, addToastAction, setLoadingAction, setSubGameInfoAction } from "../store/actions/baseBoard"
import socketConnect, { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect"
import WebSocketStarter from "../../common/WebSocketStarter"
import { EffectType } from "../../utils/NodeIOEffect"
import MainPanelViewModel from "./MainPanelViewModel"
import { HallGameGateType, config, deviceInfo, subGameList } from "../config"
import { ApiUrl } from "../apiUrl"
import { resetMemberInfo } from "../store/actions/memberInfo"
import { resetWithDrawInfo } from "../store/actions/withdraw"
import { lang } from "../index"
import { NATIVE } from "cc/env"
import { BridgeCode, adjustWebEventConfig, getDeviceUniqueId } from "../../common/bridge"
import LoginPageV2ViewModel from "./login_v2/LoginPageV2ViewModel"
import BaseViewModel from "./BaseViewModel"
import { Hall_GivePanel, IState as GPIState, IProps as GPIProps, IEvent as GPIEvent } from "../components/Hall_GivePanel"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import ModalBox from "../../common/ModalBox"
import { SubGameRunState } from "../../hallType"

class BaseBoardViewModel extends ViewModel<Hall_Baseboard, IProps, IEvent> {
  constructor() {
    super('Hall_Baseboard')
  }
  public loginPageV2ViewModel: LoginPageV2ViewModel
  public mainPanelViewModel: MainPanelViewModel
  // private personCanterMainPanel:
  protected begin() {
    this.initInvite();
    this.listenerBridge();
    getDeviceUniqueId();

    this.setProps({
      toastData: { content: "", type: ToastType.NORMAL, forceLandscape: false, position: ToastPosition.MIDDLE },
      loadPayload: {
        isShow: false,
        flagId: '_',
        isAllowCloseLoading: false
      }
      // isLoading: false,
      // loadingFlagId: '_',
      // isAllowCloseLoading: false
    })
    this.setEvent({
      onGameClose: () => {
        // this.setProps({ openGameInfo: null })
        // this.dispatch(setSubGameInfoAction(null))
        //看有没有礼包需要弹出
        hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GIFT_LIST, {})
      },
      toastDone: () => {
        //这里重置下toast的内容，不然下次其他数据触发更新，会将之前的数据带过去，然后显示旧信息，因为内容为空的时候信息不会显示
        this.dispatch(addToastAction({ content: "" }))
      }
    })

    // hallWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, "auth", () => {
    //   this.dispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.BaseBoardBeat, {}, { placeStr: "认证成功~" }) }))
    // })
    hallWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.GIVE_GLOD, "give", (data, error) => {
      if (error) return
      sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_WELCOME, Prefab).then(file => {
        const givePanel = new BaseViewModel<Hall_GivePanel, GPIState, GPIProps, GPIEvent>('Hall_GivePanel').mountView(file.source)
          .appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            onClosePanel: () => {
              givePanel.unMount(EffectType.EFFECT2)
            }
          }).setProps({ amount: data.coins })
      })
    })

    const baseBoard = this.comp.getPropertyNode().props_mainBoard as Node
    this.initLoginPanel(baseBoard, true)
  }


  private initMainPanel(baseBoard) {
    this.mainPanelViewModel = new MainPanelViewModel().mountView(sourceManageSeletor().getFile(HallPrefabPathDefine.MAIN_PANEL).source).appendTo(baseBoard)
      .setEvent({
        onTouchIntoHandler: (gameInfo: HallGameGateType) => {
          // this.dispatch(setSubGameInfoAction(gameInfo))
          // this.mainPanelViewModel.viewNode.active = false
        }
      }).connect()
    this.mainPanelViewModel.logOut = (isForce: boolean = false) => {
      const exit = () => {
        if (!sys.localStorage.getItem("token")) return
        this.comp.props.openGameInfo && (this.comp.closeSubGame())
        sys.localStorage.removeItem("token")
        // this.comp.getMainBoardNode().destroyAllChildren()
        this.initLoginPanel(baseBoard, false)
        // hallWebSocketDriver.remove()
        // removeInstance()
        WebSocketStarter.Instance().exit()
        this.dispatch(resetMemberInfo(undefined))
        this.dispatch(resetWithDrawInfo(undefined))
        this.comp.scheduleOnce(() => {
          // 踏马的，这里有点诡异
          this.mainPanelViewModel.unMount().then(() => {
            this.mainPanelViewModel = null
          })
        }, 0.3)
      }
      if (isForce) {
        // this.dispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.BaseBoardLogin, {}, { placeStr: "抱歉，您的登录信息变更，已自动退出~" }) }))
        exit()
        this.comp.scheduleOnce(() => {
          ModalBox.Instance().show({ content: lang.write(k => k.BaseBoardModule.BaseBoardLogin, {}, { placeStr: "抱歉，您的登录信息变更，已自动退出~" }), type: "Prompt" }, () => {
            return true
          })
        }, 0.5)
      } else {
        fetcher.send(ApiUrl.LOGIN_OUT).then((data) => exit()).catch((e) => {
          !isForce && this.dispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.BaseBoardExit, {}, { placeStr: "退出失败~" }), forceLandscape: false }))
        })
      }
    }
  }
  /**
   * 初始化加载框
   * @param baseBoard 加载到的底板
   * @param isAutoLogin 是否自动登录
   */
  private async initLoginPanel(baseBoard: Node, isAutoLogin: boolean = true) {
    // this.loginPageViewModel = new LoginPageViewModel()
    this.loginPageV2ViewModel = new LoginPageV2ViewModel()
      .mountView((await sourceManageSeletor().getFileAsync(HallPrefabPathDefine._LOGIN_PAGE_V2, Prefab)).source).appendTo(baseBoard).setEvent({
        onLoginSuccess: () => {
          this.dispatch(setLoadingAction({ isShow: true, flagId: 'initLogin' }))
          //初始化通信
          socketConnect().then(() => {
            // if (config.appLocalVersion < config.appOnlineVersion) {
            //   //弹出更新提示
            //   this.dispatch(addToastAction({ content: "请更新App至最新版" }))
            // } else {
            //   this.loginPageViewModel.unMount(EffectType.EFFECT1)
            //   sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, sys.localStorage.getItem("token"))
            //   // 打开大厅页面
            //   this.initMainPanel(baseBoard)
            // }
            this.dispatch(setLoadingAction({ isShow: false, flagId: 'initLogin' }))
            this.loginPageV2ViewModel.unMount(EffectType.EFFECT1)
            // sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, {
            //   token: sys.localStorage.getItem("token"),
            //   gameId: 0
            // })
            // 打开大厅页面
            this.initMainPanel(baseBoard)
          }).catch(e => {
            // hallWebSocketDriver.remove()
            this.dispatch(setLoadingAction({ isShow: false, flagId: 'initLogin' }))
          })
        }
      }).setProps({
        isAutoLogin
      }).connect()
  }
  /**是否允许打开子游戏,一般用于子游戏的第一个首预制体已经加载完毕 */
  public isAllowOpenSubGame(gameId: number) {
    if (this.comp.props.openGameInfo) {
      this.mainPanelViewModel.comp.setSubGameGate(gameId, 0, false)
      return false
    } else {
      //先取得
      //const gateViewModel = this.mainPanelViewModel.comp.gateViewModelList.find(item => item.comp.props.gamesId.indexOf(gameId) !== -1)
      const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === gameId)
      if (hallGameGate.runState === SubGameRunState.CANCEL) {
        return false
      }
      this.dispatch(setSubGameInfoAction(subGameList.find(i => i.gameId === gameId)))
      return true
    }
  }

  // public connect(initProps: Partial<IProps> = {}) {
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, (state: StateType) => {
      // console.log(state.baseBoard.toastData)
      if (state.baseBoard.subGameInfo === null) {
        this.mainPanelViewModel && (this.mainPanelViewModel.viewNode.active = true)
      }
      return {
        toastData: state.baseBoard.toastData,
        loadPayload: state.baseBoard.loadPayload,
        // isLoading: state.baseBoard.loadPayload.isShow,
        // isAllowCloseLoading: state.baseBoard.loadPayload.isAllowCloseLoading,
        openGameInfo: state.baseBoard.subGameInfo,
        isConnect: state.baseBoard.isConnect,
        remainRetryCount: state.baseBoard.remainRetryCount
      }
    }, false)
  }

  /**监听原生发来的数据 */
  private listenerBridge() {
    if (NATIVE) {
      native.bridge.onNative = (arg0: string, arg1: string) => {
        // const bridgeData = JSON.parse(arg1) as BridgeData;
        if (BridgeCode.COPY_CLIPBOARD === arg0) {
          // this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
        } else if (BridgeCode.UNIQUE_ID === arg0) {
          // deviceInfo.uniqueId = arg1;
          deviceInfo.setUniqueId(arg1);
        } else if (BridgeCode.APP_VERSION === arg0) {
          console.log(arg1)
        }
      }
    }
  }

  private initInvite() {
    if (!NATIVE) {
      let reqUrl = window.location.href;
      reqUrl = reqUrl.substring(reqUrl.indexOf("?") + 1)
      const params = reqUrl.split("&");

      let referer = '';
      let ap = '';
      let invite = '';
      const packageType = '0';
      const getParamValue = (param: string, key: string) => {
        return param.substring(param.indexOf("=") + 1);
      }

      if (params) {
        params.forEach(v => {
          if (v.indexOf('referer') !== -1) {
            referer = getParamValue(v, 'referer');
          } else if (v.indexOf('ap') !== -1) {
            ap = getParamValue(v, 'ap');
          } else if (v.indexOf('invite') !== -1) {
            invite = getParamValue(v, 'invite');
          }
        })
      }
      if (ap) {
        const url = config.httpBaseUrl + ApiUrl.INVITE + '?referer=' + referer + '&ap=' + ap + '&packageType=' + packageType;
        fetch(url).then((response) => {
        }).catch((e) => {
        })
      } else {
        console.log("ap not found");
      }
      if (invite) {
        const url = config.httpBaseUrl + ApiUrl.INVITE + '?referer=' + referer + '&invite=' + invite + '&packageType=' + packageType;
        fetch(url).then((response) => {
        }).catch((e) => {
        })

        const channelPackageUrl = config.httpBaseUrl + ApiUrl.CHANNEL_PACKAGE + '?number=' + invite;
        fetch(channelPackageUrl).then((response) => {
          response.json().then((data) => {
            if (data.content) {
              if (data.content.register) {
                adjustWebEventConfig.register = data.content.register
              }
              if (data.content.login) {
                adjustWebEventConfig.login = data.content.login
              }
              if (data.content.firstPurchase) {
                adjustWebEventConfig.firstPurchase = data.content.firstPurchase
              }
              if (data.content.purchase) {
                adjustWebEventConfig.purchase = data.content.purchase
              }
              if (data.content.firstPullPurchase) {
                adjustWebEventConfig.firstPullPurchase = data.content.firstPullPurchase
              }
              if (data.content.pullPurchase) {
                adjustWebEventConfig.pullPurchase = data.content.pullPurchase
              }
            }
          })
        }).catch((e) => {
        })
      }
    }
  }

  public getMainBoardPanel() {
    return this.comp.getPropertyNode().props_mainBoard as Node
  }
}

export default BaseBoardViewModel