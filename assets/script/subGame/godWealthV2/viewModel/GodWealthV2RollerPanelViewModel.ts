import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GodWealthV2_RollerPanel, IEvent, IProps } from "../components/GodWealthV2_RollerPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GodWealthV2RollerPanelViewModel extends ViewModel<GodWealthV2_RollerPanel, IProps, IEvent> {
  constructor() {
    super('GodWealthV2_RollerPanel')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as GodWealthV2_RollerPanel
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
        gold: state.game.gold,

      }
    })
    return this
  }


}

export default GodWealthV2RollerPanelViewModel