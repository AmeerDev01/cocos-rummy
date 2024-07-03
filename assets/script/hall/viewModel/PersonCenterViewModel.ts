import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_PcMainPanel, IProps, IEvent } from "../components/Hall_PcMainPanel"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect"
import { baseBoardView, lang } from "../index"
import { addToastAction } from "../store/actions/baseBoard"
import Throttler from "../../utils/Throttler"

class PersonCenterViewModel extends ViewModel<Hall_PcMainPanel, IProps, IEvent> {
  constructor() {
    super('Hall_PcMainPanel')
  }
  private memberInfoMedifyDone: () => void
  protected begin() {
    hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, '', { isLoading: true })
    hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.MODIFY_MEMBER_INFO, "member", (data, error) => {
      if (error) return
      this.memberInfoMedifyDone && this.memberInfoMedifyDone()
      this.dispatch(addToastAction({ content: lang.write(k => k.PersonCenterModule.PersonCenterEdit, {}, { placeStr: "玩家资料编辑成功" }) }))
      hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, {}, { isLoading: true })
    })
    // sktMsgListener.add(SKT_MAG_TYPE.CONVERSION, 'member', () => {
    //   this.dispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.OPERATE_DONE, {}, { placeStr: "操作成功" }) }))
    // })
    this.setEvent({
      memberInfoDone: (gender, nickName, avatarIndex, done) => {
        Throttler.isDebouncerAsync(SKT_MAG_TYPE.MODIFY_MEMBER_INFO, 1000, true, () => {
          this.dispatch(addToastAction({ content: lang.write(k => k.PersonCenterModule.PersonCenterSumbit, {}, { placeStr: "操作过于频繁，请稍等~" }) }))
        }).then((isPass) => {
          if (!baseBoardView.mainPanelViewModel.isTouristPass()) return
          this.memberInfoMedifyDone = done
          hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MODIFY_MEMBER_INFO, {
            gender, nickName, avatarIndex
          }, { isLoading: true })
        })
      }
    })
  }

  protected unMountCallBack(): void {
    hallWebSocketDriver.sktMsgListener.removeById("member")
  }

  public connect() {
    const storeState = this.store.getState() as StateType;
    this.inject({
      memberInfo: storeState.memberInfo,
      tourist: storeState.memberInfo.tourist
    }, (state: StateType) => {
      return {
        memberInfo: state.memberInfo,
        isShowWebView: state.baseBoard.isShowWebView,
        isLoadRecommendData: state.baseBoard.isLoadRecommendData,
        tourist: state.memberInfo.tourist
      }
    })
    return this
  }
}

export default PersonCenterViewModel



