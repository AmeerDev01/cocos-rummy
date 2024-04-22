import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { CrashV2_bottom_actionBar, IEvent, IProps } from "../components/CrashV2_bottom_actionBar"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class CrashV2_bottom_actionBarViewModel extends ViewModel<CrashV2_bottom_actionBar, IProps, IEvent> {
  constructor() {
    super('CrashV2_bottom_actionBar')
  }

  protected begin() {
  }

  public mountViewNode(viewNode: Node) {
    this.viewNode = viewNode;
    this.viewNode.addComponent(this.componentStr)
    this.comp = this.viewNode.getComponent(this.componentStr) as CrashV2_bottom_actionBar
    return this
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
       gameType:state.game.gameType,
       userGold:state.game.gold,
      }
    })
    return this
  }


}

export default CrashV2_bottom_actionBarViewModel