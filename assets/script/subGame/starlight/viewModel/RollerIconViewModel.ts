import { Node } from "cc"
import ViewModel from "../../../base/ViewModel"
import { Starlight_RollerIcon, IProps, IEvent } from "../components/Starlight_RollerIcon"
import { StateType } from "../store/reducer"

class RollerIconViewModel extends ViewModel<Starlight_RollerIcon, IProps, IEvent> {
  constructor() {
    super('Starlight_RollerIcon')
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
