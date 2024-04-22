import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { phoenixV2_sgChoose_small, IProps, IEvent } from "../components/phoenixV2_sgChoose_small"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class PhoenixV2SgChooseSmallViewMode extends ViewModel<phoenixV2_sgChoose_small, IProps, IEvent> {
  constructor() {
    super('phoenixV2_sgChoose_small')
  }

  protected begin() { 
    
  }

  public connect() {
    this.inject({ }, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default PhoenixV2SgChooseSmallViewMode