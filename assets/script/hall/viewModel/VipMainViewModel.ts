import ViewModel from "../../base/ViewModel"
import { EffectType } from "../../utils/NodeIOEffect"
import { Hall_VipMain, IEvent, IProps } from "../components/Hall_VipMain"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

class VipMainViewModel extends ViewModel<Hall_VipMain, IProps, IEvent> {
  constructor() {
    super('Hall_VipMain')
  }

  protected begin() {
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT2);
      }
    })
  }

  public connect() {
    this.inject({ memberInfo: getStore().getState().memberInfo }, (state: StateType) => {
      return {
        memberInfo: state.memberInfo,
      }
    })
    return this
  }
}

export default VipMainViewModel