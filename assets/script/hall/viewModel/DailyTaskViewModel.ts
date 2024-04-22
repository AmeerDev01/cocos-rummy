import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_DailyTask, IProps, IEvent } from "../components/Hall_DailyTask"
import { StateType } from "../store/reducer"

class DailyTaskViewModel extends ViewModel<Hall_DailyTask, IProps, IEvent> {
  constructor() {
    super('Hall_DailyTask')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        
      }
    })
    return this
  }
}

export default DailyTaskViewModel