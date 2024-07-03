import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BandarQiuQiu_footer, IProps, IEvent } from "../components/BandarQiuQiu_footer"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class FooterViewModel extends ViewModel<BandarQiuQiu_footer, IProps, IEvent> {


    constructor() {
        super('BandarQiuQiu_footer')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
           gold:state.game.gold,
          //  lastBet:state.bet.lastBet,
           gameStatus:state.game.gameStatus,
            // allWinUsers: state.bet.allWinUsers,
            myInfo: state.game.myInfo,
            onlineNum: state.game.onlineNum,
            tips:state.game.tips,
          }
        })
        return this
      }

}

export default FooterViewModel
