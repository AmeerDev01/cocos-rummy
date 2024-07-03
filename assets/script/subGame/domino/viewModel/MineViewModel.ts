; import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Domino_Mine, IEvent, IProps } from "../components/Domino_Mine"
import config from "../config"
import { roomChooseViewModel } from "../index"
import { getStore } from "../store"
import { showOutCard } from "../store/action/game"
import { StateType } from "../store/reducer"
import { PlayerSatus, genCardItem } from "../type"
import CardViewModel from "./CardViewModel"

@StoreInject(getStore())
class MineViewModel extends ViewModel<Domino_Mine, IProps, IEvent> {
  constructor() {
    super('Domino_Mine')
  }
  public handCardViewModelList: CardViewModel[]
  protected begin() {
    this.setEvent({
      onOutCard: (value: number, azimuth: 0 | 1) => {
        const cardItem = genCardItem(value);
        cardItem.azimuth = azimuth;
        cardItem.seatIndex = 0;
        if (config.isTest) {
          this.dispatch(showOutCard(cardItem));
        } else {
          roomChooseViewModel.mainBoardViewModel.sendOutCard(cardItem);
        }
      }
    })

  }



  public connect() {
    this.inject({}, (state: StateType) => {
      const selfPlayer = state.deskData.playerMap[0]
      return {
        deskStatus: state.deskData.statue,
        outCardItem: state.deskData.outCardItem,
        leftOutCardItem: state.deskData.leftOutCardItem,
        rightOutCardItem: state.deskData.rightOutCardItem,
        newCardItem: state.deskData.newCardItem,
        currActiveSeatIndex: state.deskData.currActiveSeatIndex,
        outCountdown: state.deskData.outCountdown,
        uid: selfPlayer ? selfPlayer.uid : '',
        /**头像序号 */
        head: selfPlayer ? selfPlayer.head : 0,
        nickName: selfPlayer ? selfPlayer.nickName : '',
        glodAmount: selfPlayer ? selfPlayer.glodAmount : 0,
        /**状态 */
        state: selfPlayer ? selfPlayer.gameData.state : PlayerSatus.WAITING,
        /**是否是庄家 */
        isMaster: selfPlayer ? selfPlayer.gameData.isMaster : false,
        /**剩余牌数量 */
        remainCardCount: selfPlayer ? selfPlayer.gameData.remainCardCount : 0,
        /**手牌组，正常情况下，只有玩家自身才有 */
        cardIList: selfPlayer ? selfPlayer.gameData.cardIList : [],
        /**跟不上的牌点数 */
        noWayCardNumber: selfPlayer ? selfPlayer.gameData.noWayCardNumber : [],
        isActive: false,
        winloss: selfPlayer ? selfPlayer.winloss : 0,
      }
    })
    return this
  }
}

export default MineViewModel