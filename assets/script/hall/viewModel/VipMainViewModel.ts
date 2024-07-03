import { fetcher } from "../index"
import ViewModel from "../../base/ViewModel"
import { EffectType } from "../../utils/NodeIOEffect"
import { Hall_VipMain, IEvent, IProps } from "../components/Hall_VipMain"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { ApiUrl } from "../apiUrl"
import { updateVipBonusInfo } from "../store/actions/baseBoard"

class VipMainViewModel extends ViewModel<Hall_VipMain, IProps, IEvent> {
  private vipLevel:number
  constructor() {
    super('Hall_VipMain')
  }

  protected begin() {
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT2);
      }
    })
  }

  protected unMountCallBack(): void {
    this.dispatch(updateVipBonusInfo(null))
	}


  public connect() {
    this.inject({ memberInfo: getStore().getState().memberInfo }, (state: StateType) => {
      this.vipLevel = state.memberInfo.vipLevel;
      return {
        memberInfo: state.memberInfo,
        vipBonusInfo: state.baseBoard.vipBonusInfo,
      }
    })
    return this
  }
}

export default VipMainViewModel