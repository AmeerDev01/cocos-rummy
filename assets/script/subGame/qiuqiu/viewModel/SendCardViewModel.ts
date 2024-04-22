import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Qiuqiu_SendCard } from "../components/Qiuqiu_SendCard"
import { getStore } from "../store"
import { dealAction } from "../store/action/game"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class SendCardViewModel extends ViewModel<Qiuqiu_SendCard, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_SendCard')
  }

  protected begin() {
    this.setEvent({
      flyCardOverHanler: (seatIndex: number, dealIndex: number) => {
        this.dispatch(dealAction(seatIndex, dealIndex));
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        deskStatus: state.deskData.deskStatus,
        playerMap: state.deskData.playerMap,
        currActiveSeatIndex: state.deskData.currActiveSeatIndex,
        dealCount: state.deskData.dealCount,
      }
    })
    return this
  }
}

export default SendCardViewModel