import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_Roller, IProps, IEvent } from "../components/Fruit777_Roller"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class RollerViewModel extends ViewModel<Fruit777_Roller, IProps, IEvent> {
  constructor() {
    super('Fruit777_Roller')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerType: state.roller.rollerMap[this.comp.props.rollerType.index],
        isSortStop: state.game.isSortStop,
        stopMode: state.game.stopMode
      }
    })
    return this
  }
}

export default RollerViewModel