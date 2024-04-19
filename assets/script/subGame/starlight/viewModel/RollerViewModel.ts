import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_Roller, IProps, IEvent } from "../components/Starlight_Roller"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class RollerViewModel extends ViewModel<Starlight_Roller, IProps, IEvent> {
  constructor() {
    super('Starlight_Roller')
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
