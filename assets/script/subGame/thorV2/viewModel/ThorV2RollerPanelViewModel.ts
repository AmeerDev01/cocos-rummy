import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { ThorV2_RollerPanel, IEvent, IProps } from "../components/ThorV2_RollerPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class ThorV2RollerPanelViewModel extends ViewModel<ThorV2_RollerPanel, IProps, IEvent> {
  constructor() {
    super('ThorV2_RollerPanel')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as ThorV2_RollerPanel
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

export default ThorV2RollerPanelViewModel