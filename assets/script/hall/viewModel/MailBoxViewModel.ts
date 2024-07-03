import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_MailBox, IProps, IEvent, MailItemType } from "../components/Hall_MailBox"
import { StateType } from "../store/reducer"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { addToastAction, setLoadingAction } from "../store/actions/baseBoard"
import { fetcher } from "../index"
import { PageInfo } from "../hallType"

class MailBoxViewModel extends ViewModel<Hall_MailBox, IProps, IEvent> {
  private pageNum: number = 1;
  private pageSize: number = 10;
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
      },
      onReceiveEmailAnnex: (item: MailItemType) => {
        return new Promise((resolve, reject) => {
          fetcher.send(ApiUrl.RECEIVE_EMAIL_ANNEX, { data: item.id }).then((rsp) => {
            resolve(true)
          }).catch(e => reject(e))
        })
      }
    })

  }

  private getMailList() {
    fetcher.send(ApiUrl.EMAIL_LIST, {pageNum:PageInfo.pageNum, pageSize:PageInfo.pageSize}, "post").then((rsp) => {
      this.dispatch(setLoadingAction({ isShow: false, flagId: 'mail' }))
      this.setProps({
        mailList: {
          list: rsp.list,
          pageNum: rsp.pageNum,
          pageSize: rsp.pageSize,
          total:rsp.total,
        } 

      })
    }).catch((e) => {
      //this.dispatch(addToastAction({ content: e }))
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        mailList: null,
      }
    })
    return this
  }
}

export default MailBoxViewModel