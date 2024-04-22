import { sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import { IEvent, IProps, Qiuqiu_RoomChoose } from "../components/Qiuqiu_RoomChoose"
import config from "../config"
import { sourceManageSeletor } from "../index"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { changeDeskStatus, changeOperationPlayer, clearRoomData, playerBet, reconnectGameData, reconnectRecoverBet, updateGold } from "../store/action/game"
import { StateType } from "../store/reducer"
import { DeskStatus, EnterGameVo, MemberInfoVo, OperationType, ReconnectVo, RoomInfo, convertCardValue, convertOpType, genPlayer } from "../type"
import MainBoardViewModel from "./MainBoardViewModel"
import ModalBox from "../../../common/ModalBox"
import { getRoomUpper } from "../qiuqiu_tool"
import { EffectType } from "../../../utils/NodeIOEffect"
import GameRuleViewModel from "./GameRuleViewModel"

@StoreInject(getStore())
class RoomChooseViewModel extends ViewModel<Qiuqiu_RoomChoose, IProps, IEvent> {
  constructor() {
    super('Qiuqiu_RoomChoose')
  }
  public mainBoardViewModel: MainBoardViewModel
  public memberId: string
  public roomInfo: RoomInfo

  protected begin() {
    sktMsgListener.add(SKT_MAG_TYPE.AUTH, "room", (data) => {
      this.dispatch(clearRoomData(0));
      this.memberId = data.memberId
      const gold = data ? data.gold : 0;
      this.setProps({ roomMap: data.dominoRoomInfoVos })
      this.dispatch(updateGold(gold));
    })

    sktMsgListener.add(SKT_MAG_TYPE.JOIN_ROOM, "room", (data: EnterGameVo) => {
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
      },
      openGameRule: () => {
        new GameRuleViewModel().mountView(sourceManageSeletor()
          .getFile(PrefabPathDefine.prefabs_quiqui_modal).source).appendTo(this.viewNode, { effectType: EffectType.EFFECT1, isModal: true });
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
          { placeStr: "对不起，您不符合进入条件，是否进入系统匹配房间!" });
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

    config.afee = roomInfo.afee;
    this.roomInfo = roomInfo;
    sktInstance.sendSktMessage(SKT_MAG_TYPE.JOIN_ROOM, {
      memberId: this.memberId,
      gameId: config.gameId,
      roomId: this.roomInfo.roomId
    })
  }

  public enterGame(data: EnterGameVo) {

    // const myMemberId = config.isTest ? JSON.parse(localStorage.getItem("domino")).memberId : this.memberId;
    const myMemberId = this.memberId;
    const selfPlayer = data.list.find(item => item.memberId === myMemberId);
    selfPlayer.tableId = data.tableId;

    const onComplate = () => {
      data.list.forEach(item => {
        // const isSelf = item.memberId === JSON.parse(localStorage.getItem("domino")).memberId
        const isSelf = item.memberId === myMemberId
        const player = genPlayer(item);
        player.isSelf = isSelf;
        player.tableId = data.tableId;
        this.mainBoardViewModel.enterGame(player);
      })
    }
    if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
      this.mainBoardViewModel = new MainBoardViewModel(this.roomInfo, selfPlayer.tableId, onComplate, selfPlayer.cacheChairId, selfPlayer.memberId);
      this.mainBoardViewModel.mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_BOARD).source).appendTo(this.viewNode).connect();
    } else {
      onComplate();
    }
  }

  private convertDeskStatus(state: number) {
    if (state === 1) {
      return DeskStatus.COUNTDOWNING;
    } else if (state === 2) {
      return DeskStatus.PLAYING;
    }
  }

  private reconnectHandle(data: ReconnectVo) {
    config.isReconnect = true;
    this.roomInfo = this.comp.props.roomMap.find(v => v.roomId === data.roomId);
    config.afee = this.roomInfo.afee;
    const selfPlayer = data.qiuqiuMemBerInfoVo.find(item => item.memberId === this.memberId);
    selfPlayer.tableId = data.tableId;

    let deskStatus = this.convertDeskStatus(data.gameStage);
    // 发牌数量
    let dealCount = 0;
    if (data.gameStage === 3) {
      dealCount = 3;
      deskStatus = DeskStatus.PLAYING;
    } else if (data.gameStage === 4) {
      dealCount = 4;
      deskStatus = DeskStatus.PLAYING;
    }
    const onComplate = () => {
      data.qiuqiuMemBerInfoVo.forEach(v => {
        const isSelf = v.memberId === this.memberId;
        const player = genPlayer(v);
        player.tableId = data.tableId;
        player.isSelf = isSelf;
        player.gameData.opType = convertOpType(v.memberStatus, data.newBet)
        if (isSelf) {
          player.gameData.cards = v.pokers.map(v => convertCardValue(v.smallNum, v.bigNum))
          player.gameData.callAmount = data.currentPlayerAction.completion;
        } else {
          player.gameData.dealCardCount = dealCount;
        }
        player.gameData.isReady && (player.gameData.isGame = true)
        this.mainBoardViewModel.enterGame(player);

        this.dispatch(reconnectRecoverBet(player.uid, player.gameData.betAmount))
      })

      this.dispatch(reconnectGameData(data.newBet, data.pokerNum));
      // 这里设置开始游戏倒计时需要在切换状态之前
      if (deskStatus === DeskStatus.COUNTDOWNING) {
        this.mainBoardViewModel.beginGameCountdownHandle(data.seconds);
      }

      // 1.切换游戏状态
      this.dispatch(changeDeskStatus(deskStatus));

      if (deskStatus === DeskStatus.PLAYING) {
        this.dispatch(changeOperationPlayer(data.currentPlayerAction.memberId));
        // 这里设置出牌倒计时需要在切换状态之后
        this.mainBoardViewModel.startCountdown(data.currentPlayerAction.leftTime);
      }
      window.setTimeout(() => config.isReconnect = false, 200)
    }

    if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
      this.mainBoardViewModel = new MainBoardViewModel(this.roomInfo, selfPlayer.tableId, onComplate, selfPlayer.cacheChairId, selfPlayer.memberId);
      this.mainBoardViewModel.mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_BOARD).source).appendTo(this.viewNode).connect();
    } else {
      onComplate();
    }
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