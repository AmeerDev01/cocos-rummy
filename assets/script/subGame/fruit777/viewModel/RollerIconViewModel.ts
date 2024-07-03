import ViewModel from "../../../base/ViewModel"
import { Fruit777_RollerIcon, IProps, IEvent } from "../components/Fruit777_RollerIcon"
import { StateType } from "../store/reducer"

class RollerIconViewModel extends ViewModel<Fruit777_RollerIcon, IProps, IEvent> {
  constructor() {
    super('Fruit777_RollerIcon')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        
      }
    })
    return this
  }
}

export default RollerIconViewModel