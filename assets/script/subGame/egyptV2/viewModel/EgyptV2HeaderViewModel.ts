import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EgyptV2_Header, IEvent, IProps } from "../components/EgyptV2_Header"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class EgyptV2HeaderViewModel extends ViewModel<EgyptV2_Header, IProps, IEvent> {
  constructor() {
    super('EgyptV2_Header')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as EgyptV2_Header
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

export default EgyptV2HeaderViewModel