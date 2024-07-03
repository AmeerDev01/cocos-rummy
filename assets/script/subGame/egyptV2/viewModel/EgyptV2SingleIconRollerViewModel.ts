import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EgyptV2_SingleIconRoller, IEvent, IProps } from "../components/EgyptV2_SingleIconRoller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class EgyptV2SingleIconRollerViewModel extends ViewModel<EgyptV2_SingleIconRoller, IProps, IEvent> {
  constructor() {
    super('EgyptV2_SingleIconRoller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as EgyptV2_SingleIconRoller
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

export default EgyptV2SingleIconRollerViewModel