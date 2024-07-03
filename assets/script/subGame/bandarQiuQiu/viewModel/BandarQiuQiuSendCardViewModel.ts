import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BandarQiuQiu_sendCard, IProps, IEvent } from "../components/BandarQiuQiu_sendCard"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class SendCardsViewModel extends ViewModel<BandarQiuQiu_sendCard, IProps, IEvent> {
  constructor() {
    super('BandarQiuQiu_sendCard')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        countDown: state.game.countDown,
        gameStatus:state.game.gameStatus,
      }
    })
    return this
  }
}

export default SendCardsViewModel