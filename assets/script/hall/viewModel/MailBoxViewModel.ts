import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_MailBox, IProps, IEvent, MailItemType } from "../components/Hall_MailBox"
import { StateType } from "../store/reducer"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { addToastAction } from "../store/actions/baseBoard"
import { fetcher } from "../index"

class MailBoxViewModel extends ViewModel<Hall_MailBox, IProps, IEvent> {
  constructor() {
    super('Hall_MailBox')
  }

  protected begin() {
    this.getMailList()
    this.setEvent({
      onDeleteHandler: (item) => {
        return new Promise((resolve, reject) => {
          fetcher.send(ApiUrl.DELETE_EMAIL, { data: item.id }).then((rsp) => {
            // this.getMailList()
            resolve(true)
          }).catch(e => reject(e))
          //删除
          // this.getMailList()
          // resolve(true)
        })
      },
      onCheckMail: (item: MailItemType) => {
        return new Promise((resolve, reject) => {
          fetcher.send(ApiUrl.CHECK_EMAIL, { data: item.id }).then((rsp) => {
            // this.getMailList()
            resolve(true)
          }).catch(e => reject(e))
        })
      }
    })

  }

  private getMailList() {
    fetcher.send(ApiUrl.EMAIL_LIST, {}, "get").then((rsp) => {
      this.setProps({
        mailList: rsp
      })
    }).catch((e) => {
      //this.dispatch(addToastAction({ content: e }))
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        mailList: []
      }
    })
    return this
  }
}

export default MailBoxViewModel