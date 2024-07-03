import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { DragonV2_DialogWin, IEvent, IProps } from "../components/DragonV2_DialogWin"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class DragonV2DialogWinViewModel extends ViewModel<DragonV2_DialogWin, IProps, IEvent> {
  constructor() {
    super('DragonV2_DialogWin')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        // dialogInfo: state.game.dialogInfo,
        // gameTypeInfo: state.game.gameTypeInfo,
      }
    })
    return this
  }


}

export default DragonV2DialogWinViewModel