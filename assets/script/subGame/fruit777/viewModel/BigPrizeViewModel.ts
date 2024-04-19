import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_BigPrize, IProps, IEvent } from "../components/Fruit777_BigPrize"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class BigPrizeViewModel extends ViewModel<Fruit777_BigPrize, IProps, IEvent> {
  constructor() {
    super('Fruit777_BigPrize')
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