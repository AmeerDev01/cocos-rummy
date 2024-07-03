import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Qiuqiu_Sure } from "../components/Qiuqiu_Sure"
import config from "../config"
import { getStore } from "../store"
import { playerBet } from "../store/action/game"
import { StateType } from "../store/reducer"
import { OperationType } from "../type"

@StoreInject(getStore())
class SureViewModel extends ViewModel<Qiuqiu_Sure, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_Sure')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        newBetAmount: state.deskData.betAmount,
        maxAmount: state.deskData.maxAmount,
        gold: state.deskData.gold,
        afee: config.afee
      }
    })
    return this
  }
}

export default SureViewModel