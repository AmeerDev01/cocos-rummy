import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_OperationCard } from "../components/Rummy_OperationCard"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EnterGameVo } from "../type"

@StoreInject(getStore())
class OperationCardViewModel extends ViewModel<Rummy_OperationCard, IProps, IEvent> {
  constructor() {
    super('Rummy_OperationCard')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default OperationCardViewModel