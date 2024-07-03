import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Rummy_HelpPanel } from "../components/Rummy_HelpPanel"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { JoinRoomVo } from "../type"

@StoreInject(getStore())
class HelpViewModel extends ViewModel<Rummy_HelpPanel, IProps, IEvent> {
  constructor() {
    super('Rummy_HelpPanel')
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

export default HelpViewModel