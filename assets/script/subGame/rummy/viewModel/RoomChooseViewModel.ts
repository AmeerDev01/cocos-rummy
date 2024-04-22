import { rummy_Audio, sourceManageSeletor } from "../index"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { IEvent, IProps, Rummy_RoomChoose } from "../components/Rummy_RoomChoose"
import { SKT_MAG_TYPE, rummyGameLogin, rummyWebSocketDriver } from "../socketConnect"
import { bundlePkgName } from "../sourceDefine"
import { getStore } from "../store"
import { StateType } from "../store/reducer"
import { JoinRoomVo, LoginVo, RoomInfo } from "../type"
import GameMainViewModel from "./GameMainViewModel"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import config from "../config"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { global, lang } from "../../../hall"
import { initData, initRoomInfo, updateGold } from "../store/action/game"
import { Schedule } from "../../../utils/Schedule"
import ModalBox from "../../../common/ModalBox"
import { verifyServerData } from "../dataVerifyTool"
import RuleViewModel from "./RuleViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { Game, game } from "cc"
import WebSocketStarter, { EVEVT_TYPE } from "../../../common/WebSocketStarter"

@StoreInject(getStore())
class RoomChooseViewModel extends ViewModel<Rummy_RoomChoose, IProps, IEvent> {

  private initFinishCallback: Function;

  /**背景音量 */
  private musicVolume = 1;
  /**音效音量 */
  private soundVolume = 1;
  private gameMainViewModel: GameMainViewModel;

  /**当前进入的房间信息 */
  private roomInfo: RoomInfo;
  /**是否点击进入房间 */
  private isClickRoomInfo = false;
  private joinRoomSchedule: Schedule;

  private indexRoom: string;
  private reconnect: boolean = false;

  constructor(initFinishCallback) {
    super('Rummy_RoomChoose')
    this.dispatch(initData(0))

    this.initFinishCallback = initFinishCallback;

    this.initVolume();

    this.listenerServerMsg();

    this.playMusic(SoundPathDefine.rummy_bg)
  }

  public getRoomInfo() {
    return this.roomInfo;
  }

  protected begin() {
    this.joinRoomSchedule = Schedule.build(this.comp, config.gameConfig.msgTimeout, () => {
      if (!this.gameMainViewModel || !this.gameMainViewModel.viewNode.isValid) {
        this.isClickRoomInfo = false;
      }
      const content = lang.write(k => k.WebSocketModule.SocketMsgTimeOut) + '-' + SKT_MAG_TYPE.JOIN_ROOM;
      ModalBox.Instance().show({
        content: content, type: 'Prompt'
      }, () => {
        return true
      })
    })

    this.setEvent({
      sendEnterRoom: (roomInfo: RoomInfo) => {
        if (config.isTest) {
          this.gameMainViewModel = new GameMainViewModel().mountView(sourceManageSeletor()
            .getFile(PrefabPathDefine.GAME_MAIN).source).appendTo(this.viewNode).connect();
        } else {
          this.sendEnterRoomMsg(roomInfo);
        }
      },
      beginHandler: () => {
        this.fastEnterGame();
      },
      onQuitGame: () => {
        this.quitGame();
      },
      onOpenRulePanel: () => {
        this.openRulePanel();
      }
    })

    WebSocketStarter.Instance().eventListener.add(EVEVT_TYPE.RECONNECT_SUCCESS, bundlePkgName, () => {
      this.sendEnterRoomMsg(this.roomInfo);
    })
  }

  public getGameMain() {
    return this.gameMainViewModel;
  }

  private listenerServerMsg() {
    if (config.isTest) {
      // 初始化完成回调
      this.initFinishCallback();
    } else {
      rummyWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.LOGIN, bundlePkgName, (data: LoginVo) => {
        config.memberId = data.memberId;
        this.indexRoom = data.indexRoom;
        this.dispatch(updateGold(data.gold));
        this.dispatch(initRoomInfo(data.rooms))
        if (data.indexRoom) {
          const roomInfo = data.rooms.find(v => v.id === this.indexRoom)
          if (roomInfo) {
            this.reconnect = true;
            this.sendEnterRoomMsg(roomInfo)
          }
        } else {
          // 初始化完成回调
          this.initFinishCallback();
        }
      })

      rummyGameLogin();

      rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.JOIN_ROOM, bundlePkgName, (data: JoinRoomVo, error: string) => {
        if (error) {
          global.closeSubGame({ confirmContent: error + '-' + SKT_MAG_TYPE.JOIN_ROOM });
          return;
        }
        if (!data || !data.rummyMemberInfo) {
          this.reconnect = false;

          const content = lang.write(k => k.WebSocketModule.ErrorGeneral) + '-' + SKT_MAG_TYPE.JOIN_ROOM;
          ModalBox.Instance().show({
            content: content, type: 'Prompt'
          }, () => {
            return true
          })

          this.joinRoomSchedule && this.joinRoomSchedule.stop();
          return;
        }
        this.enterRoom(data);
      })

