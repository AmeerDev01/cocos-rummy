import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_online, IProps, IEvent } from "../components/Bandar_online"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class OnlineViewModel extends ViewModel<Bandar_online, IProps, IEvent> {


    constructor() {
        super('Bandar_online')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            onlineNum:state.game.onlineNum,
            newBetData:state.bet.newBetData,
          }
        })
        return this
      }

}

export default OnlineViewModel
