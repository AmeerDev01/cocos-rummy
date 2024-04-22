import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EgyptV2_Roller, IEvent, IProps } from "../components/EgyptV2_Roller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class EgyptV2RollerViewModel extends ViewModel<EgyptV2_Roller, IProps, IEvent> {
  constructor() {
    super('EgyptV2_Roller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as EgyptV2_Roller
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

export default EgyptV2RollerViewModel