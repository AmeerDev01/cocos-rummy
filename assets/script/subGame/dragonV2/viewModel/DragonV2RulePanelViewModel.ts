import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { DragonV2_RulePanel, IEvent, IProps } from "../components/DragonV2_RulePanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class DragonV2RulePanelViewModel extends ViewModel<DragonV2_RulePanel, IProps, IEvent> {
  constructor() {
    super('DragonV2_RulePanel')
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

export default DragonV2RulePanelViewModel