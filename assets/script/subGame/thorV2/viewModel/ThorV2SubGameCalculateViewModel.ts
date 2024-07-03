import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { ThorV2_SubGameCalculate, IEvent, IProps } from "../components/ThorV2_SubGameCalculate"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class ThorV2SubGameCalculateViewModel extends ViewModel<ThorV2_SubGameCalculate, IProps, IEvent> {
  constructor() {
    super('ThorV2_SubGameCalculate')
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

export default ThorV2SubGameCalculateViewModel