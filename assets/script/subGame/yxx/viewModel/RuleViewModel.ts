import { Node, log } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_Rule, IProps, IEvent } from "../components/Yxx_Rule"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { EffectType } from "../../../utils/NodeIOEffect"

@StoreInject(getStore())
class RuleViewModel extends ViewModel<Yxx_Rule, IProps, IEvent> {
  constructor() {
    super('Yxx_Rule')
  }

  protected begin() {
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT1);
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {}
    })
    return this
  }
  public setProps(props: Partial<IProps>, force: boolean = false) {
    return super.setProps(props, force);
  }
}

export default RuleViewModel