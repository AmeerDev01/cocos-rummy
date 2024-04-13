import { Node } from "cc"
import { Domino_Opponent, IProps, IEvent } from "../components/Domino_Opponent"
import { StateType } from "../store/reducer"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { getStore } from "../store"
import { PlayerSatus } from "../type"

@StoreInject(getStore())
class OpponentViewModel extends ViewModel<Domino_Opponent, IProps, IEvent> {
  constructor() {
    super('Domino_Opponent')
  }

  protected begin() { }
  private seatIndex: number = -1
  public initSeatIndex(index: number) {
    this.seatIndex = index;
    return this;
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      const player = state.deskData.playerMap[this.seatIndex]
      return {
        deskStatus: state.deskData.statue,
        currActiveSeatIndex: state.deskData.currActiveSeatIndex,
        outCountdown: state.deskData.outCountdown,
        newCardItem: state.deskData.newCardItem,
        uid: player ? player.uid : '',
        /**头像序号 */
        head: player ? player.head : 0,
        nickName: player ? player.nickName : '',
        glodAmount: player ? player.glodAmount : 0,
        /**状态 */
        state: player ? player.gameData.state : PlayerSatus.WAITING,
        /**是否是庄家 */
        isMaster: player ? player.gameData.isMaster : false,
        /**剩余牌数量 */
        remainCardCount: player ? player.gameData.remainCardCount : 0,
        /**倒计时 */
        // countDownTime: player ? player.gameData.countDownTime : 0,
        /**手牌组，正常情况下，只有玩家自身才有 */
        cardIList: player ? player.gameData.cardIList : [],
        /**跟不上的牌点数 */
        noWayCardNumber: player ? player.gameData.noWayCardNumber : [],
        isActive: false,
        seatIndex: this.seatIndex,
        winloss: player ? player.winloss : 0,
      }
    })
    return this
  }
}

export default OpponentViewModel