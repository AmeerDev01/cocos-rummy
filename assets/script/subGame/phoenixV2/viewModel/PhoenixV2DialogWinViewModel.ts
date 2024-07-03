import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { PhoenixV2_DialogWin, IEvent, IProps } from "../components/PhoenixV2_DialogWin"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class PhoenixV2DialogWinViewModel extends ViewModel<PhoenixV2_DialogWin, IProps, IEvent> {
  constructor() {
    super('PhoenixV2_DialogWin')
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

export default PhoenixV2DialogWinViewModel