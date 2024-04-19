; import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { Fish_Help, IEvent, IProps } from "../components/Fish_Help"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class HelpViewModel extends ViewModel<Fish_Help, IProps, IEvent> {
  constructor() {
    super('Fish_Help')
  }
  protected begin() {
    this.setEvent({
      onClose: () => {
        this.unMount(EffectType.EFFECT2);
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

export default HelpViewModel