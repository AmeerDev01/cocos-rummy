import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BandarQiuQiu_chip, IProps, IEvent } from "../components/BandarQiuQiu_chip"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class ChipViewModel extends ViewModel<BandarQiuQiu_chip, IProps, IEvent> {
  constructor() {
    super('BandarQiuQiu_chip')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {}
    })
    return this
  }
  
  public setProps(props: Partial<IProps>, force: boolean = false) {
    return super.setProps(props, force);
  }
}
// 
export default ChipViewModel