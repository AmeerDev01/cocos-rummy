import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { ThorV2_BuyMiniGame, IEvent, IProps } from "../components/ThorV2_BuyMiniGame"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EffectType } from "../../../utils/NodeIOEffect"

@StoreInject(getStore())
class ThorV2BuyMiniViewModel extends ViewModel<ThorV2_BuyMiniGame, IProps, IEvent> {
  constructor() {
    super('ThorV2_BuyMiniGame')
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

export default ThorV2BuyMiniViewModel