import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { PhoenixV2_Roller, IEvent, IProps } from "../components/PhoenixV2_Roller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class PhoenixV2RollerViewModel extends ViewModel<PhoenixV2_Roller, IProps, IEvent> {
  constructor() {
    super('PhoenixV2_Roller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as PhoenixV2_Roller
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameTypeInfo: state.game.gameTypeInfo,
        positionId: state.game.positionId,
        chooseSmallGame:state.game.chooseSmallGame
      }
    })
    return this
  }


}

export default PhoenixV2RollerViewModel