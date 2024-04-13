import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { EgyptV2_RulePanel, IEvent, IProps } from "../components/EgyptV2_RulePanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class EgyptV2RulePanelViewModel extends ViewModel<EgyptV2_RulePanel, IProps, IEvent> {
  constructor() {
    super('EgyptV2_RulePanel')
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

export default EgyptV2RulePanelViewModel