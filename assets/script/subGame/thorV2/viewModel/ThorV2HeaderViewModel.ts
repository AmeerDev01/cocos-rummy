import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { ThorV2_Header, IEvent, IProps } from "../components/ThorV2_Header"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class ThorV2HeaderViewModel extends ViewModel<ThorV2_Header, IProps, IEvent> {
  constructor() {
    super('ThorV2_Header')
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

export default ThorV2HeaderViewModel