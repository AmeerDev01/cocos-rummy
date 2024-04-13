import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_BigPrize, IProps, IEvent } from "../components/Starlight_BigPrize"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class BigPrizeViewModel extends ViewModel<Starlight_BigPrize, IProps, IEvent> {
  constructor() {
    super('Starlight_BigPrize')
  }

  protected begin() {
    
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {}
    })
    return this
  }
}

export default BigPrizeViewModel
