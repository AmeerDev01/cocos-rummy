import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_BuyMiniGame, IEvent, IProps } from "../components/StarlightV2_BuyMiniGame"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EffectType } from "../../../utils/NodeIOEffect"

@StoreInject(getStore())
class StarlightV2BuyMiniViewModel extends ViewModel<StarlightV2_BuyMiniGame, IProps, IEvent> {
  constructor() {
    super('StarlightV2_BuyMiniGame')
  }

  protected begin() {
    this.setEvent({
      onClose: () => {
        this.unMount(EffectType.EFFECT2)
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

export default StarlightV2BuyMiniViewModel