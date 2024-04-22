import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StarlightV2_RollerPanel, IEvent, IProps } from "../components/StarlightV2_RollerPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class StarlightV2RollerPanelViewModel extends ViewModel<StarlightV2_RollerPanel, IProps, IEvent> {
  constructor() {
    super('StarlightV2_RollerPanel')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as StarlightV2_RollerPanel
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerStatus: state.roller.rollerStatus,
        isSpeed: state.roller.isSpeed,
        isManualSpeed: state.roller.isManualSpeed,
        autoLauncherInfo: state.game.autoLauncherInfo,
        gameTypeInfo: state.game.gameTypeInfo,
        winloss: state.game.winloss,
        subGameWinloss: state.game.subGameWinloss,
        freeGameOdds: state.game.freeGameOdds,
      }
    })
    return this
  }


}

export default StarlightV2RollerPanelViewModel