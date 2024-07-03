import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_AuthLauncher, IEvent, IProps } from "../components/StarlightV2_AuthLauncher"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EffectType } from "../../../utils/NodeIOEffect"

@StoreInject(getStore())
class StarlightV2AuthLauncherViewModel extends ViewModel<StarlightV2_AuthLauncher, IProps, IEvent> {
  constructor() {
    super('StarlightV2_AuthLauncher')
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

export default StarlightV2AuthLauncherViewModel