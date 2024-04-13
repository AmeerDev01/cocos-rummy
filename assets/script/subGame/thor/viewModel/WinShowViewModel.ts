import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Thor_WinShowView, IProps, IEvent } from "../components/Thor_WinShowView"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class WinShowViewModel extends ViewModel<Thor_WinShowView, IProps, IEvent> {
  constructor() {
    super('Thor_WinShowView')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        winningData:state.roller.smallBox,
        multipleTotal:state.game.multipleTotal,
        gameFreeGametotalMultiplier:state.game.gameFreeGametotalMultiplier,
        viewGameType: state.game.viewGameType,
        profit:state.game.profit
      }
    })
    return this
  }
}

export default WinShowViewModel
