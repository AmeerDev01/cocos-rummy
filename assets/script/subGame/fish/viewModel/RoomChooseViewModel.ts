; import { sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { global, lang } from "../../../hall"
import { Fish_RoomChoose, IEvent, IProps } from "../components/Fish_RoomChoose"
import config from "../config"
import { SKT_MAG_TYPE, fishWebSocketDriver } from "../socketConnect"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { EnterGameVo, RoomInfo } from "../type"

@StoreInject(getStore())
class RoomChooseViewModel extends ViewModel<Fish_RoomChoose, IProps, IEvent> {

  constructor() {
    super('Fish_RoomChoose')
  }
  protected begin() {
    fishWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.AUTH, config.name, (data: EnterGameVo, error) => {
      if (error) {
        global.closeSubGame({
          confirmContent: lang.write(k => k.InitGameModule.GameBoardInit)
        })
        return;
      }
      config.selfUserId = data.playerId;
      this.setProps({
        roomInfos: data.rooms
      })
    })

    if (config.testConfig.wsUrl) {
      const token = sys.localStorage.getItem("token");
      fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.AUTH, {
        token
      })
    } else if (!config.isTest) {
      fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.AUTH, {
        token: sys.localStorage.getItem("token"),
        gameId: config.gameId
      })
    }

    this.setEvent({
      enterRoom: (roomInfo: RoomInfo) => {
        if (config.isTest) {
        } else {
          fishWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.JOIN_ROOM, {
            roomId: roomInfo.roomId
          })
        }
      }
    })
  }

  protected unMountCallBack(): void {

  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        roomInfos: state.deskData.roomInfos
      }
    })
    return this
  }
}

export default RoomChooseViewModel