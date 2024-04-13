import { Node, sys } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_LoginPage, IProps, IEvent } from "../components/Hall_LoginPage"
import { StateType } from "../store/reducer"
import LoginDialogViewModel from "./LoginViewDialogModel"
import { fetcher, sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../utils/NodeIOEffect"
import { addToastAction, ToastType } from "../store/actions/baseBoard"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { LoginType } from "../components/Hall_LoginDialog"
import { lang } from "../index"
import { getPackageName, sendNativeVibrate } from "../../common/bridge"
import BaseViewModel from "./BaseViewModel";
import { Hall_Service, IState as SIState, IProps as SIProps, IEvent as SIEvent } from '../components/Hall_Service';
import { config, deviceInfo } from "../config"
import ActivityViewModel from "./ActivityViewModel"

class LoginPageViewModel extends ViewModel<Hall_LoginPage, IProps, IEvent> {
  constructor() {
    super('Hall_LoginPage')
  }
  private loginDialogViewModel: LoginDialogViewModel
  protected async begin() {
    const isFastLogin = await this.checkFastLogin()
    if (!isFastLogin) {
      this.dispatch(addToastAction({ content: lang.write(k => k.loginModule.LoginRemind, {}, { placeStr: "请登录" }) }))
      this.setEvent({
        onOpenLoginDialog: () => {
          if (this.loginDialogViewModel) return
          this.loginDialogViewModel = new LoginDialogViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.LOGIN_DIALOG).source).appendTo(this.viewNode, {
            effectType: EffectType.EFFECT1,
            isModal: true
          }).setEvent({
            closeHandler: () => {
              this.loginDialogViewModel.unMount(EffectType.EFFECT2).then(() => {
                this.loginDialogViewModel = null
              })
            },
            loginDoneHandler: () => {
              this.comp.events.onLoginSuccess()
            },
            errorHandler: (errorInfo) => {
              this.dispatch(addToastAction({ content: errorInfo }))
            }
          })
        },
        openService: () => {
          const serviceVm = new BaseViewModel<Hall_Service, SIState, SIProps, SIEvent>('Hall_Service').mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_SERVICE_WEBVIEW).source)
            .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
              onClosePanel: () => {
                serviceVm.unMount(EffectType.EFFECT2)
              }
            }).setProps({
              openUrl: `${config.customerUrl}`
            })
        },
        openHomePage: () => {
          sys.openURL(config.shareUrl)
        },
        openActivity: () => {
          const activityViewModel = new ActivityViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_ACTIVITY).source)
            .appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
              onClosePanel: () => {
                activityViewModel.unMount(EffectType.EFFECT2)
              }
            })
        }
      })
    } else {
      // this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.LoginMark, {}, { placeStr: "已自动登录" }) }))
      //登录操作完成之后
      sendNativeVibrate(200)
      // this.dispatch(addToastAction({ content: "已自动登录" }))
      this.comp.events.onLoginSuccess()
    }
  }

  /**是否可以快读登录 */
  private checkFastLogin(): Promise<boolean> {
    return new Promise((reslove, reject) => {
      if (sys.localStorage.getItem("token")) {
        fetcher.send(ApiUrl.LOGIN_FAST, {
          pkgCode: getPackageName(),
          macCode: deviceInfo.getUniqueId(),
          token: sys.localStorage.getItem("token")
        }, "post", {
          "Content-Type": "application/x-www-form-urlencoded"
        }).then((data) => {
          const values = data.split(",")
          let token = values.length === 1 ? data : values[0];
          sys.localStorage.setItem('token', token)
          reslove(token ? true : false)
        }).catch((e) => {
          this.dispatch(addToastAction({ content: e }))
          reslove(false)
        })
      } else {
        reslove(false)
      }
    })
  }
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, (state: StateType) => {
      return {}
    })
    return this
  }
}

export default LoginPageViewModel
