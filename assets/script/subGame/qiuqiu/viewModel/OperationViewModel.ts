import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Qiuqiu_Operation } from "../components/Qiuqiu_Operation"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class OperationViewModel extends ViewModel<Qiuqiu_Operation, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_Operation')
  }
  private seatIndex = 0;

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      const player = state.deskData.playerMap[this.seatIndex];
      return {
        deskStatus: state.deskData.deskStatus,
        playerMap: state.deskData.playerMap,
        betAmount: state.deskData.betAmount,
        maxAmount: state.deskData.maxAmount,
        opType: player ? player.gameData.opType : null,
        callAmount: player ? player.gameData.callAmount : 0,
        lastActiveSeatIndex: state.deskData.lastActiveSeatIndex,
        currActiveSeatIndex: state.deskData.currActiveSeatIndex,
        seatIndex: this.seatIndex,
      }
    })
    return this
  }
}

export default OperationViewModel