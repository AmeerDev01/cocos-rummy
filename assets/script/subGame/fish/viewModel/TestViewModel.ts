; import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fish_Test, IEvent, IProps } from "../components/Fish_Test"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class TestViewModel extends ViewModel<Fish_Test, IProps, IEvent> {
  constructor() {
    super('Fish_Test')
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