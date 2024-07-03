import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_BindPhonePanel, IProps, IEvent } from "../components/Hall_BindPhonePanel"
import { StateType } from "../store/reducer"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { ToastType, addToastAction } from "../store/actions/baseBoard"
import { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect"
import { fetcher, lang } from "../index"

class BindPhoneViewModel extends ViewModel<Hall_BindPhonePanel, IProps, IEvent> {
  constructor() {
    super('Hall_BindPhonePanel')
  }

  protected begin() {
    hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.MODIFY_BIND_PHONE, 'bindPhone', (data, error) => {
      if (error) return
      this.dispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneChange, {}, { placeStr: "修改成功~" }), type: ToastType.SUCCESS }))
      this.comp.events.onClosePanel()
    })
    this.setEvent({
      sendSmsCode: (phoneNumber: string) => {
        return new Promise((reslove, reject) => {
          fetcher.send(ApiUrl.SEND_SMS, { phone: phoneNumber }).then((rsp) => {
            this.dispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhoneSend, {}, { placeStr: "验证信息已经发送，请注意查收" }) }))
            reslove(rsp)
          }).catch((e) => {
            this.dispatch(addToastAction({ content: lang.write(k => k.BindPhoneModule.BindPhonesSendError, {}, { placeStr: "请求失败：${e}" }) }))
            reject(e)
          })
        })
      },
      modifyPhoneDone: (phoneNumber: string, verificationCode: string) => {
        hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MODIFY_BIND_PHONE, { phone: phoneNumber, verificationCode })
      }
    })
  }

  protected unMountCallBack(): void {
    hallWebSocketDriver.sktMsgListener.removeById("bindPhone")
  }
  public connect() {
    const storeState = this.store.getState() as StateType;
    this.inject({
      phone: storeState.memberInfo.phone
    }, (state: StateType) => {
      return {
        phone: state.memberInfo.phone
      }
    })
    return this
  }
}

export default BindPhoneViewModel