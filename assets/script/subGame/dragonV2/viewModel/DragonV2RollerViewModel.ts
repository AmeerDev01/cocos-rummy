import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { DragonV2_Roller, IEvent, IProps } from "../components/DragonV2_Roller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class DragonV2RollerViewModel extends ViewModel<DragonV2_Roller, IProps, IEvent> {
  constructor() {
    super('DragonV2_Roller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as DragonV2_Roller
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

export default DragonV2RollerViewModel