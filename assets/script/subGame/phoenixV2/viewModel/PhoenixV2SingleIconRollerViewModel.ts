import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { PhoenixV2_SingleIconRoller, IEvent, IProps } from "../components/PhoenixV2_SingleIconRoller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class PhoenixV2SingleIconRollerViewModel extends ViewModel<PhoenixV2_SingleIconRoller, IProps, IEvent> {
  constructor() {
    super('PhoenixV2_SingleIconRoller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as PhoenixV2_SingleIconRoller
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

export default PhoenixV2SingleIconRollerViewModel