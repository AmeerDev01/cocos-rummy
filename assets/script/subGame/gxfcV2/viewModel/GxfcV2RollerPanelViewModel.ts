import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GxfcV2_RollerPanel, IEvent, IProps } from "../components/GxfcV2_RollerPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GxfcV2RollerPanelViewModel extends ViewModel<GxfcV2_RollerPanel, IProps, IEvent> {
  constructor() {
    super('GxfcV2_RollerPanel')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as GxfcV2_RollerPanel
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerStatus: state.roller.rollerStatus,
        isSpeed: state.roller.isSpeed,
        autoLauncherInfo: state.game.autoLauncherInfo,
        gameTypeInfo: state.game.gameTypeInfo,
        winloss: state.game.winloss,
      }
    })
    return this
  }


}

export default GxfcV2RollerPanelViewModel