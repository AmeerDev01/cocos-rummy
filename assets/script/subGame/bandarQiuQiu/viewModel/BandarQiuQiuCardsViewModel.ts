import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BandarQiuQiu_cards, IProps, IEvent } from "../components/BandarQiuQiu_cards"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class CardsViewModel extends ViewModel<BandarQiuQiu_cards, IProps, IEvent> {
  constructor() {
    super('BandarQiuQiu_cards')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        countDown: state.game.countDown,
        gameStatus: state.game.gameStatus,
        blueCard: state.pokerDetail.blueCard,
        redCard: state.pokerDetail.redCard,
        twinNum: state.pokerDetail.twinNum,
        cardType: state.bet.cardType,
        
      }
    })
    return this
  }
}

export default CardsViewModel