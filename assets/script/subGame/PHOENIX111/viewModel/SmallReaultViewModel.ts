import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { phoenix_small_result, IProps, IEvent } from "../components/phoenix_small_result"
import { StateType } from "../store/reducer"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { getStore } from "../store"

@StoreInject(getStore())
class SmallReaultViewModel extends ViewModel<phoenix_small_result, IProps, IEvent> {
  constructor() {
    super('phoenix_small_result')
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

export default SmallReaultViewModel