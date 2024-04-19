import { Node, Vec3 } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { global, lang } from "../../../hall"
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import { EffectType } from "../../../utils/NodeIOEffect"
import { Domino_MainBoard, IEvent, IProps } from "../components/Domino_MainBoard"
import { Domino_SetPanel, IEvent as SPIEvent, IProps as SPIProps, IState as SPIState } from "../components/Domino_SetPanel"
import config from "../config"
import { playDead, playSend, playWin, sourceManageSeletor } from "../index"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { changeDeskStatus, changeOutCardPlayer, changePlayerStatus, clearRoomData, deal, initSelfSeat, joinSeat, outCountdown, quitSeat, sendBalance, setWinlossType, showOutCard, updatePlayerLewat } from "../store/action/game"
import { StateType } from "../store/reducer"
import { BalancePlayer, CardItem, Countdown, DeskStatus, DominoDeductMoneyVo, GameStateVo, OutCardDataSo, OutCardDataVo, Player, PlayerSatus, PushDealerVo, RoomInfo, SeatPosition, convertAzimuth, genCardItem } from "../type"
import BalancePanelViewModel from "./BalancePanelViewModel"
import EndingViewModel from "./EndingViewModel"
import MineViewModel from "./MineViewModel"
import OpponentViewModel from "./OpponentViewModel"
import RecordViewModel from "./RecordViewModel"

@StoreInject(getStore())
class MainBoardViewModel extends ViewModel<Domino_MainBoard, IProps, IEvent> {
  constructor() {
    super('Domino_MainBoard')
  }

  public onComplate: () => void;
  public seatMine: MineViewModel
  public seatRight: OpponentViewModel
  public seatTop: OpponentViewModel
  public seatLeft: OpponentViewModel
  public distributeCards: OpponentViewModel
  public playerMap: Player[] = []
  public myChairId: number
  public roomId: string
  public memberId: string
  public tableId: string
  public lower: number
  public upper: number
  public roomInfo: RoomInfo

  /**出牌倒计时 */
  private outCountdown = 0;

  private balancePanelViewModel: BalancePanelViewModel;
  private endingViewModel: EndingViewModel;
  // 是否可以出牌
  private isCanOutCard = false;

  private TaskScheduler

