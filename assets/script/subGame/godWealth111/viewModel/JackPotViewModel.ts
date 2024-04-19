import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GodWealth_jackPot, IProps, IEvent } from "../components/GodWealth_jackPot"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class JackPotViewModel extends ViewModel<GodWealth_jackPot, IProps, IEvent> {
  constructor() {
    super('GodWealth_jackPot')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {

      return {
        jackPotUserArr:state.game.jackPotUserArr
      }
    })
    return this
  }
}

export default JackPotViewModel