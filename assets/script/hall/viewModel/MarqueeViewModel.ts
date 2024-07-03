import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Common_Marquee, IProps, IEvent } from "../../common/components/Common_Marquee"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect"

class MarqueeViewModel extends ViewModel<Common_Marquee, IProps, IEvent> {
  constructor() {
    super('Common_Marquee')
  }

  protected begin() {
    // this.setProps({
    //   addInfoQueue: [{
    //     content: "这是一段测试跑马灯信息，跑5次",
    //     count: 5,
    //     intervalSeconds: 0,
    //     priority: 1
    //   }]
    // })
    hallWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.MAEQUEE, "main", (data, error) => {
      !error && this.setProps({
        addInfoQueue: data
      })
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        isInSubGame: false//state.baseBoard.subGameInfo ? true : false
      }
    })
    return this
  }
}

export default MarqueeViewModel