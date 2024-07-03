import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { GxfcV2_RulePanel, IEvent, IProps } from "../components/GxfcV2_RulePanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GxfcV2RulePanelViewModel extends ViewModel<GxfcV2_RulePanel, IProps, IEvent> {
  constructor() {
    super('GxfcV2_RulePanel')
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

export default GxfcV2RulePanelViewModel