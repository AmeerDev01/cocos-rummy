import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Thor_RoleView, IProps, IEvent } from "../components/Thor_RoleView"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
@StoreInject(getStore())
class RoleViewModel extends ViewModel<Thor_RoleView, IProps, IEvent> {
  constructor() {
    super('Thor_RoleView')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameType: state.game.currGameType,
        roleAttack: state.game.roleAttack,
      }
    })
    return this
  }
}

export default RoleViewModel
