import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { phoenix_sgChoose_small, IProps, IEvent } from "../components/phoenix_sgChoose_small"
import { StateType } from "../store/reducer"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { getStore } from "../store"

@StoreInject(getStore())
class SgChooseSmallViewModel extends ViewModel<phoenix_sgChoose_small, IProps, IEvent> {
  constructor() {
    super('phoenix_sgChoose_small')
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

export default SgChooseSmallViewModel