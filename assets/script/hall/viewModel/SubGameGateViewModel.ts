import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_SubGameGate, IProps, IEvent } from "../components/Hall_SubGameGate"
import { StateType } from "../store/reducer"

class SubGameGateViewModel extends ViewModel<Hall_SubGameGate, IProps, IEvent> {
  constructor() {
    super('Hall_SubGameGate')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        useVip: state.memberInfo.vipLevel,
        activeSubGameInfo: state.baseBoard.subGameInfo
      }
    })
    return this
  }
}

export default SubGameGateViewModel