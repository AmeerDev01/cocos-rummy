import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { StateType } from "../store/reducer"
import { Hall_ResetPassword, IProps, IEvent } from "../components/Hall_ResetPassword"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { addToastAction } from "../store/actions/baseBoard"
import { lang } from "../index"

class ResetPasswordViewModel extends ViewModel<Hall_ResetPassword, IProps, IEvent> {
  constructor() {
    super('Hall_ResetPassword')
  }

  protected begin() {
    this.setEvent({
      sendSmsHandler: (phoneNumber) => {
        this.dispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneSend,{},{ placeStr:"验证信息已经发送，请注意查收" }) }))
      },
      inputError: (error) => {
        this.dispatch(addToastAction({ content: error }))
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {}
    })
    return this
  }
}

export default ResetPasswordViewModel