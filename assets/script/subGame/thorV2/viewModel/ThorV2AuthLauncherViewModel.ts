import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { ThorV2_AuthLauncher, IEvent, IProps } from "../components/ThorV2_AuthLauncher"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EffectType } from "../../../utils/NodeIOEffect"

@StoreInject(getStore())
class ThorV2AuthLauncherViewModel extends ViewModel<ThorV2_AuthLauncher, IProps, IEvent> {
  constructor() {
    super('ThorV2_AuthLauncher')
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

export default ThorV2AuthLauncherViewModel