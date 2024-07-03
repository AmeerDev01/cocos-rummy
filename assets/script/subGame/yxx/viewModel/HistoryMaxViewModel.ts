import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Yxx_HistoryMax, IProps, IEvent } from "../components/Yxx_HistoryMax"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { EffectType } from "../../../utils/NodeIOEffect"

@StoreInject(getStore())
class HistoryMaxViewModel extends ViewModel<Yxx_HistoryMax, IProps, IEvent> {
  constructor() {
    super('Yxx_HistoryMax')
  }

  protected begin() {
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT1);
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        results: state.gameFlow.results,
        newResult: state.gameFlow.newResult,
        animationStatus: state.gameFlow.animationStatus,
      }
    })
    return this
  }
}

export default HistoryMaxViewModel