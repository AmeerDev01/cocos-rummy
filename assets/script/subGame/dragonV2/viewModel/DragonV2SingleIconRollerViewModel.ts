import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { DragonV2_SingleIconRoller, IEvent, IProps } from "../components/DragonV2_SingleIconRoller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class DragonV2SingleIconRollerViewModel extends ViewModel<DragonV2_SingleIconRoller, IProps, IEvent> {
  constructor() {
    super('DragonV2_SingleIconRoller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as DragonV2_SingleIconRoller
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameTypeInfo: state.game.gameTypeInfo,
      }
    })
    return this
  }


}

export default DragonV2SingleIconRollerViewModel