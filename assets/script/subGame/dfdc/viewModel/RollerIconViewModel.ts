import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BlessedWealthy_rollerIcon, IProps, IEvent } from "../components/BlessedWealthy_rollerIcon"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class RollerIconViewModel extends ViewModel<BlessedWealthy_rollerIcon, IProps, IEvent> {
  constructor() {
    super('BlessedWealthy_rollerIcon')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {

      return {
        viewGameType: state.game.viewGameType,
        isRollEnd: state.roller.roundAllEnd,
      }
    })
    return this
  }
}

export default RollerIconViewModel