import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Qiuqiu_Opponent } from "../components/Qiuqiu_Opponent"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { CardType } from "../type";

@StoreInject(getStore())
class OpponentViewModel extends ViewModel<Qiuqiu_Opponent, IProps, IEvent> {
  private seatIndex = 0;
  constructor(seatIndex: number) {
    super('Qiuqiu_Opponent')
    this.seatIndex = seatIndex;
  }

  protected begin() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      const player = state.deskData.playerMap[this.seatIndex];
      return {
        deskStatus: state.deskData.deskStatus,
        uid: player ? player.uid : '',
        nickName: player ? player.nickName : '',
        gold: player ? player.glodAmount : 0,
        icon: player ? player.head : -1,
        isDealer: player ? player.gameData.isMaster : false,
        isReady: player ? player.gameData.isReady : false,
        winloss: player ? player.gameData.winloss : 0,
        opType: player ? player.gameData.opType : null,
        operationCountdown: state.deskData.operationCountdown,
        currActiveSeatIndex: state.deskData.currActiveSeatIndex,
        seatIndex: this.seatIndex,
        dealCardCount: player ? player.gameData.dealCardCount : 0,
        results: player ? player.gameData.cards : [],
        balanceInfo: state.deskData.balanceInfo,
        cardType: player ? player.gameData.cardType : CardType.DISERSE,
      }
    })
    return this
  }
}

export default OpponentViewModel