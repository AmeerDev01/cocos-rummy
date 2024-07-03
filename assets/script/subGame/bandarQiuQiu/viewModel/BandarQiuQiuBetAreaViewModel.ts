import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { BandarQiuQiu_betArea, IProps, IEvent } from "../components/BandarQiuQiu_betArea"
import { StateType } from "../store/reducer"
import { getStore } from "../store"

@StoreInject(getStore())
class BetAreaViewModel extends ViewModel<BandarQiuQiu_betArea, IProps, IEvent> {
  constructor() {
    super('BandarQiuQiu_betArea')
  }

  protected begin() { }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gameStatus:state.game.gameStatus,
        gold:state.game.gold,
        /**选择的筹码 */
        selectChip: state.bet.selectChip,
        myInfo:state.game.myInfo,
        newBetData:state.bet.newBetData,
        winArea:state.pokerDetail.winArea,
        goldData:state.bet.goldData,
        winAreaRate:state.bet.winAreaRate,
        allWinUsers:state.bet.allWinUsers,
        lastBet: state.bet.lastBet,
        cancelBetData:state.bet.cancelBetData,
        memberBet: state.bet.memberBet,
        tips:state.game.tips
      }
    })
    return this
  }
}

export default BetAreaViewModel