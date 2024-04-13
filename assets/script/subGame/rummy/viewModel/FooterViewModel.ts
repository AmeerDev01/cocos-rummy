import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Footer } from "../components/Rummy_Footer"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class FooterViewModel extends ViewModel<Rummy_Footer, IProps, IEvent> {
  constructor() {
    super('Rummy_Footer')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        flowInfo: state.deskData.flowInfo,
        isShowBtn: state.deskData.isShowOpBtn,
        selectCardCount: state.deskData.selectCardCount,
      }
    })
    return this
  }
}

export default FooterViewModel