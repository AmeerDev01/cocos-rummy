import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { DragonV2topValue, IEvent, IProps } from "../components/DragonV2topValue"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class DragonV2topValueViewModel extends ViewModel<DragonV2topValue, IProps, IEvent> {
  constructor() {
    super('DragonV2topValue')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as DragonV2topValue
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        grandVal: state.game.jackpotTotalAmount,
        gameTypeInfo:state.game.gameTypeInfo
      }
    })
    return this
  }


}

export default DragonV2topValueViewModel