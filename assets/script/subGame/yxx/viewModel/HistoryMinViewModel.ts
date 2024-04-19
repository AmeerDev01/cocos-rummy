import { find } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Yxx_HistoryMin } from "../components/Yxx_HistoryMin"
import { sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import HistoryMaxViewModel from "./HistoryMaxViewModel"
import { Result } from "../type"

@StoreInject(getStore())
class HistoryMinViewModel extends ViewModel<Yxx_HistoryMin, IProps, IEvent> {
  constructor() {
    super('Yxx_HistoryMin')
  }

  protected begin() {
    this.setEvent({
      openHistoryMax: () => {
        const hih = new HistoryMaxViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HISOTRY_MAX_PANEL).source)
        .appendTo(find("Canvas"), { effectType: EffectType.EFFECT2, isModal: true})
          .connect().setProps({
            results: this.comp.props.results
          })
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        newResult: state.gameFlow.newResult,
        gameStatus: state.gameFlow.gameStatus,
        animationStatus: state.gameFlow.animationStatus,
        results: state.gameFlow.results
      }
    })
    return this
  }
}

export default HistoryMinViewModel