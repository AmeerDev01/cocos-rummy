import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_trigJackpot, IProps, IEvent } from "../components/Bandar_trigJackpot"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class TrigJackpotViewModel extends ViewModel<Bandar_trigJackpot, IProps, IEvent> {


    constructor() {
        super('Bandar_trigJackpot')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
           trigJackpot:state.game.trigJackpot
          }
        })
        return this
      }

}

export default TrigJackpotViewModel
