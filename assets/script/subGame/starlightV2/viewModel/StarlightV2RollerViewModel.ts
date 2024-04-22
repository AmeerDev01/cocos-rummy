import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_Roller, IEvent, IProps } from "../components/StarlightV2_Roller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class StarlightV2RollerViewModel extends ViewModel<StarlightV2_Roller, IProps, IEvent> {
  constructor() {
    super('StarlightV2_Roller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as StarlightV2_Roller
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameTypeInfo: state.game.gameTypeInfo,
        positionId: state.game.positionId,
        gameModeType: state.game.gameModeType,
      }
    })
    return this
  }


}

export default StarlightV2RollerViewModel