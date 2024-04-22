import { Node, log } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_Chip, IProps, IEvent } from "../components/Yxx_Chip"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class ChipViewModel extends ViewModel<Yxx_Chip, IProps, IEvent> {
  constructor() {
    super('Yxx_Chip')
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