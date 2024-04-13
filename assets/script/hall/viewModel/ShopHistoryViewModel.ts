import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_shopHistoryPanel, IProps, IEvent } from "../components/Hall_shopHistoryPanel"
import { StateType } from "../store/reducer"

class ShopHistoryViewModel extends ViewModel<Hall_shopHistoryPanel, IProps, IEvent> {
  constructor() {
    super('Hall_shopHistoryPanel')
  }

  protected begin() { }



  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        
      }
    })
    return this
  }
}

export default ShopHistoryViewModel