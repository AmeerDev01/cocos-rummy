import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Qiuqiu_GameRule } from "../components/Qiuqiu_GameRule"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class GameRuleViewModel extends ViewModel<Qiuqiu_GameRule, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_GameRule')
  }

  protected begin() {
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT2)
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

export default GameRuleViewModel