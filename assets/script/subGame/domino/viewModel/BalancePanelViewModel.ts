; import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { Domino_BalancePanel, IEvent, IProps } from "../components/Domino_BalancePanel"
import { getStore } from "../store"
import { quitRoom } from "../store/action/game"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class BalancePanelViewModel extends ViewModel<Domino_BalancePanel, IProps, IEvent> {
  constructor() {
    super('Domino_BalancePanel')
  }
  protected begin() {
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT2);
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default BalancePanelViewModel