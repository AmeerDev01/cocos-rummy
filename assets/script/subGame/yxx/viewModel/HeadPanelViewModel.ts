import { Node, log } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_HeadPanel, IProps, IEvent } from "../components/Yxx_HeadPanel"
import { StateType } from "../store/reducer"
import { initSeat } from "../store/actions/game"
import { HeadType } from "../type"
import config from "../config"
import { getStore } from "../store"

@StoreInject(getStore())
class HeadPanelViewModel extends ViewModel<Yxx_HeadPanel, IProps, IEvent> {
  constructor() {
    super('Yxx_HeadPanel')
  }

  protected begin() {
    this.setEvent({
      initSeat: (seats: HeadType[]) => {
        this.dispatch(initSeat(seats));
      }
    });
  }

  public initHead(seats: HeadType[]) {
    this.comp.initHead(seats);
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {}
    })
    return this
  }
}

export default HeadPanelViewModel