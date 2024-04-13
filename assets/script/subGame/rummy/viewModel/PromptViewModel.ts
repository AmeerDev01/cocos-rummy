import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Rummy_PromptPanel } from "../components/Rummy_PromptPanel"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EnterGameVo } from "../type"

@StoreInject(getStore())
class PromptViewModel extends ViewModel<Rummy_PromptPanel, IProps, IEvent> {
  constructor() {
    super('Rummy_PromptPanel')
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

export default PromptViewModel