  protected begin() {
    this.listenerSocket();
    this.seatMine = new MineViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MINE_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).connect()
    this.seatLeft = new OpponentViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.LEFT_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).initSeatIndex(1).connect()
    this.seatTop = new OpponentViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.TOP_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).initSeatIndex(2).connect()
    this.seatRight = new OpponentViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RIGHT_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).initSeatIndex(3).connect()

    const setPanel = new BaseViewModel<Domino_SetPanel, SPIState, SPIProps, SPIEvent>('Domino_SetPanel').mountView(sourceManageSeletor().getFile(PrefabPathDefine.SET_PANEL).source).appendTo(this.viewNode)
    new RecordViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RECORD).source).appendTo(this.viewNode).connect();
    this.setEvent({
      openSetPanel: (toggle) => {
        setPanel.comp.showToggle(toggle)
      },
      openShopPanel: () => {
        global.openShop();
      },
      flyCard: (cardPanelNode: Node, cardNode: Node, seatIndex: number) => {
        this.deal(seatIndex);
        // 自己飞牌的终点是牌插入的位置
        if (seatIndex === 0) {
          this.seatMine.comp.deal((endPosition: Vec3) => {
            this.comp.flyCard(cardPanelNode, cardNode, endPosition, seatIndex);
          });
        } else {
          this.comp.flyCard(cardPanelNode, cardNode, this.getEndPosition(seatIndex), seatIndex);
        }

      },
      getSeatPosition: (seatIndex: number) => {
        return this.getSeatPosition(seatIndex);
      },
      onQuitRoom: () => {
        this.quitRoom();
      },
      dealerBeginOut: () => {
        this.dispatch(changeDeskStatus(DeskStatus.PLAYING, null));
        // 下一个出牌的用户
        const nextPlayer = this.comp.props.playerMap.find(v => v && v.gameData.isMaster);
        this.dispatch(changeOutCardPlayer(nextPlayer.seatIndex));
        // 开始倒计时
        this.startCountdown(8);
      }
    })

    setPanel.setEvent({
      onQuitGame: () => {
        this.quitRoom();
      },
      onChangeRoom: () => {
        // this.changeRoom();
      }
    })

    this.seatMine.setEvent({
      onReady: () => {
        this.ready();
      }
    })

    this.onComplate && this.onComplate();
  }

  private ready() {
    sktInstance.sendSktMessage(SKT_MAG_TYPE.READY, {
      roomId: this.roomId,
      tableId: this.tableId,
      memberId: this.memberId
    })
  }

  private isGameIn() {
    if (this.getPlayer(this.memberId).gameData.state === PlayerSatus.WAITING) {
      return false;
    }
    const notGameIn = this.comp.props.statue === DeskStatus.WAITING || this.comp.props.statue === DeskStatus.CLSOE;

    if (notGameIn) {
      return false;
    }

    if (this.comp.props.statue === DeskStatus.COUNTDOWNING && this.comp.getBeginGameCountdownCount() > 1) {
      return false;
    }

    this.dispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "您正在游戏中，退出失败，请游戏结束后重试。" }) }))
    return true;
  }

  public quitRoom() {
    // 游戏中不能退出游戏
    if (this.isGameIn()) {
      return;
    }
    sktInstance.sendSktMessage(SKT_MAG_TYPE.QUIT_ROOM, {
      memberId: this.memberId,
      tableId: this.tableId,
    });
    this.comp.clearData();
    this.unMount();
    this.t && window.clearInterval(this.t);
    this.dispatch(clearRoomData(0));
  }

  private changeRoom() {
    // 游戏中不能退出游戏
    if (this.isGameIn()) {
      return;
    }

    sktInstance.sendSktMessage(SKT_MAG_TYPE.CHANGE_ROOM, {
      gameId: config.gameId,
      tableId: this.tableId,
      roomId: this.roomId,
    });

    this.comp.clearData();
    this.t && window.clearInterval(this.t);
    this.dispatch(clearRoomData(0));

  }

  public enterGame(player: Player) {
    if (player.isSelf) {
      this.dispatch(initSelfSeat(player))
      if (player.gameData.state === PlayerSatus.WAITING) {
        this.ready();
        // // 进入房间之后自动准备
        // window.setTimeout(() => {
        // }, 50);
      }
    } else {
      this.dispatch(joinSeat(this.getPlayerSeatPositionByChairId(player.chairId), player))
    }
  }

  private deal(seatIndex: number) {
    seatIndex === 1 && this.seatLeft.comp.deal();
    seatIndex === 2 && this.seatTop.comp.deal();
    seatIndex === 3 && this.seatRight.comp.deal();
  }

  private getEndPosition(seatIndex: number) {
    if (seatIndex === 1) {
      return this.seatLeft.comp.node.getChildByName('props_Layout_cards_handCards').position;
    } else if (seatIndex === 2) {
      return this.seatTop.comp.node.getChildByName('props_Layout_cards_handCards').position;
    } else if (seatIndex === 3) {
      return this.seatRight.comp.node.getChildByName('props_Layout_cards_handCards').position;
    }
  }

  private getSeatPosition(seatIndex: number) {
    if (seatIndex === 0) {
      return this.seatMine.comp.node.getChildByName('spr_bg').position;
    } else if (seatIndex === 1) {
      return this.seatLeft.comp.node.getChildByName('spr_bg').position;
    } else if (seatIndex === 2) {
      return this.seatTop.comp.node.getChildByName('spr_bg').position;
    } else if (seatIndex === 3) {
      return this.seatRight.comp.node.getChildByName('spr_bg').position;
    }
  }

  /**通过chairId，结合自身方向获取响应的坐位方向 */
  private getPlayerSeatPositionByChairId(chairId: number): SeatPosition {
    let seatList = []
    switch (this.myChairId) {
      case 1: seatList = [SeatPosition.DOWN, SeatPosition.LEFT, SeatPosition.TOP, SeatPosition.RIGHT]; break;
      case 2: seatList = [SeatPosition.RIGHT, SeatPosition.DOWN, SeatPosition.LEFT, SeatPosition.TOP]; break;
      case 3: seatList = [SeatPosition.TOP, SeatPosition.RIGHT, SeatPosition.DOWN, SeatPosition.LEFT]; break;
      case 4: seatList = [SeatPosition.LEFT, SeatPosition.TOP, SeatPosition.RIGHT, SeatPosition.DOWN]; break;
    }
    return seatList[--chairId]
  }
  /**
   * 获取下一个要等待动作的用户
   * @param lastUid 上一个在动的用户
   */
  public getNextNativePlayer(lastUid?: string) {
    const playerViewModelMap: Array<MineViewModel | OpponentViewModel> = [this.seatMine, this.seatLeft, this.seatTop, this.seatRight]
    let thisIndex = 0
    if (lastUid) {
      let lastIndex = playerViewModelMap.findIndex(item => item.comp.props['uid'] === lastUid)
      if (lastIndex === 3) {
        thisIndex = 0
      } else {
        thisIndex++
      }
      return playerViewModelMap[thisIndex]
    } else {
      return playerViewModelMap.find(item => item.comp.props['isMaster'])
    }
  }

  protected unMountCallBack(): void {
    this.removeListener();
    this.t && window.clearInterval(this.t);
  }

  private removeListener() {
    sktMsgListener.remove(SKT_MAG_TYPE.READY);
    sktMsgListener.remove(SKT_MAG_TYPE.BEGIN_GAME_COUNTDOWN);
    sktMsgListener.remove(SKT_MAG_TYPE.PUSH_DEALER);
    sktMsgListener.remove(SKT_MAG_TYPE.PUSH_DEAL);
    sktMsgListener.remove(SKT_MAG_TYPE.OUT_CARD);
    sktMsgListener.remove(SKT_MAG_TYPE.BALANCE);
    sktMsgListener.remove(SKT_MAG_TYPE.QUIT_ROOM);
    sktMsgListener.remove(SKT_MAG_TYPE.CHANGE_ROOM);
  }

  private listenerSocket() {
    sktMsgListener.add(SKT_MAG_TYPE.READY, 'room', (data) => {
      const gameData = this.getPlayerGameData(data.memberId);
      gameData.state = PlayerSatus.READY;
      this.dispatch(changePlayerStatus(data.memberId, gameData))
    });

    // sktMsgListener.add(SKT_MAG_TYPE.BEGIN_GAME_COUNTDOWN, 'room', (data) => {
    //   this.dispatch(changeDeskStatus(DeskStatus.COUNTDOWNING));
    // });
    sktMsgListener.add(SKT_MAG_TYPE.PUSH_DEALER, 'room', (data: PushDealerVo) => {
      const gameData = this.getPlayerGameData(data.villageId);
      gameData.isMaster = true;
      this.dispatch(changePlayerStatus(data.villageId, gameData))
    });
    sktMsgListener.add(SKT_MAG_TYPE.GAME_STATE_CHANGE, 'room', (data: GameStateVo) => {
      // 开始游戏倒计时
      if (data.gameState === 1) {
        this.comp.setBeginGameCountdownCount(data.seconds);
        this.dispatch(changeDeskStatus(DeskStatus.COUNTDOWNING, {
          time: data.seconds,
          seatIndex: -1,
          timestamp: Date.now()
        }));
      }
    });

    sktMsgListener.add(SKT_MAG_TYPE.PUSH_DEAL, 'room', (data: []) => {
      this.balancePanelViewModel && this.balancePanelViewModel.unMount();
      this.balancePanelViewModel = null;
      this.endingViewModel && this.endingViewModel.unMount();
      this.endingViewModel = null;

      const cardItems = data.map(v => genCardItem(v))
      this.dispatch(deal(cardItems));
      this.dispatch(changeDeskStatus(DeskStatus.DISTRIBUTE, null));
    });
    sktMsgListener.add(SKT_MAG_TYPE.OUT_CARD, 'room', (data: OutCardDataVo) => {
      // 停止倒计时
      this.startCountdown(0);
      this.dispatch(changeDeskStatus(DeskStatus.PLAYING, null));
      // 出牌的用户
      const outPlayer = this.comp.props.playerMap.find(v => v && v.chairId === data.chairId)

      if (data.card >= 0) {
        // 出的牌
        const cardItem = genCardItem(data.card)
        cardItem.seatIndex = outPlayer.seatIndex;
        cardItem.azimuth = convertAzimuth(data.position);
        this.dispatch(showOutCard(cardItem));

        playSend();
      } else {
        this.flyGold(data.dominoDeductMoneyVo);

        this.dispatch(updatePlayerLewat(data.dominoMemBerInfo.memberId, data.dominoMemBerInfo.lewatPokes));
      }

      // 下一个出牌的用户
      const nextPlayer = this.getPlayer(data.dominoNext.memberId);
      // 设置是否
      this.isCanOutCard = data.dominoNext.memberId === this.memberId;
      this.dispatch(changeOutCardPlayer(nextPlayer.seatIndex));

      // 开始倒计时
      this.startCountdown(data.dominoNext.leftTime);
    });
    sktMsgListener.add(SKT_MAG_TYPE.BALANCE, 'room', (data: BalancePlayer[]) => {
      // 停止倒计时
      this.startCountdown(0);
      this.openBalancePanel(data);
    });

    sktMsgListener.add(SKT_MAG_TYPE.QUIT_ROOM, 'room', (data) => {
      this.pushQuitRoom(data.memberId);
    });
    sktMsgListener.add(SKT_MAG_TYPE.CHANGE_ROOM, 'room', (data) => {
      this.pushQuitRoom(data.memberId);
    });
  }

  private pushQuitRoom(memberId) {
    // if (this.memberId === memberId) {
    //   this.comp.clearData();
    //   this.unMount();
    //   this.dispatch(clearRoomData(0));
    // } else {
    this.dispatch(quitSeat(memberId));

    if (this.comp.props.statue === DeskStatus.COUNTDOWNING) {
      // 小于2人了，暂停倒计时
      const roomLength = this.comp.props.playerMap.filter(v => v).length
      if (roomLength < 2) {
        this.dispatch(changeDeskStatus(DeskStatus.WAITING, null));
      }
    }

    // }
  }

  public getPlayer(memberId: string) {
    return this.comp.props.playerMap.find(v => v && v.uid === memberId)
  }

  private flyGold(dominoDeductMoneyVo: DominoDeductMoneyVo) {
    if (dominoDeductMoneyVo) {
      const startIndex = this.getPlayer(dominoDeductMoneyVo.lossMemberId).seatIndex;
      const endIndex = this.getPlayer(dominoDeductMoneyVo.winMemberId).seatIndex;
      this.comp.flyGold(startIndex, endIndex, () => {
        this.dispatch(setWinlossType({
          winloss: dominoDeductMoneyVo.money,
          lossSeatIndex: startIndex,
          winSeatIndex: endIndex,
        }));
      });
    }
  }

  private changeNextPlayer(memberId: number) {
    this.dispatch(changeDeskStatus(DeskStatus.PLAYING, null));
    // 下一个出牌的用户
    // const nextPlayer = this.comp.props.playerMap.find(v => v && v.uid === memberId);
    // this.dispatch(changeOutCardPlayer(nextPlayer.seatIndex));
    // // 开始倒计时
    // this.startCountdown(data.dominoNext.leftTime);
  }

  private getPlayerGameData(memberId: string) {
    const player = this.comp.props.playerMap.find(v => v && v.uid === memberId);
    const gameData = { ...player.gameData }
    return gameData;
  }

  private convertPosition(azimuth: number) {
    return azimuth + 1;
  }

  /**出牌 */
  public sendOutCard(cardItem: CardItem) {
    if (!this.isCanOutCard) {
      console.log('你当前不能出牌')
    };
    if (cardItem.azimuth) {
      const outCardLength = this.comp.props.outCardItem.length
      cardItem.azimuth = outCardLength === 0 ? 2 : cardItem.azimuth;
    }
    const player = this.comp.props.playerMap[cardItem.seatIndex];
    const poker = cardItem.value >= 0 ? cardItem.value : undefined;

    let outCard: OutCardDataSo = {
      gameId: config.gameId + '',
      tableId: player.tableId,
      chairId: player.chairId,
      position: this.convertPosition(cardItem.azimuth),
      poker: poker,
      memberId: player.uid,
    }

    sktInstance.sendSktMessage(SKT_MAG_TYPE.OUT_CARD, outCard)
  }

  private t = 0;
  /**开始出牌倒计时 */
  public startCountdown(count: number) {
    this.outCountdown = count;
    this.t && window.clearInterval(this.t);
    if (this.outCountdown > 0) {
      this.countdown(this.outCountdown);
      this.t = window.setInterval(() => {
        this.countdown(--this.outCountdown);
        if (this.outCountdown <= 0) {
          window.clearInterval(this.t);
        }
      }, 1000);
    } else {
      this.countdown(this.outCountdown);
    }
  }

  private countdown(count) {
    if (this.comp && this.comp.isValid) {
      const seatIndex = this.comp.props.currActiveSeatIndex;
      const coutndown: Countdown = {
        time: count,
        seatIndex: seatIndex
      }
      this.dispatch(outCountdown(coutndown));
    } else {
      this.t && window.clearInterval(this.t);
    }
  }

  private openEndingOdds(odds: number, done) {
    window.setTimeout(() => {
      if (this.viewNode && this.viewNode.isValid) {
        this.endingViewModel && this.endingViewModel.unMount();
        this.endingViewModel = null;
        this.endingViewModel = new EndingViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.GAME_ENDING_ODDS).source)
          .appendTo(this.viewNode, { effectType: EffectType.EFFECT1 }).setProps({ odds: odds }).connect();
        done();
      }
    }, 2000)
  }

  private openBalancePanel(balances: BalancePlayer[]) {
    const myBalance = balances.find(v => v.memberId === this.memberId);
    const winloss = myBalance.count;
    this.dispatch(sendBalance(balances));

    this.openEndingOdds(myBalance.odds, () => {

      const prefabPath = winloss > 0 ? PrefabPathDefine.WIN_BALANCE_PANEL : PrefabPathDefine.LOSE_BALANCE_PANEL;
      window.setTimeout(() => {
        winloss > 0 ? playWin() : playDead();
        this.dispatch(changeDeskStatus(DeskStatus.CLSOE, null));
        if (this.viewNode && this.viewNode.isValid) {
          this.endingViewModel && this.endingViewModel.unMount();
          this.endingViewModel = null;

          this.balancePanelViewModel && this.balancePanelViewModel.unMount();
          this.balancePanelViewModel = null;
          this.balancePanelViewModel = new BalancePanelViewModel().mountView(sourceManageSeletor().getFile(prefabPath).source)
            .appendTo(this.viewNode, { effectType: EffectType.EFFECT1 })
            .setProps({
              balancePlayers: balances
            })
            .setEvent({
              onReady: (time: boolean) => {
                // 余额不足，如果是倒计时结束了，就退出游戏，如果是手动点击继续，就弹出商城
                if (this.comp.props.gold < this.roomInfo.lower) {
                  if (time) {
                    this.quitRoom();
                  } else {
                    global.openShop();
                  }
                  return;
                }
                this.dispatch(changeDeskStatus(DeskStatus.WAITING, null));
                this.ready();
              },
              onQuitRoom: () => {
                this.quitRoom();
              }
            })
        }
      }, 2000)

    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      this.playerMap = state.deskData.playerMap
      return {
        quitRoomAction: state.deskData.quitRoomAction,
        readyCountdown: state.deskData.readyCountdown,
        statue: state.deskData.statue,
        noShowCardNumber: state.deskData.noShowCardNumber,
        outCardItem: state.deskData.outCardItem,
        leftOutCardItem: state.deskData.leftOutCardItem,
        rightOutCardItem: state.deskData.rightOutCardItem,
        playerMap: state.deskData.playerMap,
        lastActiveSeatIndex: state.deskData.lastActiveSeatIndex,
        currActiveSeatIndex: state.deskData.currActiveSeatIndex,
        newCardItem: state.deskData.newCardItem,
        intendOutCard: state.deskData.intendOutCard,
        gold: state.deskData.gold,
        balanceOdds: state.deskData.balanceOdds,
      }
    })
    return this
  }
}

export default MainBoardViewModel