import ViewModel from "../../base/ViewModel"
import { Hall_VipUp, IEvent, IProps } from "../components/Hall_VipUp"
import { StateType } from "../store/reducer"

class VipUpViewModel extends ViewModel<Hall_VipUp, IProps, IEvent> {
  constructor() {
    super('Hall_VipUp')
  }

  protected begin() {
    this.setEvent({
      close: () => {
        this.unMount();
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default VipUpViewModel