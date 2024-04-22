import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BlessedWealthy_header, IProps, IEvent } from "../components/BlessedWealthy_header"
import { StateType } from "../store/reducer"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { getStore } from "../store"

@StoreInject(getStore())
class HeaderViewModel extends ViewModel<BlessedWealthy_header, IProps, IEvent> {
  constructor() {
    super('BlessedWealthy_header')
  }

  protected begin() { 
    
  }

  public connect() {
    // console.log('inject', dataTransfer(DataKeyType.BALANCE))
    this.inject({ }, (state: StateType) => {
      // console.log('state.game.balance', state.game.balance)
      return {
        balance: state.game.balance
      }
    })
    return this
  }
}

export default HeaderViewModel