import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Qiuqiu_Chip } from "../components/Qiuqiu_Chip"
import { getStore } from "../store"
import { dealAction } from "../store/action/game"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class ChipViewModel extends ViewModel<Qiuqiu_Chip, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_Chip')
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

export default ChipViewModel