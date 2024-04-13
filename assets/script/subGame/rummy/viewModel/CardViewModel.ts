import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Card } from "../components/Rummy_Card"
import { isJoker } from "../rummyTool"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class CardViewModel extends ViewModel<Rummy_Card, IProps, IEvent> {
  constructor() {
    super('Rummy_Card')
  }

  protected begin() {
    this.connect();
    this.setEvent({
      getViewModel: () => {
        return this;
      }
    })
  }

  public isSelected() {
    return this.comp.props.selected;
  }

  public isJoker() {
    return isJoker(this.comp.props.card);
  }

  public getPoint() {
    return this.comp.props.card.point;
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