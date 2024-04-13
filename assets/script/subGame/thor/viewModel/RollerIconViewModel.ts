import { Node } from "cc"
import ViewModel from "../../../base/ViewModel"
import { Thor_RollerIcon, IProps, IEvent } from "../components/Thor_RollerIcon"
import { StateType } from "../store/reducer"

class RollerIconViewModel extends ViewModel<Thor_RollerIcon, IProps, IEvent> {
  constructor() {
    super('Thor_RollerIcon')
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
