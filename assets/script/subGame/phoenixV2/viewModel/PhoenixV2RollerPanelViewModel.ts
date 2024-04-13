import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { PhoenixV2_RollerPanel, IEvent, IProps } from "../components/PhoenixV2_RollerPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class PhoenixV2RollerPanelViewModel extends ViewModel<PhoenixV2_RollerPanel, IProps, IEvent> {
  constructor() {
    super('PhoenixV2_RollerPanel')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as PhoenixV2_RollerPanel
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
        chooseSmallGame:state.game.chooseSmallGame,
      }
    })
    return this
  }


}

export default PhoenixV2RollerPanelViewModel