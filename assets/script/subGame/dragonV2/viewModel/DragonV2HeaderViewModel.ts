import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { DragonV2_Header, IEvent, IProps } from "../components/DragonV2_Header"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class DragonV2HeaderViewModel extends ViewModel<DragonV2_Header, IProps, IEvent> {
  constructor() {
    super('DragonV2_Header')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as DragonV2_Header
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

export default DragonV2HeaderViewModel