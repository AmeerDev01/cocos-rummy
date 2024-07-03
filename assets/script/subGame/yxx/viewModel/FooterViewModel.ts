import { instantiate, tween } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { global } from "../../../hall"
import { getUUID } from "../../../utils/tool"
import { IEvent, IProps, Yxx_Footer } from "../components/Yxx_Footer"
import config from "../config"
import { SendBet, convertToServerBetType, gameCacheData } from "../serverType"
import { SKT_MAG_TYPE, yxxWebSocketDriver } from "../socketConnect"
import { getStore } from "../store"
import { seatBet, selectChip } from "../store/actions/bet"
import { changeSeatBet } from "../store/actions/game"
import { StateType } from "../store/reducer"
import { BetData } from "../type"
import { setTipType } from "../store/actions/gameFlow"

@StoreInject(getStore())
class FooterViewModel extends ViewModel<Yxx_Footer, IProps, IEvent> {
  constructor() {
    super('Yxx_Footer')
  }

  protected begin() {
    this.setEvent({
      selectChip: (value: number) => {
        this.dispatch(selectChip(value));
      },

      /**重复下注，主要 BetAreaViewModel 也有相同的代码 */
      repeatLastBet: (lastBet: BetData[]) => {
        if (lastBet && lastBet.length === 0) {
          // let remind_repeat= this.comp.getRemindRepeatNode()
          // if (!remind_repeat) { return };
          // remind_repeat.active = true;
          // tween(remind_repeat)
          // .delay(2)
          // .call(() => { 
          //   remind_repeat.active  = false;
          // })
          // .start()
          this.dispatch(setTipType({
            time: Date.now() + Math.random(),
            type: 1,
          }))

          return
        }
        if (config.isTest) {
          lastBet.forEach(v => {
            this.dispatch(seatBet(v));
            this.dispatch(changeSeatBet(v));
          })
        } else {
          lastBet.forEach(betData => {
            const chips: number[] = [];
            this.splitChip(betData.betAmount, chips)

            chips.forEach(chip => {
              let gold = this.comp.props.myHead.gold;
              if (this.comp.getLockBet(gold)) {
                return;
              }
              if (chip > gold) {
                return;
              }
              const chipBet = instantiate(betData);
              chipBet.meTotalBetAmount = 0;
              chipBet.totalBetAmount = 0;
              chipBet.isMyBet = true;
              chipBet.betAmount = chip;
              chipBet.betId = getUUID();
              chipBet.time = Date.now() + Math.random();

              gold -= chip;

              if (config.preBet) {
                this.dispatch(seatBet(chipBet));
                this.dispatch(changeSeatBet(chipBet));
              }

              const sendBet: SendBet = {
                roomId: gameCacheData.roomId,
                memberId: this.comp.props.myHead.userId,
                memberName: this.comp.props.myHead.name,
                gold: chip,
                betType: convertToServerBetType(betData.betType),
                betId: chipBet.betId,
              }

              // 下注信息发送给服务器
              yxxWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.LAUNCHER_BET, sendBet);
            })
          })

        }
      },
      openShop: () => {
        global.openShop();
      }
    })
  }

  /**
   * 根据下注拆分筹码
   * @param totalBetAmount 
   */
  private splitChip(totalBetAmount: number, chips: number[]) {
    if (totalBetAmount < config.chipTypes[0].value) {
      return;
    }
    for (let i = config.chipTypes.length - 1; i >= 0; i--) {
      const element = config.chipTypes[i];
      if (totalBetAmount >= element.value) {
        chips.push(element.value);
        totalBetAmount -= element.value;
        break;
      }
    }
    this.splitChip(totalBetAmount, chips);
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        myHead: state.game.myHead,
        lastBet: state.bet.lastBet,
        newBetData: state.bet.newBetData,
        selectChip: state.bet.selectChip,
        onlineNumber: state.game.onlineNumber,
        animationStatus: state.gameFlow.animationStatus,
        gameStatus: state.gameFlow.gameStatus,
        powers: state.game.powers,
      }
    })
    return this
  }
}

export default FooterViewModel