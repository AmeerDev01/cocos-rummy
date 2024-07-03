import { Node, sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { Domino_RoomChoose, IProps, IEvent } from "../components/Domino_RoomChoose"
import MainBoardViewModel from "./MainBoardViewModel"
import { sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../../utils/NodeIOEffect"
import { getStore } from "../store"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import config from "../config"
import { CardRecordsVo, Countdown, DeskStatus, MemberInfoVo, Player, PlayerSatus, ReconnectVo, RoomInfo, convertAzimuth, genCardItem, genPlayer, getRoomUpper } from "../type"
import { changeDeskStatus, changeOutCardPlayer, clearRoomData, showOutCard, updateGold } from "../store/action/game"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import ModalBox from "../../../common/ModalBox"

@StoreInject(getStore())
class RoomChooseViewModel extends ViewModel<Domino_RoomChoose, IProps, IEvent> {
  constructor() {
    super('Domino_RoomChoose')
  }
  public mainBoardViewModel: MainBoardViewModel
  public memberId: string
  public roomId: string
  public roomInfo: RoomInfo

  protected begin() {
    sktMsgListener.add(SKT_MAG_TYPE.AUTH, "room", (data) => {
      // sys.localStorage.setItem("domino", JSON.stringify({ memberId: data.memberId }))
      this.dispatch(clearRoomData(0));
      this.memberId = data.memberId
      const gold = data ? data.gold : 0;
      this.setProps({ roomMap: data.dominoRoomInfoVos })
      this.dispatch(updateGold(gold));
    })

    sktMsgListener.add(SKT_MAG_TYPE.JOIN_ROOM, "room", (data) => {
      this.enterGame(data)
    })

    if (config.testConfig.wsUrl) {
      const token = sys.localStorage.getItem("tokentest");
      sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, {
        token
      })
    } else {
      sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, {
        token: sys.localStorage.getItem("token"),
        gameId: config.gameId
      })
    }

    sktMsgListener.add(SKT_MAG_TYPE.RECONNECT, "room", (data: ReconnectVo) => {
      this.reconnectHandle(data);
    })
    sktMsgListener.add(SKT_MAG_TYPE.GOLD_CHANGE, "room", (data: number) => {
      this.dispatch(updateGold(data));
    })

    this.setEvent({
      beginHandler: () => {
        //快速加入
        this.fastEnterGame();
      },
      clickRoomHandler: (roomInfo: RoomInfo) => {
        this.clickEnterGame(roomInfo);
      }
    })
  }

  private clickEnterGame(roomInfo: RoomInfo) {
    const gold = this.comp.props.gold;
    if (roomInfo.lower <= gold && gold <= getRoomUpper(roomInfo)) {
      this.joinGame(roomInfo);
    } else {
      roomInfo = this.getCanEnterRoom();

      if (!roomInfo) {
        let content = lang.write(k => k.palyingModule.RechangeGlod, {},
          { placeStr: "对不起，您的金币不足，请充值!" });
        ModalBox.Instance().show({
          content: content, type: 'Prompt'
        }, () => {
          global.openShop();
          return true
        })
      } else {
        let content = lang.write(k => k.palyingModule.ExceedUpper1, {},
          { placeStr: "对不起，您不符合进入条件，是否进入{0}!" });
        content = content.format(roomInfo.roomName);

        ModalBox.Instance().show({
          content: content, type: 'Confirm'
        }, () => {
          this.joinGame(roomInfo);
          return true
        }, () => {
          return true
        })
      }

    }
  }

  private getCanEnterRoom() {
    const gold = this.comp.props.gold;
    return this.comp.props.roomMap.find(v => v.lower <= gold && gold <= getRoomUpper(v));
  }

  private fastEnterGame() {
    const gold = this.comp.props.gold;
    const maxRoomInfo = this.comp.props.roomMap[this.comp.props.roomMap.length - 1];
    let roomInfo = this.getCanEnterRoom();
    if (!roomInfo) {
      // 如果余额超过了最大金额房间，直接进入到最后一个房间
      if (gold > maxRoomInfo.upper || maxRoomInfo.upper === -1) {
        roomInfo = maxRoomInfo;
      }
    }
    this.joinGame(roomInfo);
  }

  private joinGame(roomInfo: RoomInfo) {
    if (!roomInfo) {
      global.openShop();
      return;
    }

    this.roomInfo = roomInfo;
    sktInstance.sendSktMessage(SKT_MAG_TYPE.JOIN_ROOM, {
      memberId: this.memberId,
      gameId: config.gameId,
      roomId: this.roomInfo.roomId
    })
  }

  public enterGame(data: Array<MemberInfoVo>) {

    // const myMemberId = config.isTest ? JSON.parse(localStorage.getItem("domino")).memberId : this.memberId;
    const myMemberId = this.memberId;
    const selfPlayer = data.find(item => item.memberId === myMemberId);

    const onComplate = () => {
      data.forEach(item => {
        // const isSelf = item.memberId === JSON.parse(localStorage.getItem("domino")).memberId
        const isSelf = item.memberId === myMemberId
        const player = genPlayer(item);
        player.isSelf = isSelf;
        this.mainBoardViewModel.enterGame(player);
      })
    }
    if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
      this.mainBoardViewModel = new MainBoardViewModel();
      this.mainBoardViewModel.roomId = this.roomId;
      this.mainBoardViewModel.roomInfo = this.roomInfo;
      this.mainBoardViewModel.memberId = this.memberId;
      this.mainBoardViewModel.myChairId = selfPlayer ? selfPlayer.chairId : 1;
      this.mainBoardViewModel.tableId = selfPlayer ? selfPlayer.tableId : '';
      this.mainBoardViewModel.onComplate = onComplate;
      this.mainBoardViewModel.mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_BOARD).source).appendTo(this.viewNode).connect();
    } else {
      onComplate();
    }
  }

  private reconnectHandle(data: ReconnectVo) {
    this.roomId = data.roomId;
    this.roomInfo = this.comp.props.roomMap.find(v => v.roomId === this.roomId);
    const selfPlayer = data.dominoMemBerInfoVo.find(item => item.memberId === this.memberId);

    const onComplate = () => {
      const deskStatus = this.convertDeskStatus(data.gameType);
      data.dominoMemBerInfoVo.forEach(v => {
        const isSelf = v.memberId === this.memberId;
        const player = genPlayer(v);
        if (data.membersCards && data.membersCards[player.uid]) {
          player.gameData.remainCardCount = data.membersCards[player.uid];
        }
        player.isSelf = isSelf;
        this.mainBoardViewModel.enterGame(player);
      })

      data.cardRecordsVos && data.cardRecordsVos.forEach(v => {
        this.reconnectGenCardItem(v);
      })

      let readyCountdown: Countdown;
      // 这里设置开始游戏倒计时需要在切换状态之前
      if (deskStatus === DeskStatus.COUNTDOWNING) {
        this.mainBoardViewModel.comp.setBeginGameCountdownCount(data.seconds);
        readyCountdown = {
          time: data.seconds,
          seatIndex: -1,
          timestamp: Date.now(),
        }
      }

      // 1.切换游戏状态
      this.dispatch(changeDeskStatus(deskStatus, readyCountdown));

      if (deskStatus === DeskStatus.PLAYING) {
        // 2.构建自己手牌
        this.reconnectDeal(data);
        // 3.切换当前应该操作的用户
        this.dispatch(changeOutCardPlayer(this.mainBoardViewModel.getPlayer(data.thisMemberId).seatIndex));
        // 这里设置出牌倒计时需要在切换状态之后
        this.mainBoardViewModel.startCountdown(data.seconds);
      }
    }

    if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
      this.mainBoardViewModel = new MainBoardViewModel();
      this.mainBoardViewModel.roomId = this.roomId;
      this.mainBoardViewModel.roomInfo = this.roomInfo;
      this.mainBoardViewModel.memberId = this.memberId;
      this.mainBoardViewModel.myChairId = selfPlayer.chairId;
      this.mainBoardViewModel.tableId = selfPlayer.tableId;
      this.mainBoardViewModel.onComplate = onComplate;
      this.mainBoardViewModel.mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_BOARD).source).appendTo(this.viewNode).connect();
    } else {
      onComplate();
    }
  }

  private convertDeskStatus(gameType: number) {
    if (gameType === 1) {
      return DeskStatus.COUNTDOWNING
    } else if (gameType === 2) {
      return DeskStatus.PLAYING
    }
  }

  private reconnectGenCardItem(cardRecordsVo: CardRecordsVo) {
    if (cardRecordsVo.card < 0 || cardRecordsVo.card === undefined) {
      return;
    }
    const cardItem = genCardItem(cardRecordsVo.card);
    cardItem.azimuth = convertAzimuth(cardRecordsVo.position);
    cardItem.seatIndex = this.mainBoardViewModel.getPlayer(cardRecordsVo.memberId).seatIndex;
    cardItem.isReconnect = true;
    this.dispatch(showOutCard(cardItem));
  }

  private reconnectDeal(data: ReconnectVo) {
    this.mainBoardViewModel.seatMine.comp.reconnectDeal();
  }

  protected unMountCallBack(): void {
    this.mainBoardViewModel = undefined;
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        gold: state.deskData.gold
      }
    })
    return this
  }
}

export default RoomChooseViewModel