; import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Domino_Record, IEvent, IProps } from "../components/Domino_Record"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class RecordViewModel extends ViewModel<Domino_Record, IProps, IEvent> {
  constructor() {
    super('Domino_Record')
  }
  protected begin() {
  }



  public connect() {
    this.inject({}, (state: StateType) => {
      const player = state.deskData.playerMap[0];
      return {
        deskStatus: state.deskData.statue,
        outCardItem: state.deskData.outCardItem,
        cardIList: player ? player.gameData.cardIList : [],
      }
    })
    return this
  }
}

export default RecordViewModel