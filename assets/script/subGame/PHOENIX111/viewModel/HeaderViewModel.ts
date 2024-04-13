import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { phoenix_headerComp, IProps, IEvent } from "../components/phoenix_header"
import { StateType } from "../store/reducer"
import dataTransfer, { DataKeyType } from "../dataTransfer"
import { getStore } from "../store"
import { changeAutoLauncherType, changeGame, changeProfit, changeViewGame, setAutoLaunchedTimes } from "../store/actions/game"
import { AutoLauncherType, GameType } from "../type"

@StoreInject(getStore())
class HeaderViewModel extends ViewModel<phoenix_headerComp, IProps, IEvent> {
  constructor() {
    super('phoenix_headerComp')
  }

  protected begin() { 
    this.setEvent({
      clearCacheData: () => {
        this.dispatch(changeAutoLauncherType(AutoLauncherType.NONE))
        this.dispatch(setAutoLaunchedTimes(undefined));
        this.dispatch(changeProfit(0))
        this.dispatch(changeGame(GameType.NONE))
        this.dispatch(changeViewGame(GameType.NONE))

      }
    })
  }

  public connect() {
    // console.log('inject', dataTransfer(DataKeyType.BALANCE))
    this.inject({ }, (state: StateType) => {
      // console.log('state.game.balance', state.game.balance)
      return {
        balance: state.game.balance,
        isRollEnd: state.roller.roundAllEnd,
      }
    })
    return this
  }
}

export default HeaderViewModel