import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_Header, IEvent, IProps } from "../components/StarlightV2_Header"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class StarlightV2HeaderViewModel extends ViewModel<StarlightV2_Header, IProps, IEvent> {
  constructor() {
    super('StarlightV2_Header')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gold: state.game.gold,
      }
    })
    return this
  }


}

export default StarlightV2HeaderViewModel