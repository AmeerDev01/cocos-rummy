import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { GxfcV2_Footer, IEvent, IProps } from "../components/GxfcV2_Footer"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GxfcV2FoolerViewModel extends ViewModel<GxfcV2_Footer, IProps, IEvent> {
  constructor() {
    super('GxfcV2_Footer')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as GxfcV2_Footer
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        rollerStatus: state.roller.rollerStatus,
        autoLauncherInfo: state.game.autoLauncherInfo,
        betDropDownlist: state.game.betDropDownlist,
        positionId: state.game.positionId,
        winloss: state.game.winloss,
        gameTypeInfo: state.game.gameTypeInfo,
        gold: state.game.gold,
      }
    })
    return this
  }


}

export default GxfcV2FoolerViewModel