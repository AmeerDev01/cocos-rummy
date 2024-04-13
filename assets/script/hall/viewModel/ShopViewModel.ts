import { Node, Prefab, sys } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_ShopPanel, IProps, IEvent } from "../components/Hall_ShopPanel"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect"
import InputValidator from "../../utils/InputValidator"
import { ToastType, addToastAction, setLoadingAction } from "../store/actions/baseBoard"
import { getStore } from "../store"
import { baseBoardView, fetcher, lang, sourceManageSeletor } from "../index"
import ModalBox from "../../common/ModalBox"
import { getPackageName, purchaseAppsflyerEvents } from "../../common/bridge"
import ShopHistoryViewModel from "./ShopHistoryViewModel"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../utils/NodeIOEffect"
import { ApiUrl } from "../apiUrl"
import ShopRachargeRuleViewModel from "./ShopRachargeRuleViewModel"


class ShopViewModel extends ViewModel<Hall_ShopPanel, IProps, IEvent> {
  constructor() {
    super('Hall_ShopPanel')
  }
  private isDana: boolean = false
  protected begin() {
    this.getRechargeList()
    // hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.GET_WITH_DRAW_CHANNEL, 'shop', (data, error) => {
    //   !error && this.setProps({
    //     dataList: data
    //   })
    //   // this.dispatch(setLoadingAction({ isShow: false }))
    // })
    hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.RECHARGE_ORDER, 'shop', (data, error) => {
      if (error) return
      // this.dispatch(setLoadingAction({ isShow: false }))
      if (data) {
        // if (!this.isDana) {
        //   //DANA渠道不支持ifream
        //   ModalBox.Instance().show({ url: data })
        // } else {
        //   sys.openURL(data)
        // }
        sys.openURL(data)
      } else {
        this.dispatch(addToastAction({ content: lang.write(k => k.WebSocketModule.WebSocketError, {}, { placeStr: "network error" }), type: ToastType.ERROR }))
      }
    })
    // hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GET_WITH_DRAW_CHANNEL, {}, { isLoading: true })
    this.setEvent({
      rechargeHandler: (channelItem, amount) => {
        this.isDana = channelItem.name === "DANA" ? true : false
        // 暂时不限制游客充值
        // if (!baseBoardView.mainPanelViewModel.isTouristPass()) return
        new InputValidator().begin().isDecimal(amount, false).done(() => {
          hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.RECHARGE_ORDER, {
            "rechargeChannelId": channelItem.id,
            "money": amount
          }, { isLoading: true })
          // purchaseAppsflyerEvents(amount, 'IDR')
        })
      },
      openShopHistory: async () => {
        const shopHistoryViewModel = new ShopHistoryViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine.HELL_SHOP_HISTORY, Prefab)).source)
          .appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
          .setEvent({
            onClosePanel: () => {
              shopHistoryViewModel.unMount(EffectType.EFFECT2)
            }
          }).connect()
        //列表
        fetcher.send(ApiUrl.USER_ORDER_LIST, { data: 1 }).then(async (rsp) => {
            shopHistoryViewModel.setProps({ shopHistoryList: rsp })
          }).catch((e) => {
            console.log(e)
          })
        
      },
      openRachargeRule:()=> {
        const shopRachargeRuleViewModel = new ShopRachargeRuleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_SHOP_RACHARGE).source)
          .appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true })
          .setEvent({
            onClosePanel: () => {
              shopRachargeRuleViewModel.unMount(EffectType.EFFECT2)
            }
          }).connect()
      }
    })
  }

  public getRechargeList() {
    fetcher.send(ApiUrl.GET_RECHARGE_LIST, {}, "get").then(async (rsp) => {
      let rechargeType:any = this.comp.getTypeValue(rsp)
      this.setProps({
        dataList: rsp,
        rechargeType
      })
    }).catch((e) => {
      console.log(e)
    })
  }



  protected unMountCallBack() {
    hallWebSocketDriver.sktMsgListener.removeById('shop')
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