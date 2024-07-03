import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { StarlightV2_RulePanel, IEvent, IProps } from "../components/StarlightV2_RulePanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class StarlightV2RulePanelViewModel extends ViewModel<StarlightV2_RulePanel, IProps, IEvent> {
  constructor() {
    super('StarlightV2_RulePanel')
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

export default StarlightV2RulePanelViewModel