      rummyWebSocketDriver.sktMsgListener.add(SKT_MAG_TYPE.UPDATE_GOLD, bundlePkgName, (data: any) => {
        if (data) {
          this.dispatch(updateGold(data))
        }
      })
    }
  }

  private sendEnterRoomMsg(roomInfo: RoomInfo) {
    if (roomInfo.lower > this.comp.props.gold) {
      global.openShop();
      return;
    }

    if (this.joinRoomSchedule.isRunning()) {
      return;
    }

    this.isClickRoomInfo = true;
    this.roomInfo = roomInfo;
    rummyWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.JOIN_ROOM, {
      roomId: roomInfo.id,
    })

    this.joinRoomSchedule.start();
  }

  private getCanEnterRoom() {
    const gold = this.comp.props.gold;
    for (let i = this.comp.props.roomInfos.length - 1; i >= 0; i--) {
      const roomInfo = this.comp.props.roomInfos[i];
      if (gold >= roomInfo.lower) {
        return roomInfo;
      }
    }
    return undefined;
  }

  private fastEnterGame() {
    let roomInfo = this.getCanEnterRoom();
    if (!roomInfo) {
      global.openShop();
      return;
    }
    this.sendEnterRoomMsg(roomInfo);
  }

  private quitGame() {
    global.closeSubGame();
  }

  private enterRoom(data: JoinRoomVo) {
    if (!this.isClickRoomInfo && !this.reconnect) {
      this.joinRoomSchedule && this.joinRoomSchedule.stop();
      console.log("not enter room =====================");
      return;
    }

    if (!verifyServerData(SKT_MAG_TYPE.JOIN_ROOM, data)) {
      this.joinRoomSchedule && this.joinRoomSchedule.stop();
      return;
    }

    if (this.gameMainViewModel && this.gameMainViewModel.viewNode.isValid) {
      this.gameMainViewModel.joinRoom(this.roomInfo, data);
      this.joinRoomSchedule && this.joinRoomSchedule.stop();
      if (this.reconnect) {
        this.reconnect = false;
        this.initFinishCallback();
      }
    } else {
      this.gameMainViewModel = new GameMainViewModel().mountView(sourceManageSeletor()
        .getFile(PrefabPathDefine.GAME_MAIN).source)
        .bindDoneHandler(() => {
          this.gameMainViewModel.joinRoom(this.roomInfo, data);
          this.joinRoomSchedule && this.joinRoomSchedule.stop();
          if (this.reconnect) {
            this.reconnect = false;
            this.initFinishCallback();
          }
        })
        .appendTo(this.viewNode)
        .connect()
        .setExitRoomCallback(() => {
          this.isClickRoomInfo = false;
        });
    }

  }

  private openRulePanel() {
    new RuleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULE_PANEL).source).appendTo(this.viewNode, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    })
  }

  private initVolume() {
    let value = localStorage.getItem('rummy.music.volume');
    if (value) {
      this.setMusicVolume(Number(value));
    }

    value = localStorage.getItem('rummy.sound.volume');
    if (value) {
      this.setSoundVolume(Number(value));
    }
  }

  public getMusicVolume() {
    return this.musicVolume;
  }

  public getSoundVolume() {
    return this.soundVolume;
  }

  public setMusicVolume(volume: number) {
    this.musicVolume = volume;
    localStorage.setItem('rummy.music.volume', volume.toString());
  }

  public setSoundVolume(volume: number) {
    this.soundVolume = volume;
    localStorage.setItem('rummy.sound.volume', volume.toString());
  }

  public playMusic(sound: SoundPathDefine) {
    if (this.musicVolume <= 0) {
      rummy_Audio.stop();
    } else {
      rummy_Audio.play(sound, true, this.musicVolume)
    }
  }

  public playSound(sound: SoundPathDefine) {
    if (this.soundVolume > 0) {
      rummy_Audio.playOneShot(sound, this.soundVolume)
    }
  }

  protected unMountCallBack(): void {
    this.joinRoomSchedule && this.joinRoomSchedule.stop();
    this.joinRoomSchedule = undefined;

    this.dispatch(initData(0))
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