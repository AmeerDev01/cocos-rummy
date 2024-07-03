import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GodWealthV2_SingleIconRoller, IEvent, IProps } from "../components/GodWealthV2_SingleIconRoller"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GodWealthV2SingleIconRollerViewModel extends ViewModel<GodWealthV2_SingleIconRoller, IProps, IEvent> {
  constructor() {
    super('GodWealthV2_SingleIconRoller')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as GodWealthV2_SingleIconRoller
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

export default GodWealthV2SingleIconRollerViewModel