import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_WinShowView, IProps, IEvent } from "../components/Starlight_WinShowView"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class WinShowViewModel extends ViewModel<Starlight_WinShowView, IProps, IEvent> {
  constructor() {
    super('Starlight_WinShowView')
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
