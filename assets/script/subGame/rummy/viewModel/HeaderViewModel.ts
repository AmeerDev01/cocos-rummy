import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Header } from "../components/Rummy_Header"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { JoinRoomVo } from "../type"

@StoreInject(getStore())
class HeaderViewModel extends ViewModel<Rummy_Header, IProps, IEvent> {
  constructor() {
    super('Rummy_Header')
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        isShowSwitchBtn: state.deskData.isShowSwitchBtn
      }
    })
    return this
  }
}

export default HeaderViewModel