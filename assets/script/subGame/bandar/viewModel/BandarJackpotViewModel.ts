import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_jackpot, IProps, IEvent } from "../components/Bandar_jackpot"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class JackpotViewModel extends ViewModel<Bandar_jackpot, IProps, IEvent> {


    constructor() {
        super('Bandar_jackpot')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            jackpotWin:state.history.jackpotWin,
            jackpotCard:state.pokerDetail.jackpotCard,
            jackpot:state.game.jackpot,
            trigJackpot:state.game.trigJackpot,
          }
        })
        return this
      }

}

export default JackpotViewModel
