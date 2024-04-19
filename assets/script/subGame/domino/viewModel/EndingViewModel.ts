; import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Domino_Ending, IEvent, IProps } from "../components/Domino_Ending"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class EndingViewModel extends ViewModel<Domino_Ending, IProps, IEvent> {
  constructor() {
    super('Domino_Ending')
  }
  protected begin() {
    this.setEvent({
      animeOver: () => {
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

export default EndingViewModel