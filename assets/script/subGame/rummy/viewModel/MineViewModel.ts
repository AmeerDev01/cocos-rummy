import { Vec3 } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_Mine } from "../components/Rummy_Mine"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { JoinRoomVo } from "../type"

@StoreInject(getStore())
class MineViewModel extends ViewModel<Rummy_Mine, IProps, IEvent> {

  private seatIndex: number;

  constructor(seatIndex: number) {
    super('Rummy_Mine')
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
        winloss: player ? player.winloss : 0,
        status: player ? player.status : 0,
        isBanker: player ? player.isBanker : false,
        isWin: player ? player.isWin : false,
        seatIndex: this.seatIndex,
        flowInfo: state.deskData.flowInfo,
      }
    })
    return this
  }
}

export default MineViewModel