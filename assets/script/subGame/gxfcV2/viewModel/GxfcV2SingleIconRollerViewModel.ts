import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GxfcV2_SingleIconRoller, IEvent, IProps } from "../components/GxfcV2_SingleIconRoller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GxfcV2SingleIconRollerViewModel extends ViewModel<GxfcV2_SingleIconRoller, IProps, IEvent> {
  constructor() {
    super('GxfcV2_SingleIconRoller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as GxfcV2_SingleIconRoller
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

export default GxfcV2SingleIconRollerViewModel