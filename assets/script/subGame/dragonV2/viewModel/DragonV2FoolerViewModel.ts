import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { DragonV2_Footer, IEvent, IProps } from "../components/DragonV2_Footer"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class DragonV2FoolerViewModel extends ViewModel<DragonV2_Footer, IProps, IEvent> {
  constructor() {
    super('DragonV2_Footer')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as DragonV2_Footer
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

export default DragonV2FoolerViewModel