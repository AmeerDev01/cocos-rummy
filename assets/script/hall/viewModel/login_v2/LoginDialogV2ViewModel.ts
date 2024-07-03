import { Node, sys } from "cc"
import ViewModel from "../../../base/ViewModel"
import { StateType } from "../../store/reducer"
import { Hall_LoginDialogV2, IProps, LoginType, IEvent } from "../../components/login_v2/Hall_LoginDialogV2"
import { ApiUrl } from "../../apiUrl"
import { addToastAction } from "../../store/actions/baseBoard"
import { baseBoardView, fetcher, sourceManageSeletor } from "../../index"
import { lang } from "../../index"
import { config, deviceInfo } from "../../config"
import { getPackageName, loginEvents } from "../../../common/bridge"
import { defaultLanguageType } from "../../../language/languagePkg"

class LoginDialogV2ViewModel extends ViewModel<Hall_LoginDialogV2, IProps, IEvent> {
  constructor() {
    super('Hall_LoginDialogV2')
  }
  protected begin() {
    this.setProps({})

    this.setEvent({
      loginHandler: (loginName, password, done) => {
        fetcher.send(ApiUrl.LOGIN_PWD, {
          type: 4,
          memberName: defaultLanguageType[config.country].phoneAreaNum + loginName, password,
          macCode: deviceInfo.getUniqueId(),
          pkgCode: getPackageName()
        }).then((data) => {
          const values = data.split(",")
          let token = values.length === 1 ? data : values[0];
          //登录成功
          sys.localStorage.setItem('token', token)
          this.comp.events.loginDoneHandler()
          done && done(true)

          //登录成功发送事件
          loginEvents(loginName);
        }).catch((e) => {
          done && done(false)
          console.log(e)
        })
      },
      sendSmsHandler: (phoneNumber: string) => {
        this.dispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneSend, {}, { placeStr: "验证信息已经发送，请注意查收" }) }))
        // Fetcher.Instance<Fetcher<ApiUrl>>().send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
        //   this.dispatch(addToastAction({ content: `验证信息已经发送，请注意查收` }))
        //   this.setProps({ smsCode: rsp })
        // }).catch((e) => {
        //   console.log(e)
        // })
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

export default LoginDialogV2ViewModel