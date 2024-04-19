import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Starlight_RoleView, IProps, IEvent } from "../components/Starlight_RoleView"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class RoleViewModel extends ViewModel<Starlight_RoleView, IProps, IEvent> {
  constructor() {
    super('Starlight_RoleView')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameType: state.game.viewGameType,
        roleAttack: state.game.roleAttack,
      }
    })
    return this
  }
}

export default RoleViewModel
