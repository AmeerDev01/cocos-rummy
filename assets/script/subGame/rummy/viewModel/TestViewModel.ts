import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Test } from "../components/Rummy_Test"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class TestViewModel extends ViewModel<Rummy_Test, IProps, IEvent> {
  constructor() {
    super('Rummy_Test')
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