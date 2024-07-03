import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_Setting, IProps, IEvent } from "../components/Yxx_Setting"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { EffectType } from "../../../utils/NodeIOEffect"

@StoreInject(getStore())
class SettingViewModel extends ViewModel<Yxx_Setting, IProps, IEvent> {
  constructor() {
    super('Yxx_Setting')
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
}

export default SettingViewModel