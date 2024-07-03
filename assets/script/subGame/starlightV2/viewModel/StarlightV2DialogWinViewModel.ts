import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_DialogWin, IEvent, IProps } from "../components/StarlightV2_DialogWin"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class StarlightV2DialogWinViewModel extends ViewModel<StarlightV2_DialogWin, IProps, IEvent> {
  constructor() {
    super('StarlightV2_DialogWin')
  }

  protected begin() {
    this.setEvent({
      onUnMount: () => {
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

export default StarlightV2DialogWinViewModel