import { Node, sys } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_ShopPanel, IProps, IEvent } from "../components/Hall_ShopPanel"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import InputValidator from "../../utils/InputValidator"
import { ToastType, addToastAction, setLoadingAction } from "../store/actions/baseBoard"
import { getStore } from "../store"
import { baseBoardView, lang } from "../index"
import ModalBox from "../../common/ModalBox"
import { getPackageName, purchaseAppsflyerEvents } from "../../common/bridge"

class ShopViewModel extends ViewModel<Hall_ShopPanel, IProps, IEvent> {
  constructor() {
    super('Hall_ShopPanel')
  }
  private isDana: boolean = false
  protected begin() {
    sktMsgListener.add(SKT_MAG_TYPE.GET_WITH_DRAW_CHANNEL, 'shop', (data) => {
      this.setProps({
        dataList: data
      })
      this.dispatch(setLoadingAction({ isShow: false }))
    })
    sktMsgListener.add(SKT_MAG_TYPE.RECHARGE_ORDER, 'shop', (data) => {
      this.dispatch(setLoadingAction({ isShow: false }))
      if (data) {
        if (!this.isDana) {
          //DANA渠道不支持ifream
          ModalBox.Instance().show({ url: data })
        } else {
          sys.openURL(data)
        }
      } else {
        this.dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.WebSocketSendError, {}, { placeStr: "network error" }), type: ToastType.ERROR }))
      }
      // data && sys.openURL(data)
      // data && ModalBox.Instance().show({ url: data })
    })
    sktInstance.sendSktMessage(SKT_MAG_TYPE.GET_WITH_DRAW_CHANNEL, {}, { isLoading: true })
    this.setEvent({
      rechargeHandler: (channelItem, amount) => {
        this.isDana = channelItem.name === "DANA" ? true : false
        // 暂时不限制游客充值
        // if (!baseBoardView.mainPanelViewModel.isTouristPass()) return
        new InputValidator().begin().isDecimal(amount, false).done(() => {
          sktInstance.sendSktMessage(SKT_MAG_TYPE.RECHARGE_ORDER, {
            "rechargeChannelId": channelItem.id,
            "money": amount
          }, { isLoading: true })
          // purchaseAppsflyerEvents(amount, 'IDR')
        })
      }
    })
  }

  protected unMountCallBack() {
    sktMsgListener.removeById('shop')
  }

  public connect() {
    this.inject({ memberInfo: getStore().getState().memberInfo }, (state: StateType) => {
      return {
        memberInfo: state.memberInfo
      }
    })
    return this
  }
}

export default ShopViewModel