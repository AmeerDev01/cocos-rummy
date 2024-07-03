import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_LosePanel, IProps, IEvent } from "../components/Yxx_LosePanel"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { playDefeat } from "../index"

@StoreInject(getStore())
class LosePanelViewModel extends ViewModel<Yxx_LosePanel, IProps, IEvent> {
  constructor() {
    super('Yxx_LosePanel')
  }

  protected begin() {
    playDefeat();
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {}
    })
    return this
  }
}

export default LosePanelViewModel