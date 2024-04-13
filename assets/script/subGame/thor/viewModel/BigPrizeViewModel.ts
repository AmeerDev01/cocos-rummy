import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Thor_BigPrize, IProps, IEvent } from "../components/Thor_BigPrize"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class BigPrizeViewModel extends ViewModel<Thor_BigPrize, IProps, IEvent> {
  constructor() {
    super('Thor_BigPrize')
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
