import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BandarQiuQiu_begin, IProps, IEvent } from "../components/BandarQiuQiu_begin"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class BeginViewModel extends ViewModel<BandarQiuQiu_begin, IProps, IEvent> {
  constructor() {
    super('BandarQiuQiu_begin')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
        return {
          gameStatus: state.game.gameStatus,
          layCountDown: state.game.layCountDown,
          countDown:state.game.countDown,
      }
    })
    return this
  }
  

}
// 
export default BeginViewModel