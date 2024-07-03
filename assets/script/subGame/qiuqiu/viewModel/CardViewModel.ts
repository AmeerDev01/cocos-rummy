import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Qiuqiu_Card } from "../components/Qiuqiu_Card"
import { getStore } from "../store"
import { dealAction } from "../store/action/game"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class CardViewModel extends ViewModel<Qiuqiu_Card, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_Card')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default CardViewModel