import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_RollerPanel, IProps, IEvent } from "../components/Fruit777_RollerPanel"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { DirectionType, IconEffectType, RollerType } from "../type"
import config from "../config"

@StoreInject(getStore())
class LargeRollerPanelViewModel extends ViewModel<Fruit777_RollerPanel, IProps, IEvent> {
  constructor() {
    super('Fruit777_RollerPanel')
  }

  protected begin() {

  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerMap: state.roller.rollerMap,
        stopMode: state.game.stopMode,
        isSortStop: state.game.isSortStop
      }
    })
    return this
  }
}

export default LargeRollerPanelViewModel