import { Node, Prefab, sys } from "cc"
import ViewModel from "../../base/ViewModel"
import { StateType } from "../store/reducer"
import { Hall_LoginDialog, IProps, LoginType, IEvent } from "../components/Hall_LoginDialog"
import { EffectType } from "../../utils/NodeIOEffect"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { addToastAction } from "../store/actions/baseBoard"
import ResetPasswordViewModel from "./ResetPasswordViewModel"
import { fetcher, sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import InputValidator from "../../utils/InputValidator"
import { lang } from "../index"
import { deviceInfo } from "../config"
import { getPackageName } from "../../common/bridge"

class LoginViewDialogModel extends ViewModel<Hall_LoginDialog, IProps, IEvent> {
  constructor() {
    super('Hall_LoginDialog')
  }
  protected begin() {
    this.setProps({})

    this.setEvent({
      loginHandler: (showLoginType, loginData) => {
        // this.dispatch(addToastAction({ content: "输入有误" }))
        let paramData = {
          type: showLoginType,
          phone: loginData.number,
          promotionCode: loginData.promotionCode,
          memberName: '',
          password: '',
          pkgCode: getPackageName(),
          macCode: deviceInfo.getUniqueId()
        }
        if (showLoginType === LoginType.PASSWORD) {
          // Object.assign(paramData, { password: loginData.authStr })
          Object.assign(paramData, {
            memberName: loginData.number,
            password: loginData.authStr,
          })
        } else if (showLoginType === LoginType.PHONE) {
          Object.assign(paramData, { verificationCode: loginData.authStr })
        }
        new InputValidator().begin().isPhoneNumber(paramData.phone).done(() => {
          fetcher.send(ApiUrl.LOGIN_PWD, paramData).then((data: string) => {
            const values = data.split(",")
            let token = values.length === 1 ? data : values[0];
            //登录成功
            sys.localStorage.setItem('token', token)
            this.comp.events.loginDoneHandler()
          }).catch((e) => {
            console.log(e)
          })
        })
      },
      sendSmsHandler: (phoneNumber: string) => {
        this.dispatch(addToastAction({ content: lang.write(k => k.loginModule.LoginCode, {}, { placeStr: "验证信息已经发送，请注意查收" }) }))
        // Fetcher.Instance<Fetcher<ApiUrl>>().send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
        //   this.dispatch(addToastAction({ content: `验证信息已经发送，请注意查收` }))
        //   this.setProps({ smsCode: rsp })
        // }).catch((e) => {
        //   console.log(e)
        // })
      },
      setPasswordHandler: async () => {
        const resetPasswordViewModel = new ResetPasswordViewModel().mountView(
          (await sourceManageSeletor("hall").getFileAsync(PrefabPathDefine._LOGIN_SET_PASSWORD, Prefab)).source)
          .appendTo(this.parentNode, { effectType: EffectType.EFFECT1 }).setEvent({
            closeHandler: () => {
              resetPasswordViewModel.unMount(EffectType.EFFECT1)
            },
            pwdLoginSuccess: () => {
              this.comp.events.loginDoneHandler()
            }
          }).connect()
      }
    })
  }
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, (state: StateType) => {
      return {

      }
    })
    return this
  }
}

export default LoginViewDialogModel