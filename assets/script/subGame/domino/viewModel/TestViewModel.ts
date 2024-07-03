import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Domino_Test, IEvent, IProps } from "../components/Domino_Test"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import CardViewModel from "./CardViewModel"

@StoreInject(getStore())
class TestViewModel extends ViewModel<Domino_Test, IProps, IEvent> {
  constructor() {
    super('Domino_Test')
  }
  protected begin() {
  }



  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default TestViewModel