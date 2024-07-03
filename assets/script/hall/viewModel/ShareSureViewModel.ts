import { fetcher } from "../index"
import ViewModel from "../../base/ViewModel"
import { EffectType } from "../../utils/NodeIOEffect"
import { Hall_ShareSure, IEvent, IProps } from "../components/Hall_ShareSure"
import { addToastAction, changeWebView, loadRecommendData } from "../store/actions/baseBoard"
import { StateType } from "../store/reducer"
import { ApiUrl } from "../apiUrl"
import { lang } from "../index"

class ShareSureViewModel extends ViewModel<Hall_ShareSure, IProps, IEvent> {
  constructor() {
    super('Hall_ShareSure')
  }

  protected begin() {
    this.dispatch(changeWebView(false));
    this.setEvent({
      close: () => {
        this.unMount(EffectType.EFFECT2);
        this.dispatch(changeWebView(true));
      },
      batalActing: (actingId: string) => {
        fetcher.send(ApiUrl.RECOMMEND_BIND, { promotionCode: actingId }, "post").then((rsp) => {
          this.dispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.ShareSure,{},{ placeStr:"绑定成功" }) }))
          // 绑定之后重新加载推荐数据
          this.dispatch(loadRecommendData(0));
          this.comp.events.close();
        }).catch((e) => {
          //this.dispatch(addToastAction({ content: e }))
        })
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

export default ShareSureViewModel