import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EgyptV2_DialogWin, IEvent, IProps } from "../components/EgyptV2_DialogWin"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class EgyptV2DialogWinViewModel extends ViewModel<EgyptV2_DialogWin, IProps, IEvent> {
  constructor() {
    super('EgyptV2_DialogWin')
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

export default EgyptV2DialogWinViewModel