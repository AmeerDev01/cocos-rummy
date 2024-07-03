import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_ShopRachargeRule, IProps, IEvent } from "../components/Hall_ShopRachargeRule"
import { StateType } from "../store/reducer"

class ShopRachargeRuleViewModel extends ViewModel<Hall_ShopRachargeRule, IProps, IEvent> {
  constructor() {
    super('Hall_ShopRachargeRule')
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

export default ShopRachargeRuleViewModel