import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BlessedWealthy_popup, IProps, IEvent } from "../components/BlessedWealthy_popup"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class PopupViewModel extends ViewModel<BlessedWealthy_popup, IProps, IEvent> {
  constructor() {
    super('BlessedWealthy_popup')
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

export default PopupViewModel