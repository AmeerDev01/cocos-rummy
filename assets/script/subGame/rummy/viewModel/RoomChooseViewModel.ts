import { sourceManageSeletor } from "../index"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_RoomChoose } from "../components/Rummy_RoomChoose"
import { SKT_MAG_TYPE, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EnterGameVo, RoomInfo } from "../type"
import GameMainViewModel from "./GameMainViewModel"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"

@StoreInject(getStore())
class RoomChooseViewModel extends ViewModel<Rummy_RoomChoose, IProps, IEvent> {
  constructor() {
    super('Rummy_RoomChoose')
  }

  private gameMainViewModel: GameMainViewModel;

  protected begin() {

    this.setEvent({
      sendEnterRoom: (roomInfo: RoomInfo) => {
        // this.sendEnterRoomMsg(roomInfo);
        this.enterRoom();
      }
    })

    // rummyWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.LOGIN, bundlePkgName, (data: EnterGameVo) => {

    // })

  }

  public getGameMain() {
    return this.gameMainViewModel;
  }

  private sendEnterRoomMsg(roomInfo: RoomInfo) {
    if (roomInfo.upper > this.comp.props.gold) {
      return;
    }

    rummyWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.JOIN_ROOM, {
      roomId: roomInfo.roomId,
    })
  }

  private enterRoom() {
    this.gameMainViewModel = new GameMainViewModel().mountView(sourceManageSeletor()
      .getFile(PrefabPathDefine.GAME_MAIN).source).appendTo(this.viewNode).connect();
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        roomInfos: state.deskData.roomInfos,
        gold: state.deskData.gold,
      }
    })
    return this
  }
}

export default RoomChooseViewModel