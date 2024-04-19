import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { ThorV2_DialogWin, IEvent, IProps } from "../components/ThorV2_DialogWin"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class ThorV2DialogWinViewModel extends ViewModel<ThorV2_DialogWin, IProps, IEvent> {
  constructor() {
    super('ThorV2_DialogWin')
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

export default ThorV2DialogWinViewModel