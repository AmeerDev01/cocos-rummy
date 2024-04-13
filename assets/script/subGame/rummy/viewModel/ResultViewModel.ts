import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Rummy_ResultPanel } from "../components/Rummy_ResultPanel"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EnterGameVo } from "../type"

@StoreInject(getStore())
class ResultViewModel extends ViewModel<Rummy_ResultPanel, IProps, IEvent> {
  constructor() {
    super('Rummy_ResultPanel')
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

export default ResultViewModel