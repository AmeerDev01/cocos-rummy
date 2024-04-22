import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_WinPanel, IProps, IEvent } from "../components/Yxx_WinPanel"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { playWin } from "../index"

@StoreInject(getStore())
class WinPanelViewModel extends ViewModel<Yxx_WinPanel, IProps, IEvent> {
  constructor() {
    super('Yxx_WinPanel')
  }

  protected begin() {
    playWin();
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {}
    })
    return this
  }
}

export default WinPanelViewModel