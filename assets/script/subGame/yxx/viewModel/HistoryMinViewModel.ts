import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Yxx_HistoryMin } from "../components/Yxx_HistoryMin"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class HistoryMinViewModel extends ViewModel<Yxx_HistoryMin, IProps, IEvent> {
  constructor() {
    super('Yxx_HistoryMin')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        newResult: state.gameFlow.newResult,
        gameStatus: state.gameFlow.gameStatus,
        animationStatus: state.gameFlow.animationStatus,
        results: state.gameFlow.results
      }
    })
    return this
  }
}

export default HistoryMinViewModel