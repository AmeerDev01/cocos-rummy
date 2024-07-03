import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Rummy_SetPanel } from "../components/Rummy_SetPanel"
import config from "../config"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class SettingViewModel extends ViewModel<Rummy_SetPanel, IProps, IEvent> {
  constructor() {
    super('Rummy_SetPanel')
  }

  protected begin() {
    this.setEvent({
      close: () => {
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

export default SettingViewModel 