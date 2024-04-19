import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { DragonTiger_chip, IProps, IEvent } from "../components/DragonTiger_chip"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class ChipViewModel extends ViewModel<DragonTiger_chip, IProps, IEvent> {
  constructor() {
    super('DragonTiger_chip')
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

export default ChipViewModel