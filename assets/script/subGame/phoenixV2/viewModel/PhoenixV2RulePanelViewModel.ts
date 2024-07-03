import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { PhoenixV2_RulePanel, IEvent, IProps } from "../components/PhoenixV2_RulePanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class PhoenixV2RulePanelViewModel extends ViewModel<PhoenixV2_RulePanel, IProps, IEvent> {
  constructor() {
    super('PhoenixV2_RulePanel')
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

export default PhoenixV2RulePanelViewModel