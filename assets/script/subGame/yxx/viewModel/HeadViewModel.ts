import { log } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Yxx_Head } from "../components/Yxx_Head"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance } from "../socketConnect"
import { ReqGiftSo } from "../type"
import { gameCacheData } from "../serverType"

@StoreInject(getStore())
class HeadViewModel extends ViewModel<Yxx_Head, IProps, IEvent> {
  constructor() {
    super('Yxx_Head')
  }

  protected begin() {
    this.setEvent({
      giveGift: (value: number, memberId: string, num: number) => {
        const data: ReqGiftSo = {
          roomId: gameCacheData.roomId,
          /**道具Id */
          interactionId: value,
          /**获赠玩家 */
          toSitId: memberId,
          /** 总共需要花费的金币 */
          num: num
        }
        sktInstance.sendSktMessage(SKT_MAG_TYPE.GIVE_GIFT, data)
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        headType: state.game.seats[this.comp.props.headType.index],
        betData: state.bet.newBetData,
        animationStatus: state.gameFlow.animationStatus
      }
    })
    return this
  }
}

export default HeadViewModel