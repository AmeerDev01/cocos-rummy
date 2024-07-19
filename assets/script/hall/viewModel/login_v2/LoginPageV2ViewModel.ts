import { Node, Prefab, sys } from "cc";
import ViewModel from "../../../base/ViewModel";
import {
  Hall_LoginPageV2,
  IProps,
  IEvent
} from "../../components/login_v2/Hall_LoginPageV2";
import { StateType } from "../../store/reducer";
import LoginDialogV2ViewModel from "./LoginDialogV2ViewModel";
import { fetcher, lang, sourceManageSeletor } from "../../index";
import { PrefabPathDefine } from "../../sourceDefine/prefabDefine";
import { EffectType } from "../../../utils/NodeIOEffect";
import { addToastAction, ToastType } from "../../store/actions/baseBoard";
import { ApiUrl } from "../../apiUrl";
import {
  getPackageName,
  registerAppsflyerEvents,
  sendNativeVibrate
} from "../../../common/bridge";
import BaseViewModel from "../BaseViewModel";
import {
  Hall_Service,
  IState as SIState,
  IProps as SIProps,
  IEvent as SIEvent
} from "../../components/Hall_Service";
import { config, deviceInfo } from "../../../config/config";
import ActivityViewModel from "../ActivityViewModel";

class LoginPageV2ViewModel extends ViewModel<Hall_LoginPageV2, IProps, IEvent> {
  constructor() {
    super("Hall_LoginPageV2");
  }
  private loginDialogV2ViewModel: LoginDialogV2ViewModel;
  protected async begin() {
    this.setEvent({
      onOpenLoginDialog: async () => {
        if (this.loginDialogV2ViewModel) return;
        this.loginDialogV2ViewModel = new LoginDialogV2ViewModel()
          .mountView(
            (
              await sourceManageSeletor().getFileAsync(
                PrefabPathDefine._LOGIN_DIALOG_LOGIN_V2,
                Prefab
              )
            ).source
          )
          .appendTo(this.viewNode, {
            effectType: EffectType.EFFECT1,
            isModal: true
          })
          .setEvent({
            closeHandler: () => {
              this.loginDialogV2ViewModel
                .unMount(EffectType.EFFECT2)
                .then(() => {
                  this.loginDialogV2ViewModel = null;
                });
            },
            loginDoneHandler: () => {
              this.comp.events.onLoginSuccess();
            },
            errorHandler: (errorInfo) => {
              this.dispatch(addToastAction({ content: errorInfo }));
            }
          });
      },
      openService: async () => {
        const serviceVm = new BaseViewModel<
          Hall_Service,
          SIState,
          SIProps,
          SIEvent
        >("Hall_Service")
          .mountView(
            (
              await sourceManageSeletor().getFileAsync(
                PrefabPathDefine._HELL_SERVICE_WEBVIEW,
                Prefab
              )
            ).source
          )
          .appendTo(this.viewNode, {
            effectType: EffectType.EFFECT1,
            isModal: true
          })
          .setEvent({
            onClosePanel: () => {
              serviceVm.unMount(EffectType.EFFECT2);
            }
          })
          .setProps({
            openUrl: `${config.customerUrl}`
          });
      },
      openHomePage: () => {
        sys.openURL(config.shareUrl);
      },
      openActivity: async () => {
        const activityViewModel = new ActivityViewModel()
          .mountView(
            (
              await sourceManageSeletor().getFileAsync(
                PrefabPathDefine._HELL_ACTIVITY,
                Prefab
              )
            ).source
          )
          .appendTo(this.viewNode, {
            effectType: EffectType.EFFECT1,
            isModal: true
          })
          .setEvent({
            onClosePanel: () => {
              activityViewModel.unMount(EffectType.EFFECT2);
            }
          });
      },
      retryHndler: () => {
        this.loginTodo(true);
      }
    });
    this.loginTodo();
  }

  private async loginTodo(isforce: boolean = false) {
    if (this.comp.props.isAutoLogin || isforce) {
      try {
        const isFastLogin = await this.checkFastLogin();
        if (isFastLogin === "faild") {
          //没有token
          this.dispatch(
            addToastAction({
              content: lang.write(
                (k) => k.HallModule.GuestAutoLogin,
                {},
                { placeStr: "游客登录中..." }
              )
            })
          );
          this.guestLogin();
        } else if (!isFastLogin) {
          //有token但是登录失败
          sys.localStorage.removeItem("token");
          this.dispatch(
            addToastAction({
              content: lang.write(
                (k) => k.HallModule.AutoLoginFaild,
                {},
                { placeStr: "请手动登录" }
              )
            })
          );
        } else {
          // this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.LoginMark, {}, { placeStr: "已自动登录" }) }))
          //登录操作完成之后
          sendNativeVibrate(200);
          // this.dispatch(addToastAction({ content: "已自动登录" }))
          this.comp.events.onLoginSuccess();
        }
      } catch (e) {
        this.dispatch(
          addToastAction({
            content:
              lang.write(
                (k) => k.HallModule.AutoLoginFaild,
                {},
                { placeStr: "请手动登录" }
              ) +
              ":" +
              e
          })
        );
      }
    }
  }

  /**游客登录 */
  private guestLogin() {
    fetcher
      .send(ApiUrl.LOGIN_PWD, {
        type: 5,
        macCode: deviceInfo.getUniqueId(),
        pkgCode: getPackageName()
      })
      .then((data) => {
        const values = data.split(",");
        let token = values.length === 1 ? data : values[0];
        const isReg = values.length === 1 ? false : Boolean(values[1]);
        //登录成功
        sys.localStorage.setItem("token", token);
        this.comp.events.onLoginSuccess();

        if (isReg) {
          registerAppsflyerEvents("", "");
        }
      })
      .catch((e) => {
        this.comp.showRetryButton();
        console.log(e);
      });
  }

  /**是否可以快读登录 */
  private checkFastLogin(): Promise<boolean | "faild"> {
    return new Promise((reslove, reject) => {
      try {
        let token = sys.localStorage.getItem("token");
        if (token && token.trim()) {
          fetcher
            .send(
              ApiUrl.LOGIN_FAST,
              {
                pkgCode: getPackageName(),
                macCode: deviceInfo.getUniqueId(),
                token: token
              },
              "post",
              {
                // "Content-Type": "application/x-www-form-urlencoded"
              }
            )
            .then((data) => {
              const values = data.split(",");
              token = values.length === 1 ? data : values[0];
              sys.localStorage.setItem("token", token);
              reslove(token ? true : false);
            })
            .catch((e) => {
              // this.dispatch(addToastAction({ content: e }))
              this.comp.showRetryButton();
              reslove(false);
            });
        } else {
          reslove("faild");
        }
      } catch (e) {
        reject(e);
      }
    });
  }
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, (state: StateType) => {
      return {};
    });
    return this;
  }
}

export default LoginPageV2ViewModel;
