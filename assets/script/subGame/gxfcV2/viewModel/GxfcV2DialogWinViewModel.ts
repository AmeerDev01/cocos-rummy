import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GxfcV2_DialogWin, IEvent, IProps } from "../components/GxfcV2_DialogWin"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GxfcV2DialogWinViewModel extends ViewModel<GxfcV2_DialogWin, IProps, IEvent> {
  constructor() {
    super('GxfcV2_DialogWin')
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

export default GxfcV2DialogWinViewModel