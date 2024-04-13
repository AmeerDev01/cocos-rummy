import { Vec3 } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Head } from "../components/Rummy_Head"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EnterGameVo } from "../type"

@StoreInject(getStore())
class HeadViewModel extends ViewModel<Rummy_Head, IProps, IEvent> {

  private seatIndex: number;

  constructor(seatIndex: number) {
    super('Rummy_Head')
    this.seatIndex = seatIndex;
  }

  protected begin() {
  }

  public setPos(pos: Vec3) {
    this.viewNode.setPosition(pos);
  }

  public setScale(scale: Vec3) {
    this.viewNode.setScale(scale);
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      const player = state.deskData.players[this.seatIndex];
      return {
        uid: player ? player.uid : '',
        nickName: player ? player.nickName : '',
        gold: player ? player.glodAmount : 0,
        head: player ? player.head : -1,
        seatIndex: this.seatIndex,
        flowInfo: state.deskData.flowInfo,
      }
    })
    return this
  }
}

export default HeadViewModel