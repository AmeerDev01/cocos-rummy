import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_RollerPanel, IProps, IEvent } from "../components/Starlight_RollerPanel"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { DirectionType, IconEffectType, RollerType } from "../type"
import config from "../config"

@StoreInject(getStore())
class LargeRollerPanelViewModel extends ViewModel<Starlight_RollerPanel, IProps, IEvent> {
  constructor() {
    super('Starlight_RollerPanel')
  }

  protected begin() {
    
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerMap: state.roller.rollerMap,
        betAmount:state.game.apostille,// 
      }
    })
    return this
  }
}

export default LargeRollerPanelViewModel
