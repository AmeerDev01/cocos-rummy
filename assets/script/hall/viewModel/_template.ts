import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_PcMainPanel, IProps, IEvent } from "../components/Hall_PcMainPanel"
import { StateType } from "../store/reducer"

class PersonCenterViewModel extends ViewModel<Hall_PcMainPanel, IProps, IEvent> {
  constructor() {
    super('Hall_PcMainPanel')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        memberInfo: null
      }
    })
    return this
  }
}

export default PersonCenterViewModel