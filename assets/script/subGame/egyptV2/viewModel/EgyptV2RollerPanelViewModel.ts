import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EgyptV2_RollerPanel, IEvent, IProps } from "../components/EgyptV2_RollerPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class EgyptV2RollerPanelViewModel extends ViewModel<EgyptV2_RollerPanel, IProps, IEvent> {
  constructor() {
    super('EgyptV2_RollerPanel')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as EgyptV2_RollerPanel
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

export default EgyptV2RollerPanelViewModel