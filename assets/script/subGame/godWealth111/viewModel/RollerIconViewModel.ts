import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GodWealth_rollerIcon, IProps, IEvent } from "../components/GodWealth_rollerIcon"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class RollerIconViewModel extends ViewModel<GodWealth_rollerIcon, IProps, IEvent> {
  constructor() {
    super('GodWealth_rollerIcon')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {

      return {
        viewGameType: state.game.viewGameType,
        isRollEnd: state.roller.roundAllEnd,
        gameType: state.game.currGameType,
        
      }
    })
    return this
  }
}

export default RollerIconViewModel