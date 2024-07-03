import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { StateType } from "../store/reducer"
import { Hall_WithdrawBank, IProps, IEvent } from "../components/Hall_Withdraw/Hall_WithdrawBank"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { setWithdrawChannelList } from "../store/actions/withdraw"
import { fetcher } from "../index"


class WithdrawBankViewModel extends ViewModel<Hall_WithdrawBank, IProps, IEvent> {
  constructor() {
    super('Hall_WithdrawBank')
  }

  protected begin() {

  }

  public connect() {
    const storeState = this.store.getState() as StateType;
    if (!storeState.withdraw.withdrawBankChannelList.length) {
      //还没有数据，就要先加载
      fetcher.send(ApiUrl.WITHDRAW_BANK_CHANNEL_LIST, {}, "get").then((rsp) => {
        this.dispatch(setWithdrawChannelList(rsp))
      }).catch((e) => {
        console.log(e)
      })
    }
    this.inject({
      withdrawBankChannelList: storeState.withdraw.withdrawBankChannelList
    }, (state: StateType) => {
      return {
        withdrawBankChannelList: state.withdraw.withdrawBankChannelList
      }
    })
    return this
  }
}

export default WithdrawBankViewModel