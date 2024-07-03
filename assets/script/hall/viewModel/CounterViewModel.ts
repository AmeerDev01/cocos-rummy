import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { ActionTypes, InitStateType, colorChangeAction, sizeChangeAction } from "../store/actions/counter"
import { Counter, IProps, IEvent } from "../components/demo/Counter"
import { StateType } from "../store/reducer"

// export type PropsType = {
//   onChange?: (e: any) => void,
//   color: string,
//   size: number
// }

class CounterViewModel extends ViewModel<Counter, IProps, IEvent> {
  constructor() {
    super('Counter')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        color: state.counter.color,
        size: state.counter.size
      }
    })

    window.setTimeout(() => {
      this.dispatch(colorChangeAction("#FF0200"))
      this.dispatch(sizeChangeAction(40))
      // this.dispatch({ type: '', payload: {} })
      // console.log(colorChangeAction("#c0c0c0"))
      // this.dispatch({ type: ActionTypes.CHANGE_COLOR, payload: { color: "#FF0200" } })
    }, 2000)
    return this
  }
}

export default CounterViewModel