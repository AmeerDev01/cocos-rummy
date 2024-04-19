; import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { Fish_Getnewwwep, IEvent, IProps } from "../components/Fish_Getnewwwep"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GetnewwwepViewModel extends ViewModel<Fish_Getnewwwep, IProps, IEvent> {
  constructor() {
    super('Fish_Getnewwwep')
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
        myBatteryId: state.deskData.myBatteryId,
      }
    })
    return this
  }
}

export default GetnewwwepViewModel