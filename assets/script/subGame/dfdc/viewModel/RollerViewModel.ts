import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BlessedWealthy_roller, IProps, IEvent } from "../components/BlessedWealthy_roller"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class RollerViewModel extends ViewModel<BlessedWealthy_roller, IProps, IEvent> {
  constructor() {
    super('BlessedWealthy_roller')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerType: state.roller.rollerMap[this.comp.props.rollerType.index],
        isSortStop: state.game.isSortStop,
        stopMode: state.game.stopMode,
        viewGameType: state.game.viewGameType,
        freeGamePositionId: state.game.freeGamePositionId,
        isJumpStop: state.game.stopMode === "jump" ? true : false,
      }
    })
    return this
  }
}

export default RollerViewModel