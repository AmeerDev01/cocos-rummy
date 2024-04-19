import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Thor_Roller, IProps, IEvent } from "../components/Thor_Roller"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class RollerViewModel extends ViewModel<Thor_Roller, IProps, IEvent> {
  constructor() {
    super('Thor_Roller')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerType: state.roller.rollerMap[this.comp.props.rollerType.index],
        isHasten:state.game.isHasten,
      }
    })
    return this
  }
}

export default RollerViewModel
