import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GxfcV2_Header, IEvent, IProps } from "../components/GxfcV2_Header"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GxfcV2HeaderViewModel extends ViewModel<GxfcV2_Header, IProps, IEvent> {
  constructor() {
    super('GxfcV2_Header')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as GxfcV2_Header
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gold: state.game.gold,
      }
    })
    return this
  }


}

export default GxfcV2HeaderViewModel