import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_Test, IProps, IEvent } from "../components/Yxx_Test"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class TestViewModel extends ViewModel<Yxx_Test, IProps, IEvent> {
  constructor() {
    super('Yxx_Test')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        seats: state.game.seats,
        onlineNumber: state.game.onlineNumber,
        gameStatus: state.gameFlow.gameStatus
      }
    })
    return this
  }
}

export default TestViewModel