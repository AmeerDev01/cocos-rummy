import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Qiuqiu_Test } from "../components/Qiuqiu_Test"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class TestViewModel extends ViewModel<Qiuqiu_Test, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_Test')
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