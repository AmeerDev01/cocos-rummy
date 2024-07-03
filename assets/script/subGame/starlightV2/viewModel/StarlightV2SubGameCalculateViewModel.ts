import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_SubGameCalculate, IEvent, IProps } from "../components/StarlightV2_SubGameCalculate"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class StarlightV2SubGameCalculateViewModel extends ViewModel<StarlightV2_SubGameCalculate, IProps, IEvent> {
  constructor() {
    super('StarlightV2_SubGameCalculate')
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

export default StarlightV2SubGameCalculateViewModel