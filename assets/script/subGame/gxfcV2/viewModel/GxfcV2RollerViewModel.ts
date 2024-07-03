import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GxfcV2_Roller, IEvent, IProps } from "../components/GxfcV2_Roller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GxfcV2RollerViewModel extends ViewModel<GxfcV2_Roller, IProps, IEvent> {
  constructor() {
    super('GxfcV2_Roller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as GxfcV2_Roller
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameTypeInfo: state.game.gameTypeInfo,
        positionId: state.game.positionId,
      }
    })
    return this
  }


}

export default GxfcV2RollerViewModel