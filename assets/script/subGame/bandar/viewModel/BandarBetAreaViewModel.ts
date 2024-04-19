import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_betArea, IProps, IEvent } from "../components/Bandar_betArea"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import { gameCacheData, MemberData, MemberInfoVo } from '../type';
import config from '../config';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class BetAreaViewModel extends ViewModel<Bandar_betArea, IProps, IEvent> {


    constructor() {
        super('Bandar_betArea')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        const storeState = this.store.getState() as StateType;
        this.inject({
          winArea:storeState.pokerDetail.winArea,
        }, (state: StateType) => {
          return {
            gameStatus:state.game.gameStatus,
            gold:state.game.gold,
            /**选择的筹码 */
            selectChip: state.bet.selectChip,
            myInfo:state.game.myInfo,
            newBetData:state.bet.newBetData,
            winArea:state.pokerDetail.winArea,
            goldData:state.bet.goldData,
            cardRate:state.bet.cardRate,
            allWinUsers:state.bet.allWinUsers,
            lastBet: state.bet.lastBet,
            tips: state.game.tips,
            memberBet: state.bet.memberBet,
            cancelBetData:state.bet.cancelBetData,
          }
        })
        return this
      }

       /**
   * 初始化下注
   * @param memberBetDetail 
   * @param seats 
   */
  // public initBetData(memberBetDetail: MemberData[], seats: MemberInfoVo[]): void {
  //   if (!memberBetDetail) return;
  //   memberBetDetail.forEach(v => {
  //     const seat = seats.find(seat => seat.memberId === v.memberId);
  //     const index = seat ? seat.index : config.gameOption.lookOnIndex;
  //     const betData = convertBetData(v, index);
  //     betData.isMyBet = gameCacheData.memberId === betData.userId;
  //     betData.isFly = false;

  //     this.dispatch(seatBet(betData));
  //     this.dispatch(changeSeatBet(betData));
  //   });

  // }

}

export default BetAreaViewModel

