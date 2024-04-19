import { log } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { global } from "../../../hall"
import { IEvent, IProps, Yxx_BetArea } from "../components/Yxx_BetArea"
import config from "../config"
import { MebmerBet, SendBet, convertBetData, convertToServerBetType, gameCacheData } from "../serverType"
import { SKT_MAG_TYPE, sktInstance } from "../socketConnect"
import { getStore } from "../store"
import { clearBet, seatBet } from "../store/actions/bet"
import { changeSeatBet } from "../store/actions/game"
import { StateType } from "../store/reducer"
import { Bet, BetData, HeadType } from "../type"

@StoreInject(getStore())
class BetAreaViewModel extends ViewModel<Yxx_BetArea, IProps, IEvent> {
  constructor() {
    super('Yxx_BetArea')
  }

  protected begin() {
    this.setEvent({
      /** 自己下注，FooterViewModel 也有相同代码 */
      myBet: (betData: BetData) => {
        if (config.isTest) {
          this.dispatch(seatBet(betData));
          this.dispatch(changeSeatBet(betData));
        } else {
          if (config.preBet) {
            this.dispatch(seatBet(betData));
            this.dispatch(changeSeatBet(betData));
          }
          const sendBet: SendBet = {
            roomId: gameCacheData.roomId,
            memberId: this.comp.props.myHead.userId,
            memberName: this.comp.props.myHead.name,
            gold: betData.betAmount,
            betType: convertToServerBetType(betData.betType),
            betId: betData.betId,
          }

          // 下注信息发送给服务器
          sktInstance.sendSktMessage(SKT_MAG_TYPE.LAUNCHER_BET, sendBet);
        }

      },
      clearBet: () => {
        this.dispatch(clearBet(false));
      },
      openShop: () => {
        global.openShop();
      },
      sendGameShowEvent: () => {
        sktInstance.sendSktMessage(SKT_MAG_TYPE.GAME_SHOW, { roomId: gameCacheData.roomId });
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        newBetData: state.bet.newBetData,
        selectChip: state.bet.selectChip,
        myHead: state.game.myHead,
        gameStatus: state.gameFlow.gameStatus,
        newResult: state.gameFlow.newResult,
        animationStatus: state.gameFlow.animationStatus,
        powers: state.game.powers,
        cancelBetData: state.bet.cancelBetData,
      }
    })
    return this
  }

  /**
   * 初始化下注
   * @param memberBetDetail 
   * @param seats 
   */
  public initBetData(memberBetDetail: MebmerBet[], seats: HeadType[]): void {
    if (!memberBetDetail) return;
    memberBetDetail.forEach(v => {
      const seat = seats.find(seat => seat.userId === v.memberId);
      const index = seat ? seat.index : config.gameOption.lookOnIndex;
      const betData = convertBetData(v, index);
      betData.isMyBet = gameCacheData.memberId === betData.userId;
      betData.isFly = false;

      this.dispatch(seatBet(betData));
      this.dispatch(changeSeatBet(betData));
    });

  }
}

export default BetAreaViewModel